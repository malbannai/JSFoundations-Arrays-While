/**
 * isArrayLengthOdd(a):
 * - receives array `a`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(a) {
  if (a.length % 2 === 1) {
    return true;
  }
  return false;
}

// console.log(isArrayLengthOdd([1, 2, 2]));

/**
 * isArrayLengthEven(a):
 * - receives array `a`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(a) {
  if (a.length % 2 === 1) return false;
  return true;
}

/**
 * addLailaToArray(a):
 * - receives array `a`
 * - returns a new array that's a copy of array `a` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(a) {
  let aCopy = a;
  aCopy.push("Laila");
  return aCopy;
}

// console.log(addLailaToArray(["Test"]));

/**
 * eliminateTeam(a):
 * - receives array `a`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(a) {
  return a.pop();
}

/**
 * secondHalfOfArrayIfItIsEven(a):
 * - receives array `a`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(a) {
  let aClone = [];
  if (a.length % 2 === 0) {
    aClone = a.slice(a.length / 2, a.length);
    return aClone;
  }
  return aClone;
}

// let tester = ["apple", "orange", "banana", "kiwi"];
// console.log(secondHalfOfArrayIfItIsEven(tester));

/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(s) {
  // Trail 4:
  while (s.endsWith("!!")) {
    s = s.slice(0, -1);
  }
  return s;
}
//

// console.log(youGottaCalmDown("HI!!!!!!!!!!"));
// console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
// console.log(youGottaCalmDown("Hellooooo"));

// console.log(
//   youGottaCalmDown(
//     "Gotta Get Tay-Tay Schwifty!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
//   )
// );

/**
 * 
Trail 1: 

   let a = [];
  let holder = "";
  if (s.endsWith("!")) {
    a = s.split("");
    holder = a.pop();
    while (holder === "!") {
      if (a[a.length - 1] != "!") {
        break;
      } else {
        a.pop();
        holder = a.pop();
      }
    }
    a.push("!");
    return a.join("");
  }
  return s;

Trail 2:
  if (s.endsWith("!")) {
    while (s.endsWith("!")) {
      s = s.slice(0, -1);
    }

    return s + "!";
  }
  return s;

Trail 3:
  let sChecker = s;
  while (s.endsWith("!")) {
    if (s.endsWith("!")) s = s.slice(0, -1);
  }
  if (sChecker.endsWith("!")) return s + "!";
  return s;

 */
module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
