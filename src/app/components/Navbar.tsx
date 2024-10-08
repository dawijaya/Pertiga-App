"use client";

// components/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [activeMenu, setActiveMenu] = useState(""); // Menyimpan menu yang aktif
  const pathname = usePathname(); // Menggunakan usePathname dari next/navigation

  // Check the route to conditionally render the navbar
  const isHiddenRoute = pathname === "/" || pathname === "/register";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Set initial screen size
    handleResize();

    // Cek apakah ada menu aktif yang tersimpan di localStorage
    const storedMenu = localStorage.getItem("activeMenu");
    if (storedMenu) {
      setActiveMenu(storedMenu);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  // Fungsi untuk menangani klik pada menu
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
    localStorage.setItem("activeMenu", menuName); // Simpan menu yang diklik di localStorage
  };

  if (isHiddenRoute) {
    return null; // Jangan render navbar di halaman "/" dan "/register"
  }

  return (
    <nav
      className={`bg-primary  shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed w-full top-0 z-10`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <img className="w-1/2 " src={logo.src} alt="logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="flex font-mons text-textprimary  font-bold text-xl space-x-6">
            <li
              className={`hover:border-b   hover:border-accent ${
                activeMenu === "beranda" ? "border-b-4  border-accent" : ""
              }`}
              onClick={() => handleMenuClick("beranda")}>
              <Link href="/beranda">Beranda</Link>
            </li>
            <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "tentang-kami" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("tentang-kami")}>
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            {/* <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "visi-misi" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("visi-misi")}>
              <Link href="/visi-misi">Visi dan Misi</Link>
            </li> */}
            <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "produk" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("produk")}>
              <Link href="/produk">Produk</Link>
            </li>
            {/* <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "tawaran-kami" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("tawaran-kami")}>
              <Link href="/tawaran-kami">Tawaran Kami</Link>
            </li>
            <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "artikel" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("artikel")}>
              <Link href="/artikel">Artikel</Link>
            </li>
            <li
              className={`hover:border-b hover:border-accent ${
                activeMenu === "kontak-kami" ? "border-b-4 border-accent" : ""
              }`}
              onClick={() => handleMenuClick("kontak-kami")}>
              <Link href="/kontak-kami">Kontak Kami</Link>
            </li> */}
          </ul>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div className="relative">
            <button
              className="text-xl text-netral focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}>
              ☰ {/* Hamburger icon */}
            </button>
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-primary border border-netral rounded-lg shadow-lg">
                <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "beranda" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("beranda")}>
                  <Link href="/beranda">Beranda</Link>
                </li>
                <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "tentang-kami" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("tentang-kami")}>
                  <Link href="/tentang-kami">Tentang Kami</Link>
                </li>
                {/* <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "visi-misi" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("visi-misi")}>
                  <Link href="/visi-misi">Visi dan Misi</Link>
                </li> */}
                <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "produk" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("produk")}>
                  <Link href="/produk">Produk</Link>
                </li>
                {/* <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "tawaran-kami" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("tawaran-kami")}>
                  <Link href="/tawaran-kami">Tawaran Kami</Link>
                </li>
                <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "artikel" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("artikel")}>
                  <Link href="/artikel">Artikel</Link>
                </li>
                <li
                  className={`block px-4 py-2 hover:bg-accent ${
                    activeMenu === "kontak-kami" ? "bg-accent rounded-md" : ""
                  }`}
                  onClick={() => handleMenuClick("kontak-kami")}>
                  <Link href="/kontak-kami">Kontak Kami</Link>
                </li> */}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
