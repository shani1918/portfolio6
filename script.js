// Add smooth scrolling for navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add navigation functionality here
        this.classList.add('active');
    });
});

// Menu button functionality
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('expanded');
});

// Add hover effects for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
