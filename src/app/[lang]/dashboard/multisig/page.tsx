'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PhotoIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

type ApplicationStatus = 'pending' | 'approved' | 'rejected';

interface Application {
  id: string;
  type: 'release' | 'modify';
  applicant: string;
  applicantRole: 'beneficiary' | 'trustor';
  trustId: string;
  trustName: string;
  eventName?: string;
  eventDescription?: string;
  releaseAmount?: number;
  applicationReason: string;
  evidenceUrl?: string;
  modifyReason?: string;
  newRules?: {
    eventName: string;
    amount: number;
    description: string;
  }[];
  signatures: number;
  requiredSignatures: number;
  createdAt: string;
  status: ApplicationStatus;
}

const mockApplications: Application[] = [
  {
    id: 'APP001',
    type: 'release',
    applicant: '张三',
    applicantRole: 'beneficiary',
    trustId: 'T001',
    trustName: '教育基金信托',
    eventName: '研究生入学',
    eventDescription: '考取研究生，提供录取通知书',
    releaseAmount: 30000,
    applicationReason: '已收到研究生录取通知书，需要学费支持。我已于2024年9月通过研究生入学考试，并收到某某大学的录取通知书。',
    evidenceUrl: '/evidence/admission-letter.pdf',
    signatures: 1,
    requiredSignatures: 2,
    createdAt: '2024-11-07 10:30',
    status: 'pending'
  },
  {
    id: 'APP002',
    type: 'modify',
    applicant: '李四',
    applicantRole: 'trustor',
    trustId: 'T002',
    trustName: '生活保障信托',
    applicationReason: '',
    modifyReason: '考虑到当前经济形势变化，需要调整信托释放条件，增加创业支持事件，帮助受益人更好地发展事业。',
    newRules: [
      {
        eventName: '购买首套房产',
        amount: 200000,
        description: '购买首套自住房产，提供购房合同'
      },
      {
        eventName: '创业启动',
        amount: 150000,
        description: '创业需要启动资金，提供营业执照和商业计划书'
      },
      {
        eventName: '结婚',
        amount: 100000,
        description: '登记结婚，提供结婚证'
      }
    ],
    signatures: 0,
    requiredSignatures: 3,
    createdAt: '2024-11-06 15:20',
    status: 'pending'
  },
  {
    id: 'APP003',
    type: 'release',
    applicant: '王五',
    applicantRole: 'beneficiary',
    trustId: 'T003',
    trustName: '医疗健康信托',
    eventName: '重大疾病治疗',
    eventDescription: '患重大疾病需要治疗，提供医院诊断证明',
    releaseAmount: 80000,
    applicationReason: '确诊为重大疾病，需要紧急治疗费用。附上医院的诊断证明和治疗方案。',
    evidenceUrl: '/evidence/medical-certificate.pdf',
    signatures: 2,
    requiredSignatures: 2,
    createdAt: '2024-11-05 09:15',
    status: 'approved'
  },
  {
    id: 'APP004',
    type: 'release',
    applicant: '赵六',
    applicantRole: 'beneficiary',
    trustId: 'T001',
    trustName: '教育基金信托',
    eventName: '留学申请',
    eventDescription: '申请海外留学，提供录取通知书',
    releaseAmount: 100000,
    applicationReason: '申请材料不完整，未提供完整的录取通知书。',
    evidenceUrl: '/evidence/incomplete.pdf',
    signatures: 2,
    requiredSignatures: 2,
    createdAt: '2024-11-04 14:20',
    status: 'rejected'
  },
];

