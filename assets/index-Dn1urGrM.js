let sc;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver((r) => {
      for (const o of r) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(r) {
      const o = {};
      return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function s(r) {
      if (r.ep) return;
      r.ep = true;
      const o = n(r);
      fetch(r.href, o);
    }
  })();
  function is(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const K = {}, yt = [], Fe = () => {
  }, gr = () => false, yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ls = (e) => e.startsWith("onUpdate:"), ce = Object.assign, cs = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Ro = Object.prototype.hasOwnProperty, H = (e, t) => Ro.call(e, t), N = Array.isArray, wt = (e) => wn(e) === "[object Map]", br = (e) => wn(e) === "[object Set]", D = (e) => typeof e == "function", se = (e) => typeof e == "string", et = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", mr = (e) => (X(e) || D(e)) && D(e.then) && D(e.catch), yr = Object.prototype.toString, wn = (e) => yr.call(e), Mo = (e) => wn(e).slice(8, -1), wr = (e) => wn(e) === "[object Object]", fs = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dt = is(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), vn = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, Io = /-\w/g, we = vn((e) => e.replace(Io, (t) => t.slice(1).toUpperCase())), Oo = /\B([A-Z])/g, dt = vn((e) => e.replace(Oo, "-$1").toLowerCase()), xn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fn = vn((e) => e ? `on${xn(e)}` : ""), Ze = (e, t) => !Object.is(e, t), rn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, vr = (e, t, n, s = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: s,
      value: n
    });
  }, us = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  let Ds;
  const Sn = () => Ds || (Ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function as(e) {
    if (N(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n], r = se(s) ? No(s) : as(s);
        if (r) for (const o in r) t[o] = r[o];
      }
      return t;
    } else if (se(e) || X(e)) return e;
  }
  const Po = /;(?![^(]*\))/g, Fo = /:([^]+)/, Do = /\/\*[^]*?\*\//g;
  function No(e) {
    const t = {};
    return e.replace(Do, "").split(Po).forEach((n) => {
      if (n) {
        const s = n.split(Fo);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }), t;
  }
  function at(e) {
    let t = "";
    if (se(e)) t = e;
    else if (N(e)) for (let n = 0; n < e.length; n++) {
      const s = at(e[n]);
      s && (t += s + " ");
    }
    else if (X(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  const $o = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jo = is($o);
  function xr(e) {
    return !!e || e === "";
  }
  const Sr = (e) => !!(e && e.__v_isRef === true), ne = (e) => se(e) ? e : e == null ? "" : N(e) || X(e) && (e.toString === yr || !D(e.toString)) ? Sr(e) ? ne(e.value) : JSON.stringify(e, Cr, 2) : String(e), Cr = (e, t) => Sr(t) ? Cr(e, t.value) : wt(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [s, r], o) => (n[Dn(s, o) + " =>"] = r, n), {})
  } : br(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Dn(n))
  } : et(t) ? Dn(t) : X(t) && !N(t) && !wr(t) ? String(t) : t, Dn = (e, t = "") => {
    var n;
    return et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let he;
  class Vo {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = he;
        try {
          return he = this, t();
        } finally {
          he = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = he, he = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (he = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, s;
        for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function Lo() {
    return he;
  }
  let G;
  const Nn = /* @__PURE__ */ new WeakSet();
  class Er {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Nn.has(this) && (Nn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ar(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ns(this), Rr(this);
      const t = G, n = Ce;
      G = this, Ce = true;
      try {
        return this.fn();
      } finally {
        Mr(this), G = t, Ce = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) hs(t);
        this.deps = this.depsTail = void 0, Ns(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Nn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      zn(this) && this.run();
    }
    get dirty() {
      return zn(this);
    }
  }
  let Tr = 0, Nt, $t;
  function Ar(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = $t, $t = e;
      return;
    }
    e.next = Nt, Nt = e;
  }
  function ds() {
    Tr++;
  }
  function _s() {
    if (--Tr > 0) return;
    if ($t) {
      let t = $t;
      for ($t = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Nt; ) {
      let t = Nt;
      for (Nt = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Rr(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Mr(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
      const r = s.prevDep;
      s.version === -1 ? (s === n && (n = r), hs(s), Bo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function zn(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ir(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Ir(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wt) || (e.globalVersion = Wt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zn(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = G, s = Ce;
    G = e, Ce = true;
    try {
      Rr(e);
      const r = e.fn(e._value);
      (t.version === 0 || Ze(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      G = n, Ce = s, Mr(e), e.flags &= -3;
    }
  }
  function hs(e, t = false) {
    const { dep: n, prevSub: s, nextSub: r } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
      n.computed.flags &= -5;
      for (let o = n.computed.deps; o; o = o.nextDep) hs(o, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Bo(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let Ce = true;
  const Or = [];
  function He() {
    Or.push(Ce), Ce = false;
  }
  function Ue() {
    const e = Or.pop();
    Ce = e === void 0 ? true : e;
  }
  function Ns(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = G;
      G = void 0;
      try {
        t();
      } finally {
        G = n;
      }
    }
  }
  let Wt = 0;
  class Ho {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class ps {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!G || !Ce || G === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== G) n = this.activeLink = new Ho(G, this), G.deps ? (n.prevDep = G.depsTail, G.depsTail.nextDep = n, G.depsTail = n) : G.deps = G.depsTail = n, Pr(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const s = n.nextDep;
        s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = G.depsTail, n.nextDep = void 0, G.depsTail.nextDep = n, G.depsTail = n, G.deps === n && (G.deps = s);
      }
      return n;
    }
    trigger(t) {
      this.version++, Wt++, this.notify(t);
    }
    notify(t) {
      ds();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        _s();
      }
    }
  }
  function Pr(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let s = t.deps; s; s = s.nextDep) Pr(s);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Gn = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ Symbol(""), Jn = /* @__PURE__ */ Symbol(""), kt = /* @__PURE__ */ Symbol("");
  function oe(e, t, n) {
    if (Ce && G) {
      let s = Gn.get(e);
      s || Gn.set(e, s = /* @__PURE__ */ new Map());
      let r = s.get(n);
      r || (s.set(n, r = new ps()), r.map = s, r.key = n), r.track();
    }
  }
  function Le(e, t, n, s, r, o) {
    const i = Gn.get(e);
    if (!i) {
      Wt++;
      return;
    }
    const l = (c) => {
      c && c.trigger();
    };
    if (ds(), t === "clear") i.forEach(l);
    else {
      const c = N(e), d = c && fs(n);
      if (c && n === "length") {
        const u = Number(s);
        i.forEach((h, y) => {
          (y === "length" || y === kt || !et(y) && y >= u) && l(h);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(kt)), t) {
        case "add":
          c ? d && l(i.get("length")) : (l(i.get(ct)), wt(e) && l(i.get(Jn)));
          break;
        case "delete":
          c || (l(i.get(ct)), wt(e) && l(i.get(Jn)));
          break;
        case "set":
          wt(e) && l(i.get(ct));
          break;
      }
    }
    _s();
  }
  function _t(e) {
    const t = B(e);
    return t === e ? t : (oe(t, "iterate", kt), ye(e) ? t : t.map(Ee));
  }
  function Cn(e) {
    return oe(e = B(e), "iterate", kt), e;
  }
  function Ge(e, t) {
    return We(e) ? ft(e) ? St(Ee(t)) : St(t) : Ee(t);
  }
  const Uo = {
    __proto__: null,
    [Symbol.iterator]() {
      return $n(this, Symbol.iterator, (e) => Ge(this, e));
    },
    concat(...e) {
      return _t(this).concat(...e.map((t) => N(t) ? _t(t) : t));
    },
    entries() {
      return $n(this, "entries", (e) => (e[1] = Ge(this, e[1]), e));
    },
    every(e, t) {
      return je(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return je(this, "filter", e, t, (n) => n.map((s) => Ge(this, s)), arguments);
    },
    find(e, t) {
      return je(this, "find", e, t, (n) => Ge(this, n), arguments);
    },
    findIndex(e, t) {
      return je(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return je(this, "findLast", e, t, (n) => Ge(this, n), arguments);
    },
    findLastIndex(e, t) {
      return je(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return je(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return jn(this, "includes", e);
    },
    indexOf(...e) {
      return jn(this, "indexOf", e);
    },
    join(e) {
      return _t(this).join(e);
    },
    lastIndexOf(...e) {
      return jn(this, "lastIndexOf", e);
    },
    map(e, t) {
      return je(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Mt(this, "pop");
    },
    push(...e) {
      return Mt(this, "push", e);
    },
    reduce(e, ...t) {
      return $s(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return $s(this, "reduceRight", e, t);
    },
    shift() {
      return Mt(this, "shift");
    },
    some(e, t) {
      return je(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Mt(this, "splice", e);
    },
    toReversed() {
      return _t(this).toReversed();
    },
    toSorted(e) {
      return _t(this).toSorted(e);
    },
    toSpliced(...e) {
      return _t(this).toSpliced(...e);
    },
    unshift(...e) {
      return Mt(this, "unshift", e);
    },
    values() {
      return $n(this, "values", (e) => Ge(this, e));
    }
  };
  function $n(e, t, n) {
    const s = Cn(e), r = s[t]();
    return s !== e && !ye(e) && (r._next = r.next, r.next = () => {
      const o = r._next();
      return o.done || (o.value = n(o.value)), o;
    }), r;
  }
  const Wo = Array.prototype;
  function je(e, t, n, s, r, o) {
    const i = Cn(e), l = i !== e && !ye(e), c = i[t];
    if (c !== Wo[t]) {
      const h = c.apply(e, o);
      return l ? Ee(h) : h;
    }
    let d = n;
    i !== e && (l ? d = function(h, y) {
      return n.call(this, Ge(e, h), y, e);
    } : n.length > 2 && (d = function(h, y) {
      return n.call(this, h, y, e);
    }));
    const u = c.call(i, d, s);
    return l && r ? r(u) : u;
  }
  function $s(e, t, n, s) {
    const r = Cn(e);
    let o = n;
    return r !== e && (ye(e) ? n.length > 3 && (o = function(i, l, c) {
      return n.call(this, i, l, c, e);
    }) : o = function(i, l, c) {
      return n.call(this, i, Ge(e, l), c, e);
    }), r[t](o, ...s);
  }
  function jn(e, t, n) {
    const s = B(e);
    oe(s, "iterate", kt);
    const r = s[t](...n);
    return (r === -1 || r === false) && ys(n[0]) ? (n[0] = B(n[0]), s[t](...n)) : r;
  }
  function Mt(e, t, n = []) {
    He(), ds();
    const s = B(e)[t].apply(e, n);
    return _s(), Ue(), s;
  }
  const ko = is("__proto__,__v_isRef,__isVue"), Fr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et));
  function Ko(e) {
    et(e) || (e = String(e));
    const t = B(this);
    return oe(t, "has", e), t.hasOwnProperty(e);
  }
  class Dr {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, s) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, o = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return o;
      if (n === "__v_raw") return s === (r ? o ? ti : Vr : o ? jr : $r).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
      const i = N(t);
      if (!r) {
        let c;
        if (i && (c = Uo[n])) return c;
        if (n === "hasOwnProperty") return Ko;
      }
      const l = Reflect.get(t, n, le(t) ? t : s);
      if ((et(n) ? Fr.has(n) : ko(n)) || (r || oe(t, "get", n), o)) return l;
      if (le(l)) {
        const c = i && fs(n) ? l : l.value;
        return r && X(c) ? Xn(c) : c;
      }
      return X(l) ? r ? Xn(l) : bs(l) : l;
    }
  }
  class Nr extends Dr {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, s, r) {
      let o = t[n];
      const i = N(t) && fs(n);
      if (!this._isShallow) {
        const d = We(o);
        if (!ye(s) && !We(s) && (o = B(o), s = B(s)), !i && le(o) && !le(s)) return d || (o.value = s), true;
      }
      const l = i ? Number(n) < t.length : H(t, n), c = Reflect.set(t, n, s, le(t) ? t : r);
      return t === B(r) && (l ? Ze(s, o) && Le(t, "set", n, s) : Le(t, "add", n, s)), c;
    }
    deleteProperty(t, n) {
      const s = H(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && s && Le(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const s = Reflect.has(t, n);
      return (!et(n) || !Fr.has(n)) && oe(t, "has", n), s;
    }
    ownKeys(t) {
      return oe(t, "iterate", N(t) ? "length" : ct), Reflect.ownKeys(t);
    }
  }
  class qo extends Dr {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const zo = new Nr(), Go = new qo(), Jo = new Nr(true);
  const Yn = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
  function Yo(e, t, n) {
    return function(...s) {
      const r = this.__v_raw, o = B(r), i = wt(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, d = r[e](...s), u = n ? Yn : t ? St : Ee;
      return !t && oe(o, "iterate", c ? Jn : ct), {
        next() {
          const { value: h, done: y } = d.next();
          return y ? {
            value: h,
            done: y
          } : {
            value: l ? [
              u(h[0]),
              u(h[1])
            ] : u(h),
            done: y
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function tn(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Xo(e, t) {
    const n = {
      get(r) {
        const o = this.__v_raw, i = B(o), l = B(r);
        e || (Ze(r, l) && oe(i, "get", r), oe(i, "get", l));
        const { has: c } = en(i), d = t ? Yn : e ? St : Ee;
        if (c.call(i, r)) return d(o.get(r));
        if (c.call(i, l)) return d(o.get(l));
        o !== i && o.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && oe(B(r), "iterate", ct), r.size;
      },
      has(r) {
        const o = this.__v_raw, i = B(o), l = B(r);
        return e || (Ze(r, l) && oe(i, "has", r), oe(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
      },
      forEach(r, o) {
        const i = this, l = i.__v_raw, c = B(l), d = t ? Yn : e ? St : Ee;
        return !e && oe(c, "iterate", ct), l.forEach((u, h) => r.call(o, d(u), d(h), i));
      }
    };
    return ce(n, e ? {
      add: tn("add"),
      set: tn("set"),
      delete: tn("delete"),
      clear: tn("clear")
    } : {
      add(r) {
        !t && !ye(r) && !We(r) && (r = B(r));
        const o = B(this);
        return en(o).has.call(o, r) || (o.add(r), Le(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !ye(o) && !We(o) && (o = B(o));
        const i = B(this), { has: l, get: c } = en(i);
        let d = l.call(i, r);
        d || (r = B(r), d = l.call(i, r));
        const u = c.call(i, r);
        return i.set(r, o), d ? Ze(o, u) && Le(i, "set", r, o) : Le(i, "add", r, o), this;
      },
      delete(r) {
        const o = B(this), { has: i, get: l } = en(o);
        let c = i.call(o, r);
        c || (r = B(r), c = i.call(o, r)), l && l.call(o, r);
        const d = o.delete(r);
        return c && Le(o, "delete", r, void 0), d;
      },
      clear() {
        const r = B(this), o = r.size !== 0, i = r.clear();
        return o && Le(r, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((r) => {
      n[r] = Yo(r, e, t);
    }), n;
  }
  function gs(e, t) {
    const n = Xo(e, t);
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(H(n, r) && r in s ? n : s, r, o);
  }
  const Zo = {
    get: gs(false, false)
  }, Qo = {
    get: gs(false, true)
  }, ei = {
    get: gs(true, false)
  };
  const $r = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap();
  function ni(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function si(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ni(Mo(e));
  }
  function bs(e) {
    return We(e) ? e : ms(e, false, zo, Zo, $r);
  }
  function ri(e) {
    return ms(e, false, Jo, Qo, jr);
  }
  function Xn(e) {
    return ms(e, true, Go, ei, Vr);
  }
  function ms(e, t, n, s, r) {
    if (!X(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = si(e);
    if (o === 0) return e;
    const i = r.get(e);
    if (i) return i;
    const l = new Proxy(e, o === 2 ? s : n);
    return r.set(e, l), l;
  }
  function ft(e) {
    return We(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function We(e) {
    return !!(e && e.__v_isReadonly);
  }
  function ye(e) {
    return !!(e && e.__v_isShallow);
  }
  function ys(e) {
    return e ? !!e.__v_raw : false;
  }
  function B(e) {
    const t = e && e.__v_raw;
    return t ? B(t) : e;
  }
  function oi(e) {
    return !H(e, "__v_skip") && Object.isExtensible(e) && vr(e, "__v_skip", true), e;
  }
  const Ee = (e) => X(e) ? bs(e) : e, St = (e) => X(e) ? Xn(e) : e;
  function le(e) {
    return e ? e.__v_isRef === true : false;
  }
  function Xe(e) {
    return ii(e, false);
  }
  function ii(e, t) {
    return le(e) ? e : new li(e, t);
  }
  class li {
    constructor(t, n) {
      this.dep = new ps(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : B(t), this._value = n ? t : Ee(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, s = this.__v_isShallow || ye(t) || We(t);
      t = s ? t : B(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : Ee(t), this.dep.trigger());
    }
  }
  function on(e) {
    return le(e) ? e.value : e;
  }
  const ci = {
    get: (e, t, n) => t === "__v_raw" ? e : on(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
      const r = e[t];
      return le(r) && !le(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
    }
  };
  function Lr(e) {
    return ft(e) ? e : new Proxy(e, ci);
  }
  class fi {
    constructor(t, n, s) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new ps(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && G !== this) return Ar(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Ir(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function ui(e, t, n = false) {
    let s, r;
    return D(e) ? s = e : (s = e.get, r = e.set), new fi(s, r, n);
  }
  const nn = {}, dn = /* @__PURE__ */ new WeakMap();
  let lt;
  function ai(e, t = false, n = lt) {
    if (n) {
      let s = dn.get(n);
      s || dn.set(n, s = []), s.push(e);
    }
  }
  function di(e, t, n = K) {
    const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c } = n, d = (I) => r ? I : ye(I) || r === false || r === 0 ? Be(I, 1) : Be(I);
    let u, h, y, w, R = false, M = false;
    if (le(e) ? (h = () => e.value, R = ye(e)) : ft(e) ? (h = () => d(e), R = true) : N(e) ? (M = true, R = e.some((I) => ft(I) || ye(I)), h = () => e.map((I) => {
      if (le(I)) return I.value;
      if (ft(I)) return d(I);
      if (D(I)) return c ? c(I, 2) : I();
    })) : D(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
      if (y) {
        He();
        try {
          y();
        } finally {
          Ue();
        }
      }
      const I = lt;
      lt = u;
      try {
        return c ? c(e, 3, [
          w
        ]) : e(w);
      } finally {
        lt = I;
      }
    } : h = Fe, t && r) {
      const I = h, Q = r === true ? 1 / 0 : r;
      h = () => Be(I(), Q);
    }
    const k = Lo(), E = () => {
      u.stop(), k && k.active && cs(k.effects, u);
    };
    if (o && t) {
      const I = t;
      t = (...Q) => {
        I(...Q), E();
      };
    }
    let P = M ? new Array(e.length).fill(nn) : nn;
    const U = (I) => {
      if (!(!(u.flags & 1) || !u.dirty && !I)) if (t) {
        const Q = u.run();
        if (r || R || (M ? Q.some((xe, ee) => Ze(xe, P[ee])) : Ze(Q, P))) {
          y && y();
          const xe = lt;
          lt = u;
          try {
            const ee = [
              Q,
              P === nn ? void 0 : M && P[0] === nn ? [] : P,
              w
            ];
            P = Q, c ? c(t, 3, ee) : t(...ee);
          } finally {
            lt = xe;
          }
        }
      } else u.run();
    };
    return l && l(U), u = new Er(h), u.scheduler = i ? () => i(U, false) : U, w = (I) => ai(I, false, u), y = u.onStop = () => {
      const I = dn.get(u);
      if (I) {
        if (c) c(I, 4);
        else for (const Q of I) Q();
        dn.delete(u);
      }
    }, t ? s ? U(true) : P = u.run() : i ? i(U.bind(null, true), true) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
  }
  function Be(e, t = 1 / 0, n) {
    if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, le(e)) Be(e.value, t, n);
    else if (N(e)) for (let s = 0; s < e.length; s++) Be(e[s], t, n);
    else if (br(e) || wt(e)) e.forEach((s) => {
      Be(s, t, n);
    });
    else if (wr(e)) {
      for (const s in e) Be(e[s], t, n);
      for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && Be(e[s], t, n);
    }
    return e;
  }
  function Gt(e, t, n, s) {
    try {
      return s ? e(...s) : e();
    } catch (r) {
      En(r, t, n);
    }
  }
  function De(e, t, n, s) {
    if (D(e)) {
      const r = Gt(e, t, n, s);
      return r && mr(r) && r.catch((o) => {
        En(o, t, n);
      }), r;
    }
    if (N(e)) {
      const r = [];
      for (let o = 0; o < e.length; o++) r.push(De(e[o], t, n, s));
      return r;
    }
  }
  function En(e, t, n, s = true) {
    const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || K;
    if (t) {
      let l = t.parent;
      const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const u = l.ec;
        if (u) {
          for (let h = 0; h < u.length; h++) if (u[h](e, c, d) === false) return;
        }
        l = l.parent;
      }
      if (o) {
        He(), Gt(o, null, 10, [
          e,
          c,
          d
        ]), Ue();
        return;
      }
    }
    _i(e, n, r, s, i);
  }
  function _i(e, t, n, s = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const ae = [];
  let Oe = -1;
  const vt = [];
  let Je = null, bt = 0;
  const Br = Promise.resolve();
  let _n = null;
  function hi(e) {
    const t = _n || Br;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function pi(e) {
    let t = Oe + 1, n = ae.length;
    for (; t < n; ) {
      const s = t + n >>> 1, r = ae[s], o = Kt(r);
      o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
    }
    return t;
  }
  function ws(e) {
    if (!(e.flags & 1)) {
      const t = Kt(e), n = ae[ae.length - 1];
      !n || !(e.flags & 2) && t >= Kt(n) ? ae.push(e) : ae.splice(pi(t), 0, e), e.flags |= 1, Hr();
    }
  }
  function Hr() {
    _n || (_n = Br.then(Wr));
  }
  function gi(e) {
    N(e) ? vt.push(...e) : Je && e.id === -1 ? Je.splice(bt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), Hr();
  }
  function js(e, t, n = Oe + 1) {
    for (; n < ae.length; n++) {
      const s = ae[n];
      if (s && s.flags & 2) {
        if (e && s.id !== e.uid) continue;
        ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
      }
    }
  }
  function Ur(e) {
    if (vt.length) {
      const t = [
        ...new Set(vt)
      ].sort((n, s) => Kt(n) - Kt(s));
      if (vt.length = 0, Je) {
        Je.push(...t);
        return;
      }
      for (Je = t, bt = 0; bt < Je.length; bt++) {
        const n = Je[bt];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Je = null, bt = 0;
    }
  }
  const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Wr(e) {
    try {
      for (Oe = 0; Oe < ae.length; Oe++) {
        const t = ae[Oe];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Gt(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Oe < ae.length; Oe++) {
        const t = ae[Oe];
        t && (t.flags &= -2);
      }
      Oe = -1, ae.length = 0, Ur(), _n = null, (ae.length || vt.length) && Wr();
    }
  }
  let be = null, kr = null;
  function hn(e) {
    const t = be;
    return be = e, kr = e && e.type.__scopeId || null, t;
  }
  function bi(e, t = be, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
      s._d && Gs(-1);
      const o = hn(t);
      let i;
      try {
        i = e(...r);
      } finally {
        hn(o), s._d && Gs(1);
      }
      return i;
    };
    return s._n = true, s._c = true, s._d = true, s;
  }
  function mi(e, t) {
    if (be === null) return e;
    const n = Mn(be), s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
      let [o, i, l, c = K] = t[r];
      o && (D(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && Be(i), s.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c
      }));
    }
    return e;
  }
  function rt(e, t, n, s) {
    const r = e.dirs, o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
      const l = r[i];
      o && (l.oldValue = o[i].value);
      let c = l.dir[s];
      c && (He(), De(c, n, 8, [
        e.el,
        l,
        e,
        t
      ]), Ue());
    }
  }
  function yi(e, t) {
    if (ie) {
      let n = ie.provides;
      const s = ie.parent && ie.parent.provides;
      s === n && (n = ie.provides = Object.create(s)), n[e] = t;
    }
  }
  function ln(e, t, n = false) {
    const s = vl();
    if (s || xt) {
      let r = xt ? xt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return n && D(t) ? t.call(s && s.proxy) : t;
    }
  }
  const wi = /* @__PURE__ */ Symbol.for("v-scx"), vi = () => ln(wi);
  function cn(e, t, n) {
    return Kr(e, t, n);
  }
  function Kr(e, t, n = K) {
    const { immediate: s, deep: r, flush: o, once: i } = n, l = ce({}, n), c = t && s || !t && o !== "post";
    let d;
    if (zt) {
      if (o === "sync") {
        const w = vi();
        d = w.__watcherHandles || (w.__watcherHandles = []);
      } else if (!c) {
        const w = () => {
        };
        return w.stop = Fe, w.resume = Fe, w.pause = Fe, w;
      }
    }
    const u = ie;
    l.call = (w, R, M) => De(w, u, R, M);
    let h = false;
    o === "post" ? l.scheduler = (w) => {
      ge(w, u && u.suspense);
    } : o !== "sync" && (h = true, l.scheduler = (w, R) => {
      R ? w() : ws(w);
    }), l.augmentJob = (w) => {
      t && (w.flags |= 4), h && (w.flags |= 2, u && (w.id = u.uid, w.i = u));
    };
    const y = di(e, t, l);
    return zt && (d ? d.push(y) : c && y()), y;
  }
  function xi(e, t, n) {
    const s = this.proxy, r = se(e) ? e.includes(".") ? qr(s, e) : () => s[e] : e.bind(s, s);
    let o;
    D(t) ? o = t : (o = t.handler, n = t);
    const i = Jt(this), l = Kr(r, o.bind(s), n);
    return i(), l;
  }
  function qr(e, t) {
    const n = t.split(".");
    return () => {
      let s = e;
      for (let r = 0; r < n.length && s; r++) s = s[n[r]];
      return s;
    };
  }
  const Si = /* @__PURE__ */ Symbol("_vte"), Ci = (e) => e.__isTeleport, Ei = /* @__PURE__ */ Symbol("_leaveCb");
  function vs(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, vs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function xs(e, t) {
    return D(e) ? ce({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  }
  function zr(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  const pn = /* @__PURE__ */ new WeakMap();
  function jt(e, t, n, s, r = false) {
    if (N(e)) {
      e.forEach((R, M) => jt(R, t && (N(t) ? t[M] : t), n, s, r));
      return;
    }
    if (Vt(s) && !r) {
      s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && jt(e, t, n, s.component.subTree);
      return;
    }
    const o = s.shapeFlag & 4 ? Mn(s.component) : s.el, i = r ? null : o, { i: l, r: c } = e, d = t && t.r, u = l.refs === K ? l.refs = {} : l.refs, h = l.setupState, y = B(h), w = h === K ? gr : (R) => H(y, R);
    if (d != null && d !== c) {
      if (Vs(t), se(d)) u[d] = null, w(d) && (h[d] = null);
      else if (le(d)) {
        d.value = null;
        const R = t;
        R.k && (u[R.k] = null);
      }
    }
    if (D(c)) Gt(c, l, 12, [
      i,
      u
    ]);
    else {
      const R = se(c), M = le(c);
      if (R || M) {
        const k = () => {
          if (e.f) {
            const E = R ? w(c) ? h[c] : u[c] : c.value;
            if (r) N(E) && cs(E, o);
            else if (N(E)) E.includes(o) || E.push(o);
            else if (R) u[c] = [
              o
            ], w(c) && (h[c] = u[c]);
            else {
              const P = [
                o
              ];
              c.value = P, e.k && (u[e.k] = P);
            }
          } else R ? (u[c] = i, w(c) && (h[c] = i)) : M && (c.value = i, e.k && (u[e.k] = i));
        };
        if (i) {
          const E = () => {
            k(), pn.delete(e);
          };
          E.id = -1, pn.set(e, E), ge(E, n);
        } else Vs(e), k();
      }
    }
  }
  function Vs(e) {
    const t = pn.get(e);
    t && (t.flags |= 8, pn.delete(e));
  }
  Sn().requestIdleCallback;
  Sn().cancelIdleCallback;
  const Vt = (e) => !!e.type.__asyncLoader, Gr = (e) => e.type.__isKeepAlive;
  function Ti(e, t) {
    Jr(e, "a", t);
  }
  function Ai(e, t) {
    Jr(e, "da", t);
  }
  function Jr(e, t, n = ie) {
    const s = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (Tn(t, s, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Gr(r.parent.vnode) && Ri(s, t, n, r), r = r.parent;
    }
  }
  function Ri(e, t, n, s) {
    const r = Tn(t, e, s, true);
    Xr(() => {
      cs(s[t], r);
    }, n);
  }
  function Tn(e, t, n = ie, s = false) {
    if (n) {
      const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
        He();
        const l = Jt(n), c = De(t, n, e, i);
        return l(), Ue(), c;
      });
      return s ? r.unshift(o) : r.push(o), o;
    }
  }
  const Ke = (e) => (t, n = ie) => {
    (!zt || e === "sp") && Tn(e, (...s) => t(...s), n);
  }, Mi = Ke("bm"), Yr = Ke("m"), Ii = Ke("bu"), Oi = Ke("u"), Pi = Ke("bum"), Xr = Ke("um"), Fi = Ke("sp"), Di = Ke("rtg"), Ni = Ke("rtc");
  function $i(e, t = ie) {
    Tn("ec", e, t);
  }
  const ji = "components";
  function Vi(e, t) {
    return Bi(ji, e, true, t) || e;
  }
  const Li = /* @__PURE__ */ Symbol.for("v-ndc");
  function Bi(e, t, n = true, s = false) {
    const r = be || ie;
    if (r) {
      const o = r.type;
      {
        const l = Tl(o, false);
        if (l && (l === t || l === we(t) || l === xn(we(t)))) return o;
      }
      const i = Ls(r[e] || o[e], t) || Ls(r.appContext[e], t);
      return !i && s ? o : i;
    }
  }
  function Ls(e, t) {
    return e && (e[t] || e[we(t)] || e[xn(we(t))]);
  }
  function gn(e, t, n, s) {
    let r;
    const o = n, i = N(e);
    if (i || se(e)) {
      const l = i && ft(e);
      let c = false, d = false;
      l && (c = !ye(e), d = We(e), e = Cn(e)), r = new Array(e.length);
      for (let u = 0, h = e.length; u < h; u++) r[u] = t(c ? d ? St(Ee(e[u])) : Ee(e[u]) : e[u], u, void 0, o);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o);
    } else if (X(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, o));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, o);
      }
    }
    else r = [];
    return r;
  }
  const Zn = (e) => e ? yo(e) ? Mn(e) : Zn(e.parent) : null, Lt = ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Qr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hi.bind(e.proxy)),
    $watch: (e) => xi.bind(e)
  }), Vn = (e, t) => e !== K && !e.__isScriptSetup && H(e, t), Hi = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c } = e;
      if (t[0] !== "$") {
        const y = i[t];
        if (y !== void 0) switch (y) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
        else {
          if (Vn(s, t)) return i[t] = 1, s[t];
          if (r !== K && H(r, t)) return i[t] = 2, r[t];
          if (H(o, t)) return i[t] = 3, o[t];
          if (n !== K && H(n, t)) return i[t] = 4, n[t];
          Qn && (i[t] = 0);
        }
      }
      const d = Lt[t];
      let u, h;
      if (d) return t === "$attrs" && oe(e.attrs, "get", ""), d(e);
      if ((u = l.__cssModules) && (u = u[t])) return u;
      if (n !== K && H(n, t)) return i[t] = 4, n[t];
      if (h = c.config.globalProperties, H(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Vn(r, t) ? (r[t] = n, true) : s !== K && H(s, t) ? (s[t] = n, true) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: o, type: i } }, l) {
      let c;
      return !!(n[l] || e !== K && l[0] !== "$" && H(e, l) || Vn(t, l) || H(o, l) || H(s, l) || H(Lt, l) || H(r.config.globalProperties, l) || (c = i.__cssModules) && c[l]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function Bs(e) {
    return N(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  let Qn = true;
  function Ui(e) {
    const t = Qr(e), n = e.proxy, s = e.ctx;
    Qn = false, t.beforeCreate && Hs(t.beforeCreate, e, "bc");
    const { data: r, computed: o, methods: i, watch: l, provide: c, inject: d, created: u, beforeMount: h, mounted: y, beforeUpdate: w, updated: R, activated: M, deactivated: k, beforeDestroy: E, beforeUnmount: P, destroyed: U, unmounted: I, render: Q, renderTracked: xe, renderTriggered: ee, errorCaptured: Se, serverPrefetch: qe, expose: Ne, inheritAttrs: tt, components: $e, directives: Xt, filters: On } = t;
    if (d && Wi(d, s, null), i) for (const Z in i) {
      const q = i[Z];
      D(q) && (s[Z] = q.bind(n));
    }
    if (r) {
      const Z = r.call(n, n);
      X(Z) && (e.data = bs(Z));
    }
    if (Qn = true, o) for (const Z in o) {
      const q = o[Z], nt = D(q) ? q.bind(n, n) : D(q.get) ? q.get.bind(n, n) : Fe, Zt = !D(q) && D(q.set) ? q.set.bind(n) : Fe, st = ut({
        get: nt,
        set: Zt
      });
      Object.defineProperty(s, Z, {
        enumerable: true,
        configurable: true,
        get: () => st.value,
        set: (Te) => st.value = Te
      });
    }
    if (l) for (const Z in l) Zr(l[Z], s, n, Z);
    if (c) {
      const Z = D(c) ? c.call(n) : c;
      Reflect.ownKeys(Z).forEach((q) => {
        yi(q, Z[q]);
      });
    }
    u && Hs(u, e, "c");
    function fe(Z, q) {
      N(q) ? q.forEach((nt) => Z(nt.bind(n))) : q && Z(q.bind(n));
    }
    if (fe(Mi, h), fe(Yr, y), fe(Ii, w), fe(Oi, R), fe(Ti, M), fe(Ai, k), fe($i, Se), fe(Ni, xe), fe(Di, ee), fe(Pi, P), fe(Xr, I), fe(Fi, qe), N(Ne)) if (Ne.length) {
      const Z = e.exposed || (e.exposed = {});
      Ne.forEach((q) => {
        Object.defineProperty(Z, q, {
          get: () => n[q],
          set: (nt) => n[q] = nt,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    Q && e.render === Fe && (e.render = Q), tt != null && (e.inheritAttrs = tt), $e && (e.components = $e), Xt && (e.directives = Xt), qe && zr(e);
  }
  function Wi(e, t, n = Fe) {
    N(e) && (e = es(e));
    for (const s in e) {
      const r = e[s];
      let o;
      X(r) ? "default" in r ? o = ln(r.from || s, r.default, true) : o = ln(r.from || s) : o = ln(r), le(o) ? Object.defineProperty(t, s, {
        enumerable: true,
        configurable: true,
        get: () => o.value,
        set: (i) => o.value = i
      }) : t[s] = o;
    }
  }
  function Hs(e, t, n) {
    De(N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Zr(e, t, n, s) {
    let r = s.includes(".") ? qr(n, s) : () => n[s];
    if (se(e)) {
      const o = t[e];
      D(o) && cn(r, o);
    } else if (D(e)) cn(r, e.bind(n));
    else if (X(e)) if (N(e)) e.forEach((o) => Zr(o, t, n, s));
    else {
      const o = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(o) && cn(r, o, e);
    }
  }
  function Qr(e) {
    const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, l = o.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach((d) => bn(c, d, i, true)), bn(c, t, i)), X(t) && o.set(t, c), c;
  }
  function bn(e, t, n, s = false) {
    const { mixins: r, extends: o } = t;
    o && bn(e, o, n, true), r && r.forEach((i) => bn(e, i, n, true));
    for (const i in t) if (!(s && i === "expose")) {
      const l = ki[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
    return e;
  }
  const ki = {
    data: Us,
    props: Ws,
    emits: Ws,
    methods: Ft,
    computed: Ft,
    beforeCreate: ue,
    created: ue,
    beforeMount: ue,
    mounted: ue,
    beforeUpdate: ue,
    updated: ue,
    beforeDestroy: ue,
    beforeUnmount: ue,
    destroyed: ue,
    unmounted: ue,
    activated: ue,
    deactivated: ue,
    errorCaptured: ue,
    serverPrefetch: ue,
    components: Ft,
    directives: Ft,
    watch: qi,
    provide: Us,
    inject: Ki
  };
  function Us(e, t) {
    return t ? e ? function() {
      return ce(D(e) ? e.call(this, this) : e, D(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Ki(e, t) {
    return Ft(es(e), es(t));
  }
  function es(e) {
    if (N(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function ue(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Ft(e, t) {
    return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Ws(e, t) {
    return e ? N(e) && N(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : ce(/* @__PURE__ */ Object.create(null), Bs(e), Bs(t ?? {})) : t;
  }
  function qi(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ce(/* @__PURE__ */ Object.create(null), e);
    for (const s in t) n[s] = ue(e[s], t[s]);
    return n;
  }
  function eo() {
    return {
      app: null,
      config: {
        isNativeTag: gr,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let zi = 0;
  function Gi(e, t) {
    return function(s, r = null) {
      D(s) || (s = ce({}, s)), r != null && !X(r) && (r = null);
      const o = eo(), i = /* @__PURE__ */ new WeakSet(), l = [];
      let c = false;
      const d = o.app = {
        _uid: zi++,
        _component: s,
        _props: r,
        _container: null,
        _context: o,
        _instance: null,
        version: Rl,
        get config() {
          return o.config;
        },
        set config(u) {
        },
        use(u, ...h) {
          return i.has(u) || (u && D(u.install) ? (i.add(u), u.install(d, ...h)) : D(u) && (i.add(u), u(d, ...h))), d;
        },
        mixin(u) {
          return o.mixins.includes(u) || o.mixins.push(u), d;
        },
        component(u, h) {
          return h ? (o.components[u] = h, d) : o.components[u];
        },
        directive(u, h) {
          return h ? (o.directives[u] = h, d) : o.directives[u];
        },
        mount(u, h, y) {
          if (!c) {
            const w = d._ceVNode || Y(s, r);
            return w.appContext = o, y === true ? y = "svg" : y === false && (y = void 0), e(w, u, y), c = true, d._container = u, u.__vue_app__ = d, Mn(w.component);
          }
        },
        onUnmount(u) {
          l.push(u);
        },
        unmount() {
          c && (De(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
        },
        provide(u, h) {
          return o.provides[u] = h, d;
        },
        runWithContext(u) {
          const h = xt;
          xt = d;
          try {
            return u();
          } finally {
            xt = h;
          }
        }
      };
      return d;
    };
  }
  let xt = null;
  const Ji = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${dt(t)}Modifiers`];
  function Yi(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || K;
    let r = n;
    const o = t.startsWith("update:"), i = o && Ji(s, t.slice(7));
    i && (i.trim && (r = n.map((u) => se(u) ? u.trim() : u)), i.number && (r = n.map(us)));
    let l, c = s[l = Fn(t)] || s[l = Fn(we(t))];
    !c && o && (c = s[l = Fn(dt(t))]), c && De(c, e, 6, r);
    const d = s[l + "Once"];
    if (d) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, De(d, e, 6, r);
    }
  }
  const Xi = /* @__PURE__ */ new WeakMap();
  function to(e, t, n = false) {
    const s = n ? Xi : t.emitsCache, r = s.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let i = {}, l = false;
    if (!D(e)) {
      const c = (d) => {
        const u = to(d, t, true);
        u && (l = true, ce(i, u));
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !o && !l ? (X(e) && s.set(e, null), null) : (N(o) ? o.forEach((c) => i[c] = null) : ce(i, o), X(e) && s.set(e, i), i);
  }
  function An(e, t) {
    return !e || !yn(t) ? false : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, dt(t)) || H(e, t));
  }
  function ks(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [o], slots: i, attrs: l, emit: c, render: d, renderCache: u, props: h, data: y, setupState: w, ctx: R, inheritAttrs: M } = e, k = hn(e);
    let E, P;
    try {
      if (n.shapeFlag & 4) {
        const I = r || s, Q = I;
        E = Pe(d.call(Q, I, u, h, w, y, R)), P = l;
      } else {
        const I = t;
        E = Pe(I.length > 1 ? I(h, {
          attrs: l,
          slots: i,
          emit: c
        }) : I(h, null)), P = t.props ? l : Zi(l);
      }
    } catch (I) {
      Bt.length = 0, En(I, e, 1), E = Y(Qe);
    }
    let U = E;
    if (P && M !== false) {
      const I = Object.keys(P), { shapeFlag: Q } = U;
      I.length && Q & 7 && (o && I.some(ls) && (P = Qi(P, o)), U = Ct(U, P, false, true));
    }
    return n.dirs && (U = Ct(U, null, false, true), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && vs(U, n.transition), E = U, hn(k), E;
  }
  const Zi = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || yn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Qi = (e, t) => {
    const n = {};
    for (const s in e) (!ls(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
  function el(e, t, n) {
    const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: c } = t, d = o.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && c >= 0) {
      if (c & 1024) return true;
      if (c & 16) return s ? Ks(s, i, d) : !!i;
      if (c & 8) {
        const u = t.dynamicProps;
        for (let h = 0; h < u.length; h++) {
          const y = u[h];
          if (i[y] !== s[y] && !An(d, y)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : s === i ? false : s ? i ? Ks(s, i, d) : true : !!i;
    return false;
  }
  function Ks(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return true;
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      if (t[o] !== e[o] && !An(n, o)) return true;
    }
    return false;
  }
  function tl({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const s = t.subTree;
      if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const no = {}, so = () => Object.create(no), ro = (e) => Object.getPrototypeOf(e) === no;
  function nl(e, t, n, s = false) {
    const r = {}, o = so();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), oo(e, t, r, o);
    for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
    n ? e.props = s ? r : ri(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
  }
  function sl(e, t, n, s) {
    const { props: r, attrs: o, vnode: { patchFlag: i } } = e, l = B(r), [c] = e.propsOptions;
    let d = false;
    if ((s || i > 0) && !(i & 16)) {
      if (i & 8) {
        const u = e.vnode.dynamicProps;
        for (let h = 0; h < u.length; h++) {
          let y = u[h];
          if (An(e.emitsOptions, y)) continue;
          const w = t[y];
          if (c) if (H(o, y)) w !== o[y] && (o[y] = w, d = true);
          else {
            const R = we(y);
            r[R] = ts(c, l, R, w, e, false);
          }
          else w !== o[y] && (o[y] = w, d = true);
        }
      }
    } else {
      oo(e, t, r, o) && (d = true);
      let u;
      for (const h in l) (!t || !H(t, h) && ((u = dt(h)) === h || !H(t, u))) && (c ? n && (n[h] !== void 0 || n[u] !== void 0) && (r[h] = ts(c, l, h, void 0, e, true)) : delete r[h]);
      if (o !== l) for (const h in o) (!t || !H(t, h)) && (delete o[h], d = true);
    }
    d && Le(e.attrs, "set", "");
  }
  function oo(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = false, l;
    if (t) for (let c in t) {
      if (Dt(c)) continue;
      const d = t[c];
      let u;
      r && H(r, u = we(c)) ? !o || !o.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : An(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, i = true);
    }
    if (o) {
      const c = B(n), d = l || K;
      for (let u = 0; u < o.length; u++) {
        const h = o[u];
        n[h] = ts(r, c, h, d[h], e, !H(d, h));
      }
    }
    return i;
  }
  function ts(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
      const l = H(i, "default");
      if (l && s === void 0) {
        const c = i.default;
        if (i.type !== Function && !i.skipFactory && D(c)) {
          const { propsDefaults: d } = r;
          if (n in d) s = d[n];
          else {
            const u = Jt(r);
            s = d[n] = c.call(null, t), u();
          }
        } else s = c;
        r.ce && r.ce._setProp(n, s);
      }
      i[0] && (o && !l ? s = false : i[1] && (s === "" || s === dt(n)) && (s = true));
    }
    return s;
  }
  const rl = /* @__PURE__ */ new WeakMap();
  function io(e, t, n = false) {
    const s = n ? rl : t.propsCache, r = s.get(e);
    if (r) return r;
    const o = e.props, i = {}, l = [];
    let c = false;
    if (!D(e)) {
      const u = (h) => {
        c = true;
        const [y, w] = io(h, t, true);
        ce(i, y), w && l.push(...w);
      };
      !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
    }
    if (!o && !c) return X(e) && s.set(e, yt), yt;
    if (N(o)) for (let u = 0; u < o.length; u++) {
      const h = we(o[u]);
      qs(h) && (i[h] = K);
    }
    else if (o) for (const u in o) {
      const h = we(u);
      if (qs(h)) {
        const y = o[u], w = i[h] = N(y) || D(y) ? {
          type: y
        } : ce({}, y), R = w.type;
        let M = false, k = true;
        if (N(R)) for (let E = 0; E < R.length; ++E) {
          const P = R[E], U = D(P) && P.name;
          if (U === "Boolean") {
            M = true;
            break;
          } else U === "String" && (k = false);
        }
        else M = D(R) && R.name === "Boolean";
        w[0] = M, w[1] = k, (M || H(w, "default")) && l.push(h);
      }
    }
    const d = [
      i,
      l
    ];
    return X(e) && s.set(e, d), d;
  }
  function qs(e) {
    return e[0] !== "$" && !Dt(e);
  }
  const Ss = (e) => e === "_" || e === "_ctx" || e === "$stable", Cs = (e) => N(e) ? e.map(Pe) : [
    Pe(e)
  ], ol = (e, t, n) => {
    if (t._n) return t;
    const s = bi((...r) => Cs(t(...r)), n);
    return s._c = false, s;
  }, lo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Ss(r)) continue;
      const o = e[r];
      if (D(o)) t[r] = ol(r, o, s);
      else if (o != null) {
        const i = Cs(o);
        t[r] = () => i;
      }
    }
  }, co = (e, t) => {
    const n = Cs(t);
    e.slots.default = () => n;
  }, fo = (e, t, n) => {
    for (const s in t) (n || !Ss(s)) && (e[s] = t[s]);
  }, il = (e, t, n) => {
    const s = e.slots = so();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (fo(s, t, n), n && vr(s, "_", r, true)) : lo(t, s);
    } else t && co(e, t);
  }, ll = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = true, i = K;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? o = false : fo(r, t, n) : (o = !t.$stable, lo(t, r)), i = t;
    } else t && (co(e, t), i = {
      default: 1
    });
    if (o) for (const l in r) !Ss(l) && i[l] == null && delete r[l];
  }, ge = dl;
  function cl(e) {
    return fl(e);
  }
  function fl(e, t) {
    const n = Sn();
    n.__VUE__ = true;
    const { insert: s, remove: r, patchProp: o, createElement: i, createText: l, createComment: c, setText: d, setElementText: u, parentNode: h, nextSibling: y, setScopeId: w = Fe, insertStaticContent: R } = e, M = (f, a, _, m = null, p = null, g = null, S = void 0, x = null, v = !!a.dynamicChildren) => {
      if (f === a) return;
      f && !It(f, a) && (m = Qt(f), Te(f, p, g, true), f = null), a.patchFlag === -2 && (v = false, a.dynamicChildren = null);
      const { type: b, ref: O, shapeFlag: C } = a;
      switch (b) {
        case Rn:
          k(f, a, _, m);
          break;
        case Qe:
          E(f, a, _, m);
          break;
        case Bn:
          f == null && P(a, _, m, S);
          break;
        case J:
          $e(f, a, _, m, p, g, S, x, v);
          break;
        default:
          C & 1 ? Q(f, a, _, m, p, g, S, x, v) : C & 6 ? Xt(f, a, _, m, p, g, S, x, v) : (C & 64 || C & 128) && b.process(f, a, _, m, p, g, S, x, v, At);
      }
      O != null && p ? jt(O, f && f.ref, g, a || f, !a) : O == null && f && f.ref != null && jt(f.ref, null, g, f, true);
    }, k = (f, a, _, m) => {
      if (f == null) s(a.el = l(a.children), _, m);
      else {
        const p = a.el = f.el;
        a.children !== f.children && d(p, a.children);
      }
    }, E = (f, a, _, m) => {
      f == null ? s(a.el = c(a.children || ""), _, m) : a.el = f.el;
    }, P = (f, a, _, m) => {
      [f.el, f.anchor] = R(f.children, a, _, m, f.el, f.anchor);
    }, U = ({ el: f, anchor: a }, _, m) => {
      let p;
      for (; f && f !== a; ) p = y(f), s(f, _, m), f = p;
      s(a, _, m);
    }, I = ({ el: f, anchor: a }) => {
      let _;
      for (; f && f !== a; ) _ = y(f), r(f), f = _;
      r(a);
    }, Q = (f, a, _, m, p, g, S, x, v) => {
      if (a.type === "svg" ? S = "svg" : a.type === "math" && (S = "mathml"), f == null) xe(a, _, m, p, g, S, x, v);
      else {
        const b = f.el && f.el._isVueCE ? f.el : null;
        try {
          b && b._beginPatch(), qe(f, a, p, g, S, x, v);
        } finally {
          b && b._endPatch();
        }
      }
    }, xe = (f, a, _, m, p, g, S, x) => {
      let v, b;
      const { props: O, shapeFlag: C, transition: T, dirs: F } = f;
      if (v = f.el = i(f.type, g, O && O.is, O), C & 8 ? u(v, f.children) : C & 16 && Se(f.children, v, null, m, p, Ln(f, g), S, x), F && rt(f, null, m, "created"), ee(v, f, f.scopeId, S, m), O) {
        for (const z in O) z !== "value" && !Dt(z) && o(v, z, null, O[z], g, m);
        "value" in O && o(v, "value", null, O.value, g), (b = O.onVnodeBeforeMount) && Ie(b, m, f);
      }
      F && rt(f, null, m, "beforeMount");
      const V = ul(p, T);
      V && T.beforeEnter(v), s(v, a, _), ((b = O && O.onVnodeMounted) || V || F) && ge(() => {
        b && Ie(b, m, f), V && T.enter(v), F && rt(f, null, m, "mounted");
      }, p);
    }, ee = (f, a, _, m, p) => {
      if (_ && w(f, _), m) for (let g = 0; g < m.length; g++) w(f, m[g]);
      if (p) {
        let g = p.subTree;
        if (a === g || ho(g.type) && (g.ssContent === a || g.ssFallback === a)) {
          const S = p.vnode;
          ee(f, S, S.scopeId, S.slotScopeIds, p.parent);
        }
      }
    }, Se = (f, a, _, m, p, g, S, x, v = 0) => {
      for (let b = v; b < f.length; b++) {
        const O = f[b] = x ? Ye(f[b]) : Pe(f[b]);
        M(null, O, a, _, m, p, g, S, x);
      }
    }, qe = (f, a, _, m, p, g, S) => {
      const x = a.el = f.el;
      let { patchFlag: v, dynamicChildren: b, dirs: O } = a;
      v |= f.patchFlag & 16;
      const C = f.props || K, T = a.props || K;
      let F;
      if (_ && ot(_, false), (F = T.onVnodeBeforeUpdate) && Ie(F, _, a, f), O && rt(a, f, _, "beforeUpdate"), _ && ot(_, true), (C.innerHTML && T.innerHTML == null || C.textContent && T.textContent == null) && u(x, ""), b ? Ne(f.dynamicChildren, b, x, _, m, Ln(a, p), g) : S || q(f, a, x, null, _, m, Ln(a, p), g, false), v > 0) {
        if (v & 16) tt(x, C, T, _, p);
        else if (v & 2 && C.class !== T.class && o(x, "class", null, T.class, p), v & 4 && o(x, "style", C.style, T.style, p), v & 8) {
          const V = a.dynamicProps;
          for (let z = 0; z < V.length; z++) {
            const W = V[z], de = C[W], _e = T[W];
            (_e !== de || W === "value") && o(x, W, de, _e, p, _);
          }
        }
        v & 1 && f.children !== a.children && u(x, a.children);
      } else !S && b == null && tt(x, C, T, _, p);
      ((F = T.onVnodeUpdated) || O) && ge(() => {
        F && Ie(F, _, a, f), O && rt(a, f, _, "updated");
      }, m);
    }, Ne = (f, a, _, m, p, g, S) => {
      for (let x = 0; x < a.length; x++) {
        const v = f[x], b = a[x], O = v.el && (v.type === J || !It(v, b) || v.shapeFlag & 198) ? h(v.el) : _;
        M(v, b, O, null, m, p, g, S, true);
      }
    }, tt = (f, a, _, m, p) => {
      if (a !== _) {
        if (a !== K) for (const g in a) !Dt(g) && !(g in _) && o(f, g, a[g], null, p, m);
        for (const g in _) {
          if (Dt(g)) continue;
          const S = _[g], x = a[g];
          S !== x && g !== "value" && o(f, g, x, S, p, m);
        }
        "value" in _ && o(f, "value", a.value, _.value, p);
      }
    }, $e = (f, a, _, m, p, g, S, x, v) => {
      const b = a.el = f ? f.el : l(""), O = a.anchor = f ? f.anchor : l("");
      let { patchFlag: C, dynamicChildren: T, slotScopeIds: F } = a;
      F && (x = x ? x.concat(F) : F), f == null ? (s(b, _, m), s(O, _, m), Se(a.children || [], _, O, p, g, S, x, v)) : C > 0 && C & 64 && T && f.dynamicChildren && f.dynamicChildren.length === T.length ? (Ne(f.dynamicChildren, T, _, p, g, S, x), (a.key != null || p && a === p.subTree) && uo(f, a, true)) : q(f, a, _, O, p, g, S, x, v);
    }, Xt = (f, a, _, m, p, g, S, x, v) => {
      a.slotScopeIds = x, f == null ? a.shapeFlag & 512 ? p.ctx.activate(a, _, m, S, v) : On(a, _, m, p, g, S, v) : Rs(f, a, v);
    }, On = (f, a, _, m, p, g, S) => {
      const x = f.component = wl(f, m, p);
      if (Gr(f) && (x.ctx.renderer = At), xl(x, false, S), x.asyncDep) {
        if (p && p.registerDep(x, fe, S), !f.el) {
          const v = x.subTree = Y(Qe);
          E(null, v, a, _), f.placeholder = v.el;
        }
      } else fe(x, f, a, _, p, g, S);
    }, Rs = (f, a, _) => {
      const m = a.component = f.component;
      if (el(f, a, _)) if (m.asyncDep && !m.asyncResolved) {
        Z(m, a, _);
        return;
      } else m.next = a, m.update();
      else a.el = f.el, m.vnode = a;
    }, fe = (f, a, _, m, p, g, S) => {
      const x = () => {
        if (f.isMounted) {
          let { next: C, bu: T, u: F, parent: V, vnode: z } = f;
          {
            const Re = ao(f);
            if (Re) {
              C && (C.el = z.el, Z(f, C, S)), Re.asyncDep.then(() => {
                f.isUnmounted || x();
              });
              return;
            }
          }
          let W = C, de;
          ot(f, false), C ? (C.el = z.el, Z(f, C, S)) : C = z, T && rn(T), (de = C.props && C.props.onVnodeBeforeUpdate) && Ie(de, V, C, z), ot(f, true);
          const _e = ks(f), Ae = f.subTree;
          f.subTree = _e, M(Ae, _e, h(Ae.el), Qt(Ae), f, p, g), C.el = _e.el, W === null && tl(f, _e.el), F && ge(F, p), (de = C.props && C.props.onVnodeUpdated) && ge(() => Ie(de, V, C, z), p);
        } else {
          let C;
          const { el: T, props: F } = a, { bm: V, m: z, parent: W, root: de, type: _e } = f, Ae = Vt(a);
          ot(f, false), V && rn(V), !Ae && (C = F && F.onVnodeBeforeMount) && Ie(C, W, a), ot(f, true);
          {
            de.ce && de.ce._def.shadowRoot !== false && de.ce._injectChildStyle(_e);
            const Re = f.subTree = ks(f);
            M(null, Re, _, m, f, p, g), a.el = Re.el;
          }
          if (z && ge(z, p), !Ae && (C = F && F.onVnodeMounted)) {
            const Re = a;
            ge(() => Ie(C, W, Re), p);
          }
          (a.shapeFlag & 256 || W && Vt(W.vnode) && W.vnode.shapeFlag & 256) && f.a && ge(f.a, p), f.isMounted = true, a = _ = m = null;
        }
      };
      f.scope.on();
      const v = f.effect = new Er(x);
      f.scope.off();
      const b = f.update = v.run.bind(v), O = f.job = v.runIfDirty.bind(v);
      O.i = f, O.id = f.uid, v.scheduler = () => ws(O), ot(f, true), b();
    }, Z = (f, a, _) => {
      a.component = f;
      const m = f.vnode.props;
      f.vnode = a, f.next = null, sl(f, a.props, m, _), ll(f, a.children, _), He(), js(f), Ue();
    }, q = (f, a, _, m, p, g, S, x, v = false) => {
      const b = f && f.children, O = f ? f.shapeFlag : 0, C = a.children, { patchFlag: T, shapeFlag: F } = a;
      if (T > 0) {
        if (T & 128) {
          Zt(b, C, _, m, p, g, S, x, v);
          return;
        } else if (T & 256) {
          nt(b, C, _, m, p, g, S, x, v);
          return;
        }
      }
      F & 8 ? (O & 16 && Tt(b, p, g), C !== b && u(_, C)) : O & 16 ? F & 16 ? Zt(b, C, _, m, p, g, S, x, v) : Tt(b, p, g, true) : (O & 8 && u(_, ""), F & 16 && Se(C, _, m, p, g, S, x, v));
    }, nt = (f, a, _, m, p, g, S, x, v) => {
      f = f || yt, a = a || yt;
      const b = f.length, O = a.length, C = Math.min(b, O);
      let T;
      for (T = 0; T < C; T++) {
        const F = a[T] = v ? Ye(a[T]) : Pe(a[T]);
        M(f[T], F, _, null, p, g, S, x, v);
      }
      b > O ? Tt(f, p, g, true, false, C) : Se(a, _, m, p, g, S, x, v, C);
    }, Zt = (f, a, _, m, p, g, S, x, v) => {
      let b = 0;
      const O = a.length;
      let C = f.length - 1, T = O - 1;
      for (; b <= C && b <= T; ) {
        const F = f[b], V = a[b] = v ? Ye(a[b]) : Pe(a[b]);
        if (It(F, V)) M(F, V, _, null, p, g, S, x, v);
        else break;
        b++;
      }
      for (; b <= C && b <= T; ) {
        const F = f[C], V = a[T] = v ? Ye(a[T]) : Pe(a[T]);
        if (It(F, V)) M(F, V, _, null, p, g, S, x, v);
        else break;
        C--, T--;
      }
      if (b > C) {
        if (b <= T) {
          const F = T + 1, V = F < O ? a[F].el : m;
          for (; b <= T; ) M(null, a[b] = v ? Ye(a[b]) : Pe(a[b]), _, V, p, g, S, x, v), b++;
        }
      } else if (b > T) for (; b <= C; ) Te(f[b], p, g, true), b++;
      else {
        const F = b, V = b, z = /* @__PURE__ */ new Map();
        for (b = V; b <= T; b++) {
          const pe = a[b] = v ? Ye(a[b]) : Pe(a[b]);
          pe.key != null && z.set(pe.key, b);
        }
        let W, de = 0;
        const _e = T - V + 1;
        let Ae = false, Re = 0;
        const Rt = new Array(_e);
        for (b = 0; b < _e; b++) Rt[b] = 0;
        for (b = F; b <= C; b++) {
          const pe = f[b];
          if (de >= _e) {
            Te(pe, p, g, true);
            continue;
          }
          let Me;
          if (pe.key != null) Me = z.get(pe.key);
          else for (W = V; W <= T; W++) if (Rt[W - V] === 0 && It(pe, a[W])) {
            Me = W;
            break;
          }
          Me === void 0 ? Te(pe, p, g, true) : (Rt[Me - V] = b + 1, Me >= Re ? Re = Me : Ae = true, M(pe, a[Me], _, null, p, g, S, x, v), de++);
        }
        const Os = Ae ? al(Rt) : yt;
        for (W = Os.length - 1, b = _e - 1; b >= 0; b--) {
          const pe = V + b, Me = a[pe], Ps = a[pe + 1], Fs = pe + 1 < O ? Ps.el || _o(Ps) : m;
          Rt[b] === 0 ? M(null, Me, _, Fs, p, g, S, x, v) : Ae && (W < 0 || b !== Os[W] ? st(Me, _, Fs, 2) : W--);
        }
      }
    }, st = (f, a, _, m, p = null) => {
      const { el: g, type: S, transition: x, children: v, shapeFlag: b } = f;
      if (b & 6) {
        st(f.component.subTree, a, _, m);
        return;
      }
      if (b & 128) {
        f.suspense.move(a, _, m);
        return;
      }
      if (b & 64) {
        S.move(f, a, _, At);
        return;
      }
      if (S === J) {
        s(g, a, _);
        for (let C = 0; C < v.length; C++) st(v[C], a, _, m);
        s(f.anchor, a, _);
        return;
      }
      if (S === Bn) {
        U(f, a, _);
        return;
      }
      if (m !== 2 && b & 1 && x) if (m === 0) x.beforeEnter(g), s(g, a, _), ge(() => x.enter(g), p);
      else {
        const { leave: C, delayLeave: T, afterLeave: F } = x, V = () => {
          f.ctx.isUnmounted ? r(g) : s(g, a, _);
        }, z = () => {
          g._isLeaving && g[Ei](true), C(g, () => {
            V(), F && F();
          });
        };
        T ? T(g, V, z) : z();
      }
      else s(g, a, _);
    }, Te = (f, a, _, m = false, p = false) => {
      const { type: g, props: S, ref: x, children: v, dynamicChildren: b, shapeFlag: O, patchFlag: C, dirs: T, cacheIndex: F } = f;
      if (C === -2 && (p = false), x != null && (He(), jt(x, null, _, f, true), Ue()), F != null && (a.renderCache[F] = void 0), O & 256) {
        a.ctx.deactivate(f);
        return;
      }
      const V = O & 1 && T, z = !Vt(f);
      let W;
      if (z && (W = S && S.onVnodeBeforeUnmount) && Ie(W, a, f), O & 6) Ao(f.component, _, m);
      else {
        if (O & 128) {
          f.suspense.unmount(_, m);
          return;
        }
        V && rt(f, null, a, "beforeUnmount"), O & 64 ? f.type.remove(f, a, _, At, m) : b && !b.hasOnce && (g !== J || C > 0 && C & 64) ? Tt(b, a, _, false, true) : (g === J && C & 384 || !p && O & 16) && Tt(v, a, _), m && Ms(f);
      }
      (z && (W = S && S.onVnodeUnmounted) || V) && ge(() => {
        W && Ie(W, a, f), V && rt(f, null, a, "unmounted");
      }, _);
    }, Ms = (f) => {
      const { type: a, el: _, anchor: m, transition: p } = f;
      if (a === J) {
        To(_, m);
        return;
      }
      if (a === Bn) {
        I(f);
        return;
      }
      const g = () => {
        r(_), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (f.shapeFlag & 1 && p && !p.persisted) {
        const { leave: S, delayLeave: x } = p, v = () => S(_, g);
        x ? x(f.el, g, v) : v();
      } else g();
    }, To = (f, a) => {
      let _;
      for (; f !== a; ) _ = y(f), r(f), f = _;
      r(a);
    }, Ao = (f, a, _) => {
      const { bum: m, scope: p, job: g, subTree: S, um: x, m: v, a: b } = f;
      zs(v), zs(b), m && rn(m), p.stop(), g && (g.flags |= 8, Te(S, f, a, _)), x && ge(x, a), ge(() => {
        f.isUnmounted = true;
      }, a);
    }, Tt = (f, a, _, m = false, p = false, g = 0) => {
      for (let S = g; S < f.length; S++) Te(f[S], a, _, m, p);
    }, Qt = (f) => {
      if (f.shapeFlag & 6) return Qt(f.component.subTree);
      if (f.shapeFlag & 128) return f.suspense.next();
      const a = y(f.anchor || f.el), _ = a && a[Si];
      return _ ? y(_) : a;
    };
    let Pn = false;
    const Is = (f, a, _) => {
      let m;
      f == null ? a._vnode && (Te(a._vnode, null, null, true), m = a._vnode.component) : M(a._vnode || null, f, a, null, null, null, _), a._vnode = f, Pn || (Pn = true, js(m), Ur(), Pn = false);
    }, At = {
      p: M,
      um: Te,
      m: st,
      r: Ms,
      mt: On,
      mc: Se,
      pc: q,
      pbc: Ne,
      n: Qt,
      o: e
    };
    return {
      render: Is,
      hydrate: void 0,
      createApp: Gi(Is)
    };
  }
  function Ln({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function ot({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function ul(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function uo(e, t, n = false) {
    const s = e.children, r = t.children;
    if (N(s) && N(r)) for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Ye(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && uo(i, l)), l.type === Rn && (l.patchFlag !== -1 ? l.el = i.el : l.__elIndex = o + (e.type === J ? 1 : 0)), l.type === Qe && !l.el && (l.el = i.el);
    }
  }
  function al(e) {
    const t = e.slice(), n = [
      0
    ];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
      const d = e[s];
      if (d !== 0) {
        if (r = n[n.length - 1], e[r] < d) {
          t[s] = r, n.push(s);
          continue;
        }
        for (o = 0, i = n.length - 1; o < i; ) l = o + i >> 1, e[n[l]] < d ? o = l + 1 : i = l;
        d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
      }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
    return n;
  }
  function ao(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : ao(t);
  }
  function zs(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function _o(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? _o(t.subTree) : null;
  }
  const ho = (e) => e.__isSuspense;
  function dl(e, t) {
    t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : gi(e);
  }
  const J = /* @__PURE__ */ Symbol.for("v-fgt"), Rn = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), Bn = /* @__PURE__ */ Symbol.for("v-stc"), Bt = [];
  let me = null;
  function $(e = false) {
    Bt.push(me = e ? null : []);
  }
  function _l() {
    Bt.pop(), me = Bt[Bt.length - 1] || null;
  }
  let qt = 1;
  function Gs(e, t = false) {
    qt += e, e < 0 && me && t && (me.hasOnce = true);
  }
  function po(e) {
    return e.dynamicChildren = qt > 0 ? me || yt : null, _l(), qt > 0 && me && me.push(e), e;
  }
  function j(e, t, n, s, r, o) {
    return po(A(e, t, n, s, r, o, true));
  }
  function hl(e, t, n, s, r) {
    return po(Y(e, t, n, s, r, true));
  }
  function go(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function It(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const bo = ({ key: e }) => e ?? null, fn = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || le(e) || D(e) ? {
    i: be,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  function A(e, t = null, n = null, s = 0, r = null, o = e === J ? 0 : 1, i = false, l = false) {
    const c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && bo(t),
      ref: t && fn(t),
      scopeId: kr,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: o,
      patchFlag: s,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: be
    };
    return l ? (Es(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), qt > 0 && !i && me && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && me.push(c), c;
  }
  const Y = pl;
  function pl(e, t = null, n = null, s = 0, r = null, o = false) {
    if ((!e || e === Li) && (e = Qe), go(e)) {
      const l = Ct(e, t, true);
      return n && Es(l, n), qt > 0 && !o && me && (l.shapeFlag & 6 ? me[me.indexOf(e)] = l : me.push(l)), l.patchFlag = -2, l;
    }
    if (Al(e) && (e = e.__vccOpts), t) {
      t = gl(t);
      let { class: l, style: c } = t;
      l && !se(l) && (t.class = at(l)), X(c) && (ys(c) && !N(c) && (c = ce({}, c)), t.style = as(c));
    }
    const i = se(e) ? 1 : ho(e) ? 128 : Ci(e) ? 64 : X(e) ? 4 : D(e) ? 2 : 0;
    return A(e, t, n, s, r, i, o, true);
  }
  function gl(e) {
    return e ? ys(e) || ro(e) ? ce({}, e) : e : null;
  }
  function Ct(e, t, n = false, s = false) {
    const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e, d = t ? bl(r || {}, t) : r, u = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: d,
      key: d && bo(d),
      ref: t && t.ref ? n && o ? N(o) ? o.concat(fn(t)) : [
        o,
        fn(t)
      ] : fn(t) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== J ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ct(e.ssContent),
      ssFallback: e.ssFallback && Ct(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return c && s && vs(u, c.clone(u)), u;
  }
  function mo(e = " ", t = 0) {
    return Y(Rn, null, e, t);
  }
  function re(e = "", t = false) {
    return t ? ($(), hl(Qe, null, e)) : Y(Qe, null, e);
  }
  function Pe(e) {
    return e == null || typeof e == "boolean" ? Y(Qe) : N(e) ? Y(J, null, e.slice()) : go(e) ? Ye(e) : Y(Rn, null, String(e));
  }
  function Ye(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ct(e);
  }
  function Es(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (N(t)) n = 16;
    else if (typeof t == "object") if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), Es(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ro(t) ? t._ctx = be : r === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else D(t) ? (t = {
      default: t,
      _ctx: be
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [
      mo(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function bl(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      for (const r in s) if (r === "class") t.class !== s.class && (t.class = at([
        t.class,
        s.class
      ]));
      else if (r === "style") t.style = as([
        t.style,
        s.style
      ]);
      else if (yn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(N(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
    }
    return t;
  }
  function Ie(e, t, n, s = null) {
    De(e, t, 7, [
      n,
      s
    ]);
  }
  const ml = eo();
  let yl = 0;
  function wl(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || ml, o = {
      uid: yl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Vo(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: io(s, r),
      emitsOptions: to(s, r),
      emit: null,
      emitted: null,
      propsDefaults: K,
      inheritAttrs: s.inheritAttrs,
      ctx: K,
      data: K,
      props: K,
      attrs: K,
      slots: K,
      refs: K,
      setupState: K,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return o.ctx = {
      _: o
    }, o.root = t ? t.root : o, o.emit = Yi.bind(null, o), e.ce && e.ce(o), o;
  }
  let ie = null;
  const vl = () => ie || be;
  let mn, ns;
  {
    const e = Sn(), t = (n, s) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
        r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
      };
    };
    mn = t("__VUE_INSTANCE_SETTERS__", (n) => ie = n), ns = t("__VUE_SSR_SETTERS__", (n) => zt = n);
  }
  const Jt = (e) => {
    const t = ie;
    return mn(e), e.scope.on(), () => {
      e.scope.off(), mn(t);
    };
  }, Js = () => {
    ie && ie.scope.off(), mn(null);
  };
  function yo(e) {
    return e.vnode.shapeFlag & 4;
  }
  let zt = false;
  function xl(e, t = false, n = false) {
    t && ns(t);
    const { props: s, children: r } = e.vnode, o = yo(e);
    nl(e, s, o, t), il(e, r, n || t);
    const i = o ? Sl(e, t) : void 0;
    return t && ns(false), i;
  }
  function Sl(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hi);
    const { setup: s } = n;
    if (s) {
      He();
      const r = e.setupContext = s.length > 1 ? El(e) : null, o = Jt(e), i = Gt(s, e, 0, [
        e.props,
        r
      ]), l = mr(i);
      if (Ue(), o(), (l || e.sp) && !Vt(e) && zr(e), l) {
        if (i.then(Js, Js), t) return i.then((c) => {
          Ys(e, c);
        }).catch((c) => {
          En(c, e, 0);
        });
        e.asyncDep = i;
      } else Ys(e, i);
    } else wo(e);
  }
  function Ys(e, t, n) {
    D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = Lr(t)), wo(e);
  }
  function wo(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Fe);
    {
      const r = Jt(e);
      He();
      try {
        Ui(e);
      } finally {
        Ue(), r();
      }
    }
  }
  const Cl = {
    get(e, t) {
      return oe(e, "get", ""), e[t];
    }
  };
  function El(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Cl),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Mn(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lr(oi(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Lt) return Lt[n](e);
      },
      has(t, n) {
        return n in t || n in Lt;
      }
    })) : e.proxy;
  }
  function Tl(e, t = true) {
    return D(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Al(e) {
    return D(e) && "__vccOpts" in e;
  }
  const ut = (e, t) => ui(e, t, zt), Rl = "3.5.26";
  let ss;
  const Xs = typeof window < "u" && window.trustedTypes;
  if (Xs) try {
    ss = Xs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  const vo = ss ? (e) => ss.createHTML(e) : (e) => e, Ml = "http://www.w3.org/2000/svg", Il = "http://www.w3.org/1998/Math/MathML", Ve = typeof document < "u" ? document : null, Zs = Ve && Ve.createElement("template"), Ol = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t === "svg" ? Ve.createElementNS(Ml, e) : t === "mathml" ? Ve.createElementNS(Il, e) : n ? Ve.createElement(e, {
        is: n
      }) : Ve.createElement(e);
      return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
    },
    createText: (e) => Ve.createTextNode(e),
    createComment: (e) => Ve.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ve.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === o || !(r = r.nextSibling)); ) ;
      else {
        Zs.innerHTML = vo(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
        const l = Zs.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  }, Pl = /* @__PURE__ */ Symbol("_vtc");
  function Fl(e, t, n) {
    const s = e[Pl];
    s && (t = (t ? [
      t,
      ...s
    ] : [
      ...s
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  const Qs = /* @__PURE__ */ Symbol("_vod"), Dl = /* @__PURE__ */ Symbol("_vsh"), Nl = /* @__PURE__ */ Symbol(""), $l = /(?:^|;)\s*display\s*:/;
  function jl(e, t, n) {
    const s = e.style, r = se(n);
    let o = false;
    if (n && !r) {
      if (t) if (se(t)) for (const i of t.split(";")) {
        const l = i.slice(0, i.indexOf(":")).trim();
        n[l] == null && un(s, l, "");
      }
      else for (const i in t) n[i] == null && un(s, i, "");
      for (const i in n) i === "display" && (o = true), un(s, i, n[i]);
    } else if (r) {
      if (t !== n) {
        const i = s[Nl];
        i && (n += ";" + i), s.cssText = n, o = $l.test(n);
      }
    } else t && e.removeAttribute("style");
    Qs in e && (e[Qs] = o ? s.display : "", e[Dl] && (s.display = "none"));
  }
  const er = /\s*!important$/;
  function un(e, t, n) {
    if (N(n)) n.forEach((s) => un(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const s = Vl(e, t);
      er.test(n) ? e.setProperty(dt(s), n.replace(er, ""), "important") : e[s] = n;
    }
  }
  const tr = [
    "Webkit",
    "Moz",
    "ms"
  ], Hn = {};
  function Vl(e, t) {
    const n = Hn[t];
    if (n) return n;
    let s = we(t);
    if (s !== "filter" && s in e) return Hn[t] = s;
    s = xn(s);
    for (let r = 0; r < tr.length; r++) {
      const o = tr[r] + s;
      if (o in e) return Hn[t] = o;
    }
    return t;
  }
  const nr = "http://www.w3.org/1999/xlink";
  function sr(e, t, n, s, r, o = jo(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(nr, t.slice(6, t.length)) : e.setAttributeNS(nr, t, n) : n == null || o && !xr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : et(n) ? String(n) : n);
  }
  function rr(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? vo(n) : n);
      return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let i = false;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = xr(n) : n == null && l === "string" ? (n = "", i = true) : l === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(r || t);
  }
  function mt(e, t, n, s) {
    e.addEventListener(t, n, s);
  }
  function Ll(e, t, n, s) {
    e.removeEventListener(t, n, s);
  }
  const or = /* @__PURE__ */ Symbol("_vei");
  function Bl(e, t, n, s, r = null) {
    const o = e[or] || (e[or] = {}), i = o[t];
    if (s && i) i.value = s;
    else {
      const [l, c] = Hl(t);
      if (s) {
        const d = o[t] = kl(s, r);
        mt(e, l, d, c);
      } else i && (Ll(e, l, i, c), o[t] = void 0);
    }
  }
  const ir = /(?:Once|Passive|Capture)$/;
  function Hl(e) {
    let t;
    if (ir.test(e)) {
      t = {};
      let s;
      for (; s = e.match(ir); ) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : dt(e.slice(2)),
      t
    ];
  }
  let Un = 0;
  const Ul = Promise.resolve(), Wl = () => Un || (Ul.then(() => Un = 0), Un = Date.now());
  function kl(e, t) {
    const n = (s) => {
      if (!s._vts) s._vts = Date.now();
      else if (s._vts <= n.attached) return;
      De(Kl(s, n.value), t, 5, [
        s
      ]);
    };
    return n.value = e, n.attached = Wl(), n;
  }
  function Kl(e, t) {
    if (N(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((s) => (r) => !r._stopped && s && s(r));
    } else return t;
  }
  const lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ql = (e, t, n, s, r, o) => {
    const i = r === "svg";
    t === "class" ? Fl(e, s, i) : t === "style" ? jl(e, n, s) : yn(t) ? ls(t) || Bl(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : zl(e, t, s, i)) ? (rr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sr(e, t, s, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !se(s)) ? rr(e, we(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), sr(e, t, s, i));
  };
  function zl(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && lr(t) && D(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return lr(t) && se(n) ? false : t in e;
  }
  const cr = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return N(t) ? (n) => rn(t, n) : t;
  };
  function Gl(e) {
    e.target.composing = true;
  }
  function fr(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  const Wn = /* @__PURE__ */ Symbol("_assign");
  function ur(e, t, n) {
    return t && (e = e.trim()), n && (e = us(e)), e;
  }
  const Jl = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Wn] = cr(r);
      const o = s || r.props && r.props.type === "number";
      mt(e, t ? "change" : "input", (i) => {
        i.target.composing || e[Wn](ur(e.value, n, o));
      }), (n || o) && mt(e, "change", () => {
        e.value = ur(e.value, n, o);
      }), t || (mt(e, "compositionstart", Gl), mt(e, "compositionend", fr), mt(e, "change", fr));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
      if (e[Wn] = cr(i), e.composing) return;
      const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? us(e.value) : e.value, c = t ?? "";
      l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
    }
  }, Yl = ce({
    patchProp: ql
  }, Ol);
  let ar;
  function Xl() {
    return ar || (ar = cl(Yl));
  }
  const Zl = ((...e) => {
    const t = Xl().createApp(...e), { mount: n } = t;
    return t.mount = (s) => {
      const r = ec(s);
      if (!r) return;
      const o = t._component;
      !D(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const i = n(r, false, Ql(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
    }, t;
  });
  function Ql(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ec(e) {
    return se(e) ? document.querySelector(e) : e;
  }
  let tc, nc, dr, rc, oc;
  tc = "modulepreload";
  nc = function(e) {
    return "/oxidice-example/" + e;
  };
  dr = {};
  sc = function(t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      let c = function(d) {
        return Promise.all(d.map((u) => Promise.resolve(u).then((h) => ({
          status: "fulfilled",
          value: h
        }), (h) => ({
          status: "rejected",
          reason: h
        }))));
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"), l = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute("nonce"));
      r = c(n.map((d) => {
        if (d = nc(d), d in dr) return;
        dr[d] = true;
        const u = d.endsWith(".css"), h = u ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${d}"]${h}`)) return;
        const y = document.createElement("link");
        if (y.rel = u ? "stylesheet" : tc, u || (y.as = "script"), y.crossOrigin = "", y.href = d, l && y.setAttribute("nonce", l), document.head.appendChild(y), u) return new Promise((w, R) => {
          y.addEventListener("load", w), y.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${d}`)));
        });
      }));
    }
    function o(i) {
      const l = new Event("vite:preloadError", {
        cancelable: true
      });
      if (l.payload = i, window.dispatchEvent(l), !l.defaultPrevented) throw i;
    }
    return r.then((i) => {
      for (const l of i || []) l.status === "rejected" && o(l.reason);
      return t().catch(o);
    });
  };
  rc = "/oxidice-example/assets/oxidice_bg-Db7pHxVN.wasm";
  oc = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const s = t.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(s, "base64");
      else if (typeof atob == "function") {
        const o = atob(s);
        r = new Uint8Array(o.length);
        for (let i = 0; i < o.length; i++) r[i] = o.charCodeAt(i);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(r, e);
    } else {
      const s = await fetch(t), r = s.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(s, e);
      else {
        const o = await s.arrayBuffer();
        n = await WebAssembly.instantiate(o, e);
      }
    }
    return n.instance.exports;
  };
  let L;
  function ic(e) {
    L = e;
  }
  function xo(e) {
    const t = L.__externref_table_alloc();
    return L.__wbindgen_externrefs.set(t, e), t;
  }
  function rs(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null) return `${e}`;
    if (t == "string") return `"${e}"`;
    if (t == "symbol") {
      const r = e.description;
      return r == null ? "Symbol" : `Symbol(${r})`;
    }
    if (t == "function") {
      const r = e.name;
      return typeof r == "string" && r.length > 0 ? `Function(${r})` : "Function";
    }
    if (Array.isArray(e)) {
      const r = e.length;
      let o = "[";
      r > 0 && (o += rs(e[0]));
      for (let i = 1; i < r; i++) o += ", " + rs(e[i]);
      return o += "]", o;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let s;
    if (n && n.length > 1) s = n[1];
    else return toString.call(e);
    if (s == "Object") try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : s;
  }
  function _r(e, t) {
    e = e >>> 0;
    const n = ve(), s = [];
    for (let r = e; r < e + 4 * t; r += 4) s.push(L.__wbindgen_externrefs.get(n.getUint32(r, true)));
    return L.__externref_drop_slice(e, t), s;
  }
  function So(e, t) {
    return e = e >>> 0, Ht().subarray(e / 1, e / 1 + t);
  }
  let ht = null;
  function ve() {
    return (ht === null || ht.buffer.detached === true || ht.buffer.detached === void 0 && ht.buffer !== L.memory.buffer) && (ht = new DataView(L.memory.buffer)), ht;
  }
  function Ts(e, t) {
    return e = e >>> 0, fc(e, t);
  }
  let sn = null;
  function Ht() {
    return (sn === null || sn.byteLength === 0) && (sn = new Uint8Array(L.memory.buffer)), sn;
  }
  function In(e, t) {
    try {
      return e.apply(this, t);
    } catch (n) {
      const s = xo(n);
      L.__wbindgen_exn_store(s);
    }
  }
  function Et(e) {
    return e == null;
  }
  function lc(e, t) {
    const n = t(e.length * 4, 4) >>> 0;
    for (let s = 0; s < e.length; s++) {
      const r = xo(e[s]);
      ve().setUint32(n + 4 * s, r, true);
    }
    return ke = e.length, n;
  }
  function Yt(e, t, n) {
    if (n === void 0) {
      const l = Ut.encode(e), c = t(l.length, 1) >>> 0;
      return Ht().subarray(c, c + l.length).set(l), ke = l.length, c;
    }
    let s = e.length, r = t(s, 1) >>> 0;
    const o = Ht();
    let i = 0;
    for (; i < s; i++) {
      const l = e.charCodeAt(i);
      if (l > 127) break;
      o[r + i] = l;
    }
    if (i !== s) {
      i !== 0 && (e = e.slice(i)), r = n(r, s, s = i + e.length * 3, 1) >>> 0;
      const l = Ht().subarray(r + i, r + s), c = Ut.encodeInto(e, l);
      i += c.written, r = n(r, s, i, 1) >>> 0;
    }
    return ke = i, r;
  }
  function pt(e) {
    const t = L.__wbindgen_externrefs.get(e);
    return L.__externref_table_dealloc(e), t;
  }
  let an = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  an.decode();
  const cc = 2146435072;
  let kn = 0;
  function fc(e, t) {
    return kn += t, kn >= cc && (an = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), an.decode(), kn = t), an.decode(Ht().subarray(e, e + t));
  }
  const Ut = new TextEncoder();
  "encodeInto" in Ut || (Ut.encodeInto = function(e, t) {
    const n = Ut.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  });
  let ke = 0;
  const hr = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e) => L.__wbg_dicerollerwithdicebox_free(e >>> 0, 1));
  class os {
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hr.unregister(this), t;
    }
    free() {
      const t = this.__destroy_into_raw();
      L.__wbg_dicerollerwithdicebox_free(t, 0);
    }
    evaluation() {
      const t = L.dicerollerwithdicebox_evaluation(this.__wbg_ptr);
      if (t[1]) throw pt(t[0]);
    }
    getRequests() {
      const t = L.dicerollerwithdicebox_getRequests(this.__wbg_ptr);
      if (t[3]) throw pt(t[2]);
      var n = _r(t[0], t[1]).slice();
      return L.__wbindgen_free(t[0], t[1] * 4, 4), n;
    }
    setResponses(t) {
      const n = lc(t, L.__wbindgen_malloc), s = ke, r = L.dicerollerwithdicebox_setResponses(this.__wbg_ptr, n, s);
      if (r[1]) throw pt(r[0]);
    }
    removeRequests() {
      const t = L.dicerollerwithdicebox_removeRequests(this.__wbg_ptr);
      var n = _r(t[0], t[1]).slice();
      return L.__wbindgen_free(t[0], t[1] * 4, 4), n;
    }
    tryGetResults() {
      const t = L.dicerollerwithdicebox_tryGetResults(this.__wbg_ptr);
      if (t[2]) throw pt(t[1]);
      return pt(t[0]);
    }
    constructor(t, n, s) {
      const r = Yt(t, L.__wbindgen_malloc, L.__wbindgen_realloc), o = ke, i = L.dicerollerwithdicebox_new(r, o, n, s);
      if (i[2]) throw pt(i[1]);
      return this.__wbg_ptr = i[0] >>> 0, hr.register(this, this.__wbg_ptr, this), this;
    }
  }
  Symbol.dispose && (os.prototype[Symbol.dispose] = os.prototype.free);
  function uc(e) {
    const t = Yt(e, L.__wbindgen_malloc, L.__wbindgen_realloc), n = ke;
    return L.tryFoldDiceExpression(t, n);
  }
  function ac(e, t) {
    return Error(Ts(e, t));
  }
  function dc(e) {
    return Number(e);
  }
  function _c(e, t) {
    const n = String(t), s = Yt(n, L.__wbindgen_malloc, L.__wbindgen_realloc), r = ke;
    ve().setInt32(e + 4, r, true), ve().setInt32(e + 0, s, true);
  }
  function hc(e, t) {
    const n = t, s = typeof n == "bigint" ? n : void 0;
    ve().setBigInt64(e + 8, Et(s) ? BigInt(0) : s, true), ve().setInt32(e + 0, !Et(s), true);
  }
  function pc(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return Et(n) ? 16777215 : n ? 1 : 0;
  }
  function gc(e, t) {
    const n = rs(t), s = Yt(n, L.__wbindgen_malloc, L.__wbindgen_realloc), r = ke;
    ve().setInt32(e + 4, r, true), ve().setInt32(e + 0, s, true);
  }
  function bc(e, t) {
    return e in t;
  }
  function mc(e) {
    return typeof e == "bigint";
  }
  function yc(e) {
    return typeof e == "function";
  }
  function wc(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }
  function vc(e) {
    return e === void 0;
  }
  function xc(e, t) {
    return e === t;
  }
  function Sc(e, t) {
    return e == t;
  }
  function Cc(e, t) {
    const n = t, s = typeof n == "number" ? n : void 0;
    ve().setFloat64(e + 8, Et(s) ? 0 : s, true), ve().setInt32(e + 0, !Et(s), true);
  }
  function Ec(e, t) {
    const n = t, s = typeof n == "string" ? n : void 0;
    var r = Et(s) ? 0 : Yt(s, L.__wbindgen_malloc, L.__wbindgen_realloc), o = ke;
    ve().setInt32(e + 4, o, true), ve().setInt32(e + 0, r, true);
  }
  function Tc(e, t) {
    throw new Error(Ts(e, t));
  }
  function Ac() {
    return In(function(e, t) {
      return e.call(t);
    }, arguments);
  }
  function Rc(e) {
    return e.done;
  }
  function Mc() {
    return In(function(e, t) {
      globalThis.crypto.getRandomValues(So(e, t));
    }, arguments);
  }
  function Ic(e, t) {
    return e[t >>> 0];
  }
  function Oc() {
    return In(function(e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }
  function Pc(e, t) {
    return e[t];
  }
  function Fc(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function Dc(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function Nc(e) {
    return Array.isArray(e);
  }
  function $c(e) {
    return Number.isSafeInteger(e);
  }
  function jc() {
    return Symbol.iterator;
  }
  function Vc(e) {
    return e.length;
  }
  function Lc(e) {
    return e.length;
  }
  function Bc() {
    return new Object();
  }
  function Hc() {
    return new Array();
  }
  function Uc(e) {
    return new Uint8Array(e);
  }
  function Wc(e) {
    return e.next;
  }
  function kc() {
    return In(function(e) {
      return e.next();
    }, arguments);
  }
  function Kc(e, t, n) {
    Uint8Array.prototype.set.call(So(e, t), n);
  }
  function qc(e, t, n) {
    e[t] = n;
  }
  function zc(e, t, n) {
    e[t >>> 0] = n;
  }
  function Gc(e) {
    return e.value;
  }
  function Jc(e, t) {
    return Ts(e, t);
  }
  function Yc(e) {
    return BigInt.asUintN(64, e);
  }
  function Xc(e) {
    return e;
  }
  function Zc() {
    const e = L.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const te = await oc({
    "./oxidice_bg.js": {
      __wbg_getRandomValues_1c61fac11405ffdc: Mc,
      __wbg_get_with_ref_key_1dc361bd10053bfe: Pc,
      __wbg_set_3f1d0b984ed272ed: qc,
      __wbg_String_8f0eb39a4a4c2f66: _c,
      __wbg_new_6421f6084cc5bc5a: Uc,
      __wbg_length_22ac23eaec9d8053: Vc,
      __wbg_prototypesetcall_dfe9b766cdc1f1fd: Kc,
      __wbg_done_62ea16af4ce34b24: Rc,
      __wbg_value_57b7b035e117f7ee: Gc,
      __wbg_instanceof_Uint8Array_da54ccc9d3e09434: Dc,
      __wbg_instanceof_ArrayBuffer_f3320d2419cd0355: Fc,
      __wbg_get_6b7bd52aca3f9671: Ic,
      __wbg_new_25f239778d6112b9: Hc,
      __wbg_set_7df433eea03a5c14: zc,
      __wbg_length_d45040a40c570362: Lc,
      __wbg_isArray_51fd9e6422c0a395: Nc,
      __wbg_isSafeInteger_ae7d3f054d55fa16: $c,
      __wbg_new_1ba21ce319a06297: Bc,
      __wbg_iterator_27b7c8b35ab3e86b: jc,
      __wbg_get_af9dab7e9603ea93: Oc,
      __wbg_call_abb4ff46ce38be40: Ac,
      __wbg_next_138a17bbf04e926c: Wc,
      __wbg_next_3cfe5c0fe2a4cc53: kc,
      __wbg___wbindgen_in_0d3e1e8f0c669317: bc,
      __wbg___wbindgen_throw_dd24417ed36fc46e: Tc,
      __wbg___wbindgen_jsval_eq_b6101cc9cef1fe36: xc,
      __wbg_Number_2d1dcfcf4ec51736: dc,
      __wbg_Error_52673b7de5a0ca89: ac,
      __wbg___wbindgen_is_bigint_0e1a2e3f55cfae27: mc,
      __wbg___wbindgen_is_object_ce774f3490692386: wc,
      __wbg___wbindgen_number_get_9619185a74197f95: Cc,
      __wbg___wbindgen_string_get_a2a31e16edf96e42: Ec,
      __wbg___wbindgen_boolean_get_dea25b33882b895b: pc,
      __wbg___wbindgen_is_function_8d400b8b1af978cd: yc,
      __wbg___wbindgen_is_undefined_f6b95eab589e0269: vc,
      __wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d: Sc,
      __wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d: hc,
      __wbg___wbindgen_debug_string_adfb662ae34724b6: gc,
      __wbindgen_init_externref_table: Zc,
      __wbindgen_cast_2241b6af4c4b2941: Jc,
      __wbindgen_cast_4625c577ab2ec9ee: Yc,
      __wbindgen_cast_d6cd19b81560fd6e: Xc
    }
  }, rc), Qc = te.memory, ef = te.__wbg_dicerollerwithdicebox_free, tf = te.checkConstantInteger, nf = te.checkNumber, sf = te.dicerollerwithdicebox_evaluation, rf = te.dicerollerwithdicebox_getRequests, of = te.dicerollerwithdicebox_new, lf = te.dicerollerwithdicebox_removeRequests, cf = te.dicerollerwithdicebox_setResponses, ff = te.dicerollerwithdicebox_tryGetResults, uf = te.rollWithoutAnimation, af = te.tryFoldDiceExpression, df = te.__wbindgen_malloc, _f = te.__wbindgen_realloc, hf = te.__wbindgen_exn_store, pf = te.__externref_table_alloc, gf = te.__wbindgen_externrefs, bf = te.__externref_table_dealloc, mf = te.__externref_drop_slice, yf = te.__wbindgen_free, Co = te.__wbindgen_start, wf = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_drop_slice: mf,
    __externref_table_alloc: pf,
    __externref_table_dealloc: bf,
    __wbg_dicerollerwithdicebox_free: ef,
    __wbindgen_exn_store: hf,
    __wbindgen_externrefs: gf,
    __wbindgen_free: yf,
    __wbindgen_malloc: df,
    __wbindgen_realloc: _f,
    __wbindgen_start: Co,
    checkConstantInteger: tf,
    checkNumber: nf,
    dicerollerwithdicebox_evaluation: sf,
    dicerollerwithdicebox_getRequests: rf,
    dicerollerwithdicebox_new: of,
    dicerollerwithdicebox_removeRequests: lf,
    dicerollerwithdicebox_setResponses: cf,
    dicerollerwithdicebox_tryGetResults: ff,
    memory: Qc,
    rollWithoutAnimation: uf,
    tryFoldDiceExpression: af
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ic(wf);
  Co();
  const vf = {
    palette: [
      "#FF3B30",
      "#FF9500",
      "#FFCC00",
      "#4CD964",
      "#007AFF",
      "#5856D6",
      "#AF52DE"
    ],
    _currentIndex: 0,
    next: function() {
      const e = this.palette[this._currentIndex];
      return this._currentIndex = (this._currentIndex + 1) % this.palette.length, e;
    },
    reset: function() {
      this._currentIndex = 0;
    }
  };
  let Ot = null, Kn = false, pr = false, ze = null, qn = null;
  function xf() {
    const e = async (c) => {
      if (Ot || Kn) return;
      Kn = true;
      const { default: d } = await sc(async () => {
        const { default: u } = await import("./dice-box.es-Ckl64-Zg.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          default: u
        };
      }, []);
      Ot = new d({
        container: c,
        id: "dice-canvas",
        assetPath: "/assets/",
        scale: 5,
        theme: "default",
        origin: window.location.origin + "/oxidice-example/"
      });
      try {
        await Ot.init(), pr = true;
      } finally {
        Kn = false;
      }
    }, t = () => {
      if (!Ot || !pr) throw new Error("DiceBox is not initialized. Please call initDiceBox first.");
      return Ot;
    }, n = (c) => async (...d) => {
      const u = t();
      ze && (ze(), ze = null);
      let h;
      const y = new Promise((M, k) => {
        h = setTimeout(() => {
          k(new Error("Roll timeout"));
        }, 100 * 1e3);
      });
      let w;
      const R = new Promise((M, k) => {
        w = () => k(new Error("Cancelled by new roll"));
      });
      w && (ze = w);
      try {
        let M = [];
        return c === "roll" ? M = await Promise.race([
          u.roll(...d),
          y,
          R
        ]) : c === "add" && (M = await Promise.race([
          u.add(...d),
          y,
          R
        ])), clearTimeout(h), ze === w && (ze = null), M;
      } catch (M) {
        clearTimeout(h), ze === w && (ze = null), (M instanceof Error ? M.message : "Unknown error") === "Cancelled by new roll" || t().clear();
        return;
      }
    }, s = n("roll"), r = n("add"), o = async (c, d, u) => {
      var _a, _b;
      const h = {};
      qn = h, t().clear();
      let w = null;
      try {
        let R = true;
        for (w = new os(c, d, u); ; ) {
          if (qn !== h) return null;
          w.evaluation();
          for (const E of w.removeRequests()) t().remove(E);
          const M = w.tryGetResults();
          if (M) return M;
          const k = w.getRequests();
          if (k.length !== 0) {
            const E = k.map((ee) => ({
              qty: ee.count,
              sides: ee.face,
              themeColor: vf.next()
            })), P = R ? s : r;
            if (R = false, qn !== h) return null;
            const U = await P(E);
            if (U === void 0) return null;
            const I = [];
            let Q;
            for (const ee of U) ee.groupId !== Q && (Q = ee.groupId, I.push([])), (_a = I[I.length - 1]) == null ? void 0 : _a.push(ee);
            const xe = [];
            for (let ee = 0; ee < k.length; ee++) {
              const Se = (_b = k[ee]) == null ? void 0 : _b.idx, qe = I[ee];
              if (Se === void 0 || qe === void 0) return null;
              const Ne = qe.map(($e) => $e.value), tt = qe.map(($e) => ({
                groupId: $e.groupId,
                rollId: $e.rollId
              }));
              xe.push({
                idx: Se,
                results: tt,
                values: Ne
              });
            }
            w.setResponses(xe);
          } else w.setResponses([]);
        }
      } finally {
        w == null ? void 0 : w.free();
      }
    };
    return {
      initDiceBox: e,
      getDiceBox: t,
      parseAndRoll: async (c) => {
        try {
          return await o(c, 20, 2e3);
        } catch (d) {
          return alert(d), null;
        }
      },
      checkNotationValidAndFold: (c) => {
        try {
          const d = uc(c);
          return d.result === "valid" ? [
            true,
            d.value
          ] : [
            false,
            d.value
          ];
        } catch (d) {
          let u;
          return d instanceof Error ? u = d.message : typeof d == "string" ? u = d : u = String(d) || "Unknown error", [
            false,
            u
          ];
        }
      }
    };
  }
  const gt = Xe(void 0), Pt = Xe(void 0), it = Xe(void 0);
  function Eo() {
    return {
      results: gt,
      showedValue: Pt,
      showedID: it,
      setResults: (i) => {
        gt.value = i, Pt.value = void 0, it.value = void 0;
      },
      setShowedValue: (i, l) => {
        gt.value && (Pt.value = i, it.value = l);
      },
      removeShowedValue: () => {
        Pt.value = void 0, it.value = void 0;
      },
      getShowedId: () => {
        if (gt.value && it.value) return it.value;
      },
      getResult: () => gt.value,
      clear: () => {
        gt.value = void 0, Pt.value = void 0, it.value = void 0;
      }
    };
  }
  const Sf = {
    key: 0,
    class: "symbol paren"
  }, Cf = {
    key: 1
  }, Ef = {
    key: 0,
    class: "symbol comma"
  }, Tf = {
    key: 0,
    class: "symbol comma"
  }, Af = {
    class: "op-spacing-sm text-operator"
  }, Rf = {
    key: 10,
    class: "symbol paren"
  }, Mf = xs({
    __name: "ExpressionNode",
    props: {
      node: {}
    },
    setup(e) {
      const t = e, { setShowedValue: n, removeShowedValue: s, getShowedId: r } = Eo(), o = ut(() => {
        const h = t.node.layout.type;
        return [
          "atom",
          "prefix",
          "tightInfix",
          "tightPostfix",
          "specialModifier"
        ].includes(h);
      }), i = ut(() => r() === t.node.id), l = Xe(false), c = () => {
        r() === t.node.id ? s() : n(t.node.value, t.node.id);
      }, d = () => {
        l.value = true;
      }, u = () => {
        l.value = false;
      };
      return (h, y) => {
        const w = Vi("ExpressionNode", true);
        return $(), j("span", {
          class: at([
            "expression-node",
            {
              "mod-tight": o.value,
              selected: i.value,
              hovered: l.value
            }
          ])
        }, [
          e.node.wrapInParentheses ? ($(), j("span", Sf, "(")) : re("", true),
          e.node.layout.type === "atom" ? ($(), j("span", Cf, ne(e.node.label), 1)) : e.node.layout.type === "list" ? ($(), j(J, {
            key: 2
          }, [
            y[0] || (y[0] = A("span", {
              class: "symbol bracket"
            }, "[", -1)),
            ($(true), j(J, null, gn(e.node.layout.children, (R, M) => ($(), j("span", {
              key: R.id,
              class: "list-item"
            }, [
              M > 0 ? ($(), j("span", Ef, ", ")) : re("", true),
              Y(w, {
                node: R
              }, null, 8, [
                "node"
              ])
            ]))), 128)),
            y[1] || (y[1] = A("span", {
              class: "symbol bracket"
            }, "]", -1))
          ], 64)) : e.node.layout.type === "prefix" ? ($(), j(J, {
            key: 3
          }, [
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            Y(w, {
              node: e.node.layout.children
            }, null, 8, [
              "node"
            ])
          ], 64)) : e.node.layout.type === "infix" ? ($(), j(J, {
            key: 4
          }, [
            Y(w, {
              node: e.node.layout.children[0]
            }, null, 8, [
              "node"
            ]),
            A("span", {
              class: "op-spacing op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            Y(w, {
              node: e.node.layout.children[1]
            }, null, 8, [
              "node"
            ])
          ], 64)) : e.node.layout.type === "tightInfix" ? ($(), j(J, {
            key: 5
          }, [
            Y(w, {
              node: e.node.layout.children[0]
            }, null, 8, [
              "node"
            ]),
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            Y(w, {
              node: e.node.layout.children[1]
            }, null, 8, [
              "node"
            ])
          ], 64)) : e.node.layout.type === "tightPostfix" ? ($(), j(J, {
            key: 6
          }, [
            Y(w, {
              node: e.node.layout.children
            }, null, 8, [
              "node"
            ]),
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33)
          ], 64)) : e.node.layout.type === "function" ? ($(), j(J, {
            key: 7
          }, [
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            y[2] || (y[2] = A("span", {
              class: "symbol paren"
            }, "(", -1)),
            ($(true), j(J, null, gn(e.node.layout.children, (R, M) => ($(), j("span", {
              key: R.id
            }, [
              M > 0 ? ($(), j("span", Tf, ", ")) : re("", true),
              Y(w, {
                node: R
              }, null, 8, [
                "node"
              ])
            ]))), 128)),
            y[3] || (y[3] = A("span", {
              class: "symbol paren"
            }, ")", -1))
          ], 64)) : e.node.layout.type === "filter" ? ($(), j(J, {
            key: 8
          }, [
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            A("span", Af, ne(e.node.layout.children[0]), 1),
            Y(w, {
              node: e.node.layout.children[2]
            }, null, 8, [
              "node"
            ]),
            y[4] || (y[4] = A("span", {
              class: "symbol paren"
            }, "(", -1)),
            Y(w, {
              node: e.node.layout.children[1]
            }, null, 8, [
              "node"
            ]),
            y[5] || (y[5] = A("span", {
              class: "symbol paren"
            }, ")", -1))
          ], 64)) : e.node.layout.type === "specialModifier" ? ($(), j(J, {
            key: 9
          }, [
            Y(w, {
              node: e.node.layout.children[0]
            }, null, 8, [
              "node"
            ]),
            A("span", {
              class: "op-not-atom",
              onClick: c,
              onMouseenter: d,
              onMouseleave: u
            }, ne(e.node.label), 33),
            e.node.layout.children[1] ? ($(), j(J, {
              key: 0
            }, [
              A("span", {
                class: "op-not-atom",
                onClick: c,
                onMouseenter: d,
                onMouseleave: u
              }, ne(e.node.layout.children[1][0]), 33),
              Y(w, {
                node: e.node.layout.children[1][1]
              }, null, 8, [
                "node"
              ])
            ], 64)) : re("", true),
            e.node.layout.children[2] ? ($(), j(J, {
              key: 1
            }, [
              A("span", {
                class: "op-not-atom",
                onClick: c,
                onMouseenter: d,
                onMouseleave: u
              }, "lt", 32),
              Y(w, {
                node: e.node.layout.children[2]
              }, null, 8, [
                "node"
              ])
            ], 64)) : re("", true),
            e.node.layout.children[3] ? ($(), j(J, {
              key: 2
            }, [
              A("span", {
                class: "op-not-atom",
                onClick: c,
                onMouseenter: d,
                onMouseleave: u
              }, "lc", 32),
              Y(w, {
                node: e.node.layout.children[3]
              }, null, 8, [
                "node"
              ])
            ], 64)) : re("", true)
          ], 64)) : re("", true),
          e.node.wrapInParentheses ? ($(), j("span", Rf, ")")) : re("", true)
        ], 2);
      };
    }
  }), As = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  }, If = As(Mf, [
    [
      "__scopeId",
      "data-v-fdf9b0bd"
    ]
  ]), Of = {
    class: "value-display-container"
  }, Pf = {
    key: 0,
    class: "scroll-wrapper simple-value"
  }, Ff = {
    class: "value-number"
  }, Df = {
    key: 1,
    class: "scroll-wrapper list-value"
  }, Nf = {
    key: 0,
    class: "comma"
  }, $f = {
    key: 2,
    class: "pool-container"
  }, jf = {
    class: "pool-summary"
  }, Vf = {
    class: "pool-label"
  }, Lf = {
    class: "pool-total"
  }, Bf = {
    class: "pool-dice-grid"
  }, Hf = [
    "title"
  ], Uf = {
    key: 0,
    class: "die-badge badge-reroll",
    title: "triggered reroll"
  }, Wf = [
    "title"
  ], kf = {
    key: 0,
    class: "badge-count"
  }, Kf = {
    key: 3,
    class: "not-computed"
  }, qf = xs({
    __name: "DiceValueDisplay",
    props: {
      value: {}
    },
    setup(e) {
      const t = e, n = ut(() => t.value.type === "dicePool" ? {
        isPool: true,
        label: "Total",
        mainValue: t.value.value.total,
        details: t.value.value.details
      } : t.value.type === "successPool" ? {
        isPool: true,
        label: "Count",
        mainValue: t.value.value.count,
        details: t.value.value.details
      } : {
        isPool: false
      }), s = (o) => {
        const i = [];
        return o.isKept ? (o.outcome === "success" && i.push("die-success"), o.outcome === "failure" && i.push("die-failure")) : i.push("die-dropped"), i.join(" ");
      }, r = (o) => {
        let i = `Result: ${o.result}`;
        return o.isKept || (i += "(dropped)"), o.isRerolled && (i += `
[rerolled]`), o.explodedTimes > 0 && (i += `
[explode ${o.explodedTimes} times]`), o.rollHistory.length > 1 && (i += `
process: ${o.rollHistory.join(" + ")}`), i;
      };
      return (o, i) => ($(), j("div", Of, [
        e.value.type === "number" ? ($(), j("div", Pf, [
          A("span", Ff, ne(e.value.value), 1)
        ])) : e.value.type === "list" ? ($(), j("div", Df, [
          i[0] || (i[0] = A("span", {
            class: "symbol"
          }, "[", -1)),
          ($(true), j(J, null, gn(e.value.value, (l, c) => ($(), j("span", {
            key: c,
            class: "list-item"
          }, [
            mo(ne(l), 1),
            c < e.value.value.length - 1 ? ($(), j("span", Nf, ",")) : re("", true)
          ]))), 128)),
          i[1] || (i[1] = A("span", {
            class: "symbol"
          }, "]", -1))
        ])) : n.value.isPool ? ($(), j("div", $f, [
          A("div", jf, [
            A("div", Vf, ne(n.value.label), 1),
            A("div", Lf, ne(n.value.mainValue), 1)
          ]),
          A("div", Bf, [
            ($(true), j(J, null, gn(n.value.details, (l, c) => ($(), j("div", {
              key: c,
              class: "die-wrapper",
              title: r(l)
            }, [
              A("div", {
                class: at([
                  "die-item",
                  s(l)
                ])
              }, ne(l.result), 3),
              l.isRerolled ? ($(), j("div", Uf, [
                ...i[2] || (i[2] = [
                  A("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24"
                  }, [
                    A("path", {
                      fill: "currentColor",
                      d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4v3z"
                    })
                  ], -1)
                ])
              ])) : re("", true),
              l.explodedTimes > 0 ? ($(), j("div", {
                key: 1,
                class: "die-badge badge-explode",
                title: `explode ${l.explodedTimes} times`
              }, [
                i[3] || (i[3] = A("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 512 512"
                }, [
                  A("path", {
                    fill: "currentColor",
                    d: "M454.547 16.027C406.8 37.25 381.052 75.064 369.135 123.303c42.096-24.196 72.15-58.61 85.412-107.276zM95.56 19.03c15.534 34.478 41.673 62.266 76.506 84.683 1.576-31.216-1.92-59.57-11.097-84.682H95.56zm223.674 9.507c-27.494 57.123-49.87 115.225-67.9 174.162-13.04-40.243-29.32-79.83-49.25-118.68.247 36.447 3.52 71.91 9.445 106.51-38.943-35.318-79.96-68.894-123.292-100.52 29.922 43.868 62.24 84.967 96.64 123.656-26.502-8.224-56.91-10.145-88.08-5.97 19.645 14.96 42.703 28.156 67.192 36-48.423 2.757-97.046 7.823-145.888 15.45 41.51 7.845 82.85 13.375 124.043 16.842a797.165 797.165 0 0 0-65.536 29.946c40.608-.275 79.997-4.3 118.33-11.577-16.74 21.736-31.644 45.162-44.99 70.028 25.735-15.12 49.978-31.88 72.554-50.477-12.504 58.248-21.31 117.203-27.092 176.738 21.65-50.587 41.044-101.993 57.877-154.328 11.282 28.076 24.197 55.62 38.556 82.696-2.48-37.338-7-74.264-13.793-110.73 46.832 43.08 96.5 82.882 148.472 120.017-38.845-51.87-80.238-101.596-124.584-148.84 65.17-2.498 130.007-9.56 194.576-20.314-47.5-6.818-95.158-11.807-142.99-14.775 19.607-8.637 38.96-18.06 58.078-28.198-36.566 2.427-72.737 6.804-108.467 13.363a476.647 476.647 0 0 0 33.715-52.05 397.556 397.556 0 0 0-47.317 27.36c13.228-57.563 23.26-116.284 29.7-176.308zm175.05 29.625c-48.748 27.205-89.195 69.08-119.934 128.35 46.33-.998 85.935-12.905 119.933-33.666V58.162zM25.36 124.676c-1.285-.01-2.578-.004-3.878.015 24.13 35.622 56.432 55.136 101.748 49.035-24.56-34.196-57.994-48.75-97.87-49.05zm374.08 179.517c-10.527-.03-21.428 1.062-32.66 3.15 34.93 36.464 77.04 54.27 129.158 46.053-26.086-34.646-58.903-49.093-96.5-49.203zM113.774 326.62c-8.008.004-15.842.556-23.472 1.32-25.435 2.57-48.993 9.59-70.666 21.062v70.666c38.192-19.716 72.544-49.83 102.203-92.86-2.708-.13-5.395-.19-8.065-.19zm57.727 49.855c-50.455 23.15-70.933 64.14-72.57 116.345 43.08-26.34 69.47-63.673 72.57-116.345zm157.664 15.744c.832 38.58 10.744 71.555 28.033 99.866h78.843c-22.654-40.592-57.522-74.27-106.877-99.867z"
                  })
                ], -1)),
                l.explodedTimes > 1 ? ($(), j("span", kf, ne(l.explodedTimes), 1)) : re("", true)
              ], 8, Wf)) : re("", true)
            ], 8, Hf))), 128))
          ])
        ])) : ($(), j("div", Kf, "..."))
      ]));
    }
  }), zf = As(qf, [
    [
      "__scopeId",
      "data-v-f21377d8"
    ]
  ]), Gf = {
    key: 0,
    class: "loading-overlay"
  }, Jf = {
    class: "app-layout"
  }, Yf = {
    class: "sidebar"
  }, Xf = {
    class: "control-section"
  }, Zf = {
    class: "control-section"
  }, Qf = {
    key: 0
  }, eu = {
    class: "info-display"
  }, tu = {
    key: 1
  }, nu = {
    key: 2
  }, su = {
    class: "info-display"
  }, ru = xs({
    __name: "App",
    setup(e) {
      const { showedValue: t, setResults: n, getResult: s, clear: r } = Eo(), { initDiceBox: o, parseAndRoll: i, checkNotationValidAndFold: l } = xf(), c = Xe(false);
      Yr(async () => {
        try {
          await o("#dice-box-container"), c.value = true;
        } catch (E) {
          alert("Dice box initialization failed" + E);
        }
      });
      const d = Xe("[4d6kh3] ** 6"), u = Xe(true), h = Xe("---"), y = ut(() => s()), w = ut(() => {
        const E = s();
        if (E) return t.value ? t.value : E.value;
      }), R = ut(() => w.value);
      cn(d, (E) => {
        if (E.trim() === "") {
          u.value = true, h.value = "---";
          return;
        }
        const [P, U] = l(E);
        u.value = P, h.value = U;
      }, {
        immediate: true
      });
      const M = async () => {
        r();
        const E = await i(d.value);
        E && n(E);
      }, k = (E) => E.type === "number" ? E.value.toString() : E.type === "dicePool" ? E.value.total.toString() : E.type === "successPool" ? E.value.count.toString() : E.type === "list" ? "[" + E.value.map((P) => P.toString()).join(", ") + "]" : "";
      return (E, P) => ($(), j(J, null, [
        c.value ? re("", true) : ($(), j("div", Gf, [
          ...P[1] || (P[1] = [
            A("div", {
              class: "loading-content"
            }, [
              A("p", null, "Initializing...")
            ], -1)
          ])
        ])),
        A("div", Jf, [
          A("aside", Yf, [
            A("div", Xf, [
              P[2] || (P[2] = A("label", {
                class: "label"
              }, "Dice Notation", -1)),
              mi(A("input", {
                "onUpdate:modelValue": P[0] || (P[0] = (U) => d.value = U),
                type: "text",
                placeholder: "e.g. 2d6 + 4",
                class: "dnd-input"
              }, null, 512), [
                [
                  Jl,
                  d.value
                ]
              ])
            ]),
            A("div", Zf, [
              A("label", {
                class: at([
                  "label",
                  {
                    warning: !u.value
                  }
                ])
              }, ne(u.value ? "Folded Notation" : "Error Message"), 3),
              A("div", {
                class: at([
                  "info-display",
                  {
                    warning: !u.value
                  }
                ])
              }, ne(h.value), 3)
            ]),
            A("div", {
              class: "control-section"
            }, [
              A("button", {
                onClick: M,
                class: "dnd-btn"
              }, "Roll Dice")
            ]),
            P[6] || (P[6] = A("div", {
              class: "divider"
            }, null, -1)),
            on(s)() !== void 0 ? ($(), j("div", Qf, [
              P[3] || (P[3] = A("label", {
                class: "label"
              }, "Output Nodes", -1)),
              A("div", eu, [
                Y(If, {
                  node: y.value
                }, null, 8, [
                  "node"
                ])
              ])
            ])) : re("", true),
            on(s)() !== void 0 ? ($(), j("div", tu, [
              P[4] || (P[4] = A("label", {
                class: "label"
              }, "Node Value", -1)),
              Y(zf, {
                value: R.value
              }, null, 8, [
                "value"
              ])
            ])) : re("", true),
            on(s)() !== void 0 ? ($(), j("div", nu, [
              P[5] || (P[5] = A("label", {
                class: "label"
              }, "Result", -1)),
              A("div", su, ne(k(y.value.value)), 1)
            ])) : re("", true)
          ]),
          P[7] || (P[7] = A("main", {
            class: "main-content"
          }, [
            A("div", {
              id: "dice-box-container"
            }),
            A("div", {
              class: "watermark"
            }, "Dice Scene")
          ], -1))
        ])
      ], 64));
    }
  }), ou = As(ru, [
    [
      "__scopeId",
      "data-v-49dad037"
    ]
  ]);
  Zl(ou).mount("#app");
})();
export {
  sc as _,
  __tla
};
