import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import DashSideBar from '../components/DashSideBar'
import DashProfile from '../components/DashProfile'


export default function Dashboard() {
  const location=useLocation();
  const [tab,setTab]=useState('')
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl=urlParams.get('tab')
  if(tabFromurl){
    setTab(tabfromUrl);
  }

  },[location.search]);
  return (<div>
    <div className=''>
      {/*Sidebar*/}
    <DashSidebar/>
    </div>
    {/*profile..*/}
    {tab==='profile'&& <DashProfile/>}

    </div>
  )
}
