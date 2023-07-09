import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socials } from "../constants";

const SocialCard = ({
  index,
  name,
  icon,
  link,
  social_name
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1 cursor-pointer' onClick={()=>{window.open(link,"_blank")}}>
      <p className='text-white tracking-wider text-[18px]'>{social_name}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
             {name}
          </p>
        </div>

        <img
          src={icon}
          alt={`social-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Socials = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I am Present</p>
          <h2 className={styles.sectionHeadText}>Socials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {socials.map((social, index) => (
          <SocialCard key={social.name} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Socials, "");