
<template>
    <div class="jumbotron  bg-secondary container" >
        <h1 class="display-8 text-center text-white">Jouer contre l'Intélligence Artificielle</h1>
            
        <hr class="mb-5">
        <div class="row mt-5 mx-0 bg-white pt-5">
            <div class="col-lg-5 col-md-5 col-sm-12 text-right"><img src="../assets/joueur.png" alt="joueur" width="200" height="100" class="rounded-circle"></div>
            <div class="col-lg-2 col-md-2 col-sm-12 text-center"><img src="../assets/contre.jpg" alt="separateur" width="50" height="auto"></div>
            <div class="col-lg-5 col-md-5 col-sm-12 text-left"><img src="../assets/IA.jpg" alt="Intelligence artificielle" class="rounded-circle" width="200" height="100"></div>
        
        </div>
        <form>
            <div class="form-row  mx-0 bg-white ">
        
                <input type="text" class="form-control col-lg-4 col-sm-12 mx-auto  text-center mt-5" id="exampleInputpseudo" v-model="pseudo"
                    placeholder="Entrer un pseudo pour commencer à jouer">
        
            </div>
        
        </form>
                
        <div class="row  mx-0 bg-white">
        
            <div class="offset-3 col-6 offset-3 text-center">
              
                <a class="btn btn-warning px-5 my-5 " :href="url" @click="envoi">Commencer à jouer</a>
                <a class="btn btn-info px-5 my-5 " :href="urlnotice" >Notice de Jeu</a>
            </div>
            
        </div>
  
</div>
  
     
</template>

<script>


import store from '../store';
export default {
  name: 'Accueil',
  
   data() {
    return {
        url:'http://localhost:8080/#/partie',

        urlnotice:'http://localhost:8080/#/notice',

        pseudo:''

    };
   },
    methods:{
        
        envoi()
        {
            store.commit('setPseudo',this.pseudo)
        }

    }
   
    
};
</script>

<style>

</style>


