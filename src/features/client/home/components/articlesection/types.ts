type Settings = {
    cardShape: '2_1' | '1_1',
    fontTheme: 'light' | 'dark'
};

export type ArticleProps = {
    id: number,
    date: string,
    title: string,
    body: string,
    image: null | string,
    bgColor: null | string,
    settings: Settings
};