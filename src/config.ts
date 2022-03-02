const social_links = {
	instagram: 'https://www.instagram.com/reginablinchik/',
	telegram: 'https://t.me/reginadestlln',
};

const config = {
	social_links,
	colors: {
		black: '#000',
		pink: '#ff197a',
		light_gray: '#e7e7e7',
	},
	maxWidth: '1200px',
	navbar: {
		links: [
			{
				name: 'instagram',
				url: social_links.instagram,
				newTab: true,
			},
			{
				name: 'portflio',
				dataURL: '#portfolio',
			},
			{
				name: 'telegram',
				url: social_links.telegram,
				newTab: true,
			},
		],
		author: 'blinkova regina',
	},
	services: [
		{
			title: 'Дизайн сайта в Figma',
			description: 'Дизайн сайта в Figma',
		},
		{
			title: 'Верстка сайта на Tilda',
			description: 'Верстка сайта на Tilda',
		},
		{
			title: 'Разработка логотипа',
			description: 'Разработка логотипа',
		},
		{
			title: 'Разработка инфопродуктов',
			description: 'Разработка инфопродуктов',
		},
		{
			title: 'Постеры, иллюстрации и др.',
			description: 'Постеры, иллюстрации и др.',
		},
	],
};

export default config;
