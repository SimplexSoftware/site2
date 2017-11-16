
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter23252275 = new Ya.Metrika({id:23252275,
                    webvisor:true,
                    clickmap:true,
                    accurateTrackBounce:true,
                    trackHash:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");


$('body').activity({
    'achieveTime':60
    ,'testPeriod':10
    ,useMultiMode: 1
    ,callBack: function (e) {
        ga('send', 'event', 'Activity', '60_sec');
        yaCounter23252275.reachGoal('60_sec');
    }
});
