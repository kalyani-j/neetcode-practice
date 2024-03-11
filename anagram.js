function anagram(s, t) {
  if (s.length !== t.length) return false;

  let countS = {};
  let countT = {};

  s.split('').forEach((x) => {
    if (countS[x]) {
      countS[x] = countS[x] + 1;
    } else {
      countS[x] = 1;
    }
  });

  t.split('').forEach((x) => {
    if (countT[x]) {
      countT[x] = countT[x] + 1;
    } else {
      countT[x] = 1;
    }
  });

  const keyS = Object.keys(countS);

  for (let k of keyS) {
    if (countS[k] !== countT[k]) return false;
  }
  return true;
}

// console.log(anagram('rat', 'tar'));

// console.log(anagram('raat', 'tar'));

console.log(anagram('rat', 'car'))