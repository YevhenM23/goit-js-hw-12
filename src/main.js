import { fetchImages } from "./js/pixabay-api.js";
import { showBtn, hideBtn } from "./js/loader-btn.js";
import { showLoader, hideLoader } from "./js/loader.js";
import { refs } from "./js/refs.js";
import { createMarkUp } from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.list a', {
    captionsData: 'alt', 
    captionDelay: 250, 
});

const perPage = 15;
let page = 1;
let currentQuery = "";



refs.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    refs.list.innerHTML = "";
    showLoader();
    page = 1;

    currentQuery = event.target.elements.query.value.trim();

    if (!currentQuery) return;
    hideBtn();
    
    try {
        const response = await fetchImages(currentQuery, page);
        refs.list.insertAdjacentHTML("beforeend", createMarkUp(response.hits));
        lightbox.refresh();

        if (response.hits.length < perPage || page === Math.ceil(response.total / perPage)) {
            hideBtn();
        } else {
            showBtn();
        }

    } catch (error) {
        console.log(error);
    }
    finally {
        hideLoader();
    }
});


refs.loadMore.addEventListener("click", onLoadMore)


export async function onLoadMore(event) {
    page += 1;
    showLoader();
    hideBtn();
    
    try {
        const response = await fetchImages(currentQuery, page);
        refs.list.insertAdjacentHTML('beforeend', createMarkUp(response.hits));
        lightbox.refresh();
        const lastPage = Math.ceil(response.total / perPage);
        lastPage === page ? hideBtn() : showBtn();
    } catch (err) {
        console.log("Error:", err);
    } finally {
        hideLoader();
    }
    
}

