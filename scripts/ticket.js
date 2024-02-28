// scroll section

function getTicket(){
   const Seat = document.getElementById('seat').scrollIntoView({ behavior: 'smooth' });
}
// button color change

function toggleButtonColor(button) {
   button.classList.toggle('bg-green-400');
}




// total seats reduced and seats increased section

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
   }
    else {

       
       if (currentSeats > 4) {
           var newSeats = currentSeats - 1;
           availableSeatsElement.innerText = newSeats;

           
           var newDestinationCount = currentDestinationCount + 1;
           destinationCountElement.innerText = newDestinationCount;
       }
        else {
           alert("No available seats left!");
           return;
       }
   }

   
   button.dataset.isSeatReduced = (!isSeatReduced).toString();
}







// display seat section

const buttonInfo = {
    'A1': { seat: 'A1', class: 'economy', price: 550 },
    'A2': { seat: 'A2', class: 'economy', price: 550 },
    'A3': { seat: 'A3', class: 'economy', price: 550 },
    'A4': { seat: 'A4', class: 'economy', price: 550 },
    'B1': { seat: 'B1', class: 'economy', price: 550 },
    'B2': { seat: 'B2', class: 'economy', price: 550 },
    'B3': { seat: 'B3', class: 'economy', price: 550 },
    'B4': { seat: 'B4', class: 'economy', price: 550 },
};


const buttons = document.querySelectorAll('.button-group');


const selectedButtons = new Set();


buttons.forEach(button => {
    button.addEventListener('click', function() {
       
        if (selectedButtons.size >= 4 && !selectedButtons.has(button)) {
            document.getElementById('errorMessage').textContent = "You can only select up to 4 seats.";
            return;
        }

      
        const buttonInfoData = buttonInfo[button.id] || {};

    
        const newH1 = document.createElement('h1');
        newH1.innerHTML = `<span class="pl-5">
            <span> ${buttonInfoData.seat}</span>
            <span class=" ml-[8.5rem]"> ${buttonInfoData.class}</span>
            <span class=" ml-[7rem]"> ${buttonInfoData.price}</span>
        </span>`;

 
        document.getElementById('labelContainer').appendChild(newH1);

        selectedButtons.add(button);

     
        document.getElementById('errorMessage').textContent = "";
    });
});



// price section

const buttonPrices = {
    'A1': 550,
    'A2': 550,
    'A3': 550,
    'A4': 550,
    'B1': 550,
    'B2': 550,
    'B3': 550,
    'B4': 550
};

let totalPrice = 0;
let clickedButtons = 0;

const buttons1 = document.querySelectorAll('.button-group');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (clickedButtons < 4) {
            const price = buttonPrices[button.id] || 0;
            totalPrice += price;
            document.getElementById("total-price").textContent = totalPrice;
            clickedButtons++;
            
            if (clickedButtons === 4) {
                
            }
        }

    });
});

// grand total and coupon section

document.getElementById('grand-total').textContent = totalPrice;

document.getElementById('discountInput').addEventListener('input', function() {

    document.getElementById('grand-total').textContent =   totalPrice;
});

document.getElementById('applyDiscountButton').addEventListener('click', function() {

    const discountCode = document.getElementById('discountInput').value.toLowerCase(); 
    
    let discountPercentage = 0;
    if (discountCode === 'new15') {
        discountPercentage = 15;
    } else if (discountCode === 'couple 20') {
        discountPercentage = 20;
    }

    if (discountPercentage > 0) {
      
        const discountAmount = totalPrice * (discountPercentage / 100);
        totalPrice -= discountAmount;

        
        document.getElementById("total-price").textContent = totalPrice;

       
        document.getElementById('errorMessage').textContent = "";

 
        document.getElementById('discountSection').style.display = 'none';

        document.getElementById('grand-total').textContent =totalPrice;
    } else {
     
        document.getElementById('errorMessage').textContent = "Invalid discount code.";
    }
});




// next button 

function validateInput() {

    var numericInput = document.getElementById('numericInput');

  
    var submitButton = document.getElementById('submitButton');

  
    if (numericInput.value.length >= 4) {

        submitButton.disabled = false;
    } else {
        
        submitButton.disabled = true;
    }
}