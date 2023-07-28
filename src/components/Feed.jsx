import {useState,useEffect} from 'react';
import {Stack,Box,Typography} from '@mui/material'

import {SideBar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    const fetchVideos=async()=>{
      const data=await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items)
    }
    fetchVideos()

  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{xs:"column",md:"row"}}}>
      <Box sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid white',px:{xs:0,md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'white'}}>
          Made by Gil Rahamim
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#7d12ff" }}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed