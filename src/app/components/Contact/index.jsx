'use client'

import Image from 'next/image';
import Link from 'next/link';
import contact from "@/app/assets/images/contact.jpg";


export default function Contact() {
    return(
        <section id="contact" className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Construa sua próxima solução em Software conosco!</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Entre em contato conosco para discutirmos como podemos ajudar sua empresa!</p>
                    <Link target='_blank' href={WhatsAppLink} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Converse Conosco
                    </Link> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        className="rounded-xl"
                        src={contact}
                        alt="contact-banner"
                        width={600}
                        height={320}
                    />
                </div>                
            </div>
        </section>
    );
}

export const WhatsAppLink = "https://api.whatsapp.com/send?phone=+5531995411115&text=Olá, preciso de uma nova solução em software, podemos marcar uma conversa?";