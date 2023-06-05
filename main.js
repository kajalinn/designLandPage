
function showOrHideDiv() {
    let cookie = document.getElementsByClassName("cookie-notice");
    for (let i=0;i<cookie.length;i+=1){
        if (cookie[i].style.display === "none") {
            cookie[i].style.display = "block";
        } else {
            cookie[i].style.display = "none";
        }
    }
}







$(document).ready(function() {
    $(".js-menu-icon").on("click", function() {
        $(this).toggleClass("fa-times fa-bars");
        $(".menu .container").removeClass("container--is-visible");
        $(".menu li").removeClass("is-selected");
        $(".js-navbar").toggleClass("navbar--is-visible");
    });

    $(".menu li").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass("is-selected");

        var $currentContainer = $(this).find(".container");
        $currentContainer.toggleClass("container--is-visible");

        $(".menu .container")
            .not($currentContainer)
            .removeClass("container--is-visible");
        $(".menu li").not($this).removeClass("is-selected");
    });
});





$('#germany').click(function () {
    $('#germany').addClass('active');
    $('#france, #unitedKingdom').removeClass('active');
    $( "#lang2, #lang3" ).toggle( "slow", function() {
    });
    $('.select-lang').attr('style', 'height:30px');
})
$('#france').click(function () {
    $('#france').addClass('active');
    $('#germany, #unitedKingdom').removeClass('active');
    $( "#lang1, #lang3" ).toggle( "slow", function() {
    });
    $('.select-lang').attr('style', 'height:30px');
})
$('#unitedKingdom').click(function () {
    $('#unitedKingdom').addClass('active');
    $('#germany, #france').removeClass('active');
    $( "#lang1, #lang2" ).toggle( "slow", function() {
    });
    $('.select-lang').attr('style', 'height:30px');
})



