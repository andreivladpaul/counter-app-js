const container = document.getElementById("container");

const buttons = `
<h1>Counter</h1>
<p id="counter">0</p>
<div id="btn-section">
    <button class="btn-increase buttonClass">Increase</button>
    <button class="btn-reset buttonClass">Reset</button>
    <button class="btn-decrease buttonClass">Decrease</button>
</div>

`;
container.innerHTML += buttons;

const btns = document.querySelectorAll(".buttonClass");
const counter = document.getElementById("counter");
let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        const styles = e.currentTarget.classList

        if(styles.contains("btn-increase")) {
            count++;
        }else if (styles.contains("btn-decrease")) {
            count--;
        }else {
            count = 0;
        };
        counter.textContent = count;
    })
});