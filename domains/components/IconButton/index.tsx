import { css } from "@emotion/react";
import React, { forwardRef, Ref } from "react";

type IconButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	image: React.ReactNode;
};

const IconButton = forwardRef(({ onClick, disabled, image }: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
	return (
		<button css={iconContainer} onClick={onClick} disabled={disabled} ref={ref}>
			{image}
		</button>
	);
});

const iconContainer = css`
	display: flex;
	border: none;
	background: transparent;
	cursor: pointer;
	padding: 0;
`;

export default IconButton;
