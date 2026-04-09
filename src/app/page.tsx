'use client';
import React, { useState } from 'react';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MOCK_VEHICLES } from './constants';

// --- TYPES ---
interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  hp: number;
  
}

// --- ICONS (Keep these here or move to an icons file) ---
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- PAGES ---

const HomePage = ({ vehicles, onExploreClick }: { vehicles: Vehicle[], onExploreClick: () => void }) => {
  const [selectedA, setSelectedA] = useState('');
  const [selectedB, setSelectedB] = useState('');

  const carA = vehicles.find(v => v.id === parseInt(selectedA));
  const carB = vehicles.find(v => v.id === parseInt(selectedB));

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center bg-zinc-900">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase italic">
            Speed <span className="text-red-600">&</span> Luxury
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
            Your exclusive gateway to the world's most prestigious automotive collections.
          </p>
          <button 
            onClick={onExploreClick}
            className="bg-red-600 text-white px-8 py-3 font-bold rounded-sm inline-flex items-center gap-2 hover:bg-red-700 transition-all active:scale-95"
          >
            EXPLORE INVENTORY <ChevronIcon />
          </button>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white uppercase text-center mb-10">Compare Performance</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <select 
              value={selectedA}
              onChange={(e) => setSelectedA(e.target.value)}
              className="bg-zinc-900 text-white p-3 border border-zinc-800 outline-none"
            >
              <option value="">Select Vehicle 1...</option>
              {vehicles.map(v => <option key={v.id} value={v.id.toString()}>{v.make} {v.model}</option>)}
            </select>
            <select 
              value={selectedB}
              onChange={(e) => setSelectedB(e.target.value)}
              className="bg-zinc-900 text-white p-3 border border-zinc-800 outline-none"
            >
              <option value="">Select Vehicle 2...</option>
              {vehicles.map(v => <option key={v.id} value={v.id.toString()}>{v.make} {v.model}</option>)}
            </select>
          </div>

          {(carA || carB) && (
            <div className="bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
              <div className="grid grid-cols-3 p-4 bg-zinc-800/50 font-bold text-xs uppercase border-b border-zinc-700">
                <span>Metric</span>
                <span className="text-red-600">{carA?.model || '-'}</span>
                <span className="text-red-600">{carB?.model || '-'}</span>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-zinc-800">
                <span className="text-zinc-500">HP</span>
                <span>{carA?.hp || '-'}</span>
                <span>{carB?.hp || '-'}</span>
              </div>
              <div className="grid grid-cols-3 p-4">
                <span className="text-zinc-500">Price</span>
                <span>{carA ? `$${carA.price.toLocaleString()}` : '-'}</span>
                <span>{carB ? `$${carB.price.toLocaleString()}` : '-'}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const InventoryPage = ({ vehicles }: { vehicles: Vehicle[] }) => {
  const [filter, setFilter] = useState('');
  const [brand, setBrand] = useState('All');

  const filtered = vehicles.filter(v => {
    const searchMatch = v.model.toLowerCase().includes(filter.toLowerCase());
    const brandMatch = brand === 'All' || v.make === brand;
    return searchMatch && brandMatch;
  });

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <h2 className="text-3xl font-bold uppercase italic">Showroom</h2>
        <div className="flex gap-4">
          <div className="relative">
            <span className="absolute left-3 top-2 text-zinc-500"><SearchIcon /></span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-zinc-900 border border-zinc-800 pl-10 pr-4 py-2 text-white outline-none"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <select 
            className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-white outline-none"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="All">All Brands</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="McLaren">McLaren</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map(v => (
          <div key={v.id} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-red-600 transition-colors">
            <span className="text-red-600 text-[10px] font-bold uppercase tracking-widest">{v.make}</span>
            <h3 className="text-xl font-bold text-white mb-4">{v.model}</h3>
            <div className="text-zinc-400 text-sm space-y-1 mb-6">
              <p>Year: {v.year}</p>
              <p>Performance: {v.hp} HP</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
              <span className="font-bold font-mono">${v.price.toLocaleString()}</span>
              <button className="text-xs font-bold uppercase text-red-600">View Specs</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const teamMembers = [
    { id: 'joshua', name: "Joshua D'Angelo", role: "API Integration & Data", email: "joshua.dangelo@highendmotorsports.com", phone: "+1 (555) 101-0001" },
    { id: 'vu', name: "Vu Huynh (Eric)", role: "State Management & Logic", email: "vu.huynh@highendmotorsports.com", phone: "+1 (555) 101-0002" },
    { id: 'antwaun', name: "Antwaun Clarke", role: "Styling & UI/UX Design", email: "antwaun.clarke@highendmotorsports.com", phone: "+1 (555) 101-0003" },
    { id: 'kyle', name: "Kyle Galang", role: "Front End Development", email: "kyle.galang@highendmotorsports.com", phone: "+1 (555) 101-0004" },
    { id: 'pietro', name: "Pietro Cavenaghi", role: "Front End Development", email: "pietro.cavenaghi@highendmotorsports.com", phone: "+1 (555) 101-0005" },
    { id: 'paul', name: "Paul", role: "Styling & UI/UX Design", email: "paul@highendmotorsports.com", phone: "+1 (555) 101-0006" }
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black uppercase italic mb-8">Contact Our Team</h2>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="space-y-3 mb-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-zinc-800 bg-zinc-900 overflow-hidden transition-all">
                <button 
                  onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800 transition-colors"
                >
                  <span className="font-bold text-white">{member.name}</span>
                  <ChevronIcon className={`transition-transform duration-300 ${expandedMember === member.id ? 'rotate-90 text-red-600' : 'text-zinc-600'}`} />
                </button>
                {expandedMember === member.id && (
                  <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
                     <p className="text-red-500 text-sm font-medium uppercase">{member.role}</p>
                     <p className="text-zinc-300 text-xs">{member.email}</p>
                     <p className="text-zinc-300 text-xs">{member.phone}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900 p-8 border border-zinc-800">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Email" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white" />
            <textarea placeholder="Message" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white h-32" />
            <button className="w-full py-4 font-bold uppercase bg-red-600 hover:bg-red-700">
              {sent ? 'Sent' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage vehicles={MOCK_VEHICLES} onExploreClick={() => setCurrentPage('inventory')} />;
      case 'inventory': return <InventoryPage vehicles={MOCK_VEHICLES} />;
      case 'contact': return <ContactPage />;
      default: return <HomePage vehicles={MOCK_VEHICLES} onExploreClick={() => setCurrentPage('inventory')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="min-h-[70vh]">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}