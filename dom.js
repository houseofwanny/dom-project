let value = document.getElementById('increase')
let count = document.getElementById('countsum')
let counter = 0;

const increment = ()=> {
    value.addEventListener('click', (e)=> {
        counter +=1
        count.innerHTML = counter;

    })
}