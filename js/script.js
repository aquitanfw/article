$('.articles-more-articles__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})


const slignSlides = () => {
  let slides = document.querySelectorAll('.article-main-item.slick-slide')
  let slidesWrap = document.querySelector('.slick-track')

  if (slides.length < 2) {
    slidesWrap.classList.add('align-slides')
  }

}
slignSlides()
