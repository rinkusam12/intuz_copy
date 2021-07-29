export function setVideoBgColor(video, backgroundElement) {
    setTimeout(() => {
        var canvas = document.createElement("canvas");
        canvas.width = 8;
        canvas.height = 8;
        video.currentTime = 3;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, 8, 8);
        
        var p = ctx.getImageData(0, 0, 8, 8).data;
        //dont take the first but fourth pixel [r g b a]
        if(p[60] == 0 && p[61] == 0 && p[62] == 0 ) {
            return;
        }
        backgroundElement.style.backgroundColor =
            "rgb(" + p[60] + "," + p[61] + "," + p[62] + ")";
    }, 1000);
}