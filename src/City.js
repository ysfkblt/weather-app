import React from 'react';

const City = ({ city }) => {
	return (
		<div>
			<div className='mt-10 text-center sm:max-w-[15rem] max-w-[12rem]'>
				<p className='text-4xl sm:text-5xl font-bold whitespace-nowrap'>
					{city.main.temp}{' '}
					<span className='font-light align-top text-xl -mx-2'>
						°C
					</span>
				</p>
				<p className='text-2xl sm:text-3xl font-semibold  sm:mt-2'>
					{city.name}{' '}
					<span className='font-light'>{city.weather[0].main}</span>
				</p>
			</div>
		</div>
	);
};

export default City;
