import axios from "axios";

export default class RequestService {
    static async getAll(limit = 20, page = 1) {
        return await axios.get('/api/requests', {
            params: {
                limit: limit,
                page: page,
                sort: '-number',
            }
        });
    }
    static async Create(createRequestDto) {
        return await axios.post('/api/requests', createRequestDto);
    }
}