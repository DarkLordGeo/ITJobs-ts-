import { useQuery } from "@tanstack/react-query"
// import { dataFn } from "../api/fetchData"
import fetchJobsData from "../api/fetchJobsData"
import { type IData } from "../interfaces/data.interface"

export const useFetchJobsData = () => {
    const { data, isLoading, error } = useQuery<IData[]>({
        queryKey: ['data'],
        queryFn: fetchJobsData,
    })
    return { data, isLoading, error }
}
