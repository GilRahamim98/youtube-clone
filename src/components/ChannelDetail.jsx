import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos,ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const {id}=useParams();
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const fetchChannelDetailAndVideos=async()=>{
      const channelData=await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(channelData?.items[0])
      const videosData=await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(videosData?.items)
    }
    fetchChannelDetailAndVideos()
},[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(255,123,48,1) 25%, rgba(255,0,224,1) 50%, rgba(131,58,180,1) 75%, rgba(0,255,184,1) 100%)',
          border:'1px solid ',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail