import SpeakerCarousel from "./SpeakerCarousel";

function PastSpeakerSection() {
  const previousSpeakerData = [{
    profileImage: 'https://www.shutterstock.com/image-photo/south-america-260nw-637233313.jpg',
    socialMedia: {
      twitter: 'dev_123',
      instagram: 'temp',
    }
  },
  {
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq22xKUxR3EUHYx8ZvwiFybBzsoOcucBO58mr73fBd5A&usqp=CAU&ec=48600113',
    socialMedia: {
      linkedin: 'data',
      instagram: 'temp',
    }
  },
  {
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-20votKd6iREfXBJB6mXMMeK7xDyN_APgFa9PB7nGw&usqp=CAU&ec=48600113',
    socialMedia: {
      twitter: 'dev_123',
      linkedin: 'data',

    }
  },
  {
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGR9w7Si1RWCZsZ3uj_GAb3jwfghQJcog9ExPI-j_vQ&usqp=CAU&ec=48600113',
    socialMedia: {
      twitter: 'dev_123',
      linkedin: 'data',

    }
  },
  {
    profileImage: 'https://www.shutterstock.com/image-photo/green-nature-background-closeup-view-260nw-1431087944.jpg',
    socialMedia: {
      twitter: 'dev_123',
      linkedin: 'data',

    }
  }]

  return <section className="flex flex-col gap-12 items-center pt-12" data-section-name="past speakers">
    <h2 className="text-2xl text-white">Past Speakers</h2>
    <SpeakerCarousel data={previousSpeakerData}></SpeakerCarousel>
  </section>
}

export default PastSpeakerSection;

