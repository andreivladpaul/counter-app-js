const counter = document.getElementById("counter");
const btns = document.querySelectorAll(".buttonClass");
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