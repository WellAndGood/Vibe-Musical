
// Wikipedia API URLs
let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
let contentUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&rvprop=content&format=json&titles="

// (Daniel's) DOM variables for Wikipedia API interaction
var userButton = document.getElementById("userButton");
var userInput = document.getElementById("userInput");
var historyDisplay = document.getElementById("history-display");
var historyTitle = document.getElementById("historyTitle");
var historySource = document.getElementById("history-source");
var instrumentName = document.getElementById("instrumentTitle");
var randomButton = document.getElementById("randomButton")
var instrumentBasic = document.getElementById("instrumentBasic")
var errorMessage = document.getElementById("error-message")

// (Ndanga's) DOM variables for YouTube API interaction 
var nameInputEl = document.querySelector('#userInput');
var frameEl;
var video;
var relatedVideo=[];
var videoContainerEl= document.querySelector('#first-video');
var firstVideoEl = document.querySelector('#first-video')
var relatedVideosEl = document.querySelector('#nextVideo')


// 700+ long array of instruments; search queries are cross-referenced by this list
const instrumentWikiList = ["Afoxé","Agogô","Agung","Angklung","Babendil","Bak_(instrument)","Log drum","Balafon","Batá drum","Cabasa","Cajón","Carillon","Castanets","Caxirola","Caxixi","Chácaras","Clapstick","Claves","Cowbell","Crotales","Cymbal","Ferrinho","Flexatone","Gandingan","Ghatam","Glockenspiel","Gong","Güiro","Handpan","Hang_(instrument)","Kayamb","Kemanak","Khartal","Kouxian","Kulintang","Maraca","Marimba","Mbira","Pate_(instrument)","Shekere","Slit drum","Spoon_(musical_instrument)","Steelpan","Tambourine","Teponaztli","Triangle_(musical_instrument)","Txalaparta","Vibraphone","Vibraslap","Washboard_(musical_instrument)","Wood block_instrument)","Wooden fish","Xylophone","Zill","Alfaia","Apinti","Ashiko","Atabaque","Balsié","Bamboula","Bara","Bedug","Bodhrán","Bongo drums","Boobam","Candombe_drums","Chenda","Conga","Cuíca","Culoepuya","Dabakan","Daf","Damaru","Davul","Dayereh","Den-den daiko","Dhak_(instrument)","Dhimay","Dhol","Dholak","Djembe","Dollu","Drum", "Drums", "Drum kit","Dunun","Bass drum","Goblet drum","Gong bass drum","Idakka","Ilimba drum","Janggu","Jew's harp","Junjung","Kakko_(instrument)","Kanjira","Kebero","Kendang","Khol","Krakebs","Lambeg drum","Madhalam","Madal","Maddale","Maktoum","Maram","Mirwas","Mridangam","Nagara_(drum)","Naqareh","O-daiko","Octaban","Padayani thappu","Pakhavaj","Pandero","Parai","Qilaut","Rebana","Sabar","Sambal_(drum)","Samphor","Shime-daiko","Snare drum","Surdo","Tabla","Taiko","Talking drum","Tambori","Tamborim","Tamborita calentana","Tan-tan","Taphon","Tar_(drum)","Tbilat","Thavil","Timbales","Timpani","Tom-tom_drum","Tombak","Tsuzumi","Tsuri-daiko","Repique","Accordion","Air horn","Alboka","Algaita","Alphorn","Tenor horn","Arghul","Atenteben","Aulos","Bagpipe","Balaban_(instrument)","Bandoneón","Bansuri","Baritone horn","Baritone voice","Bassoon","Bawu","Bayan_(accordion)","Bazooka_(instrument)","Beatboxing","Bifora","Birbynė","Blown bottle","Bombard_(music)","Buccina","Bugle_(instrument)","Bullroarer_(music)","Calliope_(music)","Castrato","Chalumeau","Cimbasso","Clarinets","Concertina","Conch_(instrument)","Cornamuse","Cornet","Cornett","Cornu_(horn)","Corrugaphone","Countertenor","Cromorne","Crumhorn","Danso","Death growl","Didgeridoo","Diple","Dizi_(instrument)","Double bell euphonium","Duduk","Dulcian","Dulzaina","Dung-Dkar","Dzhamara","English horn","Euphonium","Falsetto","Fife_(musical_instrument)","Firebird (trumpet)","Fiscorn","Flabiol","Flageolet", "Flugelhorn","Flumpet","Flutina","Flute","Folgerphone","French horn","Fujara","Gaida","Gaita gastoreña","Garmon","Gemshorn","Gralla","Guan_(instrument)","Harmoneon","Harmonica","Heckelphone","Helicon_(musical_instrument)","Horagai","Hotchiku","Hulusi","Hun_(instrument)","Irish flute","Jug_(musical_instrument)","Kagurabue","Kalaleng","Kaval","Kazoo","Kèn bầu","Khene","Khloy","Khlui","Komabue","Kortholt","Koudi","Kuhlohorn","Launeddas","Livenka_(music)","Lur","Lusheng","Lituus","Mellophone","Melodica","Melodeon_(organ)","Mezzo-soprano","Mijwiz","Mizmar_(instrument)","Mizwad","Musette de cour","Nadaswaram","Nagak","Natural trumpet","Ney","Nohkan","Nose flute","Oboe","Ocarina","Octavin","Ophicleide","Paixiao","Palendag","Pan flute","Pavari","Pibgorn_(instrument)","Picco pipe","Piccolo","Piccolo trumpet","Pipe organ","Pitch pipe","Pocket trumpet","Post horn","Pulalu","Qeej","Quena","Quinticlave","Raj","Rackett","Ralé-poussé","Rapping","Rauschpfeife","Recorder_(musical_instrument)","Reed contrabass", "Contrabass", "Reed organ","Rhaita","Roman tuba","Ryūteki","Sac de gemecs","Sackbut","Saenghwang","Saratovskaya garmonika","Sarrusophone","Saxophone","Saxhorn","Saxotromba","Saxtuba","Scat singing","Schwyzerörgeli","Serpent_(instrument)","Shakuhachi","Shankha","Shawm","Shehnai","Sheng_(instrument)","Shinobue","Shofar","Shō_(instrument)","Shvi","Siku_(panpipe)","Siren","Slide trumpet","Slide whistle","Sneng","Sodina","Sopila","Soprano","Sorna","Sousaphone","Sralai","Sudrophone","Suling","Suona","Superbone","Tabor pipe","Taepyeongso","Tarogato","Tenor","Tenora","Throat singing","Catalan shawm","Tin whistle","Tonette","Trikiti","Trombone","Tromboon","Trompeta china","Trumpet","Tuba","Tube trumpet","Tumpong","Tungso","Txistu","Uilleann pipes","Venu","Vienna horn","Vocal percussion","Vuvuzela","Wagner tuba","Washint","Flute","Alto flute","Bass flute","Contra-alto flute","Contrabass flute","Subcontrabass flute","Double contrabass flute","Hyperbass flute","Clapper_(musical_instrument)","Whistle","Willow flute","Xeremia","Xiao_(flute)","Xun_(instrument)","Yodel","Yu_(wind_instrument)","Zhaleika","Zufolo","Zurna","Adungu","Aeolian harp","Ajaeng","Akkordolia","Algerian mandole","Angélique_(instrument)","Appalachian dulcimer","Arbajo","Archlute","Arpeggione","Autoharp","Bağlama","Bajo sexto","Balalaika","Bandola","Bandolin","Bandolón","Bandura","Bandora_(instrument)","Bandurria","Banhu","Banjo","Bass banjo","Banjo ukulele","Barbat_(flute)","Baryton","Berimbau","Bipa","Biwa","Bordonua","Bouzouki","Buzuq","Carimba","Cavaquinho","Cello","Cello da spalla","Electric cello","Chapman stick","Charango","Charangón","Hualaycho","Chillador","Chitarra battente","Chitarra Italiana","Choghur","Cimbalom","Electric cymbalum","Cimboa","Citole","Cittern","Clavichord","Clavinet","Conchera","Contraguitar","Crwth","Cuatro_(instrument)","Cümbüş","Đàn bầu","Đàn đáy","Đàn gáo","Đàn nguyệt","Đàn tam thập lục","Đàn tranh","Đàn tỳ bà","Diddley bow","Dihu","Dombra","Domra","Doshpuluur","Dotara","Double bass","Hammered dulcimer","Dutar","Duxianqin","Ektara","Erhu","Erxian","Esraj","Faglong","Kutiyapi","Fiddle","Gaohu","Gayageum","Geomungo","Gittern","Gottuvadhyam","Guitar","Acoustic guitar","Acoustic bass guitar","Acoustic-electric guitar","Archtop guitar","Baritone guitar","Baroque guitar","Bass guitar","Bahian guitar","Brahms guitar","Chitarra battente","Cigar box guitar","Classical guitar","Console steel guitar","Electric guitar","English guitar","Fretless guitar","Lyre-guitar", "7-string guitar", "Seven-string guitar", "8-string guitar", "Eight-string guitar", "8-string guitar","Nine-string guitar", "9-string guitar", "Ten-string guitar","10-string guitar", "Eleven-string guitar", "11-string guitar","Twelve-string guitar", "12-string guitar", "Flamenco guitar","Huapanguera","Guitar synthesizer","Guitarrón chileno","Guitarrón mexicano","Lap steel guitar","Dobro","Multi-neck guitar","Parlor guitar","Pedal steel guitar","Romantic guitar","Russian guitar","Selmer guitar","Semi-acoustic guitar","Slide guitar","Silent guitar","Steel guitar","Steel-string acoustic guitar","Tenor guitar","Guitarra de golpe","Guitarra panzona","Guitarra séptima","Guitarro_(instrument)","Gusli","Guqin","Guzheng","Haegeum","Hammered dulcimer","Hardanger fiddle","Harmonico","Harp","Electric harp","Harp guitar","Harpsichord","Hegelong","Huapanguera","Huluhu","Huqin","Hurdy-gurdy","Igil","Irish bouzouki","Janzi_(musical_instrument)","Jarana huasteca","Jiaohu","Kabosy","Kadlong","Kamancha","Kantele","Kemenche","Khim","Kobza","Kokle","Kokyū","Komuz","Kora_(instrument)","Koto_(musical_instrument)","Kubing","Kudyapi","Kwitra","Langeleik","Laouto","Laruan","Laúd","Lavta","Leiqin","Leona_(instrument)","Lirone","Liuqin","Lokanga_bara","Lute","Lute guitar","Lyra","Lyre","Maguhu","Mandobass","Mandola","Mandolin","Mandolin-banjo","Mandocello","Mandola","Bluegrass mandolin","Electric mandolin","Octave mandolin","Resonator mandolin","Mandolute","Mandora","Mandore_(instrument)","Marovany","Mejoranera","Mexican vihuela","Mohan veena","Moraharpa","Morin khuur","Musical bow","Nyckelharpa","Octobass","Oud","Paqin", "Piano", "Electric piano","Fortepiano","Pedal piano","Pipa","Piwancha","Pochette_(musical_instrument)","Portuguese guitar","Psaltery","Qanun_(instrument)","Qinqin","Rabeca","Rajão","Ravanahatha","Rebab","Rebec","Requinto jarocho","Rubab_(instrument)","Ruan","Rudra vina","Sallaneh","Sanshin","Santoor_(Persian_instrument)","Sanxian","Sarangi","Šargija","Sarod","Saung","Saw sam sai","Se_(instrument)","Seul","Setar","Shamisen","Sintir","Sitar","Sitarla","Surbahar","Swarmandal","Tamburica","Tambur","Tanpura","Tar (lute)","Washtub bass","Tembûr","Theorbo","Timple","Tiple","Tovshuur","Tres_(musical_instrument)","Tricordia","Tro_(instrument)","Trumpet marine","Tsymbaly","Tuhu","Tzouras","Ukulele","Electric ukulele","Harp ukulele","Lap steel ukulele","Resonator ukulele","Tahitian ukulele","Ukelin","Valiha","Veena","Vertical viola","Vichitra veena","Vielle","Vihuela","Viol","Pardessus de viole","Division viol","Lyra viol", "Viola", "Viola da gamba","Viola amarantina","Viola bastarda","Viola beiroa","Viola caipira","Viola d'amore","Viola da terra","Viola de arame","Viola de cocho","Viola organista","Viola profonda","Violin","Piccolo violino","Baroque violin","Bass violin","Electric violin","Five string violin", "5-string violin", "5 string violin", "Stroh violin","Tenor violin","Violone","Violotta","Walaycho","Waldzither","Washtub bass","Whamola","Wheelharp","Xala","Yaylı tambur","Yangqin","Yazheng","Yehu","Yelatáj chos woley","Yueqin","Zhongruan","Zhonghu","Zhu (string instrument)","Zhengni","Zhuihu","Zither","Guitar zither"]

