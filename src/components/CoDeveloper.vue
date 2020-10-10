<template lang='html'>
  <div class='developer'>
    <img class='developer__avatar'/>
    <div class='developer__info'>
      <h2>
        <span class='developer__name'>{{ name }}</span>
         <span class='developer__login'>[{{ login }}]</span>
      </h2>
      <div class='developer__metadata'>
        <span class='developer__data'>{{ email }}</span>
        <span class='developer__data'>{{ location }}</span>
        <span class='developer__data'>{{ company }}</span>
      </div>
    </div>
    <div class='developer__stats'>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ repos }}</div>
      </div>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ gists }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CoDeveloper',
    //coDeveloper recibe propiedades del padre de este componente
    // en este caso desde coDevelopers.vue
    props: {

      //propiedad avatar
      avatar:{
        type: String, //url para la imagen
        required: true, //siempre queremos renderizar la imagen del usuario

        //aqui validamos que es una ruta
        validator (value){
          return value.starsWith('http');
        },
        //propiedad name
        name: {
          type: String,
          required: true,
        },
        //propiedad login
        login:{
          type: String,
          required: true
        },
        //propiedad email
        email: {
          type: String,
          required: true
        },
        //propiedad company
        company: {
          type: String,
          required: false
        },
        //propiedad repos
        respos:{
          type: Number
        },

        gists: {
          type: Number
        }
      },

      //para nuestras propiedades computadas que son las que hacen alguna operacion y la devuelven
      computed: {
        metadata(){
          let meta = '';

          if(this.email){
            meta = `${meta} ${this.email}`
          }

           if(this.location){
            meta = `${meta} ${this.location}`
          }

           if(this.company){
            meta = `${meta} ${this.company}`
          }

          return meta;
        },

        //Observadores de variables y propiedades
        watch: {
          //variable que queremos observar
          metadata(newValue){ 
            console.log('Metadata: ', newValue)
          }
        }


        //si queremos que se devuelvan los datos o setearlos tendriams que declarar
        // get()
        // set()
        // otherMeta : {
        //   get(){},
        //   set(){}
        // }

      }
    }
  }
</script>

<style lang='css'>
</style>
