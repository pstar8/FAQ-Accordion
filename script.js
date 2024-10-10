const plus = document.querySelectorAll(".icon_plus") 
const minus = document.querySelectorAll(".icon_minus")

plus.forEach( plus =>{
    plus.addEventListener ('click', () => {
        minus.classList.toggle(2000)
        plus.style.display = 'none'
        minus.style.display = 'block'
    })
})
