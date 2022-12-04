import React from 'react';
import { Loader } from 'semantic-ui-react';
import estilos from '../paginas/PaginaBuscador.module.css';

const Loading = () => <Loader className={estilos.loader} size='big' active inline='centered' />

export default Loading

