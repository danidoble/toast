var lt = (d) => {
  throw TypeError(d);
};
var Y = (d, e, s) => e.has(d) || lt("Cannot " + s);
var t = (d, e, s) => (Y(d, e, "read from private field"), s ? s.call(d) : e.get(d)), i = (d, e, s) => e.has(d) ? lt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(d) : e.set(d, s), n = (d, e, s, h) => (Y(d, e, "write to private field"), h ? h.call(d, s) : e.set(d, s), s), o = (d, e, s) => (Y(d, e, "access private method"), s);
var O, U, j, F, D, f, N, B, x, $, C, w, g, M, u, v, z, p, P, T, k, a, c, y, _, I, S, A, J, V, q, G, K, Q, R, W, H, E, m, L, r, tt, ht, ot, dt, ct, et, ut, mt, gt, st, wt, ft, it, vt, pt, rt, kt;
const l = class l {
  constructor(e = null, s = "success", h = 5e3) {
    i(this, r);
    /**
     * Success icon
     * @private
     */
    i(this, O, '<svg class="dd-toast-icon-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>');
    /**
     * Error icon
     * @private
     */
    i(this, U, '<svg class="dd-toast-icon-error" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>');
    /**
     * Information icon
     * @private
     */
    i(this, j, '<svg class="dd-toast-icon-info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>');
    /**
     * Warning icon
     * @private
     */
    i(this, F, '<svg class="dd-toast-icon-warning" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>');
    /**
     * Default icon
     * @private
     */
    i(this, D, '<svg class="dd-toast-icon-default" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>');
    /**
     * Default template for toast
     * @private
     */
    i(this, f, '<div class="{{color}}" role="alert"><div class="dd-toast-flex-template"><div class="dd-toast-flex-template-shrink-0">{{icon}}</div><div class="dd-toast-ml-3"><div class="dd-toast-text-title">{{title}}</div><div class="dd-toast-text-message">{{message}}</div></div></div>{{timer}}<div class="dd-toast-media">{{media}}</div></div>');
    /**
     * Default template for timer
     * @private
     */
    i(this, N, '<div class="dd-toast-timer {{color-timer}}" {{id-timer}}></div>');
    /**
     * Message to show in toast
     * @private
     */
    i(this, B, "");
    /**
     * Title to show in toast
     * @private
     */
    i(this, x, null);
    /**
     * Media to show in toast
     * @private
     */
    i(this, $, null);
    /**
     * Type of toast
     * ```success```,```error```,```warning```,```info```,```default```,
     * @private
     */
    i(this, C, "default");
    /**
     * Duration of toast
     * @private
     */
    i(this, w, 5e3);
    /**
     * Save current intervals to clear after and not accumulate infinite intervals or make a infinite loop
     * @private
     */
    i(this, g, []);
    /**
     * Save current timers until close each toast
     * @private
     */
    i(this, M, []);
    /**
     * Save queue of each type
     * @private
     */
    //#_queue: Map<any, any> = new Map;
    /**
     * Position of toast
     * ```top-start```,```top-end```,```bottom-start```,```bottom-end```
     * @private
     */
    i(this, u, "top-end");
    /**
     * Close on click? default is ```true```
     * @private
     */
    i(this, v, !0);
    /**
     * Show progress bar or no, default ```true```
     * @private
     */
    i(this, z, !0);
    /**
     * Close toast by timer?
     * @private
     */
    i(this, p, !0);
    /**
     * If user overwrite onclick function
     * @private
     */
    i(this, P, null);
    /**
     * onClick function to execute
     * @param args
     * @private
     */
    i(this, T, (...e) => typeof t(this, P) == "function" ? t(this, P).call(this, ...e) : (console.log(e), null));
    /**
     * If user overwrite icon this is used
     * @private
     */
    i(this, k, null);
    /**
     * id of toast
     * @private
     */
    i(this, a, "dt-0");
    /**
     * prefix of elements id
     * @private
     */
    i(this, c, "danidoble-toast");
    /**
     * default theme
     * @private
     */
    i(this, y, "default");
    /**
     * styles of toast
     * @private
     */
    i(this, _, "");
    /**
     * styles of timer toast
     * @private
     */
    i(this, I, "");
    /**
     * default classes of default toast
     * @private
     */
    i(this, S, "dd-toast theme default");
    /**
     * default timer classes of default toast
     * @private
     */
    i(this, A, "dd-toast theme default-timer");
    /**
     * default success of default toast
     * @private
     */
    i(this, J, "dd-toast theme success");
    /**
     * default classes timer of success toast
     * @private
     */
    i(this, V, "dd-toast theme success-timer");
    /**
     * default classes of warning toast
     * @private
     */
    i(this, q, "dd-toast theme warning");
    /**
     * default classes timer of warning toast
     * @private
     */
    i(this, G, "dd-toast theme warning-timer");
    /**
     * default classes of error toast
     * @private
     */
    i(this, K, "dd-toast theme error");
    /**
     * default classes timer of error toast
     * @private
     */
    i(this, Q, "dd-toast theme error-timer");
    /**
     * default classes of info toast
     * @private
     */
    i(this, R, "dd-toast theme info");
    /**
     * default classes timer of info toast
     * @private
     */
    i(this, W, "dd-toast theme info-timer");
    /**
     * Listener of user
     * @private
     */
    i(this, H, /* @__PURE__ */ new Map());
    if (n(this, a, "dt-" + crypto.randomUUID()), e === null)
      return this;
    this.show(e, s, h);
  }
  toString() {
    return JSON.stringify(this.getObject());
  }
  show(e = null, s = "success", h = 5e3) {
    if (e === null) {
      o(this, r, rt).call(this).then(() => {
      });
      return;
    } else typeof e == "object" ? o(this, r, tt).call(this, e) : o(this, r, tt).call(this, {
      message: e,
      type: s,
      duration: h
    });
    o(this, r, rt).call(this).then(() => {
    });
  }
  getObject() {
    return {
      message: t(this, B),
      title: t(this, x),
      media: t(this, $),
      type: t(this, C),
      duration: t(this, w),
      position: t(this, u),
      icon: t(this, k),
      template: t(this, f),
      closeOnClick: t(this, v),
      onClick: t(this, P),
      theme: t(this, y),
      showProgressBar: t(this, z),
      closeByTimer: t(this, p),
      limitToast: t(l, E)
    };
  }
  on(e, s) {
    t(this, H).set(crypto.randomUUID(), {
      name: e,
      callback: s
    });
  }
  static getCurrentToasts() {
    return {
      current: t(l, m).size,
      next: t(l, L).size
    };
  }
  async close() {
    let e = this.getElement();
    return e ? (o(this, r, st).call(this, e).then(() => {
      let s = this.getParent();
      s && s.innerHTML === "" && t(l, m).size === 0 && t(l, L).size === 0 && s.remove();
    }), new Promise((s) => {
      s(!0);
    })) : new Promise((s) => {
      s(!1);
    });
  }
  getId() {
    return t(this, a);
  }
  getFullId() {
    return `${t(this, c)}-${t(this, a)}`;
  }
  getFullContainerId() {
    return `${t(this, c)}-container-${t(this, u)}`;
  }
  getElement() {
    return document.getElementById(this.getFullId());
  }
  getParent() {
    return document.getElementById(this.getFullContainerId());
  }
  set title(e) {
    n(this, x, e);
  }
  get title() {
    return t(this, x);
  }
  set message(e) {
    n(this, B, e);
  }
  get message() {
    return t(this, B);
  }
  set media(e) {
    n(this, $, e);
  }
  get media() {
    return t(this, $);
  }
  set type(e) {
    n(this, C, e);
  }
  get type() {
    return t(this, C);
  }
  set duration(e) {
    n(this, w, e);
  }
  get duration() {
    return t(this, w);
  }
  set closeByTimer(e) {
    n(this, p, e);
  }
  get closeByTimer() {
    return t(this, p);
  }
  set closeOnClick(e) {
    n(this, v, e);
  }
  get closeOnClick() {
    return t(this, v);
  }
  set icon(e) {
    n(this, k, e);
  }
  get icon() {
    return t(this, k);
  }
  static set limitToast(e) {
    n(l, E, e);
  }
  get limitToast() {
    return t(l, E);
  }
  static get limitToast() {
    return t(l, E);
  }
  set position(e) {
    n(this, u, e);
  }
  get position() {
    return t(this, u);
  }
  set showProgressBar(e) {
    n(this, z, e);
  }
  get showProgressBar() {
    return t(this, z);
  }
  set template(e) {
    n(this, f, e);
  }
  get template() {
    return t(this, f);
  }
  set theme(e) {
    n(this, y, e);
  }
  get theme() {
    return t(this, y);
  }
};
O = new WeakMap(), U = new WeakMap(), j = new WeakMap(), F = new WeakMap(), D = new WeakMap(), f = new WeakMap(), N = new WeakMap(), B = new WeakMap(), x = new WeakMap(), $ = new WeakMap(), C = new WeakMap(), w = new WeakMap(), g = new WeakMap(), M = new WeakMap(), u = new WeakMap(), v = new WeakMap(), z = new WeakMap(), p = new WeakMap(), P = new WeakMap(), T = new WeakMap(), k = new WeakMap(), a = new WeakMap(), c = new WeakMap(), y = new WeakMap(), _ = new WeakMap(), I = new WeakMap(), S = new WeakMap(), A = new WeakMap(), J = new WeakMap(), V = new WeakMap(), q = new WeakMap(), G = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), R = new WeakMap(), W = new WeakMap(), H = new WeakMap(), E = new WeakMap(), m = new WeakMap(), L = new WeakMap(), r = new WeakSet(), /**
 *
 * @param {string} message
 * @param {string} type
 * @param {number} duration
 * @param {string} position
 * @param {string|null} icon
 * @param {string|null} template
 * @param {boolean} closeOnClick
 * @param {CallableFunction|null} onClick
 * @param {null|string} theme
 * @param {boolean} showProgressBar
 * @param {boolean} closeByTimer
 * @param {number} limitToast
 * @param {media} media
 * @param {title} title
 * @private
 */
