import React from 'react';
import axios from 'axios';
import styles from './CountrySelect.module.scss';
import { useState, useEffect } from 'react';

function CountrySelect({ value, onSelect }) {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const fetchCountry = response.data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
        }));
        setCountries(fetchCountry);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country) => {
    onSelect(country);
    setIsOpen(false);
  };

  return (
    <div className={styles.contant}>
      <div className={styles.title}>
        <svg className={styles.svg}>
          <use href='/icons/symbolTeam.svg#country'></use>
        </svg>
        <label>Страна</label>
      </div>
      <div className={styles.customSelect} onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          <div className={styles.selected}>
            <img src={value.flag} alt='flag' className={styles.flag} />
            <span>{value.name}</span>
          </div>
        ) : (
          <span>Выберите страну</span>
        )}

        {isOpen && (
          <div className={styles.dropdown}>
            {countries.map((country) => (
              <div
                key={country.name}
                className={styles.option}
                onClick={() => handleSelectCountry(country)}
              >
                <img src={country.flag} alt='flag' className={styles.flag} />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountrySelect;
