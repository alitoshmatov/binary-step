const formEl = document.getElementById("form");
const binaryInput = document.getElementById("binary-input");
const b2uOutput = document.getElementById("b2u");
const b2sOutput = document.getElementById("b2s");
const b2oOutput = document.getElementById("b2o");
const b2tOutput = document.getElementById("b2t");
const b2octOutput = document.getElementById("b2oct");
const b2hexOutput = document.getElementById("b2hex");

formEl.onsubmit = handleSubmit = (e) => {
  e.preventDefault();

  b2uOutput.innerText = b2u(binaryInput.value);
  b2sOutput.innerText = b2s(binaryInput.value);
  b2oOutput.innerText = b2o(binaryInput.value);
  b2tOutput.innerText = b2t(binaryInput.value);
  b2octOutput.innerText = b2oct(binaryInput.value);
  b2hexOutput.innerText = b2hex(binaryInput.value);
};

const b2u = (binary) => {
  let result = "";

  const arr = binary.split("").reverse();

  const steps1 = arr.map((item, index) => `${item} * 2^${index}`);
  const steps2 = arr.map((item, index) => item * 2 ** index);
  console.log(steps1, steps2);

  result = `${steps1.reverse().join(" + ")} = ${steps2
    .reverse()
    .join(" + ")} = ${steps2.reduce((acc, item) => acc + item, 0)}`;

  return result;
};

const b2s = (binary) => {
  let result = "";

  let arr = binary.split("").reverse();

  const sign = arr.pop();

  const steps1 = arr.map((item, index) => `${item} * 2^${index}`);
  const steps2 = arr.map((item, index) => item * 2 ** index);
  console.log(steps1, steps2);

  result = `(-1^${sign})(${steps1
    .reverse()
    .join(" + ")}) = (-1^${sign})(${steps2.reverse().join(" + ")}) = ${
    steps2.reduce((acc, item) => acc + item, 0) * (-1) ** sign
  }`;

  return result;
};

const b2o = (binary) => {
  let result = "";

  let arr = binary.split("").reverse();

  const sign = arr.pop();

  const steps1 = arr.map((item, index) => `${item} * 2^${index}`);
  const steps2 = arr.map((item, index) => item * 2 ** index);
  console.log(steps1, steps2);

  result = `-${sign} * (2^${arr.length} - 1) + ${steps1
    .reverse()
    .join(" + ")} = ${-sign * (sign ** arr.length - 1)} + ${steps2
    .reverse()
    .join(" + ")} = ${
    steps2.reduce((acc, item) => acc + item, 0) + -sign * (2 ** arr.length - 1)
  }`;

  return result;
};

const b2t = (binary) => {
  let result = "";

  let arr = binary.split("").reverse();

  const sign = arr.pop();

  const steps1 = arr.map((item, index) => `${item} * 2^${index}`);
  const steps2 = arr.map((item, index) => item * 2 ** index);
  console.log(steps1, steps2);

  result = `-${sign} * (2^${arr.length}) + ${steps1.reverse().join(" + ")} = ${
    -sign * sign ** arr.length
  } + ${steps2.reverse().join(" + ")} = ${
    steps2.reduce((acc, item) => acc + item, 0) + -sign * 2 ** arr.length
  }`;

  return result;
};

const b2oct = (binary) => {
  return parseInt(binary, 2).toString(8);
};

const b2hex = (binary) => {
  return parseInt(binary, 2).toString(16);
};
