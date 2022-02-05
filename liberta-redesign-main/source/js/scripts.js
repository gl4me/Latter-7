$(function () {

  $('.search-form__toggle').on('click', function () {

    $('.header__phone').toggleClass('d-xl-block');
    $('.search-form__field').toggleClass('show');
    $('.search-form__field.show').focus();

    $('.search-form__field').on('focusout', function () {
      $('.search-form__field').removeClass('show');
      setTimeout(function () {
        $('.header__phone').addClass('d-xl-block');
      }, 400);
      if ($(window).width() < 576) {
        setTimeout(function () {
          $('.header__logo--m').removeClass('d-none');
        }, 400);
      }
    });

    if ($(window).width() < 576) {
      $('.header__logo--m').toggleClass('d-none');
    }

  });

  $('.main-nav__list-item.has-children').each(function () {
    $(this).hover(function () {
      $('.header').prepend("<div class='page-overlay'></div>");
    }, function () {
      $('.header').find('.page-overlay').remove();
    });
  });

  $(".mobile-menu-toggle").on("click", function () {
    $(".mobile-nav").toggleClass("mobile-nav--opened");
    $(this).toggleClass("mobile-menu-toggle--opened");
    if ($(".header--main").length) {
      if ($(window).scrollTop() < 90) {
        $(".header").toggleClass("in-top");
      }
    }
  });

  $('.mobile-menu-toggle').on('click', function () {
    let popup_info_up = $('.popup-info-up');
    let that = $(this);

    if (that.hasClass('mobile-menu-toggle--opened')) {
      if (popup_info_up.hasClass('d-none') == false) {
        popup_info_up.addClass('d-none');
      }
    } else {
      if (popup_info_up.hasClass('d-none')) {
        popup_info_up.removeClass('d-none');
      }
    }
  });

  $('.mobile-nav__submenu-toggle').on('click', function (evt) {
    evt.preventDefault();
    $(this)
      .parent(".mobile-nav__list-item").toggleClass("mobile-nav__list-item--opened").children(".mobile-nav__submenu").slideToggle()
      .parent(".mobile-nav__list-item").siblings('.mobile-nav__list-item').removeClass('mobile-nav__list-item--opened').children('.mobile-nav__submenu').slideUp();
  });

  $('.main-carousel__video-close, .main-carousel__video-cancel').on('click', function (evt) {
    evt.preventDefault();
    $('.main-carousel__video-wrap').attr('style', 'display: none !important');
  });

  if ($(window).width() >= 1280) {
    var $paraElm = $('.section-parallax');
    parallaxThis($paraElm);

    $(window).on('scroll', function () {
      parallaxThis($paraElm);
    });

    function parallaxThis($elm) {
      $elm.each(function () {
        var $p = $(this), $pos = $p.offset().top,
          $bg = $('.section-parallax__bg', $p),
          $pr = ($pos - $(window).scrollTop()) / ($(window).height() + $p.height()) * 100,
          $shift = Math.round($bg.height() / 130 * $pr);
        $bg.css({ marginTop: -$shift });
      });
    }
  }

  $('.posts-slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  $('.contacts__form .btn-toggle').on('click', function () {
    $('.contacts__form').toggleClass('expanded');
    $(this).toggleClass('active');
  });

  $('.shops .btn-toggle').on('click', function () {
    $('.shops__list').toggleClass('expanded');
    $(this).toggleClass('active');
  });

  if ($(".shops-slider").length) {
    $('.shops-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  }

  if ($(".oko-slider").length) {
    $('.oko-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  }

  // SMART LANDING SCROLL
  if ($(".smart-category").length) {
    $(".chose-mirror").on("click", function (evt) {
      evt.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  }

  //SMART TXT ANIMATION
  if ($(".smart-category").length) {
    var target = $('.high-tech .reveal');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem + 300 && !$(".high-tech h2").hasClass("printed") && $(window).width() >= '768') {
        $(".high-tech h2").addClass("printing");
        setTimeout(function () {
          $(".high-tech h2").removeClass("printing");
          $(".high-tech h2").addClass("printed");

        }, 550);
        setTimeout(function () {
          $(".high-tech p").addClass("txtFadeIn");
        }, 550);
      }
    });
    $(document).ready(function () {
      var target = $('.combination .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".combination h2").hasClass("printed") && $(window).width() >= '768') {
          $(".combination h2").addClass("printing");
          setTimeout(function () {
            $(".combination h2").removeClass("printing");
            $(".combination h2").addClass("printed");

          }, 550);
          setTimeout(function () {
            $(".combination p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.health .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".health h2").hasClass("printed") && $(window).width() >= '768') {
          $(".health h2").addClass("printing");
          setTimeout(function () {
            $(".health h2").removeClass("printing");
            $(".health h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".health p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.resist .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".resist h2").hasClass("printed") && $(window).width() >= '768') {
          $(".resist h2").addClass("printing");
          setTimeout(function () {
            $(".resist h2").removeClass("printing");
            $(".resist h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".resist p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.media .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".media h2").hasClass("printed") && $(window).width() >= '768') {
          $(".media h2").addClass("printing");
          setTimeout(function () {
            $(".media h2").removeClass("printing");
            $(".media h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".media p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.google-play .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".google-play h2").hasClass("printed") && $(window).width() >= '768') {
          $(".google-play h2").addClass("printing");
          setTimeout(function () {
            $(".google-play h2").removeClass("printing");
            $(".google-play h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".google-play p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });

  }
  //SMART POPOVER
  $(function () {
    if ($(".smart-category").length) {
      $('[data-toggle="smart-popover"]').popover({
        trigger: 'click',
        container: ".smart-category",
        html: true
      });
    }
  });

  function getWindowWidth() {
    var windowWidth = $(window).width();
    return windowWidth;
  }

  // STICKY FILTER
  if ($(".filter").length) {
    $(window).scroll(function () {
      var filterTopOffsetDynamic = document.querySelector(".filter").getBoundingClientRect().top;
      if (filterTopOffsetDynamic <= 90 && getWindowWidth() >= 768) {
        $('.filter').addClass('filter--top');
      } else {
        $('.filter').removeClass('filter--top');
      }
    });
  }

  $('.filter__params .dropdown-item').on('click', function (evt) {
    evt.stopPropagation();
  });


  if ($(window).width() < 1000) {
    $(".filter__search-field").focus(function () {
      $(".filter__search").addClass("active-search")
      $(".filter__params").addClass("d-none")
    });
    $(".filter__search-field").focusout(function () {
      $(".filter__search").removeClass("active-search")
      $(".filter__params").removeClass("d-none")
    });
  }


  var seoTxtH = $(".seo-txt").height();
  $(".seo-txt").height(235);
  if (seoTxtH > 235) {
    $(".seo-txt__expand").removeClass("d-none");
    $(".seo-txt__collapse").addClass("d-none");
  }
  $(".seo-txt__expand").on("click", function () {
    $(".seo-txt").animate({ height: seoTxtH }, 300);
    $(".seo-txt__expand").addClass("d-none");
    $(".seo-txt__collapse").removeClass("d-none");
    $(".seo-txt").removeClass("collapsed");
  });
  $(".seo-txt__collapse").on("click", function () {
    $(".seo-txt").animate({ height: 235 }, 300);
    $(".seo-txt__expand").removeClass("d-none");
    $(".seo-txt__collapse").addClass("d-none");
    $(".seo-txt").addClass("collapsed");
  });

});

// QUANTITY OF GOODS (- number +)
$(document).ready(function () {
  $('.counter').on('click', 'button', function (e) {
    var $btn = $(this);
    var $input = $btn.siblings('.text-input');
    var val = $input.data('value');

    if ($btn.hasClass('number-max')) {
      $input.data('value', ++val);
    } else if (val !== 0) {
      $input.data('value', --val);
    }

    $input.val(val + ' шт.');
  });
});


// Sticky cart sidebar
$(function () {
  var $sideBar = $('#final-price');

  if (!$sideBar.length) return null;

  var sideBarTopPos;
  var timer;
  var calcPos;

  if ($(window).width() > 1279) {
    $(window).on('scroll', scrollHandler);
  }
  $(window).on('resize', function () {
    if ($(window).width() > 1279) {
      $(window).off('scroll', scrollHandler).on('scroll', scrollHandler);
    } else {
      $(window).off('scroll', scrollHandler);
      $($sideBar).css('top', 0)
    }
  });

  function scrollHandler() {
    sideBarTopPos = $sideBar[0].getBoundingClientRect().top;
    calcPos = Math.ceil($sideBar.css('top').slice(0, -2)) - sideBarTopPos;

    if (timer) clearTimeout(timer)
    timeTopPos(calcPos);
  }

  function timeTopPos(pos) {
    timer = setTimeout(function () {
      $sideBar.css('top', pos > 0 ? pos : 0 + 'px');
    }, 50);
  }
});


// TABS DELIVERY
$('input[name="customRadioInline"]').click(function () {
  $(this).tab('show');
});


// FIXED-CONTENT => (TIME) => GIF-MAN
$(document).ready(function () {
  setTimeout(function () {
    $('.gif-start').addClass("d-none");
    $('.gif-end').addClass("d-block");
  }, 4000);
});


//Attached product price mobile
$(function () {
  var $prodPreviewWrap = $('.js-product-preview-wrap');

  if (!$prodPreviewWrap.length) return null;

  var windowW = $(window).width();

  if (windowW < 768) {
    var $prodPreview = $('.js-product-preview');
    var $prodInfo = $('.js-product-info');
    var sizeWrap = $('.js-product-size-wrap')[0];
    var inputW = $('.js-input-product-width')[0] || $('.js-select-size')[0];
    var inputH = $('.js-input-product-height')[0];
    var $infoSize = $('.js-info-size');
    var prodPreviewWrapH = $prodPreviewWrap.height();
    var sizeBotPos;
    var isSizeVisible = false;

    $prodPreviewWrap.height(prodPreviewWrapH);

    $('header').on('header:attached', function () {
      $prodPreview.addClass('fixed');
    }).on('header:detached', function () {
      $prodPreview.removeClass('fixed');
    });

    $(window).on('scroll', function () {
      sizeBotPos = sizeWrap.getBoundingClientRect().bottom;

      if (sizeBotPos - prodPreviewWrapH <= 0 && !isSizeVisible) {
        $prodInfo.addClass('show-size');
        if (inputH) {
          $infoSize.empty().text(inputW.value + ' x ' + inputH.value + ' мм');
        } else {
          $infoSize.empty().text($(inputW).select2('data')[0].text);
        }

        isSizeVisible = true;
      } else if (sizeBotPos - prodPreviewWrapH > 0 && isSizeVisible) {
        $prodInfo.removeClass('show-size');
        isSizeVisible = false;
      }
    });

    $(window).on('resize', function () {
      if (windowW !== $(window).width()) {
        $prodPreview.removeClass('fixed');
        $prodPreviewWrap.height('auto');
        prodPreviewWrapH = $prodPreviewWrap.height();
        $prodPreviewWrap.height(prodPreviewWrapH);
      }
    });
  }
});

//Show product top banner at desktop
$(function () {
  var $popUp = $('#product-pop-up');

  if (!$popUp.length) return null;

  if ($(window).width() > 991) {
    var headerH = $('header').height();
    var anchor = $('.js-pop-up-anchor')[0];
    var anchorTopPos;
    var isVisiblePopUp = false;

    $(window).on('scroll', function () {
      anchorTopPos = anchor.getBoundingClientRect().top;

      if (anchorTopPos - headerH <= 0 && !isVisiblePopUp) {
        $popUp.fadeIn(200);
        isVisiblePopUp = true;
      } else if (anchorTopPos - headerH > 0 && isVisiblePopUp) {
        $popUp.fadeOut(200);
        isVisiblePopUp = false;
      }
    });
  }
});

//Attached header
$(function () {
  var $headerNav = $('.header__nav-wrapper');

  if (!$headerNav.length) return null;

  var isAttached = false;
  var $header = $('header');
  var $headerTopH = $('.header__top-wrapper').height();
  var $headerNavH = $headerNav.height();
  var isSlimHeader = !$headerNavH;

  $(window).on('scroll', function () {
    var headerPosTop = $header[0].getBoundingClientRect().top;

    if (headerPosTop + (isSlimHeader ? 0 : $headerNavH + $headerTopH) <= 0) {
      attachNav();
    } else if (headerPosTop + $headerTopH > 0) {
      $('.header').removeClass('in-top');
      if (isAttached) {
        $header.trigger('header:detached');
        isAttached = false;
      }
    }
  });

  if ($(window).scrollTop() >= (isSlimHeader ? $headerTopH : $headerNavH + $headerTopH)) {
    attachNav()
  }

  function attachNav() {
    $('.header').addClass('in-top');
    if (!isAttached) {
      if (!isSlimHeader) {

        setTimeout(function () {
          $header.trigger('header:attached', [$headerTopH]);
        }, 300)
      } else {
        $header.trigger('header:attached', [$headerTopH]);
      }
      isAttached = true;
    }
  }
});

//Product page animate tab scroll
$(function () {
  var productTabs = $('.js-product-tabs');

  if (!productTabs.length) return null;

  var $navLink = productTabs.find('.nav-link');

  if ($(window).width() < 992) {
    $navLink.on('click', function () {
      $("html, body").animate({
        scrollTop: $('.tab-content').offset().top -
          $('.js-product-preview-wrap').height() -
          $('header').height()
      });
    });
  }
});


//Metering modal steps
$(function () {
  var $metering = $('#metering');

  if (!$metering.length) return null;

  var $btnNext = $('#metering-next');
  var $btnPrev = $('#metering-prev');
  var $btnSubmit = $('#metering-submit');
  var $stepEl = $('#metering-step');
  var step = 1;
  var city;

  $('#inputMeasurementCity').on('change', function () {
    city = $(this).val();
    var $city = $('#metering-' + city);

    if ($city) {
      $city.show();
      $city.siblings().hide();
      $btnNext.prop('disabled', false);
      $('#inputMounting').val(0).trigger('change');
    }
  });

  $('#inputMounting').on('change', function () {
    var $cityMounting = $('#mounting-' + city);

    if ($(this).val() === 'yes') {
      $cityMounting.show();
    } else {
      $cityMounting.hide();
      $cityMounting.siblings().hide();
    }
  });

  $btnNext.on('click', function () {
    if (step < 3) {
      step++;
    }
  });
  $btnPrev.on('click', function () {
    if (step > 0) {
      step--;
    }
  });

  $metering.on('hidden.bs.collapse', function () {
    $stepEl.text(step);
    $btnNext.attr({
      'data-target': '#metering-step-' + (step + 1),
      'aria-controls': '#metering-step-' + step
    });
    $btnPrev.attr({
      'data-target': '#metering-step-' + (step - 1),
      'aria-controls': '#metering-step-' + (step - 2)
    });

    if (step > 1) {
      $btnPrev.fadeIn(100);
    } else {
      $btnPrev.fadeOut(100);
    }
    if (step === 3) {
      $btnSubmit.show()
      $btnNext.hide();
    } else {
      $btnSubmit.hide()
      $btnNext.show();
    }
  });
});


$(function () {
  $('[data-toggle="popover"]').popover()
})

// Product page photo gallery
$(function () {
  var instance = $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "close"
    ],
    thumbs: {
      autoStart: true,
    }
  });

  $('#launchGallery').on('click', function () {
    instance.first().trigger('click');
  });
});

//Promo code
$(function () {
  var $promo = $('#promo-box');
  var $formPromo = $('#form-promo');
  var $fullPrice = $('#full-price');
  var $btnActivate = $('#activate-code');
  var $btnAnother = $('#another-code');
  var $btnSubmit = $('#submit-code')
  var $codeInput = $promo.find('#input-promo');

  $btnActivate.on('click', function () {
    $formPromo.show();
    $btnActivate.hide();
    $codeInput.focus();
  });
  $btnSubmit.on('click', function () {
    $formPromo.hide();
    $btnAnother.show();
    $fullPrice.show();
  })
  $btnAnother.on('click', function () {
    $fullPrice.hide();
    $formPromo.show();
    $codeInput.focus();
  });
});



$(function () {
  $('.js-file-input').on('change', function () {
    var $fileName = $('.js-file-name');
    var $fileBtn = $('.js-file-btn');
    var files = $(this).prop('files');
    var $fileServiceName = $('.js-unloading');
    var filesNames;

    if (files.length) {
      filesNames = Object.keys(files).map(function (key) {
        return files[key].name;
      });


      /////////////////////////////////////////////////////////////////////////    
      //service-center
      $fileServiceName.html(filesNames.map(function (value) {
        return ('<div class="js-unloading-file d-flex align-items-center">' +
          (('<span class="js-unloading-item">' + value + '</span>')
            + '<a class="js-unloading-delete"></a>') + '</div>');
      }));

      $('.js-unloading-delete').on('click', function () {
        if (confirm('Вы уверены, что хотите удалить файлы?')) {
          $(this).closest('.js-unloading-file').remove();
        }
      });
      /////////////////////////////////////////////////////////////////////////  

      //product-system
      $fileName.text(filesNames.join('\r\n'));

      if ($fileBtn.length) {
        $fileBtn.addClass('btn-file-valid');
      }
    } else {
      $fileName.text($fileName.data('placeholder'));
      if ($fileBtn.length) {
        $fileBtn.removeClass('btn-file-valid');
      }
    }
  });
});