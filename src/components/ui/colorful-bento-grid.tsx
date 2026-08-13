import React from "react";
import { Gift } from 'lucide-react';

export const Component = () => {
  return (
    <section id="free-tools" className="colorful-bento-section bg-white rounded-3xl p-6 md:p-10 my-16 max-w-6xl mx-auto border border-slate-200 shadow-xl">

      <div className="flex flex-col md:flex-row items-end justify-between w-full mb-8">
        <div className="flex flex-col w-full items-start justify-start gap-4">
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end w-full justify-between">
            <h2 className="relative text-3xl md:text-5xl font-sans font-semibold max-w-xl text-left leading-tight text-slate-900">
              Enterprise Power, <br/> 
              <span className="text-gradient">
                <Gift className="inline-flex text-sky-600 fill-sky-100 rotate-12 mr-2" size={38} strokeWidth={2} />
                23 Modules Included.
              </span>
            </h2>
            <p className="max-w-md font-semibold text-sm text-slate-500">
              Binaryaxon HRMS replaces 5 separate HR software tools with one unified ecosystem. Multi-company attendance, WPS compliance, GPS geofencing, and digital employee files.
            </p>
          </div>

          <div className="flex flex-row text-sky-600 gap-6 items-start justify-center mt-2">
            <p className="text-sm font-medium bg-sky-50 px-3 py-1 rounded-full border border-sky-200">+100,000 Employees Managed</p>
            <p className="text-sm font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-emerald-700">100% WPS & GCC Tax Compliant</p> 
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="md:col-span-2 overflow-hidden hover:scale-[1.01] hover:shadow-xl transition-all duration-200 ease-in-out min-h-[300px] relative bg-sky-50 border border-sky-100 rounded-xl flex flex-col md:flex-row items-center justify-between p-6 group cursor-pointer">
          <div className="relative flex flex-col items-start justify-center gap-2 z-10">
            <p className="-rotate-1 text-sm font-medium text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
              Biometric & Mobile GPS
            </p>
            <h3 className="-rotate-1 text-2xl md:text-3xl font-semibold text-slate-900 bg-white/90 backdrop-blur px-5 py-2 rounded-full border border-slate-200">
              Attendance & Geofencing
            </h3>
          </div>  
          <div className="w-full md:w-1/2 h-48 md:h-full relative rounded-xl overflow-hidden mt-4 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
              alt="Biometric Attendance" 
              className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out relative bg-amber-50 border border-amber-100 min-h-[300px] rounded-xl flex flex-col items-start justify-between p-6 group cursor-pointer">
          <div className="flex flex-col items-start justify-center gap-1 z-10">
            <p className="rotate-3 text-sm font-medium text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              1-Click Automated SIF
            </p>
            <h3 className="rotate-3 text-xl font-semibold text-slate-900 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
              UAE/GCC Payroll
            </h3>
          </div>  
          <div className="w-full h-36 relative rounded-xl overflow-hidden my-2">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
              alt="WPS Payroll Engine" 
              className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>            
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out relative bg-emerald-50 border border-emerald-100 min-h-[300px] rounded-xl flex flex-col items-start justify-between p-6 group cursor-pointer">
          <div className="flex flex-col items-start justify-center gap-1 z-10">
            <p className="-rotate-3 text-sm font-medium text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              QR Security & Cafeteria
            </p>
            <h3 className="-rotate-3 text-xl font-semibold text-slate-900 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
              Gate & Meal Passes
            </h3>
          </div>
          <div className="w-full h-36 relative rounded-xl overflow-hidden my-2">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
              alt="Gate & Meal Pass Scanner" 
              className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out relative bg-violet-50 border border-violet-100 min-h-[300px] rounded-xl flex flex-col items-start justify-between p-6 group cursor-pointer">
          <div className="flex flex-col items-start justify-center gap-1 z-10">
            <p className="rotate-3 text-sm font-medium text-violet-800 bg-violet-100 px-3 py-1 rounded-full">
              Mobile Portal
            </p>
            <h3 className="rotate-3 text-xl font-semibold text-slate-900 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
              Employee ESS App
            </h3>
          </div>
          <div className="w-full h-36 relative rounded-xl overflow-hidden my-2">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
              alt="Employee Mobile ESS App" 
              className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Card 5 */}
        <div className="overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-200 ease-in-out relative bg-rose-50 border border-rose-100 min-h-[300px] rounded-xl flex flex-col items-start justify-between p-6 group cursor-pointer">
          <div className="flex flex-col items-start justify-center gap-1 z-10">
            <p className="-rotate-3 text-sm font-medium text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
              Expiry Alerts
            </p>
            <h3 className="-rotate-3 text-xl font-semibold text-slate-900 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
              Document Vault
            </h3>
          </div>
          <div className="w-full h-36 relative rounded-xl overflow-hidden my-2">
            <img 
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" 
              alt="Digital Document Archiving" 
              className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
