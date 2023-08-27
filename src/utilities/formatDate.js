// List of months.
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// List of week days.
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satureday",
];

// This function formats date into Mon DD, YYYY format.
export function getDateFormatted(date) {
    // Get the date object.
    const d = new Date(date);

    // Date formatting.
    const formatDate = `${
        months[d.getMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;

    return formatDate;
}

// This function gets the formated date like: Sunday, August 27, 2023. [Used by Clock]
export function getFormattedDate(date) {
    // Date formatting.
    const formatDate = `${weekdays[date.getDay()]}, ${
        months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;

    return formatDate;
}

// This function gets the formated time like: 08:49 AM/PM. [Used by Clock]
export function getFormattedTime(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let meridian = null;

    if (hour < 12) {
        meridian = "AM";
    } else {
        meridian = "PM";
        hour = hour - 12;
    }

    if (hour < 10) {
        hour = `0${hour}`;
    }

    if (minute < 10) {
        minute = `0${minute}`;
    }

    const formatTime = `${hour} : ${minute} ${meridian}`;
    return formatTime;
}
