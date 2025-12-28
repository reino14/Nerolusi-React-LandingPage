export default function Package() {
  return (
    <section className="w-full bg-nero-green-900 pt-10 md:pt-0" id="products">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center lg:items-start justify-between px-2 md:px-10 lg:px-20 text-center md:text-left">
        <div className="mt-5 px-2 md:px-0 mb-2">
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-white md:mt-5">Bimbel Online SNBT/UTBK Dengan Harga Paling Terjangkau</h1>

          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-gray-50 md:mt-5">
            Paket Dimulai Dari <span className="bg-red-600 p-1 text-white rounded-xl">300k-an</span> aja...
          </h1>
        </div>

        <div className="flex justify-center w-full mt-8 md:mt-12">
          <div className="relative w-[58rem]">
            {/* Gambar */}
            <img className="w-full" src="/image/Package-2.png" alt="Package Banner" />

            {/* Floating Paket */}
            <div className="absolute top-0 md:top-24 right-4 md:right-2 bg-black bg-opacity-70 md:bg-opacity-80 text-white px-1 md:px-4 py-2 rounded-md">
              <div className="flex justify-center mb-2">
                <img className="w-[5rem] md:w-[8rem] bg-white rounded-lg p-1" src="/image/Nerolusi-Logo.png" alt="Logo" />
              </div>

              <h1 className="text-sm md:text-xl text-center font-bold leading-tight">
                Go-TBK <br /> SMA
                <span className="block text-[0.5rem] md:text-xs font-light">Akses Hingga Pelaksanaan SNBT/UTBK</span>
                <span className="block text-sm md:text-xl font-bold line-through text-gray-200">650.000</span>
              </h1>

              <h1 className="flex flex-col items-center px-8 text-xl md:text-4xl text-red-400 font-bold md:mb-3">
                Rp 379.000
                <span className="block text-[0.5rem] md:text-sm font-light">Promo Sangat Terbatas!</span>
              </h1>

              {/* Tombol */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/6285591402079?text=Halo%20mimin%20Nero%2C%20saya%20ingin%20tanya-tanya%20nih"
                  className="bg-green-500 text-white px-4 py-1 md:py-2 rounded-[0.5rem] shadow-md hover:bg-green-700 transition duration-300 text-[0.8rem] md:text-lg font-bold"
                >
                  Daftar <i className="fas fa-pen-to-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom curve */}
      <div className="w-full bg-white rounded-t-full h-[5.2rem] hidden md:block">
        <h1></h1>
      </div>

      <div className="w-full bg-white hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
