
export enum ExerciseType {
  CARDIO = 'Cardio',
  STRENGTH = 'Strength',
  FLEXIBILITY = 'Flexibility',
}

export interface FitnessProgram {
  programName: string;
  programDuration: number; // in weeks
  programDescription: string;
}

export interface Workout extends FitnessProgram {
  workoutName: string;
  workoutDuration: number; // in minutes
  workoutDescription: string;
  workoutIntensity: 'Low' | 'Medium' | 'High';
  exercises: AnyExercise[];
}

export interface Exercise {
  id: string;
  exerciseName: string;
  exerciseDuration: number; // in minutes
  exerciseDescription: string;
  caloriesBurned: number;
  type: ExerciseType;
}

export interface CardioExercise extends Exercise {
  type: ExerciseType.CARDIO;
  distance?: number; // in km
  avgHeartRate?: number; // bpm
}

export interface StrengthExercise extends Exercise {
  type: ExerciseType.STRENGTH;
  sets: number;
  reps: number;
  weight?: number; // in kg
}

export interface FlexibilityExercise extends Exercise {
    type: ExerciseType.FLEXIBILITY;
    holdDuration: number; // in seconds
}


export type AnyExercise = CardioExercise | StrengthExercise | FlexibilityExercise;

export interface Meal {
  id: string;
  mealName: string;
  mealDescription: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface UserProfile {
  weight: number; // kg
  height: number; // cm
  age: number; // years
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
}

export interface NutritionPlan {
  calculateCalories(profile: UserProfile): number;
  logMeal(meal: Meal): void;
}

export interface ProgressLog {
  date: string; // YYYY-MM-DD
  caloriesBurned: number;
  caloriesConsumed: number;
  workoutsCompleted: number;
}
