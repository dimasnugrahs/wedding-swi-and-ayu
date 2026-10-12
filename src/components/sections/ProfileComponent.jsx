import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "100px 0px 0px 0px",
};

const ProfileComponents = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden select-none">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="relative flex flex-col items-center text-center p-8 sm:p-12 md:p-16 rounded-3xl border border-zinc-800/80 shadow-2xl bg-zinc-950/80 backdrop-blur-md overflow-hidden"
        >
          {/* Aksen Dekoratif Garis Halus */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-amber-500/50" />

          {/* Judul / Pengantar */}
          <motion.div variants={textFadeIn} className="space-y-2 mb-10">
            <h2 className="text-3xl sm:text-3xl font-angele text-amber-300/90 tracking-wide">
              Kami yang Berbahagia
            </h2>
          </motion.div>

          {/* Konten Kedua Mempelai */}
          <div className="w-full space-y-12">
            {/* Pengantin Pria */}
            <motion.div variants={textFadeIn} className="space-y-3">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-angele text-white font-normal tracking-wide leading-tight">
                I Nyoman Suwipayana
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/90 font-light">
                (Swi)
              </p>
              <div className="space-y-1 pt-1 max-w-md mx-auto">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-light">
                  Putra dari Pasangan:
                </p>
                <p className="text-base sm:text-lg font-angele text-zinc-200">
                  Bapak I Nyoman Winata
                </p>
                <p className="text-base sm:text-lg font-angele text-zinc-200">
                  Ibu Ni Kompiang Jendri
                </p>
              </div>
              <div className="pt-1">
                <div className="inline-flex items-center gap-1.5 text-zinc-400 text-xs tracking-wider">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-amber-300"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Br. Panca Warga, Mengwitani, Mengwi, Badung</span>
                </div>
              </div>
            </motion.div>

            {/* Simbol Pemisah (&) */}
            <motion.div
              variants={textFadeIn}
              className="flex items-center justify-center"
            >
              <div className="w-12 h-[1px] bg-zinc-800" />
              <span className="px-4 font-angele text-xl text-amber-400/80 italic">
                &
              </span>
              <div className="w-12 h-[1px] bg-zinc-800" />
            </motion.div>

            {/* Pengantin Wanita */}
            <motion.div variants={textFadeIn} className="space-y-3">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-angele text-white font-normal tracking-wide leading-tight">
                Ni Made Ayu Sadanie, S.Pd., Gr.
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-300/90 font-light">
                (Ayu)
              </p>
              <div className="space-y-1 pt-1 max-w-md mx-auto">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-light">
                  Putri dari Pasangan:
                </p>
                <p className="text-base sm:text-lg font-angele text-zinc-200">
                  Bapak I Gde Manik Arsa
                </p>
                <p className="text-base sm:text-lg font-angele text-zinc-200">
                  Ibu Yane Magdalena Kilikily (alm)
                </p>
              </div>
              <div className="pt-1">
                <div className="inline-flex items-center gap-1.5 text-zinc-400 text-xs tracking-wider">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-amber-300"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Br. Panti, Pandak Gede, Kediri, Tabanan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileComponents;
