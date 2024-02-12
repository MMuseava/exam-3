import { createContext, useState } from "react";
import "./App.css";
import LoginPage from "./components/loginPage/LoginPage";
import TodoPage from "./components/todoPage/TodoPage";
import MaterialLogin from "./components/materialLogin/MaterialLogin";

export const UserContext = createContext(null);
function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{isAuthenticated ? <TodoPage /> : <LoginPage />}
			<div>
				<MaterialLogin />
			</div>
		</UserContext.Provider>
	);
}

export default App;
