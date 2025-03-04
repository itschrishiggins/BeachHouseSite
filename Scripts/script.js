
// Change navbar color after window scroll
$(document).ready(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });

  // Javascript for logo/YouTube video
  if ($(window).width() >= 768) { // disable on smaller screens
    $("#container.click-to-play-video").click(function () {
      player = new YT.Player('player', {
        width: '490',
        height: '276',
        videoId: '9800fOlCmLg',
        playerVars: { 'autoplay': 1 },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onPlayerReady(event) {
      //event.target.playVideo();
    }
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
        player.destroy();
      }
    }
  }
});

