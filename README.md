# Diglot Weave

Free bilingual dialogues that start in your language and end in the one you're learning, one word at a time.

**Live site:** https://grumby42.github.io/diglot-weave/

Two friends, Sam (a US balloon pilot who also works in aviation and cybersecurity) and Lucía (from León, Guanajuato, Mexico), talk about something real: a balloon flight, a night shift on a cargo ramp, a kitchen fire call, a client meeting. Early stages are almost all in the reader's language. Each stage swaps in more of the other language until the conversation is entirely in it. Every target word is tappable, with a pronunciation guide written in the reader's own alphabet, a meaning, and audio from the device's speech voices.

## Three paths

| Path | Folder | What's there |
|---|---|---|
| English → Spanish | [`es/`](es/index.html) | 17 pages: a fable, a story and legend retelling, science, philosophy, everyday topics, and work Spanish for ballooning, cargo ramps, cockpits, firefighting, bars and cybersecurity. Two phrasebooks (essentials and work). |
| English → French | [`fr/`](fr/index.html) | A phrasebook with a French sound guide, grammar, verbs and everyday vocabulary, and three dialogues: *La bise et le soleil*, *Une montgolfière* and *Au café*. |
| Español → English | [`en/`](en/index.html) | For Spanish-speaking cybersecurity professionals who work with clients in English: a phrasebook (with false-friends and softeners sections), and four dialogues: a client meeting, an incident call, a change review and a SOC shift handoff. The interface is in Spanish, and English is respelled with Spanish letter values. |

Every page is a single self-contained HTML file. Pages work offline once loaded, and progress settings are stored only in your browser.

## How the pages work

- **Stages:** each dialogue has 5 to 8 stages. A bar chart at the top shows the share of target-language words in each stage, so the ramp is visible.
- **Pronunciation guides:** shown for a word's first two uses, then at the start of each of the next stages where it appears. Readers can switch them to always on or off.
- **Check yourself:** a short quiz at the end of each stage, built from that stage's new words. Every dialogue also has comprehension questions.
- **Listen first:** blurs the text until you've heard it.
- **Repeat after me:** reads each line, highlights it, then pauses long enough for you to say it out loud (shadowing).
- **Words ahead:** any stage that brings in four or more new words opens with a preview of them, with sound and meaning. It opens automatically at the bigger steps up in the target language.
- **Your turn:** the last stage ends with English prompts. Say the line in the target language out loud, then reveal and hear the model answer.
- **How to study this page:** a short method at the top of every dialogue.
- **Warm-up:** every Spanish dialogue after the first opens with a short, mostly English stage that reuses common words from earlier pages, so they come back before the new ones.
- **Review:** every word you tap or miss goes into a review deck. Each folder has a review page that quizzes you on due words at growing intervals (same day, then 1, 3, 7 and 21 days), by reading or by listening. The deck is saved in your browser and shared across all pages of the site.
- **Audio:** tap a word, a line, or a whole stage. **Smooth** (the default) reads each line in one target-language voice, so mixed sentences flow like real code-switching: the target words are exact and the reader's language has an accent. **Exact** switches voices at every language change, which gives native sound for both languages but short pauses. Speakers are told apart by pitch and, where available, a second voice. The audio uses the device's built-in text-to-speech, so quality depends on the voices installed.
- **New words:** each stage lists the words it introduces, with the guide and meaning.
- **Learner errors:** occasionally a speaker makes a typical mistake, shown struck through and corrected in the next line.

## What the research says

Each page is a "diglot weave", an idea that goes back at least to Burling (1968). The closest experimental support is encouraging but small. Learners who read text in their own language with a few target words left in recalled those words better than learners who read an all-target-language text (Ong & Zhang, 2018, reviewed by Thomas, 2020). We found no controlled study of a full multi-stage course like this one.

Glosses reliably help people learn words while reading (Yanagisawa, Webb & Uchihara, 2020), and quick multiple-choice checks work better than end-of-page glossaries. Most words need about 8 to 10 or more encounters before they stick (Pellicer-Sánchez & Schmitt, 2010), and spaced encounters work better than crowded ones (Webb, Uchihara & Yanagisawa, 2023). Respellings in familiar letters can pull your accent toward your own language (Bassetti, Escudero & Hayes-Harb, 2015; Hayes-Harb & Barrios, 2021). That is why every page asks you to listen first and treats the guides as a temporary bridge.

