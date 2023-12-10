CREATE DATABASE list_kendaraan;
USE list_kendaraan;

CREATE TABLE kendaraan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_mobil VARCHAR(20),
    merk VARCHAR(20),
    warna VARCHAR(20),
    nopol VARCHAR(20),
    harga VARCHAR(20)
);
