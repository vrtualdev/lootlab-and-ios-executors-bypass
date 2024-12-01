// ==UserScript==
// @name        IOS EXECUTORS BYPASSER 
// @author      .vrtual.dev
// @version     1.0.0
// @description  https://discord.gg/G3FDkbvtMx Please Join The Server It Took Me A While To Make
// @license     MIT
// @run-at      document-end
// @match        *://loot-link.com/s?*
// @match        *://loot-links.com/s?*
// @match        *://lootlink.org/s?*
// @match        *://lootlinks.co/s?*
// @match        *://lootdest.info/s?*
// @match        *://lootdest.org/s?*
// @match        *://lootdest.com/s?*
// @match        *://links-loot.com/s?*
// @match        *://linksloot.net/s?*
// @grant       none
// @namespace   https://github.com/1dontgiveaf/AppleWare-Bypasser/
// @downloadURL https://raw.githubusercontent.com/1dontgiveaf/AppleWare-Bypasser/main/user.js
// @updateURL   https://raw.githubusercontent.com/1dontgiveaf/AppleWare-Bypasser/main/meta.js
// ==/UserScript==

// DecodeAPI takes longer to bypass but incase it doesn't work, try ut.
// Also "Invaild Checkpoint Key" is not my issue

var DecodeAPI = 0;

// Auto test (1/0)
var auto = 1;