What the pages do with this:
- Guides show on a word's first two uses, then once at the start of each of the next stages where it appears, so they fade across stages rather than within one.
- Every stage has a short "Check yourself" quiz built from its new words.
- Every dialogue has comprehension questions, and the last stage ends with "Your turn" speaking prompts.
- "Listen first" blurs the text until you've heard it.
- Learner errors are clearly marked, including for screen readers.

**Honest gaps.** Within each page, the all-target-language final stages still introduce many new words: often less than 60% of their words have already appeared on that page. Most words also appear in only one or two packs. Both are below what the research suggests. Planned recycling and spaced review are the top items on the roadmap.

## How this was made and reviewed

The content was written with an AI model (Claude) under the direction of Ted Gransbury, then reviewed by six separate AI reviewers. Each reviewer worked from one specialist perspective: Spanish translation and interpreting, French translation and phonetics, phonetics and phonology, sociolinguistics and pragmatics, second language acquisition, and documentary linguistics with domain fact-checking. They checked the content against published sources, and their corrections were verified and applied.

**These were not human experts, and no native speaker has reviewed the content yet.** Treat it as a well-checked draft. Corrections from native speakers and teachers are the most valuable contribution you can make; please open an issue.

Safety-related lines (balloon landing position, fire scene commands, ramp procedures) teach language, not procedure. Always follow your operator's, station's or department's own training.

## Known limitations

- Pronunciation guides approximate sounds that the reader's alphabet can't show exactly (French nasal vowels, the English *th* and short vowels for Spanish readers, the Nahuatl *tl*). Always listen as well.
- Device voices vary. Some phones have no Spanish or French voice installed; the page says so if one is missing. Some voices mispronounce Nahuatl names.
- Spanish content leans toward Mexico. Regional alternatives are noted where they matter, but not exhaustively.

## Sources

Research
- Burling, R. (1968). Some outlandish proposals for the teaching of foreign languages. *Language Learning* 18. https://deepblue.lib.umich.edu/handle/2027.42/98107
- Thomas, N. (2020). Incidental L2 vocabulary learning: Recent developments and implications for future research. *Reading in a Foreign Language* 32(1). https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/5328ad9f-9901-453c-9c58-18434fa56563/content
- Pellicer-Sánchez, A. & Schmitt, N. (2010). Incidental vocabulary acquisition from an authentic novel. *Reading in a Foreign Language* 22(1). https://core.ac.uk/download/323109991.pdf
- Webb, S., Uchihara, T. & Yanagisawa, A. (2023). How effective is second language incidental vocabulary learning? A meta-analysis. *Language Teaching* 56(2). https://www.cambridge.org/core/product/E38E3468FD2090B1FA3051051DE8E70C
- Yanagisawa, A., Webb, S. & Uchihara, T. (2020). How do different forms of glossing contribute to L2 vocabulary learning from reading? *Studies in Second Language Acquisition*. https://cambridge.org/core/journals/studies-in-second-language-acquisition/article/how-do-different-forms-of-glossing-contribute-to-l2-vocabulary-learning-from-reading/38124150D59DF3039EE1FF5AE88FE922
- Kremmel, B. et al. (2023). Unknown vocabulary density and reading comprehension: Replicating Hu and Nation (2000). *Language Learning*. https://eprints.lancs.ac.uk/id/eprint/210922
- Bassetti, B., Escudero, P. & Hayes-Harb, R. (2015). Second language phonology at the interface between acoustic and orthographic input. *Applied Psycholinguistics* 36(1). https://www.cambridge.org/core/services/aop-cambridge-core/content/view/349B5CD70A06209C334EB78454305D25/S0142716414000393a.pdf/second-language-phonology-at-the-interface-between-acoustic-and-orthographic-input.pdf
- Hayes-Harb, R. & Barrios, S. (2021). The influence of orthography in second language phonological acquisition. *Language Teaching* 54. https://www.cambridge.org/core/services/aop-cambridge-core/content/view/216E90B9C2E165FF042E1D4AC80D7D3C/S0261444820000658a.pdf/influence_of_orthography_in_second_language_phonological_acquisition.pdf
- Nakata, T. (2015). Effects of expanding and equal spacing on second language vocabulary learning. *SSLA*. https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/effects-of-expanding-and-equal-spacing-on-second-language-vocabulary-learning/D1D796306985C52F9BE7A1200AC50DB9
- Dziemianko, A. (2024). Do we learn from mistakes? The usefulness of examples of errors in online dictionaries. *ReCALL* 36(1). https://www.cambridge.org/core/services/aop-cambridge-core/content/view/3C00865B348E8A313BE7CE4807A8DDCD/S0958344023000241a.pdf/do-we-learn-from-mistakes-the-usefulness-of-examples-of-errors-in-online-dictionaries.pdf

