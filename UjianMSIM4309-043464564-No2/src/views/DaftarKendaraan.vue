<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-2xl font-semibold mb-4 text-center">Daftar Kendaraan</h1>
    <form @submit.prevent="addKendaraan">
      <div class="flex mb-4 justify-center">
        <input v-model="nama_mobil" type="text" class="mr-2 p-2 border rounded-lg" placeholder="Nama Mobil" required />
        <input v-model="merk" type="text" class="mr-2 p-2 border rounded-lg" placeholder="Merk" required />
        <input v-model="warna" type="text" class="mr-2 p-2 border rounded-lg" placeholder="Warna" required />
        <input v-model="nopol" type="text" class="mr-2 p-2 border rounded-lg" placeholder="Nomor Polisi" required />
        <input v-model="harga" type="number" class="mr-2 p-2 border rounded-lg" placeholder="Harga" required />
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg">Tambah</button>
      </div>
    </form>
    <table class="w-full border">
      <thead>
        <tr class="bg-green-500 text-white">
          <th class="p-2">Nama Mobil</th>
          <th class="p-2">Merk</th>
          <th class="p-2">Warna</th>
          <th class="p-2">Nomor Polisi</th>
          <th class="p-2">Harga</th>
          <th class="p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in kendaraan" :key="index">
          <td class="p-2 text-center">{{ car.nama_mobil }}</td>
          <td class="p-2 text-center">{{ car.merk }}</td>
          <td class="p-2 text-center">{{ car.warna }}</td>
          <td class="p-2 text-center">{{ car.nopol }}</td>
          <td class="p-2 text-center">{{ car.harga }}</td>
          <td class="p-2 text-center">
            <button @click="deleteKendaraan(car.id)" class="bg-red-500 text-white p-2 rounded-lg">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama_mobil: "",
      merk: "",
      warna: "",
      nopol: "",
      harga: "",
      kendaraan: []
    };
  },
  mounted() {
    this.fetchKendaraan();
  },
  methods: {
    fetchKendaraan() {
      fetch("http://localhost/uas-smt6-web/index.php", {
        method: "GET"
      })
        .then(response => response.json())
        .then(data => {
          this.kendaraan = data;
        })
        .catch(error => console.error("Error:", error));
    },
    addKendaraan() {
      const data = {
        nama_mobil: this.nama_mobil,
        merk: this.merk,
        warna: this.warna,
        nopol: this.nopol,
        harga: this.harga
      };

      fetch("http://localhost/uas-smt6-web/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          this.nama_mobil = "";
          this.merk = "";
          this.warna = "";
          this.nopol = "";
          this.harga = "";
          this.fetchKendaraan();
        })
        .catch(error => console.error("Error:", error));
    },
    deleteKendaraan(id) {
      fetch(`http://localhost/uas-smt6-web/index.php?id=${id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          this.fetchKendaraan();
        })
        .catch(error => console.error("Error:", error));
    }
  }
};
</script>