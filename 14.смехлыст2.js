(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        2842: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "MainView", (function () {
                return m
            }));
            var i = n(17),
                a = n.n(i),
                o = n(22),
                s = n.n(o),
                l = n(26),
                u = n(462),
                r = n(497),
                c = n(83),
                d = n(477),
                p = n(47),
                b = n(191),
                h = n(888),
                g = n.n(h);
            n(889);

            function f(t, e, n, i, a, o, s) {
                try {
                    var l = t[o](s),
                        u = l.value
                } catch (t) {
                    return void n(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(i, a)
            }
            var m = u.a.extend({
                template: s.a.template(g.a),
                testBlob: null,
                prevRoomState: "",
                prevPlayerState: "",
                doneAnswering: !1,
                lobbyMenu: null,
                events: {
                    "click #quiplash-startgame": "startGame",
                    "click #quiplash-stopcountdown": "stopCountdown",
                    "click #quiplash-sameplayers": "newGameSamePlayers",
                    "click #quiplash-newplayers": "newGameNewPlayers",
                    "click #quiplash-submit-answer": "submitAnswer",
                    "click #quiplash-submit-safetyquip": "submitSafetyQuip",
                    "click #quiplash-audience-censor": "submitAudienceCensor",
                    "click #quiplash-audience-censor-done": "submitAudienceCensor",
                    "click .quiplash2-vote-button": "vote",
                    "click .quiplash-lobby-menu-back": "lobbyMenuBack",
                    "click #quiplash-lobby-menu-ugc": "lobbyMenuUgc",
                    "click #quiplash-lobby-menu-censor": "lobbyMenuCensor",
                    "click .quiplash-censor-player-button": "censorPlayer",
                    "click .quiplash2-censor-button": "censor",
                    "click #lobby-ugc-submit": "lobbyUgcSubmit",
                    "click .quiplash-history-button": "lobbyUgcHistory",
                    "click #lobby-ugc-clear": "lobbyUgcClear",
                    "click #lobby-ugc-report": "lobbyUgcReport",
                    "click #lobby-ugc-view-author": "lobbyUgcViewAuthor",
                    "click #ugc-new-button": "ugcNew",
                    "click .ugc-load-button": "ugcLoad",
                    "click .ugc-remove-content-button": "ugcRemoveContent",
                    "click #ugc-remove-content-confirm": "ugcRemoveContentConfirm",
                    "click #ugc-remove-content-cancel": "ugcRemoveContentCancel",
                    "click #ugc-close-button": "ugcClose",
                    "click #ugc-title-button": "ugcTitle",
                    "click #ugc-add-button": "ugcAdd",
                    "click .ugc-remove-button": "ugcRemove",
                    "click #ugc-clear-button": "ugcClear",
                    "click .ugc-toggle-visibility-button": "ugcToggleVisibility",
                    "click #ugc-save-button": "ugcSave",
                    "click #ugc-submit-button": "ugcSubmit",
                    "click #ugc-submit-confirm": "ugcSubmitConfirm",
                    "click #ugc-submit-cancel": "ugcSubmitCancel",
                    "click #ugc-unlock-button": "ugcUnlock",
                    "click #ugc-play-button": "ugcPlay",
                    "click #ugc-exit-button": "ugcExit"
                },
                onAttach: function () {
                    this.lobbyMenu = new r.a({
                        e: this.$el.find("#lobby-main-menu"),
                        branches: [{
                            input: "ugc",
                            node: {
                                e: this.$el.find("#lobby-ugc")
                            }
                        }, {
                            input: "censor",
                            node: {
                                e: this.$el.find("#lobby-censor")
                            }
                        }]
                    }), this.lobbyMenu.reset(), a()(".quiplash2-button").hover((function () {
                        a()(this).toggleClass("quiplash2-button-hover")
                    })), this.$el.find("#lobby-ugc-input").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), a()("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.caughtError)
                },
                renderTemplate: function (t, e) {
                    var n = s.a.templateSettings;
                    s.a.templateSettings = {
                        evaluate: /\{\{#([\s\S]+?)\}\}/g,
                        interpolate: /\{\{\{(\s*\w+?\s*)\}\}\}/g,
                        escape: /\{\{(\s*\w+?\s*)\}\}(?!\})/g
                    };
                    var i = s.a.template(t)(e);
                    return s.a.templateSettings = n, i
                },
                update: function () {
                    var t, e = this;
                    return (t = regeneratorRuntime.mark((function t() {
                        var i, o, u, r, h, g, f, m, v, y, q, w, x, k, C, $, S, T, R, A, O, I, _, P, E, M, G, U, z, D;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.model.get("room")) {
                                        t.next = 3;
                                        break
                                    }
                                    return e.showScreen("#state-logo"), t.abrupt("return");
                                case 3:
                                    if (i = e.model.get("room") || {}, o = e.model.get("player") || {}, u = o ? o.state : "", r = i ? i.state : "", h = o.playerColor ? o.playerColor : "#E4BC65", e.$el.find("#player").css("background-color", h), g = p.a.adjustColor(h, .52), e.$el.find("#state-lobby").css("background-color", g), e.$el.find("#state-answer-question-audience").css("background-color", g), e.$el.find("#state-answer-question").css("background-color", g), e.$el.find("#state-done-answering").css("background-color", g), e.$el.find("#state-vote").css("background-color", g), e.$el.find("#state-ugc").css("background-color", g), e.currentAnswerQuestionId = -1, e.$el.find("#quiplash-submit-alert").hide(), "UGC" !== r) {
                                        t.next = 21;
                                        break
                                    }
                                    return e.updateUGC(i, o), t.abrupt("return");
                                case 21:
                                    if (a()(".ugc-option").hide(), "RoomFull" !== u) {
                                        t.next = 25;
                                        break
                                    }
                                    return c.a.show(Error("Комната уже полна"), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), t.abrupt("return");
                                case 25:
                                    if ("GameLocked" !== u) {
                                        t.next = 28;
                                        break
                                    }
                                    return c.a.show(Error("Игра в разгаре. Пожалуйста, подожди, пока начнется новая игра"), {
                                        onClose: function () {
                                            window.location.reload(!0)
                                        }
                                    }), t.abrupt("return");
                                case 28:
                                    if (!r || "Lobby" !== r) {
                                        t.next = 67;
                                        break
                                    }
                                    if (b.app.client.isPlayer || "PostGame" === i.lobbyState) {
                                        t.next = 32;
                                        break
                                    }
                                    return e.showScreen("#state-logo"), t.abrupt("return");
                                case 32:
                                    if (e.formattedActiveContentId = i.formattedActiveContentId, e.hideLobbyButtons(), a()(".menu-button").hide(), o.canDoUGC && (a()(".lobby-ugc-option").hide(), i.formattedActiveContentId ? (i.isLocal ? e.$el.find("#lobby-ugc-choices-content-id").html("локальные данные загружены") : e.$el.find("#lobby-ugc-choices-content-id").html('Публичные данные загружены<br><span class="lobby-episode-id quiplash-text capitalize">'.concat(i.formattedActiveContentId, "</span>")), e.$el.find("#lobby-ugc-choices").show(), !i.isLocal && o.canReport ? e.$el.find("#lobby-ugc-report").show() : e.$el.find("#lobby-ugc-report").hide(), !i.isLocal && o.canViewAuthor ? e.$el.find("#lobby-ugc-view-author").show() : e.$el.find("#lobby-ugc-view-author").hide()) : e.$el.find("#lobby-ugc-enter").show(), o.history ? (e.$el.find("#lobby-ugc-help").hide(), f = "", o.history.forEach((function (t) {
                                            t.metadata && t.metadata.title ? (f += '<tr data-id="'.concat(t.remoteContentId ? t.remoteContentId : t.localContentId, '" class="quiplash-history-button">'), f += '<td class="quiplash-list-fill quiplash-text">'.concat(t.metadata.title), t.remoteContentId && (f += '<br><span class="lobby-episode-id quiplash-text capitalize">'.concat(t.formattedRemoteContentId, "</span>")), f += "</td>", f += "</tr>") : l.c("Quiplash2 update - invalid metadata detected", {
                                                extra: {
                                                    episode: t,
                                                    playerBlob: o,
                                                    roomBlob: i
                                                }
                                            })
                                        })), e.$el.find("#lobby-ugc-history").html(f), o.history && o.history.length > 0 ? a()(".quiplash-ugc-previous").show() : a()(".quiplash-ugc-previous").hide()) : e.$el.find("#lobby-ugc-help").show(), e.$el.find("#quiplash-lobby-menu-ugc").show()), o.canCensor && (o.censorablePlayers && (m = "", o.censorablePlayers.forEach((function (t, e, n) {
                                            m += '<div class="pure-u-1">', m += '<div class="quiplash-censorable left quiplash-text"><span>'.concat(t.name, "</span></div>"), m += '<button type="button" data-censor="'.concat(p.a.htmlEscape(t.id), '" class="quiplash-censor-player-button button-large pure-button quiplash2-button right">X</button>'), m += "</div>"
                                        })), e.$el.find("#lobby-censor-players").html(m)), o.censorablePlayers && o.censorablePlayers.length > 0 && e.$el.find("#quiplash-lobby-menu-censor").show()), o.lastUGCResult && !o.lastUGCResult.success && o.lastUGCResult.error ? e.$el.find("#lobby-ugc-error").html("<span>".concat(o.lastUGCResult.error, "</span>")) : e.$el.find("#lobby-ugc-error").html(""), !((v = i.artifact) && v.success && v.rootId)) {
                                        t.next = 57;
                                        break
                                    }
                                    return y = "games.jackbox.tv", -1 !== v.rootId.indexOf("test") && (y = "games-test.jackbox.tv"), q = "http://".concat(y, "/artifact/Quiplash2Game/").concat(v.artifactId, "/"), t.prev = 43, t.next = 46, Promise.resolve().then(n.t.bind(null, 890, 7));
                                case 46:
                                    w = t.sent, x = '<a target="_blank" class="gallery-link" href="'.concat(q, '"><img src="').concat(w.default, '" /></a>'), e.$el.find("#quiplash2-lobby-postgame").html(x), d.a.save(v), t.next = 55;
                                    break;
                                case 52:
                                    t.prev = 52, t.t0 = t.catch(43), console.log("failed to load gallery image");
                                case 55:
                                    t.next = 58;
                                    break;
                                case 57:
                                    e.$el.find("#quiplash2-lobby-postgame").html("");
                                case 58:
                                    if (o.isAllowedToStartGame) {
                                        t.next = 62;
                                        break
                                    }
                                    return e.$el.find("#quiplash-lobby-text").html("Откинься на спинку и кайфуй!"), e.showScreen("#state-lobby"), t.abrupt("return");
                                case 62:
                                    "WaitingForMore" === (k = i.lobbyState) ? e.$el.find("#quiplash-lobby-text").html("Ждем, когда все игроки присоединятся"): "CanStart" === k ? (e.$el.find("#quiplash-lobby-text").html("Нажми на эту кнопку, когда все присоединились"), e.$el.find("#quiplash-startgame").show()) : "Countdown" === k ? (e.$el.find("#quiplash-lobby-text").html("Нажми на эту кнопку, чтобы отменить запуск"), e.$el.find("#quiplash-stopcountdown").show()) : "PostGame" === k && (e.$el.find("#quiplash-lobby-text").html("Что ты хочешь сделать?"), a()(".quiplash-endbuttons").show()), e.showScreen("#state-lobby"), t.next = 184;
                                    break;
                                case 67:
                                    if ("Gameplay_Logo" !== r) {
                                        t.next = 73;
                                        break
                                    }
                                    e.showScreen("#state-logo"), "Lobby" === e.prevRoomState && (C = e.formattedActiveContentId ? "quiplash2-ugc" : "quiplash2", b.app.analytics.trackEvent("Lobby", "gameStarted", C)), "Gameplay_AnswerQuestion" === e.prevPlayerState && !1 === e.doneAnswering && "" !== ($ = e.$el.find("#quiplash-answer-input").val()) && (b.app.client.send("SendMessageToRoomOwner", {
                                        answer: $,
                                        questionId: e.prevAnswerQuestionId
                                    }), e.prevAnswerQuestionId = -1, e.doneAnswering = !0), t.next = 184;
                                    break;
                                case 73:
                                    if ("Gameplay_Round" !== r) {
                                        t.next = 79;
                                        break
                                    }
                                    a()(".quiplash2-round-image").hide(), a()(".quiplash2-round-image.quiplash2-round-".concat(i.round)).show(), e.showScreen("#state-round"), t.next = 184;
                                    break;
                                case 79:
                                    if ("Gameplay_AnswerQuestion" !== r) {
                                        t.next = 116;
                                        break
                                    }
                                    if ("Gameplay_AnswerQuestion" !== u) {
                                        t.next = 105;
                                        break
                                    }
                                    if (o.question) {
                                        t.next = 87;
                                        break
                                    }
                                    return e.$el.find("#quiplash-audience-censor-done").hide(), o.canCensor && e.$el.find("#quiplash-audience-censor-done").show(), e.showScreen("#state-done-answering"), e.doneAnswering = !0, t.abrupt("return");
                                case 87:
                                    e.doneAnswering = !1, e.$el.find("#quiplash-answer-input").val(""), e.$el.find("#quiplash-submit-answer").removeAttr("disabled"), e.$el.find("#quiplash-answer-field").show(), e.$el.find("#quiplash-submit-alert").hide(), e.$el.find("#quiplash-submit-answer").show(), e.$el.find("#quiplash-audience-censor").hide(), !0 === i.safetyQuip ? e.$el.find("#quiplash-submit-safetyquip").show() : e.$el.find("#quiplash-submit-safetyquip").hide(), o.canCensor && e.$el.find("#quiplash-audience-censor").show(), e.$el.find("#state-answer-question #question-text").html(o.question.prompt.replace(/<BLANK>/gi, "________")), e.$el.find("#state-answer-question #question-text-alt").html(""), void 0 !== o.question.quip ? (e.$el.find("#state-answer-question #question-text-alt").html(o.question.quip.replace(/<BLANK>/gi, "________")), e.$el.find("#state-answer-question #question-text").removeClass("quiplash-text"), e.$el.find("#state-answer-question #question-text").addClass("quiplash-text-big")) : (e.$el.find("#state-answer-question #question-text").addClass("quiplash-text"), e.$el.find("#state-answer-question #question-text").removeClass("quiplash-text-big")), o.showError && (S = e.$el.find("#quiplash-submit-alert"), e.$el.find("#quiplash-submit-alert").html("Вход уже выполнен! Попробуй еще."), S.addClass("alert-info"), S.removeClass("alert-danger"), S.show()), e.prevAnswerQuestionId = o.question.id, e.currentAnswerQuestionId = o.question.id, e.showScreen("#state-answer-question"), t.next = 114;
                                    break;
                                case 105:
                                    e.$el.find("#quiplash-answer-input").val(""), e.$el.find("#quiplash-submit-answer").removeAttr("disabled"), e.$el.find("#quiplash-answer-field").hide(), e.$el.find("#quiplash-submit-alert").hide(), e.$el.find("#quiplash-submit-safetyquip").hide(), e.$el.find("#quiplash-submit-answer").hide(), e.$el.find("#quiplash-audience-censor").hide(), i.audienceQuip && i.canDoAudiencePlay ? (e.$el.find("#state-answer-question #question-text").html(i.audienceQuip.replace(/<BLANK>/gi, "________")), e.$el.find("#quiplash-answer-field").show(), e.$el.find("#quiplash-submit-answer").show()) : e.$el.find("#state-answer-question #question-text").html("Ты в зрителях! Жди голосования."), e.showScreen("#state-answer-question");
                                case 114:
                                    t.next = 184;
                                    break;
                                case 116:
                                    if ("Gameplay_Vote" !== r) {
                                        t.next = 154;
                                        break
                                    }
                                    if (e.$el.find("#state-vote #question-text-alt").html(""), o.canCensor || !o.doneVoting) {
                                        t.next = 123;
                                        break
                                    }
                                    return e.$el.find("#state-vote #vote-text").html("Ждем других игроков!"), e.$el.find("#quiplash-vote").html(""), e.showScreen("#state-vote"), t.abrupt("return");
                                case 123:
                                    if (i.question ? e.$el.find("#state-vote #question-text").html(i.question.prompt.replace(/<BLANK>/gi, "________")) : e.$el.find("#state-vote #question-text").html(""), T = o.censorOnly || o.doneVoting ? "" : "Какой тебе больше нравится?", e.$el.find("#state-vote #vote-text").html(T), R = "", !i.choices || !i.order) {
                                        t.next = 148;
                                        break
                                    }
                                    A = 0;
                                case 129:
                                    if (!(A < i.order.length)) {
                                        t.next = 148;
                                        break
                                    }
                                    if (O = i.order[A], !o.ignore) {
                                        t.next = 143;
                                        break
                                    }
                                    I = !1, _ = 0;
                                case 134:
                                    if (!(_ < o.ignore.length)) {
                                        t.next = 141;
                                        break
                                    }
                                    if (o.ignore[_] !== O) {
                                        t.next = 138;
                                        break
                                    }
                                    return I = !0, t.abrupt("break", 141);
                                case 138:
                                    _++, t.next = 134;
                                    break;
                                case 141:
                                    if (!I) {
                                        t.next = 143;
                                        break
                                    }
                                    return t.abrupt("continue", 145);
                                case 143:
                                    P = {
                                        order: i.order[A].toString(),
                                        choiceString: p.a.htmlUnescape(i.choices[O].toString()),
                                        censorable: i.isCensored && !i.isCensored[O] && o.canCensor,
                                        quiplash2Disabled: o.censorOnly || o.doneVoting ? "quiplash2-disabled" : ""
                                    }, R += e.renderTemplate(e.$el.find("#quiplash2-vote-button").html(), P);
                                case 145:
                                    A++, t.next = 129;
                                    break;
                                case 148:
                                    e.notify(), e.$el.find("#quiplash-vote").html(R), a()(".quiplash2-disabled").attr("disabled", "disabled"), e.showScreen("#state-vote"), t.next = 184;
                                    break;
                                case 154:
                                    if ("Gameplay_R3Vote" !== r) {
                                        t.next = 184;
                                        break
                                    }
                                    if (e.$el.find("#state-vote #question-text-alt").html(""), o.canCensor || !o.doneVoting) {
                                        t.next = 161;
                                        break
                                    }
                                    return e.$el.find("#state-vote #vote-text").html("Ждем других игроков!"), e.$el.find("#quiplash-vote").html(""), e.showScreen("#state-vote"), t.abrupt("return");
                                case 161:
                                    if (e.$el.find("#state-vote #question-text").html(i.question.prompt.replace(/<BLANK>/gi, "________")), void 0 !== i.question.quip ? (e.$el.find("#state-vote #question-text-alt").html(i.question.quip.replace(/<BLANK>/gi, "________")), e.$el.find("#state-vote #question-text").removeClass("quiplash-text"), e.$el.find("#state-vote #question-text").addClass("quiplash-text-big")) : (e.$el.find("#state-vote #question-text").addClass("quiplash-text"), e.$el.find("#state-vote #question-text").removeClass("quiplash-text-big")), E = "Какой тебе больше нравится?", !o.currentVote) {
                                        t.next = 175;
                                        break
                                    }
                                    t.t1 = o.currentVote, t.next = 0 === t.t1 ? 168 : 1 === t.t1 ? 170 : 2 === t.t1 ? 172 : 174;
                                    break;
                                case 168:
                                    return E = "Награди золотой медалью лучший ответ!", t.abrupt("break", 175);
                                case 170:
                                    return E = "А теперь награди ответ серебряной медалью!", t.abrupt("break", 175);
                                case 172:
                                    return E = "И наконец бронзовая медаль для третьего фаворита.", t.abrupt("break", 175);
                                case 174:
                                    return t.abrupt("break", 175);
                                case 175:
                                    for (e.$el.find("#state-vote #vote-text").html(E), M = "", G = [], b.app.client.isPlayer ? o.votes ? G = o.votes : o.canCensor && (G = s.a.filter(i.choices, (function (t) {
                                            return t.playerIndex !== o.playerIndex
                                        }))) : i.choices && (G = i.choices), U = 0; U < G.length; ++U) z = G[U], D = {
                                        order: z.playerIndex.toString(),
                                        choiceString: z.isCensored ? "********" : p.a.htmlUnescape(z.answer),
                                        censorable: !z.isCensored && o.canCensor,
                                        quiplash2Disabled: z.isCensored || z.hasVote || o.doneVoting || o.censorOnly ? "quiplash2-disabled" : ""
                                    }, M += e.renderTemplate(e.$el.find("#quiplash2-vote-button").html(), D);
                                    e.notify(), e.$el.find("#quiplash-vote").html(M), a()(".quiplash2-disabled").attr("disabled", "disabled"), e.showScreen("#state-vote");
                                case 184:
                                    e.prevPlayerState = u, e.prevRoomState = r;
                                case 186:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [43, 52]
                        ])
                    })), function () {
                        var e = this,
                            n = arguments;
                        return new Promise((function (i, a) {
                            var o = t.apply(e, n);

                            function s(t) {
                                f(o, i, a, s, l, "next", t)
                            }

                            function l(t) {
                                f(o, i, a, s, l, "throw", t)
                            }
                            s(void 0)
                        }))
                    })()
                },
                cancelConfirm: function (t) {
                    a()(".quiplash2-button-red").removeClass("quiplash-censor-confirm quiplash2-button-red"), a()(".quiplash-confirm-dialog").hide()
                },
                hideLobbyButtons: function () {
                    this.$el.find("#quiplash-startgame").hide(), this.$el.find("#quiplash-stopcountdown").hide(), a()(".quiplash-endbuttons").hide()
                },
                lobbyMenuBack: function (t) {
                    this.lobbyMenu.input("back")
                },
                lobbyMenuUgc: function (t) {
                    this.lobbyMenu.input("ugc")
                },
                lobbyMenuCensor: function (t) {
                    this.lobbyMenu.input("censor")
                },
                lobbyUgcSubmit: function (t) {
                    var e = this.sanitize(this.$el.find("#lobby-ugc-input").val());
                    return e = (e = e.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^A-Za-z]/gi, "")).toUpperCase(), this.activateContentId(e), !1
                },
                activateContentId: function (t) {
                    return !!t.length && (b.app.client.send("SendMessageToRoomOwner", {
                        activateContentId: !0,
                        contentId: t
                    }), !1)
                },
                lobbyUgcHistory: function (t) {
                    var e = a()(t.currentTarget).data("id");
                    this.activateContentId(e)
                },
                lobbyUgcClear: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        clearContentId: !0
                    }), !1
                },
                lobbyUgcReport: function (t) {
                    var e = this.model.get("room").formattedActiveContentId;
                    return window.open("".concat("http://support.jackboxgames.com/", "?episodeID=").concat(e), "_blank"), !1
                },
                lobbyUgcViewAuthor: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        viewAuthor: !0
                    }), !1
                },
                startGame: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        start: !0
                    }), !1
                },
                stopCountdown: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        cancel: !0
                    }), !1
                },
                chooseCategory: function (t) {
                    var e = a()(t.target).data("num");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: e
                    }), !1
                },
                submitAnswer: function (t) {
                    var e = this,
                        n = this.sanitize(this.$el.find("#quiplash-answer-input").val()).toUpperCase();
                    if (0 === n.length) {
                        var i = this.$el.find("#quiplash-submit-alert");
                        return i.html("Нужно что то ввести!"), i.removeClass("alert-info"), i.addClass("alert-danger"), i.show(), this.alertTimeout && clearTimeout(this.alertTimeout), this.alertTimeout = setTimeout((function () {
                            e.$el.find("#quiplash-submit-alert").hide()
                        }), 5e3), !1
                    }
                    return b.app.client.isPlayer ? (this.$el.find("#quiplash-submit-answer").attr("disabled", "true"), b.app.client.send("SendMessageToRoomOwner", {
                        answer: n,
                        questionId: this.currentAnswerQuestionId
                    }), this.$el.find("#quiplash-answer-input").val("")) : b.app.client.isAudience && (b.app.client.sessionSend("comment", "Quiplash2 Comments", {
                        type: "comment",
                        comment: n
                    }), this.$el.find("#quiplash-answer-input").val("")), !1
                },
                submitSafetyQuip: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        safetyQuip: !0,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                submitAudienceCensor: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        censorAudience: !0,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                vote: function (t) {
                    var e = a()(t.target).data("vote");
                    return b.app.client.isPlayer ? b.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }) : b.app.client.isAudience && (b.app.client.sessionSend("vote", "Quiplash2 Vote", {
                        type: "vote",
                        vote: e
                    }), this.$el.find("#vote-text").html("Спасибо, зритель!"), this.$el.find("#quiplash-vote").html(""), this.showScreen("#state-vote")), a()(".quiplash2-button").removeClass("selected"), a()(t.target).addClass("selected"), !1
                },
                newGameSamePlayers: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        start: !0,
                        decision: "PostGame_Continue"
                    }), !1
                },
                newGameNewPlayers: function (t) {
                    return b.app.client.send("SendMessageToRoomOwner", {
                        start: !0,
                        decision: "PostGame_NewGame"
                    }), !1
                },
                censorPlayer: function (t) {
                    if (b.app.client.isPlayer) {
                        var e = a()(t.target);
                        if (e.hasClass("quiplash2-button-red")) {
                            var n = p.a.htmlUnescape(e.data("censor"));
                            b.app.client.send("SendMessageToRoomOwner", {
                                censorPlayerId: n
                            })
                        } else e.html("?"), e.addClass("quiplash2-button-red")
                    }
                },
                censor: function (t) {
                    if (b.app.client.isPlayer) {
                        var e = a()(t.target);
                        if (e.hasClass("quiplash2-button-red")) {
                            var n = p.a.htmlUnescape(e.data("censor"));
                            b.app.client.send("SendMessageToRoomOwner", {
                                censor: n
                            })
                        } else e.html("?"), e.addClass("quiplash2-button-red");
                        return !1
                    }
                },
                updateUGC: function (t, e) {
                    if (a()(".ugc-screen").hide(), a()(".ugc-option").hide(), this.$el.find("#ugc-text").hide(), this.$el.find("#ugc-no-actions-text").hide(), t.controllerVisibility ? a()(".quiplash-image-controller").removeClass("off") : a()(".quiplash-image-controller").addClass("off"), t.screenVisibility ? a()(".quiplash-image-screen").removeClass("off") : a()(".quiplash-image-screen").addClass("off"), this.$el.find("#ugc-remove-content-confirm").data("id", t.localContentId), e.validActions && e.prompts) {
                        for (var n = 0; n < e.validActions.length; n++) {
                            var i = e.validActions[n];
                            a()("#ugc-".concat(i)).show()
                        }
                        if (e.validActions.indexOf("add") >= 0 ? (a()(".ugc-add").show(), this.$el.find("#ugc-add-input").focus()) : this.$el.find("#ugc-add-input").val(""), e.validActions.indexOf("save") >= 0 && this.$el.find("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && this.$el.find("#ugc-close").hide(), e.validActions.indexOf("title") >= 0 && (this.$el.find("#ugc-title-input").val(""), this.$el.find("#ugc-close").hide()), e.validActions.indexOf("remove-content") >= 0 && this.$el.find("#ugc-delete").show(), e.validActions.indexOf("load") >= 0 && a()(".ugc-load").show(), !e.validActions.length && t.noActionsText && (this.$el.find("#ugc-no-actions-text").html('<span class="quiplash-text">'.concat(t.noActionsText, "</span>")), this.$el.find("#ugc-no-actions-text").show()), e.validActions.indexOf("play") < 0 ? this.$el.find("#ugc-episode-name").hide() : this.$el.find("#ugc-episode-name").show(), t.text && (this.$el.find("#ugc-text").html('<div class="pure-u-1"><span>'.concat(t.text, "</span></div>")), this.$el.find("#ugc-text").show()), e.episodes) {
                            var o = "";
                            e.episodes = s.a.sortBy(e.episodes, (function (t) {
                                return !!t.remoteContentId
                            })), e.episodes.forEach((function (n) {
                                n.metadata && n.metadata.title ? (o += "<tr>", o += '<td class="ugc-load-button quiplash-list-fill quiplash-text" data-id="'.concat(n.localContentId, '" >').concat(n.metadata.title), n.remoteContentId && (o += '<br><span class="quiplash-text lobby-episode-id capitalize">'.concat(n.formattedRemoteContentId, "</span>")), o += "</td>", o += "</tr>") : l.c("Quiplash2 updateUGC - invalid metadata detected", {
                                    extra: {
                                        episode: n,
                                        playerBlob: e,
                                        roomBlob: t
                                    }
                                })
                            })), this.$el.find("#ugc-load").html(o)
                        }
                        this.$el.find("#ugc-title-input").prop("maxLength", t.maxTitleLength), this.$el.find("#ugc-add-input").prop("maxLength", t.maxContentLength);
                        var u = "".concat(t.count, "/").concat(t.maxCount);
                        e.prompts.length < t.count && (u += " (".concat(t.count - e.prompts.length, " hidden)"));
                        var r = "<tr><td colspan='2'><h3 style='color:black;'>".concat(u, "</h3></td></tr>");
                        this.$el.find("#ugc-remove thead").html(r);
                        for (var c = "", d = "", b = e.prompts.length - 1; b >= 0; b--) d = e.prompts[b].author === e.userId ? "" : " quiplash-list-other ", c += "<tr>", c += '<td class="quiplash-list-fill quiplash-text'.concat(d, '">').concat(e.prompts[b].prompt, "</td>"), c += '<td class="quiplash-list-black ugc-remove-button" data-text="'.concat(p.a.htmlEscape(e.prompts[b].prompt), '"><div class="ugc-remove-x"></div></td>'), c += "</tr>";
                        this.$el.find("#ugc-remove tbody").html(c), this.showScreen("#state-ugc"), this.onResize()
                    } else this.onResize()
                },
                ugcNew: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "new"
                    }), this.$el.find("#ugc-remove-content-confirm").data("id", null)
                },
                ugcLoad: function (t) {
                    var e = a()(t.currentTarget).data("id");
                    this.cancelConfirm(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "load",
                        contentId: e
                    });
                    var n = a()(t.currentTarget).data("name");
                    this.$el.find("#ugc-episode-name").html(n)
                },
                ugcRemoveContent: function (t) {
                    var e = a()(t.currentTarget);
                    this.$el.find("#ugc-remove-content-dialog").show(), a()(".quiplash2-button-red").removeClass("quiplash-censor-confirm quiplash2-button-red"), e.addClass("quiplash2-button-red"), t.stopPropagation()
                },
                ugcRemoveContentConfirm: function (t) {
                    var e = a()(t.target),
                        n = p.a.htmlUnescape(e.data("id"));
                    return this.$el.find("#ugc-delete-dialog").hide(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "remove-content",
                        contentId: n
                    }), this.cancelConfirm(), !1
                },
                ugcRemoveContentCancel: function (t) {
                    return this.cancelConfirm(), !1
                },
                ugcClose: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    })
                },
                ugcTitle: function (t) {
                    var e = this.sanitize(this.$el.find("#ugc-title-input").val());
                    return 0 === e.length || (b.app.client.send("SendMessageToRoomOwner", {
                        text: e,
                        action: "title"
                    }), this.$el.find("#ugc-title-input").val("")), !1
                },
                ugcAdd: function (t) {
                    var e = this.sanitize(this.$el.find("#ugc-add-input").val());
                    return 0 === e.length || (b.app.client.send("SendMessageToRoomOwner", {
                        text: e,
                        action: "add"
                    }), this.$el.find("#ugc-add-input").val(""), this.$el.find("#ugc-add-input").focus()), !1
                },
                ugcKeyUp: function (t) {
                    13 === t.which && (t.preventDefault(), this.ugcAdd(t))
                },
                ugcRemove: function (t) {
                    var e = a()(t.target);
                    e.data("text") || (e = e.parent());
                    var n = e.data("text");
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "remove",
                        text: n
                    })
                },
                ugcClear: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "clear"
                    })
                },
                ugcToggleVisibility: function (t) {
                    var e = a()(t.target);
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "toggle-visibility",
                        target: e.data("target")
                    })
                },
                ugcUnlock: function (t) {
                    this.cancelConfirm(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "unlock"
                    })
                },
                ugcSave: function (t) {
                    t.preventDefault(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "save"
                    })
                },
                ugcSubmit: function (t) {
                    this.cancelConfirm(), this.$el.find("#ugc-submit-dialog").show(), this.$el.find("#ugc-container").hide()
                },
                ugcSubmitConfirm: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "submit"
                    }), this.$el.find("#ugc-submit-dialog").hide(), this.$el.find("#ugc-container").show()
                },
                ugcSubmitCancel: function (t) {
                    this.$el.find("#ugc-submit-dialog").hide(), this.$el.find("#ugc-container").show()
                },
                ugcPlay: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "play"
                    })
                },
                ugcExit: function (t) {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    }), this.$el.find("#ugc-episode-name").html("")
                },
                sanitize: function (t) {
                    var e = this.sanitizeInput(t).replace(/'/g, "’");
                    return p.a.htmlEscape(e).trim()
                },
                sanitizeInput: function (t) {
                    return t.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>:;]/gi, "")
                },
                validateInput: function (t) {
                    var e = a()(t.target),
                        n = e.val(),
                        i = n.length,
                        o = e.attr("maxLength");
                    if (n = this.sanitizeInput(n), o)
                        for (; n.length > o;) n = n.slice(0, -1);
                    n.length !== i && e.val(n)
                }
            })
        },
        460: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return y
            }));
            var i = n(41),
                a = n.n(i),
                o = n(3),
                s = n(17),
                l = n.n(s),
                u = n(22),
                r = n.n(u),
                c = n(31),
                d = n.n(c),
                p = n(191);
            n(461);

            function b(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
                    var n = [],
                        i = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        a = !0, o = t
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var h = d.a.View.extend({
                el: "#banner",
                template: r.a.template('\n    <div class="banner-image"></div>\n    <div class="banner-text"></div>\n    <div class="banner-cta"></div>\n'),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet: function (t) {
                                var e = b(t, 2),
                                    n = e[0],
                                    i = e[1] || "no-theme";
                                return n && (i += " show"), i
                            }
                        }]
                    },
                    ".banner-text": "copy",
                    ".banner-cta": "cta"
                },
                initialize: function (t) {
                    this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
                },
                onBannerClick: function () {
                    p.analytics.trackEvent("SlideBanner", "SlideBannerClicked", this.getCampaign(), 0), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender: function () {
                    this.stickit()
                },
                visibleDidChange: function (t, e) {
                    setTimeout((function () {
                        l()(window).trigger("resize")
                    }), .5), e && p.analytics.trackEvent("SlideBanner", "SlideBannerOn", this.getCampaign(), 0)
                },
                getCampaign: function () {
                    var t = this.model.get("url");
                    if (!t) return "";
                    var e = "";
                    t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || "");
                    return e
                }
            });

            function g(t, e, n, i, a, o, s) {
                try {
                    var l = t[o](s),
                        u = l.value
                } catch (t) {
                    return void n(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(i, a)
            }

            function f(t) {
                return function () {
                    var e = this,
                        n = arguments;
                    return new Promise((function (i, a) {
                        var o = t.apply(e, n);

                        function s(t) {
                            g(o, i, a, s, l, "next", t)
                        }

                        function l(t) {
                            g(o, i, a, s, l, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function m(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function v(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var y = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, i, s, l, u;
                return e = t, n = null, i = [{
                    key: "update",
                    value: (u = f(regeneratorRuntime.mark((function t(e, n) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n && "PostGame" === n.lobbyState) {
                                        t.next = 3;
                                        break
                                    }
                                    return this.hide(), t.abrupt("return");
                                case 3:
                                    if (this.view) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 6, this.init(e, n);
                                case 6:
                                    this.show();
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t, e) {
                        return u.apply(this, arguments)
                    })
                }, {
                    key: "init",
                    value: (l = f(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e) {
                                        t.next = 3;
                                        break
                                    }
                                    return this.bannerData = !1, t.abrupt("return");
                                case 3:
                                    return t.next = 5, this.loadBannerData(e);
                                case 5:
                                    if (this.bannerData = t.sent, this.bannerData) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    this.view = new h({
                                        model: new a.a.Model(this.bannerData)
                                    }), this.isInitialized = !0;
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return l.apply(this, arguments)
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
                    value: (s = f(regeneratorRuntime.mark((function t(e) {
                        var n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, fetch(o.a.BannersUrl);
                                case 3:
                                    return n = t.sent, t.next = 6, n.json();
                                case 6:
                                    if ((i = t.sent) && i.postGameBanners) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 9:
                                    return t.abrupt("return", i.postGameBanners[e]);
                                case 12:
                                    return t.prev = 12, t.t0 = t.catch(0), console.error("Unable to load banner data", t.t0), t.abrupt("return", !1);
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 12]
                        ])
                    }))), function (t) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "isVisible",
                    get: function () {
                        return !!this.view && "on" === this.view.state
                    }
                }], n && m(e.prototype, n), i && m(e, i), t
            }();
            v(y, "view", null), v(y, "isInitialized", !1), v(y, "bannerConfig", null)
        },
        461: function (t, e, n) {},
        462: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return f
            }));
            var i = n(22),
                a = n.n(i),
                o = n(17),
                s = n.n(o),
                l = n(41),
                u = n.n(l),
                r = n(31),
                c = n.n(r),
                d = n(191),
                p = n(83),
                b = n(460),
                h = n(47);
            n(463), n(464), n(465);

            function g(t, e, n, i, a, o, s) {
                try {
                    var l = t[o](s),
                        u = l.value
                } catch (t) {
                    return void n(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(i, a)
            }
            var f = c.a.View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "3.1.16",
                template: null,
                initialize: function (t) {
                    var e = this;
                    this.mergeOptions(t, ["appId", "appTag"]), d.app.debug.reset(), d.app.analytics.setApplication(this.getOption("appTag"), this.getOption("appId"), this.appVersion), d.app.analytics.trackScreenView(this.getOption("appId")), this.model = new u.a.Model({});
                    var n = d.app.client.parseEntities();
                    this.model.set(n), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (function () {
                        e.update().catch(e.caughtError)
                    })), d.app.client.on("client:entityDidChange", this.onEntityDidChange.bind(this)), d.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyed), d.app.client.on("client:disconnected", this.onDisconnected), d.app.client.on("client:connection", this.onConnectionMessage.bind(this))
                },
                render: function () {
                    this.model.set("username", h.a.safeText(d.app.client.name), {
                        silent: !0
                    }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                },
                onEntityDidChange: function (t, e) {
                    this.model.unset(t, {
                        silent: !0
                    }), this.model.set(t, e)
                },
                controllerUpdate: function () {
                    var t = this.model.get("room") || {},
                        e = this.model.get("player"),
                        n = t.state || "",
                        i = t.lobbyState;
                    d.app.debug.pushState({
                        customerBlob: e,
                        roomBlob: t
                    }), i || -1 === n.indexOf("_") || (i = t.state.split("_")[1]), "PostGame" === i || "Credits" === n || "GameOver" === n || "PostGame" === n || "DayEnd" === n || t.gameResults ? (b.a.isInitialized || b.a.init(this.getOption("appTag")), b.a.show()) : b.a.hide(), d.app.storage && d.app.storage.isSupported && t.platformId && d.app.storage.setTag("platform-".concat(t.platformId))
                },
                update: function () {
                    return (t = regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", null);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function () {
                        var e = this,
                            n = arguments;
                        return new Promise((function (i, a) {
                            var o = t.apply(e, n);

                            function s(t) {
                                g(o, i, a, s, l, "next", t)
                            }

                            function l(t) {
                                g(o, i, a, s, l, "throw", t)
                            }
                            s(void 0)
                        }))
                    })();
                    var t
                },
                caughtError: function (t) {
                    throw t
                },
                onAttach: function () {
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked)
                },
                onBeforeDestroy: function () {
                    this.model.stopListening()
                },
                artifactClicked: function () {
                    d.app.analytics.trackEvent("PostGame", "galleryClicked", this.getOption("appTag"))
                },
                showScreen: function (t, e) {
                    var n = s()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (function () {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (function () {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = a.a.throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify: function () {
                    p.a.vibrate()
                },
                trackScreenView: function () {
                    d.app.analytics.trackScreenView(this.getOption("appTag")), d.app.storage && d.app.storage.isSupported && d.app.storage.setTag("played-".concat(this.getOption("appTag")))
                },
                onRoomWasDestroyed: function () {
                    d.app.storage && d.app.storage.isSupported && (d.app.storage.remove("roomCode"), d.app.storage.remove("secret")), p.a.show("error", {
                        titleText: "Разъединено",
                        text: "Спасибо за игру!",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected: function () {
                    p.a.show("error", {
                        titleText: "Разъединено",
                        text: "Соединение с сервером разъединено.",
                        onClose: function () {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage: function (t) {
                    var e = "".concat(t.status, " ").concat(t.attempt ? "".concat(t.attempt, "/5'") : "");
                    if (p.a.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        var n = d.app.client.parseEntities();
                        this.model.set(n)
                    }
                },
                onResize: function () {
                    var t = s()("#player").outerHeight(!0) || 0,
                        e = b.a.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        n = s()(window).width(),
                        i = s()(window).height() - t;
                    s()(".".concat(this.getOption("appTag"), "-page")).css("height", i - e), s()(".".concat(this.getOption("appTag"), "-page")).attr("height", i - e), s()(".".concat(this.getOption("appTag"), "-page")).css("top", t), s()(".".concat(this.getOption("appTag"), "-page")).css("width", n), s()(".".concat(this.getOption("appTag"), "-page")).attr("width", n)
                }
            })
        },
        463: function (t, e, n) {},
        464: function (t, e, n) {},
        465: function (t, e, n) {},
        477: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return u
            }));
            var i = n(22),
                a = n.n(i),
                o = n(191);

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var u = function () {
                function t() {
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, i;
                return e = t, i = [{
                    key: "isTestArtifact",
                    value: function (t) {
                        return t && t.rootId && -1 !== t.rootId.indexOf("test")
                    }
                }, {
                    key: "сохранить",
                    value: function (t) {
                        var e = this.isTestArtifact(t) ? this.testDomain : this.domain,
                            n = "http://".concat(e, "/artifact/").concat(t.categoryId, "/").concat(t.artifactId, "/");
                        if (o.app.storage.isSupported) {
                            var i = o.app.storage.get("galleries"),
                                s = [];
                            try {
                                s = JSON.parse(i) || []
                            } catch (t) {
                                s = []
                            }
                            if (void 0 === a.a.findWhere(s, {
                                    url: n
                                })) return s.unshift({
                                url: n,
                                time: (new Date).getTime(),
                                categoryId: t.categoryId
                            }), o.app.storage.set("galleries", JSON.stringify(s.slice(0, 40))), o.app.analytics.trackEvent("PostGame", "galleryShown", o.app.client.appTag), !0
                        }
                        return !1
                    }
                }], (n = null) && s(e.prototype, n), i && s(e, i), t
            }();
            l(u, "domain", "games.jackbox.tv"), l(u, "testDomain", "games-test.jackbox.tv")
        },
        497: function (t, e, n) {
            "use strict";

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            n.d(e, "a", (function () {
                return a
            }));
            var a = function () {
                function t(e) {
                    var n, i, a;
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), a = void 0, (i = "topNode") in (n = this) ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = a, this.topNode = e
                }
                var e, n, a;
                return e = t, (n = [{
                    key: "reset",
                    value: function (t) {
                        this.nodeStack = [this.topNode], this.resetNode(this.topNode), this.topNode.e.show()
                    }
                }, {
                    key: "resetNode",
                    value: function (t) {
                        var e = this;
                        t.e.hide(), t.branches && t.branches.forEach((function (t) {
                            return e.resetNode(t.node)
                        }))
                    }
                }, {
                    key: "input",
                    value: function (t) {
                        var e = this;
                        if ("back" === t) {
                            if (this.nodeStack.length <= 1) return;
                            return this.nodeStack.pop().e.hide(), void this.nodeStack[this.nodeStack.length - 1].e.show()
                        }
                        var n = this.nodeStack[this.nodeStack.length - 1];
                        n.branches && n.branches.forEach((function (n) {
                            if (n.input === t) {
                                e.nodeStack[e.nodeStack.length - 1].e.hide();
                                var i = n.node;
                                i.e.show(), e.nodeStack.push(i)
                            }
                        }))
                    }
                }]) && i(e.prototype, n), a && i(e, a), t
            }()
        },
        888: function (t, e) {
            t.exports = '<div id="page-quiplash" class="page">\n    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Podkova:400,700" />\n    \x3c!-- Not sure why, but repeating the stylesheet makes Edge work --\x3e\n    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Podkova:400,700" />\n    <template id="quiplash2-vote-button"> \n        <div class="quiplash2-button-group"> \n            <button type="button" style=\'flex-grow:2;\' data-vote=\'{{ order }}\' class=\'quiplash2-vote-button quiplash2-button {{ quiplash2Disabled }} btn btn-lg\'>{{ choiceString }}</button> \n            {{# if (censorable) { }} \n                <button data-censor=\'{{ order }}\' class=\'quiplash2-censor-button quiplash2-button btn btn-lg\' style="flex-grow:0;flex-basis:35px;">X</button> \n            {{# } }} \n        </div> \n    </template> \n\n    <div id="player">\n        <h1><%=username%></h1>\n    </div>\n    \n    <div id="quiplash-preload" class="quiplash-preload"></div>\n\n    <div id="game" class="game pt-pageholder">    \n        \n        <div id="state-lobby" class="pt-page-off quiplash2-page">\n            <div class="container">\n                <div class="pure-u-1"></div>\n                \n                <div id="lobby-main-menu">\n                    <p id="quiplash-lobby-text" class=\'quiplash-text\'></p>\n                    <form class="pure-form">\n                        <button type="button" id="quiplash-startgame" class="lobby-button quiplash2-button btn btn-lg btn-block">все здесь</button>\n                        <button type="button" id="quiplash-stopcountdown" class="lobby-button quiplash2-button btn btn-lg btn-block">отмена</button>\n                        <button type="button" id="quiplash-sameplayers" class="lobby-button quiplash2-button btn btn-lg btn-block quiplash-endbuttons">Эти же игроки</button>\n                        <button type="button" id="quiplash-newplayers" class="lobby-button quiplash2-button btn btn-lg btn-block quiplash-endbuttons">Новые игроки</button>    \n                    </form>\n                    \n                    <div class="pure-u-1"></div>\n                    \n                    <form class="pure-form">\n                        <button type="button" id="quiplash-lobby-menu-ugc" class="menu-button lobby-button quiplash2-button btn btn-lg btn-block">МЕНЮ ЭПИЗОДОВ</button><br>\n                        <button type="button" id="quiplash-lobby-menu-censor" class="menu-button lobby-button quiplash2-button btn btn-lg btn-block">Меню цензуры</button><br>\n                    </form>\n                    <div id="quiplash2-lobby-postgame" class="quiplash2-quips"></div>\n                </div>\n                \n                <div id="lobby-ugc">\n                    <p id="lobby-ugc-error"></p>\n                    <button type="button" class="quiplash-lobby-menu-back quiplash2-button btn btn-lg btn-block">назад</button><br>\n                    <div id="lobby-ugc-enter" class="lobby-ugc-option">\n                        <form class="">\n                            <div class="row">\n                                <div class="col-xs-12">\n                                    <p id="lobby-ugc-help" class=\'quiplash-text\'>Чтобы загрузить свой эпизод, открой пункт "сделай сам", или введи 7 букв ID эпизода.</p>\n                                    <p class="quiplash-text-box quiplash-text">Загрузи эпизод по id:</p>\n                                </div>\n                                <div class="col-xs-12">\n                                    <div class="quiplash2-button-group">\n                                        <input id="lobby-ugc-input" type="text" style="flex-grow:2;" class="capitalized jbg-input " placeholder="???-????" />\n                                        <button type="submit" id="lobby-ugc-submit" style="flex-grow:0;min-width:120px;" class="quiplash2-button btn quiplash-text">отправить</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <small class="help quiplash-text quiplash-text-danger">внимание: контент, создаваемый пользователями, не проверяется.</small>\n                        </form>\n                        \n                        <div class="quiplash-ugc-previous">\n                            <p class="quiplash-text">Или выбери эпизод из списка:</p>\n                            \x3c!-- <div id="lobby-ugc-history"></div> --\x3e\n                            <table id="lobby-ugc-history" class="quiplash-list"></table>\n                        </div>\n                    </div>\n                    \n                    <div id="lobby-ugc-choices" class="lobby-ugc-option">\n                        <div class="quiplash-text-box" id="lobby-ugc-choices-content-id quiplash-text"></div>\n                        <button type="button" id="lobby-ugc-clear" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">выгрузить</button><br>\n                        <button type="button" id="lobby-ugc-report" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">отчёт</button>\n                        <button type="button" id="lobby-ugc-view-author" class="quiplash2-button button-xlarge pure-button">посмотреть автора</button>\n                    </div>\n                    \n                </div>\n                \n                <div id="lobby-censor">\n                    \n                    <div class="pure-u-1"></div>\n                    \n                    <form class="pure-form">\n                        <div class="pure-u-1">\n                            <button type="button" class="quiplash-lobby-menu-back quiplash2-button btn btn-lg btn-block" style="margin-left: 0px; margin-right: 0px;">назад</button>\n                        </div>\n                        \n                        <div class="pure-u-1"></div>\n                        \n                        <div id="lobby-censor-players" class="pure-u-1"></div>\n                        <div class="quiplash-text quiplash-text-alt">Нажми X, чтобы ЗАБЛОКИРОВАТЬ игрока на всю игру удаляя и ответы и его имя. (Это немного напрягает.)</div>\n                    </form>\n                </div>\n                \n            </div>\n        </div>\n\n        <div id="state-logo" class="pt-page-off quiplash2-page quiplash2-logo-image">\n        </div>\n        \n        <div id="state-round" class="pt-page-off quiplash2-page">\n            <div class="quiplash2-round-image quiplash2-round-0"></div>\n            <div class="quiplash2-round-image quiplash2-round-1"></div>\n            <div class="quiplash2-round-image quiplash2-round-2"></div>\n        </div>\n        \n        <div id="state-answer-question" class="pt-page-off quiplash2-page">\n            <div class="container">\n                <p id="question-text-alt" class="quiplash-text-alt"></p>\n                <p id="question-text" class="quiplash-text"></p>\n\n                <span id="quiplash-submit-alert" class="alert alert-info">Предупреждение приходит сюда</span>\n                <form class="pure-form" id="quiplash-answer-field">\n                    <div class="pure-u-1 gridmargin">\n                        <input id="quiplash-answer-input" name="quiplash-answer" class="pure-input-1 capitalize jbg-input quiplash2-answer-input" type="text" maxlength="45" placeholder="ОТВЕЧАЙ СЮДА" autocapitalize="off" autocorrect="off" autocomplete="off">\n                    </div>\n                    \n                    <div class="pure-u-1 gridmargin">\n                    <button type="submit" id="quiplash-submit-answer" class="quiplash2-button button-large pure-button capitalize" style="width:100%;"><i class="fa fa-send-o"></i>&nbsp;&nbsp;ОТПРАВИТЬ</button>\n                    </div>\n                    \n                    <div class="pure-u-1 gridmargin"></div>\n                        \n                    <div class="pure-u-1 gridmargin">\n                    <button type="button" id="quiplash-submit-safetyquip" class="quiplash2-button button-large pure-button capitalize" style="width:100%;">СПАСАЛКА<br />(ПОЛОВИНА ОЧКОВ)</button>\n                    </div>\n                    \n                    <div class="pure-u-1 gridmargin">\n                    <button type="button" id="quiplash-audience-censor" class="quiplash2-button button-large pure-button capitalize" style="width:100%; display:none;">ЦЕНЗУРА ЗРИТЕЛЕЙ</button>\n                    </div>\n                    \n                    <div id="quiplash-submit-answer-loading" style="display:none;" class="quiplash2-button-loading"></div>\n                </form>\n                \n                \n                \n                <div id="quiplash-suggestions" class="pure-g"></div>\n            </div>\n        </div>\n        \n        <div id="state-done-answering" class="pt-page-off quiplash2-page">\n            <div style="padding-top:5px;">\n                <p class="quiplash-text">Спасибо за ответы!</p>\n            </div>\n            \n            <div class="pure-u-1 gridmargin">\n            <button type="button" id="quiplash-audience-censor-done" class="quiplash2-button button-large pure-button capitalize" style="width:100%;">ЦЕНЗУРА ЗРИТЕЛЕЙ</button>\n            </div>\n        </div>\n        \n        <div id="state-vote" class="pt-page-off quiplash2-page">\n            <div class="container">\n                <p id="question-text-alt" class="quiplash-text-alt"></p>\n                <p id="question-text" class="quiplash-text"></p>\n                <p id="vote-text"></p>\n                <form id="quiplash-vote" class="pure-form"></form>\n            </div>\n        </div>\n        \n        \n        \n        <div class="pt-page-off quiplash2-page background-yellow" id="state-ugc">\n            <div id="ugc-submit-dialog" style="display:none;" class="container">\n                <div class="quiplash-text-box">Отправляя контент, вы подтверждаете <a href="http://www.jackboxgames.com/terms-of-service/" target="_blank">Условия пользования</a></div>\n                <button id="ugc-submit-confirm" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">Согласиться и поделиться</button><br />\n                <button id="ugc-submit-cancel" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">Вернуться в меню</button>\n            </div>\n            <div id="ugc-container" class="container">\n                    <div id="ugc-toggle-visibility" class="ugc-option">\n                        <span class="quiplash-text">Tap to show/hide prompts</span><br/>\n                        <div class="quiplash-text-box">\n                            <div id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button quiplash-image-controller ugc-toggle-visibility-button pure-u-1-2" data-target="controller"></div>\n                            <div id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button quiplash-image-screen ugc-toggle-visibility-button-screen pure-u-1-2" data-target="screen"></div>\n                        </div>\n                    </div>\n                <div id="ugc-episode-name"></div>\n                <div id="ugc-new" class="ugc-option">\n                    <button type="button" id="ugc-new-button" class="quiplash2-button quiplash2-button-black btn btn-lg">Создать новый эпизод</button>\n                </div>\n\n                <h3 class="ugc-option quiplash-text-box quiplash-text ugc-load">Previous episodes:</h3>\n                <table id="ugc-load" class="ugc-option quiplash-list">\n                </table>\n                \n                \x3c!--<div id="ugc-screen-main" class="ugc-screen">--\x3e\n                    <div id="ugc-text"></div>\n                    <div id="ugc-no-actions-text"></div>\n\n                    <div id="ugc-title" class="ugc-option">\n                        <p class="quiplash-text-box">\n                            \n                        </p>\n                        <form class="">\n                            <div class="form-group">\n                                <p class=\'quiplash-text\'>First things first, enter a name for the episode that will contain all your prompts and hit create.</p>\n                                <input id="ugc-title-input" class="lowercase form-control quiplash2-answer-input input-lg" type="text" placeholder="" autocapitalize="off" autocorrect="off" autocomplete="off"/>\n                            </div>\n                            <div class="form-group">\n                                <button type="submit" id="ugc-title-button" name="ugc-title-button" class="ugc-form-button quiplash2-button quiplash2-button-black btn btn-lg pull-right">Создать</button>\n                                <button type="button" id="ugc-exit-button" class="ugc-form-button quiplash2-button quiplash2-button-black btn btn-lg pull-left">Вернуться к эпизодам</button>\n                            </div>\n                                \n                            \n                        </form>\n                    </div>\n\n                    \n                        <form class="pure-form">\n                            <div class="pure-u-1">\n                                <input id="ugc-add-input" class="lowercase ugc-input pure-input-1 quiplash2-answer-input ugc-option ugc-add" type="text" placeholder="Ввести предложение" autocapitalize="off" autocorrect="off" autocomplete="off"/>\n                            </div>\n                            <div class="ugc-option ugc-add">\n                                <button type="submit" id="ugc-add-button" name="ugc-add-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin right">добавить задание</button>\n                            </div>\n                            <div id="ugc-close" class="ugc-option">\n                                <button type="button" id="ugc-close-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin left">закрыть</button>\n                            </div>\n                            <div id="ugc-save" class="ugc-option">\n                                <button type="save" id="ugc-save-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin left">done</button>\n                            </div>\n                        </form>\n                    \n                    \n                    <table id="ugc-remove" class="ugc-option quiplash-list">\n                        <thead></thead>\n                        <tbody></tbody>\n                    </table>\n                \x3c!--</div>--\x3e\n                \n                \x3c!--<div id="ugc-screen-confirm" class="ugc-screen">--\x3e\n                    <div id="ugc-unlock" class="ugc-option">\n                        <button type="button" id="ugc-unlock-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">Редактировать</button>\n                    </div>\n                    \n                    <div id="ugc-save" class="ugc-option">\n                        <button type="save" id="ugc-save-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">Сохранить</button>\n                    </div>\n                \x3c!--</div>--\x3e\n                \n                \x3c!--<div id="ugc-screen-post-save" class="ugc-screen">--\x3e\n                    <div id="ugc-submit" class="ugc-option">\n                        <button type="button" id="ugc-submit-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">Опубликовать</button>\n                    </div>\n                    <div id="ugc-play" class="ugc-option">\n                        <button type="button" id="ugc-play-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">Играть</button>\n                    </div>\n                    <div id="ugc-remove-content" class="ugc-option">\n                        <button type="button" id="ugc-delete-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block ugc-remove-content-button">Удалить</button>\n                        <div id="ugc-remove-content-dialog" style="display:none;" class="well well-sm quiplash-confirm-dialog">\n                            <p class="quiplash-text quiplash-text-box quiplash-text-danger">Ты точно хочешь удалить этот эпизод?</p>\n                            <button id="ugc-remove-content-confirm" class="quiplash2-button quiplash2-button-black">Да</button>\n                            <button id="ugc-remove-content-cancel" class="quiplash2-button">Нет</button>\n                        </div>\n\n                    </div>\n\n                    <div id="ugc-exit" class="ugc-option">\n                        <button type="button" id="ugc-exit-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">Вернуться к эпизодам</button>\n                    </div>\n                \x3c!--</div>--\x3e\n            </div>\n        </div>\n    </div>\n</div>\n'
        },
        889: function (t, e, n) {},
        890: function (t, e, n) {
            t.exports = n.p + "images/c27a32bbd55d12bcfb10ad6525ddcebf.png"
        }
    }
]);
//# sourceMappingURL=14.4d8d5df87433313dc70a.js.map