import { useQuery } from "@tanstack/react-query"
// import { dataFn } from "../api/fetchData"
import fetchJobData from "../api/fetchJobData"
import { type IData } from "../interfaces/data.interface"

export const useFetchData = () => {
    const { data, isLoading, error } = useQuery<IData[]>({
        queryKey: ['data'],
        queryFn: fetchJobData
    })
    return { data, isLoading, error }
}
