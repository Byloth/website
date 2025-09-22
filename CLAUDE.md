# Byloth's Website

## Panoramica

Questo repository contiene il codice sorgente del mio sito web personale.

### Home page

Pagina di atterraggio del sito.  
Presenta una timeline infinite-scroll in ordine cronologico inverso,
con degli estratti provenienti da tutte le altre sezioni del sito.

### Blog

Sezione dedicata a documenti con molto contenuto (testuale e non): articoli, tutorial, guide, ecc.

La pagina principale si presenta divisa in 2 sezioni distinte: una sezione principale e una sidebar.

Nella sezione principale, verranno elencati gli articoli usando un infinite-scrolling,
secondo i seguenti criteri:
- Articoli in evidenza (se presenti).
- Articoli più recenti (in ordine cronologico inverso).
- Articoli più popolari (in ordine di popolarità decrescente).

La sidebar aiuterà l'utente nella navigazione della sezione, mostrando le categorie e i tag degli articoli disponibili.  

Selezionando un articolo, si viene portati alla pagina dedicata
all'articolo stesso, dove è possibile leggere l'articolo completo.

### Portfolio

Sezione dedicata a progetti ed esperimenti personali e collaborativi.

La pagina principale si presenta divisa in 2 sezioni distinte: una sezione principale e una sidebar.

Nella sezione principale, verranno elencati i progetti e gli esperimenti usando un infinite-scrolling,
secondo i seguenti criteri:
- Progetti in evidenza (se presenti).
- Progetti più recenti (in ordine cronologico inverso).
- Progetti più popolari (in ordine di popolarità decrescente).

La sidebar aiuterà l'utente nella navigazione della sezione, mostrando le categorie e i tag dei progetti disponibili.

Selezionando un progetto, si viene portati alla pagina dedicata
al progetto stesso, dove è possibile leggere i dettagli completi.

### Chi sono

Sezione dedicata a informazioni personali e professionali.

Contiene una breve biografia, il curriculum vitae e i link ai profili sui social media.  
Sono anche presenti delle "pillole" con informazioni aggiuntive, tra cui:
- Competenze tecniche.
- Lingue parlate.
- Interessi personali.
- Hobby.

In coda alla pagina, è presente un guestbook dove i visitatori possono lasciare un messaggio pubblico.  
Il form del guestbook include, inoltre, un sistema di recensione tramite stelle (da 1 a 5 stelle).
Sarà possibile scrivere un messaggio e - eventualmente - lasciare una valutazione in stelle (opzionale).

Ogni messaggio o recensione inserita, verrà mostrata in coda alla pagina,
in ordine cronologico inverso usando un infinite-scrolling, solo dopo previa approvazione manuale.

La valutazione media in stelle, verrà poi calcolata e mostrata all'inizio della sezione guestbook.

### Contatti

Sezione dedicata ai modi per contattarmi.

È presente un modulo di contatto per inviare messaggi direttamente dal sito.

### Informazioni

Sezione dedicata alle informazioni sul sito.

Contiene informazioni sul sito, sulla sua privacy policy, sui termini di servizio e sui cookie.  
È presente, inoltre, una lista dettagliata delle tecnologie utilizzate per costruire il sito.

Vengono mostrate anche le statistiche di utilizzo del sito, tra cui:
- Numero di visitatori unici.
- Numero di pagine viste.
- Tempo medio trascorso sul sito.
- Percentuale di rimbalzo.

## Funzionalità

### Header del sito

L'header del sito può presentarsi in 2 differenti modalità:
- Modalità estesa: mostra il logo del sito, il titolo e il sottotitolo dinamico.
- Modalità compatta: mostra esclusivamente il logo del sito e il titolo (in dimensioni ridotte).  
In questa modalità, l'header del sito occuperà meno spazio verticale, lasciando più spazio al
contenuto della pagina stessa, e verrà visualizzata come una barra fissa in cima alla pagina.

Clickando sul logo del sito o sul titolo, si viene riportati alla home page del sito.

### Sottotitolo dinamico

