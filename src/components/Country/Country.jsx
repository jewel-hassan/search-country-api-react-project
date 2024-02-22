import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="country">
      <h3>Name:{country.name.common}</h3>
      <h3>Capital:{country.capital}</h3>
      <h4>Population:{country.population.toString()}</h4>
      <h4>Area:{country.area}</h4>
     
      <img src={country.flags.png} alt="country" />
      
    </div>
  );
};

export default Country;
