export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(404, 'Not Found');
    this.errors.set(503, 'Service Unavailable');
    this.errors.set(403, 'Forbidden');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}