
import { AnyExercise, Meal, Workout, ExerciseType, ProgressLog } from './types';

export const SAMPLE_EXERCISES: AnyExercise[] = [
  {
    id: 'ex1',
    exerciseName: 'Treadmill Running',
    exerciseDuration: 30,
    exerciseDescription: 'Run at a steady pace on the treadmill.',
    caloriesBurned: 300,
    type: ExerciseType.CARDIO,
    distance: 5,
    avgHeartRate: 145,
  },
  {
    id: 'ex2',
    exerciseName: 'Bench Press',
    exerciseDuration: 20,
    exerciseDescription: 'Classic chest exercise using a barbell.',
    caloriesBurned: 150,
    type: ExerciseType.STRENGTH,
    sets: 4,
    reps: 8,
    weight: 80,
  },
  {
    id: 'ex3',
    exerciseName: 'Yoga Flow',
    exerciseDuration: 45,
    exerciseDescription: 'A series of flowing yoga poses to improve flexibility and balance.',
    caloriesBurned: 200,
    type: ExerciseType.FLEXIBILITY,
    holdDuration: 30
  },
    {
    id: 'ex4',
    exerciseName: 'Squats',
    exerciseDuration: 15,
    exerciseDescription: 'Compound lower body exercise.',
    caloriesBurned: 100,
    type: ExerciseType.STRENGTH,
    sets: 3,
    reps: 12,
    weight: 60,
  },
];

export const SAMPLE_WORKOUTS: Workout[] = [
  {
    programName: 'Full Body Blast',
    programDuration: 4,
    programDescription: 'A 4-week program designed to build overall strength and endurance.',
    workoutName: 'Day 1: Upper Body Focus',
    workoutDuration: 60,
    workoutDescription: 'Focus on chest, back, shoulders, and arms.',
    workoutIntensity: 'Medium',
    exercises: [SAMPLE_EXERCISES[1], SAMPLE_EXERCISES[3]],
  },
  {
    programName: 'Cardio King',
    programDuration: 8,
    programDescription: 'An 8-week program to maximize cardiovascular health.',
    workoutName: 'HIIT Session',
    workoutDuration: 45,
    workoutDescription: 'High-Intensity Interval Training for maximum calorie burn.',
    workoutIntensity: 'High',
    exercises: [SAMPLE_EXERCISES[0]],
  },
];

export const SAMPLE_MEALS: Meal[] = [
    {
        id: 'm1',
        mealName: 'Grilled Chicken Salad',
        mealDescription: 'Lean protein with fresh vegetables.',
        calories: 450,
        protein: 40,
        carbs: 15,
        fats: 25,
    },
    {
        id: 'm2',
        mealName: 'Oatmeal with Berries',
        mealDescription: 'A hearty and healthy breakfast.',
        calories: 350,
        protein: 10,
        carbs: 60,
        fats: 8,
    },
    {
        id: 'm3',
        mealName: 'Salmon with Quinoa',
        mealDescription: 'Rich in omega-3s and complete protein.',
        calories: 600,
        protein: 45,
        carbs: 50,
        fats: 28,
    }
];

// FIX: The 'ProgressLog' type was used without being imported. It has been added to the import statement from './types'.
export const INITIAL_PROGRESS: ProgressLog[] = [
    { date: '2023-10-01', caloriesBurned: 350, caloriesConsumed: 2200, workoutsCompleted: 1 },
    { date: '2023-10-02', caloriesBurned: 0, caloriesConsumed: 1900, workoutsCompleted: 0 },
    { date: '2023-10-03', caloriesBurned: 500, caloriesConsumed: 2100, workoutsCompleted: 1 },
    { date: '2023-10-04', caloriesBurned: 200, caloriesConsumed: 2000, workoutsCompleted: 1 },
    { date: '2023-10-05', caloriesBurned: 750, caloriesConsumed: 2400, workoutsCompleted: 2 },
    { date: '2023-10-06', caloriesBurned: 150, caloriesConsumed: 1800, workoutsCompleted: 0 },
    { date: '2023-10-07', caloriesBurned: 600, caloriesConsumed: 2300, workoutsCompleted: 1 },
];