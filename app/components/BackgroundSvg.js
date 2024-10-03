import Image from "next/image";

export default function bg_svg() {
    return (
        <div className="relative overflow-hidden">
            {/* <div className="fixed top-0 bottom-0 w-full bg-purple-100/15 -z-[50]"></div> */}
            <Image className="w-auto h-auto fixed lg:start-[-20px] start-[-180px] top-0 -z-[40]" src='/element-1.svg' width={500} height={500} alt="image" quality={100} priority/>
            <Image className="w-auto h-auto fixed lg:end-[-20px] end-[-180px] top-0 -z-[40]" src='/element-2.svg' width={500} height={500} alt="image" quality={100} priority/>
        </div>
    );
}