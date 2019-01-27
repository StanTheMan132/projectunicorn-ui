import { ApiService } from './ApiService';
import { MockApiService } from '../mockServices/MockApiService';

export class ServiceResolver {
  constructor() {
    this.useMock = true;
  }

  ApiResolver() {
    return this.useMock ? new MockApiService() : new ApiService();
  }
}
