let selectElementsStartingWithA = array => {
  let res = [];
  array.forEach(e => {
    if (e.startsWith("a")) res.push(e);
  });
  return res;
};

let selectElementsStartingWithVowel = array => {
  let res = [];
  array.forEach(e => {
    if (/^[aeiou]/.test(e)) res.push(e);
  });
  return res;
};

let removeNullElements = array => {
  return array.filter(e => {
    return e != null;
  });
};

let removeNullAndFalseElements = array => {
  return array.filter(e => {
    return e !== false && e !== null;
  });
};

let reverseWordsInArray = array => {
  var res = [];
  array.forEach(e => {
    var a = e.split("");
    a = a.reverse();
    a = a.join("");
    res.push(a);
  });
  return res;
};

let everyPossiblePair = array => {
  let save = array[0];
  array[0] = array[2];
  array[2] = save;
  let res = [];
  save = array[1];
  array[1] = array[2];
  array[2] = save;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      res.push([array[i], array[j]]);
    }
  }
  return res;
};

let allElementsExceptFirstThree = array => {
  array.splice(0, 3);
  return array;
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = array => {
  array.sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });
  return array;
};

let getFirstHalf = string => {
  if (string.length % 2 == 0) {
    return string.slice(0, string.length / 2);
  }
  return string.slice(0, string.length / 2 + 1);
};

let makeNegative = number => {
  if (Math.sign(number) == 1) {
    return number * -1;
  } else {
    return number;
  }
};

let numberOfPalindromes = array => {
  let res = 0;
  array.forEach(e => {
    var a = e.split("");
    a = a.reverse();
    a = a.join("");
    if (a === e) res++;
  });
  return res;
};

let shortestWord = array => {
  let res = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < array[res].length) res = i;
  }
  return array[res];
};

let longestWord = array => {
  let res = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > array[res].length) res = i;
  }
  return array[res];
};

let sumNumbers = array => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

let repeatElements = array => {
  array.push(...array);
  return array;
};

let stringToNumber = string => {
  return parseInt(string);
};

let calculateAverage = array => {
  return (
    array.reduce((accumulator, currentValue) => accumulator + currentValue) /
    array.length
  );
};

let getElementsUntilGreaterThanFive = array => {
  array.splice(6, array.length - 1);
  return array;
};

let convertArrayToObject = array => {
  return Object.fromEntries(
    array
      .map((e, i) => {
        if (i % 2 == 0) return [e, array[i + 1]];
        else return;
      })
      .filter(Boolean)
  );
};

let getAllLetters = array => {
  return [
    ...new Set(
      array
        .map(e => {
          return e.split("");
        })
        .flat()
    )
  ].sort();
};

let swapKeysAndValues = object => {
  return Object.entries(object).reduce((ret, entry) => {
    const [key, value] = entry;
    ret[value] = key;
    return ret;
  }, {});
};

let sumKeysAndValues = object => {
  return Object.keys(object).reduce(
    (sum, key) => sum + parseInt(key) + parseInt(object[key]),
    0
  );
};

let removeCapitals = string => {
  return string.replace(/[A-Z]/g, "");
};

let roundUp = number => {
  return Math.ceil(number);
};

let formatDateNicely = date => {
  return `0${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
};

let getDomainName = string => {
  return string
    .split("@")[1]
    .split(".")
    .slice(0, string.split("@")[1].split(".").length - 1)
    .join(".");
};

let titleize = string => {
  return string
    .split(" ")
    .map((e, i) => {
      if (i > 0) {
        let previousElem = string.split(" ")[i - 1];
        let previousElemLength = previousElem.length;
        if (previousElem.charAt(previousElemLength - 1) == ".")
          return (e = e.charAt(0).toUpperCase() + e.slice(1));
        if ((e == "the" || e == "and") && i != 0) return e;
      }
      return (e = e.charAt(0).toUpperCase() + e.slice(1));
    })
    .join(" ");
};

let checkForSpecialCharacters = string => {
  return /\W|_/g.test(string);
};

let squareRoot = number => {
  return Math.sqrt(number);
};

let factorial = number => {
  return (function fac() {
    var rval = 1;
    for (var i = 2; i <= number; i++) rval = rval * i;
    return rval;
  })();
};

let findAnagrams = string => {
  return (function anagrame() {
    //tableau de réponse
    let r = [];
    //creer un tableau avec les valeurs solo
    let charArray = [...new Set(string.split(""))];
    console.log(charArray);
    //creer un tableau avec le poid de chaque lettre
    let wArray = [];
    charArray.forEach(e => {
      wArray.push(string.split("").filter(word => word == e).length);
    });
    console.log(wArray);

    function permute(arrayC, arrayI, res, level) {
      if (level == arrayC.length) {
        console.log(`res à la profondeur ${level} vaut ${res}`);
        r.push(res.join(""));
        return;
      }

      for (let i = 0; i < arrayC.length; i++) {
        if (arrayI[i] != 0) {
          let rescpy = [...res];
          rescpy.push(arrayC[i]);
          arrayI[i]--;
          console.log(`res à la profondeur ${level} vaut ${res}`);
          permute(arrayC, [...arrayI], [...rescpy], level + 1);
          console.log([...res]);
          arrayI[i]++;
        }
      }
    }
    permute([...charArray], [...wArray], [], 0);
    return r;
  })();
};

let convertToCelsius = number => {
  return Math.round((5/9) * (number - 32));
};

let letterPosition = array => {
  return array.map(e=>{
    return e.toLowerCase().charCodeAt(0)-96;
  });
};
