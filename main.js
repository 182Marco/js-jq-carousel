$(document).ready(function () {
  // REFERENZE
  // referenze img
  img = $(`main .img-wrap img`);
  imgFirst = $(`main .img-wrap img.first`);
  imgLast = $(`main .img-wrap img.last`);
  // referenze cerchi
  circle = $(`main .circle-wrap .circle`);
  circleFirst = $(`main .circle-wrap .circle.first`);
  circleLast = $(`main .circle-wrap .circle.last`);
  // referenze freccie
  arrowLeft = $(`main .fa-chevron-left`);
  arrowRight = $(`main .fa-chevron-right`);

  // EVENTI
  // attibazione dello slider on click
  arrowLeft.click(() => changePic(`left`));
  arrowRight.click(() => changePic(`right`));
  /*   attivazione dello slider 
dalle freccie di tastiera */
  $(document).keydown((e) => {
    if (e.keyCode == 37) {
      changePic(`left`);
    } else if (e.keyCode == 39) {
      changePic(`right`);
    }
  });

  // FUNZIONE UTILITY
  function changePic(direction) {
    var nowActiveImg = $(`img.active`);
    var nowActiveCircle = $(`.circle.active`);
    //reset degli active
    reset();
    // spostare gli active
    // se freccia dx
    if (direction == `left`) {
      // se siamo first andare a last
      if (nowActiveImg.hasClass(`first`)) {
        imgLast.addClass(`active slide-left`);
        circleLast.addClass(`active slide-left`);
      } else {
        //  gli altri casi verso sx
        nowActiveImg.prev().addClass(`active slide-left`);
        nowActiveCircle.prev().addClass(`active slide-left`);
      }
      // se freccia sx
    } else {
      // se siamo a last andare a first
      if (nowActiveImg.hasClass(`last`)) {
        imgFirst.addClass(`active slide-right`);
        circleFirst.addClass(`active slide-right`);
      } else {
        //  gli altri casi verso dx
        nowActiveImg.next().addClass(`active slide-right`);
        nowActiveCircle.next().addClass(`active slide-right`);
      }
    }
  }

  //   attivare lo slide con click su cerchi
  circle.click(function () {
    reset();
    // individuazione indice al click
    var index = index(this);
    // attribuzione delle classi
    $(img[index]).addClass(`active`);
    $(circle[index]).addClass(`active`);
  });
});

function reset() {
  img.removeClass(`active slide-left slide-right`);
  circle.removeClass(`active`);
}
