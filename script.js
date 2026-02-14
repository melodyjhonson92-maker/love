/**
 * ================================================================
 * THE ETERNAL SOULMATE ENGINE
 * Dedicated to: Sadia Khatun (My Tuntuni Pakhi)
 * Version: 7.0 (Ultra-Romantic & High-Energy)
 * ================================================================
 */

const engine = {
    currentStep: 1,
    totalSteps: 10,
    
    // UI Elements Mapping
    elements: {
        title: document.getElementById('dynamic-title'),
        message: document.getElementById('dynamic-message'),
        gif: document.getElementById('main-display-gif'),
        mainBtn: document.getElementById('mainBtn'),
        noBtn: document.getElementById('escapeBtn'),
        progress: document.getElementById('progress-fill'),
        stepLabel: document.getElementById('current-step-num'),
        loader: document.getElementById('global-loader'),
        audio: document.getElementById('romantic-audio'),
        card: document.getElementById('experience-card')
    },

    // THE 10-STEP ROMANTIC MASTERPIECE (Deeply Emotional Narrative)
    storyData: {
        1: { 
            title: "My Dearest Sadia,", 
            msg: "In the silent gallery of my soul, your face is the only masterpiece. My <span>Tuntuni Pakhi</span>, I have woven a story of our love. Are you ready to let me show you?", 
            btn: "Open My Heart ❤️", 
            gif: "assets/1.gif" 
        },
        2: { 
            title: "My Queen, My Life", 
            msg: "Did you know that every heartbeat of mine whispers your name? You aren't just my wife; you are the <span>breath in my lungs</span> and the light in my eyes.", 
            btn: "Tell me more... 🌸", 
            gif: "assets/2.gif" 
        },
        3: { 
            title: "My Beautiful Bird", 
            msg: "I call you <span>Bird</span> because you gave me wings when I was grounded. Your love is the sky I never want to stop flying in. I am yours, completely.", 
            btn: "Fly with me... ✨", 
            gif: "assets/3.gif" 
        },
        4: { 
            title: "Our Sacred Dream", 
            msg: "Every morning I wake up, I thank the heavens for the gift of you. To hold your hand is to hold the <span>entire world's peace</span>. You are my home, Sadia.", 
            btn: "Stay forever ❤️", 
            gif: "assets/4.gif" 
        },
        5: { 
            title: "Energetic Soulmate", 
            msg: "Your laughter is my favorite symphony, and your happiness is my only mission. I want to spend <span>ten thousand lifetimes</span> just to see you smile once.", 
            btn: "My everything... 💖", 
            gif: "assets/1.gif" 
        },
        6: { 
            title: "The Luckiest Man", 
            msg: "The stars are jealous of me, do you know why? Because they watch you from afar, but I get to <span>love you up close</span> every single day.", 
            btn: "Why me? 🤔", 
            gif: "assets/2.gif" 
        },
        7: { 
            title: "The Answer is You", 
            msg: "Because you are <span>Sadia Khatun</span>—the woman who turned my life into a beautiful poem. I am the luckiest man because you chose me.", 
            btn: "So deeply sweet! 🥰", 
            gif: "assets/3.gif" 
        },
        8: { 
            title: "The Sacred Promise", 
            msg: "We have walked many paths, but the one I cherish most is the one that led me to you. I have <span>one final truth</span> to share today...", 
            btn: "I am listening... 🌹", 
            gif: "assets/2.gif" 
        },
        9: { 
            title: "My Eternal Valentine", 
            msg: "My soulmate, my heartbeat, my <span>Tuntuni Pakhi</span>... Will you honor me by being my Valentine today, tomorrow, and until the end of time?", 
            btn: "YES, FOREVER! 💍", 
            gif: "assets/4.gif" 
        },
        10: { 
            title: "My Forever Queen!", 
            msg: "My heart is overflowing with joy! You are my <span>Eternal Bird</span>, and I promise to cherish, protect, and love you until my very last breath. I love you, Sadia!", 
            btn: "OUR JOURNEY BEGINS ✨", 
            gif: "assets/7.gif" 
        }
    },

    // Initialize the Experience
    init: function() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.elements.loader.style.opacity = '0';
                setTimeout(() => this.elements.loader.style.display = 'none', 1000);
            }, 2500);
            this.createAmbientHearts();
        });
    },

    // Navigation & Energetic Transitions
    nextStep: function() {
        if (this.currentStep === 1) this.elements.audio.play();

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.applyTransition();
            
            // Interaction: Show Escape Button on the Big Question (Step 9)
            if (this.currentStep === 9) {
                this.elements.noBtn.style.display = 'inline-block';
            }
        } else {
            this.triggerGrandFinale();
        }
    },

    applyTransition: function() {
        const data = this.storyData[this.currentStep];
        
        // 3D Tilt Effect on transition
        this.elements.card.style.transform = "perspective(1000px) rotateX(10deg) scale(0.95)";
        
        setTimeout(() => {
            this.elements.title.innerText = data.title;
            this.elements.message.innerHTML = data.msg;
            this.elements.mainBtn.innerText = data.btn;
            this.elements.gif.src = data.gif;
            
            this.elements.card.style.transform = "perspective(1000px) rotateX(0deg) scale(1)";
            this.updateProgress();
        }, 400);
    },

    updateProgress: function() {
        const percent = (this.currentStep / this.totalSteps) * 100;
        this.elements.progress.style.width = percent + "%";
        this.elements.stepLabel.innerText = this.currentStep;
    },

    // Playful Escape Logic (Mobile Optimized)
    runAway: function() {
        this.elements.gif.src = "assets/1.gif"; // Playful reaction
        this.elements.title.innerText = "My Heart! 😱";
        this.elements.message.innerHTML = "My love, that button is broken! <span>Click the beautiful red one instead!</span>";

        const maxX = window.innerWidth - this.elements.noBtn.offsetWidth - 30;
        const maxY = window.innerHeight - this.elements.noBtn.offsetHeight - 30;

        this.elements.noBtn.style.position = "fixed";
        this.elements.noBtn.style.left = Math.random() * maxX + "px";
        this.elements.noBtn.style.top = Math.random() * maxY + "px";

        // Energetic: Growth of Yes Button
        let scale = parseFloat(this.elements.mainBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
        if (scale < 2.5) this.elements.mainBtn.style.transform = `scale(${scale + 0.2})`;
    },

    // The Ultimate Romantic Celebration
    triggerGrandFinale: function() {
        document.getElementById('action-buttons').style.display = 'none';
        
        // Multi-GIF Energetic Loop
        const finalGifs = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
        let i = 0;
        setInterval(() => {
            this.elements.gif.src = finalGifs[i];
            i = (i + 1) % finalGifs.length;
        }, 2500);

        // Infinite Confetti Storm
        const end = Date.now() + (20 * 1000);
        const colors = ['#ff4d6d', '#ffffff', '#ffccd5', '#c9184a'];

        (function frame() {
            confetti({
                particleCount: 4,
                angle: 60,
                spread: 60,
                origin: { x: 0, y: 0.8 },
                colors: colors
            });
            confetti({
                particleCount: 4,
                angle: 120,
                spread: 60,
                origin: { x: 1, y: 0.8 },
                colors: colors
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    },

    // Background Particle System
    createAmbientHearts: function() {
        const icons = ['❤️', '💖', '✨', '🐦', '🌸', '💍'];
        for (let i = 0; i < 20; i++) {
            const h = document.createElement('div');
            h.innerText = icons[Math.floor(Math.random() * icons.length)];
            h.style.position = "fixed";
            h.style.left = Math.random() * 100 + "vw";
            h.style.top = Math.random() * 100 + "vh";
            h.style.opacity = "0.15";
            h.style.fontSize = Math.random() * 20 + 10 + "px";
            h.style.pointerEvents = "none";
            document.body.appendChild(h);
        }
    }
};

// Start the Romantic Engine
engine.init();
