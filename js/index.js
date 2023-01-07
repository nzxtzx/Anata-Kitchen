/* swipers */

const swiper = new Swiper('.hero-swiper', {

    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.hero-button__next',
      prevEl: '.hero-button__prev',
    },
  
  });

  const videoSwiper = new Swiper('.video-swiper', {

    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,

  });  

  /* swipers */


  /* scroll */

  const onScroll = () => {
        
    const nav = document.querySelector('.nav');

    const scroll = document.documentElement.scrollTop
  
    if (scroll > 0) {
      nav.classList.add("is-active");


    } else {
      nav.classList.remove("is-active");
    }
  }
  
  window.addEventListener('scroll', onScroll);

 /* scroll */

 /* works cards swipers */

 const firstCardSwiper= new Swiper('.first-card-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.card-button__next',
    prevEl: '.card-button__prev',
  },

});

const secondCardSwiper= new Swiper('.card-second-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.card-button__next',
    prevEl: '.card-button__prev',
  },

});

const thirdCardSwiper= new Swiper('.card-third-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.card-button__next',
    prevEl: '.card-button__prev',
  },

});

const fourthCardSwiper= new Swiper('.card-fourth-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.card-button__next',
    prevEl: '.card-button__prev',
  },

});