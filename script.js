// get the date from the input field
function getDate() {
}

// start the countdown
function start() {

    var datereceive = document.getElementById('birthday');
    var show = document.getElementById('demo');

// Set the date we're counting down to
    function updateCountdown() {
        var now = new Date();
        var targetDate = new Date(datereceive.value);
       

 // Get today's date and time
        if (isNaN(targetDate.getTime())) {
            result.textContent = "Please enter a valid date.";
            show;
        }
// Find the distance between now and the count down date
        var timeDifference = targetDate - now;

// Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var  minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        show.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

// Update the count down every 1 second
    setInterval(updateCountdown, 1000);
    datereceive.addEventListener('input', updateCountdown);

// If the count down is finished, write some text
if (timeDifference <= 0) {
    result.textContent = "Please enter a valid date.";
    console.
    show;
}
}
