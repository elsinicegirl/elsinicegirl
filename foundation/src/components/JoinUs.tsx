import { Heart } from "lucide-react";
const JoinUs = () => {
  return (
    <section className="py-24 border-[#d89coo] bg-[#C4AA10]">
      <div className="max-w-[80%] mx-auto text-center px-6 border-t py-4 px-6">
      <h2 className="text-3xl font-bold mb-6 text-[#2d2d2d] ">Join Our Mission</h2>
      <p className="flex font-semibold text-white leading-9 mb-10">Whether you are volnteer, donate, or simply share our story act of support creates ripples that transform communities. Together we can build a world where opportunity knows no boundaries.</p>
      <div className="flex flex-wrap justify-center gap-6 space-x-4">
        <div className="flex justify-center gap-3">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          <Heart size={18}
          />
           Make Donation
        </button>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-500">
        Become volnteer
        </button>
      </div>
      </div>  
    </section>
  );
};

export default JoinUs;