function calculation() {
  var ageBall = 0;
  var riskBall1 = 0;
  var riskBall2 = 0;
  var classList = document.getElementById("result-box").className.split(" ");
  var arrayAge = document.getElementsByName("age");
  for (var i = 0; i < arrayAge.length; i++) {
    if (arrayAge[i].checked) {
      ageBall = parseInt(arrayAge[i].value);
    }
  }
  var arrayRisk1 = document.getElementsByName("checkbox-risk");
  for (var i = 0; i < arrayRisk1.length; i++) {
    if (arrayRisk1[i].checked) {
      riskBall1 = riskBall1 + parseInt(arrayRisk1[i].value)
    }
  }
  var arrayRisk2 = document.getElementsByName("checkbox-risk-2");
  for (var i = 0; i < arrayRisk2.length; i++) {
    if (arrayRisk2[i].checked) {
      riskBall2 = riskBall2 + parseInt(arrayRisk2[i].value)
    }
  }
  if (ageBall + riskBall1 + riskBall2 === 0 || ageBall + riskBall1 + riskBall2 === 1) {
    classList.forEach(function (classname) {
      if (classname === "bg-orange") {
        document.getElementById("result-box").classList.remove("bg-orange");
      }
      else if (classname === "bg-light-green") {
        document.getElementById("result-box").classList.remove("bg-light-green");
      }
      else if (classname === "bg-danger") {
        document.getElementById("result-box").classList.remove("bg-danger");
      }
    });
    document.getElementById("result-box").classList.add("bg-green");
    document.getElementById("result-box").classList.add("text-white");
    document.getElementById("result-text").innerText = "Низкий";
  } else if (ageBall + riskBall1 + riskBall2 === 2) {
    classList.forEach(function (classname) {
      if (classname === "bg-green") {
        document.getElementById("result-box").classList.remove("bg-green");
      }
      else if (classname === "bg-orange") {
        document.getElementById("result-box").classList.remove("bg-orange");
      }
      else if (classname === "bg-danger") {
        document.getElementById("result-box").classList.remove("bg-danger");
      }
    });
    document.getElementById("result-box").classList.add("bg-light-green");
    document.getElementById("result-box").classList.add("text-white");
    document.getElementById("result-text").innerText = "Умеренный";
  } else if (ageBall + riskBall1 + riskBall2 === 3 || ageBall + riskBall1 + riskBall2 === 4) {
    classList.forEach(function (classname) {
      if (classname === "bg-green") {
        document.getElementById("result-box").classList.remove("bg-green");
      }
      else if (classname === "bg-light-green") {
        document.getElementById("result-box").classList.remove("bg-light-green");
      }
      else if (classname === "bg-danger") {
        document.getElementById("result-box").classList.remove("bg-danger");
      }
    });
    document.getElementById("result-box").classList.add("bg-orange");
    document.getElementById("result-box").classList.add("text-white");
    document.getElementById("result-text").innerText = "Высокий";
  } else if (ageBall + riskBall1 + riskBall2 >= 5) {
    classList.forEach(function (classname) {
      if (classname === "bg-green") {
        document.getElementById("result-box").classList.remove("bg-green");
      }
      else if (classname === "bg-light-green") {
        document.getElementById("result-box").classList.remove("bg-light-green");
      }
      else if (classname === "bg-orange") {
        document.getElementById("result-box").classList.remove("bg-orange");
      }
    });
    document.getElementById("result-box").classList.add("bg-danger");
    document.getElementById("result-box").classList.add("text-white");
    document.getElementById("result-text").innerText = "Очень высокий";
  }

}