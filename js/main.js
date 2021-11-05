const openButton = document.querySelector(".share-open");
const closeButton = document.querySelector(".share-close");
const mediaLinks = document.querySelector(".media-links");

closeButton.addEventListener("click", () => {
    mediaLinks.classList.toggle("open");
});

openButton.addEventListener("click", () => {
    mediaLinks.classList.remove('open');
});