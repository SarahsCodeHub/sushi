<template>
  <div>
    <h1 style="margin-bottom: 40px">
      Willkommen im Restaurant &ldquo;{{ name }}&rdquo;
    </h1>
    <div style="display: flex">
      <div style="width: 60%">
        <h2>
          Verteilung der <span>{{ seatsInTotal }} Sitzplätze</span>
        </h2>
        <div></div>
      </div>
      <div style="width: 40%">
        <div>
          <h2>Eingabe Gäste</h2>
          <label for="group-length">Anzahl der Gäste</label>
          <input type="number" name="group-length" v-model="groupLength" />
          <button @click="addNewGroup(groupLength, 0)">kommt herein</button>
        </div>
        <div>
          <h2>Eingabe Gäste</h2>
          <button
            v-for="groupColorHash in presentGroups"
            :key="groupColorHash"
            @click="removeGroup(groupColorHash)"
            class="button"
            :style="{ backgroundColor: '#' + groupColorHash }"
          >
            Gruppe #{{ groupColorHash }} geht
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SushiTable } from "../functions/sushi-table";

export default {
  props: {},
  data() {
    return {
      sushiTable: new SushiTable(10),
      seatContribution: {},
      presentGroups: [],
      gaps: [],
      groupLength: 0,
    };
  },
  computed: {
    totalGroupsCount() {
      return Object.keys(this.seatContribution).length;
    },
    name() {
      return this.$route.params.name;
    },
    seatsInTotal() {
      return this.$route.params.seatsInTotal;
    },
  },
  methods: {
    addNewGroup(length, firstSeat) {
      const groupColorHash = (Math.random().toString(16) + "000000").substring(
        2,
        8
      );
      for (let i = 0; i < length; i++) {
        this.sushiTable.addAt(firstSeat + i, groupColorHash);
      }
      this.sushiTable.updateGaps();
      this.presentGroups.push(groupColorHash);
    },
    removeGroup(hash) {
      for (let i = 0; i < this.sushiTable.length; i++) {
        this.sushiTable.seats[i] === hash ? this.sushiTable.removeAt(i) : null;
      }
      this.sushiTable.updateGaps();
      this.presentGroups.filter((groupHash) => groupHash !== hash);
    },
  },
  mounted() {},
};
</script>

<style>
.button {
  padding: 7px 10px 8px;
  margin: 6px 10px;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
</style>