$( function() {
    $( "#userInput" ).autocomplete({
        source: instrumentWikiList
    });
});

// Arrays of terms which require a Wikipedia disambiguation in the API's URL; example: 'Spoon' => 'Spoon_(musical_instrument)'. Are later processed by an exeption handler.
const accordionException = ["Bayan"]
const drumException = ["Nagara", "Sambal", "Tar"]
const fluteException = ["Xiao", "Barbat", "Cornu"]
const instrumentException = ["Bak","Hang","Pate","Dhak","Kakko","Balaban","Bazooka","Bugle","Conch","Dizi","Guan","Hun","Mizmar","Pibgorn","Serpent","Sheng","Shō","Xun","Angélique","Bandora","Cuatro","Guitarro","Kora","Mandore","Qanun","Rubab","Se","Tro", "Wood block"]
const musicException = ["Bombard","Bullroarer","Calliope","Livenka"]
const musicInstrumentException = ["Spoon", "Clapper","Triangle","Washboard","Fife","Helicon","Jug","Recorder","Janzi","Koto","Pochette","Tres"]
const organException = ["Melodeon"]
const panpipeException = ["Siku"]
const persianInstrumentException = ["Santoor"]
const stringInstrumentException = ["Zhu"]
const trumpetException = ["Firebird"]
const windInstrumentException = ["Yu"]

