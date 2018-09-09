$(document).ready(function () {

    $('input[placeholder], textarea[placeholder]').placeholder();


});//end ready

function sendMail() {
    link = "mailto:info@simplex-software.ru";
    window.top.location.href = link;
}

//Plugin placeholder
(function (b, f, i) {
    function l() {
        b(this).find(c).each(j)
    }

    function m(a) {
        for (var a = a.attributes, b = {}, c = /^jQuery\d+/, e = 0; e < a.length; e++) if (a[e].specified && !c.test(a[e].name)) b[a[e].name] = a[e].value;
        return b
    }

    function j() {
        var a = b(this), d;
        a.is(":password") || (a.data("password") ? (d = a.next().show().focus(), b("label[for=" + a.attr("id") + "]").attr("for", d.attr("id")), a.remove()) : a.realVal() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder")))
    }

    function k() {
        var a = b(this), d, c;
        placeholder = a.attr("placeholder");
        b.trim(a.val()).length > 0 || (a.is(":password") ? (c = a.attr("id") + "-clone", d = b("<input/>").attr(b.extend(m(this), {
            type: "text",
            value: placeholder,
            "data-password": 1,
            id: c
        })).addClass("placeholder"), a.before(d).hide(), b("label[for=" + a.attr("id") + "]").attr("for", c)) : (a.val(placeholder), a.addClass("placeholder")))
    }

    var g = "placeholder" in f.createElement("input"), h = "placeholder" in f.createElement("textarea"),
        c = ":input[placeholder]";
    b.placeholder = {input: g, textarea: h};
    !i && g && h ? b.fn.placeholder = function () {
    } : (!i && g &&
    !h && (c = "textarea[placeholder]"), b.fn.realVal = b.fn.val, b.fn.val = function () {
        var a = b(this), d;
        if (arguments.length > 0) return a.realVal.apply(this, arguments);
        d = a.realVal();
        a = a.attr("placeholder");
        return d == a ? "" : d
    }, b.fn.placeholder = function () {
        this.filter(c).each(k);
        return this
    }, b(function (a) {
        var b = a(f);
        b.on("submit", "form", l);
        b.on("focus", c, j);
        b.on("blur", c, k);
        a(c).placeholder()
    }))
})(jQuery, document, window.debug);

//Main menu active

$(document).ready(function () {


    $('.navbar-nav li').each(function () {
        var menuData = $(this).attr('data-menu'),
            pageData = $('body').attr('data-menu');

        if (menuData === pageData) {
            $(this).addClass('active');
        }
    });

    $('.page-title').wrapInner('<span></span>');

});

// Масштабирование интерфейса после загрузки
$(document).ready(function () {
    $('#wrapper').css('zoom', '0.86');
});

// Переключение языка
$(document).ready(function () {
    if (localStorage.getItem('currentLang') == null) {
        localStorage.setItem('currentLang', 'ru');
    }
    var pageLang = $('html').attr('lang');
    if (pageLang !== localStorage.getItem('currentLang')) {
        if (localStorage.getItem('currentLang') === 'ru') {
            document.location.href = '/';
        } else if (localStorage.getItem('currentLang') === 'en') {
            document.location.href = '/index_en.html';
        }
    }

    $('.lang-set').on('click', function () {
        localStorage.setItem('currentLang', $(this).attr('data-lang'));
        if (localStorage.getItem('currentLang') === 'ru') {
            document.location.href = '/';
        } else if (localStorage.getItem('currentLang') === 'en') {
            document.location.href = '/index_en.html';
        }
    })
});



$('a:not([href^="http"])').on('click', function (event) {
   if (localStorage.getItem('currentLang') === 'en') {
       event.preventDefault();
       var target = $(this).attr('href');
       var strArr = target.split('.html');
       if (strArr[0] === '/') {
           strArr[0] = 'index';
       }
       var newTarget = strArr[0] + '_en.html';
       if (strArr[1]) {
           newTarget += strArr[1];
       }
       document.location.href = newTarget;
   }
});