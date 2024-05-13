import React from 'react'
import { useState } from 'react'
import Table from './Table';
import "../src/Pagination.css";
import { useEffect } from 'react';

function Pagination() {
    const [user,setUser] = useState([])
    const [emplist,setemplist] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const API_URL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

    

    const getApiData = (min,max)=>{
        try{
            fetch(API_URL)
            .then(res=>res.json())
            .then(data=>setUser(data))
            .catch(err=>console.error('error',"failed to fetch data"))
        }
        catch(err){
            console.log(err)
        }
    }

    const filterData = (min,max)=>{
        setemplist(user.filter(val=>Number(val.id) >= min && Number(val.id) <= max))
    }

    
    useEffect(()=>{
        getApiData()
    },[])

    useEffect(() => {
        filterData(1,10);
    }, [user]);


    

    const handleNext =()=>{
        if(currentPage < Math.floor(user.length%10)-1){
            setCurrentPage(pre=>pre+1)
            let start =10*currentPage+1;
            let end =10*(currentPage+1);
            filterData(start,end)
        }
    }

    const handlePrevious =()=>{
        if(currentPage >1){
            setCurrentPage(pre=>pre-1)
            let start =(10*(currentPage-2))+1;
            let end =10*(currentPage-1);
            filterData(start,end)
        }
        
    }

    return (
        <div className='main'>
            <h1>Employee Data Table</h1>
            <Table emps={emplist} />
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button>{currentPage}</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Pagination