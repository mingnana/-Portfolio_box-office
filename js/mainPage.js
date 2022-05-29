$(document).ready(function(){
    rankClick()
    stageClick()
})

function rankClick(){
    function prevMove(){
        $("#rank_ul").prepend($("#rank_ul li:last")).css({"marginLeft":"-224px"});
    }
    prevMove();
    $(".prevRank").click(function(){
        $("#rank_ul").animate({"marginLeft":"+=224px"},300,"swing",function(){
            prevMove();
        });
    })
    $(".nextRank").click(function(){
        $("#rank_ul").animate({"marginLeft":"-=224px"},300,"swing",function(){
            $("#rank_ul").append($("#rank_ul li:eq(0)")).css({"marginLeft":"-224px"});
        });
    });
}
function stageClick(){
    function prevMove(){
        $("#stage_ul").prepend($("#stage_ul li:last")).css({"marginLeft":"-314px"});
    }
    prevMove();
    $(".prevStage").click(function(){
        $("#stage_ul").animate({"marginLeft":"+=314px"},300,"swing",function(){
            prevMove();
        });
    })
    $(".nextStage").click(function(){
        $("#stage_ul").animate({"marginLeft":"-=314px"},300,"swing",function(){
            $("#stage_ul").append($("#stage_ul li:eq(0)")).css({"marginLeft":"-314px"});
        });
    });
}

// 메인 슬라이드
var slides = document.querySelectorAll('.vis_inn li');
var totalSlides = slides.length; // item의 갯수
var sliderWidth = window.innerWidth; // container의 width
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'px';

showSlides()

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slider.style.left = -(sliderWidth * slideIndex) + 'px';
        slider.style.transition = `${1}s ease-out`;
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 3000);
}

// 모바일버전 footer
$(".showinfo").hide()
var more = true;
function showgnb(){
   if(more == true){
      $(".showinfo").show().animate({"height":"40px"})
      more = false;
   }else{
    $(".showinfo").hide().animate({"height":"0"})
      more = true;
   }
}