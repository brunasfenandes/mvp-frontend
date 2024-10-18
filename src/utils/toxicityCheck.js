import axios from 'axios';
/**
 * Checks if a given message is toxic by making a request to the backend.
 *
 * @param {string} message - The message to evaluate.
 * @returns {Promise<boolean>} - Returns true if the message is toxic, otherwise false.
 */
async function isToxic(message) {
    try {
        const response = await axios.post(`http://localhost:8080/isMessageToxic`, { message });
        return response.data.isToxic;
    } catch (error) {
        //default to non-toxic if there's an error
        return false;
    }
}

export default isToxic;