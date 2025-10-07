const futureDate = new Date(2025, 10, 9, 0, 0, 0); // setting the future date to May 21, 2025 at 00:00:00 Mid Night
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeDiff = futureTime - today;

  // Calculate remaining days, hours, minutes and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update the digit divs with the countdown values
  document.getElementById("dayTen").textContent = Math.floor(days / 10);
  document.getElementById("dayUnit").textContent = days % 10;
  document.getElementById("hourTen").textContent = Math.floor(hours / 10);
  document.getElementById("hourUnit").textContent = hours % 10;
  document.getElementById("minuteTen").textContent = Math.floor(minutes / 10);
  document.getElementById("minuteUnit").textContent = minutes % 10;
  document.getElementById("secondTen").textContent = Math.floor(seconds / 10);
  document.getElementById("secondUnit").textContent = seconds % 10;

  //If tme difference is less than or euqal to zero, display expired message
  if (timeDiff <= 0) {
    document.getElementById("countdown").textContent = "Offer Expired!";
    clearInterval(intervalID);
    return;
  }
}

// Initial call to update time
getRemainingTime();

// Set interval to update time every second
const intervalID = setInterval(getRemainingTime, 1000);