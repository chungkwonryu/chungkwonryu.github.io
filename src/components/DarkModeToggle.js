import React, { useCallback, useState } from 'react';
import Toggle from 'react-toggle';

const DarkModeToggle = () => {
	const [checked, setChecked] = useState(window.__theme === 'dark');

	const onChange = useCallback(
		e => {
			const isChecked = e.target.checked;
			setChecked(isChecked);
			window.__setPreferredTheme(isChecked ? 'dark' : 'light');
		},
		[setChecked]
	);
	
	if (typeof window === 'undefined') {
		// Never server-side render this, since we can't determine
		// the correct initial state until we get to the client.
		// Alternatively, use a loading placeholder here.
		return null;
	}

	return <Toggle checked={checked} onChange={onChange} />;
};

export default DarkModeToggle;

