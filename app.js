console.log("Let's get this party started!");

async function getRandomGiphy() {
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/random?api_key=64FsippjznKzlRsSumD1G1pzkMBSihqL&tag=&rating=g"
  );

  const img = document.querySelector("#giphy");
  img.src = res.data.data.images.downsized.url;
}
async function getGiphy(searchValue) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=64FsippjznKzlRsSumD1G1pzkMBSihqL&q=${searchValue}&limit=25&offset=0&rating=g&lang=en`;
    
    const res = await axios.get(url);
    console.log(res.data.data[0].images.downsized.url);
    const gifList = document. querySelector('#getGifs');
    const gif = document.createElement('div');
    gif.classList.add("newGif");
    const img = document.createElement('img');
    
    img.src = res.data.data[0].images.downsized.url;
    gif.append(img);
   
    gifList.append(gif);
    console.log(gifList);
  } catch (err) {
    alert("You can't do that!");
    getRandomGiphy();
  }
}

const btnSearch = document.querySelector('#search-btn');
btnSearch.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("SUBMIT!");
    const searchVal = document.querySelector('#search-term');
    getGiphy(searchVal.value);
    searchVal.value = '';
});

const btnRemove = document.querySelector("#remove-btn");
btnRemove.addEventListener("click", function (e) {
  e.preventDefault();
  
  let gifList = document.querySelector('#getGifs');
  let gifImages = gifList.lastElementChild;
  while(gifImages) {
    gifList.removeChild(gifImages);
    gifImages = gifList.lastElementChild;    
  }

});
