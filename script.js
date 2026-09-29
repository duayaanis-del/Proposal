// Function to switch between screens
function nextScreen(screenNumber) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the target screen
    const targetScreen = document.getElementById(`screen-${screenNumber}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Function to handle opening different gift/surprise contents
function openGift(type) {
    const contentDiv = document.getElementById('gift-content');
    
    if (type === 'memories') {
        contentDiv.innerHTML = `
            <h3>Our Favorite Memory 📸</h3>
            <p>Every single moment I spend with you feels like magic. Your smile literally brightens up my entire world! and i look forward to make some great memories with you.</p>
        `;
    } else if (type === 'reasons') {
        contentDiv.innerHTML = `
            <h3>Why I Adore You 💖</h3>
            <p>Why I Adore You 💖

I adore you for so many little reasons that sometimes I don’t even know where to begin. I love your kindness, your beautiful laugh, and the way you genuinely care about the little things. I love how you can make an ordinary moment feel special just by being there.

You have this amazing way of making me smile without even trying, and somehow, whenever I’m with you, everything just feels a little better. You make me feel understood, appreciated, and incredibly lucky to have you in my life.

Most of all, I adore you simply for being yourself. You’re one of those people who makes life brighter just by being around, and I’m truly grateful for every memory, every laugh, and every moment we share. 💖
</p>
        `;
    } else if (type === 'proposal') {
        contentDiv.innerHTML = `
            <h3>The Big Question 💍</h3>
            <p>You mean everything to me. So I have to ask...<br><br><b>Will you do me the absolute honor of being my girlfriend?</b> ❤️</p>
        `;
    }

    // Move to Screen 3 to display the content
    nextScreen(3);
}