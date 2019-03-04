'use strict';

class Multiplier {
  constructor(k) {
    this.value = k;
  }
  async* asyncGenMethod(a) {
    this.value = a * this.value;
    return a * this.value;
  }
}

const obj1 = new Multiplier(2);
console.log('obj1 =', obj1);
console.log('obj1.asyncGenMethod(5) =', obj1.asyncGenMethod(5));
console.log('obj1.asyncGenMethod(5).next() =', obj1.asyncGenMethod(5).next());

//obj1.asyncGenMethod(5).next().then(console.log);
