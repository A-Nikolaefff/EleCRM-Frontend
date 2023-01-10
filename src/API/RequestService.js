import axios from "axios";

export default class RequestService {
    static async getAll(entriesPerPage = 20, currentPage = 1, filter) {
        return await axios.get('/api/requests', {
            params: {
                entriesPerPage: entriesPerPage,
                currentPage: currentPage,
                sort: filter.sort,
                query: filter.query
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