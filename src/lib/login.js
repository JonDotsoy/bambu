/* global localStorage */
class Loggin {
  constructor() {
    this.storage = localStorage;
    this.key = '::loggin::';
  }

  async logged() {
    return Boolean(this.storage.getItem(this.key));
  }
}

module.exports = Loggin;
