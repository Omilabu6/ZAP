const cursor = document.querySelector('.cursor');

// Attach the mousemove event listener to the entire document
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

function toggleAnswer(questionElement) {
    const faq = questionElement.parentElement;
    faq.classList.toggle('active');
}