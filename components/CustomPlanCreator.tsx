
import React, { useState } from 'react';
import { Workout, Meal } from '../types';
import { SAMPLE_EXERCISES } from '../constants';

interface CustomPlanCreatorProps {
  onAddWorkout: (workout: Workout) => void;
  onAddMeal: (meal: Meal) => void;
}

export const CustomPlanCreator: React.FC<CustomPlanCreatorProps> = ({ onAddWorkout, onAddMeal }) => {
  const [planType, setPlanType] = useState<'workout' | 'meal'>('workout');

  // A simple way to create a 'custom' plan by using existing exercises/meal data
  // In a real app, this would be a more complex form.
  
  const handleCreateWorkout = () => {
      const newWorkout: Workout = {
          programName: "Custom Program",
          programDuration: 1,
          programDescription: "A user-generated workout plan.",
          workoutName: `My Custom Workout #${Math.floor(Math.random() * 100)}`,
          workoutDuration: 45,
          workoutDescription: "A mix of challenging exercises.",
          workoutIntensity: "Medium",
          exercises: [SAMPLE_EXERCISES[0], SAMPLE_EXERCISES[3]]
      };
      onAddWorkout(newWorkout);
  }

  const handleCreateMeal = () => {
      const newMeal: Meal = {
          id: `m${Date.now()}`,
          mealName: `Custom Meal #${Math.floor(Math.random() * 100)}`,
          mealDescription: "A balanced, user-added meal.",
          calories: 500,
          protein: 30,
          carbs: 50,
          fats: 20
      };
      onAddMeal(newMeal);
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-neutral mb-4">Create a Custom Plan</h2>
      <div className="flex border border-gray-200 rounded-lg p-1 mb-4">
        <button
          onClick={() => setPlanType('workout')}
          className={`w-1/2 py-2 rounded-md transition-colors ${planType === 'workout' ? 'bg-primary text-white' : 'text-gray-600'}`}
        >
          Workout
        </button>
        <button
          onClick={() => setPlanType('meal')}
          className={`w-1/2 py-2 rounded-md transition-colors ${planType === 'meal' ? 'bg-primary text-white' : 'text-gray-600'}`}
        >
          Meal
        </button>
      </div>

      {planType === 'workout' ? (
        <div>
          <p className="text-sm text-gray-600 mb-4">Click below to generate a new sample workout plan with pre-selected exercises.</p>
          <button onClick={handleCreateWorkout} className="w-full bg-accent hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Add New Workout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-600 mb-4">Click below to add a new sample meal to your list.</p>
           <button onClick={handleCreateMeal} className="w-full bg-accent hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Add New Meal
          </button>
        </div>
      )}
    </div>
  );
};
