import { Briefcase, CheckCircle, Star, Clock, Target, Code, Globe, Palette } from 'lucide-react';
import { CompletionBadge } from '@/components/ui/completion-badge';
import Navbar from '@/components/Navbar';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const PortfolioTemplates = () => {
  const portfolioFeatures = [
    {
      title: "Custom Design",
      description: "Personalized layouts that reflect your unique brand and style",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Responsive Development",
      description: "Mobile-first designs that look perfect on all devices",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "SEO Optimization",
      description: "Built for search engines to help recruiters find you",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Domain & Hosting",
      description: "Professional domain setup and reliable hosting included",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const portfolioExamples = [
    {
      title: "Business Analyst Portfolio",
      industry: "Data & Analytics",
      description: "Clean, professional design showcasing data visualization projects and analytical insights",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80",
      features: ["Interactive Dashboards", "Case Studies", "Data Visualizations", "Technical Skills"]
    },
    {
      title: "Software Developer Portfolio", 
      industry: "Technology",
      description: "Modern, tech-focused design highlighting coding projects and technical expertise",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2070&q=80",
      features: ["GitHub Integration", "Live Project Demos", "Tech Stack Display", "Code Samples"]
    },
    {
      title: "Business Development Portfolio",
      industry: "Sales & Marketing", 
      description: "Results-driven design emphasizing achievements and business growth metrics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
      features: ["Revenue Metrics", "Client Testimonials", "Success Stories", "Industry Awards"]
    },
    {
      title: "Cybersecurity Professional",
      industry: "Security & Compliance",
      description: "Sleek, security-focused design showcasing certifications and security projects",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2070&q=80",
      features: ["Security Certifications", "Penetration Testing", "Risk Assessments", "Compliance Reports"]
    },
    {
      title: "Product Manager Portfolio",
      industry: "Product & Strategy",
      description: "Strategic design highlighting product launches and user experience focus",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80",
      features: ["Product Roadmaps", "User Research", "Launch Metrics", "Feature Development"]
    },
    {
      title: "Creative Professional",
      industry: "Design & Media",
      description: "Visually stunning design showcasing creative work and artistic projects",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=2071&q=80",
      features: ["Portfolio Gallery", "Creative Process", "Client Work", "Design Tools"]
    }
  ];

  const portfolioPackage = {
    title: "Professional Portfolio Development",
    duration: "5-7 days",
    description: "Complete portfolio website with custom design and professional hosting",
    includes: [
      "Custom portfolio website design",
      "Mobile-responsive development",
      "Professional domain setup",
      "1-year hosting included",
      "SEO optimization",
      "Contact form integration",
      "Portfolio template selection",
      "Content organization guidance",
      "Launch support & training"
    ]
  };

  return (
    <div>
      <div className="min-h-screen bg-black">
        <Navbar />

        {/* Hero Section */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
           
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <h1 className="text-4xl md:text-6xl mt-10 text-white leading-tight">
                  Portfolio <span className="text-blue-400">Development</span>
                </h1>
                <CompletionBadge serviceId="portfolio-templates" />
              </div>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-8">
                Build a stunning portfolio that showcases your skills and projects
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Custom Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Professional Hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-100">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Examples */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl text-white leading-tight mb-6">
                Portfolio <span className="text-blue-400">Examples</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Stunning portfolios tailored to different professions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {portfolioExamples.map((example, index) => (
                <div 
                  key={index} 
                  className="relative group backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/15"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-400/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {example.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl md:text-2xl text-white mb-3">
                      {example.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                      {example.description}
                    </p>
                    <div className="space-y-2">
                      {example.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/[0.04] via-transparent to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Features */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl text-white leading-tight mb-6">
                What We <span className="text-blue-400">Include</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Everything you need for a professional online presence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.05] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-500"
                >
                  <div className="text-blue-400 mb-6 flex justify-center drop-shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/[0.03] via-transparent to-purple-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Package */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl text-white leading-tight mb-6">
                Our Portfolio <span className="text-blue-400">Service</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
                Complete solution to showcase your professional brand
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/15 overflow-hidden">
                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl text-white mb-4">
                      {portfolioPackage.title}
                    </h3>
                    <div className="text-blue-400 flex items-center justify-center gap-2 text-lg">
                      <Clock className="w-5 h-5" />
                      {portfolioPackage.duration}
                    </div>
                  </div>

                  <p className="text-gray-100 mb-8 text-center text-xl leading-relaxed">{portfolioPackage.description}</p>

                  <div className="space-y-6 mb-8">
                    {portfolioPackage.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 drop-shadow-lg" />
                        <span className="text-gray-100 text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppCTA label="Portfolio Development" />
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/[0.04] via-transparent to-purple-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400/[0.05] to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black py-12 px-4 md:px-8 lg:px-12">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl text-white leading-tight mb-8">
              Ready to Build Your <span className="text-blue-400">Portfolio?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-8">
              Showcase your skills with a professional portfolio that gets you noticed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCTA label="Portfolio Development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplates;
