import Skeleton from 'react-loading-skeleton';

function SkeletonCard() {
  return (
    <div className="bg-slate-800/40 rounded-3xl p-6 border border-blue-700/50 h-full animate-pulse">
      <div className="flex justify-center mb-6">
        <Skeleton circle height={64} width={64} />
      </div>
      <div className="text-center mb-6">
        <Skeleton height={30} width={80} className="mx-auto mb-2" />
        <Skeleton height={20} width={120} className="mx-auto" />
        
      </div>
      <div className="space-y-4">
        <Skeleton height={20} />
        <Skeleton height={20} />
      </div>
    </div>
  );
}

export default SkeletonCard;
