import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ElementType } from "react";

interface ProgramCardProps {
  key?: string | number;
  program: {
    id: string;
    title: string;
    category: string;
    icon: ElementType;
    description: string;
  };
  index: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  const Icon = program.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(6,81,237,0.1)] hover:ring-blue-100"
    >
      <div className="absolute -right-12 -top-12 z-0 h-40 w-40 rounded-full bg-blue-50/50 blur-3xl transition-all duration-500 group-hover:bg-blue-100/50" />
      
      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/50 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
          {program.category}
        </div>
        <h3 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-900">
          {program.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
          {program.description}
        </p>
      </div>
      
      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
        <Link
          to={`/programs/${program.id}`}
          className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
        >
          View Details
        </Link>
        <Link
          to="/admissions"
          className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
        >
          <span>Apply Now</span>
          <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
