export interface ReelProps {
	timer: number;
	reelId: string;
	position?: number[] | null;
}

export interface SpinFromSelector {
	spin: boolean;
}

export interface ComboFromSelector {
	combo: string;
}
