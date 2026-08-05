import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import { Code, Briefcase, HeartPulse, Database, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { ProgramCard } from "../components/ProgramCard";

export const programs = [
  {
    id: "mba",
    title: "Master of Business Administration (MBA)",
    category: "Management",
    icon: Briefcase,
    description: "Develop advanced leadership skills and strategic business acumen.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    duration: "2 Years",
    eligibility: "Bachelor's degree with minimum 50% aggregate",
    overview: "Our MBA program is designed to shape future business leaders. It combines rigorous academic theory with practical, real-world business applications.",
    careerOutcomes: ["Business Consultant", "Marketing Manager", "Financial Analyst", "Operations Manager"],
    curriculum: ["Organizational Behavior", "Financial Management", "Marketing Strategy", "Business Ethics"]
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    category: "Management",
    icon: Briefcase,
    description: "Build a strong foundation in core business principles and practices.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
    duration: "3 Years",
    eligibility: "10+2 or equivalent with minimum 50% aggregate",
    overview: "The BBA program provides a comprehensive understanding of business operations, preparing students for managerial roles and entrepreneurship.",
    careerOutcomes: ["Management Trainee", "Sales Executive", "Business Development Associate", "HR Assistant"],
    curriculum: ["Principles of Management", "Business Economics", "Accounting Fundamentals", "Business Law"]
  },
  {
    id: "mca",
    title: "Master of Computer Applications (MCA)",
    category: "Technology",
    icon: Code,
    description: "Advanced study in software development, algorithms, and system design.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop",
    duration: "2 Years",
    eligibility: "BCA/B.Sc (Computer Science) with minimum 50% aggregate",
    overview: "The MCA program delves deep into computational theory, software engineering, and the latest technologies shaping the IT industry.",
    careerOutcomes: ["Software Engineer", "Systems Analyst", "Database Administrator", "IT Consultant"],
    curriculum: ["Advanced Data Structures", "Software Engineering", "Cloud Computing", "Artificial Intelligence"]
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    category: "Technology",
    icon: Code,
    description: "Launch your career in IT with foundational programming and software skills.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics as a subject",
    overview: "The BCA program introduces students to the world of programming, web development, and database management.",
    careerOutcomes: ["Web Developer", "Junior Programmer", "Technical Support", "Software Tester"],
    curriculum: ["C Programming", "Web Technologies", "Database Management Systems", "Object-Oriented Programming"]
  },
  {
    id: "msc-ds",
    title: "M.Sc in Data Science (M-Sc(DS))",
    category: "Technology",
    icon: Database,
    description: "Master analytics, machine learning, and big data technologies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    duration: "2 Years",
    eligibility: "B.Sc (Math/Stats/CS) or B.Tech with minimum 50% aggregate",
    overview: "This specialized program equips students with the skills to extract meaningful insights from massive datasets using advanced analytical tools.",
    careerOutcomes: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "Business Intelligence Developer"],
    curriculum: ["Statistical Modeling", "Machine Learning", "Big Data Analytics", "Data Visualization"]
  },
  {
    id: "mha",
    title: "Master of Healthcare Administration (MHA)",
    category: "Healthcare",
    icon: HeartPulse,
    description: "Lead modern healthcare facilities with advanced management techniques.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop",
    duration: "2 Years",
    eligibility: "Bachelor's degree in healthcare or related field",
    overview: "The MHA program prepares professionals to manage hospitals, clinics, and healthcare networks efficiently while maintaining high standards of patient care.",
    careerOutcomes: ["Hospital Administrator", "Healthcare Consultant", "Clinical Director", "Health Services Manager"],
    curriculum: ["Healthcare Economics", "Hospital Operations", "Health Policy and Law", "Healthcare Quality Management"]
  },
  {
    id: "bha",
    title: "Bachelor of Healthcare Administration (BHA)",
    category: "Healthcare",
    icon: HeartPulse,
    description: "Prepare for entry-level administrative roles in the growing healthcare sector.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=3000&auto=format&fit=crop",
    duration: "3 Years",
    eligibility: "10+2 in Science or relevant stream",
    overview: "The BHA program offers foundational knowledge in healthcare systems, medical terminology, and basic facility management.",
    careerOutcomes: ["Medical Office Manager", "Patient Services Representative", "Health Information Technician", "Department Coordinator"],
    curriculum: ["Introduction to Healthcare", "Medical Terminology", "Health Informatics", "Principles of Management"]
  },
];

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-slate-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-slate-950">
        <motion.div 
          style={{ y: heroY, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop" 
            alt="Students on Campus" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <BookOpen className="mr-2 h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold tracking-wide text-blue-200">
                Academic Excellence
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Shape Your <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Future Today
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Explore our diverse range of undergraduate and postgraduate programs designed to build the leaders of tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats / Highlight Section */}
      <section className="relative -mt-16 z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 sm:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: "Undergraduate & Postgrad", value: "7+ Programs", icon: GraduationCap },
              { label: "Industry Relevant", value: "Updated Curriculum", icon: Briefcase },
              { label: "Hands-on Learning", value: "Practical Focus", icon: Code },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Discover Our Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find the perfect path to achieve your career goals.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Ready to take the next step?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            Learn more about our admission process and start your application today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex justify-center gap-4"
          >
            <a href="/admissions" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-600 transition-transform hover:scale-105 hover:bg-slate-50">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

