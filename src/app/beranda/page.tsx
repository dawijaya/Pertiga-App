import bglogin from "@/app/assets/bg-beranda.png";
import kangkung from "@/app/assets/beranda/kangkung.png";
import Link from "next/link";

export default function Login() {
  return (
    <div>
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
          <h1 className="font-mons text-white text-center font-bold text-lg mt-10 px-20">
            Sumber <span className="text-accent">Sayuran Segar</span> dan
            <span className="text-accent"> Ikan Berkualitas</span> untuk Hidup
            Sehat Anda
          </h1>
          <Link
            href={"/produk"}
            className="flex items-center justify-center mt-10">
            <button className="bg-primary rounded-xl cursor-pointer hover:bg-secondary border-netral  transition-all p-5 text-lg  text-accent">
              🛒 Belanja Sekarang
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}
