import heroImage from "../assets/section2.jpg";
export default function Stats() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img 
        src={heroImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Market background"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]">
       </div>
      <div className="absolute inset-y-0 left-0 bg-yellow/80"></div>

      <div className="container mx-auto m-5 px-6 py-8 relative grid md:grid-cols-2 gap-18 items-center">

{/* Left Side: Stats */}
  <div className="flex justify-between mb-5 justify-end md:justify-center gap-15">
        <div className="space-y-25">
          <div>
            <h2 className="text-5xl font-bold text-white mt-4">12K+</h2>
            <p className="text-lg uppercase tracking-wider font-light">Lives Impacted</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-white mb-2">48+</h2>
            <p className="text-lg uppercase tracking-wider font-light">Communities reached out</p>
          </div>
        </div>

        {/* Right Side: Quote Card */}
      
       <div className="w-3/4 relative right-0 p-10 m-10">   
        <div className="bg-[#fdf3d3] p-10 mb-5 md:p-12 rounded-2xl shadow-2xl text-center flex flex-col items-center">
          <img src="/icons/community-icon.svg" className="h-16 w-16 mb-6 opacity-70" alt="Icon" />
          <p className="text-[#6d5b2c] text-xl font-serif italic leading-relaxed mb-8">
            "If you empower me, I empower others, together we transform the world."
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold transition shadow-lg">
            <span className="text-red-600 text-xl">❤</span> DONATE HERE
          </button>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}
