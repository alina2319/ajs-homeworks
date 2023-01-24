export default class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.defense = 40;
      this.attack = 100;
      this.distances = [1, 2, 3, 4, 5];
      this.stoned = false;
    }
  
    get attack() {
      return this.distances.map((distance) => {
        let attack = this.attackValue - 10 * (distance - 1);
        if (this.stoned) {
          attack -= Math.log2(distance) * 5;
        }
        return Math.round(attack);
      });
    }
  
    set attack(value) {
      this.attackValue = value;
    }
  
    get stoned() {
      return this.stonedState;
    }
  
    set stoned(state) {
      if (state) {
        this.stonedState = true;
      }
    }
  }