var m = (c, n, e) => new Promise((o, t) => {
    var s = i => { try { r(e.next(i)) } catch (l) { t(l) } },
        a = i => { try { r(e.throw(i)) } catch (l) { t(l) } },
        r = i => i.done ? o(i.value) : Promise.resolve(i.value).then(s, a);
    // eslint-disable-next-line no-param-reassign
    r((e = e.apply(c, n)).next())
});
import { getUrlParams as d } from "./utils.js";
import u from "./externalServices.js";
class g {
    constructor() { this.movieId = d("movie"), this.services = new u }
    pullMovie() { return m(this, null, function*() { this.movie = yield this.services.returnMovies(this.services.moviesSearch(this.movieId, !0)), this.renderMovieDetails() }) }
    renderMovieDetails() {
        document.title += ` . ${this.movie.Title}`, document.getElementsByTagName("meta").description.content = `Movies details page for ${this.movie.Title}`, this.movie.Poster === "N/A" ? document.querySelector(".details-page-image").src = `https://via.placeholder.com/300x450/000000/FFFFFF/?text=${this.movie.Title}` : document.querySelector(".details-page-image").src = this.movie.Poster, document.querySelector(".details-page-image").alt = this.movie.Title, document.querySelector(".details-page-title").innerHTML = this.movie.Title, document.querySelector(".details-page-year").innerHTML = this.movie.Year + " .", document.querySelector(".details-page-rating").innerHTML = this.movie.Rated + " .", document.querySelector(".details-page-genre").innerHTML = this.movie.Genre, document.querySelector(".movie-details-description").innerHTML = this.movie.Plot, this.movie.Ratings.length === 1 ? (document.querySelector(".details-page-imdb").innerHTML = this.movie.Ratings[0].Value, document.querySelector(".details-page-tomatoes").innerHTML = "N/A", document.querySelector(".details-page-metacritic").innerHTML = "N/A") : this.movie.Ratings.length === 2 ? (document.querySelector(".details-page-imdb").innerHTML = this.movie.Ratings[0].Value, document.querySelector(".details-page-tomatoes").innerHTML = this.movie.Ratings[1].Value, document.querySelector(".details-page-metacritic").innerHTML = "N/A") : this.movie.Ratings.length === 3 ? (document.querySelector(".details-page-imdb").innerHTML = this.movie.Ratings[0].Value, document.querySelector(".details-page-tomatoes").innerHTML = this.movie.Ratings[1].Value, document.querySelector(".details-page-metacritic").innerHTML = this.movie.Ratings[2].Value) : (document.querySelector(".details-page-imdb").innerHTML = "N/A", document.querySelector(".details-page-tomatoes").innerHTML = "N/A", document.querySelector(".details-page-metacritic").innerHTML = "N/A"), document.querySelector(".details-page-released").innerHTML = this.movie.Released, document.querySelector(".details-page-runtime").innerHTML = this.movie.Runtime, document.querySelector(".details-page-type").innerHTML = this.movie.Type, document.querySelector(".details-page-actors").innerHTML = this.movie.Actors, document.querySelector(".details-page-director").innerHTML = this.movie.Director, document.querySelector(".details-page-writers").innerHTML = this.movie.Writer;
        const n = document.querySelector(".like__btn"),
            e = document.querySelector("#icon"),
            o = document.querySelector("#count");
        let t = !1,
            s = "fa-solid fa-thumbs-up",
            a = "fa-regular fa-thumbs-up";
        const r = window.localStorage.getItem(`liked${this.movieId}`);
        r == this.movieId && (e.innerHTML = `<i class = "${s}"></i>`, o.textContent++, t = !0), n.addEventListener("click", () => { t ? (t = !1, e.innerHTML = `<i class = "${a}"></i>`, o.textContent--, localStorage.removeItem(`liked${this.movieId}`, this.movieId)) : (t = !0, e.innerHTML = `<i class = "${s}"></i>`, o.textContent++, localStorage.setItem(`liked${this.movieId}`, this.movieId)) })
    }
}
export default g;