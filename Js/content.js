prevWord = "";
document.onclick = function(e)
{
    var wordCount = document.getElementsByClassName("metadata-value style-scope vz-projector-metadata-card")[0];
    // if user click the data, the wordCount variable should not be undefined
    if(wordCount != undefined){
        // the source of the image
        var imageSource = 'https://www.ics.uci.edu/~jinlid/'+wordCount.innerHTML+'.png';
        // the link of the image
        var imageLink = "<img src ="+imageSource+" width='250' height='150' margin-left: -550px;></img>";
        // the source of the audio
        var audioSource = 'https://www.ics.uci.edu/~jinlid/'+wordCount.innerHTML+'.wav';
        var audioLink;
        // check if the audio has been clicked
        if (prevWord==wordCount.innerHTML){
            audioLink = "<audio controls style='width: 200px;'><source src="+audioSource+" type='audio/wav'></audio>";
        }else{
            audioLink = "<audio controls autoplay style='width: 200px;'><source src="+audioSource+" type='audio/wav'></audio>";
        }
        // the image html that need to insert
        var extendImage = "<br><div class=\"word image\">"+imageLink+"</div>";
        // the audio html that need to insert
        var extendAudio = "<div class=\"audio image\">"+audioLink+"</div>";
        var checkImage = document.getElementsByClassName("word image");
        var checkAudio = document.getElementsByClassName("audio image");
        // insert the image and audio html in the corresponding place
        if(checkImage.length==0){
            wordCount.insertAdjacentHTML("afterend", extendImage + extendAudio);
        }else{
            checkImage[0].innerHTML = imageLink;
            checkAudio[0].innerHTML = audioLink;
        }
        var x = e.pageX;
        var y = e.pageY;
        console.log("User clicked at position (" + x + "," + y + ")");
        prevWord = wordCount.innerHTML;
    }
}

// input drag and drop functionality
var drag = "<p>Click on the \"Choose File\" button to upload an audio file:</p>" + 
"<form action=\"/action_page.php\">" + 
  "<input type=\"file\" id=\"myFile\" name=\"filename\">" + 
  "<input type=\"submit\">" + 
"</form>";

var dragPosition = document.getElementById("normalize-data-checkbox");
dragPosition.insertAdjacentHTML("beforebegin", drag);
