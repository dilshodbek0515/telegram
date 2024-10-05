const clockEl = document.querySelector(".clock_item");
const form = document.querySelector(".forma")
const input = document.querySelector(".input")
const hero = document.querySelector(".hero")




// me
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value
    if (value === "") {
        return null
    }

    const el = document.createElement("div")
    el.classList.add("mess", "me")
    el.innerHTML =
        `<p>${value}</p>
         <h3 class="clock_item"></h3>
        `
    hero.appendChild(el)
    input.value = ""
    botMsg()
})

// bot
const TEXTS = [
    "salom",
    "qalesiz",
    "🖐️🖐️🖐️",
    "nima gap",
    "haa",
    "yuq",
    "uydaa",
    "😇😇😇",
    "tinchlik",
    "hmm",
    "ok",
    "👌👌👌👌👌"
]

function botMsg() {
    let time = Math.floor(Math.random() * 10000)
    console.log(time);

    setTimeout(() => {
        let index = Math.floor(Math.random() * TEXTS.length)
        const el = document.createElement("div")
        el.classList.add("mess")
        el.innerHTML =
            `<p>${TEXTS[index]}</p>
         <h3 class="clock_item"></h3>
        `
        hero.appendChild(el)
    }, 2500)
}

// vaqti
{
    function currentTime() {
        let date = new Date();
        let hour = date.getHours().toString().padStart(2, "0");
        let minute = date.getMinutes().toString().padStart(2, "0");
        const allClocks = document.querySelectorAll(".clock_item");
        allClocks.forEach(clock => {
            clock.innerHTML = `${hour} : ${minute}`;
        });
    }
    currentTime();
    setInterval(() => {
        currentTime();
    }, 1000);
}


// sidebar
const side = document.querySelector(".sidebar")
function sidebar() {
    side.style.display = "block"
    side.style.marginLeft = "37%"
}
function sidebarClose() {
    side.style.display = "none"
    side.style.marginLeft = "0%"
}