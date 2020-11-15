import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Title from '../../Components/Title/Title';
import Loading from '../../Components/Loading/Loading';
import "./tabs.css";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function Tabs() {
  const [loading,setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);
  const fetchJobs = async () => {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
  }
  
  useEffect(()=> {
      fetchJobs();
  },[])

  if(loading) {
    return <Loading />
  }

  const {company,dates,duties,title} = jobs[value];

  return (
    <main>
      <section className="section">
         <Title title="Experience"/>
            <div className="jobs-center">
                <div className="btn-contanier"> 
                  {jobs.map((item,index) =>{
                    return <button 
                              onClick={ () => setValue(index) }
                              key={item.id} 
                              className={`job-btn ${index === value && 'active-btn'}`} >
                              {item.company}
                            </button>
                  })}
                </div>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <article className="job-info">
                  {duties.map((duty,index)=> {
                    return <div key className="job-desc"> 
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                  })}
                </article>
            </div>
    </section>
    </main>
    
  )
}

export default Tabs;