All'interno dell'header del sito, viene visualizzato un sottotitolo.  
Questo sottotitolo, viene selezionato casualmente da una lista di
sottotitoli predefiniti ad ogni nuovo caricamento della pagina.

Il sottotitolo è - a tutti gli effetti - puro HTML.  
Nella maggior parte dei casi, conterrà semplicemente del testo, ma
può anche contenere link, immagini, icone, bottoni, input, ecc.

### Sistema di navigazione

Il sito presenta un sistema di navigazione principale e uno secondario.

Il sistema di navigazione principale è sempre visibile in cima alla pagina, sotto l'header del sito.
Contiene i link alle sezioni principali del sito.  
Il sistema di navigazione secondario, invece, è visibile solo
all'interno delle singole sezioni del sito che lo prevedono.

Oltre a fornire i link per navigare tra le sezioni del sito,
il sistema di navigazione principale presenta il breadcrumb
della pagina corrente, per aiutare l'utente a capire dove si
trova e per facilitare la navigazione tra le sezioni del sito.

### Barra di ricerca

L'header del sito contiene una barra di ricerca, che permette di cercare all'interno di tutte le sezioni del sito.  
Mentre si digita nella barra di ricerca, vengono mostrati i risultati in tempo reale, suddivisi per sezione.

Una volta selezionato un risultato, si viene portati alla pagina dedicata al risultato stesso.

### Modalità scura

Il sito supporta la modalità scura, che può essere attivata manualmente dall'utente
tramite un apposito toggle presente nell'header del sito.  
In alternativa, la modalità scura può essere attivata automaticamente
in base alle preferenze del sistema operativo dell'utente.

### Infinite-scrolling

Le funzionalità di infinite-scroll non carica automaticamente
nuovi contenuti al raggiungimento della fine della pagina,
ma - viceversa - è presente un pulsante "Carica altro" in fondo alla pagina,
che permette all'utente di caricare ulteriori contenuti alla richiesta.

### Footer del sito

Il footer del sito si trova in fondo a ogni pagina del sito.  
Contiene i link alle sezioni principali del sito, ai profili sui social media e alle informazioni legali.

Contiene, inoltre, un piccolo modulo per iscriversi alla newsletter del sito.

## Sviluppo

