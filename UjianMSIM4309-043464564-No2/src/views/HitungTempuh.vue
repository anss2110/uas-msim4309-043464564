<template>
  <div class="container mx-auto mt-8 text-center">
    <h1 class="text-2xl font-semibold mb-4">Kalkulator Waktu Tempuh</h1>

    <div class="flex flex-col gap-4">
      <div>
        <label for="speed" class="block mb-2">Kecepatan (km/h): </label>
        <input v-model="speed" id="speed" type="number" class="border p-2 mb-4" />
      </div>
      <div>
        <label for="distance" class="block mb-2">Jarak Tempuh (km): </label>
        <input v-model="distance" id="distance" type="number" class="border p-2 mb-4" />
      </div>
      <div>
        <button @click="calculateTime" class="bg-blue-500 text-white px-4 py-2 rounded">Hitung Waktu Tempuh</button>
      </div>
      <div>
        <div v-if="time !== null" class="mt-4">
          <p>Estimasi Waktu Tempuh: {{ time }} Jam</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      speed: 0,
      distance: 0,
      time: null,
    };
  },
  methods: {
    calculateTime() {
      if (this.speed > 0) {
        this.time = this.distance / this.speed;
      } else {
        alert("Nilai kecepatan seharusnya lebih besar dari 0.");
      }
    },
  },
};
</script>