const background = document.getElementById("background");
const password = document.getElementById("password");

// listen for input in password field
password.addEventListener("input", (e) => {
    const input = e.target.value;
    // get input length
    const length = input.length;
    // get blur value of 20 - (2 * length)
    const blur = (20 - length * 2);
    // set background filter to blur value in px
    background.style.filter = `blur(${blur}px)`;
})
