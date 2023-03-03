import { FaUserCircle } from 'react-icons/fa';
import SocialMedia from '../SocialMedia';

function SpeakerCard({ data }) {
  const randomColor = () => {
    return `#${[(Math.floor(6777215 + + Math.random() * (10000000)) + 1).toString(16)]}`;
  }
  return (

    <div className={`px-2 py-7 bg-[rgb(250,250,250)] flex flex-col items-center  gap-6 border-t-[6px] rounded-t-2xl rounded-b-md  transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]  `} style={{
      borderColor: randomColor()
    }
    } >

      {data.profileImage ? <img src={data.profileImage} className={`w-32 h-32 shadow-xl`} alt={data.name}></img> : <FaUserCircle className='w-32 h-32 text-slate-400 ' />
      }

      <h2 className="text-[#444] font-serif text-base -mb-2">{data.name}</h2>
      <p className="w-4/5 text-center text-sm text-gray-500 italic font-mono tracking-tight">{data?.about}</p>
      <div className='text-2xl flex gap-8 items-center text-gray-400'>
        <SocialMedia socialMedia={data.socialMedia} />
      </div>
    </div >
  );
}

export default SpeakerCard;