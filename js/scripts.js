$(document).ready(function () {
  $("#button").click(function () {
    let array = [];
    let user = document.getElementById("input").value;
    if (isNaN(user) || user < 1) {
      alert("Enter valid number, please!");
    }
    else {
      for (let i = 0; i <= user; i++) {
        if (/3+/.test(i)) {
          array.push(" 'Won't you be my neighbor?'");
        }
        else if (/2+/.test(i)) {
          array.push(" 'Boop!'");
        }
        else if (/1+/.test(i)) {
          array.push(" 'Beep!'");
        }
        else {
          array.push(` '${i}'`);
        }
      }
    }
    document.getElementById("output").innerHTML = array;
    event.preventDefault();
  })
  $("#reverse").click(function () {
    let array = [];
    let user = document.getElementById("input").value;
    if (isNaN(user) || user < 1) {
      alert("Enter valid number, please!");
    }
    else {
      for (let i = user; i >= 0; i--) {
        if (/3+/.test(i)) {
          array.push(" 'Won't you be my neighbor?'");
        }
        else if (/2+/.test(i)) {
          array.push(" 'Boop!'");
        }
        else if (/1+/.test(i)) {
          array.push(" 'Beep!'");
        }
        else {
          array.push(` '${i}'`);
        }
      }
    }
    document.getElementById("output").innerHTML = array;
    event.preventDefault();
})
})