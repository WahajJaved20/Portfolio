import {styles} from '../styles'
const HeaderText= () => {
    return (<div style={{ pointerEvents: 'none' }} className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div  className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#7b63fb]'/>
      <div  className='w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-700 to-transparent'/>
    </div>
    <div >
      <h1 className={`${styles.heroHeadText} text-white`}> Hi, I am <span className='text-[#7b63fb]'> Wahaj </span></h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a passionate Computer Scientist <br className='sm:block hidden'/>
      specializing in CyberSecurity, Artificial <br  className='sm:block hidden'/> Intelligence, and Software Development. <br className='sm:block hidden'/></p>
    </div>
    <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          />
        
  </div>);
}
export default HeaderText