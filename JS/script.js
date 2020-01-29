const secondHand = document.querySelector('.second-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) *360) + 90;
    hourHand.style.transform=`rotate(${minsDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = ((mins / 12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}
setInterval(setDate, 1000);
