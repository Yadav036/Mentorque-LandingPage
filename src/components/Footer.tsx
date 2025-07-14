import React from "react";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-white">

          {/* Brand Info */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Mentorque</h2>
            <p className="text-sm text-gray-400 max-w-sm">
              Empowering careers through mentorship. Connecting aspiring professionals with experienced mentors for guidance, growth, and success.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2"><Mail size={16} /> support@mentorque.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (234) 567-8901</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <Facebook size={20} color="white" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80">
                <Twitter size={20} color="white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80">
                <Instagram size={20} color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-white/10 pt-4">
          © 2024 Mentorque. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
