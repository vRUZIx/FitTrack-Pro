
import React from 'react';
import { Workout, Meal, ProgressLog } from '../types';
import { WorkoutSection } from './WorkoutSection';
import { NutritionSection } from './NutritionSection';
import { ProgressSection } from './ProgressSection';
import { CustomPlanCreator } from './CustomPlanCreator';

interface DashboardProps {
  workouts: Workout[];
  meals: Meal[];
  progress: ProgressLog[];
  onAddWorkout: (workout: Workout) => void;
  onAddMeal: (meal: Meal) => void;
  onLogActivity: (caloriesBurned: number, caloriesConsumed: number, workoutCompleted: boolean) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ workouts, meals, progress, onAddWorkout, onAddMeal, onLogActivity }) => {
  return (
    <div className="space-y-8">
      <ProgressSection progressData={progress} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <WorkoutSection workouts={workouts} onLogActivity={onLogActivity} />
        </div>
        <div className="space-y-8">
            <NutritionSection meals={meals} onLogMeal={(meal) => onLogActivity(0, meal.calories, false)} />
            <CustomPlanCreator onAddWorkout={onAddWorkout} onAddMeal={onAddMeal} />
        </div>
      </div>
    </div>
  );
};
