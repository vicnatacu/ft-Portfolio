  function readFunction(idName, btnId) {
    meText = document.getElementById(idName);
    btn = document.getElementById(btnId);
    if(btn.innerHTML == "more") {
      meText.classList.remove("hide-me");
      btn.innerHTML = "less";
    } else {
      meText.classList.add("hide-me");
      btn.innerHTML = "more";
    }

  }
