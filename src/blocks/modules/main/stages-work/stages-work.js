document.addEventListener("DOMContentLoaded", function() {
    var stagesWorkBlock = document.getElementById('stages-work');
    function addAnimClass(elem) {
        elem.classList.toggle('stage-hover-animation');
    }
    if(stagesWorkBlock) {
        var hoverElem = stagesWorkBlock.querySelectorAll('[data-hover]');
        if(hoverElem.length) {
            for(var i=0; i<hoverElem.length; i++) {
                (function(i) {
                    var animStagesElem = stagesWorkBlock.querySelector('[data-animation='+hoverElem[i].dataset.hover+']');
                    if(animStagesElem) {
                        hoverElem[i].addEventListener('mouseover', function () {addAnimClass(animStagesElem)})
                        hoverElem[i].addEventListener('mouseout', function () {addAnimClass(animStagesElem)})
                    }
                })(i)
            }
        }
    }
}, false);