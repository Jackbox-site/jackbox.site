(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        2840: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MainView", (function () {
                return f
            }));
            var a = n(17),
                i = n.n(a),
                o = n(22),
                r = n.n(o),
                s = n(462),
                u = n(83),
                c = n(47),
                l = n(191),
                p = n(861),
                d = n.n(p);
            n(863);

            function h(e, t, n, a, i, o, r) {
                try {
                    var s = e[o](r),
                        u = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(u) : Promise.resolve(u).then(a, i)
            }
            var f = s.a.extend({
                template: r.a.template(d.a),
                testBlob: null,
                events: {
                    "click #quiplash-startgame": "startGame",
                    "click #quiplash-stopcountdown": "stopCountdown",
                    "click #quiplash-sameplayers": "newGameSamePlayers",
                    "click #quiplash-newplayers": "newGameNewPlayers",
                    "click #quiplash-submit-answer": "submitAnswer",
                    "click .quiplash-vote-button": "vote"
                },
                update: function () {
                    var e, t = this;
                    return (e = regeneratorRuntime.mark((function e() {
                        var a, o, r, s, p, d, h, f, g, b, m, v, w, y, x, k, q, S;
                        return regeneratorRuntime.wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.model.get("room")) {
                                        e.next = 3;
                                        break
                                    }
                                    return t.showScreen("#state-logo"), e.abrupt("return");
                                case 3:
                                    if (a = t.model.get("room"), o = t.model.get("player") ? t.model.get("player") : {}, r = o ? o.state : "", s = a ? a.state : "", p = void 0 !== o && void 0 !== o.playerColor ? o.playerColor : "#CCCCCC", i()("#player").css("background-color", p), d = c.a.adjustColor(p, .52), i()("#state-lobby").css("background-color", d), i()("#state-answer-question-audience").css("background-color", d), i()("#state-answer-question").css("background-color", d), i()("#state-done-answering").css("background-color", d), i()("#state-vote").css("background-color", d), t.currentAnswerQuestionId = -1, "RoomFull" !== r) {
                                        e.next = 19;
                                        break
                                    }
                                    return u.a.show(Error("The room is full"), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), e.abrupt("return");
                                case 19:
                                    if ("GameLocked" !== r) {
                                        e.next = 23;
                                        break
                                    }
                                    u.a.show(Error("Game is in progress. Please wait for a new game to start."), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), e.next = 100;
                                    break;
                                case 23:
                                    if (!s || "Lobby" !== s) {
                                        e.next = 37;
                                        break
                                    }
                                    if (l.app.client.isPlayer) {
                                        e.next = 27;
                                        break
                                    }
                                    return t.showScreen("#state-logo"), e.abrupt("return");
                                case 27:
                                    if (t.hideLobbyButtons(), o.isAllowedToStartGame) {
                                        e.next = 32;
                                        break
                                    }
                                    return i()("#quiplash-lobby-text").html("Сядьте поудобнее и расслабьтесь!"), t.showScreen("#state-lobby"), e.abrupt("return");
                                case 32:
                                    "WaitingForMore" === (h = a.lobbyState) ? i()("#quiplash-lobby-text").html("Ждем, когда все игроки присоединятся"): "CanStart" === h ? (i()("#quiplash-lobby-text").html("Нажмите эту кнопку, когда все присоединятся"), i()("#quiplash-startgame").show()) : "Countdown" === h ? (i()("#quiplash-lobby-text").html("Нажмите эту кнопку, чтобы отменить начало игры"), i()("#quiplash-stopcountdown").show()) : "PostGame" === h && (i()("#quiplash-lobby-text").html("Что ты хочешь сделать?"), i()(".quiplash-endbuttons").show()), t.showScreen("#state-lobby"), e.next = 100;
                                    break;
                                case 37:
                                    if ("Gameplay_Logo" !== s) {
                                        e.next = 41;
                                        break
                                    }
                                    t.showScreen("#state-logo"), e.next = 100;
                                    break;
                                case 41:
                                    if ("Gameplay_Round" !== s) {
                                        e.next = 49;
                                        break
                                    }
                                    return e.next = 44, n(864)("./Round".concat(a.round, ".png"));
                                case 44:
                                    f = e.sent, i()("#round-image").attr("src", f.default), t.showScreen("#state-round"), e.next = 100;
                                    break;
                                case 49:
                                    if ("Gameplay_AnswerQuestion" !== s) {
                                        e.next = 64;
                                        break
                                    }
                                    if ("Gameplay_AnswerQuestion" !== r) {
                                        e.next = 60;
                                        break
                                    }
                                    if (o.question) {
                                        e.next = 54;
                                        break
                                    }
                                    return t.showScreen("#state-done-answering"), e.abrupt("return");
                                case 54:
                                    t.currentAnswerQuestionId !== o.question.id && (i()("#quiplash-answer-input").val(""), i()("#quiplash-answer-field").show(), i()("#quiplash-submit-alert").hide(), i()("#state-answer-question #question-text").html(o.question.prompt.replace(/<BLANK>/gi, "________"))), o.showError && (g = i()("#quiplash-submit-alert"), i()("#quiplash-submit-alert").html("Вы вошли в то же самое, что и кто-то другой! Пробовать снова."), g.addClass("alert-info"), g.removeClass("alert-danger"), g.show()), t.currentAnswerQuestionId = o.question.id, t.showScreen("#state-answer-question"), e.next = 62;
                                    break;
                                case 60:
                                    i()(".state-answer-question-audience-text").html("Ты же в зале! Подождите, пока придет время голосовать."), t.showScreen("#state-answer-question-audience");
                                case 62:
                                    e.next = 100;
                                    break;
                                case 64:
                                    if ("Gameplay_Vote" !== s) {
                                        e.next = 100;
                                        break
                                    }
                                    if (!o.doneVoting) {
                                        e.next = 70;
                                        break
                                    }
                                    return i()("#vote-text").html("Ждите других игроков!"), i()("#quiplash-vote").html(""), t.showScreen("#state-vote"), e.abrupt("return");
                                case 70:
                                    if (a.question ? i()("#state-vote #question-text").html(a.question.prompt.replace(/<BLANK>/gi, "________")) : i()("#state-vote #question-text").html(""), b = "", o.votesLeft > 1 ? b = " votes left" : 1 === o.votesLeft && (b = " vote left"), i()("#vote-text").html(o.votesLeft ? "У тебя есть ".concat(o.votesLeft).concat(b) : "Какой из них вам больше нравится?"), m = "", !a.choices || !a.order) {
                                        e.next = 97;
                                        break
                                    }
                                    v = 0;
                                case 77:
                                    if (!(v < a.order.length)) {
                                        e.next = 97;
                                        break
                                    }
                                    if (w = a.order[v], !o.ignore) {
                                        e.next = 91;
                                        break
                                    }
                                    y = !1, x = 0;
                                case 82:
                                    if (!(x < o.ignore.length)) {
                                        e.next = 89;
                                        break
                                    }
                                    if (o.ignore[x].toString() !== w.toString()) {
                                        e.next = 86;
                                        break
                                    }
                                    return y = !0, e.abrupt("break", 89);
                                case 86:
                                    x++, e.next = 82;
                                    break;
                                case 89:
                                    if (!y) {
                                        e.next = 91;
                                        break
                                    }
                                    return e.abrupt("continue", 94);
                                case 91:
                                    if (k = c.a.safeText(a.choices[w]), o.votes) {
                                        for (q = 0, S = 0; S < o.votes.length; S++) o.votes[S] === w && (q += 1);
                                        q > 0 && (k += " (".concat(q, ")"))
                                    }
                                    m += "<button type='button' data-vote='".concat(w.toString(), "' class='pure-input-1 quiplash-vote-button button-large pure-button button-quiplash'>").concat(k, "</button>");
                                case 94:
                                    v++, e.next = 77;
                                    break;
                                case 97:
                                    t.notify(), i()("#quiplash-vote").html(m), t.showScreen("#state-vote");
                                case 100:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function () {
                        var t = this,
                            n = arguments;
                        return new Promise((function (a, i) {
                            var o = e.apply(t, n);

                            function r(e) {
                                h(o, a, i, r, s, "next", e)
                            }

                            function s(e) {
                                h(o, a, i, r, s, "throw", e)
                            }
                            r(void 0)
                        }))
                    })()
                },
                hideLobbyButtons: function () {
                    i()("#quiplash-startgame").hide(), i()("#quiplash-stopcountdown").hide(), i()(".quiplash-endbuttons").hide()
                },
                startGame: function (e) {
                    return l.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0
                    }), !1
                },
                stopCountdown: function (e) {
                    return l.app.client.send("SendMessageToRoomOwner", {
                        cancelStartGame: !0
                    }), !1
                },
                chooseCategory: function (e) {
                    var t = i()(e.target).data("num");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: t
                    }), !1
                },
                submitAnswer: function (e) {
                    var t = this.sanitize(i()("#quiplash-answer-input").val()).toUpperCase();
                    if (0 === t.length) {
                        var n = i()("#quiplash-submit-alert");
                        return i()("#quiplash-submit-alert").html("You can't enter nothing!"), n.removeClass("alert-info"), n.addClass("alert-danger"), n.show(), !1
                    }
                    return l.app.client.send("SendMessageToRoomOwner", {
                        answer: t,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                vote: function (e) {
                    var t = i()(e.target).data("vote");
                    return l.app.client.isPlayer ? l.app.client.send("SendMessageToRoomOwner", {
                        vote: t
                    }) : l.app.client.isAudience && (l.app.client.sessionSend("vote", "Quiplash Vote", {
                        type: "vote",
                        vote: t
                    }), i()("#vote-text").html("Спасибо, зритель!"), i()("#quiplash-vote").html(""), this.showScreen("#state-vote")), !1
                },
                newGameSamePlayers: function (e) {
                    return l.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0,
                        decision: "PostGame_Continue"
                    }), !1
                },
                newGameNewPlayers: function (e) {
                    return l.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0,
                        decision: "PostGame_NewGame"
                    }), !1
                },
                sanitize: function (e) {
                    return e.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "’").trim()
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
                r = n(17),
                s = n.n(r),
                u = n(22),
                c = n.n(u),
                l = n(31),
                p = n.n(l),
                d = n(191);
            n(461);

            function h(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                    var n = [],
                        a = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(a = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); a = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var f = p.a.View.extend({
                el: "#banner",
                template: c.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet: function (e) {
                                var t = h(e, 2),
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
                    d.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender: function () {
                    this.stickit()
                },
                visibleDidChange: function (e, t) {
                    setTimeout((function () {
                        s()(window).trigger("resize")
                    }), .5), t && d.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
                },
                getCampaign: function () {
                    var e = this.model.get("url");
                    if (!e) return "";
                    var t = "";
                    e.split("?")[1] && (t = new URLSearchParams(window.location.search).get("utm_campaign") || "");
                    return t
                }
            });

            function g(e, t, n, a, i, o, r) {
                try {
                    var s = e[o](r),
                        u = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(u) : Promise.resolve(u).then(a, i)
            }

            function b(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, i) {
                        var o = e.apply(t, n);

                        function r(e) {
                            g(o, a, i, r, s, "next", e)
                        }

                        function s(e) {
                            g(o, a, i, r, s, "throw", e)
                        }
                        r(void 0)
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
                var t, n, a, r, s, u;
                return t = e, n = null, a = [{
                    key: "update",
                    value: (u = b(regeneratorRuntime.mark((function e(t, n) {
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
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "init",
                    value: (s = b(regeneratorRuntime.mark((function e(t) {
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
                                    this.view = new f({
                                        model: new i.a.Model(this.bannerData)
                                    }), this.isInitialized = !0;
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function (e) {
                        return s.apply(this, arguments)
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
                    value: (r = b(regeneratorRuntime.mark((function e(t) {
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
                        return r.apply(this, arguments)
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
                return b
            }));
            var a = n(22),
                i = n.n(a),
                o = n(17),
                r = n.n(o),
                s = n(41),
                u = n.n(s),
                c = n(31),
                l = n.n(c),
                p = n(191),
                d = n(83),
                h = n(460),
                f = n(47);
            n(463), n(464), n(465);

            function g(e, t, n, a, i, o, r) {
                try {
                    var s = e[o](r),
                        u = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(u) : Promise.resolve(u).then(a, i)
            }
            var b = l.a.View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "3.1.16",
                template: null,
                initialize: function (e) {
                    var t = this;
                    this.mergeOptions(e, ["appId", "appTag"]), p.app.debug.reset(), p.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion), p.app.analytics.trackScreenView(this.getOption("appId")), this.model = new u.a.Model({});
                    var n = p.app.client.parseEntities();
                    this.model.set(n), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (function () {
                        t.update().catch(t.caughtError)
                    })), p.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed), p.app.client.on("client:disconnected", this.onDisconnected), p.app.client.on("client:connection", this.onConnectionMessage.bind(this))
                },
                render: function () {
                    this.model.set("username", f.a.safeText(p.app.client.name), {
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
                    }), a || -1 === n.indexOf("_") || (a = e.state.split("_")[1]), "PostGame" === a || "Credits" === n || "GameOver" === n || "PostGame" === n || "DayEnd" === n || e.gameResults ? (h.a.isInitialized || h.a.init(this.getOption("appTag")), h.a.show()) : h.a.hide(), p.app.storage && p.app.storage.isSupported && e.platformId && p.app.storage.setTag("platform-".concat(e.platformId))
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

                            function r(e) {
                                g(o, a, i, r, s, "next", e)
                            }

                            function s(e) {
                                g(o, a, i, r, s, "throw", e)
                            }
                            r(void 0)
                        }))
                    })();
                    var e
                },
                caughtError: function (e) {
                    throw e
                },
                onAttach: function () {
                    this.update().catch(this.caughtError), r()(".gallery-link").click(this.artifactClicked)
                },
                onBeforeDestroy: function () {
                    this.model.stopListening()
                },
                artifactClicked: function () {
                    p.app.analytics.trackEvent("PostGame", "galleryClicked", this.getOption("appTag"))
                },
                showScreen: function (e, t) {
                    var n = r()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (r()(this.activeScreen).fadeOut("fast", (function () {})), r()(this.activeScreen).show(), r()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (function () {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = i.a.throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify: function () {
                    d.a.vibrate()
                },
                trackScreenView: function () {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag("played-".concat(this.getOption("appTag")))
                },
                onRoomWasDestroyed: function () {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("secret")), d.a.show("error", {
                        titleText: "Отключенно",
                        text: "Спасибо за игру!",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected: function () {
                    d.a.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage: function (e) {
                    var t = "".concat(e.status, " ").concat(e.attempt ? "".concat(e.attempt, "/5'") : "");
                    if (d.a.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        var n = p.app.client.parseEntities();
                        this.model.set(n)
                    }
                },
                onResize: function () {
                    var e = r()("#player").outerHeight(!0) || 0,
                        t = h.a.isVisible ? r()("#slide-in-banner").outerHeight(!0) : 0,
                        n = r()(window).width(),
                        a = r()(window).height() - e;
                    r()(".".concat(this.getOption("appTag"), "-page")).css("height", a - t), r()(".".concat(this.getOption("appTag"), "-page")).attr("height", a - t), r()(".".concat(this.getOption("appTag"), "-page")).css("top", e), r()(".".concat(this.getOption("appTag"), "-page")).css("width", n), r()(".".concat(this.getOption("appTag"), "-page")).attr("width", n)
                }
            })
        },
        463: function (e, t, n) {},
        464: function (e, t, n) {},
        465: function (e, t, n) {},
        861: function (e, t, n) {
            e.exports = '<div id="page-quiplash" class="page">\n    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Rokkitt:400,700">\n    \n    <div id="player">\n        <h1><%=username%></h1>\n    </div>\n    \n    <div id="quiplash-preload" class="quiplash-preload"></div>\n\n    <div id="game" class="game pt-pageholder">    \n        <div id="state-lobby" class="pt-page-off quiplash-page">\n            <div class="container">\n                <br /><span id="quiplash-lobby-text"></span><br />\n                <form class="pure-form">                    \n                    <button type="button" id="quiplash-startgame" class="button-quiplash button-xlarge pure-button pure-input-1">ВСЕ ЗДЕСЬ</button>\n                    <button type="button" id="quiplash-stopcountdown" class="button-quiplash  button-xlarge pure-button pure-input-1">ОТМЕНА</button>\n                    <button type="button" id="quiplash-sameplayers" class="button-quiplash  button-xlarge pure-button pure-input-1 quiplash-endbuttons">ТЕ ЖЕ ИГРОКИ </button>\n                    <button type="button" id="quiplash-newplayers" class="button-quiplash  button-xlarge pure-button pure-input-1 quiplash-endbuttons">НОВЫЕ ИГРОКИ</button>    \n                </form>\n            </div>\n        </div>\n\n        <div id="state-logo" class="pt-page-off quiplash-page">\n            <div class="logo-image" style="width:100%;">\n                <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src=' + n(862) + '>\n            </div>\n        </div>\n        \n        <div id="state-round" class="pt-page-off quiplash-page">\n            <div class="round-image-container" style="width:100%;">\n                <img id="round-image" class="pure-img" style="margin-left:auto; margin-right:auto;">\n            </div>\n        </div>\n    \n        <div id="state-answer-question-audience" class="pt-page-off quiplash-page">\n            <br/><div class="state-answer-question-audience-main"><p class=\'state-answer-question-audience-text\'></p></div>\n        </div>\n\n        <div id="state-answer-question" class="pt-page-off quiplash-page">\n            <div class="container">\n                <br /><span id="question-text"></span><br />\n\n                <span id="quiplash-submit-alert" class="alert alert-info">Alert message goes here</span>\n                <form class="pure-form" id="quiplash-answer-field">\n                    <div class="pure-u-1">\n                        <input id="quiplash-answer-input" name="quiplash-answer" class="pure-input-1 capitalize jbg-input quiplash-answer-input" type="text" maxlength="45" placeholder="ANSWER HERE" autocapitalize="off" autocorrect="off" autocomplete="off">\n                    </div>\n                    <button type="отправить" id="quiplash-submit-answer" class="button-quiplash button-large pure-button capitalize right">\n                        <i class="fa fa-send-o"></i>&nbsp;&nbsp;Send\n                    </button>\n                    <div id="quiplash-submit-answer-loading" style="display:none;" class="button-quiplash-loading"></div>            \n                </form>\n                <div id="quiplash-suggestions" class="pure-g"></div>\n            </div>\n        </div>    \n        \n        <div id="state-done-answering" class="pt-page-off quiplash-page">\n            <br/><span>Спасибо за ваши ответы!</span><br/>\n        </div>\n        \n        <div id="state-vote" class="pt-page-off quiplash-page">\n            <div class="container">\n                <br/>\n                <span id="question-text" class="question-text"></span>\n                <br/>\n                <br/>\n                <span id="vote-text"></span>\n                <br/>\n                <br/>\n                <form id="quiplash-vote" class="pure-form"></form>\n            </div>\n        </div>\n    </div>\n</div>\n'
        },
        862: function (e, t, n) {
            e.exports = n.p + "images/049fab260db72bc7ec03da4130f876b3.png"
        },
        863: function (e, t, n) {},
        864: function (e, t, n) {
            var a = {
                "./Round0.png": 865,
                "./Round1.png": 866,
                "./Round2.png": 867
            };

            function i(e) {
                return o(e).then((function (e) {
                    return n.t(e, 7)
                }))
            }

            function o(e) {
                return Promise.resolve().then((function () {
                    if (!n.o(a, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return a[e]
                }))
            }
            i.keys = function () {
                return Object.keys(a)
            }, i.resolve = o, i.id = 864, e.exports = i
        },
        865: function (e, t, n) {
            e.exports = n.p + "images/c5c42ea84330e3d1fc9d20b28d238348.png"
        },
        866: function (e, t, n) {
            e.exports = n.p + "images/3cedbfde0bb740b94a9aa5ad54ee4045.png"
        },
        867: function (e, t, n) {
            e.exports = n.p + "images/a0c4102b865375a398dd2764074b1972.png"
        }
    }
]);
//# sourceMappingURL=11.4af137cca2590be7e6ee.js.map