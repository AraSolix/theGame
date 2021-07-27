import bar1Img from '../images/bar1.png';
import bar2Img from '../images/bar2.png';
import bar3Img from '../images/bar3.png';
import cherryImg from '../images/cherry.png';
import sevenImg from '../images/seven.png';

export const reel = [
	{
		image: bar3Img,
		id: 'bar3',
	},
	{
		image: bar1Img,
		id: 'bar1',
	},
	{
		image: bar2Img,
		id: 'bar2',
	},
	{
		image: sevenImg,
		id: 'seven',
	},
	{
		image: cherryImg,
		id: 'cherry',
	},
];

export const combinations = [
	[0, 1, 2],
	[1, 2],
	[2, 3, 4],
	[3, 4],
	[4, 0, 1],
	[0, 1],
	[1, 2, 3],
	[2, 3],
	[3, 4, 0],
	[4, 0],
];