// An attachment to the Wikipedia API URL which handles the CORS error. Might need to be removed when uploaded to Github.

let herokuApp = ""
herokuApp = "https://cors-anywhere.herokuapp.com/"

let term = "";

// When the 'Search' button is clicked, start the Wiki API (which also launches the YouTube API)
userButton.addEventListener("click", function(){
    historyDisplay.innerHTML = ""
    goWiki()
})

// When the 'Randomizer' button is pressed, resets the 
randomButton.addEventListener("click", function(){
    historyDisplay.innerHTML = ""
    randomizer()
})

function randomizer() {
    randomIndex = Math.floor(Math.random() * instrumentWikiList.length)
    console.log(randomIndex)
    console.log(instrumentWikiList.length)
    term = instrumentWikiList[randomIndex]
    console.log(term)
    wikipediaAPIQuery(term)
    formSubmitHandler(term)
}


// The exeption handler; it returns correctly, but does not result in a changed 'term'
function exceptionHandler(possible, list, handler) {
    console.log(term, list, handler)
    for (i = 0; i < list.length; i++) {
        if (possible === list[i]) {
            console.log("Found " + term + " in " + Object.keys({list})[0])
            term = possible + handler
            console.log(term)
            return;

        }
    }
}

function goWiki() {
    
    // Capitalizes the first letter of the input 
    let termBasic = userInput.value
    term = termBasic.charAt(0).toUpperCase() + termBasic.slice(1)
    console.log(term) 

    // The Wiki API initializes if termMatches = true
    var termMatches = false 

    // If the search term matches an item in the 700-long array, 'termMatches' returns as true.
    for (i = 0; i < instrumentWikiList.length; i++) {
        if (term == instrumentWikiList[i]) {
            console.log(term + " matches " + instrumentWikiList[i])
            errorMessage.textContent = ""
            termMatches = true;  
        }
    }
    
    // If there was a match to the array...

    if (termMatches === true) {
        
        // ...submits the unchanged term to the YouTube API before handling exceptions for Wikipedia API 
        formSubmitHandler(term)
        // handlePossibleTerms()
        // Submits the modified term to the Wikipedia API 
        wikipediaAPIQuery(term);
        
        // Resets/removes the error message
        errorMessage.textContent = ""

    } else {
        
        // Creates an error message under the search bar. Removes all latent text content from the blurb/history sections and respective titles

        errorMessage.textContent = "Please enter an instrument that the search bar recognizes. Please check your spelling. If the instrument name is longer than one word, do not use capital letters."
        errorMessage.style.color = "red"
        instrumentBasic.textContent = ""
        instrumentName.textContent = ""
        historyTitle.textContent = ""
        historySource.innerHTML = ""
        firstVideoEl.textContent = ""
        relatedVideosEl.textContent = ""
    }
}

