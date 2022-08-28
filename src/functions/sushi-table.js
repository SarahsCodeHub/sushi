import { ref, reactive, computed } from "vue";
export default function (seatsInTotal) {
  const length = seatsInTotal;
  const seats = ref([]);
  const occupiedSeats = ref(0);
  for (let i = 0; i < length; i++) {
    seats.value.push("red");
  }
  const gaps = ref([]);
  const gapsCount = ref(0);

  const add = () => {
    const _seats = [...seats.value];
    _seats.push("whiwhihi");
    seats.value = _seats;
  };

  const isCompletelyOccupied = () => {
    return occupiedSeats.value === length;
  };

  const isCompletelyFree = () => {
    return occupiedSeats.value === 0;
  };

  const occupiedAt = (index) => {
    return !!seats.value[index];
  };

  const addAt = (index, value) => {
    occupiedSeats.value++;
    const _seats = [...seats.value];
    _seats[index] = value;
    seats.value = _seats;
  };

  const removeAt = (index) => {
    occupiedSeats.value--;
    const _seats = [...seats.value];
    _seats[index] = false;
    seats.value = _seats;
  };

  const updateGaps = () => {
    let currentLength = 0;
    let firstFreeIndex = null;
    const newGaps = [];

    seats.value.forEach((occupied, index) => {
      // falls firstIndex gesetzt ist und der aktuelle Sitz besetzt ist
      if (firstFreeIndex != null && occupied) {
        newGaps.push([firstFreeIndex - currentLength + 1, currentLength]);
        currentLength = 0;
        firstFreeIndex = null;
      }
      // falls der Platz leer ist
      if (!occupied) {
        firstFreeIndex = index;
        currentLength++;
        // falls der letzte Platz leer ist
        if (index == length - 1) {
          newGaps.push([firstFreeIndex - currentLength + 1, currentLength]);
        }
      }
    });
    gapsCount.value = newGaps.length;

    const firstSeatFree = newGaps[0][0] == 0;
    const isLastSeatFree =
      newGaps[newGaps.length - 1][0] + newGaps[newGaps.length - 1][1] == length;

    if (firstSeatFree && isLastSeatFree) {
      const lastGap = newGaps.pop();
      const firstGap = newGaps.shift();
      newGaps.push([lastGap[0], lastGap[1] + firstGap[1]]);
    }

    gaps.value = newGaps;
  };

  return {
    length,
    seats,
    gaps,
    gapsCount,
    isCompletelyOccupied,
    isCompletelyFree,
    addAt,
    removeAt,
    updateGaps,
  };
}
