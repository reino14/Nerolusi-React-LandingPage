export default function Solution() {
  return (
    <section className="w-full bg-white mt-16 md:mt-0" id="solutions">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center md:items-start justify-between px-2 md:px-10 lg:px-18 text-center md:text-left">
        <div className="md:ml-8">
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-900">Kami Hadir Sebagai Solusi Teman Belajar Kamu</h1>

          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-700 md:mt-5">Dengan Fasilitas...</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-4 mx-auto my-10">
          {/* Box 1 */}
          <div className="rounded-xl p-2 min-h-[320px] flex flex-col justify-between">
            <div className="border-4 border-green-700 rounded-xl pt-4 px-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-green-700 font-bold text-[1.3rem] text-center">
                  Simulasi TKA Asli <br />
                  <span className="text-nero-green-700">Dengan Akurat</span>
                </h3>

                <p className="text-[0.9rem] mt-2 mb-4 md:mb-0">Menyediakan platform TO dan simulasi soal yang mirip dengan TKA asli!</p>
              </div>

              <div className="mb-10">
                <img src="/image/Feature-1.png" alt="simulasi utbk" className="w-full rounded" />
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="rounded-xl p-2 min-h-[320px] flex flex-col justify-between">
            <div className="border-4 border-green-700 rounded-xl pt-4 px-3 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-nero-green-700 font-bold text-[1.3rem] text-center">
                  Komunitas{' '}
                  <span className="text-nero-green-900">
                    Pejuang <em>TKA</em>
                  </span>{' '}
                  <br />
                  <span className="text-nero-green-900">dan</span> SNBP Aktif
                </h3>

                <p className="text-[0.9rem] mt-2 mb-6 md:mb-0">
                  Membangun <b>komunitas belajar</b> yang SOLID antar murid! Menyediakan layanan <b>konsultasi</b> segala hal terkait TKA!
                </p>
              </div>

              <div className="flex justify-center">
                <img src="/image/Feature-2.png" alt="konsultasi" className="w-[90%] rounded" />
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="rounded-xl p-2 min-h-[320px] flex flex-col justify-between gap-y-4">
            <div className="border-4 border-green-700 rounded-xl p-5">
              <h3 className="text-green-900 font-bold text-[1.3rem] text-center">
                <em>Video Materi</em> RUTIN Dengan
                <br />
                <span className="text-nero-green-700">Pengajar Expert</span>
              </h3>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[0.9rem] mt-2">Menyediakan pembelajaran online dengan menyediakan rekaman materi! Rekaman TERBARU keluar secara bertahap!</p>
                </div>

                <div className="flex justify-center">
                  <img src="/image/Feature-3.png" alt="liveclass" className="mt-4 w-[65%] rounded" />
                </div>
              </div>
            </div>

            <div className="border-4 border-green-700 rounded-xl p-5">
              <h3 className="text-green-700 font-bold text-[1.3rem] text-center">
                Drill Soal
                <span className="text-nero-green-700">
                  <em> Pengasah Otak!</em>
                </span>
              </h3>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[0.9rem] mt-2">
                    Paket pengerjaan <b>DRILL SOAL</b> yang <b>sistematis</b> setiap menyelesaikan video pembelajaran.
                  </p>
                </div>

                <div className="flex justify-center">
                  <img src="/image/Feature-4.png" alt="liveclass" className="mt-4 w-[65%] rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Hijau Bawah */}
      <div className="w-full bg-nero-green-900 rounded-t-full h-[5.2rem] hidden md:block">
        <h1></h1>
      </div>

      <div className="w-full bg-nero-green-900 hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
