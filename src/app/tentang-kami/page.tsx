import React from "react";
import bgmobile from "@/app/assets/tentang-kami/bg-mobile.png";
import reza from "@/app/assets/tentang-kami/reza.png";

const TentangKami = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgmobile.src})` }}>
      <div className=" bg-opacity-70 mt-24 rounded-lg p-8 max-w-lg text-center ">
        <h1 className="text-2xl font-bold font-mons text-white">
          Salam Pertiga!
        </h1>
        <p className="text-base font-mons text-accent mb-4">
          Salam dari Reza Husein
        </p>

        <div className="flex justify-center mb-4">
          <img
            src={reza.src}
            alt="Reza Husein"
            className="w-40 h-40 object-cover rounded-lg shadow-lg"
          />
        </div>

        <p className="text-sm font-pops text-white font-bold">
          <span className="text-accent">MAHAESA DWIDAYA PERTIGA </span>
          adalah perusahaan yang bergerak di Ekonomi Sirkular untuk menghasilkan
          pertumbuhan ekonomi dengan mempertahankan nilai PRODUK, BAHAN, dan
          SUMBER DAYA dalam perekonomian selama mungkin yang akhirnya mampu
          mengurangi dampak kerusakan sosial dan lingkungan.
        </p>

        <p className="text-sm font-pops text-white font-bold mt-4">
          <span className="font-bold text-accent">PERTIGAGROUP</span> adalah
          perusahaan yang bergerak di Ekonomi Sirkular. Kami mengedepankan
          pengelolaan limbah organik untuk menghidupkan PERTANIAN, PETERNAKAN,
          PERIKANAN, dan PERKEBUNAN dalam perencanaan, pendanaan, dan
          pembimbingan.
        </p>

        <p className="mt-4 text-sm font-pops text-accent font-bold">
          Founder & Owner
        </p>
      </div>
    </section>
  );
};

export default TentangKami;
