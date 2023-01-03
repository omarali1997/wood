import React, { useState } from "react";
import './Main.css'
import Button from 'react-bootstrap/Button';
import img from '../../assets/7.png'
import african from '../../assets/9.png'
import european from '../../assets/10.png'
import malaysian from '../../assets/11.png'
import american from '../../assets/8.png'
import Soft from '../../assets/12.png'
import WOODPANELSEN from '../../assets/WOOD-PANELSEN.png'
import ImageGallery from '../FinishedPanels/Finished'
import Laminates from '../Laminates/Laminates'



function Main() {
    const [africanShow, setAfricanShow] = useState(false);
    const [europeanShow, setEuropeanShow] = useState(false);
    const [malaysianShow, setMalaysianShow] = useState(false);
    const [americanShow, setrAmericanShow] = useState(false);

    const [HardShow, setrHardShow] = useState(true);
    const [SoftShow, setrSoftShow] = useState(false);
    const [FinishedShow, setrFinishedShow] = useState(false);
    const [LaminatesShow, setrLaminatesShow] = useState(false);
    const [RawShow, setrRawShow] = useState(false);



    return (
        <div className='Main'>
            <div className='btn-div'>

                <Button className='btn' variant="dark" style={{ backgroundColor: '#7B513C', borderRadius: "15px", border: "0px" }} onClick={(e) => {
                    e.preventDefault();
                    setrHardShow(true);
                    setrSoftShow(false);
                    setrFinishedShow(false);
                    setrLaminatesShow(false);
                    setrRawShow(false);

                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}
                >
                    Hard Wood
                </Button>
                <Button className='btn' variant="dark" style={{ backgroundColor: '#7B513C', borderRadius: "15px", border: "0px" }} onClick={(e) => {
                    e.preventDefault();
                    setrHardShow(false);
                    setrSoftShow(true);
                    setrFinishedShow(false);
                    setrLaminatesShow(false);
                    setrRawShow(false);

                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}
                >
                    Soft Wood
                </Button>
                <Button className='btn' variant="dark" style={{ backgroundColor: '#7B513C', borderRadius: "15px", border: "0px" }} onClick={(e) => {
                    e.preventDefault();
                    setrHardShow(false);
                    setrSoftShow(false);
                    setrFinishedShow(true);
                    setrLaminatesShow(false);
                    setrRawShow(false);

                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}
                >
                    Finished Panels
                </Button>
                
                <Button className='btn' variant="dark" style={{ backgroundColor: '#7B513C', borderRadius: "15px", border: "0px" }} onClick={(e) => {
                    e.preventDefault();
                    setrHardShow(false);
                    setrSoftShow(false);
                    setrFinishedShow(false);
                    setrLaminatesShow(false);
                    setrRawShow(true);

                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}
                >
                    Raw Panels
                </Button>
                <Button className='btn' variant="dark" style={{ backgroundColor: '#7B513C', borderRadius: "15px", border: "0px" }} onClick={(e) => {
                    e.preventDefault();
                    setrHardShow(false);
                    setrSoftShow(false);
                    setrFinishedShow(false);
                    setrLaminatesShow(true);
                    setrRawShow(false);

                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}
                >
                    Laminates
                </Button>
            </div>


            {
                HardShow === true ? <div className='img'>
                    <img src={img} alt='1' useMap='#image-map' />


                    <map name="image-map">
                        <area alt="african" title="african" href="african" coords="100,440,300,300" shape="rect" onClick={(e) => {
                            e.preventDefault();
                            setAfricanShow(true);
                            setEuropeanShow(false);
                            setMalaysianShow(false);
                            setrAmericanShow(false);
                            setrHardShow(false);
                        }}></area>
                        <area alt="european" title="european" href="european" coords="250,580,500,430" shape="rect" onClick={(e) => {
                            e.preventDefault();
                            setAfricanShow(false);
                            setEuropeanShow(true);
                            setMalaysianShow(false);
                            setrAmericanShow(false);
                            setrHardShow(false);
                        }}></area>
                        <area alt="malaysian" title="malaysian" href="malaysian" coords="450,440,650,300" shape="rect" onClick={(e) => {
                            e.preventDefault();
                            setAfricanShow(false);
                            setEuropeanShow(false);
                            setMalaysianShow(true);
                            setrAmericanShow(false);
                            setrHardShow(false);
                        }}></area>
                        <area alt="american" title="american" href="american" coords="300,280,500,130" shape="rect" onClick={(e) => {
                            e.preventDefault();
                            setAfricanShow(false);
                            setEuropeanShow(false);
                            setMalaysianShow(false);
                            setrAmericanShow(true);
                            setrHardShow(false);
                        }}></area>

                    </map>
                </div> : ""

            }
            {
                SoftShow === true ? <div className='img'> <img src={Soft} alt='1' /></div> : ""

            }
            {
                FinishedShow === true ? <ImageGallery /> : ""

            }
            {
                LaminatesShow === true ? <Laminates/> : ""

            }
            {
                RawShow === true ? <div className='img'> <img src='https://wood.digit-tips.com/wp-content/uploads/2023/01/WhatsApp_Image_2023-01-03_at_15.22.01-removebg-preview.png' alt='1' /></div> : ""

            }
            {
                africanShow === true ? <div className='img'> <img src={african} alt='1' /><Button className="buttonBlack" variant="dark" onClick={(e) => {
                    setrHardShow(true);
                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}>Back To Hard Wood</Button></div> : ""

            }
            {
                europeanShow === true ? <div className='img'> <img src={european} alt='1' /><Button className="buttonBlack" variant="dark" onClick={(e) => {
                    setrHardShow(true);
                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}>Back To Hard Wood</Button></div> : ""

            }
            {
                malaysianShow === true ? <div className='img'> <img src={malaysian} alt='1' /><Button className="buttonBlack" variant="dark" onClick={(e) => {
                    setrHardShow(true);
                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}>Back To Hard Wood</Button></div> : ""

            }
            {
                americanShow === true ? <div className='img'> <img src={american} alt='1' /><Button className="buttonBlack" variant="dark" onClick={(e) => {
                    setrHardShow(true);
                    setAfricanShow(false);
                    setEuropeanShow(false);
                    setMalaysianShow(false);
                    setrAmericanShow(false);
                }}>Back To Hard Wood</Button></div> : ""

            }


        </div>

    )
}

export default Main;
