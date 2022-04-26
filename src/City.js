import React from 'react';

const City = ({ city }) => {
	return (
		<div className='mb-[10vh] sm:mb-[15vh] inline-grid self-end justify-self-center text-center '>
			<p className='text-4xl sm:text-5xl font-bold  '>
				{city.main.temp}
				<span className='align-top font-normal text-2xl'>°</span>
			</p>
			<p className='text-2xl sm:text-3xl font-semibold whitespace-nowrap sm:mt-[1.5vh] '>
				{city.name} <br />
			</p>
			<div className='font-light text-2xl sm:text-3xl -mt-1'>
				{city.weather[0].main}
			</div>
		</div>
	);
};

export default City;
