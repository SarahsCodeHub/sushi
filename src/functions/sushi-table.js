/** Seat in the linked list **/
export class Seat {
  constructor(occupied) {
    // Information whether the seat is occupied or not in the seat
    this.occupied = occupied ?? false;
    // Pointer to the next seat
    this.next = null;
    this.hash = (Math.random() + 1).toString(36).substring(5);
  }
}

export class SushiTable {
  constructor(seatsInTotal) {
    this.head = new Seat();
    this.length = seatsInTotal;

    var currentSeat = this.head;
    for (let i = 0; i < this.length; i++) {
      var nextSeat = new Seat();
      currentSeat.next = nextSeat;
      currentSeat = nextSeat;
    }
  }

  head = () => {
    return this.head;
  };

  tail = () => {
    if (head == null) {
      return null;
    } else {
      var currentSeat = head;
      while (currentSeat.next) {
        currentSeat = currentSeat.next;
      }
      // circular
      currentSeat.next = head;
      return currentSeat;
    }
  };

  add = () => {
    var seat = new Seat();
    if (head == null) {
      head = seat;
    } else {
      var currentSeat = seat;
      // here the circular must go!
      while (currentSeat.next) {
        currentSeat = currentSeat.next;
      }
      currentSeat.next = seat;
    }
    length++;
  };

  /*   remove = (element) => {
    var currentSeat = head;
    var previousSeat;
    if (currentSeat.occupied === occupied) {
      head = currentSeat.next;
    } else {
      while (currentSeat.occupied !== occupied) {
        previousSeat = currentSeat;
        currentSeat = currentSeat.next;
      }
      previousSeat.next = currentSeat.next;
    }
    length--;
  }; */

  isCompletelyOccupied = () => {
    return length === 0;
  };

  isCompletelyFree = () => {
    return head === 0;
  };

  /*   indexOf = (occupied) => {
    var currentSeat = head;
    var index = -1;
    while (currentSeat) {
      index++;
      if (currentSeat.occupied === occupied) {
        return index;
      }
      currentSeat = currentSeat.next;
    }
    return -1;
  }; */

  occupiedAt = (index) => {
    var currentSeat = head;
    var count = 0;
    while (count < index) {
      count++;
      currentSeat = currentSeat.next;
    }
    return currentSeat.occupied;
  };

  /*   addAt = (index, element) => {
    var seat = new Seat(element);
    var currentSeat = head;
    var previousSeat;
    var currentIndex = 0;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      seat.next = currentSeat;
      head = seat;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousSeat = currentSeat;
        currentSeat = currentSeat.next;
      }
      seat.next = currentSeat;
      previousSeat.next = seat;
    }
    length++;
  }; */

  /*   removeAt = (index) => {
    var currentSeat = head;
    var previousSeat;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousSeat = currentSeat;
        currentSeat = currentSeat.next;
      }
      previousSeat.next = currentSeat.next;
    }
    length--;
    return currentSeat.occupied;
  }; */
}
