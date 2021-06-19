(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        2837: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MainView", (function () {
                return d
            }));
            var a = n(17),
                i = n.n(a),
                o = n(22),
                s = n.n(o),
                r = n(462),
                c = n(83),
                l = n(47),
                u = n(191),
                p = n(758),
                b = n.n(p);
            n(760);

            function g(e, t, n, a, i, o, s) {
                try {
                    var r = e[o](s),
                        c = r.value
                } catch (e) {
                    return void n(e)
                }
                r.done ? t(c) : Promise.resolve(c).then(a, i)
            }
            var d = r.a.extend({
                template: s.a.template(b.a),
                previousState: "",
                events: {
                    "click #fibbage-startgame": "startGame",
                    "click #fibbage-stopcountdown": "stopCountdown",
                    "click #fibbage-sameplayers": "newGameSamePlayers",
                    "click #fibbage-newplayers": "newGameNewPlayers",
                    "click .fibbage-category-button": "chooseCategory",
                    "click #fibbage-lieforme": "lieForMe",
                    "click #fibbage-submitlie": "submitLie",
                    "click .fibbage-suggestion-button": "chooseSuggestion",
                    "click .fibbage-lie-button": "chooseLie",
                    "click .fibbage-like-button": "toggleLike"
                },
                update: function () {
                    var e, t = this;
                    return (e = regeneratorRuntime.mark((function e() {
                        var n, a, o, s, r, u, p, b, g, d, f, h, m, v;
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.model.get("player"), a = t.model.get("room"), o = n ? n.state : "", s = a ? a.state : "", void 0 !== n && void 0 !== n.playerColor && i()("#player").css("background-color", n.playerColor), "RoomFull" !== o) {
                                        e.next = 8;
                                        break
                                    }
                                    return c.a.show(Error("The room is full"), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), e.abrupt("return");
                                case 8:
                                    if ("GameLocked" !== o) {
                                        e.next = 11;
                                        break
                                    }
                                    return c.a.show(Error("Game is in progress. Please wait for a new game to start."), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), e.abrupt("return");
                                case 11:
                                    if (s && "Lobby" === s.split("_")[0] && o === s) t.hideLobbyButtons(), i()("#player").css("background-color", n.playerColor), "WaitingForMore" === (u = s.split("_")[1]) ? i()("#fibbage-lobby-text").html("Waiting for all players to join") : "CanStart" === u ? (i()("#fibbage-lobby-text").html("Press this button when everybody has joined"), i()("#fibbage-startgame").show()) : "Countdown" === u ? (i()("#fibbage-lobby-text").html("Press this button to cancel game start"), i()("#fibbage-stopcountdown").show()) : "PostGame" === u && (i()("#fibbage-lobby-text").html("What do you want to do?"), i()(".fibbage-endbuttons").show()), t.showScreen(".state-lobby");
                                    else if ("Gameplay_Logo" === s) t.showScreen(".state-nothing");
                                    else if ("Gameplay_Round" === s) i()(".round-text").html("ROUND ".concat(a.round)), t.showScreen(".state-round");
                                    else if ("Gameplay_CategorySelection" === s && "Gameplay_CategorySelection" === o)
                                        if (n.isChoosing) {
                                            for (p = "", r = 0; r < a.choices.length; r++) p += '<button type="button" data-num="'.concat(r, '" class="fibbage-category-button button-fibbage button-large pure-button pure-input-1">').concat(a.choices[r], "</button>");
                                            i()(".button-fieldset").html(p), t.showScreen(".state-choosing")
                                        } else i()("#notchoosing").html("".concat(l.a.safeText(a.choosingPlayerName), " is picking a category")), t.showScreen(".state-notchoosing");
                                    else if ("Gameplay_EnterLie" === s)
                                        if ("Gameplay_EnterLie" === o) {
                                            if (".state-enterlie" !== t.activeScreen) {
                                                for (i()("#fibbage-lie-input").val(""), i()("#fibbage-enterlie-field").show(), i()("#fibbage-suggestions").hide(), i()("#fibbage-submit-alert").hide(), i()(".state-enterlie #question-text").html(a.question), b = "", r = 0; r < n.suggestions.length; r++) b += '<button type="button" data-num="'.concat(r, '" class="fibbage-suggestion-button gridmargin button-fibbage button-large pure-button pure-u-1">').concat(n.suggestions[r], "</button>");
                                                i()("#fibbage-suggestions").html(b)
                                            }
                                            n.showError && (g = i()("#fibbage-submit-alert"), i()("#fibbage-submit-alert").html("You entered the truth! Enter a lie!"), g.addClass("alert-info"), g.removeClass("alert-danger"), g.show()), t.showScreen(".state-enterlie")
                                        } else "Gameplay_LieReceived" === o && t.showScreen(".state-liereceived");
                                    else if ("Gameplay_LyingDone" === s) t.showScreen(".state-lyingdone");
                                    else if ("Gameplay_ChooseLie" === s && "Gameplay_ChooseLie" === o)
                                        if (n.choosingDone || void 0 !== n.chosen) {
                                            for (i()("#chooselikes-choice").html(n.chosen ? "You chose: ".concat(l.a.safeText(n.chosen)) : "You didn't make a choice"), i()("#chooselikes-text").html("Award bonus likes"), d = "", r = 0; r < n.choices.length; r++) f = n.likes.indexOf(n.choices[r]) >= 0, h = f ? "button-fibbage-liked" : "button-fibbage-like", m = f ? "fa-check-square-o" : "fa-square-o", d += '<button type="button" data-num="'.concat(r, '" class="pure-input-1 fibbage-like-button button-large pure-button ').concat(h, '"><div class="like-text">').concat(l.a.safeText(n.choices[r]), '</div><div class="like-checkbox"><i class="fa ').concat(m, ' fa-lg"></i></div></button>');
                                            i()("#fibbage-chooselikes").html(d), t.showScreen(".state-chooselikes")
                                        } else {
                                            for (i()("#chooselie-text").html("find the truth!"), v = "", r = 0; r < n.choices.length; r++) v += '<button type="button" data-num="'.concat(r, '" class="pure-input-1 fibbage-lie-button button-large pure-button button-fibbage">').concat(l.a.safeText(n.choices[r]), "</button>");
                                            i()("#fibbage-chooselie").html(v), t.showScreen(".state-chooselie")
                                        } t.onResize();
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function () {
                        var t = this,
                            n = arguments;
                        return new Promise((function (a, i) {
                            var o = e.apply(t, n);

                            function s(e) {
                                g(o, a, i, s, r, "next", e)
                            }

                            function r(e) {
                                g(o, a, i, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })()
                },
                hideLobbyButtons: function () {
                    i()("#fibbage-startgame").hide(), i()("#fibbage-stopcountdown").hide(), i()(".fibbage-endbuttons").hide()
                },
                startGame: function (e) {
                    return u.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0
                    }), !1
                },
                stopCountdown: function (e) {
                    return u.app.client.send("SendMessageToRoomOwner", {
                        cancelStartGame: !0
                    }), !1
                },
                chooseCategory: function (e) {
                    var t = i()(e.target).data("num");
                    return u.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: t
                    }), !1
                },
                lieForMe: function (e) {
                    return i()("#fibbage-enterlie-field").hide(), i()("#fibbage-suggestions").show(), !1
                },
                submitLie: function (e) {
                    var t = this.sanitize(i()("#fibbage-lie-input").val()).toUpperCase();
                    if (0 === (t = t.replace(/\s\s+/g, " ").trim()).length) {
                        var n = i()("#fibbage-submit-alert");
                        return i()("#fibbage-submit-alert").html("You can't enter nothing! Use a suggestion if you need help!"), n.removeClass("alert-info"), n.addClass("alert-danger"), n.show(), !1
                    }
                    return u.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: t,
                        usedSuggestion: !1
                    }), !1
                },
                chooseSuggestion: function (e) {
                    var t = i()(e.target).data("num"),
                        n = this.model.get("player").suggestions[t],
                        a = this.sanitize(n).toUpperCase();
                    return u.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: a,
                        usedSuggestion: !0
                    }), !1
                },
                chooseLie: function (e) {
                    var t = i()(e.target).data("num"),
                        n = this.model.get("player").choices[t];
                    return u.app.client.send("SendMessageToRoomOwner", {
                        choice: n
                    }), !1
                },
                toggleLike: function (e) {
                    var t = i()(e.currentTarget).data("num"),
                        n = this.model.get("player").likes.indexOf(this.model.get("player").choices[t]) >= 0;
                    if (!n) {
                        i()(e.currentTarget).removeClass(n ? "button-fibbage-liked" : "button-fibbage-like"), i()(e.currentTarget).addClass(n ? "button-fibbage-like" : "button-fibbage-liked"), i()(e.currentTarget).find(".like-checkbox").html('<i class="fa '.concat(n ? "fa-square-o" : "fa-check-square-o", ' fa-lg"></i>'));
                        var a = this.model.get("player").choices[t];
                        u.app.client.send("SendMessageToRoomOwner", {
                            like: a
                        })
                    }
                    return !1
                },
                newGameSamePlayers: function (e) {
                    return u.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0,
                        decision: "PostGame_Continue"
                    }), !1
                },
                newGameNewPlayers: function (e) {
                    return u.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0,
                        decision: "PostGame_NewGame"
                    }), !1
                },
                sanitize: function (e) {
                    return e.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "’").trim()
                }
            })
        },
        460: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return w
            }));
            var a = n(41),
                i = n.n(a),
                o = n(3),
                s = n(17),
                r = n.n(s),
                c = n(22),
                l = n.n(c),
                u = n(31),
                p = n.n(u),
                b = n(191);
            n(461);

            function g(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                    var n = [],
                        a = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, r = e[Symbol.iterator](); !(a = (s = r.next()).done) && (n.push(s.value), !t || n.length !== t); a = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var d = p.a.View.extend({
                el: "#banner",
                template: l.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet: function (e) {
                                var t = g(e, 2),
                                    n = t[0],
                                    a = t[1] || "no-theme";
                                return n && (a += " show"), a
                            }
                        }]
                    },
                    ".banner-text": "copy",
                    ".banner-cta": "cta"
                },
                initialize: function (e) {
                    this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
                },
                onBannerClick: function () {
                    b.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender: function () {
                    this.stickit()
                },
                visibleDidChange: function (e, t) {
                    setTimeout((function () {
                        r()(window).trigger("resize")
                    }), .5), t && b.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
                },
                getCampaign: function () {
                    var e = this.model.get("url");
                    if (!e) return "";
                    var t = "";
                    e.split("?")[1] && (t = new URLSearchParams(window.location.search).get("utm_campaign") || "");
                    return t
                }
            });

            function f(e, t, n, a, i, o, s) {
                try {
                    var r = e[o](s),
                        c = r.value
                } catch (e) {
                    return void n(e)
                }
                r.done ? t(c) : Promise.resolve(c).then(a, i)
            }

            function h(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, i) {
                        var o = e.apply(t, n);

                        function s(e) {
                            f(o, a, i, s, r, "next", e)
                        }

                        function r(e) {
                            f(o, a, i, s, r, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var w = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n, a, s, r, c;
                return t = e, n = null, a = [{
                    key: "update",
                    value: (c = h(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n && "PostGame" === n.lobbyState) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.hide(), e.abrupt("return");
                                case 3:
                                    if (this.view) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, this.init(t, n);
                                case 6:
                                    this.show();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e, t) {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "init",
                    value: (r = h(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bannerData = !1, e.abrupt("return");
                                case 3:
                                    return e.next = 5, this.loadBannerData(t);
                                case 5:
                                    if (this.bannerData = e.sent, this.bannerData) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    this.view = new d({
                                        model: new i.a.Model(this.bannerData)
                                    }), this.isInitialized = !0;
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "show",
                    value: function () {
                        this.view && this.view.model.set({
                            visible: !0
                        })
                    }
                }, {
                    key: "hide",
                    value: function () {
                        this.view && this.view.model.set({
                            visible: !1
                        })
                    }
                }, {
                    key: "loadBannerData",
                    value: (s = h(regeneratorRuntime.mark((function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, fetch(o.a.BannersUrl);
                                case 3:
                                    return n = e.sent, e.next = 6, n.json();
                                case 6:
                                    if ((a = e.sent) && a.postGameBanners) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 9:
                                    return e.abrupt("return", a.postGameBanners[t]);
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(0), console.error("Unable to load banner data", e.t0), e.abrupt("return", !1);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    }))), function (e) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "isVisible",
                    get: function () {
                        return !!this.view && "on" === this.view.state
                    }
                }], n && m(t.prototype, n), a && m(t, a), e
            }();
            v(w, "view", null), v(w, "isInitialized", !1), v(w, "bannerConfig", null)
        },
        461: function (e, t, n) {},
        462: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return h
            }));
            var a = n(22),
                i = n.n(a),
                o = n(17),
                s = n.n(o),
                r = n(41),
                c = n.n(r),
                l = n(31),
                u = n.n(l),
                p = n(191),
                b = n(83),
                g = n(460),
                d = n(47);
            n(463), n(464), n(465);

            function f(e, t, n, a, i, o, s) {
                try {
                    var r = e[o](s),
                        c = r.value
                } catch (e) {
                    return void n(e)
                }
                r.done ? t(c) : Promise.resolve(c).then(a, i)
            }
            var h = u.a.View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "3.1.16",
                template: null,
                initialize: function (e) {
                    var t = this;
                    this.mergeOptions(e, ["appId", "appTag"]), p.app.debug.reset(), p.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion), p.app.analytics.trackScreenView(this.getOption("appId")), this.model = new c.a.Model({});
                    var n = p.app.client.parseEntities();
                    this.model.set(n), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (function () {
                        t.update().catch(t.caughtError)
                    })), p.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed), p.app.client.on("client:disconnected", this.onDisconnected), p.app.client.on("client:connection", this.onConnectionMessage.bind(this))
                },
                render: function () {
                    this.model.set("username", d.a.safeText(p.app.client.name), {
                        silent: !0
                    }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                },
                onEntityDidChange: function (e, t) {
                    this.model.unset(e, {
                        silent: !0
                    }), this.model.set(e, t)
                },
                controllerUpdate: function () {
                    var e = this.model.get("room") || {},
                        t = this.model.get("player"),
                        n = e.state || "",
                        a = e.lobbyState;
                    p.app.debug.pushState({
                        customerBlob: t,
                        roomBlob: e
                    }), a || -1 === n.indexOf("_") || (a = e.state.split("_")[1]), "PostGame" === a || "Credits" === n || "GameOver" === n || "PostGame" === n || "DayEnd" === n || e.gameResults ? (g.a.isInitialized || g.a.init(this.getOption("appTag")), g.a.show()) : g.a.hide(), p.app.storage && p.app.storage.isSupported && e.platformId && p.app.storage.setTag("platform-".concat(e.platformId))
                },
                update: function () {
                    return (e = regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", null);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function () {
                        var t = this,
                            n = arguments;
                        return new Promise((function (a, i) {
                            var o = e.apply(t, n);

                            function s(e) {
                                f(o, a, i, s, r, "next", e)
                            }

                            function r(e) {
                                f(o, a, i, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })();
                    var e
                },
                caughtError: function (e) {
                    throw e
                },
                onAttach: function () {
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked)
                },
                onBeforeDestroy: function () {
                    this.model.stopListening()
                },
                artifactClicked: function () {
                    p.app.analytics.trackEvent("PostGame", "galleryClicked", this.getOption("appTag"))
                },
                showScreen: function (e, t) {
                    var n = s()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (function () {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (function () {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = i.a.throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify: function () {
                    b.a.vibrate()
                },
                trackScreenView: function () {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag("played-".concat(this.getOption("appTag")))
                },
                onRoomWasDestroyed: function () {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("secret")), b.a.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected: function () {
                    b.a.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage: function (e) {
                    var t = "".concat(e.status, " ").concat(e.attempt ? "".concat(e.attempt, "/5'") : "");
                    if (b.a.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        var n = p.app.client.parseEntities();
                        this.model.set(n)
                    }
                },
                onResize: function () {
                    var e = s()("#player").outerHeight(!0) || 0,
                        t = g.a.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        n = s()(window).width(),
                        a = s()(window).height() - e;
                    s()(".".concat(this.getOption("appTag"), "-page")).css("height", a - t), s()(".".concat(this.getOption("appTag"), "-page")).attr("height", a - t), s()(".".concat(this.getOption("appTag"), "-page")).css("top", e), s()(".".concat(this.getOption("appTag"), "-page")).css("width", n), s()(".".concat(this.getOption("appTag"), "-page")).attr("width", n)
                }
            })
        },
        463: function (e, t, n) {},
        464: function (e, t, n) {},
        465: function (e, t, n) {},
        758: function (e, t, n) {
            e.exports = '<div id="page-fibbage" class="page green">\n    <div id="player">\n        <h1><%=username%></h1>\n    </div>\n\n    <div id="fibbage-preload" class="fibbage-preload"></div>\n\n    <div id="game" class="game pt-pageholder">    \n        <div class="pt-page-off state-lobby fibbage-page">\n            <div class="container">\n                <br /><span id="fibbage-lobby-text"></span><br />\n                <form class="pure-form">\t\t\t\t\t\n                    <button type="button" id="fibbage-startgame" class="button-fibbage button-xlarge pure-button pure-input-1">ALL HERE</button>\n                    <button type="button" id="fibbage-stopcountdown" class="button-fibbage  button-xlarge pure-button pure-input-1">CANCEL</button>\n                    <button type="button" id="fibbage-sameplayers" class="button-fibbage  button-xlarge pure-button pure-input-1 fibbage-endbuttons">SAME PLAYERS</button>\n                    <button type="button" id="fibbage-newplayers" class="button-fibbage  button-xlarge pure-button pure-input-1 fibbage-endbuttons">NEW PLAYERS</button>\t\n                </form>\n            </div>\n        </div>\n\n        <div class="pt-page-off state-nothing fibbage-page">\n            <div class="logo-image" style="width:100%;">\n                <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src=' + n(759) + '>\n            </div>\n        </div>\n    \n        <div class="pt-page-off state-round fibbage-page">\n            <div class="round-main"><p class=\'round-text\'></div>\n        </div>\n\n        <div class="pt-page-off state-choosing fibbage-page">\n            <div class="container">\n                <br /><span>You\'re choosing the category!</span><br />\n                <div class="button-container">\n                    <form class="pure-form">\n                        <fieldset class="button-fieldset">\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\t\t\n\n        <div class="pt-page-off state-enterlie fibbage-page">\n            <div class="container">\n                <br /><div id="question-text"></div><br />\n\n                <div id="fibbage-submit-alert" class="alert alert-info">Alert message goes here</div>\n                <form class="pure-form" id="fibbage-enterlie-field">\n                    <div class="pure-u-1">\n                        <input id="fibbage-lie-input" name="fibbage-lie" class="pure-input-1 capitalize jbg-input fibbage-lie-input" type="text" maxlength="45" placeholder="ENTER A LIE" autocapitalize="off" autocorrect="off" autocomplete="off">\n                    </div>\n                    <button type="button" id="fibbage-lieforme" class="button-fibbage button-large pure-button capitalize left">Lie for me<br/>(Half Points)</button>\n                    <button type="submit" id="fibbage-submitlie" class="button-fibbage button-large pure-button capitalize right"><i class="fa fa-send-o"></i>&nbsp;&nbsp;SEND</button>\n                    <div id="fibbage-submitlie-loading" style="display:none;" class="button-fibbage-loading"></div>\t\t\t\n                </form>\n                <div id="fibbage-suggestions" class="pure-g"></div>\n            </div>\n        </div>\t\n\n        <div class="pt-page-off state-chooselie fibbage-page">\n            <div class="container">\n                <br /><span id="chooselie-text"></span><br />\n                <form id="fibbage-chooselie" class="pure-form"></form>\n            </div>\n        </div>\n\n        <div class="pt-page-off state-chooselikes fibbage-page">\n            <div class="container">\n                <br /><span id="chooselikes-choice"></span><br />\n                <span id="chooselikes-text"></span><br />\n                <form id="fibbage-chooselikes" class="pure-form"></form>\n            </div>\n        </div>\n\n        <div class="pt-page-off state-liereceived fibbage-page">\n            <br /><span>LIE ENTERED!<br />WAITING FOR OTHER PLAYERS.</span><br />\n        </div>\n\n        <div class="pt-page-off state-lyingdone fibbage-page">\n            <br /><span>LYING IS DONE!</span><br />\n        </div>\t\t\n\n        <div class="pt-page-off state-notchoosing fibbage-page">\n            <br /><span id="notchoosing"></span><br />\n        </div>\n\n    </div>\n</div>\n'
        },
        759: function (e, t, n) {
            e.exports = n.p + "images/669591cd296a5e8bc294e8f5e3075d7a.png"
        },
        760: function (e, t, n) {}
    }
]);
//# sourceMappingURL=19.5d4de1f387c344d7e419.js.map