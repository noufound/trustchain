'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { 
  PencilSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface Trust {
  id: string;
  name: string;
  beneficiary: string;
  beneficiaryAddress: string;
  totalAmount: number;
  releasedAmount: number;
  releaseMethod: 'linear' | 'event';
  events?: {
    eventName: string;
    amount: number;
    description: string;
    status: 'available' | 'completed';
  }[];
  createdAt: string;
  status: 'active' | 'completed';
}

const mockTrusts: Trust[] = [
  {
    id: 'T001',
    name: '教育基金信托',
    beneficiary: '张三',
    beneficiaryAddress: '0x1234567890abcdef1234567890abcdef12345678',
    totalAmount: 150000,
    releasedAmount: 30000,
    releaseMethod: 'event',
    events: [
      { eventName: '大学毕业', amount: 50000, description: '完成大学本科学业，获得学位证书', status: 'completed' },
      { eventName: '研究生入学', amount: 30000, description: '考取研究生，提供录取通知书', status: 'available' },
      { eventName: '博士毕业', amount: 70000, description: '获得博士学位', status: 'available' }
    ],
    createdAt: '2024-01-15',
    status: 'active'
  },
  {
    id: 'T002',
    name: '生活保障信托',
    beneficiary: '李四',
    beneficiaryAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
    totalAmount: 400000,
    releasedAmount: 200000,
    releaseMethod: 'event',
    events: [
      { eventName: '购买首套房产', amount: 200000, description: '购买首套自住房产，提供购房合同', status: 'completed' },
      { eventName: '结婚', amount: 100000, description: '登记结婚，提供结婚证', status: 'available' },
      { eventName: '生育子女', amount: 100000, description: '生育子女，提供出生证明', status: 'available' }
    ],
    createdAt: '2024-02-20',
    status: 'active'
  }
];

