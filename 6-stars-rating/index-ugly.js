console.log('Script ist da! To your service!');

const star1 = document.querySelector('.star-1');
const star2 = document.querySelector('.star-2');
const star3 = document.querySelector('.star-3');
const star4 = document.querySelector('.star-4');
const star5 = document.querySelector('.star-5');

const arrStars = [star1, star2, star3, star4, star5]


// grab index of item by CSS property
// const style = getComputedStyle(star2)
// console.log( style.getPropertyValue('--i') ) // #336699

star1.addEventListener('click', () => {
  console.log('Star 1 clicked',);
  star1.style.backgroundColor = "yellow"
});
star2.addEventListener('click', () => {
  console.log('Star 2 clicked');
  star1.style.backgroundColor = "yellow"
  star2.style.backgroundColor = "yellow"
});
star3.addEventListener('click', () => {
  console.log('Star 3 clicked');
  star1.style.backgroundColor = "yellow"
  star2.style.backgroundColor = "yellow"
  star3.style.backgroundColor = "yellow"
});
star4.addEventListener('click', () => {
  console.log('Star 4 clicked');
  star1.style.backgroundColor = "yellow"
  star2.style.backgroundColor = "yellow"
  star3.style.backgroundColor = "yellow"
  star4.style.backgroundColor = "yellow"
});
star5.addEventListener('click', () => {
  console.log('Star 5 clicked');
  star1.style.backgroundColor = "yellow"
  star2.style.backgroundColor = "yellow"
  star3.style.backgroundColor = "yellow"
  star4.style.backgroundColor = "yellow"
  star5.style.backgroundColor = "yellow"
});
