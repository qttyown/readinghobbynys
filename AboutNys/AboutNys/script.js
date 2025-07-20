// Garden Fairy Core Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add magical cursor trail effect
    createCursorTrail();
    
    // Add interactive hover effects to text lines
    enhanceTextLines();
    
    // Create floating petals animation
    createFloatingPetals();
    
    // Add click interaction to image placeholder
    enhanceImagePlaceholder();
    
    // Add magic button functionality
    enhanceMagicButton();
});

function createCursorTrail() {
    let cursor = { x: 0, y: 0 };
    let trails = [];
    
    document.addEventListener('mousemove', function(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
    });
    
    function createTrail() {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #e1c3ff, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            animation: fadeTrail 1s ease-out forwards;
        `;
        
        trail.style.left = cursor.x + 'px';
        trail.style.top = cursor.y + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }
    
    // Add CSS for trail animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeTrail {
            0% { transform: scale(1); opacity: 0.7; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    setInterval(createTrail, 50);
}

function enhanceTextLines() {
    const textLines = document.querySelectorAll('.text-line');
    
    textLines.forEach((line, index) => {
        line.addEventListener('mouseenter', function() {
            // Add magical sparkle effect on hover
            createSparkleEffect(line);
        });
        
        line.addEventListener('click', function() {
            // Add click ripple effect
            createRippleEffect(line);
        });
    });
}

function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'hover-sparkle';
    sparkle.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fff9c3;
        border-radius: 50%;
        pointer-events: none;
        animation: sparkleHover 0.8s ease-out forwards;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: 0 0 10px #fff9c3;
    `;
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 800);
    
    // Add sparkle hover animation
    if (!document.querySelector('#sparkle-hover-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-hover-style';
        style.textContent = `
            @keyframes sparkleHover {
                0% { transform: translateY(-50%) scale(0) rotate(0deg); opacity: 0; }
                50% { transform: translateY(-50%) scale(1.5) rotate(180deg); opacity: 1; }
                100% { transform: translateY(-50%) scale(0) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.cssText = `
        position: absolute;
        background: radial-gradient(circle, rgba(225, 195, 255, 0.3), transparent);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: rippleExpand 0.6s ease-out forwards;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleExpand {
                0% { width: 20px; height: 20px; opacity: 0.8; }
                100% { width: 200px; height: 200px; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

function createFloatingPetals() {
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'floating-petal';
        petal.style.cssText = `
            position: fixed;
            width: 12px;
            height: 12px;
            background: linear-gradient(45deg, #ffc3e1, #e1c3ff);
            border-radius: 50% 0 50% 0;
            pointer-events: none;
            z-index: 1;
            opacity: 0.6;
            animation: petalFall ${5 + Math.random() * 5}s linear forwards;
        `;
        
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = '-20px';
        
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 10000);
    }
    
    // Add petal falling animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes petalFall {
            0% { 
                transform: translateY(-20px) rotate(0deg); 
                opacity: 0.6; 
            }
            100% { 
                transform: translateY(100vh) rotate(360deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create petals periodically
    setInterval(createPetal, 3000);
}

function enhanceImagePlaceholder() {
    const placeholder = document.querySelector('.image-frame');
    
    placeholder.addEventListener('click', function() {
        // Create magical explosion effect
        createMagicalExplosion(placeholder);
    });
    
    placeholder.addEventListener('dragover', function(e) {
        e.preventDefault();
        placeholder.style.borderColor = '#8b5a96';
        placeholder.style.transform = 'scale(1.1)';
    });
    
    placeholder.addEventListener('dragleave', function() {
        placeholder.style.borderColor = '#c3a4d6';
        placeholder.style.transform = 'scale(1)';
    });
}

function createMagicalExplosion(element) {
    const colors = ['#ffc3e1', '#e1c3ff', '#c3e1ff', '#fff9c3'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: explode 1s ease-out forwards;
        `;
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        
        particle.style.setProperty('--angle', angle + 'rad');
        particle.style.setProperty('--distance', distance + 'px');
        
        element.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    // Add explosion animation
    if (!document.querySelector('#explosion-style')) {
        const style = document.createElement('style');
        style.id = 'explosion-style';
        style.textContent = `
            @keyframes explode {
                0% { 
                    transform: translate(-50%, -50%) translate(0, 0) scale(1); 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(-50%, -50%) 
                             translate(calc(cos(var(--angle)) * var(--distance)), 
                                     calc(sin(var(--angle)) * var(--distance))) 
                             scale(0); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function enhanceMagicButton() {
    const magicBtn = document.getElementById('magicBtn');
    
    magicBtn.addEventListener('click', function() {
        // Create magical burst effect
        createMagicalBurst();
        
        // Add temporary glow effect
        magicBtn.style.boxShadow = '0 0 30px #fff9c3, 0 6px 20px rgba(139, 90, 150, 0.4)';
        
        setTimeout(() => {
            magicBtn.style.boxShadow = '0 6px 20px rgba(139, 90, 150, 0.4)';
        }, 500);
    });
}

function createMagicalBurst() {
    const colors = ['#ffc3e1', '#e1c3ff', '#c3e1ff', '#fff9c3'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            top: 42px;
            left: 80px;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            animation: burstParticle 1.2s ease-out forwards;
        `;
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        
        particle.style.setProperty('--angle', angle + 'rad');
        particle.style.setProperty('--distance', distance + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
    
    // Add burst animation if not exists
    if (!document.querySelector('#burst-style')) {
        const style = document.createElement('style');
        style.id = 'burst-style';
        style.textContent = `
            @keyframes burstParticle {
                0% { 
                    transform: translate(0, 0) scale(1); 
                    opacity: 1; 
                }
                100% { 
                    transform: translate(calc(cos(var(--angle)) * var(--distance)), 
                                       calc(sin(var(--angle)) * var(--distance))) 
                             scale(0); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function promptForImageLink() {
    const url = prompt('Enter image URL:');
    
    if (url && url.trim() && isValidImageUrl(url.trim())) {
        addImageFromUrl(url.trim());
    } else if (url && url.trim()) {
        alert('Please enter a valid image URL');
    }
}

function addImageFromUrl(url) {
    const mainImage = document.getElementById('mainImage');
    const placeholderText = document.getElementById('placeholderText');
    
    // Set the image source
    mainImage.src = url;
    mainImage.style.display = 'block';
    placeholderText.style.display = 'none';
    
    const imageFrame = document.querySelector('.image-frame');
    
    // Add magical sparkle effect when image loads
    mainImage.onload = function() {
        createMagicalExplosion(imageFrame);
    };
    
    // Add click to change image functionality
    mainImage.onclick = function() {
        promptForImageLink();
    };
}

function showImageInput() {
    const imageFrame = document.querySelector('.image-frame');
    const placeholderContent = document.getElementById('placeholderContent');
    const existingImage = imageFrame.querySelector('.display-image');
    
    if (existingImage) {
        existingImage.remove();
    }
    
    placeholderContent.style.display = 'flex';
}

function isValidImageUrl(url) {
    try {
        new URL(url);
        return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url) || url.includes('unsplash.com') || url.includes('pexels.com');
    } catch {
        return false;
    }
}

// Add smooth scrolling for better user experience
document.documentElement.style.scrollBehavior = 'smooth';