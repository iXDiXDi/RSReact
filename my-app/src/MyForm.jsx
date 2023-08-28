import { useState } from 'react';

const sendFormData = (formData) => {
	console.log(formData);
};

export const MyForm = () => {
	const [formData, setformData] = useState({
		login: '',
		password: '',
		passwordRepeat: '',
	});
	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};

	const { login, password, passwordRepeat } = formData;
	return (
		<>
			<div className="registrationForm">
				<div>
					<form onSubmit={onSubmit}>
						<input
							name="login"
							type="text"
							placeholder="Логин"
							value={login}
							onChange={({ target }) =>
								setformData({
									...formData,
									email: target.value,
								})
							}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Пароль"
							value={password}
							onChange={({ target }) =>
								setformData({
									...formData,
									password: target.value,
								})
							}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Повторите пароль"
							value={passwordRepeat}
							onChange={({ target }) =>
								setformData({
									...formData,
									passwordRepeat: target.value,
								})
							}
						></input>
						<br></br>
						<button type="submit">Заслать</button>
					</form>
				</div>
			</div>
		</>
	);
};
