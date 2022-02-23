var num = null;

$(document).on('click','#scatter',function(){
    num = parseInt($.trim($("#metadata-label").text()))
    if(num>=0){
        return PlayAudio(num);
    }
})

function PlayAudio(num) {
    //let src = chrome.extension.getURL('cough_audio_wavs/'+num+'.wav');
    let src = 'https://www.ics.uci.edu/~jinlid/'+num+'.wav';
    window.open(src)
    if($("#AUDIO").length==0){
        $("body").append('<audio autoplay="autoplay" src="'+src+'" id="AUDIO" /></audio>')
    }else{
        $("#AUDIO").attr('src',src)
    }
    return true;
}