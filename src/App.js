import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import gradient from './lib/gradient';
import axios from 'axios';
import City from './City';
import logo from './logo.png';

export default function App() {
	const aKey = '91d98ed8cb675eb977f1a0374194a2b2';
	const [grad, setgrad] = useState(null);
	const [search, setSearch] = useState('');
	const [city, setCity] = useState();

	useEffect(() => {
		async function getApi() {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${aKey}&units=metric`
				);
				setCity(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getApi();
	}, [search]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setgrad(shuffle(gradient).pop());
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [city]);

	return (
		<div
			style={{ backgroundImage: grad }}
			className='flex flex-col items-center justify-center h-screen select-none'
		>
			<img src={logo} className='h-24' alt='logo' />

			<input
				onChange={(e) => setSearch(e.target.value)}
				className='flex text-xs sm:text-base max-w-[12rem]  sm:max-w-[15rem] mt-10 px-8 py-4 font-light transition bg-pink-200 border-4 border-black rounded-xl  shadow-[6px_6px_0_0_#000]  active:bg-pink-50  text-gray-500  focus:border-black focus:ring-0  '
				type='text'
				placeholder='please enter location'
				onFocus={(e) => (e.target.placeholder = '')}
				onBlur={(e) => (e.target.placeholder = 'please enter location')}
			/>
			{city && <City city={city} />}
		</div>
	);
}
