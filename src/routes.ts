export const apiRoutes = {
  getTokenByPassword: 'https://oauth.inpixio.com/api/token',
  getProfile: 'https://myaccount.inpixio.com/account/profile/?',
  getUserList: '/api/getUserList',
  appointment: '/api/appointment/:id',
  getServices: '/api/getServices',
  getCarDetail: '/api/getCarDetail/:id',
  getInsurance: '/api/getInsurance/:id',
  job: '/api/job/:id?',
};

export const pageRoutes = {
  main: '/',
  auth: '/auth',
  appointment: '/appointment/:id',
};
