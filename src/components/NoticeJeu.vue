<template>
    <div class="container">
        <h1 class="text-center bg-secondary text-white mt-3">Notice de Jeu </h1>
        <ul class="list-group ">
            <li class="list-group-item h4 my-2 py-2">
               1. Pour entrer dans l'interface de jeu : rentrer un pseudo et appuyez sur le bouton commencer à jouer
            </li>
            <li class="list-group-item h4 my-2 py-2">
                2. Utiliser les boutons coder bien,coder vite et tester pour jouer. Votre score ainsi que celui de l'Intelligence artificielle(votre adversaire s'affiche en bas)
            </li>
            <li class="list-group-item h4 my-2 py-2">
                3. 
                <ul>
                    
                    <li>
                            A l'issue d'une partie vous pouvez rejouer en cliquant sur le bouton rejouer
                    </li>
                    <li>
                        Vous pouvez aussi consulter les resultats de la partie précedente en cliquant sur le bouton historique partie précedent
                    </li>
                    <li>
                        Vous pouvez également consulter la liste de toutes vos parties en cliquant sur le boutons historique toutes les parties.
                    </li>
                </ul>
            </li>
            <li class="list-group-item h4 my-2 py-2">
                    4. Si on veut sortir du jeu on appuie sur le bouton abandonner
            </li>
        
        </ul>
        <a class="btn btn-primary px-5 text-white  m-5" :href="url"  >sortir</a>
    </div>
</template>
<script>


export default {
  name: 'NoticeJeu',
  
   data() {
    return {
        url:'http://localhost:8080/#/'

    };
   }
    
   
    
};
</script>