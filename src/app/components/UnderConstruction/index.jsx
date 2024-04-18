'use client'
import underConstruction from "@/app/assets/images/versiani-works-full-logo.png"
import Image from "next/image";

export default function UnderConstruction() {
    return(
        <div>
            <Image
                src={underConstruction}
                className=""
                width={800}
                height={500}
                alt="Picture of the author"
            />
            <p className="text-2xl text-center">Em construção...</p>
        </div>
    );
}