var all = 0;
var ageBall = 0;
var operationBall = 0;
var patientBall = 0;

function resetFrom() {
  document.getElementById("form1").reset();
  document.getElementById("form").reset();
  all = 0;
  ageBall = 0;
  operationBall = 0;
  patientBall = 0;
  document.getElementById("all").innerText = all;
  document.getElementById("patient").innerText = patientBall;
  document.getElementById("operation").innerText = operationBall;
}
function calculate(input) {

    if(input.checked === true){
        if (input.name === "operation-risk") {
            operationBall = operationBall + parseInt(input.value);
        } else if (input.name === "patient-risk" || input.name === "age") {
            patientBall = patientBall + parseInt(input.value);
        }
        all = all + parseInt(input.value);
        document.getElementById("all").innerText = all;
        document.getElementById("patient").innerText = patientBall;
        document.getElementById("operation").innerText = operationBall;

        f();
    }else{
        if (input.name === "operation-risk") {
            operationBall = operationBall - parseInt(input.value);
        } else if (input.name === "patient-risk" || input.name === "age") {
            patientBall = patientBall - parseInt(input.value);
        }
        f();
        all = all - parseInt(input.value);
        document.getElementById("all").innerText = all;
        document.getElementById("patient").innerText = patientBall;
        document.getElementById("operation").innerText = operationBall;
    }

}

function f() {
    var classList = document.getElementById("result-box").className.split(" ");
    if (ageBall + operationBall + patientBall === 0 || ageBall + operationBall + patientBall === 1) {
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
        document.getElementById("conclude").innerHTML = "Специфических мероприятий не требуется; ранняя активизация больного.";
    } else if (ageBall + operationBall + patientBall === 2) {
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
        document.getElementById("conclude").innerHTML = "Низкие дозы нефракционированного гепарина (каждые 12 ч), низкомолеулярный гепарин (≤3400 МЕ/сут); <br>Чулки с распределением давления или прерывистая пневматическая компрессия.";
    } else if (ageBall + operationBall + patientBall === 3 || ageBall + operationBall + patientBall === 4) {
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
        document.getElementById("conclude").innerHTML = "Нефракционированный гепарин (каждые 8 ч) или низкомолекулярный гепарин (>3400 МЕ/сут) или перемежающаяся пневматическая компрессия.";
    } else if (ageBall + operationBall + patientBall >= 5) {
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
        document.getElementById("conclude").innerHTML = "Низкомолекулярный гепарин (>3400 МЕ/сут), фондапаринукс, варфарин (МНО 2–3, только в ортопедии) или прерывистая пневматическая компрессия <br> Чулки с распределением давления + нефракционированный гепарин <br> Низкомолекулярный гепарин.";
    }
}