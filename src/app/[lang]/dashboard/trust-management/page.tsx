'use client';

import { useMemo, useState } from 'react';
import { 
  PencilSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { config as wagmiConfig } from '@/wagmi'
import { waitForTransactionReceipt } from "wagmi/actions";
import toast, { Toaster } from 'react-hot-toast';
import { TokenVestingFactoryABI } from '@/abi/TokenVestingFactory';
import { TokenVestingABI } from "@/abi/TokenVesting";
import { formatUnits } from 'viem/utils';
import { Button, Form, Input, Modal, Space, Tag} from 'antd';


interface TokenVestingBaseInfo {
  addr: string;
  name: string;
  vestingScheduleId: number;
  start: number;
  cliff: number;
  duration: number;
  slicePeriodSeconds: number;
  amountTotal: bigint;
  extractedTotal: bigint;
  vestedTotal: bigint;
  state: number;
}

interface BeneficiaryInfo {
  name: string;
  account: string;
  amount: bigint;
  extracted: bigint;
  revoked: boolean;
}

interface TokenVestingInfo {
  baseInfo: TokenVestingBaseInfo;
  beneficiaries: BeneficiaryInfo[];
}

interface RevokeInfo {
  vesting_addr: string;
  beneficiary: BeneficiaryInfo;
}


type EthereumAddress = `0x${string}`;

const decimals = 18;

const formatToTwoDecimals = (amount:bigint, dec: number): string => {
  const num = parseFloat(formatUnits(amount, decimals));
  return isNaN(num) ? '0.00' : num.toFixed(2);
};

const formatTimestampToDate = (timestamp: number): string => {
  if (!timestamp) return '-';
  
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <Input placeholder="请输入修改理由" />
      <br />
    </>
  ),
  onOk() {
    console.log('OK');
  },
  onCancel() {
    console.log('Cancel');
  },
};

