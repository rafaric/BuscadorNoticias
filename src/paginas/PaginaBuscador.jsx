import React from 'react';
import { Container, Header, Icon } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Buscador from "../componentes/Buscador";
import Loading from "../componentes/Loader";
import Paginador from "../componentes/Paginador";
import { getListadoNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom";
import ListadoNoticias from '../componentes/ListadoNoticias';
import estilos from './PaginaBuscador.module.css'



const PaginaBuscador = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalResults, setTotalResults] = useState(1);
    
    

    const buscarNoticia = async (pagina) =>{
        
        setIsLoading(true);
        const { totalResults, articles } = await getListadoNoticias(searchParams.get('query'), pagina);
        console.log(articles);
        if (articles === undefined){
            window.alert('No se pudo conectar a la API. Intente nuevamente mas tarde.')
        }
        setNoticias(articles);
        setCantidadPaginas(Math.ceil((totalResults/10) <= 10) ? totalResults/10 : 10 );
        setIsLoading(false);
        setTotalResults(totalResults);
        if(totalResults === 0){
            window.alert('No hubo resultados');
        }
    }
    
    const onBuscar = async (criterioBusqueda) => {
        setSearchParams({query : criterioBusqueda});
        setPagina(1);
    };

    const onLimpiar = () =>{
        setNoticias();
        setSearchParams();
    }
    const onCambioPagina = async (pagina) => {
        window.scrollTo({top: 0, behavior:'smooth'});
        setPagina(pagina);
        buscarNoticia(pagina);
    };
    
    useEffect(()=> {
        if(searchParams.get('query')){
            buscarNoticia(pagina);
        }
    },[searchParams]);

    

    return (
        <>
        <Header as='h2' className={estilos.logo} icon textAlign='center'>
            <Icon name='newspaper outline' color='brown' size='huge' circular />
            <Header.Content className={estilos.textoheader}>NewsSearch</Header.Content>
        </Header>
        {/* <Header className={estilos.logo}><Icon name='newspaper outline' size='huge' />NewsSearch</Header> */}
        <Container className={estilos.noticias}>
            
            <Buscador onBuscar={onBuscar} onLimpiar={ onLimpiar } />
            
            { isLoading && <Loading /> }
            { noticias && <p>Está viendo {cantidadPaginas>0 ? cantidadPaginas : 0} noticias de {totalResults} resultados</p>}
            { (totalResults === 0) && <p>No hubo resultados para su busqueda</p>}
            { noticias && <ListadoNoticias noticias={noticias}/> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
            

        </Container>
        <footer className={estilos.footer}>
              copyrigth 2022 - Rafael Ricardo Strongoli - Informatorio 2022
        </footer>
        </>
    )
}

export default PaginaBuscador;
