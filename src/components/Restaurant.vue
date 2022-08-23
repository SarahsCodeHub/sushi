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
import { Seat, SushiTable } from "../functions/sushi-table";

export default {
  props: {
    seatsInTotal: {
      type: Number,
      required: true,
      default: 10,
    },
    name: {
      type: String,
      required: false,
      default: "Sushi Bar F+P",
    },
  },
  data() {
    return {
      seatsInTotal: this.$route.params.seatsInTotal,
      name: this.$route.params.name,
      sushiTable: new SushiTable(this.seatsInTotal),
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
