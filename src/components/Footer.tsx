
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-8 border-t border-gray-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-white">
            Mentorque
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2024 Mentorque. All rights reserved. Empowering careers through mentorship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
