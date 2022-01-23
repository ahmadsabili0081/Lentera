var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints :{
		570:{
			slidesPerView : 1,
		},
		768:{
			slidesPerView : 2,
		},
		1024:{
			slidesPerView : 3,
		},
		1200: {
			slidesPerView : 3,
		}
	}
	
});
// counter banner
document.addEventListener("DOMContentLoaded", () => {
	function counter(id,start,end,duration){
		let obj = document.getElementById(id),
		current = start,
		range = end - start,
		increment = end > start ? 1 : -1,
		step = Math.abs(Math.floor(duration / range)),
		timer = setInterval( () => {
			current += increment;
			obj.textContent = current;
			if(current == end){
				clearInterval(timer);
			}
		}, step);
	}
	counter("count1",0,90,4000);
	counter("count2",0,100,4000);
	counter("count3",0,120,4000);	
});

// header sticky
let btnScroll = document.querySelector('.btn');
window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', scrollY > 0);
	btnScroll.classList.toggle('scroll',scrollY > 0);
})
// btn scrollTop
btnScroll.addEventListener('click', BtnClick);
function BtnClick (e){
	e.preventDefault();
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// hamburger nav
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
	const nav = document.querySelector('nav');
	nav.classList.toggle('navShow');
	hamburger.classList.toggle('hamburgerRotate');
})

let btnAction = document.getElementsByClassName('btnAction');
for(let i = 0; i < btnAction.length; i++){
	btnAction[i].addEventListener('click', BtnActionClick);
}
function BtnActionClick (e){
	e.preventDefault();
	window.alert("Maaf, Tombol ini masih belum berfungsi");
}

// active navCick
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
	el.addEventListener('click', () => {
		ul.querySelector('.active').classList.remove('active');

		el.classList.add('active');
	});
});