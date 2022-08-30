import { ref, reactive, computed } from "vue";
export default function (seatsInTotal) {
  const seatsLength = seatsInTotal;
  const seats = ref([]);
  for (let i = 0; i < seatsLength; i++) {
    seats.value.push(false);
  }

  const gapsCount = ref(0);

  const presentGroups = computed(() => {
    return new Set(seats.value.filter((value) => !!value));
  });

  const isCompletelyOccupied = computed(() => {
    return seats.value.filter((value) => !!value).length === seatsLength;
  });

  const isCompletelyFree = computed(() => {
    return seats.value.filter((value) => !!value).length === 0;
  });

  const firstSeatIsFree = computed(() => {
    return !!seats.value[0];
  });

  const lastSeatIsFree = computed(() => {
    return !!seats.value[seatsLength];
  });

  const addNewGroup = (groupLength, firstSeat) => {
    const _seats = [...seats.value];
    const groupColorHash =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8);
    for (let i = 0; i < groupLength; i++) {
      const seatIndex = (firstSeat + i) % seatsLength;
      _seats[seatIndex] = groupColorHash;
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

  const findGapAndPlaceGroup = (groupLength) => {
    let placedGroup = false;
    let currentGap = null;
    let possibleGaps = gaps.value.filter((gap) => gap[1] >= groupLength);
    currentGap = possibleGaps ? possibleGaps[0] : null;

    possibleGaps.forEach((gap) => {
      gap[1] <= currentGap[1] ? (currentGap = gap) : null;
    });

    if (!!currentGap) {
      addNewGroup(groupLength, currentGap[0]);
      placedGroup = true;
    }

    return placedGroup;
  };

  const gaps = computed(() => {
    let currentLength = 0;
    let firstFreeIndex = null;
    const _gaps = [];

    seats.value.forEach((occupied, index) => {
      // falls bereits ein Platz frei war und der aktuelle Sitz besetzt ist
      // damit endet die freie Straehne
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
        if (index == seatsLength - 1) {
          _gaps.push([firstFreeIndex - currentLength + 1, currentLength]);
        }
      }
    });

    if (_gaps.length >= 2) {
      const _firstSeatIsFree = _gaps[0][0] == 0;
      const _lastSeatIsFree =
        _gaps[_gaps.length - 1][0] + _gaps[_gaps.length - 1][1] == seatsLength;

      if (_firstSeatIsFree && _lastSeatIsFree) {
        const lastGap = _gaps.pop();
        const firstGap = _gaps.shift();
        _gaps.push([lastGap[0], lastGap[1] + firstGap[1]]);
      }
    }

    return _gaps;
  });

  return {
    seatsLength,
    seats,
    gaps,
    gapsCount,
    firstSeatIsFree,
    lastSeatIsFree,
    isCompletelyOccupied,
    isCompletelyFree,
    presentGroups,
    addNewGroup,
    removeGroup,
    findGapAndPlaceGroup,
  };
}
