import { QueryClient } from '@tanstack/react-query';

const TIME_IN_SECONDS_TO_REFETCH = 1000 * 60 * 30; // secunds
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: TIME_IN_SECONDS_TO_REFETCH,
    },
  },
});
