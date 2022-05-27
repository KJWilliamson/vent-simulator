function shake() {
    let placeToSee = document.getElementById("placeToSee");
  
    //Make the ball shake by adding the css class
    placeToSee.classList.add("shake");
  
    //Remove the shake class after it stops shaking
    setTimeout(function () {
      placeToSee.classList.remove("shake");
    }, 2000);
  
    //call the fortune function to get your fortune only after 2sec
    setTimeout(function () {
      vent();
    }, 2000);
  }
  
  document.querySelector("#ventMessage").addEventListener("click", vent);
  
  function vent() {
    const fname = document.querySelector("#first").value.toUpperCase();
    const lname = document.querySelector("#last").value.toUpperCase();
    const message = document.querySelector("#message").value.toUpperCase();
  
    document.querySelector(
      "#placeToSee"
    ).innerText = `${fname} ${lname} ${message}`;
  }

  