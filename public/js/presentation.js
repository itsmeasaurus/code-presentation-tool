document.addEventListener('DOMContentLoaded', function() {
    let currentSlideIndex = 1;
        const totalSlides = parseInt(document.getElementById('totalSlides').textContent);

        function showSlide(n) {
            const slides = document.querySelectorAll('.slide');
            if (n > slides.length) currentSlideIndex = 1;
            if (n < 1) currentSlideIndex = slides.length;

            slides.forEach(slide => slide.classList.remove('active'));
            document.getElementById(`slide-${currentSlideIndex}`).classList.add('active');
            document.getElementById('currentSlide').textContent = currentSlideIndex;

            document.getElementById('prevSlide').disabled = currentSlideIndex === 1;
            document.getElementById('nextSlide').disabled = currentSlideIndex === totalSlides;
        }

        function changeSlide(n) {
            showSlide(currentSlideIndex += n);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        showSlide(currentSlideIndex);
})