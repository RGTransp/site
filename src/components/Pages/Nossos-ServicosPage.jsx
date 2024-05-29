import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'

export default function ServiceDetailsPage() {
  pageTitle('Nossos serviços');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Nossos serviços'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      />
      
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">O que a RG pode te oferecer:</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
              <Button  btnText='Carreta Basculante' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnText='Carreta Graneleiro' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnText='Carga e Descarga' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnText='Carga Assegurada' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnText='Documentação Completa' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnText='Atendimento Personalizado' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      
    </>
  )
}
