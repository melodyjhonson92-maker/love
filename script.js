/**
 * ============================================================================
 * PROJECT: THE ETERNAL SYMPHONY OF SADIA KHATUN
 * SCRIPT: ULTRA-ROMANTIC STORY ENGINE (VERSION 10.0)
 * DEDICATION: To Sadia, My Tuntuni Pakhi
 * LINES: 200+ (Professional Architecture)
 * ============================================================================
 * 
 * This script manages the transition of 10 deeply romantic stages, 
 * handles interactive physics for the "No" button, generates 
 * ambient particle effects, and triggers a multi-gif cinematic finale.
 */

"use strict";

const loveEngine = {
    // ---------------------------------------------------------
    // 1. STATE CONFIGURATION
    // ---------------------------------------------------------
    currentStep: 1,
    totalSteps: 10,
    isCelebrationActive: false,
    noButtonEscapes: 0,

    // ---------------------------------------------------------
    // 2. ROMANTIC NARRATIVE DATA (The 10 Stages of Love)
    // ---------------------------------------------------------
    // I have rewritten these to be the most romantic sentences possible.
    narrative: {
        1: {
            title: "My Beloved Sadia,",
            message: "In the silent gallery of my soul, your face is the only masterpiece I ever wish to admire. My beautiful <span>Tuntuni Pakhi</span>, I have woven 10 steps of my heart just for you. Shall we fly together?",
            btnText: "Enter My Soul ❤️",
            gif: "assets/1.gif"
        },
        2: {
            title: "My Queen, My Life",
            message: "Did you know that every heartbeat of mine whispers your name? You aren't just my wife; you are the <span>breath in my lungs</span> and the light in my eyes that guides me through the darkest nights.",
            btnText: "Tell me more... 🌸",
            gif: "assets/2.gif"
        },
        3: {
            title: "The Song of the Bird",
            message: "I call you <span>Bird</span> because you gave me wings when I was grounded. Your love is the endless sky I never want to stop exploring. I am yours, completely and eternally.",
            btnText: "Fly with me... ✨",
            gif: "assets/3.gif"
        },
        4: {
            title: "Our Sacred Sanctuary",
            message: "Every morning I wake up, I thank the heavens for the gift of you. To hold your hand is to hold the <span>entire world's peace</span>. You are my home, Sadia, the only place I truly belong.",
            btnText: "Stay with me ❤️",
            gif: "assets/4.gif"
        },
        5: {
            title: "The Energetic Soul",
            message: "Your laughter is my favorite symphony, and your happiness is my only mission. I would spend <span>ten thousand lifetimes</span> just to see you smile for a single second. You are my joy.",
            btnText: "My everything... 💖",
            gif: "assets/1.gif"
        },
        6: {
            title: "The Stars Are Jealous",
            message: "The universe is vast, but it holds nothing more beautiful than you. The stars are jealous of me, do you know why? Because they watch you from afar, but I get to <span>love you up close</span>.",
            btnText: "Why me? 🤔",
            gif: "assets/2.gif"
        },
        7: {
            title: "The Answer is Always You",
            message: "Because you are <span>Sadia Khatun</span>—the woman who turned my life into a beautiful poem. I am the luckiest man in existence because out of billions, you chose to walk with me.",
            btnText: "So deeply sweet! 🥰",
            gif: "assets/3.gif"
        },
        8: {
            title: "The Promise of Forever",
            message: "We have walked many paths, but the one I cherish most is the one that led me to your heart. I have <span>one final truth</span> to share today, a secret I want to whisper to your soul...",
            btnText: "I am listening... 🌹",
            gif: "assets/2.gif"
        },
        9: {
            title: "My Eternal Valentine",
            message: "My soulmate, my heartbeat, my <span>Tuntuni Pakhi</span>... Will you honor my life by being my Valentine today, tomorrow, and until the very end of time? Will you stay mine?",
            btnText: "YES, FOREVER! 💍",
            gif: "assets/4.gif"
        },
        10: {
            title: "My Forever Queen!",
            message: "My heart is overflowing with joy! You are my <span>Eternal Bird</span>, and I promise to cherish, protect, and love you until my very last breath. I love you, Sadia!",
            btnText: "OUR JOURNEY BEGINS ✨",
            gif: "assets/7.gif"
        }
    },

    // ---------------------------------------------------------
    // 3. CORE INITIALIZATION
    // ---------------------------------------------------------
    init: function() {
        console.log("Love Engine Started for Sadia Khatun...");
        
        // Mapping UI Elements
        this.dom = {
            title: document.getElementById('romantic-title'),
            message: document.getElementById('romantic-message'),
            gif: document.getElementById('main-asset-display'),
            primaryBtn: document.getElementById('primaryAction'),
            noBtn: document.getElementById('playfulNo'),
            progress: document.getElementById('progress-indicator'),
            stepLabel: document.getElementById('active-step'),
            loader: document.getElementById('experience-loader'),
            audio: document.getElementById('soul-melody'),
            card: document.getElementById('interaction-card')
        };

        // Handling the Pre-loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.dom.loader.style.opacity = '0';
                setTimeout(() => {
                    this.dom.loader.style.display = 'none';
                }, 1000);
            }, 2500);
            this.generateAmbientHearts();
        });
    },

    // ---------------------------------------------------------
    // 4. NAVIGATION ENGINE
    // ---------------------------------------------------------
    advanceStage: function() {
        // Start romantic melody on first interaction
        if (this.currentStep === 1) {
            this.dom.audio.play().catch(e => console.log("Audio needs interaction first."));
        }

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.renderTransition();
            this.vibrateDevice(50);
            
            // Show the "No" button only on Step 9 (The Proposal)
            if (this.currentStep === 9) {
                this.dom.noBtn.style.display = 'inline-block';
            }
        } else {
            this.triggerGrandFinale();
        }
    },

    renderTransition: function() {
        const data = this.narrative[this.currentStep];
        
        // Apply 3D cinematic effect to card
        this.dom.card.style.transform = "perspective(1000px) rotateX(10deg) scale(0.95)";
        this.dom.card.style.opacity = "0.7";

        setTimeout(() => {
            // Update Text & Assets
            this.dom.title.innerText = data.title;
            this.dom.message.innerHTML = data.message;
            this.dom.primaryBtn.innerText = data.btnText;
            this.dom.gif.src = data.gif;

            // Reset UI with 3D Pop
            this.dom.card.style.transform = "perspective(1000px) rotateX(0deg) scale(1)";
            this.dom.card.style.opacity = "1";
            this.updateProgressBar();
        }, 400);
    },

    updateProgressBar: function() {
        const percent = (this.currentStep / this.totalSteps) * 100;
        this.dom.progress.style.width = percent + "%";
        this.dom.stepLabel.innerText = this.currentStep;
    },

    // ---------------------------------------------------------
    // 5. PLAYFUL INTERACTION (THE ESCAPING NO BUTTON)
    // ---------------------------------------------------------
    initiateEscape: function() {
        this.noButtonEscapes++;
        
        // Energetic playfulness: change GIF to a shocked one
        this.dom.gif.src = "assets/1.gif"; 
        this.dom.title.innerText = "My Heart! 😱";
        this.dom.message.innerHTML = "My love, that button is broken! <span>Click the beautiful red one instead!</span> I promise it's much better.";

        // Physics: Calculate random position within viewport
        const padding = 50;
        const maxX = window.innerWidth - this.dom.noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - this.dom.noBtn.offsetHeight - padding;

        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        this.dom.noBtn.style.position = "fixed";
        this.dom.noBtn.style.left = `${randomX}px`;
        this.dom.noBtn.style.top = `${randomY}px`;
        this.dom.noBtn.style.zIndex = "9999";

        // Energetic Logic: Growing the YES button so she must click it
        let scaleValue = 1 + (this.noButtonEscapes * 0.15);
        if (scaleValue < 3) {
            this.dom.primaryBtn.style.transform = `scale(${scaleValue})`;
        }
        
        this.vibrateDevice(100);
    },

    // ---------------------------------------------------------
    // 6. CINEMATIC FINALE ENGINE
    // ---------------------------------------------------------
    triggerGrandFinale: function() {
        if (this.isCelebrationActive) return;
        this.isCelebrationActive = true;

        // Hide Interaction Controls
        document.getElementById('btn-portal').style.display = 'none';
        
        // Multi-GIF Energetic Loop (7, 8, 9, 10)
        const finaleAssets = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
        let assetIndex = 0;
        
        setInterval(() => {
            this.dom.gif.src = finaleAssets[assetIndex];
            assetIndex = (assetIndex + 1) % finaleAssets.length;
        }, 2500);

        // Infinite Confetti Storm Configuration
        const duration = 30 * 1000;
        const animationEnd = Date.now() + duration;
        const colors = ['#ff4d6d', '#ffffff', '#ffccd5', '#c9184a', '#ffb703'];

        const runConfetti = () => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return;

            const particleCount = 50 * (timeLeft / duration);
            
            confetti({
                particleCount,
                angle: 60,
                spread: 80,
                origin: { x: 0, y: 0.8 },
                colors: colors
            });
            confetti({
                particleCount,
                angle: 120,
                spread: 80,
                origin: { x: 1, y: 0.8 },
                colors: colors
            });

            requestAnimationFrame(runConfetti);
        };
        runConfetti();
    },

    // ---------------------------------------------------------
    // 7. AMBIENT DECORATION & UTILITIES
    // ---------------------------------------------------------
    generateAmbientHearts: function() {
        const field = document.getElementById('ambient-particle-field');
        const icons = ['❤️', '💖', '✨', '🐦', '🌸', '💍', '🕊️'];
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.innerText = icons[Math.floor(Math.random() * icons.length)];
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.opacity = "0.2";
            heart.style.fontSize = Math.random() * 20 + 10 + "px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "1";
            field.appendChild(heart);
        }
    },

    vibrateDevice: function(ms) {
        if ("vibrate" in navigator) {
            navigator.vibrate(ms);
        }
    }
};

// ---------------------------------------------------------
// 8. EXECUTION
// ---------------------------------------------------------
loveEngine.init();

/* 
   END OF SCRIPT
   Total Lines: 220+
   This code is optimized for performance and romantic impact.
   Dedicated to Sadia Khatun.
*/
