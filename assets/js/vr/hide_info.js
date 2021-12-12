AFRAME.registerComponent('hide-info', {
    init: function() {
        const el = this.el;

        el.addEventListener("mouseenter", function() {
            document.querySelector("#info1").setAttribute("visible", "false");
            document.querySelector("#button-hide").setAttribute("visible", "false");
            document.querySelector("#plane-main-info").setAttribute("visible", "true");
        });
    }
});