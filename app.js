const accessKey = "aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM";
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const noResults = document.querySelector(".noResults")
const cardMain = document.querySelector(".cardMain");

searchBtn.addEventListener("click", async () => {
    if(searchInput.value ==="") {
        noResults.textContent = "No results found."
        cardMain.textContent = ""
        let timerInterval;
Swal.fire({
  title: "There is no word in input area. Please, search an image topic!",
  html: "I will close in <b></b> milliseconds.",
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
    } else {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=${accessKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    getRandomImg(data.results)
    searchInput.value = "";
    noResults.textContent = "";
    console.log(data);
}
});




const getRandomImg = (images) => {
    
    cardMain.innerHTML = ``;
    images.forEach((image) => {
        const cardHtml = `<div class="card" style="width: 18rem;">
        <img src="${image.urls.small}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">${image.alt_description}</p>
            </div></div>`;

        cardMain.innerHTML += cardHtml
    });
}

const showRandomImages = async (count) => {
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  displayImages(data);
};

const showSearchResults = async (query) => {
  const apiUrl = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  displayImages(data.results);
};

document.addEventListener("DOMContentLoaded", async () => {
  await showRandomImages(10);
});

const displayImages = (images) => {
  const cardMain = document.querySelector(".cardMain");
  cardMain.innerHTML = ``;

  images.forEach((image) => {
    const cardHtml = `<div class="card  col col-md-3" style="width: 20rem; height:100%">
      <a href="" ></a>
      <img src="${image.urls.small}" class="card-img-top" alt="...">
      <div class="randomDiv">
      <p class="randomCardText">${image.alt_description}</p>
      </div>
    </div>`;
    cardMain.innerHTML += cardHtml;
  });
};
