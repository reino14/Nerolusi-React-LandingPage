export default function Footer() {
  return (
    <footer className="bg-[#2f3a4e] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo dan Sosial */}
          <div className="flex flex-col items-start md:items-start gap-4">
            <img src="./image/Nerolusi-Logo.png" alt="Logo Nerolusi" className="w-20" />
            <p className="text-sm text-gray-300">
              © 2023 Nerolusi
              <br />
              All rights reserved.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/bimbelnerolusi/">
                <i className="fab fa-instagram text-2xl hover:text-pink-400"></i>
              </a>

              <a href="https://www.tiktok.com/@nerolusi">
                <i className="fab fa-tiktok text-2xl hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="text-sm">
            <h3 className="text-white font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300">
              Cluster Ambassador II Blok D16,
              <br />
              Perumahan Bukit Dago, Kec. Gunung Sindur,
              <br />
              Kabupaten Bogor, Jawa Barat 16340.
            </p>

            <p className="mt-2 text-gray-300">cpnerolusi@gmail.com</p>
            <p className="text-gray-300">+62 855 9140 2079</p>
          </div>

          {/* Learn More */}
          <div className="text-sm">
            <h3 className="text-white font-semibold mb-2">Learn More</h3>

            <ul className="text-gray-300 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
