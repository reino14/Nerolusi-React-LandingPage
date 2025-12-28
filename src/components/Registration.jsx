export default function Registration() {
  return (
    <section className="w-full bg-white mt-20 md:mt-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center md:items-start justify-between px-4 md:px-10 lg:px-20 text-center md:text-left mb-20 md:mb-32">
        <div className="md:ml-8">
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-900">
            <span className="p-1 bg-black p-1 rounded-xl text-white">Pendaftaran</span> Hanya Dengan 5 Menit,
          </h1>

          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-700 md:mt-5">Kamu Bisa Langsung Mulai Belajar...</h1>
        </div>

        <div className="flex flex-col items-center md:flex-row w-full justify-between items-center mt-10 md:mt-20 lg:px-20 xl:px-40">
          {/* Left Image */}
          <div className="relative w-[19rem] md:w-[22rem]">
            <img src="/image/Registration-1.png" alt="registration" className="w-full" />

            <a
              href="https://wa.me/6285591402079?text=Halo%20mimin%20Nero%2C%20saya%20ingin%20tanya-tanya%20nih"
              className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-[0.5rem] shadow-md hover:bg-gray-700 transition duration-300 xl:text-[1.4rem] font-bold"
            >
              Kontak <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          {/* Vertical Line */}
          <div className="w-1 bg-nero-green-800 h-[22.5rem] mx-10 hidden md:block"></div>
          <div className="w-1 bg-nero-green-800 h-[5rem] mx-10 block md:hidden"></div>

          {/* Right Image */}
          <div className="relative w-[19rem] md:w-[22rem]">
            <img src="/image/Registration-2.png" alt="registration" className="w-full" />

            <a
              href="https://wa.me/6285591402079?text=Halo%20mimin%20Nero%2C%20saya%20ingin%20tanya-tanya%20nih"
              className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-[0.5rem] shadow-md hover:bg-gray-700 transition duration-300 xl:text-[1.4rem] font-bold"
            >
              Daftar <i className="fas fa-pen-to-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* upper curve */}
      <div className="w-full bg-nero-green-900 rounded-t-full h-[5.2rem] hidden md:block">
        <h1></h1>
      </div>

      <div className="w-full bg-nero-green-900 hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
