
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const car = document.getElementById("car").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service || !date) {
    alert("Please complete all required fields.");
    return;
  }

  const booking = `Hello Vasanth Car Rentals!

Name: ${name}
Customer Phone: ${phone}
Rental Type: ${service}
Preferred Car: ${car || "Not specified"}
Journey Date: ${date}
Pickup / Destination: ${message || "Not specified"}

Please share availability and rental price.`;

  const url = "https://wa.me/919573373015?text=" + encodeURIComponent(booking);
  window.open(url, "_blank");
});
