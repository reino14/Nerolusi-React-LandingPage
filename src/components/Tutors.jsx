export default function Tutors() {
  return (
    <section className="w-full bg-nero-green-900">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center md:items-start justify-between px-4 md:px-10 lg:px-20 text-center md:text-left">
        <div className="mt-16 md:mt-0">
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-gray-50">Dengan Pengajar Friendly & Profesional</h1>

          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-white md:mt-5">Dari Berbagai TOP PTN di Indonesia...</h1>
        </div>

        <section className="container-tutor mt-6 mb-20 md:my-16 bg-white rounded-[2.5rem]">
          <div className="card-container-tutor py-4">
            {/* Tutor Cards */}
            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR7.png" alt="Tutor 1" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR2.png" alt="Tutor 2" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR4.png" alt="Tutor 3" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR3.png" alt="Tutor 4" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR.png" alt="Tutor 5" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR6.png" alt="Tutor 6" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR5.png" alt="Tutor 7" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR8.png" alt="Tutor 8" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR10.png" alt="Tutor 9" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR11.png" alt="Tutor 10" />
            </div>

            <div className="card-tutor">
              <img src="/image/Tutor/TUTOR12.png" alt="Tutor 11" />
            </div>
          </div>
        </section>
      </div>

      {/* Bagian Bawah */}
      <div className="w-full bg-white rounded-t-full h-[5.2rem] hidden md:block">
        <h1></h1>
      </div>

      <div className="w-full bg-white hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
