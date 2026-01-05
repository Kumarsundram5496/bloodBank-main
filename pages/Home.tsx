import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, HeartPulse, Activity, Calendar, ShieldCheck, UserCheck, Stethoscope, Zap } from 'lucide-react';
import { SERVICES, STATS } from '../constants';
import ChaibasaHospital from '/pages/Images/ChaibasaHospital.png';
import ONE from '/pages/Images/Ser.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ChaibasaHospital}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Compassion in Action, <br />
              <span className="text-red-500">Service for Humanity</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              We provide essential humanitarian assistance to the residents of West Singhbhum and surrounding regions through blood banking, disaster relief, and specialized healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Humanitarian Services at a Glance</h3>
            <p className="text-slate-600">The West Singhbhum branch of the Red Cross operates several critical departments aimed at helping those in need, regardless of background or status.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="h-48 overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to={`/services#${service.id}`} className="inline-flex items-center text-red-600 font-bold text-sm hover:underline">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Benefits & Eligibility Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Benefits Column */}
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Why Donate?</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Benefits of Blood Donation</h3>
              <div className="space-y-6">
                {[
                  { icon: <HeartPulse />, title: "Improves Heart Health", desc: "Regular donation helps reduce iron overload, lowering the risk of heart attacks." },
                  { icon: <Stethoscope />, title: "Free Health Check-up", desc: "Get a mini-physical, including BP, pulse, and hemoglobin testing at every visit." },
                  { icon: <Zap />, title: "New Blood Cell Production", desc: "Donating stimulates your body to produce fresh, healthy red blood cells." },
                  { icon: <ShieldCheck />, title: "Save Multiple Lives", desc: "A single donation can be split into components to save up to 3 lives." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Column */}
            <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Can You Donate?</h3>
                <ul className="space-y-6">
                  {[
                    "Weight: Must be at least 45 - 50 kg.",
                    "Age: Typically between 18 and 65 years.",
                    "Health: Must be in good general health at the time of donation.",
                    "Last Donation: Minimum gap of 3 months since your last donation.",
                    "Lifestyle: No major surgery or tattoos in the last 6-12 months."
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <UserCheck className="text-red-500 w-6 h-6 flex-shrink-0" />
                      <span className="opacity-90">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-sm italic opacity-80 text-center">
                    Note: Final eligibility is determined by the medical staff at the Chaibasa Blood Bank following a screening.
                  </p>
                </div>
              </div>
              <Droplets className="absolute -bottom-10 -right-10 w-64 h-64 text-red-600/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Blood Donation CTA */}
      <section className="py-20 bg-red-600 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 scale-150 rotate-12">
          <Droplets className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="max-w-xl mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"A single pint of blood can save three lives."</h2>
            <p className="text-lg opacity-90 mb-8">
              Our Blood Bank in Chaibasa is constantly in need of donors. Whether you are O+ or a rare AB-, your contribution matters more than you know.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-slate-900 shadow-2xl w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <HeartPulse className="w-6 h-6 mr-2 text-red-600" /> Book an Appointment
            </h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Kumar" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Blood Group</label>
                <select className="w-full px-4 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>Select Group</option>
                  <option>A+</option><option>A-</option>
                  <option>B+</option><option>B-</option>
                  <option>O+</option><option>O-</option>
                  <option>AB+</option><option>AB-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input type="tel" className="w-full px-4 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="+91" />
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Latest Updates</h2>
              <h3 className="text-4xl font-bold text-slate-900">News & Humanitarian Events</h3>
            </div>
            <Link to="/news" className="hidden sm:block text-slate-900 font-bold border-b-2 border-red-600 pb-1">View All Stories</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Massive Blood Donation Camp Organized',
                date: 'Oct 12, 2023',
                img: ONE,
                excerpt: 'Over 500 units of blood collected in a single day at Sakchi Center.'
              },
              {
                title: 'News will be displyed here',
                date: 'Sep 25, 2023',
                img: 'https://picsum.photos/id/3/800/600',
                excerpt: 'NA'
              },
              {
                title: 'News will be displyed here',
                date: 'Aug 10, 2023',
                img: 'https://picsum.photos/id/5/800/600',
                excerpt: 'Na'
              }
            ].map((news, i) => (
              <div key={i} className="flex flex-col group">
                <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                    <Calendar className="w-3 h-3 mr-1" /> {news.date}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 hover:text-red-600 transition-colors cursor-pointer">{news.title}</h4>
                <p className="text-slate-600 text-sm mb-4">{news.excerpt}</p>
                <Link to="/news" className="text-red-600 font-semibold text-sm flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;