import Link from "next/link";
import BackgroundSvg from "../components/BackgroundSvg";
import {cnbc} from "../data/News";
import {PageNewsCard} from "../components/NewsCard";

export default async function page() {
    const datacnbc = await cnbc();

    return (
        <main className="">
            <BackgroundSvg />
            <div className="lg:w-[80%] w-[90%] flex flex-col lg:p-12 p-6 mx-auto gap-8">
                <div className="flex items-center justify-between">
                    <div className="basis-[40px]">
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lg:w-10 w-6 lg:h-10 h-6 cursor-pointer">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                            </svg>
                        </Link>
                    </div>
                    <div className="basis-[60%]">
                        <h1 className="lg:text-4xl text-2xl font-semibold text-center">CNBC News</h1>
                    </div>
                    <div className="basis-[40px]"></div>
                </div>
                <div className="flex flex-col gap-4">
                    {datacnbc.map((data) => (
                        <PageNewsCard key={data.title} image={data.image.large} title={data.title} link={data.link} description={data.contentSnippet} date={data.isoDate} />
                    ))}
                </div>
            </div>
        </main>
    );
}