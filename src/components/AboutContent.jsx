import { SectionWrapper } from "../hoc"
import Tilt from "react-parallax-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
const ServiceCard = ({ service,index }) => {
    return ( 
      <Tilt className='xs:w-[250px] max-w-[300px]'>
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
const AboutContent = () => {
    return ( <div className='flex flex-wrap gap-10'>
    {services.map((service, index) => (
      <ServiceCard key={`service-${index}`} service={service} index={index} />
    ))
      }
  </div>)
}
export default SectionWrapper(AboutContent, "")