document.getElementById('mainVideo').addEventListener('ended', function () {
    this.load();
    this.play();
}, false);
