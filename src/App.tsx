import { useEffect, useState } from "react";

export default function App() {
	const [user, setUser] = useState({
		name: "",
	});

	useEffect(() => {
		fetch("https://api.github.com/users/belkamax05")
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, []);

	return (
		<main>
			<h1>{user.name}</h1>
			<p>Coming soon.</p>
			<p>
				Back to <a href="https://github.com/belkamax05">Github</a>
			</p>
		</main>
	);
}
