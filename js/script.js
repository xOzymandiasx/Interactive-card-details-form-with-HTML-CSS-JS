const date = new Date();
const $form = document.querySelector("form");
const $nameV = document.querySelector("#name");
const $numberV = document.querySelector("#cNumber");
const $monthV = document.querySelector("#month");
const $yearV = document.querySelector("#year");
const $cvcV = document.querySelector("#cvc");

const changeDisplay = (html1, html2) => {
  document.querySelector(`.${html1}`).classList.add("displayOn");
  document.querySelector(`.${html1}`).classList.remove("displayOf");
  document.querySelector(`.${html2}`).classList.add("displayOf");
  document.querySelector(`.${html2}`).classList.remove("displayOn");
};

const resetValues = (element) => {
  element.value = "";
}

const setValues = () => {
  document.querySelector(".cName").textContent = "Jane Appleseed";
  document.querySelector(".cardN").textContent = "0000 0000 0000 0000";
  document.querySelector(".cDate").textContent = "00/00";
  document.querySelector(".cvcBC").textContent = "000";
}

const addErrClass = (inp) => {
  if (inp.classList.contains("inputerr") === false) inp.classList.add("inputerr");
};

const delErrClass = (inp) => {
  if (inp.classList.contains("inputerr")) inp.classList.remove("inputerr");
}

const validateName = () => {
  let mError = document.querySelectorAll(".error")[0];
  if ($nameV.value === "") {
    mError.textContent = "Cant be empty";
    addErrClass($nameV);
  } else if ($nameV.value.match(/[^a-zA-Z\s]/g)) {
    mError.textContent = "Cant be numbers";
    addErrClass($nameV);
  } else {
    delErrClass($nameV);
    mError.textContent = "";
    return true;
  }
};

const validateCNumber = () => {
  let mError = document.querySelectorAll(".error")[1];
  let correctid = $numberV.value.split(" ");
  if ($numberV.value === "") {
    mError.textContent = "Cant be empty";
    addErrClass($numberV);
  } else if ($numberV.value.match(/[^0-9\s]/g)) {
    mError.textContent = "Wrong format, numbers only";
    addErrClass($numberV);
  } else if (
    $numberV.value.length < 19 ||
    correctid[0] < 4 ||
    correctid[1] < 4 ||
    correctid[2] < 4 ||
    correctid[3] < 4
  ) {
    mError.textContent = "Invalid id card";
    addErrClass($numberV);
  } else {
    delErrClass($numberV);
    mError.textContent = "";
    return true;
  }
};

const validateDate = () => {
  let mError = document.querySelectorAll(".error")[2];
  let year = date.getFullYear().toString().substring(2, 4);
  let month = date.getMonth()+1;
  if ($monthV.value === "" || $yearV.value === "") {
    mError.textContent = "Cant be empty";
  } else if ($monthV.value > 12 || $monthV.value.length < 2 ||$monthV.value < month || $yearV.value < 2 || $yearV.value < year) {
    mError.textContent = "Invalid date";
  } else {
    mError.textContent = "";
    return true;
  }
};

const validateCVC = () => {
  let mError = document.querySelectorAll(".error")[3];
  if ($cvcV.value === "") {
    mError.textContent = "Cant be empty";
  } else if ($cvcV.value.match(/[^0-9]/g)) {
    mError.textContent = "Wrong format";
  } else if ($cvcV.value.length < 3) {
    mError.textContent = "Invalid cvc";
  } else {
    mError.textContent = "";
    return true;
  }
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateCNumber();
  validateName();
  validateDate();
  validateCVC();
  if (validateCNumber() &&validateName()&&validateDate()&&validateCVC()) {
    changeDisplay("success", "form");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#name")) {
    const $nameV = document.querySelector("#name");
    const $nameC = document.querySelector(".cName");
    $nameV.value === ""
      ? ($nameC.textContent = "Jane Appleseed")
      : ($nameC.textContent = $nameV.value);
  }

  if (e.target.matches("#cNumber")) {
    const $numberV = document.querySelector("#cNumber");
    const $numberC = document.querySelector(".cardN");
    $numberV.value === ""
      ? ($numberC.textContent = "0000 0000 0000 0000")
      : ($numberC.textContent = $numberV.value);
  }

  if (e.target.matches("#month")) {
    const $monthV = document.querySelector("#month");
    const $monthC = document.querySelector(".cDate");
    if ($monthV.value === "") {
      let month = $monthC.textContent.split("/");
      month[0] = "00";
      month = month.join("/");
      $monthC.textContent = month;
    } else {
      let month = $monthC.textContent.split("/");
      month[0] = $monthV.value;
      month = month.join("/");
      $monthC.textContent = month;
    }
  }

  if (e.target.matches("#year")) {
    const $yearV = document.querySelector("#year");
    const $yearC = document.querySelector(".cDate");
    if ($yearV.value === "") {
      let month = $yearC.textContent.split("/");
      month[1] = "00";
      month = month.join("/");
      $yearC.textContent = month;
    } else {
      let month = $yearC.textContent.split("/");
      month[1] = $yearV.value;
      month = month.join("/");
      $yearC.textContent = month;
    }
  }

  if (e.target.matches("#cvc")) {
    console.log("hola");
    const $cvcV = document.querySelector("#cvc");
    const $cvcC = document.querySelector(".cvcBC");
    $cvcV.value === ""
      ? ($cvcC.textContent = "000")
      : ($cvcC.textContent = $cvcV.value);
  }
});

document.querySelector(".success").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("#continue")) {
    resetValues($nameV);
    resetValues($numberV);
    resetValues($monthV);
    resetValues($yearV);
    resetValues($cvcV);
    setValues();
    changeDisplay("form", "success");
  };
});

window.addEventListener("load", ()=> {
  setValues();
})