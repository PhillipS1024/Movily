import React from 'react';
import Movies from '../movie/Movies';
import Search from '../movie/Search';

const Index = () => {
  return (
   <React.Fragment>
        <Search />
       <Movies />
   </React.Fragment>
  )
}

export default Index;
