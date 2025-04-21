// utils.js
function formatVietnamTime(timestamp) {
    const date = new Date(timestamp);

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Sử dụng định dạng 24 giờ
        timeZone: 'Asia/Ho_Chi_Minh' // Đảm bảo sử dụng múi giờ Việt Nam (UTC+7)
    };

    const vietnamTime = new Intl.DateTimeFormat('vi-VN', options).format(date);

    return vietnamTime.toString();
}

module.exports = { formatVietnamTime };
