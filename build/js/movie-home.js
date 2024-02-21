import u from "./externalServices.js";
import { loadHeaderFooter as p } from "./utils.js";
import { toMovieListing as S } from "./movie-listingRender.js";
p(), window.toMovieListing = S;

function f() { const n = new u,
        m = document.querySelector("#movie_section"); for (let l = 0; l <= 11; l++) { const a = n.returnMovies(n.moviesSearch());
        a.then(e => { let d = e.Search.length,
                t = Math.floor(Math.random() * d),
                h = e.Search[t].imdbID,
                o = document.createElement("a");
            o.setAttribute("href", `./movie-details/?movie=${h}`); let r = document.createElement("div");
            r.setAttribute("class", "recent-movies"); let s = e.Search[t].Title,
                c = document.createElement("h3");
            c.innerHTML = s; let i = document.createElement("img"),
                v = e.Search[t].Poster;
            v === "N/A" ? i.setAttribute("src", `https://via.placeholder.com/300x450/000000/FFFFFF/?text=${e.Search[t].Title}`) : i.setAttribute("src", e.Search[t].Poster), i.setAttribute("alt", s), o.appendChild(i), r.appendChild(o), r.appendChild(c), m.appendChild(r) }) } }
f();