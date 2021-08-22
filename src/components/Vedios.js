import React,{useState} from 'react';
import Vediocard from './Vediocard';
import './Vedio.css';
import Data from './Data.json';


const Vedios = () => {

    const vedioData = Data.map((fm)=>  <Vediocard Thumnil={fm.Thumnil} title={fm.title} chanleimg={fm.chanleimg} chanlename={fm.chanlename} view={fm.view} time={fm.time} />);

    return (
        <div className="my_vedio">
            {vedioData}

            <Vediocard Thumnil='https://i.ytimg.com/vi/RGdg-TCmldY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9sMfR-9p1uw3u9KBM0fqYge46oA' title="How I learned Flutter in 7 Days" chanleimg='https://yt3.ggpht.com/ytc/AAUvwnhizkED8kP0qOlFqfeKXW8m1KekpyXkqMG3Gbt7Bw=s68-c-k-c0x00ffffff-no-rj' chanlename='Kenny Gunderman' view='29k' time='5 days ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/ndRcfgUHG1c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuPbcnEgc7C8eY9Rs-63v0r2g9Eg' title="রমাদানের প্রস্তুতি | Preparation for Ramadan | মিজানুর রহমান আজহারি" chanleimg='https://yt3.ggpht.com/ytc/AAUvwniGYk7_FcsjFq3e9FnbVfA_1-5RirEHiMYmV6kB=s68-c-k-c0x00ffffff-no-rj' chanlename='Mizanur Rahman Azhari' view='220k' time='1 day ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/cF3pIMJUZxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtv9r9S-n6KJNL1ox9i_ujafPGRA' title="🔴 Build a COVID-19 Tracker with REACT JS for Beginners (React Hooks and Material UI)" chanleimg='/images/chanelimgjpg.jpg' chanlename='Claverprogrammer' view='179k' time='Streamed 8 mounth ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/3cR7Q3lVsLE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXtoT7XUjf5eUEIclUVVF-SFa3Hg' title="Bachelor Point | Season 3 | EPISODE- 42 | Kajal Arefin Ome | Dhruba Tv Drama Serial" chanleimg='https://yt3.ggpht.com/ytc/AAUvwngxkvxZr7Ac7rKEIZIBvALLpWUULCmQAPZeJx1Mcg=s68-c-k-c0x00ffffff-no-rj' chanlename='Dhruba Tv' view='2.4M' time='2 mounth ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/lf9TQLLllR4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSdL4HcAm3r3EIYmU64_fOps-crw' title="How to Study in Ramadan - A Doctor's Advice | 10 top tips" chanleimg='https://yt3.ggpht.com/ytc/AAUvwnghX1NrxBqssXRCIFyCY6cX6xvEE6gQ3jc_11Kt=s68-c-k-c0x00ffffff-no-rj' chanlename='Dr Shirin Syed' view='158k' time='11 mounth ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/jHdsTQoXoeQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-EeJFxVpfTGmEoDr2SN_3FtuyKQ' title="Allah Tera Ehsan | Noor e Ramazan  OST | Farhan Ali Waris, Qasim Ali Shah | Ramzan 2020  |Aplus| AP1" chanleimg='https://yt3.ggpht.com/ytc/AAUvwnjNTBpSmasSN2rAy28lrdImlh897jDnx--2YsCX7Q=s68-c-k-c0x00ffffff-no-rj' chanlename='Talk Whow Central' view='13M' time='Streamed 8 mounth ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/QNTeq4QdOsQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5wIhCC21Ok3Iiq_MuW7Y3XTeNTg' title="Top 20 CSS & Javascript Effects | March 2020" chanleimg='https://yt3.ggpht.com/ytc/AAUvwngFCKugZwen-81xq0K_0tSU6HQZsvjQ26xsQzO7zg=s68-c-k-c0x00ffffff-no-rj' chanlename='Online Tutorials' view='799k' time='1 year ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/Wx2XWmiAVkQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6bMGim44HS3oGQ1PIluFW3_mKQw' title="React JS Tutorial Bangla | Part 43 WebStrom for React The smartest JavaScript IDE" chanleimg='https://yt3.ggpht.com/ytc/AAUvwngurxMpswvW_5sJVNwMWIUyxo_hR2k-PFk1cXaR=s68-c-k-c0x00ffffff-no-rj' chanlename='Rabbil Hasan' view='3.3k' time='1 year ago'/>

            <Vediocard Thumnil='https://i.ytimg.com/vi/EHK4ufkKNzU/hq720_live.jpg?sqp=CPjo2YMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgVkMcEEsdWfdzUDOC-hteStYcYA' title="سورة الكهف (كاملة) أجمل تلاوة في يوم الجمعة المباركة راحة وسكينة وهدوء ❤️ تلاوه هادئة تريح الاعصاب" chanleimg='https://yt3.ggpht.com/ytc/AAUvwniVeIKHdjmAoebQKV7wBdNyQfJsAsyOFummXYvV=s68-c-k-c0x00ffffff-no-rj' chanlename='Al!uranHD' view='1.4k watching' time="LIVE NOW"/> */}
        </div>
    );
};

export default Vedios;