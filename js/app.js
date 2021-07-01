((d,w) => {
	"use strict";

	/*Menu mobile*/
	const showMenu = (navToggle, navMenu) => {
		const burger = d.querySelector(navToggle), nav = d.querySelector(navMenu);
		if (burger && nav) {
			burger.addEventListener('click',() => {
				burger.classList.toggle('toggle');
				nav.classList.toggle('show-menu');
			});
		}	
	};
	showMenu('.nav__toggle','.nav__menu');

	/*Menu mobile hide*/
	const navLink = d.querySelectorAll('.nav__link');
	function linkAction (e) {
		const navMenu = d.querySelector('.nav__menu');
			  navMenu.classList.remove('show-menu');
		d.querySelector('.nav__toggle').classList.toggle('toggle');
		navLink.forEach(e => e.classList.remove('active-link'));
		//active
		e.target.classList.add('active-link');	
	}
	navLink.forEach((e) => e.addEventListener('click', linkAction));

	/*Menu background*/
	function scrollHeader () {
		const header = d.querySelector('header');
		if (w.scrollY >= 200) {
			header.classList.add('scroll-header');
		}else{
			header.classList.remove('scroll-header');
		}
	}
	w.addEventListener('scroll', scrollHeader);

	/*Scroll top button*/
	const btnscrollTop = d.querySelector('.scrolltop');
	function scrollTop () {
		if (w.scrollY >= 500) {
			btnscrollTop.classList.add('show-scroll');
		}else{
			btnscrollTop.classList.remove('show-scroll');
		}
	}
	w.addEventListener('scroll', scrollTop);
	btnscrollTop.onclick = () => w.scrollTo({top:0,behavor:'smooth'});

	/*Filter MixItUp*/
	const mixer = mixitup('.portfolio__container',{
		selectors:{
			target:'.portfolio__content'
		},
		animation:{
			duration: 400
		}
	});
	const linkPortfolio = d.querySelectorAll('.portfolio__item');
	function activeLink () {
		if (linkPortfolio) {
			linkPortfolio.forEach((e) => e.classList.remove('active-portfolio'));
			this.classList.add('active-portfolio');
		}
	}
	linkPortfolio.forEach((e) => e.addEventListener('click', activeLink));

})(document , window);