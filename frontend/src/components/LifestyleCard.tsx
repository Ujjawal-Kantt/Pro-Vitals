import React from 'react';

interface LifestyleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric?: {
    value: number;
    unit: string;
  };
}

export function LifestyleCard({ title, description, icon, metric }: LifestyleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col gap-3 md:gap-4">
      {metric && (
        <div className="flex items-center gap-2 text-blue-500">
          {icon}
          <span className="font-bold">{metric.value}</span>
          <span className="text-xs md:text-sm text-gray-500">{metric.unit}</span>
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}