<template>
<div class="row  container mx-auto ">
      <div class="card col-4 mb-3" >
          <div class="card-header">
              <h5>Joueur : {{histpseudo}} </h5>
              <p>taux d'avancement en %</p>
          </div>
          <ul class="list-group list-group-flush" v-for="c in countScore">
            <li class="list-group-item">

                <span v-if="c.codebien || c.codebien==0 ">codebien: {{c.codebien}}</span>
                <span v-else-if="c.codevite || c.codevite==0">codevite: {{c.codevite}}</span> 
                <span v-else-if="c.tester || c.tester==0">tester: {{c.tester}}</span>
            </li>
            
          </ul>
       </div>

       <div class="card col-4 mb-3" >
          <div class="card-header">
              <h5>Joueur : {{histpseudo}} </h5>
              <p>tauxbug en %</p>
          </div>
          <ul class="list-group list-group-flush" v-for="b in countBug">
            <li class="list-group-item">

                 <span v-if="b.codebien || b.codebien==0 ">codebien: {{b.codebien}}</span>
                  <span v-else-if="b.codevite || b.codevite==0">codevite: {{b.codevite}}</span> 
                  <span v-else-if="b.tester || b.tester==0">tester: {{b.tester}}</span>
            </li>
            
          </ul>
       </div>
       <div class="card col-4 mb-3">
          <div class="card-header">
              <h5>IA</h5>
              <p>taux d' avancement en %</p>
          </div>
          <ul class="list-group list-group-flush" v-for="c in countIA" >
            <li class="list-group-item">

                   <span v-if="c.codebien || c.codebien==0 ">codebien: {{c.codebien}}</span>
                   <span v-else-if="c.codevite || c.codevite==0">codevite: {{c.codevite}}</span> 
                    <span v-else-if="c.tester || c.tester==0">tester: {{c.tester}}</span>
            </li>
            
          </ul>
       </div>
  
              <a class="btn btn-primary px-3 mr-5" :href="url"  >sortir</a>

               <a class="btn btn-secondary text-white" :href="urlAllpart"  >Historique toutes les parties</a>
</div>


</template>
<script>
import store from '../store'
export default {
name:'HistoriquePartie',

 data() {
    return {
        
         url:'http://localhost:8080/#/',
         urlAllpart:'http://localhost:8080/#/histAllpart'

    };
  },

   computed:{
     countScore(){
       return store.getters.getScore
     },
     countBug(){
       return store.getters.getBug
     },
     countIA()
     {
       return store.getters.getIA
     },
     histPseudo(){
        return store.getters.getPseudo
     }
   }
};
</script>
<style>
</style>