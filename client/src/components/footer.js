import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Overview</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#whyrecruitus'>WhyRecruitUS</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#Past'>PastRecruiters</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#statistics'>Statistics</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#ContactUs'>ContactUs</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer