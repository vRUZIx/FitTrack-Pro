
import React, { useState } from 'react';
import { Meal, UserProfile } from '../types';

const BMR_FACTORS = {
    male: { base: 88.362, weight: 13.397, height: 4.799, age: 5.677 },
    female: { base: 447.593, weight: 9.247, height: 3.098, age: 4.330 },
};

const ACTIVITY_MULTIPLIERS = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
};

export const NutritionSection: React.FC<{ meals: Meal[], onLogMeal: (meal: Meal) => void }> = ({ meals, onLogMeal }) => {
    const [profile, setProfile] = useState<UserProfile>({
        weight: 70, height: 175, age: 30, gender: 'male', activityLevel: 'moderate'
    });
    const [dailyCalories, setDailyCalories] = useState<number>(0);
    const [selectedMealId, setSelectedMealId] = useState<string>('');

    const calculateCalories = () => {
        const factors = BMR_FACTORS[profile.gender];
        const bmr = factors.base + (factors.weight * profile.weight) + (factors.height * profile.height) - (factors.age * profile.age);
        const tdee = bmr * ACTIVITY_MULTIPLIERS[profile.activityLevel];
        setDailyCalories(Math.round(tdee));
    };

    const handleProfileChange = <K extends keyof UserProfile,>(key: K, value: UserProfile[K]) => {
        setProfile(prev => ({...prev, [key]: value}));
    }

    const handleLogMeal = () => {
        const mealToLog = meals.find(m => m.id === selectedMealId);
        if(mealToLog) {
            onLogMeal(mealToLog);
            setSelectedMealId('');
        }
    }
    
    return (
        <div className="p-6 bg-white rounded-xl shadow-md space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-neutral mb-4">Calorie Calculator</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    {/* Form inputs */}
                    <div>
                        <label>Weight (kg)</label>
                        <input type="number" value={profile.weight} onChange={e => handleProfileChange('weight', Number(e.target.value))} className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input type="number" value={profile.height} onChange={e => handleProfileChange('height', Number(e.target.value))} className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" value={profile.age} onChange={e => handleProfileChange('age', Number(e.target.value))} className="w-full p-2 border rounded-md" />
                    </div>
                     <div>
                        <label>Gender</label>
                        <select value={profile.gender} onChange={e => handleProfileChange('gender', e.target.value as 'male'|'female')} className="w-full p-2 border rounded-md bg-white">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                         <label>Activity Level</label>
                        <select value={profile.activityLevel} onChange={e => handleProfileChange('activityLevel', e.target.value as UserProfile['activityLevel'])} className="w-full p-2 border rounded-md bg-white">
                            <option value="sedentary">Sedentary</option>
                            <option value="light">Light</option>
                            <option value="moderate">Moderate</option>
                            <option value="active">Active</option>
                            <option value="very_active">Very Active</option>
                        </select>
                    </div>
                </div>
                <button onClick={calculateCalories} className="w-full mt-4 bg-secondary hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">Calculate</button>
                {dailyCalories > 0 && <p className="mt-4 text-center text-lg font-bold">Daily Goal: <span className="text-secondary">{dailyCalories}</span> kcal</p>}
            </div>
            <div className="border-t pt-6">
                <h2 className="text-2xl font-bold text-neutral mb-4">Log a Meal</h2>
                 <select value={selectedMealId} onChange={e => setSelectedMealId(e.target.value)} className="w-full p-2 border rounded-md bg-white mb-4">
                    <option value="">-- Select a meal --</option>
                    {meals.map(meal => <option key={meal.id} value={meal.id}>{meal.mealName} ({meal.calories} kcal)</option>)}
                </select>
                <button onClick={handleLogMeal} disabled={!selectedMealId} className="w-full bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-300">Log Meal</button>
            </div>
        </div>
    );
};
