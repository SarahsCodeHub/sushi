<template>
  <div>
    <h1 style="">Willkommen im Restaurant &ldquo;{{ name }}&rdquo;</h1>
    <div style="display: flex">
      <div style="width: 30%">
        <h2>Der Sushi-Meister</h2>
        <div style="min-height: 130px; padding: 20px 70px 20px">
          <img
            v-if="sushiMasterIsAngry"
            src="../assets/angry-sushi-master.svg"
            alt="Der Sushi-Meister ist glücklich"
          />
          <img
            v-else
            src="../assets/happy-sushi-master.svg"
            alt="Der Sushi-Meister ist glücklich"
          />
        </div>
        <h2>Status</h2>
        <div v-if="sushiTable.isCompletelyFree">Der Tisch ist völlig leer.</div>
        <div v-else-if="sushiTable.isCompletelyOccupied">
          Der Tisch ist komplett besetzt.
        </div>
        <div v-else>
          Es gibt noch freie Plätze
          <ul>
            <li v-for="gap in sushiTable.gaps" style="text-align: left">
              Platz {{ gap[0] + 1 }}
              <span v-if="gap[1] >= 2">
                bis einschließlich Platz&nbsp;{{
                  gap[0] + gap[1] == sushiTable.seatsLength
                    ? sushiTable.seatsLength
                    : (gap[0] + gap[1]) % sushiTable.seatsLength
                }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div style="width: 30%">
        <h2>
          Verteilung der <span>{{ 10 }} Sitzplätze</span>
        </h2>
        <div>
          <div
            v-for="seat in sushiTable.seats"
            :style="{ color: seat || '#000' }"
          >
            &#9641;
            {{ seat ? "besetzt" : "frei" }}
          </div>
        </div>
      </div>
      <div style="width: 40%">
        <div>
          <h2>Steuerung der Gäste</h2>
          <h4>Gruppe betritt das Restaurant</h4>
          <label for="group-length">Anzahl der Gäste</label>
          <input
            type="number"
            min="1"
            name="group-length"
            v-model="groupLength"
          />
          <button
            @click="
              findPlaceForIncomingGroupAndUpdateSushiMastersMood(groupLength)
            "
            :disabled="groupLength <= 0"
            class="button"
          >
            kommt herein
          </button>
        </div>
        <div>
          <h4>Gruppe verlässt das Restaurant</h4>
          <button
            v-for="groupColorHash in sushiTable.presentGroups"
            :key="groupColorHash"
            @click="sushiTable.removeGroup(groupColorHash)"
            class="button button--group"
            :style="{ backgroundColor: groupColorHash }"
          >
            Gruppe {{ groupColorHash }} geht
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSushiTable from "../composables/sushi-table";

export default {
  props: {},
  data() {
    return {
      sushiTable: useSushiTable(this.$route.params.seatsInTotal),
      seatContribution: {},
      gaps: [],
      groupLength: null,
      sushiMasterIsAngry: false,
    };
  },
  computed: {
    name() {
      return this.$route.params.name;
    },
    seatsInTotal() {
      return this.$route.params.seatsInTotal;
    },
  },
  methods: {
    findPlaceForIncomingGroupAndUpdateSushiMastersMood(groupLength) {
      if (groupLength > this.sushiTable.seatsLength) {
        this.sushiMasterIsAngry = true;
      } else if (this.sushiTable.isCompletelyOccupied) {
        this.sushiMasterIsAngry = true;
      } else if (this.sushiTable.isCompletelyFree) {
        this.sushiMasterIsAngry = false;
        this.sushiTable.addNewGroup(groupLength, 0);
      } else {
        const success = this.sushiTable.findGapAndPlaceGroup(groupLength);
        this.sushiMasterIsAngry = !success;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.button--group {
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
