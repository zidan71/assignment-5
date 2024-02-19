function getTicket(){
   const Seat = document.getElementById('seat').scrollIntoView({ behavior: 'smooth' });
}

function toggleButtonColor(button) {
   button.classList.toggle('bg-green-400');
}






function toggleSeatAndIncreaseDestination(button) {
   var availableSeatsElement = document.getElementById("availableSeats");
   var destinationCountElement = document.getElementById("destinationCount");
   
   var currentSeats = parseInt(availableSeatsElement.innerText);
   var currentDestinationCount = parseInt(destinationCountElement.innerText);
   var isSeatReduced = button.dataset.isSeatReduced === "true";

   if (isSeatReduced) {
       
       var newSeats = currentSeats + 1;
       availableSeatsElement.innerText = newSeats;

      
       var newDestinationCount = currentDestinationCount - 1;
       destinationCountElement.innerText = newDestinationCount;
   } else {
       
       if (currentSeats > 0) {
           var newSeats = currentSeats - 1;
           availableSeatsElement.innerText = newSeats;

           
           var newDestinationCount = currentDestinationCount + 1;
           destinationCountElement.innerText = newDestinationCount;
       } else {
           alert("No available seats left!");
           return;
       }
   }

   
   button.dataset.isSeatReduced = (!isSeatReduced).toString();
}



function validateInput() {
   var numericInput = document.getElementById("numericInput").value;
   var submitButton = document.getElementById("submitButton");


   if (!isNaN(numericInput) && numericInput.length >= 4) {
       
       submitButton.removeAttribute("disabled");
   } else {
       
       submitButton.setAttribute("disabled", "true");
   }
}

function handleButtonClick() {
   var numericInput = document.getElementById("numericInput").value;


   
}




function showDetails(buttonName) {
    var seatLabel = document.getElementById('seatLabel');
    var classLabel = document.getElementById('classLabel');
    var priceLabel = document.getElementById('priceLabel');

   

    seatLabel.innerText = buttonName;
    classLabel.innerText = 'Economy';
    priceLabel.innerText = '550';
}


