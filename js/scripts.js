$(document).ready(function() {

  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top - 40
                  }, 1000);
                  return false;
              }
          }
      });
  });
  $(function() {
    window.sr = ScrollReveal({
      duration: 600,
      easing: 'cubic-bezier(.700,0,.300,1)',
      scale: 1,
      viewFactor: 0.3,
      reset: false,
    });
    sr.reveal('.intro');
    sr.reveal('.about');
    sr.reveal('.skills');
    sr.reveal('.projects');
    sr.reveal('.contact');
  });
  $(function() {
    const introHeight = document.querySelector('.intro').offsetHeight;
    const topButton = document.getElementById('to-top');
    const $topButton = $('#to-top');

    window.addEventListener('scroll', function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    }, false);

    topButton.addEventListener('click', function() {
      $('html, body').animate({scrollTop: 0}, 500);
    });
  });
  $(function() {
    var currentColor = '';
    function colorReplace(findHexColor, replaceWith, replaceWithHover) {
      // Convert rgb color strings to hex
      function rgb2hex(rgb) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      }
      // Select and run a map function on every tag
      $('*').map(function(i, el) {
        // Get the computed styles of each tag
        var styles = window.getComputedStyle(el);
        var hoverStyles = window.getComputedStyle(el, ':hover');
        // Go through each computed style and search for "color"
        Object.keys(styles).reduce(function(acc, k) {
          var name = styles[k];
          var value = styles.getPropertyValue(name);
          if (value !== null && name.indexOf("color") >= 0) {
            // Convert the rgb color to hex and compare with the target color
            if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
              // Replace the color on this found color attribute
              $(el).css(name, replaceWith);
            }
          }
        });
      });
    }
    // Call like this for each color attribute you want to replace
    // $("#randomColor").click(function() {
    //
    //   function rgb2hex(rgb) {
    //     if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    //     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    //     function hex(x) {
    //       return ("0" + parseInt(x).toString(16)).slice(-2);
    //     }
    //     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    //   }
    //
    //   var currentColor = '#3498db';
    //   var currentColor = rgb2hex($('.getColor').css("color"));
    //   var colorOptions = ['#e74c3c', '#1abc9c', '#8e44ad', '#3498db', '#e67e22', '#446CB3', '#336E7B', '#1E824C', '#FABE58', '#F5AB35', '#F2784B'];
    //
    //   var randomNum = Math.floor(Math.random() * (colorOptions.length-1));
    //   colorReplace(currentColor, colorOptions[randomNum]);
    // });
    });
});
