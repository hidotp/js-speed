const compArray = ["test", "tset", "zugzug"];

const arraySpd = () => {
  shuffleArray(compArray);
  const t0 = performance.now();
  if (compArray.includes("tset")) {
  }
  const t1 = performance.now();
  return t1 - t0;
};

const otherSpd = () => {
  const value = compArray[Math.floor(Math.random() * compArray.length)];
  const t0 = performance.now();
  if ("test" === value || "tset" === value || "zugzug" === value) {
  }
  const t1 = performance.now();
  return t1 - t0;
};

var iterations = 100000000;
var t0 = 0;
for (var i = 0; i < iterations; i++) {
  t0 += arraySpd();
}
console.log("Function #1: " + t0 / iterations + "ms");

var t1 = 0;
for (var i = 0; i < iterations; i++) {
  t1 += otherSpd();
}
console.log("Function #2: " + t1 / iterations + "ms");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
