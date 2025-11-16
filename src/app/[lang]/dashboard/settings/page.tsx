'use client';

import { useState } from 'react';
import { 
  BellIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  UserCircleIcon,
  KeyIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
export const runtime = 'edge';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="p-4" style={{maxWidth: '1200px'}}>
      {/* 页面标题 */}
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">设置</h1>
        <p className="text-muted">管理您的账户和应用偏好设置</p>
      </div>

      <div className="vstack gap-3">
        {/* 账户信息 */}
        <div className="card dashboard-card">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <UserCircleIcon style={{width: '1.5rem', height: '1.5rem'}} className="text-primary me-2" />
              <h5 className="mb-0 fw-bold">账户信息</h5>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-medium small">用户名</label>
                <input
                  type="text"
                  defaultValue="用户123"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium small">邮箱地址</label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium small">钱包地址</label>
              <div className="input-group">
                <input
                  type="text"
                  value="0x1234567890abcdef1234567890abcdef12345678"
                  readOnly
                  className="form-control bg-light"
                  style={{fontFamily: 'monospace', fontSize: '0.875rem'}}
                />
                <button className="btn btn-outline-secondary">复制</button>
              </div>
            </div>

            <button className="btn btn-primary">保存更改</button>
          </div>
        </div>

        {/* 安全设置 */}
        <div className="card dashboard-card">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <ShieldCheckIcon style={{width: '1.5rem', height: '1.5rem'}} className="text-primary me-2" />
              <h5 className="mb-0 fw-bold">安全设置</h5>
            </div>

            <div className="border-bottom pb-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-start">
                  <KeyIcon style={{width: '1.25rem', height: '1.25rem'}} className="text-muted me-2 mt-1" />
                  <div>
                    <p className="mb-1 fw-medium">两步验证</p>
                    <p className="mb-0 small text-muted">为您的账户增加额外的安全层</p>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={twoFactorEnabled}
                    onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    style={{width: '2.5rem', height: '1.25rem', cursor: 'pointer'}}
                  />
                </div>
              </div>
            </div>

            <div className="border-bottom pb-3 mb-3">
              <div className="d-flex align-items-center mb-3">
                <KeyIcon style={{width: '1.25rem', height: '1.25rem'}} className="text-muted me-2" />
                <p className="mb-0 fw-medium">修改密码</p>
              </div>
              <div className="ms-4 ps-1">
                <div className="mb-2">
                  <input
                    type="password"
                    placeholder="当前密码"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    placeholder="新密码"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="确认新密码"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary">更新密码</button>
              </div>
            </div>

            <div>
              <button className="btn btn-link text-danger text-decoration-none p-0">
                断开所有已连接的设备
              </button>
            </div>
          </div>
        </div>

        {/* 通知设置 */}
        <div className="card dashboard-card">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <BellIcon style={{width: '1.5rem', height: '1.5rem'}} className="text-primary me-2" />
              <h5 className="mb-0 fw-bold">通知设置</h5>
            </div>

            <div className="border-bottom pb-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-start">
                  <EnvelopeIcon style={{width: '1.25rem', height: '1.25rem'}} className="text-muted me-2 mt-1" />
                  <div>
                    <p className="mb-1 fw-medium">邮件通知</p>
                    <p className="mb-0 small text-muted">接收信托状态更新和重要通知</p>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                    style={{width: '2.5rem', height: '1.25rem', cursor: 'pointer'}}
                  />
                </div>
              </div>
            </div>

            <div className="border-bottom pb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-start">
                  <BellIcon style={{width: '1.25rem', height: '1.25rem'}} className="text-muted me-2 mt-1" />
                  <div>
                    <p className="mb-1 fw-medium">推送通知</p>
                    <p className="mb-0 small text-muted">在浏览器中接收实时通知</p>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={pushNotifications}
                    onChange={() => setPushNotifications(!pushNotifications)}
                    style={{width: '2.5rem', height: '1.25rem', cursor: 'pointer'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 偏好设置 */}
        <div className="card dashboard-card">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <GlobeAltIcon style={{width: '1.5rem', height: '1.5rem'}} className="text-primary me-2" />
              <h5 className="mb-0 fw-bold">偏好设置</h5>
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-medium small">语言</label>
                <select className="form-select">
                  <option>简体中文</option>
                  <option>English</option>
                  <option>繁體中文</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label fw-medium small">时区</label>
                <select className="form-select">
                  <option>UTC+8 (北京时间)</option>
                  <option>UTC+0 (格林尼治标准时间)</option>
                  <option>UTC-5 (美国东部时间)</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label fw-medium small">货币单位</label>
                <select className="form-select">
                  <option>USDC</option>
                  <option>USD</option>
                  <option>CNY</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 危险操作 */}
        <div className="card dashboard-card border-danger" style={{borderLeft: '4px solid #dc3545'}}>
          <div className="card-body">
            <h5 className="text-danger fw-bold mb-3">危险操作</h5>
            <p className="small text-muted mb-3">
              以下操作将永久删除您的账户和所有相关数据，此操作不可恢复。
            </p>
            <button className="btn btn-danger">删除账户</button>
          </div>
        </div>
      </div>
    </div>
  );
}
