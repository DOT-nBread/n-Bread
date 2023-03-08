import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import UserStatus from "../userStatus";
import IconButton from "../IconButton";

const Navbar = () => {
	return (
		<nav css={navContainer}>
			<Link href="/">
				<IconButton image={<Image alt="N빵" src="/images/main_logo2.jpg" width={70} height={50} />} />
			</Link>
			<UserStatus />
		</nav>
	);
};

const navContainer = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
	height: 60px;

	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

	-webkit-touch-callout: none;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
`;

export default Navbar;
