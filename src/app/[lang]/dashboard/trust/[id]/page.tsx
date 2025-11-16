'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// 模拟数据
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trustDetails: Record<string, any> = {
  'T001': {
    id: 'T001',
    name: '教育基金信托',
    beneficiary: '张三',
    beneficiaryAddress: '0x1234567890abcdef1234567890abcdef12345678',
    totalAmount: 150000,
    releasedAmount: 30000,
    lockedAmount: 120000,
    releaseMethod: '事件释放',
    createdAt: '2024-01-15',
    status: '进行中',
    events: [
      { eventName: '大学毕业', amount: 50000, description: '完成大学本科学业，获得学位证书', status: 'completed', completedDate: '2024-03-20' },
      { eventName: '研究生入学', amount: 30000, description: '考取研究生，提供录取通知书', status: 'pending' },
      { eventName: '博士毕业', amount: 70000, description: '获得博士学位', status: 'pending' }
    ]
  },
  'T002': {
    id: 'T002',
    name: '生活保障信托',
    beneficiary: '李四',
    beneficiaryAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    totalAmount: 400000,
    releasedAmount: 200000,
    lockedAmount: 200000,
    releaseMethod: '事件释放',
    createdAt: '2024-02-20',
    status: '进行中',
    events: [
      { eventName: '购买首套房产', amount: 200000, description: '购买首套自住房产，提供购房合同', status: 'completed', completedDate: '2024-05-10' },
      { eventName: '结婚', amount: 100000, description: '登记结婚，提供结婚证', status: 'pending' },
      { eventName: '生育子女', amount: 100000, description: '生育子女，提供出生证明', status: 'pending' }
    ]
  },
  'T003': {
    id: 'T003',
    name: '创业支持信托',
    beneficiary: '王五',
    beneficiaryAddress: '0x9876543210abcdef9876543210abcdef98765432',
    totalAmount: 300000,
    releasedAmount: 300000,
    lockedAmount: 0,
    releaseMethod: '线性释放',
    createdAt: '2023-06-01',
    status: '已完成',
    completedAt: '2024-06-01',
    linearRelease: {
      frequency: '每月',
      amountPerPeriod: 25000,
      totalPeriods: 12,
      completedPeriods: 12
    }
  },
  'T004': {
    id: 'T004',
    name: '创业支持信托',
    beneficiary: '王五',
    beneficiaryAddress: '0x9876543210abcdef9876543210abcdef98765432',
    totalAmount: 300000,
    releasedAmount: 300000,
    lockedAmount: 0,
    releaseMethod: '线性释放',
    createdAt: '2023-06-01',
    status: '已完成',
    completedAt: '2024-06-01',
    linearRelease: {
      frequency: '每月',
      amountPerPeriod: 25000,
      totalPeriods: 12,
      completedPeriods: 5
    }
  }
};

