import React from 'react';
import { Pagination } from 'semantic-ui-react';
import estilos from './Paginador.module.css';


const Paginador = ({ cantidadPaginas, onChange }) => {
  const handlePaginationChange = (_e, activePage) => {
    onChange(activePage.activePage);
  }
  return (
    <div className={estilos.paginador}>
      <Pagination
        boundaryRange={2}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={2}
        totalPages={cantidadPaginas}
        secondary
        onPageChange={handlePaginationChange}
      />
    </div>
  );
}

export default Paginador;
