// definicion de las rutas
/* eslint-disable */
import Vue from 'vue'

import Router from 'vue-router'

import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'

Vue.use(Router) // el plugin de router se inyecta en Vue. Cada componente tendra acceso al router

export default new Router({
	mode: 'history',

	//Definiremos las rutas
	routes: [
		{
			// ruta para el home
			path: '/', // la ruta
			name: 'home', // el nombre de la ruta
			component: CoDevelopers //los componentes que queremos renderizar
		},
		{
			// ruta para que cargue el perfil de cada usuario

			// para que no nos cargue los datos de mock y herede las propiedades y pueda mostrarnos los 
			// datos que trajimos de la API de github no haremos con una magic param que implementamos en
			// el path /:user
			path: '/profile/:user',
			name: 'profile',
			component: CoProfile,
			props: true
		},


	]
			
	
})
