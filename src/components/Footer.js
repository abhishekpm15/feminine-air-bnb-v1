import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-24 h-96">
      <div className="flex justify-evenly bg-gray-300 h-96 space-y-4">
        <div className="mt-10">
          <ul className="flex flex-col space-y-7 text-lg text-left">
            <li className="font-semibold">Help center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
          </ul>
        </div>
        <div className="mt-10">
          <ul className="flex flex-col space-y-7 text-lg text-left">
            <li className="font-semibold">Hosting</li>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>
        <div className="mt-10">
          <ul className="flex flex-col space-y-7 text-lg text-left">
            <li className="font-semibold">Airbnb</li>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      <div className="text-base font-semibold bg-gray-300 p-10">© 2024 Abhishek, Made with ❤️</div>
    </div>
  );
};

export default Footer;
