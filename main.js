window.onload = function () {
  new Slider({
    images: '.gallery img',
    btnPrev: '.gallery .prev',
    btnNext: '.gallery .next',
    auto: false
  })

  new Slider({
    images: '.gallery-1 img',
    btnPrev: '.gallery-1 .prev',
    btnNext: '.gallery-1 .next',
    auto: true
  })

  function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);

    this.auto = obj.auto;

    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;

    var i = 0;
    var slider = this;

    this.prev = function () {
      slider.images[i].classList.remove('showed');
      i--;

      if (i < 0) {
        i = slider.images.length - 1
      }

      slider.images[i].classList.add('showed');
    }

    this.next = function () {
      slider.images[i].classList.remove('showed');
      i++;

      if (i >= slider.images.length) {
        i = 0;
      }

      slider.images[i].classList.add('showed');

    }

    document.querySelector(slider.btnPrev).onclick = slider.prev;
    document.querySelector(slider.btnNext).onclick = slider.next;

    if (slider.auto) {
      setInterval(function () {
        slider.prev();
      }, 2000)
    }
  }

}

