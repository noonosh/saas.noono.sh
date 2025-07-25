import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import {
  Code,
  Zap,
  Database,
  Globe,
  Star,
  Mail,
  Github,
  Linkedin,
  Shield,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".math-bg",
      { opacity: 0 },
      { opacity: 0.1, duration: 2, ease: "power2.out" }
    );
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "FULL-STACK DEVELOPMENT",
      description:
        "Building scalable web applications with React, Next.js, Django, and modern tech stacks from concept to deployment",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "BACKEND & APIS",
      description:
        "Designing robust APIs, database architecture, and cloud infrastructure with Python, C#, and Azure",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SAAS DEVELOPMENT",
      description:
        "Creating complete SaaS solutions with subscription models, user management, and CI/CD pipelines",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PERFORMANCE OPTIMIZATION",
      description:
        "Optimizing applications for speed, scalability, and user experience using advanced algorithms",
    },
  ];

  const expertise = [
    {
      category: "FRONTEND",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      level: "EXPERT",
      description:
        "Building modern, responsive user interfaces that users love",
    },
    {
      category: "BACKEND",
      skills: ["Python", "Django", "C#", "Java", "REST APIs", "Node.js"],
      level: "EXPERT",
      description: "Architecting scalable server-side solutions and APIs",
    },
    {
      category: "CLOUD & DEVOPS",
      skills: [
        "Azure",
        "CI/CD",
        "Docker",
        "SQL/NoSQL",
        "PostgreSQL",
        "AWS",
        "GCP",
      ],
      level: "ADVANCED",
      description: "Deploying and managing applications in the cloud",
    },
  ];

  const testimonials = [
    {
      name: "Nargiza",
      role: "Owner, Geeza Tours",
      content:
        "Noonosh built our tourism marketing website with impressive speed and professionalism. The site was delivered rapidly, looks fantastic, and has already helped us attract more clients. Highly recommended for anyone needing a quick and effective web solution!",
      rating: 5,
    },
    {
      name: "Oydin",
      role: "CEO, Aromatic O2",
      content:
        "Noonosh was incredibly responsive throughout the entire development process, always quick to address our questions and feedback. The quality of the SaaS platform exceeded our expectations—it's robust, beautifully designed, and works flawlessly. I highly recommend Noonosh for anyone seeking top-notch service and outstanding results!",
      rating: 5,
    },
    {
      name: "Jay Khans",
      role: "Software Engineer, UES-JSC",
      content:
        "Working with Noonosh on our software team was a fantastic experience. His technical expertise and collaborative spirit made tackling complex problems feel effortless. Communication was always clear, and he was quick to offer help or share insights. I would gladly work with Noonosh again on any future project!",
      rating: 5,
    },
    {
      name: "Mahistara",
      role: "Psychologist",
      content:
        "Noonosh delivered my appointment booking website quickly and exactly as I needed. The process was smooth, and now it's so much easier for new patients to book with me. Highly recommend!",
      rating: 5,
    },
    {
      name: "Alisher",
      role: "CEO, AzmaFinance",
      content:
        "Noonosh worked with us to build a chatbot for our financial reporting service that integrates directly with the government tax agency. The project moved quickly in the early stages, and the result is an efficient, reliable tool that saves our customers time and ensures compliance",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Mathematical Paper Background */}
      <div className="math-bg fixed inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic Island Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed flex w-full justify-center top-6 transform -translate-x-1/2 z-50"
      >
        <div className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 py-4 shadow-2xl ring-1 ring-white/10 w-[90%] md:w-max">
          <div className="flex justify-between items-center">
            <motion.a
              href="/#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NOONOSH
              </span>
            </motion.a>

            <div className="hidden md:flex space-x-6 mx-8">
              {["ABOUT", "SERVICES", "PORTFOLIO", "CONTACT"].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ y: -2, scale: 1.05 }}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-lg hover:bg-white/5"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="mailto:mail@noono.sh"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200 items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                REACH OUT
              </motion.a>

              {/* Mobile Hamburger Menu */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 flex items-center justify-center z-50 md:hidden"
            >
              <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl ring-1 ring-white/10 w-64">
                <div className="flex flex-col space-y-4">
                  {["ABOUT", "SERVICES", "PORTFOLIO", "CONTACT"].map((item) => (
                    <motion.a
                      key={item}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-blue-400 transition-all duration-200 text-base font-medium px-4 py-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-blue-500/20"
                    >
                      {item}
                    </motion.a>
                  ))}

                  <div className="border-t border-gray-700 pt-4 mt-2">
                    <motion.a
                      href="mailto:mail@noono.sh"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200 w-full"
                    >
                      <Mail className="w-4 h-4" />
                      REACH OUT
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Completely Rewritten */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20"
      >
        {/* Hero Content - Moved Up */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6"
          >
            <span className="text-blue-400 font-semibold text-lg">
              👋 Hey there, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
          >
            NOONOSH
          </motion.h1>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            SOFTWARE DEVELOPER & COMPUTER SCIENTIST
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            I help businesses build exceptional software solutions. From SaaS
            platforms to custom applications, I bring your ideas to life with
            modern technology and clean code.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8"
          >
            <motion.a
              href="mailto:mail@noono.sh"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl"
            >
              <Mail className="w-5 h-5" />
              LET'S WORK TOGETHER
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800/50 transition-colors backdrop-blur-sm"
            >
              VIEW MY WORK
            </motion.a>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">5+</div>
              <div className="text-gray-300 text-xs">YEARS EXPERIENCE</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300 text-xs">PROJECTS DELIVERED</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">
                First-Class
              </div>
              <div className="text-gray-300 text-xs">CS DEGREE</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300 text-xs">COMMUNICATION</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image - Foreground & Overflowing */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative z-20 w-full max-w-6xl mx-auto px-6"
        >
          <motion.div style={{ y }} className="relative">
            <img
              src="/hero.png"
              alt="Noonosh - Software Developer"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10 rounded-3xl"></div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">
              SCROLL TO EXPLORE
            </span>
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </motion.div> */}
      </motion.section>

      {/* Portfolio Section - New */}
      <section id="portfolio" className="py-32 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              RECENT WORK
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are two key components I've built that showcase the
              importance of security and user experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Secure Login Page */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <motion.img
                    src="/secure-login.png"
                    alt="Secure Login Page"
                    className="w-full h-auto shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">SECURE AUTHENTICATION</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Built enterprise-grade authentication systems with
                  multi-factor authentication, secure session management, and
                  beautiful user interfaces. Security is paramount in every
                  application I develop.
                </p>
              </div>
            </motion.div>

            {/* Custom User Dashboard */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <motion.img
                    src="/custom-user-dashboard.png"
                    alt="Custom User Dashboard"
                    className="w-full h-auto shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold">INTUITIVE DASHBOARDS</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Designed and developed custom dashboards that provide users
                  with actionable insights. Every interface is crafted with user
                  experience in mind, making complex data simple and accessible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ABOUT ME
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a self-taught, "never-CTRL+Z" type developer with a
                First-Class degree in Computer Science from Cambridge, UK.
                Currently focused on helping businesses innovate through
                technology.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                I believe in shipping fast, learning faster, and building
                technology that drives humanity forward. From optimizing
                algorithms to creating complete SaaS platforms, I bring both
                academic rigor and practical experience to every project.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">EDUCATION</h3>
              <p className="text-gray-400">
                BEng Computer Science — First Class
                <br />
                Anglia Ruskin, 2024
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">APPROACH</h3>
              <p className="text-gray-400">
                Ship fast, learn faster
                <br />
                Never CTRL+Z philosophy
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-4">☕</div>
              <h3 className="text-lg font-semibold mb-2">MANTRA</h3>
              <p className="text-gray-400">
                Caffeine == uptime
                <br />
                Building the future
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              WHAT I DO
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I specialize in building modern software solutions that help
              businesses grow and scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors group"
              >
                <div className="text-blue-400 mb-4 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MY EXPERTISE
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Technologies and skills I use to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{area.category}</h3>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {area.level}
                  </span>
                </div>

                <p className="text-gray-300 mb-6">{area.description}</p>

                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-800/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CLIENT SUCCESS STORIES
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </motion.div>

          {/* Infinite Scroll Container */}
          <div className="relative">
            <div
              className="flex gap-8 testimonials-container"
              style={{
                width: `${testimonials.length * 2 * 100}%`,
                animationDuration: `${testimonials.length * 30}s`,
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`first-${testimonial.name}-${index}`}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:shadow-xl flex-shrink-0 min-w-[280px] max-w-[320px] mx-4 testimonial-card"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`second-${testimonial.name}-${index}`}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 hover:shadow-xl flex-shrink-0 min-w-[280px] max-w-[320px] mx-4 testimonial-card"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              READY TO BUILD SOMETHING AMAZING?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and turn your ideas into reality. I'm
              here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:mail@noono.sh"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-base flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                REACH OUT NOW
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/noonosh"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/noonosh"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  NOONOSH
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Software Developer & Computer Scientist helping businesses build
                exceptional digital solutions.
              </p>
              <p className="text-sm text-gray-500">
                "I swear, by my life and my love of it, that I will never live
                for the sake of another man, nor ask another man to live for
                mine."
                <br />
                <em>- Atlas Shrugged, Ayn Rand</em>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FULL-STACK DEVELOPMENT</li>
                <li>SAAS SOLUTIONS</li>
                <li>API DEVELOPMENT</li>
                <li>PERFORMANCE OPTIMIZATION</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONNECT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:mail@noono.sh"
                    className="hover:text-white transition-colors"
                  >
                    mail@noono.sh
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/noonosh"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/noonosh"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2020 - {new Date().getFullYear()} noonosh. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
