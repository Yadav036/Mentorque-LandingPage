import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MentorqueFAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      title: "Mentorship Program Eligibility and Enrollment",
      content: [
        {
          subtitle: "Qualified Participants",
          text: "Students and professionals seeking to land interviews, accelerate their career growth, use our tool and features and access 1-1 mentorship from industry experts are eligible to join our programs."
        },
        {
          subtitle: "How to Enroll",
          text: "Visit our website to book a session or enroll onto our free 14 day trial period. We have a 14 day refund policy where the particapnts can choose to withdraw from the program, and any amount that they paid is refunded in full."
        },
        {
          subtitle: "Program Availability",
          text: "Enrollment is subject to mentor availability and program capacity. Only one mentorship program per participant can be active at a time."
        }
      ]
    },
    {
      title: "Supported Features and Technologies",
      content: [
        {
          subtitle: "Live Mentorship",
          text: "1-on-1 mentorship calls are available via online platforms, with support for video, audio, and chat communication."
        },
        {
          subtitle: "Progress Tracking",
          text: "Participants can track their progress with personalized roadmaps, accountability check-ins, and feedback from mentors."
        },
        {
          subtitle: "Supported Devices",
          text: "Mentorship sessions can be accessed from any device with an internet connection and a supported browser."
        },
        {
          subtitle: "Languages",
          text: "Currently, mentorship is available in English. Additional language support may be added in the future."
        }
      ]
    },
    {
      title: "Accessibility and Support Features",
      content: [
        {
          subtitle: "24/7 Support",
          text: "Mentorque offers round-the-clock customer support for technical issues and booking inquiries."
        },
        {
          subtitle: "Accessibility",
          text: "If you require specific accommodations, please contact support before booking your session."
        }
        
      ]
    },
    {
      title: "Additional Services and Product Offerings",
      content: [
        {
          subtitle: "Resume Review",
          text: "Resume reviews are available to all enrolled participants."
        },
        {
          subtitle: "Networking Sprint",
          text: "Specialized programs to improve networking skills and increase interview callbacks."
        },
        {
          subtitle: "Career Clarity Sprint",
          text: "Programs designed to help participants clarify their career goals and improve resume shortlist rates."
        }
      ]
    },
    {
      title: "Trade-In and Referral Programs",
      content: [
        {
          subtitle: "Referral Bonuses",
          text: "Refer a friend to Mentorque and receive a bonus or discount on your next session (subject to program terms and availability)."
        }
        
      ]
    },
    {
      title: "Subscriptions and Payments",
      content: [
        {
          subtitle: "Subscription Required",
          text: "Some advanced features or ongoing mentorship plans may require a subscription. Details will be provided at the time of booking."
        },
        {
          subtitle: "Payment Methods",
          text: "All major credit cards and digital payment methods are accepted."
        },
        {
          subtitle: "Refunds and Cancellations",
          text: "Refunds are subject to Mentorque's cancellation policy. Please review the terms and conditions before booking."
        }
      ]
    },
    {
      title: "Terms and Conditions",
      content: [
        {
          subtitle: "Changes to Features",
          text: "Mentorque reserves the right to modify or discontinue features, services, or programs at any time."
        },
        {
          subtitle: "Regional Availability",
          text: "Some features or programs may not be available in all regions or for all participants."
        }
        
      ]
    }
  ];

  return (
    <div className=" bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Mentorship
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqData.map((section, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <h2 className="text-lg sm:text-xl text-white pr-4">
                  {section.title}
                </h2>
                <div className="flex-shrink-0">
                  {openSection === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Section Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === index ? 'max-h-svh opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2 space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-gray-700 pl-4">
                      <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       
       
      </div>
    </div>
  );
};

export default MentorqueFAQ;