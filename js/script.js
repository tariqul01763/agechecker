function checkAge() {
    // Get the entered age from the input field
    var age = document.getElementById("ageInput").value;

    // Get the result card elements
    var resultCard = document.getElementById("resultCard");
    var adultCard = document.getElementById("adultCard");
    var childCard = document.getElementById("childCard");
    var alertMsg = document.getElementById("alertMsg");


    // Check if the age is greater than or equal to 18
    if (age >= 18) {
      // Show the adult card and hide the child card
      adultCard.style.display = "block";
      childCard.style.display = "none";
      alertMsg.style.display = "none";
    } else if (age >= 1) {
      // Show the child card and hide the adult card
      alertMsg.style.display = "none";
      adultCard.style.display = "none";
      childCard.style.display = "block";
    } else {
      // Display an error message for invalid age
      alertMsg.style.display = "block";
      adultCard.style.display = "none";
      childCard.style.display = "none";
    }

    resultCard.style.display = "block";

  }

  