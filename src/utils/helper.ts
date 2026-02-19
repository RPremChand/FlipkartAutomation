// Utility helper functions

/**
 * Get the current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS
 * @returns {string} Formatted date and time string
 */
const getCurrentDateTimeUTC = () => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
};

module.exports = {
    getCurrentDateTimeUTC,
};