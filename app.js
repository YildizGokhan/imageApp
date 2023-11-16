const accessKey = "aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM";
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", async () => {
    if(searchInput.value ==="") {
        noResults.textContent = "No results found."
        cardMain.textContent = ""
        let timerInterval;
Swal.fire({
  title: "There is no word in input area. Please, search an image!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
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
const noResults = document.querySelector(".noResults")
const cardMain = document.querySelector(".cardMain");

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















// const accessKey = "aaj6YPiMnAhQba_1qtN0W-0vIg9jlgl0HZ6c43mW1ZM";
// const searchInput = document.querySelector("#searchInput");
// const searchBtn = document.querySelector("#searchBtn");
// const cardMain = document.querySelector(".cardMain"); // Card konteynerini seçiyoruz

// searchBtn.addEventListener("click", async () => {
//     const apiUrl = `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=${accessKey}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         updateCards(data.results); // API'den gelen verilerle kartları güncelleyen fonksiyon
//     } catch (error) {
//         console.error("Hata oluştu:", error);
//     }
// });

// function updateCards(images) {
//     cardMain.innerHTML = ""; // Önceki kartları temizle

//     images.forEach((image) => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.style.width = "18rem";

//         const cardImg = document.createElement("img");
//         cardImg.classList.add("card-img-top");
//         cardImg.src = image.urls.full;
//         cardImg.alt = image.alt_description;

//         const cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");

//         const cardTitle = document.createElement("h5");
//         cardTitle.classList.add("card-title");
//         cardTitle.textContent = image.alt_description;

//         const cardText = document.createElement("p");
//         cardText.classList.add("card-text");
//         cardText.textContent = image.description || "No description available";

//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);

//         card.appendChild(cardImg);
//         card.appendChild(cardBody);

//         cardMain.appendChild(card);
//     });
// }
