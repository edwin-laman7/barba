!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LocomotiveScroll = e()
}(this, (function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s)
        }
    }
    function i(t, i, s) {
        return i && e(t.prototype, i),
        s && e(t, s),
        t
    }
    function s(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
    function n(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            i.push.apply(i, s)
        }
        return i
    }
    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(i), !0).forEach((function(e) {
                s(t, e, i[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }
            ))
        }
        return t
    }
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && a(t, e)
    }
    function r(t) {
        return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function c(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c(t) : e
    }
    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, s = r(t);
            if (e) {
                var n = r(this).constructor;
                i = Reflect.construct(s, arguments, n)
            } else
                i = s.apply(this, arguments);
            return h(this, i)
        }
    }
    function u(t, e, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var s = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); )
                    ;
                return t
            }(t, e);
            if (s) {
                var n = Object.getOwnPropertyDescriptor(s, e);
                return n.get ? n.get.call(i) : n.value
            }
        }
        )(t, e, i || t)
    }
    function f(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                return;
            var i = []
              , s = !0
              , n = !1
              , o = void 0;
            try {
                for (var l, r = t[Symbol.iterator](); !(s = (l = r.next()).done) && (i.push(l.value),
                !e || i.length !== e); s = !0)
                    ;
            } catch (t) {
                n = !0,
                o = t
            } finally {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (n)
                        throw o
                }
            }
            return i
        }(t, e) || m(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(t) {
        return function(t) {
            if (Array.isArray(t))
                return v(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || m(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function m(t, e) {
        if (t) {
            if ("string" == typeof t)
                return v(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name),
            "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
        }
    }
    function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, s = new Array(e); i < e; i++)
            s[i] = t[i];
        return s
    }
    var y = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: .1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
        },
        smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    }
      , b = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
            Object.assign(this, y, i),
            this.smartphone = y.smartphone,
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            this.tablet = y.tablet,
            i.tablet && Object.assign(this.tablet, i.tablet),
            this.namespace = "locomotive",
            this.html = document.documentElement,
            this.windowHeight = window.innerHeight,
            this.windowWidth = window.innerWidth,
            this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            },
            this.els = {},
            this.currentElements = {},
            this.listeners = {},
            this.hasScrollTicking = !1,
            this.hasCallEventSet = !1,
            this.checkScroll = this.checkScroll.bind(this),
            this.checkResize = this.checkResize.bind(this),
            this.checkEvent = this.checkEvent.bind(this),
            this.instance = {
                scroll: {
                    x: 0,
                    y: 0
                },
                limit: {
                    x: this.html.offsetHeight,
                    y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            },
            this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
            this.isMobile && (this.direction = this[this.context].direction),
            "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
            this.getDirection && (this.instance.direction = null),
            this.getDirection && (this.instance.speed = 0),
            this.html.classList.add(this.initClass),
            window.addEventListener("resize", this.checkResize, !1)
        }
        return i(e, [{
            key: "init",
            value: function() {
                this.initEvents()
            }
        }, {
            key: "checkScroll",
            value: function() {
                this.dispatchScroll()
            }
        }, {
            key: "checkResize",
            value: function() {
                var t = this;
                this.resizeTick || (this.resizeTick = !0,
                requestAnimationFrame((function() {
                    t.resize(),
                    t.resizeTick = !1
                }
                )))
            }
        }, {
            key: "resize",
            value: function() {}
        }, {
            key: "checkContext",
            value: function() {
                if (this.reloadOnContextChange) {
                    this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                    this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                    var t = this.context;
                    if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                    t != this.context)
                        ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                }
            }
        }, {
            key: "initEvents",
            value: function() {
                var t = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                this.setScrollTo = this.setScrollTo.bind(this),
                this.scrollToEls.forEach((function(e) {
                    e.addEventListener("click", t.setScrollTo, !1)
                }
                ))
            }
        }, {
            key: "setScrollTo",
            value: function(t) {
                t.preventDefault(),
                this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                    offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                })
            }
        }, {
            key: "addElements",
            value: function() {}
        }, {
            key: "detectElements",
            value: function(t) {
                var e = this
                  , i = this.instance.scroll.y
                  , s = i + this.windowHeight
                  , n = this.instance.scroll.x
                  , o = n + this.windowWidth;
                Object.entries(this.els).forEach((function(l) {
                    var r = f(l, 2)
                      , a = r[0]
                      , c = r[1];
                    if (!c || c.inView && !t || ("horizontal" === e.direction ? o >= c.left && n < c.right && e.setInView(c, a) : s >= c.top && i < c.bottom && e.setInView(c, a)),
                    c && c.inView)
                        if ("horizontal" === e.direction) {
                            var h = c.right - c.left;
                            c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (h + e.windowWidth),
                            (o < c.left || n > c.right) && e.setOutOfView(c, a)
                        } else {
                            var d = c.bottom - c.top;
                            c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (d + e.windowHeight),
                            (s < c.top || i > c.bottom) && e.setOutOfView(c, a)
                        }
                }
                )),
                this.hasScrollTicking = !1
            }
        }, {
            key: "setInView",
            value: function(t, e) {
                this.els[e].inView = !0,
                t.el.classList.add(t.class),
                this.currentElements[e] = t,
                t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                t.repeat || (this.els[e].call = !1))
            }
        }, {
            key: "setOutOfView",
            value: function(t, e) {
                var i = this;
                this.els[e].inView = !1,
                Object.keys(this.currentElements).forEach((function(t) {
                    t === e && delete i.currentElements[t]
                }
                )),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class)
            }
        }, {
            key: "dispatchCall",
            value: function(t, e) {
                this.callWay = e,
                this.callValue = t.call.split(",").map((function(t) {
                    return t.trim()
                }
                )),
                this.callObj = t,
                1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i)
            }
        }, {
            key: "dispatchScroll",
            value: function() {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t)
            }
        }, {
            key: "setEvents",
            value: function(t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e),
                1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                "call" === t && (this.hasCallEventSet = !0,
                this.detectElements(!0))
            }
        }, {
            key: "unsetEvents",
            value: function(t, e) {
                if (this.listeners[t]) {
                    var i = this.listeners[t]
                      , s = i.indexOf(e);
                    s < 0 || (i.splice(s, 1),
                    0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
            }
        }, {
            key: "checkEvent",
            value: function(t) {
                var e = this
                  , i = t.type.replace(this.namespace, "")
                  , s = this.listeners[i];
                s && 0 !== s.length && s.forEach((function(t) {
                    switch (i) {
                    case "scroll":
                        return t(e.instance);
                    case "call":
                        return t(e.callValue, e.callWay, e.callObj);
                    default:
                        return t()
                    }
                }
                ))
            }
        }, {
            key: "startScroll",
            value: function() {}
        }, {
            key: "stopScroll",
            value: function() {}
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                }
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this;
                window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach((function(e) {
                    t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                }
                )),
                this.listeners = {},
                this.scrollToEls.forEach((function(e) {
                    e.removeEventListener("click", t.setScrollTo, !1)
                }
                )),
                this.html.classList.remove(this.initClass)
            }
        }]),
        e
    }()
      , g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function w(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var x = w((function(t, e) {
        t.exports = {
            polyfill: function() {
                var t = window
                  , e = document;
                if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                    var i, s = t.HTMLElement || t.Element, n = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy,
                        elementScroll: s.prototype.scroll || r,
                        scrollIntoView: s.prototype.scrollIntoView
                    }, o = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, l = (i = t.navigator.userAgent,
                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                    t.scroll = t.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }
                    ,
                    t.scrollBy = function() {
                        void 0 !== arguments[0] && (a(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                    }
                    ,
                    s.prototype.scroll = s.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0])
                            if (!0 !== a(arguments[0])) {
                                var t = arguments[0].left
                                  , e = arguments[0].top;
                                p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                            } else {
                                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                    throw new SyntaxError("Value could not be converted");
                                n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                            }
                    }
                    ,
                    s.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== a(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                    }
                    ,
                    s.prototype.scrollIntoView = function() {
                        if (!0 !== a(arguments[0])) {
                            var i = u(this)
                              , s = i.getBoundingClientRect()
                              , o = this.getBoundingClientRect();
                            i !== e.body ? (p.call(this, i, i.scrollLeft + o.left - s.left, i.scrollTop + o.top - s.top),
                            "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })) : t.scrollBy({
                                left: o.left,
                                top: o.top,
                                behavior: "smooth"
                            })
                        } else
                            n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }
                function r(t, e) {
                    this.scrollLeft = t,
                    this.scrollTop = e
                }
                function a(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                        return !0;
                    if ("object" == typeof t && "smooth" === t.behavior)
                        return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function c(t, e) {
                    return "Y" === e ? t.clientHeight + l < t.scrollHeight : "X" === e ? t.clientWidth + l < t.scrollWidth : void 0
                }
                function h(e, i) {
                    var s = t.getComputedStyle(e, null)["overflow" + i];
                    return "auto" === s || "scroll" === s
                }
                function d(t) {
                    var e = c(t, "Y") && h(t, "Y")
                      , i = c(t, "X") && h(t, "X");
                    return e || i
                }
                function u(t) {
                    for (; t !== e.body && !1 === d(t); )
                        t = t.parentNode || t.host;
                    return t
                }
                function f(e) {
                    var i, s, n, l, r = (o() - e.startTime) / 468;
                    l = r = r > 1 ? 1 : r,
                    i = .5 * (1 - Math.cos(Math.PI * l)),
                    s = e.startX + (e.x - e.startX) * i,
                    n = e.startY + (e.y - e.startY) * i,
                    e.method.call(e.scrollable, s, n),
                    s === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                }
                function p(i, s, l) {
                    var a, c, h, d, u = o();
                    i === e.body ? (a = t,
                    c = t.scrollX || t.pageXOffset,
                    h = t.scrollY || t.pageYOffset,
                    d = n.scroll) : (a = i,
                    c = i.scrollLeft,
                    h = i.scrollTop,
                    d = r),
                    f({
                        scrollable: a,
                        method: d,
                        startTime: u,
                        startX: c,
                        startY: h,
                        x: s,
                        y: l
                    })
                }
            }
        }
    }
    ))
      , S = (x.polyfill,
    function(e) {
        l(n, e);
        var s = d(n);
        function n() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t(this, n),
            (e = s.call(this, i)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0)),
            window.addEventListener("scroll", e.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = x,
            window.smoothscrollPolyfill.polyfill()),
            e
        }
        return i(n, [{
            key: "init",
            value: function() {
                this.instance.scroll.y = window.pageYOffset,
                this.addElements(),
                this.detectElements(),
                u(r(n.prototype), "init", this).call(this)
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this;
                u(r(n.prototype), "checkScroll", this).call(this),
                this.getDirection && this.addDirection(),
                this.getSpeed && (this.addSpeed(),
                this.speedTs = Date.now()),
                this.instance.scroll.y = window.pageYOffset,
                Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                    t.detectElements()
                }
                )),
                this.hasScrollTicking = !0))
            }
        }, {
            key: "addDirection",
            value: function() {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function() {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "resize",
            value: function() {
                Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                this.updateElements())
            }
        }, {
            key: "addElements",
            value: function() {
                var t = this;
                this.els = {},
                this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                    e.getBoundingClientRect();
                    var s, n, o, l = e.dataset[t.name + "Class"] || t.class, r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i, a = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, c = e.dataset[t.name + "Repeat"], h = e.dataset[t.name + "Call"], d = e.dataset[t.name + "Target"], u = (o = void 0 !== d ? document.querySelector("".concat(d)) : e).getBoundingClientRect();
                    s = u.top + t.instance.scroll.y,
                    n = u.left + t.instance.scroll.x;
                    var f = s + o.offsetHeight
                      , p = n + o.offsetWidth;
                    "#header" === d && console.log(s, f),
                    c = "false" != c && (null != c || t.repeat);
                    var m = t.getRelativeOffset(a)
                      , v = {
                        el: e,
                        targetEl: o,
                        id: r,
                        class: l,
                        top: s += m[0],
                        bottom: f -= m[1],
                        left: n,
                        right: p,
                        offset: a,
                        progress: 0,
                        repeat: c,
                        inView: !1,
                        call: h
                    };
                    t.els[r] = v,
                    e.classList.contains(l) && t.setInView(t.els[r], r)
                }
                ))
            }
        }, {
            key: "updateElements",
            value: function() {
                var t = this;
                Object.entries(this.els).forEach((function(e) {
                    var i = f(e, 2)
                      , s = i[0]
                      , n = i[1]
                      , o = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                      , l = o + n.targetEl.offsetHeight
                      , r = t.getRelativeOffset(n.offset);
                    t.els[s].top = o + r[0],
                    t.els[s].bottom = l - r[1]
                }
                )),
                this.hasScrollTicking = !1
            }
        }, {
            key: "getRelativeOffset",
            value: function(t) {
                var e = [0, 0];
                if (t)
                    for (var i = 0; i < t.length; i++)
                        "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                return e
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = parseInt(e.offset) || 0
                  , s = !!e.callback && e.callback;
                if ("string" == typeof t) {
                    if ("top" === t)
                        t = this.html;
                    else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                if (i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i,
                s) {
                    i = i.toFixed();
                    var n = function t() {
                        window.pageYOffset.toFixed() === i && (window.removeEventListener("scroll", t),
                        s())
                    };
                    window.addEventListener("scroll", n)
                }
                window.scrollTo({
                    top: i,
                    behavior: "smooth"
                })
            }
        }, {
            key: "update",
            value: function() {
                this.addElements(),
                this.detectElements()
            }
        }, {
            key: "destroy",
            value: function() {
                u(r(n.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1)
            }
        }]),
        n
    }(b))
      , k = Object.getOwnPropertySymbols
      , T = Object.prototype.hasOwnProperty
      , E = Object.prototype.propertyIsEnumerable;
    function A(t) {
        if (null == t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var O = function() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, i = 0; i < 10; i++)
                e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                return e[t]
            }
            )).join(""))
                return !1;
            var s = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                s[t] = t
            }
            )),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, s, n = A(t), o = 1; o < arguments.length; o++) {
            for (var l in i = Object(arguments[o]))
                T.call(i, l) && (n[l] = i[l]);
            if (k) {
                s = k(i);
                for (var r = 0; r < s.length; r++)
                    E.call(i, s[r]) && (n[s[r]] = i[s[r]])
            }
        }
        return n
    }
    ;
    function D() {}
    D.prototype = {
        on: function(t, e, i) {
            var s = this.e || (this.e = {});
            return (s[t] || (s[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var s = this;
            function n() {
                s.off(t, n),
                e.apply(i, arguments)
            }
            return n._ = e,
            this.on(t, n, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++)
                i[s].fn.apply(i[s].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , s = i[t]
              , n = [];
            if (s && e)
                for (var o = 0, l = s.length; o < l; o++)
                    s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
            return n.length ? i[t] = n : delete i[t],
            this
        }
    };
    var C = D
      , L = w((function(t, e) {
        (function() {
            (null !== e ? e : this).Lethargy = function() {
                function t(t, e, i, s) {
                    this.stability = null != t ? Math.abs(t) : 8,
                    this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                    this.tolerance = null != i ? 1 + Math.abs(i) : 1.1,
                    this.delay = null != s ? s : 150,
                    this.lastUpDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.lastDownDeltas = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this),
                    this.deltasTimestamp = function() {
                        var t, e, i;
                        for (i = [],
                        t = 1,
                        e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                            i.push(null);
                        return i
                    }
                    .call(this)
                }
                return t.prototype.check = function(t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    e > 0 ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1)) : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
                }
                ,
                t.prototype.isInertia = function(t) {
                    var e, i, s, n, o, l, r;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (s = e.slice(0, this.stability),
                    i = e.slice(this.stability, 2 * this.stability),
                    r = s.reduce((function(t, e) {
                        return t + e
                    }
                    )),
                    o = i.reduce((function(t, e) {
                        return t + e
                    }
                    )),
                    l = r / s.length,
                    n = o / i.length,
                    Math.abs(l) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                }
                ,
                t.prototype.showLastUpDeltas = function() {
                    return this.lastUpDeltas
                }
                ,
                t.prototype.showLastDownDeltas = function() {
                    return this.lastDownDeltas
                }
                ,
                t
            }()
        }
        ).call(g)
    }
    ))
      , M = {
        hasWheelEvent: "onwheel"in document,
        hasMouseWheelEvent: "onmousewheel"in document,
        hasTouch: "ontouchstart"in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown"in document,
        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
    }
      , j = Object.prototype.toString
      , _ = Object.prototype.hasOwnProperty;
    function B(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var W = L.Lethargy
      , H = "virtualscroll"
      , R = V
      , Y = 37
      , P = 38
      , I = 39
      , z = 40
      , X = 32;
    function V(t) {
        !function(t) {
            if (!t)
                return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var i in t)
                    _.call(t, i) && "function" == typeof t[i] && "[object Function]" == j.call(t[i]) && e.push(i);
            for (var s = 0; s < e.length; s++) {
                var n = e[s];
                t[n] = B(t[n], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
        this.el = window,
        t && t.el && (this.el = t.el,
        delete t.el),
        this.options = O({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, t),
        this.options.limitInertia && (this._lethargy = new W),
        this._emitter = new C,
        this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        },
        this.touchStartX = null,
        this.touchStartY = null,
        this.bodyTouchAction = null,
        void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    function F(t, e, i) {
        return (1 - i) * t + i * e
    }
    function q(t) {
        var e = {};
        if (window.getComputedStyle) {
            var i = getComputedStyle(t)
              , s = i.transform || i.webkitTransform || i.mozTransform
              , n = s.match(/^matrix3d\((.+)\)$/);
            return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = s.match(/^matrix\((.+)\)$/),
            e.x = n ? parseFloat(n[1].split(", ")[4]) : 0,
            e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
            e
        }
    }
    function K(t) {
        for (var e = []; t && t !== document; t = t.parentNode)
            e.push(t);
        return e
    }
    V.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX,
        e.y += e.deltaY,
        this._emitter.emit(H, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }
    ,
    V.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX,
            i.deltaY = t.wheelDeltaY || -1 * t.deltaY,
            M.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier,
            i.deltaY *= e.firefoxMultiplier),
            i.deltaX *= e.mouseMultiplier,
            i.deltaY *= e.mouseMultiplier,
            this._notify(t)
        }
    }
    ,
    V.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
            e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
            this._notify(t)
        }
    }
    ,
    V.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX,
        this.touchStartY = e.pageY
    }
    ,
    V.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event
          , s = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier,
        i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier,
        this.touchStartX = s.pageX,
        this.touchStartY = s.pageY,
        this._notify(t)
    }
    ,
    V.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
        case Y:
        case P:
            e.deltaY = this.options.keyStep;
            break;
        case I:
        case z:
            e.deltaY = -this.options.keyStep;
            break;
        case t.shiftKey:
            e.deltaY = i;
            break;
        case X:
            e.deltaY = -i;
            break;
        default:
            return
        }
        this._notify(t)
    }
    ,
    V.prototype._bind = function() {
        M.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        M.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
        M.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
        this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
        M.hasPointer && M.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
        document.body.style.msTouchAction = "none",
        this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        M.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }
    ,
    V.prototype._unbind = function() {
        M.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        M.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        M.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
        this.el.removeEventListener("touchmove", this._onTouchMove)),
        M.hasPointer && M.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
        this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
        this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        M.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }
    ,
    V.prototype.on = function(t, e) {
        this._emitter.on(H, t, e);
        var i = this._emitter.e;
        i && i[H] && 1 === i[H].length && this._bind()
    }
    ,
    V.prototype.off = function(t, e) {
        this._emitter.off(H, t, e);
        var i = this._emitter.e;
        (!i[H] || i[H].length <= 0) && this._unbind()
    }
    ,
    V.prototype.reset = function() {
        var t = this._event;
        t.x = 0,
        t.y = 0
    }
    ,
    V.prototype.destroy = function() {
        this._emitter.off(),
        this._unbind()
    }
    ;
    var N = "function" == typeof Float32Array;
    function U(t, e) {
        return 1 - 3 * e + 3 * t
    }
    function $(t, e) {
        return 3 * e - 6 * t
    }
    function G(t) {
        return 3 * t
    }
    function J(t, e, i) {
        return ((U(e, i) * t + $(e, i)) * t + G(e)) * t
    }
    function Q(t, e, i) {
        return 3 * U(e, i) * t * t + 2 * $(e, i) * t + G(e)
    }
    function Z(t) {
        return t
    }
    var tt = function(t, e, i, s) {
        if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && i === s)
            return Z;
        for (var n = N ? new Float32Array(11) : new Array(11), o = 0; o < 11; ++o)
            n[o] = J(.1 * o, t, i);
        function l(e) {
            for (var s = 0, o = 1; 10 !== o && n[o] <= e; ++o)
                s += .1;
            --o;
            var l = s + .1 * ((e - n[o]) / (n[o + 1] - n[o]))
              , r = Q(l, t, i);
            return r >= .001 ? function(t, e, i, s) {
                for (var n = 0; n < 4; ++n) {
                    var o = Q(e, i, s);
                    if (0 === o)
                        return e;
                    e -= (J(e, i, s) - t) / o
                }
                return e
            }(e, l, t, i) : 0 === r ? l : function(t, e, i, s, n) {
                var o, l, r = 0;
                do {
                    (o = J(l = e + (i - e) / 2, s, n) - t) > 0 ? i = l : e = l
                } while (Math.abs(o) > 1e-7 && ++r < 10);return l
            }(e, s, s + .1, t, i)
        }
        return function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : J(l(t), e, s)
        }
    }
      , et = 38
      , it = 40
      , st = 32
      , nt = 9
      , ot = 33
      , lt = 34
      , rt = 36
      , at = 35
      , ct = function(e) {
        l(n, e);
        var s = d(n);
        function n() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t(this, n),
            history.scrollRestoration && (history.scrollRestoration = "manual"),
            window.scrollTo(0, 0),
            (e = s.call(this, i)).inertia && (e.lerp = .1 * e.inertia),
            e.isScrolling = !1,
            e.isDraggingScrollbar = !1,
            e.isTicking = !1,
            e.hasScrollTicking = !1,
            e.parallaxElements = {},
            e.stop = !1,
            e.scrollbarContainer = i.scrollbarContainer,
            e.checkKey = e.checkKey.bind(c(e)),
            window.addEventListener("keydown", e.checkKey, !1),
            e
        }
        return i(n, [{
            key: "init",
            value: function() {
                var t = this;
                this.html.classList.add(this.smoothClass),
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                this.instance = o({
                    delta: {
                        x: 0,
                        y: 0
                    }
                }, this.instance),
                this.vs = new R({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: !1,
                    passive: !0
                }),
                this.vs.on((function(e) {
                    t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                        t.updateDelta(e),
                        t.isScrolling || t.startScrolling()
                    }
                    ))
                }
                )),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                u(r(n.prototype), "init", this).call(this)
            }
        }, {
            key: "setScrollLimit",
            value: function() {
                if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                "horizontal" === this.direction) {
                    for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                        t += e[i].offsetWidth;
                    this.instance.limit.x = t - this.windowWidth
                }
            }
        }, {
            key: "startScrolling",
            value: function() {
                this.startScrollTs = Date.now(),
                this.isScrolling = !0,
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass)
            }
        }, {
            key: "stopScrolling",
            value: function() {
                cancelAnimationFrame(this.checkScrollRaf),
                this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                this.scrollToRaf = null),
                this.isScrolling = !1,
                this.instance.scroll.y = Math.round(this.instance.scroll.y),
                this.html.classList.remove(this.scrollingClass)
            }
        }, {
            key: "checkKey",
            value: function(t) {
                var e = this;
                if (this.stop)
                    t.keyCode == nt && requestAnimationFrame((function() {
                        e.html.scrollTop = 0,
                        document.body.scrollTop = 0,
                        e.html.scrollLeft = 0,
                        document.body.scrollLeft = 0
                    }
                    ));
                else {
                    switch (t.keyCode) {
                    case nt:
                        requestAnimationFrame((function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0,
                            e.html.scrollLeft = 0,
                            document.body.scrollLeft = 0,
                            e.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            })
                        }
                        ));
                        break;
                    case et:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                    case it:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                    case ot:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case lt:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case rt:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case at:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case st:
                        document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                        break;
                    default:
                        return
                    }
                    this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                    this.stopScrolling(),
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }
        }, {
            key: "checkScroll",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                        return t.checkScroll()
                    }
                    )),
                    this.hasScrollTicking = !0),
                    this.updateScroll();
                    var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                      , s = Date.now() - this.startScrollTs;
                    if (!this.animatingScroll && s > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                    Object.entries(this.sections).forEach((function(e) {
                        var i = f(e, 2)
                          , s = (i[0],
                        i[1]);
                        s.persistent || t.instance.scroll[t.directionAxis] > s.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < s.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(s.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(s.el, 0, -t.instance.scroll[t.directionAxis]),
                        s.inView || (s.inView = !0,
                        s.el.style.opacity = 1,
                        s.el.style.pointerEvents = "all",
                        s.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : (s.inView && (s.inView = !1,
                        s.el.style.opacity = 0,
                        s.el.style.pointerEvents = "none",
                        s.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                        t.transform(s.el, 0, 0))
                    }
                    )),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.speedTs = Date.now()),
                    this.detectElements(),
                    this.transformElements(),
                    this.hasScrollbar) {
                        var o = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        "horizontal" === this.direction ? this.transform(this.scrollbarThumb, o, 0) : this.transform(this.scrollbarThumb, 0, o)
                    }
                    u(r(n.prototype), "checkScroll", this).call(this),
                    this.hasScrollTicking = !1
                }
            }
        }, {
            key: "resize",
            value: function() {
                this.windowHeight = window.innerHeight,
                this.windowWidth = window.innerWidth,
                this.checkContext(),
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                },
                this.update()
            }
        }, {
            key: "updateDelta",
            value: function(t) {
                var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY,
                this.instance.delta[this.directionAxis] -= e * this.multiplier,
                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
            }
        }, {
            key: "updateScroll",
            value: function(t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = F(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
            }
        }, {
            key: "addDirection",
            value: function() {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
            }
        }, {
            key: "addSpeed",
            value: function() {
                this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "initScrollBar",
            value: function() {
                if (this.scrollbar = document.createElement("span"),
                this.scrollbarThumb = document.createElement("span"),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                this.getScrollBar = this.getScrollBar.bind(this),
                this.releaseScrollBar = this.releaseScrollBar.bind(this),
                this.moveScrollBar = this.moveScrollBar.bind(this),
                this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "reinitScrollBar",
            value: function() {
                if (this.hasScrollbar = !1,
                "horizontal" == this.direction) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                        return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                    return;
                this.hasScrollbar = !0,
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                this.scrollbarHeight = this.scrollbarBCR.height,
                this.scrollbarWidth = this.scrollbarBCR.width,
                "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
            }
        }, {
            key: "destroyScrollBar",
            value: function() {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove()
            }
        }, {
            key: "getScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !0,
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass)
            }
        }, {
            key: "releaseScrollBar",
            value: function(t) {
                this.isDraggingScrollbar = !1,
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass)
            }
        }, {
            key: "moveScrollBar",
            value: function(t) {
                var e = this;
                this.isDraggingScrollbar && requestAnimationFrame((function() {
                    var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100
                      , s = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                    s > 0 && s < e.instance.limit.y && (e.instance.delta.y = s),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                }
                ))
            }
        }, {
            key: "addElements",
            value: function() {
                var t = this;
                this.els = {},
                this.parallaxElements = {},
                this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                    var s, n, o, l = K(e), r = Object.entries(t.sections).map((function(t) {
                        var e = f(t, 2);
                        e[0];
                        return e[1]
                    }
                    )).find((function(t) {
                        return l.includes(t.el)
                    }
                    )), a = e.dataset[t.name + "Class"] || t.class, c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i, h = e.dataset[t.name + "Repeat"], d = e.dataset[t.name + "Call"], u = e.dataset[t.name + "Position"], p = e.dataset[t.name + "Delay"], m = e.dataset[t.name + "Direction"], v = "string" == typeof e.dataset[t.name + "Sticky"], y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, b = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, g = e.dataset[t.name + "Target"], w = (o = void 0 !== g ? document.querySelector("".concat(g)) : e).getBoundingClientRect();
                    null === r || r.inView ? (s = w.top + t.instance.scroll.y - q(o).y,
                    n = w.left + t.instance.scroll.x - q(o).x) : (s = w.top - q(r.el).y - q(o).y,
                    n = w.left - q(r.el).x - q(o).x);
                    var x = s + o.offsetHeight
                      , S = n + o.offsetWidth
                      , k = {
                        x: (S - n) / 2 + n,
                        y: (x - s) / 2 + s
                    };
                    if (v) {
                        var T = e.getBoundingClientRect()
                          , E = T.top
                          , A = T.left
                          , O = {
                            x: A - n,
                            y: E - s
                        };
                        s += window.innerHeight,
                        n += window.innerWidth,
                        x = E + o.offsetHeight - e.offsetHeight - O[t.directionAxis],
                        k = {
                            x: ((S = A + o.offsetWidth - e.offsetWidth - O[t.directionAxis]) - n) / 2 + n,
                            y: (x - s) / 2 + s
                        }
                    }
                    h = "false" != h && (null != h || t.repeat);
                    var D = [0, 0];
                    if (b)
                        if ("horizontal" === t.direction) {
                            for (var C = 0; C < b.length; C++)
                                "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowWidth / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                            n += D[0],
                            S -= D[1]
                        } else {
                            for (C = 0; C < b.length; C++)
                                "string" == typeof b[C] ? b[C].includes("%") ? D[C] = parseInt(b[C].replace("%", "") * t.windowHeight / 100) : D[C] = parseInt(b[C]) : D[C] = b[C];
                            s += D[0],
                            x -= D[1]
                        }
                    var L = {
                        el: e,
                        id: c,
                        class: a,
                        section: r,
                        top: s,
                        middle: k,
                        bottom: x,
                        left: n,
                        right: S,
                        offset: b,
                        progress: 0,
                        repeat: h,
                        inView: !1,
                        call: d,
                        speed: y,
                        delay: p,
                        position: u,
                        target: o,
                        direction: m,
                        sticky: v
                    };
                    t.els[c] = L,
                    e.classList.contains(a) && t.setInView(t.els[c], c),
                    (!1 !== y || v) && (t.parallaxElements[c] = L)
                }
                ))
            }
        }, {
            key: "addSections",
            value: function() {
                var t = this;
                this.sections = {};
                var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                0 === e.length && (e = [this.el]),
                e.forEach((function(e, i) {
                    var s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i
                      , n = e.getBoundingClientRect()
                      , o = {
                        x: n.left - 1.5 * window.innerWidth - q(e).x,
                        y: n.top - 1.5 * window.innerHeight - q(e).y
                    }
                      , l = {
                        x: o.x + n.width + 2 * window.innerWidth,
                        y: o.y + n.height + 2 * window.innerHeight
                    }
                      , r = "string" == typeof e.dataset[t.name + "Persistent"];
                    e.setAttribute("data-scroll-section-id", s);
                    var a = {
                        el: e,
                        offset: o,
                        limit: l,
                        inView: !1,
                        persistent: r,
                        id: s
                    };
                    t.sections[s] = a
                }
                ))
            }
        }, {
            key: "transform",
            value: function(t, e, i, s) {
                var n;
                if (s) {
                    var o = q(t)
                      , l = F(o.x, e, s)
                      , r = F(o.y, i, s);
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l, ",").concat(r, ",0,1)")
                } else
                    n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                t.style.webkitTransform = n,
                t.style.msTransform = n,
                t.style.transform = n
            }
        }, {
            key: "transformElements",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , s = this.instance.scroll.x + this.windowWidth
                  , n = this.instance.scroll.y + this.windowHeight
                  , o = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach((function(l) {
                    var r = f(l, 2)
                      , a = (r[0],
                    r[1])
                      , c = !1;
                    if (t && (c = 0),
                    a.inView || i)
                        switch (a.position) {
                        case "top":
                            c = e.instance.scroll[e.directionAxis] * -a.speed;
                            break;
                        case "elementTop":
                            c = (n - a.top) * -a.speed;
                            break;
                        case "bottom":
                            c = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * a.speed;
                            break;
                        case "left":
                            c = e.instance.scroll[e.directionAxis] * -a.speed;
                            break;
                        case "elementLeft":
                            c = (s - a.left) * -a.speed;
                            break;
                        case "right":
                            c = (e.instance.limit[e.directionAxis] - s + e.windowHeight) * a.speed;
                            break;
                        default:
                            c = (o[e.directionAxis] - a.middle[e.directionAxis]) * -a.speed
                        }
                    a.sticky && (c = a.inView ? "horizontal" === e.direction ? e.instance.scroll.x - a.left + window.innerWidth : e.instance.scroll.y - a.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < a.left - window.innerWidth && e.instance.scroll.x < a.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > a.right && e.instance.scroll.x > a.right + 100 && a.right - a.left + window.innerWidth : e.instance.scroll.y < a.top - window.innerHeight && e.instance.scroll.y < a.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > a.bottom && e.instance.scroll.y > a.bottom + 100 && a.bottom - a.top + window.innerHeight),
                    !1 !== c && ("horizontal" === a.direction || "horizontal" === e.direction && "vertical" !== a.direction ? e.transform(a.el, c, 0, !t && a.delay) : e.transform(a.el, 0, c, !t && a.delay))
                }
                ))
            }
        }, {
            key: "scrollTo",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = parseInt(i.offset) || 0
                  , n = i.duration || 1e3
                  , o = i.easing || [.25, 0, .35, 1]
                  , l = !!i.disableLerp
                  , r = !!i.callback && i.callback;
                if (o = tt.apply(void 0, p(o)),
                "string" == typeof t) {
                    if ("top" === t)
                        t = 0;
                    else if ("bottom" === t)
                        t = this.instance.limit.y;
                    else if ("left" === t)
                        t = 0;
                    else if ("right" === t)
                        t = this.instance.limit.x;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                    var a = K(t).includes(this.el);
                    if (!a)
                        return;
                    var c = t.getBoundingClientRect()
                      , h = c.top
                      , d = c.left
                      , u = K(t)
                      , m = u.find((function(t) {
                        return Object.entries(e.sections).map((function(t) {
                            var e = f(t, 2);
                            e[0];
                            return e[1]
                        }
                        )).find((function(e) {
                            return e.el == t
                        }
                        ))
                    }
                    ))
                      , v = 0;
                    v = m ? q(m)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                    s = "horizontal" === this.direction ? d + s - v : h + s - v
                } else
                    s = t + s;
                var y = parseFloat(this.instance.delta[this.directionAxis])
                  , b = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis]))
                  , g = b - y
                  , w = function(t) {
                    l ? "horizontal" === e.direction ? e.setScroll(y + g * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, y + g * t) : e.instance.delta[e.directionAxis] = y + g * t
                };
                this.animatingScroll = !0,
                this.stopScrolling(),
                this.startScrolling();
                var x = Date.now()
                  , S = function t() {
                    var i = (Date.now() - x) / n;
                    i > 1 ? (w(1),
                    e.animatingScroll = !1,
                    0 == n && e.update(),
                    r && r()) : (e.scrollToRaf = requestAnimationFrame(t),
                    w(o(i)))
                };
                S()
            }
        }, {
            key: "update",
            value: function() {
                this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0)
            }
        }, {
            key: "startScroll",
            value: function() {
                this.stop = !1
            }
        }, {
            key: "stopScroll",
            value: function() {
                this.stop = !0
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.instance = o(o({}, this.instance), {}, {
                    scroll: {
                        x: t,
                        y: e
                    },
                    delta: {
                        x: t,
                        y: e
                    },
                    speed: 0
                })
            }
        }, {
            key: "destroy",
            value: function() {
                u(r(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1)
            }
        }]),
        n
    }(b);
    return function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e),
            this.options = i,
            Object.assign(this, y, i),
            this.smartphone = y.smartphone,
            i.smartphone && Object.assign(this.smartphone, i.smartphone),
            this.tablet = y.tablet,
            i.tablet && Object.assign(this.tablet, i.tablet),
            this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
            this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
            this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
            this.init()
        }
        return i(e, [{
            key: "init",
            value: function() {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ct(this.options) : this.scroll = new S(this.options),
                this.scroll.init(),
                window.location.hash) {
                    var t = window.location.hash.slice(1, window.location.hash.length)
                      , e = document.getElementById(t);
                    e && this.scroll.scrollTo(e)
                }
            }
        }, {
            key: "update",
            value: function() {
                this.scroll.update()
            }
        }, {
            key: "start",
            value: function() {
                this.scroll.startScroll()
            }
        }, {
            key: "stop",
            value: function() {
                this.scroll.stopScroll()
            }
        }, {
            key: "scrollTo",
            value: function(t, e) {
                this.scroll.scrollTo(t, e)
            }
        }, {
            key: "setScroll",
            value: function(t, e) {
                this.scroll.setScroll(t, e)
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.scroll.setEvents(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.scroll.unsetEvents(t, e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.scroll.destroy()
            }
        }]),
        e
    }()
}
));
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n()
}(this, (function() {
    function t(t, n) {
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            e.enumerable = e.enumerable || !1,
            e.configurable = !0,
            "value"in e && (e.writable = !0),
            Object.defineProperty(t, e.key, e)
        }
    }
    function n(n, r, e) {
        return r && t(n.prototype, r),
        e && t(n, e),
        n
    }
    function r() {
        return (r = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var e in r)
                    Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function e(t, n) {
        t.prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        t.__proto__ = n
    }
    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function o(t, n) {
        return (o = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n,
            t
        }
        )(t, n)
    }
    function u(t, n, r) {
        return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, n, r) {
            var e = [null];
            e.push.apply(e, n);
            var i = new (Function.bind.apply(t, e));
            return r && o(i, r.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function f(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (f = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]"))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t))
                    return n.get(t);
                n.set(t, r)
            }
            function r() {
                return u(t, arguments, i(this).constructor)
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            o(r, t)
        }
        )(t)
    }
    function s(t, n) {
        try {
            var r = t()
        } catch (t) {
            return n(t)
        }
        return r && r.then ? r.then(void 0, n) : r
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c, a = "2.9.7", h = function() {};
    !function(t) {
        t[t.off = 0] = "off",
        t[t.error = 1] = "error",
        t[t.warning = 2] = "warning",
        t[t.info = 3] = "info",
        t[t.debug = 4] = "debug"
    }(c || (c = {}));
    var v = c.off
      , l = function() {
        function t(t) {
            this.t = t
        }
        t.getLevel = function() {
            return v
        }
        ,
        t.setLevel = function(t) {
            return v = c[t]
        }
        ;
        var n = t.prototype;
        return n.error = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            this.i(console.error, c.error, n)
        }
        ,
        n.warn = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            this.i(console.warn, c.warning, n)
        }
        ,
        n.info = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            this.i(console.info, c.info, n)
        }
        ,
        n.debug = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            this.i(console.log, c.debug, n)
        }
        ,
        n.i = function(n, r, e) {
            r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e))
        }
        ,
        t
    }()
      , d = O
      , m = E
      , p = g
      , w = x
      , b = T
      , y = "/"
      , P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");
    function g(t, n) {
        for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t)); ) {
            var a = r[0]
              , h = r[1]
              , v = r.index;
            if (u += t.slice(o, v),
            o = v + a.length,
            h)
                u += h[1],
                c = !0;
            else {
                var l = ""
                  , d = r[2]
                  , m = r[3]
                  , p = r[4]
                  , w = r[5];
                if (!c && u.length) {
                    var b = u.length - 1
                      , g = u[b];
                    (!s || s.indexOf(g) > -1) && (l = g,
                    u = u.slice(0, b))
                }
                u && (e.push(u),
                u = "",
                c = !1);
                var E = m || p
                  , x = l || f;
                e.push({
                    name: d || i++,
                    prefix: l,
                    delimiter: x,
                    optional: "?" === w || "*" === w,
                    repeat: "+" === w || "*" === w,
                    pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
                })
            }
        }
        return (u || o < t.length) && e.push(u + t.substr(o)),
        e
    }
    function E(t, n) {
        return function(r, e) {
            var i = t.exec(r);
            if (!i)
                return !1;
            for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)
                if (void 0 !== i[c]) {
                    var a = n[c - 1];
                    f[a.name] = a.repeat ? i[c].split(a.delimiter).map((function(t) {
                        return s(t, a)
                    }
                    )) : s(i[c], a)
                }
            return {
                path: o,
                index: u,
                params: f
            }
        }
    }
    function x(t, n) {
        for (var r = new Array(t.length), e = 0; e < t.length; e++)
            "object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$",R(n)));
        return function(n, e) {
            for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
                var s = t[f];
                if ("string" != typeof s) {
                    var c, a = n ? n[s.name] : void 0;
                    if (Array.isArray(a)) {
                        if (!s.repeat)
                            throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                        if (0 === a.length) {
                            if (s.optional)
                                continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty')
                        }
                        for (var h = 0; h < a.length; h++) {
                            if (c = o(a[h], s),
                            u && !r[f].test(c))
                                throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                            i += (0 === h ? s.prefix : s.delimiter) + c
                        }
                    } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                        if (!s.optional)
                            throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"))
                    } else {
                        if (c = o(String(a), s),
                        u && !r[f].test(c))
                            throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                        i += s.prefix + c
                    }
                } else
                    i += s
            }
            return i
        }
    }
    function k(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }
    function A(t) {
        return t.replace(/([=!:$/()])/g, "\\$1")
    }
    function R(t) {
        return t && t.sensitive ? "" : "i"
    }
    function T(t, n, r) {
        for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
            var a = t[c];
            if ("string" == typeof a)
                s += k(a);
            else {
                var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
                n && n.push(a),
                s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")"
            }
        }
        if (o)
            e || (s += "(?:" + k(u) + ")?"),
            s += "$" === f ? "$" : "(?=" + f + ")";
        else {
            var v = t[t.length - 1]
              , l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
            e || (s += "(?:" + k(u) + "(?=" + f + "))?"),
            l || (s += "(?=" + k(u) + "|" + f + ")")
        }
        return new RegExp(s,R(r))
    }
    function O(t, n, r) {
        return t instanceof RegExp ? function(t, n) {
            if (!n)
                return t;
            var r = t.source.match(/\((?!\?)/g);
            if (r)
                for (var e = 0; e < r.length; e++)
                    n.push({
                        name: e,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null
                    });
            return t
        }(t, n) : Array.isArray(t) ? function(t, n, r) {
            for (var e = [], i = 0; i < t.length; i++)
                e.push(O(t[i], n, r).source);
            return new RegExp("(?:" + e.join("|") + ")",R(r))
        }(t, n, r) : function(t, n, r) {
            return T(g(t, r), n, r)
        }(t, n, r)
    }
    d.match = function(t, n) {
        var r = [];
        return E(O(t, r, n), r)
    }
    ,
    d.regexpToFunction = m,
    d.parse = p,
    d.compile = function(t, n) {
        return x(g(t, n), n)
    }
    ,
    d.tokensToFunction = w,
    d.tokensToRegExp = b;
    var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }
      , j = new (function() {
        function t() {
            this.o = S,
            this.u = new DOMParser
        }
        var n = t.prototype;
        return n.toString = function(t) {
            return t.outerHTML
        }
        ,
        n.toDocument = function(t) {
            return this.u.parseFromString(t, "text/html")
        }
        ,
        n.toElement = function(t) {
            var n = document.createElement("div");
            return n.innerHTML = t,
            n
        }
        ,
        n.getHtml = function(t) {
            return void 0 === t && (t = document),
            this.toString(t.documentElement)
        }
        ,
        n.getWrapper = function(t) {
            return void 0 === t && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        }
        ,
        n.getContainer = function(t) {
            return void 0 === t && (t = document),
            t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        }
        ,
        n.removeContainer = function(t) {
            document.body.contains(t) && t.parentNode.removeChild(t)
        }
        ,
        n.addContainer = function(t, n) {
            var r = this.getContainer();
            r ? this.s(t, r) : n.appendChild(t)
        }
        ,
        n.getNamespace = function(t) {
            void 0 === t && (t = document);
            var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
        }
        ,
        n.getHref = function(t) {
            if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href)
                    return t.href;
                var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (n)
                    return this.resolveUrl(n.baseVal || n)
            }
            return null
        }
        ,
        n.resolveUrl = function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            var e = n.length;
            if (0 === e)
                throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0],
            1 === e)
                return i.href;
            var o = document.getElementsByTagName("head")[0];
            o.insertBefore(i, o.firstChild);
            for (var u, f = document.createElement("a"), s = 1; s < e; s++)
                f.href = arguments[s],
                i.href = u = f.href;
            return o.removeChild(i),
            u
        }
        ,
        n.s = function(t, n) {
            n.parentNode.insertBefore(t, n.nextSibling)
        }
        ,
        t
    }())
      , M = new (function() {
        function t() {
            this.h = [],
            this.v = -1
        }
        var e = t.prototype;
        return e.init = function(t, n) {
            this.l = "barba";
            var r = {
                ns: n,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(r),
            this.v = 0;
            var e = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(e, "", t)
        }
        ,
        e.change = function(t, n, r) {
            if (r && r.state) {
                var e = r.state
                  , i = e.index;
                n = this.m(this.v - i),
                this.replace(e.states),
                this.v = i
            } else
                this.add(t, n);
            return n
        }
        ,
        e.add = function(t, n) {
            var r = this.size
              , e = this.p(n)
              , i = {
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(i),
            this.v = r;
            var o = {
                from: this.l,
                index: r,
                states: [].concat(this.h)
            };
            switch (e) {
            case "push":
                window.history && window.history.pushState(o, "", t);
                break;
            case "replace":
                window.history && window.history.replaceState(o, "", t)
            }
        }
        ,
        e.update = function(t, n) {
            var e = n || this.v
              , i = r({}, this.get(e), {}, t);
            this.set(e, i)
        }
        ,
        e.remove = function(t) {
            t ? this.h.splice(t, 1) : this.h.pop(),
            this.v--
        }
        ,
        e.clear = function() {
            this.h = [],
            this.v = -1
        }
        ,
        e.replace = function(t) {
            this.h = t
        }
        ,
        e.get = function(t) {
            return this.h[t]
        }
        ,
        e.set = function(t, n) {
            return this.h[t] = n
        }
        ,
        e.p = function(t) {
            var n = "push"
              , r = t
              , e = S.prefix + "-" + S.history;
            return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)),
            n
        }
        ,
        e.m = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
        }
        ,
        n(t, [{
            key: "current",
            get: function() {
                return this.h[this.v]
            }
        }, {
            key: "state",
            get: function() {
                return this.h[this.h.length - 1]
            }
        }, {
            key: "previous",
            get: function() {
                return this.v < 1 ? null : this.h[this.v - 1]
            }
        }, {
            key: "size",
            get: function() {
                return this.h.length
            }
        }]),
        t
    }())
      , L = function(t, n) {
        try {
            var r = function() {
                if (!n.next.html)
                    return Promise.resolve(t).then((function(t) {
                        var r = n.next;
                        if (t) {
                            var e = j.toElement(t);
                            r.namespace = j.getNamespace(e),
                            r.container = j.getContainer(e),
                            r.html = t,
                            M.update({
                                ns: r.namespace
                            });
                            var i = j.toDocument(t);
                            document.title = i.title
                        }
                    }
                    ))
            }();
            return Promise.resolve(r && r.then ? r.then((function() {}
            )) : void 0)
        } catch (t) {
            return Promise.reject(t)
        }
    }
      , $ = d
      , _ = {
        __proto__: null,
        update: L,
        nextTick: function() {
            return new Promise((function(t) {
                window.requestAnimationFrame(t)
            }
            ))
        },
        pathToRegexp: $
    }
      , q = function() {
        return window.location.origin
    }
      , B = function(t) {
        return void 0 === t && (t = window.location.href),
        U(t).port
    }
      , U = function(t) {
        var n, r = t.match(/:\d+/);
        if (null === r)
            /^http/.test(t) && (n = 80),
            /^https/.test(t) && (n = 443);
        else {
            var e = r[0].substring(1);
            n = parseInt(e, 10)
        }
        var i, o = t.replace(q(), ""), u = {}, f = o.indexOf("#");
        f >= 0 && (i = o.slice(f + 1),
        o = o.slice(0, f));
        var s = o.indexOf("?");
        return s >= 0 && (u = D(o.slice(s + 1)),
        o = o.slice(0, s)),
        {
            hash: i,
            path: o,
            port: n,
            query: u
        }
    }
      , D = function(t) {
        return t.split("&").reduce((function(t, n) {
            var r = n.split("=");
            return t[r[0]] = r[1],
            t
        }
        ), {})
    }
      , F = function(t) {
        return void 0 === t && (t = window.location.href),
        t.replace(/(\/#.*|\/|#.*)$/, "")
    }
      , H = {
        __proto__: null,
        getHref: function() {
            return window.location.href
        },
        getOrigin: q,
        getPort: B,
        getPath: function(t) {
            return void 0 === t && (t = window.location.href),
            U(t).path
        },
        parse: U,
        parseQuery: D,
        clean: F
    };
    function I(t, n, r) {
        return void 0 === n && (n = 2e3),
        new Promise((function(e, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE)
                    if (200 === o.status)
                        e(o.responseText);
                    else if (o.status) {
                        var n = {
                            status: o.status,
                            statusText: o.statusText
                        };
                        r(t, n),
                        i(n)
                    }
            }
            ,
            o.ontimeout = function() {
                var e = new Error("Timeout error [" + n + "]");
                r(t, e),
                i(e)
            }
            ,
            o.onerror = function() {
                var n = new Error("Fetch error");
                r(t, n),
                i(n)
            }
            ,
            o.open("GET", t),
            o.timeout = n,
            o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
            o.setRequestHeader("x-barba", "yes"),
            o.send()
        }
        ))
    }
    var C = function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
    };
    function N(t, n) {
        return void 0 === n && (n = {}),
        function() {
            for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++)
                e[i] = arguments[i];
            var o = !1
              , u = new Promise((function(r, i) {
                n.async = function() {
                    return o = !0,
                    function(t, n) {
                        t ? i(t) : r(n)
                    }
                }
                ;
                var u = t.apply(n, e);
                o || (C(u) ? u.then(r, i) : r(u))
            }
            ));
            return u
        }
    }
    var X = new (function(t) {
        function n() {
            var n;
            return (n = t.call(this) || this).logger = new l("@barba/core"),
            n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
            n.registered = new Map,
            n.init(),
            n
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            var t = this;
            this.registered.clear(),
            this.all.forEach((function(n) {
                t[n] || (t[n] = function(r, e) {
                    t.registered.has(n) || t.registered.set(n, new Set),
                    t.registered.get(n).add({
                        ctx: e || {},
                        fn: r
                    })
                }
                )
            }
            ))
        }
        ,
        r.do = function(t) {
            for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                e[i - 1] = arguments[i];
            if (this.registered.has(t)) {
                var o = Promise.resolve();
                return this.registered.get(t).forEach((function(t) {
                    o = o.then((function() {
                        return N(t.fn, t.ctx).apply(void 0, e)
                    }
                    ))
                }
                )),
                o.catch((function(r) {
                    n.logger.debug("Hook error [" + t + "]"),
                    n.logger.error(r)
                }
                ))
            }
            return Promise.resolve()
        }
        ,
        r.clear = function() {
            var t = this;
            this.all.forEach((function(n) {
                delete t[n]
            }
            )),
            this.init()
        }
        ,
        r.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach((function(n, r) {
                return t.push(r)
            }
            )),
            this.logger.info("Registered hooks: " + t.join(","))
        }
        ,
        n
    }(h))
      , z = function() {
        function t(t) {
            if (this.P = [],
            "boolean" == typeof t)
                this.g = t;
            else {
                var n = Array.isArray(t) ? t : [t];
                this.P = n.map((function(t) {
                    return $(t)
                }
                ))
            }
        }
        return t.prototype.checkHref = function(t) {
            if ("boolean" == typeof this.g)
                return this.g;
            var n = U(t).path;
            return this.P.some((function(t) {
                return null !== t.exec(n)
            }
            ))
        }
        ,
        t
    }()
      , G = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).k = new Map,
            r
        }
        e(n, t);
        var i = n.prototype;
        return i.set = function(t, n, r) {
            return this.k.set(t, {
                action: r,
                request: n
            }),
            {
                action: r,
                request: n
            }
        }
        ,
        i.get = function(t) {
            return this.k.get(t)
        }
        ,
        i.getRequest = function(t) {
            return this.k.get(t).request
        }
        ,
        i.getAction = function(t) {
            return this.k.get(t).action
        }
        ,
        i.has = function(t) {
            return !this.checkHref(t) && this.k.has(t)
        }
        ,
        i.delete = function(t) {
            return this.k.delete(t)
        }
        ,
        i.update = function(t, n) {
            var e = r({}, this.k.get(t), {}, n);
            return this.k.set(t, e),
            e
        }
        ,
        n
    }(z)
      , Q = function() {
        return !window.history.pushState
    }
      , W = function(t) {
        return !t.el || !t.href
    }
      , J = function(t) {
        var n = t.event;
        return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
    }
      , K = function(t) {
        var n = t.el;
        return n.hasAttribute("target") && "_blank" === n.target
    }
      , V = function(t) {
        var n = t.el;
        return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname
    }
      , Y = function(t) {
        var n = t.el;
        return void 0 !== n.port && B() !== B(n.href)
    }
      , Z = function(t) {
        var n = t.el;
        return n.getAttribute && "string" == typeof n.getAttribute("download")
    }
      , tt = function(t) {
        return t.el.hasAttribute(S.prefix + "-" + S.prevent)
    }
      , nt = function(t) {
        return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'))
    }
      , rt = function(t) {
        var n = t.href;
        return F(n) === F() && B(n) === B()
    }
      , et = function(t) {
        function n(n) {
            var r;
            return (r = t.call(this, n) || this).suite = [],
            r.tests = new Map,
            r.init(),
            r
        }
        e(n, t);
        var r = n.prototype;
        return r.init = function() {
            this.add("pushState", Q),
            this.add("exists", W),
            this.add("newTab", J),
            this.add("blank", K),
            this.add("corsDomain", V),
            this.add("corsPort", Y),
            this.add("download", Z),
            this.add("preventSelf", tt),
            this.add("preventAll", nt),
            this.add("sameUrl", rt, !1)
        }
        ,
        r.add = function(t, n, r) {
            void 0 === r && (r = !0),
            this.tests.set(t, n),
            r && this.suite.push(t)
        }
        ,
        r.run = function(t, n, r, e) {
            return this.tests.get(t)({
                el: n,
                event: r,
                href: e
            })
        }
        ,
        r.checkLink = function(t, n, r) {
            var e = this;
            return this.suite.some((function(i) {
                return e.run(i, t, n, r)
            }
            ))
        }
        ,
        n
    }(z)
      , it = function(t) {
        function n(r, e) {
            var i;
            void 0 === e && (e = "Barba error");
            for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)
                u[f - 2] = arguments[f];
            return (i = t.call.apply(t, [this].concat(u)) || this).error = r,
            i.label = e,
            Error.captureStackTrace && Error.captureStackTrace(function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(i), n),
            i.name = "BarbaError",
            i
        }
        return e(n, t),
        n
    }(f(Error))
      , ot = function() {
        function t(t) {
            void 0 === t && (t = []),
            this.logger = new l("@barba/core"),
            this.all = [],
            this.page = [],
            this.once = [],
            this.A = [{
                name: "namespace",
                type: "strings"
            }, {
                name: "custom",
                type: "function"
            }],
            t && (this.all = this.all.concat(t)),
            this.update()
        }
        var n = t.prototype;
        return n.add = function(t, n) {
            switch (t) {
            case "rule":
                this.A.splice(n.position || 0, 0, n.value);
                break;
            case "transition":
            default:
                this.all.push(n)
            }
            this.update()
        }
        ,
        n.resolve = function(t, n) {
            var r = this;
            void 0 === n && (n = {});
            var e = n.once ? this.once : this.page;
            e = e.filter(n.self ? function(t) {
                return t.name && "self" === t.name
            }
            : function(t) {
                return !t.name || "self" !== t.name
            }
            );
            var i = new Map
              , o = e.find((function(e) {
                var o = !0
                  , u = {};
                return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach((function(n) {
                    o && (o = r.R(e, n, t, u),
                    e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")),
                    e.from && !e.to && (o = r.R(e, n, t, u, "from")),
                    !e.from && e.to && (o = r.R(e, n, t, u, "to")))
                }
                )),
                i.set(e, u),
                o)
            }
            ))
              , u = i.get(o)
              , f = [];
            if (f.push(n.once ? "once" : "page"),
            n.self && f.push("self"),
            u) {
                var s, c = [o];
                Object.keys(u).length > 0 && c.push(u),
                (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c))
            } else
                this.logger.info("No transition found [" + f.join(",") + "]");
            return o
        }
        ,
        n.update = function() {
            var t = this;
            this.all = this.all.map((function(n) {
                return t.T(n)
            }
            )).sort((function(t, n) {
                return t.priority - n.priority
            }
            )).reverse().map((function(t) {
                return delete t.priority,
                t
            }
            )),
            this.page = this.all.filter((function(t) {
                return void 0 !== t.leave || void 0 !== t.enter
            }
            )),
            this.once = this.all.filter((function(t) {
                return void 0 !== t.once
            }
            ))
        }
        ,
        n.R = function(t, n, r, e, i) {
            var o = !0
              , u = !1
              , f = t
              , s = n.name
              , c = s
              , a = s
              , h = s
              , v = i ? f[i] : f
              , l = "to" === i ? r.next : r.current;
            if (i ? v && v[s] : v[s]) {
                switch (n.type) {
                case "strings":
                default:
                    var d = Array.isArray(v[c]) ? v[c] : [v[c]];
                    l[c] && -1 !== d.indexOf(l[c]) && (u = !0),
                    -1 === d.indexOf(l[c]) && (o = !1);
                    break;
                case "object":
                    var m = Array.isArray(v[a]) ? v[a] : [v[a]];
                    l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0),
                    -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                    break;
                case "function":
                    v[h](r) ? u = !0 : o = !1
                }
                u && (i ? (e[i] = e[i] || {},
                e[i][s] = f[i][s]) : e[s] = f[s])
            }
            return o
        }
        ,
        n.O = function(t, n, r) {
            var e = 0;
            return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r),
            t.from && t.from[n] && (e += 1),
            t.to && t.to[n] && (e += 2)),
            e
        }
        ,
        n.T = function(t) {
            var n = this;
            t.priority = 0;
            var r = 0;
            return this.A.forEach((function(e, i) {
                r += n.O(t, e.name, i + 1)
            }
            )),
            t.priority = r,
            t
        }
        ,
        t
    }()
      , ut = function() {
        function t(t) {
            void 0 === t && (t = []),
            this.logger = new l("@barba/core"),
            this.S = !1,
            this.store = new ot(t)
        }
        var r = t.prototype;
        return r.get = function(t, n) {
            return this.store.resolve(t, n)
        }
        ,
        r.doOnce = function(t) {
            var n = t.data
              , r = t.transition;
            try {
                var e = function() {
                    i.S = !1
                }
                  , i = this
                  , o = r || {};
                i.S = !0;
                var u = s((function() {
                    return Promise.resolve(i.j("beforeOnce", n, o)).then((function() {
                        return Promise.resolve(i.once(n, o)).then((function() {
                            return Promise.resolve(i.j("afterOnce", n, o)).then((function() {}
                            ))
                        }
                        ))
                    }
                    ))
                }
                ), (function(t) {
                    i.S = !1,
                    i.logger.debug("Transition error [before/after/once]"),
                    i.logger.error(t)
                }
                ));
                return Promise.resolve(u && u.then ? u.then(e) : e())
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.doPage = function(t) {
            var n = t.data
              , r = t.transition
              , e = t.page
              , i = t.wrapper;
            try {
                var o = function(t) {
                    if (u)
                        return t;
                    f.S = !1
                }
                  , u = !1
                  , f = this
                  , c = r || {}
                  , a = !0 === c.sync || !1;
                f.S = !0;
                var h = s((function() {
                    function t() {
                        return Promise.resolve(f.j("before", n, c)).then((function() {
                            var t = !1;
                            function r(r) {
                                return t ? r : Promise.resolve(f.remove(n)).then((function() {
                                    return Promise.resolve(f.j("after", n, c)).then((function() {}
                                    ))
                                }
                                ))
                            }
                            var o = function() {
                                if (a)
                                    return s((function() {
                                        return Promise.resolve(f.add(n, i)).then((function() {
                                            return Promise.resolve(f.j("beforeLeave", n, c)).then((function() {
                                                return Promise.resolve(f.j("beforeEnter", n, c)).then((function() {
                                                    return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then((function() {
                                                        return Promise.resolve(f.j("afterLeave", n, c)).then((function() {
                                                            return Promise.resolve(f.j("afterEnter", n, c)).then((function() {}
                                                            ))
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ))
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ), (function(t) {
                                        if (f.M(t))
                                            throw new it(t,"Transition error [sync]")
                                    }
                                    ));
                                var r = function(r) {
                                    return t ? r : s((function() {
                                        var t = function() {
                                            if (!1 !== o)
                                                return Promise.resolve(f.add(n, i)).then((function() {
                                                    return Promise.resolve(f.j("beforeEnter", n, c)).then((function() {
                                                        return Promise.resolve(f.enter(n, c, o)).then((function() {
                                                            return Promise.resolve(f.j("afterEnter", n, c)).then((function() {}
                                                            ))
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ))
                                        }();
                                        if (t && t.then)
                                            return t.then((function() {}
                                            ))
                                    }
                                    ), (function(t) {
                                        if (f.M(t))
                                            throw new it(t,"Transition error [before/after/enter]")
                                    }
                                    ))
                                }
                                  , o = !1
                                  , u = s((function() {
                                    return Promise.resolve(f.j("beforeLeave", n, c)).then((function() {
                                        return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then((function(t) {
                                            return t[0]
                                        }
                                        ))).then((function(t) {
                                            return o = t,
                                            Promise.resolve(f.j("afterLeave", n, c)).then((function() {}
                                            ))
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    if (f.M(t))
                                        throw new it(t,"Transition error [before/after/leave]")
                                }
                                ));
                                return u && u.then ? u.then(r) : r(u)
                            }();
                            return o && o.then ? o.then(r) : r(o)
                        }
                        ))
                    }
                    var r = function() {
                        if (a)
                            return Promise.resolve(L(e, n)).then((function() {}
                            ))
                    }();
                    return r && r.then ? r.then(t) : t()
                }
                ), (function(t) {
                    if (f.S = !1,
                    t.name && "BarbaError" === t.name)
                        throw f.logger.debug(t.label),
                        f.logger.error(t.error),
                        t;
                    throw f.logger.debug("Transition error [page]"),
                    f.logger.error(t),
                    t
                }
                ));
                return Promise.resolve(h && h.then ? h.then(o) : o(h))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.once = function(t, n) {
            try {
                return Promise.resolve(X.do("once", t, n)).then((function() {
                    return n.once ? N(n.once, n)(t) : Promise.resolve()
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.leave = function(t, n) {
            try {
                return Promise.resolve(X.do("leave", t, n)).then((function() {
                    return n.leave ? N(n.leave, n)(t) : Promise.resolve()
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.enter = function(t, n, r) {
            try {
                return Promise.resolve(X.do("enter", t, n)).then((function() {
                    return n.enter ? N(n.enter, n)(t, r) : Promise.resolve()
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.add = function(t, n) {
            try {
                return j.addContainer(t.next.container, n),
                X.do("nextAdded", t),
                Promise.resolve()
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.remove = function(t) {
            try {
                return j.removeContainer(t.current.container),
                X.do("currentRemoved", t),
                Promise.resolve()
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        r.M = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
        }
        ,
        r.j = function(t, n, r) {
            try {
                return Promise.resolve(X.do(t, n, r)).then((function() {
                    return r[t] ? N(r[t], r)(n) : Promise.resolve()
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        n(t, [{
            key: "isRunning",
            get: function() {
                return this.S
            },
            set: function(t) {
                this.S = t
            }
        }, {
            key: "hasOnce",
            get: function() {
                return this.store.once.length > 0
            }
        }, {
            key: "hasSelf",
            get: function() {
                return this.store.all.some((function(t) {
                    return "self" === t.name
                }
                ))
            }
        }, {
            key: "shouldWait",
            get: function() {
                return this.store.all.some((function(t) {
                    return t.to && !t.to.route || t.sync
                }
                ))
            }
        }]),
        t
    }()
      , ft = function() {
        function t(t) {
            var n = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
            this.byNamespace = new Map,
            0 !== t.length && (t.forEach((function(t) {
                n.byNamespace.set(t.namespace, t)
            }
            )),
            this.names.forEach((function(t) {
                X[t](n.L(t))
            }
            )))
        }
        return t.prototype.L = function(t) {
            var n = this;
            return function(r) {
                var e = t.match(/enter/i) ? r.next : r.current
                  , i = n.byNamespace.get(e.namespace);
                return i && i[t] ? N(i[t], i)(r) : Promise.resolve()
            }
        }
        ,
        t
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t))
                return n;
            n = n.parentElement || n.parentNode
        } while (null !== n && 1 === n.nodeType);return null
    }
    );
    var st = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    };
    return new (function() {
        function t() {
            this.version = a,
            this.schemaPage = st,
            this.Logger = l,
            this.logger = new l("@barba/core"),
            this.plugins = [],
            this.hooks = X,
            this.dom = j,
            this.helpers = _,
            this.history = M,
            this.request = I,
            this.url = H
        }
        var e = t.prototype;
        return e.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n),
            r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
        }
        ,
        e.init = function(t) {
            var n = void 0 === t ? {} : t
              , e = n.transitions
              , i = void 0 === e ? [] : e
              , o = n.views
              , u = void 0 === o ? [] : o
              , f = n.schema
              , s = void 0 === f ? S : f
              , c = n.requestError
              , a = n.timeout
              , h = void 0 === a ? 2e3 : a
              , v = n.cacheIgnore
              , d = void 0 !== v && v
              , m = n.prefetchIgnore
              , p = void 0 !== m && m
              , w = n.preventRunning
              , b = void 0 !== w && w
              , y = n.prevent
              , P = void 0 === y ? null : y
              , g = n.debug
              , E = n.logLevel;
            if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E),
            this.logger.info(this.version),
            Object.keys(s).forEach((function(t) {
                S[t] && (S[t] = s[t])
            }
            )),
            this.$ = c,
            this.timeout = h,
            this.cacheIgnore = d,
            this.prefetchIgnore = p,
            this.preventRunning = b,
            this._ = this.dom.getWrapper(),
            !this._)
                throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"),
            this.q();
            var x = this.data.current;
            if (!x.container)
                throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d),
            this.prevent = new et(p),
            this.transitions = new ut(i),
            this.views = new ft(u),
            null !== P) {
                if ("function" != typeof P)
                    throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P)
            }
            this.history.init(x.url.href, x.namespace),
            this.B = this.B.bind(this),
            this.U = this.U.bind(this),
            this.D = this.D.bind(this),
            this.F(),
            this.plugins.forEach((function(t) {
                return t.init()
            }
            ));
            var k = this.data;
            k.trigger = "barba",
            k.next = k.current,
            k.current = r({}, this.schemaPage),
            this.hooks.do("ready", k),
            this.once(k),
            this.q()
        }
        ,
        e.destroy = function() {
            this.q(),
            this.H(),
            this.history.clear(),
            this.hooks.clear(),
            this.plugins = []
        }
        ,
        e.force = function(t) {
            window.location.assign(t)
        }
        ,
        e.go = function(t, n, r) {
            var e;
            if (void 0 === n && (n = "barba"),
            this.transitions.isRunning)
                this.force(t);
            else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf)
                return n = this.history.change(t, n, r),
                r && (r.stopPropagation(),
                r.preventDefault()),
                this.page(t, n, e)
        }
        ,
        e.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then((function() {
                    function r() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then((function() {}
                        ))
                    }
                    var e = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then((function() {}
                            ))
                        }
                    }();
                    return e && e.then ? e.then(r) : r()
                }
                ))
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        e.page = function(t, n, e) {
            try {
                var i = function() {
                    var t = o.data;
                    return Promise.resolve(o.hooks.do("page", t)).then((function() {
                        var n = s((function() {
                            var n = o.transitions.get(t, {
                                once: !1,
                                self: e
                            });
                            return Promise.resolve(o.transitions.doPage({
                                data: t,
                                page: u,
                                transition: n,
                                wrapper: o._
                            })).then((function() {
                                o.q()
                            }
                            ))
                        }
                        ), (function() {
                            0 === l.getLevel() && o.force(t.current.url.href)
                        }
                        ));
                        if (n && n.then)
                            return n.then((function() {}
                            ))
                    }
                    ))
                }
                  , o = this;
                o.data.next.url = r({
                    href: t
                }, o.url.parse(t)),
                o.data.trigger = n;
                var u = o.cache.has(t) ? o.cache.update(t, {
                    action: "click"
                }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request
                  , f = function() {
                    if (o.transitions.shouldWait)
                        return Promise.resolve(L(u, o.data)).then((function() {}
                        ))
                }();
                return Promise.resolve(f && f.then ? f.then(i) : i())
            } catch (t) {
                return Promise.reject(t)
            }
        }
        ,
        e.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)
                r[e - 1] = arguments[e];
            var i = r[0]
              , o = r[1]
              , u = this.cache.getAction(i);
            return this.cache.delete(i),
            !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i),
            1))
        }
        ,
        e.prefetch = function(t) {
            var n = this;
            this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(t) {
                n.logger.error(t)
            }
            )), "prefetch")
        }
        ,
        e.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B),
            document.addEventListener("touchstart", this.B)),
            document.addEventListener("click", this.U),
            window.addEventListener("popstate", this.D)
        }
        ,
        e.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B),
            document.removeEventListener("touchstart", this.B)),
            document.removeEventListener("click", this.U),
            window.removeEventListener("popstate", this.D)
        }
        ,
        e.B = function(t) {
            var n = this
              , r = this.I(t);
            if (r) {
                var e = this.dom.getHref(r);
                this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch((function(t) {
                    n.logger.error(t)
                }
                )), "enter")
            }
        }
        ,
        e.U = function(t) {
            var n = this.I(t);
            if (n)
                return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(),
                void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t)
        }
        ,
        e.D = function(t) {
            this.go(this.url.getHref(), "popstate", t)
        }
        ,
        e.I = function(t) {
            for (var n = t.target; n && !this.dom.getHref(n); )
                n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n)))
                return n
        }
        ,
        e.q = function() {
            var t = this.url.getHref()
              , n = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r({
                    href: t
                }, this.url.parse(t))
            };
            this.C = {
                current: n,
                next: r({}, this.schemaPage),
                trigger: void 0
            },
            this.hooks.do("reset", this.data)
        }
        ,
        n(t, [{
            key: "data",
            get: function() {
                return this.C
            }
        }, {
            key: "wrapper",
            get: function() {
                return this._
            }
        }]),
        t
    }())
}
));
//# sourceMappingURL=barba.umd.js.map
/*!
 * GSAP 3.4.2
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function n(t) {
        return "string" == typeof t
    }
    function o(t) {
        return "function" == typeof t
    }
    function p(t) {
        return "number" == typeof t
    }
    function q(t) {
        return void 0 === t
    }
    function r(t) {
        return "object" == typeof t
    }
    function s(t) {
        return !1 !== t
    }
    function t() {
        return "undefined" != typeof window
    }
    function u(t) {
        return o(t) || n(t)
    }
    function K(t) {
        return (l = ct(t, at)) && ie
    }
    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function M(t, e) {
        return !e && console.warn(t)
    }
    function N(t, e) {
        return t && (at[t] = e) && l && (l[t] = e) || at
    }
    function O() {
        return 0
    }
    function Y(t) {
        var e, i, n = t[0];
        if (r(n) || o(n) || (t = [t]),
        !(e = (n._gsap || {}).harness)) {
            for (i = dt.length; i-- && !dt[i].targetTest(n); )
                ;
            e = dt[i]
        }
        for (i = t.length; i--; )
            t[i] && (t[i]._gsap || (t[i]._gsap = new Et(t[i],e))) || t.splice(i, 1);
        return t
    }
    function Z(t) {
        return t._gsap || Y(yt(t))[0]._gsap
    }
    function $(t, e) {
        var r = t[e];
        return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r
    }
    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function aa(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function ba(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function ca(t, e, r) {
        var i, n = p(t[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
        if (n && (o.duration = t[1]),
        o.parent = r,
        e) {
            for (i = o; r && !("immediateRender"in i); )
                i = r.vars.defaults || {},
                r = s(r.vars.inherit) && r.parent;
            o.immediateRender = s(i.immediateRender),
            e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
        }
        return o
    }
    function da() {
        var t, e, r = ot.length, i = ot.slice(0);
        for (ut = {},
        t = ot.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function ea(t, e, r, i) {
        ot.length && da(),
        t.render(e, r, i),
        ot.length && da()
    }
    function fa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t
    }
    function ga(t) {
        return t
    }
    function ha(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ia(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }
    function ka(t, e) {
        for (var i in e)
            t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
        return t
    }
    function la(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function ma(t) {
        var e = t.parent || I
          , r = t.keyframes ? ia : ha;
        if (s(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function pa(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
        a ? a._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }
    function qa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0
    }
    function ra(t) {
        for (var e = t; e; )
            e._dirty = 1,
            e = e.parent;
        return t
    }
    function ua(t) {
        return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function wa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function xa(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0))
    }
    function ya(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = aa(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        xa(t),
        r._dirty || ra(r)),
        t
    }
    function za(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e),
        (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)),
        ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -B
        }
    }
    function Aa(t, e, r, i) {
        return e.parent && qa(e),
        e._start = aa(r + e._delay),
        e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n)
                for (a = e[n]; s && s[n] > a; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        i || za(t, e),
        t
    }
    function Ba(t, e) {
        return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
    }
    function Ca(t, e, r, i) {
        return qt(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }
    function Fa(t, e, r) {
        var i = t._repeat
          , n = aa(e) || 0;
        return t._dur = n,
        t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n,
        t._time > n && (t._time = n,
        t._tTime = Math.min(t._tTime, t._tDur)),
        r || ra(t.parent),
        t.parent && xa(t),
        t
    }
    function Ga(t) {
        return t instanceof Rt ? ra(t) : Fa(t, t._dur)
    }
    function Ia(t, e) {
        var r, i, a = t.labels, s = t._recent || mt, o = t.duration() >= z ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o),
        a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)),
        1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e
    }
    function Ja(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function La(t) {
        return (t + "").substr((parseFloat(t) + "").length)
    }
    function Oa(t, e) {
        return t && r(t) && "length"in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i
    }
    function Ra(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Sa(t) {
        if (o(t))
            return t;
        var c = r(t) ? t : {
            each: t
        }
          , _ = Ft(c.ease)
          , m = c.from || 0
          , g = parseFloat(c.base) || 0
          , v = {}
          , e = 0 < m && m < 1
          , y = isNaN(m) || e
          , T = c.axis
          , b = m
          , w = m;
        return n(m) ? b = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !e && y && (b = m[0],
        w = m[1]),
        function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || c).length, p = v[d];
            if (!p) {
                if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, z])[1])) {
                    for (h = -z; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                        ;
                    f--
                }
                for (p = v[d] = [],
                i = y ? Math.min(f, d) * b - .5 : m % f,
                n = y ? d * w / f - .5 : m / f | 0,
                l = z,
                u = h = 0; u < d; u++)
                    a = u % f - i,
                    s = n - (u / f | 0),
                    p[u] = o = T ? Math.abs("y" === T ? s : a) : j(a * a + s * s),
                    h < o && (h = o),
                    o < l && (l = o);
                "random" === m && Ra(p),
                p.max = h - l,
                p.min = l,
                p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1),
                p.b = d < 0 ? g - d : g,
                p.u = La(c.amount || c.each) || 0,
                _ = _ && d < 0 ? Dt(_) : _
            }
            return d = (p[t] - p.min) / p.max || 0,
            aa(p.b + (_ ? _(d) : d) * p.v) + p.u
        }
    }
    function Ta(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : La(t))
        }
    }
    function Ua(u, t) {
        var h, l, e = J(u);
        return !e && r(u) && (h = e = u.radius || z,
        u.values ? (u = yt(u.values),
        (l = !p(u[0])) && (h *= h)) : u = Ta(u.increment)),
        Ja(t, e ? o(u) ? function(t) {
            return l = u(t),
            Math.abs(l - t) <= h ? l : t
        }
        : function(t) {
            for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = z, s = 0, o = u.length; o--; )
                (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
                s = o);
            return s = !h || a <= h ? u[s] : t,
            l || s === t || p(t) ? s : s + La(t)
        }
        : Ta(u))
    }
    function Va(t, e, r, i) {
        return Ja(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i
        })
    }
    function Za(e, r, t) {
        return Ja(t, function(t) {
            return e[~~r(t)]
        })
    }
    function ab(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
            n = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, i - e - 7).match(n ? nt : W),
            s += t.substr(a, e - a) + Va(n ? r : +r[0], +r[1], +r[2] || 1e-5),
            a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function db(t, e, r) {
        var i, n, a, s = t.labels, o = z;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
            o = n);
        return a
    }
    function fb(t) {
        return qa(t),
        t.progress() < 1 && bt(t, "onInterrupt"),
        t
    }
    function kb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0
    }
    function lb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            xt[t])
                c = xt[t];
            else if ("#" === t.charAt(0))
                4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a),
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];
            else if ("hsl" === t.substr(0, 3))
                if (c = d = t.match(W),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(H),
                        r && c.length < 4 && (c[3] = 1),
                        c
                } else
                    s = +c[0] % 360 / 360,
                    o = c[1] / 100,
                    i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < c.length && (c[3] *= 1),
                    c[0] = kb(s + 1 / 3, i, n),
                    c[1] = kb(s, i, n),
                    c[2] = kb(s - 1 / 3, i, n);
            else
                c = t.match(W) || xt.transparent;
            c = c.map(Number)
        }
        return e && !d && (i = c[0] / wt,
        n = c[1] / wt,
        a = c[2] / wt,
        u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
        h === l ? s = o = 0 : (f = h - l,
        o = .5 < u ? f / (2 - h - l) : f / (h + l),
        s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
        s *= 60),
        c[0] = ~~(s + .5),
        c[1] = ~~(100 * o + .5),
        c[2] = ~~(100 * u + .5)),
        r && c.length < 4 && (c[3] = 1),
        c
    }
    function mb(t) {
        var r = []
          , i = []
          , n = -1;
        return t.split(kt).forEach(function(t) {
            var e = t.match(tt) || [];
            r.push.apply(r, e),
            i.push(n += e.length + 1)
        }),
        r.c = i,
        r
    }
    function nb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(kt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = lb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = mb(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(kt)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function qb(t) {
        var e, r = t.join(" ");
        if (kt.lastIndex = 0,
        kt.test(r))
            return e = Ot.test(r),
            t[1] = nb(t[1], e),
            t[0] = nb(t[0], e, mb(t[1])),
            !0
    }
    function yb(t) {
        var e = (t + "").split("(")
          , r = At[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[s] = isNaN(i) ? i.replace(St, "").trim() : +i,
                s = r.substr(e + 1).trim();
            return n
        }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : At._CE && Pt.test(t) ? At._CE("", t) : r
    }
    function Ab(t, e) {
        for (var r, i = t._first; i; )
            i instanceof Rt ? Ab(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ab(i.timeline, e) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = e)),
            i = i._next
    }
    function Cb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return _(t, function(t) {
            for (var e in At[t] = at[t] = a,
            At[n = t.toLowerCase()] = r,
            a)
                At[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = At[t + "." + e] = a[e]
        }),
        a
    }
    function Db(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Eb(r, t, e) {
        function il(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
          , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
          , a = n / E * (Math.asin(1 / i) || 0)
          , s = "out" === r ? il : "in" === r ? function(t) {
            return 1 - il(1 - t)
        }
        : Db(il);
        return n = E / n,
        s.config = function(t, e) {
            return Eb(r, t, e)
        }
        ,
        s
    }
    function Fb(e, r) {
        function ql(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? ql : "in" === e ? function(t) {
            return 1 - ql(1 - t)
        }
        : Db(ql);
        return t.config = function(t) {
            return Fb(e, t)
        }
        ,
        t
    }
    var I, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, C, A, P, S, D, F, U = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, R = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, z = 1e8, B = 1 / z, E = 2 * Math.PI, X = E / 4, V = 0, j = Math.sqrt, G = Math.cos, Q = Math.sin, J = Array.isArray, W = /(?:-?\.?\d|\.)+/gi, H = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, rt = /\(([^()]+)\)/i, it = /[+-]=-?[\.\d]+/, nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi, at = {}, st = {}, ot = [], ut = {}, ht = {}, lt = {}, ft = 30, dt = [], pt = "", ct = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, _t = function _animationCycle(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }, mt = {
        _start: 0,
        endTime: O
    }, gt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, vt = [].slice, yt = function toArray(t, e) {
        return !n(t) || e || !a && Ct() ? J(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach(function(t) {
                return n(t) && !e || Oa(t, 1) ? r.push.apply(r, yt(t)) : r.push(t)
            }) || r
        }(t, e) : Oa(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0)
    }, Tt = function mapRange(e, t, r, i, n) {
        var a = t - e
          , s = i - r;
        return Ja(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, bt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s)
            return i = a[e + "Params"],
            n = a.callbackScope || t,
            r && ot.length && da(),
            i ? s.apply(n, i) : s.call(n)
    }, wt = 255, xt = {
        aqua: [0, wt, wt],
        lime: [0, wt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, wt],
        navy: [0, 0, 128],
        white: [wt, wt, wt],
        olive: [128, 128, 0],
        yellow: [wt, wt, 0],
        orange: [wt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [wt, 0, 0],
        pink: [wt, 192, 203],
        cyan: [0, wt, wt],
        transparent: [wt, wt, wt, 0]
    }, kt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in xt)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ot = /hsl[a]?\(/, Mt = (b = Date.now,
    w = 500,
    x = 33,
    k = b(),
    C = k,
    P = A = 1 / 240,
    T = {
        time: 0,
        frame: 0,
        tick: function tick() {
            kk(!0)
        },
        wake: function wake() {
            f && (!a && t() && (i = a = window,
            h = i.document || {},
            at.gsap = ie,
            (i.gsapVersions || (i.gsapVersions = [])).push(ie.version),
            K(l || i.GreenSockGlobals || !i.gsap && i || {}),
            y = i.requestAnimationFrame),
            g && T.sleep(),
            v = y || function(t) {
                return setTimeout(t, 1e3 * (P - T.time) + 1 | 0)
            }
            ,
            m = 1,
            kk(2))
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(g),
            m = 0,
            v = O
        },
        lagSmoothing: function lagSmoothing(t, e) {
            w = t || 1e8,
            x = Math.min(e, w, 0)
        },
        fps: function fps(t) {
            A = 1 / (t || 240),
            P = T.time + A
        },
        add: function add(t) {
            S.indexOf(t) < 0 && S.push(t),
            Ct()
        },
        remove: function remove(t) {
            var e;
            ~(e = S.indexOf(t)) && S.splice(e, 1)
        },
        _listeners: S = []
    }), Ct = function _wake() {
        return !m && Mt.wake()
    }, At = {}, Pt = /^[\d.\-M][\d.\-,\s]/, St = /["']/g, Dt = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Ft = function _parseEase(t, e) {
        return t && (o(t) ? t : At[t] || yb(t)) || e
    };
    function kk(e) {
        var t, r, i = b() - C, n = !0 === e;
        w < i && (k += i - x),
        C += i,
        T.time = (C - k) / 1e3,
        (0 < (t = T.time - P) || n) && (T.frame++,
        P += t + (A <= t ? .004 : A - t),
        r = 1),
        n || (g = v(kk)),
        r && S.forEach(function(t) {
            return t(T.time, i, T.frame, e)
        })
    }
    function Hl(t) {
        return t < F ? D * t * t : t < .7272727272727273 ? D * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? D * (t -= 2.25 / 2.75) * t + .9375 : D * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Cb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }),
    At.Linear.easeNone = At.none = At.Linear.easeIn,
    Cb("Elastic", Eb("in"), Eb("out"), Eb()),
    D = 7.5625,
    F = 1 / 2.75,
    Cb("Bounce", function(t) {
        return 1 - Hl(1 - t)
    }, Hl),
    Cb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Cb("Circ", function(t) {
        return -(j(1 - t * t) - 1)
    }),
    Cb("Sine", function(t) {
        return 1 === t ? 1 : 1 - G(t * X)
    }),
    Cb("Back", Fb("in"), Fb("out"), Fb()),
    At.SteppedEase = At.steps = at.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + (e ? 0 : 1)
              , n = e ? 1 : 0;
            return function(t) {
                return ((i * gt(0, .99999999, t) | 0) + n) * r
            }
        }
    },
    R.ease = At["quad.out"],
    _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return pt += t + "," + t + "Params,"
    });
    var zt, Et = function GSCache(t, e) {
        this.id = V++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : $,
        this.set = e ? e.getSetter : Gt
    }, It = ((zt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    zt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    zt.totalDuration = function totalDuration(t) {
        if (!arguments.length)
            return this._tDur;
        this._dirty = 0;
        var e = this._time / this._dur || 0;
        return Fa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)),
        this._tTime ? ya(this, e * t + ua(this)) : this
    }
    ,
    zt.totalTime = function totalTime(t, e) {
        if (Ct(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (ya(this, t); r.parent; )
                r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Aa(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t),
        ea(this, t, e)),
        this
    }
    ,
    zt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time
    }
    ,
    zt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    zt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    zt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1
    }
    ,
    zt.timeScale = function timeScale(t) {
        if (!arguments.length)
            return this._rts === -B ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -B ? 0 : this._rts,
        function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent;
            return t
        }(this.totalTime(gt(-this._delay, this._tDur, e), !0))
    }
    ,
    zt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ct(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))),
        this) : this._ps
    }
    ,
    zt.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Aa(e, this, t - this._delay),
            this
        }
        return this._start
    }
    ,
    zt.endTime = function endTime(t) {
        return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
    }
    ,
    zt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    zt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            r = e._start + r / (e._ts || 1),
            e = e._dp;
        return r
    }
    ,
    zt.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t,
        Ga(this)) : this._repeat
    }
    ,
    zt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? (this._rDelay = t,
        Ga(this)) : this._rDelay
    }
    ,
    zt.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    zt.seek = function seek(t, e) {
        return this.totalTime(Ia(this, t), s(e))
    }
    ,
    zt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e))
    }
    ,
    zt.play = function play(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    zt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    zt.pause = function pause(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    zt.resume = function resume() {
        return this.paused(!1)
    }
    ,
    zt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)),
        this) : this._rts < 0
    }
    ,
    zt.invalidate = function invalidate() {
        return this._initted = 0,
        this._zTime = -B,
        this
    }
    ,
    zt.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - B))
    }
    ,
    zt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        r && (i[t + "Params"] = r),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t]
    }
    ,
    zt.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function Zm() {
                var t = i.then;
                i.then = null,
                o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                e(r),
                i.then = t
            }
            var r = o(t) ? t : ga;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Zm() : i._prom = Zm
        }
        )
    }
    ,
    zt.kill = function kill() {
        fb(this)
    }
    ,
    Animation);
    function Animation(t, e) {
        var r = t.parent || I;
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Fa(this, +t.duration, 1),
        this.data = t.data,
        m || Mt.wake(),
        r && Aa(r, this, e || 0 === e ? e : r._time, 1),
        t.reversed && this.reverse(),
        t.paused && this.paused(!0)
    }
    ha(It.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -B,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Rt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}),
            (r = i.call(this, t, e) || this).labels = {},
            r.smoothChildTiming = !!t.smoothChildTiming,
            r.autoRemoveChildren = !!t.autoRemoveChildren,
            r._sort = s(t.sortChildren),
            r.parent && za(r.parent, _assertThisInitialized(r)),
            t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger),
            r
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return t.to = function to(t, e, r, i) {
            return new Xt(t,ca(arguments, 0, this),Ia(this, p(e) ? i : r)),
            this
        }
        ,
        t.from = function from(t, e, r, i) {
            return new Xt(t,ca(arguments, 1, this),Ia(this, p(e) ? i : r)),
            this
        }
        ,
        t.fromTo = function fromTo(t, e, r, i, n) {
            return new Xt(t,ca(arguments, 2, this),Ia(this, p(e) ? n : i)),
            this
        }
        ,
        t.set = function set(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            ma(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Xt(t,e,Ia(this, r),1),
            this
        }
        ,
        t.call = function call(t, e, r) {
            return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r))
        }
        ,
        t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = a,
            r.onCompleteParams = s,
            r.parent = this,
            new Xt(t,r,Ia(this, n)),
            this
        }
        ,
        t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
            return r.runBackwards = 1,
            ma(r).immediateRender = s(r.immediateRender),
            this.staggerTo(t, e, r, i, n, a, o)
        }
        ,
        t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
            return i.startAt = r,
            ma(i).immediateRender = s(i.immediateRender),
            this.staggerTo(t, e, i, n, a, o, u)
        }
        ,
        t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, c, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== I && m - B < t && 0 <= t ? m : t < B ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _,
                t += this._time - _),
                i = v,
                f = this._start,
                u = !(l = this._ts),
                y && (g || (_ = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat && (p = this._yoyo,
                o = g + this._rDelay,
                (g < (i = aa(v % o)) || m === v) && (i = g),
                (s = ~~(v / o)) && s === v / o && (i = g,
                s--),
                d = _t(this._tTime, o),
                !_ && this._tTime && d !== s && (d = s),
                p && 1 & s && (i = g - i,
                c = 1),
                s !== d && !this._lock)) {
                    var T = p && 1 & d
                      , b = T === (p && 1 & s);
                    if (s < d && (T = !T),
                    _ = T ? 0 : g,
                    this._lock = 1,
                    this.render(_ || (c ? 0 : aa(s * o)), e, !g)._lock = 0,
                    !e && this.parent && bt(this, "onRepeat"),
                    this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1),
                    _ !== this._time || u != !this._ts)
                        return this;
                    if (b && (this._lock = 2,
                    _ = T ? g + 1e-4 : -1e-4,
                    this.render(_, !0),
                    this.vars.repeatRefresh && !c && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !u)
                        return this;
                    Ab(this, c)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r)
                        for (i = t._first; i && i._start <= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= r; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, aa(_), aa(i))) && (v -= i - (i = h._start)),
                this._tTime = v,
                this._time = i,
                this._act = !l,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t),
                _ || !i || e || bt(this, "onStart"),
                _ <= i && 0 <= t)
                    for (n = this._first; n; ) {
                        if (a = n._next,
                        (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = -B);
                                break
                            }
                        }
                        n = a
                    }
                else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (a = n._prev,
                        (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !u) {
                                h = 0,
                                a && (v += this._zTime = w ? -B : B);
                                break
                            }
                        }
                        n = a
                    }
                }
                if (h && !e && (this.pause(),
                h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1,
                this._ts))
                    return this._start = f,
                    xa(this),
                    this.render(t, e, r);
                this._onUpdate && !e && bt(this, "onUpdate", !0),
                (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1),
                e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0),
                !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        t.add = function add(t, e) {
            var r = this;
            if (p(e) || (e = Ia(this, e)),
            !(t instanceof It)) {
                if (J(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    ra(this);
                if (n(t))
                    return this.addLabel(t, e);
                if (!o(t))
                    return this;
                t = Xt.delayedCall(0, t)
            }
            return this !== t ? Aa(this, t, e) : this
        }
        ,
        t.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -z);
            for (var n = [], a = this._first; a; )
                a._start >= i && (a instanceof Xt ? e && n.push(a) : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
                a = a._next;
            return n
        }
        ,
        t.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        t.remove = function remove(t) {
            return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t),
            t === this._recent && (this._recent = this._last),
            ra(this))
        }
        ,
        t.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            i.prototype.totalTime.call(this, t, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        t.addLabel = function addLabel(t, e) {
            return this.labels[t] = Ia(this, e),
            this
        }
        ,
        t.removeLabel = function removeLabel(t) {
            return delete this.labels[t],
            this
        }
        ,
        t.addPause = function addPause(t, e, r) {
            var i = Xt.delayedCall(0, e || O, r);
            return i.data = "isPause",
            this._hasPause = 1,
            Aa(this, i, Ia(this, t))
        }
        ,
        t.removePause = function removePause(t) {
            var e = this._first;
            for (t = Ia(this, t); e; )
                e._start === t && "isPause" === e.data && qa(e),
                e = e._next
        }
        ,
        t.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Lt !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        t.getTweensOf = function getTweensOf(t, e) {
            for (var r, i = [], n = yt(t), a = this._first, s = p(e); a; )
                a instanceof Xt ? ba(a._targets, n) && (s ? (!Lt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
                a = a._next;
            return i
        }
        ,
        t.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this
              , i = Ia(r, t)
              , n = e.startAt
              , a = e.onStart
              , s = e.onStartParams
              , o = Xt.to(r, ha(e, {
                ease: "none",
                lazy: !1,
                time: i,
                duration: e.duration || Math.abs((i - (n && "time"in n ? n.time : r._time)) / r.timeScale()) || B,
                onStart: function onStart() {
                    r.pause();
                    var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                    o._dur !== t && Fa(o, t).render(o._time, !0, !0),
                    a && a.apply(o, s || [])
                }
            }));
            return o
        }
        ,
        t.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ha({
                startAt: {
                    time: Ia(this, t)
                }
            }, r))
        }
        ,
        t.recent = function recent() {
            return this._recent
        }
        ,
        t.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time),
            db(this, Ia(this, t))
        }
        ,
        t.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time),
            db(this, Ia(this, t), 1)
        }
        ,
        t.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B)
        }
        ,
        t.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n; )
                n._start >= r && (n._start += t),
                n = n._next;
            if (e)
                for (i in a)
                    a[i] >= r && (a[i] += t);
            return ra(this)
        }
        ,
        t.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return i.prototype.invalidate.call(this)
        }
        ,
        t.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._time = this._tTime = this._pTime = 0,
            t && (this.labels = {}),
            ra(this)
        }
        ,
        t.totalDuration = function totalDuration(t) {
            var e, r, i, n, a = 0, s = this, o = s._last, u = z;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o; )
                    e = o._prev,
                    o._dirty && o.totalDuration(),
                    u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1,
                    Aa(s, o, i - o._delay, 1)._lock = 0) : u = i,
                    i < 0 && o._ts && (a -= i,
                    (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts,
                    s._time -= i,
                    s._tTime -= i),
                    s.shiftChildren(-i, !1, -Infinity),
                    u = 0),
                    a < (r = xa(o)) && o._ts && (a = r),
                    o = e;
                Fa(s, s === I && s._time > a ? s._time : a, 1),
                s._dirty = 0
            }
            return s._tDur
        }
        ,
        Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (ea(I, wa(t, I)),
            d = Mt.frame),
            Mt.frame >= ft) {
                ft += U.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Mt.sleep()
                }
            }
        }
        ,
        Timeline
    }(It);
    ha(Rt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Mb(t, e, i, a, s, u) {
        var h, l, f, d;
        if (ht[t] && !1 !== (h = new ht[t]).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
            if (o(t) && (t = Yt(t, s, e, i, a)),
            !r(t) || t.style && t.nodeType || J(t))
                return n(t) ? Yt(t, s, e, i, a) : t;
            var u, h = {};
            for (u in t)
                h[u] = Yt(t[u], s, e, i, a);
            return h
        }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),
        i !== c))
            for (f = i._ptLookup[i._targets.indexOf(s)],
            d = h._props.length; d--; )
                f[h._props[d]] = l;
        return h
    }
    var Lt, Bt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
        o(i) && (i = i(a || 0, t, s));
        var f, d = t[e], p = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, c = o(d) ? l ? jt : Vt : Zt;
        if (n(i) && (~i.indexOf("random(") && (i = ab(i)),
        "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (La(p) || 0))),
        p !== i)
            return isNaN(p * i) ? (d || e in t || L(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, p, c, _ = new ee(this._pt,t,e,0,1,Wt,null,n), m = 0, g = 0;
                for (_.b = r,
                _.e = i,
                r += "",
                (p = ~(i += "").indexOf("random(")) && (i = ab(i)),
                a && (a(c = [r, i], t, e),
                r = c[0],
                i = c[1]),
                u = r.match(et) || []; o = et.exec(i); )
                    l = o[0],
                    f = i.substring(m, o.index),
                    h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                    _._pt = {
                        _next: _._pt,
                        p: f || 1 === g ? f : ",",
                        s: d,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                        m: h && h < 4 ? Math.round : 0
                    },
                    m = et.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "",
                _.fp = s,
                (it.test(i) || p) && (_.e = 0),
                this._pt = _
            }
            .call(this, t, e, p, i, c, h || U.stringFilter, l)) : (f = new ee(this._pt,t,e,+p || 0,i - (p || 0),"boolean" == typeof d ? Jt : Qt,0,c),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            this._pt = f)
    }, qt = function _initTween(t, e) {
        var r, i, n, a, o, u, h, l, f, d, p, c, _, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender, T = m.lazy, b = m.onUpdate, w = m.onUpdateParams, x = m.callbackScope, k = m.runBackwards, O = m.yoyoEase, M = m.keyframes, C = m.autoRevert, A = t._dur, P = t._startAt, S = t._targets, D = t.parent, F = D && "nested" === D.data ? D.parent._targets : S, z = "auto" === t._overwrite, E = t.timeline;
        if (!E || M && g || (g = "none"),
        t._ease = Ft(g, R.ease),
        t._yEase = O ? Dt(Ft(!0 === O ? g : O, R.ease)) : 0,
        O && t._yoyo && !t._repeat && (O = t._yEase,
        t._yEase = t._ease,
        t._ease = O),
        !E) {
            if (c = (l = S[0] ? Z(S[0]).harness : 0) && m[l.prop],
            r = la(m, st),
            P && P.render(-1, !0).kill(),
            v) {
                if (qa(t._startAt = Xt.set(S, ha({
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: s(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0
                }, v))),
                y)
                    if (0 < e)
                        C || (t._startAt = 0);
                    else if (A && !(e < 0 && P))
                        return void (t._zTime = e)
            } else if (k && A)
                if (P)
                    C || (t._startAt = 0);
                else if (e && (y = !1),
                n = ha({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y && s(T),
                    immediateRender: y,
                    stagger: 0,
                    parent: D
                }, r),
                c && (n[l.prop] = c),
                qa(t._startAt = Xt.set(S, n)),
                y) {
                    if (!e)
                        return
                } else
                    _initTween(t._startAt, B);
            for (t._pt = 0,
            T = A && s(T) || T && !A,
            i = 0; i < S.length; i++) {
                if (h = (o = S[i])._gsap || Y(S)[i]._gsap,
                t._ptLookup[i] = d = {},
                ut[h.id] && da(),
                p = F === S ? i : F.indexOf(o),
                l && !1 !== (f = new l).init(o, c || r, t, p, F) && (t._pt = a = new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(t) {
                    d[t] = a
                }),
                f.priority && (u = 1)),
                !l || c)
                    for (n in r)
                        ht[n] && (f = Mb(n, r, t, p, o, F)) ? f.priority && (u = 1) : d[n] = a = Bt.call(t, o, n, "get", r[n], p, F, 0, m.stringFilter);
                t._op && t._op[i] && t.kill(o, t._op[i]),
                z && t._pt && (Lt = t,
                I.killTweensOf(o, d, t.globalTime(0)),
                _ = !t.parent,
                Lt = 0),
                t._pt && T && (ut[h.id] = 1)
            }
            u && te(t),
            t._onInit && t._onInit(t)
        }
        t._from = !E && !!m.runBackwards,
        t._onUpdate = b,
        t._initted = (!t._op || t._pt) && !_
    }, Yt = function _parseFuncOrString(t, e, r, i, a) {
        return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? ab(t) : t
    }, Nt = pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Xt = function(D) {
        function Tween(t, e, i, n) {
            var a;
            "number" == typeof e && (i.duration = e,
            e = i,
            i = null);
            var o, h, l, f, d, c, _, m, g = (a = D.call(this, n ? e : ma(e), i) || this).vars, v = g.duration, y = g.delay, T = g.immediateRender, b = g.stagger, w = g.overwrite, x = g.keyframes, k = g.defaults, C = g.scrollTrigger, A = g.yoyoEase, P = a.parent, S = (J(t) ? p(t[0]) : "length"in e) ? [t] : yt(t);
            if (a._targets = S.length ? Y(S) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = w,
            x || b || u(v) || u(y)) {
                if (e = a.vars,
                (o = a.timeline = new Rt({
                    data: "nested",
                    defaults: k || {}
                })).kill(),
                o.parent = _assertThisInitialized(a),
                x)
                    ha(o.vars.defaults, {
                        ease: "none"
                    }),
                    x.forEach(function(t) {
                        return o.to(S, t, ">")
                    });
                else {
                    if (f = S.length,
                    _ = b ? Sa(b) : O,
                    r(b))
                        for (d in b)
                            ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
                    for (h = 0; h < f; h++) {
                        for (d in l = {},
                        e)
                            Ut.indexOf(d) < 0 && (l[d] = e[d]);
                        l.stagger = 0,
                        A && (l.yoyoEase = A),
                        m && ct(l, m),
                        c = S[h],
                        l.duration = +Yt(v, _assertThisInitialized(a), h, c, S),
                        l.delay = (+Yt(y, _assertThisInitialized(a), h, c, S) || 0) - a._delay,
                        !b && 1 === f && l.delay && (a._delay = y = l.delay,
                        a._start += y,
                        l.delay = 0),
                        o.to(c, l, _(h, c, S))
                    }
                    o.duration() ? v = y = 0 : a.timeline = 0
                }
                v || a.duration(v = o.duration())
            } else
                a.timeline = 0;
            return !0 === w && (Lt = _assertThisInitialized(a),
            I.killTweensOf(S),
            Lt = 0),
            P && za(P, _assertThisInitialized(a)),
            (T || !v && !x && a._start === aa(P._time) && s(T) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -B,
            a.render(Math.max(0, -y))),
            C && Ba(_assertThisInitialized(a), C),
            a
        }
        _inheritsLoose(Tween, D);
        var t = Tween.prototype;
        return t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, p = this._tDur, c = this._dur, _ = p - B < t && 0 <= t ? p : t < B ? 0 : t;
            if (c) {
                if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = _,
                    l = this.timeline,
                    this._repeat) {
                        if (s = c + this._rDelay,
                        (c < (i = aa(_ % s)) || p === _) && (i = c),
                        (a = ~~(_ / s)) && a === _ / s && (i = c,
                        a--),
                        (u = this._yoyo && 1 & a) && (f = this._yEase,
                        i = c - i),
                        o = _t(this._tTime, s),
                        i === d && !r && this._initted)
                            return this;
                        a !== o && (l && this._yEase && Ab(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                        this.render(aa(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ca(this, t < 0 ? t : i, r, e))
                            return this._tTime = 0,
                            this;
                        if (c !== this._dur)
                            return this.render(t, e, r)
                    }
                    for (this._tTime = _,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = h = (f || this._ease)(i / c),
                    this._from && (this.ratio = h = 1 - h),
                    !i || d || e || bt(this, "onStart"),
                    n = this._pt; n; )
                        n.r(h, n.d),
                        n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    bt(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"),
                    _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && c || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1),
                    e || t < 0 && !d || !_ && !d || (bt(this, _ === p ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || _ < p && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s = t.ratio, o = e < 0 || !e && s && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1, u = t._rDelay, h = 0;
                    if (u && t._repeat && (h = gt(0, t._tDur, e),
                    _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    t._initted || !Ca(t, e, i, r))
                        if (o !== s || i || t._zTime === B || !e && t._zTime) {
                            for (a = t._zTime,
                            t._zTime = e || (r ? B : 0),
                            r = r || e && !a,
                            t.ratio = o,
                            t._from && (o = 1 - o),
                            t._time = 0,
                            t._tTime = h,
                            r || bt(t, "onStart"),
                            n = t._pt; n; )
                                n.r(o, n.d),
                                n = n._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                            t._onUpdate && !r && bt(t, "onUpdate"),
                            h && t._repeat && !r && t.parent && bt(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1),
                            r || (bt(t, o ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
                        } else
                            t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        t.targets = function targets() {
            return this._targets
        }
        ,
        t.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            D.prototype.invalidate.call(this)
        }
        ,
        t.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e) && (this._lazy = 0,
            this.parent))
                return fb(this);
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite)._first || fb(this),
                this.parent && r !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / r),
                this
            }
            var i, a, s, o, u, h, l, f = this._targets, d = t ? yt(t) : f, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(f, d))
                return "all" === e && (this._pt = 0),
                fb(this);
            for (i = this._op = this._op || [],
            "all" !== e && (n(e) && (u = {},
            _(e, function(t) {
                return u[t] = 1
            }),
            e = u),
            e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0, o = s && s.aliases;
                if (!o)
                    return e;
                for (i in r = ct({}, e),
                o)
                    if (i in r)
                        for (n = (a = o[i].split(",")).length; n--; )
                            r[a[n]] = r[i];
                return r
            }(f, e)),
            l = f.length; l--; )
                if (~d.indexOf(f[l]))
                    for (u in a = p[l],
                    "all" === e ? (i[l] = e,
                    o = a,
                    s = {}) : (s = i[l] = i[l] || {},
                    o = e),
                    o)
                        (h = a && a[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"),
                        delete a[u]),
                        "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && c && fb(this),
            this
        }
        ,
        Tween.to = function to(t, e, r) {
            return new Tween(t,e,r)
        }
        ,
        Tween.from = function from(t, e) {
            return new Tween(t,ca(arguments, 1))
        }
        ,
        Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        Tween.fromTo = function fromTo(t, e, r) {
            return new Tween(t,ca(arguments, 2))
        }
        ,
        Tween.set = function set(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new Tween(t,e)
        }
        ,
        Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }
        ,
        Tween
    }(It);
    ha(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Xt[r] = function() {
            var t = new Rt
              , e = vt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
            t[r].apply(t, e)
        }
    });
    function Xb(t, e, r) {
        return t.setAttribute(e, r)
    }
    function dc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Zt = function _setterPlain(t, e, r) {
        return t[e] = r
    }
      , Vt = function _setterFunc(t, e, r) {
        return t[e](r)
    }
      , jt = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , Gt = function _getSetter(t, e) {
        return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Xb : Zt
    }
      , Qt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }
      , Jt = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , Wt = function _renderComplexString(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , $t = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , Ht = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; )
            n = a._next,
            a.p === i && a.modifier(t, e, r),
            a = n
    }
      , Kt = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1),
            i = r;
        return !e
    }
      , te = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next,
            r = i; r && r.pr > a.pr; )
                r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
            (a._next = r) ? r._prev = a : n = a,
            a = e
        }
        t._pt = i
    }
      , ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set,
        this.set = dc,
        this.m = t,
        this.mt = r,
        this.tween = e
    }
    ,
    PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e,
        this.s = i,
        this.c = n,
        this.p = r,
        this.r = a || Qt,
        this.d = s || this,
        this.set = o || Zt,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    _(pt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return st[t] = 1
    }),
    at.TweenMax = at.TweenLite = Xt,
    at.TimelineLite = at.TimelineMax = Rt,
    I = new Rt({
        sortChildren: !1,
        defaults: R,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    U.stringFilter = qb;
    var re = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name
                      , r = o(t)
                      , i = e && !r && t.init ? function() {
                        this._props = []
                    }
                    : t
                      , n = {
                        init: O,
                        render: $t,
                        add: Bt,
                        kill: Kt,
                        modifier: Ht,
                        rawVars: 0
                    }
                      , a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Gt,
                        aliases: {},
                        register: 0
                    };
                    if (Ct(),
                    t !== i) {
                        if (ht[e])
                            return;
                        ha(i, ha(la(t, n), a)),
                        ct(i.prototype, ct(n, la(t, a))),
                        ht[i.prop = e] = i,
                        t.targetTest && (dt.push(i),
                        st[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    N(e, i),
                    t.register && t.register(ie, i, ee)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Rt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            n(i) && (i = yt(i)[0]);
            var a = Z(i || {}).get
              , s = e ? ga : fa;
            return "native" === e && (e = ""),
            i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function(t, e, r) {
                return s((ht[t] && ht[t].get || a)(i, t, e, r))
            }
            : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = yt(r)).length) {
                var n = r.map(function(t) {
                    return ie.quickSetter(t, e, i)
                })
                  , a = n.length;
                return function(t) {
                    for (var e = a; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var s = ht[e]
              , o = Z(r)
              , u = o.harness && (o.harness.aliases || {})[e] || e
              , h = s ? function(t) {
                var e = new s;
                c._pt = 0,
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && $t(1, c)
            }
            : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Ft(t.ease, R.ease)),
            ka(R, t || {})
        },
        config: function config(t) {
            return ka(U, t || {})
        },
        registerEffect: function registerEffect(t) {
            var n = t.name
              , i = t.effect
              , e = t.plugins
              , a = t.defaults
              , s = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.")
            }),
            lt[n] = function(t, e, r) {
                return i(yt(t), ha(e || {}, a), r)
            }
            ,
            s && (Rt.prototype[n] = function(t, e, i) {
                return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i)
            }
            )
        },
        registerEase: function registerEase(t, e) {
            At[t] = Ft(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Ft(t, e) : At
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Rt(t);
            for (n.smoothChildTiming = s(t.smoothChildTiming),
            I.remove(n),
            n._dp = 0,
            n._time = n._tTime = I._time,
            r = I._first; r; )
                i = r._next,
                !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || Aa(n, r, r._start - r._delay),
                r = i;
            return Aa(I, n, 0),
            n
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return J(e) ? Za(e, wrap(0, e.length), t) : Ja(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e
                  , n = 2 * i;
                return J(e) ? Za(e, wrapYoyo(0, e.length - 1), t) : Ja(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Sa,
            random: Va,
            snap: Ua,
            normalize: function normalize(t, e, r) {
                return Tt(t, e, 0, 1, r)
            },
            getUnit: La,
            clamp: function clamp(e, r, t) {
                return Ja(t, function(t) {
                    return gt(e, r, t)
                })
            },
            splitColor: lb,
            toArray: yt,
            mapRange: Tt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || La(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!a) {
                    var s, o, u, h, l, f = n(e), d = {};
                    if (!0 === t && (i = 1) && (t = null),
                    f)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (J(e) && !J(r)) {
                        for (u = [],
                        h = e.length,
                        l = h - 2,
                        o = 1; o < h; o++)
                            u.push(interpolate(e[o - 1], e[o]));
                        h--,
                        a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        t = r
                    } else
                        i || (e = ct(J(e) ? [] : {}, e));
                    if (!u) {
                        for (s in r)
                            Bt.call(d, e, s, "get", r[s]);
                        a = function func(t) {
                            return $t(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Ja(t, a)
            },
            shuffle: Ra
        },
        install: K,
        effects: lt,
        ticker: Mt,
        updateRoot: Rt.updateRoot,
        plugins: ht,
        globalTimeline: I,
        core: {
            PropTween: ee,
            globals: N,
            Tween: Xt,
            Timeline: Rt,
            Animation: It,
            getCache: Z,
            _removeLinkedListItem: pa
        }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return re[t] = Xt[t]
    }),
    Mt.add(Rt.updateRoot),
    c = re.to({}, {
        duration: 0
    });
    function hc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
    function jc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (n(i) && (e = {},
                    _(i, function(t) {
                        return e[t] = 1
                    }),
                    i = e),
                    a) {
                        for (r in e = {},
                        i)
                            e[r] = a(i[r]);
                        i = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--; )
                                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = hc(n, r)),
                                n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var ie = re.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a),
                this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, jc("roundProps", Ta), jc("modifiers"), jc("snap", Ua)) || re;
    Xt.version = Rt.version = ie.version = "3.4.2",
    f = 1,
    t() && Ct();
    function Uc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function Vc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function Wc(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function Xc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }
    function Yc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function Zc(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function $c(t, e, r) {
        return t.style[e] = r
    }
    function _c(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function ad(t, e, r) {
        return t._gsap[e] = r
    }
    function bd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function cd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r,
        a.renderTransform(n, a)
    }
    function dd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r,
        a.renderTransform(n, a)
    }
    function hd(t, e) {
        var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
        return r.style ? r : ae.createElement(t)
    }
    function id(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ee, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && id(t, Ne(e) || e, 1) || ""
    }
    function ld() {
        (function _windowExists() {
            return "undefined" != typeof window
        }
        )() && window.document && (ne = window,
        ae = ne.document,
        se = ae.documentElement,
        ue = hd("div") || {
            style: {}
        },
        he = hd("div"),
        Be = Ne(Be),
        qe = Be + "Origin",
        ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        fe = !!Ne("perspective"),
        oe = 1)
    }
    function md(t) {
        var e, r = hd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (se.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = md
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
        se.removeChild(r),
        this.style.cssText = a,
        e
    }
    function nd(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function od(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = md.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === md || (r = md.call(e, !0)),
        !r || r.width || r.x || r.y ? r : {
            x: +nd(e, ["x", "cx", "x1"]) || 0,
            y: +nd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function pd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !od(t))
    }
    function qd(t, e) {
        if (e) {
            var r = t.style;
            e in Se && e !== qe && (e = Be),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Ee, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }
    function rd(t, e, r, i, n, a) {
        var s = new ee(t._pt,e,r,0,1,a ? Zc : Yc);
        return (t._pt = s).b = i,
        s.e = n,
        t._props.push(r),
        s
    }
    function td(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = ue.style, f = Ie.test(e), d = "svg" === t.tagName.toLowerCase(), p = (d ? "client" : "offset") + (f ? "Width" : "Height"), c = "px" === i, _ = "%" === i;
        return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || c || (u = td(t, e, r, "px")),
        o = t.getCTM && pd(t),
        _ && (Se[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (c ? h : i),
        a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode,
        o && (a = (t.ownerSVGElement || {}).parentNode),
        a && a !== ae && a.appendChild || (a = ae.body),
        (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = id(t, "position")),
        a === t && (l.position = "static"),
        a.appendChild(ue),
        n = ue[p],
        a.removeChild(ue),
        l.position = "absolute",
        f && _ && ((s = Z(a)).time = Mt.time,
        s.width = a[p]),
        aa(c ? n * u / 100 : n && u ? 100 / n * u : 0))))
    }
    function ud(t, e, r, i) {
        var n;
        return oe || ld(),
        e in Le && "transform" !== e && ~(e = Le[e]).indexOf(",") && (e = e.split(",")[0]),
        Se[e] && "transform" !== e ? (n = Ge(t, i),
        n = "transformOrigin" !== e ? n[e] : Qe(id(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ze[e] && Ze[e](t, e, r) || id(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(n + "").indexOf(" ") ? td(t, e, n, r) + r : n
    }
    function vd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ne(e, t, 1)
              , a = n && id(t, n, 1);
            a && a !== r ? (e = n,
            r = a) : "borderColor" === e && (r = id(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, p, c, _, m, g, v = new ee(this._pt,t.style,e,0,1,Wt), y = 0, T = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = id(t, e) || i,
        t.style[e] = r),
        qb(s = [r, i]),
        i = s[1],
        u = (r = s[0]).match(tt) || [],
        (i.match(tt) || []).length) {
            for (; o = tt.exec(i); )
                d = o[0],
                c = i.substring(y, o.index),
                l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1),
                d !== (f = u[T++] || "") && (h = parseFloat(f) || 0,
                m = f.substr((h + "").length),
                (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                p = parseFloat(d),
                _ = d.substr((p + "").length),
                y = tt.lastIndex - _.length,
                _ || (_ = _ || U.units[e] || m,
                y === i.length && (i += _,
                v.e += _)),
                m !== _ && (h = td(t, e, f, _) || 0),
                v._pt = {
                    _next: v._pt,
                    p: c || 1 === T ? c : ",",
                    s: h,
                    c: g ? g * p : p - h,
                    m: l && l < 4 ? Math.round : 0
                });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? Zc : Yc;
        return it.test(i) && (v.e = 0),
        this._pt = v
    }
    function xd(t) {
        var e = t.split(" ")
          , r = e[0]
          , i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
        r = i,
        i = t),
        e[0] = Xe[r] || r,
        e[1] = Xe[i] || i,
        e.join(" ")
    }
    function yd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    Se[r] && (i = 1,
                    r = "transformOrigin" === r ? qe : Be),
                    qd(a, r);
            i && (qd(a, Be),
            u && (u.svg && a.removeAttribute("transform"),
            Ge(a, 1),
            u.uncache = 1))
        }
    }
    function Cd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Dd(t) {
        var e = id(t, Be);
        return Cd(e) ? Ve : e.substr(7).match(H).map(aa)
    }
    function Ed(t, e) {
        var r, i, n, a, s = t._gsap || Z(t), o = t.style, u = Dd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && t.offsetParent || (a = 1,
        i = t.nextSibling,
        se.appendChild(t)),
        u = Dd(t),
        n ? o.display = n : qd(t, "display"),
        a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }
    function Fd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Ed(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, p = h.xOffset || 0, c = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "), w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o,
        w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o,
        x = u) : (w = (s = od(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w),
        x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)),
        i || !1 !== i && h.smooth ? (y = w - f,
        T = x - d,
        h.xOffset = p + (y * _ + T * g) - y,
        h.yOffset = c + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
        h.xOrigin = w,
        h.yOrigin = x,
        h.smooth = !!i,
        h.origin = e,
        h.originIsAbsolute = !!r,
        t.style[qe] = "0px 0px",
        a && (rd(a, h, "xOrigin", f, w),
        rd(a, h, "yOrigin", d, x),
        rd(a, h, "xOffset", p, h.xOffset),
        rd(a, h, "yOffset", c, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + x)
    }
    function Id(t, e, r) {
        var i = La(e);
        return aa(parseFloat(e) + parseFloat(td(t, "x", r + "px", i))) + i
    }
    function Pd(t, e, r, i, a, s) {
        var o, u, h = 360, l = n(a), f = parseFloat(a) * (l && ~a.indexOf("rad") ? De : 1), d = s ? f * s : f - i, p = i + d + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h),
        "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)),
        t._pt = u = new ee(t._pt,e,r,i,d,Vc),
        u.e = p,
        u.u = "deg",
        t._props.push(r),
        u
    }
    function Qd(t, e, r) {
        var i, n, a, s, o, u, h, l = he.style, f = r._gsap;
        for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;",
        l[Be] = e,
        ae.body.appendChild(he),
        i = Ge(he, 1),
        Se)
            (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = La(a) !== (h = La(s)) ? td(r, n, a, h) : parseFloat(a),
            u = parseFloat(s),
            t._pt = new ee(t._pt,f,n,o,u - o,Uc),
            t._pt.u = h || 0,
            t._props.push(n));
        ae.body.removeChild(he)
    }
    var ne, ae, se, oe, ue, he, le, fe, de = At.Power0, pe = At.Power1, ce = At.Power2, _e = At.Power3, me = At.Power4, ge = At.Linear, ve = At.Quad, ye = At.Cubic, Te = At.Quart, be = At.Quint, we = At.Strong, xe = At.Elastic, ke = At.Back, Oe = At.SteppedEase, Me = At.Bounce, Ce = At.Sine, Ae = At.Expo, Pe = At.Circ, Se = {}, De = 180 / Math.PI, Fe = Math.PI / 180, ze = Math.atan2, Ee = /([A-Z])/g, Ie = /(?:left|right|width|margin|padding|x)/i, Re = /[\s,\(]\S/, Le = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Be = "transform", qe = Be + "Origin", Ye = "O,Moz,ms,Ms,Webkit".split(","), Ne = function _checkPropPrefix(t, e, r) {
        var i = (e || ue).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t
    }, Ue = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Xe = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ze = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ee(t._pt,e,r,0,0,yd);
                return a.u = i,
                a.pr = -10,
                a.tween = n,
                t._props.push(r),
                1
            }
        }
    }, Ve = [1, 0, 0, 1, 0, 0], je = {}, Ge = function _parseTransform(t, e) {
        var r = t._gsap || new Et(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, a, s, o, u, h, l, f, d, p, c, _, m, g, v, y, T, b, w, x, k, O, M, C, A, P, S, D, F, z, E, I = t.style, R = r.scaleX < 0, L = "deg", B = id(t, qe) || "0";
        return i = n = a = u = h = l = f = d = p = 0,
        s = o = 1,
        r.svg = !(!t.getCTM || !pd(t)),
        m = Ed(t, r.svg),
        r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"),
        Fd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        c = r.xOrigin || 0,
        _ = r.yOrigin || 0,
        m !== Ve && (T = m[0],
        b = m[1],
        w = m[2],
        x = m[3],
        i = k = m[4],
        n = O = m[5],
        6 === m.length ? (s = Math.sqrt(T * T + b * b),
        o = Math.sqrt(x * x + w * w),
        u = T || b ? ze(b, T) * De : 0,
        (f = w || x ? ze(w, x) * De + u : 0) && (o *= Math.cos(f * Fe)),
        r.svg && (i -= c - (c * T + _ * w),
        n -= _ - (c * b + _ * x))) : (E = m[6],
        F = m[7],
        P = m[8],
        S = m[9],
        D = m[10],
        z = m[11],
        i = m[12],
        n = m[13],
        a = m[14],
        h = (g = ze(E, D)) * De,
        g && (M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g)),
        C = O * v + S * y,
        A = E * v + D * y,
        P = k * -y + P * v,
        S = O * -y + S * v,
        D = E * -y + D * v,
        z = F * -y + z * v,
        k = M,
        O = C,
        E = A),
        l = (g = ze(-w, D)) * De,
        g && (v = Math.cos(-g),
        z = x * (y = Math.sin(-g)) + z * v,
        T = M = T * v - P * y,
        b = C = b * v - S * y,
        w = A = w * v - D * y),
        u = (g = ze(b, T)) * De,
        g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)),
        C = k * v + O * y,
        b = b * v - T * y,
        O = O * v - k * y,
        T = M,
        k = C),
        h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
        l = 180 - l),
        s = aa(Math.sqrt(T * T + b * b + w * w)),
        o = aa(Math.sqrt(O * O + E * E)),
        g = ze(k, O),
        f = 2e-4 < Math.abs(g) ? g * De : 0,
        p = z ? 1 / (z < 0 ? -z : z) : 0),
        r.svg && (M = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !Cd(id(t, Be)),
        M && t.setAttribute("transform", M))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1,
        f += u <= 0 ? 180 : -180,
        u += u <= 0 ? 180 : -180) : (o *= -1,
        f += f <= 0 ? 180 : -180)),
        r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px",
        r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px",
        r.z = a + "px",
        r.scaleX = aa(s),
        r.scaleY = aa(o),
        r.rotation = aa(u) + L,
        r.rotationX = aa(h) + L,
        r.rotationY = aa(l) + L,
        r.skewX = f + L,
        r.skewY = d + L,
        r.transformPerspective = p + "px",
        (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (I[qe] = Qe(B)),
        r.xOffset = r.yOffset = 0,
        r.force3D = U.force3D,
        r.renderTransform = r.svg ? tr : fe ? Ke : Je,
        r.uncache = 0,
        r
    }, Qe = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Je = function _renderNon3DTransforms(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Ke(t, e)
    }, We = "0deg", $e = "0px", He = ") ", Ke = function _renderCSSTransforms(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , a = r.x
          , s = r.y
          , o = r.z
          , u = r.rotation
          , h = r.rotationY
          , l = r.rotationX
          , f = r.skewX
          , d = r.skewY
          , p = r.scaleX
          , c = r.scaleY
          , _ = r.transformPerspective
          , m = r.force3D
          , g = r.target
          , v = r.zOrigin
          , y = ""
          , T = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== We || h !== We)) {
            var b, w = parseFloat(h) * Fe, x = Math.sin(w), k = Math.cos(w);
            w = parseFloat(l) * Fe,
            b = Math.cos(w),
            a = Id(g, a, x * b * -v),
            s = Id(g, s, -Math.sin(w) * -v),
            o = Id(g, o, k * b * -v + v)
        }
        _ !== $e && (y += "perspective(" + _ + He),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        !T && a === $e && s === $e && o === $e || (y += o !== $e || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + He),
        u !== We && (y += "rotate(" + u + He),
        h !== We && (y += "rotateY(" + h + He),
        l !== We && (y += "rotateX(" + l + He),
        f === We && d === We || (y += "skew(" + f + ", " + d + He),
        1 === p && 1 === c || (y += "scale(" + p + ", " + c + He),
        g.style[Be] = y || "translate(0, 0)"
    }, tr = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, p = o.skewX, c = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, b = o.yOffset, w = o.forceCSS, x = parseFloat(l), k = parseFloat(f);
        d = parseFloat(d),
        p = parseFloat(p),
        (c = parseFloat(c)) && (p += c = parseFloat(c),
        d += c),
        d || p ? (d *= Fe,
        p *= Fe,
        r = Math.cos(d) * _,
        i = Math.sin(d) * _,
        n = Math.sin(d - p) * -m,
        a = Math.cos(d - p) * m,
        p && (c *= Fe,
        s = Math.tan(p - c),
        n *= s = Math.sqrt(1 + s * s),
        a *= s,
        c && (s = Math.tan(c),
        r *= s = Math.sqrt(1 + s * s),
        i *= s)),
        r = aa(r),
        i = aa(i),
        n = aa(n),
        a = aa(a)) : (r = _,
        a = m,
        i = n = 0),
        (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = td(g, "x", l, "px"),
        k = td(g, "y", f, "px")),
        (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T),
        k = aa(k + y - (v * i + y * a) + b)),
        (u || h) && (s = g.getBBox(),
        x = aa(x + u / 100 * s.width),
        k = aa(k + h / 100 * s.height)),
        s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")",
        g.setAttribute("transform", s),
        w && (g.style[Be] = s)
    };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
          , i = "Bottom"
          , n = "Left"
          , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        Ze[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(t) {
                    return ud(e, t, r)
                }),
                5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
            s = {},
            o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            e.init(t, s, n)
        }
    });
    var er, rr, ir, nr = {
        name: "css",
        register: ld,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, p, c, _, m, g, v, y, T = this._props, b = t.style;
            for (f in oe || ld(),
            e)
                if ("autoRound" !== f && (s = e[f],
                !ht[f] || !Mb(f, e, r, i, t, n)))
                    if (h = typeof s,
                    l = Ze[f],
                    "function" === h && (h = typeof (s = s.call(r, i, t, n))),
                    "string" === h && ~s.indexOf("random(") && (s = ab(s)),
                    l)
                        l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2))
                        this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
                    else {
                        if (a = ud(t, f),
                        u = parseFloat(a),
                        (c = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                        o = parseFloat(s),
                        f in Le && ("autoAlpha" === f && (1 === u && "hidden" === ud(t, "visibility") && o && (u = 0),
                        rd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = Le[f]).indexOf(",") && (f = f.split(",")[0])),
                        _ = f in Se)
                            if (m || ((g = t._gsap).renderTransform || Ge(t),
                            v = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new ee(this._pt,b,Be,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new ee(this._pt,g,"scaleY",g.scaleY,c ? c * o : o - g.scaleY),
                                T.push("scaleY", f),
                                f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    s = xd(s),
                                    g.svg ? Fd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && rd(this, g, "zOrigin", g.zOrigin, p),
                                    rd(this, b, f, Qe(a), Qe(s)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    Fd(t, s, 1, v, 0, this);
                                    continue
                                }
                                if (f in je) {
                                    Pd(this, g, f, u, s, c);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    rd(this, g, "smooth", g.smooth, s);
                                    continue
                                }
                                if ("force3D" === f) {
                                    g[f] = s;
                                    continue
                                }
                                if ("transform" === f) {
                                    Qd(this, s, t);
                                    continue
                                }
                            }
                        else
                            f in b || (f = Ne(f) || f);
                        if (_ || (o || 0 === o) && (u || 0 === u) && !Re.test(s) && f in b)
                            (d = (a + "").substr((u + "").length)) !== (p = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = td(t, f, a, p)),
                            this._pt = new ee(this._pt,_ ? g : b,f,u,c ? c * o : o - u,"px" !== p || !1 === e.autoRound || _ ? Uc : Xc),
                            this._pt.u = p || 0,
                            d !== p && (this._pt.b = a,
                            this._pt.r = Wc);
                        else if (f in b)
                            vd.call(this, t, f, a, s);
                        else {
                            if (!(f in t)) {
                                L(f, s);
                                continue
                            }
                            this.add(t, f, t[f], s, i, n)
                        }
                        T.push(f)
                    }
            y && te(this)
        },
        get: ud,
        aliases: Le,
        getSetter: function getSetter(t, e, r) {
            var i = Le[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in Se && e !== qe && (t._gsap.x || ud(t, "x")) ? r && le === r ? "scale" === e ? bd : ad : (le = r || {}) && ("scale" === e ? cd : dd) : t.style && !q(t.style[e]) ? $c : ~e.indexOf("-") ? _c : Gt(t, e)
        },
        core: {
            _removeProperty: qd,
            _getMatrix: Ed
        }
    };
    ie.utils.checkPrefix = Ne,
    ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Se[t] = 1
    }),
    _(rr, function(t) {
        U.units[t] = "deg",
        je[t] = 1
    }),
    Le[ir[13]] = er + "," + rr,
    _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Le[e[1]] = ir[e[0]]
    }),
    _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        U.units[t] = "px"
    }),
    ie.registerPlugin(nr);
    var ar = ie.registerPlugin(nr) || ie
      , sr = ar.core.Tween;
    e.Back = ke,
    e.Bounce = Me,
    e.CSSPlugin = nr,
    e.Circ = Pe,
    e.Cubic = ye,
    e.Elastic = xe,
    e.Expo = Ae,
    e.Linear = ge,
    e.Power0 = de,
    e.Power1 = pe,
    e.Power2 = ce,
    e.Power3 = _e,
    e.Power4 = me,
    e.Quad = ve,
    e.Quart = Te,
    e.Quint = be,
    e.Sine = Ce,
    e.SteppedEase = Oe,
    e.Strong = we,
    e.TimelineLite = Rt,
    e.TimelineMax = Rt,
    e.TweenLite = Xt,
    e.TweenMax = sr,
    e.default = ar,
    e.gsap = ar;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

