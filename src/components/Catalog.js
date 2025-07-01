import React from 'react'; 
// Importa React para poder usar JSX y crear componentes funcionales.

const Catalog = () => { 
    // Declara el componente funcional Catalog.

    const alfajores = [
        // Define un array de objetos, cada uno representa un alfajor con id, imagen y descripción.
        { id: 1, image: '/images/4-1024x1024.png', description: 'Alfajor de chocolate' },
        { id: 2, image: '/images/5-1024x1024.png', description: 'Alfajor de dulce de leche' },
        { id: 3, image: '/images/6-1024x1024.png', description: 'Alfajor de coco' },
        { id: 4, image: '/images/7-1024x1024.png', description: 'Alfajor de frutilla' },
        { id: 5, image: '/images/4-1024x1024.png', description: 'Alfajor de menta' },
        { id: 6, image: '/images/5-1024x1024.png', description: 'Alfajor de vainilla' },
        { id: 7, image: '/images/6-1024x1024.png', description: 'Alfajor de café' },
        { id: 8, image: '/images/7-1024x1024.png', description: 'Alfajor de naranja' },
        { id: 9, image: '/images/4-1024x1024.png', description: 'Alfajor de chocolate' },
        { id: 10, image: '/images/5-1024x1024.png', description: 'Alfajor de dulce de leche' },
        { id: 11, image: '/images/6-1024x1024.png', description: 'Alfajor de coco' },
        { id: 12, image: '/images/7-1024x1024.png', description: 'Alfajor de frutilla' },
        { id: 13, image: '/images/4-1024x1024.png', description: 'Alfajor de menta' },
        { id: 14, image: '/images/5-1024x1024.png', description: 'Alfajor de vainilla' },
        { id: 15, image: '/images/6-1024x1024.png', description: 'Alfajor de café' },
    ];

    return (
        <div className="container mt-4">
            {/* Contenedor principal con margen superior */}
            <h2 className="text-center">Nuestros Alfajores</h2>
            {/* Título centrado */}
            <div className="row">
                {/* Fila de Bootstrap para organizar las cards */}
                {alfajores.map(alfajor => (
                    // Itera sobre cada alfajor y crea una columna para cada uno.
                    <div className="col-md-4 mb-4" key={alfajor.id}>
                        {/* Columna de tamaño mediano 4, con margen inferior */}
                        <div className="card" style={{ width: '18rem' }}>
                            {/* Card de Bootstrap con ancho fijo */}
                            <img src={alfajor.image} className="card-img-top" alt={alfajor.description} />
                            {/* Imagen del alfajor */}
                            <div className="card-body">
                                {/* Cuerpo de la card */}
                                <p className="card-text">{alfajor.description}</p>
                                {/* Descripción del alfajor */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    // Devuelve el JSX que renderiza el catálogo de alfajores.
};

export default Catalog;
// Exporta el componente para poder usarlo en otros archivos.