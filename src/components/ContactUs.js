import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Col, Row } from 'react-bootstrap';

function ContactUs() {
    return (
        <div className='contactUs'>
            <Row className='pt-2 pt-lg-5 pb-5 pb-md-2'>
                <Col lg={'6'} className='col-12 inputs-area'>
                    <div className='for-color'>Bizimlə Əlaqə</div>
                    <form className='w-75 pt-3 pt-md-5 inputt'>
                        <input type={'hidden'} />
                        <div className='for-input'>
                            <label htmlFor='fullname'>Ad, soyad</label>
                            <input type={'text'} name='fullname' id='fullname' />
                            <label htmlFor='phone'>Telefon</label>
                            <input type={'text'} name={'phone'} id='phone' />
                            <label htmlFor='email'>E-poçt ünvanı</label>
                            <input type={'email'} name='email' id='email' />
                            <label htmlFor="message">Mesaj</label>
                            <input type="text" name="message" id="message" />
                        </div>
                        <div className="col-8">
                        </div>
                        <ReCAPTCHA sitekey={process.env.NODE_ENV} />
                        <button>Göndər</button>
                    </form>
                </Col>
                <Col lg={'6'} className='col-12 d-flex flex-column align-items-center justify-content-center for-map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.977340399033!2d49.83579821576907!3d40.40935276401131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087f339339b67%3A0xe24dc9547aafbead!2sAqrar%20Xidm%C9%99tl%C9%99r%20Agentliyi!5e0!3m2!1sen!2s!4v1661931454918!5m2!1sen!2s"
                        width="700px"
                        height="300px"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                    <div className='about-text'>
                        <p>
                            "Bakı şəhəri, Nəcəf Nərimanov küçəsi, 7A"
                            <br />
                            "AZ 1106"
                            <br />
                            "E-mail: info@axa.gov.az"
                        </p>
                        <p>
                            <strong>Fumiqasiya (zərərsizləşdirmə) xidmətləri üçün:</strong>
                        </p>
                        <p>Tel: 012-562-85-34(daxili:152), 050-644-74-15, 070-965-62-14</p>
                        <p>E-mail: fumiqasiya@axa.gov.az</p>
                        <p>
                            <strong>Laboratoriya (torpaq və toxum analizləri) xidmətləri üçün:</strong>
                        </p>
                        <p>
                            Tel: 012-562-85-67, 077-299-70-50, 070-288-78-01
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs;