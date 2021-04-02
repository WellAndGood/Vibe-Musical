const auth = "563492ad6f91700001000001b67d7a4d70084b3fadf2840d9588bea9"

var userButton = document.getElementById("userButton")
var userInput = document.getElementById("userInput");
var imageDisplay = document.getElementById("image-display")

userButton.addEventListener("click", function(event){
    event.preventDefault();
    imageDisplay.innerHTML = ""
    imageFinder()
})

function imageFinder() {
    var searchQuery = userInput.value
    console.log(searchQuery)
    var requestURL = "https://api.pexels.com/v1/search?query=" + searchQuery + "&per_page=3"
    console.log(requestURL)

    fetch(requestURL, {
        method: 'GET', //GET is the default.
        headers: {
            Accept: 'application/json',
            Authorization: auth
            
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        data.photos.forEach((photo) => {
            const pic = document.createElement("div");
            pic.innerHTML = `<img src=${photo.src.small}>`
            imageDisplay.appendChild(pic)
        })
    })
}