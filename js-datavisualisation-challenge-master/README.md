# Challenge Javascript

Repository : `js-datavisualisation-challenge`   
Mode : `solo`   
Temps imparti : `5 jours`   
Deadline: Jour J+5, 16h30  

RESULT : https://sammuelj.github.io/Becode/js-datavisualisation-challenge-master/

## Finalité de ce challenge
Ce challenge doit te permettre de :

- vérifier ta capacité à résoudre un problème inspiré de situations réelles en utilisant tes nouvelles compétences en javascript.
- vérifier tes acquis en javascript au terme du parcours Javascript proposé, qui identifiait 6 objectifs  :  
  1. manipulations du **DOM**
  1. requête **ajax**
  1. utilisation de **librairies tierces**
  1. **problem-solving** : identifier, puis coder un chemin fonctionnel logique permettant d'atteindre le résultat attendu.
  1. **Débogage** : utilisation de sa console
  2. Comprendre la "**séparation des préoccupations**"


## Ta mission
Tu travailles dans le département Multimédia d'une des institutions de l'Union Européenne. Ce matin, ton Project Manager te confie une mission : l'un des journalistes doit publier un nouvel article sur le site de l'institution. L'article en question est déjà intégré sous forme de fichier html / css / Javascript.  

Il te demande de le rendre plus *riche*, plus *interactif*, plus *sexy* (l'emploi de cet adjectif indique qu'avant cela il travaillait certainement dans la pub, le pauvre). 

Et c'est ce que tu vas faire, en ajoutant des **graphiques interactifs** grâce à du javascript.  Ces graphiques seront interactifs dans le sens où l'utilisateur peut manipuler le graphique, comme par exemple filtrer les données, ou révéler des données détaillées au survol de la souris. Libre à toi de concevoir l'interaction dans ton projet.
 
### 1. Inline data (données dans le document)
Dans ce fichier html, tu trouveras deux tableaux de données. Grâce au javascript, parcoure le DOM pour insérer juste au dessus de chacun de ces tableaux une représentation de ses données sous forme de graphique interactif.

Si le javascript est désactivé, le graphique n'apparait pas. Si le javascript est activé, le graphique apparait entre le titre et le tableau.

### 2. Remote data, in real-time, via ajax
Des données se trouvent à cet URL : [https://inside.becode.org/api/v1/data/random.json](https://inside.becode.org/api/v1/data/random.json)  

Récupère les données via Ajax, et utilise-les pour insérer un graphique se rafraîchissant toutes les secondes, juste en dessous du titre principal (`h1`) de l'article.

N'hésite pas à adapter le code fourni dans ce tutoriel [Live Updating Charts from JSON API & AJAX](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/), mais adapte-le à Dimple.js / D3.js, car ce tutoriel-ci utilise une autre librairie (payante, canvasJS).

Idem : si le javascript est désactivé, le graphique n'apparait pas. Si le javascript est activé, le graphique apparait.


## Comment faire ?
1. Utilise une librairie javascript qui permette de faire cela plus facilement qu'en "Vanilla Javascript" (= utilisation de javascript sans librairies).   
Si tu n'avais jamais codé en javascript avant BeCode, utilise [dimple - A simple charting API for d3 data visualisations](http://dimplejs.org/)  .   
Si tu avais déjà une bonne maitrise de Javascript avant ton passage à BeCode, tu peux directement utiliser la librairie [D3.js - Data-Driven Documents](https://d3js.org/),  qui est plus complexe mais offre beaucoup de possibilités.
2. Forme-toi à leur utilisation
3. Attaque le problème en cherchant un bon chemin logique. Décompose-le en petits problèmes, en étapes progressives. Commit au fur et à mesure que tu avances. D'abord le DOM, accéder au bon endroit, puis récupérer les données, puis générer le graphique. Quelque chose comme cela :-)
4. Une méthode de pensée : *reverse-engineering* de ton objectif : commence par la fin et remonte le fil des dépendances jusqu'au point de départ. Cela donne quelque chose comme ceci :

> Pour avoir un graphique, il faut des données. Je dois donc les récupérer.  
> Où sont-elles ?  
> Pour avoir un graphique je dois trouver le bon endroit du DOM, comment puis-je faire ?  
> Pour avoir un graphique je vais utiliser cette librairie de *data visualisation*. Comment fonctionne-t-elle ?   
> ...  


### Contraintes
- Tu ne peux pas modifier le fichier html. 
- Tu as le choix du type de graphiques. Estime le plus pertinent en fonction des données et de ce qu'elles peuvent "raconter".  
- Le choix de la librairie javascript est limité aux 2 librairies proposées (il y en a plein d'autres, mais celles-ci font références et sont très populaires)

## Remise et Évaluation
Le mode d'évaluation choisi est une **auto-évaluation** sur base des indicateurs suivants :  

(Ce qui suit est un aperçu, [utilise le formulaire de remise fourni](https://goo.gl/forms/fuKofp7Mh5PAe7bP2) pour t'auto-évaluer. Un coach réalisera la même évaluation.)

### 1. Manipulation du **DOM** : 

- [x] J'ai pu trouver le bon sélecteur pour y arriver.  
- [x] J'ai pu injecter le graphique au bon endroit de la page via javascript.
- [x] J'ai pu récupérer les données html dans un format adapté à mon code javascript.

### 2. Requête **ajax** :
- [x] J'ai pu recevoir la réponse du serveur distant en json.
- [x] ensuite, j'ai pu construire une fonction de callback traitant ces données.

### 3. Utilisation de **librairies tierces** : 
- [x] J'ai pu intégrer la librairie tierce dans mon application.
- [x] J'ai utilisé la documentation fournie par la librairie.
- [ ] J'ai pu générer les 2 graphiques "inline data".
- [x] J'ai pu générer le graphique "remote data".

### 4. Problem-solving : 

- [ ] Rigueur syntaxique : j'ai pu traduire les processus que j'ai imaginé en syntaxe javascript.
- [ ] Pensée logique : à force d'itérations et d' essais & erreurs, j'ai pu trouver un chemin logique qui fonctionne pour répondre aux problèmes soulevés par la demande du client. Spécifiquement : 
	- [ ] J'ai pu générer les 2 graphiques "inline data".
	- [x] J'ai pu générer le graphique "remote data".
	- [ ] J'ai pu construire une fonction de callback traitant les données remote (reçues via ajax).
	- [ ] J'ai pu faire en sorte que le graphique realtime se rafraichisse en temps réel.
	- [ ] J'ai pu afficher les données détaillées au survol de la souris.

  
### 5. Débogage :
  
  - [x] J'utilise la console pour comprendre ce qui se passe et confronter ce que je tente de programmer à ce que la machine exécute.
  
### 6. Séparation des préoccupations :

 - [ ] Si je désactive le javascript, l'expérience-utilisateur est satisfaisante, l'utilisateur a accès aux données et au contenu
 - [x] Si j'active le javascript, les tableaux sont agrémentés d'un graphique interactif.

 
