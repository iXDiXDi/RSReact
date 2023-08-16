//Императивный (получаем что то не важно как)
import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
		// Декларативная часть, которая была в предидущей версии - тут отсутствует, как мне кажется.
		createElement(
			'div',
			{
				className: 'App',
			},
			createElement(
				'header',
				{
					className: 'App-header',
				},
				createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),
				createElement(
					'p',
					null,
					'\u0427\u0442\u043E \u0442\u043E \u043D\u043E\u0432\u0435\u043D\u044C\u043A\u043E\u0435.',
				),
				createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
					},
					'Learn React',
				),
				createElement('p', null, currentYear),
			),
		)
	);
};
