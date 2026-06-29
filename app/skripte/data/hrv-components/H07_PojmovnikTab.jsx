'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">Dostojevski</span>
      <span class="pill p-r">realizam</span>
      <span class="pill p-t">filter po kategoriji</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📚 Pojmovnik — realizam + Dostojevski pojmovi</div>
      <div class="box-int-txt">
        <b>55 ključnih pojmova</b>: (1) djelo <em>Zločin i kazna</em> — likovi, kompozicija, simbolika, (2) Dostojevski autor, (3) epoha realizma, (4) ruski kontekst 1860-ih. Koristi filter.
      </div>
    </div>



    <div class="pojm-search-wrap">
      <span class="pojm-search-ico">🔍</span>
      <input type="search" class="pojm-search-input" id="pojm-search" placeholder="Pretraži pojmove (npr. nihilizam, Sonja, polifonija)…" aria-label="Pretraži pojmovnik">
      <span class="pojm-kbd-hint">Ctrl + K</span>
      <button type="button" class="pojm-search-clear" id="pojm-search-clear" onclick="pojmClear()" aria-label="Obriši pretragu">×</button>
    </div>

    <div class="pojm-filters" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="djelo">Zločin i kazna</button>
      <button class="pojm-filter" data-cat="autor">Dostojevski</button>
      <button class="pojm-filter" data-cat="realizam">Realizam</button>
      <button class="pojm-filter" data-cat="rusija">Ruski kontekst</button>
    </div>

    <div class="pojm-count" id="pojm-count">55 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- DJELO: ZLOČIN I KAZNA (17) -->
      <div class="pojm" data-cat="djelo" data-kw="raskoljnikov protagonist student nadcovjek teorija"><span class="pojm-cat">djelo</span><div class="pojm-word">Rodion Raskoljnikov</div><div class="pojm-def">Protagonist Zločina i kazne. 23 godine, bivši student prava iz Peterburga. Siromah, bolestan, intelektualno arogantan. Autor članka <em>„O zločinu"</em> — teorija o „običnim" i „neobičnim" (nadčovjeci) ljudima. Ubija lihvaricu Alonu Ivanovnu i njezinu polusestru Lizavetu. <b>Arhetip „suvišnog čovjeka"</b> (nastavak Onjegina). Ime: rus. <em>raskoljnik</em> = <b>raskolnik, skismaatik</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="sonja marmeladova prostitutka moralna vertikala"><span class="pojm-cat">djelo</span><div class="pojm-word">Sonja Marmeladova</div><div class="pojm-def">Sonja Semjonovna Marmeladova, 18 godina. Kći pijanca Marmeladova. Prisiljena na prostituciju (<em>„žuta kartica"</em>) da prehrani maćehu Katerinu i polubraću. Duboko <b>pravoslavna</b>. Čita Raskoljnikovu <em>Evanđelje po Ivanu</em> (uskrsnuće Lazara). <b>Moralna vertikala romana</b> — simbol kršćanske ljubavi i iskupljenja. Ide s Raskoljnikovim u Sibir.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="porfirij istrazitelj psiholog"><span class="pojm-cat">djelo</span><div class="pojm-word">Porfirij Petrovič</div><div class="pojm-def">Istražitelj u Zločinu i kazni. Lukav, psihološki profinjen. <em>Zna da je Raskoljnikov ubojica</em> od prvog susreta, ali nema dokaz. Kroz <b>3 psihološka susreta</b> vodi ga do priznanja. Citira njegov članak, igra mačke i miša. Savjetuje mu <em>da se sam preda</em> (lakša kazna). <b>Intelektualni dvojnik Raskoljnikovu</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="svidrigajlov dvojnik nadcovjek cinik"><span class="pojm-cat">djelo</span><div class="pojm-word">Svidrigajlov</div><div class="pojm-def">Arkadij Ivanovič Svidrigajlov, oko 50. Bivši Dunjin poslodavac, proganja je. Cinik, razvratnik. Možda je otrovao ženu Marfu. <b>Raskoljnikovljev dvojnik</b> — jednaka filozofija <em>bez moralne grižnje</em>. Prisluškuje priznanje. Pokušava ucijeniti Dunju — ona ga gađa pistoljem. <b>Ubija se na mostu</b>. Njegov kraj = ono što bi Raskoljnikov bio bez Sonje.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="dunja raskoljnikova sestra luzin razumihin"><span class="pojm-cat">djelo</span><div class="pojm-word">Avdotja „Dunja" Raskoljnikova</div><div class="pojm-def">Raskoljnikovljeva sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za <b>Lužina</b> (koristoljubiv odvjetnik) <em>samo radi brata</em> — da osigura mu studij. Raskoljnikov odbija tu žrtvu. Raskida s Lužinom. Na kraju se udaje za <b>Razumihina</b>. <em>Paralela Sonji</em>: obje žrtvuju sebe.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="razumihin prijatelj razum student"><span class="pojm-cat">djelo</span><div class="pojm-word">Dmitrij Razumihin</div><div class="pojm-def">Raskoljnikovljev odani prijatelj. <b>Razum</b> (rus. <em>razum</em> = pamet) — u imenu. Zdrav, radišan, veseo — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Ženi se Dunjom. Predstavlja <b>alternativu</b>: što Raskoljnikov može biti bez teorije nadčovjeka.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="marmeladov pijanac otac sonjin"><span class="pojm-cat">djelo</span><div class="pojm-word">Semjon Marmeladov</div><div class="pojm-def">Sonjin otac. Bivši činovnik, otpušten zbog pijanstva. Uskrsne, pa ga opet otpuste. <b>Oslobodilačka ispovijed</b> u kafani Raskoljnikovu otvara roman. Umire pregažen konjima. Simbolizira <em>raspad dostojanstva pod siromaštvom i alkoholom</em>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="katerina ivanovna maceha tuberkuloza"><span class="pojm-cat">djelo</span><div class="pojm-word">Katerina Ivanovna</div><div class="pojm-def">Sonjina maćeha, druga žena Marmeladova. Nekad plemkinja, sada u ekstremnoj bijedi s <em>tuberkulozom</em>. Ponosna, polu-luda. <b>Nagovara Sonju na žutu karticu</b>. Na kraju ludi, iskašljava krv, umire na ulici. Simbol sloma dostojanstva.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="luzin petar petrovic odvjetnik"><span class="pojm-cat">djelo</span><div class="pojm-word">Petar Lužin</div><div class="pojm-def">Odvjetnik. Dunjin zaručnik. Koristoljubiv, želi ženu <em>podreðenu</em> (jer će ovisiti o njemu). Podmeće Sonji krađu u V. dijelu da je diskreditira. Raskinut s Dunjom. <b>Utjelovljuje utilitaran buržoaski moral</b> — laž u odijelu pristojnosti.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="alona lihvarica zrtva"><span class="pojm-cat">djelo</span><div class="pojm-word">Alona Ivanovna</div><div class="pojm-def">Lihvarica, škrta i okrutna prema sestri Lizaveti. Raskoljnikov je vidi kao <em>„štetnu vaš"</em> koju treba ukloniti. <b>Prva žrtva</b> — sjekirom po glavi. Utilitarni argument: ubojstvom jedne pomoći stotinama siromaha.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="lizaveta nevina sestra alona zrtva"><span class="pojm-cat">djelo</span><div class="pojm-word">Lizaveta Ivanovna</div><div class="pojm-def">Alonina polusestra. Krotka, jednostavno duhovna, gotovo sveta. <b>Druga žrtva</b> — Raskoljnikov je ubija jer ga je zatekla. <em>Neplanirana žrtva razotkriva teoriju</em> — ne može se „odabrati" koga se ubija. Bila je <b>Sonjina prijateljica</b> — ironična koincidencija.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="teorija nadcovjeka nap oleon clanak zlocin"><span class="pojm-cat">djelo</span><div class="pojm-word">Teorija nadčovjeka</div><div class="pojm-def">Raskoljnikovljeva teorija iz članka <em>„O zločinu"</em> (objavljen 6 mjeseci prije ubojstva). Ljudi se dijele na <b>„obične"</b> (poslušni, masa) i <b>„neobične"</b> (nadčovjeci: Napoleon, Muhamed, Newton). Neobični imaju pravo <em>prekršiti zakon radi više ideje</em>. <b>Anticipira Nietzscheovog Übermensch-a</b> (1883.).</div></div>
      <div class="pojm" data-cat="djelo" data-kw="zuta boja tapete kartica"><span class="pojm-cat">djelo</span><div class="pojm-word">Žuta boja</div><div class="pojm-def">Dominantna boja romana. <em>Žute tapete</em> u Raskoljnikovljevom stanu („sobica kao lijes"). Alonina žuta haljina. Sonjina <em>„žuta kartica"</em> — registracija prostitutki. Peterburg u ljetnoj vrućini. <b>Žuto = grad koji truje</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="broj 7 sedam simbolika"><span class="pojm-cat">djelo</span><div class="pojm-word">Broj 7 (simbolika)</div><div class="pojm-def">Broj 7 prati cijeli roman — <em>biblijski simbol savršenstva</em> (dani stvaranja). Raskoljnikov ubija <b>u 7:00h</b>, čeka <b>7 dana</b>, ide <b>730 koraka</b>. Ironija: čin razdvajanja u broj cjeline. Sonja je <em>18 godina</em> (3×6 ili 7+7+4 — broj nesavršenosti).</div></div>
      <div class="pojm" data-cat="djelo" data-kw="uskrsnuce lazara ivanovo evandjelje sonja"><span class="pojm-cat">djelo</span><div class="pojm-word">Uskrsnuće Lazara</div><div class="pojm-def">Scena iz <em>Ivanovog evanđelja, 11. glava</em>. Lazar mrtav 4 dana, Krist ga zove iz groba. <b>Sonja čita Raskoljnikovu</b> u IV. dijelu romana. Prekretnica radnje. <em>Raskoljnikov je „duhovno mrtav"</em> — treba mu uskrsnuće. Biblijski model Raskoljnikovljevog puta.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="epilog sibir iskupljenje san"><span class="pojm-cat">djelo</span><div class="pojm-word">Epilog (Sibir)</div><div class="pojm-def">Zadnji dio romana, 1,5 godinu nakon predaje. Raskoljnikov u <em>katorgi</em> (8 godina). Sonja ga prati. Bolest — <b>san o bezumnim bakterijama</b> (proročanstvo ideoloških totalitarizama 20. st.). Buđenje — suze, ljubav Sonji. <em>„Nova priča počinje, priča o postupnom preporodu čovjeka."</em> Otvoren kraj.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="peterburg grad sennaja plostad atmosfera"><span class="pojm-cat">djelo</span><div class="pojm-word">Sankt-Peterburg (u romanu)</div><div class="pojm-def">Ruska prijestolnica. U romanu nije pozadina — <em>aktivan lik</em>. <b>Duševni stisak</b> uskih ulica, vrućina, smrad. Sennaja ploščadj — trgovska četvrt bijede. Peterburg <em>generira</em> Raskoljnikovu teoriju. Dostojevski ga opisuje kao <b>„najapstraktniji grad na svijetu"</b>.</div></div>

      <!-- AUTOR: DOSTOJEVSKI (10) -->
      <div class="pojm" data-cat="autor" data-kw="dostojevski fjodor mihajlovic autor"><span class="pojm-cat">autor</span><div class="pojm-word">F. M. Dostojevski</div><div class="pojm-def">Fjodor Mihajlovič Dostojevski (1821.–1881.). Ruski pisac, <b>utemeljitelj psihološkog realizma</b>. Veliki romani: <em>Zločin i kazna</em> (1866.), <em>Idiot</em> (1868.), <em>Zli dusi</em> (1872.), <em>Braća Karamazovi</em> (1880.). Sin liječnika. Osuđen na smrt 1849. — pomilovan na strelištu. 4 godine Sibira. Epilepsija. Najutjecajniji ruski autor u svijetu.</div></div>
      <div class="pojm" data-cat="autor" data-kw="psiholoski realizam dostojevski"><span class="pojm-cat">autor</span><div class="pojm-word">Psihološki realizam</div><div class="pojm-def">Dostojevski specifičnost. Gdje Balzac opisuje <em>društvo izvana</em>, Dostojevski ulazi <b>u glavu lika</b>: paranoja, strah, savjest, racionalizacija. <em>Unutarnji monolog</em> kao tehnika. <b>Roman kao psihološki slučaj</b>, ne samo radnja. Prethodnica <em>stream of consciousness</em> (Joyce) i <em>freudovske psihoanalize</em>.</div></div>
      <div class="pojm" data-cat="autor" data-kw="polifonija bahtin glasovi"><span class="pojm-cat">autor</span><div class="pojm-word">Polifonija</div><div class="pojm-def">Pojam <b>Mihaila Bahtina</b> (1929., <em>Problemi poetike Dostojevskog</em>). U Dostojevskog <em>svaki lik ima svoj nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Raskoljnikov, Sonja, Porfirij, Marmeladov, Svidrigajlov su „ravnopravni glasovi". <b>Suprotnost monologičkom romanu</b> (Tolstoj).</div></div>
      <div class="pojm" data-cat="autor" data-kw="dvojnik par likovi raskolj svidrigajlov"><span class="pojm-cat">autor</span><div class="pojm-word">Dvojnik</div><div class="pojm-def">Česta tehnika Dostojevskog — <em>dva lika koji utjelovljuju dvije strane iste ideje</em>. <b>Raskoljnikov + Svidrigajlov</b> = dvije verzije „nadčovjeka" (R. se vraća k Bogu, S. ubija se). <b>Sonja + Dunja</b> = dvije žene koje žrtvuju sebe. Dostojevski napisao roman <em>„Dvojnik"</em> (1846.) — rani primjer.</div></div>
      <div class="pojm" data-cat="autor" data-kw="ispovijed moralna istina"><span class="pojm-cat">autor</span><div class="pojm-word">Ispovijed</div><div class="pojm-def">Centralni narativni postupak Dostojevskog. Likovi se <em>ispovijedaju</em> jedni drugima: Marmeladov Raskoljnikovu, Raskoljnikov Sonji, Svidrigajlov Dunji. <b>Ispovijed je trenutak istine</b> — razotkriva pravu narav lika. <em>Suprotno pravnoj, ali izmiruje psihu</em>. Pravoslavna tradicija ispovijedi kao iscjeljenja.</div></div>
      <div class="pojm" data-cat="autor" data-kw="unutarnji monolog stream consciousness"><span class="pojm-cat">autor</span><div class="pojm-word">Unutarnji monolog</div><div class="pojm-def">Tehnika: pratimo <em>misli lika direktno</em>, bez autorova filtra. Raskoljnikov neprestano razgovara sam sa sobom — ispravlja se, sumnja, racionalizira. <b>Prethodnica stream of consciousness</b> (Joyce, Woolf) i <b>slobodnog neupravnog govora</b>. Kod Dostojevskog <em>paranoja, grižnja, intelektualna igra</em> — sve u glavi lika.</div></div>
      <div class="pojm" data-cat="autor" data-kw="roman ideja filozofski"><span class="pojm-cat">autor</span><div class="pojm-word">Roman ideja</div><div class="pojm-def">Dostojevski oblik: <em>roman u kojem se sukobljavaju velike ideje</em> (vjera vs nihilizam, moralna sloboda vs predestinacija). Likovi nisu samo karakteri — oni su <b>utjelovljenja filozofskih stajališta</b>. Raskoljnikov = nihilistička teorija. Sonja = kršćanska žrtva. Porfirij = razum. Svidrigajlov = cinizam.</div></div>
      <div class="pojm" data-cat="autor" data-kw="petraševski kruzok socijalizam osuda"><span class="pojm-cat">autor</span><div class="pojm-word">Petraševski kružok</div><div class="pojm-def">Grupa ruskih socijalista-utopijaca oko <em>Mihaila Petraševskog</em>. Dostojevski bio član. <b>1849. uhićen</b>, osuđen na smrt. <em>Pomilovan na strelištu u posljednjem trenutku</em> — to iskustvo obilježi ga za život. 4 godine Sibira (Omsk) + 4 vojne službe. Opisano u <em>Zapisima iz Mrtvog doma</em> (1861.).</div></div>
      <div class="pojm" data-cat="autor" data-kw="epilepsija miskin smerdjakov"><span class="pojm-cat">autor</span><div class="pojm-word">Epilepsija</div><div class="pojm-def">Bolest koja prati Dostojevskog cijeli život. <em>Mistična iskustva prije napada</em> opisuje kao trenutke „kozmičke svijesti". Ugrađuje bolest u likove: <b>Knez Miškin</b> (<em>Idiot</em>) i <b>Smerdjakov</b> (<em>Braća Karamazovi</em>) imaju epilepsiju. Dostojevski koristi bolest kao <em>metaforu za duhovno rastrojstvo</em>.</div></div>
      <div class="pojm" data-cat="autor" data-kw="pravoslavlje vjera krscanstvo"><span class="pojm-cat">autor</span><div class="pojm-word">Pravoslavlje (kod Dostojevskog)</div><div class="pojm-def">Dostojevski je duboki <em>pravoslavni vjernik</em>. Vjera je središnja tema njegovih romana. <b>Sonja Marmeladova</b> utjelovljuje kršćansku ljubav i žrtvu. Slavna misao: <em>„Ako Bog ne postoji, sve je dopušteno"</em> (Braća Karamazovi). Dostojevski kritizira <b>zapadni racionalizam</b> nauku uskrsnuća i patnje.</div></div>

      <!-- REALIZAM / POETIKA (15) -->
      <div class="pojm" data-cat="realizam" data-kw="realizam epoha 19 stoljece"><span class="pojm-cat">realizam</span><div class="pojm-word">Realizam</div><div class="pojm-def">Književna epoha ≈ 1830.–1895. Teži <em>objektivnom prikazu stvarnosti</em> — društva, karaktera, svakodnevnice. Odbacuje romantičku idealizaciju. Glavni oblik: <b>roman</b>. 3 struje: francuski (Balzac, Flaubert), engleski (Dickens), ruski (Dostojevski, Tolstoj, Turgenjev, Čehov).</div></div>
      <div class="pojm" data-cat="realizam" data-kw="balzac ljudska komedija francuski realizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Honoré de Balzac</div><div class="pojm-def">(1799.–1850.) Francuski utemeljitelj realizma. <em>Ljudska komedija</em> — ciklus od 90 romana koji slika cijelo francusko društvo. <b>Otac Goriot</b> (1835.) — obvezatno za hrvatsku maturu u nekim godinama. Geslo: <em>„Sve je istina"</em>. Dostojevski ga čita i prevodi.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="flaubert madame bovary le mot juste"><span class="pojm-cat">realizam</span><div class="pojm-word">Gustave Flaubert</div><div class="pojm-def">(1821.–1880.) Francuski realist. <em>Madame Bovary</em> (1857.) — bovarizam (bijeg u mašte). <em>Sentimentalno obrazovanje</em>. Stil: <b>le mot juste</b> (točna riječ). Impersonalna naracija. <b>Sudski proces</b> 1857. za nemoral — postao skandal.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="dickens david copperfield engleski realizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Charles Dickens</div><div class="pojm-def">(1812.–1870.) Engleski realist. Romani: <em>Oliver Twist</em>, <em>David Copperfield</em>, <em>Velika očekivanja</em>, <em>Mali Dorrit</em>. <b>Socijalni realizam</b> — kritika industrijskog Londona, sirotišta, dugova. Serijalno objavljivanje u časopisima. Dostojevski ga čita kao uzor.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="tolstoj rat i mir ana karenjina"><span class="pojm-cat">realizam</span><div class="pojm-word">Lav Tolstoj</div><div class="pojm-def">(1828.–1910.) Drugi veliki ruski realist uz Dostojevskog. <em>Rat i mir</em> (1869.) — epska kronika napoleonskih ratova. <em>Ana Karenjina</em> (1877.) — psihološki roman o preljubu. <b>Monologički roman</b> (suprotnost Dostojevskog polifoniji — Bahtin). Manje unutarnjeg kaosa, više povijesne panorame.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="tipski lik tip karakter"><span class="pojm-cat">realizam</span><div class="pojm-word">Tipski lik</div><div class="pojm-def">Lik koji utjelovljuje <em>socijalni ili psihološki tip</em> — ne individualac, nego <b>reprezentativan predstavnik</b>. Raskoljnikov = „suvišan čovjek", Lužin = „buržoaski oportunist", Marmeladov = „propao činovnik". Dostojevski ga nadilazi <em>individualizacijom</em> — svaki tip ima dubinsku psihologiju.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="sveznajuci pripovjedac treca osoba"><span class="pojm-cat">realizam</span><div class="pojm-word">Sveznajući pripovjedač</div><div class="pojm-def">Dominantna narativna tehnika realizma. Pripovjedač u <em>3. licu</em>, zna sve o likovima (misli, prošlost, motivacije). <b>Kod Dostojevskog se modificira</b> — sveznajući pripovjedač često se <em>udaljava</em> od lika, daje mu prostor za unutarnji monolog. Bahtin: polifonija ga razbija.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="objektivan opis detalji opisnost"><span class="pojm-cat">realizam</span><div class="pojm-word">Objektivan opis</div><div class="pojm-def">Realistička tehnika: <em>detaljan opis prostora, odjeće, ambijenta</em>, bez autorova komentara. Kod Dostojevskog opis je <b>psihološki simbol</b> — „žute tapete" Raskoljnikova stana, sennaja ploščadj Peterburga. <em>Atmosfera = karakterizacija.</em></div></div>
      <div class="pojm" data-cat="realizam" data-kw="roman forma epoha glavni oblik"><span class="pojm-cat">realizam</span><div class="pojm-word">Roman (realizam)</div><div class="pojm-def">Centralni književni oblik realizma. Proza, duža priča (obično 300+ stranica). Oblici: <em>obiteljski roman</em>, <em>psihološki roman</em>, <em>društveni roman</em>, <em>bildungsroman</em> (roman odgoja). <b>Zločin i kazna</b> = psihološki + socijalni + filozofski roman.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="bildungsroman odgoj razvoj"><span class="pojm-cat">realizam</span><div class="pojm-word">Bildungsroman</div><div class="pojm-def">Roman odgoja — prati <em>razvoj protagonista od mladosti do zrelosti</em>. Njemačka tradicija (Goethe <em>Wilhelm Meister</em>). Klasici: Dickens <em>David Copperfield</em>, Flaubert <em>Sentimentalno obrazovanje</em>. <b>Zločin i kazna je „antibildungsroman"</b> — Raskoljnikov ne sazrijeva kroz uspjehe, nego kroz zločin i iskupljenje.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="socijalni roman drustvo kritika"><span class="pojm-cat">realizam</span><div class="pojm-word">Socijalni roman</div><div class="pojm-def">Realistički oblik koji <em>kritizira društvo</em>. Prikazuje socijalnu nejednakost, bijedu, korupciju. Dickens (<em>Oliver Twist</em>), Dostojevski (<em>Zločin i kazna</em>). <b>Zločin i kazna ima socijalne dimenzije</b> — Marmeladov, Katerina, Sonja, Dunja su <em>produkt siromaštva</em>.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="naturalism zola emile darwin"><span class="pojm-cat">realizam</span><div class="pojm-word">Naturalizam</div><div class="pojm-def">Radikalni oblik realizma, kraj 19. st. <em>Émile Zola</em> (1840.–1902.) — glavni predstavnik. Lik je <b>produkt naslijeđa i miljea</b> (darvinistički utjecaj). Ciklus <em>Rougon-Macquart</em>. Dostojevski <em>nije naturalist</em> — zadržava duhovnu dimenziju. Ali dijele prikaz bijede.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="pozitivizam comte razum znanost"><span class="pojm-cat">realizam</span><div class="pojm-word">Pozitivizam</div><div class="pojm-def">Filozofska struja, <em>August Comte</em> (1830-ih). <b>Samo znanstveno provjerljivo ima vrijednost</b>. Odbacuje metafiziku, religiju. Realizam u književnosti je <em>pozitivistički pristup</em> — promatraj, opisuj, analiziraj. <b>Dostojevski je anti-pozitivist</b> — kritizira racionalni redukcionizam.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="milje okolina naturalizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Milje</div><div class="pojm-def">Francuski pojam: <em>„okolina"</em>. Lik je <b>produkt svoje sredine</b> — siromaštva, obitelji, grada. Kod Raskoljnikova: <em>Peterburg kao milje koji rađa teoriju</em>. Milje je ujedno <b>uzrok i izgovor</b> — Dostojevski pokazuje da lik ima <em>moralnu slobodu</em> unatoč okolini.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="satira ironija kritika"><span class="pojm-cat">realizam</span><div class="pojm-word">Satira (realizam)</div><div class="pojm-def">Oštra kritika društvenih pojava kroz <em>humor i ironiju</em>. Dickens satira: advokati, birokracija, sirotišta. Gogolj <em>Mrtve duše</em> — satira ruske provincije. <b>Dostojevski ima tamnu ironiju</b> — Lužin kao karikatura buržoaskog oportunizma; Porfirij se <em>smije teoriji</em> nadčovjeka.</div></div>

      <!-- RUSKI KONTEKST 1860ih (13) -->
      <div class="pojm" data-cat="rusija" data-kw="nihilizam ruski 1860 radikalci"><span class="pojm-cat">rusija</span><div class="pojm-word">Nihilizam (ruski)</div><div class="pojm-def">Filozofski stav ruske omladine 1860-ih. Od lat. <em>nihil</em> = „ništa". <b>Odbacivanje svih tradicionalnih vrijednosti</b> — crkve, države, obitelji, morala. Ikona: <em>Bazarov</em> (Turgenjev, <em>Oci i sinovi</em>, 1862.). <b>Raskoljnikovljeva teorija = nihilistička</b>. Dostojevski piše Zločin i kaznu kao odgovor.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="ukidanje kmetstva aleksandar 1861"><span class="pojm-cat">rusija</span><div class="pojm-word">Ukidanje kmetstva (1861.)</div><div class="pojm-def">Car <b>Aleksandar II.</b> oslobađa kmetove 19.2.1861. Prekretnica ruske povijesti — <em>23 milijuna seljaka slobodno</em>. Ali reforma loše izvedena — seljaci u dugu, bez zemlje. Uzrokuje socijalne tenzije. <b>Zločin i kazna (1866.) nastaje u ovom pokmetskom kaosu</b> — Raskoljnikovljevo i Sonjino siromaštvo produkt su te tranzicije.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="ubermensch nadcovjek nietzsche"><span class="pojm-cat">rusija</span><div class="pojm-word">Übermensch (nadčovjek)</div><div class="pojm-def">Njemački pojam Friedricha Nietzschea: <em>„Tako je govorio Zaratustra"</em> (1883.). Čovjek budućnosti koji <b>prelazi moralne vrijednosti</b>. <em>Ironija: Dostojevski anticipira i kritizira koncept 17 godina prije</em> Nietzschea. Raskoljnikovljeva teorija je <b>rani oblik nadčovjeka</b> — Dostojevski pokazuje zašto ne funkcionira.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="suvisan covjek pecorin onjegin"><span class="pojm-cat">rusija</span><div class="pojm-word">Suvišan čovjek</div><div class="pojm-def">Tip lika u ruskoj književnosti 19. st. — <em>talentiran, obrazovan plemić bez svrhe</em>. Puškinov <b>Onjegin</b> prvi. Slijede: Pečorin (Ljermontov), Rudin (Turgenjev), Oblomov (Gončarov), <b>Raskoljnikov</b> (Dostojevski). Karakteristike: dosada, otuđenost, cinizam. <em>Raskoljnikov je suvišan čovjek doveden do kriminala</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="turgenjev oci sinovi bazarov"><span class="pojm-cat">rusija</span><div class="pojm-word">Ivan Turgenjev</div><div class="pojm-def">(1818.–1883.) Ruski realist. <em>Oci i sinovi</em> (1862.) — roman o sukobu generacija, <b>Bazarov</b> kao prvi „nihilist" u ruskoj književnosti. <em>Lovčevi zapisi</em> — kritika kmetstva. Prevoditelj. Mostovi između ruske i zapadne kulture.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="gogolj mrtve duse peterburg pripovijesti"><span class="pojm-cat">rusija</span><div class="pojm-word">Nikolaj Gogolj</div><div class="pojm-def">(1809.–1852.) Preteča realizma. <em>Mrtve duše</em> (1842.) — satira provincije. <em>Peterburške pripovijesti</em> (<em>Nevski prospekt</em>, <em>Nos</em>, <em>Šinjel</em>). Dostojevski: <em>„Svi smo izašli iz Gogoljeva Šinjela"</em>. Gogolj utemeljuje <b>tradiciju „malog čovjeka"</b> — tip propalog činovnika (Marmeladov).</div></div>
      <div class="pojm" data-cat="rusija" data-kw="razum razumihin ime simbolika"><span class="pojm-cat">rusija</span><div class="pojm-word">Razum (ime Razumihin)</div><div class="pojm-def">Rusko <em>razum</em> = pamet, racionalnost. Razumihin kao <em>personifikacija zdravog razuma</em> nasuprot Raskoljnikovljevom <b>bolesnom intelektu</b>. Ime = program. Dostojevski često koristi <em>govoreća imena</em>: <b>Lužin</b> (od „luža" = lokva), <b>Svidrigajlov</b> (zvučna pejorativna riječ).</div></div>
      <div class="pojm" data-cat="rusija" data-kw="raskol raskoljnik rus crkvena povijest"><span class="pojm-cat">rusija</span><div class="pojm-word">Raskol (crkveni)</div><div class="pojm-def"><em>„Raskoljnik"</em> — u rus. <b>onaj koji se odvojio od pravoslavne crkve</b>. Povijesni raskol 1650-ih: <em>staroobredici</em> (Avvakum) odvajaju se od službene crkve (Nikon). Raskoljnikov <b>nije staroobredeni</b> — ime je simbol <em>odvajanja od zajednice, Boga, morala</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="kaznena katorga sibir"><span class="pojm-cat">rusija</span><div class="pojm-word">Katorga</div><div class="pojm-def">Ruski kazneni sistem — <em>prisilni rad u Sibiru</em>. Teške fizičke kazne, hladnoća, izolacija. Dostojevski je bio u <b>Omskoj katorgi</b> 1850.–1854. — opisuje u <em>Zapisima iz Mrtvog doma</em> (1861.). <b>Raskoljnikov ide u katorgu na 8 godina</b>. Sibir = prostor duhovnog iskupljenja u Epilogu.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="zuta kartica prostitucija rusija"><span class="pojm-cat">rusija</span><div class="pojm-word">Žuta kartica</div><div class="pojm-def">Registracija prostitutki u carskoj Rusiji. Žena koja prodaje tijelo mora predati osobne dokumente i dobiti <em>žutu knjižicu</em> (kod liječničkog nadzora, lokacije, etc.). <b>Sonja ima žutu karticu</b>. Fizički predmet ponižavanja. Za Dostojevskog simbol <em>društva koje pretvara žrtvu u grijeh</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="slavjanofili zapadnjaci ideologija"><span class="pojm-cat">rusija</span><div class="pojm-word">Slavjanofili / Zapadnjaci</div><div class="pojm-def">Dva intelektualna pokreta ruskog 19. st. <b>Slavjanofili</b> (Homjakov, Aksakov): Rusija ima poseban put, pravoslavlje + komuna. <b>Zapadnjaci</b> (Herzen, Belinski): Rusija mora slijediti Zapad — liberalizam, industrija. <em>Dostojevski bliži slavjanofilstvu</em>, ali kritičan prema objema stranama.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="belinski kritika vissarion realizam"><span class="pojm-cat">rusija</span><div class="pojm-word">Visarion Belinski</div><div class="pojm-def">(1811.–1848.) Najvažniji ruski književni kritičar. Otkriva Dostojevskog — hvali <em>Bijedne ljude</em> (1846.). Belinski promovira <b>realistički, socijalno angažiran pristup</b>. Autor <em>„enciklopedija ruskog života"</em> (o Onjeginu). Za Dostojevskog: <em>„dao mi je život"</em>. Umire mlad od tuberkuloze.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="mali covjek tip akakij bashmachkin"><span class="pojm-cat">rusija</span><div class="pojm-word">Mali čovjek</div><div class="pojm-def">Tip lika ruske književnosti. <em>Siromašan činovnik na dnu birokratske hijerarhije</em>. Prvi: <b>Akakij Bašmačkin</b> (Gogolj <em>Šinjel</em>, 1842.). Marmeladov je Dostojevska verzija. <b>Tema suosjećanja prema nemoćnima</b>. Dostojevski proširuje na <em>malu ženu</em> (Sonja) i <em>malog studenta</em> (Raskoljnikov).</div></div>
    </div>


    <div class="nav-row">
      <span class="nb" onclick="sw(3)">← 💬 Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill →</span>
    </div>
`;

function normalize(value) {
  return (value || '').toLowerCase()
    .replace(/č|ć/g, 'c')
    .replace(/š/g, 's')
    .replace(/ž/g, 'z')
    .replace(/đ/g, 'd')
    .trim();
}

function bindPojmovnikH07() {
  const searchInput = document.getElementById('pojm-search');
  const clearBtn = document.getElementById('pojm-search-clear');
  const filters = document.getElementById('pojm-filters');
  const grid = document.getElementById('pojm-grid');
  if (!searchInput || !filters || !grid) return;

  const filter = () => {
    const activeBtn = filters.querySelector('.pojm-filter.on');
    const category = activeBtn ? activeBtn.dataset.cat : 'all';
    const query = normalize(searchInput.value);
    let shown = 0;

    grid.querySelectorAll('.pojm').forEach((item) => {
      const itemCategory = item.dataset.cat || '';
      const keywords = item.dataset.kw || '';
      const text = normalize(item.textContent);
      const matchesCategory = category === 'all' || itemCategory === category;
      const matchesQuery = !query || text.includes(query) || normalize(keywords).includes(query);
      const visible = matchesCategory && matchesQuery;
      item.classList.toggle('hidden', !visible);
      if (visible) shown += 1;
    });

    const count = document.getElementById('pojm-count');
    if (count) {
      count.textContent = shown + ' ' + (shown === 1 ? 'pojam' : (shown >= 2 && shown <= 4 ? 'pojma' : 'pojmova')) + ' prikazano';
    }
    if (clearBtn) clearBtn.classList.toggle('on', !!query);
  };

  if (searchInput.dataset.pojmInitBound !== '1') {
    searchInput.dataset.pojmInitBound = '1';
    let debounce = 0;
    searchInput.addEventListener('input', () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(filter, 150);
    });
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        window.pojmClear?.();
        searchInput.blur();
      }
    });
  }

  filters.querySelectorAll('.pojm-filter').forEach((button) => {
    if (button.dataset.pojmInitBound === '1') return;
    button.dataset.pojmInitBound = '1';
    button.addEventListener('click', () => {
      filters.querySelectorAll('.pojm-filter').forEach((other) => other.classList.remove('on'));
      button.classList.add('on');
      filter();
    });
  });

  window.pojmClear = () => {
    searchInput.value = '';
    filter();
    searchInput.focus();
  };
  window.initPojmovnikH07 = bindPojmovnikH07;
  filter();
}

export default function H07PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH07 = bindPojmovnikH07;
    }
    bindPojmovnikH07();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnikH07, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
