function updateCountdown() {
    const now = Date.now();
    const releaseDate = new Date("2026-01-13T00:00:00Z").getTime();
    const diff = releaseDate - now;

    const countdownElements = Array.from(
        document.getElementsByClassName("countdown")
    );

    if (diff <= 0) {
        countdownElements.forEach((element) => {
            element.innerHTML = "<h1>Released!</h1>";
        });
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const makeUnitElement = (time, name) => {
        const element = document.createElement("div");
        element.classList.add("unit");
        element.innerHTML = `<div class="time">${time}</div><div class="label">${name}</div>`;
        return element;
    };

    countdownElements.forEach((element) => {
        element.textContent = "";
        element.appendChild(makeUnitElement(days, "Days"));
        element.appendChild(makeUnitElement(hours, "Hours"));
        element.appendChild(makeUnitElement(mins, "Minutes"));
        element.appendChild(makeUnitElement(secs, "Seconds"));
    });
}

setInterval(() => {
    updateCountdown();
}, 500);
updateCountdown();

function reveal() {
    const enter = document.getElementById("enter");
    enter.remove();

    setTimeout(() => {
        enter.classList.add("reveal");
    }, 500);

    setTimeout(() => {
        enter.remove();
    }, 1000);
}

window.onload = reveal;
