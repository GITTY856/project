import React, { useState } from 'react';
import './RentalPage.css';

const RentalPage = () => {
  const [filters, setFilters] = useState({
    address: '',
    budget: '',
    bhk: '',
    availability: '',
    amenities: []
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // Add search logic here
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const profile = document.querySelector('.profile');
    const authLink = document.querySelector('.auth-link');
    navLinks.classList.toggle('active');
    profile.classList.toggle('active');
    authLink.classList.toggle('active');
  };

  // Dummy room data
  const rooms = [
    {
      id: 1,
      image: '/1.jpeg', 
      address: 'Chaman Vihar, Dehradun, Uttarakhand',
      details: '2 BHK, Furnished,Single',
      owner: 'Vikas Garg',
      contact: '123-456-7890',
      rent: '₹13,500/month',
      amenities: 'R/o water,wifi,24/7 Security'
    },
    {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg', 
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
      {
        id: 1,
        image: '/1.jpeg',
        address: 'Chaman Vihar, Dehradun, Uttarakhand',
        details: '2 BHK, Furnished,Single',
        owner: 'Vikas Garg',
        contact: '123-456-7890',
        rent: '₹13,500/month',
        amenities: 'R/o water,wifi,24/7 Security'
      },
  ];

  return (
    <div className="rental-page">
      {}
      <nav className="navbar">
        {}
        <div className="logo">Horizon</div>

        {}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Rental</a></li>
          <li><a href="#">Tiffin</a></li>
          <li><a href="#">About Us</a></li>
        </ul>

        {}
        <div className="profile">
          <a href="#" className="auth-link">Login/Signup</a>
          <img src="/images.png" alt="Profile Image" />
        </div>

        {}
        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
      </nav>

      {}
      <div className="search-filters">
        <input
          type="text"
          name="address"
          placeholder="Search address..."
          value={filters.address}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={filters.budget}
          onChange={handleFilterChange}
        />
        <select name="bhk" value={filters.bhk} onChange={handleFilterChange}>
          <option value="">BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
        <select name="availability" value={filters.availability} onChange={handleFilterChange}>
          <option value="">Availability</option>
          <option value="immediate">Immediate</option>
          <option value="15-days">Within 15 Days</option>
          <option value="30-days">Within 30 Days</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {}
      <div className="room-listings">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            {/* Property Info (Image and Details Side-by-Side) */}
            <div className="property-info">
              <div className="img">
                <img src={room.image} alt={room.address} />
              </div>
              <div className="details">
                <ul>
                  <li><strong>BHK:</strong> {room.details.split(',')[0]}</li>
                  <li><strong>Furnishng:</strong> {room.details.split(',')[1]}</li>
                  <li><strong>Room:</strong> {room.details.split(',')[2]}</li>
                </ul>
              </div>
            </div>

            {}
            <h3><strong>Owner:</strong> {room.owner}</h3>
            <h3><strong>Rent:</strong> {room.rent}</h3>
            <h5><strong>Address:</strong></h5>
            <p>{room.address}</p>
            <div className="amenities">
              <strong>Amenities:</strong> {room.amenities}
            </div>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalPage;