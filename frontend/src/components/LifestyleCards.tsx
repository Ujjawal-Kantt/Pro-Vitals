import React from "react";

import nutritionCard from "../assets/images/nutrition_card.jpg";
import physicalActivityCard from "../assets/images/physical_card.jpg";
import sleepCard from "../assets/images/sleep_card.jpg";
import socialCard from "../assets/images/social_card.jpg";
import stressCard from "../assets/images/stress_card.jpg";
import substanceCard from "../assets/images/substantive_card.jpg";
import nutrition from "../assets/vectors/nutrition.png";
import physical from "../assets/vectors/physical.png";
import sleep from "../assets/vectors/sleep.png";
import social from "../assets/vectors/social.png";
import stress from "../assets/vectors/stress.png";
import substantive from "../assets/vectors/substance.png";
const cards = [
  {
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    image: nutritionCard,
    badgeIcon: nutrition,
    badgeValue: "121/80",
    badgeUnit: "mmHg",
  },
  {
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    image: physicalActivityCard,
    badgeIcon: physical,
    badgeValue: "32",
    badgeUnit: "minutes",
  },
  {
    title: "Restorative Sleep",
    description:
      "Consistent, quality sleep is essential for optimal brain function and physical health.",
    image: sleepCard,
    badgeIcon: sleep,
    badgeValue: "8",
    badgeUnit: "hours",
  },
  {
    title: "Social connection",
    description:
      "Strong social connections improve health outcomes and overall well-being.",
    image: socialCard,
    badgeIcon: social,
    badgeValue: "60",
    badgeUnit: "bpm",
  },
  {
    title: "Stress management",
    description:
      "Effective stress management techniques help maintain mental and physical health.",
    image: stressCard,
    badgeValue: "Feeling",
    badgeUnit: "better",
    badgeIcon: stress,
  },
  {
    title: "Substance abuse",
    description:
      "Avoiding harmful substances is crucial for maintaining long-term health.",
    image: substanceCard,
    badgeIcon: substantive,
    badgeValue: "62",
    badgeUnit: "days",
  },
];
// Update LifestyleCards.tsx
export function LifestyleCards() {
  return (
    <div className="overflow-x-auto no-scrollbar pb-8">
      <div className="flex gap-8 min-w-max px-4">
        {" "}
        {/* Increased gap */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[400px] bg-white rounded-xl shadow-lg overflow-hidden" /* Increased width from 300px to 400px */
          >
            {/* Image Container with Relative Position for Badge */}
            <div className="relative h-[250px]">
              {" "}
              {/* Increased height from 200px to 250px */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Badge at bottom-left */}
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full flex items-center gap-2">
                <img src={card.badgeIcon} alt="" className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-base text-gray-900">
                    32
                  </span>
                  <span className="text-sm text-gray-500">minutes</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {" "}
              {/* Increased padding from p-6 to p-8 */}
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>{" "}
              {/* Increased text size and margin */}
              <p className="text-gray-600 text-base">{card.description}</p>{" "}
              {/* Increased text size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
