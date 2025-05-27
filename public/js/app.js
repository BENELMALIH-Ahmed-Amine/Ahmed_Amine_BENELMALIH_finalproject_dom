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


// modals
let dropdown1 = document.querySelector('.drop1')

dropdown1.addEventListener('mouseover', () => {
    dropdown1.firstElementChild.style.display = "block"
})

let list1 = document.getElementById('drop1')

list1.addEventListener('mouseleave', () => {
    list1.style.display = "none"
})



let dropdown2 = document.querySelector('.drop2')

dropdown2.addEventListener('mouseover', () => {
    dropdown2.firstElementChild.style.display = "block"
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
