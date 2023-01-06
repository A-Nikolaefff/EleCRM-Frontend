import axios from "axios";

export default class RequestService {
    static async getAll(limit = 20, page = 1) {
        return await axios.get('/api/requests', {
            params: {
                limit: limit,
                page: page,
                sort: '-id',
            }
        });
    }
    static async Create(createRequestDto) {
        return await axios.post('/api/requests', createRequestDto);
    }

    static async Update(updateRequestDto) {
        return await axios.put('/api/requests', updateRequestDto);
    }

    static async Delete(id) {
        return await axios.delete('/api/requests', {
          params: {
              id: id
          }
        });
    }
}