export class SushiTable {
  constructor(seatsInTotal) {
    this.length = seatsInTotal;
    this.seats = [];
    this.occupiedSeats = 0;
    for (let i = 0; i < this.length; i++) {
      this.seats.push(false);
    }
  }

  isCompletelyOccupied = () => {
    return occupiedSeats === this.length;
  };

  isCompletelyFree = () => {
    return occupiedSeats === 0;
  };

  occupiedAt = (index) => {
    return this.seats[index];
  };

  addAt = (index, value) => {
    this.occupiedSeats++;
    this.seats[index] = value;
  };

  removeAt = (index) => {
    this.occupiedSeats--;
    this.seats[index] = false;
  };
}
