'use client'
import Image from 'next/image';
import mike from "@/app/assets/images/mike.jpeg";
import alexandre from "@/app/assets/images/alexandre.jpeg";

export default function OurTeam(){
    const members = [
        {
            name: "Michel Versiani",
            role: "Analista e Desenvolvedor Backend",
            about: "Formado em Análise e Desenvolvimento de Sistemas e ativo na área á pouco mais de 3 anos, apaixonado por resolver problemas com software e automação, apaixonado por PHP moderno e por ciclismo.",
            photo: mike
        },
        {
            name: "Alexandre Guimarães",
            role: "Analista e Desenvolvedor Fullstack",
            about: "Formado em Análise e Desenvolvimento de Sistemas e ativo na área á pouco mais de 3 anos, apaixonado por resolver problemas com software e automação, apaixonado por PHP moderno e por ciclismo.",
            photo: alexandre
        }
    ];

    return (
        <section>
            <div className="container flex justify-center px-6 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                {members.map((member, index) => (
                    <div className="col-span-4 lg:col-span-6" key={member.name} >
                        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                            <figure className="flex-1">
                                <Image
                                    src={member.photo}
                                    alt={member.role}
                                    width={300}
                                    height={500}
                                    className="object-cover min-h-full aspect-auto rounded-lg"
                                />
                            </figure>
                            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                                <header className="flex gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-slate-700">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-slate-400">{member.role}</p>
                                    </div>
                                </header>
                                <p>{member.about}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
      </section>
    );
}