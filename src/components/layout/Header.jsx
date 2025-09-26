import { Link } from "react-router-dom";
import Logo from "../../assets/home/logo.png";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-100  ">
      <div
        className="text-end
        p-2
        header
        2xl:block
        xl:block
        lg:block
        md:hidden
        sm:hidden
        hidden
        "
      >
        <Link className="bg-white p-1 rounded text-[var(--header)]" to="/">
          Login
        </Link>
      </div>

      <nav className="
      2xl:bg-transparent
      xl:bg-transparent
      lg:bg-transparent
      md:bg-[var(--header)]
      sm:bg-[var(--header)]  
      bg-[var(--header)] flex w-full p-2 py-5 justify-between items-center">
        <div>
          <img src={Logo} height={89} width={284} alt="" />
        </div>
        <button
          className="ri-menu-line text-white 
        2xl:hidden 
        xl:hidden 
        lg:hidden 
        md:block text-2xl
        sm:block
        
        "
          onClick={() => setOpen(!open)}
        >
          {" "}
        </button>

        <div
          className="
        2xl:flex xl:flex lg:flex 
        md:hidden sm:hidden hidden
        flex gap-6 uppercase text-[var(--primary)] font-lato 2xl:text-lg xl:text-lg
        "
        >
          <Link to="/">Home</Link>
          <Link to="/berita">Berita terkini</Link>
          <Link to="/dashboard">Profil SEKOLAH</Link>
          <Link to="/dashboard">Hubungi kami</Link>
          <Link to="/dashboard">Pendaftaran</Link>
        </div>

        {open && (
          <div className="md:absolute md:top-20 md:right-5 md:bg-white md:p-5 md:rounded 
          sm:absolute sm:top-20 sm:right-5 sm:bg-white sm:p-5 sm:rounded
          absolute top-20 right-5 bg-white p-5 rounded 

          shadow flex flex-col gap-3 uppercase text-[var(--primary)] font-lato 
          2xl:hidden 
          xl:hidden 
          lg:hidden">
            <Link to="/">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/berita">Berita terkini</Link>
          <Link to="/dashboard">Profil SEKOLAH</Link>
          <Link to="/dashboard">Hubungi kami</Link>
          <Link to="/dashboard">Pendaftaran</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
