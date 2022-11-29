import React, { useState } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavBars from "./NavBars";
import NavLinksDropdown from "./NavLinksDropdown"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavSearch from "./NavSearch";

const Navigation = ({ title, links }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<>
			<nav className="fixed top w-full z-50 bg-white dark:bg-neutral-900 shadow-lg dark:shadow-sm dark:shadow-neutral-800">
				<div className="h-16 items-center justify-between flex mx-auto max-w-full py-0 px-6 w-full">
					<NavBrand title={title} />
					<div className="flex">
						<div className="hidden md:flex items-center">
							<NavLinks links={links} />
						</div>
						<div className="flex items-center mx-2">
							<DarkModeToggle />
							<NavSearch />
						</div>
						<NavBars
						handleClick={handleClick}
						dropdownOpen={dropdownOpen}
						/>
					</div>
				</div>
				{dropdownOpen ? (
					<div className="block mx-auto max-w-full py-0 px-6 w-full md:hidden">
						<NavLinksDropdown links={links} />
					</div>
				) : null }
			</nav>
		</>
	);
};

export default Navigation;