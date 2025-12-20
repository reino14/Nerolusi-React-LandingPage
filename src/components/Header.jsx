import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const header = document.getElementById('main-header');
    const navbarCheckbox = document.getElementById('navbar-open');
    const menuLinks = document.querySelectorAll('nav ul li a');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md', 'backdrop-blur-md');
      } else {
        header.classList.remove('shadow-md', 'backdrop-blur-md');
        header.style.backgroundColor = 'white';
      }
    };

    window.addEventListener('scroll', handleScroll);

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navbarCheckbox.checked = false;
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 !bg-white px-4 transition-all duration-500 pb-2 shadow-md" id="main-header">
      <div className="mx-auto max-w-screen-lg xl:max-w-screen-xl flex justify-between items-center h-20 relative">
        <a href="#" className="flex items-center font-black z-50">
          <img src="/image/Nerolusi-Logo.png" alt="Logo" className="w-32 pt-3" />
        </a>

        <input type="checkbox" id="navbar-open" className="peer hidden" />

        <label htmlFor="navbar-open" className="cursor-pointer sm:hidden z-50">
          <svg className="w-7 h-7 stroke-current text-white-purple" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </label>

        <nav
          className="fixed top-0 left-0 h-screen w-[60%] bg-nero-gray-200 md:!bg-white text-white transform -translate-x-full
                     peer-checked:translate-x-0 transition-transform duration-200
                     sm:static sm:translate-x-0 sm:flex justify-center sm:items-center
                     sm:h-auto sm:w-auto sm:text-white z-40"
        >
          <ul
            className="flex flex-col gap-y-6 p-6 pt-24 
                         sm:flex-row sm:gap-x-8 sm:p-0 sm:pt-4 sm:items-center mt-2"
          >
            <li>
              <a href="#home" className="text-white sm:text-black hover:text-gray-500 transition-all duration-400 font-semibold text-sm md:text-[0.7rem] lg:text-sm">
                Beranda
              </a>
            </li>

            <li>
              <a href="#products" className="text-white sm:text-black hover:text-gray-500 transition-all duration-400 font-semibold text-sm md:text-[0.7rem] lg:text-sm">
                Produk
              </a>
            </li>

            <li>
              <a href="#solutions" className="text-white sm:text-black hover:text-gray-500 transition-all duration-400 font-semibold text-sm md:text-[0.7rem] lg:text-sm">
                Layanan
              </a>
            </li>

            <li>
              <a href="#testimonials" className="text-white sm:text-black hover:text-gray-500 transition-all duration-400 font-semibold text-sm md:text-[0.7rem] lg:text-sm">
                Testimoni
              </a>
            </li>

            <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-2 pr-16 sm:pr-0">
              <button className="bg-nero-green-800 py-2 px-4 rounded-3xl text-white font-bold hover:bg-green-700 transition-colors duration-300 text-xs md:text-[0.7rem] lg:text-sm">
                <a href="https://bit.ly/Nerolusi-INTI-TKA2025">Join Kelas!</a>
              </button>

              <button className="bg-nero-green-200 py-2 px-4 rounded-3xl text-white font-bold hover:bg-green-500 transition-colors duration-300 text-xs md:text-[0.7rem] lg:text-sm">
                <a href="https://test2.nerolusi.com">E-Learning</a>
              </button>
            </div>
          </ul>
        </nav>

        <label
          htmlFor="navbar-open"
          className="fixed top-0 left-[60%] w-[40%] h-screen bg-black bg-opacity-50
                     opacity-0 pointer-events-none peer-checked:opacity-100
                     peer-checked:pointer-events-auto transition-opacity duration-200
                     sm:hidden z-30 cursor-pointer"
        ></label>
      </div>
    </header>
  );
}
