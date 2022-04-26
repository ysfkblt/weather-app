import React, { useEffect, useState } from 'react';
import axios from 'axios';
import City from './City';
import logo from './logo.png';
import background from './background';

export default function App() {
	const aKey = '91d98ed8cb675eb977f1a0374194a2b2';
	const [search, setSearch] = useState('');
	const [city, setCity] = useState();
	const [weather, setWeather] = useState();

	useEffect(() => {
		async function getApi() {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${aKey}&units=metric`
				);

				setCity(response.data);
				setWeather(response.data.weather[0].main);
			} catch (error) {
				console.error(error);
			}
		}

		getApi();
	}, [search]);

	const getWeather = weather?.toLowerCase().includes('clear')
		? { backgroundImage: background.clear }
		: weather?.toLowerCase().includes('sunny')
		? { backgroundImage: background.sunny }
		: weather?.toLowerCase().includes('cloud')
		? { backgroundImage: background.cloudy }
		: weather?.toLowerCase().includes('rain')
		? { backgroundImage: background.rainy }
		: weather?.toLowerCase().includes('snow')
		? { backgroundImage: background.snow }
		: weather?.toLowerCase().includes('overcast')
		? { backgroundImage: background.overcast }
		: { backgroundColor: '#7dd3fc' };

	return (
		<div
			style={getWeather}
			className=' grid place-items-center overflow-hidden grid-cols-1 grid-rows-1  h-screen select-none'
		>
			<div className='grid absolute'>
				<img
					src={logo}
					className='h-24 inline-grid place-self-center'
					alt='logo'
				/>
				<input
					onChange={(e) => setSearch(e.target.value)}
					className='text-xs sm:text-base max-w-[12rem]  sm:max-w-[15rem] mt-10 px-8 py-4 font-light transition bg-fuchsia-200 border-4 border-black rounded-xl  shadow-[6px_6px_0_0_#000]  active:bg-pink-50  text-gray-500  focus:border-black focus:ring-0  '
					type='text'
					placeholder='please enter location'
					onFocus={(e) => (e.target.placeholder = '')}
					onBlur={(e) =>
						(e.target.placeholder = 'please enter location')
					}
					spellCheck='false'
				/>
			</div>
			{city && <City city={city} weather={weather} />}
		</div>
	);
}
