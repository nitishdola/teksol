$.holdReady(!0),$("body").imagesLoaded({background:".background-holder"},function(){$("#preloader").removeClass("loading"),$.holdReady(!1),setTimeout(function(){$("#preloader").remove()},800)}),$(window).on("load",function(){$("*[data-inertia]").each(function(){$(this).inertia()})});