'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { 
  CalendarIcon,
  BanknotesIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
export const runtime = 'edge';

interface TrustEvent {
  id: string;
  trustId: string;
  trustName: string;
  eventName: string;
  eventDescription: string;
  releaseAmount: number;
  status: 'available' | 'applied' | 'approved' | 'rejected' | 'reviewing';
  appliedDate?: string;
  applicationReason?: string;
}

const mockTrustEvents: TrustEvent[] = [
  {
    id: '1',
    trustId: 'T001',
    trustName: '教育基金信托',
    eventName: '大学毕业',
    eventDescription: '完成大学本科学业，获得学位证书',
    releaseAmount: 50000,
    status: 'available'
  },
  {
    id: '2',
    trustId: 'T001',
    trustName: '教育基金信托',
    eventName: '研究生入学',
    eventDescription: '考取研究生，提供录取通知书',
    releaseAmount: 30000,
    status: 'reviewing',
    appliedDate: '2024-11-07',
    applicationReason: '已收到研究生录取通知书，需要学费支持'
  },
  {
    id: '3',
    trustId: 'T002',
    trustName: '生活保障信托',
    eventName: '购买首套房产',
    eventDescription: '购买首套自住房产，提供购房合同',
    releaseAmount: 200000,
    status: 'approved',
    appliedDate: '2024-10-15',
    applicationReason: '已签订购房合同，需要首付款'
  },
  {
    id: '4',
    trustId: 'T002',
    trustName: '生活保障信托',
    eventName: '结婚',
    eventDescription: '登记结婚，提供结婚证',
    releaseAmount: 100000,
    status: 'rejected',
    appliedDate: '2024-09-20',
    applicationReason: '计划结婚，需要婚礼费用'
  },
];

export default function BeneficiariesPage() {
  const [events] = useState(mockTrustEvents);
  const [selectedEvent, setSelectedEvent] = useState<TrustEvent | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationReason, setApplicationReason] = useState('');
  // const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleApply = (event: TrustEvent) => {
    setSelectedEvent(event);
    setShowApplyModal(true);
    setApplicationReason('');
    // setUploadedFile(null);
  };

  const handleSubmitApplication = () => {
    console.log('提交申请:', {
      event: selectedEvent,
      reason: applicationReason,
      //  file: uploadedFile
    });
    
    toast.success('申请已提交，等待多签管理人审核', {
      duration: 3000,
      position: 'top-center',
    });
    
    setShowApplyModal(false);
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { text: string; class: string; icon?: typeof CheckCircleIcon }> = {
      available: { text: '可申请', class: 'bg-success', icon: CheckCircleIcon },
      applied: { text: '申请中', class: 'bg-info' },
      reviewing: { text: '审核中', class: 'bg-warning', icon: ClockIcon },
      approved: { text: '已通过', class: 'bg-success', icon: CheckCircleIcon },
      rejected: { text: '已驳回', class: 'bg-danger', icon: XCircleIcon }
    };
    
    const config = statusMap[status];
    const Icon = config.icon;
    
    return (
      <span className={`badge ${config.class} d-inline-flex align-items-center gap-1`}>
        {Icon && <Icon style={{width: '0.875rem', height: '0.875rem'}} />}
        {config.text}
      </span>
    );
  };

  // 计算可提取总金额
  const availableTotal = events
    .filter(e => e.status === 'available')
    .reduce((sum, e) => sum + e.releaseAmount, 0);

  return (
    <>
      <Toaster />
      <div className="p-4">
        {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">我的信托事件</h1>
        <p className="text-muted">管理您的信托释放事件和申请</p>
      </div>

      {/* 统计概览 */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card dashboard-card stat-card border-success mb-0">
            <div className="card-body">
              <p className="text-muted small mb-1">可申请释放总额</p>
              <h2 className="h3 fw-bold text-success mb-0">
                {availableTotal.toLocaleString()} USDC
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card mb-0">
            <div className="card-body">
              <p className="text-muted small mb-1">可申请事件</p>
              <h2 className="h3 fw-bold mb-0">
                {events.filter(e => e.status === 'available').length}
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card mb-0">
            <div className="card-body">
              <p className="text-muted small mb-1">审核中</p>
              <h2 className="h3 fw-bold text-warning mb-0">
                {events.filter(e => e.status === 'reviewing').length}
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card dashboard-card mb-0">
            <div className="card-body">
              <p className="text-muted small mb-1">已通过</p>
              <h2 className="h3 fw-bold text-success mb-0">
                {events.filter(e => e.status === 'approved').length}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* 信托事件列表 */}
      <div className="card dashboard-card">
        <div className="card-body">
          <h5 className="fw-bold mb-4">信托释放事件</h5>
          
          <div className="vstack gap-3">
            {events.map((event) => (
              <div key={event.id} className="card border">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <div className="icon-box bg-primary-light me-3">
                          <CalendarIcon style={{width: '1.5rem', height: '1.5rem'}} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1">{event.eventName}</h6>
                          <p className="text-muted small mb-1">{event.trustName} (#{event.trustId})</p>
                          <p className="text-muted small mb-0">{event.eventDescription}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-3 text-center">
                      <p className="text-muted small mb-1">释放金额</p>
                      <h5 className="fw-bold mb-0" style={{color: 'var(--primary-color)'}}>
                        {event.releaseAmount.toLocaleString()} USDC
                      </h5>
                    </div>
                    
                    <div className="col-md-3 text-end">
                      <div className="mb-2">
                        {getStatusBadge(event.status)}
                      </div>
                      
                      {event.status === 'available' && (
                        <button
                          className="btn btn-sm"
                          style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', color: 'white'}}
                          onClick={() => handleApply(event)}
                        >
                          <BanknotesIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                          申请释放
                        </button>
                      )}
                      
                      {event.status === 'reviewing' && (
                        <div>
                          <p className="small text-muted mb-0">申请时间</p>
                          <p className="small mb-0">{event.appliedDate}</p>
                        </div>
                      )}
                      
                      
                      {event.status === 'rejected' && (
                        <button
                          className="btn btn-sm"
                          style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                          onClick={() => handleApply(event)}
                        >
                          重新申请
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* 申请详情 */}
                  {event.applicationReason && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="small fw-medium mb-1">申请说明：</p>
                      <p className="small text-muted mb-0">{event.applicationReason}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 申请释放模态框 */}
      {showApplyModal && selectedEvent && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">申请释放 - {selectedEvent.eventName}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowApplyModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <p className="text-muted small mb-2">事件要求：</p>
                  <div className="alert alert-info small mb-3">
                    {selectedEvent.eventDescription}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">
                    申请说明 <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={applicationReason}
                    onChange={(e) => setApplicationReason(e.target.value)}
                    placeholder="请详细说明您的申请理由和当前情况..."
                  ></textarea>
                </div>

                {/* <div className="mb-3">
                  <label className="form-label fw-medium">
                    上传凭证 <span className="text-danger">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                    accept="image/*,.pdf"
                  />
                  <div className="form-text">支持图片或PDF格式，用于证明事件发生</div>
                </div> */}

                <div className="alert alert-warning small mb-0">
                  <strong>注意：</strong>提交后需要多签管理人审核通过才能提取资金
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowApplyModal(false)}
                >
                  取消
                </button>
                <button 
                  type="button" 
                  className="btn"
                  style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', color: 'white'}}
                  onClick={handleSubmitApplication}
                  // disabled={!applicationReason || !uploadedFile}
                  disabled={!applicationReason}
                >
                  提交申请
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
