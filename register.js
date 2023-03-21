const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

function VAL() {
    var i = 0;
    var templat = `<h1 class="TEXT-error">`;
  
    const inputText = document.getElementById("inputName");
  
    // validasi apakah nama kosong
    if (inputText.value == "") {
      var pesan = "Name cannot be empty" + "</h1>";
      document.getElementById("Error-Name").style.display = "block";
      document.getElementById("Error-Name").innerHTML = templat + pesan;
      inputText.style.border = "1px solid red";
      i++;
    } else {
      document.getElementById("Error-Name").style.display = "none";
      inputText.style.border = "1px solid black";
    }
  
    // validasi apakah email ada @ dan .
    const inputEmail = document.getElementById("inputEmail");
    var trueEmail =
      inputEmail.value.includes("@") && inputEmail.value.includes(".");
    if (inputEmail.value == "") {
      var pesan = "Email cannot be empty" + "</h1>";
      document.getElementById("Error-Email").style.display = "block";
      document.getElementById("Error-Email").innerHTML = templat + pesan;
      inputEmail.style.border = "1px solid red";
      i++;
    } else if (trueEmail == false) {
      var pesan = "Email format is not valid" + "</h1>";
      document.getElementById("Error-Email").style.display = "block";
      document.getElementById("Error-Email").innerHTML = templat + pesan;
      inputEmail.style.border = "1px solid red";
      i++;
    } else {
      document.getElementById("Error-Email").style.display = "none";
      inputEmail.style.border = "1px solid black";
    }
  
    // validasi apakah password kosong
    const inputPassword = document.getElementById("inputPassword");
    if (inputPassword.value == "") {
      var pesan = "Password cannot be empty" + "</h1>";
      document.getElementById("Error-Password").style.display = "block";
      document.getElementById("Error-Password").innerHTML = templat + pesan;
      inputPassword.style.border = "1px solid red";
      i++;
  
      // validasi jika password tidak kosong
    } else if (inputPassword.value != "") {
      // validasi apakah ada uppercase
      have1 = 0;
      for (let index = 0; index < inputPassword.value.length; index++) {
        if (
          inputPassword.value[index] == "A" ||
          inputPassword.value[index] == "B" ||
          inputPassword.value[index] == "C" ||
          inputPassword.value[index] == "D" ||
          inputPassword.value[index] == "E" ||
          inputPassword.value[index] == "F" ||
          inputPassword.value[index] == "G" ||
          inputPassword.value[index] == "H" ||
          inputPassword.value[index] == "I" ||
          inputPassword.value[index] == "J" ||
          inputPassword.value[index] == "K" ||
          inputPassword.value[index] == "L" ||
          inputPassword.value[index] == "M" ||
          inputPassword.value[index] == "N" ||
          inputPassword.value[index] == "O" ||
          inputPassword.value[index] == "P" ||
          inputPassword.value[index] == "Q" ||
          inputPassword.value[index] == "R" ||
          inputPassword.value[index] == "S" ||
          inputPassword.value[index] == "T" ||
          inputPassword.value[index] == "U" ||
          inputPassword.value[index] == "V" ||
          inputPassword.value[index] == "W" ||
          inputPassword.value[index] == "X" ||
          inputPassword.value[index] == "Y" ||
          inputPassword.value[index] == "Z"
        ) {
          have1++;
        }
      }
      if (have1 == 0) {
        var pesan = "Password must contain at least 1 uppercase" + "</h1>";
        document.getElementById("Error-Password").style.display = "block";
        document.getElementById("Error-Password").innerHTML = templat + pesan;
        inputPassword.style.border = "1px solid red";
        i++;
      }
  
      // validasi apakah password kurang dari 8
      have = inputPassword.value.length;
      if (have < 8) {
        var pesan = "Password must be at least 8 characters" + "</h1>";
        document.getElementById("Error-Password").style.display = "block";
        document.getElementById("Error-Password").innerHTML = templat + pesan;
        inputPassword.style.border = "1px solid red";
        i++;
      }
  
      // validasi apakah ada number
      have = 0;
      for (let index = 0; index < inputPassword.value.length; index++) {
        if (
          inputPassword.value[index] == "1" ||
          inputPassword.value[index] == "2" ||
          inputPassword.value[index] == "3" ||
          inputPassword.value[index] == "4" ||
          inputPassword.value[index] == "5" ||
          inputPassword.value[index] == "6" ||
          inputPassword.value[index] == "7" ||
          inputPassword.value[index] == "8" ||
          inputPassword.value[index] == "9" ||
          inputPassword.value[index] == "0"
        ) {
          have++;
        }
      }
      if (have == 0) {
        var pesan = "Password must contain at least 1 number" + "</h1>";
        document.getElementById("Error-Password").style.display = "block";
        document.getElementById("Error-Password").innerHTML = templat + pesan;
        inputPassword.style.border = "1px solid red";
        i++;
      }
  
      // validasi apakah ada symbol
      have = 0;
      for (let index = 0; index < inputPassword.value.length; index++) {
        if (
          inputPassword.value[index] == "!" ||
          inputPassword.value[index] == "@" ||
          inputPassword.value[index] == "#" ||
          inputPassword.value[index] == "$" ||
          inputPassword.value[index] == "%" ||
          inputPassword.value[index] == "^" ||
          inputPassword.value[index] == "&" ||
          inputPassword.value[index] == "*" ||
          inputPassword.value[index] == "(" ||
          inputPassword.value[index] == ")" ||
          inputPassword.value[index] == "_" ||
          inputPassword.value[index] == "+" ||
          inputPassword.value[index] == "-" ||
          inputPassword.value[index] == "=" ||
          inputPassword.value[index] == "[" ||
          inputPassword.value[index] == "]" ||
          inputPassword.value[index] == "{" ||
          inputPassword.value[index] == "}" ||
          inputPassword.value[index] == ";" ||
          inputPassword.value[index] == ":" ||
          inputPassword.value[index] == "'" ||
          inputPassword.value[index] == '"' ||
          inputPassword.value[index] == "\\" ||
          inputPassword.value[index] == "|" ||
          inputPassword.value[index] == "," ||
          inputPassword.value[index] == "." ||
          inputPassword.value[index] == "<" ||
          inputPassword.value[index] == ">" ||
          inputPassword.value[index] == "/" ||
          inputPassword.value[index] == "?"
        ) {
          have++;
        }
      }
  
      if (have == 0) {
        var pesan = "Password must contain at least 1 symbol" + "</h1>";
        document.getElementById("Error-Password").style.display = "block";
        document.getElementById("Error-Password").innerHTML = templat + pesan;
        inputPassword.style.border = "1px solid red";
        i++;
      }
  
      if (have1 != 0 && inputPassword.value.length >= 8 && have != 0) {
        document.getElementById("Error-Password").style.display = "none";
        inputPassword.style.border = "1px solid black";
      }
    }
  
    // validasi apakah umur kosong
    const inputAge = document.getElementById("inputAge");
    if (inputAge.value == "") {
      var pesan = "Age cannot be empty" + "</h1>";
      document.getElementById("Error-Age").style.display = "block";
      document.getElementById("Error-Age").innerHTML = templat + pesan;
      inputAge.style.border = "1px solid red";
      i++;
    }
  
    // validasi apakah umur >= 12
    if (inputAge.value < 12) {
      var pesan = "Age must be at least 12" + "</h1>";
      document.getElementById("Error-Age").style.display = "block";
      document.getElementById("Error-Age").innerHTML = templat + pesan;
      inputAge.style.border = "1px solid red";
      i++;
    } else {
      document.getElementById("Error-Age").style.display = "none";
      inputAge.style.border = "1px solid black";
    }
  
    // validasi apakah checkbox tidak dicentang
    var templat2 = `<h1 class="TEXT-error2">`;

    if (inputAgree.checked == false) {
      var pesan = "You must agree to the terms and conditions" + "</h1>";
      document.getElementById("Error-CKB").style.display = "block";
      document.getElementById("Error-CKB").innerHTML = templat2 + pesan;
      i++;
    } else {
      document.getElementById("Error-CKB").style.display = "none";
      inputAgree.style.border = "1px solid black";
    }
  
    if (i == 0) {
      document.getElementById("Formnya").submit();
      alert("Register Successful");
    }
  }
  