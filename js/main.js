$(window).on('load', function () {
    $('.loader').fadeOut(1000);
    new WOW().init();
    $('body').addClass('o-auto');
});

$(document).ready(function () {
    "use strict";
    $(".close-open-nav").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".nav_bar").addClass("active");
        } else {
            $(".nav_bar").removeClass("active");
        }
    });

    $("body").on("click", function () {
        $(".close-open-nav.active").click();
    });

    $(".nav_bar a , .filter_boxss a").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).addClass("active");
                /*$(this).parent().parent('.sub-menu').slideDown("");*/
            }
        }
    );
});


$(document).ready(function () {
    "use strict";

    $(".all_box_media").children().first().removeClass("col-lg-4 col-md-6").addClass("col-12").find(".box-media-s").addClass("box-media-l");

    $(".cartflibe_pay").height($(".cartflibe_pay").children().height());

    $(window).resize(function () {
        if ($(".chose_anyPay button").first().hasClass("active")) {
            $(".cartflibe_pay").height($("." + $(".chose_anyPay button.active").attr("data-value")).height());
        } else {
            $(".cartflibe_pay").height($("." + $(".chose_anyPay button.active").attr("data-value")).height());
        }
    });

    $(".chose_anyPay button").each(function () {
        $(this).on("click", function () {
            $(".cartflibe_pay").height($("." + $(this).attr("data-value")).height());
            $(this).addClass("active").siblings().removeClass("active");
            if ($(".chose_anyPay button").first().hasClass("active")) {
                $(".cartflibe_pay").removeClass("rotate");
            } else {
                $(".cartflibe_pay").addClass("rotate");
            }
        });
    });

    $(".Payment-type .form-control").change(function () {
        $(this).next("img").fadeIn().attr({
            "src": "imgs/" + $(this).val() + ".png"
        });
    });

});


$(document).ready(function () {
    "use strict";
    $(document).ready(function () {
        // // ADD IMAGE
        $("#image").change(function (event) {
            $(this).parents('.images1-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><label class="close"><i class="fa fa-times-circle" aria-hidden="true"></i></label></div>');
        });
        // REMOVE IMAGE
        $('.images1-upload-block').on('click', '.close', function () {
            $(this).parents('.uploaded-block').remove();
        });
    });
});


$(document).ready(function () {
    "use strict";
    $(".icon_share").on("click", function (e) {
        e.stopPropagation();
        $(".social_share").removeClass("active");
        $(this).next(".social_share").toggleClass("active");
    });

    $("body").on("click", function () {
        $(".social_share").removeClass("active");
    });
});



$(document).ready(function () {
    "use strict";
    $("body").find(".filter_boxss").parents("html , body").animate({
        scrollTop: $(".filter_boxss").offset().top - ($("header").outerHeight(true) + 20)
    }, 500);
});



$(document).ready(function () {
    "use strict";

    $(".counter .qty-val").prop({
        disabled: true
    });

    $(".qty-up").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).prev(".qty-val").val());
        if (theNumber >= 0) {
            $(this).prev(".qty-val").val(theNumber + 1);
            $(this).parent(".counter").parents(".d-flex").find(".salary_box").find("span").text((theNumber + 1) * $(this).prev(".qty-val").attr("data-value"));
        }
    });

    $(".qty-down").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).next(".qty-val").val());
        if (theNumber > 0) {
            $(this).next(".qty-val").val(theNumber - 1);
            $(this).parent(".counter").parents(".d-flex").find(".salary_box").find("span").text((theNumber - 1) * $(this).next(".qty-val").attr("data-value"));
        }
    });

    $(".counter .qty-val").keyup(function () {
        $(this).parent(".counter").parents(".d-flex").find(".salary_box").find("span").text($(this).val() * $(this).attr("data-value"));
    });

});

$(document).ready(function () {
    "use strict";
    $(".box-details input[type='checkbox']").on("click", function () {
        if ($(this).is(":checked")) {
            $(".Data-details").slideDown(500);
        } else {
            $(".Data-details").slideUp(500);
        }
    });

    $(".Choose-donation input").change(function () {
        $(this).parents(".Choose-donation").next().find(".salary_box").val($(this).val());
    });

});


$(document).ready(function () {
    "use strict";
    $(".hide_salary input").on("click", function () {
        if ($(this).is(":checked")) {
            $(".salary_card").hide();
            $(this).next("span").text("إظهار الدفع");
        } else {
            $(".salary_card").show();
            $(this).next("span").text("إخفاء المبلغ");
        }
    });

    $(".show_phone input").on("click", function () {
        if ($(this).is(":checked")) {
            $(".phone_card").show();
            $(this).next("span").text("عدم");
        } else {
            $(".phone_card").hide();
            $(this).next("span").text("");
        }
    });


    var card_info = $(".stips_two .card_info").clone();
    $(".stips_three .card_info").html(card_info.html());

    $(".Choose-the-card input").change(function () {
        $(".ships_card_img").attr({
            src: $(this).attr("data-img")
        });
        var card_info = $(".stips_two .card_info").clone();
        $(".stips_three .card_info").html(card_info.html());
    });

    $(".all_item_stips a:not('.To_pay')").on("click", function (e) {
        e.preventDefault();
        $("." + $(this).attr("data-link")).show().siblings().hide();
        $(".swap_" + $(this).attr("data-link")).addClass("active").nextAll().removeClass("active");
    });

});