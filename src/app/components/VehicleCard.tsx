'use client';
import React from 'react';

// Define the shape of a Vehicle for TypeScript
interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  hp: number;
  color?: string;
  topSpeed?: string;
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 hover:border-red-600 transition-all duration-300 group">
      {/* Brand Label */}
      <span className="text-red-600 text-[10px] font-bold uppercase tracking-widest">
        {vehicle.make}
      </span>
      
      {/* Model Name */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
        {vehicle.model}
      </h3>
      
      {/* Specs Section */}
      <div className="text-zinc-400 text-sm space-y-1 mb-6">
        <p><span className="text-zinc-600 uppercase text-[10px] font-bold mr-2">Year:</span> {vehicle.year}</p>
        <p><span className="text-zinc-600 uppercase text-[10px] font-bold mr-2">Output:</span> {vehicle.hp} HP</p>
        {vehicle.topSpeed && (
            <p><span className="text-zinc-600 uppercase text-[10px] font-bold mr-2">V-Max:</span> {vehicle.topSpeed}</p>
        )}
      </div>
      
      {/* Footer / Price */}
      <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider">MSRP</span>
          <span className="font-bold font-mono text-white">
            ${vehicle.price.toLocaleString()}
          </span>
        </div>
        
        <button className="text-xs font-bold uppercase text-red-600 hover:text-white transition-colors px-3 py-1 border border-transparent hover:border-red-600 rounded-sm">
          View Specs
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;