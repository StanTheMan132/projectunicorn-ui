import { HttpClient } from '../http/HttpClient';

export class ApiService {
  getMemberProfile(id) {
    return HttpClient.get(`/members/${id}`);
  }
}
