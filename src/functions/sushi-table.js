import { ref, reactive, computed } from "vue";
export default function (seatsInTotal) {
  const length = seatsInTotal;
  const seats = ref([]);
  for (let i = 0; i < length; i++) {
    seats.value.push(false);
  }
  // seats.value = [
  //   false,
  //   "00ff00",
  //   "00ff00",
  //   "00ff00",
  //   false,
  //   false,
  //   "0000ff",
  //   "0000ff",
  //   "ff00ff",
  //   false,
  // ];
  const gapsCount = ref(0);

  const presentGroups = computed(() => {
    return new Set(seats.value.filter((value) => !!value));
  });

  const isCompletelyOccupied = computed(() => {
    return seats.value.filter((value) => !!value).length === length;
  });

  const isCompletelyFree = computed(() => {
    return seats.value.filter((value) => !!value).length === 0;
  });

  const occupiedAt = (index) => {
    return !!seats.value[index];
  };

  const addAt = (index, value) => {
    const _seats = [...seats.value];
    _seats[index] = value;
    seats.value = _seats;
  };

  const removeAt = (index) => {
    const _seats = [...seats.value];
    _seats[index] = false;
    seats.value = _seats;
  };

  const addNewGroup = (length, firstSeat) => {
    const _seats = [...seats.value];
    const groupColorHash =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8);
    for (let i = 0; i < length; i++) {
      _seats[firstSeat + i] = groupColorHash;
    }
    seats.value = _seats;
  };

  const removeGroup = (hash) => {
    const _seats = seats.value.map((value) => {
      if (value === hash) {
        return false;
      } else {
        return value;
      }
    });
    seats.value = _seats;
  };

  const gaps = computed(() => {
    let currentLength = 0;
    let firstFreeIndex = null;
    const _gaps = [];

    seats.value.forEach((occupied, index) => {
      // falls firstIndex gesetzt ist und der aktuelle Sitz besetzt ist
      if (firstFreeIndex != null && occupied) {
        _gaps.push([firstFreeIndex - currentLength + 1, currentLength]);
        currentLength = 0;
        firstFreeIndex = null;
      }
      // falls der Platz leer ist
      if (!occupied) {
        firstFreeIndex = index;
        currentLength++;
        // falls der letzte Platz leer ist
        if (index == length - 1) {
          _gaps.push([firstFreeIndex - currentLength + 1, currentLength]);
        }
      }
    });

    if (_gaps.length >= 2) {
      const firstSeatFree = _gaps[0][0] == 0;
      const isLastSeatFree =
        _gaps[_gaps.length - 1][0] + _gaps[_gaps.length - 1][1] == length;

      if (firstSeatFree && isLastSeatFree) {
        const lastGap = _gaps.pop();
        const firstGap = _gaps.shift();
        _gaps.push([lastGap[0], lastGap[1] + firstGap[1]]);
      }
    }

    return _gaps;
  });

  return {
    length,
    seats,
    gaps,
    gapsCount,
    isCompletelyOccupied,
    isCompletelyFree,
    addAt,
    removeAt,
    presentGroups,
    addNewGroup,
    removeGroup,
  };
}
