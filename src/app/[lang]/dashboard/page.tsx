'use client';

import { Button } from "antd";
import { useMemo,useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { config as wagmiConfig } from '@/wagmi'
import { waitForTransactionReceipt } from "wagmi/actions";
import toast, { Toaster } from 'react-hot-toast';
import { TokenVestingFactoryABI } from '@/abi/TokenVestingFactory';
import { TokenVestingABI } from "@/abi/TokenVesting";
export const runtime = 'edge';


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

// 扩展接口以包含前端展示所需字段
interface TrustInfo extends TokenVestingBaseInfo {
  id: string;
  totalAmount: string;
  vestedAmount: string;
  extractedAmount: string;
  withdrawableAmount: string;
  status: '待开始' | '进行中' | '已完成' | '已撤销';
  releaseType: string;
}

interface BeneficiaryInfo {
  name: string;
  account: string;
  amount: bigint;
  extracted: bigint;
  revoked: boolean;
}

interface VestingBeneficiaryInfo {
  baseInfo: TokenVestingBaseInfo;
  beneficiaryInfo: BeneficiaryInfo;
  vested: bigint;
}

type EthereumAddress = `0x${string}`;

const decimals = 18;

const formatToTwoDecimals = (amount:bigint, dec: number): string => {
  const num = parseFloat(formatUnits(amount, decimals));
  return isNaN(num) ? '0.00' : num.toFixed(2);
};
export default function DashboardOverview() {

  const client = wagmiConfig.getClient()
  const { writeContractAsync: writeContract } = useWriteContract()
    
  //wagmi
  const { address: userAddress, isConnected } = useAccount(); // 检查钱包连接状态
  const { data: allTrustPlans, isLoading, refetch: refetchAllTrustPlans } = useReadContract({  // 已质押 NFT 数量
    address: process.env.NEXT_PUBLIC_FACTORY_ADDRESS as EthereumAddress,
    abi: TokenVestingFactoryABI,
    functionName: 'getUserAllVestingBeneficiarys',
    args: [userAddress]
  })

  const processedAssetData = useMemo(() => {
    if (!allTrustPlans || !Array.isArray(allTrustPlans)) return null;
    let totalAmount = BigInt(0);  //总资产
    let vestedAmount = BigInt(0); //已释放资产
    let withdrawableAmount = BigInt(0);
    
    allTrustPlans.forEach((trust) => {
      const {beneficiaryInfo, vested} = trust as VestingBeneficiaryInfo;
      totalAmount += beneficiaryInfo.amount;
      vestedAmount += vested;
      const withdrawable = beneficiaryInfo.revoked ? BigInt(0) : vested - beneficiaryInfo.extracted;
      withdrawableAmount += withdrawable
    })
    return {
      totalManaged: formatToTwoDecimals(totalAmount, decimals),
      totalwithdrawable: formatToTwoDecimals(withdrawableAmount, decimals),
      totalvested: formatToTwoDecimals(vestedAmount, decimals),
      currency: 'USDC'
    };

  }, [allTrustPlans])

  // 处理链上数据转换为前端可用格式
  const processedTrustPlans = useMemo(() => {
    if (!allTrustPlans || !Array.isArray(allTrustPlans)) return [];
    return (allTrustPlans as unknown as VestingBeneficiaryInfo[]).map(trust => {
      const {baseInfo, beneficiaryInfo, vested} = trust as VestingBeneficiaryInfo;
      // 这里需要根据实际业务逻辑计算各个字段值
      // 示例数据，需替换为真实计算逻辑
      const formattedId = baseInfo.vestingScheduleId.toString().padStart(4, '0');

      return {
        ...baseInfo,
        id: formattedId,
        totalAmount: formatToTwoDecimals(beneficiaryInfo.amount, decimals),
        vestedAmount: formatToTwoDecimals(vested, decimals), // 需要从合约获取或计算
        extractedAmount: formatToTwoDecimals(beneficiaryInfo.extracted, decimals), // 需要从合约获取或计算
        withdrawableAmount: formatToTwoDecimals(beneficiaryInfo.revoked ? BigInt(0) : vested - beneficiaryInfo.extracted, decimals), // 需要从合约获取或计算
        status: beneficiaryInfo.revoked ? '已撤销' : baseInfo.state == 0 ? '待开始' : baseInfo.state == 1 ? '进行中' : '已完成',
        releaseType: '线性释放'
      } as TrustInfo;
    });
  }, [allTrustPlans]);


  const withdraw = async (trust:TrustInfo) => {
    if (!isConnected) {
      console.log('请先连接钱包');
      return;
    }

    toast.dismiss()
    toast.loading('正在提取代币...');
    const vesting_addr = trust.addr as EthereumAddress
    try {
      const txh = await writeContract({
        address: vesting_addr,
        abi: TokenVestingABI,
        functionName: 'withdraw',
        args: [],
        account: userAddress,
      });

      const transactionReceipt = await waitForTransactionReceipt(wagmiConfig, {
        hash: txh,
      });

      if (transactionReceipt.status == 'success') {
        toast.dismiss()
        toast.success('提取成功');
        refetchAllTrustPlans()
        return true;
      }
      return false;
    } catch (error) {
      console.error('createTrust error:', error);
      toast.dismiss();
      toast.error('提取失败');
      throw error; // 重新抛出错误以便上层处理
    }
  }


  return (
    <div className="p-4">
      <Toaster />
      {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">总览</h1>
        <p className="text-muted">查看您的信托资产概况和最近活动</p>
      </div>

      {/* 资产卡片 */}
      <div className="row g-3 mb-4">
        {/* 总托管资产 */}
        <div className="col-md-4">
          <div className="card dashboard-card stat-card border-primary-color h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted small mb-1">总托管资产</p>
                  <h2 className="h3 fw-bold mb-0">
                    {processedAssetData != null ? processedAssetData.totalManaged : '-'}
                    {processedAssetData != null && <small className="fs-6 text-muted ms-2">{processedAssetData.currency}</small>}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 可提出资产 */}
        <div className="col-md-4">
          <div className="card dashboard-card stat-card border-success h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted small mb-1">可提出</p>
                  <h2 className="h3 fw-bold mb-0">
                    {processedAssetData != null ? processedAssetData.totalwithdrawable : '-'}
                    {processedAssetData != null && <small className="fs-6 text-muted ms-2">{processedAssetData.currency}</small>}
                  </h2>
                  <div className="mt-2">
                    <span className="small text-muted">{processedAssetData != null && parseFloat(processedAssetData.totalManaged)>0 ? `${(parseFloat(processedAssetData.totalwithdrawable)/ parseFloat(processedAssetData.totalManaged)*100).toFixed(1)}% 总资产`: '-% 总资产'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 锁定中资产 */}
        <div className="col-md-4">
          <div className="card dashboard-card stat-card border-warning h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted small mb-1">已释放</p>
                  <h2 className="h3 fw-bold mb-0">
                    {processedAssetData != null ? processedAssetData.totalvested : '-'}
                    {processedAssetData != null && <small className="fs-6 text-muted ms-2">{processedAssetData.currency}</small>}
                  </h2>
                  <div className="mt-2">
                    <span className="small text-muted">{processedAssetData != null && parseFloat(processedAssetData.totalManaged)>0 ? `${(parseFloat(processedAssetData.totalvested)/ parseFloat(processedAssetData.totalManaged)*100).toFixed(1)}% 总资产`: '-% 总资产'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 我的计划列表 */}
      <div className="card dashboard-card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 fw-bold">我的计划</h5>
          </div>
          
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th className="border-0">信托名称</th>
                  <th className="border-0">总金额</th>
                  <th className="border-0">可提取</th>
                  <th className="border-0">已释放</th>
                  <th className="border-0">释放方式</th>
                  <th className="border-0">状态</th>
                  <th className="border-0">操作</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      数据加载中...
                    </td>
                  </tr>
                ) : processedTrustPlans.length > 0 ? (
                  processedTrustPlans.map((trust) => (
                    <tr 
                      key={trust.id} 
                      style={{cursor: 'pointer'}}
                      onClick={() => {}}
                    >
                      <td>
                        <div>
                          <div className="fw-semibold">{trust.name}</div>
                          <small className="text-muted">#{trust.id}</small>
                        </div>
                      </td>
                      <td className="fw-semibold">{trust.totalAmount}</td>
                      <td className="text-success">{trust.withdrawableAmount}</td>
                      <td className="text-warning">{trust.vestedAmount}</td>
                      <td>
                        <span className="badge bg-opacity-10" style={{backgroundColor: 'var(--primary-light)', color: 'var(--primary-color)'}}>
                          {trust.releaseType}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${
                          trust.status === '进行中'
                            ? 'bg-success bg-opacity-10 text-success' 
                            : trust.status == '已撤销' ? 'bg-danger bg-opacity-10 text-secondary' : 'bg-secondary bg-opacity-10 text-secondary'
                        }`}>
                          {trust.status}
                        </span>
                      </td>
                      <td>
                        <Button disabled={!(trust.status == '进行中')} onClick={async () => await withdraw(trust)}>提取</Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      暂无信托计划
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
