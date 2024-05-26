import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEnvelope} />


<div className="w-full h-screen bg-white">
  <header className="w-full h-20 bg-[#232536] flex items-center justify-between px-20">
    <h1 className="text-2xl font-bold text-white capitalize">Danesh Kumar Badlani</h1>
    <nav className="flex space-x-10">
      <a href="#" className="text-xl text-white">Home</a>
      <a href="#" className="text-xl text-white">Blog</a>
    </nav>
  </header>
  <main className="w-full bg-white flex flex-col items-center">
    <section className="w-full flex justify-center mt-10">
      <div className="flex flex-col items-start space-y-6">
        <div className="space-y-2">
          <h2 className="text-5xl text-[#2d2d2d]">Hi, I am Danesh!</h2>
          <h3 className="text-lg text-[#666]">Builder, Entrepreneur, and Investor</h3>
        </div>
        <p className="text-lg text-black">
          I am a tinkerer and life-long learner. <br />
          I have worked at a bunch of startups as well as at Microsoft. <br />
          I invest in teams and ventures that create value for people.
        </p>
        <button className="w-64 h-20 bg-[#2d2d2d] rounded-lg flex items-center justify-center">
          <span className="text-xl text-white">Read my Blog</span>
        </button>
      </div>
      <img src="/images/95cd09126ee8d0ab3d9e3210172cb39ed885607b.jpg" alt="Danesh" className="w-96 h-96 rounded-full ml-10" />
    </section>
  </main>
  <footer className="w-full h-32 bg-[#232536] flex flex-col items-center justify-center">
    <div className="flex items-center space-x-4">
      {/* Add Font Awesome Twitter icon here */}
    </div>
    <p className="text-lg text-white mt-4">© 2024 Danesh Badlani</p>
  </footer>
</div>
