document.addEventListener("DOMContentLoaded", function () {
  const krmivo = document.getElementById("krmivo");
  const mnozstvi = document.getElementById("mnozstvi");
  const cenaCelkem = document.getElementById("celkova_cena");

  const bioKvalita = document.querySelector(".extra30");
  const premiumKvalita = document.querySelector(".extra50");
  const extraNekvalita = document.querySelector(".extraminus");
  const darkoveBaleni = document.querySelector(".extra500");

  const personalFree = document.getElementById("personalfree");
  const kuryr10 = document.getElementById("kuryr10");
  const czpost250 = document.getElementById("czpost250");

  const vypocetCeny = document.getElementById("cena");
  const rozpocet = document.getElementById("rozpocet");
  const countPriceButton = document.getElementById("countprice");
  const vysledek = document.getElementById("vysledek");
  const odeslatButton = document.getElementById("odeslat");
  const emailInput = document.getElementById("email");

  function updatePrice() {
    let basePrice = parseFloat(krmivo.value);
    let quantity = parseFloat(mnozstvi.value);
    let totalPrice = basePrice * quantity;

    if (bioKvalita.checked) totalPrice *= 1.3;
    if (premiumKvalita.checked) totalPrice *= 1.5;
    if (extraNekvalita.checked) totalPrice *= 0.85;
    if (darkoveBaleni.checked) totalPrice += 500;

    if (kuryr10.checked) totalPrice *= 1.1;
    else if (czpost250.checked) totalPrice += 250;

    cenaCelkem.value = totalPrice.toFixed(2) + " Kč";
    vypocetCeny.innerText = totalPrice.toFixed(2) + " Kč";
  }

  function checkBudget() {
    let totalPrice = parseFloat(cenaCelkem.value.replace(" Kč", ""));
    let budget = parseFloat(rozpocet.value);

    if (budget >= totalPrice) {
      vysledek.innerText = "Máte dostatečný rozpočet.";
    } else {
      vysledek.innerText = "Nedostatečný rozpočet!";
    }
  }

  emailInput.addEventListener("input", function (event) {
    const povoleneZnaky = /[^A-Za-z0-9@]/g;
    emailInput.value = emailInput.value.replace(povoleneZnaky, "");
  });

  function odeslatFormular() {
    console.log("Formulář byl odeslán.");
  }

  krmivo.addEventListener("change", updatePrice);
  mnozstvi.addEventListener("input", updatePrice);
  bioKvalita.addEventListener("change", updatePrice);
  premiumKvalita.addEventListener("change", updatePrice);
  extraNekvalita.addEventListener("change", updatePrice);
  darkoveBaleni.addEventListener("change", updatePrice);
  personalFree.addEventListener("change", updatePrice);
  kuryr10.addEventListener("change", updatePrice);
  czpost250.addEventListener("change", updatePrice);
  countPriceButton.addEventListener("click", checkBudget);
  odeslatButton.addEventListener("click", odeslatFormular);
  updatePrice();
});
