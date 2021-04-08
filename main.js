$(document).ready(function () {
  // referenze img
  img = $(`main .img-wrap .img`);
  imgFirst = $(`main .img-wrap .img.first`);
  imgLast = $(`main .img-wrap .img.last`);
  // referenze cerchi
  circle = $(`main .circle-wrap .circle`);
  circleFirst = $(`main .circle-wrap .circle.first`);
  circleLast = $(`main .circle-wrap .circle.last`);
  // referenze freccie
  arrowLeft = $(`main .fa-chevron-left`);
  arrowRight = $(`main .fa-chevron-right`);

  arrowLeft.click(() => changePic(`left`));
  arrowRight.click(() => changePic(`right`));

  $(document).keydown((e) => {
    if (e.keyCode == 37) {
      changePic(`left`);
    } else if (e.keyCode == 39) {
      changePic(`right`);
    }
  });

  // FUNZIONE UTILITY
  function changePic(direction) {
    var nowActiveImg = $(`.img.active`);
    var nowActiveCircle = $(`.circle.active`);
    //reset degli active
    nowActiveImg.removeClass(`active`);
    nowActiveCircle.removeClass(`active`);
    // spostare gli active
    if (direction == `left`) {
      // se siamo first andare a last
      if (nowActiveImg.hasClass(`first`)) {
        imgLast.addClass(`active`);
        circleLast.addClass(`active`);
      } else {
        //  gli altri casi verso sx
        nowActiveImg.prev().addClass(`active`);
        nowActiveCircle.prev().addClass(`active`);
      }
    } else {
      // se siamo a last andare a first
      if (nowActiveImg.hasClass(`last`)) {
        imgFirst.addClass(`active`);
        circleFirst.addClass(`active`);
      } else {
        //  gli altri casi verso dx
        nowActiveImg.next().addClass(`active`);
        nowActiveCircle.next().addClass(`active`);
      }
    }
  }
});
