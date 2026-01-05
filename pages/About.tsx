import React from 'react';
import { Target, Users, Shield, Award, HeartPulse, History, Globe } from 'lucide-react';
import BloodBank from '../pages/Images/BloodBank.png';
import Birth from '../pages/Images/Birth.png';
import BirthI from '../pages/Images/Bindia.png';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Red Cross West Singhbhum</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Serving the people of West Singhbhum since 1950
          </p>
        </div>
      </section>

      {/* Global & National History Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Global History */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">History of Red Cross Movement</h2>
              </div>
              <img 
                src={Birth}
                alt="Jean Henry Dunant and Battle of Solferino" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                Swiss businessman, <strong>Jean Henry Dunant</strong> was appalled by the condition of the wounded soldiers at the <strong>battle field of Solferino</strong>, Italy in 1859. He wrote the book 'Memory of Solferino' suggesting a neutral organization to aid wounded soldiers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                International Red Cross Movement was established by the <strong>Geneva Convention of 1864</strong>. The emblem is derived from the reversal of the Swiss national flag to honor the country where it was found.
              </p>
            </div>

            {/* Indian Red Cross History */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <History className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-bold text-slate-900">Origin of Indian Red Cross</h2>
              </div>
              <img 
                src={BirthI}
                alt="Historical Indian Red Cross Document" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                A bill to constitute the Indian Red Cross Society was introduced on 3rd March 1920 by <strong>Sir Claude Hill</strong>. It became <strong>Act XV of 1920</strong> on 20th March 1920.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The Indian Red Cross Society has 35 State/Union Territories Branches with more than 700 district and sub-district branches serving the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src={BloodBank} alt="Old Red Cross Bhavan" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-red-600 uppercase tracking-widest text-sm">Our Legacy</h2>
            <h3 className="text-4xl font-bold mb-8 text-slate-900">A Heritage of Humanitarianism</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                The Indian Red Cross Society, West Singhbhum District Branch, started its journey decades ago with a small team of dedicated doctors and volunteers. 
              </p>
              <p>
                From responding to major national disasters to providing the daily requirement of blood for thalassemia patients in West Singhbhum, our organization stands at the forefront of social service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision - CSS UNCHANGED */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold mb-6 text-slate-900">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed">
              To inspire, encourage and initiate at all times all forms of humanitarian activities so that human suffering can be minimized and even prevented and thus contribute to creating a more congenial climate for peace.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8">
              <Shield className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold mb-6 text-slate-900">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              To be the leading humanitarian organization in West Singhbhum, Jharkhand, improving the lives of vulnerable people by mobilizing the power of humanity and the spirit of selfless service.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-16 text-slate-900">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HeartPulse className="w-6 h-6" />, title: 'Compassion', desc: 'Feeling and sharing the suffering of others and taking action.' },
              { icon: <Users className="w-6 h-6" />, title: 'Inclusivity', desc: 'Serving everyone regardless of caste, creed, or religion.' },
              { icon: <Award className="w-6 h-6" />, title: 'Transparency', desc: 'Openness in our operations and utilization of funds.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Commitment', desc: 'A dedicated focus on long-term humanitarian outcomes.' }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h5 className="font-bold text-lg mb-3">{v.title}</h5>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;