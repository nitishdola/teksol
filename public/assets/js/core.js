var isMobile = !1;

if (
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (isMobile = !0),
    $(document).ready(function () {
        if ($("#znav-container").length) {
            $("#znav-container").offset().top;
            ($this = $("#znav-container")),
                $("#znav-container #navbarNavDropdown ul.navbar-nav .dropdown").each(function () {
                    ($this = $(this)), $this.parent("li").addClass("has-dropdown");
                }),
                $("#znav-container #navbarNavDropdown ul.navbar-nav .megamenu").each(function () {
                    ($this = $(this)), $this.parent("li").addClass("has-megamenu");
                }),
                $(".has-dropdown > a, .has-megamenu > a").on("click", function () {
                    ($this = $(this).parent()),
                        $this.each(function () {
                            $this.toggleClass("z-active");
                        });
                }),
                $.fn.menuAim &&
                    $("ul.dropdown").menuAim({
                        activate: function (e) {
                            $(e).children("ul.dropdown").addClass("opened");
                        },
                        deactivate: function (e) {
                            $(e).children("ul.dropdown").removeClass("opened");
                        },
                        exitMenu: function () {
                            return !0;
                        },
                    });
        }
    }),
    $(document).ready(function () {
        if ($(".hamburger").length) {
            var t = $(".hamburger");
            t.on("click", function (e) {
                t.toggleClass("is-active"), $(".is-active").is(":animated") && $(".navbar-toggler").off("click", function () {});
            });
        }
    }),
    $(document).ready(function (t) {
        t("a[href*=\\#]:not([href=\\#])").click(function () {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = t(this.hash);
                if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return t("html,body").animate({ scrollTop: e.offset().top }, 400, "swing", function () {}), !1;
            }
        });
    }),
    $(document).ready(function () {
        if ($(".tabs, .navs").length) {
            function o(e, t, n) {
                var a = n.position().left,
                    i = t.children(".nav-bar").outerWidth() - (a + n.outerWidth());
                e.css({ left: a, right: i });
            }
            $(".tabs, .navs").each(function () {
                var a = $(this),
                    e = a.children(".nav-bar").children(".nav-bar-item.active");
                a.children(".nav-bar").append('<div class="indicator"></div>');
                var i = a.children(".nav-bar").children(".indicator");
                e = a.children(".nav-bar").children(".nav-bar-item.active");
                ($preIndex = e.index()),
                    o(i, a, e),
                    a
                        .children(".nav-bar")
                        .children(".nav-bar-item")
                        .click(function () {
                            var e = $(this),
                                t = e.index(),
                                n = a.children(".tab-contents").children().eq(t);
                            e.siblings().removeClass("active"),
                                e.addClass("active"),
                                n.siblings().removeClass("active"),
                                n.addClass("active"),
                                o(i, a, e),
                                t - $preIndex <= 0 ? $(".indicator").addClass("transition-reverse") : $(".indicator").removeClass("transition-reverse"),
                                ($preIndex = t);
                        }),
                    $(window).on("resize", function () {
                        o(i, a, a.children(".nav-bar").children(".nav-bar-item.active"));
                    });
            });
        }
    }),
    $(document).ready(function () {
        if (!$("[class^=gsap-]").length && $(".parallax").length) new Rellax(".parallax", { center: !1 });
    }),
    $(document).ready(function () {
        $(".youtube-background").length &&
            $(".youtube-background").each(function () {
                var e = $(this);
                $(this).YTPlayer({ containment: e.parent(".background-holder"), showControls: !1 });
            });
    }),
    $(document).ready(function () {
        
        if ($(".flexslider").length) {
            function t(e) {
                0 != $(e).find("*[data-zanim-timeline]").length && $(e).find("*[data-zanim-timeline].flex-active-slide").zanimation(zanimationDefaults).play();
            }
            $(".flexslider").each(function () {
                var e = $(this);
                e.flexslider(
                    $.extend(e.data("zflexslider") || {}, {
                        start: function (e) {
                            e.removeClass("loading"), t(e);
                        },
                        before: function (e) {
                            var t;
                            (t = e), 0 != $(t).find("*[data-zanim-timeline]").length && $(t).find("*[data-zanim-timeline]").zanimation(zanimationDefaults).kill();
                        },
                        after: function (e) {
                            t(e);
                        },
                    })
                );
            });
        }
    }),
    $(document).ready(function () {
        if ($(".owl-carousel").length) {
            function n(e) {
                0 != e.find("*[data-zanim-timeline]").length && e.find(".owl-item.active > *[data-zanim-timeline]").zanimation(zanimationDefaults).play();
            }
            $(".owl-carousel").each(function () {
                var e = $(this),
                    t = e.data("options") || {};
                t.navText || (t.navText = ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>']),
                    e.owlCarousel(
                        $.extend(t || {}, {
                            onInitialized: function (e) {
                                n($(e.target));
                            },
                            onTranslate: function (e) {
                                var t;
                                0 != (t = $(e.target)).find("*[data-zanim-timeline]").length && t.find("*[data-zanim-timeline]").zanimation(zanimationDefaults).kill();
                            },
                            onTranslated: function (e) {
                                n($(e.target));
                            },
                        })
                    );
            });
        }
    }),
    (function (e) {
        var t = e.querySelectorAll(".inputfile");
        Array.prototype.forEach.call(t, function (e) {
            var n = e.nextElementSibling,
                a = n.innerHTML;
            e.addEventListener("change", function (e) {
                var t = "";
                (t = this.files && 1 < this.files.length ? (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : e.target.value.split("\\").pop())
                    ? (n.querySelector("span").innerHTML = t)
                    : (n.innerHTML = a);
            }),
                e.addEventListener("focus", function () {
                    e.classList.add("has-focus");
                }),
                e.addEventListener("blur", function () {
                    e.classList.remove("has-focus");
                });
        });
    })(document, window),
    $(document).ready(function () {
        $(".inputfile").length &&
            $(".inputfile + label").prepend(
                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewbox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>'
            );
    }),
    document.createElement("svg").getAttributeNS)
) {
    var checkbxsCheckmark = Array.prototype.slice.call(document.querySelectorAll('.zinput.zcheckbox input[type="checkbox"]'));
    function createSVGEl(e) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        return (
            e ? (t.setAttributeNS(null, "viewBox", e.viewBox), t.setAttributeNS(null, "preserveAspectRatio", e.preserveAspectRatio)) : t.setAttributeNS(null, "viewBox", "0 0 100 100"),
            t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            t
        );
    }
    function controlCheckbox(e, t, n) {
        var a = createSVGEl(n);
        e.parentNode.appendChild(a),
            e.checked && draw(e, t),
            e.addEventListener("change", function () {
                e.checked ? draw(e, t) : reset(e);
            });
    }
    function draw(e, t) {
        var n,
            a,
            i = [],
            o = e.parentNode.querySelector("svg");
        (n = pathDefs.checkmark), (a = animDefs.checkmark), i.push(document.createElementNS("http://www.w3.org/2000/svg", "path"));
        for (var r = 0, l = i.length; r < l; ++r) {
            var s = i[r];
            o.appendChild(s), s.setAttributeNS(null, "d", n[r]);
            var c = s.getTotalLength();
            (s.style.strokeDasharray = c + " " + c),
                (s.style.strokeDashoffset = 0 === r ? Math.floor(c) - 1 : c),
                s.getBoundingClientRect(),
                (s.style.transition = s.style.WebkitTransition = s.style.MozTransition = "stroke-dashoffset " + a.speed + "s " + a.easing + " " + r * a.speed + "s"),
                (s.style.strokeDashoffset = "0");
        }
    }
    function reset(e) {
        Array.prototype.slice.call(e.parentNode.querySelectorAll("svg > path")).forEach(function (e) {
            e.parentNode.removeChild(e);
        });
    }
    (pathDefs = { checkmark: ["M16.7,62.2c4.3,5.7,21.8,27.9,21.8,27.9L87,16"] }),
        (animDefs = { checkmark: { speed: 0.2, easing: "ease-in-out" } }),
        checkbxsCheckmark.forEach(function (e, t) {
            controlCheckbox(e, "checkmark");
        });
}
$(document).ready(function () {
    
}),
    $(document).ready(function () {
        $(".ui.dropdown").length && $(".ui.dropdown").dropdown(), $(".ui.accordion").length && $(".ui.accordion").accordion({ exclusive: !1 });
    }),
    $(document).ready(function () {
        $("[data-lightbox]").length && lightbox.option({ resizeDuration: 400, wrapAround: !0, fadeDuration: 300, imageFadeDuration: 300 });
    }),
    $(document).ready(function () {
        if ($(".video-modal").length) {
            $("body").after(
                '<div id="videoModal" class="remodal remodal-video"> <button data-remodal-action="close" class="remodal-close"></button> <div class="embed-responsive embed-responsive-16by9"><div id="videoModalIframeWrapper"></div> </div></div>'
            );
            var o = $("#videoModal").remodal(),
                r = $("#videoModalIframeWrapper");
            $(".video-modal").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    var t = $(this),
                        n = t.attr("href").split("/"),
                        a = t.data("start"),
                        i = t.data("end");
                    console.log(n),
                        "www.youtube.com" == n[2]
                            ? r.html(
                                  '<iframe id="videoModalIframe" src="//www.youtube.com/embed/' +
                                      n[3].split("?v=")[1] +
                                      "?rel=0&amp;autoplay=1&amp;enablejsapi=0&amp;start=" +
                                      a +
                                      "&ampend=" +
                                      i +
                                      '" allowfullscreen="" frameborder="0" class="embed-responsive-item hide"></iframe>'
                              )
                            : "vimeo.com" == n[2] && r.html('<iframe id="videoModalIframe" src="https://player.vimeo.com/video/' + n[3] + '?autoplay=1&title=0&byline=0&portrait=0 ?autoplay=1&title=0&byline=0&portrait=0 hide"></iframe>'),
                        o.open();
                });
            }),
                $(document).on("closed", ".remodal", function (e) {
                    "videoModal" == $(this).attr("id") && r.html("");
                });
        }
    }),
    $(window).on("load", function () {
        $(".sortable").length &&
            $(".sortable").each(function () {
                var e = $(this),
                    t = e.find(".sortable-container"),
                    n = e.children(".dropdown").children(".menu");
                t.isotope({ itemSelector: ".sortable-item", masonry: { columnWidth: ".sortable-item" } }),
                    $(n).on("click", ".item", function () {
                        var e = $(this),
                            t = e.closest(".sortable").find(".sortable-container"),
                            n = e.attr("data-filter");
                        t.isotope({ filter: n });
                    });
            });
    }),
    $(document).ready(function () {
        $(".typed-text").length &&
            $(".typed-text").each(function () {
                var e = $(this);
                e.typed({ strings: e.data("typed-text"), typeSpeed: 100, loop: !0, backDelay: 1500 });
            });
    }),
    $(document).ready(function () {
        $(".palette").length &&
            $(".palette [class*='background-']").each(function () {
                var e;
                $(this).append(
                    '<span class="text-uppercase fs--1 mb-0">' +
                        ((e = (e = $(this).css("background-color")).match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === e.length
                            ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2)
                            : "") +
                        "</span>"
                );
            });
    });
