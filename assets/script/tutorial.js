var userFormEl = document.querySelector('#tutorialBtn');
var nameInputEl = document.querySelector('#userInput');
var frameEl;
var video;
var relatedVideo=[];
var videoContainerEl= document.querySelector('#first-video');


var formSubmitHandler = function (event) {
    event.preventDefault();
    videoContainerEl.innerHTML = ""
    document.getElementById("video0").innerHTML = ""
    document.getElementById("video1").innerHTML = ""
    document.getElementById("video2").innerHTML = ""
    document.getElementById("video3").innerHTML = ""
    var instrument =nameInputEl.value.trim();
    frameEl=0;
      if (instrument) {
      var x= getVideoID(instrument);
     // console.log(x)
    

     //  nameInputEl.value = '';
     } else {
         alert('Please enter instrument name');
    }
  };
     
    //fetching the request and get the videoID to be played
   var getVideoID = function (userInput) {

       var apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+userInput+' beginner class&type=video&videoEmbeddable=true&videoType=any&maxResults=1&key=AIzaSyApIhHN3Gg2LbGJvTpZBAktr6RE1etFe90';
     fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
           response.json().then(function (data) {
           console.log(data)
           video=data.items[0].id.videoId
           console.log(video)
           displayVideo(video)
           getRelatedVideoID(video)
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
 var displayVideo = function(id)
{
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
var getRelatedVideoID = function (idVideo) {
  
  var apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+idVideo+'&type=video&videoEmbeddable=true&maxResults=4&key=AIzaSyApIhHN3Gg2LbGJvTpZBAktr6RE1etFe90';
fetch(apiUrl)
.then(function (response) {
 if (response.ok) {
      response.json().then(function (data) {
      console.log(data)
      relatedVideo=data.items
      console.log(relatedVideo)
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
var displayRelatedVideo = function(item)
{
   
  for (i=0;i<item.length;i++)
    {
        var myframeEl= document.createElement('iframe')
        relatedVideoId=item[i].id.videoId
        console.log(relatedVideoId)
        myframeEl.setAttribute("id","frame")
        myframeEl.allowFullscreen=true
         myframeEl.setAttribute("src","https://www.youtube.com/embed/"+relatedVideoId+"?autoplay=1")
        document.getElementById("video"+i).appendChild(myframeEl)

    }
          
};


  userFormEl.addEventListener('click', formSubmitHandler);