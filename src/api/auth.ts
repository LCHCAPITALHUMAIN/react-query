import { apiRoutes } from '../routes';
import { api } from '../utils/api';
import { ProfileInterface } from '../interfaces/auth';
import { useFetch } from '../utils/reactQuery';

export const getTokenByPassword = (email: string, password: string) =>
  api.post<{ token: string }>(apiRoutes.getTokenByPassword, {
    email,
    password,
  });

export const useGetProfile = () => {
  const context = useFetch<{ user: ProfileInterface }>(
    apiRoutes.getProfile,
    undefined,
    { retry: false }
  );
  // eslint-disable-next-line
  console.log({context});
  return { ...context, data: context.data?.user };
};
