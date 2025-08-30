let home = document.getElementById("home")
let guest = document.getElementById("guest")

let homeScore = 0
let guestScore = 0

function oneHome() {
    homeScore += 1
    home.textContent = homeScore
}

function twoHome() {
    homeScore += 2
    home.textContent = homeScore
}

function threeHome() {
    homeScore += 3
    home.textContent = homeScore
}

function oneGuest() {
    guestScore += 1
    guest.textContent = guestScore
}

function twoGuest() {
    guestScore += 2
    guest.textContent = guestScore
}

function threeGuest() {
    guestScore += 3
    guest.textContent = guestScore
}

function reset() {
    guestScore = 0
    homeScore = 0
    guest.textContent = guestScore
    home.textContent = homeScore
}