import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, Clock, GraduationCap, CheckCircle2, BookOpen, Briefcase, ChevronRight } from "lucide-react";
import { programs } from "./Programs";
import { useEffect } from "react";

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programs.find((p) => p.id === id);

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-slate-900">Program not found</h1>
        <Link to="/programs" className="mt-4 text-blue-600 hover:underline">
          Return to Programs
        </Link>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="flex flex-col bg-slate-50 pb-20">
      {/* Dynamic Header */}
      <div className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: headerY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10" />
          <img 
            src={program.image} 
            alt={program.title} 
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <Link 
            to="/programs"
            className="mb-8 inline-flex items-center text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Icon className="mr-2 h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold tracking-wide text-white">
                {program.category}
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-[-40px] w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10"
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Overview</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                {program.overview}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Curriculum Highlights</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {program.curriculum?.map((item, i) => (
                  <div key={i} className="flex items-start rounded-xl bg-slate-50 p-4">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 sm:p-10"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Career Outcomes</h2>
              </div>
              <div className="space-y-4">
                {program.careerOutcomes?.map((career, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="font-medium text-slate-700">{career}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sticky top-24 rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-100"
            >
              <h3 className="mb-6 text-xl font-bold text-slate-900">Program Snapshot</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Duration</p>
                    <p className="font-semibold text-slate-900">{program.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Eligibility</p>
                    <p className="font-semibold text-slate-900">{program.eligibility}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <Link
                  to="/admissions"
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Apply for Admission
                </Link>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Applications are open for the upcoming batch.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
