<template>
  <div class="container mx-auto mt-8 text-center">
    <h1 class="text-2xl font-semibold mb-4">Konversi Suhu</h1>

    <label for="celsius" class="block mb-2">Masukkan Suhu Celcius:</label>
    <input v-model="celsius" id="celsius" type="text" class="border p-2 mb-4" />

    <button @click="convert" class="bg-green-500 text-white px-4 py-2 rounded">Ubah</button>

    <div v-if="converted" class="mt-4">
      <p>Fahrenheit : {{ fahrenheit }} &deg;F</p>
      <p>Kelvin : {{ kelvin }} &deg;K</p>
      <p>Reamur : {{ reamur }} &deg;R</p>
      <p>Rankine : {{ rankine }} &deg;C</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      celsius: '',
      fahrenheit: null,
      kelvin: null,
      reamur: null,
      rankine: null,
      converted: false,
    };
  },
  methods: {
    convert() {
      const celsius = parseFloat(this.celsius);

      if (!isNaN(celsius)) {
        this.fahrenheit = (celsius * 9 / 5) + 32;
        this.kelvin = celsius + 273.15;
        this.reamur = celsius * 4 / 5;
        this.rankine = (celsius + 273.15) * 9 / 5;
        this.converted = true;
      } else {
        alert('Please enter a valid numeric value for Celsius temperature.');
      }
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
