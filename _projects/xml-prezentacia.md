---
layout: projects-item
title: Prezentácia pomocou XML a XSL(T)
project_url: https://github.com/baxxos/xml-prezentacia
image_path: https://scr.sad.supinfo.com/articles/resources/170045/2808/4.png
---
### Zadanie

Analyzujte možnosti zápisu jednoduchej prezentácie v jazyku XML. Identifikujte základné súčasti prezentácie a navrhnite XML elementy pre ich označkovanie (metadátové, štrukturálne, inline). Dbajte na znovupoužiteľnosť a vyvarujte sa redundancií. Návrh elementov zrealizujte opísaním typu dokumentu pomocou vybraného jazyka (DTD, XSD, RELAX NG) spolu s vysvetlením účelu jednotlivých elementov. Vo vami navhrnutom jazyku vytvorte ukážkovú prezentáciu, ktorá bude demonštrovať možnosti tvorby prezentácií podľa definície typu dokumentu.

Navrhnite a vytvorte XSLT šablóny pre konverziu prezentácie z XML do XHTML+CSS a pre konverziu prezentácie z XML do PDF. Klaďte dôraz na znovupoužitie jednotlivých šablon pre viaceré výstupné formáty. Umožnite zadávanie parametrov transformácií.

Súčasťou požiadaviek na zadanie je vytvorenie správy o zadaní 3, v ktorej zdokumentujete splenie jednotlivých bodov zadania. Správa bude súčasťou vašej stránky o Webovom publikovaní na GitHube.

### Vypracovanie zadania

Pre demonštráciu vypracovaného zadania som si zvolili ukážkovú prezentáciu o umelej inteligencii, ktorú som pripravil počas tohto semestra na inom predmete. Prezentácia obsahuje 7 vlastných slidov v rôznych rozloženiach (úvodné, obrázok vľavo, obrázok vpravo, iba obrázok, predvolené). Slidy sú generované do výsledných súborov v takom poradí, v akom po sebe nasledujú vo vstupnom súbore. Niektoré parametre transformácie je možné riadiť parametrami definovanými v externom XSL súbore (viď zoznam súborov nižšie). Samotná XML štruktúra prezentácie je opísaná v externom DTD súbore a zahŕňa nasledovné vlastné elementy:

* prezentacia - koreňový element (viaže sa naň DOCTYPE)
* info - metadáta pre automatické generovanie dodatočných informácií (napr. HTML head element)
	* author, description..
* slide - reprezentuje slide v rozložení, ktoré je definované atribútom _layout_
	* slide-info - wrapper pre nadpisy
		* subtitle/title - nadpisy jednotlivých slidov
	* slide-content - wrapper pre obsah slidov
		* para - odseky
		* ul/ol - nečíslovaný resp. číslovaný zoznam
		* img - obrázok
* emp - text kurzívou
* strong - text tučným písmom
* obsah - prázdny element, ktorý ak je definovaný tak spustí automatické generovanie záverečného slidu

Pre vstupný XML súbor boli vytvorené XSL transformačné šablóny pre transformáciu do HTML a PDF. Štýlovanie výstupu v HTML je realizované pomocou externého CSS
(resp. SASS) súboru. Štýlovanie PDF dokumentu nie je na takej úrovni ako HTML výstup vzhľadom na komplikovanejšiu syntax jazyka XSL-FO - generuje sa tak primárne plain text, nadpisy a obrázky bez ohľadu na ich zamýšľané rozloženie.


### Zoznam súborov a pokyny pre spustenie

Repozitár obsahuje nasledujúce súbory/priečinky:

* images - priečinok s obrázkami
* css - preičinok s CSS/SASS štýlmi pre HTML verziu prezentácie
* prezentacia.xml - vstupný XML súbor s obsahom prezentácie
* prezentacia_dtd.xml - DTD definícia vlastných typov elementov 
* prezentacia_html.xsl - XSL súbor pre účely transformácie prezentácie do formátu HTML
* prezentacia_pdf.xsl - XSL súbor pre účely transformácie prezentácie do formátu PDF
* prezentacia_params.xsl - nastaviteľné parametre vyššie uvedených transformácií (napr. zobrazenie navigácie)
* slide_1.html - slide_8.html vzorová prezentácia vo formáte HTML
* prezentacia_fo.pdf - vzorová prezentácia vo formáte PDF
* saxon.bat a pdf_xep.bat - dávkové súbory pre preklad do HTML a PDF

Pre získanie výstupných (formátovaných) súborov je nutné zadať nasledujúce príkazy (za predpokladu správnych ciest ku knižniciam _Saxon_ a _XEP_):

* _saxon.bat_ - formátovanie obsahu prezentácie do HTML (výstupné súbory slide_1 až slide_X)
* _pdf\_xep.bat_ - formátovanie obsahu prezentácie do PDF (výstupné súbor prezentacia_fo.pdf)

Nie je nutné na vstup .bat súborov zadávať žiadne dodatočné parametre

