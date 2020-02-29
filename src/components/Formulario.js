import React from 'react';
import PropTypes from 'prop-types';

import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ setCategoria }) => {
	const OPCIONES = [
		{ value: 'general', label: 'General' },
		{ value: 'business', label: 'Negocios' },
		{ value: 'entertainment', label: 'Entretenimiento' },
		{ value: 'health', label: 'Salud' },
		{ value: 'science', label: 'Ciencia' },
		{ value: 'sports', label: 'Deportes' },
		{ value: 'technology', label: 'Tecnología' },
	];
	// Utilizar custom hook
	const [categoria, SelecNoticia] = useSelect('general', OPCIONES);

	// Submit al form, pasar categoría a app.js
	const buscarNoticias = e => {
		e.preventDefault();

		setCategoria(categoria);
	};

	return (
		<div className={`${styles.buscador} row`}>
			<div className='col s12 m8 offset-m2'>
				<form onSubmit={buscarNoticias}>
					<h2 className={styles.heading}>
						Encuentra noticias por categoría
					</h2>
					<SelecNoticia />
					<div className='input-field col s12'>
						<button
							type='submit'
							className={`${styles.btn_block} btn btn-large amber darken-2`}>
							Buscar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

Formulario.propTypes = {
	setCategoria: PropTypes.func.isRequired,
};

export default Formulario;
