const testimonials = [
  {
    name: "Asende",
    text: "The digital skills development and vocational training program changed my life. I was the first in my family to go beyond grade 12, and now I'm giving back as a teacher in my village.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
  },
  {
    name: "Eca",
    text: "I love the economic empowerment program. I was able to widen my trade and now I have more than 50 employees working in my agricultural business.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
  },
];

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#facc15"
      className="w-5 h-5 "
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
        5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 
        3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 
        1.425L12 18.354 7.22 21.18c-.996.608-2.231-.29-1.96-1.425
        l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305
        l5.404-.434 2.082-5.005z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-[#C4AA10] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-left px-3 mb-10">
          Voices From The Community 
        </h2>

        {/* FIXED GRID */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-36 border-t p-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg border border-gray-200"
            >
              {/* TOP SECTION */}
              <div className="flex flex-col items-left gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                 

                  {/* YELLOW STARS */}
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} />
                    ))}
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <p className="text-gray-600 italic leading-relaxed">
                "{item.text}"
              </p>
               <h4 className="font-semibold text-lg text-gray-800 py-5">
                    {item.name}
                  </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;