import { dataFn } from "./fetchData";

export default async function fetchJobData() {
    const res = await dataFn.get('jobs_data')
    return res.data
}   