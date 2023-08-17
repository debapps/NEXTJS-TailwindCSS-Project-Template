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
