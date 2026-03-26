import { dataFn } from "./fetchData";

export default async function fetchJobData(id: number) {
    const res = await dataFn.get(`jobs/${id}`)
    return res.data
}