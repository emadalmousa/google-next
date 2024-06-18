'use client'
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const CountryLookup = () => {
  const [country, setCountry] = useState('USA');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${API_KEY}`);
        const data = await response.json();
        if (data.country) {
          setCountry(data.country);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    getCountry();
  }, []);

  return (
    <div>{country}</div>
  );
}

export default CountryLookup;
