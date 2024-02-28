# appli-web-meteo
# Résumé :

Concevoir de A à Z une application web permettant de consulter la météo en temps réel pour un lieu donné par l’utilisateur.

Le but de ce mini-projet est de se familiariser avec le langage JavaScript, d’utiliser une API permettant d’obtenir des données et de mettre en application ses connaissances en HTML/CSS. 

# Domaine :

![programmation.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89d0a8a9-5a49-4737-9cbd-867fc4f478a9/programmation.png)

![web.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4b91c73-90f9-4fca-b2cb-a76d8d8591de/web.jpeg)

# Difficulté :

![etoile.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87bb1a61-62a4-41b0-9070-179ca3d67ecb/etoile.png)

![etoile.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87bb1a61-62a4-41b0-9070-179ca3d67ecb/etoile.png)

# Langages de programmation :

- HTML / CSS ;
- JavaScript.

# Fonctionnalités :

- L’utilisateur peut renseigner un nom de ville ;
- L'appli renvoie la météo courante (température en °C, le temps, le vent...).

# Notions abordées :

## Programmation :

- Faire un script en JavaScript permettant de récupérer des données ;
- Approfondir ses connaissances en CSS.

## Développement Web :

- Utilisation d'une API ;
- Manipulation de données JSON ;
- Manipulation du DOM.

# Déroulement :

1. Préparer une page HTML qui contient :
    1. Le titre de l’application;
    2. Une `div` contenant un formulaire qui demande à l’utilisateur la ville qu’il souhaite consulter. Le champ de texte récupérant le nom de la ville doit avoir pour ID `inputVille` et le bouton de soumission du formulaire doit avoir un attribut `onclick` qui prend comme valeur `"getCity();"`;
    3.  Une `div` afficher la réponse à l’utilisateur. L’ID de cette `div` est `temperature` ;
    4. Toute autre informations pour l’utilisateur sur l’application.
2. Préparer la feuille CSS (style libre).
3. Créer un fichier .js (JavaScript).
4. Lier la page HTML la feuille CSS et le fichier JavaScript
5. Créer une fonction `getCity()` qui :
    1. Créer une variable `city` qui récupère l’élément du document HTML dont l’ID est `inputVille`
        
        `city = document.getElementById("inputVille").value;` 
        
    2. Créer une variable `url` qui contient la requête HTTP utilisant la ville indiqué par l’utilisateur et la clé API :
        
        `'https://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&lang=fr&units=metric&mode=JSON&appid=<APIKEY>'`
        
    3. Appeler la fonction `getCurrentWeatherByCity(url)`
6. Créer une fonction `getCurrentWeatherByCity(url)` qui :
    1. Démarrer le processus de récupération de données en utilisant la variable passé en argument `url` à partir du réseau.
        
        `window.fetch(URL)`
        
    2. Vérifier que l’exécution s’est bien passée et transformer les données au format JSON :
        
        `.then(function(res){` 
        
        `if (res.ok) {`
        
        `return res.json();`
        
        `}`
        
        `})` 
        
    3. Si l’exécution s’est bien passé, appeler la fonction  `screenCurrentWeather(res)` qui prend en argument les données au format JSON.
        
        `.then(function(res){
        	screenCurrentWeather(res);
        })`
        
    4. Si une erreur est survenue, l’écrire dans la console :
        
        `.catch(function(err){
        	console.log("Une erreur est survenue lors de la récupération des données.");
        })`
        
7. Créer une fonction `screenCurrentWeather(donnees)` qui : 
    1. Affiche dans la console le nom de la ville demandée par l’utilisateur (pour contrôler) .
        
        `console.log("ville : "+donnees.name);`
        
    2. Insérer dans le document à l’élément dont l’ID est `temperature`  la valeur de la température et le nom de la ville.
        
        `document.getElementById("temperature")
         	.innerText="La température actuelle est de "
         	+donnees.main.temp
         	+"°C à "
         	+donnees.name
         	+".";`
        

# Améliorations :

- Afficher dans un tableau la température actuelle, la couverture nuageuse, la description du temps, la ville.
- Afficher la température pour demain.
- Afficher une image correspondant à l'icône attribuée par weathermap.
- Localiser l'utilisateur et donner directement la météo correspondante.
- Application s'affichant correctement sur un format smartphone/tablette (application responsive).
- L’arrière-plan doit correspondre à la météo.

# Ressources :

Paramètres et données (JSON) pour la météo courante de l’API Openweathermap : https://openweathermap.org/current (anglais)
API OpenWeatherMap https://openweathermap.org/ .
