'use client'
import versianiWorksLogo from "@/app/assets/images/versiani-works-logo.png"
import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "../Contact";

export default function MainBanner() {
    return(
        <section className="bg-[#F4F4F4] dark:bg-gray-900 w-screen">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Web Artesãos prontos para construir sua próxima solução em Software</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">De simples Landing Pages á Consultorias e Softwares complexos, arquitetamos cada solução com amor e plena atenção aos detalhes, como eximios artesãos</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image
                        src={versianiWorksLogo}
                        className=""
                        width={800}
                        height={500}
                        alt="Picture of the author"
                        />
                </div>        
            </div>
            <div className="flex items-center justify-center">
                {/* <a href="#cases" className=" px-5 mx-4 py-3 mb-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Conheça nosso trabalho
                </a> */}
                <Link target='_blank' href={WhatsAppLink} className=" px-5 py-3 mb-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Converse Conosco
                </Link>      
            </div>  
        </section>
    )
}