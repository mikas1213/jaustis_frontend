type ImageURL = string & { __brand: ImageURL };

export const importImageURL = (img_url: string): ImageURL => {
    const url = new URL(img_url, import.meta.url).href;
    return url as ImageURL;
};