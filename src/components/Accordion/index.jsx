import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'Como contrato os serviços de fretes?',
    answer:
      'Utilizar os serviços de frete da RG Transportes é fácil e eficiente. Entre em contato conosco por telefone ou WhatsApp, e nossa equipe especializada cuidará de tudo, garantindo uma experiência sem preocupações. Oferecemos uma variedade de serviços, desde fretes sob demanda até a logística completa de safras. Confie em nós para suas necessidades de transporte e logística.',
  },
  {
    question: 'Como são os processos de fretes?',
    answer:
      'Contamos com uma frota variada, motoristas experientes e processos seguros, como rastreamento de carga, seguro, telemetria e muito mais. Além disso, utilizamos sistemas tecnológicos avançados que nos auxiliam em cada etapa, garantindo que tudo ocorra conforme o planejado e com a máxima eficiência. Combinando a expertise de nossa equipe com o suporte tecnológico, asseguramos que seus fretes sejam realizados de forma eficaz e sem contratempos.',
  },
  {
    question: 'Sou motorista, como me cadastro?',
    answer:
      'Na RG Transportes, tornar-se um de nossos motoristas é fácil e seguro. Temos um sistema de cadastro dedicado para proteger as informações dos motoristas. Após o cadastro, nossos atendentes podem encaminhar fretes diretamente para você. Também é possível acessar a seção "Fretes" em nosso site e se candidatar para realizar fretes adicionais. Conte conosco para uma parceria sólida e oportunidades de trabalho consistentes.',
  },
  {
    question: 'Qual a abrangência de atendimento?',
    answer:
      'Na RG Transportes, temos o orgulho de oferecer um serviço completo em todo o estado de Goiás. Estabelecemos parcerias em toda a região do Triângulo Mineiro, colaborando com motoristas e transportadoras locais para garantir o melhor para nossos clientes por meio de nossa vasta rede de parceiros. Com essa cobertura abrangente, cuidamos de todos os detalhes e garantimos a tranquilidade de nossos clientes em cada etapa do transporte. Conte conosco para uma solução de logística confiável e eficiente, onde quer que sua carga precise chegar.',
  },
  {
    question: 'Quais são nossos diferenciais?',
    answer:
      'Nossos valores são alicerçados em pilares sólidos: integridade, transparência, dedicação e entusiasmo pela atividade. Esses fundamentos guiam cada passo da nossa equipe, assegurando um serviço seguro e claro. Com mais de uma década de experiência, nossa equipe adquiriu um vasto conhecimento, capacitando-nos a enfrentar todos os obstáculos do transporte com segurança e eficácia. Na RG Transportes, você pode confiar não apenas em um serviço de excelência, mas também em uma parceria embasada em honestidade e profissionalismo.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
