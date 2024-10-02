export async function kumparan() {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/kumparan-news');
    const news = await response.json();
    const data = news.data;
    return data
}
export async function cnn() {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news');
    const news = await response.json();
    const data = news.data;
    return data
}
export async function cnbc() {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnbc-news');
    const news = await response.json();
    const data = news.data;
    return data
}