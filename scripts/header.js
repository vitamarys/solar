
let prevScroll
let lastShowPos

$(window).on("scroll", function() {
  const scrolled = $(window).scrollTop()

  if (scrolled > 100 && scrolled > prevScroll) {
    $(".header").fadeOut(300)
    lastShowPos = scrolled
  } else if (scrolled <= Math.max(lastShowPos - 100, 0)) {
    $(".header").fadeIn(300)
  }
  prevScroll = scrolled
})