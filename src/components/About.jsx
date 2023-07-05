import React from 'react'
import Tilt from "react-parallax-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from "../hoc"
const ServiceCard = ({ service,index }) => {
  return ( 
    <Tilt className='max-w-[300px]'>
      <motion.div
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className='w-full bg-gradient-to-br from-green-400 to-pink-500 p-[1px] rounded-[20px] shadow-card'>
        <div options={{max: 45, scale:1, speed:450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'> {service.title} </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
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
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))
          }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")