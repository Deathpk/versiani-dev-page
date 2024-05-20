'use client'
import Image from "next/image";

export default function AboutUs() {
    return(
        <section id="aboutus" className="bg-white dark:bg-gray-900 w-screen h-screen">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Afinal, como tudo começou?</h2>
                    <p className="mb-4">Tudo começou com dois grandes amigos apaixonados por tecnologia, onde ao trabalhar no mesmo projeto duas vezes, e após ver que a sincronia era boa decidiram começar a pegar mais trabalhos juntos e então desenvolve-los no tempo livre.</p>
                    <p>Nossa sincronia foi tão boa que nos juntamos para criar a Versiani Works, onde oferecemos soluções de software de alta qualidade. Possuímos experiência com Gerenciamento de projetos de software, desenvolvimento de APIs REST Robustas seguras e com alta disponibilidade, utilizando padrões de projeto e ferramentas modernas. Além disso, possuímos experiência nos nichos de ERP, PDV, Eventos e Gestão de Estoque.</p>
                    <br></br>
                    <p>Até então já trabalhamos em um total de 4 projetos juntos, e o seu pode ser o próximo &#128521; .</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        className="w-full rounded-lg"
                        width={800}
                        height={500}
                        alt="Picture of the author"
                    />
                    <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        width={800}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </section>
    )
}