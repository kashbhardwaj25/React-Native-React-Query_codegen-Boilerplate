import {useQueryClient} from '@tanstack/react-query';
import {MeQuery, useMeQuery} from '../services/api/fifoServer';

export const useMeQueryData = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(useMeQuery.getKey()) as MeQuery;

  return {currentUserDetails: data};
};
