import React, {useEffect, useState} from "react";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import JobServices from '../services/JobServices'
import BootstrapTable from 'react-bootstrap-table-next';
import Pagination from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import '../style/main_page.css'

const MainPage = () => {
    const [jobsList, setJobsList] = useState([]);

    const columns = [
        {dataField: 'job_id', text: "ID", sort: true, filter: textFilter()},
        {dataField: 'title', text: "Job Title", sort: true, filter: textFilter()},
        {dataField: 'category_id.job_description', text: "Job Description", sort: true},
        {dataField: 'category_id.position_level', text: "Level", sort: true},
    ]

    const paginator = Pagination ({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        hideSizePerPage: true
    });

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await JobServices.getAllJobs();
            setJobsList(res.data);
        }
        fetchPosts()
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <BootstrapTable
                keyField='id'
                bootstrap4
                columns={columns}
                data={jobsList}
                pagination={paginator}
                filter={filterFactory()}
            />
        </div>
    );
}
export default MainPage