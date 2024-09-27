import Image from "next/image";
import Link from "next/link";
import BackgroundSvg from "./components/BackgroundSvg";
import {cnn, kumparan, tribun} from "./data/News";
import {formatDate} from "./components/FormatDate";

export default async function Home() {
    // const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news');
    // const news = await response.json();
    // const data = news.data;
    const dataCnn = await cnn();
    const dataKumparan = await kumparan();

    return (
        <main className="">
            <BackgroundSvg />
            <div className="lg:w-[80%] w-[90%] flex flex-col p-6 mx-auto gap-8">
                <div className="flex flex-col text-center font-plus-jakarta-sans mt-32 mb-12 gap-8">
                    <h1 className="lg:text-5xl text-4xl text-black-primary font-black tracking-normal">Portal Berita Indonesia</h1>
                    <p className="lg:text-lg text-sm text-gray-600 leading-7 lg:px-48">Selamat datang di Portal Berita Indonesia, Dapatkan kabar terbaru dari sumber terpercaya hanya di sini.</p>
                    <div className="flex justify-center lg:text-base text-xs gap-2">
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/kumparan-news">Kumparan News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/cnn-news">CNN News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/cnn-news">Tribun News</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Kumparan News</h2>
                    <div className="flex lg:flex-row flex-col gap-6">
                        {dataKumparan.slice(0, 3).map((data) => (
                            <div className="lg:basis-[40%] rounded-lg shadow-md bg-white-primary" key={data.title}>
                                <div className="w-full h-[230px]">
                                    <Image className="w-full h-full object-cover rounded-t-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                                </div>
                                <div className="flex flex-col lg:min-h-[180px] justify-between p-5 gap-3">
                                    <Link className="lg:text-xl text-sm font-bold" href={data.link} target="_blank">{data.title}</Link>
                                    <p className="text-sm text-gray-500">{formatDate(data.isoDate)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="lg:text-3xl text-2xl font-semibold">CNN News</h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        {dataCnn.slice(0, 3).map((data) => (
                            <div className="rounded-lg shadow-md bg-white-primary" key={data.title}>
                                <div className="w-full h-[230px]">
                                    <Image className="w-full h-full object-cover rounded-t-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                                </div>
                                <div className="flex flex-col lg:min-h-[180px] justify-between p-5 gap-3">
                                    <Link className="lg:text-xl text-sm font-bold" href={data.link} target="_blank">{data.title}</Link>
                                    <p className="text-sm text-gray-500">{formatDate(data.isoDate)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className="w-full h-[50px]"></div>
        </main>
    );
}
