import React, { useState } from 'react';
import Country from '../Country/Country';

function CountrySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={searchTerm}
          onChange={handleChange}
          className='input-btn'
        />
        <button type="submit" disabled={loading}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {
            countries.map((country)=><Country key={country.cca3} country={country}/>)
        }
       
        
      </ul>
    </div>
  );
}

export default CountrySearch;

