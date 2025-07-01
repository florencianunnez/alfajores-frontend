import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/promociones';

const initialForm = {
    nombre: '',
    descripcion: '',
    descuento: '',
    fechaInicio: '',
    fechaFin: '',
    condiciones: '',
    productosAplicables: ''
};

const Promotions = () => {
    const [promos, setPromos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState(initialForm);
    const [editId, setEditId] = useState(null);

    // GET promociones
    const fetchPromos = () => {
        setLoading(true);
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setPromos(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar promociones');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPromos();
    }, []);

    // Manejar cambios en el formulario
    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Crear o actualizar promoción
    const handleSubmit = e => {
        e.preventDefault();
        const method = editId ? 'PUT' : 'POST';
        const url = editId ? `${API_URL}/${editId}` : API_URL;
        const body = {
            ...form,
            descuento: Number(form.descuento),
            productosAplicables: form.productosAplicables.split(',').map(id => id.trim()),
        };

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error al guardar promoción');
                setForm(initialForm);
                setEditId(null);
                fetchPromos();
            })
            .catch(() => setError('Error al guardar promoción'));
    };

    // Eliminar promoción
    const handleDelete = id => {
        if (!window.confirm('¿Eliminar esta promoción?')) return;
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(res => {
                if (!res.ok) throw new Error();
                fetchPromos();
            })
            .catch(() => setError('Error al eliminar promoción'));
    };

    // Editar promoción
    const handleEdit = promo => {
        setEditId(promo._id?.$oid || promo._id || promo.id);
        setForm({
            nombre: promo.nombre,
            descripcion: promo.descripcion,
            descuento: promo.descuento,
            fechaInicio: promo.fechaInicio?.slice(0, 10) || '',
            fechaFin: promo.fechaFin?.slice(0, 10) || '',
            condiciones: promo.condiciones,
            productosAplicables: (promo.productosAplicables || []).map(p => p.$oid || p).join(','),
        });
    };

    return (
        <div className="container mt-4">
            <h2>Promociones</h2>
            <form className="mb-4" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <input className="form-control" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-2">
                        <input className="form-control" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
                    </div>
                    <div className="col-md-2 mb-2">
                        <input className="form-control" name="descuento" type="number" placeholder="Descuento (%)" value={form.descuento} onChange={handleChange} required />
                    </div>
                    <div className="col-md-2 mb-2">
                        <input className="form-control" name="condiciones" placeholder="Condiciones" value={form.condiciones} onChange={handleChange} />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input className="form-control" name="fechaInicio" type="date" value={form.fechaInicio} onChange={handleChange} required />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input className="form-control" name="fechaFin" type="date" value={form.fechaFin} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-2">
                        <input className="form-control" name="productosAplicables" placeholder="IDs productos (separados por coma)" value={form.productosAplicables} onChange={handleChange} />
                    </div>
                </div>
                <button className="btn btn-success mt-2" type="submit">{editId ? 'Actualizar' : 'Crear'} promoción</button>
                {editId && <button className="btn btn-secondary mt-2 ms-2" type="button" onClick={() => { setEditId(null); setForm(initialForm); }}>Cancelar</button>}
            </form>

            {loading && <p>Cargando promociones...</p>}
            {error && <p className="text-danger">{error}</p>}

            <div className="row">
                {promos.map(promo => (
                    <div className="col-md-4 mb-3" key={promo._id?.$oid || promo._id || promo.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{promo.nombre}</h5>
                                <p className="card-text">{promo.descripcion}</p>
                                <p className="card-text"><strong>Descuento:</strong> {promo.descuento}%</p>
                                <p className="card-text"><strong>Vigencia:</strong> {new Date(promo.fechaInicio).toLocaleDateString()} - {new Date(promo.fechaFin).toLocaleDateString()}</p>
                                <p className="card-text"><strong>Condiciones:</strong> {promo.condiciones}</p>
                                <p className="card-text"><strong>Productos:</strong> {(promo.productosAplicables || []).map(p => p.$oid || p).join(', ')}</p>
                                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(promo)}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(promo._id?.$oid || promo._id || promo.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotions;