import { useState } from "react";
import Formulario from "../../componentes/Formulario"
import Time from "../../componentes/Time"

function NovoVideo () {

    const times = [
   
        {
          nome: 'FRONT END',
          corPrimaria: '#E8F8FF'
          
        },
        {
          nome: 'BACK END',
          corPrimaria: '#F0F8E2'
        },
        {
          nome: 'MOBILE',
          corPrimaria: '#FDE7E8'
        },
        
      ]
    
     const inicial = [ //Dados Iniciais
        {
          nome: 'Video 01',
          cargo: 'Video 01',
          imagem: 'https://s3-alpha-sig.figma.com/img/72c1/7da1/d10198eff4bae1c7afbe70603b102473?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wv~u3p4LxSSh7z02dMgQ0GfMJ11oT7eFyywuCV~rRgm-HlcUMQsShWM5ALmT4Bql9pCDvgpwHqPweKUk7tQTHwDT9n6WwRNe7eUHeEMmOk028fIJ8SO-sMKrUo4o3c7QqbMRtTDsCoCMGpre4EuMgn2WBS5DXJ6bhf2TEvEqK~EWCIsjolo6LNGUUh7yBcgiSsm22MfX2T9x4MbBSl0l-uS35fANsmfqo0iUbczp9St24I0eCFq59kUVXUjuxPeVjHkfaSmvHpfIbRqdhOoZxH6N~V2AI3I0pbUxFn3UP8twuZDo1gK2SwfGFAFBQuFDgJGWmiRNKlV-32zotLJ~dw__',
          time: times[0].nome,
          descricao: 'Video 01'
        },
        {
          nome: 'Video 02',
          cargo: 'Video 02',
          imagem: 'https://s3-alpha-sig.figma.com/img/a674/13ce/921a6389c9afc41cb402e5d88f0a4f77?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nj9OneIUMiMgKPCN3Y9SYBiM1EhBzwyQ28RMnQ78nyckd99v7AlhNnh-pL53qezOsPJKGvknA3adSqvYcgnT7aKbfdFj0ZJPWLRqWfXsVCmXniUrIFl3Q4RIobLrdKNyUzIvU6VhUGuMD1MvC9v4kmbGie3ny2PKpKvzFbdkODlEHSvYN5QQ94~ZCRpZwwTj04rN74H1dgljHT~JH0d4B9dYZyHVwQZL7kNb4kT2GJpcaZ9CrFprtEMuCOz~DbqBk43vQPu6Eo8E~r68xadPLaq1hbF7eryYk2TgTuxdc3iTD3fS5UuZHj3oSyExc8VOfqqtJMxIflh2P4a6g~usGA__',
          time: times[0].nome,
          descricao: 'Video 02'
        },
        {
          nome: 'Video 03',
          cargo: 'Video 03',
          imagem: '	https://s3-alpha-sig.figma.com/img/6c2c/1a0a/6090ee6fcfafcda1093c009e506d7a42?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1BqVZGIBSUkSTIOD~~ih1g8VU8Id5XHORoeVLsjWncgfFc-MxxEaCd5OP3toaOjHssHTGC~qQ1kAb8VOkiUgbJNfH1FRsbrnGfylincGVB6UVdbv0JcUeom8Qp2UnIEs8n8PVEqJyFQRO3U4HzY4A0E1I5pXyRlN1r05CTP6jbcaKYqGq8Zo8IEldANDUjC6Og6224~ELivHx3Nri0pom~IWjlW7Z-EE-Kd7X5PtO0pPO1bpuoAQy-ghkXqI8kq7F5b1x0j9Va0K0Sv6ZJIJrWb7O5C1~ChE7fHGx6t46ebpktWwn-5obd7zvLP-fRDX1s1JPvHY3U0svSEjdxoNg__',
          time: times[0].nome,
          descricao: 'Video 03'
        },
        {
          nome: 'Video 04',
          cargo: 'Video 04',
          imagem: '	https://s3-alpha-sig.figma.com/img/b835/e79f/4405eb8f4b516ca01de1f4df6c096f27?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5MXcBLav8ptuTdfzq9c-Itp1Ly7yqJtlAY8WBMJdblh~0G6mhs2rMyjlrn9O2zVDXFXyttd~zR~oiS47XnlpupCYjneT8fDh7l2kihw0RNvFE2oSnoy18AzZC9PYfPkDxorSQesOI5ddW0DobMm5DPEaFrWsDMa9PX0WnIUhLdt0NuPrnSRCzJesWSkVq5-1-Zj1~-lGyNyKHXXIjiIg3hDgeAgjW3bAhyU3l0ZHDvgSESx3RPjC4hAiQnPTAI-LdXSlc34BhDBL6haN2OpE5VIWtzOUrmuvq9hy6F1Q~Q-NrN5l4KMbzYIvUT8MULMCMhtlzN2kl7YktEs36ShwA__',
          time: times[1].nome,
          descricao: 'Video 04'
        },
        {
          nome: 'Video 05',
          cargo: 'Video 05',
          imagem: 'https://s3-alpha-sig.figma.com/img/cbd7/dbda/25110b0f35786393dc14dac9ce1002c4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q4qpj6~m19F7mlCUzynYkLl32u0yUVphrY9eBeNguCx-7KGDjU-HAgM9rtW3Bx7YbojHEP0jgojqtB72ZqWb83iigZAPbio74jPrAKuyIePE1ruzkq~JuOJ-ZO5gPVLaD3dR2QJo4wtPBgycCGJ1ov7ybSYviYFN4~rdqTt-c3Cb1ePETry1nA3Zm1FwKYYpwuIHutrx4rPdgY3I~6A8tDuz6~imEMXYppQvdr7~YNGMJ1Mr86vU-dfQXqV4iDw2PcwLqltlhEpj8yqIATzf6LDJouCmby4qXFArt6m5SpB0sHlY6PCee41CYSNq2VIrwDijbVvCLeyI-UEtcvayTw__',
          time: times[1].nome,
          descricao: 'Video 05'
        },
        {
          nome: 'Video 06',
          cargo: 'Video 06',
          imagem: 'https://s3-alpha-sig.figma.com/img/e268/8232/062bbf4bd15d0d94cd3c07c0162f561c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0mffdZgpY16va6JLnPHw5A63h2y-c0zaYTQSwWb2vgwnHNCxCGYpdBmw59~zADbRXbMp0WgVxc412KIFag541LDOFVdn~ZIWiO1qwwSChIfXT6pYYQx9~nYzANzGrNd4cuvhnPHaSv65ERiYeBeuwR1QP2HChd9tY3B7Z9MXqoRUBonB7IzrJUlcSO2mdnPF~UnZrFyugAFANt9zbcvPPPe9SLAOdqDrAzzddrmepkSLCFtnoTFUtRK0vC0y3CbxkvPYpVIIhyGjALd116u1c0I8OpmmqM00knsJBKgmx29EZ46Kf25fWocB9p-iXn1~lbLimYWq3HZ3v2qRTX6xw__',
          time: times[1].nome,
          descricao: 'Video 06'
        },
        {
          nome: 'Video 07',
          cargo: 'Video 07',
          imagem: 'https://s3-alpha-sig.figma.com/img/23b5/5e7b/83c6f81a27da40c9288af82662028c17?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fr5889oPKPrJIGJKBbsuIIXDI~xNXLEnFwoMPcygxUiCITafWkzHI5AvN6vRf6VkEP5-WnXCbrNDdR9acYpKp~bFBEdLkI9Lh9Dd-eKUWdQNf51nnpxK-7viFqT8vZx7cpRe0f26G8AF8HfvQu8Dufo3Km4ZcT4GSIowGf84svfdKukwhrt7BhGWJFBlQdB6JJR9TKbGYMitWyU0D9Iu9WUQmC9CYX9zwn5c39~Cb04n6Xuci--IqTfHhlkmRSMPt9JIMeE~j6S4D4Haju69vQMqyOXNMM4ps62v6K0QVZHQVieeMu9Q~s-RRm-5n4HLIXQ1lNHH3zZczXeg8cG83Q__',
          time: times[2].nome,
          descricao: 'Video 07'
        },
        {
          nome: 'Video 08',
          cargo: 'Video 08',
          imagem: 'https://s3-alpha-sig.figma.com/img/ef03/8443/082c1629fd1180cd904cb5779795963e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m058LjMTabaOo9JzTEpe8ZGLclXjeo7yRVUz1PIm9wBKoH~3Q7lC7YbrUM9fZsZmBkdBdzc~4tw2HFdhFeZKIZhr6DeCw2lku0pG4eaTQT0XbrwY6WQ1Oi9V3JlZdqxTE7oCSnvumvALNu2ac6eGITTPj5YkoKjc38eP257gKpdDZ4UN-tbTjU8Yw~nKFl3N9FSuVv-BQZ19kReng6pd8TS5Wd20gxHIIiakZtj8wNEzhKSV1Qy3HkdVve5s7dPBz3IP8tnylGqf1MBQ2VvsB4XGzbuv1aWWaec8A39IRjgE29Qur5l8A1AsJINxkjt8t6KR8dKvYQUQDDvlM2esjQ__',
          time: times[2].nome,
          descricao: 'Video 08'
        },
        {
          nome: 'Video 09',
          cargo: 'Video 09',
          imagem: 'https://s3-alpha-sig.figma.com/img/f9e5/5ebc/668a8b672f914d14f6d85a0777e4cfef?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gC0wb~--75NKFstBuvzWQ-wgfgL~GheT9Ef97WQz1oLqVQy1zTmwMYw33lVSCMOvvp-Hl9qJzFTJ-pFqI2GlExmJyQcLK-vacjZYPOpOorVwPgE9kJs-RiZE65qS9rUsyyDXWBqmW-zPwEKRJnzCTxC-yjvhO95jHvowAsCYGaFH3TChV58mJLDNdyLAQYcw8-yJb5hO~FWYgTK8iwhiPs1r3EXnKO~bXuwbSvvh8BDIvooGaxvYZl0IXdcsV8cCvkBbE8fGpc~5PBfWZB57Vo5f4SvzrsbU-GwL49Hkx35QDFowDlhotHv6CIM5jsHW7uA9HqlPJY0xxPHKoEeJCQ__',
          time: times[2].nome,
          descricao: 'Video 09'
        },
     
    ]
     
      const [colaboradores, setColaboradores] = useState(inicial)

    return (
    <><div>

            <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
            <section className="times">
                {times.map((time, indice) => <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
            </section>

        </div></>
    )
}
export default NovoVideo