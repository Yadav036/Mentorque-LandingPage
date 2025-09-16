"use client"
import { ArrowUpRight, Calendar, } from "lucide-react"
import { Link } from "react-router-dom";


import ScrollTextReveal from "./ui/scrollTextReveal"
import ScrollChatReveal from "./chatReveal"

const About = () => {


  return (
    <section className="min-h-screen  bg-black relative" id="about">


      <div className="text-center py-16 md:px-8 ">
        <ScrollTextReveal />
         <div className="text-center px-8 my-16">
        <p className="text-xl md:text-2l m-3 text-gray-400 font-semibold"> WELCOME TO </p>
      
        <h1 className="text-3xl md:text-5xl text-white mb-20">
        The Turning Point of Your <span className="text-blue-400 drop-shadow-lg">Job Hunt.</span> <br/>
        </h1>
       
      </div>
        <div className="mb-24">
          <ScrollChatReveal />
        </div>

        <div className="text-center px-8">
        
        <div
          className="flex flex-col sm:flex-row opacity-0 animate-fade-in justify-center mt-12"
          style={{ animationDelay: "0.7s" }}
        >
         <Link
  to="/book-call"
  className="flex items-center justify-center group text-center bg-gradient-to-r from-white to-gray-100 text-black font-bold py-5 px-6 rounded-full transition-all duration-500 shadow-2xl hover:shadow-white/30 transform hover:scale-105 text-lg backdrop-blur-sm border border-white/20 hover:from-blue-50 hover:to-white w-fit mx-auto"
>
  <Calendar className="mr-3 w-6 h-6" />
  Book Now
  <ArrowUpRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
</Link>
        </div>
      </div>
      </div>
     

    </section>
  )
}

export default About
