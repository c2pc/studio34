//Stop video on modal window close
$(document).ready(function () {
    var mainBannerVideoBlock = document.getElementById('main-modal-video');
    if(mainBannerVideoBlock) {
        var mainBannerVideoIframe = mainBannerVideoBlock.getElementsByTagName("iframe")[0];
        if(mainBannerVideoIframe) {
            var mainBannerVideoUrl = mainBannerVideoIframe.getAttribute('src');

            $('#videoModal').on('hidden.bs.modal', function () {
                mainBannerVideoIframe.setAttribute('src', '')
                mainBannerVideoIframe.setAttribute('src', mainBannerVideoUrl)
            })
        }
    }
})
//Stop video on modal window close