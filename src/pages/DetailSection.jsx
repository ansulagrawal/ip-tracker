import React, { useState } from 'react';
import arrow from '/icon-arrow.svg';
import DetailCard from '../components/DetailCard';
import { useLazyGetIpDataQuery } from '../app/api/ipSlice';

function DetailSection() {
  const [inputValue, setInputValue] = useState('');
  const [getIpData, { isLoading }] = useLazyGetIpDataQuery();

  const handleChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleIpSubmit = ele => {
    if (ele.key === 'Enter') {
      if (inputValue.length) {
        getIpData(inputValue.trim());
      }
      setInputValue('');
    }
  };

  return (
    <section className='xl:bg-desktopImage bg-mobileImage bg-cover flex flex-col gap-6 justify-center place-items-center h-[250px]'>
      <div className='text-white text-3xl font-semiBold'>IP Address Tracker</div>
      <div className='relative'>
        <input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleIpSubmit}
          className='focus:outline-none rounded-xl p-3 h-[55px] w-[340px] xl:w-[550px] placeholder:text-dark-gray placeholder:font-semiBold'
          placeholder='Search for any IP Address or domain'
        />
        <button disabled={isLoading} onClick={handleIpSubmit} className='bg-black p-3 h-[55px] xl:w-[60px] flex justify-center place-items-center rounded-tr-xl rounded-br-xl absolute right-0 top-0'>
          <img src={arrow} alt='search' />
        </button>
      </div>
      <DetailCard />
    </section>
  );
}

export default DetailSection;
