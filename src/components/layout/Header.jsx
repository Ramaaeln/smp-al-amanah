import { Link } from "react-router-dom";
import Logo from '../../assets/home/logo.png'
export default function Header() {
  return (
    <header className="sticky top-0 z-10  ">
        <div className="text-end  p-2 header">
        <Link className="bg-white p-1 rounded text-[var(--header)]" to='/'>Login</Link>
        </div>
      <nav className="flex w-full p-2 py-5 justify-between items-center">
        <div>
        <img src={Logo} height={89} width={284} alt="" />
        </div>

        <div className="flex gap-6 uppercase">
        <Link to="/" >
          Home
        </Link>
        <Link to="/about">
          Berita terkini
        </Link>
        <Link to="/dashboard">
          Profil SEKOLAH
        </Link>
        <Link to="/dashboard">
          Hubungi kami
        </Link>
        <Link to="/dashboard">
          Pendaftaran
        </Link>
        </div>

      </nav>
    </header>
  );
}
