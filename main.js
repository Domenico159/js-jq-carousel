



$ (document).ready( function() {


    // Reference
    var nextArrow = $('.slider-wrapper .next') ;

    var prevArrow = $('.slider-wrapper .prev') ;

    var allCircle = $('.nav i.fa-circle') ;



    // Move for arrow

    // Move next item
    nextArrow.click( function() {

        moveSlide('next');

    } );

    // Move previus item
    prevArrow.click( function() {

        moveSlide('prev');

    } );


    // Move for circle

    allCircle.click( function() {

        // console.log( $(this) )

        var thisCircle = $(this).find('i');

        var numCircle = $(".nav i:nth-child(n)" );

        // console.log(numCircle[0]);
        //  console.log($( ".nav i:nth-child(n)" ));
        // moveSlideCircle(thisCircle);

        


       

    } );

    // End document ready
} );




/***************************************************
 * Functions
 * *************************************************/

function moveSlide(direction){


    // console.log(direction);

    // Reference arrow

    var firstActiveArrow = $('.slider-wrapper .images img.first');

    var lastActiveArrow = $('.slider-wrapper .images img.last');

    var activeArrow = $('.slider-wrapper .images img.active') ;



    // Reference circle

    var firstActiveCircle = $('.nav i.first');

    var lastActiveCircle = $('.nav i.last');

    var activeCircle = $('.nav i.active') ;

    // Reset
    activeArrow.removeClass('active');
    activeCircle.removeClass('active');

    // Move slide

    // Move next

   if(direction == 'next'){

    if(activeArrow.hasClass('last')){

        firstActiveArrow.addClass('active');

    }else if(direction == 'next'){
        activeArrow.next('img').addClass('active');
    }
   }


    // Move prev
    if(direction == 'prev'){

        if(activeArrow.hasClass('first')){
    
            lastActiveArrow.addClass('active');
    
        }else if(direction == 'prev'){
            activeArrow.prev('img').addClass('active');
        }
       }


        // Move circle

    // Move next

   if(direction == 'next'){

    if(activeCircle.hasClass('last')){

        firstActiveCircle.addClass('active');

    }else if(direction == 'next'){
        activeCircle.next('i').addClass('active');
    }
   }


    // Move prev
    if(direction == 'prev'){

        if(activeCircle.hasClass('first')){
    
            lastActiveCircle.addClass('active');
    
        }else if(direction == 'prev'){
            activeCircle.prev('i').addClass('active');
        }
       }

};



    //  Move for circle

    function moveSlideCircle(circle){


        console.log(circle);

    }