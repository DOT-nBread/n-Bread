import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { css } from "@emotion/react";
import { COLOR } from "@/domains/shared/constants/style";
import IconButton from "../IconButton";

const UserStatus = () => {
	const { status } = useSession();

	return (
		<>
			{status === "authenticated" ? (
				<div css={userContainer}>
					<IconButton image={<Image alt="N빵" src="/images/profile_default.png" width={36} height={35} />} />
				</div>
			) : (
				<Link href="/login">
					<button css={loginButton} type="button">
						로그인
					</button>
				</Link>
			)}
		</>
	);
};

const userContainer = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 18px;
`;

const loginButton = css`
	width: 120px;
	height: 40px;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;

	color: ${COLOR.PrimaryBeige};
	border: 2px solid ${COLOR.PrimaryBeige};
	border-radius: 35px;
	background-color: ${COLOR.White100};

	cursor: pointer;
`;

export default UserStatus;
