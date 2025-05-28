window.onload = () => {
	const lightModeCheckbox = document.getElementById("light-mode-checkbox");
	lightModeCheckbox.removeAttribute("style");

	const theme = localStorage.getItem("theme");

	if (theme) {
		document.body.classList.add(theme);
		lightModeCheckbox.checked = theme === "light";
	}

	lightModeCheckbox.addEventListener("change", (event) => {
		const newTheme = event.target.checked ? "light" : "dark";
		document.body.className = newTheme;
		localStorage.setItem("theme", newTheme);
	});

	document.querySelector("header").prepend(lightModeCheckbox);
};
