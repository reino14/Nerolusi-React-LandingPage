export default function Testimonials() {
  return (
    <section className="w-full bg-white mt-20 md:mt-0" id="testimonials">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center md:items-start justify-between px-4 md:px-10 lg:px-20 text-center md:text-left">
        <div>
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-900">Para Alumni Merasakan Dampaknya</h1>
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-green-700 md:mt-5">Setelah Belajar Dengan Nerolusi...</h1>
        </div>

        <div className="container-testimonial md:mt-10">
          <div className="testimonial-container2">
            {/* Row 1 */}
            <div className="testimonial-row">
              <div className="testimonial-card2">
                <img src="./image/Testimoni/yasmin.jpg" alt="Yasmin" />
                <div className="content2">
                  <h3 className="font-semibold">Yasmin</h3>
                  <span>Kedokteran UNPAD </span>
                  <p>“SEMUA materi yang diajarin ke aku mudah banget ditangkap!”</p>
                </div>
              </div>

              <div className="testimonial-card2">
                <img src="./image/Testimoni/Djordan.jpg" alt="Djordan" />
                <div className="content2">
                  <h3 className="font-semibold">Djordan</h3>
                  <span>Teknik Mesin UNS </span>
                  <p>“Materinya terstruktur dan banyak trik cepat yang diajarin sama kakak-kakak mentor”</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="testimonial-row">
              <div className="testimonial-card2">
                <img src="./image/Testimoni/Firyal2.jpg" alt="Firyal" />
                <div className="content2">
                  <h3 className="font-semibold">Firyal</h3>
                  <span>Ilmu Kelautan UNBRAW</span>
                  <p>“Fleksibel, cocok untuk aku yang jadwalnya padet. Mentornya juga sabar dan ramah BANGET”</p>
                </div>
              </div>

              <div className="testimonial-card2">
                <img src="./image/Testimoni/Zulfa2.jpg" alt="Zulfa" />
                <div className="content2">
                  <h3 className="font-semibold">Zulfa</h3>
                  <span>Kelautan dan Perikanan UPI</span>
                  <p>“Suasana belajar di Nerolusi kondusif banget dan seru!”</p>
                </div>
              </div>
            </div>
          </div>

          <div className="header1">
            <p className="p-custom">dan masih banyak lagi...</p>
          </div>
        </div>
      </div>

      {/* Nempel langsung */}
      <div className="w-full bg-nero-green-900 md:rounded-t-full h-[5.2rem]">
        <h1></h1>
      </div>

      {/* Nempel langsung */}
      <div className="w-full bg-nero-green-900 block">
        <div className="text-center md:text-left md:pl-24 pb-16">
          <h1 className="text-2xl md:text-2xl lg:text-[2.4rem] font-bold text-nero-gray-50">
            <span className="bg-red-600 p-1 rounded-xl">TKA Semakin Dekat,</span>
          </h1>
          <h1 className="text-2xl md:text-2xl lg:text-[2.4rem] font-bold text-white md:mt-5">
            Jangan Tunggu Sampai Nyesel. <span>Mulai Sekarang!</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