Content fact checks
- FAA, *Balloon Flying Handbook* (FAA-H-8083-11B), Appendix C: prelanding checklist and passenger landing position. https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Balloon_Flying_Handbook_FAA-H-8083-11B/appendix_c.pdf
- Escuela de Suboficiales FAC, *Guía de fraseología*: Spanish ATC phraseology (viento en calma, listo para salir, autorizado a despegar). https://www.esufa.edu.co/sites/esufa/files/guia_fraseologia_cbad_version_2_pdf.pdf
- ENAIRE safety clip on "motor y al aire". https://www.enaire.es/es_ES/2022_04_05/Clip_seguridad_22.pdf
- Cambridge (MA) Fire Department, cooking fire safety (grease fires: cover, never water). https://cambridgema.gov/en/cfd/News/2023/05/cookingfiresafety
- Horacio Quiroga, "Las medias de los flamencos" (1918), text at textos.info. https://www.textos.info/horacio-quiroga/las-medias-de-los-flamencos/pdf
- Popocatépetl: names, Don Goyo, legend variants. https://en.wikipedia.org/wiki/Popocat%C3%A9petl
- Origin of the name Galápagos. https://galapagos.to/TEXTS/GALAPAGO.HTM
- Ship of Theseus (Plutarch; Hobbes's variant). https://www.britannica.com/print/article/2195856
- Café de olla. https://www.mexicodesconocido.com.mx/el-cafe-de-olla-una-tradicion-surgida-durante-la-revolucion-mexicana.html
- Larousse, *fleuve*. https://www.larousse.fr/dictionnaires/francais/fleuve/34135
- Académie française on the pronunciation of *août*. https://www.dictionnaire-academie.fr/article/QR_0303
- Place-name gender in Spanish (Indiana es plana). https://www.udep.edu.pe/castellanoactual/duda-resuelta-genero-y-numero-de-los-toponimos/
- Words for drinking straw across Spanish-speaking countries. https://www.speakinglatino.com/spanish-language-words-for-drinking-straw/

## Roadmap

1. Native-speaker review of all Spanish and French content.
2. Rewrite the all-target-language final stages so most of their words have already appeared earlier on the page.
3. Recycle more vocabulary across packs. Every Spanish dialogue after the first now opens with a warm-up stage that brings back common words from earlier pages, and `src/packs/core.js` lists 46 core words. `src/build/vocab-report.js` checks them (results in `src/vocab-report.md`): every core word now appears in at least 3 packs, and 33 of 46 reach 8 or more uses. Most other words still appear in only one pack.
7. More French dialogues, and more English-for-Spanish-speakers packs.

## Building from source

The pages are generated from data files, so content fixes go in `src/`, not in the built HTML.

```
npm install        # optional: installs Playwright for the automatic page checks
npm run build      # rebuilds every page into es/, fr/, en/ and index.html
```

The build checks that every target word has a pronunciation and meaning, flags duplicate entries and untrilled initial *r* in Spanish, and (with Playwright) loads each page at phone width to check for errors and overflow.

```
src/
  templates/   page templates (dialogue engine, phrasebook, hubs, home)
  packs/       content: one file per dialogue or phrasebook
  build/       build scripts
```

**Data format.** Dialogue packs list lexicon rows as `word|RESPELLING|meaning|optional note`, with the stressed syllable in capitals. Dialogue lines are `["S" or "L", "text"]`. In a line, `{braces}` mark target-language text and `<<double angle brackets>>` mark a deliberate learner error.

## License

Code: [MIT](LICENSE). Lesson content: [CC BY 4.0](LICENSE-CONTENT.md). Credit "Diglot Weave by Ted Gransbury".
