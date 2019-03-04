'use strict';

const obj1 = {
  value: 2,
  async* asyncGenMethod(a) {
    this.value = a * this.value;
    return this.value;
  }
};

console.log('obj1 =', obj1);
console.log('obj1.asyncGenMethod(5) =', obj1.asyncGenMethod(5));
console.log('obj1.asyncGenMethod(5).next() =', obj1.asyncGenMethod(5).next());

// obj1.asyncGenMethod(5).next().then(console.log);
