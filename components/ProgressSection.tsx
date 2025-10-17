
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ProgressLog } from '../types';

interface ProgressSectionProps {
  progressData: ProgressLog[];
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({ progressData }) => {
    const formattedData = progressData.map(log => ({
        ...log,
        date: new Date(log.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }));

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-neutral mb-4">Weekly Progress</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={formattedData}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" stroke="#10B981" />
            <YAxis yAxisId="right" orientation="right" stroke="#F59E0B" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="caloriesBurned" name="Calories Burned" stroke="#10B981" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="caloriesConsumed" name="Calories Consumed" stroke="#F59E0B" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
