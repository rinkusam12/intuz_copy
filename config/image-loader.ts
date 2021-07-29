export const myLoader = ({ src, width, quality }) => {
    return `https://intuz-site.imgix.net/uploads/${encodeURI(src)}?w=${width}&q=${quality || 75
        }&auto=format,compress&fm=pjpg`;
};