export default function MultisigPage() {
  const [applications] = useState(mockApplications);
  const [activeTab, setActiveTab] = useState<ApplicationStatus | 'all'>('pending');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // 根据activeTab筛选数据
  const filteredApplications = activeTab === 'all' 
    ? applications 
    : applications.filter(app => app.status === activeTab);

  // 统计数量
  const counts = {
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSign = (app: Application) => {
    console.log('签名确认:', app);
    toast.success('签名成功！', {
      duration: 3000,
      position: 'top-center',
    });
  };

  const handleReject = (app: Application) => {
    setSelectedApp(app);
    setShowRejectModal(true);
    setRejectReason('');
  };

  const confirmReject = () => {
    console.log('驳回申请:', selectedApp, '原因:', rejectReason);
    toast.error('申请已驳回', {
      duration: 3000,
      position: 'top-center',
    });
    setShowRejectModal(false);
  };

  const getStatusBadge = (status: ApplicationStatus) => {
    const map: Record<ApplicationStatus, { text: string; class: string }> = {
      pending: { text: '待审核', class: 'bg-warning' },
      approved: { text: '已通过', class: 'bg-success' },
      rejected: { text: '已驳回', class: 'bg-danger' }
    };
    const config = map[status];
    return <span className={`badge ${config.class}`}>{config.text}</span>;
  };

  const getTypeLabel = (type: string, role: string) => {
    if (type === 'release') return '受益人申请释放';
    if (type === 'modify' && role === 'trustor') return '委托人申请修改';
    return '申请';
  };

  return (
    <>
      <Toaster />
      <div className="p-4 p-0">
        {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">多签审核</h1>
        <p className="text-muted">审核受益人申请释放和委托人修改请求</p>
      </div>

      {/* Tab统计卡片 */}
      <div className="row g-3 mb-4 card-wrapper">
        <div className="col-md-4">
          <div 
            className={`card dashboard-card mb-0 ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
            style={{cursor: 'pointer'}}
          >
            <div className="card-body">
              <p className="text-muted small mb-1">待审核</p>
              <h2 className="h3 fw-bold text-warning mb-0">{counts.pending}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div 
            className={`card dashboard-card mb-0 ${activeTab === 'approved' ? 'active' : ''}`}
            onClick={() => setActiveTab('approved')}
            style={{cursor: 'pointer'}}
          >
            <div className="card-body">
              <p className="text-muted small mb-1">已通过</p>
              <h2 className="h3 fw-bold text-success mb-0">{counts.approved}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div 
            className={`card dashboard-card mb-0 ${activeTab === 'rejected' ? 'active' : ''}`}
            onClick={() => setActiveTab('rejected')}
            style={{cursor: 'pointer'}}
          >
            <div className="card-body">
              <p className="text-muted small mb-1">已驳回</p>
              <h2 className="h3 fw-bold text-danger mb-0">{counts.rejected}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 申请列表 */}
      <div className="card dashboard-card">
        <div className="card-body">
          <h5 className="fw-bold mb-4">
            {activeTab === 'pending' && '待审核列表'}
            {activeTab === 'approved' && '已通过列表'}
            {activeTab === 'rejected' && '已驳回列表'}
          </h5>
          
          {filteredApplications.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">暂无数据</p>
            </div>
          ) : (
            <div className="vstack gap-3">
              {filteredApplications.map((app) => {
                const isExpanded = expandedId === app.id;
                const canSign = app.status === 'pending' && app.signatures < app.requiredSignatures;
                
                return (
                  <div key={app.id} className="card border">
                    {/* 申请概览 */}
                    <div 
                      className="card-body" 
                      style={{cursor: 'pointer'}}
                      onClick={() => toggleExpand(app.id)}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <div className="icon-box bg-primary-light me-3">
                              <ShieldCheckIcon style={{width: '1.5rem', height: '1.5rem'}} />
                            </div>
                            <div>
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <h6 className="fw-bold mb-0">
                                  {getTypeLabel(app.type, app.applicantRole)}
                                </h6>
                                {getStatusBadge(app.status)}
                              </div>
                              <p className="small mb-1">
                                申请人: {app.applicant} | {app.trustName}
                              </p>
                              {app.eventName && (
                                <p className="small mb-0">事件: {app.eventName}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-3 text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2 signature-progress">
                            <UserGroupIcon style={{width: '1.25rem', height: '1.25rem'}} />
                            <div>
                              <p className="small text-muted mb-0">签名进度</p>
                              <p className="fw-bold mb-0">{app.signatures}/{app.requiredSignatures}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-3 text-end">
                          <p className="small text-muted mb-0">申请时间</p>
                          <p className="small mb-2">{app.createdAt}</p>
                          {isExpanded ? (
                            <ChevronUpIcon style={{width: '1.25rem', height: '1.25rem'}} />
                          ) : (
                            <ChevronDownIcon style={{width: '1.25rem', height: '1.25rem'}} className="text-muted" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* 展开的详细内容 */}
                    {isExpanded && (
                      <div className="card-body border-top bg-light">
                        {/* 受益人申请释放详情 */}
                        {app.type === 'release' && (
                          <div>
                            <h6 className="fw-bold mb-3">申请详情</h6>
                            
                            <div className="mb-3">
                              <p className="small fw-medium text-muted mb-1">事件释放要求（委托人设定）:</p>
                              <div className="alert alert-info small mb-0">
                                {app.eventDescription}
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="small fw-medium text-muted mb-1">申请释放金额:</p>
                              <h5 className="fw-bold mb-0" style={{color: 'var(--primary-color)'}}>
                                {app.releaseAmount?.toLocaleString()} USDC
                              </h5>
                            </div>

                            <div className="mb-3">
                              <p className="small fw-medium text-muted mb-1">申请说明:</p>
                              <div className="bg-white p-3 rounded border">
                                <p className="small mb-0">{app.applicationReason}</p>
                              </div>
                            </div>

                            {app.evidenceUrl && (
                              <div className="mb-3">
                                <p className="small fw-medium text-muted mb-1">上传凭证:</p>
                                <div className="d-flex align-items-center gap-2">
                                  <PhotoIcon style={{width: '1.25rem', height: '1.25rem'}} />
                                  <a href={app.evidenceUrl} target="_blank" rel="noopener noreferrer" className="small" style={{color: 'var(--primary-color)'}}>
                                    查看凭证文件
                                  </a>
                                </div>
                              </div>
                            )}

                            {canSign && (
                              <div className="d-flex gap-2 mt-4">
                                <button 
                                  className="btn btn-success"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSign(app);
                                  }}
                                >
                                  <CheckIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-1" />
                                  确认签名
                                </button>
                                <button 
                                  className="btn btn-danger"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleReject(app);
                                  }}
                                >
                                  <XMarkIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-1" />
                                  驳回申请
                                </button>
                              </div>
                            )}
                          </div>
                        )}

                        {/* 委托人申请修改详情 */}
                        {app.type === 'modify' && (
                          <div>
                            <h6 className="fw-bold mb-3">修改申请详情</h6>
                            
                            <div className="mb-3">
                              <p className="small fw-medium text-muted mb-1">修改原因说明:</p>
                              <div className="bg-white p-3 rounded border">
                                <p className="small mb-0">{app.modifyReason}</p>
                              </div>
                            </div>

                            <div className="mb-3">
                              <p className="small fw-medium text-muted mb-2">新的释放规则:</p>
                              <div className="vstack gap-2">
                                {app.newRules?.map((rule, index) => (
                                  <div key={index} className="bg-white p-3 rounded border">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                      <h6 className="fw-bold mb-0">{rule.eventName}</h6>
                                      <span className="badge" style={{backgroundColor: 'var(--primary-color)'}}>
                                        {rule.amount.toLocaleString()} USDC
                                      </span>
                                    </div>
                                    <p className="small text-muted mb-0">{rule.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {canSign && (
                              <div className="d-flex gap-2 mt-4">
                                <button 
                                  className="btn btn-success"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSign(app);
                                  }}
                                >
                                  <CheckIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-1" />
                                  确认签名
                                </button>
                                <button 
                                  className="btn btn-danger"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleReject(app);
                                  }}
                                >
                                  <XMarkIcon style={{width: '1.25rem', height: '1.25rem'}} className="me-1" />
                                  驳回申请
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 驳回原因模态框 */}
      {showRejectModal && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">驳回申请</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowRejectModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="text-muted mb-3">请说明驳回原因，以便申请人了解情况：</p>
                <textarea
                  className="form-control"
                  rows={4}
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="请输入驳回原因..."
                ></textarea>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowRejectModal(false)}
                >
                  取消
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick={confirmReject}
                  disabled={!rejectReason}
                >
                  确认驳回
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
