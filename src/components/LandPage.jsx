import LandImg from "../assets/LandPageImg.png"

const LandPage = () => {
  return (
    <main className='w-full py-16 p-6 md:p-8 lg:p-12 bg-secondary'>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 lg:gap-14 lg:grid-cols-2 justify-center">
        <div className="flex flex-col gap-8 mx-auto items-center justify-center">
          <h1 className="flex flex-col gap-2 text-center text-primary uppercase tracking-normal text-4xl md:text-5xl lg:text-6xl font-heading font-semibold">High-Quality
            <br /><span className="text-black block"> Embroidery & Patches,</span> Done Your Way</h1>
          <img src={LandImg} alt="landImg" className="h-auto object-contain w-full" />
        </div>

        <form action="" className="mx-auto bg-white border-2 p-6 lg:p-8 rounded-lg shadow-sm font-body font-medium flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-heading uppercase font-bold text-primary text-center">Get Best Price</h1>
          
          <input type="text" placeholder="Name" className="border outline-none focus:ring-1 focus:ring-primary border-gray-400 rounded-lg p-2" />
          <input type="text" placeholder="Email" className="border outline-none focus:ring-1 focus:ring-primary border-gray-400 rounded-lg p-2" />
          
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Phone" className="border outline-none focus:ring-1 focus:ring-primary border-gray-400 rounded-lg p-2" />
            <input type="text" placeholder="Quantity" className="border outline-none focus:ring-1 focus:ring-primary border-gray-400 rounded-lg p-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="border border-gray-400 bg-white p-3 rounded outline-none focus:ring-2 focus:ring-primary">
              <option>Size of Placement</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select className="border border-gray-400 bg-white p-3 rounded outline-none focus:ring-2 focus:ring-primary">
              <option>Patch type</option>
              <option>Embroidery</option>
              <option>Printed</option>
              <option>Woven</option>
            </select>
          </div>

          <textarea
            rows={4}
            placeholder={`Instructions, If no image file to upload, please explain what you'd like in a patch here. i.e. Text "Stitch N Threads" White background, and black text`}
            className="border border-gray-400 bg-white p-3 rounded resize-none outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <div className="border border-gray-400 bg-white rounded p-6 flex flex-col items-center justify-center gap-3 text-gray-600">

            <i class="ri-upload-2-line text-5xl cursor-pointer"></i>
            <p className="text-lg">Drop files here or</p>

            <input
              type="file"
              id="actual-btn"
              className="bg-primary hidden text-white px-6 py-2 mt-2 rounded font-medium hover:opacity-90 transition"
            >
            </input>
            <label
              for="actual-btn"
              className="bg-primary cursor-pointer text-white px-6 py-2 mt-2 rounded font-medium hover:opacity-90 transition"
            >
              Choose File
            </label>

          </div>

          <button
            className="bg-primary text-white px-6 py-3 text-lg mt-2 rounded font-medium hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>

      </div>
    </main>
  )
}

export default LandPage