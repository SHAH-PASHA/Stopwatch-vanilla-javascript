window.onload = function()
{
    var tens = 00;
    var seconds =00;
    var appEndtens = 
    document.getElementById("tens");
    var appEndseconds = 
    document.getElementById("seconds");
    var ButtonStart = 
    document.getElementById("button-start");
    var ButtonStop = 
    document.getElementById("button-stop");
    var ButtonReset = 
    document.getElementById("button-reset");
    var interval;
    ButtonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(starttimer,10);
    };
    ButtonStop.onclick = function(){
        clearInterval(interval);
    };
    ButtonReset.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appEndtens.innerHTML=tens;
        appEndseconds.innerHTML = seconds;
    };
    function starttimer(){
        tens++;
        if(tens<=9){
            appEndtens.innerHTML="0"+tens;
        }
        if(tens>9){
            appEndtens.innerHTML = tens;
        }
        if(tens>99){
            console.log("seconds");
            seconds++;
            appEndseconds.innerHTML="0"+seconds;
            tens=0;
            appEndtens.innerHTML = "0"+0;
        }
        if(seconds>9){
            appEndseconds.innerHTML = seconds;
        }
            }
        };
