export default class Team {
    constructor(object) {
      Object.assign(this, object);
    }
  
    [Symbol.iterator]() {
      const values = Object.values(this);
      let index = 0;
      return {
        next() {
          const result = {
            value: values[index],
            done: index >= values.length,
          };
          index += 1;
          return result;
        },
      };
    }
  }