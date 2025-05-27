let dropdown = document.querySelectorAll('.dropdown')

console.log(typeof(dropdown));

dropdown.forEach(e => {
    e.addEventListener('click', () => {
        console.log(4444);
        
    })
    
});