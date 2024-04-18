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
		path: '/categories',
		name: '카테고리'
	}
] satisfies Navigator[];

export const HOME_PATH = '/';
