#!/usr/bin/node
/**
 * print using x character
 */
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let y = 0;
      let myVar = '';
      while (y < this.width) {
        myVar += 'X';
        y++;
      }
      console.log(myVar);
    }
  }
}
module.exports = Rectangle;
