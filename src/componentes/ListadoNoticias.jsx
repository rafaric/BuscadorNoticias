import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Header, Container } from 'semantic-ui-react';
import  estilos  from './ListadoNoticias.module.css';
import uuid from 'react-uuid';

const { DateTime } = require("luxon");

const Noticia = ({
  noticia,
  onChange
}) => {
    const onCardClick = () =>{
      
    };
    const fecha = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.DATE_SHORT);
    const hora = DateTime.fromISO(noticia.publishedAt).toLocaleString(DateTime.TIME_24_SIMPLE);
    return (
      <Card onClick={onCardClick} className={estilos.tarjeta} href={noticia.url} target='_blank'>
        <Image src={noticia.urlToImage} size='small' className={estilos.img}/>
        <Card.Content className= {estilos.contenido}>
          <Container className={estilos.titular}>
            <Header size='medium'>
              {noticia.title}
            </Header>
            <div className={estilos.source}>
              {noticia.source.name}
            </div>
          </Container>
          <p>{noticia.description}</p>
          <Header size='tiny'>
            Publicado el: {fecha} a las {hora} hs - AUTOR:  {noticia.author}
          </Header>
        </Card.Content>
      </Card>
    )
  };



export const ListadoNoticias = ({ noticias }) => {
  
  const navigate = useNavigate();
  const onNoticiaClick =({ imdbID }) =>{
      navigate(`/buscador/${imdbID}`);
  }
  return (<section style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    
  }}>
    {
      noticias.map((noticia) => {
        return <Noticia noticia={noticia} key={uuid()}onChange={onNoticiaClick}/>
    })
    }
  </section>)
}

export default ListadoNoticias;
