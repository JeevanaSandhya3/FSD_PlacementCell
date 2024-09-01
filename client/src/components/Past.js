import React from 'react';
import './Past.css';
import { FaAcquisitionsIncorporated, FaAlignCenter } from 'react-icons/fa';
//SOFTWARE
import amazon from './images/amazon-3.jpg'
import dell from './images/delloite.png'
import google from './images/google.png'
import tes from './images/tesco.png'
import sam from './images/samsung.png'

//HARDWARE
import math from './images/math.jpeg'
import qual from './images/qual.png'
import niv from './images/niv.jpeg'
import int from './images/intel.png'
import cis from './images/cisco.png'

//BIO INFORMATICS
import cell from './images/cell.png'
import nov from './images/nov.png'
import thermo from './images/thermo.png'
import tata from './images/tcs.png'
import cip from './images/cipla.png'

//STRUCTURAL DESIGN
import lt from './images/lt.png'
import essar from './images/essar.png'
import gmr from './images/gmr.png'
import itc from './images/itc.png'
import dlf from './images/dlf.png'


function Past() {
    return (
            <div className='Past' id='Past'>
                <div className="container">
                    <h2>Past Recruiters</h2>
                    <span className='line'></span>

                    <div className="content">
                        <div className='card'>
                        <div className='marquee-container'>
                            <h3 >SOFTWARE</h3>
                            <a href='https://www.amazon.jobs/en/teams/in' class='image-link'>
                            <img src={amazon} alt='AMAZON'/>
                            </a>
                            <a href='https://jobsindia.deloitte.com/' class='image-link'>
                            <img src={dell} alt='DELLOITE'/>
                            </a>
                            <a href='https://www.google.com/about/careers/applications/jobs/results/'class='image-link'>
                            <img src={google} alt='GOGGLE'/>
                            </a>
                            <a href='https://www.tesco-careers.com/technology-india/' class='image-link'>
                            <img src={tes} alt='TESCO'/>
                            </a>
                            <a href='https://www.samsung.com/in/about-us/careers/job-fields/' class='image-link'>
                            <img src={sam} alt='SAMSUNG'/>
                            </a>
                        </div>
                        </div>
                        <div className='card'>
                        <div className='marquee-container'>
                            <h3>HARDWARE</h3>
                            <a href='https://in.mathworks.com/company/jobs/opportunities.html' class='image-link'>
                            <img src={math} alt='MATHWROKS'/>
                            </a>
                            <a href='https://careers.qualcomm.com/careers' class='image-link'>
                            <img src={qual} alt='QUALCOMM'/>
                            </a>
                            <a href='https://www.nvidia.com/en-in/about-nvidia/careers/' class='image-link'>
                            <img src={niv} alt='NIVDIA'/>
                            </a>
                            <a href='https://jobs.intel.com/en/location/hyderabad-jobs/599/1269750-1254788-1269843/4'class='image-link'>
                            <img src={int} alt='INTEL'/>
                            </a>
                            <a href='https://www.cisco.com/c/en/us/about/careers.html' class='image-link'>
                            <img src={cis} alt='CISCO'/>
                            </a>
                        </div>
                        </div>
                        <div className='card'>
                        <div className='marquee-container'>
                            <h3>BIO INOFRMATICS</h3>
                            <a href='https://cellworks.life/company/careers' class='image-link'>
                            <img src={cell} alt='CELLWORKS'/>
                            </a>
                            <a href='https://www.novartis.com/in-en/careers/career-search' class='image-link'>
                            <img src={nov} alt='NOVARTIS'/>
                            </a>
                            <a href='https://jobs.thermofisher.com/global/en/india-jobs' class='image-link'>
                            <img src={thermo} alt='THERMOFISHER'/>
                            </a>
                            <a href='https://www.tcs.com/careers' class='image-link'>
                            <img src={tata} alt='TATA CONSULATNCY'/>
                            </a>
                            <a href='https://www.cipla.com/careers' class='image-link'>
                            <img src={cip} alt='CIPLA'/>
                            </a>
                        </div>
                        </div>
                        <div className='card'>
                        <div className='marquee-container'>
                            <h3>STRUCTURAL DESIGN</h3>
                            <a href='https://www.larsentoubro.com/corporate/careers/' class='image-link'>
                            <img src={lt} alt='LARSEN AND TURBO'/>
                            </a>
                            <a href='https://www.essar.com/careers/' class='image-link'>
                            <img src={essar} alt='ESSAR'/>
                            </a>
                            <a href='https://careers.gmrgroup.in/' class='image-link'>
                            <img src={gmr} alt='GMR'/>
                            </a>
                            <a href='https://www.itcportal.com/careers/index.aspx' class='image-link'>
                            <img src={itc} alt='ITC'/>
                            </a>
                            <a href='https://www.dlf.in/career-page' class='image-link'>
                            <img src={dlf} alt='DLF'/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
    );
}

export default Past;