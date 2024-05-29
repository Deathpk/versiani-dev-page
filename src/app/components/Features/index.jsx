'use client'
import Image from "next/image";

export default function Features() {
    return(
        <section className="bg-gray-100">
            <h1 className="text-3xl font-bold text-center mt-8">Oferecemos soluções em</h1>
            <div className="mt-2 p-12 flex flex-col items-start gap-4 lg:flex-row">
                <div className="flex items-center text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>

                </div>
                <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
                    <h3 className="mb-4 text-lg leading-6 text-slate-700">
                    Desenvolvimento Web
                    </h3>
                    <p className="text-slate-500">
                    De sites institucionais a e-commerce e soluções de automação, garantimos uma solução de ótima qualidade para sua necessidade, independentemente da complexidade, sempre utilizando tecnologias atuais do mercado.
                    </p>
                </div>

                <div className="flex items-center text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                </div>
                <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
                    <h3 className="mb-4 text-lg leading-6 text-slate-700">
                    Consultoria em Software
                    </h3>
                    <p className="text-slate-500">
                    Precisa de uma consultoria especializada para criar sua próxima solução em software? Você pode contar com a Versiani Works. Temos mais de 6 anos de experiência em análise e desenvolvimento de soluções.
                    </p>
                </div>

                <div className="flex items-center text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </div>
                <div className="flex w-full min-w-0 flex-col items-start justify-center gap-0 text-base">
                    <h3 className="mb-4 text-lg leading-6 text-slate-700">
                    Automatização de processos
                    </h3>
                    <p className="text-slate-500">
                    Cansado de perder horas jogando tudo em uma planilha e gastando muito tempo para achar uma função no Excel? Ou talvez você tenha dificuldade em encontrar um determinado registro nas milhares de linhas da planilha? Por que não automatizar o processo? Podemos prover automatizações para o backoffice da sua empresa.
                    </p>
                </div>
            </div>
        </section>
    );
}