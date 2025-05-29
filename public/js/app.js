// let btns = document.querySelectorAll('.drop')
// let modals = document.querySelectorAll('.dropdown')

// console.log(modals);
// console.log(btns);

// Array.from(btns).forEach(b => {
//     let sight = b.getAttribute('sight')

//     b.addEventListener('click', () => {
//         if (modals[0].id == sight) {
//             if (modals[0].style.display == "block") {
//                 modals[0].style.display = "none"
//             } else {
//                 modals[0].style.display = "block"
//             }
//         } else if (modals[1].id == sight) {
//             if (modals[1].style.display == "block") {
//                 modals[1].style.display = "none"
//             } else {
//                 modals[1].style.display = "block"
//             }
//         }
//     })
// });

let body = document.body


// modals
let dropdown1 = document.querySelector('.drop1')
dropdown1.addEventListener('mouseover', () => {
    dropdown1.firstElementChild.style.display = "flex"
})

let list1 = document.getElementById('drop1')
list1.addEventListener('mouseleave', () => {
    list1.style.display = "none"
})


let dropdown2 = document.querySelector('.drop2')
dropdown2.addEventListener('mouseover', () => {
    dropdown2.firstElementChild.style.display = "flex"
})

dropdown2.addEventListener('mouseleave', () => {
    dropdown2.firstElementChild.style.display = "none"
})

let list2 = document.getElementById('drop2')
list2.addEventListener('mouseleave', () => {
    list2.style.display = "none"
})


// log modal
let log = document.getElementById('log')

log.addEventListener('click', () => {
    if (log.nextElementSibling.style.display == "flex") {
        log.nextElementSibling.style.display = "none"
    } else {
        log.nextElementSibling.style.display = "flex"
    }
})

let enter = document.getElementById('enter')

enter.addEventListener('click', () => {
    log.nextElementSibling.style.display = "none"
})

// body.addEventListener('click', () => {
//     log.nextElementSibling.style.display = "none"
// })



// menu check
let Starters = document.querySelector('.Starters_js').parentElement
let Breakfast = document.querySelector('.Breakfast_js').parentElement
let Lunche = document.querySelector('.Lunch_js').parentElement
let Dinner = document.querySelector('.Dinner_js').parentElement

let times = [Starters, Breakfast, Lunche, Dinner]

let meals = document.querySelectorAll('.times')

times.forEach(t => {
    meals.forEach(m => {
        if (t.textContent == m.id) {
            t.addEventListener('click', () => {
                meals.forEach(e => {
                    e.classList.add('click')
                })
                m.classList.remove('click')
            })
        }
        //todo else {
        //     alert("ERROR: Sorry, the Menu is beinng fixed.")
        // }
    })
})



// caroucel (testemonial)
let T_Btn = Array.from(document.getElementById('nav_b').children)
console.log(T_Btn);

let T_Slides = Array.from(document.getElementById('view').children)
console.log(T_Slides)

let view = document.getElementById('t-caroucel')

T_Btn.forEach(b => {
    T_Slides.forEach(s => {
        b.addEventListener('click', () => {
            if (b.getAttribute('class') == s.id) {
                // translate each slide by it's width
                let widths = [1290, 430, -430, -1290]
                widths.forEach(w => {
                    if (widths.indexOf(w) == T_Slides.indexOf(s)) {
                        T_Slides.forEach(e => {
                            // take other slides away
                            e.style.transform = `translateX(2500px)`
                        })
                        s.style.transform = `translateX(${w}px)`
                        // s.style = "transition-timing-function: ease-in"
                    }
                })
            }
        })
    })
})

// caousel fonction
// const slider = (B_Array, S_Array, W_Array = [], bn) => {
//     B_Array.forEach(b => {
//         S_Array.forEach(s => {
//             b.addEventListener('click', () => {
//                 if (b.getAttribute('class') == s.id) {
//                     // translate each slide by it's width
//                     let W_Array = []
//                     W_Array.forEach(w => {
//                         if (W_Array.indexOf(w) == S_Array.indexOf(s)) {
//                             S_Array.forEach(e => {
//                                 // take other slides away
//                                 e.style.transform = `translateX(${bn}px)`
//                             })
//                             s.style.transform = `translateX(${w}px)`
//                         }
//                     })
//                 }
//             })
//         })
//     })
// }