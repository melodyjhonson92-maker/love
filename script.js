/**
 * ================================================================
 * ENGINE: The Eternal Flight of Tuntuni Pakhi
 * VERSION: 6.0 (Supper Advanced Storytelling Engine)
 * FEATURES: 10-Step Logic, Haptic Simulation, Mobile-Guard, Confetti
 * ================================================================
 */

// 1. STATE & ELEMENT MAPPING
const engine = {
    currentStep: 1,
    totalSteps: 10,
    
    // DOM Elements
    title: document.getElementById('dynamic-title'),
    message: document.getElementById('dynamic-message'),
    gif: document.getElementById('main-display-gif'),
    mainBtn: document.getElementById('mainBtn'),
    noBtn: document.getElementById('escapeBtn'),
    progress: document.getElementById('progress-fill'),
    stepLabel: document.getElementById('current-step-num'),
    loader: document.getElementById('global-loader'),
    audio: document.getElementById('romantic-audio'),

    // 2. THE 10-STEP ROMANTIC NARRATIVE (Using your 1-10 assets)
    storyData: {
        1: { title: "Hi Sadia Khatun!", msg: "My beautiful <span>Tuntuni Pakhi</span>, I've built a journey of my heart just for you. Ready?", btn: "Let's Begin ❤️", gif: "assets/1.gif" },
        2: { title: "You're My World", msg: "Did you know that you are the most amazing person I've ever met?", btn: "Really? 🌸", gif: "assets/2.gif" },
        3: { title: "My Favorite Bird", msg: "I call you <span>Bird</span> because you make my heart fly every time you smile.", btn: "Keep flying... ✨", gif: "assets/3.gif" },
        4: { title: "Pure Joy", msg: "Every day with you feels like a dream I never want to wake up from.", btn: "Me too! 🥰", gif: "assets/4.gif" },
        5: { title: "Always Energetic", msg: "Your energy and love are the wings that keep me going every single day.", btn: "Aww, Sadia! ❤️", gif: "assets/1.gif" },
        6: { title: "Quick Question...", msg: "Do you know who is the luckiest man in the universe? Hint: It's ME!", btn: "Why? 🤔", gif: "assets/2.gif" },
        7: { title: "Because of YOU", msg: "Because I have you, my <span>Sadia Khatun</span>, by my side forever.", btn: "So sweet! 🥰", gif: "assets/3.gif" },
        8: { title: "Almost There", msg: "I have one very, very important thing to ask you today. Are you ready?", btn: "I'm ready! 💖", gif: "assets/4.gif" },
        9: { title: "The Question", msg: "Sadia, will you make me the happiest husband and be my <span>Valentine</span> forever?", btn: "YES! 💍", gif: "assets/4.gif" },
        10: { title: "I KNEW IT!", msg: "You're mine forever! I love you more than words can say, <span>Tuntuni Pakhi</span>!", btn: "FINALE ✨", gif: "assets/7.gif" }
    },

    // 3. CORE FUNCTIONS
    init: function() {
        // Remove loader when everything is ready
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loader.style.opacity = '0';
                setTimeout(() => this.loader.style.display = 'none', 800);
            }, 2000);
            this.createHearts();
        });
    },

    nextStep: function() {
        if (this.currentStep === 1) this.audio.play(); // Start music on first click

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateUI();
            this.triggerHaptics();
            
            // Show the "No" button only at Step 9
            if (this.currentStep === 9) {
                this.noBtn.style.display = 'inline-block';
            }
        } else {
            this.celebrate();
        }
    },

    updateUI: function() {
        const data = this.storyData[this.currentStep];
        
        // Add fade-out effect
        this.title.style.opacity = 0;
        this.message.style.opacity = 0;

        setTimeout(() => {
            this.title.innerText = data.title;
            this.message.innerHTML = data.msg;
            this.mainBtn.innerText = data.btn;
            this.gif.src = data.gif;
            
            // Fade-in
            this.title.style.opacity = 1;
            this.message.style.opacity = 1;
        }, 300);

        // Update Progress Bar
        const progressPercent = (this.currentStep / this.totalSteps) * 100;
        this.progress.style.width = progressPercent + "%";
        this.stepLabel.innerText = this.currentStep;
    },

    // 4. PLAYFUL "NO" ESCAPE ENGINE
    runAway: function() {
        // Change the GIF to a "Shocked" one (using your assets)
        this.gif.src = "assets/1.gif"; 
        this.title.innerText = "Wrong Way! 😱";
        this.message.innerHTML = "Sadia, you aren't supposed to click that! <span>Try the red one!</span>";

        // Calculate a safe random spot within the phone screen
        const maxX = window.innerWidth - this.noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - this.noBtn.offsetHeight - 20;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        this.noBtn.style.position = "fixed";
        this.noBtn.style.left = randomX + "px";
        this.noBtn.style.top = randomY + "px";
        this.noBtn.style.zIndex = "999";

        // Energetic: Make the YES button get bigger every time she misses the "No" button
        let scale = parseFloat(this.mainBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
        if (scale < 3) this.mainBtn.style.transform = `scale(${scale + 0.2})`;
    },

    // 5. ENERGETIC FINALE
    celebrate: function() {
        document.getElementById('action-buttons').style.display = 'none';
        
        // Loop through all celebration GIFs (7, 8, 9, 10)
        let finalGifs = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
        let i = 0;
        setInterval(() => {
            this.gif.src = finalGifs[i];
            i = (i + 1) % finalGifs.length;
        }, 2000);

        // Launch Persistent Confetti
        const end = Date.now() + (15 * 1000);
        const colors = ['#ff4d6d', '#ffffff', '#ffccd5'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    },

    // 6. DECORATIVE PARTICLES
    createHearts: function() {
        const container = document.getElementById('particle-field');
        const icons = ['❤️', '💖', '✨', '🐦', '🌸'];
        for (let i = 0; i < 15; i++) {
            const h = document.createElement('div');
            h.innerText = icons[Math.floor(Math.random() * icons.length)];
            h.className = 'heart-item';
            h.style.left = Math.random() * 100 + "vw";
            h.style.top = Math.random() * 100 + "vh";
            h.style.position = "absolute";
            h.style.opacity = "0.2";
            h.style.fontSize = "20px";
            document.body.appendChild(h);
        }
    },

    triggerHaptics: function() {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    }
};

// INITIALIZE THE ENGINE
engine.init();
