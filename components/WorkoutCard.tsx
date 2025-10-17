
import React from 'react';
import { Workout } from '../types';

interface WorkoutCardProps {
  workout: Workout;
  onStartWorkout: (workout: Workout) => void;
}

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
);
const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 4a1 1 0 100 2h8a1 1 0 100-2H5z" clipRule="evenodd" /></svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);


export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onStartWorkout }) => {
  const totalCalories = workout.exercises.reduce((sum, ex) => sum + ex.caloriesBurned, 0);

  const intensityColors = {
      Low: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      High: 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-base-100 p-4 rounded-lg border border-base-300 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold text-primary">{workout.workoutName}</h3>
            <p className="text-sm text-gray-500">{workout.programName}</p>
        </div>
        <button 
            onClick={() => onStartWorkout(workout)}
            className="bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
        >
            Start
        </button>
      </div>
      <p className="mt-2 text-gray-600">{workout.workoutDescription}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
        <span className="flex items-center"><ClockIcon /> {workout.workoutDuration} min</span>
        <span className="flex items-center"><FireIcon /> {totalCalories} kcal</span>
        <span className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${intensityColors[workout.workoutIntensity]}`}>
            <ZapIcon /> {workout.workoutIntensity} Intensity
        </span>
      </div>
    </div>
  );
};
