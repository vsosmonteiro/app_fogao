import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Service({ }) {

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const location = useLocation();
    const { title, desc } = location.state || {};
    return (
        <div style={{ minHeight: "100vh", color: "#545152", marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <titlefog>
                        <div style={{ justifyItems: "left", marginLeft: 20 }}>
                            <div style={style.desc1}>
                                SERVIÇO
                            </div>
                            <div style={style.desc2}>
                                {title ?? 'Instalação de Fogão em João Pessoa'}
                            </div>

                        </div>
                    </titlefog>
                    <div style={{ ...style.desc3, width: "80%" }}>
                        {'Oferecemos um serviço completo e especializado para instalação de fogão e projetos de rede de gás, atendendo às necessidades de prédios, condomínios, estabelecimentos comerciais, industriais e residências. Nossa equipe é composta por profissionais altamente capacitados, garantindo segurança, eficiência e conformidade com todas as normas técnicas.'}
                        <div>
                            <div style={style.title}>
                                Quais os serviços que a Dr. Fogão oferece?

                            </div>

                            <div>
                                * Conserto de fogões residenciais: diagnóstico e reparo de falhas em queimadores, válvulas de gás, acendedores automáticos, termostatos e outros componentes.
                            </div>
                            <div>* Instalação de fogões, cooktops e fornos: instalação precisa e alinhada com todas as normas de segurança, seja em gás GLP ou GN.
                            </div>
                            <div>* Conversão de gás: realizamos a conversão de fogões de GLP (gás de botijão) para GN (gás natural) e vice-versa, garantindo um funcionamento adequado do aparelho.
                            </div>
                            <div>*
                                Realocação de ponto de gás: adaptação do ponto de gás para atender novas configurações na sua cozinha, com total segurança.

                            </div>
                            <div style={style.title}>
                                Por que escolher a Dr. Fogão?
                            </div>

                            <div>* Técnicos experientes e certificados</div>
                            <div>* Atendimento rápido e personalizado.</div>
                            <div>* Garantia de segurança e eficiência em todos os serviços.</div>
                            <div>* Suporte para marcas e modelos variados.</div>


                            <div style={style.title}>
                                Problemas com o fogão? A Dr. Fogão resolve!
                            </div>

                            <div style={style.title}>
                                Somos especialistas em conserto de fogões em João Pessoa. Garantimos um serviço rápido, seguro e eficiente para deixar seu fogão como novo!

                                Agende agora mesmo e conte com a expertise da Dr. Fogão.
                            </div>

                        </div>
                    </div>

                </div>
                
                {!isMobile && (
  <div style={{ marginTop: 0, marginRight: 30 }}>
    <div style={style.styleRight}>
      Contato Dr. Fogão
    </div>
    <div style={style.button}>
      <FaWhatsapp size={40} />
      <div style={{ marginLeft: 20, textAlign: "left" }}>
        whatsapp
        <div>
          99999-9999
        </div>
      </div>
    </div>

    <div style={{ ...style.button, marginTop: 20, color: "#F56A06" }}>
      <FaPhone size={40} />
      <div style={{ marginLeft: 20, textAlign: "left" }}>
        Telefone
        <div>
          99999-9999
        </div>
      </div>
    </div>
  </div>
)}


            </div>
        </div>

    )
}
export default Service;


const style = {
    desc1: {
        fontSize: 14,
        fontWeight: 800
    },
    desc2: {
        fontSize: 32,
        fontWeight: 800,
        marginBottom: 20,
    },
    desc3: {
        fontSize: 18,
        fontWeight: 400,
        width: '30vw',
        textAlign: 'left',
        marginLeft: 20,
    },
    styleRight: {
        color: "#F56A06",
        fontSize: 32,
        marginBottom: 10,
        fontWeight: 600
    },
    button: {
        border: "2px solid #C7C7C7",
        color: "#32A664",
        justifyItems: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: 600,
        padding: 10,
        paddingLeft: 30,
        display: "flex",
        width: 300,
        borderRadius: 20
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 700
    }
}

