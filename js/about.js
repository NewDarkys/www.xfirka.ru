let body = document.body
let main = document.querySelector("main")
let footer = document.querySelector("footer")



var elem = document.querySelector(".acryl");

let windowMaxHeight = document.documentElement.clientHeight;

(function me() {
    for (let i = -50; i < windowMaxHeight + 10; i++) {
        setTimeout(() => {
            elem.style.marginTop = `${i}px`;
        }, 5 * i);
    }
    setTimeout(me, (windowMaxHeight + 10) * 5);
})();

