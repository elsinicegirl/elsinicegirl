const FocusAreas = () => {
  const areas = [
    { title: "Education", desc: "Scholarships and school support." },
    { title: "Healthcare", desc: "Community medical outreach." },
    { title: "Women Empowerment", desc: "Skill development programs." },
    { title: "Environment", desc: "Tree planting and sustainability." },
    { title: "Environment", desc: "Tree planting and sustainability." },
    { title: "Environment", desc: "Tree planting and sustainability." },
  ];

  return (
    <section className="clear-both p-16 bg-primary text-blue px-36">
      <h3 className="text-3xl font-bold text-center mb-15">Core Focus Areas</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-6 gap-6">
        {areas.map((area, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">{area.title}</h4>
            <p className="text-sm">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;