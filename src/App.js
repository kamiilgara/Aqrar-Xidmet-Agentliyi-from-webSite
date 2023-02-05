import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CarouselArea from './components/CarouselArea';
import FirstNews from './components/FirstNews';
import Banners from './components/Banners';

function App() {

  const [projects, setProjects] = useState([
    {
      'id': 0,
      'symbol': 'http://axa.gov.az/uploads/images/services/logo-a-1666340461-6352566d2f947.webp',
      'head': 'DAIM'
    },
    {
      id: 1,
      'symbol': 'http://axa.gov.az/uploads/images/services/vector-1663146623-63219a7f68bb5.webp',
      'head': 'Aqrokimyəvi analizlərin aparılması'
    },
    {
      id: 2,
      'symbol': 'http://axa.gov.az/uploads/images/services/ekinci-1663146181-632198c5008a5.webp',
      'head': 'EKTİS'
    },
    {
      id: 3,
      'symbol': 'http://axa.gov.az/uploads/images/services/yonca-1663146733-63219aed3859b.webp',
      'head': 'Toxumu yoxla'
    },
    {
      id: 4,
      'symbol': 'http://axa.gov.az/uploads/images/services/surucu-1663410946-6325a30297cc8.webp',
      'head': 'Sürücülük vəsiqəsinin verilməsi'
    },
    {
      id: 5,
      'symbol': 'http://axa.gov.az/uploads/images/services/dibcek-1663146492-632199fc49d22.webp',
      'head': 'Bitki sortlarının qeydiyyatı'
    }
  ]);

  return (
    <div className="App">
      <Navbar />
      <CarouselArea projects={projects} />
      <FirstNews />
      <Banners />
    </div>
  );
}

export default App;
