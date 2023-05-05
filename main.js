Webcam.set({
    width:150,
    Height:300, 
    imape_format:'png',
    png_quality:90
})
camera= document.getElementById("camera");
webcam.attach('#camera');
function snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="take_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier;('https://teachablemachine.withgoogle.com/models/IBXHSU5Zu/',modelLoaded);
function modelLoaded()  {
    console.log("model Loaded");
}

function identify(){
    img= document.getElementById('take_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }   else{
        console.log("results");
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accurate_percentage").innerHTML=results[0].confidence.tofixed(2);
    }
}