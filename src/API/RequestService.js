import axios from "axios";

export default class RequestService {
    static async getAll() {
        return await axios.get('/api/requests', {});
    }
}