/* eslint no-unused-vars : 0 */

// Note: disabling eslint unused var rule for this file
// to match function signatures for both MockApiService and
// ApiService class
import { getMemberProfile } from './mockResponses';

export class MockApiService {
  getMemberProfile(id) {
    return Promise.resolve(getMemberProfile);
  }
}
