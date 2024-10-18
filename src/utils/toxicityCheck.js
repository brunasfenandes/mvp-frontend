import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Checks if a given message is toxic by making a request to the backend.
 *
 * @param {string} message - The message to evaluate.
 * @returns {Promise<boolean>} - Returns true if the message is toxic, otherwise false.
 */
async function isToxic(message) {
    try {
        const response = await axios.post(`http://localhost:8080/isMessageToxic`, { message });
        if (response.data.isToxic) {
            toast.error('Your chat message was toxic and could be harmful to others. Please be respectful and kind.');
        }
        return response.data.isToxic;
    } catch (error) {
        console.error('Error checking toxicity:', error);
        // In case of an error, default to non-toxic
        return false;
    }
}

export default isToxic;