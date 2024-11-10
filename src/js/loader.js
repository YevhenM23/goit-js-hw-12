import { refs } from "./refs";

export function showLoader() {
    refs.loader.style.display = "block";
}

export function hideLoader() {
    refs.loader.style.display = "none";
}