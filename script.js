// URL to the raw text file in your GitHub repository
const fileUrl = 'https://raw.githubusercontent.com/reginaAbdu/lbslots/main/logs.txt';

// Function to fetch the text file and update the <p> element
async function loadTextFile() {
    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        document.getElementById('text-content').innerText = text;
    } catch (error) {
        document.getElementById('text-content').innerText = 'Error loading text file';
        console.error('Error fetching text file:', error);
    }
}

// Load the text file when the page loads
window.onload = loadTextFile;
