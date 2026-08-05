import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Bot, Cpu, Monitor, Wifi, Sparkles, Network, Database, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { aiFeatures } from "../data/aiFeatures";

const campusFacilities = [
  { name: "Innovation Hub", role: "24/7 Co-working Space", detail: "Equipped with 3D printers & IoT stations", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2940&auto=format&fit=crop" },
  { name: "Quantum Center", role: "High-Performance Computing", detail: "Access to supercomputing clusters", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" },
  { name: "Digital Library", role: "Global Resource Network", detail: "Over 5 million accessible digital journals", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop" },
];

export default function Faculty() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2940&auto=format&fit=crop" 
            alt="University Building" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
             <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <Cpu className="mr-2 h-4 w-4 text-purple-400" />
              <span className="text-sm font-semibold tracking-wide text-purple-200">
                Next-Gen Campus Experience
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              High-Tech <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Learning
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Experience the future of education with our state-of-the-art campus facilities and personalized AI learning assistants.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="relative -mt-16 z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100"
        >
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-purple-600">24/7</span>
            <span className="text-sm font-semibold text-slate-600">AI Assistant Availability</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-purple-600">5G</span>
            <span className="text-sm font-semibold text-slate-600">Campus-Wide Network</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <span className="mb-2 text-4xl font-black text-purple-600">100%</span>
            <span className="text-sm font-semibold text-slate-600">Smart Classrooms</span>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* AI Features */}
        <section>
          <div className="text-center mb-16">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600"
            >
              <Bot className="h-8 w-8" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              AI Assistant Learning Features
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Supercharge your academic journey with intelligent systems designed to adapt to your unique learning style.
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/feature/${feature.id}`} className="block h-full overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={feature.image} 
                      alt={feature.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-1 text-xl font-bold text-slate-900">{feature.name}</h3>
                    <p className="mb-3 text-sm font-semibold text-purple-600">{feature.role}</p>
                    <div className="mx-auto h-px w-12 bg-slate-200 mb-3" />
                    <p className="text-sm text-slate-500 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Campus Facilities */}
        <section className="relative">
          <div className="text-center mb-16">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-600"
            >
              <Network className="h-8 w-8" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              High-Tech Campus Facilities
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Immerse yourself in a campus built for the future, equipped with cutting-edge technology.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campusFacilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center space-x-5 rounded-3xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-200"
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                   <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{facility.name}</h3>
                  <p className="text-sm font-medium text-slate-600">{facility.role}</p>
                  <p className="text-xs font-bold text-pink-600 mt-1 uppercase tracking-wider">{facility.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="rounded-[3rem] bg-slate-900 py-16 px-6 sm:px-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <Sparkles className="h-12 w-12 text-pink-400 mb-6" />
              <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Ready to experience the future?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                Join our innovative campus and get exclusive access to world-class tech facilities and personalized AI assistants.
              </p>
              <button className="rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-transform hover:scale-105 shadow-lg shadow-white/10">
                Schedule a Campus Tour
              </button>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
