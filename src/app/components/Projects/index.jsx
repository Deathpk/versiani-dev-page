'use client'

import Image from 'next/image';
import airsoftZone1 from "@/app/assets/images/airsoft-zone-1.png";
import airsoftDrop1 from "@/app/assets/images/airsoft-drop-1.png";

export default function Projects() {
    const projects = [
        {
          title: "Airsoft Zone",
          description: "Sistema de gerenciamento de eventos e venda de ingressos de Airsoft. Feito para o Youtuber John Airsoft, ele conta com um dashboard para acompanhamento de métricas e um painel administrativo para o backoffice. Possui integração com pagamentos via Mercado Pago, além disso também possui um sistema para confirmação de ingressos com QR code. O AirsoftZone já promoveu a venda de ingressos de vários eventos famosos da cena de Airsoft no Brasil.",
          image: airsoftZone1,
          link: "https://airsoftzone.com.br",
        },
        {
          title: "Airsoft Drop",
          description: "Sistema para gerenciamento e venda de tickets para Sorteios relacionados a equipamentos de Airsoft. Conta com um painel administrativo para o backoffice, integração de pagamentos via Mercado Pago e Dashboard com métricas.",
          image: airsoftDrop1,
          link: "https://airsoftdrop.com.br",
        },
      ];

    return(
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Alguns Cases de sucesso</h1>
            <div className="space-y-24">
                {projects.map((project, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } items-center md:items-start`}
                >
                    <div className="md:w-1/2">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={500}
                        className="w-full h-96 object-cover"
                    />
                    </div>
                    <div className="md:w-1/2 p-6">
                        <h2 className="text-4xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 mb-6">{project.description}</p>
                        <a href={project.link} 
                            className="px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            target="_blank"
                        >
                            Conheça nosso trabalho
                        </a>     
                    </div>
                </div>
                ))}
            </div>
    </div>
    );
}