export interface ButtonProps {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	bold: string;
	disabled?: boolean;
	color?: string;
}
