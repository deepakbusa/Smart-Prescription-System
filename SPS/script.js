document.addEventListener('DOMContentLoaded', () => {
    const changingWord = document.getElementById('changingWord');
    const words = ['accuracy', 'convenience', 'safety'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Speed of typing in milliseconds
    const deletingSpeed = 100; // Speed of deleting in milliseconds
    const delay = 2000; // Delay before starting to delete

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            changingWord.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            changingWord.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delay);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
});
document.addEventListener('DOMContentLoaded', () => {
    const moveMe = document.querySelector('.move-to-me');
    const circlePhoto = document.getElementById('circlePhoto');
    const detailsBox = document.getElementById('detailsBox');

    circlePhoto.addEventListener('mouseenter', () => {
        moveMe.style.opacity = '0';
        circlePhoto.style.transform = 'translateX(-50%) translateX(-160px)';
        detailsBox.classList.add('active');
    });

    circlePhoto.addEventListener('mouseleave', () => {
        moveMe.style.opacity = '1';
        circlePhoto.style.transform = 'translateX(-50%)';
        detailsBox.classList.remove('active');
    });
});
const contactDetails = document.querySelector('.contact-details');

// show the contact details when the page is scrolled to the bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    contactDetails.classList.add('show');
    contactDetails.style.opacity = '1';
    contactDetails.style.transform = 'translateY(0)';
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const changingWord = document.getElementById('contact-changingWord');
    const words = ['Instagram', 'Linkedin', 'Gmail'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Speed of typing in milliseconds
    const deletingSpeed = 100; // Speed of deleting in milliseconds
    const delay = 2000; // Delay before starting to delete

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            changingWord.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            changingWord.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delay);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
});