const Navbar = () => {
  return (
    <div className="navbar p-4 px-20 flex justify-between bg-neutral-900">
      <img src="" alt="logo"></img>
      <div className="link-container flex gap-8 ">
        <a className="text-xl text-white text-center font-normal hover:font-medium">Home</a>
        <a className="text-xl text-white text-center font-normal hover:font-medium">Events</a>
        <a className="text-xl text-white text-center font-normal hover:font-medium">Speakers</a>
        <a className="text-xl text-white text-center font-normal hover:font-medium">Sponsors</a>
      </div>
    </div>
  )
}

export default Navbar