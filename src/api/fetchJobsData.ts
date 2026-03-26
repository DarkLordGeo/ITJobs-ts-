import { dataFn } from "./fetchData";

export default async function fetchJobsData() {
    const res = await dataFn.get('jobs')
    return res.data
}   