import http from "../components/AxiosConnectHTTP";

const getAllJobs = () => { return http.get("/jobs"); };

const getJob = id => { return http.get(`/jobs/${id}`); };

const createJob = data => { return http.post("/jobs", data); };

const updateJob = (id, data) => {  return http.put(`/jobs/${id}`, data); };

const removeJob = id => { return http.delete(`/jobs/${id}`); };

const removeAllJobs = () => { return http.delete(`/jobs`); };

const findByName = name => { return http.get(`/jobs?name=${name}`); };

export default { getAllJobs, getJob, createJob, updateJob, removeJob, removeAllJobs, findByName };

