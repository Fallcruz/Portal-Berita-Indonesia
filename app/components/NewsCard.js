import Image from "next/image";
import Link from "next/link";
import FormatDate from "./FormatDate";

export function HomeNewsCard({ image, title, link, date }) {
    return (
        <div className="lg:w-[350px] w-[280px] rounded-lg shadow-md bg-white-primary">
            <div className="w-full lg:h-[250px] h-[180px]">
                <Image className="w-full h-full object-cover object-top rounded-t-lg" src={image} width={500} height={500} alt="image" quality={100} />
            </div>
            <div className="flex flex-col lg:min-h-[180px] min-h-[180px] justify-between p-5 gap-3">
                <Link className="lg:text-xl text-base font-bold hover:underline" href={link} target="_blank">{title}</Link>
                <p className="text-sm text-gray-500">{FormatDate(date)}</p>
            </div>
        </div>
    );
}

export function PageNewsCard({ image, title, link, description, date }) {
    return (
        <div className="flex lg:flex-row flex-col rounded-lg shadow-md bg-white-primary">
            <div className="lg:w-[40%] w-full">
                <Image className="w-full h-full object-cover lg:rounded-s-lg rounded-s-none lg:rounded-t-none rounded-t-lg" src={image} width={500} height={500} alt="image" quality={100}/>
            </div>
            <div className="lg:w-[60%] w-full lg:min-h-auto min-h-[200px] flex flex-col p-5 justify-between gap-6">
                <div className="flex flex-col gap-3">
                    <Link className="lg:text-xl text-base font-bold hover:underline" href={link} target="_blank">{title}</Link>
                    <p className="lg:text-base text-sm text-gray-500">{description}</p>
                </div>
                <p className="text-sm text-gray-500">{FormatDate(date)}</p>
            </div>
        </div>
    );
}