import { projects } from "../constants"
import Tilt from "react-parallax-tilt"
import {github} from "../assets"
import {SectionWrapper} from "../hoc"

const ProjectCard = ({project,index}) => {
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
          src={project.image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <p
            key={`${project.name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
    )
  }

const WorksContent = () => {
    return ( 
        <div className="mt-20 flex flex-wrap gap-7">
    {projects.map((project,index) => (
      <ProjectCard key={`project-${index}`} index={index} project={project} />
    ))
    }
  </div>
 )
}
export default SectionWrapper(WorksContent, "")