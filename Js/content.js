prevWord = "";
document.onclick = function(e)
{
    var wordCount = document.getElementsByClassName("metadata-value style-scope vz-projector-metadata-card")[0];
    if(wordCount != undefined){
        var imageSource = 'https://www.ics.uci.edu/~jinlid/'+wordCount.innerHTML+'.png';
        var imageLink = "<img src ="+imageSource+" width='250' height='150' margin-left: -550px;></img>";
        var audioSource = 'https://www.ics.uci.edu/~jinlid/'+wordCount.innerHTML+'.wav';
        var audioLink;
        if (prevWord==wordCount.innerHTML){
            audioLink = "<audio controls style='width: 200px;'><source src="+audioSource+" type='audio/wav'></audio>";
        }else{
            audioLink = "<audio controls autoplay style='width: 200px;'><source src="+audioSource+" type='audio/wav'></audio>";
        }
        var extendImage = "<br><div class=\"word image\">"+imageLink+"</div>";
        var extendAudio = "<div class=\"audio image\">"+audioLink+"</div>";
        var checkImage = document.getElementsByClassName("word image");
        var checkAudio = document.getElementsByClassName("audio image");
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
