
import React from 'react';
import { Workout, AnyExercise, ExerciseType } from '../types';

interface ExerciseCardProps {
    exercise: AnyExercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
    // Polymorphism in action: Render different details based on exercise type
    const renderSpecifics = (ex: AnyExercise) => {
        switch (ex.type) {
            case ExerciseType.CARDIO:
                return (
                    <>
                        {ex.distance && <p>Distance: {ex.distance} km</p>}
                        {ex.avgHeartRate && <p>Avg Heart Rate: {ex.avgHeartRate} bpm</p>}
                    </>
                );
            case ExerciseType.STRENGTH:
                return (
                    <>
                        <p>Sets: {ex.sets}</p>
                        <p>Reps: {ex.reps}</p>
                        {ex.weight && <p>Weight: {ex.weight} kg</p>}
                    </>
                );
            case ExerciseType.FLEXIBILITY:
                return <p>Hold: {ex.holdDuration}s per pose</p>;
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-base-200 p-4 rounded-lg border border-base-300">
            <h4 className="font-bold text-secondary">{exercise.exerciseName} ({exercise.exerciseDuration} min)</h4>
            <p className="text-sm text-gray-600 italic mt-1">{exercise.exerciseDescription}</p>
            <div className="text-sm mt-2 text-gray-800">
                {renderSpecifics(exercise)}
                <p className="font-semibold">Calories Burned: ~{exercise.caloriesBurned} kcal</p>
            </div>
        </div>
    );
};


interface ExerciseModalProps {
  workout: Workout;
  onClose: () => void;
  onComplete: (workout: Workout) => void;
}

export const ExerciseModal: React.FC<ExerciseModalProps> = ({ workout, onClose, onComplete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-neutral">{workout.workoutName}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        <div className="overflow-y-auto space-y-4 pr-2">
            {workout.exercises.map(ex => <ExerciseCard key={ex.id} exercise={ex} />)}
        </div>
        <div className="mt-6 pt-4 border-t border-base-300 flex justify-end gap-4">
            <button onClick={onClose} className="bg-base-300 hover:bg-gray-400 text-neutral font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                Cancel
            </button>
            <button onClick={() => onComplete(workout)} className="bg-primary hover:bg-primary-focus text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                Complete Workout
            </button>
        </div>
      </div>
    </div>
  );
};
