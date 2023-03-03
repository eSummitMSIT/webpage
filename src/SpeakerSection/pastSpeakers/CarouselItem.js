import { FaUserCircle } from 'react-icons/fa';
import SocialMedia from '../SocialMedia';


function CarouselItem({ speaker, dim }) {
  return <div className={`${dim === "large" ? 'w-28 h-28 xsm:w-36 xsm:h-36  sm:w-56 sm:h-56 md:w-80 md:h-80' : 'w-20 h-20 xsm:w-28 xsm:h-28  sm:w-40 sm:h-40 md:w-64 md:h-64'} max-w-[25rem] min-w-[2rem] max-h-[25rem] min-h-[2rem]  rounded-full overflow-hidden relative carousel-item`}>
    {speaker?.profileImage ? <img src={speaker.profileImage} className={`w-full h-full`}
      alt={speaker.name}
    ></img> : <FaUserCircle className={`w-full h-full rounded-full text-slate-400`} style={{
      width: dim,
      height: dim,
    }} />}


    <div className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gray-400 opacity-90  justify-center items-center carousel-item-hover hidden gap-2 sm:gap-2 md:gap-4 lg:gap-5  text-xl xsm:text-2xl sm:text-3xl '>
      <SocialMedia socialMedia={speaker.socialMedia} ></SocialMedia>
    </div>

  </div>


}

export default CarouselItem