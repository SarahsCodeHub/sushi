<template>
  <div>
    <h1 style="margin-bottom: 40px">
      Willkommen im Restaurant &ldquo;{{ name }}&rdquo;
    </h1>
    <div style="display: flex">
      <div style="width: 60%">
        Verteilung der <span>{{ seatsInTotal }} Sitzplätze</span>
      </div>
      <div style="width: 40%">Eingabe Gäste</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seatsInTotal: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: "Sushi Bar F+P",
    },
  },
};
</script>

<style></style>
