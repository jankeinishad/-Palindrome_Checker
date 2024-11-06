document.getElementById('check-btn').addEventListener('click', checkPalindrome);

function checkPalindrome() {
    const inputText = document.getElementById('text-input').value;

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase();
    
    const reversedText = cleanedText.split('').reverse().join('');
    const result = document.getElementById('result');

    if (cleanedText === reversedText) {
        result.textContent = `${inputText} is a palindrome`;
    } else {
        result.textContent = `${inputText} is not a palindrome`;
    }
}
