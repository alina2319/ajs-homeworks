export default class Team {
    constructor(object) {
      Object.assign(this, object);
    }
  
    * [Symbol.iterator]() {
      const values = Object.values(this);
      for (const value of values) {
        yield value;
      }
    }
  }