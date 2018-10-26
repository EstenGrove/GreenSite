////debounce to stagger the frequency that the event listener runs
//function debounce(func, wait = 20, immediate = true) {
//    var timeout;
//    return function() {
//        var context = this, args = arguments;
//        var later = function() {
//            timeout = null;
//            
//            if (!immediate) func.apply(context, args);
//        };
//        
//        var callNow = immediate && !timeout;
//        clearTimeout(timeout);
//        timeout = setTimeout(later, wait);
//        
//        if (callNow) func.apply(context, args);
//    };
//};
//
//
//
//
//
//
////Elements to get animated
//const aboutSlides = document.querySelector('.col-1');
//
////Function for animation call, and pass thru the 'e' for eventListener
//function checkSlide(e) {
//    aboutSlides.forEach(aboutSlide => {
//        const 
//    })
//    
//    console.log(e);
//}
//
//
//window.addEventListener('scroll', debounce(checkSlide, 100));