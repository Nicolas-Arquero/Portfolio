import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full touch-scroll h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center '>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <p className={styles.sectionSubText}>Développeur front-end</p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Nicolas <span className='text-[#915EFF]'>ARQUERO</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 respSubTitle`}>
          Créer des expériences utilisateur incroyables <br className='sm:block hidden' />
          qui inspirent l'engagement. 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='hidden md:block rounded-3xl border-4 border-secondary flex justify-center items-start px-4 py-1 opacity-70'>

          Faites tourner le bureau avec votre souris 
           
            {/* <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            /> */}
          </div>

          <div className='block md:hidden rounded-3xl border-4 border-secondary flex justify-center items-start px-4 py-1 opacity-70'>

          Faites tourner le bureau avec votre doigts 
           
            {/* <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            /> */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
