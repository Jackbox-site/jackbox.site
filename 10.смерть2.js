(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        2861: function (t, e, i) {
            "use strict";
            i.r(e), i.d(e, "MainView", (function () {
                return V
            }));
            var s = i(17),
                n = i.n(s),
                a = i(22),
                o = i.n(a),
                r = i(466),
                c = i(469),
                h = i(467),
                d = i(471),
                l = d.a.extend({
                    template: o.a.template('<button type="button" class="button choice-button btn btn-lg"></button><button data-action="choose" class="button check-button btn btn-lg"></button>'),
                    bindings: o.a.extend(d.a.prototype.bindings, {
                        ".check-button": {
                            attributes: [{
                                name: "class",
                                observe: "className"
                            }]
                        }
                    })
                }),
                p = c.a.extend({
                    initialize: function (t) {
                        this.choicesList = this.choicesList || new h.a({
                            childView: l
                        }), c.a.prototype.initialize.apply(this, [t])
                    },
                    displayAudienceChoice: function (t) {
                        var e = "";
                        if ("FinalRound" !== this.model.get("roundType")) {
                            var i = this.model.get("choices").find((function (e) {
                                return e.key === t[0]
                            }));
                            e = '<div class="chosenText">You have chosen<br>'.concat(i.html, "</div>")
                        }
                        return {
                            html: e
                        }
                    },
                    onChildviewChildviewButtonArtifact: function (t) {
                        var e = this.model.get("artifact"),
                            i = "games.jackbox.tv"; - 1 !== e.rootId.indexOf("test") && (i = "games-test.jackbox.tv");
                        var s = "https://".concat(i, "/artifact/").concat(e.categoryId, "/").concat(e.artifactId, "/");
                        this.triggerMethod("track:event", {
                            category: "PostGame",
                            action: "galleryClicked"
                        }), window.open(s, "_blank")
                    }
                }),
                u = i(31),
                f = i.n(u),
                m = i(457),
                g = i(978),
                v = i.n(g),
                b = m.a.extend({
                    defaults: {
                        mode: "normal",
                        showProgress: !0,
                        skin: "MemoryGrid",
                        prompt: {
                            text: ""
                        },
                        classes: ["MemoryGrid"],
                        grid: [
                            ["a", "b", "c"],
                            ["1", "2", "3"]
                        ],
                        error: ""
                    }
                }),
                x = f.a.View.extend({
                    template: o.a.template(v.a),
                    className: "Grid",
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: function (t) {
                                    return t.join(" ")
                                }
                            }]
                        },
                        ".prompt": {
                            observe: "prompt",
                            updateMethod: "html",
                            onGet: function (t) {
                                return t ? t.html ? t.html : n()("<div />").text(t.text).html() : "b"
                            }
                        },
                        ".error": {
                            observe: "error",
                            updateMethod: "html"
                        },
                        ".grid": {
                            observe: "grid",
                            updateMethod: "html",
                            onGet: function (t) {
                                var e = "";
                                return t.forEach((function (t, i) {
                                    e += '<div class="grid-row">', t.forEach((function (s, n) {
                                        var a = "";
                                        a = "Stab" === s.type || "Hide" === s.type ? "<button class='grid-contents' aria-label='".concat(s.type, "' data-y=").concat(i, " data-x=").concat(n, ">").concat(s.text, "</button>") : "<div class='grid-contents' aria-label='".concat(s.type, "' data-y=").concat(i, " data-x=").concat(n, ">").concat(s.text, "</div>"), e += "<div class='grid-cell grid-cell-".concat(t.length, " ").concat(s.type, "'>").concat(a, "</div>")
                                    })), e += "</div>"
                                })), e
                            }
                        },
                        ".instructions": {
                            updateMethod: "html",
                            observe: "instructions"
                        }
                    },
                    model: new b,
                    events: {
                        "click button.grid-contents": "cellClicked"
                    },
                    cellClicked: function (t) {
                        var e = t.target.dataset.x,
                            i = t.target.dataset.y;
                        this.triggerMethod("client:message", {
                            action: "click",
                            position: "".concat(i, "-").concat(e)
                        })
                    },
                    initialize: function (t) {},
                    onRender: function () {
                        this.stickit()
                    }
                }),
                y = i(511),
                w = i(979),
                M = i.n(w),
                k = m.a.extend({
                    defaults: {
                        choices: [],
                        classes: [],
                        isMarkedForDeath: !1
                    }
                }),
                C = {
                    width: 126,
                    height: 126,
                    color: "gray",
                    thickness: 10,
                    imageThickness: 0,
                    totalDistance: 0,
                    revealDistance: 400,
                    revealed: !1,
                    index: 0,
                    isMarkedForDeath: !1,
                    onDown: function () {
                        this.focused = !1
                    },
                    onOver: function () {
                        if (!this.isMarkedForDeath && this.drawing && this.focused) {
                            var t = this.lines[this.lines.length - 1];
                            if (t) {
                                var e = t[t.length - 1],
                                    i = {
                                        x: y.g.x - this.x,
                                        y: y.g.y - this.y
                                    };
                                t.push(i);
                                var s = i.x - e.x,
                                    n = i.y - e.y;
                                this.totalDistance += Math.sqrt(s * s + n * n), !this.revealed && this.totalDistance > this.revealDistance && (this.onRevealed(this.index), this.revealed = !0)
                            }
                        }
                    },
                    onUp: function () {
                        this.focused = !1
                    },
                    onRevealed: function () {},
                    update: function (t) {
                        this.lines || (this.lines = []), this.hiddenCanvas || (this.hiddenCanvas = document.createElement("canvas"), this.hiddenCanvas.width = this.width, this.hiddenCanvas.height = this.height), this.skullImage || (this.skullImage = document.getElementById("Skull")), this.dollarImage || (this.dollarImage = document.getElementById("Dollar")), this.revealed && (this.imageThickness = Math.min(this.imageThickness + 10 / 60, 2 * this.width)), this.isMarkedForDeath || (this.drawing = Object(y.i)("left"), this.drawing && !this.focused && Object(y.h)(this) && this.lines.push([{
                            x: y.g.x - this.x,
                            y: y.g.y - this.y
                        }]), this.focused = Object(y.h)(this))
                    },
                    render: function (t) {
                        if (this.hiddenCanvas) {
                            var e = this.hiddenCanvas.getContext("2d");
                            e.clearRect(0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height), e.save(), this.revealed && (e.globalCompositeOperation = "source-over", e.strokeStyle = "#BBBBBB", e.lineWidth = this.imageThickness, this.lines.forEach((function (t) {
                                e.beginPath(), e.moveTo(t[0].x, t[0].y), t.forEach((function (t) {
                                    e.lineTo(t.x, t.y)
                                })), e.stroke()
                            })), e.globalCompositeOperation = "source-in", "red" === this.color.toLowerCase() && this.skullImage ? e.drawImage(this.skullImage, 0, 0, this.width, this.height) : "green" === this.color.toLowerCase() && this.dollarImage && e.drawImage(this.dollarImage, 0, 0, this.width, this.height)), e.globalCompositeOperation = "destination-over", e.strokeStyle = "#BBBBBB", e.lineWidth = this.thickness, this.lines.forEach((function (t) {
                                e.beginPath(), e.moveTo(t[0].x, t[0].y), t.forEach((function (t) {
                                    e.lineTo(t.x, t.y)
                                })), e.stroke()
                            })), e.restore(), Object(y.d)().drawImage(this.hiddenCanvas, this.x, this.y)
                        }
                    }
                },
                I = f.a.View.extend({
                    template: o.a.template(M.a),
                    className: "Scratch",
                    model: new k,
                    events: {
                        "click .grid-cell": "cellClicked"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: function (t) {
                                    return t ? t.join(" ") : ""
                                }
                            }]
                        }
                    },
                    initialize: function (t) {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update: function () {
                        var t = this,
                            e = this.model.get("isMarkedForDeath");
                        this.model.get("choices").forEach((function (i, s) {
                            var n = t.sprites.find((function (t) {
                                return t.index === s
                            }));
                            n && (n.color = i.color, n.isMarkedForDeath = e)
                        }))
                    },
                    onRender: function () {
                        this.stickit()
                    },
                    sprites: [],
                    onBeforeDestroy: function () {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        for (var t = 0; t < this.sprites.length; t++) Object(y.k)(this.sprites[t]), this.sprites[t].ttl = 0;
                        this.gameLoop.update(1 / 60), this.gameLoop.stop()
                    },
                    onAttach: function () {
                        var t = this;
                        Object(y.e)("scratch"), Object(y.f)(), this.gameLoop = Object(y.a)({
                            fps: 60,
                            update: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.update(e)
                                })), t.sprites = t.sprites.filter((function (t) {
                                    return t.isAlive()
                                }))
                            },
                            render: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.render(e)
                                }))
                            }
                        });
                        for (var e = 0; e < 3; e++)
                            for (var i = 0; i < 3; i++) {
                                var s = Object(y.b)(C);
                                s.x = 117 + i * (s.width + 14), s.y = 372 + e * (s.height + 14), s.index = 3 * e + i, s.onRevealed = function (e) {
                                    t.triggerMethod("client:message", {
                                        action: "scratch",
                                        index: e
                                    })
                                }, Object(y.j)(s), t.sprites.push(s)
                            }
                        this.gameLoop.start(), this.update(), this.onResize()
                    },
                    onResize: function () {
                        var t = Object(y.c)(),
                            e = this.$el,
                            i = parseInt(n()(".playerTopBar").innerHeight(), 10),
                            s = t.width,
                            a = t.height,
                            o = Math.min(e.width(), s),
                            r = Math.max(n()(window).innerHeight() - i, 250),
                            c = Math.min(o / s, r / a),
                            h = s * c,
                            d = a * c;
                        t.style.width = "".concat(h, "px"), t.style.height = "".concat(d, "px")
                    }
                }),
                O = i(83),
                j = i(982),
                T = i.n(j),
                D = m.a.extend({
                    defaults: {
                        choices: [],
                        classes: [],
                        dialed: "",
                        status: null
                    }
                }),
                L = function (t) {
                    return t * (Math.PI / 180)
                },
                E = [0, .178, .424, .608, .735, .824, .888, .934, .965, .986, .997, 1, .997, .988, .973, .951, .921, .883, .836, .779, .712, .632, .54, .436, .322, .201, .087, 0, .015, .032, .049, .066, .083, .098, .112, .125, .136, .145, .151, .154, .151, .144, .134, .121, .106, .09, .072, .054, .035, .017, 0],
                R = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 486,
                    width: 825,
                    height: 972,
                    color: "#333333",
                    update: function (t) {
                        this.image || (this.image = document.getElementById("numberPlate")), this.advance(t)
                    }
                },
                B = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 485,
                    width: 700,
                    height: 700,
                    color: "red",
                    rotationSpeed: L(300) / 60,
                    bounceFrame: 0,
                    onDown: function (t) {
                        if (!(this.rotation > 0 || this.bounceFrame > 0)) {
                            var e = {
                                    x: y.g.x - this.x,
                                    y: y.g.y - this.y
                                },
                                i = Math.atan2(e.y, e.x);
                            i = i < 0 ? Math.abs(i) : 2 * Math.PI - i;
                            var s = Math.floor(i / L(30));
                            0 !== s && 11 !== s && (this.startAngle = i, this.maxRotation = (s + 1) * L(30), this.currentDigit = s, this.selected = !0)
                        }
                    },
                    onUp: function (t) {
                        if (this.selected) {
                            this.selected = !1;
                            var e = Math.floor(this.rotation / L(30));
                            0 === e && (this.bounceFrame = E.length - 1), 0 !== e && 11 !== e && (10 === e && (e = 0), this.dialNumber(e))
                        }
                    },
                    dialNumber: function (t) {},
                    update: function (t) {
                        if (this.image || (this.image = document.getElementById("fingerWheel")), this.selected) {
                            var e = {
                                    x: y.g.x - this.x,
                                    y: y.g.y - this.y
                                },
                                i = Math.atan2(e.y, e.x);
                            i = i < 0 ? Math.abs(i) : 2 * Math.PI - i, this.pointAngle = i;
                            var s = this.startAngle - i;
                            s < 0 && (s += 2 * Math.PI), s > 0 && s < this.maxRotation && (this.rotation = s)
                        }
                        if (this.selected && !Object(y.i)("left") && this.onUp(), this.selected || (this.rotation -= this.rotationSpeed, this.rotation = Math.max(0, this.rotation)), this.bounceFrame > 0) {
                            var n = E.length - 1 - this.bounceFrame;
                            this.rotation = L(13 * E[n]), this.bounceFrame += -1
                        }
                        this.advance(t)
                    }
                },
                z = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 485,
                    width: 700,
                    height: 700,
                    color: "gray",
                    update: function (t) {
                        this.image || (this.image = document.getElementById("fingerStop")), this.advance(t)
                    }
                },
                G = {
                    y: 75,
                    type: "dialed",
                    val: "",
                    status: !1,
                    flashFrames: 0,
                    flash: !0,
                    update: function (t) {
                        this.status ? (this.flashFrames += -1, this.flashFrames < 0 && (this.flash = !this.flash, this.flashFrames = 20)) : this.flash = !1, this.advance(t)
                    },
                    render: function (t) {
                        if (!this.flash) {
                            var e = this.status || this.val,
                                i = Object(y.d)();
                            i.save(), i.font = "48px nokian11regular", i.fillStyle = "#6b8d45", i.textAlign = "center", i.fillText(e, .5 * Object(y.c)().width + 1, this.y + 2), i.fillStyle = "#1c3c29", i.textAlign = "center", i.fillText(e, .5 * Object(y.c)().width, this.y), i.restore()
                        }
                    }
                },
                P = f.a.View.extend({
                    template: o.a.template(T.a),
                    className: "Dial",
                    model: new D,
                    events: {
                        "click #reset": "sendHangup"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: function (t) {
                                    return t ? t.join(" ") : ""
                                }
                            }]
                        }
                    },
                    initialize: function (t) {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update: function () {
                        var t = this.sprites.find((function (t) {
                                return "dialed" === t.type
                            })),
                            e = this.model.get("dialed"),
                            i = this.model.get("status") || "";
                        "busy" === i.toLowerCase() && (i = "NUMBER BUSY"), "connected" === i.toLowerCase() && (i = "CONNECTED"), "wrongnumber" === i.toLowerCase() && (i = "WRONG NUMBER"), t && (t.val = e, t.status = i)
                    },
                    onRender: function () {
                        this.stickit()
                    },
                    sprites: [],
                    onBeforeDestroy: function () {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        for (var t = 0; t < this.sprites.length; t++) this.sprites[t].ttl = 0;
                        this.gameLoop.update(1 / 60), this.gameLoop.stop()
                    },
                    sendHangup: function () {
                        this.triggerMethod("client:message", {
                            action: "hangup"
                        }), this.sprites.find((function (t) {
                            return "dialed" === t.type
                        })).val = "", n()(".reset").blur()
                    },
                    onAttach: function () {
                        var t = this;
                        Object(y.e)("phone"), Object(y.f)(), this.gameLoop = Object(y.a)({
                            fps: 60,
                            update: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.update(e)
                                })), t.sprites = t.sprites.filter((function (t) {
                                    return t.isAlive()
                                }))
                            },
                            render: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.render(e)
                                }))
                            }
                        });
                        var e = Object(y.b)(R);
                        t.sprites.push(e);
                        var i = Object(y.b)(B);
                        i.dialNumber = function (e) {
                            for (var i = [], s = e || 10, n = 0; n < s && !(n > 10); n++) i.push(20), i.push(120);
                            O.a.vibrate(i), t.triggerMethod("client:message", {
                                action: "dial",
                                num: e
                            }), t.sprites.find((function (t) {
                                return "dialed" === t.type
                            })).val += e
                        }, Object(y.j)(i), t.sprites.push(i);
                        var s = Object(y.b)(z);
                        t.sprites.push(s);
                        var n = Object(y.b)(G);
                        t.sprites.push(n), this.gameLoop.start(), Object(y.c)().addEventListener("mouseleave", (function (t) {
                            i.onUp(t)
                        })), this.update(), this.onResize()
                    },
                    onResize: function () {
                        var t = Object(y.c)(),
                            e = this.$el,
                            i = parseInt(n()(".playerTopBar").innerHeight() + n()(".button.reset").innerHeight() + 10, 10),
                            s = t.width,
                            a = t.height,
                            o = Math.min(e.width(), s),
                            r = Math.max(n()(window).innerHeight() - i, 250),
                            c = Math.min(o / s, r / a),
                            h = s * c,
                            d = a * c;
                        t.style.width = "".concat(h, "px"), t.style.height = "".concat(d, "px")
                    }
                }),
                S = i(986),
                A = i.n(S),
                F = m.a.extend({
                    defaults: {
                        classes: []
                    }
                }),
                N = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    width: 128,
                    height: 128,
                    x: 320,
                    y: 64,
                    color: "white",
                    dropped: function () {},
                    isDropped: !1,
                    update: function (t) {
                        this.selected && !Object(y.i)("left") && this.onUp(), !this.isDropped && Object(y.i)("left") && (this.x = Math.max(64, Math.min(Object(y.c)().width - 64, y.g.x)), this.selected = !0), this.dollColor && !this.image && (this.image = document.getElementById("Chip".concat(this.dollColor))), this.advance(t)
                    },
                    onUp: function (t) {
                        this.selected && (this.selected = !1, this.ddy = 540, this.isDropped = !0, this.dropped())
                    },
                    render: function (t) {
                        if (this.draw(), !this.isDropped) {
                            var e = Object(y.d)();
                            e.save(), e.translate(this.x, this.y + 64), e.fillStyle = this.color, e.beginPath(), e.moveTo(-1 / 6 * this.width, 0), e.lineTo(1 / 6 * this.width, 0), e.lineTo(0, 1 / 6 * 128), e.fill(), e.restore()
                        }
                    }
                },
                W = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    width: 128,
                    height: 20,
                    color: "black"
                },
                U = f.a.View.extend({
                    template: o.a.template(A.a),
                    className: "Drop",
                    model: new F,
                    events: {
                        "click .grid-cell": "cellClicked"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: function (t) {
                                    return t ? t.join(" ") : ""
                                }
                            }]
                        }
                    },
                    initialize: function (t) {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update: function () {},
                    onRender: function () {
                        this.stickit()
                    },
                    sprites: [],
                    played: [],
                    onBeforeDestroy: function () {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        for (var t = 0; t < this.sprites.length; t++) this.sprites[t].ttl = 0;
                        this.gameLoop.update(1 / 60), this.gameLoop.stop()
                    },
                    onAttach: function () {
                        var t = this;
                        Object(y.e)("drop"), Object(y.f)(), t.played = [], this.gameLoop = Object(y.a)({
                            fps: 60,
                            update: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.update(e)
                                })), t.sprites = t.sprites.filter((function (t) {
                                    return t.isAlive()
                                }))
                            },
                            render: function (e) {
                                t.sprites.forEach((function (t) {
                                    return t.render(e)
                                }))
                            }
                        });
                        for (var e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        var i = Object(y.b)(W);
                        i.x = .5 * Object(y.c)().width, i.y = 64, i.width = Object(y.c)().width - 128, t.sprites.push(i);
                        var s = Object(y.b)(N);
                        this.model.get("dollInfo") && (s.dollColor = this.model.get("dollInfo").id), s.dropped = function () {
                            var e = Object(y.c)().width - 64 - 64,
                                i = Math.floor((s.x - 64) / e * 100);
                            i = Math.max(0, Math.min(100, i)), t.triggerMethod("client:message", {
                                action: "drop",
                                value: i
                            })
                        }, t.sprites.push(s), t.gameLoop.start(), Object(y.c)().addEventListener("mouseleave", (function (t) {
                            s.onUp(t)
                        })), this.onResize()
                    },
                    onResize: function () {
                        var t = document.getElementById("drop"),
                            e = this.$el,
                            i = parseInt(n()(".playerTopBar").innerHeight(), 10),
                            s = t.width,
                            a = t.height,
                            o = Math.min(e.width(), s),
                            r = Math.max(n()(window).innerHeight() - i, 250),
                            c = Math.min(o / s, r / a),
                            h = s * c,
                            d = a * c;
                        t.style.width = "".concat(h, "px"), t.style.height = "".concat(d, "px")
                    }
                }),
                H = (i(995), function (t) {
                    for (var e = t || "", i = e.replace(/\s/gi, "").split(""), s = i.length; s > 0; s--) {
                        var n = Math.floor(Math.random() * (s + 1)),
                            a = i[s];
                        i[s] = i[n], i[n] = a
                    }
                    for (var o = 0; o < e.length; o++) " " === e.charAt(o) && i.splice(o, 0, " ");
                    return i.join("")
                }),
                V = r.a.extend({
                    sessionModulePrefix: "TriviaDeath2",
                    getGameLayout: function (t) {
                        switch (t) {
                            case "MakeSingleChoice":
                                return this.setLayout(p);
                            case "Grid":
                                return this.setLayout(x);
                            case "Scratch":
                                return this.setLayout(I);
                            case "Dial":
                                return this.setLayout(P);
                            case "Drop":
                                return this.setLayout(U);
                            default:
                                return -1
                        }
                    },
                    isPostGameLobby: function (t) {
                        return "What do you want to do?" === t.prompt.html
                    },
                    parseBlob: function (t) {
                        var e = t;
                        if (e.classes = e.classes || [], e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.isAudience && (e.playerInfo.username = "AUDIENCE", e.dollInfo = {
                                id: "Audience"
                            }), e.roundType && e.classes.push(e.roundType), e.dollInfo && e.dollInfo.id && (-1 === e.classes.indexOf(e.dollInfo.id) && e.classes.push(e.dollInfo.id), -1 === e.playerInfo.classes.indexOf(e.dollInfo.id) && e.playerInfo.classes.push(e.dollInfo.id)), "Gameplay" === e.state && (e.state = "Logo"), "MakeSingleChoice" === e.state) {
                            if (e.isAudience && (e.doneText = {
                                    html: null
                                }, e.prompt && "Guess who will die and win money!" === e.prompt.html && (e.choiceId = "whowilldie")), e.isPlayer && void 0 !== e.chosen && null == e.doneText ? e.state = "Logo" : o.a.isEmpty(e.doneText) || null === e.doneText.html || (e.chosen = {
                                    html: '<div class="chosenText">'.concat(e.doneText.html, "</div>")
                                }, delete e.doneText), e.madness) {
                                if ("Choices" === e.madness) {
                                    e.choices = e.choices || [], e.choices = e.choices.map((function (t, e) {
                                        var i = t;
                                        return i.key = i.key || e, i
                                    }));
                                    for (var i = 1; i < 11; i++) e.choices.unshift({
                                        text: "I'm not Crazy!",
                                        index: -i,
                                        key: -i,
                                        action: "choose"
                                    })
                                }
                                if ("Scramble" === e.madness || "NowThatsWhatICallMadness" === e.madness) {
                                    var s = e.prompt.text || e.prompt.html;
                                    s = n()("<div />").html(s).text(), e.prompt.html = H(s), e.choices = e.choices.map((function (t) {
                                        var e = t;
                                        return e.text = H(t.text), e
                                    }))
                                }
                                if ("BTTF" === e.madness || "NowThatsWhatICallMadness" === e.madness) {
                                    var a = e.prompt.text || e.prompt.html;
                                    a = n()("<div />").html(a).text();
                                    for (var r = "", c = 0; c < a.length; c++) {
                                        var h = Math.floor(5 * Math.random());
                                        r += '<span class="disappear-'.concat(h, '">'), r += a[c], r += "</span>"
                                    }
                                    e.prompt = {
                                        html: r
                                    }, e.choices = e.choices.map((function (t) {
                                        var e, i = t;
                                        if (i.text) {
                                            e = i.text;
                                            for (var s = "", n = 0; n < e.length; n++) {
                                                var a = Math.floor(5 * Math.random());
                                                s += '<span class="disappear-'.concat(a, '">'), s += e[n], s += "</span>"
                                            }
                                            i.html = s, i.text = void 0
                                        }
                                        return i
                                    }))
                                }
                                e.classes.push(e.madness)
                            }
                            if (this.isPostGameLobby(e) && e.artifact && e.choices.push({
                                    action: "artifact",
                                    html: "",
                                    className: "artifactButton"
                                }), "Math" === e.choiceType) {
                                var d = e.prompt.html,
                                    l = d.match(/[0-9]+/g);
                                if (l) {
                                    var p = d.match(/[+-/*]/);
                                    if (p) {
                                        var u = p[0],
                                            f = "";
                                        "+" === u ? f = " plus " : "-" === u ? f = " minus " : "*" === u ? f = " multiplied by " : "/" === u && (f = " divided by ");
                                        var m = l[0] + f + l[1],
                                            g = "";
                                        g += '<span aria-hidden="true">'.concat(d, "</span>"), g += '<span class="textDescriptions">'.concat(m, "</span>"), e.prompt.html = g, e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                                            id: e.choiceId,
                                            category: "Prompt",
                                            text: m
                                        })
                                    }
                                }
                            }
                            "Rules" === e.choiceType && (e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                                id: e.choiceId,
                                category: "Prompt",
                                text: e.prompt.html
                            }))
                        }
                        return e
                    }
                })
        },
        978: function (t, e) {
            t.exports = '<div id="prompt" class="prompt">prompt</div>\n<div id="grid" class="grid">grid</div>\n<div id="error" class="error"></div>\n<div id="instructions" class="instructions"></div>\n'
        },
        979: function (t, e, i) {
            t.exports = '<div>\n    <canvas id="scratch" class="canvas scratch" width=640 height=880></canvas>\n    <div class="visuallyhidden">\n        <img id="Skull" src="' + i(980) + '"/>\n        <img id="Dollar" src="' + i(981) + '"/>\n    </div>\n</div>'
        },
        980: function (t, e, i) {
            t.exports = i.p + "images/0aaa55a0bdf2657623f4369aed2a34aa.png"
        },
        981: function (t, e, i) {
            t.exports = i.p + "images/6a37c9056cce94b70970f49a996023f5.png"
        },
        982: function (t, e, i) {
            t.exports = '<div>\n    <canvas id="phone" class="canvas phone" width=825 height=972></canvas>\n    <button id="reset" class="button reset">Reset</button>\n    <div class="visuallyhidden">\n        <img id="fingerStop" src="' + i(983) + '"/>\n        <img id="fingerWheel" src="' + i(984) + '"/>\n        <img id="numberPlate" src="' + i(985) + '"/>\n    </div>\n</div>'
        },
        983: function (t, e, i) {
            t.exports = i.p + "images/ccb5a066961002263f260fc1809e0edf.png"
        },
        984: function (t, e, i) {
            t.exports = i.p + "images/430fd34afc03956ab16f37e62beda240.png"
        },
        985: function (t, e, i) {
            t.exports = i.p + "images/31e5db43363668d7dc0156e9fb957b4d.png"
        },
        986: function (t, e, i) {
            t.exports = '<div>\n    <div class="prompt">Slide your chip to pick a spot to drop.</div>\n    <canvas id="drop" class="canvas drop" width=640 height=640></canvas>\n    <div class="visuallyhidden">\n        <img id="ChipGreen" src=\'' + i(987) + "'/>\n        <img id=\"ChipPurple\" src='" + i(988) + "'/>\n        <img id=\"ChipBlue\" src='" + i(989) + "'/>\n        <img id=\"ChipGray\" src='" + i(990) + "'/>\n        <img id=\"ChipYellow\" src='" + i(991) + "'/>\n        <img id=\"ChipOrange\" src='" + i(992) + "'/>\n        <img id=\"ChipRed\" src='" + i(993) + "'/>\n        <img id=\"ChipPink\" src='" + i(994) + "'/>\n    </div>\n</div>"
        },
        987: function (t, e, i) {
            t.exports = i.p + "images/ac2c074701089ba2fca212380a42b160.png"
        },
        988: function (t, e, i) {
            t.exports = i.p + "images/780391f970406a3cd8ebad624263a10e.png"
        },
        989: function (t, e, i) {
            t.exports = i.p + "images/a512e722f9e3bba153e15ad76ef32a3b.png"
        },
        990: function (t, e, i) {
            t.exports = i.p + "images/7a8045d1590a1984518ee8f3addd4da0.png"
        },
        991: function (t, e, i) {
            t.exports = i.p + "images/f21197353bdf414b5e7b863604163977.png"
        },
        992: function (t, e, i) {
            t.exports = i.p + "images/d1398a035dd79e21563b299db607bb06.png"
        },
        993: function (t, e, i) {
            t.exports = i.p + "images/172b935bb655a5a351b927f4c59f136c.png"
        },
        994: function (t, e, i) {
            t.exports = i.p + "images/c71a70289130b0a25ad175aaf4a796f0.png"
        },
        995: function (t, e, i) {}
    }
]);
//# sourceMappingURL=10.976c2025e8ca9bd0ca5f.js.map