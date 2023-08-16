//Императивный (получаем что то не важно как)
import logo from './logo.svg';
import './App.css';

export const App = () => {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
		// Декларативная часть, хотя мы не знаем как браузер это всё рисует :-)
		// Хотя видим что и как он должен сделать
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Что то новенькое.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
		//закончилась декларативная часть
	);
};
