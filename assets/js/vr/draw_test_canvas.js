//http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html

AFRAME.registerComponent('draw-test-canvas', {



    init: function() {

        var canvas1 = document.getElementById("montaña-text-canvas");
        var ctx1 = canvas1.getContext('2d');
        ctx1.font = "bold 50px Arial";
        ctx1.fillStyle = "white";
        ctx1.fillText("Montaña de Arinaga", 10, 50);

        var canvas2 = document.getElementById("salinas-text-canvas");
        var ctx2 = canvas2.getContext('2d');
        ctx2.font = "bold 50px Arial";
        ctx2.fillStyle = "white";
        ctx2.fillText("Las Salinas", 10, 50);

        var canvas3 = document.getElementById("muelle-text-canvas");
        var ctx3 = canvas3.getContext('2d');
        ctx3.font = "bold 50px Arial";
        ctx3.fillStyle = "white";
        ctx3.fillText("El Muelle", 10, 50);

        var canvas4 = document.getElementById("main-text-canvas");
        var ctx4 = canvas4.getContext('2d');
        ctx4.font = "bold 50px Arial";
        ctx4.fillStyle = "white";
        ctx4.fillText("Principio", 10, 50);

        var canvas5 = document.getElementById("hornos-text-canvas");
        var ctx5 = canvas5.getContext('2d');
        ctx5.font = "bold 50px Arial";
        ctx5.fillStyle = "white";
        ctx5.fillText("Hornos de Cal", 10, 50);

        var canvas6 = document.getElementById("faro-text-canvas");
        var ctx6 = canvas6.getContext('2d');
        ctx6.font = "bold 50px Arial";
        ctx6.fillStyle = "white";
        ctx6.fillText("El Faro", 10, 50);

        var canvas7 = document.getElementById("montaña-image-canvas");
        var ctx7 = canvas7.getContext('2d');
        var img7 = document.getElementById("montaña-info");
        ctx7.drawImage(img7, 50, 50);
        ctx7.font = "bold 50px Arial";
        ctx7.fillStyle = "white";
        ctx7.fillText("Las Salinas", 10, 50);

        var canvas8 = document.getElementById("salinas-image-canvas");
        var ctx8 = canvas8.getContext('2d');
        ctx8.font = "bold 50px Arial";
        ctx8.fillStyle = "white";
        ctx8.fillText("Las Salinas", 10, 50);

        var canvas9 = document.getElementById("muelle-image-canvas");
        var ctx9 = canvas9.getContext('2d');
        ctx9.font = "bold 50px Arial";
        ctx9.fillStyle = "white";
        ctx9.fillText("Las Salinas", 10, 50);

        var canvas10 = document.getElementById("main-image-canvas");
        var ctx10 = canvas10.getContext('2d');
        ctx10.font = "bold 50px Arial";
        ctx10.fillStyle = "white";
        ctx10.fillText("Las Salinas", 10, 50);

        var canvas11 = document.getElementById("hornos-image-canvas");
        var ctx11 = canvas11.getContext('2d');
        ctx11.font = "bold 50px Arial";
        ctx11.fillStyle = "white";
        ctx11.fillText("Las Salinas", 10, 50);

        var canvas12 = document.getElementById("faro-image-canvas");
        var ctx12 = canvas12.getContext('2d');
        ctx12.font = "bold 50px Arial";
        ctx12.fillStyle = "white";
        ctx12.fillText("Faro", 10, 50);



    }


});