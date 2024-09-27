import Image from "next/image";
import Link from "next/link";
import BackgroundSvg from "../components/BackgroundSvg";

export default async function page() {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news');
    const news = await response.json();
    const data = news.data;

    function formatDate(date) {
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const d = new Date(date);
        let month = months[d.getMonth()];
        return `${d.getDate()} ${month} ${d.getFullYear()}`;
    }

    return (
        <main className="">
            <BackgroundSvg />
            <div className="w-[80%] flex flex-col p-12 mx-auto gap-8">
                <h1 className="text-4xl font-semibold text-center">CNN News</h1>
                <div className="flex flex-col gap-4">
                    {data.slice(0, 10).map((data) => (
                        <div className="flex rounded-lg shadow-md bg-white-primary" key={data.title}>
                            <Image className="w-auto lg:h-[200px] h-[160px] rounded-s-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                            <div className="flex flex-col p-5 justify-between">
                                <div className="flex flex-col gap-3">
                                    <Link className="lg:text-xl text-sm font-bold" href={data.link} target="_blank">{data.title}</Link>
                                    <p className="text-base text-gray-500">{data.contentSnippet}</p>
                                </div>
                                <p className="text-sm text-gray-500">{formatDate(data.isoDate)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}