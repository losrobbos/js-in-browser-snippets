console.log('Script ist da! To your service!');

const star1 = document.querySelector('.star-1');
const star2 = document.querySelector('.star-2');
const star3 = document.querySelector('.star-3');
const star4 = document.querySelector('.star-4');
const star5 = document.querySelector('.star-5');

const arrStars = [star1, star2, star3, star4, star5]

star1.addEventListener('click', () => {
  console.log('Star 1 clicked',);
  star1.style.backgroundColor = "yellow"
});

star2.addEventListener('click', () => {
  console.log('Star 2 clicked');

  arrStars.slice(0, 2).forEach( star => {
    star.style.backgroundColor = "yellow"
  })
});

star3.addEventListener('click', () => {
  console.log('Star 3 clicked');

  arrStars.slice(0, 3).forEach( star => {
    star.style.backgroundColor = "yellow"
  })
});

star4.addEventListener('click', () => {
  console.log('Star 4 clicked');

  arrStars.slice(0, 4).forEach( star => {
    star.style.backgroundColor = "yellow"
  })
});

star5.addEventListener('click', () => {
  console.log('Star 5 clicked');

  arrStars.forEach( star => {
    star.style.backgroundColor = "yellow"
  })
});


// FURTHER CHALLENGE:
// just ONE click listener! and reading out index of clicked item by passed CSS property...
// => grab index of item by CSS property ! see below
// const itemClicked = getComputedStyle(e.target)
// console.log( itemClicked.getPropertyValue('--i') ) // #336699

