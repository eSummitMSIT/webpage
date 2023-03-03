import { BsTwitter, } from 'react-icons/bs';
// import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import './SocialMedia.css';

function InstagramIcon() {
  return <div className={`rounded-md sm:rounded-lg relative instagram transition-all duration-500 hover:scale-110 w-[1rem] h-[1rem] sm:w-[1.2rem] sm-h-[1.2rem] md:w-[1.6rem] md:h-[1.6rem] `}  >
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-[1.5px] md:border-2 rounded-full' ></div>
    <div className='absolute top-[20%] right-[15%] w-[12%] h-[12%] bg-white rounded-full'></div>
  </div >
}

function IconLinkContainer({ children, link }) {
  return <a href={link} target="_blank" className=' transition-all duration-500' rel="noreferrer">{children}</a>
}

function Twitter({ link }) {
  return <IconLinkContainer link={link}><BsTwitter className='text-gray-500 transition-all duration-500  hover:text-blue-500 hover:scale-110 '></BsTwitter></IconLinkContainer>
}

function Instagram({ link }) {
  return <IconLinkContainer link={link}>
    <InstagramIcon ></InstagramIcon>
  </IconLinkContainer >
}

function Linkedin({ link }) {
  return <IconLinkContainer link={link}> <FaLinkedinIn className='text-gray-500 hover:text-[#0077b5] transition-all duration-500 hover:scale-110 '></FaLinkedinIn></IconLinkContainer>
}

function Discord({ link }) {
  return <IconLinkContainer link={link}> <SiDiscord className='text-gray-500 hover:text-[#5865f2] transition-all duration-500 hover:scale-110  '></SiDiscord></IconLinkContainer>
}


function SocialMedia({ socialMedia }) {
  return <>
    {
      Object.keys(socialMedia).map(platform => {
        switch (platform) {
          case ('twitter'):
            return <Twitter key="twitter" link={socialMedia.twitter}></Twitter>
          case ('linkedin'):
            return <Linkedin key="linkedin" link={socialMedia.linkedin}></Linkedin>
          case ('instagram'):
            return <Instagram key="instagram" link={socialMedia.instagram}></Instagram>
          case ('discord'):
            return <Discord key="discord" link={socialMedia.discord}></Discord>
          default:
            return <></>
        }
      })
    }
  </>
}

export default SocialMedia;