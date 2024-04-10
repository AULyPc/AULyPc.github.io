!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'ギプソフィラを花束に',
            artist: '仲村芽衣子',
            url: '/songs/仲村芽衣子 - ギプソフィラを花束に.mp3',
            cover: '/songs/仲村芽衣子 - ギプソフィラを花束に.png'
          }
        ]
      });
    }
  })();