export default class Character {
    constructor(_name) {
      const name = String(_name);
      if (name.length < 2) {
        throw (new Error('Слишком короткое имя'));
      } else if (name.length > 10) {
        throw (new Error('Слишком длинное имя'));
      }
      this.name = name;
      this.health = 100;
      this.level = 1;
    }
  }