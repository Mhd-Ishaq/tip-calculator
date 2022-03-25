"use strict";
// variables
let totalBill = 0;
let tipSelected = 0;
let totalPeople = 0;

const isNumeric = function(number){
  return(!isNaN(number) && isFinite(number));
};



//  total bill per person

const totalBillPerPerson = function(totalTip){
  const totalPerPerson = ((totalBill + totalTip) / totalPeople).toFixed(2);

  const amountPerPerson = document.getElementById("total-amount-per-person");

  if(isNumeric(totalPerPerson)){
    return amountPerPerson.innerHTML = `$${totalPerPerson}`
  }
}

// function to calculate tipPerPerson

const tipPerPerson = function(){
    const totalTip = totalBill * (tipSelected / 100);

    const tipPerPerson = document.getElementById("total-tip-per-person");

    if(isNumeric((totalTip/totalPeople).toFixed(2))){
      totalBillPerPerson(totalTip);
      return tipPerPerson.innerHTML = `$${(totalTip/totalPeople).toFixed(2)}`
    }
};

// function to get number of people

const peopleCount = function(event){
  totalPeople = Number(document.getElementById("people-count").value);

  if(totalPeople <= 0){
    document.getElementById("bill-error-message").style.display = "block";
  }
  else{
    document.getElementById("bill-error-message").style.display = "none";
    tipPerPerson();
  }
  };

// function to handle input value of the bill

const billINput = function(){
  totalBill = Number(document.getElementById("bill-charge").value);

  // check for valid input

  if(totalBill <= 0){
    document.getElementById("bill-error-message").style.display = "block";
  }
  else{
    document.getElementById("bill-error-message").style.display = "none";
  }
};

const tipInput = function(event){
  let tipNode = document.getElementsByClassName("tip-value-active ")[0];

  if(tipNode !== undefined){
    tipNode.classList.remove("tip-value-active");
  }
  event.target.className += "tip-value-active";
  tipSelected = Number(event.target.value);

  if(tipSelected <= 0){
    document.getElementById("bill-error-message").style.display = "block";
  }
  else{
    document.getElementById("bill-error-message").style.display = "none";
    tipPerPerson();
  }
};
  



