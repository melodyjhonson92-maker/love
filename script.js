/**
 * Project: Eternal Love for Sadia Khatun
 * Logic: 10-Step Interactive Storytelling Engine
 * Features: Mobile Touch-Guard, Confetti Physics, Particle System
 * Lines: 120+
 */

// 1. Initialize State and DOM Elements
let currentStep = 1;
const totalSteps = 10;

const titleElement = document.getElementById('dynamic-title');
const messageElement = document.getElementById('dynamic-message');
const gifElement = document.getElementById('dynamic-gif');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const progressBar = document.getElementById('love-progress');
const stepCounter = document.getElementById('step-count');
const loader = document.getElementById('loader');

// 2. The 10-Step Romantic Script (Using your assets 1-10)
const storyData = {
    1: { title: "Hi Sadia!", msg: "My beautiful <span>Tuntuni Pakhi</span>, I've built a journey of my heart just for you. Ready?", btn: "Let's Begin ❤️", gif: "assets/1.gif" },
    2: { title: "You're Amazing", msg: "Did you know that you are the most incredible woman I have ever met?", btn: "Really? 🌸", gif: "assets/2.gif" },
    3: { title: "My Favorite Bird", msg: "I call you <span>Bird</span> because you make my heart fly every time you smile.", btn: "Keep flying... ✨", gif: "assets/3.gif" },
    4: { title: "Energetic Love", msg: "I want to spend every single day making you laugh and feeling loved.", btn: "I love that! 🥰", gif: "assets/1.gif" },
    5: { title: "My Soulmate", msg: "You're not just my wife; you're my best friend and my entire world, <span>Sadia</span>.", btn: "So sweet... ❤️", gif: "assets/4.gif" },
    6: { title: "Quick Question...", msg: "Do you know who is the luckiest husband in the universe? Hint: It's ME!", btn: "Why? 🤔", gif: "assets/2.gif" },
    7: { title: "Because of YOU", msg: "Because I get to wake up and see your beautiful face every single day.", btn: "Aww, Sadia! 🥰", gif: "assets/3.gif" },
    8: { title: "Almost There", msg: "I have one very, very important thing to ask you today. Are you ready?", btn: "I'm ready! 💖", gif: "assets/2.gif" },
    9: { title: "The Question", msg: "Sadia Khatun, will you be my <span>Valentine</span> forever and always?", btn: "YES! 💍", gif: "assets/4.gif" },
    10: { title: "I KNEW IT!", msg: "You're mine forever now! I love you more than words can say!", btn: "FINALE ✨", gif: "assets/7.gif" }
};

// 3. Page Pre-loader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 2000); // Gives 2 seconds to load GIFs
    createFloatingHearts();
});

// 4. Navigation Logic (Energetic Transitions)
function handleNavigation(choice) {
    if (currentStep < totalSteps) {
        currentStep++;
        updateStage();
        
        // Trigger haptic feedback if available (Mobile)
        if (navigator.vibrate) navigator.vibrate(50);
        
        // Stage 9 is the big choice
        if (currentStep === 9) {
            noBtn.style.display = 'inline-block';
        }
    } else {
        celebrateFinalStep();
    }
}

function updateStage() {
    const data = storyData[currentStep];
    
    // Update Text with fade effect
    titleElement.style.opacity = 0;
    messageElement.style.opacity = 0;
    
    setTimeout(() => {
        titleElement.innerText = data.title;
        messageElement.innerHTML = data.msg;
        yesBtn.innerText = data.btn;
        gifElement.src = data.gif;
        
        titleElement.style.opacity = 1;
        messageElement.style.opacity = 1;
    }, 300);

    // Update Progress Bar
    const progressPercent = (currentStep / totalSteps) * 100;
    progressBar.style.width = progressPercent + "%";
    stepCounter.innerText = currentStep;
}

// 5. The Playful "No" Button Escape Logic (Supper Advanced)
function playfulEscape() {
    const phrases = ["Wrong choice!", "Try again!", "Nope! 😜", "Paree na!", "Bird, stop!", "Click the red one!"];
    noBtn.innerText = phrases[Math.floor(Math.random() * phrases.length)];

    // Calculate random position within viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Advanced: Make the YES button grow so she eventually has to click it
    let currentScale = parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    if (currentScale < 3) {
        yesBtn.style.transform = `scale(${currentScale + 0.2})`;
    }
}

// 6. High-Energy Celebration Finale
function celebrateFinalStep() {
    const btnWrapper = document.getElementById('control-panel');
    btnWrapper.style.display = 'none'; // Hide buttons
    
    // Sequence your celebration GIFs (7, 8, 9, 10)
    const finalGifs = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
    let i = 0;
    setInterval(() => {
        gifElement.src = finalGifs[i];
        i = (i + 1) % finalGifs.length;
    }, 2000);

    // Professional Confetti Cannon
    const end = Date.now() + (10 * 1000);
    const colors = ['#ff4d6d', '#ffffff', '#ffccd5', '#ff758f'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

// 7. Background Particle Engine
function createFloatingHearts() {
    const container = document.getElementById('particle-container');
    const heartIcons = ['❤️', '💖', '🌸', '✨', '🐦'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-item';
        heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        document.body.appendChild(heart);
    }
}
