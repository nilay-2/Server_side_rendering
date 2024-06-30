import { nextPosts } from "./loadMorePosts";
import { nextLoadState } from "./state";

document.addEventListener("DOMContentLoaded", function () {
  const listContainer = document.querySelector(".list-container");

  window.addEventListener("scroll", async function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Add your logic here for when the bottom is reached
      const htmlPosts = await nextPosts();

      listContainer?.insertAdjacentHTML("beforeend", htmlPosts);
    }
  });
});
