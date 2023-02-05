import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function FirstNews() {
  return (
    <div className='my-5'>
      <Container>
        <div className='text-center'>Xəbərlər</div>
        <Row>
          <Col className='col-12' lg={'6'}>
            <a href='/' className='left-link' >
              <div className='news-left'>
                <img src='http://axa.gov.az/uploads/images/news/afffff-1675421735-63dce827e3978.webp' alt='/' />
                <h3>Kənd Təsərrüfatı Nazirliyi "Ayın Fermeri" müsabiqəsini elan edir</h3>
                <p>Azərbaycanda aqrar sahədə fəaliyyətin daha da stimullaşdırılması üçün fermerlər arasında növbəti müsabiqə elan edilir. Müsabiqənin məqsədi nümunəvi fermerlərin müəyyən edilməsi, onların mükafatlandırılması.</p>
              </div>
            </a>
          </Col>
          <Col className='col-12 news-right d-flex' lg={'6'}>
            <div>
              <a href='/' className='d-flex'>
                <img src='http://axa.gov.az/uploads/images/news/ykgj2r-1675421293-63dce66d4326f.webp' alt='/' />
                <div>
                  <h5>Ulu Öndər Heydər Əliyevin anadan olmasının 100-cü ildönümünə həsr olunmuş şahmat və dama turniri keçirilib</h5>
                  <p>“Heydər Əliyev İli” çərçivəsində şahmat və dama turniri keçirilib
                    Kənd Təsərrüfatı Nazirliyi, Azərbaycan Şahmat Federasiyası, Azərbaycan Dama Federasiyası və Kənd Təsərrüfatı Nazirliyinin Birləşmiş H...</p>
                </div>
              </a>
            </div>
            <div>
              <a href='/' className='d-flex'>
                <img src='http://axa.gov.az/uploads/images/news/rerere-1675341608-63dbaf28d747d.webp' alt='/' />
                <div>
                  <h5>İşğaldan azad olunmuş Qarabağ və Şərqi Zəngəzur iqtisadi rayonlarında  quduzluğa qarşı  peyvəndləmə tədbirləri aparılıb</h5>
                  <p>Cari ilin ilk günlərindən etibarən ölkə ərazisində epizootik tədbirlər planına uyğun olaraq sahibli və sahibsiz itlər arasında quduzluq xəstəliyinə qarşı peyvəndləmə tədbirlərinə başlanılıb.
                    Kənd Təs...</p>
                </div>
              </a>
            </div>
            <div>
              <a href='/' className='d-flex justify-content-between'>
                <img src='http://axa.gov.az/uploads/images/news/whatsa-1675231630-63da018eb9bcf.webp' alt='/' />
                <div>
                  <h5>Aqrar Xidmətlər Agentliyinin mütəxəssisləri Gürcüstanda keçirilən beynəlxalq tədbirdə iştirak edib</h5>
                  <p>Asiya İnkişaf Bankının (AİB) təşkilatçılığı ilə Gürcüstan Respublikasında Mərkəzi Asiya Regional İqtisadi Əməkdaşlıq (CAREC) Proqramı çərçivəsində Sanitar və Fitosanitar Tədbirlər üzrə Regional İşçi Q...</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <div className='col-lg-12 d-flex justify-content-end'>
          <div className='allNews'>
            <a href='/'>Bütün Xəbərlər</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FirstNews;