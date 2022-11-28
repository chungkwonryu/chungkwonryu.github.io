import React from "react";

// 각 페이지의 헤더 (Navigation 아래의 제목을 보여주는 부분)
const Header = ({ title }) => {
	return (
		<header className="border-b-2 border-b-stone-300 pt-16">
			<div className="mx-auto max-w-full py-0 px-6 w-full">
				<h1 className="text-3xl font-bold m-0 py-8">{title}</h1>
			</div>
		</header>
	);
};

export default Header;