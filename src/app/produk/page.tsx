"use client";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface Sale {
  customer: string;
  productName: string;
  date: string;
  price: string;
}

const products: Product[] = [
  {
    name: "Kangkung Thailand",
    price: "Rp 15.000 / Kg",
    image: "/images/kangkung.png",
  },
  { name: "Bayam", price: "Rp 15.000 / Kg", image: "/images/bayam.png" },
  {
    name: "Lele Fresh (Hidup)",
    price: "Rp 27.000 / Kg",
    image: "/images/lele.jpg",
  },
  {
    name: "Nila Fresh (Hidup)",
    price: "Rp 35.000 / Kg",
    image: "/images/nila.jpg",
  },
  { name: "Ayam Utuh", price: "Rp 35.000", image: "/images/ayam.jpg" },
  {
    name: "Telur Bebek",
    price: "Rp 15.000 (60-70gr)",
    image: "/images/telur.jpg",
  },
  {
    name: "SAWI MANIS",
    price: "Rp 15.000 / Kg",
    image: "/images/sawimanis.jpeg",
  },
  {
    name: "LELE ASAP 500GR",
    price: "Rp 70.000",
    image: "/images/leleasap.jpeg",
  },
  {
    name: "NILA FILLET 300GR",
    price: "Rp 35.000",
    image: "/images/nilafillet.jpeg",
  },
  {
    name: "DAGING PAHA (BL) KG",
    price: "Rp 55.000",
    image: "/images/pahaayam.jpg",
  },
  {
    name: "TELUR AYAM KAMPUNG",
    price: "Rp 1.200 / perbutir",
    image: "/images/telurayamkampung.jpeg",
  },
  {
    name: "BUNGA KOL",
    price: "Rp 35.000 / Kg",
    image: "/images/bungakol.jpg",
  },
  {
    name: "DAUN BAWANG",
    price: "Rp 35.000 / Kg",
    image: "/images/daunbawang.jpg",
  },
];

const salesData: Sale[] = [
  {
    customer: "Andi",
    productName: "Kangkung Thailand",
    date: "2024-09-01",
    price: "Rp 15.000",
  },
  {
    customer: "Feri",
    productName: "Kangkung",
    date: "2024-09-01",
    price: "Rp 10.000",
  },
  {
    customer: "Adriati",
    productName: "Bayam",
    date: "2024-09-02",
    price: "Rp 12.000",
  },
  {
    customer: "Raden",
    productName: "Tomat",
    date: "2024-09-03",
    price: "Rp 8.000",
  },
  {
    customer: "Agam Ginting",
    productName: "Cabe Merah",
    date: "2024-09-04",
    price: "Rp 20.000",
  },
  {
    customer: "Alisya",
    productName: "Sawi Putih",
    date: "2024-09-05",
    price: "Rp 11.000",
  },
  {
    customer: "Nur Ainun L",
    productName: "Bawang Merah",
    date: "2024-09-06",
    price: "Rp 25.000",
  },
  {
    customer: "Nizam M",
    productName: "Bayam Hijau",
    date: "2024-09-07",
    price: "Rp 15.000",
  },
  {
    customer: "Nurul Fadila",
    productName: "Tomat",
    date: "2024-09-08",
    price: "Rp 13.000",
  },
  {
    customer: "MandaPrayogi",
    productName: "Kangkung",
    date: "2024-09-09",
    price: "Rp 9.000",
  },
  {
    customer: "Honey",
    productName: "Bawang Putih",
    date: "2024-09-10",
    price: "Rp 30.000",
  },
  {
    customer: "Izhar Wiranda",
    productName: "Tomat",
    date: "2024-09-11",
    price: "Rp 8.500",
  },
  {
    customer: "Reyza Husein",
    productName: "Cabe Merah",
    date: "2024-09-12",
    price: "Rp 22.000",
  },
  {
    customer: "Tiara Puspita",
    productName: "Kangkung",
    date: "2024-09-13",
    price: "Rp 10.500",
  },
  {
    customer: "Ahmad Lutfi",
    productName: "Sawi Hijau",
    date: "2024-09-14",
    price: "Rp 13.000",
  },
  {
    customer: "Shania",
    productName: "Bayam",
    date: "2024-09-15",
    price: "Rp 12.000",
  },
  {
    customer: "Putri Adelia",
    productName: "Tomat",
    date: "2024-09-16",
    price: "Rp 9.000",
  },
  {
    customer: "Fani Hasibuan",
    productName: "Cabe Merah",
    date: "2024-09-17",
    price: "Rp 18.000",
  },
  {
    customer: "Willy Sinaga",
    productName: "Bayam",
    date: "2024-09-18",
    price: "Rp 15.000",
  },
  {
    customer: "Susan",
    productName: "Kangkung",
    date: "2024-09-19",
    price: "Rp 9.500",
  },
  {
    customer: "Retha Sirait",
    productName: "Bawang Putih",
    date: "2024-09-20",
    price: "Rp 28.000",
  },
  {
    customer: "Rina Samosir",
    productName: "Bayam Hijau",
    date: "2024-09-21",
    price: "Rp 16.000",
  },
  {
    customer: "Sri",
    productName: "Tomat",
    date: "2024-09-22",
    price: "Rp 9.000",
  },
  {
    customer: "Ismail",
    productName: "Sawi Putih",
    date: "2024-09-23",
    price: "Rp 11.000",
  },
  {
    customer: "Reviska",
    productName: "Bayam",
    date: "2024-09-24",
    price: "Rp 14.000",
  },
  {
    customer: "Vina Rasih",
    productName: "Kangkung",
    date: "2024-09-25",
    price: "Rp 10.000",
  },
  {
    customer: "Meisyara",
    productName: "Cabe Merah",
    date: "2024-09-26",
    price: "Rp 17.000",
  },
  {
    customer: "Bintang Purba",
    productName: "Tomat",
    date: "2024-09-27",
    price: "Rp 8.000",
  },
  {
    customer: "FarhanArandy",
    productName: "Sawi Hijau",
    date: "2024-09-28",
    price: "Rp 13.500",
  },
  {
    customer: "Fathimah",
    productName: "Bayam",
    date: "2024-09-29",
    price: "Rp 12.500",
  },
  {
    customer: "Cinta Elvina",
    productName: "Tomat",
    date: "2024-09-30",
    price: "Rp 9.000",
  },
  {
    customer: "Dina Hasana",
    productName: "Kangkung",
    date: "2024-08-31",
    price: "Rp 10.000",
  },
  {
    customer: "Isiyanto",
    productName: "Bawang Merah",
    date: "2024-08-01",
    price: "Rp 23.000",
  },
  {
    customer: "Fiya Oktavia",
    productName: "Bayam Hijau",
    date: "2024-08-02",
    price: "Rp 15.000",
  },
  {
    customer: "Ade Fitriani",
    productName: "Sawi Hijau",
    date: "2024-08-03",
    price: "Rp 13.000",
  },
  {
    customer: "Lia",
    productName: "Tomat",
    date: "2024-08-04",
    price: "Rp 8.500",
  },
  {
    customer: "Budi",
    productName: "Bayam",
    date: "2024-08-02",
    price: "Rp 15.000",
  },
  {
    customer: "Citra",
    productName: "Lele Fresh (Hidup)",
    date: "2024-08-03",
    price: "Rp 27.000",
  },
  {
    customer: "Dewi",
    productName: "Nila Fresh (Hidup)",
    date: "2024-08-04",
    price: "Rp 35.000",
  },
  {
    customer: "Eka",
    productName: "Ayam Utuh",
    date: "2024-08-05",
    price: "Rp 35.000",
  },
  {
    customer: "Fahmi",
    productName: "Telur Bebek",
    date: "2024-08-06",
    price: "Rp 15.000",
  },
];

