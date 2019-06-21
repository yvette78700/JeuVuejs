<template>
  <div class="container" >
     <div class="jumbotron  bg-secondary" v-if="progression">
            <h1 class="display-8 text-center text-white">Utiliser ces boutons pour jouer</h1>
            <p class="lead text-center text-light">Au survol sur chacun d'eux tu pourras avoir sa description</p>
            <hr class="my-4">
         
            <a class="btn btn-success btn-lg mx-5" href="#" role="button" title=" il augmente le pourcentage d'avancement de manière aléatoire; avec une faible chance d'ajouter des bugs"
            v-on:click="action1">Coder bien</a>
            <a class="btn btn-danger btn-lg mx-5" href="#" role="button" title="il augmente le pourcentage d'avancement de manière aléatoire; avec une forte change d'ajouter des bugs" v-on:click="action2">Coder vite</a>
            <a class="btn btn-info btn-lg mx-5" href="#" role="button" title="il augmente le pourcentage d'avancement de manière aléatoire, lié au nombre de bugs corrigé" v-on:click="action3">Tester</a>
            <a class="btn btn-light btn-lg mx-5" :href="url" role="button" title="il met fin à la partie et reinitialise les score" v-on:click=" abandonner">Abandonner</a>
            
        </div>
        
        <div class="row " >
            <div class=" col-6">
                <div class="card" >
                    <p><img src="../assets/joueur.png" class="rounded-circle ml-5 mt-1" alt="joueur" width="50" height="50"> <span class="font-weight-bold h5 pl-2 align-middle text-success" v-if="Jgagne">Félicitation vous avez
                        {{message}}</span></p>
                    <div class="card-body">
                        <hr class="my-2 bg-dark">
                        <h5 class="card-title mb-5">Score: {{pseudo}}</h5>
                       
                        <div class="progress my-3">
                            <div class="progress-bar bg-success text-dark" role="progressbar" :style="'width:' + txJoueur +'%' " :aria-valuenow="txJoueur" aria-valuemin="0" aria-valuemax="100">
                                Pourcentage de complétion: {{txJoueur}} %
                            </div>
                        </div>
                        <div class="progress my-4">
                            <div class="progress-bar bg-warning  text-dark" role="progressbar" :style="'width:'+ txbugJoueur+ '%'" :aria-valuenow="txbugJoueur" aria-valuemin="0" aria-valuemax="100">
                                Pourcentage code buggé :{{txbugJoueur}} %
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card" >
                   <p><img src="../assets/IA.jpg" class="rounded-circle ml-5 mt-1" alt="joueur" width="50" height="50"><span class="font-weight-bold h5 align-middle text-success pl-2" v-if="IAgagne">Félicitation vous avez {{message}}</span></p>
                    <div class="card-body">
                        <hr class="my-2 bg-dark">
                        <h5 class="card-title mb-5">Score: IA</h5>
                       
                        <div class="progress my-3">
                            <div class="progress-bar bg-success text-dark" role="progressbar" :style="'width:'+ txIA +'%'" :aria-valuenow="txIA" aria-valuemin="0" aria-valuemax="100">
                                Pourcentage de complétion:{{txIA }} %
                            </div>
                        </div>
                        <div class="progress my-4">
                            <div class="progress-bar bg-warning text-dark" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0"aria-valuemax="100">
                                Pourcentage code buggé : 0 %
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
               
            
             <p >
                <button class="btn-warning m-5" v-on:click="rejoue">Réjouer</button> 
               <a class="btn btn-secondary" :href="url"  title="il met fin à la partie et reinitialise les score" v-on:click=" abandonner">Abandonner</a>
                <a class="btn btn-secondary " :href="urlhistpart"  >Historique partie précedente</a>
                 <a class="btn btn-secondary " :href="urlAllpart"  >Historique toutes les parties</a>
             
            
            </p>
        </div>
        </div>
        
       
</template>

<script>

