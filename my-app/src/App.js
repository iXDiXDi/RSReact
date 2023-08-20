import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';

export const App = () => {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();

	return (
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
				<MyComponent />
			</header>
		</div>
	);
};