const ProdukList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Tambahkan state untuk pencarian
  const waNumber = "6283115363789"; // Nomor WhatsApp tujuan

  const handleWhatsAppLink = (productName: string) => {
    const message = `Saya tertarik dengan ${productName}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fungsi untuk mem-filter produk berdasarkan nama atau harga
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl dark:text-black mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Produk Kami
      </h1>
      {/* Tombol untuk membuka modal */}
      <h2
        onClick={handleOpenModal}
        className="text-textprimary  text-xs md:text-lg bg-primary text-center md:w-1/4 w-1/2 p-2 rounded-xl cursor-pointer">
        Data Penjualan
      </h2>
      <a
        href="/DATA PEMASARAN.xlsx"
        download
        className="block p-2 text-center my-2 bg-accent w-1/2 rounded-xl  md:text-md text-textprimary text-xs cursor-pointer">
        Penjualan Lainnya
      </a>

      {/* Modal dari MUI */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Sesuaikan lebar untuk mobile
            maxWidth: "600px", // Batas lebar untuk desktop
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "80vh", // Batas maksimal tinggi modal
            overflow: "auto", // Agar bisa di-scroll secara vertikal dan horizontal
          }}>
          <h2 className="text-lg font-bold mb-4">Data Penjualan</h2>

          {/* Tabel Data Penjualan */}
          <TableContainer component={Paper} className="overflow-auto">
            {/* Tambahkan overflow-auto di sini */}
            <Table className="min-w-[600px]">
              {/* Tambahkan min-width agar tabel bisa di-scroll secara horizontal */}
              <TableHead>
                <TableRow>
                  <TableCell>Nama Pelanggan</TableCell>
                  <TableCell>Produk yang Dibeli</TableCell>
                  <TableCell>Tanggal</TableCell>
                  <TableCell>Harga</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salesData.map((sale, index) => (
                  <TableRow key={index}>
                    <TableCell>{sale.customer}</TableCell>
                    <TableCell>{sale.productName}</TableCell>
                    <TableCell>{sale.date}</TableCell>
                    <TableCell>{sale.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="error"
            className="mt-4">
            Tutup
          </Button>
        </Box>
      </Modal>

      {/* Input Pencarian */}
      <div className="relative w-full mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state dengan input pengguna
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <a
            href={handleWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            key={product.name}
            className="border p-2 bg-[#D9D9D9] rounded-md shadow-md hover:shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-sm mb-4"
            />
            <h2 className="text-sm font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProdukList;
