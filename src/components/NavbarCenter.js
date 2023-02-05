import { faFlask, faHandHoldingHeart, faMosquito } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function NavbarCenter() {
    return (
        // <Container>
        //     <Row className='outCol'>
        //         <Col md={'2'}>
        //             <div className='inCol'>
        //                 <FontAwesomeIcon icon={faFlask} />
        //                 <h4>Laboratoriya Ekspertiza və Sertifikatlaşdırma Mərkəzi</h4>
        //                 <p>

        //                     Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri

        //                 </p>
        //             </div></Col>
        //         <Col md={'2'}>
        //             <div className='inCol'>
        //                 <FontAwesomeIcon icon={faFlask} />
        //                 <h4>Laboratoriya Ekspertiza və Sertifikatlaşdırma Mərkəzi</h4>
        //                 <p>

        //                     Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri

        //                 </p>
        //             </div></Col>
        //         <Col md={'2'}>
        //             <div className='inCol'>
        //                 <FontAwesomeIcon icon={faFlask} />
        //                 <h4>Laboratoriya Ekspertiza və Sertifikatlaşdırma Mərkəzi</h4>
        //                 <p>

        //                     Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri

        //                 </p>
        //             </div></Col>
        //         <Col md={'2'}>
        //             <div className='inCol'>
        //                 <FontAwesomeIcon icon={faFlask} />
        //                 <h4>Laboratoriya Ekspertiza və Sertifikatlaşdırma Mərkəzi</h4>
        //                 <p>

        //                     Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri

        //                 </p>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>

        <Container className='forheight'>
            <Row className='w-100 justify-content-center mr-0 ml-1'>
                <div className='col-11 col-lg-8 cards-area row'>
                    <div className='col-lg-6'>
                        <div className='row justify-content-around la'>
                            <div className='col-lg-6 col-6 outline'>
                                <div className='formargin p-1'>
                                    <div className='card-area'>
                                        <a href='/'>
                                            <img src='http://axa.gov.az/uploads/images/services/vector-1662662807.webp' alt='/' className='white-img' />
                                            <img src='http://axa.gov.az/uploads/images/services/vector-1662662654.webp' alt='/' className='green-img' />
                                            <h4>Laboratoriya Ekspertiza və sertifikatlaşdırma Mərkəzi</h4>
                                            <p>Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-6 outline'>
                                <div className='formargin p-1'>
                                    <div className='card-area'>
                                        <a href='/'>
                                            <img src='http://axa.gov.az/uploads/images/services/cow-1--1662662816.webp' className='white-img' alt='/' />
                                            <img src='http://axa.gov.az/uploads/images/services/cow-1--1662662699.webp' className='green-img' alt='/' />
                                            <h4>Heyvan Sağlamlığı və Baytarlıq Xidmətləri Mərkəzi</h4>
                                            <p>Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row justify-content-around la'>
                            <div className='col-lg-6 col-6 outline'>
                                <div className='formargin p-1'>
                                    <div className='card-area'>
                                        <a href='/'>
                                            <img src='http://axa.gov.az/uploads/images/services/frame--1662662825.webp' className='white-img' alt='/' />
                                            <img src='http://axa.gov.az/uploads/images/services/frame--1662662745.webp' className='green-img' alt='/' />
                                            <h4>Bitki Mühafizə və Fumiqasiya (zərərsizləşdirmə) Mərkəzi</h4>
                                            <p>Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-6 outline'>
                                <div className='formargin p-1'>
                                    <div className='card-area'>
                                        <a href='/'>
                                            <img src='http://axa.gov.az/uploads/images/services/group--1663052449-63202aa1405d3.webp' className='white-img' alt='/' />
                                            <img src='http://axa.gov.az/uploads/images/services/group--1663052449-63202aa1405d3.webp' className='green-img' alt='/' />
                                            <h4>Aqrar Təlim Mərkəzi</h4>
                                            <p>Aqrokimyəvi, baytarlıq, toxumçuluq laboratoriya xidmətləri, texniki ekspertiza və sertifikatlaşdırma xidmətləri</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>

    )
}

export default NavbarCenter;
