
    $(window).scroll(function(e){ 
      var $el = $('.fixedElement'); 
      var isPositionFixed = ($el.css('position') == 'fixed');
      if ($(this).scrollTop() > 200 && !isPositionFixed){ 
        $el.css({'position': 'fixed', 'top': '80px'}); 
      }
      if ($(this).scrollTop() < 200 && isPositionFixed){
        $el.css({'position': 'relative', 'top': '80px'}); 
      } 
    });

    $(function () {
      var header = $(".p-5-desktop");
      $(window).scroll(function () {
          var scroll = $(window).scrollTop();

          if (scroll >= 200) {
              header.removeClass('p-5-desktop')
                      .addClass("classfinal");
          } 
          if (scroll <= 200) {
              header.removeClass("classfinal")
                      .addClass('p-5-desktop');
          }
      });
  });
   