tt = function({
  message: e = "",
  type: s = "default",
  duration: h = 5e3,
  position: b = "top-end",
  icon: nt = null,
  template: X = null,
  closeOnClick: yt = !0,
  onClick: _t = null,
  theme: at = null,
  showProgressBar: It = !0,
  closeByTimer: Et = !0,
  media: Lt = null,
  title: Bt = null
}) {
  n(this, B, e), n(this, x, Bt), n(this, $, Lt), n(this, C, s), n(this, w, h), n(this, u, b), X !== null && X !== "" && n(this, f, X ?? t(this, f)), nt !== null && n(this, k, nt), n(this, v, yt), n(this, P, _t), at ? n(this, y, at) : n(this, y, s), n(this, z, It), n(this, p, Et);
}, ht = function() {
  if (t(this, k) !== null)
    return t(this, k);
  let e;
  switch (t(this, C)) {
    case "success":
      e = t(this, O);
      break;
    case "error":
      e = t(this, U);
      break;
    case "info":
      e = t(this, j);
      break;
    case "warning":
      e = t(this, F);
      break;
    default:
      e = t(this, D);
      break;
  }
  return e;
}, ot = function() {
  let e = t(this, f);
  return o(this, r, dt).call(this), t(this, z) ? e = e.replace("{{timer}}", t(this, N)) : e = e.replace("{{timer}}", ""), e = e.replace("{{icon}}", o(this, r, ht).call(this)).replace("{{title}}", t(this, x) ?? "").replace("{{message}}", t(this, B)).replace("{{media}}", t(this, $) ?? "").replace("{{color}}", t(this, _)).replace("{{color-timer}}", t(this, I)).replace("{{id-timer}}", `id="${t(this, c)}-timer-${t(this, a)}"`), e;
}, dt = function() {
  switch (t(this, y)) {
    case "success":
      n(this, _, t(this, J)), n(this, I, t(this, V));
      break;
    case "error":
      n(this, _, t(this, K)), n(this, I, t(this, Q));
      break;
    case "warning":
      n(this, _, t(this, q)), n(this, I, t(this, G));
      break;
    case "info":
      n(this, _, t(this, R)), n(this, I, t(this, W));
      break;
    // case 'default':
    default:
      n(this, _, t(this, S)), n(this, I, t(this, A));
      break;
  }
}, ct = function() {
  return ["dd-toast-position", t(this, u)];
}, et = function() {
  let e = `${t(this, c)}-container-${t(this, u)}`, s = document.getElementById(e);
  if (!s) {
    let h = document.createElement("div");
    h.id = e, h.classList.add(...o(this, r, ct).call(this)), h.style.zIndex = "1600", h.style.transition = "all 0.6s ease-in-out", document.body.append(h), s = h;
  }
  if (s.clientHeight > window.innerHeight - 100)
    do
      s.childNodes[0].remove();
    while (s.clientHeight > window.innerHeight - 100);
  return s;
}, ut = async function() {
  let e = document.getElementById(`${t(this, c)}-${t(this, a)}`);
  return new Promise((s) => {
    setTimeout(() => {
      e && (e.style.translate = "0%"), s();
    }, 600);
  });
}, mt = async function() {
  let e = this.getElement();
  t(this, H).forEach((s) => {
    e == null || e.addEventListener(s.name, s.callback);
  });
}, gt = async function() {
  let e = document.getElementById(`${t(this, c)}-${t(this, a)}`);
  return e && (t(this, u).includes("end") ? e.style.translate = "110%" : e.style.translate = "-110%"), new Promise((s) => {
    setTimeout(() => {
      e == null || e.dispatchEvent(new Event("closed")), s();
    }, 600);
  });
}, st = async function(e) {
  await o(this, r, gt).call(this), e.remove(), t(l, m).has(t(this, a)) && t(l, m).delete(t(this, a)), delete t(this, M)[t(this, a)], t(this, g)[t(this, a)] && clearInterval(t(this, g)[t(this, a)]), delete t(this, g)[t(this, a)];
}, wt = function() {
  let e = o(this, r, ot).call(this), s = document.createElement("div");
  return s.id = `${t(this, c)}-${t(this, a)}`, s.innerHTML = e, s.classList.add(t(this, c)), s.style.transition = "all 0.5s ease-in-out", t(this, u).includes("end") ? s.style.translate = "110%" : s.style.translate = "-110%", t(this, p) && (o(this, r, ft).call(this, s), o(this, r, vt).call(this, s)), o(this, r, pt).call(this, s), s;
}, ft = function(e) {
  e.addEventListener("mouseover", () => {
    t(this, g)[t(this, a)] && clearInterval(t(this, g)[t(this, a)]);
  });
}, it = function(e, s = null) {
  s || (s = document.getElementById(`${t(this, c)}-timer-${t(this, a)}`)), t(this, g)[t(this, a)] = setInterval(() => {
    t(this, M)[t(this, a)] <= 0 ? (clearInterval(t(this, g)[t(this, a)]), delete t(this, g)[t(this, a)], o(this, r, st).call(this, e).then(() => {
      let h = this.getParent();
      h && h.innerHTML === "" && t(l, m).size === 0 && t(l, L).size === 0 && h.remove();
    })) : (s || (s = document.getElementById(`${t(this, c)}-timer-${t(this, a)}`)), s && (s.style.width = 100 - (t(this, w) - t(this, M)[t(this, a)]) * 100 / t(this, w) + "%"), t(this, M)[t(this, a)] -= 10);
  }, 10);
}, vt = function(e) {
  e.addEventListener("mouseout", () => {
    o(this, r, it).call(this, e);
  });
}, pt = function(e) {
  if (t(this, T) !== null && t(this, T) !== void 0 && typeof t(this, T) == "function") {
    e.classList.add("dd-toast-pointer");
    let s = this;
    e.addEventListener("click", async (...h) => {
      var b;
      t(s, v) && await s.close(), t(b = s, T).call(b, s, ...h);
    });
  } else if (t(this, v)) {
    e.classList.add("dd-toast-pointer");
    let s = this;
    e.addEventListener("click", async () => {
      await s.close();
    });
  }
}, rt = async function() {
  let e = o(this, r, et).call(this);
  await o(this, r, kt).call(this, t(this, a));
  let s = o(this, r, wt).call(this);
  e.append(s), await o(this, r, mt).call(this), await o(this, r, ut).call(this), t(this, M)[t(this, a)] = t(this, w), t(this, p) && o(this, r, it).call(this, s, document.getElementById(`${t(this, c)}-timer-${t(this, a)}`));
}, kt = async function(e) {
  let s = this.getParent();
  return t(l, m).size < t(l, E) ? (t(l, m).set(e, e), new Promise((h) => {
    h(!1);
  })) : (t(l, L).set(e, e), new Promise((h) => {
    let b = setInterval(async () => {
      s || (s = o(this, r, et).call(this)), s && t(l, m).size < t(l, E) && t(l, L).has(e) && (t(l, m).set(e, e), t(l, L).delete(e), clearInterval(b), h(!0));
    }, 50);
  }));
}, /**
 * Limit of toast to show at same time
 * @private
 */
i(l, E, 5), /**
 * save current toast ids
 * @private
 */
i(l, m, /* @__PURE__ */ new Map()), /**
 * save next toast ids
 * @private
 */
i(l, L, /* @__PURE__ */ new Map());
let Z = l;
function $t(d = null, e = "success", s = 5e3) {
  return new Z(d, e, s);
}
export {
  Z as Toast,
  $t as toast
};
