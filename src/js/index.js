var registerBtun = document.querySelector("button");

registerBtun.addEventListener("click", function () {
  var inputs = document.getElementsByTagName("input");
  if (inputs[0].value != "") {
    setCookie("name", inputs[0].value, "2022-09-29");
  }
  var genderRadio = document.getElementsByName("gender");
  for (var i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].checked) {
      var genderValue = genderRadio[i].value;
      setCookie("gender", genderValue, "2022-09-29");
    }
  }
  var colorSelect = document.getElementsByTagName("select")[0];
  for (var i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].selected) {
      var colorValue = colorSelect.options[i].value;
      setCookie("color", colorValue, "2022-09-29");
    }
  }
  // location.href = "profile.html";
  alert("Registration Done!");
});
