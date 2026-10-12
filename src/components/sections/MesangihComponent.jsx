import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "100px 0px 0px 0px",
};

const MesangihComponents = ({
  candidates = [
    {
      id: 1,
      name: "I Nyoman Suwipayana",
      role: "Putra Pertama",
    },
    {
      id: 2,
      name: "Ni Made Nindi Apriani",
      role: "Putri Kedua",
    },
    {
      id: 3,
      name: "Ni Komang Nada Arnaya",
      role: "Putri Ketiga",
    },
    {
      id: 4,
      name: "I Kadek Adi Pramana",
      role: "Putra Keempat",
    },
    {
      id: 5,
      name: "I Made Ricky Kurniawan",
      role: "Putra Kelima",
    },
  ],
}) => {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 px-4 sm:px-6 overflow-hidden select-none">
      {/* Background Lighting/Glow Emas Bernapas */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none will-change-transform"
      />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* HEADER / JUDUL SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={textFadeIn}
          className="text-center space-y-3 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-angele text-amber-300/90 font-normal tracking-wide leading-tight">
            Upacara Mesangih
          </h2>
          <div className="w-16 h-[1px] bg-amber-500/40 mx-auto mt-4" />
        </motion.div>

        {/* DAFTAR KANDIDAT (Tanpa Box/Card Luar) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="w-full flex flex-col items-center"
        >
          {candidates.map((person, index) => (
            <motion.div
              key={person.id || index}
              variants={textFadeIn}
              className={`w-full flex flex-col items-center text-center py-6 md:py-8 ${
                index !== 0 ? "border-t border-zinc-900" : ""
              }`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-angele text-zinc-100 font-normal tracking-wide">
                {person.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MesangihComponents;
