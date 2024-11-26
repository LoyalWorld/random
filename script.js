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

function getTimeComponents() {
    const now = new Date();
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    
    // Create array of time components and shuffle them
    const timeComponents = [seconds, hours, month];
    for (let i = timeComponents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [timeComponents[i], timeComponents[j]] = [timeComponents[j], timeComponents[i]];
    }
    
    return timeComponents.join('');
}

function generateKey() {
    const prefix = 'MAA';
    const digits = generateRandomDigits(7);
    const randomChars = generateRandomChars(10);
    const timeString = getTimeComponents();
    
    const key = `${prefix}-${digits}-${randomChars}-${timeString}`;
    document.getElementById('generatedKey').value = key;
}