function handlePossibleTerms() {
    exceptionHandler(term, accordionException, "_(accordion)");
    exceptionHandler(term, drumException, "_(drum)");
    exceptionHandler(term, fluteException, "_(flute)");
    exceptionHandler(term, instrumentException, "_(instrument)");
    exceptionHandler(term, musicException, "_(music)");
    exceptionHandler(term, musicInstrumentException, "_(musical_instrument)");
    exceptionHandler(term, organException, "_(organ)");
    exceptionHandler(term, panpipeException, "_(panpipe)");
    exceptionHandler(term, persianInstrumentException, "_(Persian_instrument)");
    exceptionHandler(term, stringInstrumentException, "_(string_instrument)");
    exceptionHandler(term, trumpetException, "_(trumpet)");
    exceptionHandler(term, windInstrumentException, "_(wind_instrument)");
}

function wikipediaAPIQuery(term) {
    let url = searchUrl + term;
    let dataRetrievalUrl = herokuApp + url;
    fetch(dataRetrievalUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0',
            'mode': 'no-cors',
        }
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            // Isolates the instrument's Wiki Page Title
            let instrumentTitle = data[1][0];
            instrumentName.textContent = "Instrument - More Information on the " + instrumentTitle;
            // console.log("Instrument's Page Title: " + instrumentTitle)
            if (instrumentTitle.includes(" ") === true) {
                instrumentTitle = instrumentTitle.replace(/\s+/g, '_'); // replace 1+ spaces with underscore, applied globally
            }
            
            // Isolate the instrument's Wiki Page URL
            let instrumentWikiURL = data[3][0];
            historySource.innerHTML = "<br>";
            historySource.innerHTML += "Brought to you by: <a href='" + instrumentWikiURL + "' target='_blank'>" + instrumentWikiURL + "</a>";

            // Creates the Wikipedia content link
            let wikiPageContent = contentUrl + instrumentTitle;
            let contentRetrievalUrl = herokuApp + wikiPageContent;

            // The fetching of the Wikipedia API

            fetch(contentRetrievalUrl, {
                method: 'GET',
                credentials: 'same-origin',
                redirect: 'follow',
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (content) {

                    // Converts the JSON data response as an HTML object
                    var contentLoad = content.query.pages;
                    var contentLoadKey = Object.keys(content.query.pages)[0];
                    var contentLoadContent = contentLoad[contentLoadKey].extract;
                    let contentHTML = new DOMParser();
                    let wikiDoc = contentHTML.parseFromString(contentLoadContent, "text/html");

                    // Parses the Wikipedia article for the first two 'p' tags; displays that as the 'blurb'
                    instrumentBasic.textContent = ""
                    let firstElement = wikiDoc.getElementsByTagName("p")
                    let firstElementInnerText = firstElement[0].innerText
                    let secondElementInnerText = firstElement[1].innerText
                    instrumentBasic.textContent = firstElementInnerText
                    instrumentBasic.innerHTML += "<br>";
                    instrumentBasic.textContent += secondElementInnerText                    

                    // Attempts to retrieve the 'History' h2 tag from the standard 'History' id
                    let element = wikiDoc.getElementById("History");

                    // If the original element does not succeed, attempts other ids
                    if (!element) {
                        element = wikiDoc.getElementById("History_of_origins");
                    }
                    if (!element) {
                        element = wikiDoc.getElementById("History_and_evolution_of_the_lute");
                    }
                    if (!element) {
                        element = wikiDoc.getElementById("History_and_use");
                    }
                    if (!element) {
                        element = wikiDoc.getElementById("History_and_development");
                    }
                    if (!element) {
                        element = wikiDoc.getElementById("History_and_genres");
                    }
                    if (!element) {
                        element = wikiDoc.getElementById("Historical_recorders");
                    }

                    // If the element is successfully grabbed, grabs its first three paragraphs, then added these paragraphs to the DOM.
                    if (element) {
                        p1 = element.parentElement.nextElementSibling;
                        p2 = p1.nextElementSibling;
                        p3 = p2.nextElementSibling;
                        
                        var newTitle = instrumentTitle.replace("_", " ")
                        historyTitle.textContent = "History of the " + newTitle;
                        historyDisplay.appendChild(p1);
                        historyDisplay.innerHTML += "<br>";
                        historyDisplay.appendChild(p2);
                        historyDisplay.innerHTML += "<br>";
                        historyDisplay.appendChild(p3);
                    } else {
                        // If unsuccessful, removes the history title
                        historyTitle.textContent = ""
                    }
                })
                .catch(function(error) {
                    // If there was an error,  
                    console.error('Error: ', error);
                    historyTitle.textContent = ""
                    historyDisplay.textContent = "Error. Information not available at this time."
                })
        })
        .catch(function(error) {
            console.error('Error: ', error);
        });
}

