/*! For license information please see app.js.LICENSE.txt */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 2)
}([function(t, e, n) {
    t.exports = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function e(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
        function n() {
            return (n = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function i(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            t.__proto__ = e
        }
        function r(t) {
            return (r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function s(t, e) {
            return (s = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function o(t, e, n) {
            return (o = function() {
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
            }() ? Reflect.construct : function(t, e, n) {
                var i = [null];
                i.push.apply(i, e);
                var r = new (Function.bind.apply(t, i));
                return n && s(r, n.prototype),
                r
            }
            ).apply(null, arguments)
        }
        function a(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (a = function(t) {
                if (null === t || -1 === Function.toString.call(t).indexOf("[native code]"))
                    return t;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, n)
                }
                function n() {
                    return o(t, arguments, r(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                s(n, t)
            }
            )(t)
        }
        function l(t, e) {
            try {
                var n = t()
            } catch (t) {
                return e(t)
            }
            return n && n.then ? n.then(void 0, e) : n
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var c, h = "2.9.7", u = function() {};
        !function(t) {
            t[t.off = 0] = "off",
            t[t.error = 1] = "error",
            t[t.warning = 2] = "warning",
            t[t.info = 3] = "info",
            t[t.debug = 4] = "debug"
        }(c || (c = {}));
        var f = c.off
          , p = function() {
            function t(t) {
                this.t = t
            }
            t.getLevel = function() {
                return f
            }
            ,
            t.setLevel = function(t) {
                return f = c[t]
            }
            ;
            var e = t.prototype;
            return e.error = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                this.i(console.error, c.error, e)
            }
            ,
            e.warn = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                this.i(console.warn, c.warning, e)
            }
            ,
            e.info = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                this.i(console.info, c.info, e)
            }
            ,
            e.debug = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                this.i(console.log, c.debug, e)
            }
            ,
            e.i = function(e, n, i) {
                n <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(i))
            }
            ,
            t
        }()
          , d = P
          , m = T
          , v = b
          , g = x
          , y = O
          , _ = "/"
          , w = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");
        function b(t, e) {
            for (var n, i = [], r = 0, s = 0, o = "", a = e && e.delimiter || _, l = e && e.whitelist || void 0, c = !1; null !== (n = w.exec(t)); ) {
                var h = n[0]
                  , u = n[1]
                  , f = n.index;
                if (o += t.slice(s, f),
                s = f + h.length,
                u)
                    o += u[1],
                    c = !0;
                else {
                    var p = ""
                      , d = n[2]
                      , m = n[3]
                      , v = n[4]
                      , g = n[5];
                    if (!c && o.length) {
                        var y = o.length - 1
                          , b = o[y];
                        (!l || l.indexOf(b) > -1) && (p = b,
                        o = o.slice(0, y))
                    }
                    o && (i.push(o),
                    o = "",
                    c = !1);
                    var T = m || v
                      , x = p || a;
                    i.push({
                        name: d || r++,
                        prefix: p,
                        delimiter: x,
                        optional: "?" === g || "*" === g,
                        repeat: "+" === g || "*" === g,
                        pattern: T ? S(T) : "[^" + k(x === a ? x : x + a) + "]+?"
                    })
                }
            }
            return (o || s < t.length) && i.push(o + t.substr(s)),
            i
        }
        function T(t, e) {
            return function(n, i) {
                var r = t.exec(n);
                if (!r)
                    return !1;
                for (var s = r[0], o = r.index, a = {}, l = i && i.decode || decodeURIComponent, c = 1; c < r.length; c++)
                    if (void 0 !== r[c]) {
                        var h = e[c - 1];
                        a[h.name] = h.repeat ? r[c].split(h.delimiter).map((function(t) {
                            return l(t, h)
                        }
                        )) : l(r[c], h)
                    }
                return {
                    path: s,
                    index: o,
                    params: a
                }
            }
        }
        function x(t, e) {
            for (var n = new Array(t.length), i = 0; i < t.length; i++)
                "object" == typeof t[i] && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$",E(e)));
            return function(e, i) {
                for (var r = "", s = i && i.encode || encodeURIComponent, o = !i || !1 !== i.validate, a = 0; a < t.length; a++) {
                    var l = t[a];
                    if ("string" != typeof l) {
                        var c, h = e ? e[l.name] : void 0;
                        if (Array.isArray(h)) {
                            if (!l.repeat)
                                throw new TypeError('Expected "' + l.name + '" to not repeat, but got array');
                            if (0 === h.length) {
                                if (l.optional)
                                    continue;
                                throw new TypeError('Expected "' + l.name + '" to not be empty')
                            }
                            for (var u = 0; u < h.length; u++) {
                                if (c = s(h[u], l),
                                o && !n[a].test(c))
                                    throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '"');
                                r += (0 === u ? l.prefix : l.delimiter) + c
                            }
                        } else if ("string" != typeof h && "number" != typeof h && "boolean" != typeof h) {
                            if (!l.optional)
                                throw new TypeError('Expected "' + l.name + '" to be ' + (l.repeat ? "an array" : "a string"))
                        } else {
                            if (c = s(String(h), l),
                            o && !n[a].test(c))
                                throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but got "' + c + '"');
                            r += l.prefix + c
                        }
                    } else
                        r += l
                }
                return r
            }
        }
        function k(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function S(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }
        function E(t) {
            return t && t.sensitive ? "" : "i"
        }
        function O(t, e, n) {
            for (var i = (n = n || {}).strict, r = !1 !== n.start, s = !1 !== n.end, o = n.delimiter || _, a = [].concat(n.endsWith || []).map(k).concat("$").join("|"), l = r ? "^" : "", c = 0; c < t.length; c++) {
                var h = t[c];
                if ("string" == typeof h)
                    l += k(h);
                else {
                    var u = h.repeat ? "(?:" + h.pattern + ")(?:" + k(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
                    e && e.push(h),
                    l += h.optional ? h.prefix ? "(?:" + k(h.prefix) + "(" + u + "))?" : "(" + u + ")?" : k(h.prefix) + "(" + u + ")"
                }
            }
            if (s)
                i || (l += "(?:" + k(o) + ")?"),
                l += "$" === a ? "$" : "(?=" + a + ")";
            else {
                var f = t[t.length - 1]
                  , p = "string" == typeof f ? f[f.length - 1] === o : void 0 === f;
                i || (l += "(?:" + k(o) + "(?=" + a + "))?"),
                p || (l += "(?=" + k(o) + "|" + a + ")")
            }
            return new RegExp(l,E(n))
        }
        function P(t, e, n) {
            return t instanceof RegExp ? function(t, e) {
                if (!e)
                    return t;
                var n = t.source.match(/\((?!\?)/g);
                if (n)
                    for (var i = 0; i < n.length; i++)
                        e.push({
                            name: i,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            pattern: null
                        });
                return t
            }(t, e) : Array.isArray(t) ? function(t, e, n) {
                for (var i = [], r = 0; r < t.length; r++)
                    i.push(P(t[r], e, n).source);
                return new RegExp("(?:" + i.join("|") + ")",E(n))
            }(t, e, n) : function(t, e, n) {
                return O(b(t, n), e, n)
            }(t, e, n)
        }
        d.match = function(t, e) {
            var n = [];
            return T(P(t, n, e), n)
        }
        ,
        d.regexpToFunction = m,
        d.parse = v,
        d.compile = function(t, e) {
            return x(b(t, e), e)
        }
        ,
        d.tokensToFunction = g,
        d.tokensToRegExp = y;
        var M = {
            container: "container",
            history: "history",
            namespace: "namespace",
            prefix: "data-barba",
            prevent: "prevent",
            wrapper: "wrapper"
        }
          , A = new (function() {
            function t() {
                this.o = M,
                this.u = new DOMParser
            }
            var e = t.prototype;
            return e.toString = function(t) {
                return t.outerHTML
            }
            ,
            e.toDocument = function(t) {
                return this.u.parseFromString(t, "text/html")
            }
            ,
            e.toElement = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t,
                e
            }
            ,
            e.getHtml = function(t) {
                return void 0 === t && (t = document),
                this.toString(t.documentElement)
            }
            ,
            e.getWrapper = function(t) {
                return void 0 === t && (t = document),
                t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
            }
            ,
            e.getContainer = function(t) {
                return void 0 === t && (t = document),
                t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
            }
            ,
            e.removeContainer = function(t) {
                document.body.contains(t) && t.parentNode.removeChild(t)
            }
            ,
            e.addContainer = function(t, e) {
                var n = this.getContainer();
                n ? this.s(t, n) : e.appendChild(t)
            }
            ,
            e.getNamespace = function(t) {
                void 0 === t && (t = document);
                var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
            }
            ,
            e.getHref = function(t) {
                if (t.tagName && "a" === t.tagName.toLowerCase()) {
                    if ("string" == typeof t.href)
                        return t.href;
                    var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                    if (e)
                        return this.resolveUrl(e.baseVal || e)
                }
                return null
            }
            ,
            e.resolveUrl = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var i = e.length;
                if (0 === i)
                    throw new Error("resolveUrl requires at least one argument; got none.");
                var r = document.createElement("base");
                if (r.href = arguments[0],
                1 === i)
                    return r.href;
                var s = document.getElementsByTagName("head")[0];
                s.insertBefore(r, s.firstChild);
                for (var o, a = document.createElement("a"), l = 1; l < i; l++)
                    a.href = arguments[l],
                    r.href = o = a.href;
                return s.removeChild(r),
                o
            }
            ,
            e.s = function(t, e) {
                e.parentNode.insertBefore(t, e.nextSibling)
            }
            ,
            t
        }())
          , C = new (function() {
            function t() {
                this.h = [],
                this.v = -1
            }
            var i = t.prototype;
            return i.init = function(t, e) {
                this.l = "barba";
                var n = {
                    ns: e,
                    scroll: {
                        x: window.scrollX,
                        y: window.scrollY
                    },
                    url: t
                };
                this.h.push(n),
                this.v = 0;
                var i = {
                    from: this.l,
                    index: 0,
                    states: [].concat(this.h)
                };
                window.history && window.history.replaceState(i, "", t)
            }
            ,
            i.change = function(t, e, n) {
                if (n && n.state) {
                    var i = n.state
                      , r = i.index;
                    e = this.m(this.v - r),
                    this.replace(i.states),
                    this.v = r
                } else
                    this.add(t, e);
                return e
            }
            ,
            i.add = function(t, e) {
                var n = this.size
                  , i = this.p(e)
                  , r = {
                    ns: "tmp",
                    scroll: {
                        x: window.scrollX,
                        y: window.scrollY
                    },
                    url: t
                };
                this.h.push(r),
                this.v = n;
                var s = {
                    from: this.l,
                    index: n,
                    states: [].concat(this.h)
                };
                switch (i) {
                case "push":
                    window.history && window.history.pushState(s, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(s, "", t)
                }
            }
            ,
            i.update = function(t, e) {
                var i = e || this.v
                  , r = n({}, this.get(i), {}, t);
                this.set(i, r)
            }
            ,
            i.remove = function(t) {
                t ? this.h.splice(t, 1) : this.h.pop(),
                this.v--
            }
            ,
            i.clear = function() {
                this.h = [],
                this.v = -1
            }
            ,
            i.replace = function(t) {
                this.h = t
            }
            ,
            i.get = function(t) {
                return this.h[t]
            }
            ,
            i.set = function(t, e) {
                return this.h[t] = e
            }
            ,
            i.p = function(t) {
                var e = "push"
                  , n = t
                  , i = M.prefix + "-" + M.history;
                return n.hasAttribute && n.hasAttribute(i) && (e = n.getAttribute(i)),
                e
            }
            ,
            i.m = function(t) {
                return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
            }
            ,
            e(t, [{
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
          , D = function(t, e) {
            try {
                var n = function() {
                    if (!e.next.html)
                        return Promise.resolve(t).then((function(t) {
                            var n = e.next;
                            if (t) {
                                var i = A.toElement(t);
                                n.namespace = A.getNamespace(i),
                                n.container = A.getContainer(i),
                                n.html = t,
                                C.update({
                                    ns: n.namespace
                                });
                                var r = A.toDocument(t);
                                document.title = r.title
                            }
                        }
                        ))
                }();
                return Promise.resolve(n && n.then ? n.then((function() {}
                )) : void 0)
            } catch (t) {
                return Promise.reject(t)
            }
        }
          , R = d
          , L = {
            __proto__: null,
            update: D,
            nextTick: function() {
                return new Promise((function(t) {
                    window.requestAnimationFrame(t)
                }
                ))
            },
            pathToRegexp: R
        }
          , j = function() {
            return window.location.origin
        }
          , B = function(t) {
            return void 0 === t && (t = window.location.href),
            F(t).port
        }
          , F = function(t) {
            var e, n = t.match(/:\d+/);
            if (null === n)
                /^http/.test(t) && (e = 80),
                /^https/.test(t) && (e = 443);
            else {
                var i = n[0].substring(1);
                e = parseInt(i, 10)
            }
            var r, s = t.replace(j(), ""), o = {}, a = s.indexOf("#");
            a >= 0 && (r = s.slice(a + 1),
            s = s.slice(0, a));
            var l = s.indexOf("?");
            return l >= 0 && (o = H(s.slice(l + 1)),
            s = s.slice(0, l)),
            {
                hash: r,
                path: s,
                port: e,
                query: o
            }
        }
          , H = function(t) {
            return t.split("&").reduce((function(t, e) {
                var n = e.split("=");
                return t[n[0]] = n[1],
                t
            }
            ), {})
        }
          , z = function(t) {
            return void 0 === t && (t = window.location.href),
            t.replace(/(\/#.*|\/|#.*)$/, "")
        }
          , Y = {
            __proto__: null,
            getHref: function() {
                return window.location.href
            },
            getOrigin: j,
            getPort: B,
            getPath: function(t) {
                return void 0 === t && (t = window.location.href),
                F(t).path
            },
            parse: F,
            parseQuery: H,
            clean: z
        };
        function I(t, e, n) {
            return void 0 === e && (e = 2e3),
            new Promise((function(i, r) {
                var s = new XMLHttpRequest;
                s.onreadystatechange = function() {
                    if (s.readyState === XMLHttpRequest.DONE)
                        if (200 === s.status)
                            i(s.responseText);
                        else if (s.status) {
                            var e = {
                                status: s.status,
                                statusText: s.statusText
                            };
                            n(t, e),
                            r(e)
                        }
                }
                ,
                s.ontimeout = function() {
                    var i = new Error("Timeout error [" + e + "]");
                    n(t, i),
                    r(i)
                }
                ,
                s.onerror = function() {
                    var e = new Error("Fetch error");
                    n(t, e),
                    r(e)
                }
                ,
                s.open("GET", t),
                s.timeout = e,
                s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
                s.setRequestHeader("x-barba", "yes"),
                s.send()
            }
            ))
        }
        var q = function(t) {
            return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
        };
        function X(t, e) {
            return void 0 === e && (e = {}),
            function() {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                    i[r] = arguments[r];
                var s = !1;
                return new Promise((function(n, r) {
                    e.async = function() {
                        return s = !0,
                        function(t, e) {
                            t ? r(t) : n(e)
                        }
                    }
                    ;
                    var o = t.apply(e, i);
                    s || (q(o) ? o.then(n, r) : n(o))
                }
                ))
            }
        }
        var N = new (function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).logger = new p("@barba/core"),
                e.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
                e.registered = new Map,
                e.init(),
                e
            }
            i(e, t);
            var n = e.prototype;
            return n.init = function() {
                var t = this;
                this.registered.clear(),
                this.all.forEach((function(e) {
                    t[e] || (t[e] = function(n, i) {
                        t.registered.has(e) || t.registered.set(e, new Set),
                        t.registered.get(e).add({
                            ctx: i || {},
                            fn: n
                        })
                    }
                    )
                }
                ))
            }
            ,
            n.do = function(t) {
                for (var e = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    i[r - 1] = arguments[r];
                if (this.registered.has(t)) {
                    var s = Promise.resolve();
                    return this.registered.get(t).forEach((function(t) {
                        s = s.then((function() {
                            return X(t.fn, t.ctx).apply(void 0, i)
                        }
                        ))
                    }
                    )),
                    s.catch((function(n) {
                        e.logger.debug("Hook error [" + t + "]"),
                        e.logger.error(n)
                    }
                    ))
                }
                return Promise.resolve()
            }
            ,
            n.clear = function() {
                var t = this;
                this.all.forEach((function(e) {
                    delete t[e]
                }
                )),
                this.init()
            }
            ,
            n.help = function() {
                this.logger.info("Available hooks: " + this.all.join(","));
                var t = [];
                this.registered.forEach((function(e, n) {
                    return t.push(n)
                }
                )),
                this.logger.info("Registered hooks: " + t.join(","))
            }
            ,
            e
        }(u))
          , V = function() {
            function t(t) {
                if (this.P = [],
                "boolean" == typeof t)
                    this.g = t;
                else {
                    var e = Array.isArray(t) ? t : [t];
                    this.P = e.map((function(t) {
                        return R(t)
                    }
                    ))
                }
            }
            return t.prototype.checkHref = function(t) {
                if ("boolean" == typeof this.g)
                    return this.g;
                var e = F(t).path;
                return this.P.some((function(t) {
                    return null !== t.exec(e)
                }
                ))
            }
            ,
            t
        }()
          , U = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this, e) || this).k = new Map,
                n
            }
            i(e, t);
            var r = e.prototype;
            return r.set = function(t, e, n) {
                return this.k.set(t, {
                    action: n,
                    request: e
                }),
                {
                    action: n,
                    request: e
                }
            }
            ,
            r.get = function(t) {
                return this.k.get(t)
            }
            ,
            r.getRequest = function(t) {
                return this.k.get(t).request
            }
            ,
            r.getAction = function(t) {
                return this.k.get(t).action
            }
            ,
            r.has = function(t) {
                return !this.checkHref(t) && this.k.has(t)
            }
            ,
            r.delete = function(t) {
                return this.k.delete(t)
            }
            ,
            r.update = function(t, e) {
                var i = n({}, this.k.get(t), {}, e);
                return this.k.set(t, i),
                i
            }
            ,
            e
        }(V)
          , W = function() {
            return !window.history.pushState
        }
          , K = function(t) {
            return !t.el || !t.href
        }
          , $ = function(t) {
            var e = t.event;
            return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        }
          , G = function(t) {
            var e = t.el;
            return e.hasAttribute("target") && "_blank" === e.target
        }
          , Q = function(t) {
            var e = t.el;
            return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
        }
          , Z = function(t) {
            var e = t.el;
            return void 0 !== e.port && B() !== B(e.href)
        }
          , J = function(t) {
            var e = t.el;
            return e.getAttribute && "string" == typeof e.getAttribute("download")
        }
          , tt = function(t) {
            return t.el.hasAttribute(M.prefix + "-" + M.prevent)
        }
          , et = function(t) {
            return Boolean(t.el.closest("[" + M.prefix + "-" + M.prevent + '="all"]'))
        }
          , nt = function(t) {
            var e = t.href;
            return z(e) === z() && B(e) === B()
        }
          , it = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this, e) || this).suite = [],
                n.tests = new Map,
                n.init(),
                n
            }
            i(e, t);
            var n = e.prototype;
            return n.init = function() {
                this.add("pushState", W),
                this.add("exists", K),
                this.add("newTab", $),
                this.add("blank", G),
                this.add("corsDomain", Q),
                this.add("corsPort", Z),
                this.add("download", J),
                this.add("preventSelf", tt),
                this.add("preventAll", et),
                this.add("sameUrl", nt, !1)
            }
            ,
            n.add = function(t, e, n) {
                void 0 === n && (n = !0),
                this.tests.set(t, e),
                n && this.suite.push(t)
            }
            ,
            n.run = function(t, e, n, i) {
                return this.tests.get(t)({
                    el: e,
                    event: n,
                    href: i
                })
            }
            ,
            n.checkLink = function(t, e, n) {
                var i = this;
                return this.suite.some((function(r) {
                    return i.run(r, t, e, n)
                }
                ))
            }
            ,
            e
        }(V)
          , rt = function(t) {
            function e(n, i) {
                var r;
                void 0 === i && (i = "Barba error");
                for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++)
                    o[a - 2] = arguments[a];
                return (r = t.call.apply(t, [this].concat(o)) || this).error = n,
                r.label = i,
                Error.captureStackTrace && Error.captureStackTrace(function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(r), e),
                r.name = "BarbaError",
                r
            }
            return i(e, t),
            e
        }(a(Error))
          , st = function() {
            function t(t) {
                void 0 === t && (t = []),
                this.logger = new p("@barba/core"),
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
            var e = t.prototype;
            return e.add = function(t, e) {
                switch (t) {
                case "rule":
                    this.A.splice(e.position || 0, 0, e.value);
                    break;
                case "transition":
                default:
                    this.all.push(e)
                }
                this.update()
            }
            ,
            e.resolve = function(t, e) {
                var n = this;
                void 0 === e && (e = {});
                var i = e.once ? this.once : this.page;
                i = i.filter(e.self ? function(t) {
                    return t.name && "self" === t.name
                }
                : function(t) {
                    return !t.name || "self" !== t.name
                }
                );
                var r = new Map
                  , s = i.find((function(i) {
                    var s = !0
                      , o = {};
                    return !(!e.self || "self" !== i.name) || (n.A.reverse().forEach((function(e) {
                        s && (s = n.R(i, e, t, o),
                        i.from && i.to && (s = n.R(i, e, t, o, "from") && n.R(i, e, t, o, "to")),
                        i.from && !i.to && (s = n.R(i, e, t, o, "from")),
                        !i.from && i.to && (s = n.R(i, e, t, o, "to")))
                    }
                    )),
                    r.set(i, o),
                    s)
                }
                ))
                  , o = r.get(s)
                  , a = [];
                if (a.push(e.once ? "once" : "page"),
                e.self && a.push("self"),
                o) {
                    var l, c = [s];
                    Object.keys(o).length > 0 && c.push(o),
                    (l = this.logger).info.apply(l, ["Transition found [" + a.join(",") + "]"].concat(c))
                } else
                    this.logger.info("No transition found [" + a.join(",") + "]");
                return s
            }
            ,
            e.update = function() {
                var t = this;
                this.all = this.all.map((function(e) {
                    return t.T(e)
                }
                )).sort((function(t, e) {
                    return t.priority - e.priority
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
            e.R = function(t, e, n, i, r) {
                var s = !0
                  , o = !1
                  , a = t
                  , l = e.name
                  , c = l
                  , h = l
                  , u = l
                  , f = r ? a[r] : a
                  , p = "to" === r ? n.next : n.current;
                if (r ? f && f[l] : f[l]) {
                    switch (e.type) {
                    case "strings":
                    default:
                        var d = Array.isArray(f[c]) ? f[c] : [f[c]];
                        p[c] && -1 !== d.indexOf(p[c]) && (o = !0),
                        -1 === d.indexOf(p[c]) && (s = !1);
                        break;
                    case "object":
                        var m = Array.isArray(f[h]) ? f[h] : [f[h]];
                        p[h] ? (p[h].name && -1 !== m.indexOf(p[h].name) && (o = !0),
                        -1 === m.indexOf(p[h].name) && (s = !1)) : s = !1;
                        break;
                    case "function":
                        f[u](n) ? o = !0 : s = !1
                    }
                    o && (r ? (i[r] = i[r] || {},
                    i[r][l] = a[r][l]) : i[l] = a[l])
                }
                return s
            }
            ,
            e.O = function(t, e, n) {
                var i = 0;
                return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (i += Math.pow(10, n),
                t.from && t.from[e] && (i += 1),
                t.to && t.to[e] && (i += 2)),
                i
            }
            ,
            e.T = function(t) {
                var e = this;
                t.priority = 0;
                var n = 0;
                return this.A.forEach((function(i, r) {
                    n += e.O(t, i.name, r + 1)
                }
                )),
                t.priority = n,
                t
            }
            ,
            t
        }()
          , ot = function() {
            function t(t) {
                void 0 === t && (t = []),
                this.logger = new p("@barba/core"),
                this.S = !1,
                this.store = new st(t)
            }
            var n = t.prototype;
            return n.get = function(t, e) {
                return this.store.resolve(t, e)
            }
            ,
            n.doOnce = function(t) {
                var e = t.data
                  , n = t.transition;
                try {
                    var i = function() {
                        r.S = !1
                    }
                      , r = this
                      , s = n || {};
                    r.S = !0;
                    var o = l((function() {
                        return Promise.resolve(r.j("beforeOnce", e, s)).then((function() {
                            return Promise.resolve(r.once(e, s)).then((function() {
                                return Promise.resolve(r.j("afterOnce", e, s)).then((function() {}
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ), (function(t) {
                        r.S = !1,
                        r.logger.debug("Transition error [before/after/once]"),
                        r.logger.error(t)
                    }
                    ));
                    return Promise.resolve(o && o.then ? o.then(i) : i())
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.doPage = function(t) {
                var e = t.data
                  , n = t.transition
                  , i = t.page
                  , r = t.wrapper;
                try {
                    var s = function(t) {
                        if (o)
                            return t;
                        a.S = !1
                    }
                      , o = !1
                      , a = this
                      , c = n || {}
                      , h = !0 === c.sync || !1;
                    a.S = !0;
                    var u = l((function() {
                        function t() {
                            return Promise.resolve(a.j("before", e, c)).then((function() {
                                var t = !1;
                                function n(n) {
                                    return t ? n : Promise.resolve(a.remove(e)).then((function() {
                                        return Promise.resolve(a.j("after", e, c)).then((function() {}
                                        ))
                                    }
                                    ))
                                }
                                var s = function() {
                                    if (h)
                                        return l((function() {
                                            return Promise.resolve(a.add(e, r)).then((function() {
                                                return Promise.resolve(a.j("beforeLeave", e, c)).then((function() {
                                                    return Promise.resolve(a.j("beforeEnter", e, c)).then((function() {
                                                        return Promise.resolve(Promise.all([a.leave(e, c), a.enter(e, c)])).then((function() {
                                                            return Promise.resolve(a.j("afterLeave", e, c)).then((function() {
                                                                return Promise.resolve(a.j("afterEnter", e, c)).then((function() {}
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
                                            if (a.M(t))
                                                throw new rt(t,"Transition error [sync]")
                                        }
                                        ));
                                    var n = function(n) {
                                        return t ? n : l((function() {
                                            var t = function() {
                                                if (!1 !== s)
                                                    return Promise.resolve(a.add(e, r)).then((function() {
                                                        return Promise.resolve(a.j("beforeEnter", e, c)).then((function() {
                                                            return Promise.resolve(a.enter(e, c, s)).then((function() {
                                                                return Promise.resolve(a.j("afterEnter", e, c)).then((function() {}
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
                                            if (a.M(t))
                                                throw new rt(t,"Transition error [before/after/enter]")
                                        }
                                        ))
                                    }
                                      , s = !1
                                      , o = l((function() {
                                        return Promise.resolve(a.j("beforeLeave", e, c)).then((function() {
                                            return Promise.resolve(Promise.all([a.leave(e, c), D(i, e)]).then((function(t) {
                                                return t[0]
                                            }
                                            ))).then((function(t) {
                                                return s = t,
                                                Promise.resolve(a.j("afterLeave", e, c)).then((function() {}
                                                ))
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    ), (function(t) {
                                        if (a.M(t))
                                            throw new rt(t,"Transition error [before/after/leave]")
                                    }
                                    ));
                                    return o && o.then ? o.then(n) : n(o)
                                }();
                                return s && s.then ? s.then(n) : n(s)
                            }
                            ))
                        }
                        var n = function() {
                            if (h)
                                return Promise.resolve(D(i, e)).then((function() {}
                                ))
                        }();
                        return n && n.then ? n.then(t) : t()
                    }
                    ), (function(t) {
                        if (a.S = !1,
                        t.name && "BarbaError" === t.name)
                            throw a.logger.debug(t.label),
                            a.logger.error(t.error),
                            t;
                        throw a.logger.debug("Transition error [page]"),
                        a.logger.error(t),
                        t
                    }
                    ));
                    return Promise.resolve(u && u.then ? u.then(s) : s(u))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.once = function(t, e) {
                try {
                    return Promise.resolve(N.do("once", t, e)).then((function() {
                        return e.once ? X(e.once, e)(t) : Promise.resolve()
                    }
                    ))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.leave = function(t, e) {
                try {
                    return Promise.resolve(N.do("leave", t, e)).then((function() {
                        return e.leave ? X(e.leave, e)(t) : Promise.resolve()
                    }
                    ))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.enter = function(t, e, n) {
                try {
                    return Promise.resolve(N.do("enter", t, e)).then((function() {
                        return e.enter ? X(e.enter, e)(t, n) : Promise.resolve()
                    }
                    ))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.add = function(t, e) {
                try {
                    return A.addContainer(t.next.container, e),
                    N.do("nextAdded", t),
                    Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.remove = function(t) {
                try {
                    return A.removeContainer(t.current.container),
                    N.do("currentRemoved", t),
                    Promise.resolve()
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            n.M = function(t) {
                return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
            }
            ,
            n.j = function(t, e, n) {
                try {
                    return Promise.resolve(N.do(t, e, n)).then((function() {
                        return n[t] ? X(n[t], n)(e) : Promise.resolve()
                    }
                    ))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            e(t, [{
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
          , at = function() {
            function t(t) {
                var e = this;
                this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
                this.byNamespace = new Map,
                0 !== t.length && (t.forEach((function(t) {
                    e.byNamespace.set(t.namespace, t)
                }
                )),
                this.names.forEach((function(t) {
                    N[t](e.L(t))
                }
                )))
            }
            return t.prototype.L = function(t) {
                var e = this;
                return function(n) {
                    var i = t.match(/enter/i) ? n.next : n.current
                      , r = e.byNamespace.get(i.namespace);
                    return r && r[t] ? X(r[t], r)(n) : Promise.resolve()
                }
            }
            ,
            t
        }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || (Element.prototype.closest = function(t) {
            var e = this;
            do {
                if (e.matches(t))
                    return e;
                e = e.parentElement || e.parentNode
            } while (null !== e && 1 === e.nodeType);return null
        }
        );
        var lt = {
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
                this.version = h,
                this.schemaPage = lt,
                this.Logger = p,
                this.logger = new p("@barba/core"),
                this.plugins = [],
                this.hooks = N,
                this.dom = A,
                this.helpers = L,
                this.history = C,
                this.request = I,
                this.url = Y
            }
            var i = t.prototype;
            return i.use = function(t, e) {
                var n = this.plugins;
                n.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e),
                n.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
            }
            ,
            i.init = function(t) {
                var e = void 0 === t ? {} : t
                  , i = e.transitions
                  , r = void 0 === i ? [] : i
                  , s = e.views
                  , o = void 0 === s ? [] : s
                  , a = e.schema
                  , l = void 0 === a ? M : a
                  , c = e.requestError
                  , h = e.timeout
                  , u = void 0 === h ? 2e3 : h
                  , f = e.cacheIgnore
                  , d = void 0 !== f && f
                  , m = e.prefetchIgnore
                  , v = void 0 !== m && m
                  , g = e.preventRunning
                  , y = void 0 !== g && g
                  , _ = e.prevent
                  , w = void 0 === _ ? null : _
                  , b = e.debug
                  , T = e.logLevel;
                if (p.setLevel(!0 === (void 0 !== b && b) ? "debug" : void 0 === T ? "off" : T),
                this.logger.info(this.version),
                Object.keys(l).forEach((function(t) {
                    M[t] && (M[t] = l[t])
                }
                )),
                this.$ = c,
                this.timeout = u,
                this.cacheIgnore = d,
                this.prefetchIgnore = v,
                this.preventRunning = y,
                this._ = this.dom.getWrapper(),
                !this._)
                    throw new Error("[@barba/core] No Barba wrapper found");
                this._.setAttribute("aria-live", "polite"),
                this.q();
                var x = this.data.current;
                if (!x.container)
                    throw new Error("[@barba/core] No Barba container found");
                if (this.cache = new U(d),
                this.prevent = new it(v),
                this.transitions = new ot(r),
                this.views = new at(o),
                null !== w) {
                    if ("function" != typeof w)
                        throw new Error("[@barba/core] Prevent should be a function");
                    this.prevent.add("preventCustom", w)
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
                k.current = n({}, this.schemaPage),
                this.hooks.do("ready", k),
                this.once(k),
                this.q()
            }
            ,
            i.destroy = function() {
                this.q(),
                this.H(),
                this.history.clear(),
                this.hooks.clear(),
                this.plugins = []
            }
            ,
            i.force = function(t) {
                window.location.assign(t)
            }
            ,
            i.go = function(t, e, n) {
                var i;
                if (void 0 === e && (e = "barba"),
                this.transitions.isRunning)
                    this.force(t);
                else if (!(i = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf)
                    return e = this.history.change(t, e, n),
                    n && (n.stopPropagation(),
                    n.preventDefault()),
                    this.page(t, e, i)
            }
            ,
            i.once = function(t) {
                try {
                    var e = this;
                    return Promise.resolve(e.hooks.do("beforeEnter", t)).then((function() {
                        function n() {
                            return Promise.resolve(e.hooks.do("afterEnter", t)).then((function() {}
                            ))
                        }
                        var i = function() {
                            if (e.transitions.hasOnce) {
                                var n = e.transitions.get(t, {
                                    once: !0
                                });
                                return Promise.resolve(e.transitions.doOnce({
                                    transition: n,
                                    data: t
                                })).then((function() {}
                                ))
                            }
                        }();
                        return i && i.then ? i.then(n) : n()
                    }
                    ))
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            i.page = function(t, e, i) {
                try {
                    var r = function() {
                        var t = s.data;
                        return Promise.resolve(s.hooks.do("page", t)).then((function() {
                            var e = l((function() {
                                var e = s.transitions.get(t, {
                                    once: !1,
                                    self: i
                                });
                                return Promise.resolve(s.transitions.doPage({
                                    data: t,
                                    page: o,
                                    transition: e,
                                    wrapper: s._
                                })).then((function() {
                                    s.q()
                                }
                                ))
                            }
                            ), (function() {
                                0 === p.getLevel() && s.force(t.current.url.href)
                            }
                            ));
                            if (e && e.then)
                                return e.then((function() {}
                                ))
                        }
                        ))
                    }
                      , s = this;
                    s.data.next.url = n({
                        href: t
                    }, s.url.parse(t)),
                    s.data.trigger = e;
                    var o = s.cache.has(t) ? s.cache.update(t, {
                        action: "click"
                    }).request : s.cache.set(t, s.request(t, s.timeout, s.onRequestError.bind(s, e)), "click").request
                      , a = function() {
                        if (s.transitions.shouldWait)
                            return Promise.resolve(D(o, s.data)).then((function() {}
                            ))
                    }();
                    return Promise.resolve(a && a.then ? a.then(r) : r())
                } catch (t) {
                    return Promise.reject(t)
                }
            }
            ,
            i.onRequestError = function(t) {
                this.transitions.isRunning = !1;
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                var r = n[0]
                  , s = n[1]
                  , o = this.cache.getAction(r);
                return this.cache.delete(r),
                !(this.$ && !1 === this.$(t, o, r, s) || ("click" === o && this.force(r),
                1))
            }
            ,
            i.prefetch = function(t) {
                var e = this;
                this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(t) {
                    e.logger.error(t)
                }
                )), "prefetch")
            }
            ,
            i.F = function() {
                !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B),
                document.addEventListener("touchstart", this.B)),
                document.addEventListener("click", this.U),
                window.addEventListener("popstate", this.D)
            }
            ,
            i.H = function() {
                !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B),
                document.removeEventListener("touchstart", this.B)),
                document.removeEventListener("click", this.U),
                window.removeEventListener("popstate", this.D)
            }
            ,
            i.B = function(t) {
                var e = this
                  , n = this.I(t);
                if (n) {
                    var i = this.dom.getHref(n);
                    this.prevent.checkHref(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, n)).catch((function(t) {
                        e.logger.error(t)
                    }
                    )), "enter")
                }
            }
            ,
            i.U = function(t) {
                var e = this.I(t);
                if (e)
                    return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(),
                    void t.stopPropagation()) : void this.go(this.dom.getHref(e), e, t)
            }
            ,
            i.D = function(t) {
                this.go(this.url.getHref(), "popstate", t)
            }
            ,
            i.I = function(t) {
                for (var e = t.target; e && !this.dom.getHref(e); )
                    e = e.parentNode;
                if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e)))
                    return e
            }
            ,
            i.q = function() {
                var t = this.url.getHref()
                  , e = {
                    container: this.dom.getContainer(),
                    html: this.dom.getHtml(),
                    namespace: this.dom.getNamespace(),
                    url: n({
                        href: t
                    }, this.url.parse(t))
                };
                this.C = {
                    current: e,
                    next: n({}, this.schemaPage),
                    trigger: void 0
                },
                this.hooks.do("reset", this.data)
            }
            ,
            e(t, [{
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
    }()
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        function r(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
            t
        }
        function s(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    s(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
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
            e && h(t, e)
        }
        function c(t) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function h(t, e) {
            return (h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function u(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function f(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
        }
        function p(t, e, n) {
            return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
                var i = function(t, e) {
                    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); )
                        ;
                    return t
                }(t, e);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, e);
                    return r.get ? r.get.call(n) : r.value
                }
            }
            )(t, e, n || t)
        }
        function d(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                    return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var m = {
            el: document,
            elMobile: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            smoothMobile: !1,
            direction: "vertical",
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
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            scrollFromAnywhere: !1
        }
          , v = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(this, t),
                Object.assign(this, m, e),
                this.namespace = "locomotive",
                this.html = document.documentElement,
                this.windowHeight = window.innerHeight,
                this.windowMiddle = this.windowHeight / 2,
                this.els = [],
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
                    limit: this.html.offsetHeight
                },
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1)
            }
            return r(t, [{
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
                    this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), t.currentTarget.getAttribute("data-".concat(this.name, "-offset")))
                }
            }, {
                key: "addElements",
                value: function() {}
            }, {
                key: "detectElements",
                value: function(t) {
                    var e = this
                      , n = this.instance.scroll.y
                      , i = n + this.windowHeight;
                    this.els.forEach((function(r, s) {
                        !r || r.inView && !t || i >= r.top && n < r.bottom && e.setInView(r, s),
                        r && r.inView && (i < r.top || n > r.bottom) && e.setOutOfView(r, s)
                    }
                    )),
                    this.els = this.els.filter((function(t, e) {
                        return null !== t
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function(t, e) {
                    this.els[e].inView = !0,
                    t.el.classList.add(t.class),
                    t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                    t.repeat || (this.els[e].call = !1)),
                    t.repeat || t.speed || t.sticky || (!t.call || t.call && this.hasCallEventSet) && (this.els[e] = null)
                }
            }, {
                key: "setOutOfView",
                value: function(t, e) {
                    (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
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
                    var n = new Event(this.namespace + "call");
                    this.el.dispatchEvent(n)
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
                    var n = this.listeners[t];
                    n.push(e),
                    1 === n.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                    "call" === t && (this.hasCallEventSet = !0,
                    this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function(t, e) {
                    if (this.listeners[t]) {
                        var n = this.listeners[t]
                          , i = n.indexOf(e);
                        i < 0 || (n.splice(i, 1),
                        0 === n.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function(t) {
                    var e = this
                      , n = t.type.replace(this.namespace, "")
                      , i = this.listeners[n];
                    i && 0 !== i.length && i.forEach((function(t) {
                        switch (n) {
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
                    ))
                }
            }]),
            t
        }()
          , g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        function y(t, e) {
            return t(e = {
                exports: {}
            }, e.exports),
            e.exports
        }
        var _ = y((function(t, e) {
            t.exports = {
                polyfill: function() {
                    var t = window
                      , e = document;
                    if (!("scrollBehavior"in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var n, i = t.HTMLElement || t.Element, r = {
                            scroll: t.scroll || t.scrollTo,
                            scrollBy: t.scrollBy,
                            elementScroll: i.prototype.scroll || a,
                            scrollIntoView: i.prototype.scrollIntoView
                        }, s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, o = (n = t.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                        t.scroll = t.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }
                        ,
                        t.scrollBy = function() {
                            void 0 !== arguments[0] && (l(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }
                        ,
                        i.prototype.scroll = i.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== l(arguments[0])) {
                                    var t = arguments[0].left
                                      , e = arguments[0].top;
                                    d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        i.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        i.prototype.scrollIntoView = function() {
                            if (!0 !== l(arguments[0])) {
                                var n = f(this)
                                  , i = n.getBoundingClientRect()
                                  , s = this.getBoundingClientRect();
                                n !== e.body ? (d.call(this, n, n.scrollLeft + s.left - i.left, n.scrollTop + s.top - i.top),
                                "fixed" !== t.getComputedStyle(n).position && t.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: s.left,
                                    top: s.top,
                                    behavior: "smooth"
                                })
                            } else
                                r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }
                    function a(t, e) {
                        this.scrollLeft = t,
                        this.scrollTop = e
                    }
                    function l(t) {
                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                            return !0;
                        if ("object" == typeof t && "smooth" === t.behavior)
                            return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }
                    function c(t, e) {
                        return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                    }
                    function h(e, n) {
                        var i = t.getComputedStyle(e, null)["overflow" + n];
                        return "auto" === i || "scroll" === i
                    }
                    function u(t) {
                        var e = c(t, "Y") && h(t, "Y")
                          , n = c(t, "X") && h(t, "X");
                        return e || n
                    }
                    function f(t) {
                        for (; t !== e.body && !1 === u(t); )
                            t = t.parentNode || t.host;
                        return t
                    }
                    function p(e) {
                        var n, i, r, o, a = (s() - e.startTime) / 468;
                        o = a = a > 1 ? 1 : a,
                        n = .5 * (1 - Math.cos(Math.PI * o)),
                        i = e.startX + (e.x - e.startX) * n,
                        r = e.startY + (e.y - e.startY) * n,
                        e.method.call(e.scrollable, i, r),
                        i === e.x && r === e.y || t.requestAnimationFrame(p.bind(t, e))
                    }
                    function d(n, i, o) {
                        var l, c, h, u, f = s();
                        n === e.body ? (l = t,
                        c = t.scrollX || t.pageXOffset,
                        h = t.scrollY || t.pageYOffset,
                        u = r.scroll) : (l = n,
                        c = n.scrollLeft,
                        h = n.scrollTop,
                        u = a),
                        p({
                            scrollable: l,
                            method: u,
                            startTime: f,
                            startX: c,
                            startY: h,
                            x: i,
                            y: o
                        })
                    }
                }
            }
        }
        ))
          , w = (_.polyfill,
        function(t) {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n(this, e),
                t = f(this, c(e).call(this, i)),
                window.addEventListener("scroll", t.checkScroll, !1),
                _.polyfill(),
                t
            }
            return l(e, t),
            r(e, [{
                key: "init",
                value: function() {
                    this.instance.scroll.y = window.pageYOffset,
                    this.addElements(),
                    this.detectElements(),
                    p(c(e.prototype), "init", this).call(this)
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this;
                    p(c(e.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                    this.timestamp = Date.now()),
                    this.instance.scroll.y = window.pageYOffset,
                    this.els.length && (this.hasScrollTicking || (requestAnimationFrame((function() {
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
                    window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0
                }
            }, {
                key: "resize",
                value: function() {
                    this.els.length && (this.windowHeight = window.innerHeight,
                    this.updateElements())
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = [],
                    this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, n) {
                        var i = e.dataset[t.name + "Class"] || t.class
                          , r = e.getBoundingClientRect().top + t.instance.scroll.y
                          , s = r + e.offsetHeight
                          , o = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset
                          , a = e.dataset[t.name + "Repeat"]
                          , l = e.dataset[t.name + "Call"];
                        a = "false" != a && (null != a || t.repeat);
                        var c = t.getRelativeOffset(o)
                          , h = {
                            el: e,
                            id: n,
                            class: i,
                            top: r + c[0],
                            bottom: s - c[1],
                            offset: o,
                            repeat: a,
                            inView: !!e.classList.contains(i),
                            call: l
                        };
                        t.els.push(h)
                    }
                    ))
                }
            }, {
                key: "updateElements",
                value: function() {
                    var t = this;
                    this.els.forEach((function(e, n) {
                        var i = e.el.getBoundingClientRect().top + t.instance.scroll.y
                          , r = i + e.el.offsetHeight
                          , s = t.getRelativeOffset(e.offset);
                        t.els[n].top = i + s[0],
                        t.els[n].bottom = r - s[1]
                    }
                    )),
                    this.hasScrollTicking = !1
                }
            }, {
                key: "getRelativeOffset",
                value: function(t) {
                    var e = [0, 0];
                    if (t)
                        for (var n = 0; n < t.length; n++)
                            "string" == typeof t[n] ? t[n].includes("%") ? e[n] = parseInt(t[n].replace("%", "") * this.windowHeight / 100) : e[n] = parseInt(t[n]) : e[n] = t[n];
                    return e
                }
            }, {
                key: "scrollTo",
                value: function(t, e, n, i, r, s) {
                    var o, a = e ? parseInt(e) : 0;
                    if ("string" == typeof t) {
                        if ("top" === t)
                            o = this.html;
                        else if ("bottom" === t)
                            o = this.html.offsetHeight - window.innerHeight;
                        else if (!(o = document.querySelector(t)))
                            return
                    } else if ("number" == typeof t)
                        o = parseInt(t);
                    else {
                        if (!t || !t.tagName)
                            return void console.warn("`targetOption` parameter is not valid");
                        o = t
                    }
                    if (a = "number" != typeof o ? o.getBoundingClientRect().top + a + this.instance.scroll.y : o + a,
                    s) {
                        a = a.toFixed();
                        window.addEventListener("scroll", (function t() {
                            window.pageYOffset.toFixed() === a && (window.removeEventListener("scroll", t),
                            s())
                        }
                        ))
                    }
                    window.scrollTo({
                        top: a,
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
                    p(c(e.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1)
                }
            }]),
            e
        }(v))
          , b = Object.getOwnPropertySymbols
          , T = Object.prototype.hasOwnProperty
          , x = Object.prototype.propertyIsEnumerable;
        function k(t) {
            if (null == t)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var S = function() {
            try {
                if (!Object.assign)
                    return !1;
                var t = new String("abc");
                if (t[5] = "de",
                "5" === Object.getOwnPropertyNames(t)[0])
                    return !1;
                for (var e = {}, n = 0; n < 10; n++)
                    e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                    return e[t]
                }
                )).join(""))
                    return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                    i[t] = t
                }
                )),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, i, r = k(t), s = 1; s < arguments.length; s++) {
                for (var o in n = Object(arguments[s]))
                    T.call(n, o) && (r[o] = n[o]);
                if (b) {
                    i = b(n);
                    for (var a = 0; a < i.length; a++)
                        x.call(n, i[a]) && (r[i[a]] = n[i[a]])
                }
            }
            return r
        }
        ;
        function E() {}
        E.prototype = {
            on: function(t, e, n) {
                var i = this.e || (this.e = {});
                return (i[t] || (i[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                var i = this;
                function r() {
                    i.off(t, r),
                    e.apply(n, arguments)
                }
                return r._ = e,
                this.on(t, r, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++)
                    n[i].fn.apply(n[i].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , i = n[t]
                  , r = [];
                if (i && e)
                    for (var s = 0, o = i.length; s < o; s++)
                        i[s].fn !== e && i[s].fn._ !== e && r.push(i[s]);
                return r.length ? n[t] = r : delete n[t],
                this
            }
        };
        var O = E
          , P = y((function(t, e) {
            (function() {
                (null !== e ? e : this).Lethargy = function() {
                    function t(t, e, n, i) {
                        this.stability = null != t ? Math.abs(t) : 8,
                        this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                        this.tolerance = null != n ? 1 + Math.abs(n) : 1.1,
                        this.delay = null != i ? i : 150,
                        this.lastUpDeltas = function() {
                            var t, e, n;
                            for (n = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                n.push(null);
                            return n
                        }
                        .call(this),
                        this.lastDownDeltas = function() {
                            var t, e, n;
                            for (n = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                n.push(null);
                            return n
                        }
                        .call(this),
                        this.deltasTimestamp = function() {
                            var t, e, n;
                            for (n = [],
                            t = 1,
                            e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                n.push(null);
                            return n
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
                        var e, n, i, r, s, o, a;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability),
                        n = e.slice(this.stability, 2 * this.stability),
                        a = i.reduce((function(t, e) {
                            return t + e
                        }
                        )),
                        s = n.reduce((function(t, e) {
                            return t + e
                        }
                        )),
                        o = a / i.length,
                        r = s / n.length,
                        Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
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
          , A = Object.prototype.toString
          , C = Object.prototype.hasOwnProperty;
        function D(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var R = P.Lethargy
          , L = "virtualscroll"
          , j = I
          , B = 37
          , F = 38
          , H = 39
          , z = 40
          , Y = 32;
        function I(t) {
            !function(t) {
                if (!t)
                    return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var n in t)
                        C.call(t, n) && "function" == typeof t[n] && "[object Function]" == A.call(t[n]) && e.push(n);
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    t[r] = D(t[r], t)
                }
            }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
            this.el = window,
            t && t.el && (this.el = t.el,
            delete t.el),
            this.options = S({
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
            this.options.limitInertia && (this._lethargy = new R),
            this._emitter = new O,
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
        function q(t, e, n) {
            return (1 - n) * t + n * e
        }
        function X(t) {
            var e = {};
            if (window.getComputedStyle) {
                var n = getComputedStyle(t)
                  , i = n.transform || n.webkitTransform || n.mozTransform
                  , r = i.match(/^matrix3d\((.+)\)$/);
                return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0,
                e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = i.match(/^matrix\((.+)\)$/),
                e.x = r ? parseFloat(r[1].split(", ")[4]) : 0,
                e.y = r ? parseFloat(r[1].split(", ")[5]) : 0),
                e
            }
        }
        function N(t) {
            for (var e = []; t && t !== document; t = t.parentNode)
                e.push(t);
            return e
        }
        I.prototype._notify = function(t) {
            var e = this._event;
            e.x += e.deltaX,
            e.y += e.deltaY,
            this._emitter.emit(L, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
        }
        ,
        I.prototype._onWheel = function(t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var n = this._event;
                n.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                n.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                M.isFirefox && 1 == t.deltaMode && (n.deltaX *= e.firefoxMultiplier,
                n.deltaY *= e.firefoxMultiplier),
                n.deltaX *= e.mouseMultiplier,
                n.deltaY *= e.mouseMultiplier,
                this._notify(t)
            }
        }
        ,
        I.prototype._onMouseWheel = function(t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                this._notify(t)
            }
        }
        ,
        I.prototype._onTouchStart = function(t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX,
            this.touchStartY = e.pageY
        }
        ,
        I.prototype._onTouchMove = function(t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var n = this._event
              , i = t.targetTouches ? t.targetTouches[0] : t;
            n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier,
            n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier,
            this.touchStartX = i.pageX,
            this.touchStartY = i.pageY,
            this._notify(t)
        }
        ,
        I.prototype._onKeyDown = function(t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var n = window.innerHeight - 40;
            switch (t.keyCode) {
            case B:
            case F:
                e.deltaY = this.options.keyStep;
                break;
            case H:
            case z:
                e.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                e.deltaY = n;
                break;
            case Y:
                e.deltaY = -n;
                break;
            default:
                return
            }
            this._notify(t)
        }
        ,
        I.prototype._bind = function() {
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
        I.prototype._unbind = function() {
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
        I.prototype.on = function(t, e) {
            this._emitter.on(L, t, e);
            var n = this._emitter.e;
            n && n[L] && 1 === n[L].length && this._bind()
        }
        ,
        I.prototype.off = function(t, e) {
            this._emitter.off(L, t, e);
            var n = this._emitter.e;
            (!n[L] || n[L].length <= 0) && this._unbind()
        }
        ,
        I.prototype.reset = function() {
            var t = this._event;
            t.x = 0,
            t.y = 0
        }
        ,
        I.prototype.destroy = function() {
            this._emitter.off(),
            this._unbind()
        }
        ;
        var V = .1
          , U = "function" == typeof Float32Array;
        function W(t, e) {
            return 1 - 3 * e + 3 * t
        }
        function K(t, e) {
            return 3 * e - 6 * t
        }
        function $(t) {
            return 3 * t
        }
        function G(t, e, n) {
            return ((W(e, n) * t + K(e, n)) * t + $(e)) * t
        }
        function Q(t, e, n) {
            return 3 * W(e, n) * t * t + 2 * K(e, n) * t + $(e)
        }
        function Z(t) {
            return t
        }
        var J = function(t, e, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && n === i)
                return Z;
            for (var r = U ? new Float32Array(11) : new Array(11), s = 0; s < 11; ++s)
                r[s] = G(s * V, t, n);
            function o(e) {
                for (var i = 0, s = 1; 10 !== s && r[s] <= e; ++s)
                    i += V;
                --s;
                var o = i + (e - r[s]) / (r[s + 1] - r[s]) * V
                  , a = Q(o, t, n);
                return a >= .001 ? function(t, e, n, i) {
                    for (var r = 0; r < 4; ++r) {
                        var s = Q(e, n, i);
                        if (0 === s)
                            return e;
                        e -= (G(e, n, i) - t) / s
                    }
                    return e
                }(e, o, t, n) : 0 === a ? o : function(t, e, n, i, r) {
                    var s, o, a = 0;
                    do {
                        (s = G(o = e + (n - e) / 2, i, r) - t) > 0 ? n = o : e = o
                    } while (Math.abs(s) > 1e-7 && ++a < 10);return o
                }(e, i, i + V, t, n)
            }
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : G(o(t), e, i)
            }
        }
          , tt = 38
          , et = 40
          , nt = 32
          , it = 9
          , rt = 33
          , st = 34
          , ot = 36
          , at = 35
          , lt = function(t) {
            function e() {
                var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n(this, e),
                window.scrollTo(0, 0),
                history.scrollRestoration = "manual",
                (t = f(this, c(e).call(this, i))).inertia && (t.lerp = .1 * t.inertia),
                t.isScrolling = !1,
                t.isDraggingScrollbar = !1,
                t.isTicking = !1,
                t.hasScrollTicking = !1,
                t.parallaxElements = [],
                t.stop = !1,
                t.scrollbarContainer = i.scrollbarContainer,
                t.checkKey = t.checkKey.bind(u(t)),
                window.addEventListener("keydown", t.checkKey, !1),
                t
            }
            return l(e, t),
            r(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                    this.instance = a({
                        delta: {
                            x: 0,
                            y: 0
                        }
                    }, this.instance),
                    this.vs = new j({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0
                    }),
                    this.vs.on((function(e) {
                        t.stop || (t.isTicking || t.isDraggingScrollbar || (requestAnimationFrame((function() {
                            t.updateDelta(e),
                            t.isScrolling || t.startScrolling()
                        }
                        )),
                        t.isTicking = !0),
                        t.isTicking = !1)
                    }
                    )),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.transformElements(!0, !0),
                    this.checkScroll(!0),
                    p(c(e.prototype), "init", this).call(this)
                }
            }, {
                key: "setScrollLimit",
                value: function() {
                    this.instance.limit = this.el.offsetHeight - this.windowHeight
                }
            }, {
                key: "startScrolling",
                value: function() {
                    this.isScrolling = !0,
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass)
                }
            }, {
                key: "stopScrolling",
                value: function() {
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
                        t.keyCode == it && requestAnimationFrame((function() {
                            e.html.scrollTop = 0,
                            document.body.scrollTop = 0
                        }
                        ));
                    else {
                        switch (t.keyCode) {
                        case it:
                            requestAnimationFrame((function() {
                                e.html.scrollTop = 0,
                                document.body.scrollTop = 0,
                                e.scrollTo(document.activeElement, -window.innerHeight / 2)
                            }
                            ));
                            break;
                        case tt:
                            this.instance.delta.y -= 240;
                            break;
                        case et:
                            this.instance.delta.y += 240;
                            break;
                        case rt:
                            this.instance.delta.y -= window.innerHeight;
                            break;
                        case st:
                            this.instance.delta.y += window.innerHeight;
                            break;
                        case ot:
                            this.instance.delta.y -= this.instance.limit;
                            break;
                        case at:
                            this.instance.delta.y += this.instance.limit;
                            break;
                        case nt:
                            document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                            break;
                        default:
                            return
                        }
                        this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                        this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit),
                        this.isScrolling = !0,
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass)
                    }
                }
            }, {
                key: "checkScroll",
                value: function() {
                    var t = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (n || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (requestAnimationFrame((function() {
                            return t.checkScroll()
                        }
                        )),
                        this.hasScrollTicking = !0),
                        this.updateScroll();
                        var i = Math.abs(this.instance.delta.y - this.instance.scroll.y);
                        !this.animatingScroll && (i < .5 && 0 != this.instance.delta.y || i < .5 && 0 == this.instance.delta.y) && this.stopScrolling();
                        for (var r = this.sections.length - 1; r >= 0; r--)
                            this.sections[r].persistent || this.instance.scroll.y > this.sections[r].offset && this.instance.scroll.y < this.sections[r].limit ? (this.transform(this.sections[r].el, 0, -this.instance.scroll.y),
                            this.sections[r].inView || (this.sections[r].inView = !0,
                            this.sections[r].el.style.opacity = 1,
                            this.sections[r].el.style.pointerEvents = "all",
                            this.sections[r].el.setAttribute("data-".concat(this.name, "-section-inview"), ""))) : (this.sections[r].inView && (this.sections[r].inView = !1,
                            this.sections[r].el.style.opacity = 0,
                            this.sections[r].el.style.pointerEvents = "none",
                            this.sections[r].el.removeAttribute("data-".concat(this.name, "-section-inview"))),
                            this.transform(this.sections[r].el, 0, 0));
                        this.getDirection && this.addDirection(),
                        this.getSpeed && (this.addSpeed(),
                        this.timestamp = Date.now()),
                        this.detectElements(),
                        this.transformElements();
                        var s = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                        this.transform(this.scrollbarThumb, 0, s),
                        p(c(e.prototype), "checkScroll", this).call(this),
                        this.hasScrollTicking = !1
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    this.windowHeight = window.innerHeight,
                    this.windowMiddle = this.windowHeight / 2,
                    this.update()
                }
            }, {
                key: "updateDelta",
                value: function(t) {
                    this.instance.delta.y -= t.deltaY * this.multiplier,
                    this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                    this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit)
                }
            }, {
                key: "updateScroll",
                value: function(t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = q(this.instance.scroll.y, this.instance.delta.y, this.lerp) : this.instance.scroll.y > this.instance.limit ? this.setScroll(this.instance.scroll.x, this.instance.limit) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll.x, 0) : this.setScroll(this.instance.scroll.x, this.instance.delta.y)
                }
            }, {
                key: "addDirection",
                value: function() {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                }
            }, {
                key: "addSpeed",
                value: function() {
                    this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / Math.max(1, Date.now() - this.timestamp) : this.instance.speed = 0
                }
            }, {
                key: "initScrollBar",
                value: function() {
                    this.scrollbar = document.createElement("span"),
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
                    this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"),
                    this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
                }
            }, {
                key: "reinitScrollBar",
                value: function() {
                    this.instance.limit + this.windowHeight <= this.windowHeight || (this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                    this.scrollbarHeight = this.scrollbarBCR.height,
                    this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"),
                    this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height)
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
                    !this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame((function() {
                        var n = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit / 100;
                        n > 0 && n < e.instance.limit && (e.instance.delta.y = n)
                    }
                    )),
                    this.isTicking = !0),
                    this.isTicking = !1
                }
            }, {
                key: "addElements",
                value: function() {
                    var t = this;
                    this.els = [],
                    this.parallaxElements = [],
                    this.sections.forEach((function(e, n) {
                        t.sections[n].el.querySelectorAll("[data-".concat(t.name, "]")).forEach((function(e, i) {
                            var r, s, o = e.dataset[t.name + "Class"] || t.class, a = e.dataset[t.name + "Repeat"], l = e.dataset[t.name + "Call"], c = e.dataset[t.name + "Position"], h = e.dataset[t.name + "Delay"], u = e.dataset[t.name + "Direction"], f = "string" == typeof e.dataset[t.name + "Sticky"], p = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, d = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, m = e.dataset[t.name + "Target"];
                            s = void 0 !== m ? document.querySelector("".concat(m)) : e;
                            var v = (r = t.sections[n].inView ? s.getBoundingClientRect().top + t.instance.scroll.y - X(s).y : s.getBoundingClientRect().top - X(t.sections[n].el).y - X(s).y) + s.offsetHeight
                              , g = (v - r) / 2 + r;
                            if (f) {
                                var y = e.getBoundingClientRect().top
                                  , _ = y - r;
                                r += window.innerHeight,
                                g = ((v = y + s.offsetHeight - e.offsetHeight - _) - r) / 2 + r
                            }
                            a = "false" != a && (null != a || t.repeat);
                            var w = [0, 0];
                            if (d)
                                for (var b = 0; b < d.length; b++)
                                    "string" == typeof d[b] ? d[b].includes("%") ? w[b] = parseInt(d[b].replace("%", "") * t.windowHeight / 100) : w[b] = parseInt(d[b]) : w[b] = d[b];
                            var T = {
                                el: e,
                                id: i,
                                class: o,
                                top: r + w[0],
                                middle: g,
                                bottom: v - w[1],
                                offset: d,
                                repeat: a,
                                inView: !!e.classList.contains(o),
                                call: l,
                                speed: p,
                                delay: h,
                                position: c,
                                target: s,
                                direction: u,
                                sticky: f
                            };
                            t.els.push(T),
                            (!1 !== p || f) && t.parallaxElements.push(T)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "addSections",
                value: function() {
                    var t = this;
                    this.sections = [];
                    var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === e.length && (e = [this.el]),
                    e.forEach((function(e, n) {
                        var i = e.getBoundingClientRect().top - 1.5 * window.innerHeight - X(e).y
                          , r = i + e.getBoundingClientRect().height + 2 * window.innerHeight
                          , s = {
                            el: e,
                            offset: i,
                            limit: r,
                            inView: !1,
                            persistent: "string" == typeof e.dataset[t.name + "Persistent"]
                        };
                        t.sections[n] = s
                    }
                    ))
                }
            }, {
                key: "transform",
                value: function(t, e, n, i) {
                    var r;
                    if (i) {
                        var s = X(t)
                          , o = q(s.x, e, i)
                          , a = q(s.y, n, i);
                        r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(a, ",0,1)")
                    } else
                        r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(n, ",0,1)");
                    t.style.webkitTransform = r,
                    t.style.msTransform = r,
                    t.style.transform = r
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    var e = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = this.instance.scroll.y + this.windowHeight
                      , r = this.instance.scroll.y + this.windowMiddle;
                    this.parallaxElements.forEach((function(s, o) {
                        var a = !1;
                        if (t && (a = 0),
                        s.inView || n)
                            switch (s.position) {
                            case "top":
                                a = e.instance.scroll.y * -s.speed;
                                break;
                            case "elementTop":
                                a = (i - s.top) * -s.speed;
                                break;
                            case "bottom":
                                a = (e.instance.limit - i + e.windowHeight) * s.speed;
                                break;
                            default:
                                a = (r - s.middle) * -s.speed
                            }
                        s.sticky && (a = s.inView ? e.instance.scroll.y - s.top + window.innerHeight : e.instance.scroll.y < s.top - window.innerHeight && e.instance.scroll.y < s.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > s.bottom && e.instance.scroll.y > s.bottom + 100 && s.bottom - s.top + window.innerHeight),
                        !1 !== a && ("horizontal" === s.direction ? e.transform(s.el, a, 0, !t && s.delay) : e.transform(s.el, 0, a, !t && s.delay))
                    }
                    ))
                }
            }, {
                key: "scrollTo",
                value: function(t, e) {
                    var n, i = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [.25, 0, .35, 1], o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a = arguments.length > 5 ? arguments[5] : void 0, l = e ? parseInt(e) : 0;
                    if (s = J.apply(void 0, d(s)),
                    "string" == typeof t) {
                        if ("top" === t)
                            n = 0;
                        else if ("bottom" === t)
                            n = this.instance.limit;
                        else if (!(n = document.querySelector(t)))
                            return
                    } else if ("number" == typeof t)
                        n = parseInt(t);
                    else {
                        if (!t || !t.tagName)
                            return void console.warn("`targetOption` parameter is not valid");
                        n = t
                    }
                    if ("number" != typeof n) {
                        var c = N(n).includes(this.el);
                        if (!c)
                            return;
                        var h = n.getBoundingClientRect()
                          , u = h.top
                          , f = N(n)
                          , p = f.find((function(t) {
                            return i.sections.find((function(e) {
                                return e.el == t
                            }
                            ))
                        }
                        ))
                          , m = 0;
                        p && (m = X(p).y),
                        l = u + l - m
                    } else
                        l = n + l;
                    var v = parseFloat(this.instance.delta.y)
                      , g = Math.max(0, Math.min(l, this.instance.limit))
                      , y = g - v
                      , _ = function(t) {
                        o ? i.setScroll(i.instance.delta.x, v + y * t) : i.instance.delta.y = v + y * t
                    };
                    this.animatingScroll = !0,
                    this.stopScrolling(),
                    this.startScrolling();
                    var w = Date.now()
                      , b = function t() {
                        var e = (Date.now() - w) / r;
                        e > 1 ? (_(1),
                        i.animatingScroll = !1,
                        0 == r && i.update(),
                        a && a()) : (i.scrollToRaf = requestAnimationFrame(t),
                        _(s(e)))
                    };
                    b()
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
                    this.instance = a({}, this.instance, {
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
                    p(c(e.prototype), "destroy", this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener("keydown", this.checkKey, !1)
                }
            }]),
            e
        }(v)
          , ct = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(this, t),
                this.options = e,
                Object.assign(this, m, e),
                this.init()
            }
            return r(t, [{
                key: "init",
                value: function() {
                    if (this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
                    !0 !== this.smooth || this.isMobile ? this.scroll = new w(this.options) : this.scroll = new lt(this.options),
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
                value: function(t, e, n, i, r, s) {
                    this.scroll.scrollTo(t, e, n, i, r, s)
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
            t
        }();
        e.a = ct
    }
    ).call(this, n(3))
}
, function(t, e, n) {
    n(5),
    t.exports = n(4)
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(0)
      , r = n.n(i);
    function s(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function o(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var a, l, c, h, u, f, p, d, m, v, g, y, _, w, b, T, x, k, S, E, O, P, M, A, C, D, R, L = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, j = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, B = 1e8, F = 1e-8, H = 2 * Math.PI, z = H / 4, Y = 0, I = Math.sqrt, q = Math.cos, X = Math.sin, N = function(t) {
        return "string" == typeof t
    }, V = function(t) {
        return "function" == typeof t
    }, U = function(t) {
        return "number" == typeof t
    }, W = function(t) {
        return void 0 === t
    }, K = function(t) {
        return "object" == typeof t
    }, $ = function(t) {
        return !1 !== t
    }, G = function() {
        return "undefined" != typeof window
    }, Q = function(t) {
        return V(t) || N(t)
    }, Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , J = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, rt = /[+-]=-?[\.\d]+/, st = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ot = {}, at = {}, lt = function(t) {
        return (at = Lt(t, ot)) && _n
    }, ct = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, ht = function(t, e) {
        return !e && console.warn(t)
    }, ut = function(t, e) {
        return t && (ot[t] = e) && at && (at[t] = e) || ot
    }, ft = function() {
        return 0
    }, pt = {}, dt = [], mt = {}, vt = {}, gt = {}, yt = 30, _t = [], wt = "", bt = function(t) {
        var e, n, i = t[0];
        if (K(i) || V(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (n = _t.length; n-- && !_t[n].targetTest(i); )
                ;
            e = _t[n]
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new Xe(t[n],e))) || t.splice(n, 1);
        return t
    }, Tt = function(t) {
        return t._gsap || bt(le(t))[0]._gsap
    }, xt = function(t, e, n) {
        return (n = t[e]) && V(n) ? t[e]() : W(n) && t.getAttribute && t.getAttribute(e) || n
    }, kt = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, St = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, Et = function(t, e) {
        for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
            ;
        return i < n
    }, Ot = function(t, e, n) {
        var i, r = U(t[1]), s = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s];
        if (r && (o.duration = t[1]),
        o.parent = n,
        e) {
            for (i = o; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = $(n.vars.inherit) && n.parent;
            o.immediateRender = $(i.immediateRender),
            e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
        }
        return o
    }, Pt = function() {
        var t, e, n = dt.length, i = dt.slice(0);
        for (mt = {},
        dt.length = 0,
        t = 0; t < n; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, Mt = function(t, e, n, i) {
        dt.length && Pt(),
        t.render(e, n, i),
        dt.length && Pt()
    }, At = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : N(t) ? t.trim() : t
    }, Ct = function(t) {
        return t
    }, Dt = function(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }, Rt = function(t, e) {
        for (var n in e)
            n in t || "duration" === n || "ease" === n || (t[n] = e[n])
    }, Lt = function(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }, jt = function t(e, n) {
        for (var i in n)
            e[i] = K(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i];
        return e
    }, Bt = function(t, e) {
        var n, i = {};
        for (n in t)
            n in e || (i[n] = t[n]);
        return i
    }, Ft = function(t) {
        var e = t.parent || a
          , n = t.keyframes ? Rt : Dt;
        if ($(t.inherit))
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, Ht = function(t, e, n, i) {
        void 0 === n && (n = "_first"),
        void 0 === i && (i = "_last");
        var r = e._prev
          , s = e._next;
        r ? r._next = s : t[n] === e && (t[n] = s),
        s ? s._prev = r : t[i] === e && (t[i] = r),
        e._next = e._prev = e.parent = null
    }, zt = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, Yt = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t
    }, It = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, qt = function t(e) {
        return !e || e._ts && t(e.parent)
    }, Xt = function(t) {
        return t._repeat ? Nt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Nt = function(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    }, Vt = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Ut = function(t) {
        return t._end = St(t._start + (t._tDur / Math.abs(t._ts || t._rts || F) || 0))
    }, Wt = function(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = St(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Ut(t),
        n._dirty || Yt(n, t)),
        t
    }, Kt = function(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = Vt(t.rawTime(), e),
        (!e._dur || ie(0, e.totalDuration(), n) - e._tTime > F) && e.render(n, !0)),
        Yt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    n.rawTime() >= 0 && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -1e-8
        }
    }, $t = function(t, e, n, i) {
        return e.parent && zt(e),
        e._start = St(n + e._delay),
        e._end = St(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, n, i, r) {
            void 0 === n && (n = "_first"),
            void 0 === i && (i = "_last");
            var s, o = t[i];
            if (r)
                for (s = e[r]; o && o[r] > s; )
                    o = o._prev;
            o ? (e._next = o._next,
            o._next = e) : (e._next = t[n],
            t[n] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = o,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        i || Kt(t, e),
        t
    }, Gt = function(t, e) {
        return (ot.ScrollTrigger || ct("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }, Qt = function(t, e, n, i) {
        return Ge(t, e),
        t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Ae.frame ? (dt.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1
    }, Zt = function(t, e, n, i) {
        var r = t._repeat
          , s = St(e) || 0
          , o = t._tTime / t._tDur;
        return o && !i && (t._time *= s / t._dur),
        t._dur = s,
        t._tDur = r ? r < 0 ? 1e10 : St(s * (r + 1) + t._rDelay * r) : s,
        o && !i ? Wt(t, t._tTime = t._tDur * o) : t.parent && Ut(t),
        n || Yt(t.parent, t),
        t
    }, Jt = function(t) {
        return t instanceof Ve ? Yt(t) : Zt(t, t._dur)
    }, te = {
        _start: 0,
        endTime: ft
    }, ee = function t(e, n) {
        var i, r, s = e.labels, o = e._recent || te, a = e.duration() >= B ? o.endTime(!1) : e._dur;
        return N(n) && (isNaN(n) || n in s) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in s || (s[n] = a),
        s[n]) : (r = +(n.charAt(i - 1) + n.substr(i + 1)),
        i > 1 ? t(e, n.substr(0, i - 1)) + r : a + r) : null == n ? a : +n
    }, ne = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, ie = function(t, e, n) {
        return n < t ? t : n > e ? e : n
    }, re = function(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : ""
    }, se = [].slice, oe = function(t, e) {
        return t && K(t) && "length"in t && (!e && !t.length || t.length - 1 in t && K(t[0])) && !t.nodeType && t !== l
    }, ae = function(t, e, n) {
        return void 0 === n && (n = []),
        t.forEach((function(t) {
            var i;
            return N(t) && !e || oe(t, 1) ? (i = n).push.apply(i, le(t)) : n.push(t)
        }
        )) || n
    }, le = function(t, e) {
        return !N(t) || e || !c && Ce() ? J(t) ? ae(t, e) : oe(t) ? se.call(t, 0) : t ? [t] : [] : se.call(h.querySelectorAll(t), 0)
    }, ce = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }
        ))
    }, he = function(t) {
        if (V(t))
            return t;
        var e = K(t) ? t : {
            each: t
        }
          , n = He(e.ease)
          , i = e.from || 0
          , r = parseFloat(e.base) || 0
          , s = {}
          , o = i > 0 && i < 1
          , a = isNaN(i) || o
          , l = e.axis
          , c = i
          , h = i;
        return N(i) ? c = h = {
            center: .5,
            edges: .5,
            end: 1
        }[i] || 0 : !o && a && (c = i[0],
        h = i[1]),
        function(t, o, u) {
            var f, p, d, m, v, g, y, _, w, b = (u || e).length, T = s[b];
            if (!T) {
                if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, B])[1])) {
                    for (y = -B; y < (y = u[w++].getBoundingClientRect().left) && w < b; )
                        ;
                    w--
                }
                for (T = s[b] = [],
                f = a ? Math.min(w, b) * c - .5 : i % w,
                p = a ? b * h / w - .5 : i / w | 0,
                y = 0,
                _ = B,
                g = 0; g < b; g++)
                    d = g % w - f,
                    m = p - (g / w | 0),
                    T[g] = v = l ? Math.abs("y" === l ? m : d) : I(d * d + m * m),
                    v > y && (y = v),
                    v < _ && (_ = v);
                "random" === i && ce(T),
                T.max = y - _,
                T.min = _,
                T.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (w > b ? b - 1 : l ? "y" === l ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === i ? -1 : 1),
                T.b = b < 0 ? r - b : r,
                T.u = re(e.amount || e.each) || 0,
                n = n && b < 0 ? Be(n) : n
            }
            return b = (T[t] - T.min) / T.max || 0,
            St(T.b + (n ? n(b) : b) * T.v) + T.u
        }
    }, ue = function(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(n) {
            return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (U(n) ? 0 : re(n))
        }
    }, fe = function(t, e) {
        var n, i, r = J(t);
        return !r && K(t) && (n = r = t.radius || B,
        t.values ? (t = le(t.values),
        (i = !U(t[0])) && (n *= n)) : t = ue(t.increment)),
        ne(e, r ? V(t) ? function(e) {
            return i = t(e),
            Math.abs(i - e) <= n ? i : e
        }
        : function(e) {
            for (var r, s, o = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = B, c = 0, h = t.length; h--; )
                (r = i ? (r = t[h].x - o) * r + (s = t[h].y - a) * s : Math.abs(t[h] - o)) < l && (l = r,
                c = h);
            return c = !n || l <= n ? t[c] : e,
            i || c === e || U(e) ? c : c + re(e)
        }
        : ue(t))
    }, pe = function(t, e, n, i) {
        return ne(J(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
            return J(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i
        }
        ))
    }, de = function(t, e, n) {
        return ne(n, (function(n) {
            return t[~~e(n)]
        }
        ))
    }, me = function(t) {
        for (var e, n, i, r, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            i = t.indexOf(")", e),
            r = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, i - e - 7).match(r ? st : tt),
            o += t.substr(s, e - s) + pe(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5),
            s = i + 1;
        return o + t.substr(s, t.length - s)
    }, ve = function(t, e, n, i, r) {
        var s = e - t
          , o = i - n;
        return ne(r, (function(e) {
            return n + ((e - t) / s * o || 0)
        }
        ))
    }, ge = function(t, e, n) {
        var i, r, s, o = t.labels, a = B;
        for (i in o)
            (r = o[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && (s = i,
            a = r);
        return s
    }, ye = function(t, e, n) {
        var i, r, s = t.vars, o = s[e];
        if (o)
            return i = s[e + "Params"],
            r = s.callbackScope || t,
            n && dt.length && Pt(),
            i ? o.apply(r, i) : o.call(r)
    }, _e = function(t) {
        return zt(t),
        t.progress() < 1 && ye(t, "onInterrupt"),
        t
    }, we = function(t) {
        var e = (t = !t.name && t.default || t).name
          , n = V(t)
          , i = e && !n && t.init ? function() {
            this._props = []
        }
        : t
          , r = {
            init: ft,
            render: hn,
            add: Ke,
            kill: fn,
            modifier: un,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: on,
            aliases: {},
            register: 0
        };
        if (Ce(),
        t !== i) {
            if (vt[e])
                return;
            Dt(i, Dt(Bt(t, r), s)),
            Lt(i.prototype, Lt(r, Bt(t, s))),
            vt[i.prop = e] = i,
            t.targetTest && (_t.push(i),
            pt[e] = 1),
            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        ut(e, i),
        t.register && t.register(_n, i, mn)
    }, be = 255, Te = {
        aqua: [0, be, be],
        lime: [0, be, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, be],
        navy: [0, 0, 128],
        white: [be, be, be],
        olive: [128, 128, 0],
        yellow: [be, be, 0],
        orange: [be, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [be, 0, 0],
        pink: [be, 192, 203],
        cyan: [0, be, be],
        transparent: [be, be, be, 0]
    }, xe = function(t, e, n) {
        return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * be + .5 | 0
    }, ke = function(t, e, n) {
        var i, r, s, o, a, l, c, h, u, f, p = t ? U(t) ? [t >> 16, t >> 8 & be, t & be] : 0 : Te.black;
        if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            Te[t])
                p = Te[t];
            else if ("#" === t.charAt(0))
                4 === t.length && (i = t.charAt(1),
                r = t.charAt(2),
                s = t.charAt(3),
                t = "#" + i + i + r + r + s + s),
                p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & be, t & be];
            else if ("hsl" === t.substr(0, 3))
                if (p = f = t.match(tt),
                e) {
                    if (~t.indexOf("="))
                        return p = t.match(et),
                        n && p.length < 4 && (p[3] = 1),
                        p
                } else
                    o = +p[0] % 360 / 360,
                    a = +p[1] / 100,
                    i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a),
                    p.length > 3 && (p[3] *= 1),
                    p[0] = xe(o + 1 / 3, i, r),
                    p[1] = xe(o, i, r),
                    p[2] = xe(o - 1 / 3, i, r);
            else
                p = t.match(tt) || Te.transparent;
            p = p.map(Number)
        }
        return e && !f && (i = p[0] / be,
        r = p[1] / be,
        s = p[2] / be,
        l = ((c = Math.max(i, r, s)) + (h = Math.min(i, r, s))) / 2,
        c === h ? o = a = 0 : (u = c - h,
        a = l > .5 ? u / (2 - c - h) : u / (c + h),
        o = c === i ? (r - s) / u + (r < s ? 6 : 0) : c === r ? (s - i) / u + 2 : (i - r) / u + 4,
        o *= 60),
        p[0] = ~~(o + .5),
        p[1] = ~~(100 * a + .5),
        p[2] = ~~(100 * l + .5)),
        n && p.length < 4 && (p[3] = 1),
        p
    }, Se = function(t) {
        var e = []
          , n = []
          , i = -1;
        return t.split(Oe).forEach((function(t) {
            var r = t.match(nt) || [];
            e.push.apply(e, r),
            n.push(i += r.length + 1)
        }
        )),
        e.c = n,
        e
    }, Ee = function(t, e, n) {
        var i, r, s, o, a = "", l = (t + a).match(Oe), c = e ? "hsla(" : "rgba(", h = 0;
        if (!l)
            return t;
        if (l = l.map((function(t) {
            return (t = ke(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }
        )),
        n && (s = Se(t),
        (i = n.c).join(a) !== s.c.join(a)))
            for (o = (r = t.replace(Oe, "1").split(nt)).length - 1; h < o; h++)
                a += r[h] + (~i.indexOf(h) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : n).shift());
        if (!r)
            for (o = (r = t.split(Oe)).length - 1; h < o; h++)
                a += r[h] + l[h];
        return a + r[o]
    }, Oe = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in Te)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Pe = /hsl[a]?\(/, Me = function(t) {
        var e, n = t.join(" ");
        if (Oe.lastIndex = 0,
        Oe.test(n))
            return e = Pe.test(n),
            t[1] = Ee(t[1], e),
            t[0] = Ee(t[0], e, Se(t[1])),
            !0
    }, Ae = (b = Date.now,
    T = 500,
    x = 33,
    k = b(),
    S = k,
    O = E = 1e3 / 240,
    M = function t(e) {
        var n, i, r, s, o = b() - S, a = !0 === e;
        if (o > T && (k += o - x),
        ((n = (r = (S += o) - k) - O) > 0 || a) && (s = ++y.frame,
        _ = r - 1e3 * y.time,
        y.time = r /= 1e3,
        O += n + (n >= E ? 4 : E - n),
        i = 1),
        a || (m = v(t)),
        i)
            for (w = 0; w < P.length; w++)
                P[w](r, _, s, e)
    }
    ,
    y = {
        time: 0,
        frame: 0,
        tick: function() {
            M(!0)
        },
        deltaRatio: function(t) {
            return _ / (1e3 / (t || 60))
        },
        wake: function() {
            u && (!c && G() && (l = c = window,
            h = l.document || {},
            ot.gsap = _n,
            (l.gsapVersions || (l.gsapVersions = [])).push(_n.version),
            lt(at || l.GreenSockGlobals || !l.gsap && l || {}),
            g = l.requestAnimationFrame),
            m && y.sleep(),
            v = g || function(t) {
                return setTimeout(t, O - 1e3 * y.time + 1 | 0)
            }
            ,
            d = 1,
            M(2))
        },
        sleep: function() {
            (g ? l.cancelAnimationFrame : clearTimeout)(m),
            d = 0,
            v = ft
        },
        lagSmoothing: function(t, e) {
            T = t || 1e8,
            x = Math.min(e, T, 0)
        },
        fps: function(t) {
            E = 1e3 / (t || 240),
            O = 1e3 * y.time + E
        },
        add: function(t) {
            P.indexOf(t) < 0 && P.push(t),
            Ce()
        },
        remove: function(t) {
            var e;
            ~(e = P.indexOf(t)) && P.splice(e, 1) && w >= e && w--
        },
        _listeners: P = []
    }), Ce = function() {
        return !d && Ae.wake()
    }, De = {}, Re = /^[\d.\-M][\d.\-,\s]/, Le = /["']/g, je = function(t) {
        for (var e, n, i, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++)
            n = s[a],
            e = a !== l - 1 ? n.lastIndexOf(",") : n.length,
            i = n.substr(0, e),
            r[o] = isNaN(i) ? i.replace(Le, "").trim() : +i,
            o = n.substr(e + 1).trim();
        return r
    }, Be = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, Fe = function t(e, n) {
        for (var i, r = e._first; r; )
            r instanceof Ve ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease,
            r._ease = r._yEase,
            r._yEase = i,
            r._yoyo = n)),
            r = r._next
    }, He = function(t, e) {
        return t && (V(t) ? t : De[t] || function(t) {
            var e, n, i, r, s = (t + "").split("("), o = De[s[0]];
            return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [je(s[1])] : (e = t,
            n = e.indexOf("(") + 1,
            i = e.indexOf(")"),
            r = e.indexOf("(", n),
            e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(At)) : De._CE && Re.test(t) ? De._CE("", t) : o
        }(t)) || e
    }, ze = function(t, e, n, i) {
        void 0 === n && (n = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var r, s = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
        };
        return kt(t, (function(t) {
            for (var e in De[t] = ot[t] = s,
            De[r = t.toLowerCase()] = n,
            s)
                De[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = s[e]
        }
        )),
        s
    }, Ye = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }, Ie = function t(e, n, i) {
        var r = n >= 1 ? n : 1
          , s = (i || (e ? .3 : .45)) / (n < 1 ? n : 1)
          , o = s / H * (Math.asin(1 / r) || 0)
          , a = function(t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * X((t - o) * s) + 1
        }
          , l = "out" === e ? a : "in" === e ? function(t) {
            return 1 - a(1 - t)
        }
        : Ye(a);
        return s = H / s,
        l.config = function(n, i) {
            return t(e, n, i)
        }
        ,
        l
    }, qe = function t(e, n) {
        void 0 === n && (n = 1.70158);
        var i = function(t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
        }
          , r = "out" === e ? i : "in" === e ? function(t) {
            return 1 - i(1 - t)
        }
        : Ye(i);
        return r.config = function(n) {
            return t(e, n)
        }
        ,
        r
    };
    kt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        ze(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        }
        : function(t) {
            return t
        }
        , (function(t) {
            return 1 - Math.pow(1 - t, n)
        }
        ), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }
        ))
    }
    )),
    De.Linear.easeNone = De.none = De.Linear.easeIn,
    ze("Elastic", Ie("in"), Ie("out"), Ie()),
    A = 7.5625,
    D = 1 / (C = 2.75),
    ze("Bounce", (function(t) {
        return 1 - R(1 - t)
    }
    ), R = function(t) {
        return t < D ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / C) * t + .9375 : A * Math.pow(t - 2.625 / C, 2) + .984375
    }
    ),
    ze("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }
    )),
    ze("Circ", (function(t) {
        return -(I(1 - t * t) - 1)
    }
    )),
    ze("Sine", (function(t) {
        return 1 === t ? 1 : 1 - q(t * z)
    }
    )),
    ze("Back", qe("in"), qe("out"), qe()),
    De.SteppedEase = De.steps = ot.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t
              , i = t + (e ? 0 : 1)
              , r = e ? 1 : 0;
            return function(t) {
                return ((i * ie(0, .99999999, t) | 0) + r) * n
            }
        }
    },
    j.ease = De["quad.out"],
    kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return wt += t + "," + t + "Params,"
    }
    ));
    var Xe = function(t, e) {
        this.id = Y++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : xt,
        this.set = e ? e.getSetter : on
    }
      , Ne = function() {
        function t(t, e) {
            var n = t.parent || a;
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Zt(this, +t.duration, 1, 1),
            this.data = t.data,
            d || Ae.wake(),
            n && $t(n, this, e || 0 === e ? e : n._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0)
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Zt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (Ce(),
            !arguments.length)
                return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Wt(this, t); n.parent; )
                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                    n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && $t(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === F || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            Mt(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Xt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Xt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Nt(this._tTime, n) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? Vt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            It(this.totalTime(ie(-this._delay, this._tDur, e), !0))
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Ce(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= F) && Math.abs(this._zTime) !== F))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && $t(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + ($(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Vt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                n = e._start + n / (e._ts || 1),
                e = e._dp;
            return n
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            Jt(this)) : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            return arguments.length ? (this._rDelay = t,
            Jt(this)) : this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(ee(this, t), $(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, $(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - F))
        }
        ,
        e.eventCallback = function(t, e, n) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e,
            n && (i[t + "Params"] = n),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
            this) : i[t]
        }
        ,
        e.then = function(t) {
            var e = this;
            return new Promise((function(n) {
                var i = V(t) ? t : Ct
                  , r = function() {
                    var t = e.then;
                    e.then = null,
                    V(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                    n(i),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
            }
            ))
        }
        ,
        e.kill = function() {
            _e(this)
        }
        ,
        t
    }();
    Dt(Ne.prototype, {
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
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ve = function(t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}),
            (i = t.call(this, e, n) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = $(e.sortChildren),
            i.parent && Kt(i.parent, s(i)),
            e.scrollTrigger && Gt(s(i), e.scrollTrigger),
            i
        }
        o(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
            return new tn(t,Ot(arguments, 0, this),ee(this, U(e) ? arguments[3] : n)),
            this
        }
        ,
        n.from = function(t, e, n) {
            return new tn(t,Ot(arguments, 1, this),ee(this, U(e) ? arguments[3] : n)),
            this
        }
        ,
        n.fromTo = function(t, e, n, i) {
            return new tn(t,Ot(arguments, 2, this),ee(this, U(e) ? arguments[4] : i)),
            this
        }
        ,
        n.set = function(t, e, n) {
            return e.duration = 0,
            e.parent = this,
            Ft(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new tn(t,e,ee(this, n),1),
            this
        }
        ,
        n.call = function(t, e, n) {
            return $t(this, tn.delayedCall(0, t, e), ee(this, n))
        }
        ,
        n.staggerTo = function(t, e, n, i, r, s, o) {
            return n.duration = e,
            n.stagger = n.stagger || i,
            n.onComplete = s,
            n.onCompleteParams = o,
            n.parent = this,
            new tn(t,n,ee(this, r)),
            this
        }
        ,
        n.staggerFrom = function(t, e, n, i, r, s, o) {
            return n.runBackwards = 1,
            Ft(n).immediateRender = $(n.immediateRender),
            this.staggerTo(t, e, n, i, r, s, o)
        }
        ,
        n.staggerFromTo = function(t, e, n, i, r, s, o, a) {
            return i.startAt = n,
            Ft(i).immediateRender = $(i.immediateRender),
            this.staggerTo(t, e, i, r, s, o, a)
        }
        ,
        n.render = function(t, e, n) {
            var i, r, s, o, l, c, h, u, f, p, d, m, v = this._time, g = this._dirty ? this.totalDuration() : this._tDur, y = this._dur, _ = this !== a && t > g - F && t >= 0 ? g : t < F ? 0 : t, w = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (_ !== this._tTime || n || w) {
                if (v !== this._time && y && (_ += this._time - v,
                t += this._time - v),
                i = _,
                f = this._start,
                c = !(u = this._ts),
                w && (y || (v = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat && (d = this._yoyo,
                l = y + this._rDelay,
                i = St(_ % l),
                _ === g ? (o = this._repeat,
                i = y) : ((o = ~~(_ / l)) && o === _ / l && (i = y,
                o--),
                i > y && (i = y)),
                p = Nt(this._tTime, l),
                !v && this._tTime && p !== o && (p = o),
                d && 1 & o && (i = y - i,
                m = 1),
                o !== p && !this._lock)) {
                    var b = d && 1 & p
                      , T = b === (d && 1 & o);
                    if (o < p && (b = !b),
                    v = b ? 0 : y,
                    this._lock = 1,
                    this.render(v || (m ? 0 : St(o * l)), e, !y)._lock = 0,
                    !e && this.parent && ye(this, "onRepeat"),
                    this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                    v !== this._time || c !== !this._ts)
                        return this;
                    if (y = this._dur,
                    g = this._tDur,
                    T && (this._lock = 2,
                    v = b ? y : -1e-4,
                    this.render(v, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !c)
                        return this;
                    Fe(this, m)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
                    var i;
                    if (n > e)
                        for (i = t._first; i && i._start <= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next
                        }
                    else
                        for (i = t._last; i && i._start >= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev
                        }
                }(this, St(v), St(i))) && (_ -= i - (i = h._start)),
                this._tTime = _,
                this._time = i,
                this._act = !u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t),
                !v && i && !e && ye(this, "onStart"),
                i >= v && t >= 0)
                    for (r = this._first; r; ) {
                        if (s = r._next,
                        (r._act || i >= r._start) && r._ts && h !== r) {
                            if (r.parent !== this)
                                return this.render(t, e, n);
                            if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n),
                            i !== this._time || !this._ts && !c) {
                                h = 0,
                                s && (_ += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = s
                    }
                else {
                    r = this._last;
                    for (var x = t < 0 ? t : i; r; ) {
                        if (s = r._prev,
                        (r._act || x <= r._end) && r._ts && h !== r) {
                            if (r.parent !== this)
                                return this.render(t, e, n);
                            if (r.render(r._ts > 0 ? (x - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (x - r._start) * r._ts, e, n),
                            i !== this._time || !this._ts && !c) {
                                h = 0,
                                s && (_ += this._zTime = x ? -1e-8 : F);
                                break
                            }
                        }
                        r = s
                    }
                }
                if (h && !e && (this.pause(),
                h.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1,
                this._ts))
                    return this._start = f,
                    Ut(this),
                    this.render(t, e, n);
                this._onUpdate && !e && ye(this, "onUpdate", !0),
                (_ === g && g >= this.totalDuration() || !_ && v) && (f !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !y) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && zt(this, 1),
                e || t < 0 && !v || !_ && !v || (ye(this, _ === g ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        n.add = function(t, e) {
            var n = this;
            if (U(e) || (e = ee(this, e)),
            !(t instanceof Ne)) {
                if (J(t))
                    return t.forEach((function(t) {
                        return n.add(t, e)
                    }
                    )),
                    this;
                if (N(t))
                    return this.addLabel(t, e);
                if (!V(t))
                    return this;
                t = tn.delayedCall(0, t)
            }
            return this !== t ? $t(this, t, e) : this
        }
        ,
        n.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -B);
            for (var r = [], s = this._first; s; )
                s._start >= i && (s instanceof tn ? e && r.push(s) : (n && r.push(s),
                t && r.push.apply(r, s.getChildren(!0, e, n)))),
                s = s._next;
            return r
        }
        ,
        n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                if (e[n].vars.id === t)
                    return e[n]
        }
        ,
        n.remove = function(t) {
            return N(t) ? this.removeLabel(t) : V(t) ? this.killTweensOf(t) : (Ht(this, t),
            t === this._recent && (this._recent = this._last),
            Yt(this))
        }
        ,
        n.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = St(Ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, n),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        n.addLabel = function(t, e) {
            return this.labels[t] = ee(this, e),
            this
        }
        ,
        n.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        n.addPause = function(t, e, n) {
            var i = tn.delayedCall(0, e || ft, n);
            return i.data = "isPause",
            this._hasPause = 1,
            $t(this, i, ee(this, t))
        }
        ,
        n.removePause = function(t) {
            var e = this._first;
            for (t = ee(this, t); e; )
                e._start === t && "isPause" === e.data && zt(e),
                e = e._next
        }
        ,
        n.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), r = i.length; r--; )
                Ue !== i[r] && i[r].kill(t, e);
            return this
        }
        ,
        n.getTweensOf = function(t, e) {
            for (var n, i = [], r = le(t), s = this._first, o = U(e); s; )
                s instanceof tn ? Et(s._targets, r) && (o ? (!Ue || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(r, e)).length && i.push.apply(i, n),
                s = s._next;
            return i
        }
        ,
        n.tweenTo = function(t, e) {
            e = e || {};
            var n = this
              , i = ee(n, t)
              , r = e
              , s = r.startAt
              , o = r.onStart
              , a = r.onStartParams
              , l = tn.to(n, Dt(e, {
                ease: "none",
                lazy: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (s && "time"in s ? s.time : n._time)) / n.timeScale()) || F,
                onStart: function() {
                    n.pause();
                    var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                    l._dur !== t && Zt(l, t, 0, 1).render(l._time, !0, !0),
                    o && o.apply(l, a || [])
                }
            }));
            return l
        }
        ,
        n.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, Dt({
                startAt: {
                    time: ee(this, t)
                }
            }, n))
        }
        ,
        n.recent = function() {
            return this._recent
        }
        ,
        n.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            ge(this, ee(this, t))
        }
        ,
        n.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            ge(this, ee(this, t), 1)
        }
        ,
        n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + F)
        }
        ,
        n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, s = this.labels; r; )
                r._start >= n && (r._start += t,
                r._end += t),
                r = r._next;
            if (e)
                for (i in s)
                    s[i] >= n && (s[i] += t);
            return Yt(this)
        }
        ,
        n.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        n.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
                e = n._next,
                this.remove(n),
                n = e;
            return this._time = this._tTime = this._pTime = 0,
            t && (this.labels = {}),
            Yt(this)
        }
        ,
        n.totalDuration = function(t) {
            var e, n, i, r = 0, s = this, o = s._last, l = B;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (i = s.parent; o; )
                    e = o._prev,
                    o._dirty && o.totalDuration(),
                    (n = o._start) > l && s._sort && o._ts && !s._lock ? (s._lock = 1,
                    $t(s, o, n - o._delay, 1)._lock = 0) : l = n,
                    n < 0 && o._ts && (r -= n,
                    (!i && !s._dp || i && i.smoothChildTiming) && (s._start += n / s._ts,
                    s._time -= n,
                    s._tTime -= n),
                    s.shiftChildren(-n, !1, -Infinity),
                    l = 0),
                    o._end > r && o._ts && (r = o._end),
                    o = e;
                Zt(s, s === a && s._time > r ? s._time : r, 1, 1),
                s._dirty = 0
            }
            return s._tDur
        }
        ,
        e.updateRoot = function(t) {
            if (a._ts && (Mt(a, Vt(t, a)),
            f = Ae.frame),
            Ae.frame >= yt) {
                yt += L.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && L.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Ae.sleep()
                }
            }
        }
        ,
        e
    }(Ne);
    Dt(Ve.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ue, We = function(t, e, n, i, r, s, o) {
        var a, l, c, h, u, f, p, d, m = new mn(this._pt,t,e,0,1,cn,null,r), v = 0, g = 0;
        for (m.b = n,
        m.e = i,
        n += "",
        (p = ~(i += "").indexOf("random(")) && (i = me(i)),
        s && (s(d = [n, i], t, e),
        n = d[0],
        i = d[1]),
        l = n.match(it) || []; a = it.exec(i); )
            h = a[0],
            u = i.substring(v, a.index),
            c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1),
            h !== l[g++] && (f = parseFloat(l[g - 1]) || 0,
            m._pt = {
                _next: m._pt,
                p: u || 1 === g ? u : ",",
                s: f,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - f,
                m: c && c < 4 ? Math.round : 0
            },
            v = it.lastIndex);
        return m.c = v < i.length ? i.substring(v, i.length) : "",
        m.fp = o,
        (rt.test(i) || p) && (m.e = 0),
        this._pt = m,
        m
    }, Ke = function(t, e, n, i, r, s, o, a, l) {
        V(i) && (i = i(r || 0, t, s));
        var c, h = t[e], u = "get" !== n ? n : V(h) ? l ? t[e.indexOf("set") || !V(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h, f = V(h) ? l ? rn : nn : en;
        if (N(i) && (~i.indexOf("random(") && (i = me(i)),
        "=" === i.charAt(1) && (i = parseFloat(u) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (re(u) || 0))),
        u !== i)
            return isNaN(u * i) ? (!h && !(e in t) && ct(e, i),
            We.call(this, t, e, u, i, f, a || L.stringFilter, l)) : (c = new mn(this._pt,t,e,+u || 0,i - (u || 0),"boolean" == typeof h ? ln : an,0,f),
            l && (c.fp = l),
            o && c.modifier(o, this, t),
            this._pt = c)
    }, $e = function(t, e, n, i, r, s) {
        var o, a, l, c;
        if (vt[t] && !1 !== (o = new vt[t]).init(r, o.rawVars ? e[t] : function(t, e, n, i, r) {
            if (V(t) && (t = Qe(t, r, e, n, i)),
            !K(t) || t.style && t.nodeType || J(t) || Z(t))
                return N(t) ? Qe(t, r, e, n, i) : t;
            var s, o = {};
            for (s in t)
                o[s] = Qe(t[s], r, e, n, i);
            return o
        }(e[t], i, r, s, n), n, i, s) && (n._pt = a = new mn(n._pt,r,t,0,1,o.render,o,0,o.priority),
        n !== p))
            for (l = n._ptLookup[n._targets.indexOf(r)],
            c = o._props.length; c--; )
                l[o._props[c]] = a;
        return o
    }, Ge = function t(e, n) {
        var i, r, s, o, l, c, h, u, f, p, d, m, v, g = e.vars, y = g.ease, _ = g.startAt, w = g.immediateRender, b = g.lazy, T = g.onUpdate, x = g.onUpdateParams, k = g.callbackScope, S = g.runBackwards, E = g.yoyoEase, O = g.keyframes, P = g.autoRevert, M = e._dur, A = e._startAt, C = e._targets, D = e.parent, R = D && "nested" === D.data ? D.parent._targets : C, L = "auto" === e._overwrite, B = e.timeline;
        if (B && (!O || !y) && (y = "none"),
        e._ease = He(y, j.ease),
        e._yEase = E ? Be(He(!0 === E ? y : E, j.ease)) : 0,
        E && e._yoyo && !e._repeat && (E = e._yEase,
        e._yEase = e._ease,
        e._ease = E),
        !B) {
            if (m = (u = C[0] ? Tt(C[0]).harness : 0) && g[u.prop],
            i = Bt(g, pt),
            A && A.render(-1, !0).kill(),
            _) {
                if (zt(e._startAt = tn.set(C, Dt({
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: $(b),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: x,
                    callbackScope: k,
                    stagger: 0
                }, _))),
                w)
                    if (n > 0)
                        P || (e._startAt = 0);
                    else if (M && !(n < 0 && A))
                        return void (n && (e._zTime = n))
            } else if (S && M)
                if (A)
                    !P && (e._startAt = 0);
                else if (n && (w = !1),
                s = Dt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && $(b),
                    immediateRender: w,
                    stagger: 0,
                    parent: D
                }, i),
                m && (s[u.prop] = m),
                zt(e._startAt = tn.set(C, s)),
                w) {
                    if (!n)
                        return
                } else
                    t(e._startAt, F);
            for (e._pt = 0,
            b = M && $(b) || b && !M,
            r = 0; r < C.length; r++) {
                if (h = (l = C[r])._gsap || bt(C)[r]._gsap,
                e._ptLookup[r] = p = {},
                mt[h.id] && dt.length && Pt(),
                d = R === C ? r : R.indexOf(l),
                u && !1 !== (f = new u).init(l, m || i, e, d, R) && (e._pt = o = new mn(e._pt,l,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach((function(t) {
                    p[t] = o
                }
                )),
                f.priority && (c = 1)),
                !u || m)
                    for (s in i)
                        vt[s] && (f = $e(s, i, e, d, l, R)) ? f.priority && (c = 1) : p[s] = o = Ke.call(e, l, s, "get", i[s], d, R, 0, g.stringFilter);
                e._op && e._op[r] && e.kill(l, e._op[r]),
                L && e._pt && (Ue = e,
                a.killTweensOf(l, p, e.globalTime(0)),
                v = !e.parent,
                Ue = 0),
                e._pt && b && (mt[h.id] = 1)
            }
            c && dn(e),
            e._onInit && e._onInit(e)
        }
        e._from = !B && !!g.runBackwards,
        e._onUpdate = T,
        e._initted = (!e._op || e._pt) && !v
    }, Qe = function(t, e, n, i, r) {
        return V(t) ? t.call(e, n, i, r) : N(t) && ~t.indexOf("random(") ? me(t) : t
    }, Ze = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Je = (Ze + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), tn = function(t) {
        function e(e, n, i, r) {
            var o;
            "number" == typeof n && (i.duration = n,
            n = i,
            i = null);
            var l, c, h, u, f, p, d, m, v = (o = t.call(this, r ? n : Ft(n), i) || this).vars, g = v.duration, y = v.delay, _ = v.immediateRender, w = v.stagger, b = v.overwrite, T = v.keyframes, x = v.defaults, k = v.scrollTrigger, S = v.yoyoEase, E = o.parent, O = (J(e) || Z(e) ? U(e[0]) : "length"in n) ? [e] : le(e);
            if (o._targets = O.length ? bt(O) : ht("GSAP target " + e + " not found. https://greensock.com", !L.nullTargetWarn) || [],
            o._ptLookup = [],
            o._overwrite = b,
            T || w || Q(g) || Q(y)) {
                if (n = o.vars,
                (l = o.timeline = new Ve({
                    data: "nested",
                    defaults: x || {}
                })).kill(),
                l.parent = s(o),
                T)
                    Dt(l.vars.defaults, {
                        ease: "none"
                    }),
                    T.forEach((function(t) {
                        return l.to(O, t, ">")
                    }
                    ));
                else {
                    if (u = O.length,
                    d = w ? he(w) : ft,
                    K(w))
                        for (f in w)
                            ~Ze.indexOf(f) && (m || (m = {}),
                            m[f] = w[f]);
                    for (c = 0; c < u; c++) {
                        for (f in h = {},
                        n)
                            Je.indexOf(f) < 0 && (h[f] = n[f]);
                        h.stagger = 0,
                        S && (h.yoyoEase = S),
                        m && Lt(h, m),
                        p = O[c],
                        h.duration = +Qe(g, s(o), c, p, O),
                        h.delay = (+Qe(y, s(o), c, p, O) || 0) - o._delay,
                        !w && 1 === u && h.delay && (o._delay = y = h.delay,
                        o._start += y,
                        h.delay = 0),
                        l.to(p, h, d(c, p, O))
                    }
                    l.duration() ? g = y = 0 : o.timeline = 0
                }
                g || o.duration(g = l.duration())
            } else
                o.timeline = 0;
            return !0 === b && (Ue = s(o),
            a.killTweensOf(O),
            Ue = 0),
            E && Kt(E, s(o)),
            (_ || !g && !T && o._start === St(E._time) && $(_) && qt(s(o)) && "nested" !== E.data) && (o._tTime = -1e-8,
            o.render(Math.max(0, -y))),
            k && Gt(s(o), k),
            o
        }
        o(e, t);
        var n = e.prototype;
        return n.render = function(t, e, n) {
            var i, r, s, o, a, l, c, h, u, f = this._time, p = this._tDur, d = this._dur, m = t > p - F && t >= 0 ? p : t < F ? 0 : t;
            if (d) {
                if (m !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = m,
                    h = this.timeline,
                    this._repeat) {
                        if (o = d + this._rDelay,
                        i = St(m % o),
                        m === p ? (s = this._repeat,
                        i = d) : ((s = ~~(m / o)) && s === m / o && (i = d,
                        s--),
                        i > d && (i = d)),
                        (l = this._yoyo && 1 & s) && (u = this._yEase,
                        i = d - i),
                        a = Nt(this._tTime, o),
                        i === f && !n && this._initted)
                            return this;
                        s !== a && (h && this._yEase && Fe(h, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                        this.render(St(o * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Qt(this, t < 0 ? t : i, n, e))
                            return this._tTime = 0,
                            this;
                        if (d !== this._dur)
                            return this.render(t, e, n)
                    }
                    for (this._tTime = m,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = c = (u || this._ease)(i / d),
                    this._from && (this.ratio = c = 1 - c),
                    i && !f && !e && ye(this, "onStart"),
                    r = this._pt; r; )
                        r.r(c, r.d),
                        r = r._next;
                    h && h.render(t < 0 ? t : !i && l ? -1e-8 : h._dur * c, e, n) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    ye(this, "onUpdate")),
                    this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && ye(this, "onRepeat"),
                    m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && zt(this, 1),
                    e || t < 0 && !f || !m && !f || (ye(this, m === p ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function(t, e, n, i) {
                    var r, s, o = t.ratio, a = e < 0 || !e && o && !t._start && t._zTime > F && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1, l = t._rDelay, c = 0;
                    if (l && t._repeat && (c = ie(0, t._tDur, e),
                    Nt(c, l) !== (s = Nt(t._tTime, l)) && (o = 1 - a,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    a !== o || i || t._zTime === F || !e && t._zTime) {
                        if (!t._initted && Qt(t, e, i, n))
                            return;
                        for (s = t._zTime,
                        t._zTime = e || (n ? F : 0),
                        n || (n = e && !s),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = c,
                        n || ye(t, "onStart"),
                        r = t._pt; r; )
                            r.r(a, r.d),
                            r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !n && ye(t, "onUpdate"),
                        c && t._repeat && !n && t.parent && ye(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === a && (a && zt(t, 1),
                        n || (ye(t, a ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, n);
            return this
        }
        ,
        n.targets = function() {
            return this._targets
        }
        ,
        n.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
        }
        ,
        n.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e) && (this._lazy = 0,
            this.parent))
                return _e(this);
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ue && !0 !== Ue.vars.overwrite)._first || _e(this),
                this.parent && n !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / n, 0, 1),
                this
            }
            var i, r, s, o, a, l, c, h = this._targets, u = t ? le(t) : h, f = this._ptLookup, p = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
                    ;
                return n < 0
            }(h, u))
                return "all" === e && (this._pt = 0),
                _e(this);
            for (i = this._op = this._op || [],
            "all" !== e && (N(e) && (a = {},
            kt(e, (function(t) {
                return a[t] = 1
            }
            )),
            e = a),
            e = function(t, e) {
                var n, i, r, s, o = t[0] ? Tt(t[0]).harness : 0, a = o && o.aliases;
                if (!a)
                    return e;
                for (i in n = Lt({}, e),
                a)
                    if (i in n)
                        for (r = (s = a[i].split(",")).length; r--; )
                            n[s[r]] = n[i];
                return n
            }(h, e)),
            c = h.length; c--; )
                if (~u.indexOf(h[c]))
                    for (a in r = f[c],
                    "all" === e ? (i[c] = e,
                    o = r,
                    s = {}) : (s = i[c] = i[c] || {},
                    o = e),
                    o)
                        (l = r && r[a]) && ("kill"in l.d && !0 !== l.d.kill(a) || Ht(this, l, "_pt"),
                        delete r[a]),
                        "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && p && _e(this),
            this
        }
        ,
        e.to = function(t, n) {
            return new e(t,n,arguments[2])
        }
        ,
        e.from = function(t, n) {
            return new e(t,Ot(arguments, 1))
        }
        ,
        e.delayedCall = function(t, n, i, r) {
            return new e(n,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r
            })
        }
        ,
        e.fromTo = function(t, n, i) {
            return new e(t,Ot(arguments, 2))
        }
        ,
        e.set = function(t, n) {
            return n.duration = 0,
            n.repeatDelay || (n.repeat = 0),
            new e(t,n)
        }
        ,
        e.killTweensOf = function(t, e, n) {
            return a.killTweensOf(t, e, n)
        }
        ,
        e
    }(Ne);
    Dt(tn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    kt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        tn[t] = function() {
            var e = new Ve
              , n = se.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, n)
        }
    }
    ));
    var en = function(t, e, n) {
        return t[e] = n
    }
      , nn = function(t, e, n) {
        return t[e](n)
    }
      , rn = function(t, e, n, i) {
        return t[e](i.fp, n)
    }
      , sn = function(t, e, n) {
        return t.setAttribute(e, n)
    }
      , on = function(t, e) {
        return V(t[e]) ? nn : W(t[e]) && t.setAttribute ? sn : en
    }
      , an = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }
      , ln = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , cn = function(t, e) {
        var n = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; n; )
                i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
                n = n._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , hn = function(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next
    }
      , un = function(t, e, n, i) {
        for (var r, s = this._pt; s; )
            r = s._next,
            s.p === i && s.modifier(t, e, n),
            s = r
    }
      , fn = function(t) {
        for (var e, n, i = this._pt; i; )
            n = i._next,
            i.p === t && !i.op || i.op === t ? Ht(this, i, "_pt") : i.dep || (e = 1),
            i = n;
        return !e
    }
      , pn = function(t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
    }
      , dn = function(t) {
        for (var e, n, i, r, s = t._pt; s; ) {
            for (e = s._next,
            n = i; n && n.pr > s.pr; )
                n = n._next;
            (s._prev = n ? n._prev : r) ? s._prev._next = s : i = s,
            (s._next = n) ? n._prev = s : r = s,
            s = e
        }
        t._pt = i
    }
      , mn = function() {
        function t(t, e, n, i, r, s, o, a, l) {
            this.t = e,
            this.s = i,
            this.c = r,
            this.p = n,
            this.r = s || an,
            this.d = o || this,
            this.set = a || en,
            this.pr = l || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, n) {
            this.mSet = this.mSet || this.set,
            this.set = pn,
            this.m = t,
            this.mt = n,
            this.tween = e
        }
        ,
        t
    }();
    kt(wt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return pt[t] = 1
    }
    )),
    ot.TweenMax = ot.TweenLite = tn,
    ot.TimelineLite = ot.TimelineMax = Ve,
    a = new Ve({
        sortChildren: !1,
        defaults: j,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    L.stringFilter = Me;
    var vn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach((function(t) {
                return we(t)
            }
            ))
        },
        timeline: function(t) {
            return new Ve(t)
        },
        getTweensOf: function(t, e) {
            return a.getTweensOf(t, e)
        },
        getProperty: function(t, e, n, i) {
            N(t) && (t = le(t)[0]);
            var r = Tt(t || {}).get
              , s = n ? Ct : At;
            return "native" === n && (n = ""),
            t ? e ? s((vt[e] && vt[e].get || r)(t, e, n, i)) : function(e, n, i) {
                return s((vt[e] && vt[e].get || r)(t, e, n, i))
            }
            : t
        },
        quickSetter: function(t, e, n) {
            if ((t = le(t)).length > 1) {
                var i = t.map((function(t) {
                    return _n.quickSetter(t, e, n)
                }
                ))
                  , r = i.length;
                return function(t) {
                    for (var e = r; e--; )
                        i[e](t)
                }
            }
            t = t[0] || {};
            var s = vt[e]
              , o = Tt(t)
              , a = o.harness && (o.harness.aliases || {})[e] || e
              , l = s ? function(e) {
                var i = new s;
                p._pt = 0,
                i.init(t, n ? e + n : e, p, 0, [t]),
                i.render(1, i),
                p._pt && hn(1, p)
            }
            : o.set(t, a);
            return s ? l : function(e) {
                return l(t, a, n ? e + n : e, o, 1)
            }
        },
        isTweening: function(t) {
            return a.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = He(t.ease, j.ease)),
            jt(j, t || {})
        },
        config: function(t) {
            return jt(L, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , n = t.effect
              , i = t.plugins
              , r = t.defaults
              , s = t.extendTimeline;
            (i || "").split(",").forEach((function(t) {
                return t && !vt[t] && !ot[t] && ht(e + " effect requires " + t + " plugin.")
            }
            )),
            gt[e] = function(t, e, i) {
                return n(le(t), Dt(e || {}, r), i)
            }
            ,
            s && (Ve.prototype[e] = function(t, n, i) {
                return this.add(gt[e](t, K(n) ? n : (i = n) && {}, this), i)
            }
            )
        },
        registerEase: function(t, e) {
            De[t] = He(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? He(t, e) : De
        },
        getById: function(t) {
            return a.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, i, r = new Ve(t);
            for (r.smoothChildTiming = $(t.smoothChildTiming),
            a.remove(r),
            r._dp = 0,
            r._time = r._tTime = a._time,
            n = a._first; n; )
                i = n._next,
                !e && !n._dur && n instanceof tn && n.vars.onComplete === n._targets[0] || $t(r, n, n._start - n._delay),
                n = i;
            return $t(a, r, 0),
            r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return J(e) ? de(e, t(0, e.length), n) : ne(i, (function(t) {
                    return (r + (t - e) % r) % r + e
                }
                ))
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e
                  , s = 2 * r;
                return J(e) ? de(e, t(0, e.length - 1), n) : ne(i, (function(t) {
                    return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
                }
                ))
            },
            distribute: he,
            random: pe,
            snap: fe,
            normalize: function(t, e, n) {
                return ve(t, e, 0, 1, n)
            },
            getUnit: re,
            clamp: function(t, e, n) {
                return ne(n, (function(n) {
                    return ie(t, e, n)
                }
                ))
            },
            splitColor: ke,
            toArray: le,
            mapRange: ve,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }
                    ), t)
                }
            },
            unitize: function(t, e) {
                return function(n) {
                    return t(parseFloat(n)) + (e || re(n))
                }
            },
            interpolate: function t(e, n, i, r) {
                var s = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                }
                ;
                if (!s) {
                    var o, a, l, c, h, u = N(e), f = {};
                    if (!0 === i && (r = 1) && (i = null),
                    u)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (J(e) && !J(n)) {
                        for (l = [],
                        c = e.length,
                        h = c - 2,
                        a = 1; a < c; a++)
                            l.push(t(e[a - 1], e[a]));
                        c--,
                        s = function(t) {
                            t *= c;
                            var e = Math.min(h, ~~t);
                            return l[e](t - e)
                        }
                        ,
                        i = n
                    } else
                        r || (e = Lt(J(e) ? [] : {}, e));
                    if (!l) {
                        for (o in n)
                            Ke.call(f, e, o, "get", n[o]);
                        s = function(t) {
                            return hn(t, f) || (u ? e.p : e)
                        }
                    }
                }
                return ne(i, s)
            },
            shuffle: ce
        },
        install: lt,
        effects: gt,
        ticker: Ae,
        updateRoot: Ve.updateRoot,
        plugins: vt,
        globalTimeline: a,
        core: {
            PropTween: mn,
            globals: ut,
            Tween: tn,
            Timeline: Ve,
            Animation: Ne,
            getCache: Tt,
            _removeLinkedListItem: Ht
        }
    };
    kt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return vn[t] = tn[t]
    }
    )),
    Ae.add(Ve.updateRoot),
    p = vn.to({}, {
        duration: 0
    });
    var gn = function(t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
        return n
    }
      , yn = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, n, i) {
                i._onInit = function(t) {
                    var i, r;
                    if (N(n) && (i = {},
                    kt(n, (function(t) {
                        return i[t] = 1
                    }
                    )),
                    n = i),
                    e) {
                        for (r in i = {},
                        n)
                            i[r] = e(n[r]);
                        n = i
                    }
                    !function(t, e) {
                        var n, i, r, s = t._targets;
                        for (n in e)
                            for (i = s.length; i--; )
                                (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = gn(r, n)),
                                r && r.modifier && r.modifier(e[n], t, s[i], n))
                    }(t, n)
                }
            }
        }
    }
      , _n = vn.registerPlugin({
        name: "attr",
        init: function(t, e, n, i, r) {
            var s, o;
            for (s in e)
                (o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, r, 0, 0, s)) && (o.op = s),
                this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n])
        }
    }, yn("roundProps", ue), yn("modifiers"), yn("snap", fe)) || vn;
    tn.version = Ve.version = _n.version = "3.5.1",
    u = 1,
    G() && Ce();
    De.Power0,
    De.Power1,
    De.Power2,
    De.Power3,
    De.Power4,
    De.Linear,
    De.Quad,
    De.Cubic,
    De.Quart,
    De.Quint,
    De.Strong,
    De.Elastic,
    De.Back,
    De.SteppedEase,
    De.Bounce,
    De.Sine,
    De.Expo,
    De.Circ;
    var wn, bn, Tn, xn, kn, Sn, En, On, Pn = {}, Mn = 180 / Math.PI, An = Math.PI / 180, Cn = Math.atan2, Dn = /([A-Z])/g, Rn = /(?:left|right|width|margin|padding|x)/i, Ln = /[\s,\(]\S/, jn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Bn = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Fn = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Hn = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, zn = function(t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
    }, Yn = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, In = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, qn = function(t, e, n) {
        return t.style[e] = n
    }, Xn = function(t, e, n) {
        return t.style.setProperty(e, n)
    }, Nn = function(t, e, n) {
        return t._gsap[e] = n
    }, Vn = function(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }, Un = function(t, e, n, i, r) {
        var s = t._gsap;
        s.scaleX = s.scaleY = n,
        s.renderTransform(r, s)
    }, Wn = function(t, e, n, i, r) {
        var s = t._gsap;
        s[e] = n,
        s.renderTransform(r, s)
    }, Kn = "transform", $n = Kn + "Origin", Gn = function(t, e) {
        var n = bn.createElementNS ? bn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bn.createElement(t);
        return n.style ? n : bn.createElement(t)
    }, Qn = function t(e, n, i) {
        var r = getComputedStyle(e);
        return r[n] || r.getPropertyValue(n.replace(Dn, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, Jn(n) || n, 1) || ""
    }, Zn = "O,Moz,ms,Ms,Webkit".split(","), Jn = function(t, e, n) {
        var i = (e || kn).style
          , r = 5;
        if (t in i && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Zn[r] + t in i); )
            ;
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Zn[r] : "") + t
    }, ti = function() {
        "undefined" != typeof window && window.document && (wn = window,
        bn = wn.document,
        Tn = bn.documentElement,
        kn = Gn("div") || {
            style: {}
        },
        Sn = Gn("div"),
        Kn = Jn(Kn),
        $n = Kn + "Origin",
        kn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        On = !!Jn("perspective"),
        xn = 1)
    }, ei = function t(e) {
        var n, i = Gn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, o = this.style.cssText;
        if (Tn.appendChild(i),
        i.appendChild(this),
        this.style.display = "block",
        e)
            try {
                n = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (n = this._gsapBBox());
        return r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
        Tn.removeChild(i),
        this.style.cssText = o,
        n
    }, ni = function(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }, ii = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (n) {
            e = ei.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === ei || (e = ei.call(t, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +ni(t, ["x", "cx", "x1"]) || 0,
            y: +ni(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, ri = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ii(t))
    }, si = function(t, e) {
        if (e) {
            var n = t.style;
            e in Pn && e !== $n && (e = Kn),
            n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            n.removeProperty(e.replace(Dn, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }, oi = function(t, e, n, i, r, s) {
        var o = new mn(t._pt,e,n,0,1,s ? In : Yn);
        return t._pt = o,
        o.b = i,
        o.e = r,
        t._props.push(n),
        o
    }, ai = {
        deg: 1,
        rad: 1,
        turn: 1
    }, li = function t(e, n, i, r) {
        var s, o, a, l, c = parseFloat(i) || 0, h = (i + "").trim().substr((c + "").length) || "px", u = kn.style, f = Rn.test(n), p = "svg" === e.tagName.toLowerCase(), d = (p ? "client" : "offset") + (f ? "Width" : "Height"), m = 100, v = "px" === r, g = "%" === r;
        return r === h || !c || ai[r] || ai[h] ? c : ("px" !== h && !v && (c = t(e, n, i, "px")),
        l = e.getCTM && ri(e),
        g && (Pn[n] || ~n.indexOf("adius")) ? St(c / (l ? e.getBBox()[f ? "width" : "height"] : e[d]) * m) : (u[f ? "width" : "height"] = m + (v ? h : r),
        o = ~n.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode,
        l && (o = (e.ownerSVGElement || {}).parentNode),
        o && o !== bn && o.appendChild || (o = bn.body),
        (a = o._gsap) && g && a.width && f && a.time === Ae.time ? St(c / a.width * m) : ((g || "%" === h) && (u.position = Qn(e, "position")),
        o === e && (u.position = "static"),
        o.appendChild(kn),
        s = kn[d],
        o.removeChild(kn),
        u.position = "absolute",
        f && g && ((a = Tt(o)).time = Ae.time,
        a.width = o[d]),
        St(v ? s * c / m : s && c ? m / s * c : 0))))
    }, ci = function(t, e, n, i) {
        var r;
        return xn || ti(),
        e in jn && "transform" !== e && ~(e = jn[e]).indexOf(",") && (e = e.split(",")[0]),
        Pn[e] && "transform" !== e ? (r = wi(t, i),
        r = "transformOrigin" !== e ? r[e] : bi(Qn(t, $n)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = pi[e] && pi[e](t, e, n) || Qn(t, e) || xt(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(r + "").indexOf(" ") ? li(t, e, r, n) + n : r
    }, hi = function(t, e, n, i) {
        if (!n || "none" === n) {
            var r = Jn(e, t, 1)
              , s = r && Qn(t, r, 1);
            s && s !== n ? (e = r,
            n = s) : "borderColor" === e && (n = Qn(t, "borderTopColor"))
        }
        var o, a, l, c, h, u, f, p, d, m, v, g, y = new mn(this._pt,t.style,e,0,1,cn), _ = 0, w = 0;
        if (y.b = n,
        y.e = i,
        n += "",
        "auto" === (i += "") && (t.style[e] = i,
        i = Qn(t, e) || i,
        t.style[e] = n),
        Me(o = [n, i]),
        i = o[1],
        l = (n = o[0]).match(nt) || [],
        (i.match(nt) || []).length) {
            for (; a = nt.exec(i); )
                f = a[0],
                d = i.substring(_, a.index),
                h ? h = (h + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (h = 1),
                f !== (u = l[w++] || "") && (c = parseFloat(u) || 0,
                v = u.substr((c + "").length),
                (g = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)),
                p = parseFloat(f),
                m = f.substr((p + "").length),
                _ = nt.lastIndex - m.length,
                m || (m = m || L.units[e] || v,
                _ === i.length && (i += m,
                y.e += m)),
                v !== m && (c = li(t, e, u, m) || 0),
                y._pt = {
                    _next: y._pt,
                    p: d || 1 === w ? d : ",",
                    s: c,
                    c: g ? g * p : p - c,
                    m: h && h < 4 ? Math.round : 0
                });
            y.c = _ < i.length ? i.substring(_, i.length) : ""
        } else
            y.r = "display" === e && "none" === i ? In : Yn;
        return rt.test(i) && (y.e = 0),
        this._pt = y,
        y
    }, ui = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, fi = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, s = e.t, o = s.style, a = e.u, l = s._gsap;
            if ("all" === a || !0 === a)
                o.cssText = "",
                i = 1;
            else
                for (r = (a = a.split(",")).length; --r > -1; )
                    n = a[r],
                    Pn[n] && (i = 1,
                    n = "transformOrigin" === n ? $n : Kn),
                    si(s, n);
            i && (si(s, Kn),
            l && (l.svg && s.removeAttribute("transform"),
            wi(s, 1),
            l.uncache = 1))
        }
    }, pi = {
        clearProps: function(t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
                var s = t._pt = new mn(t._pt,e,n,0,0,fi);
                return s.u = i,
                s.pr = -10,
                s.tween = r,
                t._props.push(n),
                1
            }
        }
    }, di = [1, 0, 0, 1, 0, 0], mi = {}, vi = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, gi = function(t) {
        var e = Qn(t, Kn);
        return vi(e) ? di : e.substr(7).match(et).map(St)
    }, yi = function(t, e) {
        var n, i, r, s, o = t._gsap || Tt(t), a = t.style, l = gi(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? di : l : (l !== di || t.offsetParent || t === Tn || o.svg || (r = a.display,
        a.display = "block",
        (n = t.parentNode) && t.offsetParent || (s = 1,
        i = t.nextSibling,
        Tn.appendChild(t)),
        l = gi(t),
        r ? a.display = r : si(t, "display"),
        s && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Tn.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, _i = function(t, e, n, i, r, s) {
        var o, a, l, c = t._gsap, h = r || yi(t, !0), u = c.xOrigin || 0, f = c.yOrigin || 0, p = c.xOffset || 0, d = c.yOffset || 0, m = h[0], v = h[1], g = h[2], y = h[3], _ = h[4], w = h[5], b = e.split(" "), T = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        n ? h !== di && (a = m * y - v * g) && (l = T * (-v / a) + x * (m / a) - (m * w - v * _) / a,
        T = T * (y / a) + x * (-g / a) + (g * w - y * _) / a,
        x = l) : (T = (o = ii(t)).x + (~b[0].indexOf("%") ? T / 100 * o.width : T),
        x = o.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * o.height : x)),
        i || !1 !== i && c.smooth ? (_ = T - u,
        w = x - f,
        c.xOffset = p + (_ * m + w * g) - _,
        c.yOffset = d + (_ * v + w * y) - w) : c.xOffset = c.yOffset = 0,
        c.xOrigin = T,
        c.yOrigin = x,
        c.smooth = !!i,
        c.origin = e,
        c.originIsAbsolute = !!n,
        t.style[$n] = "0px 0px",
        s && (oi(s, c, "xOrigin", u, T),
        oi(s, c, "yOrigin", f, x),
        oi(s, c, "xOffset", p, c.xOffset),
        oi(s, c, "yOffset", d, c.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + x)
    }, wi = function(t, e) {
        var n = t._gsap || new Xe(t);
        if ("x"in n && !e && !n.uncache)
            return n;
        var i, r, s, o, a, l, c, h, u, f, p, d, m, v, g, y, _, w, b, T, x, k, S, E, O, P, M, A, C, D, R, j, B = t.style, F = n.scaleX < 0, H = "px", z = "deg", Y = Qn(t, $n) || "0";
        return i = r = s = l = c = h = u = f = p = 0,
        o = a = 1,
        n.svg = !(!t.getCTM || !ri(t)),
        v = yi(t, n.svg),
        n.svg && (E = !n.uncache && t.getAttribute("data-svg-origin"),
        _i(t, E || Y, !!E || n.originIsAbsolute, !1 !== n.smooth, v)),
        d = n.xOrigin || 0,
        m = n.yOrigin || 0,
        v !== di && (w = v[0],
        b = v[1],
        T = v[2],
        x = v[3],
        i = k = v[4],
        r = S = v[5],
        6 === v.length ? (o = Math.sqrt(w * w + b * b),
        a = Math.sqrt(x * x + T * T),
        l = w || b ? Cn(b, w) * Mn : 0,
        (u = T || x ? Cn(T, x) * Mn + l : 0) && (a *= Math.cos(u * An)),
        n.svg && (i -= d - (d * w + m * T),
        r -= m - (d * b + m * x))) : (j = v[6],
        D = v[7],
        M = v[8],
        A = v[9],
        C = v[10],
        R = v[11],
        i = v[12],
        r = v[13],
        s = v[14],
        c = (g = Cn(j, C)) * Mn,
        g && (E = k * (y = Math.cos(-g)) + M * (_ = Math.sin(-g)),
        O = S * y + A * _,
        P = j * y + C * _,
        M = k * -_ + M * y,
        A = S * -_ + A * y,
        C = j * -_ + C * y,
        R = D * -_ + R * y,
        k = E,
        S = O,
        j = P),
        h = (g = Cn(-T, C)) * Mn,
        g && (y = Math.cos(-g),
        R = x * (_ = Math.sin(-g)) + R * y,
        w = E = w * y - M * _,
        b = O = b * y - A * _,
        T = P = T * y - C * _),
        l = (g = Cn(b, w)) * Mn,
        g && (E = w * (y = Math.cos(g)) + b * (_ = Math.sin(g)),
        O = k * y + S * _,
        b = b * y - w * _,
        S = S * y - k * _,
        w = E,
        k = O),
        c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
        h = 180 - h),
        o = St(Math.sqrt(w * w + b * b + T * T)),
        a = St(Math.sqrt(S * S + j * j)),
        g = Cn(k, S),
        u = Math.abs(g) > 2e-4 ? g * Mn : 0,
        p = R ? 1 / (R < 0 ? -R : R) : 0),
        n.svg && (E = t.getAttribute("transform"),
        n.forceCSS = t.setAttribute("transform", "") || !vi(Qn(t, Kn)),
        E && t.setAttribute("transform", E))),
        Math.abs(u) > 90 && Math.abs(u) < 270 && (F ? (o *= -1,
        u += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (a *= -1,
        u += u <= 0 ? 180 : -180)),
        n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + H,
        n.y = ((n.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + H,
        n.z = s + H,
        n.scaleX = St(o),
        n.scaleY = St(a),
        n.rotation = St(l) + z,
        n.rotationX = St(c) + z,
        n.rotationY = St(h) + z,
        n.skewX = u + z,
        n.skewY = f + z,
        n.transformPerspective = p + H,
        (n.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[$n] = bi(Y)),
        n.xOffset = n.yOffset = 0,
        n.force3D = L.force3D,
        n.renderTransform = n.svg ? Pi : On ? Oi : xi,
        n.uncache = 0,
        n
    }, bi = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ti = function(t, e, n) {
        var i = re(e);
        return St(parseFloat(e) + parseFloat(li(t, "x", n + "px", i))) + i
    }, xi = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Oi(t, e)
    }, ki = "0deg", Si = "0px", Ei = ") ", Oi = function(t, e) {
        var n = e || this
          , i = n.xPercent
          , r = n.yPercent
          , s = n.x
          , o = n.y
          , a = n.z
          , l = n.rotation
          , c = n.rotationY
          , h = n.rotationX
          , u = n.skewX
          , f = n.skewY
          , p = n.scaleX
          , d = n.scaleY
          , m = n.transformPerspective
          , v = n.force3D
          , g = n.target
          , y = n.zOrigin
          , _ = ""
          , w = "auto" === v && t && 1 !== t || !0 === v;
        if (y && (h !== ki || c !== ki)) {
            var b, T = parseFloat(c) * An, x = Math.sin(T), k = Math.cos(T);
            T = parseFloat(h) * An,
            b = Math.cos(T),
            s = Ti(g, s, x * b * -y),
            o = Ti(g, o, -Math.sin(T) * -y),
            a = Ti(g, a, k * b * -y + y)
        }
        m !== Si && (_ += "perspective(" + m + Ei),
        (i || r) && (_ += "translate(" + i + "%, " + r + "%) "),
        (w || s !== Si || o !== Si || a !== Si) && (_ += a !== Si || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + Ei),
        l !== ki && (_ += "rotate(" + l + Ei),
        c !== ki && (_ += "rotateY(" + c + Ei),
        h !== ki && (_ += "rotateX(" + h + Ei),
        u === ki && f === ki || (_ += "skew(" + u + ", " + f + Ei),
        1 === p && 1 === d || (_ += "scale(" + p + ", " + d + Ei),
        g.style[Kn] = _ || "translate(0, 0)"
    }, Pi = function(t, e) {
        var n, i, r, s, o, a = e || this, l = a.xPercent, c = a.yPercent, h = a.x, u = a.y, f = a.rotation, p = a.skewX, d = a.skewY, m = a.scaleX, v = a.scaleY, g = a.target, y = a.xOrigin, _ = a.yOrigin, w = a.xOffset, b = a.yOffset, T = a.forceCSS, x = parseFloat(h), k = parseFloat(u);
        f = parseFloat(f),
        p = parseFloat(p),
        (d = parseFloat(d)) && (p += d = parseFloat(d),
        f += d),
        f || p ? (f *= An,
        p *= An,
        n = Math.cos(f) * m,
        i = Math.sin(f) * m,
        r = Math.sin(f - p) * -v,
        s = Math.cos(f - p) * v,
        p && (d *= An,
        o = Math.tan(p - d),
        r *= o = Math.sqrt(1 + o * o),
        s *= o,
        d && (o = Math.tan(d),
        n *= o = Math.sqrt(1 + o * o),
        i *= o)),
        n = St(n),
        i = St(i),
        r = St(r),
        s = St(s)) : (n = m,
        s = v,
        i = r = 0),
        (x && !~(h + "").indexOf("px") || k && !~(u + "").indexOf("px")) && (x = li(g, "x", h, "px"),
        k = li(g, "y", u, "px")),
        (y || _ || w || b) && (x = St(x + y - (y * n + _ * r) + w),
        k = St(k + _ - (y * i + _ * s) + b)),
        (l || c) && (o = g.getBBox(),
        x = St(x + l / 100 * o.width),
        k = St(k + c / 100 * o.height)),
        o = "matrix(" + n + "," + i + "," + r + "," + s + "," + x + "," + k + ")",
        g.setAttribute("transform", o),
        T && (g.style[Kn] = o)
    }, Mi = function(t, e, n, i, r, s) {
        var o, a, l = 360, c = N(r), h = parseFloat(r) * (c && ~r.indexOf("rad") ? Mn : 1), u = s ? h * s : h - i, f = i + u + "deg";
        return c && ("short" === (o = r.split("_")[1]) && (u %= l) !== u % 180 && (u += u < 0 ? l : -360),
        "cw" === o && u < 0 ? u = (u + 36e9) % l - ~~(u / l) * l : "ccw" === o && u > 0 && (u = (u - 36e9) % l - ~~(u / l) * l)),
        t._pt = a = new mn(t._pt,e,n,i,u,Fn),
        a.e = f,
        a.u = "deg",
        t._props.push(n),
        a
    }, Ai = function(t, e, n) {
        var i, r, s, o, a, l, c, h = Sn.style, u = n._gsap;
        for (r in h.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;",
        h[Kn] = e,
        bn.body.appendChild(Sn),
        i = wi(Sn, 1),
        Pn)
            (s = u[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = re(s) !== (c = re(o)) ? li(n, r, s, c) : parseFloat(s),
            l = parseFloat(o),
            t._pt = new mn(t._pt,u,r,a,l - a,Bn),
            t._pt.u = c || 0,
            t._props.push(r));
        bn.body.removeChild(Sn)
    };
    kt("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top"
          , i = "Right"
          , r = "Bottom"
          , s = "Left"
          , o = (e < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map((function(n) {
            return e < 2 ? t + n : "border" + n + t
        }
        ));
        pi[e > 1 ? "border" + t : t] = function(t, e, n, i, r) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map((function(e) {
                    return ci(t, e, n)
                }
                )),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "),
            a = {},
            o.forEach((function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }
            )),
            t.init(e, a, r)
        }
    }
    ));
    var Ci, Di, Ri, Li = {
        name: "css",
        register: ti,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, i, r) {
            var s, o, a, l, c, h, u, f, p, d, m, v, g, y, _, w, b, T, x, k = this._props, S = t.style;
            for (u in xn || ti(),
            e)
                if ("autoRound" !== u && (o = e[u],
                !vt[u] || !$e(u, e, n, i, t, r)))
                    if (c = typeof o,
                    h = pi[u],
                    "function" === c && (c = typeof (o = o.call(n, i, t, r))),
                    "string" === c && ~o.indexOf("random(") && (o = me(o)),
                    h)
                        h(this, t, u, o, n) && (_ = 1);
                    else if ("--" === u.substr(0, 2))
                        this.add(S, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", o + "", i, r, 0, 0, u);
                    else if ("undefined" !== c) {
                        if (s = ci(t, u),
                        l = parseFloat(s),
                        (d = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                        a = parseFloat(o),
                        u in jn && ("autoAlpha" === u && (1 === l && "hidden" === ci(t, "visibility") && a && (l = 0),
                        oi(this, S, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== u && "transform" !== u && ~(u = jn[u]).indexOf(",") && (u = u.split(",")[0])),
                        m = u in Pn)
                            if (v || ((g = t._gsap).renderTransform || wi(t),
                            y = !1 !== e.smoothOrigin && g.smooth,
                            (v = this._pt = new mn(this._pt,S,Kn,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === u)
                                this._pt = new mn(this._pt,g,"scaleY",g.scaleY,d ? d * a : a - g.scaleY),
                                k.push("scaleY", u),
                                u += "X";
                            else {
                                if ("transformOrigin" === u) {
                                    b = void 0,
                                    T = void 0,
                                    x = void 0,
                                    b = (w = o).split(" "),
                                    T = b[0],
                                    x = b[1] || "50%",
                                    "top" !== T && "bottom" !== T && "left" !== x && "right" !== x || (w = T,
                                    T = x,
                                    x = w),
                                    b[0] = ui[T] || T,
                                    b[1] = ui[x] || x,
                                    o = b.join(" "),
                                    g.svg ? _i(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== g.zOrigin && oi(this, g, "zOrigin", g.zOrigin, p),
                                    oi(this, S, u, bi(s), bi(o)));
                                    continue
                                }
                                if ("svgOrigin" === u) {
                                    _i(t, o, 1, y, 0, this);
                                    continue
                                }
                                if (u in mi) {
                                    Mi(this, g, u, l, o, d);
                                    continue
                                }
                                if ("smoothOrigin" === u) {
                                    oi(this, g, "smooth", g.smooth, o);
                                    continue
                                }
                                if ("force3D" === u) {
                                    g[u] = o;
                                    continue
                                }
                                if ("transform" === u) {
                                    Ai(this, o, t);
                                    continue
                                }
                            }
                        else
                            u in S || (u = Jn(u) || u);
                        if (m || (a || 0 === a) && (l || 0 === l) && !Ln.test(o) && u in S)
                            a || (a = 0),
                            (f = (s + "").substr((l + "").length)) !== (p = re(o) || (u in L.units ? L.units[u] : f)) && (l = li(t, u, s, p)),
                            this._pt = new mn(this._pt,m ? g : S,u,l,d ? d * a : a - l,"px" !== p || !1 === e.autoRound || m ? Bn : zn),
                            this._pt.u = p || 0,
                            f !== p && (this._pt.b = s,
                            this._pt.r = Hn);
                        else if (u in S)
                            hi.call(this, t, u, s, o);
                        else {
                            if (!(u in t)) {
                                ct(u, o);
                                continue
                            }
                            this.add(t, u, t[u], o, i, r)
                        }
                        k.push(u)
                    }
            _ && dn(this)
        },
        get: ci,
        aliases: jn,
        getSetter: function(t, e, n) {
            var i = jn[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in Pn && e !== $n && (t._gsap.x || ci(t, "x")) ? n && En === n ? "scale" === e ? Vn : Nn : (En = n || {}) && ("scale" === e ? Un : Wn) : t.style && !W(t.style[e]) ? qn : ~e.indexOf("-") ? Xn : on(t, e)
        },
        core: {
            _removeProperty: si,
            _getMatrix: yi
        }
    };
    _n.utils.checkPrefix = Jn,
    Ri = kt((Ci = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Di = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Pn[t] = 1
    }
    )),
    kt(Di, (function(t) {
        L.units[t] = "deg",
        mi[t] = 1
    }
    )),
    jn[Ri[13]] = Ci + "," + Di,
    kt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        jn[e[1]] = Ri[e[0]]
    }
    )),
    kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        L.units[t] = "px"
    }
    )),
    _n.registerPlugin(Li);
    var ji, Bi = _n.registerPlugin(Li) || _n, Fi = (Bi.core.Tween,
    function(t) {
        return Bi.to(t, {
            autoAlpha: 1
        })
    }
    ), Hi = function(t) {
        return Bi.to(t, {
            autoAlpha: 0
        })
    }, zi = n(1);
    r.a.hooks.after((function() {
        ji.update()
    }
    )),
    r.a.init({
        debug: !0,
        transitions: [{
            name: "general-transition",
            once: function(t) {
                var e = t.next;
                Fi(e.container),
                ji = new zi.a({
                    el: document.querySelector("[data-scroll-container]"),
                    smooth: !0
                })
            },
            leave: function(t) {
                var e = t.current;
                return Hi(e.container)
            },
            enter: function(t) {
                var e = t.next;
                Fi(e.container)
            },
            beforeEnter: function() {
                ji.setScroll(0, 0)
            }
        }]
    })
}
]);
