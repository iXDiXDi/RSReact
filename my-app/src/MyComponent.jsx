import { useState } from 'react';

const testCircle = 0;

const numbers = [
	{ id: 0, digit: 7 },
	{ id: 1, digit: 8 },
	{ id: 2, digit: 9 },
	{ id: 3, digit: 4 },
	{ id: 4, digit: 5 },
	{ id: 5, digit: 6 },
	{ id: 6, digit: 1 },
	{ id: 7, digit: 2 },
	{ id: 8, digit: 3 },
	{ id: 9, digit: 0 },
];

const application = [
	{ id: 1, func: '+' },
	{ id: 2, func: '-' },
];

const reset = [{ id: 1, func: 'C' }];

const result = [{ id: 1, func: '=' }];

export const MyComponent = (props) => {
	const [value, setValue] = useState('');

	return (
		<>
			<div>{value ? value : 0}</div>
			<div>{testCircle ? testCircle : 'Ничего'}</div>
			<div className="numberButtons">
				{numbers.map(({ id, digit }) => (
					<button key={id} onClick={() => setValue(value + '' + digit)}>
						{digit}
					</button>
				))}
			</div>
			<div>
				{application.map(({ id, func }) => (
					<button key={id} onClick={() => setValue(value + func)}>
						{func}
					</button>
				))}
			</div>
			<div>
				{reset.map(({ id, func }) => (
					<button key={id} onClick={() => setValue('')}>
						{func}
					</button>
				))}
			</div>
			<div>
				{result.map(({ id, func }) => (
					<button key={id} onClick={() => setValue('Ну что опять не так?(')}>
						{func}
					</button>
				))}
			</div>
		</>
	);
};
