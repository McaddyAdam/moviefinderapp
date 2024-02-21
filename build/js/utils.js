var s = (e, n, t) => new Promise((o, r) => {
    var c = i => { try { a(t.next(i)) } catch (l) { r(l) } },
        m = i => { try { a(t.throw(i)) } catch (l) { r(l) } },
        a = i => i.done ? o(i.value) : Promise.resolve(i.value).then(c, m);
    // eslint-disable-next-line no-param-reassign
    a((t = t.apply(e, n)).next())
});
export function getUrlParams(e) {
    const n = window.location.search,
        t = new URLSearchParams(n),
        o = t.get(e);
    return o
}

function d(e) { if (e.ok) return e.text(); throw new Error("Bad Response") }
export function renderWithTemplate(e, n, t, o) {
    let r = e.content.cloneNode(!0);
    o && (r = o(r, t)), n.appendChild(r)
}
export function loadTemplate(e) {
    return s(this, null, function*() {
        const n = yield fetch(e).then(d),
            t = document.createElement("template");
        return t.innerHTML = n, t
    })
}
export function loadHeaderFooter() {
    return s(this, null, function*() {
        const e = document.URL;
        let n = "";
        (e.includes("movie-details") || e.includes("movie-listing")) && (n = "../");
        const t = yield loadTemplate(`${n}partials/header.html`),
            o = yield loadTemplate(`${n}partials/footer.html`),
            r = document.getElementById("main-header"),
            c = document.getElementById("main-footer");
        renderWithTemplate(t, r), renderWithTemplate(o, c)
    })
}
export function changeHeaderPath() {
    const e = document.URL;
    if (e.includes("movie-details") || e.includes("movie-listing")) {
        const n = document.querySelector("#logo-link"),
            t = document.querySelector("#logo-img");
        n.setAttribute("href", "../index.html"), t.setAttribute("src", "../icons/8202294731595452646.svg")
    }
}