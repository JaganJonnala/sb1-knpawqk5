export const APP_CONFIG = {
  name: 'ServicePro',
  description: 'Professional Services Marketplace',
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 10000,
  },
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
  },
  booking: {
    minAdvanceHours: 2,
    maxAdvanceDays: 30,
  },
};