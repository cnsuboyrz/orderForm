document.addEventListener("DOMContentLoaded", function () {
    const sizeInput = document.getElementById("size");
    const secButton = document.getElementById("secButton");
    const gosterInput = document.getElementById("goster");

    secButton.addEventListener("click", function () {
        const selectedValue = sizeInput.value;
        const sizesDatalist = document.getElementById("sizes");
        const selectedOption = sizesDatalist.querySelector(`option[value="${selectedValue}"]`);
        const selectedText = selectedOption ? selectedOption.textContent : selectedValue;
        gosterInput.value = selectedText;
    });
});

document.getElementById("personelForm").addEventListener("submit", function(event) {
    // Sayfanın yenilenmesini engelle
    event.preventDefault();
    const sizeInput = document.getElementById("size");
    const selectedValue = sizeInput.value;
        const sizesDatalist = document.getElementById("sizes");
        const selectedOption = sizesDatalist.querySelector(`option[value="${selectedValue}"]`);
        const selectedText = selectedOption ? selectedOption.textContent : selectedValue;
    // Input elemanlarına erişiyoruz ve değerlerini alıyoruz
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var birthdate = document.getElementById("birthdate").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;

    var tshirtColor = document.getElementById("tshirtColor").value;
    var fontColor = document.getElementById("fontColor").value;
    var tshirtText = document.getElementById("tshirtText").value;
    var tshirtNumber = document.getElementById("tshirtNumber").value;
    var size = document.getElementById("size").value;

    var adress = document.getElementById("adress").value;
    var deliverytime = document.getElementById("deliverytime").value;

    var namesurname = document.getElementById("namesurname").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expirationdate = document.getElementById("expirationdate").value;
    var cvv = document.getElementById("cvv").value;
  
    document.getElementById("tname").innerText = name;
    document.getElementById("tsurname").innerText = surname;
    document.getElementById("tbirthdate").innerText = birthdate;
    document.getElementById("tmail").innerText = mail;
    document.getElementById("tphone").innerText = phone;

    document.getElementById("ttshirtColor").innerText = tshirtColor;
    document.getElementById("tfontColor").innerText = fontColor;
    document.getElementById("ttshirtText").innerText = tshirtText;
    document.getElementById("ttshirtNumber").innerText = tshirtNumber;
    document.getElementById("tsize").innerText = selectedText;
    

    document.getElementById("tadress").innerText = adress;
    document.getElementById("tdeliverytime").innerText = deliverytime;
    
    document.getElementById("tnamesurname").innerText = namesurname;
    document.getElementById("tcardNumber").innerText = cardNumber;
    document.getElementById("texpirationdate").innerText = expirationdate;
    document.getElementById("tcvv").innerText = cvv;
   

});
