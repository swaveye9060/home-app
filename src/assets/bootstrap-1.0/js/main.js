;
console.log('源代码唯一下载地址: https://www.17sucai.com ');
if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('mb') < 0) {}
};
(function (a) {
  a(window).on("scroll", function () {
    if (a(this).scrollTop() > 350) {
      a(".header-sticky").addClass("sticky")
    } else {
      a(".header-sticky").removeClass("sticky")
    }
  });
  a(".off-canvas-btn").on("click", function () {
    a("body").addClass("fix");
    a(".off-canvas-wrapper").addClass("open")
  });
  a(".btn-close-off-canvas,.off-canvas-overlay").on("click", function () {
    a("body").removeClass("fix");
    a(".off-canvas-wrapper").removeClass("open")
  });
  a(".off-canvas-menu-btn").on("click", function () {
    a("body").addClass("fix");
    a(".off-canvas-menu-wrapper").addClass("open")
  });
  a(".btn-close-off-canvas,.off-canvas-overlay").on("click", function () {
    a("body").removeClass("fix");
    a(".off-canvas-menu-wrapper").removeClass("open")
  });
  a(".off-canvas-search-btn").on("click", function () {
    a("body").addClass("fix");
    a(".off-canvas-search-wrapper").addClass("open")
  });
  a(".btn-close-off-canvas,.off-canvas-overlay").on("click", function () {
    a("body").removeClass("fix");
    a(".off-canvas-search-wrapper").removeClass("open")
  });
  var b = a(".mobile-menu"),
    c = b.find(".dropdown");
  c.parent().prepend('<span class="menu-expand"><i></i></span>');
  c.slideUp();
  b.on("click", "li a, li .menu-expand", function (i) {
    var h = a(this);
    if ((h.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && (h.attr("href") === "#" || h.hasClass("menu-expand"))) {
      i.preventDefault();
      if (h.siblings("ul:visible").length) {
        h.parent("li").removeClass("active");
        h.siblings("ul").slideUp()
      } else {
        h.parent("li").addClass("active");
        h.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
        h.closest("li").siblings("li").find("ul:visible").slideUp();
        h.siblings("ul").slideDown()
      }
    }
  });
  var d = new Swiper(".intro11-slider", {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".home1-slider-next",
      prevEl: ".home1-slider-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
  });
  var d = new Swiper(".single-slide-1", {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "slide",
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    }
  });
  a(".bg-video").vide("assets/video/bg-home", {
    playbackRate: 0.8,
    muted: true,
    loop: true,
    autoplay: true,
    position: "50% 50%",
    posterType: "jpg",
    resizing: true,
    className: "video-area"
  });
  Splitting();
  var f = Splitting({
    target: ".text-slider, .video-title"
  });
  a("#sticky-sidebar").theiaStickySidebar({
    additionalMarginTop: 150
  });
  AOS.init({
    duration: 1200,
    disable: false,
    offset: 30,
    once: true,
    easing: "ease",
  });
  a(".counter").counterUp({
    delay: 10,
    time: 1000
  });
  a(".video-popup").magnificPopup({
    type: "iframe"
  });
  a(window).on("load", function () {
    a(".messonry-button").on("click", "button", function () {
      var i = a(this).attr("data-filter");
      a(this).siblings(".is-checked").removeClass("is-checked");
      a(this).addClass("is-checked");
      h.isotope({
        filter: i
      })
    });
    var h = a(".mesonry-list").isotope({
      percentPosition: true,
      transitionDuration: "0.7s",
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".resizer",
      }
    })
  });
  a("#mc-form").ajaxChimp({
    language: "en",
    callback: e,
    url: "http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
  });

  function e(h) {
    if (h.result === "success") {
      a(".mailchimp-success").html("" + h.msg).fadeIn(900);
      a(".mailchimp-error").fadeOut(400)
    } else {
      if (h.result === "error") {
        a(".mailchimp-error").html("" + h.msg).fadeIn(900)
      }
    }
  }
  a(function () {
    var h = a("#contact-form");
    var i = a(".form-messege");
    a(h).submit(function (j) {
      j.preventDefault();
      var k = a(h).serialize();
      a.ajax({
        type: "POST",
        url: a(h).attr("action"),
        data: k
      }).done(function (l) {
        a(i).removeClass("error");
        a(i).addClass("success");
        a(i).text(l);
        a("#contact-form input,#contact-form textarea").val("")
      }).fail(function (l) {
        a(i).removeClass("success");
        a(i).addClass("error");
        if (l.responseText !== "") {
          a(i).text(l.responseText)
        } else {
          a(i).text("Oops! An error occured and your message could not be sent.")
        }
      })
    })
  });

  function g() {
    var i = a("#scroll-top"),
      h = 0,
      j = a(window);
    j.on("scroll", function () {
      var k = a(this).scrollTop();
      if (k > h) {
        i.removeClass("show")
      } else {
        if (j.scrollTop() > 200) {
          i.addClass("show")
        } else {
          i.removeClass("show")
        }
      }
      h = k
    });
    i.on("click", function (k) {
      a("html, body").animate({
        scrollTop: 0
      }, 600);
      k.preventDefault()
    })
  }
  g();
  a(window).on("load", function () {
    a("#preloader").delay(250).fadeOut("slow");
    a("body").delay(250).css({
      overflow: "visible"
    })
  })
})(jQuery);;
console.log('源代码唯一下载地址: https://www.17sucai.com ');
if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('mb') < 0) {}
};