<template>
  <div>
    <h1 style="margin-bottom: 40px">
      Willkommen im Restaurant &ldquo;{{ name }}&rdquo;
    </h1>
    <div style="display: flex">
      <div style="width: 30%">
        <h2>Status</h2>
        <div v-if="sushiTable.isCompletelyFree">Der Tisch ist völlig leer.</div>
        <div v-else-if="sushiTable.isCompletelyOccupied">
          Der Tisch ist komplett besetzt.
        </div>
        <div v-else>
          Es gibt noch freie Plätze
          <ul>
            <li v-for="gap in sushiTable.gaps">
              Platz {{ gap[0] + 1 }} bis einschließlich Platz
              {{
                gap[0] + gap[1] === sushiTable.length
                  ? sushiTable.length
                  : sushiTable.length % sushiTable.length
              }}
            </li>
          </ul>
        </div>
      </div>
      <div style="width: 30%">
        <h2>
          Verteilung der <span>{{ 10 }} Sitzplätze</span>
        </h2>
        <div>
          <div v-for="seat in sushiTable.seats" :style="{ color: '#' + seat }">
            &#9641;
            {{ seat }}
          </div>
        </div>
      </div>
      <div style="width: 40%">
        <div>
          <h2>Eingabe Gäste</h2>
          <label for="group-length">Anzahl der Gäste</label>
          <input
            type="number"
            min="1"
            name="group-length"
            v-model="groupLength"
          />
          <button
            @click="sushiTable.addNewGroup(groupLength, 0)"
            :disabled="groupLength <= 0"
          >
            kommt herein
          </button>
        </div>
        <div>
          <h2>Eingabe Gäste</h2>
          <button
            v-for="groupColorHash in sushiTable.presentGroups"
            :key="groupColorHash"
            @click="sushiTable.removeGroup(groupColorHash)"
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
import useSushiTable from "../functions/sushi-table";

export default {
  props: {},
  data() {
    return {
      sushiTable: useSushiTable(10),
      seatContribution: {},
      gaps: [],
      groupLength: null,
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
  methods: {},
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
