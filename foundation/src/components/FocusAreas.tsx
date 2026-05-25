const areas = [
  { title: "Technology and innovation", desc: "Advanced digital tech and applied science", icon: "💡" },
  { title: "Nature Conservation", desc: "Environment, biodiversity, and resource management", icon: "🌍" },
  { title: "Creativity", desc: "Tech innovation and problem-solving", icon: "⚙️" },
  { title: "Community Self-reliance", desc: "Capacity building and reducing dependency", icon: "🤝" },
  { title: "Economic empowerment", desc: "Skills and jobs for women, youth and vulnerable groups", icon: "💰" },
  { title: "Idea development", desc: "Transforming idea into community solution", icon: "🛠️" },
];

export default function FocusAreas() {
  return (
    <section className="bg-[#4d6a33] min-h-screen py-20 px-16">
      <div className="flex flex-col container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">Core Focus Areas</h2>
         <div className="grid grid-cols-2 gap-6 md:grid-cols-6 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-4xl">{area.icon}</span>
              <div>
                <h3 className="text-xl font-bold mb-1">{area.title}</h3>
                <p className="text-sm text-gray-200 font-light opacity-80">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}