// Star Rating System
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });

        star.addEventListener('mouseleave', function() {
            highlightStars(currentRating);
        });

        star.addEventListener('click', function() {
            currentRating = index + 1;
            highlightStars(currentRating);
            createMagicalEffect(star);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.textContent = '★';
                star.classList.add('active');
            } else {
                star.textContent = '☆';
                star.classList.remove('active');
            }
        });
    }

    function createMagicalEffect(star) {
        const rect = star.getBoundingClientRect();
        
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = rect.left + rect.width / 2 + 'px';
            sparkle.style.top = rect.top + rect.height / 2 + 'px';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#FFD700';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.boxShadow = '0 0 10px #FFD700';
            
            document.body.appendChild(sparkle);
            
            const angle = (Math.PI * 2 * i) / 5;
            const distance = 50;
            const targetX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
            const targetY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
            
            sparkle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${targetX - rect.left - rect.width / 2}px, ${targetY - rect.top - rect.height / 2}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }
    }

    // Add placeholder text to editable elements
    const bookTitle = document.querySelector('.book-title');
    const authorName = document.querySelector('.author-name');
    
    bookTitle.setAttribute('data-placeholder', 'Enter book title...');
    authorName.setAttribute('data-placeholder', 'Enter author name...');

    // Add placeholder to lines

    // Floating elements animation
    createFloatingElements();
    
    // Add focus effects to editable elements
});

function createFloatingElements() {
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹'];
    const container = document.body;

    setInterval(() => {
        if (Math.random() > 0.7) {
            const flower = document.createElement('div');
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.position = 'fixed';
            flower.style.left = Math.random() * window.innerWidth + 'px';
            flower.style.top = '-50px';
            flower.style.fontSize = '1.5rem';
            flower.style.pointerEvents = 'none';
            flower.style.zIndex = '1';
            flower.style.opacity = '0.7';
            
            container.appendChild(flower);
            
            flower.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 0.7
                },
                { 
                    transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`,
                    opacity: 0
                }
            ], {
                duration: 8000 + Math.random() * 4000,
                easing: 'ease-in-out'
            }).onfinish = () => {
                flower.remove();
            };
        }
    }, 3000);
}

function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
            sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
            sparkle.style.width = '3px';
            sparkle.style.height = '3px';
            sparkle.style.background = '#FFD700';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.boxShadow = '0 0 8px #FFD700';
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                { 
                    transform: 'scale(1)',
                    opacity: 1
                },
                { 
                    transform: 'scale(0)',
                    opacity: 0
                }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }, i * 100);
    }
}

function saveReview() {
    const title = document.querySelector('.book-title').textContent;
    const author = document.querySelector('.author-name').textContent;
    const rating = document.querySelectorAll('.star.active').length;
    
    if (!title || title === 'Title') {
        alert('✨ Please add a book title first! ✨');
        return;
    }

    // Create magical save effect
    const button = document.querySelector('.save-button');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<span class="button-icon">✨</span> Saving... <span class="button-icon">✨</span>';
    button.style.background = 'linear-gradient(45deg, #90EE90, #98FB98)';
    
    // Create burst effect
    createSaveEffect(button);
    
    setTimeout(() => {
        button.innerHTML = '<span class="button-icon">🌟</span> Saved! <span class="button-icon">🌟</span>';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }, 1500);

    // Store the review data (in a real app, this would go to a database)
    const reviewData = {
        title: title,
        author: author,
        rating: rating,
        synopsis: document.querySelector('.synopsis-section .paragraph-text').textContent,
        review: document.querySelector('.review-section .paragraph-text').textContent,
        timestamp: new Date().toISOString()
    };
    
    console.log('Review saved:', reviewData);
}

function createSaveEffect(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.textContent = ['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)];
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '1rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 100;
        const targetX = centerX + Math.cos(angle) * distance;
        const targetY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${targetX - centerX}px, ${targetY - centerY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const bookCover = document.querySelector('.book-cover-placeholder');
    
    bookCover.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 35px rgba(221, 160, 221, 0.5)';
    });
    
    bookCover.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 25px rgba(221, 160, 221, 0.3)';
    });
});