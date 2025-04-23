const fs = require('fs');

function formatVietnamTime(timestamp) {
    if (typeof timestamp === 'string') {
        timestamp = Number(timestamp);
    }

    if (isNaN(timestamp) || timestamp <= 0) {
        console.error('Invalid timestamp:', timestamp);
        return 'Invalid time';
    }

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
        console.error('Invalid date:', date);
        return 'Invalid time';
    }

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24-hour format
        timeZone: 'Asia/Ho_Chi_Minh',
    };

    try {
        return new Intl.DateTimeFormat('vi-VN', options).format(date);
    } catch (error) {
        console.error('Intl.DateTimeFormat error:', error.message);
        return 'Invalid time';
    }
}
function isSuspicious(clientId) {
    const length = clientId.length;

    const isRandomLikeLength = length >= 16 && length <= 32;

    const hasUpper = /[A-Z]/.test(clientId);
    const hasLower = /[a-z]/.test(clientId);
    const hasDigit = /\d/.test(clientId);
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(clientId);

    // Tính tỉ lệ chữ số
    const digitRatio = (clientId.match(/\d/g) || []).length / length;
    const upperRatio = (clientId.match(/[A-Z]/g) || []).length / length;
    const lowerRatio = (clientId.match(/[a-z]/g) || []).length / length;

    return (
        isRandomLikeLength &&
        isAlphanumeric &&
        hasUpper &&
        hasLower &&
        hasDigit &&
        digitRatio < 0.5 &&
        upperRatio < 0.6 &&
        lowerRatio < 0.6
    );
}
module.exports = { formatVietnamTime, isSuspicious };