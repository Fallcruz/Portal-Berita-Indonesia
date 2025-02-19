import Image from "next/image";
import Link from "next/link";
import BackgroundSvg from "./components/BackgroundSvg";
import { cnn, kumparan, cnbc, republika, antara } from "./data/News";
import {HomeNewsCard} from "./components/NewsCard";

export default async function Home() {
    // const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news');
    // const news = await response.json();
    // const data = news.data;
    const dataKumparan = await kumparan();
    const dataCnn = await cnn();
    const dataCnbc = await cnbc();
    const dataRepublika = await republika();
    const dataAntara = await antara();

    return (
        <main className="">
            <BackgroundSvg />
            <div className="lg:w-[80%] w-[90%] flex flex-col p-6 mx-auto gap-8">
                <div className="flex flex-col text-center font-plus-jakarta-sans mt-32 mb-12 gap-8">
                    <h1 className="lg:text-5xl text-4xl text-black-primary font-black tracking-normal">Portal Berita Indonesia</h1>
                    <p className="lg:text-lg text-sm text-gray-600 lg:leading-7 leading-6 lg:px-48">Selamat datang di Portal Berita Indonesia, Dapatkan kabar terbaru dari sumber terpercaya hanya di sini.</p>
                    <div className="flex flex-wrap justify-center lg:text-base text-xs gap-2">
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/kumparan-news">Kumparan News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/cnn-news">CNN News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/cnbc-news">CNBC News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/republika-news">Republika News</Link>
                        <Link className="bg-purple-500 hover:bg-purple-600 text-white font-bold lg:py-2 py-2 lg:px-4 px-3 rounded-full" href="/antara-news">Antara News</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Kumparan News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataKumparan.slice(0, 10).map((data) => (
                                <HomeNewsCard key={data.title} image={data.image.large} title={data.title} link={data.link} date={data.isoDate} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">CNN News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataCnn.slice(0, 10).map((data) => (
                                <HomeNewsCard key={data.title} image={data.image.large} title={data.title} link={data.link} date={data.isoDate} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">CNBC News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataCnbc.slice(0, 10).map((data) => (
                                <HomeNewsCard key={data.title} image={data.image.large} title={data.title} link={data.link} date={data.isoDate} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Republika News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataRepublika.slice(0, 10).map((data) => (
                                <HomeNewsCard key={data.title} image={data.image.small} title={data.title} link={data.link} date={data.isoDate} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Antara News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataAntara.slice(0, 10).map((data) => (
                                <HomeNewsCard key={data.title} image={data.image} title={data.title} link={data.link} date={data.isoDate} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Okezone News</h2>
                    <div className="w-full horizontal-scroll overflow-x-scroll pb-1 px-1">
                        <div className="flex flex-row w-min gap-6">
                            {dataOkezone.slice(0, 10).map((data) => (
                                <div className="lg:w-[350px] w-[280px] relative rounded-lg shadow-md bg-white-primary" key={data.title}>
                                    <div className="w-full lg:h-[400px] h-[350px]">
                                        <Image className="w-full h-full object-cover object-top rounded-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                                    </div>
                                    <div className="absolute bg-white-blur backdrop-blur-md start-0 bottom-0 rounded-b-lg">
                                        <div className="flex flex-col lg:min-h-[160px] min-h-[140px] justify-between p-5 gap-3">
                                            <Link className="lg:text-xl text-base font-bold hover:underline" href={data.link} target="_blank">{data.title}</Link>
                                            <p className="text-sm text-gray-700">{data.categories}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="w-full h-[50px]"></div>
        </main>
    );
}
