//Intial count with basic approach
// let count = 0;

// const value = document.querySelector("#value");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');

// increase.addEventListener('click', function() {
//   count += 1;
//   value.innerHTML = count;
// })

// decrease.addEventListener('click', function() {
//   count -= 1;
//   value.innerHTML = count;
// })

// reset.addEventListener('click', function() {
//   count = 0;
//   value.innerHTML = count;
// })

// lets do it in optimise way
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Basic way function
// btns.forEach(function(e) {
//   console.log(e)
//   e.addEventListener('click', function(item) {
//     console.log(item.target.classList)
//     const styles = item.target.classList;
//     if (styles.contains('increase')) {
//       // console.log(count++);
//       count++;
//     } value.textContent = count;
//     if (styles.contains('reset')) {
//       count = 0;
//     } value.textContent = count;
//     if(styles.contains('decrease')){
//       count--;
//     } value.textContent = count;
//   })
// })

// More optimise way and i have added restriction also not to go above 20 and below zero
btns.forEach(function(e) {
  console.log(e)
  e.addEventListener('click', function(item) {
    console.log(item.target.classList)
    const styles = item.target.classList;
    if (styles.contains('increase')) {
      // console.log(count++);
      if (count < 20) {
        count++;
      }

    }
    else if (styles.contains('reset')) {
      count = 0;
    }
    else {
      if (count > 0) {
        count--;
      }

    } value.textContent = count;
  })
})
