export default function Package() {
  const packages = [
    {
      name: "Inti-TKA",
      tier: "SMA Reguler",
      subtitle: "Akses Hingga Pelaksanaan TKA (Tes Kemampuan Akademik)",
      originalPrice: "290.000",
      price: "49.000",
      badge: null,
      features: [
        "Video Materi Lengkap",
        "Modul Pembelajaran",
        "33x Try-Outs",
        "Latihan Soal Per Materi",
        "Konsul TKA",
        "Komunitas Belajar"
      ],
    },
    {
      name: "Inti-TKA",
      tier: "SMA Plus",
      subtitle: "Akses Hingga Pelaksanaan TKA (Tes Kemampuan Akademik)",
      originalPrice: "490.000",
      price: "99.000",
      badge: "Paling Populer",
      features: [
        "40++ Pertemuan Online dengan Tutor",
        "Video Materi Lengkap",
        "Modul Pembelajaran",
        "33x Try-Outs",
        "Latihan Soal Per Materi",
        "Konsul TKA",
        "Komunitas Belajar"
      ],
    },
  ];

  return (
    <section className="w-full bg-nero-green-900 pt-10 md:pt-0" id="products">
      <div className="max-w-screen-2xl mx-auto flex flex-col w-full h-full items-center justify-between px-4 md:px-10 lg:px-20 text-center md:text-left">
        <div className="mt-5 px-2 md:px-0 mb-2 self-start">
          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-white md:mt-5">
            Bimbel Online TKA Dengan Harga Paling Terjangkau
          </h1>

          <h1 className="text-2xl md:text-[1.8rem] lg:text-[2.4rem] font-bold text-nero-gray-50 md:mt-5">
            Paket Dimulai Dari <span className="bg-red-600 p-1 text-white rounded-xl">49k-an</span> aja...
          </h1>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mt-10 md:mt-14 pb-14">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col bg-black/80 rounded-2xl p-6 md:p-8 text-white text-left ${
                pkg.badge ? "ring-2 ring-red-500 md:scale-[1.03]" : "ring-1 ring-white/10"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 right-6 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
              )}

              {/* Logo + name */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  className="w-12 md:w-14 bg-white rounded-lg p-1 shrink-0"
                  src="/image/Nerolusi-Logo.png"
                  alt="Nerolusi Logo"
                />
                <div>
                  <h2 className="text-lg md:text-2xl font-bold leading-tight">
                    {pkg.name} <span className="text-nero-gray-50">{pkg.tier}</span>
                  </h2>
                  <p className="text-xs md:text-sm font-light text-gray-300">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <span className="block text-base md:text-lg font-semibold line-through text-gray-400">
                  Rp {pkg.originalPrice}
                </span>
                <span className="block text-3xl md:text-4xl text-red-400 font-bold">
                  Rp {pkg.price}
                </span>
                <span className="block text-xs md:text-sm font-light text-gray-300">
                  Promo Sangat Terbatas!
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-2 mb-6">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                    <i className="fas fa-check-circle text-green-400 mt-1 shrink-0"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              
              {/* Tombol */}
              <div className="flex justify-center">
                <a
                  href="https://wa.me/6285591402079?text=Halo%20mimin%20Nero%2C%20saya%20ingin%20tanya-tanya%20nih"
                  className="bg-green-500 text-white px-4 py-1 md:py-2 rounded-[0.5rem] shadow-md hover:bg-green-700 transition duration-300 text-[0.8rem] md:text-lg font-bold"
                >
                  Pilih Paket Ini! <i className="fas fa-pen-to-square"></i>
                </a>
              </div>
            </div>
          ))}
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