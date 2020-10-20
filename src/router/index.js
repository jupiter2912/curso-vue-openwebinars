// definicion de las rutas
/* eslint-disable */
import Vue from 'vue'

import Router from 'vue-router'

import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'
import CoNotFound from '@/components/CoNotFound'

Vue.use(Router) // el plugin de router se inyecta en Vue. Cada componente tendra acceso al router

let router = new Router({
	mode: 'history',

	//Definiremos las rutas
	routes: [
		{
			// ruta para el home
			path: '/', // la ruta
			name: 'home', // el nombre de la ruta
			component: CoDevelopers, //los componentes que queremos renderizar
			beforeEnter(to, from, next) {
				console.log('Hook beforeEnter en home')
				next()
			}
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
		{
			//ruta para redirigir al usuario en cado de que la ruta no sea encontrada
			path: '/not-found',
			name: '404',
			component: CoNotFound
		},
		//esta ruta seria ya para que se acceda a ella sino se ha podido ir a ninguna de las demas
		{
			path: '*',
			redirect: {
				name: '404'
			}
		}
	]
})

/**
 * to --> adonde va
 * from --> de donde viene
 * next --> funcion obligatoria sino no renderiza el componente
 */
router.beforeEach((to, from, next) => {
	console.log('Hook beforeEach')
	next()
})


router.afterEach((to, from) => {
	console.log('Hook afterEach')
	
})


export default router
