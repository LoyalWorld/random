function generateRandomDigits(length) {
    return Math.floor(Math.random() * Math.pow(10, length))
        .toString()
        .padStart(length, '0');
}

function generateRandomChars(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function getCurrentSeconds() {
    return new Date().getSeconds().toString().padStart(2, '0');
}

function generateKey() {
    const prefix = 'MAA';
    const digits = generateRandomDigits(7);
    const randomChars = generateRandomChars(10);
    const seconds = getCurrentSeconds();
    
    const key = `${prefix}-${digits}-${randomChars}-${seconds}`;
    document.getElementById('generatedKey').value = key;
}

function copyKey() {
    const keyInput = document.getElementById('generatedKey');
    const copyBtn = document.querySelector('.copy-btn');
    
    if (keyInput.value) {
        // Select the text
        keyInput.select();
        keyInput.setSelectionRange(0, 99999); // For mobile devices
        
        // Update button state to guide user
        copyBtn.textContent = 'Use Ctrl+C/⌘+C';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    }
}
