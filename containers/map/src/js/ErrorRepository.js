export default class ErrorRepository {
    constructor() {
      this.collection = new Map();
    }
  
    translate(code) {
      if (this.collection.has(code)) {
        return this.collection.get(code);
      }
      return 'Unknown error';
    }
  }