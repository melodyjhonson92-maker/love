let currentStep = 0;
const title = document.getElementById('main-title');
const desc = document.getElementById('main-description');
const gif = document.getElementById('display-gif');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// The 10-Step Romantic Journey
const steps = [
    { title: "Hi Sadia!", desc: "My beautiful <span>Tuntuni Pakhi</span>, I have a story for you...", btn: "Open It ❤️", gif: "assets/1.gif" },
    { title: "You're Special", desc: "Did you know that you are the best thing that ever happened to me?", btn: "Really? 🌸", gif: "assets/2.gif" },
    { title: "My Sweet Bird", desc: "I love calling you <span>Bird</span> because you make my heart fly.", btn: "Keep going... ✨", gif: "assets/3.gif" },
    { title: "Pure Joy", desc: "Every day with you feels like a dream I never want to wake up from.", btn: "Aww ❤️", gif: "assets/4.gif" },
    { title: "Energetic Love", desc: "I want to spend 100 more years making you laugh like this!", btn: "Me too! 💃", gif: "assets/1.gif" },
    { title: "Quick Question", desc: "Do you know who is the luckiest husband in the world?", btn: "Who? 🤔", gif: "assets/2.gif" },
    { title: "It's ME!", desc: "Because I have you, my <span>Sadia Khatun</span>, by my side.", btn: "So sweet! 🥰", gif: "assets/3.gif" },
    { title: "Almost There...", desc: "I have one very, very important thing to ask you today.", btn: "What is it? 💖", gif: "assets/4.gif" },
    { title: "The Question", desc: "Will you be my <span>Valentine</span> forever and always?", btn: "YES! 💍", gif: "assets/4.gif" }
];

function handleYes() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
    } else {
        celebrate();
    }
}

function updateUI() {
    const s = steps[currentStep];
    title.innerText = s.title;
    desc.innerHTML = s.desc;
    yesBtn.innerText = s.btn;
    gif.src = s.gif;
    
    // Reset No button position
    noBtn.style.position = 'relative';
    noBtn.style.left = '0';
    noBtn.style.top = '0';
}

function handleNo() {
    // Playful "No" reaction
    gif.src = Math.random() > 0.5 ? "assets/1.gif" : "assets/2.gif"; // Uses your assets
    title.innerText = "Nice try! 😜";
    
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.max(10, Math.min(x, window.innerWidth - 100)) + 'px';
    noBtn.style.top = Math.max(10, Math.min(y, window.innerHeight - 50)) + 'px';

    // Grow Yes button
    let currentScale = parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    yesBtn.style.transform = `scale(${currentScale + 0.15})`;
}

// Mobile Compatibility: Catch the touch before it clicks!
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    handleNo();
});
noBtn.addEventListener('mouseover', handleNo);

function celebrate() {
    document.getElementById('btn-group').style.display = 'none';
    title.innerText = "I KNEW IT! ❤️";
    desc.innerHTML = "You're stuck with me forever now! I love you, <span>Tuntuni Pakhi</span>!";
    
    // Final Celebration Loop
    let finalGifs = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
    let i = 0;
    setInterval(() => {
        gif.src = finalGifs[i];
        i = (i + 1) % finalGifs.length;
    }, 2000);

    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}
