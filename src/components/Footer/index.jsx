import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
const copyrightLinks = [
  {
    title: 'Desenvolvido por Intelly Soluções © 2024',
    href: 'https://www.intellysolucoes.com/',
  },
];

const serviceMenu = [
  {
    title: 'Sobre nós',
    href: '/about',
  },
  {
    title: 'Serviços',
    href: '/service/nossos-servicos',
  },
  {
    title: 'Apresentação',
    href: 'https://drive.google.com/file/d/1-uo8WQ_zGY0Um_-2DNvhri0pf5PwfH4J/view',
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.png"
                  logoAlt="Logo"
                  text="Bem-vindo à sua rota segura e confiável, onde cada viagem é uma jornada tranquila e sem preocupações."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Mapa do site" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contato" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Cadastro"
                  subtitle="Cadastre-se e receba por email novidades e informações!"
                  placeholder="Insira seu email"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
