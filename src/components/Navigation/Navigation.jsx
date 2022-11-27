import React, { useState } from "react";
import NavBrand from "./NavBrand";
import NavLinks from "./NavLinks";
import NavBars from "./NavBars";
import NavLinksDropdown from "./NavLinksDropdown"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navigation = ({ brand, title, links }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<>
			<nav className="bg-white shadow-lg">
				<div className="h-16 items-center justify-between flex mx-auto max-w-full py-0 px-6 w-full">
					<NavBrand brand={brand} title={title} />
					<div className="flex">
						<div className="hidden md:flex items-center">
							<NavLinks links={links} />
						</div>
						<div className="flex items-center mx-2">
							<DarkModeToggle />
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