export class SushiTable {
  constructor(seatsInTotal) {
    this.length = seatsInTotal;
    this.seats = [];
    this.occupiedSeats = 0;
    for (let i = 0; i < this.length; i++) {
      this.seats.push(false);
    }
    this.gaps = [];
    this.gapsCount = 0;
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

  updateGaps = () => {
    let currentLength = 0;
    let firstFreeIndex = null;
    const newGaps = [];
    
    this.seats.forEach((occupied, index) => {
      // falls firstIndex gesetzt ist und der aktuelle Sitz besetzt ist
      if(firstFreeIndex != null && occupied) {
        newGaps.push([firstFreeIndex - currentLength + 1, currentLength])
        currentLength = 0;
        firstFreeIndex = null;
      }
      // falls der Platz leer ist
      if(!occupied) {
        firstFreeIndex = index;
        currentLength++;
        // falls der letzte Platz leer ist  
        if(index == this.length - 1 ) {         
          newGaps.push([firstFreeIndex - currentLength + 1, currentLength])
        }
      }
    });
    this.gapsCount = newGaps.length;

    const firstSeatFree = newGaps[0][0] == 0;
    const isLastSeatFree = newGaps[newGaps.length - 1][0] + newGaps[newGaps.length - 1][1] == this.length;
    
    if(firstSeatFree && isLastSeatFree) {
      const lastGap = newGaps.pop();
      const firstGap = newGaps.shift();
      newGaps.push([lastGap[0], lastGap[1] + firstGap[1]]);
    }

    this.gaps = newGaps;
  };

  getFirstIndexOfShortestFittingGap = (length) => {
    return 1;
  };
}
