//Created by Mohammed Nuseirat


// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Expand cursor on hoverable elements
document.querySelectorAll('a, button, .project-image').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1)';
    });
});

// Animate numbers when in view
const stats = document.querySelectorAll('.stat-number');

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Intersection Observer for stats
const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.innerHTML);
            animateValue(target, 0, finalValue, 2000);
            observerStats.unobserve(target);
        }
    });
});

stats.forEach(stat => observerStats.observe(stat));

// Image modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImage');

function expandImage(element) {
    const img = element.querySelector('img');
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close modal
document.querySelector('.close-modal').onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update footer year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Enhance tool cards interaction
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1.5)';
    });
    
    card.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(1)';
    });
});

// Add loading animation for CV download
document.querySelector('.cv-button').addEventListener('click', function(e) {
    const icon = this.querySelector('i');
    icon.classList.remove('fa-download');
    icon.classList.add('fa-spinner', 'fa-spin');
    
    setTimeout(() => {
        icon.classList.remove('fa-spinner', 'fa-spin');
        icon.classList.add('fa-check');
        
        setTimeout(() => {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-download');
        }, 1500);
    }, 1000);
});