import React from 'react';
import { Utensils, Moon, Heart, Users, Brain, Ban } from 'lucide-react';

const cards = [
  {
    title: 'Nutrition',
    description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    icon: <Utensils className="w-5 h-5" />,
    metric: { value: 121, unit: 'kcal/g' }
  },
  {
    title: 'Physical activity',
    description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    icon: <Heart className="w-5 h-5" />,
    metric: { value: 32, unit: 'minutes' }
  },
  {
    title: 'Restorative Sleep',
    description: 'Consistent, quality sleep is essential for optimal brain function and physical health.',
    icon: <Moon className="w-5 h-5" />,
    metric: { value: 8, unit: 'hours' }
  },
  {
    title: 'Social connection',
    description: 'Strong social connections improve health outcomes and overall well-being.',
    icon: <Users className="w-5 h-5" />,
    metric: { value: 150, unit: 'minutes' }
  },
  {
    title: 'Stress management',
    description: 'Effective stress management techniques help maintain mental and physical health.',
    icon: <Brain className="w-5 h-5" />,
    metric: { value: 20, unit: 'minutes' }
  },
  {
    title: 'Substance abuse',
    description: 'Avoiding harmful substances is crucial for maintaining long-term health.',
    icon: <Ban className="w-5 h-5" />,
    metric: { value: 0, unit: 'drinks' }
  }
];

export function LifestyleCards() {
  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-6 min-w-max px-4">
        {cards.map((card, index) => (
          <div key={index} className="w-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-blue-500">
              {card.icon}
              <span className="font-bold">{card.metric.value}</span>
              <span className="text-sm text-gray-500">{card.metric.unit}</span>
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}