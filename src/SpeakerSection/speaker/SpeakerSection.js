import SpeakerCard from "./SpeakerCard";

function SpeakerSection() {
  const speakerData = [{
    name: 'Vipul Goel',
    // profileImage: 'image1.jpg',
    about: "Full Stack Web Developer | B. Tech CSE '25 at MSIT",
    socialMedia: {
      instagram: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123',
      discord: 'vipul'
    }
  },
  {
    name: 'Sahil Aggarwal',
    // profileImage: 'image2.jpg',
    about: 'Lorem Impsum some text about the person',
    socialMedia: {
      discord: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123'
    }
  },
  {
    name: 'Vipul Goel',
    // profileImage: 'image3.jpg',
    about: 'Lorem Impsum some text about the person',
    socialMedia: {
      instagram: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123'
    }
  },
  {
    name: 'Vedansh',
    // profileImage: 'imag4.jpg',
    about: 'Lorem Impsum some text about the person',
    socialMedia: {
      instagram: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123'
    }
  },
  {
    name: 'Bhomik',
    // profileImage: 'image5.jpg',
    about: 'Lorem Impsum some text about the person',
    socialMedia: {
      instagram: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123'
    }
  },
  {
    name: 'Vishrut Rana',
    // profileImage: 'image6.jpg',
    about: 'Lorem Impsum some text about the person',
    socialMedia: {
      instagram: 'dev_123',
      linkedin: 'vipul@1233',
      twitter: 'temp@123'
    }
  }]
  return (
    <section className="flex flex-col items-center text-white gap-8 px-4 py-8 " data-section-name="speaker">
      <h2 className="">Speakers</h2>
      <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis dignissimos voluptatum, maxime tenetur.</p>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  grid-rows-2 gap-10  max-w-[80vw]" >

        {speakerData.map((speaker) => {
          return <SpeakerCard data={speaker} key={speaker.profileImage}></SpeakerCard>
        })}

      </div>
    </section>)

}

export default SpeakerSection;