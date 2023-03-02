const Hero = () => {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col justify-center items-center">
        <img></img>
        <h1 className="text-9xl text-white font-bold flex justify-center">E SUMMIT</h1>
        <h2 className="text-2xl mt-3 text-white font-light tracking-widest flex justify-center">Lorem ipsum dolor sit amet consectetur, adipiscing elit imperdiet cum duis, accumsan vitae est nostra.</h2>
        <div className="button-container h-20vh flex justify-center items-end">
            <button className="text-xl font-medium p-3 px-5 rounded-full bg-transparent border-white border-2 text-white hover:bg-white hover:text-neutral-800 ">Download Brochure</button>
        </div>
    </div>
  )
}

export default Hero