import bglogin from "@/app/assets/bg-beranda.png";
import kangkung from "@/app/assets/beranda/kangkung.png";
import bgdekstop from "@/app/assets/beranda/bg-desktop.png";
import wa from "@/app/assets/logowa.png";
import Link from "next/link";

export default function Beranda() {
  return (
    <div>
      {/* mobile */}
      <div
        className=" md:hidden overflow-hidden block flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bglogin.src})`,
        }}>
        {/* Alert Snackbar di bagian atas */}

        <main className="">
          <div className="flex items-center mt-44 justify-center">
            <img className="" src={kangkung.src} alt="kangkung" />
          </div>
          <h1 className="font-mons text-white text-center font-bold text-lg mt-10 px-16">
            Sumber <span className="text-accent">Sayuran Segar</span> dan
            <span className="text-accent"> Ikan Berkualitas</span> untuk Hidup
            Sehat Anda
          </h1>
          <Link
            href={"/produk"}
            className="flex items-center justify-center mt-10">
            <button className="bg-primary font-pops rounded-xl cursor-pointer hover:bg-secondary border-netral  transition-all p-5 text-lg  text-accent">
              Belanja Sekarang 🛒
            </button>
          </Link>
        </main>
        <div className="fixed bottom-5 right-5">
          <Link href="https://wa.me/6283115363789">
            {" "}
            <img className="w-12 h-12" src={wa.src} alt="wa" />
          </Link>
        </div>
      </div>

      {/* dekstop */}
      <div
        className="md:block overflow-hidden hidden flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgdekstop.src})`,
        }}>
        {/* Alert Snackbar di bagian atas */}

        <main className="">
          <div className="flex items-center mt-64 justify-center">
            <img className="w-1/5" src={kangkung.src} alt="kangkung" />
          </div>
          <h1 className="font-mons text-white text-center font-bold text-3xl mt-10 px-[26rem]">
            Sumber <span className="text-accent">Sayuran Segar</span> dan
            <span className="text-accent"> Ikan Berkualitas</span> untuk Hidup
            Sehat Anda
          </h1>
          <Link
            href={"/produk"}
            className="flex items-center mb-5 justify-center mt-10">
            <button className="bg-primary font-pops rounded-xl cursor-pointer hover:shadow-accent border-netral transition-all p-5 text-xl text-textprimary">
              Belanja Sekarang 🛒
            </button>
          </Link>

          {/* Logo WA di sudut kanan bawah */}
          <div className="fixed bottom-10 right-10">
            <Link href="https://wa.me/6283115363789">
              <img className="w-12 h-12" src={wa.src} alt="wa" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
