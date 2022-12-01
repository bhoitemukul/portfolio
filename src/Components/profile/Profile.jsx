import React, { useState, useEffect, Component } from "react";
import "./profile.scss";
import bag from "../../Assets/bag.png";
import Univercity from "../../Assets/univercity.png";
import Cards from "../Cards/Cards";
import Fooddiieecard from "../Fooddiieecard/Fooddiieecard";
import 'aos/dist/aos.css';


function Profile() {


    const [isShow, setisShow] = useState(false)
    const handleClick = () => {
        setisShow(!isShow);
    }

    const [isShown, setisShown] = useState(false)
    const handlefoodClick = () => {
        setisShown(!isShown);
    }

    return (
        <>
            <div className="profile-main-container" id="exp">
                <div className="tagline">
                    <div className="icon-container">
                        <div className="icon"><img src={bag} alt="" /></div>
                    </div>
                    <div className="profile-tag">Experiance</div>
                </div>
                <div className='table-container'>
                    <div className='table-row'>
                        <div className='table-tag'> Project</div>
                        <div className='table-tag'>About</div>
                        <div className='table-tag'>Preview</div>
                    </div>
                    <div className='table-row'>
                        <div className='table-data'> AQS</div>
                        <div className='table-data'>It's Enterprises</div>
                        <div className='table-data' onClick={handleClick}> <a>View</a></div>
                        {isShow && <Cards handleClick={handleClick} />}
                    </div>
                    <div className='table-row'>
                        <div className='table-data'> Fooddiiee</div>
                        <div className='table-data'>It's digital menu</div>
                        <div className='table-data' onClick={handlefoodClick}> <a>view</a></div>
                        {isShown && <Fooddiieecard handleClick={handlefoodClick} />}
                    </div>
                </div>
            </div>
            <div className="profile-main-container" id="edu">
                <div className="tagline">
                    <div className="icon-container">
                        <div className="icon"><img src={Univercity} alt="" /></div>
                    </div>
                    <div className="profile-tag">Education</div>
                </div>
                <div className='table-container'>
                    <div className='table-row'>
                        <div className='table-tag'> Degree</div>
                        <div className='table-tag'>Year</div>
                        <div className='table-tag'>Percentage</div>
                    </div>
                    <div className='table-row'>
                        <div className='table-data'> SSC</div>
                        <div className='table-data'>2013</div>
                        <div className='table-data'> <a href="">view</a></div>
                    </div>
                    <div className='table-row'>
                        <div className='table-data'> HSC</div>
                        <div className='table-data'>2018</div>
                        <div className='table-data'> <a href="">view</a></div>
                    </div>
                    <div className='table-row'>
                        <div className='table-data'> ITI</div>
                        <div className='table-data'>2016</div>
                        <div className='table-data'> <a href="">view</a></div>
                    </div>
                </div>
            </div>
            <div className="under-line"></div>
        </>
    )
}
export default Profile;
