(window.webpackJsonp = window.webpackJsonp || []).push([
    [45], {
        2879: function (e, t, o) {
            "use strict";
            o.r(t), o.d(t, "MainView", (function () {
                return C
            }));
            var n = o(466),
                i = o(22),
                s = o.n(i),
                l = o(41),
                r = o.n(l),
                c = o(31),
                a = o.n(c),
                d = o(457),
                h = o(468),
                u = o(996),
                m = o.n(u);

            function g(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function p(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var f = d.a.extend({
                    defaults: {
                        prompt: {
                            html: ""
                        },
                        roles: [],
                        players: [],
                        showDoubleDown: !0,
                        countGroupName: null,
                        confirmed: !1,
                        canConfirm: !1,
                        readyToConfirm: !1
                    }
                }),
                b = a.a.View.extend({
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: ["selected", "placeholder"],
                                onGet: function (e) {
                                    var t = "";
                                    return e[0] && (t += " selected"), e[1] && (t += " placeholder"), t
                                }
                            }, {
                                name: "style",
                                observe: ["color", "selected", "used", "placeholder"],
                                onGet: function (e) {
                                    var t = e[0],
                                        o = e[1],
                                        n = e[2],
                                        i = e[3],
                                        s = "";
                                    return t && (o ? (s += "border: 4px solid black;", s += "background-color:".concat(t, ";")) : n ? (s += "border: 4px solid ".concat(t, ";"), s += "background-color: transparent;") : i ? (s += "border: 2px solid #333;", s += "background-color: #ccc;", s += "color: #333;") : s += "background-color:".concat(t, ";")), s
                                }
                            }]
                        },
                        ".name": "name"
                    },
                    template: s.a.template('<div class="name"></div>'),
                    className: "nameView",
                    tagName: "button",
                    events: {
                        click: "handleClick",
                        mousedown: "handleTouchStart",
                        touchstart: "handleTouchStart"
                    },
                    handleClick: function (e) {
                        this.triggerMethod("name:click", this)
                    },
                    handleTouchStart: function (e) {
                        this.triggerMethod("name:dragStart", this)
                    },
                    onAttach: function () {
                        this.stickit()
                    }
                }),
                w = a.a.CollectionView.extend({
                    collection: new r.a.Collection([]),
                    className: "nameListView",
                    childView: b,
                    initialize: function (e) {
                        this.listenTo(this.collection, "sync", this.render)
                    }
                }),
                v = a.a.View.extend({
                    tagName: "button",
                    bindings: {
                        ".name": "name",
                        ".body": {
                            observe: "choice",
                            updateMethod: "html"
                        },
                        ".footer": {
                            visible: !0,
                            observe: "name"
                        },
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: ["hover", "color"],
                                onGet: function (e) {
                                    var t = "";
                                    return e[0] && (t += " hover"), e[1] && (t += " color"), t
                                }
                            }, {
                                name: "style",
                                observe: "color",
                                onGet: function (e) {
                                    var t = "";
                                    return e && (t += "background: linear-gradient(180deg, #000000 0%, #000000 49%, ".concat(e, " 49%, ").concat(e, " 100%);"), t += "background-size: 100% 200%;", t += "background-position:bottom;", t += "color:black;"), t
                                }
                            }]
                        },
                        ".doubleDown": {
                            observe: "showDoubleDown",
                            visible: !0,
                            attributes: [{
                                name: "class",
                                observe: "doubleDown",
                                onGet: function (e) {
                                    return e ? "selected" : ""
                                }
                            }]
                        }
                    },
                    className: "roleView",
                    template: s.a.template('\n        <div class="body"></div>\n        <div class="footer">\n            <div class="name"></div>\n            <button aria-label="Double Down" class="doubleDown"></button>\n        </div>'),
                    events: {
                        "click .doubleDown": "handleDoubleDown",
                        click: "handleClick"
                    },
                    handleClick: function (e) {
                        this.triggerMethod("role:click", this)
                    },
                    handleDoubleDown: function (e) {
                        e.preventDefault(), this.triggerMethod("doubleDown:click", this)
                    },
                    onAttach: function () {
                        this.stickit()
                    }
                }),
                y = a.a.CollectionView.extend({
                    collection: new r.a.Collection([]),
                    childView: v,
                    className: "roleListView",
                    initialize: function (e) {
                        this.listenTo(this.collection, "sync", this.render)
                    }
                }),
                D = a.a.View.extend({
                    model: new f,
                    template: s.a.template(m.a),
                    className: "Sortable scrollable",
                    regions: {
                        prompt: "#prompt",
                        names: "#namesRegion",
                        instructions: "#instructionsRegion",
                        roles: "#rolesRegion"
                    },
                    bindings: {
                        ".submit.button": {
                            observe: "canConfirm",
                            visible: function (e) {
                                if (!this.namesList) return !1;
                                var t = this.namesList.children.every((function (e) {
                                    return e.model.get("used")
                                }));
                                return e && t
                            }
                        }
                    },
                    events: {
                        touchmove: "handleDragMove",
                        mousemove: "handleDragMove",
                        mouseup: "handleDragEnd",
                        touchend: "handleDragEnd",
                        touchcancel: "handleDragEnd",
                        "click #submit": "sendGameUpdate"
                    },
                    initialize: function () {
                        this.promptComponent = this.promptComponent || new h.a({
                            model: new r.a.Model
                        }), this.namesList = this.namesList || new w({
                            collection: new r.a.Collection([])
                        }), this.rolesList = this.rolesList || new y({
                            collection: new r.a.Collection([])
                        }), this.instructionView = this.instructionView || new h.a, this.listenTo(this.model, "change", this.update, this)
                    },
                    update: function () {
                        this.promptComponent.model.set(this.model.get("prompt"));
                        var e = this.model.get("players"),
                            t = this.model.get("showDoubleDown"),
                            o = this.model.get("roles").map((function (e) {
                                return function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var o = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? g(Object(o), !0).forEach((function (t) {
                                            p(e, t, o[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach((function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                        }))
                                    }
                                    return e
                                }({}, e, {
                                    showDoubleDown: t
                                })
                            }));
                        this.namesList.collection.set(e), this.rolesList.collection.set(o);
                        var n = this.model.get("isAudience") ? "Перетащи игрока на роль, которая ему больше всего подходит." : "Перетащи игроков на их роли";
                        this.instructionView.model.set("html", n), this.chosen = !1, this.stickit()
                    },
                    onRender: function () {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("names", this.namesList), this.showChildView("instructions", this.instructionView), this.showChildView("roles", this.rolesList), this.stickit()
                    },
                    onAttach: function () {
                        this.update()
                    },
                    onBeforeDestroy: function () {
                        this.timedScroll(0)
                    },
                    handleSubmitButton: function (e) {
                        this.sendGameUpdate(!0)
                    },
                    assignNameToRole: function (e, t) {
                        var o = e.model.get("name"),
                            n = e.model.get("color"),
                            i = e.model.get("index");
                        this.removeNameFromRoles(e);
                        var s = t.model.get("nameIndex");
                        void 0 !== s && this.namesList.children.forEach((function (e) {
                            e.model.get("index") === s && e.model.set("used", !1)
                        })), t.model.set("name", o), t.model.set("color", n), t.model.set("nameIndex", i), t.model.set("doubleDown", !1), e.model.set("selected", !1), e.model.set("used", !0), this.sendGameUpdate(), this.model.get("isAudience") && (this.chosen = !0)
                    },
                    removeNameFromRoles: function (e) {
                        var t = e.model.get("index");
                        this.rolesList.children.forEach((function (e) {
                            e.model.get("nameIndex") === t && (e.model.set("name", null), e.model.set("color", null), e.model.set("nameIndex", void 0), e.model.set("doubleDown", !1))
                        })), e.model.set("used", !1)
                    },
                    findHoveredRole: function (e) {
                        var t = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.clientY,
                            o = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientX : e.clientX;
                        return this.rolesList.children.find((function (e) {
                            var n = e.el.getBoundingClientRect();
                            return o > n.left && o < n.left + n.width && t > n.top && t < n.top + n.height
                        }))
                    },
                    sendGameUpdate: function (e) {
                        var t = !!e,
                            o = -1,
                            n = this.rolesList.children.filter((function (e) {
                                return void 0 !== e.model.get("nameIndex")
                            })).map((function (e) {
                                var t = e.model.get("nameIndex"),
                                    n = e.model.get("index");
                                return o = "".concat(n, ",").concat(t), {
                                    player: t,
                                    role: n,
                                    doubleDown: e.model.get("doubleDown")
                                }
                            }));
                        this.model.get("isAudience") ? (this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: o
                        }), this.chosen = !0) : this.triggerMethod("client:message", {
                            action: "sort",
                            layout: n,
                            confirm: t
                        })
                    },
                    onChildviewChildviewNameClick: function (e) {
                        this.chosen || (this.selectedNameView && (this.selectedNameView.model.set("selected", !1), this.selectedNameView.model.set("placeholder", !1)), e.model.set("selected", !0), this.selectedNameView = e)
                    },
                    onChildviewChildviewRoleClick: function (e) {
                        this.dragging || this.selectedNameView && (this.assignNameToRole(this.selectedNameView, e), this.selectedNameView = null, this.stickit())
                    },
                    onChildviewChildviewDoubleDownClick: function (e) {
                        this.rolesList.children.forEach((function (e) {
                            return e.model.set("doubleDown", !1)
                        })), e.model.set("doubleDown", !0), this.sendGameUpdate()
                    },
                    onChildviewChildviewNameDragStart: function (e) {
                        if (!this.chosen) {
                            this.removeNameFromRoles(e);
                            var t = e.el.cloneNode(!0),
                                o = e.el.getBoundingClientRect(),
                                n = o.width || o.right - o.left,
                                i = o.height || o.bottom - o.top,
                                s = document.getElementById("mirror");
                            s.innerHTML = "", s.appendChild(t), s.style.display = "block", s.style.width = "".concat(n, "px"), s.style.height = "".concat(i, "px"), s.style.top = "-9999px", this.dragging = !0, this.dragSelectedNameView = e, e.model.set("placeholder", !0)
                        }
                    },
                    handleDragMove: function (e) {
                        if (!this.dragging) return !0;
                        e.preventDefault();
                        var t = document.getElementById("mirror"),
                            o = t.getBoundingClientRect(),
                            n = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY,
                            i = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
                        n -= .5 * o.height, i -= .5 * o.width, t.style.top = "".concat(n, "px"), t.style.left = "".concat(i, "px"), this.rolesList.children.forEach((function (e) {
                            e.model.set("hover", !1)
                        }));
                        var s = this.findHoveredRole(e);
                        s && s.model.set("hover", !0);
                        var l = window.innerHeight;
                        return n < .1 * l ? this.timedScroll(-1) : n > .9 * l ? this.timedScroll(1) : this.timedScroll(0), !0
                    },
                    handleDragEnd: function (e) {
                        if (!this.dragging) return !0;
                        var t = document.getElementById("mirror");
                        t.style.display = "none";
                        var o = this.findHoveredRole(e);
                        return o && this.assignNameToRole(this.dragSelectedNameView, o), this.dragSelectedNameView.model.set("placeholder", !1), this.dragSelectedNameView = null, this.rolesList.children.forEach((function (e) {
                            e.model.set("hover", !1)
                        })), t.innerHTML = "", this.dragging = !1, this.timedScroll(0), this.stickit(), !0
                    },
                    timedScroll: function (e) {
                        this.scrollDirection !== e && (clearInterval(this.scrollInterval), 0 !== e && (this.scrollInterval = setInterval(this.scrollUpdate.bind(this), 1e3 / 30)), this.scrollDirection = e)
                    },
                    scrollUpdate: function () {
                        this.el.scrollTop = parseInt(this.el.scrollTop, 10) + 5 * this.scrollDirection
                    }
                }),
                C = (o(997), n.a.extend({
                    sessionModulePrefix: "RoleModels",
                    parseBlob: function (e) {
                        var t = e;
                        (t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], "Lobby" === t.state && (t.characters = []), "Lobby" !== t.state || t.allowDrawingsIfCameraDisabled) || (t.choices = t.choices || [], void 0 !== t.choices.find((function (e) {
                            return "toCamera" === e.action
                        })) || (t.choices = t.choices.filter((function (e) {
                            return "toDraw" !== e.action
                        }))));
                        return "Draw" === t.state && (t.thicknesses = [10], t.sketchOptions = {
                            minThickness: .5,
                            thicknessFactor: 0,
                            smoothingFactor: .55,
                            thicknessSmoothingFactor: .6,
                            dotMultiplier: 1,
                            tipTaperFactor: .7,
                            cappedEnds: !0
                        }, t.prompt = {
                            html: "Нарисуйте себя"
                        }, t.playerInfo.playerColor && (t.background = t.playerInfo.playerColor)), "MakeSingleChoice" === t.state && t.choices && t.choices.length > 0 && "ЦЕНЗУРА ОТВЕТОВ" === t.choices[t.choices.length - 1].text && (t.choices[t.choices.length - 1].className = "censorAnswers"), t.isAudience ? t.playerInfo.username = "ЗРИТЕЛЬ" : t.playerInfo.hidden = !0, t
                    },
                    getGameLayout: function (e) {
                        switch (console.log("[RoleModels MainView] getGameLayout", e), e) {
                            case "Sortable":
                                return this.setLayout(D);
                            default:
                                return -1
                        }
                    },
                    formatSessionMessage: function (e) {
                        var t = e;
                        if ("submit" === t.action && Object.prototype.hasOwnProperty.call(t, "lines")) {
                            var o = this.model.get("player");
                            if (o && !1 === o.submitAsBitmap) return t;
                            t.action = "camera", t.lines = void 0, t.picture = this.currentLayout.sketchpadComponent.getImageData().split(",")[1]
                        }
                        return t
                    }
                }))
        },
        996: function (e, t) {
            e.exports = '<div id="controller" class="state-controller controller-content">\n    <div id="prompt" class="prompt text col-xs-12"></div>\n    <div id="namesRegion" class="names"></div>\n    <div id="instructionsRegion" class="instructions"></div>\n    <div id="rolesRegion" class="roles"></div>\n    <button id="submit" class="button choice-button btn btn-lg submit">Отправить</button>\n    <div id="mirror" class="mirror"></div>\n</div>'
        },
        997: function (e, t, o) {}
    }
]);
//# sourceMappingURL=45.569c35277a1a9c5b97b0.js.map