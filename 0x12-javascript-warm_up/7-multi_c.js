#!/usr/bin/node
const x = process.argv[2];
let j = 0;
if (!parseInt(x)) {
  console.log('Missing number of occurrences');
} else {
  while (j < x) {
    console.log('C is fun');
    j++;
  }
}
