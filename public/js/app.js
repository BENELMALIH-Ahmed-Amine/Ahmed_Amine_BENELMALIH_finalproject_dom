// nav shadow
let body = document.body

let nav = document.querySelector('.first')

document.addEventListener('scroll', () => {
    nav.style = "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
})



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





// caoucels fonction
const slider = (B_Array, S_Array, w1, w2, w3, w4, n) => {
    B_Array.forEach(b => {
        S_Array.forEach(s => {
            b.addEventListener('click', () => {
                if (b.getAttribute('class') == s.id) {
                    // translate each slide by it's width
                    let widths = [w1, w2, w3, w4]
                    widths.forEach(w => {
                        if (widths.indexOf(w) == S_Array.indexOf(s)) {
                            S_Array.forEach(e => {
                                // take other slides away
                                e.style.transform = `translateX(${n}px)`
                            })
                            s.style.transform = `translateX(${w}px)`
                            //todo s.style = "transition-timing-function: ease-in"
                        }
                    })
                }
            })
        })
    })
}


// caroucel (testemonial)
let T_Btn = Array.from(document.querySelectorAll('#nav_b')[0].children)
let T_Slides = Array.from(document.getElementById('t_view').children)

let view = document.getElementById('t-caroucel')

slider(T_Btn, T_Slides, 1290, 430, -430, -1290, 2500)


// caroucel (event)
let E_Btn = Array.from(document.querySelectorAll('#nav_b')[1].children)
console.log(E_Btn);

let E_Slides = Array.from(document.getElementById('e_view').children)
console.log(E_Slides)

E_Btn.forEach(b => {
    b.addEventListener('click', () => {

    })
})



//todo
let Slides_Parent = document.getElementById('t_view')
console.log(Slides_Parent);


if (Slides_Parent.getAttribute('time')) {
    let time = Slides_Parent.getAttribute('time')
    console.log(time);

    // T_Btn.forEach(e => {
    //     setInterval(() => {
    //         e.click()
    //         console.log(4);
            
    //     }, 5000);
    // })
}