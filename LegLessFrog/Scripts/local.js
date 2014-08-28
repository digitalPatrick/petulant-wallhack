// Running the code when the document is ready
$(document).ready(function () {

    // Calling LayerSlider on the target element
    $('#layerslider').layerSlider({
        // Slider options goes here,
        // please check the 'List of slider options' section in the documentation
        autoStart: true,
        responsive: false,
        responsiveUnder: 960,
        layersContainer: 960,
        skin: 'fullwidth',
        hoverPrevNext: false,
        navStartStop: false,
        showCircleTimer: false,
        thumbnailNavigation: 'disabled',
        skinsPath: '../assets/plugins/layerslider/skins/'
    });
});