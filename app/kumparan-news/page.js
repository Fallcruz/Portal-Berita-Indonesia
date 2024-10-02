import Image from "next/image";
import Link from "next/link";
import BackgroundSvg from "../components/BackgroundSvg";
import {formatDate} from "../components/FormatDate";
import {kumparan} from "../data/News";

export default async function page() {
    const dataKumparan = await kumparan();

    return (
        <main className="">
            <BackgroundSvg />
            <div className="w-[80%] flex flex-col p-12 mx-auto gap-8">
                <div className="grid grid-cols-3">
                    <Link href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 cursor-pointer">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                        </svg>
                    </Link>
                    <h1 className="text-4xl font-semibold text-center">Kumparan News</h1>
                </div>
                <div className="flex flex-col gap-4">
                    {dataKumparan.map((data) => (
                        <div className="flex rounded-lg shadow-md bg-white-primary" key={data.title}>
                            <div className="basis-[40%]">
                                <Image className="w-full h-full object-cover rounded-s-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                            </div>
                            <div className="basis-[60%] flex flex-col p-5 justify-between">
                                <div className="flex flex-col gap-3">
                                    <Link className="lg:text-xl text-sm font-bold hover:underline" href={data.link} target="_blank">{data.title}</Link>
                                    <p className="text-base text-gray-500">{data.description}</p>
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