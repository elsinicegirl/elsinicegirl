import heroImage from "../assets/Hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Mutakwa Foundation</h1>
        <p className="italic text-sm md:text-lg mb-8 tracking-widest uppercase opacity-90">
          Empowering Communities • Driving Innovation • Building Futures
        </p>
        
        <p className="text-base md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
          Mutakwa foundation is founded to empower individuals and communities through innovation, 
          practical education and economic opportunities, enabling them to become agents of 
          change and achieve sustainable development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-opacity-90 transition">
            Explore our work
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}