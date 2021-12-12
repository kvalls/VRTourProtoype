AFRAME.registerComponent('show-info', {
    init: function() {
        const el = this.el;

        el.addEventListener("mouseenter", function() {
            el.setAttribute("visible", "false");
            document.querySelector("#info1").setAttribute("visible", "true");
            document.querySelector("#button-hide").setAttribute("visible", "true");
        });
    }
});