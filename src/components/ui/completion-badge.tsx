import { CheckCircle } from 'lucide-react';

interface CompletionBadgeProps {
  serviceId: string;
  className?: string;
}

export const CompletionBadge = ({ 
  serviceId: _serviceId, // Will be used to track specific service completion status
  className = "" 
}: CompletionBadgeProps) => {
  // For now, we'll show as not completed. Later this can be connected to user progress tracking
  const isCompleted = false; // This would come from user's progress state based on serviceId

  if (!isCompleted) {
    return null; // Don't show badge if not completed
  }

  return (
    <div className={`inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      <CheckCircle className="w-3 h-3" />
      Completed
    </div>
  );
};
