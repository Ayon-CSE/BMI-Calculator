const form = document.querySelector("form");

// this usecase will give you empty value when load page running script because the value is not set yet, so we need to move this code inside the event listener

// const h = document.querySelector("#height").value;

// submit event listener for the form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // submit howar por value gulo access korte parbe, karon submit howar por value set hoye jabe, age hole value gulo empty thakbe, tai submit event listener er vitor e value access korte hobe
  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const r = document.querySelector(".results");

  if (h === "" || h < 0 || isNaN(h)) {
    r.textContent = "Please enter a valid height";
    r.style.color = "red";
    return;
  }
  if (w === "" || w < 0 || isNaN(w)) {
    r.textContent = "Please enter a valid weight";
    r.style.color = "red";
    return;
  }

  // tofixed(2) mane 2 ta decimal er por dot ashbe, jemon 22.86
  const bmi = (w / ((h * h) / 10000)).toFixed(2);
  r.textContent = `Your BMI is ${bmi}`;

  if (bmi < 18.6) {
    r.textContent += " (Underweight)";
    r.style.color = "orange";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    r.textContent += " (Normal weight)";
    r.style.color = "green";
  } else {
    r.textContent += " (Overweight)";
    r.style.color = "red";
  }
});
