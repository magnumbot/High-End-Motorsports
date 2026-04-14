'use client';
import React from "react";


const CarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);
export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="text-red-600"><img src="/logo/HEM-logo.png"  alt="Logo"className="w-23 h-auto" /></span>
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
            <li>Paul Solomon</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
          <p className="text-zinc-500 text-sm">concierge@highendmotorsports.com</p>
          <p className="text-zinc-500 text-sm">+1 (555) 012-3456</p>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-xs">
        © {new Date().getFullYear()} High-End Motorsports
      </div>
    </div>
  </footer>
);
}