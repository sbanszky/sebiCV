import { Network, Server, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center space-x-8">
          <a href="https://www.credly.com/badges/ba1a0da5-339d-473c-b1f8-4a361c21ff37" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900/70 rounded-full backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <Network className="w-8 h-8 text-orange-500" />
          </a>
          <a href="https://subnetting.online" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900/70 rounded-full backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <Server className="w-8 h-8 text-orange-500" />
          </a>
          <a href="https://www.credly.com/badges/9cbf36b1-602c-4255-9588-925259526527" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-900/70 rounded-full backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <Shield className="w-8 h-8 text-orange-500" />
          </a>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          Sebastian Banszky
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
          <p className="font-light">Network Engineer</p>
          <p className="text-sm text-gray-400">Over a decade of hands-on experience</p>
        </div>

        <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-2xl">
          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            I'm a <span className="text-orange-500 font-semibold">"hands-on" network engineer</span> with over a decade of experience across 
            <span className="text-orange-400 font-semibold"> service providers, enterprise, and data center environments</span>. 
            I prefer action over words — I'm an introvert who prefers to speak less and deliver more.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
