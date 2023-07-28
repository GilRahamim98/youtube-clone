import {Stack} from '@mui/material';

import { categories } from '../utils/constants';


const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack direction='row' sx={{overflowY: "auto",height: { xs: "auto", md: "95%" },flexDirection: { md: "column" }}}>
        {categories.map(category=>(
            <button 
              className='category-btn' 
              key={category.name} 
              style={{backgroundColor:category.name===selectedCategory&& '#7d12ff',color:'white'}}
              onClick={()=>setSelectedCategory(category.name)}>
                <span style={{color:category.name===selectedCategory?'white':'#7d12ff',marginRight:'15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
            </button>
        ))}

    </Stack>
  )
}

export default SideBar