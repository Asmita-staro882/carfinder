import './CarList.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

const CarList = () => {
  const tabs = ['Buy Car', 'Sell Car', 'Direct Customer Car', 'Dealers Cars', 'Post Requirement'];
  const cars = [
    {
      image: img1,
      name: 'BMW 523i',
      details: '67,000 Km | 2nd Owner | Petrol | 2011',
      price: '₹ 10.50 Lakh',
    },
    {
      image: img2,
      name: 'CRETA 1.6 CRDI SX',
      details: '115,000 Km | 1st Owner | Diesel | 2015',
      price: '₹ 7.00 Lakh',
    },
    {
      image: img3,
      name: 'INNOVA CRYSTA 2.4 Z',
      details: '166,000 Km | 1st Owner | Diesel | 2020',
      price: '₹ 16.75 Lakh',
    },
    {
      image: img4,
      name: 'VOLVO S60 D4',
      details: '65,000 Km | 2nd Owner | Diesel | 2018',
      price: '₹ 16.00 Lakh',
    },
  ];

  return (
    <div className="car-list-container">
      <div className="car-tabs-section">
        {tabs.map((tab, index) => (
          <button key={index} className={`car-tab-button ${index === 0 ? 'active-car-tab' : ''}`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="popular-cars-row">
        <h2 className="popular-title">Popular Used Cars near you</h2>
        <button className="explore-button">Explore Cars</button>
      </div>
      <div className="car-list-wrapper">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h3 className="car-name">{car.name}</h3>
            <p className="car-details">{car.details}</p>
            <p className="car-price">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
