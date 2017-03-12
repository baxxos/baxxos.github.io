# Zadanie 1: Osobná webová prezentácia na GitHub pages

Vytvorte webovú prezentáciu (webové sídlo) o sebe. Zamerajte sa jednak na vaše profesné záujmy (napr. projekty, ktoré riešite/riešili ste, čo vás v informatike najviac baví, fascinuje = váš developerský profil) a jednak vaše osobné záujmy, hobby.

V rámci developerského profilu vytvorte sekciu Webové publikovanie, kde budete publikovať všetky tri vaše vypracované zadania z predmetu.

Využite pritom technológie Git + GitHub Pages + Jekyll + Markdown. Využite potenciál statického generátora Jekyll a jeho templatovacích možností.

Podrobné požiadavky na vypracovanie a odovzdanie zadania (priemerná úroveň kvality):

Sídlo musí obsahovať aspoň 5 podstránok, pri využití aspoň 3 rôznych rozložení (layout-ov)

V rámci šablon musí byť použité:
* aspoň 5 premenných
* kolekcie alebo dátové súbory
* aspoň 5 filtrov alebo tagov
* aspoň 1 plugin (okrem pagination)

## Vypracovanie
### Podstránky
* Domov - landing page, krátke oboznámenie s druhom obsahu
* Dev Profile - profil mojej osoby ako programátora, t.j. programovacie jazyky s ktorými mám skúsenosti, technológie, ktoré využívam atď.
* Projects - opis projektov, na ktorých som zatiaľ v rámci školy alebo svojho voľného času pracoval. V tejto sekcii budú postupne zverejňované aj 
zadania z predmetu Webové Publikovanie.
* Blog - blogové príspevky písané v Markdowne
* About - sekcia sumarizujúca zámer stránky a základné informácie o mne
* RSS feed

### Layouty
Web využíva (bez defaultného) 4 rozličné rozloženia:
* Pre úvodnú stránku (jumbotron.html)
* Pre blogové príspevky (post.html)
* Pre záznamy z kolekcie používaných programovacích jazykov (profile-item.html)
* Pre záznamy z kolekcie doterajších projektov (projects-item.html)

### Premenné
* Premenná comments pri jednotlivých blog postoch určujúca či sú povolené Disqus komentáre k danému príspevku
* Premenná global-title, ktorá určuje prefix pre HTML title v default layoute (napr. časť pred dvojbodkou pre title "baxxos: About")
* Premenná lastPost, ktorá pri otvorení blogovej sekcie zobrazí najnovší blogový príspevok (podľa dátumu)
* Jednoduchý description pre príspevky blogu, ktorý sa zobrazí pri náhľade najnovšieho príspevku
* Rôzne utility premenné ako napr. cesty k obrázkom, autor príspevku, kolekcie v configu atď.

### Kolekcie
Stránka obsahuje dve kolekcie - vymenovanie používaných programovacích jazykov (sekcia Dev profile) a zoznam mojich doterajších projektov (sekcia Projects). V sekcii Projects budú postupne zverejňované aj zadania z predmetu Webové Publikovanie.

### Filtre a tagy
Filtre sú použité na formátovanie dátumu pri zverejnených blogových príspevkoch (date_to_string a date_to_long_string). Tagy sú použité na rôznych miestach - 
napr. cykly pre výpis kolekcií, zobrazenie najnovšieho blog príspevku, zobrazenie komentárov podmienené premennou, RSS feed atď.

### Pluginy
Stránka využíva 2 pluginy:
* [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search) na vyhľadávanie v blog postoch. Plugin sa inicializuje pomocou súboru jekyll-search-init.js.
* [Disqus](https://disqus.com/) pre pridávanie a správu komentárov k blog postom. Povolenie komentárov je podmienené premennou definovanou zvlášť pre každý blog post.

### Pokyny pre spustenie
Pomocou webového prehliadača na adrese [baxxos.github.io](https://baxxos.github.io/).

Alebo pomocou príkazu _jekyll serve_ v root adresári projektu a následne v prehliadači na adrese localhost:4000.