function calculation() {
  var arrayAge = document.getElementsByName("age");
  for (var i = 0; i < arrayAge.length; i++) {
    if (arrayAge[i].checked) {
      var age = arrayAge[i].value;
    }
  }

}