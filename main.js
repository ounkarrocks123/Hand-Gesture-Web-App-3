Webcam.set
({
height:300,
width:350,
image_format:'png',
png_quality:90
})

camera = document.getElementById("camera");

Webcam.attach("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zikZ106N-/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+ prediction_1;
    speak_data_2 = "And the second prediction is "+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results){

    if(error)
    {
      console.error(error);
    }else
    {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Thumbs up")
        {
          document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Thumbs down")
        {
            document.getElementById("update_gesture").innerHTML = "&#128078;";
        }
        if(results[0].label == "Yo")
        {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }  
        if(results[0].label == "Swag")
        {
            document.getElementById("update_gesture").innerHTML = "&#129305;";
        }
        if(results[1].label == "Thumbs up")
        {
          document.getElementById("update_gesture2").innerHTML = "&#128077;";
        }
        if(results[1].label == "Thumbs down")
        {
            document.getElementById("update_gesture2").innerHTML = "&#128078;";
        }
        if(results[1].label == "Yo")
        {
            document.getElementById("update_gesture2").innerHTML = "&#129304;";
        }
        if(results[1].label == "Victory")
        {
            document.getElementById("update_gesture2").innerHTML = "&#9996;";
        }  
        if(results[1].label == "Swag")
        {
            document.getElementById("update_gesture2").innerHTML = "&#129305;";
        }

}

}