javascript: (
    function () {
        var strFla = document.getElementById("mediaplayer").innerHTML;
        var divLink = document.createElement("a");
        if (strFla == undefined) {
            divLink.innerHTML = 'Parse fail!!';
        }
        else {
            strFla = unescape(strFla.split('src')[1].split("=")[1]).split(" ")[0];
            divLink.href = strFla.replace(/\"/g, "");
            divLink.download = "video.mp4";
            divLink.setAttribute("style", "z-index:9999;position:fixed;top:0;right:0;font-size:40px;color:red");
            divLink.innerText = 'Click me to download!!';
            document.body.appendChild(divLink)
        }
    })()