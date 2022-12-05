import React from 'react'
import ReactDOM from 'react-dom/client'
import profilePic from '../assets/Headshot_2020.jpg';

const Info = () => {
    return (
        <div className="info">
            <img src={profilePic} alt="picture of individual on business card" width="317px"/>
            <div className="info__text-details">
                <h1 className="info__name">George Fincher</h1>
                <h3 className="info__position">Frontend Developer</h3>
                <p className="info__website">GrimFunk.portfolio</p>
                <div className="info__btns">
                    <a className='info__email-btn btn' href="mailto:finchergeorge1@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
                    <a className='info__linkedin-btn btn' href="https://www.linkedin.com/in/george-fincher-aa7869214/"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Info;