const tips = [
    "Fresh water should be available at all times.",
    "Regular play reduces anxiety in pets.",
    "Check for ticks after every outdoor walk.",
    "A healthy coat starts with good nutrition!",
    "Brushing teeth can add years to a pet's life."
];

function createHub() {
    const name = document.getElementById('petName').value;
    const type = document.getElementById('petType').value;
    const date = document.getElementById('vetDate').value;

    if(!name || !type) {
        alert("Arey! Fill the details first!");
        return;
    }

    document.getElementById('resName').innerText = name;
    document.getElementById('resType').innerText = type;
    
    // Pick a random tip from the array
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('dailyTip').innerHTML = `<strong>Petopia Hub Tip:</strong> ${randomTip}`;

    // Make the passport visible
    document.getElementById('passport').style.display = 'block';
}

function logMood(mood) {
    const petName = document.getElementById('petName').value || "Your pet";
    document.getElementById('moodStatus').innerText = `${petName} is feeling ${mood} today!`;
}
