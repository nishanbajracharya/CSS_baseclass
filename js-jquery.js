$(function() {

  function filterPath(string) {
    return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }

  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {

    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
      && (location.hostname == this.hostname || !this.hostname)
      && this.hash.replace(/#/,'') ) {

      var $target = $(this.hash), target = this.hash;
    if (target) {

      var targetOffset = $target.offset().top;
      $(this).click(function(event) {

        event.preventDefault();

        $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {

          location.hash = target;

        });
      });
    }
  }

});

  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
      $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
  $('img.img-box').load(function(){
    $(this).each(function(){
      var ratio=$(this).width()/$(this).height();
      $(this).width(500);
      $(this).height(500/ratio);
    });
  });
  $('.main-popup').click(function(){
    $(this).css("display","none");
    $('.popup-body').css("display","none");
  });
  
});
function popupfn(){
  $('.main-popup').css("display","block");
  $('.popup-body').css("display","block");
}
