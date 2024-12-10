import React from "react";
import { Utensils, Moon, Heart, Users, Brain, Ban } from "lucide-react";

import nutritionCard from "../assets/images/nutrition_card.jpg";
import physicalActivityCard from "../assets/images/physical_card.jpg";
import sleepCard from "../assets/images/sleep_card.jpg";
import socialCard from "../assets/images/social_card.jpg";
import stressCard from "../assets/images/stress_card.jpg";
import substanceCard from "../assets/images/substantive_card.jpg";

const cards = [
  {
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    image: nutritionCard,
    badge: "121/80 mmHg",
  },
  {
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    image: physicalActivityCard,
    badge: "32 minutes",
  },
  {
    title: "Restorative Sleep",
    description:
      "Consistent, quality sleep is essential for optimal brain function and physical health.",
    image: sleepCard,
    badge: "8 hours",
  },
  {
    title: "Social connection",
    description:
      "Strong social connections improve health outcomes and overall well-being.",
    image: socialCard,
    badge: "60 bpm",
  },
  {
    title: "Stress management",
    description:
      "Effective stress management techniques help maintain mental and physical health.",
    image: stressCard,
    badge: "Feeling better",
  },
  {
    title: "Substance abuse",
    description:
      "Avoiding harmful substances is crucial for maintaining long-term health.",
    image: substanceCard,
    badge: "62 days",
  },
];
// Update LifestyleCards.tsx
export function LifestyleCards() {
  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-6 min-w-max px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[300px] bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image Container with Relative Position for Badge */}
            <div className="relative h-[200px]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Badge at bottom-left */}
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {card.badge}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
