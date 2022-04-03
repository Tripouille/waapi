import axios from 'axios';

export const getMessageFromError = (error: unknown): string =>
  axios.isAxiosError(error) && error.response
    ? `Server error: ${error.response.data.message ?? error.response.status}`
    : 'Unknown error';
