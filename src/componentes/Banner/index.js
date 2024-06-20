import './banner.css'


function Banner() {
    return (
        <div className='banner'>

            <div className='apresentacao'>
                <h1 className='titulo'>
                    SEO com React
                </h1>

                <p className='paragrafo'>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
                </p>
            </div>

            <div className='imagens'>
                <img
                    className='imagensa'
                    src="https://s3-alpha-sig.figma.com/img/66b1/c3df/1157a06d0979f3c0f7f0de4114c0ea72?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYcgNKheJh7IYLv5BHIEcn1EylR7Z88OKzTReUOZodSZiSOUHQCWFRqg33eXLJnPcU-hRS07akX~MivMWz8aPbAAo5-i11EOiRrGIEEhX5NbXDJaBsxuBdP6GOJBSSDHl1DeTq-3e4YDioVddsjohiUYRaZ9rgEb935xXoe0eetPaiAvckhd9LhW~z7XKt0E8~u8Y5khCJpGVTCwA9tRw8jbodibkLNm1~qXs1C7cNOuJE6AZ5rt7y0wAe0xmrcPo54vp4ZPoHR6MQQwO10EvTa5NcbH5tMAbKbzPRqTWH6t~CCf1Mjc6kaAYuja2Db3UL5jiKP5jsWGpn70Au3vQQ__"
                    alt="Video"

                />
            </div>
        </div>
    )
}

export default Banner