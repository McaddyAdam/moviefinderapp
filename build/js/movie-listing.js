var c = (i, s, r) => new Promise((g, t) => {
    var m = e => { try { o(r.next(e)) } catch (a) { t(a) } },
        l = e => { try { o(r.throw(e)) } catch (a) { t(a) } },
        o = e => e.done ? g(e.value) : Promise.resolve(e.value).then(m, l);
    // eslint-disable-next-line no-param-reassign
    o((r = r.apply(i, s)).next())
});
import v from "./externalServices.js";
import { toMovieListing as d, renderMovies as h } from "./movie-listingRender.js";
import { getUrlParams as n, loadHeaderFooter as p, changeHeaderPath as f } from "./utils.js";
window.toMovieListing = d;
const u = new v;
if (n("searching") !== null) {
    const i = n("searching"),
        s = n("page");
    h(`${i}&page=${s}`, u)
}
const w = () => c(this, null, function*() { yield p(), f() });
w();