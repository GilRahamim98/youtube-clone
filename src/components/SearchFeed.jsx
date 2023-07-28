import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box,Typography} from '@mui/material'

import {Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const SearchFeed = () => {
  const {searchTerm}=useParams();
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    const fetchVideos=async()=>{
      const data=await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items)
    }
    fetchVideos()

  },[searchTerm])

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            Search Results for: <span style={{ color: "#7d12ff" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed