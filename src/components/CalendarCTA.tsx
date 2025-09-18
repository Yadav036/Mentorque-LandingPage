import { Link } from "react-router-dom";

const CalendarCTA = ({ label }) => (
  <Link to="/book-call">
    <button className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:shadow-2xl hover:shadow-blue-400/20 hover:-translate-y-1 backdrop-blur-sm">
      <span className="relative z-10 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 
                   2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                   16H5V9h14v11z" />
        </svg>
        {label}
      </span>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </Link>
);

export default CalendarCTA;
