let stage = 1;
const title = document.getElementById('main-title');
const desc = document.getElementById('main-description');
const gif = document.getElementById('display-gif');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// This function handles the "YES" or "Next" button clicks
function handleYes() {
    stage++;

    if (stage === 2) {
        // Stage 2: Energetic Message
        gif.src = "assets/2.gif";
        title.innerText = "Special Delivery! 💌";
        desc.innerHTML = "A little bird told me that <span>Sadia Khatun</span> is the most amazing wife in the world!";
        yesBtn.innerText = "Is that true? ✨";
    } 
    else if (stage === 3) {
        // Stage 3: Building Romance
        gif.src = "assets/3.gif";
        title.innerText = "Wait, look at me...";
        desc.innerHTML = "Every time I see your smile, my heart skips a beat. You are my <span>Tuntuni Pakhi</span> forever.";
        yesBtn.innerText = "Next... ❤️";
    } 
    else if (stage === 4) {
        // Stage 4: The Big Question
        gif.src = "assets/4.gif";
        title.innerText = "The Big Question";
        desc.innerHTML = "Sadia, will you make me the happiest man and be my <span>Valentine</span> forever?";
        yesBtn.innerText = "YES, I WILL! 💍";
        noBtn.classList.remove('hidden'); // Ensure No button is visible for the game
    } 
    else {
        // Stage 5: The Final Celebration
        celebrate();
    }
}

// This function handles the "NO" button (The Playful Part)
function handleNo() {
    // Change GIF to a "Shocked" or "Sad" one (GIF 5 or 6)
    gif.src = Math.random() > 0.5 ? "assets/5.gif" : "assets/6.gif";
    title.innerText = "Wait... what?! 😱";
    desc.innerText = "Sadia! You aren't supposed to click that! Try the red one! 😤";

    // Make the No button run away
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Advanced: Make the YES button grow bigger so she eventually has to click it!
    let currentScale = parseFloat(yesBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    yesBtn.style.transform = `scale(${currentScale + 0.2})`;
}

// Making the No button run away on Hover too!
noBtn.addEventListener('mouseover', handleNo);

// The Final Celebration Function
function celebrate() {
    // Hide the buttons for the grand finale
    document.getElementById('btn-group').style.display = 'none';
    
    title.innerText = "I KNEW IT! ❤️";
    desc.innerHTML = "You are mine forever! I love you more than words can say, my beautiful <span>Bird</span>!";

    // Loop through the celebration GIFs (7, 8, 9, 10) every 2 seconds
    let finalGifs = ["assets/7.gif", "assets/8.gif", "assets/9.gif", "assets/10.gif"];
    let i = 0;
    setInterval(() => {
        gif.src = finalGifs[i];
        i = (i + 1) % finalGifs.length;
    }, 2000);

    // Launch the Confetti Cannon!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffccd5']
    });
}
