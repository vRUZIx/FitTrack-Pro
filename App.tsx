
import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Workout, Meal, ProgressLog } from './types';
import { SAMPLE_WORKOUTS, SAMPLE_MEALS, INITIAL_PROGRESS } from './constants';

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>(SAMPLE_WORKOUTS);
  const [meals, setMeals] = useState<Meal[]>(SAMPLE_MEALS);
  const [progress, setProgress] = useState<ProgressLog[]>(INITIAL_PROGRESS);

  const addWorkout = (workout: Workout) => {
    setWorkouts(prev => [...prev, workout]);
  };

  const addMeal = (meal: Meal) => {
    setMeals(prev => [...prev, meal]);
  };
  
  const logActivity = (caloriesBurned: number, caloriesConsumed: number, workoutCompleted: boolean) => {
      const today = new Date().toISOString().split('T')[0];
      setProgress(prev => {
          const todayLogIndex = prev.findIndex(p => p.date === today);
          if (todayLogIndex > -1) {
              const newProgress = [...prev];
              const todayLog = newProgress[todayLogIndex];
              todayLog.caloriesBurned += caloriesBurned;
              todayLog.caloriesConsumed += caloriesConsumed;
              if (workoutCompleted) {
                todayLog.workoutsCompleted += 1;
              }
              return newProgress;
          } else {
              return [...prev, {
                  date: today,
                  caloriesBurned,
                  caloriesConsumed,
                  workoutsCompleted: workoutCompleted ? 1 : 0
              }];
          }
      });
  }

  return (
    <div className="min-h-screen bg-base-200 text-neutral">
      <Header />
      <main className="p-4 md:p-8">
        <Dashboard
          workouts={workouts}
          meals={meals}
          progress={progress}
          onAddWorkout={addWorkout}
          onAddMeal={addMeal}
          onLogActivity={logActivity}
        />
      </main>
    </div>
  );
}

export default App;
