import {motion} from "framer-motion"
import {styles} from "../styles"
import {SectionWrapper} from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p variants={fadeIn("","",0,0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Below is a comprehensive list of my projects, 
      exemplifying my ability to apply my skills effectively 
      in real-world scenarios while showcasing my adaptability 
      in overcoming various challenges. These projects demonstrate 
      my capacity to address complex problems with innovative solutions, 
      fostering growth, and yielding successful outcomes.
      </motion.p>
    </div>
    </>
  )
}

export default SectionWrapper(Works,"")