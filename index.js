//All of the colors with their codes
const allColors = [
  { color: "Grey", code: "#a0a0a1", val: 32 },
  { color: "Beige", code: "#e0c9ac", val: 28 },
  { color: "Natural", code: "#bcb8b0", val: 24 },
  { color: "Black", code: "#404039", val: 20 },
  { color: "White", code: "#ffffff", val: 16 },
  { color: "Brown", code: "#8a8173", val: 12 },
  { color: "Buff", code: "#c6b9a9", val: 8 },
  { color: "Blue", code: "#7583ac", val: 8 },
  { color: "Green", code: "#868f78", val: 4 },
  { color: "Charcoal", code: "#5f6060", val: 4 },
  { color: "Yellow", code: "#f3e6b3", val: 4 },
  { color: "Cream", code: "#f8f1ea", val: 4 },
  { color: "Silver", code: "#c2c2c2", val: 4 },
  { color: "Red", code: "#81483a", val: 4 },
  { color: "Orange", code: "#b3624e", val: 4 },
];

//function to find the shade of white if r,g,b > 200
function isPale(str) {
  let paleLimit = 200,
    r,
    g,
    b;

  r = parseInt("0x" + str.substring(1, 3));
  g = parseInt("0x" + str.substring(3, 5));
  b = parseInt("0x" + str.substring(5, 7));
  if (r < paleLimit || b < paleLimit || g < paleLimit) {
    return false;
  }
  return true;
}

//function to render all the colors
function renderColor(arr) {
  arr.forEach((a) => {
    let div = `<div class="color-element">
          <label class="color-label">
            <input type="checkbox" />
            <div class="color-circle" style="background-color: ${
              a.code
            };box-shadow:${
      isPale(a.code) ? "0 0 0 1px #000 inset" : "none"
    }"></div>
            <p>${a.color}</p>
          </label>
          <p class="quantity">(${a.val})</p>`;
    document
      .querySelector("#colors-container")
      .insertAdjacentHTML("beforeend", div);
  });
}
renderColor(allColors);

// London Stone Exercise 2

// Issues
// 1. Assignment to a constant variable
// spanEl = document.createElement('span');

// 2. there is a spell mismatch of showroomQS
// showroomQs = location.href.split("showrooms=")[1];

// 3. there is another spell mismatch of nationwideShowrooms
// let natoinwideShowrooms = [];

// Here is a working Example of the code

// function displayShowrooms() {
//   let nationwideShowrooms = [];
//   let showroomQS = "";
//   var showroomCount = "1";
//   if (location.href.indexOf("showrooms") !== -1) {
//     showroomQS = location.href.split("showrooms=")[1];
//     nationwideShowrooms = showroomQS.split(",");
//     nationwideShowrooms.forEach(function (showroom) {
//       const insertElement = document.getElementById("contentArea");
//       const divEl = document.createElement("div");
//       const spanEl = document.createElement("span");
//       spanEl.innerHTML = "(" + showroomCount + "). ";
//       divEl.append(spanEl);
//       spanEl.innerHTML = showroom.charAt(0).toUpperCase() + showroom.slice(1);

//       divEl.append(spanEl);
//       insertElement.append(divEl);

//       showroomCount = showroomCount + 1;
//     });
//   }
// }
// displayShowrooms();
