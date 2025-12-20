export default function Problem() {
  return (
    <section className="w-full bg-nero-green-900 pt-20 md:pt-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center md:items-start justify-between px-4 md:px-10 lg:px-20 text-center md:text-left pb-4 md:pb-0">
        <div>
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-gray-50">Kamu Juga Lagi Ngerasain</h1>
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-white md:mt-5">
            <em className="bg-yellow-400 text-white p-1 rounded-xl">Feeling</em> Ini Ga?...
          </h1>
        </div>

        <div className="mt-8 md:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-6 w-full">
          <div className="bg-white rounded-2xl w-full h-[90%] md:h-[90%] pt-10 md:pt-12">
            <div className="h-[50%] text-left">
              <div className="h-full flex">
                <div className="w-[40%] flex items-center justify-center">
                  <img src="./image/Problems-1.png" alt="" className="pt-1 px-2 w-[80%] bg-nero-green-900 rounded-[1.6rem]" />
                </div>
                <div className="w-[60%] flex items-center px-1">
                  <p className="text-lg font-bold text-green-700">Bingung Mulai Belajar TKA Dari Mana?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-full h-[90%] md:h-[90%] pt-10 md:pt-12">
            <div className="h-[50%] text-left">
              <div className="h-full flex">
                <div className="w-[40%] flex items-center justify-center">
                  <img src="./image/Problems-2.png" alt="" className="pt-1 w-[75%] bg-nero-green-900 rounded-[1.6rem]" />
                </div>
                <div className="w-[60%] flex items-center px-1">
                  <p className="text-lg font-bold text-green-700">Butuh Mentor Tapi Harga Bimbel Mahal?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-full h-[90%] md:h-[90%] pt-10 md:pt-12">
            <div className="h-[50%] text-left">
              <div className="h-full flex">
                <div className="w-[40%] flex items-center justify-center">
                  <img src="./image/Problems-3.png" alt="" className="pt-1 w-[73%] bg-nero-green-900 rounded-[1.6rem]" />
                </div>
                <div className="w-[60%] flex items-center px-1">
                  <p className="text-lg font-bold text-green-700">Khawatir Dengan Kemampuan Diri?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-t-full h-[5.2rem] hidden md:block mt-20">
        <h1></h1>
      </div>
      <div className="w-full bg-white hidden md:block">
        <h1></h1>
      </div>
    </section>
  );
}