export default function TrustManagementPage() {
  const [trusts] = useState(mockTrusts);
  const [selectedTrust, setSelectedTrust] = useState<Trust | null>(null);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [modifyReason, setModifyReason] = useState('');
  const [newEvents, setNewEvents] = useState<{
    eventName: string;
    amount: string;
    description: string;
    isCompleted: boolean;
  }[]>([]);

  const handleModifyClick = (trust: Trust) => {
    setSelectedTrust(trust);
    // 初始化修改表单，复制现有事件，标记已完成的事件
    setNewEvents(trust.events?.map(e => ({
      eventName: e.eventName,
      amount: e.amount.toString(),
      description: e.description,
      isCompleted: e.status === 'completed'
    })) || []);
    setModifyReason('');
    setShowModifyModal(true);
  };

  const handleAddEvent = () => {
    setNewEvents([...newEvents, { eventName: '', amount: '', description: '', isCompleted: false }]);
  };

  const handleUpdateEvent = (index: number, field: string, value: string) => {
    // 只允许更新未完成的事件
    if (!newEvents[index].isCompleted) {
      const updated = [...newEvents];
      updated[index] = { ...updated[index], [field]: value };
      setNewEvents(updated);
    }
  };

  const handleRemoveEvent = (index: number) => {
    // 只允许删除未完成的事件
    if (!newEvents[index].isCompleted) {
      setNewEvents(newEvents.filter((_, i) => i !== index));
    }
  };

  const handleSubmitModify = () => {
    console.log('提交修改申请:', {
      trust: selectedTrust,
      reason: modifyReason,
      newEvents: newEvents
    });
    
    toast.success('修改申请已提交，等待多签管理人审核', {
      duration: 3000,
      position: 'top-center',
    });
    
    setShowModifyModal(false);
  };

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
        {trusts.map((trust) => (
          <div key={trust.id} className="col-md-6">
            <div className="card dashboard-card h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="fw-bold mb-1">{trust.name}</h5>
                    <p className="text-muted small mb-0">ID: #{trust.id}</p>
                  </div>
                  <span className={`badge ${trust.status === 'active' ? 'bg-success' : 'bg-secondary'}`}>
                    {trust.status === 'active' ? '进行中' : '已完成'}
                  </span>
                </div>

                {/* 受益人信息 */}
                <div className="mb-3">
                  <p className="small text-muted mb-1">受益人:</p>
                  <p className="small fw-medium mb-0">{trust.beneficiary}</p>
                  <code className="small text-muted">
                    {trust.beneficiaryAddress.slice(0, 10)}...{trust.beneficiaryAddress.slice(-8)}
                  </code>
                </div>

                {/* 资金信息 */}
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="bg-light p-2 rounded">
                      <p className="small text-muted mb-1">总金额</p>
                      <p className="fw-bold mb-0">{trust.totalAmount.toLocaleString()} USDC</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-light p-2 rounded">
                      <p className="small text-muted mb-1">已释放</p>
                      <p className="fw-bold text-success mb-0">{trust.releasedAmount.toLocaleString()} USDC</p>
                    </div>
                  </div>
                </div>

                {/* 释放事件 */}
                <div className="mb-3">
                  <p className="small fw-medium mb-2">释放事件:</p>
                  <div className="vstack gap-1">
                    {trust.events?.map((event, index) => (
                      <div key={index} className="d-flex justify-content-between align-items-center small">
                        <div className="d-flex align-items-center gap-1">
                          {event.status === 'completed' && (
                            <CheckCircleIcon 
                              style={{width: '1rem', height: '1rem'}} 
                              className="text-success"
                            />
                          )}
                          <span className={event.status === 'completed' ? 'text-muted' : ''}>
                            {event.eventName}
                          </span>
                        </div>
                        <span className={`badge ${event.status === 'completed' ? 'bg-secondary' : ''}`} style={{backgroundColor: event.status === 'completed' ? undefined : 'var(--primary-color)'}}>
                          {event.amount.toLocaleString()} USDC
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <small className="text-muted">创建时间: {trust.createdAt}</small>
                  {trust.status === 'active' && (
                    <button 
                      className="btn btn-sm"
                      style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                      onClick={() => handleModifyClick(trust)}
                    >
                      <PencilSquareIcon style={{width: '1rem', height: '1rem'}} className="me-1" />
                      申请修改
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 修改信托模态框 */}
      {showModifyModal && selectedTrust && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">申请修改信托 - {selectedTrust.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModifyModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* 修改原因 */}
                <div className="mb-4">
                  <label className="form-label fw-medium">
                    修改原因说明 <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={modifyReason}
                    onChange={(e) => setModifyReason(e.target.value)}
                    placeholder="请详细说明修改信托规则的原因..."
                  ></textarea>
                  <div className="form-text">修改需要多签管理人审核通过</div>
                </div>

                {/* 新的释放规则 */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="form-label fw-medium mb-0">
                      新的释放规则 <span className="text-danger">*</span>
                    </label>
                    <button 
                      type="button"
                      className="btn btn-sm"
                      style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', color: 'white'}}
                      onClick={handleAddEvent}
                    >
                      + 添加事件
                    </button>
                  </div>

                  <div className="vstack gap-3">
                    {newEvents.map((event, index) => (
                      <div key={index} className={`card ${event.isCompleted ? 'border-success' : 'border'}`}>
                        <div className="card-body" style={event.isCompleted ? {backgroundColor: '#f0fdf4'} : undefined}>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex align-items-center gap-2">
                              <span className="small fw-medium">事件 {index + 1}</span>
                              {event.isCompleted && (
                                <span className="badge bg-success d-inline-flex align-items-center gap-1">
                                  <CheckCircleIcon style={{width: '0.875rem', height: '0.875rem'}} />
                                  已完成
                                </span>
                              )}
                            </div>
                            {!event.isCompleted && (
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger delete"
                                onClick={() => handleRemoveEvent(index)}
                              >
                                删除
                              </button>
                            )}
                          </div>

                          <div className="mb-2">
                            <label className="form-label small">事件名称</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={event.eventName}
                              onChange={(e) => handleUpdateEvent(index, 'eventName', e.target.value)}
                              placeholder="如：大学毕业"
                              disabled={event.isCompleted}
                              readOnly={event.isCompleted}
                            />
                          </div>

                          <div className="mb-2">
                            <label className="form-label small">释放金额 (USDC)</label>
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              value={event.amount}
                              onChange={(e) => handleUpdateEvent(index, 'amount', e.target.value)}
                              placeholder="如：50000"
                              disabled={event.isCompleted}
                              readOnly={event.isCompleted}
                            />
                          </div>

                          <div>
                            <label className="form-label small">事件描述</label>
                            <textarea
                              className="form-control form-control-sm"
                              rows={2}
                              value={event.description}
                              onChange={(e) => handleUpdateEvent(index, 'description', e.target.value)}
                              placeholder="描述事件的触发条件和要求..."
                              disabled={event.isCompleted}
                              readOnly={event.isCompleted}
                            ></textarea>
                          </div>
                          
                          {event.isCompleted && (
                            <div className="mt-2">
                              <small className="text-muted">
                                <CheckCircleIcon style={{width: '0.875rem', height: '0.875rem'}} className="me-1" />
                                此事件已完成，不允许修改
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {newEvents.length === 0 && (
                      <div className="alert alert-warning small">
                        请至少添加一个释放事件
                      </div>
                    )}
                  </div>
                </div>

                <div className="alert alert-info small mb-0">
                  <strong>注意：</strong>
                  <ul className="mb-0 ps-3 mt-2">
                    <li>修改申请需要多签管理人审核</li>
                    <li>已完成的事件不允许修改和删除</li>
                    <li>只能修改未完成的事件或添加新事件</li>
                    <li>修改通过后，新规则将立即生效</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModifyModal(false)}
                >
                  取消
                </button>
                <button 
                  type="button" 
                  className="btn"
                  style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)', color: 'white'}}
                  onClick={handleSubmitModify}
                  disabled={
                    !modifyReason || 
                    newEvents.length === 0 || 
                    newEvents.some(e => !e.isCompleted && (!e.eventName || !e.amount || !e.description))
                  }
                >
                  提交修改申请
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

