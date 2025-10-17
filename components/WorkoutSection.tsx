
import React, { useState } from 'react';
import { Workout, AnyExercise } from '../types';
import { WorkoutCard } from './WorkoutCard';
import { ExerciseModal } from './ExerciseModal';

interface WorkoutSectionProps {
  workouts: Workout[];
  onLogActivity: (caloriesBurned: number, caloriesConsumed: number, workoutCompleted: boolean) => void;
}

export const WorkoutSection: React.FC<WorkoutSectionProps> = ({ workouts, onLogActivity }) => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const handleStartWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
  };
  
  const handleCloseModal = () => {
    setSelectedWorkout(null);
  };
  
  const handleCompleteWorkout = (workout: Workout) => {
    const totalCalories = workout.exercises.reduce((sum, ex) => sum + ex.caloriesBurned, 0);
    onLogActivity(totalCalories, 0, true);
    handleCloseModal();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-neutral mb-4">Workouts</h2>
      <div className="space-y-4">
        {workouts.length > 0 ? (
          workouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} onStartWorkout={handleStartWorkout} />
          ))
        ) : (
          <p className="text-gray-500">No workouts available. Create one below!</p>
        )}
      </div>
      {selectedWorkout && (
        <ExerciseModal
          workout={selectedWorkout}
          onClose={handleCloseModal}
          onComplete={handleCompleteWorkout}
        />
      )}
    </div>
  );
};
