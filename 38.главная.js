(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        2825: function (e, t, n) {
            e.exports = '<div id="page-signin" class="page white">\n    <header class="jbg-navbar">\n        <div class="container">\n            <div class="jbg-menu-button"></div>\n            <img alt="jackbox.tv" class="jbg-top-logo img-responsive" src=' + n(2826) + ' />\n        </div>\n    </header>\n\n    <nav class=\'jbg-menu-container\'>\n        <ul class="drawer-menu">\n            <li>\n                <a class="twitch-connect" href="#">\n                    <i class="fa fa-twitch fa-lg"></i><%=STRING_MENU_TWITCH%>\n                </a>\n            </li>\n            <li>\n                <a class="twitch-logout" style="display:none" href="#">\n                    <i class="fa fa-twitch fa-lg"></i><%=STRING_MENU_LOGOUT%>\n                </a>\n            </li>\n            <li>\n                <a data-link=\'help\' class="button-help external-link" href="#" aria-label="help" role="button"><%=STRING_MENU_HELP%></a>\n            </li>\n            <li>\n                <a data-link=\'merch\' class="external-link button-merch" href="#"><%=STRING_MENU_MERCH%></a>\n            </li>\n            <li>\n                <a class="button-past-games" href="#"><%=STRING_MENU_PAST_GAMES%></a>\n            </li>\n            <li>\n                <a data-link=\'mailinglist\' class="external-link button-mailing-list" href="#"><%=STRING_MENU_MAILING_LIST%></a>\n            </li>\n            <li>\n                <a aria-label="facebook" data-link=\'facebook\' class="external-link social-button social-facebook button-merch"\n                    href="#"></a>\n                <a aria-label="twitter" data-link=\'twitter\' class="external-link social-button social-twitter button-merch"\n                    href="#"></a>\n                <a aria-label="instagram" data-link=\'instagram\' class="external-link social-button social-instagram button-merch"\n                    href="#"></a>\n            </li>\n            <li class="version">\n                <span class="drawer-menu-version"></span>\n            </li>\n        </ul>\n    </nav>\n\n    <div class=\'jbg-past-games\'>\n        <div id=\'galleries-region\'></div>\n    </div>\n\n    <div class="signin-container">\n        <div id="jbg_form_container" role="main">\n            <form id="jbg_form" class="" autocomplete="off">\n                <fieldset class="signin-fieldset">\n                    <div class="form-group RoomCode">\n                        <label for="roomcode" class="text-signin">\n                            <%=STRING_ROOMCODE%>\n                        </label>\n                        <input name="roomcode" id="roomcode" class="form-control jbg-input" type="text" tabindex="0"\n                            placeholder="<%=STRING_ROOMCODE_PLACEHOLDER%>" style="text-transform:uppercase;" maxlength="4"\n                            value="" autocapitalize="off" autocorrect="off" autocomplete="off">\n                        <div id="cameraWarning" class="signinWarning cameraWarning" style="display:none;">\n                            <%=STRING_CAMERA_WARNING%>\n                        </div>\n                        <div id="styleWarning" class="signinWarning styleWarning" style="display:none;">\n                            <%=STRING_STYLE_WARNING%>\n                        </div>\n                    </div>\n                    <div class="form-group Name">\n                        <label for="username" class="text-signin">\n                            <%=STRING_NAME%><span class="name-char-remaining pull-right">12</span></label>\n                        <input name="name" id="username" class="form-control jbg-input" type="text" placeholder="<%=STRING_NAME_PLACEHOLDER%>"\n                            style="text-transform:uppercase;" maxlength="12" value="" autocapitalize="off" autocorrect="off"\n                            autocomplete="off">\n                    </div>\n                    <div class="col-xs-12 text-center">\n                        <button type="submit" id="button-join" class="button-signin button-blue">\n                            <div class="play-text">\n                                <%=STRING_PLAY%>\n                            </div>\n                            <div class="lds-ring" style="display:none;">\n                                <div></div>\n                                <div></div>\n                                <div></div>\n                                <div></div>\n                            </div>\n                        </button>\n\n                    </div>\n                    <input id="password" name="password" type="hidden">\n                </fieldset>\n            </form>\n        </div>\n\n        <div id="tos-warning" class="tosText small text-center" role="complementary">\n            <%=STRING_TOS_WARNING%>\n        </div>\n\n        <div class="slick">\n            <div id="banners-region" class="banners" data-glide-el="track"></div>\n        </div>\n\n        <div class="jbg-bottom-logo-div">\n            <img alt="TDoT Logo" class="jbg-bottom-logo" src=' + n(2827) + " />\n        </div>\n    </div>\n\n    <canvas class=\"canvas-compatibility\" width='1' height='1' style='background-color:white;' role=\"complementary\">\n        <%=STRING_CANVAS_COMPATIBILITY%>\n    </canvas>\n    \n    <script>\n        var modernBrowser = 'fetch' in window && 'assign' in Object\n        if (!modernBrowser) {\n            var scriptElement2 = document.createElement('script')\n            scriptElement2.async = false\n            scriptElement2.src = 'https://data.jsdelivr.com/v1/package/npm/whatwg-fetch/badges'\n            document.head.appendChild(scriptElement2)\n        }\n    <\/script>\n</div>"
        },
        2826: function (e, t, n) {
            e.exports = n.p + "images/305a6bead23c9339b6e18d1a1bb83360.svg"
        },
        2827: function (e, t, n) {
            e.exports = n.p + "images/c529041c741e5f7727f063bc49f74e00.svg"
        },
        2831: function (e, t, n) {
            e.exports = n.p + "images/f4fc5d783babfa0910ff15362db66990.png"
        },
        2871: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SignInView", (function () {
                return f
            }));
            var a = n(17),
                o = n.n(a),
                i = n(22),
                r = n.n(i),
                s = n(41),
                l = n.n(s),
                c = n(31),
                R = n.n(c),
                E = n(191),
                _ = n(83),
                u = n(178),
                d = n.n(u),
                N = n(3);

            function I(e, t, n, a, o, i, r) {
                try {
                    var s = e[i](r),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, o)
            }

            function O(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if (!(Symbol.iterator in Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return;
                    var n = [],
                        a = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(a = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); a = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            a || null == s.return || s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function T(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var S = function () {
                    function e() {
                        var t, n, a;
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), a = null, (n = "user") in (t = this) ? Object.defineProperty(t, n, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = a, E.storage.isSupported ? "#access_token" === document.location.hash.substr(0, 13) && this.processRedirect(document.location.hash) : console.warn("Twitch Login requires local storage")
                    }
                    var t, n, a, o, i;
                    return t = e, (n = [{
                        key: "prepare",
                        value: function () {
                            if (E.storage.isSupported) return N.a.debug && console.log("[Twitch] prepare"), E.storage.get("token") ? this.fetchUser() : null
                        }
                    }, {
                        key: "login",
                        value: function (e) {
                            if (E.storage.isSupported) {
                                N.a.debug && console.log("[Twitch] login", e), e = e || {};
                                var t = d()();
                                E.storage.set("state", t);
                                var n = N.a.twitchClientID,
                                    a = e.redirect_uri || "https://" + window.location.hostname;
                                "localhost" === window.location.hostname && (a = "http://localhost:9090/"), N.a.debug && console.log("redirect_uri", a);
                                var o = "https://id.twitch.tv/oauth2/authorize";
                                o += "?client_id=".concat(n), o += "&redirect_uri=".concat(a), o += "&response_type=token", o += "&scope=user:read:email", o += "&state=".concat(t), window.location = o
                            }
                        }
                    }, {
                        key: "logout",
                        value: function () {
                            E.storage.isSupported && (N.a.debug && console.log("[Twitch] logout"), this.user = null, E.storage.remove("token"))
                        }
                    }, {
                        key: "processRedirect",
                        value: function (e) {
                            if (E.storage.isSupported) {
                                N.a.debug && console.log("[Twitch] processRedirect", e);
                                var t = E.storage.get("state");
                                t || _.a.show(Error("Twitch - Could not find the expected state"));
                                for (var n = e.substr(1).split("&"), a = {}, o = 0; o < n.length; o++) {
                                    var i = O(n[o].split("="), 2),
                                        r = i[0],
                                        s = i[1];
                                    a[r] = s
                                }
                                a.state !== t && _.a.show(Error("Twitch - State parameter doesn't match the expected state")), E.storage.set("token", a.access_token), E.storage.remove("state"), window.history.replaceState({}, document.title, "/")
                            }
                        }
                    }, {
                        key: "fetchUser",
                        value: (o = regeneratorRuntime.mark((function e() {
                            var t, n, a, o;
                            return regeneratorRuntime.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (E.storage.isSupported) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 2:
                                        return t = E.storage.get("token"), e.next = 5, fetch("https://api.twitch.tv/helix/users", {
                                            headers: {
                                                Authorization: "Bearer ".concat(t),
                                                "Client-ID": N.a.twitchClientID
                                            }
                                        });
                                    case 5:
                                        return n = e.sent, e.prev = 6, e.next = 9, n.json();
                                    case 9:
                                        if ((a = e.sent) && a.data) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 12:
                                        return (o = a.data[0]).token = t, this.user = o, e.abrupt("return", this.user);
                                    case 18:
                                        return e.prev = 18, e.t0 = e.catch(6), console.warn(e.t0), e.abrupt("return", null);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [6, 18]
                            ])
                        })), i = function () {
                            var e = this,
                                t = arguments;
                            return new Promise((function (n, a) {
                                var i = o.apply(e, t);

                                function r(e) {
                                    I(i, n, a, r, s, "next", e)
                                }

                                function s(e) {
                                    I(i, n, a, r, s, "throw", e)
                                }
                                r(void 0)
                            }))
                        }, function () {
                            return i.apply(this, arguments)
                        })
                    }]) && T(t.prototype, n), a && T(t, a), e
                }(),
                m = n(47),
                p = n(57),
                g = {
                    ru: {
                        LANGUAGE_NAME: "Русский",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "Язык",
                        LOGIN: "Логин",
                        STRING_ROOMCODE: "КОД КОМНАТЫ",
                        STRING_ROOMCODE_PLACEHOLDER: "ВВЕДИТЕ 4-БУКВЕННЫЙ КОД",
                        STRING_CAMERA_WARNING: "<strong>ПРЕДУПРЕЖДЕНИЕ:</strong> Мы не обнаружили камеру, но вы все равно можете играть. Если вам кажется что она должна работать, попробуйте другой браузер.",
                        STRING_STYLE_WARNING: "<strong>ПРЕДУПРЕЖДЕНИЕ:</strong> Ваш браузер чуть устарел, и у него возможно будут проблемы с отображением этой игры.",
                        STRING_NAME: "ВВЕДИТЕ НИК",
                        STRING_NAME_PLACEHOLDER: "ВВЕДИТЕ ВАШ НИК",
                        STRING_PLAY: "ИГРАТЬ",
                        STRING_TOS_WARNING: "Нажимая ИГРАТЬ, вы подтверждаете <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>условия пользования</a><br> Какие игры поддерживает <a class='tosLink' href='https://vk.com/topic-196409248_46581204' target='_blank'>сайт?</a>",
                        STRING_CANVAS_COMPATIBILITY: "К сожалению, ваш браузер не поддерживается.",
                        STRING_MENU_HELP: "ПОМОЩЬ",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " ВЫЙТИ",
                        STRING_MENU_MERCH: "ПРОДУКЦИЯ",
                        STRING_MENU_PAST_GAMES: "ПРОШЛЫЕ ИГРЫ",
                        STRING_MENU_MAILING_LIST: "РАССЫЛКА",
                        ERROR_UNSUPPORTED_BROWSER: "Эта игра не поддерживается в этом браузере. Смотрите ПОМОЩЬ, чтобы увидеть список совместимых браузеров.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "WebSockets не поддерживается в вашем браузере.",
                        ERROR_ROOM_FULL: "Комната уже полна",
                        ERROR_INVALID_ROOMCODE: "Неправильный код комнаты",
                        ERROR_UNABLE_TO_CONNECT: "Невозможно подключиться к серверу Jackbox Games. Это, как правило, вызвано рекламными блокировщиками.",
                        ERROR_GAME_LOCKED: "Игра уже идет. Пожалуйста, подождите, пока начнется новая игра.",
                        AD_AVAILABLE_NOW: "Available Now!",
                        AD_ON_SALE: "On Sale!",
                        STRING_PASSWORD_REQUIRED_TITLE: "Требуется пароль",
                        STRING_PASSWORD_REQUIRED_BODY: "Пожалуйста, введите пароль или присоединяйтесь как зритель",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Присоединиться в роли игрока",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Присоединиться в роли зрителя",
                        STRING_ERROR_SERVER_ERROR: "Невозможность подключиться к комнате из-за ошибки сервера.",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Разъединено",
                        STRING_ERROR_TWITCH_COOKIES: "Для входа с помощью Twitch необходимы файлы cookie.",
                        STRING_ERROR_GAME_UNSUPPORTED: "Эта игра не поддерживается вашим браузером.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Требуется вход через Twitch",
                        STRING_ERROR_ROOM_NOT_FOUND: "Комната не найдена",
                        STRING_ERROR_INVALID_APP_ID: "Неправильный app id для комнаты: ",
                        STRING_ERROR_ROOM_IS_FULL: "Комната уже полна",
                        STRING_ERROR_ROOM_IS_LOCKED: "Комната заблокирована",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "Спасибо за игру!",
                        STRING_ERROR_INCORRECT_PASSWORD: "Неверный пароль",
                        STRING_ERROR_GENERIC: "Ошибка входа в комнату",
                        STRING_ERROR_TITLE: "Ошибка",
                        STRING_ERROR_CONNECTION: "Ошибка подключения",
                        STRING_ERROR_SERVER_DISCONNECTED: "Вы были разъединены."
                    },
                    en: {
                        LANGUAGE_NAME: "English",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "Language",
                        LOGIN: "Login",
                        STRING_ROOMCODE: "ROOM CODE",
                        STRING_ROOMCODE_PLACEHOLDER: "ENTER 4-LETTER CODE",
                        STRING_CAMERA_WARNING: "<strong>HEADS UP:</strong> We’re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
                        STRING_STYLE_WARNING: "<strong>HEADS UP:</strong> Your browser seems a bit outdated, and will have some issues displaying this game.",
                        STRING_NAME: "NAME",
                        STRING_NAME_PLACEHOLDER: "ENTER YOUR NAME",
                        STRING_PLAY: "PLAY",
                        STRING_TOS_WARNING: "By clicking PLAY, you agree to our <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>Terms of Service</a>",
                        STRING_CANVAS_COMPATIBILITY: "Sorry, your browser is not supported.",
                        STRING_MENU_HELP: "HELP",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " LOGOUT",
                        STRING_MENU_MERCH: "MERCH",
                        STRING_MENU_PAST_GAMES: "PAST GAMES",
                        STRING_MENU_MAILING_LIST: "MAILING LIST",
                        ERROR_UNSUPPORTED_BROWSER: "This game is not supported on this browser.  View '?' or HELP to see a list of compatible browsers.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "WebSockets are not supported on your browser.",
                        ERROR_ROOM_FULL: "The room is full",
                        ERROR_INVALID_ROOMCODE: "Invalid Room Code",
                        ERROR_UNABLE_TO_CONNECT: "Unable to connect to the Jackbox Games server. This is commonly caused by adblockers or privacy extensions.",
                        ERROR_GAME_LOCKED: "Game is in progress. Please wait for a new game to start.",
                        AD_AVAILABLE_NOW: "Available Now!",
                        AD_ON_SALE: "On Sale!",
                        STRING_PASSWORD_REQUIRED_TITLE: "Password required",
                        STRING_PASSWORD_REQUIRED_BODY: "Please enter the password or join as an audience member",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Join as Player",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Join as Audience",
                        STRING_ERROR_SERVER_ERROR: "Unable to join a room due to a server error",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnected",
                        STRING_ERROR_TWITCH_COOKIES: "Cookies are required to log in with Twitch",
                        STRING_ERROR_GAME_UNSUPPORTED: "This game is not supported on this browser.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Room requires Twitch login",
                        STRING_ERROR_ROOM_NOT_FOUND: "Room not found",
                        STRING_ERROR_INVALID_APP_ID: "Invalid app id for room: ",
                        STRING_ERROR_ROOM_IS_FULL: "Room is full",
                        STRING_ERROR_ROOM_IS_LOCKED: "Room is locked",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "Thanks for playing!",
                        STRING_ERROR_INCORRECT_PASSWORD: "Incorrect password",
                        STRING_ERROR_GENERIC: "Error joining this room",
                        STRING_ERROR_TITLE: "Error",
                        STRING_ERROR_CONNECTION: "Connection error",
                        STRING_ERROR_SERVER_DISCONNECTED: "You have been disconnected."
                    },
                    fr: {
                        LANGUAGE_NAME: "Français",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "Langue",
                        LOGIN: "Connexion",
                        STRING_ROOMCODE: "CODE DE SALLE",
                        STRING_ROOMCODE_PLACEHOLDER: "TAPEZ CODE 4 LETTRES",
                        STRING_CAMERA_WARNING: "<strong>ATTENTION :</strong> nous ne détectons aucune caméra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
                        STRING_STYLE_WARNING: "<strong>ATTENTION :</strong> votre navigateur semble être obsolète. Vous risquez de rencontrer des problèmes d'affichage avec ce jeu.",
                        STRING_NAME: "NOM",
                        STRING_NAME_PLACEHOLDER: "INDIQUEZ VOTRE NOM",
                        STRING_PLAY: "JOUER",
                        STRING_TOS_WARNING: "En cliquant sur JOUER, vous acceptez nos <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>Conditions de service</a>.",
                        STRING_CANVAS_COMPATIBILITY: "Désolé, votre navigateur n'est pas compatible.",
                        STRING_MENU_HELP: "AIDE",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " DÉCONNEXION",
                        STRING_MENU_MERCH: "MERCH",
                        STRING_MENU_PAST_GAMES: "ANCIENS JEU",
                        STRING_MENU_MAILING_LIST: "LISTE DE DIFFUSION",
                        ERROR_UNSUPPORTED_BROWSER: "Ce jeu n'est pas compatible avec votre navigateur. Allez sur '?' ou sur AIDE pour afficher une liste des navigateurs compatibles.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "Votre navigateur n'est pas compatible avec les WebSockets.",
                        ERROR_ROOM_FULL: "La salle est pleine",
                        ERROR_INVALID_ROOMCODE: "Code de salle incorrect",
                        ERROR_UNABLE_TO_CONNECT: "Impossible de se connecter au serveur Jackbox Games. Les bloqueurs de publicité ou les modules de protection de la confidentialité sont généralement à l'origine de ce problème.",
                        ERROR_GAME_LOCKED: "Partie déjà en cours. Attendez qu'une nouvelle partie commence.",
                        AD_AVAILABLE_NOW: "Disponible !",
                        AD_ON_SALE: "En promotion !",
                        STRING_PASSWORD_REQUIRED_TITLE: "Mot de passe requis",
                        STRING_PASSWORD_REQUIRED_BODY: "Indiquez le mot de passe ou rejoignez la salle en tant que spectateur",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Rejoindre en tant que joueur",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Rejoindre en tant que spectateur",
                        STRING_ERROR_SERVER_ERROR: "Impossible de rejoindre une salle en raison d'une erreur serveur",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Déconnexion",
                        STRING_ERROR_TWITCH_COOKIES: "Vous devez accepter les cookies pour vous connecter avec Twitch",
                        STRING_ERROR_GAME_UNSUPPORTED: "Le jeu n'est pas compatible avec ce navigateur.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Cette salle nécessite une connexion Twitch",
                        STRING_ERROR_ROOM_NOT_FOUND: "Salle introuvale",
                        STRING_ERROR_INVALID_APP_ID: "ID d'app invalide pour la salle :",
                        STRING_ERROR_ROOM_IS_FULL: "La salle est pleine",
                        STRING_ERROR_ROOM_IS_LOCKED: "La salle est fermée",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "Merci d'avoir joué !",
                        STRING_ERROR_INCORRECT_PASSWORD: "Mot de passe incorrect",
                        STRING_ERROR_GENERIC: "Erreur en rejoignant la salle",
                        STRING_ERROR_TITLE: "Erreur",
                        STRING_ERROR_CONNECTION: "Erreur de connexion",
                        STRING_ERROR_SERVER_DISCONNECTED: "Vous avez été déconnecté."
                    },
                    it: {
                        LANGUAGE_NAME: "Italiano",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "Lingua",
                        LOGIN: "Accesso",
                        STRING_ROOMCODE: "CODICE STANZA",
                        STRING_ROOMCODE_PLACEHOLDER: "INSERISCI IL CODICE DI 4 LETTERE",
                        STRING_CAMERA_WARNING: "<strong>AVVISO:</strong> Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
                        STRING_STYLE_WARNING: "<strong>AVVISO:</strong> Il tuo browser è obsoleto e avrà dei problemi a visualizzare il gioco.",
                        STRING_NAME: "NOME",
                        STRING_NAME_PLACEHOLDER: "INSERISCI IL TUO NOME",
                        STRING_PLAY: "GIOCA",
                        STRING_TOS_WARNING: "Selezionando GIOCA, accetti le <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>Condizioni del servizio</a>",
                        STRING_CANVAS_COMPATIBILITY: "Siamo spiacenti, il tuo browser non è supportato.",
                        STRING_MENU_HELP: "AIUTO",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " LOGOUT",
                        STRING_MENU_MERCH: "NEGOZIO",
                        STRING_MENU_PAST_GAMES: "PARTITE PRECEDENTI",
                        STRING_MENU_MAILING_LIST: "NEWSLETTER",
                        ERROR_UNSUPPORTED_BROWSER: "Il gioco non è supportato dal browser attualmente in uso. Clicca su '?' o AIUTO per la lista dei browser compatibili.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "La tecnologia WebSocket non è supportata dal browser attualmente in uso.",
                        ERROR_ROOM_FULL: "La stanza è piena",
                        ERROR_INVALID_ROOMCODE: "Codice stanza non valido",
                        ERROR_UNABLE_TO_CONNECT: "Impossibile collegarsi al server Jackbox Games. Solitamente il problema è causato da adblocker o estensioni per la privacy.",
                        ERROR_GAME_LOCKED: "Partita in corso. Attendi che ne inizi una nuova.",
                        AD_AVAILABLE_NOW: "Disponibile ora!",
                        AD_ON_SALE: "In offerta!",
                        STRING_PASSWORD_REQUIRED_TITLE: "Password necessaria",
                        STRING_PASSWORD_REQUIRED_BODY: "Inserisci la password o partecipa come pubblico",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Partecipa come giocatore",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Partecipa come pubblico",
                        STRING_ERROR_SERVER_ERROR: "Impossibile entrare in una stanza: errore del server",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnessione effettuata",
                        STRING_ERROR_TWITCH_COOKIES: "I cookies sono necessari per effettuare il login a Twitch",
                        STRING_ERROR_GAME_UNSUPPORTED: "Il gioco non è supportato dal browser attualmente in uso.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "La sala necessita del login a Twitch",
                        STRING_ERROR_ROOM_NOT_FOUND: "Sala non trovata",
                        STRING_ERROR_INVALID_APP_ID: "App id non valido per la stanza:",
                        STRING_ERROR_ROOM_IS_FULL: "La stanza è piena",
                        STRING_ERROR_ROOM_IS_LOCKED: "La stanza è bloccata",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
                        STRING_ERROR_INCORRECT_PASSWORD: "Password errata",
                        STRING_ERROR_GENERIC: "Impossibile entrare in questa stanza",
                        STRING_ERROR_TITLE: "Errore",
                        STRING_ERROR_CONNECTION: "Errore di connessione",
                        STRING_ERROR_SERVER_DISCONNECTED: "È stata effettuata la disconnessione."
                    },
                    de: {
                        LANGUAGE_NAME: "Deutsche",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "Sprache",
                        LOGIN: "Login",
                        STRING_ROOMCODE: "RAUMCODE",
                        STRING_ROOMCODE_PLACEHOLDER: "GIB DEN 4-STELLIGEN CODE EIN",
                        STRING_CAMERA_WARNING: "<strong>ACHTUNG:</strong> Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
                        STRING_STYLE_WARNING: "<strong>ACHTUNG:</strong> Dein Browser scheint etwas veraltet zu sein. Es könnte Probleme bei der Anzeige dieses Spiels geben.",
                        STRING_NAME: "NAME",
                        STRING_NAME_PLACEHOLDER: "GIB DEINEN NAMEN EIN",
                        STRING_PLAY: "SPIELEN",
                        STRING_TOS_WARNING: "Wenn du auf SPIELEN klickst, erklärst du dich mit unseren <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>Nutzungsbedingungen</a> einverstanden.",
                        STRING_CANVAS_COMPATIBILITY: "Tut uns leid, dein Browser wird nicht unterstützt.",
                        STRING_MENU_HELP: "HILFE",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " AUSLOGGEN",
                        STRING_MENU_MERCH: "MERCH",
                        STRING_MENU_PAST_GAMES: "ANDERE SPIELE",
                        STRING_MENU_MAILING_LIST: "MAILINGLISTE",
                        ERROR_UNSUPPORTED_BROWSER: "Dieses Spiel wird von diesem Browser nicht unterstützt.Unter '?' und HILFE findest du eine vollständige Liste an kompatiblen Browsern.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "WebSockets werden auf deinem Browser nicht unterstützt.",
                        ERROR_ROOM_FULL: "Das Raum ist voll.",
                        ERROR_INVALID_ROOMCODE: "Ungültiger Raumcode",
                        ERROR_UNABLE_TO_CONNECT: "Es konnte keine Verbindung zum Server von Jackbox Games hergestellt werden. Dies wird häufig durch Adblocker oder Privacy Extensions verursacht.",
                        ERROR_GAME_LOCKED: "Spiel läuft derzeit. Bitte warte, bis ein neues Spiel beginnt.",
                        AD_AVAILABLE_NOW: "Jetzt verfügbar!",
                        AD_ON_SALE: "Angebot!",
                        STRING_PASSWORD_REQUIRED_TITLE: "Es wird ein Passwort benötigt.",
                        STRING_PASSWORD_REQUIRED_BODY: "Bitte gib das Passwort ein oder setze dich ins Publikum.",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Als Spieler beitreten",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Ins Publikum setzen",
                        STRING_ERROR_SERVER_ERROR: "Aufgrund eines Serverfehlers konntest du dem Raum nicht beitreten.",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Verbindung abgebrochen.",
                        STRING_ERROR_TWITCH_COOKIES: "Du musst Cookies akzeptieren, um dich mit Twitch einzuloggen.",
                        STRING_ERROR_GAME_UNSUPPORTED: "Dieses Spiel wird von diesem Browser nicht unterstützt.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Für diesen Raum ist Twitch erforderlich.",
                        STRING_ERROR_ROOM_NOT_FOUND: "Raum wurde nicht gefunden.",
                        STRING_ERROR_INVALID_APP_ID: "Ungültige App-ID für den Raum:",
                        STRING_ERROR_ROOM_IS_FULL: "Der Raum ist voll.",
                        STRING_ERROR_ROOM_IS_LOCKED: "Der Raum ist verschlossen.",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "Danke fürs Spielen!",
                        STRING_ERROR_INCORRECT_PASSWORD: "Falsches Passwort.",
                        STRING_ERROR_GENERIC: "Fehler beim Betreten des Raums.",
                        STRING_ERROR_TITLE: "Fehler",
                        STRING_ERROR_CONNECTION: "Verbindungsfehler",
                        STRING_ERROR_SERVER_DISCONNECTED: "Deine Verbindung wurde abgebrochen."
                    },
                    es: {
                        LANGUAGE_NAME: "Español",
                        SUPPORTED_LANGUAGES: ["Русский", "English", "Français", "Italiano", "Deutsch", "Español"],
                        SUPPORTED_LOCALES: ["ru", "en", "fr", "it", "de", "es"],
                        LANGUAGE: "idioma",
                        LOGIN: "Iniciar sesión",
                        STRING_ROOMCODE: "CÓDIGO DE LA SALA",
                        STRING_ROOMCODE_PLACEHOLDER: "INTRODUCE CÓDIGO DE 4 CARACTERES",
                        STRING_CAMERA_WARNING: "<strong>AVISO:</strong> No se detecta ninguna cámara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
                        STRING_STYLE_WARNING: "<strong>AVISO:</strong> Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                        STRING_NAME: "NOMBRE",
                        STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                        STRING_PLAY: "JUGAR",
                        STRING_TOS_WARNING: "Al hacer clic en JUGAR, aceptas las <a class='tosLink' href='https://jackboxgames.com/terms-of-service/' target='_blank'>Condiciones del servicio</a>",
                        STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                        STRING_MENU_HELP: "AYUDA",
                        STRING_MENU_TWITCH: " TWITCH",
                        STRING_MENU_LOGOUT: " CERRAR SESIÓN",
                        STRING_MENU_MERCH: "MERCHANDISING",
                        STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                        STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                        ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador.En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                        ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no admite WebSockets.",
                        ERROR_ROOM_FULL: "La sala está llena",
                        ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                        ERROR_UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
                        ERROR_GAME_LOCKED: "Esta partida está en curso. Espera a que comience otra.",
                        AD_AVAILABLE_NOW: "¡Ya disponible!",
                        AD_ON_SALE: "¡Ya a la venta!",
                        STRING_PASSWORD_REQUIRED_TITLE: "Requiere contraseña",
                        STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                        STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                        STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                        STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                        STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
                        STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                        STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                        STRING_ERROR_REQUIRES_TWITCH_LOGIN: "La sala requiere iniciar sesión en Twitch",
                        STRING_ERROR_ROOM_NOT_FOUND: "No se encuentra la sala",
                        STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                        STRING_ERROR_ROOM_IS_FULL: "La sala está llena",
                        STRING_ERROR_ROOM_IS_LOCKED: "La sala está bloqueada",
                        STRING_ERROR_SERVER_ROOM_DESTROYED: "¡Gracias por jugar!",
                        STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                        STRING_ERROR_GENERIC: "Error al unirte a la sala",
                        STRING_ERROR_TITLE: "Error",
                        STRING_ERROR_CONNECTION: "Error de conexión",
                        STRING_ERROR_SERVER_DISCONNECTED: "Te has desconectado."
                    }
                },
                h = n(2825),
                b = n.n(h);
            n(2828), n(2829), n(2830);

            function G(e, t, n, a, o, i, r) {
                try {
                    var s = e[i](r),
                        l = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(a, o)
            }

            function A(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (a, o) {
                        var i = e.apply(t, n);

                        function r(e) {
                            G(i, a, o, r, s, "next", e)
                        }

                        function s(e) {
                            G(i, a, o, r, s, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }
            var v = [{
                    text: "Now Available!",
                    src: "https://s3.amazonaws.com/static.jackboxgames.com/banners/JPP6ControllerAd.png",
                    href: "https://jackboxgames.com/party-pack-six/?utm_source=jackboxtv&utm_campaign=jbgtvpp6&utm_content=jbgtvpp6"
                }],
                C = {
                    centerMode: !0,
                    centerPadding: "60px",
                    autoplay: !0,
                    autoplaySpeed: 5e3,
                    dots: !0
                },
                f = R.a.View.extend({
                    appTag: "SignIn",
                    appId: "signin",
                    className: "Signin",
                    template: r.a.template(b.a),
                    twitch: new S,
                    model: new l.a.Model({
                        roomCode: "",
                        name: "",
                        password: "",
                        isTwitchAuthenticated: !1,
                        usesStorage: !1,
                        customNamespace: "",
                        version: "Версия: 0.0.8",
                        isMenuVisible: !1,
                        isPastGamesVisible: !1,
                        connecting: !1
                    }),
                    roomCodeLength: 4,
                    maxNameLength: 12,
                    galleryCollectionView: null,
                    bannerCollectionView: null,
                    links: {
                        help: "http://help.jackboxgames.com",
                        tos: "http://jackboxgames.com/terms-of-service/",
                        blog: "https://discord.gg/PZWKEz5kB9",
                        merch: "https://shop.jackboxgames.com/",
                        mailinglist: "https://jackboxgames.us7.list-manage.com/subscribe?u=a181fa3b606c035e1cee11b76&id=eb7f0081d6",
                        facebook: "https://www.facebook.com/JackboxGames/",
                        twitter: "https://twitter.com/jackboxgames",
                        instagram: "https://www.instagram.com/playjackboxgames"
                    },
                    regions: {
                        galleries: "#galleries-region",
                        banners: "#banners-region"
                    },
                    events: {
                        "click #button-join": "onJoinClick",
                        "click .button-tos": "onTOSClick",
                        "click .jbg-bottom-logo-div": "onBlogClick",
                        "click #jbg_logo": "onLinkClick",
                        "click .external-link": "onLinkClick",
                        "click .twitch-connect": "onTwitchConnectClick",
                        "click .twitch-logout": "onTwitchLogoutClick",
                        "click .jbg-navbar": "onHamburgerClick",
                        "click .button-past-games": "onPastGamesClick"
                    },
                    bindings: {
                        "#roomcode": {
                            observe: "roomCode",
                            onSet: function (e) {
                                return this.onRoomCodeChange(e), e
                            }
                        },
                        "#username": {
                            observe: "name",
                            attributes: [{
                                name: "disabled",
                                observe: "isTwitchAuthenticated"
                            }, {
                                name: "value",
                                observe: "name"
                            }]
                        },
                        ".drawer-menu-version": {
                            observe: "version"
                        },
                        ".jbg-menu-button": {
                            classes: {
                                active: {
                                    observe: ["isMenuVisible", "isPastGamesVisible"],
                                    onGet: function (e) {
                                        return e[0] || e[1]
                                    }
                                }
                            }
                        },
                        ".jbg-menu-container": {
                            classes: {
                                active: "isMenuVisible"
                            }
                        },
                        ".jbg-past-games": {
                            classes: {
                                active: "isPastGamesVisible"
                            }
                        },
                        ".name-char-remaining": {
                            observe: "name",
                            onGet: function (e) {
                                return this.maxNameLength - e.length
                            }
                        },
                        ".button-signin": {
                            attributes: [{
                                name: "disabled",
                                observe: ["roomCode", "name"],
                                onGet: function () {
                                    return !this.canSubmit()
                                }
                            }],
                            classes: {
                                ready: {
                                    observe: ["roomCode", "name"],
                                    onGet: function () {
                                        return this.canSubmit()
                                    }
                                }
                            }
                        },
                        ".lds-ring": {
                            observe: "connecting",
                            visible: !0
                        },
                        ".twitch-logout": {
                            observe: "isTwitchAuthenticated",
                            visible: !0
                        },
                        ".twitch-connect": {
                            observe: "isTwitchAuthenticated",
                            visible: function (e) {
                                return !e
                            }
                        },
                        ".signin-fieldset": {
                            attributes: [{
                                name: "disabled",
                                observe: "connecting",
                                onGet: function (e) {
                                    return e
                                }
                            }]
                        },
                        ".play-text": {
                            observe: "connecting",
                            visible: function (e) {
                                return !e
                            }
                        },
                        ".cameraWarning": {
                            observe: "usesCamera",
                            visible: function (e) {
                                var t = !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia);
                                return e && !t
                            },
                            visibleFn: function (e, t) {
                                t ? e.slideDown("fast") : e.slideUp("fast")
                            }
                        },
                        ".styleWarning": {
                            observe: "usesFlexbox",
                            visible: function (e) {
                                var t = !1;
                                try {
                                    t = CSS.supports("flex-wrap", "wrap")
                                } catch (e) {
                                    t = !1
                                }
                                return e && !t
                            },
                            visibleFn: function (e, t) {
                                t ? e.slideDown("fast") : e.slideUp("fast")
                            }
                        }
                    },
                    initialize: function () {
                        var e = this;
                        return A(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.galleryCollectionView = new D, e.bannerCollectionView = new P, e.render(), e.initStorage(), E.app.client.on("client:didJoinRoom", e.onClientDidJoinRoom.bind(e)), E.app.client.on("client:joinRoomDidFail", e.onClientJoinRoomDidFail.bind(e)), E.app.client.on("client:roomCodeIsInvalid", e.onClientRoomCodeIsInvalid.bind(e)), E.app.client.on("client:connectError", e.onClientConnectError.bind(e)), E.app.client.on("client:roomFull", e.onClientRoomFull.bind(e)), E.app.analytics.setApplication(e.getOption("appTag"), e.getOption("appId"), "3.1.16"), E.app.analytics.trackScreenView("".concat(e.appId, ".login")), t.next = 13, e.twitch.prepare();
                                    case 13:
                                        e.twitch.user && e.setupTwitchUser();
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    render: function () {
                        if (this.locale = this.getOption("locale"), E.app.storage.isSupported) {
                            var e = E.app.storage.get("galleries");
                            if (e) {
                                var t = [];
                                try {
                                    t = JSON.parse(e)
                                } catch (e) {
                                    console.warn("Unable to parse galleries array")
                                }
                                t = t.map((function (e) {
                                    e.gameName = e.categoryId, e.categoryId || (-1 !== e.url.indexOf("Quiplash2") ? e.gameName = "Quiplash2Game" : -1 !== e.url.indexOf("Drawful") ? e.gameName = "DrawfulGame" : -1 !== e.url.indexOf("TeeKO") ? e.gameName = "TeeKOGame" : -1 !== e.url.indexOf("TriviaDeath") && (e.gameName = "TriviaDeathResults"));
                                    var t = new Date(e.time);
                                    return e.date = t.toLocaleDateString(), e
                                })), this.galleryCollectionView.collection.set(t)
                            }
                            m.a.hasHashRoomCode && (this.model.set({
                                roomCode: m.a.hashRoomCode
                            }), E.app.storage.set("roomCode", this.model.get("roomCode")))
                        }
                        this.locale || (this.locale = this.findValidLanguage()), g[this.locale] || (this.locale = "en"), this.$el.html(this.template(g[this.locale])), this.model.get("usesStorage") && E.app.storage.setTag("locale-".concat(this.locale))
                    },
                    onBeforeDestroy: function () {
                        E.app.client.removeEvent("client:didJoinRoom"), E.app.client.removeEvent("client:joinRoomDidFail"), E.app.client.removeEvent("client:roomCodeIsInvalid"), E.app.client.removeEvent("client:connectError"), E.app.client.removeEvent("client:roomFull")
                    },
                    onAttach: function () {
                        var e = this;
                        return A(regeneratorRuntime.mark((function t() {
                            var n, a;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e.showChildView("galleries", e.galleryCollectionView);
                                        try {
                                            n = o()(".canvas-compatibility")[0], "data:," === n.toDataURL("image/png").replace("data:image/png;base64,", "") && _.a.show(Error(g[e.locale].ERROR_UNSUPPORTED_BROWSER), {
                                                titleText: g[e.locale].STRING_ERROR_TITLE
                                            })
                                        } catch (t) {
                                            _.a.show(Error(g[e.locale].ERROR_UNSUPPORTED_BROWSER), {
                                                titleText: g[e.locale].STRING_ERROR_TITLE
                                            })
                                        }
                                        return window.performance && window.performance.timing && (a = Math.round((new Date).getTime() - window.performance.timing.navigationStart), E.app.analytics.trackTiming("send", "timing", "Signin Page", a)), t.next = 5, e.initBanners();
                                    case 5:
                                        m.a.queryParam("error") && (_.a.show("error", (i = {
                                            titleText: m.a.queryParam("error"),
                                            text: m.a.queryParam("error_description")
                                        }, r = "titleText", s = g[e.locale].STRING_ERROR_TITLE, r in i ? Object.defineProperty(i, r, {
                                            value: s,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : i[r] = s, i)), window.history.replaceState({}, document.title, "/")), m.a.queryParam("role") && (E.app.client.forceJoinAs = m.a.queryParam("role")), e.stickit();
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                                var i, r, s
                            }), t)
                        })))()
                    },
                    initStorage: function () {
                        if (E.app.storage.isSupported) {
                            var e = E.app.storage.get("roomCode") || "";
                            this.prevRoomCode = e.toUpperCase(), this.model.set({
                                customNamespace: E.app.storage.namespace,
                                usesStorage: !0,
                                roomCode: E.app.storage.get("roomCode") || "",
                                name: E.app.storage.get("name") || "",
                                reconnect: E.app.storage.get("reconnect"),
                                galleries: E.app.storage.get("galleries")
                            })
                        }
                    },
                    initBanners: function () {
                        var e = this;
                        return A(regeneratorRuntime.mark((function t() {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, fetch(N.a.BannersUrl);
                                    case 3:
                                        return n = t.sent, t.next = 6, n.json();
                                    case 6:
                                        if (a = t.sent, (o = (o = a && a.bannerAds && a.bannerAds.length ? a.bannerAds : v).map((function (t, n) {
                                                if (t.index = n, e.model.get("usesStorage") && void 0 !== t.tags) {
                                                    var a = E.app.storage.get("tags") || [];
                                                    (t.tags || []).every((function (e) {
                                                        return a.includes(e)
                                                    })) || (t.hidden = !0)
                                                }
                                                var o = new Date;
                                                t.start && (o < new Date(t.start) && (t.hidden = !0));
                                                t.end && (o > new Date(t.end) && (t.hidden = !0));
                                                return t
                                            })).filter((function (e) {
                                                return !e.hidden
                                            }))).length) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 11:
                                        e.bannerCollectionView.collection.set(o), e.showChildView("banners", e.bannerCollectionView), e.$el.find(".slick__slides").slick(C), t.next = 19;
                                        break;
                                    case 16:
                                        t.prev = 16, t.t0 = t.catch(0), console.error("Unable to load banner data", t.t0);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 16]
                            ])
                        })))()
                    },
                    onRoomCodeChange: function (e) {
                        var t = this;
                        return A(regeneratorRuntime.mark((function n() {
                            var a, o;
                            return regeneratorRuntime.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (a = {
                                                passwordRequired: !1,
                                                audienceEnabled: !1,
                                                usesCamera: !1
                                            }, !(e.length >= t.roomCodeLength)) {
                                            n.next = 15;
                                            break
                                        }
                                        return n.prev = 2, n.next = 5, E.app.client.getRoomStatusForCode(e);
                                    case 5:
                                        (o = n.sent) && (a.passwordRequired = o.passwordRequired || !1, a.moderationEnabled = o.moderationEnabled || !1, a.audienceEnabled = o.audienceEnabled || !1, a.usesCamera = N.a.gameFeatures[o.appId] && N.a.gameFeatures[o.appId].includes("camera")), t.model.set(a), n.next = 13;
                                        break;
                                    case 10:
                                        n.prev = 10, n.t0 = n.catch(2), console.error(n.t0);
                                    case 13:
                                        n.next = 16;
                                        break;
                                    case 15:
                                        t.model.set(a);
                                    case 16:
                                        return n.abrupt("return", null);
                                    case 17:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 10]
                            ])
                        })))()
                    },
                    onJoinClick: function (e) {
                        var t = this;
                        return A(regeneratorRuntime.mark((function n() {
                            var a, o, i, r, s, l;
                            return regeneratorRuntime.wrap((function (n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (e && e.preventDefault(), !t.model.get("connecting")) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return", !1);
                                    case 3:
                                        return a = {
                                            twitch: t.twitch
                                        }, (o = t.sanitize(t.model.get("name").trim().toUpperCase())).length > t.maxNameLength && (o = "".concat(o.substr(0, t.maxNameLength - 1), "…")), i = t.model.get("roomCode").toUpperCase(), n.next = 9, t.onRoomCodeChange(i);
                                    case 9:
                                        if (r = t.model.get("reconnect") || "", (s = i === t.prevRoomCode && "" !== r) && r && (a.reconnect = r), !(!s && (t.model.get("passwordRequired") && E.app.client.isPlayer || t.model.get("moderationEnabled") && E.app.client.isModerator))) {
                                            n.next = 28;
                                            break
                                        }
                                        return n.next = 16, t.gatherPassword();
                                    case 16:
                                        if (void 0 === (l = n.sent).value) {
                                            n.next = 23;
                                            break
                                        }
                                        a.password = l.value, t.model.set("connecting", !0), E.app.client.connect(i, o, a), n.next = 28;
                                        break;
                                    case 23:
                                        if (l.dismiss !== _.a.DismissReason.cancel) {
                                            n.next = 27;
                                            break
                                        }
                                        a.forceJoinAs = "audience", n.next = 28;
                                        break;
                                    case 27:
                                        return n.abrupt("return", !1);
                                    case 28:
                                        return t.model.set("connecting", !0), E.app.client.connect(i, o, a), n.abrupt("return", !1);
                                    case 31:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    onTOSClick: function () {
                        window.open(this.links.tos, "_blank")
                    },
                    onBlogClick: function () {
                        E.app.analytics.trackEvent("SignIn", "linkClicked", "blog"), window.open(this.links.blog, "_blank")
                    },
                    onLinkClick: function (e) {
                        var t = e.target.dataset.link,
                            n = this.links[t];
                        E.app.analytics.trackEvent("SignIn", "linkClicked", t), window.open(n, "_blank")
                    },
                    onHamburgerClick: function () {
                        this.model.get("isPastGamesVisible") || this.model.set({
                            isMenuVisible: !this.model.get("isMenuVisible")
                        }), this.model.set({
                            isPastGamesVisible: !1
                        })
                    },
                    onPastGamesClick: function (e) {
                        this.model.set({
                            isMenuVisible: !this.model.get("isMenuVisible")
                        }), this.model.set({
                            isPastGamesVisible: !0
                        })
                    },
                    onTwitchConnectClick: function (e) {
                        e.preventDefault(), E.app.storage.isSupported ? this.twitch.login() : _.a.show(Error(g[this.locale].STRING_ERROR_TWITCH_COOKIES), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        })
                    },
                    onTwitchLogoutClick: function (e) {
                        e.preventDefault(), this.twitch.logout(), this.model.set({
                            name: "",
                            isTwitchAuthenticated: !1,
                            isMenuVisible: !1
                        })
                    },
                    setupTwitchUser: function () {
                        var e = this.twitch.user.display_name;
                        e.length > this.maxNameLength && (e = "".concat(e.substr(0, this.maxNameLength - 1), "…")), this.model.set({
                            name: e,
                            isTwitchAuthenticated: !0
                        }), m.a.hasHashRoomCode && this.onJoinClick()
                    },
                    onClientDidJoinRoom: function (e) {
                        var t = e.appId,
                            n = e.appTag,
                            a = e.reconnect;
                        E.app.storage.isSupported && (E.app.storage.set("name", this.model.get("name")), E.app.storage.set("roomCode", this.model.get("roomCode")), E.app.storage.set("reconnect", a)), E.app.analytics.trackEvent("SignIn", "roomJoined", n), this.model.get("isTwitchAuthenticated") && E.app.analytics.trackEvent("SignIn", "twitchUserRoomJoined", n), E.app.router.controller.navigateToApp(t, n)
                    },
                    onClientJoinRoomDidFail: function (e) {
                        console.error("[SignInView] onClientJoinRoomDidFail", e), e.message ? e instanceof p.EcastRoomNotFound || -1 !== e.message.indexOf("no such room") ? _.a.show(Error(g[this.locale].STRING_ERROR_ROOM_NOT_FOUND), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : e instanceof p.EcastInvalidPassword ? _.a.show(Error(g[this.locale].STRING_ERROR_INCORRECT_PASSWORD), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : e instanceof p.EcastPasswordRequired ? _.a.show(Error(g[this.locale].STRING_PASSWORD_REQUIRED_TITLE), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : e instanceof p.EcastRoomIsFull ? _.a.show(Error(g[this.locale].ERROR_ROOM_FULL), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : e instanceof p.EcastTwitchLoginRequired ? _.a.show(Error(g[this.locale].STRING_ERROR_REQUIRES_TWITCH_LOGIN), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : -1 !== e.message.indexOf("Network request failed") ? _.a.show(Error(g[this.locale].ERROR_UNABLE_TO_CONNECT), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : e instanceof p.EcastFilterError ? _.a.show(Error(e)) : _.a.show(Error(g[this.locale].STRING_ERROR_GENERIC), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }) : _.a.show(Error(g[this.locale].STRING_ERROR_GENERIC), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }), this.model.set("connecting", !1)
                    },
                    onClientRoomCodeIsInvalid: function () {
                        _.a.show(Error(g[this.locale].ERROR_INVALID_ROOMCODE), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }), this.model.set("connecting", !1)
                    },
                    onClientConnectError: function () {
                        _.a.show(Error(g[this.locale].ERROR_UNABLE_TO_CONNECT), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }), this.model.set("connecting", !1)
                    },
                    onClientRoomFull: function () {
                        _.a.show(Error(g[this.locale].ERROR_ROOM_FULL), {
                            titleText: g[this.locale].STRING_ERROR_TITLE
                        }), this.model.set("connecting", !1)
                    },
                    gatherPassword: function () {
                        var e = this;
                        return A(regeneratorRuntime.mark((function t() {
                            var a, o;
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(a = document.getElementById("password").value)) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", {
                                            value: a
                                        });
                                    case 3:
                                        return t.next = 5, Promise.resolve().then(n.t.bind(null, 2831, 7));
                                    case 5:
                                        return o = t.sent, t.abrupt("return", _.a.show("custom", {
                                            customClass: "jbgModal",
                                            titleText: g[e.locale].STRING_PASSWORD_REQUIRED_TITLE || "Password required",
                                            html: g[e.locale].STRING_PASSWORD_REQUIRED_BODY,
                                            input: "text",
                                            imageUrl: o.default,
                                            confirmButtonClass: "btn btn-success",
                                            confirmButtonText: g[e.locale].STRING_PASSWORD_JOIN_AS_PLAYER || "Join as Player",
                                            cancelButtonClass: "btn btn-danger",
                                            cancelButtonText: g[e.locale].STRING_PASSWORD_JOIN_AS_AUDIENCE || "Join as Audience",
                                            reverseButtons: !0,
                                            inputAttributes: {
                                                autocapitalize: "off",
                                                autocomplete: "off"
                                            },
                                            showCancelButton: e.model.get("audienceEnabled") && "player" === E.app.client.role
                                        }));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    findValidLanguage: function () {
                        var e = "en",
                            t = Object.keys(g),
                            n = navigator.languages;
                        return r.a.some(n, (function (n) {
                            return r.a.some(t, (function (t) {
                                return 0 === n.indexOf(t) && (e = t, !0)
                            }))
                        })), e
                    },
                    canSubmit: function () {
                        var e = this.model.get("roomCode"),
                            t = this.model.get("name");
                        return e.length === this.roomCodeLength && t.length
                    },
                    sanitize: function (e) {
                        return e.replace(/[^\u0410-\u044F\u0451\u0401\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491 ^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’").trim()
                    }
                }),
                L = R.a.View.extend({
                    tagName: "div",
                    className: "pastGame",
                    bindings: {
                        ":el": {
                            observe: "gameName",
                            visible: !0
                        },
                        ".past-game-icon": {
                            attributes: [{
                                name: "class",
                                observe: "gameName"
                            }]
                        },
                        ".gallery-menu-item": {
                            attributes: [{
                                name: "href",
                                observe: "url"
                            }]
                        },
                        ".gameName": "gameName",
                        ".date": "date"
                    },
                    events: {
                        "click .gallery-menu-item": "onClick"
                    },
                    template: r.a.template('\n        <a class="gallery-menu-item" target="_blank">\n            <div class="past-game-icon"></div>\n            <div class="past-game-text">\n                <span class="date"></span>\n            </div>\n        </a>'),
                    onRender: function () {
                        this.stickit()
                    },
                    onClick: function () {
                        E.app.analytics.trackEvent("SignIn", "galleryClicked", this.model.get("gameName"))
                    }
                }),
                D = R.a.CollectionView.extend({
                    collection: new l.a.Collection([]),
                    className: "past-game-collection",
                    childView: L,
                    emptyView: R.a.View.extend({
                        template: r.a.template('<p class="gallery-empty">Нет прошлых игр</p>')
                    })
                }),
                w = R.a.View.extend({
                    tagName: "div",
                    className: "slick__slide",
                    template: r.a.template('\n        <a class="banner-a" target="_blank" href="https://www.jackboxgames.com">\n            <div class="banner-container">\n                <img class="banner-img" src="https://via.placeholder.com/400x150">\n                <div class="banner-text"></div>\n            </div>\n        </a>'),
                    bindings: {
                        ".banner-text": "text",
                        ".banner-a": {
                            attributes: [{
                                name: "href",
                                observe: "href"
                            }]
                        },
                        ".banner-img": {
                            attributes: [{
                                name: "src",
                                observe: "src"
                            }]
                        }
                    },
                    events: {
                        click: "onClick"
                    },
                    onRender: function () {
                        this.stickit()
                    },
                    onClick: function () {
                        E.app.analytics.trackEvent("SignIn", "bannerClicked", this.model.get("src"))
                    }
                }),
                P = R.a.CollectionView.extend({
                    tagName: "div",
                    collection: new l.a.Collection([]),
                    className: "slick__slides",
                    childView: w
                })
        }
    }
]);
//# sourceMappingURL=38.5b680b56054523f6ef9b.js.map