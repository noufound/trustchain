import CreateTrustForm from '@/components/dashboard/CreateTrustForm';
export const runtime = 'edge';

export default function CreateTrustPage() {
  return (
    <div className="p-4 p-0">
      <div className="mb-4">
        <h1 className="h2 fw-bold mb-2">创建信托</h1>
        <p className="text-muted">按照步骤设置您的信托计划</p>
      </div>
      
      <CreateTrustForm />
    </div>
  );
}
