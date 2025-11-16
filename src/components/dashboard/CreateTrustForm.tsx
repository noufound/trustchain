'use client';

import { useState } from 'react';
import { 
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ExclamationCircleIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import { formatUnits, parseUnits } from 'viem';
import { useWriteContract } from 'wagmi';
import { USDTABI } from '@/abi/USDT';
import { waitForTransactionReceipt } from 'wagmi/actions';
import { config as wagmiConfig } from '@/wagmi'
import { TokenVestingFactoryABI } from '@/abi/TokenVestingFactory';

// 步骤类型
type Step = 1 | 2 | 3 | 4;

// 托管方式类型
type ReleaseMethod = 'linear' | 'event' | null;

// 受益人接口

interface BeneficiaryInfo {
  name: string;
  account: string;
  amount: bigint;         // 领取的代币数量
  extracted: bigint;       // 已领取的代币数量
  revoked: boolean;
}


interface Beneficiary {
  id: string;
  name: string;
  address: string;
  amount: string;
}

// 表单数据接口
interface FormData {
  name: string;
  totalAmount: string;
  beneficiaries: Beneficiary[];
  releaseMethod: ReleaseMethod;
  
  // 线性释放相关
  linearFrequency: 'minute' | 'daily' | 'weekly' | 'monthly' | 'yearly' | '';
  // linearType: 'percentage' | 'fixed' | '';
  // linearValue: string;
  
  // 事件释放相关
  eventTriggers: Array<{
    id: string;
    eventName: string;
    releaseType: 'percentage' | 'fixed';
    releaseValue: string;
  }>;
}

// 错误信息接口
interface ValidationErrors {
  name?: string;
  totalAmount?: string;
  beneficiaries?: string;
  beneficiaryAmounts?: string;
  releaseMethod?: string;
  linearFrequency?: string;
  linearType?: string;
  linearValue?: string;
  eventTriggers?: string;
}

const initialFormData: FormData = {
  name: '',
  totalAmount: '',
  beneficiaries: [{ id: Date.now().toString(), name: '', address: '', amount: '' }],
  releaseMethod: null,
  linearFrequency: '',
  //linearType: '',
  //linearValue: '',
  eventTriggers: [],
};

type EthereumAddress = `0x${string}`;

const decimals = 18;

export default function CreateTrustForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const client = wagmiConfig.getClient()
  const { writeContractAsync: writeContract } = useWriteContract()

  // 步骤配置
  const steps = [
    { number: 1, title: '信托金额' },
    { number: 2, title: '受益人信息' },
    { number: 3, title: '托管方式' },
    { number: 4, title: '确认信息' },
  ];

  // 更新表单数据
  const updateFormData = (field: string, value: string | ReleaseMethod) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 清除该字段的错误
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 添加受益人
  const addBeneficiary = () => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: [...prev.beneficiaries, { id: Date.now().toString(), name: '', address: '', amount: '' }],
    }));
    if (errors.beneficiaries || errors.beneficiaryAmounts) {
      setErrors((prev) => ({ ...prev, beneficiaries: undefined, beneficiaryAmounts: undefined }));
    }
  };

  // 更新受益人信息
  const updateBeneficiary = (id: string, field: 'name' | 'address' | 'amount', value: string) => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: prev.beneficiaries.map((b) =>
        b.id === id ? { ...b, [field]: value } : b
      ),
    }));
    if (errors.beneficiaries || errors.beneficiaryAmounts) {
      setErrors((prev) => ({ ...prev, beneficiaries: undefined, beneficiaryAmounts: undefined }));
    }
  };

  // 删除受益人
  const removeBeneficiary = (id: string) => {
    if (formData.beneficiaries.length > 1) {
      setFormData((prev) => ({
        ...prev,
        beneficiaries: prev.beneficiaries.filter((b) => b.id !== id),
      }));
    }
  };

  // 验证步骤1：信托金额
  const validateStep1 = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = '请输入信托名称';
    }
    
    if (!formData.totalAmount || formData.totalAmount.trim() === '') {
      newErrors.totalAmount = '请输入信托总金额';
    } else if (parseFloat(formData.totalAmount) <= 0) {
      newErrors.totalAmount = '金额必须大于0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 验证步骤2：受益人地址和金额
  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    // 检查是否有空名称
    const hasEmptyName = formData.beneficiaries.some(b => !b.name || b.name.trim() === '');
    if (hasEmptyName) {
      newErrors.beneficiaries = '请填写所有受益人名称';
      setErrors(newErrors);
      return false;
    }
    
    // 检查是否有空地址
    const hasEmptyAddress = formData.beneficiaries.some(b => !b.address || b.address.trim() === '');
    if (hasEmptyAddress) {
      newErrors.beneficiaries = '请填写所有受益人地址';
      setErrors(newErrors);
      return false;
    }
    
    // 验证每个地址格式
    for (const beneficiary of formData.beneficiaries) {
      if (!beneficiary.address.startsWith('0x')) {
        newErrors.beneficiaries = '所有地址必须以0x开头';
        setErrors(newErrors);
        return false;
      }
      if (beneficiary.address.length !== 42) {
        newErrors.beneficiaries = '所有地址长度必须为42个字符';
        setErrors(newErrors);
        return false;
      }
    }
    
    // 检查是否有重复地址
    const addresses = formData.beneficiaries.map(b => b.address.toLowerCase());
    const uniqueAddresses = new Set(addresses);
    if (addresses.length !== uniqueAddresses.size) {
      newErrors.beneficiaries = '受益人地址不能重复';
      setErrors(newErrors);
      return false;
    }
    
    // 检查是否有空金额
    const hasEmptyAmount = formData.beneficiaries.some(b => !b.amount || b.amount.trim() === '');
    if (hasEmptyAmount) {
      newErrors.beneficiaryAmounts = '请填写所有受益人的金额';
      setErrors(newErrors);
      return false;
    }
    
    // 检查金额是否都大于0
    for (const beneficiary of formData.beneficiaries) {
      const amount = parseFloat(beneficiary.amount);
      if (isNaN(amount) || amount <= 0) {
        newErrors.beneficiaryAmounts = '所有受益人金额必须大于0';
        setErrors(newErrors);
        return false;
      }
    }
    
    // 检查金额总和是否等于信托总金额
    const totalBeneficiaryAmount = formData.beneficiaries.reduce((sum, b) => sum + parseFloat(b.amount), 0);
    const trustTotalAmount = parseFloat(formData.totalAmount);
    
    if (Math.abs(totalBeneficiaryAmount - trustTotalAmount) > 0.01) {
      newErrors.beneficiaryAmounts = `所有受益人金额之和（${totalBeneficiaryAmount.toLocaleString()}）必须等于信托总金额（${trustTotalAmount.toLocaleString()}）`;
      setErrors(newErrors);
      return false;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 验证步骤3：托管方式
  const validateStep3 = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.releaseMethod) {
      newErrors.releaseMethod = '请选择托管方式（线性释放或事件释放）';
      setErrors(newErrors);
      return false;
    }
    
    if (formData.releaseMethod === 'linear') {
      if (!formData.linearFrequency) {
        newErrors.linearFrequency = '请选择释放频率';
      }
      // if (!formData.linearType) {
      //   newErrors.linearType = '请选择释放方式';
      // }
      // if (!formData.linearValue || formData.linearValue.trim() === '') {
      //   newErrors.linearValue = '请输入释放数值';
      // } else if (parseFloat(formData.linearValue) <= 0) {
      //   newErrors.linearValue = '数值必须大于0';
      // } else if (formData.linearType === 'percentage' && parseFloat(formData.linearValue) > 100) {
      //   newErrors.linearValue = '比例不能超过100%';
      // }
    } else if (formData.releaseMethod === 'event') {
      if (formData.eventTriggers.length === 0) {
        newErrors.eventTriggers = '请至少添加一个事件触发器';
      } else {
        // 验证每个事件触发器
        for (const event of formData.eventTriggers) {
          if (!event.eventName || event.eventName.trim() === '') {
            newErrors.eventTriggers = '所有事件必须填写事件名称';
            break;
          }
          if (!event.releaseValue || event.releaseValue.trim() === '') {
            newErrors.eventTriggers = '所有事件必须填写释放数值';
            break;
          }
          if (parseFloat(event.releaseValue) <= 0) {
            newErrors.eventTriggers = '所有事件的释放数值必须大于0';
            break;
          }
          if (event.releaseType === 'percentage' && parseFloat(event.releaseValue) > 100) {
            newErrors.eventTriggers = '比例不能超过100%';
            break;
          }
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 添加事件触发器
  const addEventTrigger = () => {
    const newEvent = {
      id: Date.now().toString(),
      eventName: '',
      releaseType: 'percentage' as const,
      releaseValue: '',
    };
    setFormData((prev) => ({
      ...prev,
      eventTriggers: [...prev.eventTriggers, newEvent],
    }));
    // 清除事件错误
    if (errors.eventTriggers) {
      setErrors((prev) => ({ ...prev, eventTriggers: undefined }));
    }
  };

  // 更新事件触发器
  const updateEventTrigger = (id: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      eventTriggers: prev.eventTriggers.map((event) =>
        event.id === id ? { ...event, [field]: value } : event
      ),
    }));
    // 清除事件错误
    if (errors.eventTriggers) {
      setErrors((prev) => ({ ...prev, eventTriggers: undefined }));
    }
  };

  // 删除事件触发器
  const removeEventTrigger = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      eventTriggers: prev.eventTriggers.filter((event) => event.id !== id),
    }));
  };

  // 下一步
  const handleNext = () => {
    let isValid = false;
    
    switch (currentStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      default:
        isValid = true;
    }
    
    if (isValid && currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as Step);
      // 清除所有错误
      setErrors({});
    }
  };

  // 上一步
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
      // 清除所有错误
      setErrors({});
    }
  };

  const approve = async (token_address: EthereumAddress, spender: EthereumAddress, value: bigint) => {
    try {
      const txh = await writeContract({
        address: token_address,
        abi: USDTABI,
        functionName: 'approve',
        args: [spender, value]
      });

      const transactionReceipt = await waitForTransactionReceipt(wagmiConfig, {
        hash: txh,
      });

      if (transactionReceipt.status == 'success') {
        console.log('approve success');
        return true;
      }
      return false;
    } catch (error) {
      console.error('approve error:', error);
      return false;
    }
  };

  const createTrust = async (factory_addr: EthereumAddress, args: any[]) => {
    try {
      const txh = await writeContract({
        address: factory_addr,
        abi: TokenVestingFactoryABI,
        functionName: 'createVesting',
        args: args
      });

      const transactionReceipt = await waitForTransactionReceipt(wagmiConfig, {
        hash: txh,
      });

      if (transactionReceipt.status == 'success') {
        console.log('create trust success');
        return true;
      }
      return false;
    } catch (error) {
      console.error('createTrust error:', error);
      throw error; // 重新抛出错误以便上层处理
    }
  };

  // 提交表单
