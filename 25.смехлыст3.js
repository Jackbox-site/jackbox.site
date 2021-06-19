(window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        1023: function (t, e, n) {},
        1024: function (t, e, n) {
            "use strict";
            (function (t) {
                n.d(e, "a", (function () {
                    return I
                }));
                var i = n(83),
                    o = n(41),
                    a = n.n(o),
                    s = n(467),
                    r = n(471),
                    l = n(1025),
                    u = n(31),
                    c = n.n(u),
                    d = n(457),
                    p = n(468),
                    h = n(22),
                    g = n.n(h),
                    m = n(191),
                    b = n(1027),
                    f = n.n(b);

                function v(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter((function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function y(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? v(Object(n), !0).forEach((function (e) {
                            x(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function x(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function C(t) {
                    return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                var w = d.a.extend({
                        defaults: {
                            error: null,
                            entries: null,
                            classes: [],
                            autoSubmit: !1,
                            maxLength: 500,
                            actions: [{
                                text: "submit",
                                action: "submit"
                            }],
                            strings: {
                                ERROR_NOTHING_ENTERED: "You need to enter something!"
                            },
                            autocapitalize: "characters"
                        }
                    }),
                    I = c.a.View.extend({
                        className: "EnterTextList scrollable",
                        model: new w,
                        template: g.a.template(f.a),
                        hasOpened: !1,
                        regions: {
                            prompt: "#prompt",
                            inputs: "#inputs-region",
                            buttons: "#buttons"
                        },
                        events: {
                            "submit form": "onChildviewInputSubmit",
                            "input textarea": "onInputChange"
                        },
                        bindings: {
                            ":el": {
                                attributes: [{
                                    name: "style",
                                    observe: "playerInfo",
                                    onGet: function (t) {
                                        return t && t.bgColor ? "background-color: ".concat(t.bgColor) : ""
                                    }
                                }, {
                                    name: "class",
                                    observe: "classes",
                                    onGet: function (t) {
                                        return t ? t.join(" ") : ""
                                    }
                                }]
                            },
                            ".enterTextListForm": {
                                observe: "entries",
                                visible: function (t) {
                                    return !t
                                }
                            },
                            ".enterTextListDone": {
                                observe: "entries",
                                visible: !0
                            },
                            ".doneText": {
                                observe: "doneText",
                                updateMethod: "html",
                                onGet: function (e) {
                                    return e ? e.html ? e.html : t("<div />").text(e.text).html() : ""
                                }
                            },
                            ".parentErrorText": {
                                observe: "error",
                                updateMethod: "html",
                                onGet: function (e) {
                                    return e ? "object" === C(e) ? e.html ? e.html : t("<div />").text(e.text).html() : e : null
                                }
                            }
                        },
                        initialize: function (t) {
                            this.shouldSubmit = !1, this.promptComponent = new p.a({
                                model: new a.a.Model({
                                    text: "",
                                    className: ""
                                })
                            }), this.inputsComponent = new l.a, this.buttonsCollection = new a.a.Collection([{
                                text: "submit"
                            }]), this.buttonsComponent = new s.a({
                                childView: r.a,
                                block: !0,
                                collection: this.buttonsCollection
                            }), this.listenTo(this.model, "change", this.update, this)
                        },
                        update: function () {
                            this.promptComponent.model.set(this.model.get("prompt")), this.buttonsComponent.options.block = this.model.get("block");
                            var t = [];
                            if (this.model.get("actions").forEach((function (e) {
                                    e.action || (e.action = e.key), t.push(e)
                                })), this.buttonsCollection.set(t), this.inputsComponent.collection.length !== this.model.get("fieldCount")) {
                                for (var e = [], n = this.model.get("fieldCount"); n > 0; n--) e.push(y({}, this.model.attributes, {
                                    counter: !0,
                                    hideError: !0,
                                    isLastChild: 1 === n
                                }));
                                this.inputsComponent.collection.set(e)
                            }
                            this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                        },
                        onRender: function () {
                            this.showChildView("prompt", this.promptComponent), this.showChildView("inputs", this.inputsComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
                        },
                        onAttach: function () {
                            this.update(), i.a.vibrate()
                        },
                        onBeforeDestroy: function () {
                            this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                        },
                        onInputChange: function () {
                            this.model.setUpdate({
                                error: null
                            })
                        },
                        onChildviewInputSubmit: function () {
                            var t = this.inputsComponent.getSanitizedValues();
                            if (!this.model.get("autoSubmit") && t.every((function (t) {
                                    return "" === t
                                }))) return this.model.setUpdate({
                                error: this.model.get("strings").ERROR_NOTHING_ENTERED
                            }), !1;
                            this.model.setUpdate({
                                autoSubmit: !1,
                                error: null
                            }), this.$el.find(".enterTextListFieldset").prop("disabled", !0);
                            var e = {
                                    action: "write",
                                    entries: t
                                },
                                n = this.model.get("textKey");
                            return n ? (e.textKey = n, e.val = t.join("\n"), this.triggerMethod("client:message", e)) : m.app.client.send("SendMessageToRoomOwner", e), this.$el.find(".enterTextListFieldset").prop("disabled", !1), !1
                        },
                        onChildviewChildviewButtonChoose: function (t) {
                            return this.onChildviewInputSubmit(), !1
                        }
                    })
            }).call(this, n(17))
        },
        1025: function (t, e, n) {
            "use strict";
            (function (t) {
                n.d(e, "a", (function () {
                    return c
                }));
                var i = n(41),
                    o = n.n(i),
                    a = n(31),
                    s = n.n(a),
                    r = n(1026),
                    l = o.a.Model.extend({
                        idAttribute: "key"
                    }),
                    u = o.a.Collection.extend({
                        model: l
                    }),
                    c = s.a.CollectionView.extend({
                        className: "fields",
                        childView: r.a,
                        collection: new u,
                        onChildviewInputFocusNext: function (e) {
                            var n = this.children.findByIndex(e._index + 1);
                            t(n.el).find("textarea").focus()
                        },
                        onChildviewInputSubmit: function () {
                            this.triggerMethod("input:submit")
                        },
                        clearInputs: function () {
                            return this.children.forEach((function (t) {
                                return t.clearInput()
                            }))
                        },
                        getSanitizedValue: function (t) {
                            return this.children.findByIndex(t).getSanitizedValue()
                        },
                        getSanitizedValues: function () {
                            return this.children.map((function (t) {
                                return t.getSanitizedValue()
                            }))
                        },
                        getValue: function (t) {
                            this.children.findByIndex(t).getValue()
                        },
                        getValues: function () {
                            return this.children.map((function (t) {
                                return t.getValue()
                            }))
                        },
                        setValue: function (t, e) {
                            this.children.findByIndex(t).setValue(e)
                        }
                    })
            }).call(this, n(17))
        },
        1026: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return u
            }));
            var i = n(22),
                o = n.n(i),
                a = n(41),
                s = n.n(a),
                r = n(579),
                l = n.n(r),
                u = (n(192), n(748).a.extend({
                    tagName: "div",
                    className: "input",
                    model: new s.a.Model({}),
                    template: o.a.template(l.a),
                    onKeypress: function (t) {
                        return this.model.set("error", ""), 13 !== t.keyCode || (this.model.get("isLastChild") ? this.triggerMethod("input:submit", this) : this.triggerMethod("input:focusNext", this), !1)
                    }
                }))
        },
        1027: function (t, e) {
            t.exports = '<div id="controller" class="state-controller controller-content">\n    <form class="enterTextListForm">\n        <fieldset class="enterTextListFieldset">\n            <div id="prompt" class="prompt">prompt</div>\n            <div id="inputs-region"></div>\n            <span id="helpBlock2" class="help-block parentErrorText"></span>\n            <div id="buttons">buttons</div>\n        </fieldset>\n    </form>\n\n    <div class="enterTextListDone">\n        <span class="doneText"></span>\n    </div>\n</div>'
        },
        1028: function (t, e) {
            t.exports = '<div id="controller" class="state-controller controller-content">\n    <div class="characterSelect">\n        <div id="charactersPrompt" class="charactersPrompt">\n            <span id="charactersPromptText" class="charactersPromptText"></span>\n        </div>\n        <div id="characters" class="charactersContainer"></div>\n    </div>\n    <div id="vipMenu" class="vipMenu">\n        <div id="title" class="lobbyTitle">title</div>\n        <div id="choices" class="choicesContainer">choices</div>\n    </div>\n    <div id="artifactId" class="artifactContainer text">\n        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">\n            <button id="artifactButton" class="artifactButton"></button>\n        </a>\n    </div>\n</div>'
        },
        1029: function (t, e) {
            t.exports = '<div id="toggleGroup">\n    <div id="left-label" class="label">Left label</div>\n    <label class="toggle">\n        <input class="toggleInput" type="checkbox"></input>\n        <span class="slider"></span>\n    </label>\n    <div id="right-label" class="label">Right label</div>\n</div>'
        },
        1030: function (t, e) {
            t.exports = '<div id="controller" class="state-controller controller-content">\n    <div class="ugc-action-toggle-visibility">\n        <span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/>\n        <button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button>\n        <button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen" data-target="screen"></button>\n    </div>\n    <div class="ugc-actions-play">\n        <div class="ugc-episode-name"></div>\n    </div>\n    <div class="ugc-action-new">\n        <button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button>\n    </div>\n\n    <div class="ugc-action-load">\n        <p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p>\n        <div id="episodesRegion"></div>\n    </div>\n\n    <div id="prompt" class="prompt ugc-text"></div>\n    <div id="ugc-no-actions">\n        <div id="ugc-no-actions-text"></div>\n    </div>\n\n    <div class="ugc-action-add">        <div id="toggleRegion"></div>\n        <div id="inputRegion"></div>\n    </div>\n\n    <div class="ugc-action-title">\n        <p class="text-box">\n            <span class=\'text create_new_name_prompt\'>create_new_name_prompt</span>\n        </p>\n        <div id="titleInputRegion"></div>\n    </div>\n\n    <div class="ugc-action-close">\n        <button class="button action-button button_close" data-action="close">button_close</button>\n    </div>\n    <div class="ugc-action-unlock">\n        <button class="button action-button button_edit" data-action="unlock">button_edit</button>\n    </div>\n    <div class="ugc-action-done">\n        <button class="button action-button button_done" data-action="done">button_done</button>\n    </div>\n    <div class="ugc-action-submit">\n        <button class="button action-button button_publish" data-action="submit">button_publish</button>\n    </div>\n\n    <div class="ugc-action-play">\n        <button class="button action-button button_play" data-action="play">button_play</button>\n    </div>\n\n    <div class="ugc-action-remove-content">\n        <button class="button action-button button_delete" data-action="remove-content">button_delete</button>\n    </div>\n\n    <div class="ugc-action-exit">\n        <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button>\n    </div>\n\n    <div class="ugc-action-episodes">\n        <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button>\n    </div>\n\n    <div class="ugc-action-remove">\n        <div id="promptsCount" class="promptsCount"></div>\n        <div id="promptsRegion"></div>\n    </div>\n</div>'
        },
        2862: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "MainView", (function () {
                return L
            }));
            n(1023);
            var i = n(41),
                o = n.n(i),
                a = n(748),
                s = n(475),
                r = n(457),
                l = r.a.extend({
                    defaults: {
                        state: "EnterSingleText",
                        actions: [{
                            text: "submit",
                            action: "submit"
                        }],
                        allowEmpty: !1,
                        autoSubmit: !1,
                        classes: [],
                        doneText: "",
                        entryId: void 0,
                        entry: null,
                        live: !1,
                        maxLength: 500,
                        placeholder: "",
                        autocapitalize: "characters",
                        className: "",
                        inlineSubmit: !1,
                        inlineSubmitText: "Submit",
                        error: "",
                        strings: {
                            ERROR_NOTHING_ENTERED: "You need to enter something!"
                        }
                    }
                }),
                u = s.a.extend({
                    model: new l,
                    initialize: function (t) {
                        this.inputComponent = this.inputComponent || new a.a({
                            model: new o.a.Model({})
                        }), s.a.prototype.initialize.apply(this, [t])
                    },
                    onChildviewInputSubmit: function () {
                        var t = this.inputComponent.getSanitizedValue();
                        if (this.model.setUpdate({
                                error: null
                            }), !this.model.get("autoSubmit") && 0 === t.length && !this.model.get("allowEmpty")) return this.model.setUpdate({
                            error: this.model.get("strings").ERROR_NOTHING_ENTERED
                        }), !1;
                        var e = {
                                action: "write",
                                entry: t || " "
                            },
                            n = this.model.get("textKey");
                        return n && (e.textKey = n, e.val = t || ""), this.triggerMethod("client:message", e), this.model.setUpdate({
                            autoSubmit: !1
                        }), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = t, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                            entry: this.audienceEntry,
                            shotId: this.entryId
                        })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
                    },
                    update: function () {
                        var t = this;
                        this.$el.ready((function () {
                            return t.$el.find("textarea").focus()
                        })), s.a.prototype.update.apply(this, []);
                        var e = [];
                        this.model.get("entry") || this.model.get("actions").forEach((function (t) {
                            t.label ? e.push({
                                type: "text",
                                text: t.label,
                                className: "choice-prompt"
                            }, t) : (t.action || (t.action = t.key), e.push(t))
                        }));
                        this.buttonsCollection.set(e), this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                    },
                    onChildviewChildviewButtonChoose: function (t) {
                        var e = this.model.get("textKey"),
                            n = t.get("key");
                        if ("submit" === n) return this.onChildviewInputSubmit(), !1;
                        var i = void 0 !== e && "safetyQuip" === n ? {
                            action: "write",
                            textKey: e,
                            val: "⁇"
                        } : {
                            action: n
                        };
                        return this.triggerMethod("client:message", i), !1
                    }
                }),
                c = n(1024),
                d = n(22),
                p = n.n(d),
                h = n(474),
                g = n(1028),
                m = n.n(g),
                b = h.a.extend({
                    template: p.a.template(m.a)
                }),
                f = n(466),
                v = n(479),
                y = n(47),
                x = v.a.extend({
                    initialize: function (t) {
                        this.model.set("length", 0), v.a.prototype.initialize.apply(this, t)
                    },
                    getSanitizedValue: function () {
                        return this.sanitize(this.getValue())
                    },
                    sanitize: function (t) {
                        var e = this.sanitizeInput(t);
                        return y.a.htmlEscape(e).trim()
                    },
                    sanitizeInput: function (t) {
                        return t.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^\u00A1\u0020-\u007E\u00BF-\u00FF\u2019\u201A\u201C\u201D]/gi, "")
                    }
                }),
                C = n(577),
                w = (n(192), n(31)),
                I = n.n(w),
                S = n(1029),
                _ = n.n(S),
                T = r.a.extend({
                    defaults: {
                        toggled: !1,
                        leftLabel: "Regular Prompt",
                        rightLabel: "Thriplash Prompt"
                    }
                }),
                E = I.a.View.extend({
                    tagName: "div",
                    className: "ToggleView",
                    model: new T,
                    template: p.a.template(_.a),
                    events: {
                        "click .toggleInput": "onToggle"
                    },
                    bindings: {
                        "#left-label": {
                            observe: "leftLabel",
                            onGet: function (t) {
                                return t
                            }
                        },
                        "#right-label": {
                            observe: "rightLabel",
                            onGet: function (t) {
                                return t
                            }
                        }
                    },
                    onRender: function () {
                        this.stickit()
                    },
                    onToggle: function () {
                        var t = this.model.get("toggled");
                        this.model.setUpdate({
                            toggled: !t
                        })
                    },
                    getValue: function () {
                        return this.model.get("toggled")
                    }
                }),
                V = n(1030),
                k = n.n(V),
                z = C.a.extend({
                    template: p.a.template(k.a),
                    regions: p.a.extend({}, C.a.prototype.regions, {
                        toggle: "#toggleRegion"
                    }),
                    initialize: function () {
                        this.inputComponent = this.inputComponent || new x({
                            model: new Backbone.Model({
                                inlineSubmit: !0,
                                inlineSubmitText: "",
                                className: "addPrompt",
                                counter: !0
                            })
                        }), this.titleInputComponent = this.titleInputComponent || new x({
                            model: new Backbone.Model({
                                inlineSubmit: !0,
                                counter: !0
                            })
                        }), this.toggleComponent = this.toggleComponent || new E, C.a.prototype.initialize.apply(this)
                    },
                    onRender: function () {
                        C.a.prototype.onRender.apply(this), this.showChildView("toggle", this.toggleComponent)
                    },
                    update: function () {
                        C.a.prototype.update.apply(this), this.toggleComponent.model.setUpdate(this.model.get("toggle"))
                    },
                    onChildviewInputSubmit: function () {
                        var t, e;
                        if (-1 !== this.model.get("validActions").indexOf("add") ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput()) : -1 !== this.model.get("validActions").indexOf("title") && (t = "title", e = this.titleInputComponent.getSanitizedValue(), this.titleInputComponent.clearInput()), t && e) {
                            var n = {
                                action: t,
                                text: e
                            };
                            "add" == t && this.toggleComponent.getValue() && (n.type = "thriplash"), this.triggerMethod("client:message", n)
                        }
                    }
                }),
                L = f.a.extend({
                    sessionModulePrefix: "quiplash3",
                    getGameLayout: function (t) {
                        switch (t) {
                            case "EnterSingleText":
                                return this.setLayout(u);
                            case "EnterTextList":
                                return this.setLayout(c.a);
                            case "Lobby":
                                return this.setLayout(b);
                            case "UGC":
                                return this.setLayout(z);
                            default:
                                return -1
                        }
                    },
                    bindings: p.a.extend({}, f.a.prototype.bindings, {
                        "#controller-container": {
                            attributes: [{
                                name: "class",
                                observe: "player",
                                onGet: function (t) {
                                    if (t && t.playerInfo && t.playerInfo.avatar) return "Logo" == t.state ? t.classes ? "Logo ".concat(t.classes.join(" ")) : "Logo" : t.playerInfo.avatar
                                }
                            }, {
                                name: "class",
                                observe: "blob",
                                onGet: function (t) {
                                    if (t) return t.isAudience ? "Audience" : "UGC" == t.state ? "UGCView" : void 0
                                }
                            }]
                        }
                    }),
                    parseBlob: function (t) {
                        return t.classes = t.classes || [], t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], t.playerInfo.avatar && (t.classes = p.a.union(t.classes, [t.playerInfo.avatar]), t.playerInfo.classes = p.a.union(t.playerInfo.classes, [t.playerInfo.avatar])), t.isAudience && (t.playerInfo = {
                            username: "AUDIENCE",
                            classes: ["Audience"]
                        }), "UGC" == t.state && (t.playerInfo.classes = p.a.union(t.playerInfo.classes, ["UGCView"])), t
                    }
                })
        },
        579: function (t, e) {
            t.exports = '<form>\n    <div class="form-group">\n        <div class="charCountDisplay"><span class="charCount">0/45</span></div>\n        <div class="inputGroup">\n            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>\n            <span class="inlineSubmit">\n                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>\n            </span>\n            <span id="helpBlock2" class="help-block errorText"></span>\n        </div>\n    </div>\n</form>'
        },
        748: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return v
            }));
            var i = n(479),
                o = n(22),
                a = n.n(o);

            function s(t, e) {
                return function (t) {
                    if (Array.isArray(t)) return t
                }(t) || function (t, e) {
                    if (!(Symbol.iterator in Object(t)) && "[object Arguments]" !== Object.prototype.toString.call(t)) return;
                    var n = [],
                        i = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        o = !0, a = t
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(t, e) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var r = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
                l = [128104, 128105, 129489],
                u = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
                c = function (t, e) {
                    for (var n = "", i = !0; i && e < t.length;) {
                        var o = t[e];
                        if (h(o)) {
                            var a = d(o, t[e + 1]);
                            u.includes(a) ? (n = n + o + t[e + 1], e += 2) : i = !1
                        } else p(o, 8205) ? (n = n + o + t[e + 1] + t[e + 2], e += 3) : i = !1
                    }
                    return [n, e]
                },
                d = function (t, e) {
                    var n = parseInt(t.charCodeAt(0).toString(16), 16),
                        i = parseInt(e.charCodeAt(0).toString(16), 16);
                    return parseInt((1024 * (n - 55296) + i - 56320 + 65536).toString(16), 16)
                },
                p = function (t, e) {
                    return !!t && parseInt(t.charCodeAt(0).toString(16), 16) == e
                },
                h = function (t) {
                    return /[\uD800-\uDB7F]/.test(t)
                },
                g = function (t) {
                    var e = parseInt(t.toString(16), 16);
                    return e >= 127462 && e <= 127487
                },
                m = function (t, e) {
                    if (console.log(t.split("").map((function (t) {
                            return t.charCodeAt(0).toString(16)
                        }))), !/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(t)) return t.length > e && (t = t.substr(0, e)), {
                        result: t,
                        charCount: t.length
                    };
                    for (var n, i = t.split(""), o = 0, a = "", m = 0; m < i.length && (!e || o < e); m++) {
                        var b = i[m];
                        if (/[\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(b)) a += b, o++;
                        else {
                            if (n = void 0, n = parseInt(b.charCodeAt(0).toString(16), 16), r.includes(n)) {
                                if (a += b, p(b, 9977)) {
                                    m++;
                                    var f = s(c(i, m), 2);
                                    a = a += f[0], m = f[1] - 1
                                }
                                o++;
                                continue
                            }
                            if (p(b, 8220) || p(b, 8221)) {
                                m++, a += '"', o++;
                                continue
                            }
                            if (h(b)) {
                                var v = i[m + 1];
                                a = a + b + v, m += 1;
                                var y = d(b, v);
                                if (l.includes(y)) {
                                    var x = s(c(i, m + 1), 2);
                                    a += x[0], o++, m = x[1] - 1;
                                    continue
                                }
                                if (g(y)) {
                                    var C = d(i[m + 1], i[m + 2]);
                                    g(C) && (a = a + i[m + 1] + i[m + 2], m++), o++;
                                    continue
                                }
                                if (127988 == y) {
                                    var w = i[m + 1];
                                    p(w, 8205) && (a = a + w + i[m + 2] + i[m + 3], m += 3), o++;
                                    continue
                                }
                                if (127987 == y) {
                                    var I = i[m + 1];
                                    p(I, 65039) && (m++, p(i[m + 1], 8205) && (a = a + I + i[m + 1] + i[m + 2] + i[m + 3], m += 3)), o++;
                                    continue
                                }
                                u.includes(y) || o++;
                                continue
                            }
                            if (/[\u0023\u002A\u0030-\u0039]/.test(b)) {
                                var S = i[m + 1];
                                S && p(S, 65039) ? (a = a + b + i[m + 1] + i[m + 2], m += 2) : a += b, o++;
                                continue
                            }(p(b, 65039) || p(b, 8205) || p(b, 8419)) && (a += b)
                        }
                    }
                    return {
                        result: a,
                        charCount: o
                    }
                },
                b = n(579),
                f = n.n(b),
                v = i.a.extend({
                    template: a.a.template(f.a),
                    bindings: a.a.extend({}, i.a.prototype.bindings, {
                        textarea: {
                            attributes: [{
                                name: "placeholder",
                                observe: "placeholder"
                            }, {
                                name: "autocapitalize",
                                observe: "autocapitalize"
                            }, {
                                name: "class",
                                observe: "className",
                                onGet: function (t) {
                                    return "form-control ".concat(void 0 !== t ? t : "")
                                }
                            }]
                        },
                        ".charCount": {
                            observe: "length",
                            onGet: function (t) {
                                var e = this.model.get("maxLength");
                                return "".concat(t, "/").concat(e)
                            }
                        }
                    }),
                    initialize: function (t) {
                        this.model.set("length", 0), i.a.prototype.initialize.apply(this, t)
                    },
                    onInputChange: function () {
                        var t = this.$("textarea").first();
                        if (t.length) {
                            var e = m(t.val(), this.model.get("maxLength"));
                            this.model.set("length", e.charCount), t.val(e.result)
                        }
                    },
                    getSanitizedValue: function () {
                        return this.sanitize(this.getValue())
                    },
                    sanitize: function (t) {
                        return this.sanitizeInput(t)
                    },
                    sanitizeInput: function (t) {
                        return m(t, this.model.get("maxLength")).result
                    }
                })
        }
    }
]);
//# sourceMappingURL=25.bbf85f3f9e6e433a6300.js.map