// obfuscated
var DecodeAPI = 1000;
var auto = 1;
let link = 0;
bypass();
function decodeURI(_0x33ae6d, _0x448244 = 5) {
  let _0x2a5351 = '';
  const _0x53ad09 = atob(_0x33ae6d);
  const _0x3345a8 = _0x53ad09.substring(0, _0x448244);
  const _0xa62327 = _0x53ad09.substring(_0x448244);
  for (let _0x5a041b = 0; _0x5a041b < _0xa62327.length; _0x5a041b++) {
    const _0x52914d = _0xa62327.charCodeAt(_0x5a041b);
    const _0x2b26f2 = _0x3345a8.charCodeAt(_0x5a041b % _0x3345a8.length);
    const _0x4f1364 = _0x52914d ^ _0x2b26f2;
    _0x2a5351 += String.fromCharCode(_0x4f1364);
  }
  return _0x2a5351;
}
(function () {
  const _0x5defb8 = function () {
    let _0x369961 = true;
    return function (_0x3db742, _0x22d95b) {
      const _0x1609b7 = _0x369961 ? function () {
        if (_0x22d95b) {
          const _0x1b3348 = _0x22d95b.apply(_0x3db742, arguments);
          _0x22d95b = null;
          return _0x1b3348;
        }
      } : function () {};
      _0x369961 = false;
      return _0x1609b7;
    };
  }();
  const _0x1d42b7 = _0x5defb8(this, function () {
    return _0x1d42b7.toString().search("(((.+)+)+)+$").toString().constructor(_0x1d42b7).search("(((.+)+)+)+$");
  });
  _0x1d42b7();
  'use strict';
  const _0x4bfd3b = () => {
    const _0xd2d394 = _0x43e60e => {
      const _0x58e174 = _0x43e60e.parentElement;
      if (_0x58e174) {
        function _0x481b34(_0x41bc5f) {
          const _0x15e504 = {
            color: "rgb(255, 255, 255)",
            fontWeight: "700",
            padding: "10px 10px 0px",
            fontSize: "20px",
            textAlign: "center"
          };
          return Object.entries(_0x15e504).every(([_0x5a7c47, _0x4a81d2]) => {
            return _0x41bc5f.style[_0x5a7c47] === _0x4a81d2;
          });
        }
        function _0x40db5b() {
          const _0x9c2868 = document.querySelectorAll("div");
          const _0x1dce04 = document.querySelectorAll("p");
          const _0x29c5ba = document.querySelectorAll("h3");
          const _0x1879de = document.querySelectorAll("a");
          const _0x2a478c = document.body;
          const _0x15ff3d = document.querySelectorAll("span");
          _0x15ff3d.forEach(_0x32f2c9 => {
            if (_0x481b34(_0x32f2c9)) {
              _0x32f2c9.textContent = "Bypassing...";
              _0x32f2c9.style.fontFamily = "system-ui";
              _0x32f2c9.style.fontSize = "32px";
            } else {
              if (_0x32f2c9.textContent.includes("Complete the actions")) {
                _0x32f2c9.textContent = "Bypass by .idontgiveaf • 30 seconds";
                _0x32f2c9.style.fontFamily = "system-ui";
                _0x32f2c9.style.fontSize = "20px";
              }
            }
          });
          _0x9c2868.forEach(_0x396c0c => {
            if (_0x396c0c.style.border === "3px solid white") {
              _0x396c0c.style.background = "linear-gradient(-45deg, #800000, #650000, #550000, #400000)";
              _0x396c0c.style.borderRadius = "40px";
              const _0x135c54 = document.createElement("input");
              _0x135c54.type = "text";
              _0x135c54.placeholder = "DecodeAPI";
              _0x135c54.style.marginRight = "10px";
              _0x135c54.value = DecodeAPI;
              const _0x2ce186 = document.createElement("button");
              _0x2ce186.textContent = "Bypass";
              _0x2ce186.onclick = () => {
                var _0x2cba1b = _0x135c54.value;
                setTimeout(() => {
                  var _0x69585 = setInterval(() => {
                    if (link !== 0) {
                      clearInterval(_0x69585);
                      window.location.href = link;
                    }
                  }, 100);
                }, _0x2cba1b);
              };
              const _0x532e01 = document.createElement("div");
              _0x532e01.style.display = "flex";
              _0x532e01.style.alignItems = "center";
              if (auto === 0) {
                _0x532e01.appendChild(_0x135c54);
                _0x532e01.appendChild(_0x2ce186);
                _0x396c0c.appendChild(_0x532e01);
              }
              const _0x548726 = document.createElement("iframe");
              _0x548726.src = "https://www.youtube.com/embed/_Z5hxyn3COw?autoplay=1";
              _0x548726.width = "240";
              _0x548726.height = "155";
              _0x548726.style.marginTop = "20px";
              _0x548726.frameBorder = "0";
              _0x548726.allow = "autoplay; encrypted-media";
              _0x548726.allowFullscreen = true;
              _0x396c0c.appendChild(_0x548726);
              const _0x1af56d = document.createElement("style");
              _0x1af56d.textContent = "\n                    .fade {\n                       transition: opacity 0.5s ease-in-out;\n                       opacity: 1;\n                    }\n                    .fade.hidden {\n                       opacity: 0.1;\n                    }\n            \n                @media (max-width: 600px) {\n                    input, button {\n                        font-size: 12px;\n                        padding: 5px;\n                    }\n                }\n                \n                @media (min-width: 601px) and (max-width: 1200px) {\n                    input, button {\n                        font-size: 16px;\n                        padding: 8px;\n                    }\n                }\n                \n                @media (min-width: 1201px) {\n                    input, button {\n                        font-size: 20px;\n                        padding: 10px;\n                    }\n                }\n\n                input {\n                    background: rgba(0, 0, 0, 0.3);\n                    border: 3px solid white;\n                    border-radius: 40px;\n                    margin-right: 10px;\n                    color: white;\n                }\n                \n                button {\n                    background: rgba(0, 0, 0, 0.3);\n                    border: 3px solid white;\n                    color: #FFFFFF;\n                    border-radius: 40px;\n                    cursor: pointer;\n                }\n            ";
              document.head.appendChild(_0x1af56d);
            }
          });
          _0x1dce04.forEach(_0x54759f => {
            if (_0x54759f.textContent.includes("Support Content Creators")) {
              _0x54759f.textContent = "Please manually do key link if bypass does not work. This UI took me 3 hours to figure out. Works as a loot-link bypasser too. https://discord.gg/TJGY2NyTZU";
              _0x54759f.style.fontSize = "16px";
            }
          });
          _0x29c5ba.forEach(_0x33c165 => _0x33c165.remove());
          _0x1879de.forEach(_0x5a1f43 => _0x5a1f43.remove());
          _0x2a478c.style.background = "rgb(30, 0, 0)";
        }
        const _0x1a6afa = _0x23f098 => {
          let _0x3109d3 = _0x23f098;
          const _0x39eaa1 = document.querySelectorAll("span");
          const _0x532e00 = (_0x30898b, _0x5a357d) => {
            _0x30898b.textContent = _0x5a357d;
          };
          const _0x29f11b = setInterval(() => {
            _0x3109d3--;
            _0x39eaa1.forEach(_0x5cdf14 => {
              if (_0x5cdf14.textContent.includes("Bypass by")) {
                _0x532e00(_0x5cdf14, "Bypass by .idontgiveaf • " + _0x3109d3 + " seconds");
              }
            });
            if (link !== 0) {
              _0x39eaa1.forEach(_0x2bd544 => {
                if (_0x2bd544.textContent.includes("Bypass by")) {
                  _0x532e00(_0x2bd544, "Bypass by .idontgiveaf • Bypass completed.");
                }
              });
              clearInterval(_0x29f11b);
            } else if (_0x3109d3 <= 0) {
              _0x39eaa1.forEach(_0x2414a1 => {
                if (_0x2414a1.textContent.includes("Bypass by")) {
                  _0x532e00(_0x2414a1, "Bypass by .idontgiveaf • Try reloading or doing manually if it does not bypass by now.");
                }
              });
              clearInterval(_0x29f11b);
            }
          }, 1000);
        };
        _0x40db5b();
        _0x1a6afa(30);
      }
    };
    localStorage.clear();
    for (let _0xe210d7 = 0; _0xe210d7 < 100; _0xe210d7++) {
      if (54 !== _0xe210d7) {
        var _0x2e694b;
        var _0x212445 = "t_" + _0xe210d7;
        var _0x40bb5d = {
          "value": 0x1,
          "expiry": new Date().getTime() + 604800000
        };
        localStorage.setItem(_0x212445, JSON.stringify(_0x40bb5d));
      }
    }
    const _0x3df9f8 = new MutationObserver((_0x2a37f4, _0x131239) => {
      for (const _0x39710b of _0x2a37f4) {
        if (_0x39710b.type === "childList") {
          const _0xc20c44 = Array.from(document.querySelectorAll("body *")).find(_0x2cce2b => _0x2cce2b.textContent.includes("UNLOCK CONTENT"));
          if (_0xc20c44) {
            _0xd2d394(_0xc20c44);
            _0x131239.disconnect();
            break;
          }
        }
      }
    });
    const _0x4842c9 = {
      childList: true,
      subtree: true
    };
    _0x3df9f8.observe(document.body, _0x4842c9);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x4bfd3b);
  } else {
    _0x4bfd3b();
  }
})();
function bypass() {
  const _0x594b49 = function () {
    let _0x5bb983 = true;
    return function (_0x4d5390, _0x213a70) {
      const _0x8cdded = _0x5bb983 ? function () {
        if (_0x213a70) {
          const _0x4e0dd3 = _0x213a70.apply(_0x4d5390, arguments);
          _0x213a70 = null;
          return _0x4e0dd3;
        }
      } : function () {};
      _0x5bb983 = false;
      return _0x8cdded;
    };
  }();
  const _0x1be836 = function () {
    let _0x4321a6 = true;
    return function (_0x451aa9, _0x2b251f) {
      const _0x2500e0 = _0x4321a6 ? function () {
        if (_0x2b251f) {
          const _0xcf9285 = _0x2b251f.apply(_0x451aa9, arguments);
          _0x2b251f = null;
          return _0xcf9285;
        }
      } : function () {};
      _0x4321a6 = false;
      return _0x2500e0;
    };
  }();
  (function () {
    (function () {
      _0x594b49(this, function () {
        const _0x466102 = new RegExp("function *\\( *\\)");
        const _0x5a0f6d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        const _0x2fa86a = _0x2b2ae0("init");
        if (!_0x466102.test(_0x2fa86a + "chain") || !_0x5a0f6d.test(_0x2fa86a + "input")) {
          _0x2fa86a("0");
        } else {
          _0x2b2ae0();
        }
      })();
    })();
    const _0xa51e3 = _0x1be836(this, function () {
      let _0x33f5c1;
      try {
        const _0x6866c5 = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x33f5c1 = _0x6866c5();
      } catch (_0x437439) {
        _0x33f5c1 = window;
      }
      const _0x9bdc85 = _0x33f5c1.console = _0x33f5c1.console || {};
      const _0x1bf39e = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x3f0e4d = 0; _0x3f0e4d < _0x1bf39e.length; _0x3f0e4d++) {
        const _0x5d31a7 = _0x1be836.constructor.prototype.bind(_0x1be836);
        const _0x23fb5d = _0x1bf39e[_0x3f0e4d];
        const _0x3ec8dc = _0x9bdc85[_0x23fb5d] || _0x5d31a7;
        _0x5d31a7.__proto__ = _0x1be836.bind(_0x1be836);
        _0x5d31a7.toString = _0x3ec8dc.toString.bind(_0x3ec8dc);
        _0x9bdc85[_0x23fb5d] = _0x5d31a7;
      }
    });
    _0xa51e3();
    const _0x450155 = window.fetch;
    window.fetch = function (_0x4d4652, _0x3ec2d2) {
      if (_0x4d4652.includes(INCENTIVE_SYNCER_DOMAIN + "/tc")) {
        return _0x450155(_0x4d4652, _0x3ec2d2).then(_0x11205e => {
          if (!_0x11205e.ok) {
            return JSON.stringify(_0x11205e);
          }
          return _0x11205e.clone().json().then(_0x2958ac => {
            let _0x1756b6 = '';
            let _0x3844c1 = '';
            let _0x4adf5f = '';
            _0x2958ac.forEach(_0x1daf6c => {
              _0x1756b6 = _0x1daf6c.urid;
              _0x3844c1 = 54;
              _0x4adf5f = _0x1daf6c.action_pixel_url;
            });
            const _0x55dded = new WebSocket("wss://" + _0x1756b6.substr(-5) % 3 + "." + INCENTIVE_SERVER_DOMAIN + "/c?uid=" + _0x1756b6 + "&cat=" + _0x3844c1 + "&key=" + KEY);
            _0x55dded.onopen = () => setInterval(() => _0x55dded.send("0"), 1000);
            _0x55dded.onmessage = _0x51a6cd => {
              if (_0x51a6cd.data.includes("r:")) {
                PUBLISHER_LINK = _0x51a6cd.data.replace("r:", '');
              }
            };
            navigator.sendBeacon("https://" + _0x1756b6.substr(-5) % 3 + "." + INCENTIVE_SERVER_DOMAIN + "/st?uid=" + _0x1756b6 + "&cat=" + _0x3844c1);
            fetch(_0x4adf5f);
            fetch("https://" + INCENTIVE_SYNCER_DOMAIN + "/td?ac=1&urid=" + _0x1756b6 + "&&cat=" + _0x3844c1 + "&tid=" + TID);
            _0x55dded.onclose = () => {
              setTimeout(() => {
                link = decodeURIComponent(decodeURI(PUBLISHER_LINK));
                const _0x1f3ba3 = document.querySelectorAll("span");
                _0x1f3ba3.forEach(_0x41344f => {
                  if (_0x41344f.textContent.includes("Bypass by")) {
                    _0x41344f.textContent = "Bypass by .idontgiveaf • Bypass completed.";
                    _0x41344f.style.fontFamily = "system-ui";
                    _0x41344f.style.fontSize = "20px";
                  }
                });
              }, DecodeAPI);
            };
            const _0x2a64ba = {
              status: _0x11205e.status
            };
            _0x2a64ba.statusText = _0x11205e.statusText;
            _0x2a64ba.headers = _0x11205e.headers;
            return new Response(JSON.stringify(_0x2958ac), _0x2a64ba);
          });
        });
      }
      return _0x450155(_0x4d4652, _0x3ec2d2);
    };
  })();
}
if (auto === 1) {
  var intervalId = setInterval(() => {
    if (link !== 0) {
      clearInterval(intervalId);
      window.location.href = link;
    }
  }, 100);
}
function _0x2b2ae0(_0x5e45af) {
  function _0x282265(_0x3ecaf7) {
    if (typeof _0x3ecaf7 === "string") {
      return function (_0x50c875) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x3ecaf7 / _0x3ecaf7).length !== 1 || _0x3ecaf7 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x282265(++_0x3ecaf7);
  }
  try {
    if (_0x5e45af) {
      return _0x282265;
    } else {
      _0x282265(0);
    }
  } catch (_0x56c78b) {}
}
(function () {
  let _0x522351;
  try {
    const _0x208033 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x522351 = _0x208033();
  } catch (_0x1cbf00) {
    _0x522351 = window;
  }
  _0x522351.setInterval(_0x2b2ae0, 4000);
})();