Il sito è costruito utilizzando le seguenti tecnologie:
- [Nuxt 4](https://nuxt.com/) - Framework full-stack per Vue.js
- [Nuxt Content](https://content.nuxt.com/) - Gestione dei contenuti statici
- [Nuxt UI](https://ui.nuxt.com/) - Libreria di componenti UI
- [Vue.js 3](https://vuejs.org/) - Framework JavaScript reattivo
- [TypeScript](https://www.typescriptlang.org/) - Superset tipizzato di JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first (via Nuxt UI)

### Stile e design

Il sito utilizza un design moderno e pulito, con un layout responsive che si adatta a qualsiasi dispositivo.

Il design del sito segue le principali linee guida di usabilità e accessibilità,
per garantire una buona esperienza utente a tutti i visitatori.  
Lo stile del sito sfrutta appieno le potenzialità di Nuxt UI, per offrire un'interfaccia utente coerente e piacevole.

### Best-practices

Questa applicazione utilizza metodi di implementazione moderni e avanzati, con una particolare attenzione
alla performance, alla scalabilità e alla manutenibilità del codice.  
Ogni funzionalità è implementata utilizzando le migliori pratiche
del settore, per garantire un codice pulito e ben strutturato.  
Il codice è scritto in TypeScript, per garantire una maggiore sicurezza e affidabilità.

Ogni funzionalità che possa essere utile o riutilizzabile in altri progetti, viene estratta
in un modulo o in un componente separato, per facilitare il riutilizzo e la condivisione del codice.

#### Componenti

Ogni componente è progettato per essere il più possibile riutilizzabile e indipendente.  
Se un componente può essere diviso in più componenti più piccoli e riutilizzabili, viene fatto.

I componenti sono il più possibile piccoli e semplici, così da facilitare il riutilizzo e la manutenzione del codice.
Ognuno ha la propria responsabilità e fanno uso della comunicazione tra essi:
- Props per passare dati dai componenti padri ai componenti figli.
- Eventi personalizzati per passare dati dai componenti figli ai componenti padri.

I componenti hanno nomi descrittivi e seguono una convenzione di denominazione coerente, ognuno detiene una
propria classe CSS dedicata con la quale gli eventuali componenti padri possono interagire per modificarne l'aspetto.

#### Pinia e le richieste di rete

L'applicazione utilizza Pinia come store per gestire lo stato globale.  
Tutta la logica di business e le richieste di rete sono gestite in un'unico punto, all'interno degli store di Pinia.  
Ogni store di Pinia è responsabile di una specifica funzionalità o sezione dell'applicazione e contiene
tutta la logica di business e le richieste di rete necessarie per gestire quella funzionalità o sezione.

Solamente le `pages` possono eseguire richieste di rete direttamente,
per caricare i dati iniziali necessari al rendering della pagina stessa.  
Gli altri componenti, invece, non eseguono mai richieste di rete direttamente
e si limitano a ricevere le informazioni dai componenti padri.

Le informazioni restituite dalle actions di Pinia, vengono sempre validate, convertite e mappate in
oggetti di classi dedicate, per garantire una maggiore sicurezza, tipizzazione e affidabilità del codice.

#### Tailwind CSS

Il sito utilizza Tailwind CSS tramite Nuxt UI, per sfruttare appieno le potenzialità del framework CSS utility-first.  
Non viene - però - utilizzato Tailwind CSS in modo "puro" e non vengono usate direttamente
le classi utility di Tailwind CSS all'interno dei template dei componenti.

Viene, invece, utilizzato un approccio ibrido, che combina le classi utility di Tailwind CSS
con classi CSS personalizzate, per garantire una maggiore flessibilità e controllo sullo stile del sito.  
Viene utilizzato il tag `<style lang="scss" scoped>` all'interno dei componenti, per definire
le classi CSS personalizzate, che possono poi utilizzare le classi utility di Tailwind CSS.  

Le classi CSS personalizzate seguono la convenzione BEM (Block Element Modifier),
per garantire una maggiore leggibilità e manutenibilità del codice.

Laddove possibile - però - vengono sfruttate ed utilizzate le variabili CSS fornite da Nuxt UI e Tailwind CSS,
per garantire una maggiore coerenza e uniformità nello stile del sito.

### Struttura del progetto

Il progetto segue la struttura standard di Nuxt 4:

```
frontend/
├── assets/          # Asset statici (CSS, immagini, fonts)
├── components/      # Componenti Vue riutilizzabili
├── composables/     # Funzioni composabili Vue
├── content/         # Contenuti statici gestiti da Nuxt Content
├── layouts/         # Layout delle pagine
├── middleware/      # Middleware per le route
├── models/          # Classi e modelli
├── pages/           # Pagine dell'applicazione (routing automatico)
├── plugins/         # Plugin di Nuxt
├── public/          # File pubblici statici
├── server/          # API server-side
├── stores/          # Store di Pinia
├── types/           # Definizioni TypeScript
└── utils/           # Funzioni di utilità
```

### Fasi di sviluppo

**Fase 1: Contenuti statici (corrente)**
- Tutti i contenuti sono gestiti tramite Nuxt Content
- Focus sull'interfaccia utente e l'esperienza utente
- Implementazione delle funzionalità di base

**Fase 2: Backend dinamico (futura)**
- Integrazione con backend per contenuti dinamici
- Sistema di autenticazione e autorizzazione
- Gestione avanzata dei commenti e guestbook
- Analytics e statistiche in tempo reale

### Comandi di sviluppo

```bash
# Avvio del server di sviluppo
bun run dev

# Build per produzione
bun run build

# Generazione di un sito statico
bun run generate

# Anteprima della build di produzione
bun run preview

# Linting
bun run lint

# Controllo dei tipi TypeScript
bun run typecheck
```
