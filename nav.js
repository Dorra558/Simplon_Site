//Get the button
var mybutton = document.getElementById("myBtn");
var mynav = document.getElementById("mainnav")
    // When the user scrolls down 350px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
        mynav.classList.add("bg-light");
    } else {
        mybutton.style.display = "none";
        mynav.classList.remove("bg-light");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// compteur de pourcentage avec scroll
// var counted = 0;
// $(window).scroll(function() {

//     var oTop = $('#counter').offset().top - window.innerHeight;
//     if (counted == 0 && $(window).scrollTop() > oTop) {
//         $('.count').each(function() {
//             var $this = $(this),
//                 countTo = $this.attr('data-count');
//             $({
//                 countNum: $this.text()
//             }).animate({
//                     countNum: countTo
//                 },

//                 {

//                     duration: 2000,
//                     easing: 'swing',
//                     step: function() {
//                         $this.text(Math.floor(this.countNum));
//                     },
//                     complete: function() {
//                         $this.text(this.countNum);
//                         //alert('finished');
//                     }

//                 });
//         });
//         counted = 1;
//     }

// });



// if i need tow counters
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textContent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);
//     }

//     counter("count2", 0, 47, 4000);
//     counter("count3", 0, 47, 3500);
// });

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count2", 0, 47, 4000);
    counter("count3", 0, 47, 3500);

});