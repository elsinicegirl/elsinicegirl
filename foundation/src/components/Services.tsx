 const Services = () => {
  return (
 <section className="bg-[#f0b323] py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-20">

            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-20 h-[2px] bg-[#5f7f35]" />
              <span className="text-[#5f7f35] font-semibold uppercase tracking-widest">
                What We Do
              </span>
              <div className="w-20 h-[2px] bg-[#5f7f35]" />
            </div>

            <h2 className="text-5xl font-serif text-[#4f7331]">
              Our Programs and Practical Activities
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-[30px] p-10 shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                  alt="digital skills"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#4f7331] mb-6 text-center">
                Digital Skills Development
              </h3>

              <ul className="space-y-3 items-center text-gray-600">
                <li>• Computer Literacy</li>
                <li>• Coding & Programming</li>
                <li>• Graphic Design</li>
                <li>• Data Analysis</li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-[30px] p-10 shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                  alt="vocational training"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#4f7331] mb-6 text-center">
                Vocational Training
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• Electrical Repair</li>
                <li>• Technical Skills</li>
                <li>• Plumbing</li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-[30px] p-10 shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="flex justify-center mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3079/3079165.png"
                  alt="agriculture"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#4f7331] mb-6 text-center">
                Agricultural & Community Programs
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• Nursery Distribution</li>
                <li>• Community Distribution</li>
                <li>• Soap Making</li>
                <li>• Carpentry</li>
                <li>• Masonry</li>
                <li>• Animal Breeding</li>
                <li>• Financial Literacy</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
  );
};
export default Services;