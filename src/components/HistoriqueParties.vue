<template>

  <div class="container">
      
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Date de jeu</th>
            <th scope="col">Joueur</th>
            <th scope="col">IA</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in countResultat">
            <td>{{c.Jour}}</td>
            <td>{{c.Joueur}}</td>
            <td>{{c.IA}}</td>
          
          </tr>
          
        
        </tbody>
    </table>
    
    <a class="btn btn-primary px-3 mr-5" :href="url"  >sortir</a>
    <a class="btn btn-secondary text-white"  :href="urlpart" >Historique partie précedente</a>
  </div>
                 
</template>
<script>
import store from '../store'
export default {
name:'HistoriqueParties',
data() {
    return {
        
       url:'http://localhost:8080/#/',
        urlpart:'http://localhost:8080/#/histPartie'


    };
  },
   computed:{
       countResultat()
       {
           return store.getters.getResultat
       }
   }
};
</script>
<style>
</style>