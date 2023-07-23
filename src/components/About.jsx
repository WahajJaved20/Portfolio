import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from "../hoc"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
      I am a passionate individual currently studying at FAST National University Karachi, where I have achieved a remarkable CGPA of 3.89. With a keen interest in cyber security, artificial intelligence, and software development, I constantly seek opportunities to expand my knowledge and skills in these fields. I thrive on challenges, always pushing myself to go above and beyond until the task is completed. As a dedicated problem solver, I never settle for anything less than the best solution.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About,"about")