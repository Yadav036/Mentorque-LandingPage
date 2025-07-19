import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 border-t border-white/10">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-white">

          {/* Brand Info */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Mentorque</h2>
            <p className="text-sm text-gray-400 max-w-sm">
              Mentorque is an end to end job hunt program engineered to help professionals land and clear interviews faster.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <Mail size={16} /> 
                <a 
                  href="mailto:info@mentorquedu.com" 
                  className="hover:text-white transition-colors"
                >
                  info@mentorquedu.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> 
                <a 
                  href="tel:+918486242054" 
                  className="hover:text-white transition-colors"
                >
                  +91 8486242054
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/mentorquedu/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="hover:opacity-80 transition-opacity"
              >
                <Linkedin size={30} color="white" />
              </a>
              <a 
                href="https://www.instagram.com/mentorquedu/?igsh=bmlic3didDBvemNs#" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram size={30} color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-white/10 pt-4">
          © 2025 Mentorque. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;