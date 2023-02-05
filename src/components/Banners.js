import React from 'react'

function Banners() {
    return (
        <div className='d-none d-md-block'>
            <div className='banner-header'>
                <div className='banner-left'>
                    <a href='/'>
                        <img alt='/' className='d-block' src='http://axa.gov.az/uploads/images/services/61726-1663584535-63284917cd301.webp' />
                    </a>
                    <div className='banner-left-text'>
                        <a href='/' >
                            <h1>Nəqliyyat Vasitələrinin Qeydiyyata alınması</h1>
                        </a>
                    </div>
                </div>
                <div className='banner-right'>
                    <div className='banner-right-top d-flex'>
                        <div className='banner-right-top-left'>
                            <a href='/'>
                                <img className='d-block' src='http://axa.gov.az/uploads/images/services/trakto-1663411405-6325a4cd69767.webp' alt='sad' />
                            </a>
                        </div>
                        <div className='banner-right-top-right'>
                            <a href='/' >
                                <h5>Nəqliyyat Vasitələrinin Texniki Baxışı</h5>
                            </a>
                        </div>
                    </div>
                    <a href='/' className='banner-right-bottom'>
                        <div className='banner-right-bottom-text'>
                            <h5>Bitkilərin becərilməsinə dair təqvim planı</h5>
                        </div>
                    </a>
                </div>
            </div>
            <div className='banner-header'>
                <div className='banner-right'>
                    <div className='banner-right-top d-flex'>
                        <div className='banner-right-top-left'>
                            <a href='/'>
                                <img className='d-block' src='http://axa.gov.az/uploads/images/services/15-1663412515-6325a92305696.webp' alt='sad' />
                            </a>
                        </div>
                        <div className='banner-right-top-right'>
                            <a href='/' >
                                <h5>Fumiqasiya ( zərərsizləşdirmə xidməti )</h5>
                            </a>
                        </div>
                    </div>
                    <a href='/' className='banner-right-bottom'>
                        <div className='banner-right-bottom-text'>
                            <h5>Bitki mühafizəsi tədbirləri</h5>
                        </div>
                    </a>
                </div>
                <div className='banner-left'>
                    <a href='/'>
                        <img alt='/' className='d-block' src='http://axa.gov.az/uploads/images/services/heyvan-1663074477-632080ad3a134.webp' />
                    </a>
                    <div className='banner-left-text'>
                        <a href='/' >
                            <h1>Yoluxucu heyvan xəstəlikləri</h1>
                        </a>
                    </div>
                </div>
            </div>
            <div className='banner-header'>
                <div className='banner-left'>
                    <a href='/'>
                        <img alt='/' className='d-block' src='http://axa.gov.az/uploads/images/services/1-1-md-1666273015-63514ef7ca5f2.webp' />
                    </a>
                    <div className='banner-left-text'>
                        <a href='/' >
                            <h1>Peyvəndləmə</h1>
                        </a>
                    </div>
                </div>
                <div className='banner-right d-flex'>
                    <div className='banner-right-top-left d-flex flex-column justify-content-center'>
                        <a href='/' className='d-flex flex-column justify-content-center'>
                            <img alt='sd' style={{ height: '100%' }} className='d-block' src='http://axa.gov.az/uploads/images/services/237a8f-1663826094-632bf8aedb28d.webp' />
                        </a>
                    </div>
                    <div className='banner-right-top-right'>
                        <a href='/'>
                            <h5 style={{ fontSize: '1.4rem' }}>Baytarlıq sanitariya tədbirləri</h5>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banners;