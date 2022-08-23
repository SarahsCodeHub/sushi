<template>
  <div>
    <h1>Willkommen im Restaurant-Konfigurator</h1>
    <div>
      <label for="name">Wie soll Ihr Sushi-Restaurant heißen?</label>
      <input
        v-model="restaurantConfig.name"
        type="text"
        name="name"
        id="name"
        placheholder="Sushi Bar F+P"
      />
    </div>
    <div>
      <label for="seatsInTotal"
        >Wie viele Sitzplätze hat Ihr Sushi-Restaurant?</label
      >
      <input
        v-model="restaurantConfig.seatsInTotal"
        type="number"
        name="seatsInTotal"
        id="seatsInTotal"
      />
    </div>

    <router-link
      :to="
        '/restaurants/' +
        restaurantConfig.name +
        '-' +
        restaurantConfig.seatsInTotal
      "
      class="button"
    >
      Los geht's!
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurantConfig: {
        name: "Sushi Bar F+P",
        seatsInTotal: "10",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.restaurantConfig);
    },
  },
};
</script>
<style></style>
