// Countdown Timer Functionality
function startCountdown() {
    // Set the date we're counting down to (November 11, 2024 at 20:00)
    const countDownDate = new Date("2024-11-11T20:00:00").getTime();

    // Update the count down every 1 second
    const timer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format numbers to always show two digits
        const formatNumber = (num) => num.toString().padStart(2, '0');

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = formatNumber(Math.max(0, days));
        document.getElementById("hours").innerHTML = formatNumber(Math.max(0, hours));
        document.getElementById("minutes").innerHTML = formatNumber(Math.max(0, minutes));
        document.getElementById("seconds").innerHTML = formatNumber(Math.max(0, seconds));

        // If the count down is finished, show zeros and keep running
        if (distance < 0) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);
}

// Registration function
function registerNow() {
    // This would normally redirect to a registration form or open a modal
    // For now, we'll show an alert
    alert("Ro'yhatdan o'tish uchun quyidagi raqamga murojaat qiling: +998XX XXX XX XX");
    
    // You can replace this with actual registration logic:
    // window.open('registration-form.html', '_blank');
    // or redirect to a registration service:
    // window.location.href = 'https://your-registration-service.com';
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Start the countdown timer
    startCountdown();
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-item, .program-day');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add button click effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button')) {
        // Add click effect
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add floating date animation
function animateDate() {
    const dateElements = document.querySelectorAll('.date, .time');
    dateElements.forEach((el, index) => {
        el.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
}

// Add CSS animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initialize animations when page loads
window.addEventListener('load', function() {
    animateDate();
});