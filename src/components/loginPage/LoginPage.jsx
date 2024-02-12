import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { Button, TextField, Typography } from "@mui/material";
import "./loginPage.style.css";

const credentials = {
	username: "meka",
	password: "1234",
};

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setIsAuthenticated } = useContext(UserContext);

	const onUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (
			username === credentials.username &&
			password === credentials.password
		) {
			console.log("correct user creds");
			setIsAuthenticated(true);
		} else {
			alert("Incorrect username or password");
			setUsername("");
			setPassword("");
		}
	};

	return (
		<div className="login-container">
			<div className="login-box">
				<Typography mt={4} p={4} variant="h3">
					Login Page
				</Typography>

				<div>
					<form className="form-container" onSubmit={onSubmitHandler}>
						<div>
							<TextField
								sx={{ width: 0.8 }}
								label="Username"
								variant="outlined"
								id="outlined-required"
								name="username"
								value={username}
								onChange={onUsernameChange}
								placeholder="Username"
								required
							/>
						</div>
						<div>
							<TextField
								sx={{ width: 0.8 }}
								label="Password"
								variant="outlined"
								name="password"
								type="password"
								value={password}
								onChange={onPasswordChange}
								placeholder="Password"
								required
							/>
						</div>
						<Button type="submit">Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
