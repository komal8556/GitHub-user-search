const main = document.querySelector(".main-body")
const moonIcon = document.querySelector("#moon-icon")
const sunIcon = document.querySelector("#sun-icon")

function changeTheme(e){
    if(e.target.id === "sun-icon"){
        main.classList.add("dark")
        moonIcon.classList.remove("hidden")
        sunIcon.classList.add("hidden")
    } else if (e.target.id === "moon-icon"){
        main.classList.remove("dark")
        moonIcon.classList.add("hidden")
        sunIcon.classList.remove("hidden")
    }
    return
}

main.addEventListener("click", changeTheme)



