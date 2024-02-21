var a = (e, n, i) => new Promise((m, r) => {
    var l = o => { try { s(i.next(o)) } catch (t) { r(t) } },
        c = o => { try { s(i.throw(o)) } catch (t) { r(t) } },
        s = o => o.done ? m(o.value) : Promise.resolve(o.value).then(l, c);
    // eslint-disable-next-line no-param-reassign
    s((i = i.apply(e, n)).next())
});
import { loadHeaderFooter as d, changeHeaderPath as p } from "./utils.js";
import { toMovieListing as v } from "./movie-listingRender.js";
import g from "./movie-detailsProcess.js";
window.toMovieListing = v;
const w = () => a(this, null, function*() {
    yield d();
    const e = new g;
    e.pullMovie(), p()
});
w();