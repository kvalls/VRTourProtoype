window.onload = initialize;

function initialize() {
    document.querySelector("#speaker-button").addEventListener("click", toggleSound);

    var mySky = document.querySelector("#skybox");
    mySky.setAttribute("sounding", true);
    mySky.components.sound.playSound();
}

function toggleSound(event) {

    var mySky = document.querySelector("#skybox");
    var speakerImg = document.querySelector("#sound-on");

    var sounding = mySky.getAttribute("sounding");

    if (sounding == "true") {
        mySky.setAttribute("sounding", false);
        speakerImg.src = "assets/img/vr/options/soundoff.png";
        mySky.components.sound.stopSound();
    } else {
        mySky.setAttribute("sounding", true);
        speakerImg.src = "assets/img/vr/options/soundon.png";
        mySky.components.sound.playSound();
    }
}