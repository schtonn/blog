'use strict';
!function (e) {
    [].forEach.call(e.getElementsByClassName('spoiler'), function (e) {
        e.getElementsByClassName('spoiler-title')[0].onclick = function () {
            e.classList.toggle('collapsed'), e.classList.toggle('expanded');
        };
    });
}(document);