import TextBlock from "../components/descricao"
import RedesSociais from "../components/lista_redes_sociais"
import AlinhadoComFoto from "../components/principal_buttons"
import QuadradoComConteudo from "../components/square_with_content"

const Home=()=> {
    return (<div>   
        <div style={{ marginRight: "0", marginLeft: "0" }}>
            <AlinhadoComFoto texto1={'Agende pelo whatsapp'} texto2={'Agende por ligacao'} corBotao1={'#34AF22'} corBotao2={"#F56A06"} />
        </div>
        <TextBlock
            descricaoCima="Nossos Serviços em assistência técnica"
            titulo="Serviços Especializados para Fogões e Fornos em Maceió"
            descricaoBaixo="Conserto, instalação e conversão com garantia e qualidade. Atendemos no local para resolver qualquer problema do seu fogão."
        />
        <div style={{ display: "flex", justifyContent: 'space-between', marginLeft: "40px", marginRight: "40px", gap: "30px" }}>
            <QuadradoComConteudo title="Conserto de Fogão" descricao="Conserto de Fogão em Maceió: soluções rápidas e seguras com técnicos especializados. Agende já seu reparo!" />
            <QuadradoComConteudo title="Instalação de Fogão" descricao="instalação de Fogão e rede de gás com segurança e eficiência. Atendimento especializado para residências e comércios!" />
            <QuadradoComConteudo title="Conversão de Fogão" descricao="GLP para GN ou vice-versa com segurança e eficiência. Ajuste perfeito e conforme normas técnicas!" />
        </div>
        <div style={{ height: "30px" }}></div>
        <div style={{ display: "flex", justifyContent: 'space-around', marginLeft: "40px", marginRight: "40px", gap: "30px" }}>
            <QuadradoComConteudo title="Instalação de Medidor de Gás" descricao="Instalação de Medidor de Gás com segurança e precisão. Fale no WhatsApp e peça seu orçamento agora." />
            <QuadradoComConteudo title="Instalação de Tubulação de Gás" descricao="Instalação de Tubulação de Gás com precisão e segurança. Conte com nossa equipe especializada. Solicite seu orçamento!" />
        </div>
        <RedesSociais />
    </div>)
}
export default Home