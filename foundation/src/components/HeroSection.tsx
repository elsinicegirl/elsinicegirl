import { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen w-full text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home-section.png')",
        }}
      />

      {/* Gradient Overlay (exact dark top fade style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e3b4f]/90 via-[#0e3b4f]/70 to-[#0e3b4f]/60" />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0e3b4f]/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <h1 className="font-display text-xl md:text-2xl">
              Mutakwa Foundation
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#programs" className="hover:text-yellow-400">Programs</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-7 h-[3px] bg-yellow-400 rounded"></span>
            <span className="w-7 h-[3px] bg-yellow-400 rounded"></span>
            <span className="w-7 h-[3px] bg-yellow-400 rounded"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0e3b4f] z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 text-lg">
          <button
            className="self-end text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-20 pt-20">

        <p className="italic text-sm md:text-lg mb-4 animate-fade-up">
          Empowering Communities · Driving Innovation · Building Futures
        </p>

        <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 animate-fade-up">
          Mutakwa Foundation
        </h1>

        <p className="max-w-3xl text-sm md:text-base leading-relaxed mb-8 opacity-90 animate-fade-up">
          Mutakwa foundation is founded to empower individuals and communities
          through innovation, practical education and economic opportunities,
          enabling them to become agents of change and achieve sustainable development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-medium">
            Explore our work
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 hover:bg-gray-200 transition rounded-full font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;