// Uses 'term' (passed through goWiki() function) to submit the instrument name to the YouTube API
function formSubmitHandler(term) {
    videoContainerEl.innerHTML = ""
    document.getElementById("video0").innerHTML = ""
    document.getElementById("video1").innerHTML = ""
    document.getElementById("video2").innerHTML = ""
    document.getElementById("video3").innerHTML = ""
    frameEl=0;
    if (term) {
        var x= getVideoID(term);
    }
  };
     
//Fetches request and obtains a video ID
var getVideoID = function (userInput) {

    var apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + userInput + ' instrument lesson beginner&type=video&videoEmbeddable=true&videoType=any&maxResults=1&key=AIzaSyApIhHN3Gg2LbGJvTpZBAktr6RE1etFe90';
    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            // console.log(data)
            video=data.items[0].id.videoId
            // console.log(video)
            displayVideo(video) // For main, autoplay video
            getRelatedVideoID(video) // For smaller four videos at bottom
            return video;
        });
        } else {
            alert('Error: ' + response.statusText);
        }
       })
    .catch(function (error) {
        alert('Unable to connect to Youtube');
    });
    
}; 
//Function to display video with the returned videoID
 var displayVideo = function(id) {
    frameEl= document.createElement('iframe')
    frameEl.width= "700"; 
    frameEl.allow="autoplay"
    frameEl.setAttribute("id","frame")
    frameEl.height= "500",
    frameEl.allowFullscreen=true
    frameEl.setAttribute("src","https://www.youtube.com/embed/"+id+"?autoplay=1")
    videoContainerEl.appendChild(frameEl)  
};
  
//fetching the request and get the relatedvideoID's to be played
var getRelatedVideoID = function(idVideo) {
  
    var apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+idVideo+'&type=video&videoEmbeddable=true&maxResults=4&key=AIzaSyApIhHN3Gg2LbGJvTpZBAktr6RE1etFe90';  
    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            // console.log(data)
            relatedVideo=data.items
            // console.log(relatedVideo)
            displayRelatedVideo(relatedVideo)
        });
        } else { 
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to Youtube');
    });
}; 


//Function to display the four videos related  to the main video playing
var displayRelatedVideo = function(item) {
   
    for (i=0;i<item.length;i++) {
        var myframeEl= document.createElement('iframe')
        relatedVideoId=item[i].id.videoId
        // console.log(relatedVideoId)
        myframeEl.setAttribute("id","frame")
        myframeEl.allowFullscreen=true
        myframeEl.setAttribute("src","https://www.youtube.com/embed/"+relatedVideoId+"?autoplay=1")
        document.getElementById("video"+i).appendChild(myframeEl)
    }        
};