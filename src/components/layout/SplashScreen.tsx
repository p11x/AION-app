import { motion } from "motion/react";
import { logoBase64 } from "../../assets/logoBase64";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center px-4"
      >
        <img
          src={logoBase64}
          alt="AION TECH CAREER Logo"
          className="h-32 md:h-48 w-auto object-contain mb-6"
        />
        
        <div className="text-center mb-12 flex flex-col items-center font-serif">
          <h1 className="text-5xl md:text-6xl text-[#0b1c57] mb-2" style={{ fontFamily: "Georgia, serif" }}>AION TECH CAREER</h1>
          <p className="text-xl md:text-2xl text-black mb-2" style={{ fontFamily: "Georgia, serif" }}>Success has no Destiny</p>
          <h2 className="text-3xl md:text-4xl text-[#0b1c57]" style={{ fontFamily: "Georgia, serif" }}>Training, Placements And Software.</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <motion.div 
            className="h-1.5 w-64 overflow-hidden rounded-full bg-slate-100 shadow-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
            />
          </motion.div>
          <motion.p 
            className="mt-4 text-sm font-medium tracking-widest text-slate-400 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Loading Experience
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
