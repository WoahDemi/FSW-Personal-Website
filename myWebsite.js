const toggler = () =>{
    let darkMode = document.getElementById("bodyody")
    darkMode.classList.toggle("light-mode")
}

let button = document.getElementById("dark-to-light")
button.addEventListener("click", toggler)