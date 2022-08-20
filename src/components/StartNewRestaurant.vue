<template>
  <div>
    <h1>Willkommen im Restaurant-Konfigurator</h1>
    <div>
      <label for="name">Wie soll Ihr Sushi-Restaurant heißen?</label>
      <input v-model="name" type="text" name="name" id="name" placheholder="Sushi Bar F+P">
    </div>
    <div>
      <label for="amountOfSeats">Wie viele Sitzplätze hat Ihr Sushi-Restaurant?</label>
      <input v-model="amountOfSeats" type="number" name="amountofSeats" id="amountofSeats">
    </div>

    <button @click="submit">Los geht's!</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurantConfig: {
        name: 'Sushi Bar F+P',
        amountOfSeats: '10'
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.restaurantConfig)
    }
  }
}
</script>
<style>
</style>