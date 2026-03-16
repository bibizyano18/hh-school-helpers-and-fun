let foo = "bar";
foo = "baz";
console.log(foo);

// prettier-ignore
let matrix = [
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
]

matrix = [10, 0, 0, 0, 1, 0, 0, 0, 1];

const header = document.getElementById("header");
if (header) {
  header.textContent = matrix.join("");
}
