
import React from 'react';
import { CheckCircle2, Heart, Users, Globe } from 'lucide-react';

const Volunteer: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Become a Volunteer</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of volunteers in Jamshedpur who give their time to help humanity. No special skills needed—just a willing heart.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Volunteer With Us?</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-xl mr-4 text-red-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Give Back to Your Community</h4>
                  <p className="text-slate-600 text-sm">Impact the lives of your fellow residents in Jamshedpur directly through our local programs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-xl mr-4 text-red-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Gain Valuable Experience</h4>
                  <p className="text-slate-600 text-sm">Develop new skills in leadership, communication, and first aid that will stay with you forever.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-xl mr-4 text-red-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Meet Like-minded People</h4>
                  <p className="text-slate-600 text-sm">Build a network of passionate individuals committed to making the world a better place.</p>
                </div>
              </div>
               <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-xl mr-4 text-red-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-900">Be Part of a Global Movement</h4>
                  <p className="text-slate-600 text-sm">You'll be part of the International Red Cross and Red Crescent Movement, the world's largest humanitarian network.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Volunteer Registration Form</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Registration successful! We will contact you soon."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number</label>
                <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="+91" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Areas of Interest</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Blood Donation Camp', 'Disaster Relief', 'Administrative Help', 'Youth Red Cross', 'Teaching/Vocational', 'Medical Assistance'].map(area => (
                    <label key={area} className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded text-red-600 focus:ring-red-500" />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Why do you want to join?</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Tell us a bit about your motivation..."></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg text-lg">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
