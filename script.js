// Skrypt inicjalizujący mapę Google
function initMap() {
    const location1 = { lat: 50.0485, lng: 18.6810 }; // Żory, ul. Stroma 9
    const location2 = { lat: 50.1023, lng: 18.5466 }; // Rybnik, ul. Korfantego 4a
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location1,
    });
    new google.maps.Marker({
        position: location1,
        map: map,
        title: "Żory, ul. Stroma 9",
    });
    new google.maps.Marker({
        position: location2,
        map: map,
        title: "Rybnik, ul. Korfantego 4a",
    });
}

// Funkcja do wywołania po kliknięciu na numer telefonu
function callPhoneNumber() {
    window.location.href = 'tel:+48784253283';
}

// Funkcja do wysłania SMS-a po kliknięciu
function sendSMS() {
    window.location.href = 'sms:+48784253283';
}
