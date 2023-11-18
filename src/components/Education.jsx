import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { courses } from "../constants";

const EducationCard = ({
  index,
  name
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
             {name}
          </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I've Studied (adding for assignment)</p>
          <h2 className={styles.sectionHeadText}>Courses.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {courses.map((course, index) => (
          <EducationCard key={course.name} index={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");