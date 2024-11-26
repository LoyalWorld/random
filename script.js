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

async function copyKey() {
    const keyInput = document.getElementById('generatedKey');
    const copyBtn = document.querySelector('.copy-btn');
    
    if (keyInput.value) {
        try {
            await navigator.clipboard.writeText(keyInput.value);
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }
}