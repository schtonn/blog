'use strict';
window.$ && window.$.Velocity && (window.Velocity = window.$.Velocity), NexT.motion = {}, NexT.motion.integrator = {
    queue: [],
    cursor: -1,
    init: function () {
        return this.queue = [], this.cursor = -1, this;
    },
    add: function (t) {
        return this.queue.push(t), this;
    },
    next: function () {
        this.cursor++;
        var t = this.queue[this.cursor];
        'function' == typeof t && t(NexT.motion.integrator);
    },
    bootstrap: function () {
        this.next();
    }
}, NexT.motion.middleWares = {
    logo: function (t) {
        var e = [], o = document.querySelector('.brand'), n = document.querySelector('.custom-logo-image'), i = document.querySelector('.site-title'), r = document.querySelector('.site-subtitle'), c = document.querySelector('.logo-line-before i'), u = document.querySelector('.logo-line-after i');
        function s(t, e) {
            return {
                e: t,
                p: { translateX: e },
                o: {
                    duration: 500,
                    sequenceQueue: !1
                }
            };
        }
        function l() {
            e.push({
                e: n,
                p: {
                    opacity: 1,
                    top: 0
                },
                o: { duration: 200 }
            });
        }
        o && e.push({
            e: o,
            p: { opacity: 1 },
            o: { duration: 200 }
        }), 'Mist' === CONFIG.scheme && c && u && e.push(s(c, '100%'), s(u, '-100%')), 'Muse' === CONFIG.scheme && n && l(), i && e.push({
            e: i,
            p: {
                opacity: 1,
                top: 0
            },
            o: { duration: 200 }
        }), r && e.push({
            e: r,
            p: {
                opacity: 1,
                top: 0
            },
            o: { duration: 200 }
        }), 'Pisces' !== CONFIG.scheme && 'Gemini' !== CONFIG.scheme || !n || l(), 0 < e.length ? (e[e.length - 1].o.complete = function () {
            t.next();
        }, Velocity.RunSequence(e)) : t.next(), CONFIG.motion.async && t.next();
    },
    menu: function (t) {
        Velocity(document.querySelectorAll('.menu-item'), 'transition.slideDownIn', {
            display: null,
            duration: 200,
            complete: function () {
                t.next();
            }
        }), CONFIG.motion.async && t.next();
    },
    subMenu: function (t) {
        var e = document.querySelectorAll('.sub-menu .menu-item');
        0 < e.length && e.forEach(function (t) {
            t.style.opacity = 1;
        }), t.next();
    },
    postList: function (t) {
        var e = document.querySelectorAll('.post-block, .pagination, .comments'), o = CONFIG.motion.transition.post_block, n = document.querySelectorAll('.post-header'), i = CONFIG.motion.transition.post_header, r = document.querySelectorAll('.post-body'), c = CONFIG.motion.transition.post_body, u = document.querySelectorAll('.collection-header'), s = CONFIG.motion.transition.coll_header;
        if (0 < e.length) {
            var l = window.postMotionOptions || {
                stagger: 100,
                drag: !0,
                complete: function () {
                    t.next();
                }
            };
            CONFIG.motion.transition.post_block && Velocity(e, 'transition.' + o, l), CONFIG.motion.transition.post_header && Velocity(n, 'transition.' + i, l), CONFIG.motion.transition.post_body && Velocity(r, 'transition.' + c, l), CONFIG.motion.transition.coll_header && Velocity(u, 'transition.' + s, l);
        }
        'Pisces' !== CONFIG.scheme && 'Gemini' !== CONFIG.scheme || t.next();
    },
    sidebar: function (t) {
        var e = document.querySelector('.sidebar-inner'), o = CONFIG.motion.transition.sidebar;
        !o || 'Pisces' !== CONFIG.scheme && 'Gemini' !== CONFIG.scheme || Velocity(e, 'transition.' + o, {
            display: null,
            duration: 200,
            complete: function () {
                e.style.transform = 'initial';
            }
        }), t.next();
    }
};