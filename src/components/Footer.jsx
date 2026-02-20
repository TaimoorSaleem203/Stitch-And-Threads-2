import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#1A1C24] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Address
            </h3>
            <p className="text-sm leading-relaxed">
              123 Main Street <br />
              Texas, NY 10001
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Contact
            </h3>
            <p className="text-sm mb-2">Example@gmail.com</p>
            <p className="text-sm">+1 500 321 852 789</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Social
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
            </ul>
          </div>

        </div>


        <div className="border-t border-gray-700 my-10"></div>


        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="text-white font-medium font-heading text-xl tracking-wide">
            STITCH <span className="text-primary font-semibold">&</span> THREADS
          </h2>

          <p className="text-sm text-gray-400 text-center font-body md:text-right">
            Copyright © Stitch & Threads | Designed by Nabia Shakeel
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
