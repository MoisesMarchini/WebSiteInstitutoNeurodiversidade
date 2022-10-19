const participations_Carousel = document.querySelector('.participations-carousel .carousel');
const participations_CarouselItems = document.querySelectorAll('.participations-carousel .carousel .carousel-item');
let current_participations_Carousel_width;
let current_participations_CarouselItem_Id;
let current_participations_CarouselItem_Width;
const daily_CarouselItems = document.querySelectorAll('.daily-carousel .carousel .carousel-item');
let current_daily_CarouselItem_Id;


participations_CarouselItems.forEach((item, index) => {
    if (item.classList.contains('active'))
        current_participations_CarouselItem_Id = index;
    item.addEventListener('click', () => {
        ActiveItem(item, index, participations_CarouselItems, participations_Carousel);
    })

    if (index == 0)
        ActiveItem(item, index, participations_CarouselItems, participations_Carousel);
})

function ActiveItem(item, index, carouselItems, carouselParent) {

    current_participations_Carousel_width = participations_Carousel.clientWidth;
    current_participations_CarouselItem_Width = item.clientWidth;

    let gap = 5;
    let padding = (current_participations_Carousel_width - current_participations_CarouselItem_Width) / 2;

    participations_Carousel.style.padding = '0px ' + padding + 'px';

    current_participations_CarouselItem_Id = index;
    carouselItems.forEach((item, index1) => {
        item.classList.remove('active');
        if (index1 == index)
            item.classList.add('active');
    })


    carouselParent.scrollLeft = (current_participations_CarouselItem_Width + padding * (index - 1) + gap) * index;
}