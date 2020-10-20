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
			path: '/profile',
			name: 'profile',
			component: CoProfile
		},


	]
			
	
})
