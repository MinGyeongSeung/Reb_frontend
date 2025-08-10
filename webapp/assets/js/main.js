        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const slideBox = document.querySelector('.main-banner-slide_box')
        const slide = document.querySelectorAll('.slide_item img')
        const slideLangth = slide.length
        let currentIndex = 0;

        const moveSlide = function(num){
            slideBox.style.transform = `translateX(${-num * 949}px)`;
            currentIndex = num;
        }

        prev.addEventListener('click', ()=>{
            if(currentIndex !== 0){
                moveSlide(currentIndex -1)
            }
        })

        next.addEventListener('click', ()=>{
            if(currentIndex !== slideLangth -1){
                moveSlide(currentIndex +1)
            }
        })