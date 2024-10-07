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
];

const salesData: Sale[] = [
  {
    customer: "Andi",
    productName: "Kangkung Thailand",
    date: "2024-10-01",
    price: "Rp 15.000",
  },
  {
    customer: "Budi",
    productName: "Bayam",
    date: "2024-10-02",
    price: "Rp 15.000",
  },
  {
    customer: "Citra",
    productName: "Lele Fresh (Hidup)",
    date: "2024-10-03",
    price: "Rp 27.000",
  },
  {
    customer: "Dewi",
    productName: "Nila Fresh (Hidup)",
    date: "2024-10-04",
    price: "Rp 35.000",
  },
  {
    customer: "Eka",
    productName: "Ayam Utuh",
    date: "2024-10-05",
    price: "Rp 35.000",
  },
  {
    customer: "Fahmi",
    productName: "Telur Bebek",
    date: "2024-10-06",
    price: "Rp 15.000",
  },
];

const ProdukList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const waNumber = "6283115363789"; // Nomor WhatsApp tujuan

  const handleWhatsAppLink = (productName: string) => {
    const message = `Saya tertarik dengan ${productName}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-4xl dark:text-black mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Produk Kami
      </h1>
      {/* Tombol untuk membuka modal */}
      <h2 onClick={handleOpenModal} className="text-blue-500 cursor-pointer">
        Data Penjualan
      </h2>

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
            overflowX: "auto", // Tambahkan ini untuk modal agar bisa di-scroll
          }}>
          <h2 className="text-lg font-bold mb-4">Data Penjualan</h2>

          {/* Tabel Data Penjualan */}
          <TableContainer component={Paper} className="overflow-x-auto">
            <Table className="min-w-[600px]">
              {" "}
              {/* Tambahkan min-width */}
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

      <div className="relative w-full mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map((product) => (
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
