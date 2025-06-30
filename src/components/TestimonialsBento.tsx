
import React from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsBento = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nilesh Khatiya",
      role: "Lead Data Analyst @ ATMS, India",
      content: "Doing self prep, I couldn't even clear the assessments of companies. The change Mentorque brought in the preparation strategy was phenomenal. They helped me with crucial learning materials, 1-1 mentorships, guided me with the preparation roadmap, and constant accountability tracking.",
      rating: 5,
      size: "large"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Software Engineer @ Google",
      content: "The personalized mentorship was game-changing. Got my dream job in just 3 weeks!",
      rating: 5,
      size: "medium"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Product Manager @ Meta",
      content: "Outstanding guidance and support throughout my job search journey.",
      rating: 5,
      size: "small"
    },
    {
      id: 4,
      name: "Emily Johnson",
      role: "Data Scientist @ Netflix",
      content: "The structured approach and expert mentorship helped me land multiple offers. Highly recommend!",
      rating: 5,
      size: "medium"
    },
    {
      id: 5,
      name: "David Park",
      role: "DevOps Engineer @ Amazon",
      content: "Excellent program with real results.",
      rating: 5,
      size: "small"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "UX Designer @ Apple",
      content: "The mock interviews and feedback were incredibly valuable in preparing me for the real thing.",
      rating: 5,
      size: "medium"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2";
      case "small":
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/10 text-black border border-black/20 mb-4">
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who transformed their careers with Mentorque.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 ${getSizeClasses(testimonial.size)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-gray-400 flex-shrink-0" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBento;
