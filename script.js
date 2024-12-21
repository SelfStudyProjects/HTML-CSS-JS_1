const split = document.querySelector('.split');

split.addEventListener('mousemove', function(e) {
    const width = this.offsetWidth;
    const x = e.clientX - this.offsetLeft;

    if (x < width / 3) {
        this.classList.add('left');
        this.classList.remove('center', 'right');
    } else if (x > 2 * width / 3) {
        this.classList.add('right');
        this.classList.remove('center', 'left');
    } else {
        this.classList.add('center');
        this.classList.remove('left', 'right');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
