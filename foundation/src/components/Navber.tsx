export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent">
      <div className="bg-white p-2 rounded shadow-md">
        <img src="/logo.png" alt="Mutakwa Logo" className="h-10 w-auto" />
      </div>
      <div className="bg-yellow-500 p-2 rounded cursor-pointer hover:bg-yellow-400 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
}