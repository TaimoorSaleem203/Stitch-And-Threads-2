import badge1 from "../assets/AboutBadge1.png";
import badge2 from "../assets/AboutBadge2.png";

const Header = () => {
  const info = [
    {
      title: "Stitch Accuracy",
      desc: "Precise stitch placement to maintain clean edges and sharp details.",
      percent: "95%",
    },
    {
      title: "Fabric Compatibility",
      desc: "Digitizing adjusted for cotton, polyester, caps, jackets, and more.",
      percent: "90%",
    },
    {
      title: "Design Balance",
      desc: "Proper density and spacing to prevent puckering or thread breaks.",
      percent: "95%",
    },
  ];

  return (
    <div className="flex flex-col gap-10" id="about">
      {/* Text Content */}
      <div className="flex flex-col gap-6 items-start">
        <h2 className="font-heading uppercase text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
          What is <br />
          Embroidery <span className="text-slate-900">Digitizing?</span>
        </h2>
        <p className="max-w-xl leading-relaxed text-slate-600 text-lg font-medium">
          Embroidery digitizing is the process of transforming logos or artwork
          into a digital stitch file that machines can read. At{" "}
          <span className="text-primary font-bold">Stitch N Threads</span>, we
          focus on smooth edges and proper density so your design pops on any
          fabric.
        </p>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-lg">
        {info.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-slate-800 font-bold text-xl lg:text-2xl font-heading uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="font-bold text-primary font-body">{item.percent}</p>
            </div>
            
            <p className="text-slate-500 text-sm mb-4 leading-snug">{item.desc}</p>

            <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-visible">
              <div
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{ width: item.percent }}
              >
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full shadow-md group-hover:scale-125 transition-transform"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="mt-24 md:mt-36 layout-container px-4 md:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-8">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200 hover:-translate-y-2 transition-transform duration-500">
             <img src={badge1} alt="Quality Certification Badge" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200 hover:-translate-y-2 transition-transform duration-500 delay-75">
             <img src={badge2} alt="Technical Precision Badge" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;