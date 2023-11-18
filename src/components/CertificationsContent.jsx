import { certifications } from "../constants"
import Tilt from "react-parallax-tilt"
import {SectionWrapper} from "../hoc"
import { useEffect } from "react"

const CertificateCard = ({certificate,index}) => {
    return ( 
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={certificate.image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{certificate.name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>Issuer: {certificate.Issuer}</p>
      </div>
    </Tilt>
    )
  }

const CertificateContent = () => {
    return ( 
        <div className=" flex flex-wrap gap-7">
    {certifications.map((certificate,index) => (
      <CertificateCard key={`certi-${index}`} index={index} certificate={certificate} />
    ))
    }
  </div>
 )
}
export default SectionWrapper(CertificateContent, "")