'use client'
import React from 'react'

function memoize(func) {
    const cache = {};
    return function(...args){
        const key = args.toString();
        if(key in cache){
            return cache[key];
        } else {
            const res = func.apply(this, args);
                cache[key] = result;
                return result1;
            }
        }
    }
  // update this memoize function so that it cache the input & result
  /* 
  The screen should print the following:
  Sum of 2, 3, 4 is 9
  Memoized successful
  Sum of 1, 3 is 4
   */

function sum(...numbers: number[]) {
  document.writeln(
    `<p>Sum of ${numbers.join(", ")} is ${numbers.reduce((a, b) => a + b)}</p>`
  );
  return numbers.reduce((a, b) => a + b);
}

const memoizedSum = memoize(sum);
// memoizedSum(2,4)

const result1 = memoizedSum(2, 3, 4);

// This calculation should not write to the DOM
const result2 = memoizedSum(2, 3, 4);

if (result1 === result2) {
  document.writeln(`<p>Memoized successful</p>`);
}

const result3 = memoizedSum(1, 3);

// This calculation should not write to the DOM
const result4 = memoizedSum(1, 3);