import store from '../store';
export default {
  name: 'ActionJeu',
  
  data() {
    return {
        txJoueur: 0,
        txbugJoueur: 0,
        txIA: 0,
        Jgagne: false,
        IAgagne: false,
        message: '',
        progression:true,
         histTxavancement:[],
         histTxbug:[],
         histTxIA:[],
         url:'http://localhost:8080/#/',
         urlhistpart:'http://localhost:8080/#/histpartie',
         urlAllpart:'http://localhost:8080/#/histAllpart'
     
             
        
       
    };
  },
  computed:{
    histResultat(){
        return store.getters.getResultat;
    },
    pseudo(){
        return store.getters.getPseudo;
    }
  },
  methods:{

        hasard(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;

        },
        remplissage(x) {
            switch (x) {
                case this.txJoueur:

                    this.Jgagne = true;
                    this.message = 'Gagné';
                    this.txJoueur = 0;
                    this.txIA = 0;
                    this.txbugJoueur = 0;
                    break;

                case this.txIA:
                    this.IAgagne = true;
                    this.message = 'Gagné';
                    this.txJoueur = 0;
                    this.txIA = 0;
                    this.txbugJoueur = 0;

                    break;
            }
        },
         action1: function () {

            //ici je choisis le pourcentage d'avancement de maniere aléatoire dans une fourchette de 0 à 10 

                this.txJoueur += this.hasard(0, 10);
                this.histTxavancement.push({codebien:this.txJoueur});

            // Ici je suppose que cette action peut generer entre 0 et 5% de bugs
            
                this.txbugJoueur += this.hasard(0,5);
                this.histTxbug.push({codebien:this.txbugJoueur});

            // je choisis le pourcentage d'avancement de IA de maniere aléatoire dans la fourchette de 1 à 30
            
                this.txIA += this.hasard(1, 30);
                this.histTxIA.push({codebien:this.txIA});
            
            if (this.txJoueur >= 100) {
                 store.commit('setScore',this.histTxavancement);
                 store.commit('setBug',this.histTxbug);
                 store.commit('setIA',this.histTxIA);
                var date=new Date();
                date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                this.histResultat = this.histResultat.push({Joueur:'Gagné',IA:'Perdu',Jour:date});
                 store.commit('setResultat',this.histResultat);
                this.remplissage(this.txJoueur);
                this.progression=false;
                return false;

            }
            if (this.txIA >= 100) {
                 store.commit('setScore',this.histTxavancement);
                 store.commit('setBug',this.histTxbug);
                 store.commit('setIA',this.histTxIA);
                  var date=new Date();
                date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
               this.histResultat = this.histResultat.push({Joueur:'Perdu',IA:'Gagné',Jour:date});
                 store.commit('setResultat',this.histResultat);
                this.remplissage(this.txIA)
                this.progression = false;
                return false;


            }


        },
        action2: function () {
          
            //ici je choisis le pourcentage d'avancement de maniere aleatoire dans une fourchette de 5 à 30 
            this.txJoueur += this.hasard(5, 30);
             this.histTxavancement.push({codevite:this.txJoueur});

            // Ici je suppose que cette action peut generer entre 0 et 10% de bug(s)
            this.txbugJoueur += this.hasard(0,10);
            this.histTxbug.push({codevite:this.txbugJoueur});
            // son pourcentage d'avancement reste le même que précedent
            this.txIA += this.hasard(1, 30);
            this.histTxIA.push({codevite:this.txIA});

            if (this.txJoueur >= 100) {
                store.commit('setScore',this.histTxavancement);
              
                store.commit('setBug',this.histTxbug);
                store.commit('setIA',this.histTxIA);
                  var date=new Date();
                date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                  this.histResultat = this.histResultat.push({Joueur:'Gagné',IA:'Perdu',Jour:date});
                 store.commit('setResultat',this.histResultat);
                this.remplissage(this.txJoueur);
                this.progression = false;
              
                return false;

            }
            if (this.txIA >= 100) {
                store.commit('setScore',this.histTxavancement);
                store.commit('setBug',this.histTxbug);
                store.commit('setIA',this.histTxIA);
                var date=new Date();
                date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                 this.histResultat = this.histResultat.push({Joueur:'Perdu',IA:'Gagné',Jour:date});
                 store.commit('setResultat',this.histResultat);
                this.remplissage(this.txIA);
                this.progression = false;
                
                return false;


            }

        },
        action3: function()
        {
            // ici je suppose qu'un 5% de bug corrigé représente 1% d'avancement or tester est lié au % de bug corrigé
           this.txJoueur+= Math.floor(this.txbugJoueur/5);
           this.txbugJoueur=0;
            this.histTxavancement.push({tester:this.txJoueur});
            this.histTxIA.push({tester:this.txIA});

           if (this.txJoueur >= 100) {
            store.commit('setScore',this.histTxavancement);
            store.commit('setBug',this.histTxbug);
            store.commit('setIA',this.histTxIA);
            var  date=new Date();
             this.histResultat = this.histResultat.push({Joueur:'Gagné',IA:'Perdu',Jour:date});
             store.commit('setResultat',this.histResultat)
            this.remplissage(this.txJoueur);
            this.progression = false;
            return false;

            }
            if (this.txIA >= 100) {
                store.commit('setScore',this.histTxavancement);
                store.commit('setBug',this.histTxbug);
                store.commit('setIA',this.histTxIA);
                var date=new Date();
                date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                 this.histResultat = this.histResultat.push({Joueur:'Perdu',IA:'Gagné',Jour:date});
                 store.commit('setResultat',this.histResultat);
                this.remplissage(this.txIA);
                this.progression = false;
                
                return false;


            }
        },
         abandonner: function () {
            
            this.txJoueur = 0;
            this.txIA = 0;
            this.txbugJoueur = 0;
          
            this.Jgagne = false;
            this.IAgagne = false;
            
            this.message = "";
        },

        
        rejoue: function () {
            this.progression = true;
            if (this.Jgagne) this.Jgagne = false;
            else if (this.IAgagne) this.IAgagne = false;
          this.histTxavancement=[];
          this.histTxbug=[];
          this.histTxIA=[];
           
        },

}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
