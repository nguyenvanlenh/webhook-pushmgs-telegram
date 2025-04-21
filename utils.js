function formatVietnamTime(timestamp) {
    // Kiểm tra nếu timestamp là chuỗi, chuyển nó thành số
    if (typeof timestamp === 'string') {
        timestamp = Number(timestamp);
    }

    // Kiểm tra xem timestamp có phải là số và hợp lệ không
    if (isNaN(timestamp) || timestamp <= 0) {
        console.error("Invalid timestamp:", timestamp);
        return "Invalid time";
    }

    const date = new Date(timestamp);

    // Kiểm tra nếu đối tượng Date không hợp lệ
    if (isNaN(date.getTime())) {
        console.error("Invalid date:", date);
        return "Invalid time";
    }

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Sử dụng định dạng 24 giờ
        timeZone: 'Asia/Ho_Chi_Minh'
    };

    const vietnamTime = new Intl.DateTimeFormat('vi-VN', options).format(date);

    return vietnamTime.toString();
}


module.exports = { formatVietnamTime };
