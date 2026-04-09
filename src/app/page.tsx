'use client';
import React, { useState, useEffect } from 'react';


const MOCK_VEHICLES = [
  { id: 1, make: 'Ferrari', model: 'SF90 Stradale', year: 2023, price: 524000, color: 'Rosso Corsa', hp: 986, topSpeed: '211 mph' },
  { id: 2, make: 'Lamborghini', model: 'Revuelto', year: 2024, price: 608000, color: 'Arancio Apodis', hp: 1001, topSpeed: '217 mph' },
  { id: 3, make: 'McLaren', model: '750S', year: 2024, price: 324000, color: 'Aurora Blue', hp: 740, topSpeed: '206 mph' },
  { id: 4, make: 'Bugatti', model: 'Chiron Super Sport', year: 2022, price: 3825000, color: 'Nocturne Black', hp: 1578, topSpeed: '273 mph' },
  { id: 5, make: 'Ferrari', model: '296 GTB', year: 2023, price: 322000, color: 'Giallo Modena', hp: 819, topSpeed: '205 mph' },
  { id: 6, make: 'Lamborghini', model: 'Huracán Sterrato', year: 2023, price: 273000, color: 'Verde Gea', hp: 602, topSpeed: '162 mph' },
];

// --- SIMPLE SVG ICONS ---
const CarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// --- PRIMARY COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <span className="text-red-600"><CarIcon /></span>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">High-End <span className="text-red-600">Motorsports</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-red-600' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-sm text-sm font-bold transition-all">
              CLIENT LOGIN
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-zinc-300 border-b border-zinc-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="text-red-600"><CarIcon /></span>
            <span className="text-lg font-bold tracking-tighter text-white uppercase">High-End <span className="text-red-600">Motorsports</span></span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-6 leading-relaxed mx-auto md:mx-0">
            The premier digital showroom for luxury automotive masterpieces. Ferrari, Bugatti, and McLaren.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Team Members</h4>
          <ul className="text-zinc-500 space-y-2 text-sm">
            <li>Joshua D'Angelo</li>
            <li>Vu Huynh (Eric)</li>
            <li>Antwaun Clarke</li>
            <li>Kyle Galang</li>
            <li>Pietro Cavenaghi</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
          <p className="text-zinc-500 text-sm">concierge@highendmotorsports.com</p>
          <p className="text-zinc-500 text-sm">+1 (555) 012-3456</p>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} High-End Motorsports Project. CPAN144 Phase 1.
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const HomePage = ({ vehicles, onExploreClick }) => {
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
              {vehicles.map(v => <option key={v.id} value={v.id}>{v.make} {v.model}</option>)}
            </select>
            <select 
              value={selectedB}
              onChange={(e) => setSelectedB(e.target.value)}
              className="bg-zinc-900 text-white p-3 border border-zinc-800 outline-none"
            >
              <option value="">Select Vehicle 2...</option>
              {vehicles.map(v => <option key={v.id} value={v.id}>{v.make} {v.model}</option>)}
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

const InventoryPage = ({ vehicles }) => {
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
  const [expandedMember, setExpandedMember] = useState(null);

  // Detailed group member info
  const teamMembers = [
    { 
      id: 'joshua',
      name: "Joshua D'Angelo", 
      role: "API Integration & Data",
      email: "joshua.dangelo@highendmotorsports.com",
      phone: "+1 (555) 101-0001"
    },
    { 
      id: 'vu',
      name: "Vu Huynh (Eric)", 
      role: "State Management & Logic",
      email: "vu.huynh@highendmotorsports.com",
      phone: "+1 (555) 101-0002"
    },
    { 
      id: 'antwaun',
      name: "Antwaun Clarke", 
      role: "Styling & UI/UX Design",
      email: "antwaun.clarke@highendmotorsports.com",
      phone: "+1 (555) 101-0003"
    },
    { 
      id: 'kyle',
      name: "Kyle Galang", 
      role: "Front End Development",
      email: "kyle.galang@highendmotorsports.com",
      phone: "+1 (555) 101-0004"
    },
    { 
      id: 'pietro',
      name: "Pietro Cavenaghi", 
      role: "Front End Development",
      email: "pietro.cavenaghi@highendmotorsports.com",
      phone: "+1 (555) 101-0005"
    },
    {
      id: 'paul',
      name: "Paul Solomon",
      role: "Styling & UI/UX Design",
      email: "paul@highendmotorsports.com",
      phone: "+1 (555) 101-0006"
    }
  ];

  const toggleMember = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black uppercase italic mb-8">Contact Our Team</h2>
      
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Interactive Team Directory */}
        <div>
          <p className="text-zinc-400 mb-8">
            Click on a specialist below to view their direct contact information and department details.
          </p>
          
          <div className="space-y-3 mb-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-zinc-800 bg-zinc-900 overflow-hidden transition-all">
                <button 
                  onClick={() => toggleMember(member.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800 transition-colors"
                >
                  <span className="font-bold text-white">{member.name}</span>
                  <ChevronIcon className={`transition-transform duration-300 ${expandedMember === member.id ? 'rotate-90 text-red-600' : 'text-zinc-600'}`} />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${expandedMember === member.id ? 'max-h-48 opacity-100 p-4 border-t border-zinc-800' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Specialty</span>
                      <p className="text-red-500 text-sm font-medium uppercase">{member.role}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Direct Email</span>
                        <p className="text-zinc-300 text-xs truncate">{member.email}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Mobile</span>
                        <p className="text-zinc-300 text-xs">{member.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-2 text-sm text-zinc-400">
            <p><strong>Corporate HQ:</strong> 123 Motorsports Way, Digital City</p>
            <p><strong>General Concierge:</strong> concierge@highendmotorsports.com</p>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="bg-zinc-900 p-8 border border-zinc-800">
          <h3 className="text-xl font-bold uppercase mb-6">Send an Inquiry</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="First Name" className="bg-zinc-950 border border-zinc-800 p-3 text-white outline-none focus:border-red-600" />
              <input required type="text" placeholder="Last Name" className="bg-zinc-950 border border-zinc-800 p-3 text-white outline-none focus:border-red-600" />
            </div>
            <input required type="email" placeholder="Email Address" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white outline-none focus:border-red-600" />
            <textarea placeholder="How can we help you?" className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white outline-none h-32 focus:border-red-600"></textarea>
            <button className={`w-full py-4 font-bold uppercase tracking-widest transition-all ${sent ? 'bg-green-600' : 'bg-red-600 hover:bg-red-700'}`}>
              {sent ? 'Inquiry Submitted' : 'Submit Inquiry'}
            </button>
            {sent && <p className="text-green-500 text-xs text-center mt-2">Thank you! A team member will contact you shortly.</p>}
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