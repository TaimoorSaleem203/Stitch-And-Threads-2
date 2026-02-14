import dot from "../assets/PortfolioImg1.png"
import line from "../assets/PortfolioImg2.png"
import icon1 from "../assets/PortfolioIcon1.png"
import icon2 from "../assets/PortfolioIcon2.png"
import icon3 from "../assets/PortfolioIcon3.png"

const cards = [
  {
    icon: icon1, step: "Step 01", title: "Send Your Artwork", desc: "Tell us what you’re aiming for , the style, size, fabric, and any small details that matter. This helps us prepare a file that prints, stitches, or presses exactly the way you need.", color: "bg-side", btn: "Send Now"
  },
  {
    icon:icon2, step:"Step 02", title:"We Prepare Your Files", desc:"Your artwork is carefully digitized or vectorized with the right stitch paths, clean edges, and accurate colors. We make sure the file is production-ready so your output comes out crisp on any machine.", color:"bg-text" ,btn:"In Progress"
  },
  {
    icon:icon3, step:"Step 03", title:"Delivery & Revisions", desc:"You get your files in the exact formats required by your printer or embroidery setup.If something needs a tweak, we fix it fast , no delays, no hassle.", color:"bg-primary" ,btn:"Delivered"
  }
]


const Card = ({ icon, step, title, desc, color, btn }) => {
  return (
    <div className={`font-heading w-full max-w-sm min-h-[500px] mx-auto ${color} p-8 flex flex-col justify-between gap-14`}>
      <div className="flex items-center justify-between">
        <img src={icon} className="lg:w-12" alt="icon" />
        <h4 className="uppercase text-2xl lg:text-3xl text-white font-bold">{step}</h4>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-white font-bold text-3xl lg:text-4xl uppercase">{title}</h1>
        <span className="border-b-2 border-white/50"></span>
        <p className="text-white/50 font-body">{desc}</p>
      </div>
      <div className="flex items-center font-body justify-between">
        <h6 className="text-white text-xl uppercase">{btn}</h6>
        <button aria-label="arrow">
          <i className="text-white/80 ri-arrow-right-long-line"></i>
        </button>
      </div>
    </div>
  )
};

const Portfolio = () => {
  let steps = [1, 2, 3]

  return (
    <section className="bg-white mt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <h1 className="uppercase text-black font-bold text-4xl md:text-5xl lg:text-6xl font-heading">How it<span className="text-primary"> works</span></h1>
          <p className="text-side">A simple process built to deliver high-quality files without delays or confusion.</p>

          <div className="flex w-full items-center justify-center gap-2">
            {steps.map((step, key) => {
              return (
                <div key={key} className="flex gap-2 items-center">
                  <img src={dot} alt="dot" />
                  {key !== steps.length - 1 &&
                    (<img src={line} alt="line" />)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
          {cards.map((card,indx)=>{
            return (
              <Card key={indx} {...card} />
            )
          })}
        </div>
      </div>
    </section>
  )
};


export default Portfolio