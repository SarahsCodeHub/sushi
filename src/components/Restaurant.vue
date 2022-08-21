<template>
  <div>
    <h1 style="margin-bottom: 40px;">Willkommen im Restaurant &ldquo;{{ name }}&rdquo;</h1>
    <div style="display: flex">
      <div style="width: 60%">Sitzverteilung</div>
      <div style="width: 40%">Eingabe Gäste</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seats: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: 'Sushi Bar F+P'
    }
  }
};
</script>

<style></style>
