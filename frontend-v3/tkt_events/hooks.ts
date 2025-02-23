// const useEventsList = () => {
//   const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: ['events'],
//     queryFn: () => fetchEvents(),
//   })
//   return {
//     events: data,
//     isLoading,
//     isError,
//     isSuccess,
//   }
// }

// const useSchoolList = listHook<T_GetSchoolsListResponse>(
//   'http://127.0.0.1:8000/api/schools',
//   axiosGet,
//   useAuthResources,
// )