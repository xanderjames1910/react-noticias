import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
	// Definir la categoría y noticias
	const [categoria, setCategoria] = useState('');
	const [news, setNews] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `
			https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=d37da5c466aa4547a4d13ff0a7f028bc`;

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();

			setNews(noticias.articles);
		};
		consultarAPI();
	}, [categoria]);

	return (
		<>
			<Header titulo='Buscador de Noticias' />
			<div className='container white'>
				<Formulario setCategoria={setCategoria} />
				<ListadoNoticias news={news} />
			</div>
		</>
	);
}

export default App;
