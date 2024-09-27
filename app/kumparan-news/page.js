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
                <h1 className="text-4xl font-semibold text-center">Kumparan News</h1>
                <div className="flex flex-col gap-4">
                    {dataKumparan.slice(0, 10).map((data) => (
                        <div className="flex rounded-lg shadow-md bg-white-primary" key={data.title}>
                            <div className="basis-[40%]">
                                <Image className="w-full h-full object-cover rounded-s-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/>
                            </div>
                            {/* <Image className="w-auto lg:h-[200px] h-[160px] rounded-s-lg" src={data.image.large} width={500} height={500} alt="image" quality={100}/> */}
                            <div className="basis-[60%] flex flex-col p-5 justify-between">
                                <div className="flex flex-col gap-3">
                                    <Link className="lg:text-xl text-sm font-bold" href={data.link} target="_blank">{data.title}</Link>
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