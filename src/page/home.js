import TextBlock from "../components/descricao"
import RedesSociais from "../components/lista_redes_sociais"
import AlinhadoComFoto from "../components/principal_buttons"
import QuadradoComConteudo from "../components/square_with_content"
import fogaozinho from '../assets/fogaozinho.png';
import fogaozinho2 from '../assets/fogaozinho2.png';
import fogaozinho3 from '../assets/fogaozinho3.png';
import fogaozinho4 from '../assets/fogaozinho4.png';
import fogaozinho5 from '../assets/fogaozinho5.png';


const Home = () => {
    return (<div>
        <div style={{ marginRight: "0", marginLeft: "0" }}>
            <AlinhadoComFoto texto1={'Agende pelo whatsapp'} texto2={'Agende por ligacao'} corBotao1={'#34AF22'} corBotao2={"#F56A06"} />
        </div>
        <TextBlock
            descricaoCima="Nossos serviços em assistência técnica"
            titulo="Serviços especializados para Fogões e Fornos em Maceió"
            descricaoBaixo="Conserto, instalação e conversão com garantia e qualidade. Atendemos no local para resolver qualquer problema do seu fogão."
        />
        <div style={{ display: "flex",flexWrap:'wrap', alignItems:'center', margin:'auto', gap: "30px", maxWidth: '1300px',marginLeft:'10px' ,marginRight:'10px' }}>
            <QuadradoComConteudo title="Conserto de Fogão" descricao="Conserto de Fogão em Maceió: soluções rápidas e seguras com técnicos especializados. Agende já seu reparo!" imagem={fogaozinho} title2={'Conserto de Fogão'} desc2={'Oferecemos um serviço completo de conserto de fogão residencial na cidade de Maceió, garantindo soluções rápidas e eficientes para qualquer problema relacionado ao seu fogão, cooktop ou forno. Trabalhamos com técnicos especializados que utilizam ferramentas adequadas e peças originais para assegurar a máxima qualidade e segurança no reparo.'} />
            <QuadradoComConteudo title="Instalação de Fogão" descricao="instalação de Fogão e rede de gás com segurança e eficiência. Atendimento especializado para residências e comércios!" imagem={fogaozinho2} title2={'Instalação de Fogão'}desc2={'Oferecemos um serviço completo e especializado para instalação de fogão e projetos de rede de gás, atendendo às necessidades de prédios, condomínios, estabelecimentos comerciais, industriais e residências. Nossa equipe é composta por profissionais altamente capacitados, garantindo segurança, eficiência e conformidade com todas as normas técnicas.'}/>
            <QuadradoComConteudo title="Conversão de Fogão" descricao="GLP para GN ou vice-versa com segurança e eficiência. Ajuste perfeito e conforme normas técnicas!" imagem={fogaozinho3} title2={'Conversão de Fogão'} desc2={'Somos especialistas na conversão de fogões, garantindo que seus aparelhos estejam perfeitamente ajustados para operar com o tipo de gás disponível, seja GLP (gás de botijão) ou GN (gás natural). Além disso, oferecemos serviços complementares para redes de gás internas, assegurando eficiência, segurança e conformidade com as normas vigentes.'}/>
            <QuadradoComConteudo title="Instalação de Medidor de Gás" descricao="Instalação de Medidor de Gás com segurança e precisão. Fale no WhatsApp e peça seu orçamento agora." imagem={fogaozinho4} title2={'Instalação de Medidor de Gás'} desc2={'Oferecemos soluções completas para a instalação de medidores de gás em Maceió Pessoa, garantindo medição precisa, segurança e eficiência no fornecimento de gás. Atuamos em residências, prédios, condomínios, restaurantes, estabelecimentos comerciais e industriais. Além disso, prestamos serviços complementares para redes de gás, assegurando qualidade em cada etapa do processo.'}/>
            <QuadradoComConteudo title="Instalação de Tubulação de Gás" descricao="Instalação de Tubulação de Gás com precisão e segurança. Conte com nossa equipe especializada. Solicite seu orçamento!" imagem={fogaozinho5} title2={'Instalação de Tubulação de Gás'} desc2={'Oferecemos um serviço completo e especializado na instalação de tubulações de gás, atendendo residências, prédios, condomínios, restaurantes, estabelecimentos comerciais e industriais. Nossa equipe técnica é altamente capacitada para planejar, instalar e manter sistemas de gás de forma eficiente e segura, garantindo a conformidade com as normas técnicas e regulamentações vigentes.'}/>

        </div>
        <RedesSociais />
    </div>)
}
export default Home