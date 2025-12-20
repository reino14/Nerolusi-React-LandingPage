export default function Home() {
  return (
    <section className="w-full mt-32" id="home">
      <div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row w-full h-full items-center justify-between px-4 md:px-10 lg:px-20 text-center md:text-left">
          <div className="mb-10">
            <h2 className="text-3xl md:text-xl xl:text-[1.7rem] font-bold text-nero-green-900">Bareng Nerolusi</h2>

            <h2 className="text-lg md:text-xl xl:text-[1.7rem] font-bold mt-3">
              Bisa Ngerti TKA, Masuk kampus <br className="hidden xl:block" />
              impian & bikin orang tua bangga...
            </h2>

            <h1 className="text-xl lg:text-xl xl:text-[2.5rem] font-bold my-4 text-nero-green-900">Bahkan kalo kamu mulai dari 0.</h1>

            <div className="lg:mt-10">
              <button className="bg-nero-green-800 py-2 px-4 rounded-3xl text-white font-bold hover:bg-green-700 transition-colors duration-300 text-xs md:text-[0.6rem] lg:text-lg">
                <a href="https://bit.ly/Nerolusi-INTI-TKA2025">Join Kelas!</a>
              </button>

              <button className="bg-nero-green-200 py-2 px-4 rounded-3xl text-white font-bold hover:bg-green-500 transition-colors duration-300 text-xs md:text-[0.6rem] lg:text-lg ml-2">
                <a href="https://test2.nerolusi.com">E-Learning</a>
              </button>
            </div>
          </div>

          <div className="mb-0">
            <img src="/image/anak-SMA.png" alt="Anak SMA" className="max-w-[560px] w-full" />
          </div>
        </div>
      </div>

      <div className="w-full bg-nero-green-900 rounded-t-full h-[5.2rem] hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
