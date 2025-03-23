import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: '/data'
})

const useData = <T>(queryKey: string): UseQueryResult<T[], Error> => {
    return useQuery<T[]>({
        queryKey: [queryKey],
        queryFn: async () => {
            const res = await api.get<T[]>(`/${queryKey}.JSON`)
            return res.data
        },
        staleTime: 1000 * 60 * 60 * 24 * 30 //mesec dana stale time
    })
}

export default useData