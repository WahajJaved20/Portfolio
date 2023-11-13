import {motion} from "framer-motion"
import {styles} from "../styles"
import {SectionWrapper} from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const Certifications = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p variants={fadeIn("","",0,0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Below is a brief list of my Certifications, 
      exemplifying my technical learning capability and skills.
      </motion.p>
    </div>
    </>
  )
}

export default SectionWrapper(Certifications,"")