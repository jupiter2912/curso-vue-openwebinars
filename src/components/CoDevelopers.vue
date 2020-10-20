<template lang='html'>
  <ul class="developers">
    <!-- <li class="developers__item" v-bind:class="{ 'userConNombre': user.name === false }"> -->
		<!-- Podemos ponerlo como si fuese un objeto -->
    <li v-for='user in users' class="developers__item" v-bind:style="userConNombre">
		<!-- Cada vez que hagamos click en un desarrollador saltara la navegacion de
		router-link -->
		<router-link
			v-bind:to = "{ name: 'profile'}"
		>
		<!-- Utilizo un binding del objeto creado en user -->
			<co-developer
				v-bind:avatar='user.avatar_url'
				v-bind:name='user.name'
				v-bind:login='user.login'
				v-bind:email='user.email'
				v-bind:location='user.location'
				v-bind:company='user.company'
				v-bind:repos='user.public_repos'
				v-bind:gists='user.public_gists'
			></co-developer>
		</router-link>
    </li>
  </ul>
</template>


<script>
/* eslint-disable */

  import mocks from '@/mocks/users.js' // fichero con serie de datos fijos

  import bus from '@/busdata.js'

  import CoDeveloper from '@/components/CoDeveloper'

  // importamos la libreria externa de axios (el nombre que sale en azul en los import es el nombre de nuestra variable)
  import http from 'axios'


  export default {
    name: 'CoDevelopers',
    // data son los valores iniciales que toma el componente y son exclusivos de dicho
    // componente
    data () {
      return {
		users: [],

		userConNombre : {
			fontWeight: 900,
			color: 'red'
		}
      }
	},
	
	components: {
		CoDeveloper
	},

    mounted () {
	  //Cuando se monte el componente llamaremos al metodo getTopUsers()
	  this.getTopUsers()
	},
	
	// // para hacer el fecth vamos a crear un metodo
	// methods: {
	// 	getTopUsers () {
	// 		return fetch(
	// 			//generamos una peticion ajax
	// 			// llamamos a la API de github que tenemos definida en prodEnv.js
	// 			// y le mandamos una peticion que muestre solo los de lenguaje JS en orden descendente y 15 por pagina

	// 			//pedimos 15 usuarios
	// 			`${process.env.API}search/users?q=language:javascript&order=desc&per_page=15`,
	// 			{
	// 				headers: {
	// 					'Authorization': `token ${process.env.TOKEN}` // necesitamos la variable TOKEN definida en produccion
	// 				}
	// 			}
	// 		)
	// 		// el fetch lanza una promesa que devuelve una response y nosotros le decimos que la trate como json
	// 		.then (response => response.json())

	// 		// tambien le ponemos una promesa para que coger los items de esa respuesta que nos manda
	// 		.then (response => response.items)

	// 		// por cada usuario como queremos mas datos de ellos (en este caso los repos y los gists) lanzamos
	// 		// otro fetch pidiendo datos pero ya de los usuarios
			
	// 		.then (users => users.map(user =>
	// 			fetch(
	// 				`${process.env.API}users/${user.login}`,
	// 				{
	// 					headers: {
	// 						'Authorization': `token ${process.env.TOKEN}`
	// 					}
	// 				}
	// 			)

	// 			// una vez tengamos los datos lanzados  por este ultimo fetch
	// 			// le decimos que queremos trabajar con json
	// 			.then (response => response.json())
				
	// 		))

	// 		// users.map nos devuelve un array de promesas
	// 		// le decimos que lo resuelva entero
	// 		.then (response => Promise.all(response))
			
	// 		// una vez este resuelto nos generara una serie de datos que asignaremos a nuestra propiedad data()
	// 		.then (users => {
	// 			this.users = users
	// 		})


	// 	}
	// },

	// de esta manera lo hariamos para axios
	methods: {
		getTopUsers () {
			return http({
				method: 'GET',
				url: `${process.env.API}search/users`,
				params: {
					q: 'language:javascript',
					order: 'desc',
					per_page: '15'
				},
				
				headers: {
					'Authorization': `token ${process.env.TOKEN}` // necesitamos la variable TOKEN definida en produccion
				}
			})
			// ya no nos devolveria todos en un json sino en un data
			.then (response => response.data)

			// tambien le ponemos una promesa para que coger los items de esa respuesta que nos manda
			.then (response => response.items)

			// por cada usuario como queremos mas datos de ellos (en este caso los repos y los gists) lanzamos
			// otra peticion con axios pidiendo datos pero ya de los usuarios
			
			.then (users => users.map(user =>
				http({
					method: 'GET',
					url: `${process.env.API}users/${user.login}`,
					headers: {
							'Authorization': `token ${process.env.TOKEN}`
						}
				})

				// una vez tengamos los datos lanzados  por este ultimo fetch
				// lo modificamos porque ya no va sobre json sino sobre data
				.then (response => response.data)
				
			))

			// users.map nos devuelve un array de promesas
			// le decimos que lo resuelva entero
			.then (response => Promise.all(response))
			
			// una vez este resuelto nos generara una serie de datos que asignaremos a nuestra propiedad data()
			.then (users => {
				this.users = users
			})


		}
	},
	
	// en otro ciclo de vida como es created() recogemos el evento con $on
    created () {
	  bus.$on('search', criteria => {
		console.log('Codevelopers ', criteria)
	  })
	}

  }
</script>


<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .developers {
    overflow-x: none;
    overflow-y: auto;
    & .developers__item {
      position: relative;
    }
    & .developers__item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 5%;
      width: 90%;
      height: 1px;
      background-color: var(--color-light-grey);
    }
    & .developer {
      padding: 1rem 2rem;
    }
  }
</style>
