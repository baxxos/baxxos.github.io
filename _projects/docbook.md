---
layout: projects-item
title: BP v Docbook-u
project_url: https://github.com/baxxos/bp_docbook
image_path: /images/natankuj.jpg
---
### Zadanie

Predmetom 2. zadania je spracovanie vybraného dokumentu (ideálne bakalárskeho projektu) z pôvodného ľubovoľného (Word, OpenOffice, LaTeX, …) formátu do formátu DocBook a vygenerovanie cieľového tvaru v PDF. Výsledný dokument bude mať rozsah minimálne 10 a maximálne 15 strán. Do rozsahu sa nezapočítavajú úvodné strany (obsah, zoznamy obrázkov a tabuliek), použitá literatúra a prílohy.

Požadované a kontrolné konštrukcie sú:

* štandardné členenie textu na kapitola, podkapitola, podpodkapitola, príloha, generovaný obsah,
* zvýraznenie slov, zvýraznenie členenia textu odrážkami alebo číslovaním,
* odkazy na iné časti vlastného dokumentu, prípadne odkazy na URL,
* poznámka pod čiarou,
* zoznam použitej literatúry a zdrojov vrátane ich citácie v texte,
* vloženie obrázku a tabuliek, odkazy na ne v texte; zoznam obrázkov a tabuliek v úvode alebo závere textu,
* vytvorenie registra pojmov (indexu) s pojmami hierarchicky usporiadanými do dvoch úrovni, napríklad „cykly, while“, „cykly, for“ (najmenej ako ukážku na 10-15 pojmoch na predvedenie práce s registrom).

### Vypracovanie zadania

Aby bolo možné dosiahnuť požadované konštrukcie museli byť v pôvodnom obsahu bakalárskej práce urobené nasledujúce zmeny:

* pridanie zoznamu obrázkov a tabuliek
* pridanie registra pojmov
* pridanie poznámky pod čiarou

Ďalej bolo nutné odstrániť z práce všetky tabuľky vzhľadom na fakt, že Docbook ich nepodporuje bez nutnosti externých Java knižníc. Bohužiaľ tieto knižnice (_xalan_, _xercesImpl_, _xml-apis_) na seba navzájom nadväzujú a na mojom počítači som ich nebol schopný spustiť tak aby boli viditeľné pre Saxon. Pri preklade tak došlo vždy ku nasledujúcej chybe: "_No adjustColumnWidths function available_ (Processing terminated)". Neskúšal som replikovať problém na inom stroji pretože podľa dostupných informácií ostatným študentom tieto knižnice fungujú. Napriek tomu sú v odovzdanom XML kóde tabuľky aj s ich pôvodným obsahom v Docbook formáte zahrnuté avšak sú umiestnené len v komentároch. Pre viac informácií o spomínanej chybe kliknite [sem](http://docbook.10921.n7.nabble.com/adjustColumnwidths-error-td6894.html) alebo [sem](https://www.sourceware.org/ml/docbook-apps/2003-q2/msg00890.html).

Najčastejšie používanými elementami zadania sú logicky elementy chapter, section, title, para a figure. Z atribútov sú to hlavne unikátne identifikátory (id) a role. Vzorové XSL schémy boli prispôsobované v miere nutnej pre korektné formátovanie titulnej strany, automatické generovanie zoznamu obrázkov a správne zobrazenie v slovenčine.

### Zoznam súborov a pokyny pre spustenie

Repozitár obsahuje nasledujúce súbory/priečinky:

* images - priečinok s obrázkami
* fo.pdf - výstupný PDF súbor
* mojabp.xml - vstupný XML súbor s obsahom bakalárskej práce (10-15 strán z pôvodného)
* MMeluch_bp.docx - pôvodné znenie bakalárskej práce
* fo_saxon.bat - docbook konverzia, na vstupe treba zadať ako vstupný súbor _mojabp.xml_
* thesis.xml - všeobecná vzorová šablóna
* thesis-tp-fo.xml - vzorová šablóna pre titulné strany atď. (includovaná do _thesis.xsl_)

Pre získanie výstupného PDF súboru je nutné zadať nasledujúce príkazy (za predpokladu, že je tento adresár s názvom "bp" umiestnený v C:/Docbook/bat/):

* _fo_saxon.bat mojabp.xml_
* _pdf_xep.bat_
