var c = (t, r, e) => new Promise((n, o) => {
    var l = a => { try { s(e.next(a)) } catch (i) { o(i) } },
        u = a => { try { s(e.throw(a)) } catch (i) { o(i) } },
        s = a => a.done ? n(a.value) : Promise.resolve(a.value).then(l, u);
    // eslint-disable-next-line no-param-reassign
    s((e = e.apply(t, r)).next())
});

function m(t) { if (t.ok) return t.json(); throw { name: "servicesError", message: t.json() } }
class h {
    constructor() { this.api = "https://www.omdbapi.com/?&apikey=466aa9b6" }
    returnMovies(r) {
        return c(this, null, function*() {
            const e = yield fetch(`${this.api}&${r}`),
                n = yield m(e);
            return n
        })
    }
    moviesSearch(r = "home", e = !1) {
        const n = ["batman", "superman", 2022, "matrix", 2019, "men in black", "Spiderman", "Star Wars", "Thor", 2021, "Jurassic Park", "Top Gun", "Avatar", "Avengers", "Joker", "Justice League", 2e3, 2018, "Interstellar", "Inception", "Chernobyl", "Antman", "hunger games", "godzilla", "kong", "doctor strange", "wonderwoman", "Harry potter", "lord of the rings", "Fast and furious", "scream", "Zombieland", "Saw"],
            o = Math.floor(Math.random() * n.length);
        return r == "home" ? `s=${n[o]}` : e ? `i=${r}&plot=full` : `s=${r}`
    }
}
export default h;