let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
let contentUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&titles="

var userButton = document.getElementById("userButton")
var userInput = document.getElementById("userInput");
var historyDisplay = document.getElementById("history-display");

function setup() {
    noCanvas()
}

const herokuApp = "https://cors-anywhere.herokuapp.com/"

userButton.addEventListener("click", function(){
    historyDisplay.innerHTML = ""
    goWiki()
})

function goWiki() {
    let term = userInput.value
    let url = searchUrl + term
    // console.log(url);
    let dataRetrievalUrl = herokuApp+url;
    // console.log(dataRetrievalUrl)

    fetch(dataRetrievalUrl, {
        method: 'GET', //GET is the default.
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0',
            'mode': 'cors'
        }
    }).then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        
        // Isolates the instrument's Wiki Page Title
        let instrumentTitle = data[1][0]
        // console.log("Instrument's Page Title: " + instrumentTitle)
        let instrumentTitleReg = instrumentTitle.replace(/\s+/g, '_')  // replace 1+ spaces with underscore, applied globally   
        
        // Isolate the instrument's Wiki Page URL
        let instrumentWikiURL = data[3][0]
        // console.log("Wiki Page URL: " + instrumentWikiURL)

        // Creates the Wikipedia content link
        let wikiPageContent = contentUrl + instrumentTitleReg
        // console.log(wikiPageContent)
        let contentRetrievalUrl = herokuApp+wikiPageContent;
        // console.log(contentRetrievalUrl)

        fetch(contentRetrievalUrl, {
            method: 'GET', //GET is the default.
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow',
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (content) {
            var contentLoad = content.query.pages
            var contentLoadKey = Object.keys(content.query.pages)[0]
            var contentLoadContent = contentLoad[contentLoadKey].extract
            let contentHTML = new DOMParser();
            let wikiDoc = contentHTML.parseFromString(contentLoadContent, "text/html")
            // console.log(wikiDoc)

            const element = wikiDoc.getElementById("History")
            // console.log(element)
            if (element){
                // console.log(historyDisplay)
                p1 = element.parentElement.nextElementSibling
                p2 = p1.nextElementSibling
                p3 = p2.nextElementSibling
                // console.log(p1, p2, p3)
                historyDisplay.appendChild(p1)
                historyDisplay.appendChild(p2)
                historyDisplay.appendChild(p3)
            }
        })        
    })
    .catch((error) => {
        console.error('Error: ', error);
    }); 
}