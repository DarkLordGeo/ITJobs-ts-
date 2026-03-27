import { dataFn } from "./fetchData";

export default async function fetchJobsData() {
    const res = await dataFn.get('jobs')
    if (!res.data) {
        throw ("error")
    }
    return res.data
}   