import React from 'react';
import ChanleCard from './Chanlecard';
import SearchRow from './SearchRow';
import './Search.css';
import NotesIcon from '@material-ui/icons/Notes';
import SRowData from './SearchRow.json';
import chanelData from './ChanelData.json';
import Datas from './Mosh.json';
import NasimDta from './Nsim.json';
import { Helmet } from 'react-helmet';

let SRowsClaver =[];
for(let x=0; x<12; x++){
  SRowsClaver.push(<SearchRow thumnil={SRowData[x].thumnil}title={SRowData[x].title} view={SRowData[x].view} time={SRowData[x].time} chanleImg={SRowData[x].chanleImg} chanleName={SRowData[x].chanleName} des={SRowData[x].des} />);
}


const mosh = Datas.map((fm)=> <SearchRow thumnil={fm.thumnil} title={fm.title} view={fm.view} time={fm.time} chanleImg={fm.chanleImg} chanleName={fm.chanleName} des={fm.des} />);

const nasim = NasimDta.map((fm)=> <SearchRow thumnil={fm.thumnil} title={fm.title} view={fm.view} time={fm.time} chanleImg={fm.chanleImg} chanleName={fm.chanleName} des={fm.des} />);

const Search = (props) => {




  const {q} = props.match.params;
  if(q=='claverprogrammer' || q=='reactjs clone' || q=='rafiqazi'){

    return(
      <div className='search__page'>
        <Helmet>
        <title>Claverprogrammer Result My You-tube clone</title>
      </Helmet>
        <div className='filter_btn'>
        <NotesIcon/>
        <h2>FILTERS</h2>
        </div>
        <h4 className="latest">Latest From {q}</h4>

       {<ChanleCard thumnil={chanelData[0].Thumnil} ChanleName={chanelData[0].ChanleName} subscribe={chanelData[0].subscribe} view={chanelData[0].view} des1={chanelData[0].des1} des2={chanelData[0].des2} des3={chanelData[0].des3} des4={chanelData[0].des4} des5={chanelData[0].des5} subscriber={chanelData[0].subscriber} Subscribe />}

        {SRowsClaver}
      </div>
    );

  }else if(q=='mosh'||q=='mosh hamidani' ||q=='programming with mosh'){

    return(
      <div className='search__page'>
          <Helmet>
        <title>Mosh Result My You-tube clone</title>
      </Helmet>
        <div className='filter_btn'>
        <NotesIcon/>
        <h2>FILTERS</h2>
        </div>
        <h4 className="latest">Latest From {q}</h4>
        {<ChanleCard thumnil={chanelData[1].Thumnil} ChanleName={chanelData[1].ChanleName} subscribe={chanelData[1].subscribe} view={chanelData[1].view} des1={chanelData[1].des1} des2={chanelData[1].des2} des3={chanelData[1].des3} des4={chanelData[1].des4} des5={chanelData[1].des5} subscriber={chanelData[1].subscriber}  Subscribe/>}

        {mosh}

      </div>
    );

  }else if(q=='freelancer nasim'||q=='nasim vai' ||q=='nasim'){

    return(
      <div className='search__page'>
          <Helmet>
        <title>Freelancer Nasim Result My You-tube clone</title>
      </Helmet>
        <div className='filter_btn'>
        <NotesIcon/>
        <h2>FILTERS</h2>
        </div>
        <h4 className="latest">Latest From {q}</h4>
        {<ChanleCard thumnil={chanelData[2].Thumnil} ChanleName={chanelData[2].ChanleName} subscribe={chanelData[2].subscribe} view={chanelData[2].view} des1={chanelData[2].des1} des2={chanelData[2].des2} des3={chanelData[2].des3} des4={chanelData[2].des4} des5={chanelData[2].des5} subscriber={chanelData[2].subscriber}  Subscribe/>}

        {nasim}

      </div>
    );

  }else{
    return(
      <div className="not_found">
          <Helmet>
        <title>Nothing found in  My You-tube clone</title>
      </Helmet>
        <h1>Please Give Valied key. Like</h1>
        <ul>
          <li>claverprogrammer</li>
          <li>mosh</li>
          <li>freelancer nasim</li>
        </ul>
      </div>
    );
  }


};

export default Search;

// 

// if(q==="fm"){
//   return (<h1>Wlcome Fm</h1>);
// }else{
//   return (<h1>Unknown</h1>);

// }