const handleSubmit = async () => {
  // 环境变量检查
  if (!process.env.NEXT_PUBLIC_USDT_ADDRESS || !process.env.NEXT_PUBLIC_FACTORY_ADDRESS) {
    toast.error('环境变量未正确配置');
    return;
  }

  const _token = process.env.NEXT_PUBLIC_USDT_ADDRESS as EthereumAddress;
  const factory_addr = process.env.NEXT_PUBLIC_FACTORY_ADDRESS as EthereumAddress;
  const _name = formData.name;
  const _cliff = BigInt(0);
  const _start = BigInt(0); // 使用当前时间戳
  const _duration = BigInt(86400);
  const _slicePeriodSeconds = formData.linearFrequency == 'minute' ? BigInt(60) :
    formData.linearFrequency == 'daily' ? BigInt(86400) : 
    formData.linearFrequency == 'weekly' ? BigInt(604800) :
    formData.linearFrequency == 'monthly' ? BigInt(2592000) :
    formData.linearFrequency == 'yearly' ? BigInt(31536000) : BigInt(60);

  // 构建受益人数组并验证
  const beneficiarys: [string, string, bigint][] = [];
  try {
    for (let i = 0; i < formData.beneficiaries.length; i++) {
      const beneficiary = formData.beneficiaries[i];
      const amount = parseUnits(beneficiary.amount, decimals);
      beneficiarys.push([
        beneficiary.name, 
        beneficiary.address, 
        amount
      ]);
    }
  } catch (error) {
    toast.error('受益人金额格式错误');
    return;
  }

  const args = [
    _token,               // address _token
    _name,                // string memory _name
    _cliff,               // uint256 _cliff
    _start,               // uint256 _start
    _duration,            // uint256 _duration
    _slicePeriodSeconds,  // uint256 _slicePeriodSeconds
    beneficiarys          // BeneficiaryBaseInfo[] memory _beneficiarys
  ] as const;

  console.log('准备调用合约，参数:', {
    _token,
    _name,
    _cliff: _cliff.toString(),
    _start: _start.toString(),
    _duration: _duration.toString(),
    _slicePeriodSeconds: _slicePeriodSeconds.toString(),
    beneficiarys
  });

  try {
    // 先进行 approve 操作
    const totalAmount = parseUnits(formData.totalAmount, decimals);
    toast.loading('正在授权代币...');
    
    const approveResult = await approve(_token, factory_addr, totalAmount);
    if (!approveResult) {
      toast.dismiss();
      toast.error('代币授权失败');
      return;
    }

    toast.dismiss();
    toast.success('代币授权成功');
    
    // 创建信托
    toast.loading('正在创建信托...');
    const result = await createTrust(factory_addr, [...args]);
    
    if (result) {
      toast.dismiss();
      toast.success('信托创建成功！', {
        duration: 3000,
        position: 'top-center',
      });
      setCurrentStep(1)
      setFormData(initialFormData)
    } else {
      toast.dismiss();
      toast.error('信托创建失败');
    }
  } catch (error: any) {
    toast.dismiss();
    console.error('创建信托失败:', error);
    toast.error(`创建信托失败: ${error.shortMessage || error.message || '未知错误'}`);
  }
};

  // 计算释放计划
  // const calculateReleaseSchedule = () => {
  //   const schedules = [];
    
  //   if (formData.releaseMethod === 'linear') {
  //     const amount = parseFloat(formData.totalAmount);
  //     const value = parseFloat(formData.linearValue);
      
  //     if (formData.linearType === 'percentage') {
  //       const releaseAmount = (amount * value) / 100;
  //       schedules.push({
  //         type: '线性释放',
  //         frequency: getFrequencyText(formData.linearFrequency),
  //         amount: releaseAmount.toFixed(2),
  //         percentage: value,
  //       });
  //     } else {
  //       schedules.push({
  //         type: '线性释放',
  //         frequency: getFrequencyText(formData.linearFrequency),
  //         amount: value,
  //         percentage: ((value / amount) * 100).toFixed(2),
  //       });
  //     }
  //   } else if (formData.releaseMethod === 'event') {
  //     formData.eventTriggers.forEach((event) => {
  //       const amount = parseFloat(formData.totalAmount);
  //       const value = parseFloat(event.releaseValue);
        
  //       if (event.releaseType === 'percentage') {
  //         const releaseAmount = (amount * value) / 100;
  //         schedules.push({
  //           type: '事件释放',
  //           event: event.eventName,
  //           amount: releaseAmount.toFixed(2),
  //           percentage: value,
  //         });
  //       } else {
  //         schedules.push({
  //           type: '事件释放',
  //           event: event.eventName,
  //           amount: value,
  //           percentage: ((value / amount) * 100).toFixed(2),
  //         });
  //       }
  //     });
  //   }
    
  //   return schedules;
  // };

  // const getFrequencyText = (frequency: string) => {
  //   const map: Record<string, string> = {
  //     daily: '每日',
  //     weekly: '每周',
  //     monthly: '每月',
  //     yearly: '每年',
  //   };
  //   return map[frequency] || frequency;
  // };

  return (
    <>
      <Toaster />
      <div className="container p-0" style={{maxWidth: '900px'}}>
        {/* 步骤指示器 */}
        <div className="stepper mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className={`step-item ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
              <div className="step-number">
                {currentStep > step.number ? <CheckIcon style={{width: '1.5rem', height: '1.5rem'}} /> : step.number}
              </div>
              <div className="step-label">{step.title}</div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </div>
          ))}
        </div>

        {/* 表单内容 */}
        <div className="card dashboard-card">
          <div className="card-body p-4">
            {/* 步骤1: 信托金额 */}
            {currentStep === 1 && (
              <div className="fade-in">
                <h4 className="fw-bold mb-4">输入基本信息</h4>
                <div className="mb-4">
                  <label className="form-label fw-medium">
                    信托名称 <span className="text-danger">*</span>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="请输入名称"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && (
                      <div className="invalid-feedback d-flex align-items-center">
                        <ExclamationCircleIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium">
                    信托总金额 <span className="text-danger">*</span>
                  </label>
                  <div className="input-group input-group-lg">
                    <input
                      type="number"
                      value={formData.totalAmount}
                      onChange={(e) => updateFormData('totalAmount', e.target.value)}
                      placeholder="请输入金额"
                      className={`form-control ${errors.totalAmount ? 'is-invalid' : ''}`}
                    />
                    <span className="input-group-text">USDC</span>
                    {errors.totalAmount && (
                      <div className="invalid-feedback d-flex align-items-center">
                        <ExclamationCircleIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                        {errors.totalAmount}
                      </div>
                    )}
                  </div>
                  <div className="form-text">此金额将根据您设置的规则分配给受益人</div>
                </div>

                {formData.totalAmount && !errors.totalAmount && (
                  <div className="alert alert-info">
                    <strong>总金额：</strong>
                    {parseFloat(formData.totalAmount).toLocaleString()} USDC
                  </div>
                )}
              </div>
            )}

            {/* 步骤2: 受益人地址和金额 */}
            {currentStep === 2 && (
              <div className="fade-in">
                <h4 className="fw-bold mb-4">输入受益人信息</h4>
                
                {errors.beneficiaries && (
                  <div className="alert alert-danger d-flex align-items-center mb-3">
                    <ExclamationCircleIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-2" />
                    {errors.beneficiaries}
                  </div>
                )}
                
                {errors.beneficiaryAmounts && (
                  <div className="alert alert-danger d-flex align-items-center mb-3">
                    <ExclamationCircleIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-2" />
                    {errors.beneficiaryAmounts}
                  </div>
                )}
                
                <div className="vstack gap-3">
                  {formData.beneficiaries.map((beneficiary, index) => (
                    <div key={beneficiary.id} className="card border">
                      <div className="card-body">
                        <label className="form-label fw-medium small mb-2">
                          受益人 {index + 1} <span className="text-danger">*</span>
                        </label>
                        
                        {/* 受益人名称 */}
                        <div className="mb-2">
                          <label className="form-label small text-muted">受益人名称 <span className="text-danger">*</span></label>
                          <input
                            type="text"
                            value={beneficiary.name}
                            onChange={(e) => updateBeneficiary(beneficiary.id, 'name', e.target.value)}
                            placeholder="请输入受益人姓名"
                            className="form-control"
                          />
                        </div>
                        
                        {/* 受益人地址 */}
                        <div className="mb-2">
                          <label className="form-label small text-muted">钱包地址 <span className="text-danger">*</span></label>
                          <input
                            type="text"
                            value={beneficiary.address}
                            onChange={(e) => updateBeneficiary(beneficiary.id, 'address', e.target.value)}
                            placeholder="0x..."
                            className="form-control"
                            style={{fontFamily: 'monospace'}}
                          />
                        </div>
                        
                        {/* 受益人金额 */}
                        <div className="mb-2">
                          <label className="form-label small text-muted">分配金额 <span className="text-danger">*</span></label>
                          <div className="input-group">
                            <input
                              type="number"
                              value={beneficiary.amount}
                              onChange={(e) => updateBeneficiary(beneficiary.id, 'amount', e.target.value)}
                              placeholder="请输入金额"
                              className="form-control"
                            />
                            <span className="input-group-text">USDC</span>
                          </div>
                        </div>
                        
                        {/* 操作按钮 */}
                        <div className="d-flex gap-2 justify-content-end">
                          {/* 只在最后一行显示添加按钮 */}
                          {index === formData.beneficiaries.length - 1 && (
                            <button
                              type="button"
                              className="btn btn-sm addEventBtn"
                              onClick={addBeneficiary}
                            >
                              <PlusIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                              添加受益人
                            </button>
                          )}
                          
                          {/* 可以删除（但至少保留一个） */}
                          {formData.beneficiaries.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeBeneficiary(beneficiary.id)}
                            >
                              <XMarkIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                              删除
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 汇总信息 */}
                {formData.beneficiaries.length > 0 && formData.beneficiaries.every(b => b.name && b.address && b.amount) && (
                  <div className="alert alert-info mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>已添加 {formData.beneficiaries.length} 个受益人</strong>
                      </div>
                      <div>
                        <span className="text-muted small">金额汇总：</span>
                        <strong className="ms-2">
                          {formData.beneficiaries.reduce((sum, b) => sum + (parseFloat(b.amount) || 0), 0).toLocaleString()} USDC
                        </strong>
                        <span className="text-muted small ms-2">/ {parseFloat(formData.totalAmount || '0').toLocaleString()} USDC</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="form-text mt-3">
                  所有受益人的金额之和必须等于信托总金额（{parseFloat(formData.totalAmount || '0').toLocaleString()} USDC）
                </div>
              </div>
            )}

            {/* 步骤3: 托管方式 */}
            {currentStep === 3 && (
              <div className="fade-in">
                <h4 className="fw-bold mb-4">选择托管方式</h4>
                
                {/* 选择托管方式 */}
                {errors.releaseMethod && (
                  <div className="alert alert-danger d-flex align-items-center mb-3">
                    <ExclamationCircleIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-2" />
                    {errors.releaseMethod}
                  </div>
                )}
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div 
                      className={`card h-100 ${formData.releaseMethod === 'linear' ? 'border-2' : ''} ${errors.releaseMethod ? 'border-danger' : ''}`}
                      style={{
                        cursor: 'pointer',
                        borderColor: formData.releaseMethod === 'linear' ? 'var(--primary-color)' : undefined
                      }}
                      onClick={() => updateFormData('releaseMethod', 'linear')}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="fw-bold">线性释放</h5>
                          {formData.releaseMethod === 'linear' && (
                            <CheckIcon style={{width: '1.5rem', height: '1.5rem', color: 'var(--primary-color)'}} />
                          )}
                        </div>
                        <p className="text-muted small mb-0">
                          按固定时间周期自动释放资金
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div 
                      className={`card h-100 ${formData.releaseMethod === 'event' ? 'border-2' : ''} ${errors.releaseMethod ? 'border-danger' : ''}`}
                      style={{
                        cursor: 'pointer',
                        borderColor: formData.releaseMethod === 'event' ? 'var(--primary-color)' : undefined
                      }}
                      onClick={() => updateFormData('releaseMethod', 'event')}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="fw-bold">事件释放</h5>
                          {formData.releaseMethod === 'event' && (
                            <CheckIcon style={{width: '1.5rem', height: '1.5rem', color: 'var(--primary-color)'}} />
                          )}
                        </div>
                        <p className="text-muted small mb-0">
                          根据特定事件触发释放资金
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 线性释放配置 */}
                {formData.releaseMethod === 'linear' && (
                  <div className={`bg-light rounded-3 p-4 ${Object.keys(errors).some(key => key.startsWith('linear')) ? 'border border-danger' : ''}`}>
                    <h6 className="fw-semibold mb-3">线性释放设置</h6>
                    
                    <div className="mb-3">
                      <label className="form-label">
                        释放频率 <span className="text-danger">*</span>
                      </label>
                      <select
                        value={formData.linearFrequency}
                        onChange={(e) => updateFormData('linearFrequency', e.target.value)}
                        className={`form-select ${errors.linearFrequency ? 'is-invalid' : ''}`}
                      >
                        <option value="">请选择</option>
                        <option value="minute">每分钟</option>
                        <option value="daily">每日</option>
                        <option value="weekly">每周</option>
                        <option value="monthly">每月</option>
                        <option value="yearly">每年</option>
                      </select>
                      {errors.linearFrequency && (
                        <div className="invalid-feedback d-flex align-items-center">
                          <ExclamationCircleIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                          {errors.linearFrequency}
                        </div>
                      )}
                    </div>

                    {/* <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">
                          释放方式 <span className="text-danger">*</span>
                        </label>
                        <select
                          value={formData.linearType}
                          onChange={(e) => updateFormData('linearType', e.target.value)}
                          className={`form-select ${errors.linearType ? 'is-invalid' : ''}`}
                        >
                          <option value="">请选择</option>
                          <option value="percentage">按比例</option>
                          <option value="fixed">固定金额</option>
                        </select>
                        {errors.linearType && (
                          <div className="invalid-feedback d-flex align-items-center">
                            <ExclamationCircleIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                            {errors.linearType}
                          </div>
                        )}
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label">
                          {formData.linearType === 'percentage' ? '释放比例 (%)' : '释放金额'} <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.linearValue}
                          onChange={(e) => updateFormData('linearValue', e.target.value)}
                          placeholder={formData.linearType === 'percentage' ? '如：10' : '如：1000'}
                          className={`form-control ${errors.linearValue ? 'is-invalid' : ''}`}
                        />
                        {errors.linearValue && (
                          <div className="invalid-feedback d-flex align-items-center">
                            <ExclamationCircleIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                            {errors.linearValue}
                          </div>
                        )}
                      </div>
                    </div> */}
                  </div>
                )}

                {/* 事件释放配置 */}
                {formData.releaseMethod === 'event' && (
                  <div className={`bg-light rounded-3 p-4 ${errors.eventTriggers ? 'border border-danger' : ''}`}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="fw-semibold mb-0">事件释放设置</h6>
                    </div>

                    {errors.eventTriggers && (
                      <div className="alert alert-danger d-flex align-items-center mb-3">
                        <ExclamationCircleIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-2" />
                        {errors.eventTriggers}
                      </div>
                    )}

                    {formData.eventTriggers.length === 0 ? (
                      <p className="text-center text-muted py-4 mb-0">
                        点击&ldquo;添加事件&rdquo;开始配置事件触发器
                      </p>
                    ) : (
                      <div className="vstack gap-3">
                        {formData.eventTriggers.map((event, index) => (
                          <div key={event.id} className="card">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="fw-medium small">事件 {index + 1}</span>
                                <button
                                  type="button"
                                  onClick={() => removeEventTrigger(event.id)}
                                  className="btn btn-sm btn-outline-danger"
                                >
                                  删除
                                </button>
                              </div>
                              
                              <div className="mb-3">
                                <input
                                  type="text"
                                  value={event.eventName}
                                  onChange={(e) => updateEventTrigger(event.id, 'eventName', e.target.value)}
                                  placeholder="事件名称（如：毕业、结婚等）*"
                                  className="form-control form-control-sm"
                                />
                              </div>
                              
                              <div className="row g-2">
                                <div className="col-6">
                                  <select
                                    value={event.releaseType}
                                    onChange={(e) => updateEventTrigger(event.id, 'releaseType', e.target.value)}
                                    className="form-select form-select-sm"
                                  >
                                    <option value="percentage">按比例</option>
                                    <option value="fixed">固定金额</option>
                                  </select>
                                </div>
                                
                                <div className="col-6">
                                  <input
                                    type="number"
                                    value={event.releaseValue}
                                    onChange={(e) => updateEventTrigger(event.id, 'releaseValue', e.target.value)}
                                    placeholder={event.releaseType === 'percentage' ? '比例 (%)*' : '金额*'}
                                    className="form-control form-control-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <button
                        type="button"
                        onClick={addEventTrigger}
                        className="addEventBtn btn w-100 p-3 mt-5"
                      >
                        + 添加事件
                      </button>
                  </div>
                )}
              </div>
            )}

            {/* 步骤4: 确认信息 */}
            {currentStep === 4 && (
              <div className="fade-in">
                <h4 className="fw-bold mb-4">确认信托信息</h4>
                
                {/* 基本信息 */}
                <div className="bg-light rounded-3 p-4 mb-4">
                  <h6 className="fw-semibold mb-3">基本信息</h6>
                  
                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <p className="text-muted small mb-1">信托总金额</p>
                      <p className="h5 fw-semibold mb-0">
                        {parseFloat(formData.totalAmount).toLocaleString()} USDC
                      </p>
                    </div>
                    
                    <div className="col-md-4">
                      <p className="text-muted small mb-1">托管方式</p>
                      <p className="h5 fw-semibold mb-0">
                        {formData.releaseMethod === 'linear' ? '线性释放' : '事件释放'}
                      </p>
                    </div>
                    {
                      formData.releaseMethod === 'linear' && (
                        <div className="col-md-4">
                          <p className="text-muted small mb-1">释放频率</p>
                          <p className="h5 fw-semibold mb-0">
                            {formData.linearFrequency == 'minute' ? '每分钟' :
                            formData.linearFrequency == 'daily' ? '每日' :
                            formData.linearFrequency == 'weekly' ? '每周' :
                            formData.linearFrequency == 'monthly' ? '每月' :
                            formData.linearFrequency == 'yearly' ? '每年' : ''}
                          </p>
                        </div>
                      )
                    }
                  </div>
                  <div>
                    <p className="text-muted small mb-2">受益人列表 ({formData.beneficiaries.length}个)</p>
                    <div className="vstack gap-2">
                      {formData.beneficiaries.map((b, index) => (
                        <div key={b.id} className="d-flex justify-content-between align-items-start">
                          <div style={{flexGrow: 1}}>
                            <div className="small fw-medium mb-1">受益人 {index + 1}: {b.name}</div>
                            <code className="small">{b.address}</code>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold" style={{color: 'var(--primary-color)'}}>
                              {parseFloat(b.amount).toLocaleString()} USDC
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 释放计划明细 */}
                {/* <div className="bg-light rounded-3 p-4" style={{borderLeft: '4px solid var(--primary-color)'}}>
                  <h6 className="fw-semibold mb-3">释放计划明细</h6>
                  
                  <div className="vstack gap-2">
                    {calculateReleaseSchedule().map((schedule, index) => (
                      <div key={index} className="card">
                        <div className="card-body py-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <p className="mb-0 fw-medium">
                                {schedule.type}
                                {'frequency' in schedule && ` - ${schedule.frequency}`}
                                {'event' in schedule && ` - ${schedule.event}`}
                              </p>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 h5 fw-bold" style={{color: 'var(--primary-color)'}}>
                                {schedule.amount} USDC
                              </p>
                              <p className="mb-0 text-muted small">
                                {schedule.percentage}% 总额
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            )}

            {/* 按钮组 */}
            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="btn btn-secondary"
              >
                <ArrowLeftIcon style={{width: '1.25rem', height: '1.25rem', display: 'inline-block', verticalAlign: 'middle'}} className="me-2" />
                上一步
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn addEventBtn"
                >
                  下一步
                  <ArrowRightIcon style={{width: '1.25rem', height: '1.25rem', display: 'inline-block', verticalAlign: 'middle'}} className="ms-2" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-success px-4"
                >
                  <CheckIcon style={{width: '1.25rem', height: '1.25rem', display: 'inline-block', verticalAlign: 'middle'}} className="me-2" />
                  确认创建
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
