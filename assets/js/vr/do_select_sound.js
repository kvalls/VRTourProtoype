AFRAME.registerComponent('do-select-sound', {

    init: function() {
        // Do something when component first attached.
        const el = this.el;
        el.addEventListener("mouseenter", function() {
            el.components.sound.playSound();
        });
    },

});