export default function TrustManagementPage() {


  const [form] = Form.useForm();
  const client = wagmiConfig.getClient()
  const { writeContractAsync: writeContract } = useWriteContract()
    
  //wagmi
  const { address: userAddress, isConnected } = useAccount(); // 检查钱包连接状态
  const { data: allMyTrustPlans, isLoading, refetch: refetchAllMyTrustPlans } = useReadContract({  // 已质押 NFT 数量
    address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS as EthereumAddress,
    abi: TokenVestingFactoryABI,
    functionName: 'getUserAllVestingCreated',
    args: [userAddress]
  })

  const [openRevoke, setOpenRevoke] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [revokeInfo, setRevokeInfo] = useState<RevokeInfo | null>(null);


  // 处理链上数据转换为前端可用格式
  const processedTrustPlans = useMemo(() => {
    if (!allMyTrustPlans || !Array.isArray(allMyTrustPlans)) return [];
    return (allMyTrustPlans as unknown as TokenVestingInfo[]).map(trust => {
      const {baseInfo, beneficiaries} = trust as TokenVestingInfo;
      // 这里需要根据实际业务逻辑计算各个字段值
      // 示例数据，需替换为真实计算逻辑
      const formattedId = baseInfo.vestingScheduleId.toString().padStart(4, '0');

      return {
        ...trust,
        id: formattedId,
        status: baseInfo.state == 0 ? '待开始' : baseInfo.state == 1 ? '进行中' : '已完成',
        releaseType: '线性释放'
      }
    });
  }, [allMyTrustPlans]);

  const handleOk = () => {
    form.validateFields()
    .then(async values => {
      
      let recover = values.recover;
      if (!recover.startsWith('0x')) {
        toast.dismiss()
        toast.error('地址必须以0x开头');
        return;
      }
      if (recover.length !== 42) {
        toast.dismiss()
        toast.error('地址长度必须为42个字符');
        return;
      }

      if (revokeInfo != null) {
        setConfirmLoading(true);
        try {
          // 进行 撤销 操作
          toast.dismiss();
          toast.loading('正在撤销受益人...');
          const result = await revoke(recover, revokeInfo);
          if (result) {
            toast.dismiss();
            toast.success('撤销受益人成功！', {
              duration: 3000,
              position: 'top-center',
            });
          } else {
            toast.dismiss();
            toast.error('撤销受益人失败');
          }
        } catch (error: any) {
          toast.dismiss();
          console.error('撤销受益人失败:', error);
          toast.error(`撤销受益人失败: ${error.shortMessage || error.message || '未知错误'}`);
        }

        setConfirmLoading(false);
        setOpenRevoke(false);
        setRevokeInfo(null)
      }
      else {
        toast.dismiss()
        toast.error('请选择要撤销的受益人');
        return;
      }
    })
    .catch(info => {
      console.log('验证失败:', info);
    });
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpenRevoke(false);
    setRevokeInfo(null)
  };

  const revoke = async (recover:string, info: RevokeInfo) => {
    try {
      const txh = await writeContract({
        address: info.vesting_addr as EthereumAddress,
        abi: TokenVestingABI,
        functionName: 'revoke',
        args: [recover, info.beneficiary.account],
        account: userAddress,
      });

      const transactionReceipt = await waitForTransactionReceipt(wagmiConfig, {
        hash: txh,
      });

      if (transactionReceipt.status == 'success') {
        console.log('revoke success');
        return true;
      }
      return false;
    } catch (error) {
      console.error('revoke error:', error);
      throw error; // 重新抛出错误以便上层处理
    }
  }

  return (
    <>
      <Toaster />
      <div className="p-4">
        {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">信托管理</h1>
        <p className="text-muted">管理和修改您创建的信托</p>
      </div>

      {/* 信托列表 */}
      <div className="row g-3">
        {isLoading ? (
          <span className="text-center">数据加载中...</span>
        ) : processedTrustPlans.length > 0 ? (
          processedTrustPlans.map((trust) => (
            <div key={trust.id} className="col-md-6">
              <div className="card dashboard-card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h5 className="fw-bold mb-1">{trust.baseInfo.name}</h5>
                      <p className="text-muted small mb-0">ID: {trust.id}</p>
                    </div>
                    <span className={`badge ${trust.status === '进行中' ? 'bg-success' : 'bg-secondary'}`}>
                      {trust.status}
                    </span>
                  </div>

                  {/* 受益人信息 */}
                  <div className="mb-3">
                    <p className="small text-muted mb-1">受益人:</p>
                    {
                      trust.beneficiaries.map((beneficiary, index) => (
                        <div key={index} className="row mb-1">
                          <div className='col-md-4'>
                            {beneficiary.name}
                          </div>
                          <div className='col-md-4'>
                            {formatToTwoDecimals(beneficiary.amount, decimals)}
                          </div>
                          <div className='col-md-4'>
                            <div style={{display:'flex'}} className='justify-content-end'>
                              {
                                beneficiary.revoked ? <Tag color="error">已撤销</Tag> :
                                <Button danger size='small' onClick={()=>{
                                  setRevokeInfo({
                                    vesting_addr: trust.baseInfo.addr,
                                    beneficiary: beneficiary
                                  })
                                  setOpenRevoke(true)
                                }}>撤销</Button>
                              }
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  {/* 资金信息 */}
                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <div className="bg-light p-2 rounded">
                        <p className="small text-muted mb-1">总金额</p>
                        <p className="fw-bold mb-0">{formatToTwoDecimals(trust.baseInfo.amountTotal,decimals)} USDC</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-light p-2 rounded">
                        <p className="small text-muted mb-1">已释放</p>
                        <p className="fw-bold text-success mb-0">{formatToTwoDecimals(trust.baseInfo.vestedTotal,decimals)} USDC</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <small className="text-muted">创建时间: {formatTimestampToDate(parseInt(trust.baseInfo.start.toString()))}</small>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span className="text-center">暂无信托计划</span>
        )}
        <Modal
          title={
            <div className="d-flex align-items-center">
              <ExclamationCircleFilled className="me-2 text-warning" />
              <span>撤销受益人</span>
            </div>
          }
          open={openRevoke}
          onOk={handleOk}
          closable={false}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="回收地址"
              name="recover"
              rules={[{ required: true, message: '请输入回收地址' }]}
            >
              <Input placeholder="0x..." />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      </div>
    </>
  );
}

