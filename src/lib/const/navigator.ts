interface Navigator {
	path: string;
	name: string;
}

export const NAVIGATORS = [
	{
		path: '/series',
		name: '시리즈'
	},
	{
		path: '/tags',
		name: '태그'
	},
	{
		path: '/about',
		name: '소개'
	}
] satisfies Navigator[];

export const HOME_PATH = '/';