export default function TrustDetailPage() {
  const params = useParams();
  const trustId = params.id as string;
  const trust = trustDetails[trustId];

  if (!trust) {
    return (
      <div className="p-4">
        <div className="alert alert-warning">
          信托不存在
        </div>
      </div>
    );
  }

  // 计算资产数据
  const assetData = {
    totalManaged: trust.totalAmount.toLocaleString(),
    withdrawable: trust.releasedAmount.toLocaleString(),
    locked: trust.lockedAmount.toLocaleString(),
    currency: 'USDC'
  };

  return (
    <div className="p-4">
      {/* 返回按钮 */}
      <div className="mb-3">
        <Link 
          href="/dashboard" 
          className="btn btn-sm btn-outline-secondary"
        >
          <ArrowLeftIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
          返回总览
        </Link>
      </div>

      {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">{trust.name}</h1>
        <p className="text-muted">信托详细信息</p>
      </div>

      {/* 资产概览卡片 */}
      <div className="row g-3 mb-4">
        {/* 总托管资产 */}
        <div className="col-md-4">
          <div className="card dashboard-card stat-card border-primary-color h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted small mb-1">总托管资产</p>
                  <h2 className="h3 fw-bold mb-0">
                    {assetData.totalManaged}
                    <small className="fs-6 text-muted ms-2">{assetData.currency}</small>
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
                  <p className="text-muted small mb-1">已释放</p>
                  <h2 className="h3 fw-bold mb-0">
                    {assetData.withdrawable}
                    <small className="fs-6 text-muted ms-2">{assetData.currency}</small>
                  </h2>
                  <div className="mt-2">
                    <span className="small text-muted">
                      {((trust.releasedAmount / trust.totalAmount) * 100).toFixed(0)}% 总资产
                    </span>
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
                  <p className="text-muted small mb-1">待释放</p>
                  <h2 className="h3 fw-bold mb-0">
                    {assetData.locked}
                    <small className="fs-6 text-muted ms-2">{assetData.currency}</small>
                  </h2>
                  <div className="mt-2">
                    <span className="small text-muted">
                      {((trust.lockedAmount / trust.totalAmount) * 100).toFixed(0)}% 总资产
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 基本信息 */}
      <div className="card dashboard-card mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">基本信息</h5>
          
          <div className="row g-3">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">信托ID</label>
                <p className="mb-0 fw-medium">#{trust.id}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">状态</label>
                <div>
                  <span className={`badge ${
                    trust.status === '进行中' 
                      ? 'bg-success bg-opacity-10 text-success' 
                      : 'bg-secondary bg-opacity-10 text-secondary'
                  }`}>
                    {trust.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">受益人</label>
                <p className="mb-0 fw-medium">{trust.beneficiary}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">受益人地址</label>
                <p className="mb-0"><code className="small">{trust.beneficiaryAddress}</code></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">释放方式</label>
                <p className="mb-0 fw-medium">{trust.releaseMethod}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="small text-muted">创建时间</label>
                <p className="mb-0">{trust.createdAt}</p>
              </div>
            </div>
            {trust.completedAt && (
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="small text-muted">完成时间</label>
                  <p className="mb-0">{trust.completedAt}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 释放计划 */}
      {trust.events && (
        <div className="card dashboard-card mb-4">
          <div className="card-body">
            <h5 className="fw-bold mb-3">释放计划（事件释放）</h5>
            
            <div className="vstack gap-3">
              {trust.events.map((
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                event:any, // eslint-disable-next-line @typescript-eslint/no-explicit-any
                index: number) => (
                <div key={index} className="card border">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                      <div className="d-flex align-items-start gap-3 flex-grow-1">
                        <div className="icon-box bg-primary-light">
                          {event.status === 'completed' ? (
                            <CheckCircleIcon style={{width: '1.5rem', height: '1.5rem', color: 'var(--primary-color)'}} />
                          ) : (
                            <CalendarIcon style={{width: '1.5rem', height: '1.5rem', color: 'var(--primary-color)'}} />
                          )}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h6 className="fw-bold mb-0">{event.eventName}</h6>
                            {event.status === 'completed' && (
                              <span className="badge bg-success">已完成</span>
                            )}
                          </div>
                          <p className="text-muted small mb-2">{event.description}</p>
                          <div className="d-flex align-items-center gap-3">
                            <div>
                              <span className="small text-muted">释放金额：</span>
                              <span className="fw-bold" style={{color: 'var(--primary-color)'}}>
                                {event.amount.toLocaleString()} USDC
                              </span>
                            </div>
                            {event.completedDate && (
                              <div>
                                <span className="small text-muted">完成时间：</span>
                                <span className="small">{event.completedDate}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 线性释放计划 */}
      {trust.linearRelease && (
        <div className="card dashboard-card mb-4">
          <div className="card-body">
            <h5 className="fw-bold mb-3">释放计划（线性释放）</h5>
            
            <div className="row g-3 mb-3">
              <div className="col-md-3">
                <label className="small text-muted">释放频率</label>
                <p className="mb-0 fw-medium">{trust.linearRelease.frequency}</p>
              </div>
              <div className="col-md-3">
                <label className="small text-muted">每期释放金额</label>
                <p className="mb-0 fw-medium">{trust.linearRelease.amountPerPeriod.toLocaleString()} USDC</p>
              </div>
              <div className="col-md-3">
                <label className="small text-muted">总期数</label>
                <p className="mb-0 fw-medium">{trust.linearRelease.totalPeriods} 期</p>
              </div>
              <div className="col-md-3">
                <label className="small text-muted">已完成期数</label>
                <p className="mb-0 fw-medium">{trust.linearRelease.completedPeriods} 期</p>
              </div>
            </div>

            <div className="progress" style={{height: '1.5rem'}}>
              <div 
                className="progress-bar" 
                style={{
                  width: `${(trust.linearRelease.completedPeriods / trust.linearRelease.totalPeriods) * 100}%`,
                  backgroundColor: 'var(--primary-color)'
                }}
              >
                {((trust.linearRelease.completedPeriods / trust.linearRelease.totalPeriods) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

