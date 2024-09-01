import React from 'react'
import './Overview.css'
import img1 from './images/logo1.jpeg'

const OverView =()=>{
    return(
        <>
            <div className='Container1'>
                <div className='boxStyle'>
                    <h1>Open Doors to Your Future: Welcome to our Placement Portal</h1><br></br>
                    <h3 className='ele1'>Welcome to CBIT Placement cell.</h3>
                    <h3 className='ele2'>IT operates with a prime objective of creating career opportunities for promising CBIT students in reputed<br></br> 
                    corporate organizations</h3>
                </div>

                <div className='BoxStyle' id='overView'>
                    <div>
                        <div className="shadow-lg container subBoxStyle">
                            <div className="mx-3 "><h3>Academic Facilities</h3></div><br></br>
                            <div className="mx-3"><p>State-of-the-art classrooms and laboratories Well-stocked library with a wide range of resources Modern computer labs with access to the latest software and hardware Dedicated career counseling center to help students prepare for their careers Research centers and centers of excellence in various fields Student support services, such as financial aid, housing, and health care...</p></div>
                            <div className="mx-3"><button className="btn btn-primary">see more</button></div>
                        </div>
                        <div className="shadow-lg subBoxStyle">
                            <div className="mx-3"><h3>Research & Development center</h3></div><br></br>
                            <div className="mx-3"><p>The R&E Hub, with its State-of-the-Art Infrastructure, helps to promote Research and Innovations amongst the Faculty and Students by identifying new Research Areas, developing Projects leading to Publications, Products, Innovations and Start-Ups. All research activities are being streamlined to make a mark in ‘Make in India’ concept of Indian Government...</p></div>
                            <div className="mx-3"><button className="btn btn-primary">see more</button></div>
                        </div>
                    </div>

                    <div className="shadow-lg subBoxStyle2 container">
                        <div className="mx-3"><h3>Departments & Programs at CBIT</h3></div><br></br>
                        <div className="mx-3"><p>In addition to being renowned for its demanding academic programs, Chaitanya Bharathi Institute of Technology (CBIT) is a highly regarded educational institution in India because of its well defined course content which will not help students to be ready for their future skills but also have separate study sessions and mentoring support for their guidance and well enhanced labs for building projects.</p></div>
                        <div className="mx-3"><button className="btn btn-primary">see more</button></div>
                    </div>

                    <div className="container">
                        <div className="shadow-lg mx-1 my-1 Brochure" >
                            <ul className='Brochureul'>
                                <li className='listStyle1'><img className='imgStyle' src={img1} alt="check internet"></img>Placement Brochure 2023-2024</li>
                                <li className='listStyle1'><img className='imgStyle' src={img1} alt="check internet"></img>Placement Brochure 2022-2023</li>
                                <li className='listStyle1'><img className='imgStyle' src={img1} alt="check internet"></img>Placement Brochure 2021-2022</li>
                                <li className='listStyle1'><img className='imgStyle' src={img1} alt="check internet"></img>Placement Brochure 2020-2021</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OverView