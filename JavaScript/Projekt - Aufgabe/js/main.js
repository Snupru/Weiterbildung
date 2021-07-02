"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }
  
  const cardHeaders = document.getElementsByClassName("card-header");
  for(let cardHeader of cardHeaders){
    cardHeader.addEventListener("click", () => {
      const cardBody = cardHeader.nextElementSibling;
      cardBody.classList.toggle("d-none");
    })
  }
}) 