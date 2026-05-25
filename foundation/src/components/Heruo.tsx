import heroImage from "../assets/hero.png";
import Navbar from "../components/Navbar";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
     >
    
      <div className="absolute inset-0 z-0 stroke-none bg-local">
    
        <img 
          src={heroImage} 
          className="w-full h-full object-cover"
        />
        <Navbar/>
    
       <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]">
       </div>
      </div>

     <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
         <p className="text-base
 text-white
 md:text-xl leading-relaxed mb-15 max-w-3xl mx-auto font-light">
          Mutakwa foundation is founded to empower individuals and communities through innovation, 
          practical education and economic opportunities, enabling them to become agents of 
          change and achieve sustainable development.
        </p>
        <div className="flex justify-between item-center space-x-20-y-20">
          <button className="bg-white shadow-lg shadow-indigo-500/50 text-black mx-8 px-6 py-3 rounded-md font-semibold">
            Explore our works
          </button>
          <button className="bg-white text-black mx-8 px-6 py-3 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>
          
    </section>
  );
};

export default Hero;