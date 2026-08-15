'use strict';
/* ═══════════════════════════════════════
   i18n — MULTILINGUAL SYSTEM (23 LANGUAGES)
═══════════════════════════════════════ */
const I18N={"nav_home":{"it":"Home","en":"Home","fr":"Accueil","de":"Startseite","pt":"Início","zh":"首页","ja":"ホーム","ru":"Главная","ar":"الرئيسية","he":"בית","ro":"Acasă","sq":"Kryefaqja","fil":"Home","th":"หน้าแรก","nl":"Home","no":"Hjem","ga":"Baile","ko":"홈","cs":"Domů","lv":"Sākums","uk":"Головна","pl":"Strona główna","es":"Inicio"},"nav_tour":{"it":"Tour","en":"Tours","fr":"Visites","de":"Touren","pt":"Passeios","zh":"旅游","ja":"ツアー","ru":"Туры","ar":"الجولات","he":"סיורים","ro":"Tururi","sq":"Turne","fil":"Tour","th":"ทัวร์","nl":"Tours","no":"Turer","ga":"Turais","ko":"투어","cs":"Prohlídky","lv":"Tūres","uk":"Тури","pl":"Wycieczki","es":"Tours"},"nav_story":{"it":"Esplora","en":"Explore","fr":"Explorer","de":"Entdecken","pt":"Explorar","zh":"探索","ja":"探索","ru":"Исследовать","ar":"استكشف","he":"גלו","ro":"Explorează","sq":"Eksploro","fil":"I-explore","th":"สำรวจ","nl":"Ontdek","no":"Utforsk","ga":"Féach","ko":"탐색","cs":"Prozkoumat","lv":"Izpētīt","uk":"Досліджуй","pl":"Odkrywaj","es":"Explorar"},"nav_community":{"it":"Community","en":"Community","fr":"Communauté","de":"Gemeinschaft","pt":"Comunidade","zh":"社区","ja":"コミュニティ","ru":"Сообщество","ar":"المجتمع","he":"קהילה","ro":"Comunitate","sq":"Komuniteti","fil":"Komunidad","th":"ชุมชน","nl":"Community","no":"Fellesskap","ga":"Pobal","ko":"커뮤니티","cs":"Komunita","lv":"Kopiena","uk":"Спільнота","pl":"Społeczność","es":"Comunidad"},"nav_book":{"it":"Prenota","en":"Book Now","fr":"Réserver","de":"Buchen","pt":"Reservar","zh":"预订","ja":"予約","ru":"Забронировать","ar":"احجز","he":"הזמן","ro":"Rezervă","sq":"Rezervo","fil":"Book","th":"จอง","nl":"Boek","no":"Bestill","ga":"Cuir in Áirithe","ko":"예약","cs":"Rezervovat","lv":"Rezervēt","uk":"Забронювати","pl":"Zarezerwuj","es":"Reservar"},"hero_ey":{"it":"Tour Privati · Golf Cart Alba · Roma","en":"Private Tours · Golf Cart Alba · Rome","fr":"Visites Privées · Golf Cart Alba · Rome","de":"Private Touren · Golf Cart Alba · Rom","pt":"Passeios Privados · Golf Cart Alba · Roma","zh":"私人旅游 · 高尔夫球车 · 罗马","ja":"プライベートツアー · ゴルフカート · ローマ","ru":"Частные туры · Гольф-кар · Рим","ar":"جولات خاصة · عربة جولف · روما","he":"סיורים פרטיים · רומא","ro":"Tururi Private · Golf Cart · Roma","sq":"Turne Private · Golf Cart · Romë","fil":"Private Tours · Golf Cart · Roma","th":"ทัวร์ส่วนตัว · กอล์ฟคาร์ท · โรม","nl":"Privé Tours · Golf Cart · Rome","no":"Private Turer · Golfbil · Roma","ga":"Turais Príobháideacha · An Róimh","ko":"프라이빗 투어 · 로마","cs":"Soukromé prohlídky · Řím","lv":"Privātās tūres · Roma","uk":"Приватні тури · Рим","pl":"Prywatne wycieczki · Rzym","es":"Tours Privados · Roma"},"hero_l1":{"it":"La Città","en":"The Eternal","fr":"La Cité","de":"Die Ewige","pt":"A Cidade","zh":"永恒之城","ja":"永遠の都","ru":"Вечный","ar":"المدينة","he":"העיר","ro":"Orașul","sq":"Qyteti","fil":"Ang Lungsod","th":"เมือง","nl":"De Eeuwige","no":"Den Evige","ga":"An Chathair","ko":"영원한","cs":"Věčné","lv":"Mūžīgā","uk":"Вічне","pl":"Wieczne","es":"La Ciudad"},"hero_l2":{"it":"Eterna","en":"City","fr":"Éternelle","de":"Stadt","pt":"Eterna","zh":"属于你","ja":"ローマ","ru":"Город","ar":"الخالدة","he":"הנצחית","ro":"Etern","sq":"i Përjetshëm","fil":"na Walang","th":"นิรันดร์","nl":"Stad","no":"Byen","ga":"Shíoraí","ko":"도시","cs":"Město","lv":"Pilsēta","uk":"Місто","pl":"Miasto","es":"Eterna"},"hero_l3":{"it":"è tua","en":"is yours","fr":"est à vous","de":"gehört dir","pt":"é sua","zh":"是你的","ja":"はあなたのもの","ru":"— твой","ar":"لك","he":"שלך","ro":"e al tău","sq":"është i juaji","fil":"Hanggang","th":"เป็นของคุณ","nl":"is van jou","no":"er din","ga":"is leatsa","ko":"로마","cs":"je tvoje","lv":"ir tava","uk":"— твоє","pl":"jest twoje","es":"es tuya"},"hero_sub":{"it":"Tour privati esclusivi in golf cart. Nessuna folla, nessun gruppo. Solo tu e Roma, vissuta come non l'hai mai fatto.","en":"Exclusive private tours by golf cart. No crowds, no groups. Just you and Rome, experienced like never before.","fr":"Visites privées exclusives en voiturette. Pas de foule, pas de groupe. Juste vous et Rome.","de":"Exklusive Privattouren im Golfwagen. Keine Menschenmassen, keine Gruppen. Nur du und Rom.","pt":"Passeios privados exclusivos em carrinho de golfe. Sem multidões. Só você e Roma.","zh":"独家私人高尔夫球车之旅。没有人群，只有你和罗马。","ja":"ゴルフカートによるプライベートツアー。混雑なし。あなたとローマだけ。","ru":"Эксклюзивные частные туры на гольф-каре. Без толп. Только вы и Рим.","ar":"جولات خاصة حصرية. بدون حشود. أنت وروما فقط.","he":"סיורים פרטיים בלעדיים. בלי המונים. רק אתם ורומא.","ro":"Tururi private exclusive în golf cart. Fără mulțimi. Doar tu și Roma.","sq":"Turne private ekskluzive me golf cart. Pa turma. Vetëm ti dhe Roma.","fil":"Eksklusibong pribadong tour sa golf cart. Walang mga tao. Ikaw at Roma.","th":"ทัวร์ส่วนตัวสุดพิเศษ ไม่มีฝูงชน มีแค่คุณกับโรม","nl":"Exclusieve privétours per golfkar. Geen drukte. Alleen jij en Rome.","no":"Eksklusive private turer med golfbil. Ingen folkemengder. Bare deg og Roma.","ga":"Turais phríobháideacha eisiach. Gan slua. Tusa agus an Róimh amháin.","ko":"골프카트 독점 프라이빗 투어. 군중 없이. 오직 당신과 로마.","cs":"Exkluzivní soukromé prohlídky. Žádné davy. Jen vy a Řím.","lv":"Ekskluzīvas privātās tūres. Bez pūļiem. Tikai jūs un Roma.","uk":"Ексклюзивні приватні тури. Без натовпів. Тільки ви і Рим.","pl":"Ekskluzywne prywatne wycieczki. Bez tłumów. Tylko ty i Rzym.","es":"Tours privados exclusivos en golf cart. Sin multitudes. Solo tú y Roma."},"hero_cta":{"it":"Scegli il tuo Tour","en":"Choose your Tour","fr":"Choisissez votre Visite","de":"Wähle deine Tour","pt":"Escolha seu Passeio","zh":"选择旅游","ja":"ツアーを選ぶ","ru":"Выберите тур","ar":"اختر جولتك","he":"בחרו סיור","ro":"Alege turul","sq":"Zgjidh turnin","fil":"Pumili ng Tour","th":"เลือกทัวร์","nl":"Kies je Tour","no":"Velg din Tur","ga":"Roghnaigh do Thuras","ko":"투어 선택","cs":"Vyberte prohlídku","lv":"Izvēlieties tūri","uk":"Обрати тур","pl":"Wybierz wycieczkę","es":"Elige tu Tour"},"hero_explore":{"it":"Esplora","en":"Explore","fr":"Explorer","de":"Entdecken","pt":"Explorar","zh":"探索","ja":"探索","ru":"Исследовать","ar":"استكشف","he":"גלו","ro":"Explorează","sq":"Eksploro","fil":"I-explore","th":"สำรวจ","nl":"Ontdek","no":"Utforsk","ga":"Féach","ko":"탐색","cs":"Prozkoumat","lv":"Izpētīt","uk":"Досліджуй","pl":"Odkrywaj","es":"Explorar"},"hero_s1":{"it":"Privato","en":"Private","fr":"Privé","de":"Privat","pt":"Privado","zh":"私人","ja":"プライベート","ru":"Частный","ar":"خاص","he":"פרטי","ro":"Privat","sq":"Privat","fil":"Pribado","th":"ส่วนตัว","nl":"Privé","no":"Privat","ga":"Príobháideach","ko":"프라이빗","cs":"Soukromé","lv":"Privāts","uk":"Приватний","pl":"Prywatne","es":"Privado"},"hero_s2":{"it":"Rating","en":"Rating","fr":"Note","de":"Bewertung","pt":"Avaliação","zh":"评分","ja":"評価","ru":"Рейтинг","ar":"تقييم","he":"דירוג","ro":"Rating","sq":"Vlerësim","fil":"Rating","th":"คะแนน","nl":"Beoordeling","no":"Vurdering","ga":"Rátáil","ko":"평점","cs":"Hodnocení","lv":"Vērtējums","uk":"Рейтинг","pl":"Ocena","es":"Valoración"},"hero_s3":{"it":"Turisti in Fila","en":"Tourists in Line","fr":"Touristes en File","de":"Touristen in Schlange","pt":"Turistas na Fila","zh":"排队游客","ja":"列待ち","ru":"В очереди","ar":"في الطابور","he":"בתור","ro":"La Coadă","sq":"Në Radhë","fil":"Sa Pila","th":"ในคิว","nl":"In de Rij","no":"I Kø","ga":"Sa Scuaine","ko":"줄서기","cs":"Ve Frontě","lv":"Rindā","uk":"У черзі","pl":"W kolejce","es":"En Fila"},"t_label":{"it":"Le esperienze","en":"The experiences","fr":"Les expériences","de":"Die Erlebnisse","pt":"As experiências","zh":"体验","ja":"体験","ru":"Впечатления","ar":"التجارب","he":"החוויות","ro":"Experiențele","sq":"Përvojat","fil":"Karanasan","th":"ประสบการณ์","nl":"De ervaringen","no":"Opplevelsene","ga":"Na hEispéiris","ko":"체험","cs":"Zážitky","lv":"Pieredzes","uk":"Враження","pl":"Doświadczenia","es":"Las experiencias"},"t_title":{"it":"Scegli il tuo tour","en":"Choose your tour","fr":"Choisissez votre visite","de":"Wähle deine Tour","pt":"Escolha seu passeio","zh":"选择旅游","ja":"ツアーを選ぶ","ru":"Выберите тур","ar":"اختر جولتك","he":"בחרו סיור","ro":"Alege turul","sq":"Zgjidh turnin","fil":"Pumili ng tour","th":"เลือกทัวร์","nl":"Kies je tour","no":"Velg din tur","ga":"Roghnaigh do thuras","ko":"투어 선택","cs":"Vyberte prohlídku","lv":"Izvēlieties tūri","uk":"Обрати тур","pl":"Wybierz wycieczkę","es":"Elige tu tour"},"t_title2":{"it":"privato","en":"private","fr":"privée","de":"private","pt":"privado","zh":"私人","ja":"プライベート","ru":"частный","ar":"خاص","he":"פרטי","ro":"privat","sq":"privat","fil":"pribado","th":"ส่วนตัว","nl":"privé","no":"privat","ga":"príobháideach","ko":"프라이빗","cs":"soukromou","lv":"privātu","uk":"приватний","pl":"prywatną","es":"privado"},"t_hint":{"it":"Clicca su un tour per prenotare — immediato, senza attese.","en":"Click a tour to book — instant, no waiting.","fr":"Cliquez pour réserver — instantané.","de":"Klicke zum Buchen — sofort.","pt":"Clique para reservar — instantâneo.","zh":"点击预订 — 即时。","ja":"クリックして予約 — 即時。","ru":"Нажмите для бронирования — мгновенно.","ar":"انقر للحجز — فوري.","he":"לחצו להזמנה — מיידי.","ro":"Click pentru a rezerva — instant.","sq":"Kliko për të rezervuar — menjëherë.","fil":"I-click para mag-book — instant.","th":"คลิกจอง — ทันที","nl":"Klik om te boeken — direct.","no":"Klikk for å bestille — umiddelbart.","ga":"Cliceáil le háirithint — láithreach.","ko":"클릭하여 예약 — 즉시.","cs":"Klikněte pro rezervaci — okamžitě.","lv":"Noklikšķiniet, lai rezervētu — uzreiz.","uk":"Натисніть для бронювання — миттєво.","pl":"Kliknij, aby zarezerwować — natychmiast.","es":"Haz clic para reservar — instantáneo."},"t_custom":{"it":"Personalizzabile","en":"Customizable","fr":"Personnalisable","de":"Anpassbar","pt":"Personalizável","zh":"可定制","ja":"カスタマイズ","ru":"Настраиваемый","ar":"قابل للتخصيص","he":"מותאם","ro":"Personalizabil","sq":"I personalizueshëm","fil":"Nako-customize","th":"ปรับแต่งได้","nl":"Aanpasbaar","no":"Tilpassbar","ga":"Inoiriúnaithe","ko":"맞춤형","cs":"Přizpůsobitelné","lv":"Pielāgojams","uk":"Налаштовуваний","pl":"Konfigurowalny","es":"Personalizable"},"t_custom_n":{"it":"Tour Su Misura","en":"Custom Tour","fr":"Visite Sur Mesure","de":"Maßgeschneiderte Tour","pt":"Passeio Personalizado","zh":"定制旅游","ja":"オーダーメイドツアー","ru":"Индивидуальный тур","ar":"جولة مخصصة","he":"סיור מותאם","ro":"Tur Personalizat","sq":"Tur i Personalizuar","fil":"Custom Tour","th":"ทัวร์ตามสั่ง","nl":"Tour op Maat","no":"Skreddersydd Tur","ga":"Turas Saincheaptha","ko":"맞춤 투어","cs":"Prohlídka na Míru","lv":"Pielāgota Tūre","uk":"Індивідуальний тур","pl":"Wycieczka na Miarę","es":"Tour a Medida"},"t_custom_cta":{"it":"Componi il tuo Tour →","en":"Build your Tour →","fr":"Composez votre Visite →","de":"Stelle deine Tour zusammen →","pt":"Monte seu Passeio →","zh":"创建旅游 →","ja":"ツアーを作成 →","ru":"Составьте тур →","ar":"أنشئ جولتك →","he":"בנו סיור →","ro":"Creează turul →","sq":"Krijo turnin →","fil":"Buuin Tour →","th":"สร้างทัวร์ →","nl":"Stel Tour samen →","no":"Bygg din Tur →","ga":"Cruthaigh Turas →","ko":"투어 구성 →","cs":"Sestavte prohlídku →","lv":"Izveidojiet tūri →","uk":"Складіть тур →","pl":"Stwórz wycieczkę →","es":"Compón tu Tour →"},"t_more":{"it":"Scopri di più →","en":"Discover more →","fr":"En savoir plus →","de":"Mehr erfahren →","pt":"Saiba mais →","zh":"了解更多 →","ja":"詳細 →","ru":"Узнать больше →","ar":"المزيد →","he":"עוד →","ro":"Mai mult →","sq":"Më shumë →","fil":"Alamin pa →","th":"เพิ่มเติม →","nl":"Meer →","no":"Mer →","ga":"Tuilleadh →","ko":"더보기 →","cs":"Více →","lv":"Vairāk →","uk":"Більше →","pl":"Więcej →","es":"Más →"},"s_label":{"it":"Il nostro manifesto","en":"Our manifesto","fr":"Notre manifeste","de":"Unser Manifest","pt":"Nosso manifesto","zh":"我们的宣言","ja":"マニフェスト","ru":"Наш манифест","ar":"بياننا","he":"המניפסט","ro":"Manifestul","sq":"Manifesti","fil":"Manifesto","th":"แถลงการณ์","nl":"Ons manifest","no":"Vårt manifest","ga":"Ár Mainiféist","ko":"선언","cs":"Manifest","lv":"Manifests","uk":"Маніфест","pl":"Manifest","es":"Manifiesto"},"s_title":{"it":"Roma non si visita —<br>si <em>vive</em>","en":"Rome is not visited —<br>it's <em>lived</em>","fr":"Rome ne se visite pas —<br>elle se <em>vit</em>","de":"Rom besucht man nicht —<br>man <em>lebt</em> es","pt":"Roma não se visita —<br>se <em>vive</em>","zh":"罗马不只是参观 —<br>而是<em>体验</em>","ja":"ローマは訪れない —<br><em>生きる</em>","ru":"Рим не посещают —<br>его <em>проживают</em>","ar":"روما لا تُزار —<br>بل <em>تُعاش</em>","he":"רומא לא מבקרים —<br>אותה <em>חיים</em>","ro":"Roma nu se vizitează —<br>se <em>trăiește</em>","sq":"Roma nuk vizitohet —<br><em>jetohet</em>","fil":"Hindi bisita —<br><em>nararanasan</em>","th":"โรมไม่ใช่แค่เที่ยว —<br>ต้อง<em>สัมผัส</em>","nl":"Rome bezoek je niet —<br>je <em>beleeft</em>","no":"Roma besøker du ikke —<br>du <em>lever</em>","ga":"Ní thugtar cuairt —<br><em>maireann</em> tú","ko":"방문이 아닌 —<br><em>삶</em>","cs":"Řím se nenavštěvuje —<br><em>žije</em> se","lv":"Romu neapmeklē —<br>to <em>izdzīvo</em>","uk":"Рим не відвідують —<br>його <em>проживають</em>","pl":"Rzymu się nie odwiedza —<br>Rzym się <em>przeżywa</em>","es":"Roma no se visita —<br>se <em>vive</em>"},"s_p1":{"it":"Siamo nati dall'incontro tra l'amore profondo per Roma e la certezza che esistesse un modo più autentico di viverla. I nostri golf cart Alba raggiungono vicoli silenziosi che i bus non vedranno mai.","en":"We were born from a deep love for Rome and the certainty that a more authentic way to experience it existed. Our Alba golf carts reach silent alleys that buses will never see.","fr":"Nous sommes nés d'un amour profond pour Rome et de la certitude qu'il existait une façon plus authentique de la vivre.","de":"Wir sind aus einer tiefen Liebe zu Rom entstanden und der Gewissheit, dass es einen authentischeren Weg gibt, es zu erleben.","pt":"Nascemos do amor profundo por Roma e da certeza de que existia uma forma mais autêntica de vivê-la.","zh":"我们源于对罗马的深沉热爱和更真实体验的信念。","ja":"ローマへの深い愛と本物の体験への確信から生まれました。","ru":"Мы родились из глубокой любви к Риму и уверенности в более подлинном способе его познать.","ar":"ولدنا من حب عميق لروما ويقين بطريقة أكثر أصالة لعيشها.","he":"נולדנו מאהבה עמוקה לרומא ומביטחון שיש דרך אותנטית יותר.","ro":"Ne-am născut din dragostea pentru Roma și certitudinea că există un mod mai autentic.","sq":"Lindëm nga dashuria për Romën dhe siguria për një mënyrë më autentike.","fil":"Ipinanganak kami mula sa malalim na pagmamahal sa Roma.","th":"เราเกิดจากความรักที่มีต่อโรมและความเชื่อมั่นในประสบการณ์ที่แท้จริง","nl":"Geboren uit diepe liefde voor Rome en de overtuiging dat er een authentiekere manier is.","no":"Født fra en dyp kjærlighet til Roma og overbevisningen om en mer autentisk opplevelse.","ga":"Rugadh muid as grá domhain don Róimh agus cinnteas go raibh bealach níos fíre ann.","ko":"로마에 대한 깊은 사랑과 더 진정한 경험에 대한 확신에서 태어났습니다.","cs":"Zrodili jsme se z hluboké lásky k Římu a jistoty autentičtějšího zážitku.","lv":"Piedzimām no dziļas mīlestības pret Romu un pārliecības par autentiskāku pieredzi.","uk":"Народились з глибокої любові до Риму та впевненості в більш автентичному досвіді.","pl":"Zrodziliśmy się z głębokiej miłości do Rzymu i przekonania o bardziej autentycznym przeżyciu.","es":"Nacimos del amor profundo por Roma y la certeza de que existía una forma más auténtica de vivirla."},"s_p2":{"it":"Ogni tour è un atto di cura verso i nostri ospiti. Tutto è pensato, ogni dettaglio è scelto.","en":"Every tour is an act of care for our guests. Everything is planned, every detail chosen.","fr":"Chaque visite est un acte de soin. Tout est pensé, chaque détail choisi.","de":"Jede Tour ist ein Akt der Fürsorge. Alles ist durchdacht.","pt":"Cada passeio é um ato de cuidado. Tudo é pensado.","zh":"每次旅行都是对客人的关怀。","ja":"すべてのツアーはゲストへの配慮です。","ru":"Каждый тур — акт заботы. Всё продумано.","ar":"كل جولة عناية بضيوفنا. كل شيء مدروس.","he":"כל סיור הוא דאגה לאורחים. הכל מתוכנן.","ro":"Fiecare tur e un act de grijă. Totul e gândit.","sq":"Çdo tur është kujdes. Gjithçka e menduar.","fil":"Bawat tour ay pangangalaga.","th":"ทุกทัวร์คือการดูแล ทุกรายละเอียดถูกเลือก","nl":"Elke tour is zorg voor onze gasten.","no":"Hver tur er omsorg for våre gjester.","ga":"Is gníomh cúraim é gach turas.","ko":"모든 투어는 배려의 행위입니다.","cs":"Každá prohlídka je aktem péče.","lv":"Katra tūre ir rūpju akts.","uk":"Кожен тур — акт турботи.","pl":"Każda wycieczka to akt troski.","es":"Cada tour es un acto de cuidado."},"s_why":{"it":"Perché Aura","en":"Why Aura","fr":"Pourquoi Aura","de":"Warum Aura","pt":"Por que Aura","zh":"为什么Aura","ja":"なぜAura","ru":"Почему Aura","ar":"لماذا أورا","he":"למה Aura","ro":"De ce Aura","sq":"Pse Aura","fil":"Bakit Aura","th":"ทำไม Aura","nl":"Waarom Aura","no":"Hvorfor Aura","ga":"Cén fáth Aura","ko":"왜 Aura","cs":"Proč Aura","lv":"Kāpēc Aura","uk":"Чому Aura","pl":"Dlaczego Aura","es":"Por qué Aura"},"s_why_t":{"it":"Non sei un turista.<br>Sei il nostro <em>ospite</em>","en":"You're not a tourist.<br>You're our <em>guest</em>","fr":"Vous n'êtes pas touriste.<br>Vous êtes notre <em>invité</em>","de":"Du bist kein Tourist.<br>Du bist unser <em>Gast</em>","pt":"Você não é turista.<br>É nosso <em>convidado</em>","zh":"你不是游客。<br>你是<em>贵宾</em>","ja":"観光客ではない。<br><em>ゲスト</em>です","ru":"Вы не турист.<br>Вы наш <em>гость</em>","ar":"لست سائحاً.<br>أنت <em>ضيفنا</em>","he":"לא תיירים.<br><em>אורחים</em>","ro":"Nu ești turist.<br>Ești <em>oaspete</em>","sq":"Nuk je turist.<br>Je <em>mysafir</em>","fil":"Hindi turista.<br><em>Bisita</em> ka","th":"ไม่ใช่นักท่องเที่ยว<br>คุณคือ<em>แขก</em>","nl":"Geen toerist.<br>Onze <em>gast</em>","no":"Ikke turist.<br>Vår <em>gjest</em>","ga":"Ní turasóir.<br>Is <em>aoi</em> tú","ko":"관광객이 아닌<br><em>손님</em>","cs":"Nejste turista.<br>Jste <em>host</em>","lv":"Tu neesi tūrists.<br>Tu esi <em>viesis</em>","uk":"Ви не турист.<br>Ви <em>гість</em>","pl":"Nie jesteś turystą.<br>Jesteś <em>gościem</em>","es":"No eres turista.<br>Eres <em>invitado</em>"},"s_rev_l":{"it":"Voci dai nostri ospiti","en":"Voices from our guests","fr":"Voix de nos clients","de":"Stimmen unserer Gäste","pt":"Vozes dos hóspedes","zh":"客人的声音","ja":"ゲストの声","ru":"Отзывы гостей","ar":"أصوات ضيوفنا","he":"קולות אורחים","ro":"Vocile oaspeților","sq":"Zërat e mysafirëve","fil":"Mga boses","th":"เสียงจากแขก","nl":"Stemmen van gasten","no":"Stemmer fra gjester","ga":"Guthanna aíonna","ko":"게스트 목소리","cs":"Hlasy hostů","lv":"Viesu balsis","uk":"Голоси гостей","pl":"Głosy gości","es":"Voces de huéspedes"},"s_rev_t":{"it":"Esperienze che <em>restano</em>","en":"Experiences that <em>last</em>","fr":"Expériences qui <em>restent</em>","de":"Erlebnisse die <em>bleiben</em>","pt":"Experiências que <em>ficam</em>","zh":"难忘<em>体验</em>","ja":"<em>記憶に残る</em>体験","ru":"Впечатления, которые <em>остаются</em>","ar":"تجارب <em>لا تُنسى</em>","he":"חוויות ש<em>נשארות</em>","ro":"Experiențe care <em>rămân</em>","sq":"Përvoja që <em>mbeten</em>","fil":"Karanasan na <em>nananatili</em>","th":"ประสบการณ์ที่<em>จดจำ</em>","nl":"Ervaringen die <em>bijblijven</em>","no":"Opplevelser som <em>varer</em>","ga":"Eispéiris a <em>mhaireann</em>","ko":"<em>남는</em> 경험","cs":"Zážitky, které <em>zůstávají</em>","lv":"Pieredzes, kas <em>paliek</em>","uk":"Враження, що <em>залишаються</em>","pl":"Doświadczenia, które <em>zostają</em>","es":"Experiencias que <em>perduran</em>"},"s_rev_v":{"it":"Media verificata","en":"Verified average","fr":"Moyenne vérifiée","de":"Verifiziert","pt":"Média verificada","zh":"已验证","ja":"認証済み","ru":"Проверено","ar":"موثق","he":"מאומת","ro":"Verificată","sq":"Verifikuar","fil":"Na-verify","th":"ยืนยัน","nl":"Geverifieerd","no":"Verifisert","ga":"Deimhnithe","ko":"인증됨","cs":"Ověřeno","lv":"Verificēts","uk":"Перевірено","pl":"Zweryfikowana","es":"Verificado"},"s_book":{"it":"Prenota il tuo Tour","en":"Book your Tour","fr":"Réservez votre Visite","de":"Buche deine Tour","pt":"Reserve seu Passeio","zh":"预订旅游","ja":"ツアー予約","ru":"Забронируйте тур","ar":"احجز جولتك","he":"הזמינו סיור","ro":"Rezervă turul","sq":"Rezervo turnin","fil":"Mag-book","th":"จองทัวร์","nl":"Boek je Tour","no":"Bestill Tur","ga":"Cuir in Áirithe","ko":"투어 예약","cs":"Zarezervujte","lv":"Rezervēt","uk":"Забронюйте","pl":"Zarezerwuj","es":"Reserva Tour"},"c_label":{"it":"Partnership & Community","en":"Partnership & Community","fr":"Partenariat & Communauté","de":"Partnerschaft & Gemeinschaft","pt":"Parceria & Comunidade","zh":"合作与社区","ja":"パートナーシップ","ru":"Партнёрство","ar":"الشراكة","he":"שותפות","ro":"Parteneriat","sq":"Partneritet","fil":"Partnership","th":"พันธมิตร","nl":"Partnerschap","no":"Partnerskap","ga":"Comhpháirtíocht","ko":"파트너십","cs":"Partnerství","lv":"Partnerība","uk":"Партнерство","pl":"Partnerstwo","es":"Asociación"},"c_title":{"it":"Entra nel mondo <em>Aura</em>","en":"Enter the world of <em>Aura</em>","fr":"Entrez dans le monde d'<em>Aura</em>","de":"Tritt ein in <em>Aura</em>","pt":"Entre no mundo <em>Aura</em>","zh":"进入<em>Aura</em>世界","ja":"<em>Aura</em>の世界へ","ru":"Войдите в <em>Aura</em>","ar":"ادخل عالم <em>أورا</em>","he":"לעולם <em>Aura</em>","ro":"Lumea <em>Aura</em>","sq":"Botën <em>Aura</em>","fil":"Mundo ng <em>Aura</em>","th":"โลก <em>Aura</em>","nl":"Wereld van <em>Aura</em>","no":"<em>Aura</em>-verdenen","ga":"Domhan <em>Aura</em>","ko":"<em>Aura</em> 세계","cs":"Svět <em>Aura</em>","lv":"<em>Aura</em> pasaulē","uk":"Світ <em>Aura</em>","pl":"Świat <em>Aura</em>","es":"Mundo <em>Aura</em>"},"c_body":{"it":"Hotel di lusso, agenzie, concierge: porta i tuoi ospiti nell'esperienza più autentica di Roma.","en":"Luxury hotels, agencies, concierge: bring your guests to Rome's most authentic experience.","fr":"Hôtels de luxe, agences : offrez l'expérience la plus authentique de Rome.","de":"Luxushotels, Agenturen: das authentischste Rom-Erlebnis.","pt":"Hotéis de luxo, agências: a experiência mais autêntica de Roma.","zh":"豪华酒店、旅行社：罗马最真实的体验。","ja":"高級ホテル、エージェンシー：最も本物のローマ体験を。","ru":"Отели, агентства: подлинный опыт Рима.","ar":"فنادق فاخرة، وكالات: التجربة الأكثر أصالة.","he":"מלונות יוקרה, סוכנויות: החוויה האותנטית ביותר.","ro":"Hoteluri, agenții: experiența cea mai autentică.","sq":"Hotele, agjenci: përvoja më autentike.","fil":"Luxury hotel: pinaka-authentic na karanasan.","th":"โรงแรมหรู เอเจนซี่: ประสบการณ์แท้จริง","nl":"Luxe hotels: meest authentieke ervaring.","no":"Luksushoteller: mest autentiske opplevelse.","ga":"Óstáin galánta: eispéireas is fíre.","ko":"럭셔리 호텔: 가장 진정한 경험.","cs":"Luxusní hotely: nejautentičtější zážitek.","lv":"Luksusa viesnīcas: autentiskākā pieredze.","uk":"Розкішні готелі: найавтентичніший досвід.","pl":"Luksusowe hotele: najbardziej autentyczne doświadczenie.","es":"Hoteles de lujo: la experiencia más auténtica."},"c_contact":{"it":"Contattaci","en":"Contact us","fr":"Contactez-nous","de":"Kontakt","pt":"Contate-nos","zh":"联系我们","ja":"お問い合わせ","ru":"Контакты","ar":"اتصل بنا","he":"צרו קשר","ro":"Contact","sq":"Na kontaktoni","fil":"Makipag-ugnayan","th":"ติดต่อ","nl":"Contact","no":"Kontakt","ga":"Teagmháil","ko":"문의","cs":"Kontakt","lv":"Kontakti","uk":"Контакти","pl":"Kontakt","es":"Contacto"},"c_faq":{"it":"Domande","en":"Questions","fr":"Questions","de":"Fragen","pt":"Perguntas","zh":"问题","ja":"質問","ru":"Вопросы","ar":"أسئلة","he":"שאלות","ro":"Întrebări","sq":"Pyetje","fil":"Tanong","th":"คำถาม","nl":"Vragen","no":"Spørsmål","ga":"Ceisteanna","ko":"질문","cs":"Otázky","lv":"Jautājumi","uk":"Питання","pl":"Pytania","es":"Preguntas"},"c_faq_t":{"it":"Tutto quello che<br>vuoi <em>sapere</em>","en":"Everything you<br>want to <em>know</em>","fr":"Tout ce que<br>vous voulez <em>savoir</em>","de":"Alles was du<br><em>wissen</em> willst","pt":"Tudo que<br>quer <em>saber</em>","zh":"你想<em>知道</em>的","ja":"知りたい<em>すべて</em>","ru":"Всё, что хотите <em>знать</em>","ar":"كل ما تريد <em>معرفته</em>","he":"כל מה שרציתם <em>לדעת</em>","ro":"Tot ce vrei<br>să <em>știi</em>","sq":"Gjithçka që<br>dëshironi <em>dini</em>","fil":"Lahat gusto<br>mong <em>malaman</em>","th":"ทุกสิ่งที่<br>อยาก<em>รู้</em>","nl":"Alles wat je<br>wilt <em>weten</em>","no":"Alt du<br>vil <em>vite</em>","ga":"Gach rud ba mhaith<br>leat <em>fháil amach</em>","ko":"알고 싶은<br><em>모든 것</em>","cs":"Vše, co chcete<br><em>vědět</em>","lv":"Viss, ko<br>vēlaties <em>zināt</em>","uk":"Все, що хочете<br><em>знати</em>","pl":"Wszystko, co<br>chcesz <em>wiedzieć</em>","es":"Todo lo que<br>quieres <em>saber</em>"},"c_cta_pre":{"it":"La tua Roma ti aspetta","en":"Your Rome awaits","fr":"Votre Rome vous attend","de":"Dein Rom erwartet dich","pt":"Sua Roma espera","zh":"你的罗马在等你","ja":"ローマが待っている","ru":"Ваш Рим ждёт","ar":"روما تنتظرك","he":"רומא מחכה","ro":"Roma te așteaptă","sq":"Roma ju pret","fil":"Naghihintay ang Roma","th":"โรมรอคุณ","nl":"Jouw Rome wacht","no":"Ditt Roma venter","ga":"Tá an Róimh ag fanacht","ko":"로마가 기다립니다","cs":"Řím čeká","lv":"Roma gaida","uk":"Рим чекає","pl":"Rzym czeka","es":"Tu Roma espera"},"c_cta_t":{"it":"Vivi la Città Eterna <em>come nessun altro</em>","en":"Experience the Eternal City <em>like no other</em>","fr":"Vivez la Ville Éternelle <em>comme personne</em>","de":"Erlebe die Ewige Stadt <em>wie kein anderer</em>","pt":"Viva a Cidade Eterna <em>como ninguém</em>","zh":"体验永恒之城","ja":"永遠の都を<em>体験</em>","ru":"Познайте Вечный Город","ar":"عش المدينة الخالدة","he":"חוו את העיר הנצחית","ro":"Trăiește Orașul Etern","sq":"Jeto Qytetin e Përjetshëm","fil":"Maranasan ang Eternal City","th":"สัมผัสนครนิรันดร์","nl":"Beleef de Eeuwige Stad","no":"Opplev den Evige Byen","ga":"Bí an Chathair Shíoraí","ko":"영원한 도시를 경험하세요","cs":"Poznejte Věčné Město","lv":"Izdzīvojiet Mūžīgo Pilsētu","uk":"Відчуйте Вічне Місто","pl":"Przeżyj Wieczne Miasto","es":"Vive la Ciudad Eterna"},"c_cta_b":{"it":"Prenota il Tuo Tour","en":"Book Your Tour","fr":"Réservez","de":"Buche Tour","pt":"Reserve","zh":"预订","ja":"予約","ru":"Забронировать","ar":"احجز","he":"הזמינו","ro":"Rezervă","sq":"Rezervo","fil":"Mag-book","th":"จอง","nl":"Boek","no":"Bestill","ga":"Cuir in Áirithe","ko":"예약","cs":"Zarezervujte","lv":"Rezervēt","uk":"Забронювати","pl":"Zarezerwuj","es":"Reserva"},"ck_pax":{"it":"Quante persone?","en":"How many people?","fr":"Combien de personnes ?","de":"Wie viele Personen?","pt":"Quantas pessoas?","zh":"多少人？","ja":"何名？","ru":"Сколько человек?","ar":"كم شخص؟","he":"כמה?","ro":"Câte persoane?","sq":"Sa persona?","fil":"Ilang tao?","th":"กี่คน?","nl":"Hoeveel?","no":"Hvor mange?","ga":"Cé mhéad?","ko":"몇 명?","cs":"Kolik?","lv":"Cik?","uk":"Скільки?","pl":"Ile?","es":"¿Cuántos?"},"ck_stops":{"it":"Tappe del tour","en":"Tour stops","fr":"Étapes","de":"Stationen","pt":"Paradas","zh":"站点","ja":"停留所","ru":"Остановки","ar":"محطات","he":"תחנות","ro":"Opriri","sq":"Ndalesat","fil":"Hinto","th":"จุดแวะ","nl":"Haltes","no":"Stopp","ga":"Stadanna","ko":"정류장","cs":"Zastávky","lv":"Pieturas","uk":"Зупинки","pl":"Przystanki","es":"Paradas"},"ck_name":{"it":"Nome e Cognome *","en":"Full Name *","fr":"Nom et Prénom *","de":"Vor- und Nachname *","pt":"Nome Completo *","zh":"姓名 *","ja":"氏名 *","ru":"ФИО *","ar":"الاسم *","he":"שם מלא *","ro":"Nume *","sq":"Emri *","fil":"Pangalan *","th":"ชื่อ *","nl":"Naam *","no":"Navn *","ga":"Ainm *","ko":"성명 *","cs":"Jméno *","lv":"Vārds *","uk":"Ім'я *","pl":"Imię *","es":"Nombre *"},"ck_email":{"it":"Email *","en":"Email *","fr":"Email *","de":"E-Mail *","pt":"Email *","zh":"邮件 *","ja":"メール *","ru":"Почта *","ar":"بريد *","he":"אימייל *","ro":"Email *","sq":"Email *","fil":"Email *","th":"อีเมล *","nl":"E-mail *","no":"E-post *","ga":"Ríomhphost *","ko":"이메일 *","cs":"E-mail *","lv":"E-pasts *","uk":"Пошта *","pl":"E-mail *","es":"Email *"},"ck_date":{"it":"Data preferita *","en":"Preferred date *","fr":"Date souhaitée *","de":"Wunschdatum *","pt":"Data *","zh":"日期 *","ja":"日付 *","ru":"Дата *","ar":"التاريخ *","he":"תאריך *","ro":"Data *","sq":"Data *","fil":"Petsa *","th":"วันที่ *","nl":"Datum *","no":"Dato *","ga":"Dáta *","ko":"날짜 *","cs":"Datum *","lv":"Datums *","uk":"Дата *","pl":"Data *","es":"Fecha *"},"ck_time":{"it":"Orario","en":"Time","fr":"Horaire","de":"Uhrzeit","pt":"Horário","zh":"时间","ja":"時間","ru":"Время","ar":"الوقت","he":"שעה","ro":"Orar","sq":"Orari","fil":"Oras","th":"เวลา","nl":"Tijd","no":"Tid","ga":"Am","ko":"시간","cs":"Čas","lv":"Laiks","uk":"Час","pl":"Godzina","es":"Horario"},"ck_notes":{"it":"Note speciali","en":"Special notes","fr":"Notes","de":"Hinweise","pt":"Notas","zh":"备注","ja":"備考","ru":"Заметки","ar":"ملاحظات","he":"הערות","ro":"Note","sq":"Shënime","fil":"Tala","th":"หมายเหตุ","nl":"Notities","no":"Merknader","ga":"Nótaí","ko":"참고","cs":"Poznámky","lv":"Piezīmes","uk":"Примітки","pl":"Uwagi","es":"Notas"},"ck_confirm":{"it":"Conferma Prenotazione →","en":"Confirm Booking →","fr":"Confirmer →","de":"Buchung bestätigen →","pt":"Confirmar →","zh":"确认 →","ja":"確定 →","ru":"Подтвердить →","ar":"تأكيد →","he":"אישור →","ro":"Confirmă →","sq":"Konfirmo →","fil":"Kumpirmahin →","th":"ยืนยัน →","nl":"Bevestig →","no":"Bekreft →","ga":"Deimhnigh →","ko":"확인 →","cs":"Potvrdit →","lv":"Apstiprināt →","uk":"Підтвердити →","pl":"Potwierdź →","es":"Confirmar →"},"ck_ok":{"it":"Prenotazione ricevuta!","en":"Booking received!","fr":"Réservation reçue !","de":"Buchung erhalten!","pt":"Reserva recebida!","zh":"预订已收到！","ja":"予約受付！","ru":"Бронь получена!","ar":"تم الحجز!","he":"ההזמנה התקבלה!","ro":"Rezervare primită!","sq":"Rezervimi pranua!","fil":"Natanggap!","th":"ได้รับแล้ว!","nl":"Boeking ontvangen!","no":"Bestilling mottatt!","ga":"Áirithint faighte!","ko":"접수 완료!","cs":"Přijata!","lv":"Saņemta!","uk":"Отримано!","pl":"Przyjęta!","es":"¡Recibida!"},"story_stat1_l":{"it":"% Tour Privati","en":"% Private Tours","fr":"% Visites Privées","de":"% Private Touren","pt":"% Passeios","zh":"% 私人旅游","ja":"% プライベート","ru":"% Частных","ar":"% جولات خاصة","he":"% פרטיים","ro":"% Private","sq":"% Private","fil":"% Private","th":"% ส่วนตัว","nl":"% Privé","no":"% Private","ga":"% Turais","ko":"% 프라이빗","cs":"% Soukromé","lv":"% Privātās","uk":"% Приватних","pl":"% Prywatnych","es":"% Privados"},"story_stat2_l":{"it":"Rating Ospiti","en":"Guest Rating","fr":"Note Clients","de":"Gästebewertung","pt":"Avaliação","zh":"客户评分","ja":"評価","ru":"Рейтинг","ar":"تقييم","he":"דירוג","ro":"Rating","sq":"Vlerësim","fil":"Rating","th":"คะแนน","nl":"Beoordeling","no":"Vurdering","ga":"Rátáil","ko":"평점","cs":"Hodnocení","lv":"Vērtējums","uk":"Рейтинг","pl":"Ocena","es":"Valoración"},"story_stat3_l":{"it":"Max Persone","en":"Max People","fr":"Max Personnes","de":"Max Personen","pt":"Máx","zh":"最大人数","ja":"最大","ru":"Макс.","ar":"الحد","he":"מקסימום","ro":"Max","sq":"Maks","fil":"Max","th":"สูงสุด","nl":"Max","no":"Maks","ga":"Uasmhéid","ko":"최대","cs":"Max","lv":"Maks.","uk":"Макс.","pl":"Maks.","es":"Máx"},"story_stat4_l":{"it":"Turisti in Fila","en":"Tourists in Line","fr":"En File","de":"In Schlange","pt":"Na Fila","zh":"排队","ja":"列待ち","ru":"В очереди","ar":"في الطابور","he":"בתור","ro":"La Coadă","sq":"Në Radhë","fil":"Sa Pila","th":"ในคิว","nl":"In Rij","no":"I Kø","ga":"Sa Scuaine","ko":"줄서기","cs":"Ve Frontě","lv":"Rindā","uk":"У черзі","pl":"W kolejce","es":"En Fila"},"tour_grande_bellezza":{"it":"La Grande Bellezza","en":"The Great Beauty","fr":"La Grande Beauté","de":"Die Große Schönheit","pt":"A Grande Beleza","zh":"永恒之美","ja":"偉大なる美","ru":"Великая Красота","ar":"الجمال العظيم","he":"היופי הגדול","ro":"Marea Frumusețe","sq":"Bukuria e Madhe","fil":"Ang Dakilang Ganda","th":"ความงามอันยิ่งใหญ่","nl":"De Grote Schoonheid","no":"Den Store Skjønnheten","ga":"An Áilleacht Mhór","ko":"위대한 아름다움","cs":"Velká Krása","lv":"Lielais Skaistums","uk":"Велика Краса","pl":"Wielkie Piękno","es":"La Gran Belleza"},"tour_grande_tag":{"it":"3 ore tra i gioielli del centro storico","en":"3 hours among the historic center's jewels","fr":"3 heures parmi les joyaux du centre historique","de":"3 Stunden zwischen den Juwelen der Altstadt","pt":"3 horas entre as joias do centro histórico","zh":"3小时畅游历史中心","ja":"歴史地区の宝石を3時間で","ru":"3 часа среди жемчужин исторического центра","ar":"3 ساعات بين جواهر المركز التاريخي","he":"3 שעות בין אוצרות המרכז ההיסטורי","ro":"3 ore între bijuteriile centrului","sq":"3 orë mes perllave të qendrës","fil":"3 oras sa mga hiyas ng sentro","th":"3 ชั่วโมงท่ามกลางอัญมณีเมืองเก่า","nl":"3 uur langs de juwelen van het centrum","no":"3 timer blant juvelene i sentrum","ga":"3 uair i measc seoda an lárionaid","ko":"역사 지구의 보석 3시간","cs":"3 hodiny mezi klenoty centra","lv":"3 stundas starp centra dārgakmeņiem","uk":"3 години серед перлин центру","pl":"3 godziny wśród klejnotów centrum","es":"3 horas entre las joyas del centro"},"tour_roma_night":{"it":"Roma by Night","en":"Rome by Night","fr":"Rome la Nuit","de":"Rom bei Nacht","pt":"Roma à Noite","zh":"罗马之夜","ja":"ローマの夜","ru":"Рим Ночью","ar":"روما ليلاً","he":"רומא בלילה","ro":"Roma Noaptea","sq":"Roma Natën","fil":"Roma sa Gabi","th":"โรมยามค่ำ","nl":"Rome bij Nacht","no":"Roma om Natten","ga":"An Róimh san Oíche","ko":"로마의 밤","cs":"Řím v Noci","lv":"Roma Naktī","uk":"Рим Вночі","pl":"Rzym Nocą","es":"Roma de Noche"},"tour_night_tag":{"it":"Roma al tramonto e di notte — magia pura","en":"Rome at sunset and night — pure magic","fr":"Rome au coucher de soleil — pure magie","de":"Rom bei Sonnenuntergang — pure Magie","pt":"Roma ao pôr do sol — magia pura","zh":"日落罗马 — 纯粹的魔法","ja":"夕暮れのローマ — 純粋な魔法","ru":"Рим на закате — чистая магия","ar":"روما عند الغروب — سحر خالص","he":"רומא בשקיעה — קסם טהור","ro":"Roma la apus — magie pură","sq":"Roma në perëndim — magji e pastër","fil":"Roma sa paglubog — purong mahika","th":"โรมยามพระอาทิตย์ตก — มนตร์เสน่ห์","nl":"Rome bij zonsondergang — pure magie","no":"Roma ved solnedgang — ren magi","ga":"An Róimh ag luí na gréine — draíocht","ko":"석양의 로마 — 순수한 마법","cs":"Řím při západu — čistá magie","lv":"Roma saulrietā — tīra maģija","uk":"Рим на заході — чиста магія","pl":"Rzym o zachodzie — czysta magia","es":"Roma al atardecer — magia pura"},"tour_full":{"it":"Full Roma Experience","en":"Full Roma Experience","fr":"Expérience Roma Complète","de":"Volles Rom-Erlebnis","pt":"Experiência Roma Completa","zh":"全罗马体验","ja":"フルローマ体験","ru":"Полный опыт Рима","ar":"تجربة روما الكاملة","he":"חוויית רומא מלאה","ro":"Experiența Roma Completă","sq":"Përvoja e Plotë","fil":"Buong Roma Experience","th":"ประสบการณ์เต็มรูปแบบ","nl":"Volledige Roma Ervaring","no":"Full Roma Opplevelse","ga":"Eispéireas Iomlán","ko":"풀 로마 체험","cs":"Plný Zážitek","lv":"Pilna Roma Pieredze","uk":"Повний досвід Риму","pl":"Pełne Doświadczenie","es":"Experiencia Roma Completa"},"tour_full_tag":{"it":"L'esperienza completa — il meglio di Roma","en":"The complete experience — the best of Rome","fr":"L'expérience complète — le meilleur de Rome","de":"Das komplette Erlebnis — das Beste von Rom","pt":"A experiência completa — o melhor de Roma","zh":"完整体验 — 罗马精华","ja":"完全な体験 — ローマの最高","ru":"Полный опыт — лучшее Рима","ar":"التجربة الكاملة — أفضل ما في روما","he":"החוויה המלאה — המיטב של רומא","ro":"Experiența completă — ce mai bun din Roma","sq":"Përvoja e plotë — më e mira e Romës","fil":"Buong karanasan — pinakamahusay","th":"ประสบการณ์ครบถ้วน — สิ่งที่ดีที่สุด","nl":"De complete ervaring — het beste van Rome","no":"Den komplette opplevelsen — det beste","ga":"An t-eispéireas iomlán — an chuid is fearr","ko":"완전한 경험 — 로마 최고","cs":"Kompletní zážitek — to nejlepší","lv":"Pilna pieredze — labākais","uk":"Повний досвід — найкраще Риму","pl":"Pełne doświadczenie — najlepsze","es":"La experiencia completa — lo mejor"},"tour_shooting":{"it":"Shooting Tour","en":"Shooting Tour","fr":"Tour Photo","de":"Foto-Tour","pt":"Tour Fotográfico","zh":"摄影之旅","ja":"フォトツアー","ru":"Фото-тур","ar":"جولة تصوير","he":"סיור צילום","ro":"Tur Foto","sq":"Tur Fotografik","fil":"Photo Tour","th":"ทัวร์ถ่ายภาพ","nl":"Foto Tour","no":"Foto Tur","ga":"Turas Grianghraf","ko":"포토 투어","cs":"Foto Prohlídka","lv":"Foto Tūre","uk":"Фото-тур","pl":"Sesja Foto","es":"Tour Fotográfico"},"tour_shooting_tag":{"it":"Il tour fotografico — Roma come non la vedi mai","en":"The photo tour — Rome like you've never seen","fr":"Le tour photo — Rome comme jamais","de":"Die Foto-Tour — Rom wie nie zuvor","pt":"O tour fotográfico — Roma como nunca","zh":"摄影之旅 — 前所未见的罗马","ja":"フォトツアー — 見たことのないローマ","ru":"Фото-тур — Рим как никогда","ar":"جولة التصوير — روما كما لم ترها","he":"סיור הצילום — רומא שלא ראיתם","ro":"Turul foto — Roma cum nu ai văzut","sq":"Turi fotografik — Roma si kurrë","fil":"Photo tour — Roma na hindi mo pa nakita","th":"ทัวร์ถ่ายภาพ — โรมที่ไม่เคยเห็น","nl":"Fototour — Rome zoals nooit","no":"Fototur — Roma som aldri før","ga":"Turas grianghraf — An Róimh mar nach bhfaca","ko":"포토 투어 — 본 적 없는 로마","cs":"Fototur — Řím jako nikdy","lv":"Fototūre — Roma kā nekad","uk":"Фототур — Рим як ніколи","pl":"Fotowycieczka — Rzym jak nigdy","es":"Tour foto — Roma como nunca"},"tour_fiat":{"it":"Fiat 500 Tour","en":"Fiat 500 Tour","fr":"Tour Fiat 500","de":"Fiat 500 Tour","pt":"Tour Fiat 500","zh":"菲亚特500之旅","ja":"フィアット500ツアー","ru":"Тур на Fiat 500","ar":"جولة فيات 500","he":"סיור פיאט 500","ro":"Tur Fiat 500","sq":"Tur Fiat 500","fil":"Fiat 500 Tour","th":"ทัวร์ Fiat 500","nl":"Fiat 500 Tour","no":"Fiat 500 Tur","ga":"Turas Fiat 500","ko":"피아트 500 투어","cs":"Fiat 500 Prohlídka","lv":"Fiat 500 Tūre","uk":"Тур Fiat 500","pl":"Wycieczka Fiat 500","es":"Tour Fiat 500"},"tour_fiat_tag":{"it":"L'icona italiana per le strade di Roma","en":"The Italian icon through Rome's streets","fr":"L'icône italienne dans les rues de Rome","de":"Die italienische Ikone durch Roms Straßen","pt":"O ícone italiano pelas ruas de Roma","zh":"意大利标志穿越罗马街头","ja":"イタリアのアイコンでローマの街を","ru":"Итальянская икона по улицам Рима","ar":"الأيقونة الإيطالية في شوارع روما","he":"האייקון האיטלקי ברחובות רומא","ro":"Icoana italiană pe străzile Romei","sq":"Ikona italiane në rrugët e Romës","fil":"Ang Italian icon sa mga kalye ng Roma","th":"ไอคอนอิตาลีบนถนนโรม","nl":"Het Italiaanse icoon door Rome","no":"Det italienske ikonet gjennom Roma","ga":"Íocón na hIodáile trí shráideanna","ko":"이탈리아 아이콘으로 로마 거리를","cs":"Italská ikona ulicemi Říma","lv":"Itāļu ikona pa Romas ielām","uk":"Італійська ікона вулицями Риму","pl":"Włoska ikona ulicami Rzymu","es":"El ícono italiano por las calles de Roma"},"tour_custom_sub":{"it":"Scegli tu le tappe · 1–3 pers €250 · 4 pers €300 · 5–7 pers €390","en":"Choose your stops · 1–3 ppl €250 · 4 ppl €300 · 5–7 ppl €390","fr":"Choisissez vos étapes · 1–3 pers €250 · 4 pers €300 · 5–7 pers €390","de":"Wähle Stationen · 1–3 Pers €250 · 4 Pers €300 · 5–7 Pers €390","pt":"Escolha paradas · 1–3 pes €250 · 4 pes €300 · 5–7 pes €390","zh":"选择站点 · 1–3人 €250 · 4人 €300 · 5–7人 €390","ja":"停留所を選択 · 1–3名 €250 · 4名 €300 · 5–7名 €390","ru":"Выберите остановки · 1–3 чел €250 · 4 чел €300 · 5–7 чел €390","ar":"اختر المحطات · 1–3 €250 · 4 €300 · 5–7 €390","he":"בחרו תחנות · 1–3 €250 · 4 €300 · 5–7 €390","ro":"Alege opririle · 1–3 pers €250","sq":"Zgjidh ndalesat · 1–3 pers €250","fil":"Pumili ng hinto · 1–3 €250","th":"เลือกจุดแวะ · 1–3 คน €250","nl":"Kies haltes · 1–3 pers €250","no":"Velg stopp · 1–3 pers €250","ga":"Roghnaigh stadanna · 1–3 €250","ko":"정류장 선택 · 1–3명 €250","cs":"Vyberte zastávky · 1–3 os €250","lv":"Izvēlieties pieturas · 1–3 €250","uk":"Обрати зупинки · 1–3 ос €250","pl":"Wybierz przystanki · 1–3 os €250","es":"Elige paradas · 1–3 pers €250"},"ess1_t":{"it":"100% Privata","en":"100% Private","fr":"100% Privée","de":"100% Privat","pt":"100% Privado","zh":"100% 私人","ja":"100% プライベート","ru":"100% Частный","ar":"100% خاص","he":"100% פרטי","ro":"100% Privat","sq":"100% Privat","fil":"100% Pribado","th":"100% ส่วนตัว","nl":"100% Privé","no":"100% Privat","ga":"100% Príobháideach","ko":"100% 프라이빗","cs":"100% Soukromé","lv":"100% Privāts","uk":"100% Приватний","pl":"100% Prywatne","es":"100% Privado"},"ess1_d":{"it":"Solo il tuo gruppo. Ritmi, soste, percorso — tutto ruota intorno a te.","en":"Just your group. Pace, stops, route — everything revolves around you.","fr":"Juste votre groupe. Rythme, arrêts, parcours — tout tourne autour de vous.","de":"Nur deine Gruppe. Tempo, Stopps, Route — alles dreht sich um dich.","pt":"Só o seu grupo. Ritmo, paradas, rota — tudo gira em torno de você.","zh":"只有你的团队。节奏、停靠、路线 — 一切围绕你。","ja":"あなたのグループだけ。ペース、停車、ルート — すべてあなた中心。","ru":"Только ваша группа. Ритм, остановки, маршрут — всё вокруг вас.","ar":"فقط مجموعتك. الإيقاع والتوقفات — كل شيء يدور حولك.","he":"רק הקבוצה שלכם. קצב, עצירות — הכל סביבכם.","ro":"Doar grupul tău. Ritm, opriri — totul în jurul tău.","sq":"Vetëm grupi yt. Ritmi, ndalesat — gjithçka rreth teje.","fil":"Grupo mo lang. Lahat para sa iyo.","th":"แค่กลุ่มของคุณ ทุกอย่างหมุนรอบคุณ","nl":"Alleen jouw groep. Alles draait om jou.","no":"Bare din gruppe. Alt handler om deg.","ga":"Do ghrúpa amháin. Gach rud fút féin.","ko":"당신의 그룹만. 모든 것이 당신 중심.","cs":"Jen vaše skupina. Vše se točí kolem vás.","lv":"Tikai jūsu grupa. Viss ap jums.","uk":"Тільки ваша група. Все навколо вас.","pl":"Tylko Twoja grupa. Wszystko kręci się wokół Ciebie.","es":"Solo tu grupo. Todo gira en torno a ti."},"ess2_t":{"it":"Guide Storyteller","en":"Storyteller Guides","fr":"Guides Conteurs","de":"Storyteller-Guides","pt":"Guias Contadores","zh":"讲故事的导游","ja":"ストーリーテラーガイド","ru":"Гиды-рассказчики","ar":"مرشدون رواة","he":"מדריכים מספרים","ro":"Ghizi Povestitori","sq":"Udhërrëfyes Tregimtarë","fil":"Storyteller Guides","th":"ไกด์นักเล่าเรื่อง","nl":"Verhalenvertellers","no":"Forteller-guider","ga":"Treorai Scéalaí","ko":"스토리텔러 가이드","cs":"Průvodci-Vypravěči","lv":"Gidi-Stāstnieki","uk":"Гіди-Оповідачі","pl":"Przewodnicy-Gawędziarze","es":"Guías Narradores"},"ess2_d":{"it":"Narratori romani innamorati della loro città. Ogni angolo diventa racconto.","en":"Roman storytellers in love with their city. Every corner becomes a story.","fr":"Conteurs romains amoureux de leur ville. Chaque coin devient un récit.","de":"Römische Erzähler, verliebt in ihre Stadt. Jede Ecke wird zur Geschichte.","pt":"Narradores romanos apaixonados. Cada esquina vira história.","zh":"热爱城市的罗马讲述者。每个角落都是故事。","ja":"ローマを愛するガイド。すべての角が物語に。","ru":"Римские рассказчики, влюблённые в свой город.","ar":"رواة رومانيون عاشقون لمدينتهم.","he":"מספרים רומאים שאוהבים את העיר.","ro":"Povestitori romani îndrăgostiți de oraș.","sq":"Tregimtarë romakë të dashuruar.","fil":"Mga Romano na mangangatha.","th":"นักเล่าเรื่องชาวโรมันที่หลงรัก","nl":"Romeinse vertellers verliefd op hun stad.","no":"Romerske fortellere forelsket i sin by.","ga":"Scéalaithe Rómhánacha i ngrá lena gcathair.","ko":"도시를 사랑하는 로마 스토리텔러.","cs":"Římští vypravěči zamilovaní do svého města.","lv":"Romas stāstnieki, kas iemīlējušies pilsētā.","uk":"Римські оповідачі, закохані у місто.","pl":"Rzymscy gawędziarze zakochani w mieście.","es":"Narradores romanos enamorados de su ciudad."},"ess3_t":{"it":"Golf Cart Alba","en":"Golf Cart Alba","fr":"Voiturette Alba","de":"Golf Cart Alba","pt":"Golf Cart Alba","zh":"高尔夫球车","ja":"ゴルフカート","ru":"Гольф-кар Альба","ar":"عربة جولف ألبا","he":"גולף קארט","ro":"Golf Cart Alba","sq":"Golf Cart Alba","fil":"Golf Cart Alba","th":"กอล์ฟคาร์ท Alba","nl":"Golfkar Alba","no":"Golfbil Alba","ga":"Cairteán Gailf Alba","ko":"골프카트 Alba","cs":"Golf Cart Alba","lv":"Golfa Ratiņš","uk":"Гольф-кар Альба","pl":"Golf Cart Alba","es":"Golf Cart Alba"},"ess3_d":{"it":"Silenziosi, agili, ecologici. Dove i bus non arriveranno mai.","en":"Silent, agile, eco-friendly. Where buses will never reach.","fr":"Silencieuses, agiles, écologiques. Là où les bus n'iront jamais.","de":"Leise, wendig, ökologisch. Wo Busse nie hinkommen.","pt":"Silenciosos, ágeis, ecológicos. Onde ônibus nunca chegam.","zh":"安静、灵活、环保。巴士永远到不了的地方。","ja":"静か、俊敏、エコ。バスが行けない場所へ。","ru":"Тихие, маневренные, экологичные. Куда автобусы не доберутся.","ar":"صامتة، رشيقة. حيث لا تصل الحافلات.","he":"שקטים, זריזים, ירוקים. לאן אוטובוסים לא מגיעים.","ro":"Silențioase, agile. Unde autobuzele nu ajung.","sq":"Të heshtura, të shpejtë. Ku autobusët nuk arrijnë.","fil":"Tahimik, maliksi. Hindi maaabot ng bus.","th":"เงียบ คล่องแคล่ว รถบัสไปไม่ถึง","nl":"Stil, wendbaar, ecologisch. Waar bussen niet komen.","no":"Stille, smidige, miljøvennlige. Dit busser aldri når.","ga":"Ciúin, lúfar, éiceolaíoch. Nach sroichfidh busanna.","ko":"조용하고 민첩한 친환경. 버스가 갈 수 없는 곳.","cs":"Tiché, obratné, ekologické. Kam autobusy nedojedou.","lv":"Klusi, veikli, ekoloģiski. Kur autobusi nenonāks.","uk":"Тихі, спритні, екологічні. Куди автобуси не дістануться.","pl":"Ciche, zwinne, ekologiczne. Gdzie autobusy nie dotrą.","es":"Silenciosos, ágiles, ecológicos. Donde los buses no llegan."},"ess4_t":{"it":"Dal tuo Hotel","en":"From your Hotel","fr":"Depuis votre Hôtel","de":"Ab deinem Hotel","pt":"Do seu Hotel","zh":"从酒店出发","ja":"ホテルから","ru":"Из вашего Отеля","ar":"من فندقك","he":"מהמלון שלך","ro":"De la Hotel","sq":"Nga Hoteli","fil":"Mula sa Hotel","th":"จากโรงแรม","nl":"Vanaf je Hotel","no":"Fra Hotellet","ga":"Ó d'Óstán","ko":"호텔에서","cs":"Z vašeho Hotelu","lv":"No jūsu Viesnīcas","uk":"Від вашого Готелю","pl":"Z Twojego Hotelu","es":"Desde tu Hotel"},"ess4_d":{"it":"Zero logistica. Arriviamo noi da te, ovunque a Roma.","en":"Zero logistics. We come to you, anywhere in Rome.","fr":"Zéro logistique. Nous venons à vous, partout à Rome.","de":"Null Logistik. Wir kommen zu dir, überall in Rom.","pt":"Zero logística. Vamos até você, em qualquer lugar.","zh":"零后勤。我们来找你，罗马任何地方。","ja":"手配不要。ローマのどこでもお迎え。","ru":"Ноль логистики. Мы приезжаем к вам, в любую точку Рима.","ar":"صفر لوجستيات. نأتي إليك في أي مكان.","he":"אפס לוגיסטיקה. אנחנו מגיעים אליכם.","ro":"Zero logistică. Venim la tine.","sq":"Zero logjistikë. Vijmë tek ti.","fil":"Zero logistics. Pupunta kami sa iyo.","th":"ไม่ต้องจัดการอะไร เราไปหาคุณ","nl":"Geen logistiek. Wij komen naar jou.","no":"Null logistikk. Vi kommer til deg.","ga":"Gan lóistíocht. Tagaimid chugat.","ko":"제로 로지스틱. 로마 어디든 찾아갑니다.","cs":"Žádná logistika. Přijedeme za vámi.","lv":"Nulles loģistika. Mēs braucam pie jums.","uk":"Нуль логістики. Приїдемо до вас.","pl":"Zero logistyki. Przyjedziemy do Ciebie.","es":"Cero logística. Vamos a ti, donde sea en Roma."},"com1_t":{"it":"Tour co-branded","en":"Co-branded tours","fr":"Tours co-brandés","de":"Co-Branding-Touren","pt":"Tours co-branded","zh":"联合品牌旅游","ja":"コブランドツアー","ru":"Совместные туры","ar":"جولات مشتركة","he":"סיורים משותפים","ro":"Tururi co-branded","sq":"Turne co-branded","fil":"Co-branded tours","th":"ทัวร์แบรนด์ร่วม","nl":"Co-branded tours","no":"Co-branded turer","ga":"Turais comhbhrandáilte","ko":"공동 브랜드 투어","cs":"Spolupráce","lv":"Kopīgi tūri","uk":"Спільні тури","pl":"Wspólne wycieczki","es":"Tours co-branded"},"com1_d":{"it":"Esperienze con la tua identità","en":"Experiences with your identity","fr":"Expériences avec votre identité","de":"Erlebnisse mit deiner Identität","pt":"Experiências com sua identidade","zh":"带有您品牌的体验","ja":"あなたのブランドで","ru":"Опыт с вашим брендом","ar":"تجارب بهويتك","he":"חוויות עם הזהות שלכם","ro":"Experiențe cu identitatea ta","sq":"Përvoja me identitetin tuaj","fil":"Karanasan gamit ang brand mo","th":"ประสบการณ์แบรนด์คุณ","nl":"Ervaringen met jouw identiteit","no":"Opplevelser med din identitet","ga":"Eispéiris le d'aitheantas","ko":"당신의 브랜드로","cs":"Zážitky s vaší identitou","lv":"Pieredzes ar jūsu zīmolu","uk":"Досвід з вашим брендом","pl":"Doświadczenia z Twoją marką","es":"Experiencias con tu identidad"},"com2_t":{"it":"Commissioni dedicate","en":"Dedicated commissions","fr":"Commissions dédiées","de":"Dedizierte Provisionen","pt":"Comissões dedicadas","zh":"专属佣金","ja":"専用コミッション","ru":"Выделенные комиссии","ar":"عمولات مخصصة","he":"עמלות ייעודיות","ro":"Comisioane dedicate","sq":"Komisione të dedikuara","fil":"Dedikadong komisyon","th":"ค่าคอมมิชชั่น","nl":"Commissies","no":"Provisjoner","ga":"Coimisiúin","ko":"전용 수수료","cs":"Provize","lv":"Komisijas","uk":"Комісійні","pl":"Prowizje","es":"Comisiones dedicadas"},"com2_d":{"it":"Reportistica mensile","en":"Monthly reporting","fr":"Rapports mensuels","de":"Monatliche Berichte","pt":"Relatórios mensais","zh":"月度报告","ja":"月次レポート","ru":"Ежемесячная отчётность","ar":"تقارير شهرية","he":"דוחות חודשיים","ro":"Raportare lunară","sq":"Raportim mujor","fil":"Buwanang ulat","th":"รายงานรายเดือน","nl":"Maandrapportage","no":"Månedlig rapportering","ga":"Tuairiscí míosúla","ko":"월간 보고","cs":"Měsíční reporty","lv":"Mēneša atskaites","uk":"Щомісячна звітність","pl":"Raporty miesięczne","es":"Informes mensuales"},"com3_t":{"it":"Priorità garantita","en":"Guaranteed priority","fr":"Priorité garantie","de":"Garantierte Priorität","pt":"Prioridade garantida","zh":"优先保证","ja":"優先保証","ru":"Гарантированный приоритет","ar":"أولوية مضمونة","he":"עדיפות מובטחת","ro":"Prioritate garantată","sq":"Prioritet i garantuar","fil":"Garantisadong priyoridad","th":"สิทธิ์ลำดับแรก","nl":"Gegarandeerde prioriteit","no":"Garantert prioritet","ga":"Tosaíocht ráthaithe","ko":"우선 보장","cs":"Garantovaná priorita","lv":"Garantēta prioritāte","uk":"Гарантований пріоритет","pl":"Gwarantowany priorytet","es":"Prioridad garantizada"},"com3_d":{"it":"Ospiti sempre al primo posto","en":"Guests always come first","fr":"Les invités toujours en premier","de":"Gäste immer an erster Stelle","pt":"Hóspedes sempre em primeiro","zh":"客人永远第一","ja":"ゲスト第一","ru":"Гости всегда на первом месте","ar":"الضيوف دائماً أولاً","he":"אורחים תמיד ראשונים","ro":"Oaspeții mereu pe primul loc","sq":"Mysafirët gjithmonë të parët","fil":"Bisita palaging una","th":"แขกมาก่อนเสมอ","nl":"Gasten altijd eerst","no":"Gjester alltid først","ga":"Aíonna i gcónaí ar dtús","ko":"게스트 우선","cs":"Hosté vždy první","lv":"Viesi vienmēr pirmajā vietā","uk":"Гості завжди першими","pl":"Goście zawsze na pierwszym miejscu","es":"Huéspedes siempre primero"},"com4_t":{"it":"Community Aura","en":"Aura Community","fr":"Communauté Aura","de":"Aura Community","pt":"Comunidade Aura","zh":"Aura 社区","ja":"Auraコミュニティ","ru":"Сообщество Aura","ar":"مجتمع أورا","he":"קהילת Aura","ro":"Comunitate Aura","sq":"Komuniteti Aura","fil":"Komunidad Aura","th":"ชุมชน Aura","nl":"Aura Community","no":"Aura Fellesskap","ga":"Pobal Aura","ko":"Aura 커뮤니티","cs":"Komunita Aura","lv":"Aura Kopiena","uk":"Спільнота Aura","pl":"Społeczność Aura","es":"Comunidad Aura"},"com4_d":{"it":"Seguici, condividi la tua storia","en":"Follow us, share your story","fr":"Suivez-nous, partagez votre histoire","de":"Folge uns, teile deine Geschichte","pt":"Siga-nos, compartilhe sua história","zh":"关注我们，分享故事","ja":"フォローして、あなたの物語を","ru":"Подписывайтесь, делитесь историей","ar":"تابعنا، شارك قصتك","he":"עקבו, שתפו את הסיפור","ro":"Urmărește-ne, împărtășește povestea","sq":"Na ndiqni, ndani historinë","fil":"Sundan kami, ibahagi ang kuwento","th":"ติดตามและแบ่งปัน","nl":"Volg ons, deel je verhaal","no":"Følg oss, del din historie","ga":"Lean muid, roinn do scéal","ko":"팔로우하고 이야기를 공유하세요","cs":"Sledujte nás, sdílejte příběh","lv":"Sekojiet mums, dalieties stāstā","uk":"Стежте, діліться історією","pl":"Śledź nas, podziel się historią","es":"Síguenos, comparte tu historia"},"faq1_q":{"it":"Cosa succede se piove?","en":"What if it rains?","fr":"Que se passe-t-il s'il pleut ?","de":"Was passiert bei Regen?","pt":"E se chover?","zh":"如果下雨怎么办？","ja":"雨の場合は？","ru":"Что будет, если пойдёт дождь?","ar":"ماذا لو أمطرت؟","he":"מה אם יורד גשם?","ro":"Ce se întâmplă dacă plouă?","sq":"Çfarë ndodh nëse bie shi?","fil":"Paano kung umulan?","th":"ถ้าฝนตกล่ะ?","nl":"Wat als het regent?","no":"Hva om det regner?","ga":"Cad a tharlaíonn má bháisteach?","ko":"비가 오면?","cs":"Co když prší?","lv":"Ja līst?","uk":"Що якщо дощ?","pl":"A jeśli pada deszcz?","es":"¿Qué pasa si llueve?"},"faq1_a":{"it":"Golf cart con protezioni antipioggia. In caso estremo: spostamento gratuito o rimborso completo.","en":"Golf carts with rain protection. In extreme cases: free rescheduling or full refund.","fr":"Voiturettes avec protection pluie. Cas extrême : report gratuit ou remboursement.","de":"Golfwagen mit Regenschutz. Im Extremfall: kostenlose Verschiebung oder Erstattung.","pt":"Carts com proteção contra chuva. Caso extremo: reagendamento gratuito ou reembolso.","zh":"高尔夫球车有雨棚。极端情况：免费改期或全额退款。","ja":"ゴルフカートに雨対策。極端な場合：無料変更または全額返金。","ru":"Гольф-кары с защитой от дождя. В крайнем случае: бесплатный перенос или возврат.","ar":"عربات مع حماية من المطر. في الحالات القصوى: إعادة جدولة أو استرداد.","he":"עגלות עם הגנה מגשם. במקרה קיצוני: דחייה חינם או החזר מלא.","ro":"Cart cu protecție. Extrem: reprogramare sau rambursare.","sq":"Karta me mbrojtje. Ekstrem: riplanifikim ose rimbursim.","fil":"May proteksyon sa ulan. Extreme: libre reschedule o refund.","th":"มีหลังคากันฝน กรณีรุนแรง: เลื่อนฟรีหรือคืนเงิน","nl":"Golfkar met regenbescherming. Extreem: gratis verplaatsen of terugbetaling.","no":"Golfbil med regnbeskyttelse. Ekstremt: gratis ombestilling eller refusjon.","ga":"Cairteanna le cosaint báistí. Eisceacht: athrú saor nó aisíoc.","ko":"골프카트 우천 대비. 극한: 무료 변경 또는 전액 환불.","cs":"Golfové vozíky s ochranou. Extrém: přeložení zdarma nebo vrácení.","lv":"Golfa ratiņi ar lietus aizsardzību. Ekstrēmi: pārcelšana vai atmaksa.","uk":"Гольф-кари з захистом. Крайній випадок: перенос або повернення.","pl":"Wózki z ochroną. Ekstremalnie: przełożenie lub zwrot.","es":"Carts con protección. Extremo: reprogramación o reembolso."},"faq2_q":{"it":"Dove ci incontriamo?","en":"Where do we meet?","fr":"Où nous retrouvons-nous ?","de":"Wo treffen wir uns?","pt":"Onde nos encontramos?","zh":"在哪里集合？","ja":"集合場所は？","ru":"Где встречаемся?","ar":"أين نلتقي؟","he":"היכן נפגשים?","ro":"Unde ne întâlnim?","sq":"Ku takohemi?","fil":"Saan tayo magkikita?","th":"เจอกันที่ไหน?","nl":"Waar ontmoeten we?","no":"Hvor møtes vi?","ga":"Cá mbuailfimid?","ko":"어디서 만나요?","cs":"Kde se potkáme?","lv":"Kur tiekamies?","uk":"Де зустрічаємось?","pl":"Gdzie się spotykamy?","es":"¿Dónde nos encontramos?"},"faq2_a":{"it":"Veniamo direttamente al tuo hotel. Zero organizzazione da parte tua.","en":"We come directly to your hotel. Zero effort on your part.","fr":"Nous venons directement à votre hôtel. Zéro organisation.","de":"Wir kommen direkt zu deinem Hotel. Null Aufwand.","pt":"Vamos ao seu hotel. Zero organização.","zh":"直接到你的酒店。零准备。","ja":"ホテルまで直接お迎え。手配不要。","ru":"Приезжаем прямо в отель. Ноль организации.","ar":"نأتي مباشرة إلى فندقك. صفر تنظيم.","he":"מגיעים ישירות למלון. אפס ארגון.","ro":"Venim direct la hotel. Zero organizare.","sq":"Vijmë direkt në hotel. Zero organizim.","fil":"Pupunta kami sa hotel. Zero effort.","th":"ไปรับที่โรงแรม ไม่ต้องจัดการอะไร","nl":"We komen naar je hotel. Nul moeite.","no":"Vi kommer til hotellet. Null innsats.","ga":"Tagaimid go díreach. Gan aon iarratas.","ko":"호텔로 직접 갑니다. 준비 필요 없음.","cs":"Přijedeme do hotelu. Nulový effort.","lv":"Atbraucam uz viesnīcu. Nulles organizēšana.","uk":"Приїдемо до готелю. Нуль зусиль.","pl":"Przyjedziemy do hotelu. Zero wysiłku.","es":"Vamos a tu hotel. Cero organización."},"faq3_q":{"it":"Quante persone possono salire?","en":"How many people can ride?","fr":"Combien de personnes ?","de":"Wie viele Personen passen?","pt":"Quantas pessoas cabem?","zh":"可以坐多少人？","ja":"何人乗れますか？","ru":"Сколько человек?","ar":"كم شخص يمكن أن يركب؟","he":"כמה אנשים?","ro":"Câte persoane?","sq":"Sa persona mund të hip?","fil":"Ilang tao?","th":"นั่งได้กี่คน?","nl":"Hoeveel personen?","no":"Hvor mange personer?","ga":"Cé mhéad duine?","ko":"몇 명까지?","cs":"Kolik osob?","lv":"Cik cilvēku?","uk":"Скільки осіб?","pl":"Ile osób?","es":"¿Cuántas personas?"},"faq3_a":{"it":"Fino a 6 per golf cart. Gruppi grandi: più cart coordinati.","en":"Up to 6 per golf cart. Large groups: multiple coordinated carts.","fr":"Jusqu'à 6 par voiturette. Grands groupes : plusieurs voiturettes.","de":"Bis zu 6 pro Golfwagen. Große Gruppen: mehrere Wagen.","pt":"Até 6 por carrinho. Grupos grandes: vários carrinhos.","zh":"每辆最多6人。大团体：多辆协调。","ja":"1台最大6名。大人数：複数台対応。","ru":"До 6 человек. Большие группы: несколько каров.","ar":"حتى 6. مجموعات كبيرة: عدة عربات.","he":"עד 6. קבוצות גדולות: מספר עגלות.","ro":"Până la 6. Grupuri mari: mai multe carturi.","sq":"Deri në 6. Grupe të mëdha: disa karta.","fil":"Hanggang 6. Malaking grupo: maraming cart.","th":"สูงสุด 6 คน กลุ่มใหญ่: หลายคัน","nl":"Tot 6 per kar. Grote groepen: meerdere karren.","no":"Opptil 6. Store grupper: flere biler.","ga":"Suas le 6. Grúpaí móra: cairteanna iolracha.","ko":"카트당 최대 6명. 대그룹: 여러 대.","cs":"Až 6. Velké skupiny: více vozíků.","lv":"Līdz 6. Lielas grupas: vairāki ratiņi.","uk":"До 6. Великі групи: кілька карів.","pl":"Do 6 na wózek. Duże grupy: więcej wózków.","es":"Hasta 6. Grupos grandes: varios carts."},"faq4_q":{"it":"Come funziona il pagamento?","en":"How does payment work?","fr":"Comment fonctionne le paiement ?","de":"Wie funktioniert die Zahlung?","pt":"Como funciona o pagamento?","zh":"如何付款？","ja":"支払い方法は？","ru":"Как оплатить?","ar":"كيف يتم الدفع؟","he":"איך משלמים?","ro":"Cum funcționează plata?","sq":"Si funksionon pagesa?","fil":"Paano magbayad?","th":"จ่ายเงินอย่างไร?","nl":"Hoe werkt de betaling?","no":"Hvordan betale?","ga":"Conas a íoctar?","ko":"결제 방법은?","cs":"Jak platit?","lv":"Kā maksāt?","uk":"Як оплатити?","pl":"Jak zapłacić?","es":"¿Cómo funciona el pago?"},"faq4_a":{"it":"Carta di credito via Stripe o solo richiesta. Cancellazione gratuita fino a 24h prima.","en":"Credit card via Stripe or request only. Free cancellation up to 24h before.","fr":"Carte de crédit via Stripe ou demande. Annulation gratuite 24h avant.","de":"Kreditkarte via Stripe oder Anfrage. Kostenlose Stornierung bis 24h vorher.","pt":"Cartão via Stripe ou pedido. Cancelamento gratuito até 24h.","zh":"通过Stripe信用卡或仅请求。24小时前免费取消。","ja":"Stripe経由のカードまたはリクエストのみ。24時間前まで無料キャンセル。","ru":"Карта через Stripe или запрос. Бесплатная отмена за 24ч.","ar":"بطاقة عبر Stripe أو طلب فقط. إلغاء مجاني حتى 24 ساعة.","he":"כרטיס אשראי דרך Stripe או בקשה. ביטול חינם עד 24 שעות.","ro":"Card prin Stripe sau cerere. Anulare gratuită cu 24h.","sq":"Kartë nëpërmjet Stripe ose kërkesë. Anulim falas 24h.","fil":"Credit card sa Stripe o request lang. Libreng cancel 24h.","th":"บัตรเครดิตผ่าน Stripe หรือขอเฉยๆ ยกเลิกฟรี 24 ชม.","nl":"Creditcard via Stripe of aanvraag. Gratis annulering tot 24u.","no":"Kredittkort via Stripe eller forespørsel. Gratis avbestilling 24t.","ga":"Cárta creidmheasa nó iarratas. Cealú saor 24u.","ko":"Stripe 카드 또는 요청만. 24시간 전 무료 취소.","cs":"Karta přes Stripe nebo žádost. Zrušení zdarma do 24h.","lv":"Karte caur Stripe vai pieprasījums. Bezmaksas atcelšana 24h.","uk":"Картка через Stripe або запит. Безкоштовне скасування за 24г.","pl":"Karta przez Stripe lub zapytanie. Darmowe anulowanie do 24h.","es":"Tarjeta vía Stripe o solicitud. Cancelación gratis hasta 24h."},"faq5_q":{"it":"Adatto a bambini e anziani?","en":"Suitable for children and elderly?","fr":"Adapté aux enfants et personnes âgées ?","de":"Geeignet für Kinder und Senioren?","pt":"Adequado para crianças e idosos?","zh":"适合儿童和老人吗？","ja":"子供と高齢者に適していますか？","ru":"Подходит для детей и пожилых?","ar":"مناسب للأطفال وكبار السن؟","he":"מתאים לילדים ומבוגרים?","ro":"Potrivit pentru copii și vârstnici?","sq":"Përshtatshëm për fëmijë?","fil":"Para sa bata at matatanda?","th":"เหมาะกับเด็กและผู้สูงอายุ?","nl":"Geschikt voor kinderen en ouderen?","no":"Passer for barn og eldre?","ga":"Oiriúnach do pháistí agus daoine aosta?","ko":"어린이와 노인에게 적합?","cs":"Vhodné pro děti a seniory?","lv":"Piemērots bērniem un senioriem?","uk":"Підходить для дітей і літніх?","pl":"Odpowiednie dla dzieci i seniorów?","es":"¿Apto para niños y mayores?"},"faq5_a":{"it":"Assolutamente. Nessuna camminata necessaria. Ideale per famiglie e anziani.","en":"Absolutely. No walking required. Ideal for families and elderly.","fr":"Absolument. Aucune marche nécessaire. Idéal pour familles.","de":"Absolut. Kein Gehen nötig. Ideal für Familien.","pt":"Absolutamente. Sem caminhadas. Ideal para famílias.","zh":"当然。无需步行。家庭理想之选。","ja":"もちろん。歩く必要なし。家族に最適。","ru":"Абсолютно. Не нужно ходить. Идеально для семей.","ar":"بالتأكيد. بدون مشي. مثالي للعائلات.","he":"בהחלט. ללא הליכה. אידיאלי למשפחות.","ro":"Absolut. Fără mers pe jos. Ideal pentru familii.","sq":"Absolutisht. Pa ecje. Ideal për familje.","fil":"Oo naman. Walang lakad. Ideal para sa pamilya.","th":"แน่นอน ไม่ต้องเดิน เหมาะสำหรับครอบครัว","nl":"Absoluut. Geen wandelen nodig. Ideaal voor families.","no":"Absolutt. Ingen gåing nødvendig. Ideelt for familier.","ga":"Go hiomlán. Gan siúl. Iontach do theaghlaigh.","ko":"물론이죠. 걷기 불필요. 가족에게 이상적.","cs":"Rozhodně. Bez chůze. Ideální pro rodiny.","lv":"Noteikti. Nav jāstaigā. Ideāli ģimenēm.","uk":"Абсолютно. Без ходьби. Ідеально для сімей.","pl":"Absolutnie. Bez chodzenia. Idealne dla rodzin.","es":"Absolutamente. Sin caminar. Ideal para familias."},"faq6_q":{"it":"Posso personalizzare il percorso?","en":"Can I customize the route?","fr":"Puis-je personnaliser le parcours ?","de":"Kann ich die Route anpassen?","pt":"Posso personalizar o roteiro?","zh":"可以定制路线吗？","ja":"ルートをカスタマイズできますか？","ru":"Могу ли я настроить маршрут?","ar":"هل يمكنني تخصيص المسار؟","he":"אפשר להתאים את המסלול?","ro":"Pot personaliza traseul?","sq":"A mund ta personalizoj?","fil":"Puwede ba mag-customize?","th":"ปรับเส้นทางได้ไหม?","nl":"Kan ik de route aanpassen?","no":"Kan jeg tilpasse ruten?","ga":"An féidir liom an bealach a shaincheapadh?","ko":"경로를 커스텀 할 수 있나요?","cs":"Mohu si přizpůsobit trasu?","lv":"Vai varu pielāgot maršrutu?","uk":"Чи можу налаштувати маршрут?","pl":"Czy mogę dostosować trasę?","es":"¿Puedo personalizar la ruta?"},"faq6_a":{"it":"Sì, al 100%. Decidi tu cosa vedere e quanto fermarti.","en":"Yes, 100%. You decide what to see and how long to stop.","fr":"Oui, à 100%. Vous décidez quoi voir et quand s'arrêter.","de":"Ja, zu 100%. Du entscheidest, was du siehst.","pt":"Sim, 100%. Você decide o que ver.","zh":"是的，100%。你决定看什么。","ja":"はい、100%。何を見るかはあなた次第。","ru":"Да, на 100%. Вы решаете, что смотреть.","ar":"نعم، 100%. أنت تقرر ما تريد رؤيته.","he":"כן, 100%. אתם מחליטים.","ro":"Da, 100%. Tu decizi ce vezi.","sq":"Po, 100%. Ti vendos çfarë sheh.","fil":"Oo, 100%. Ikaw ang magde-decide.","th":"ได้ 100% คุณเลือกเอง","nl":"Ja, 100%. Jij beslist wat je ziet.","no":"Ja, 100%. Du bestemmer.","ga":"Is féidir, 100%. Tusa a chinnfidh.","ko":"네, 100%. 무엇을 볼지 결정하세요.","cs":"Ano, 100%. Rozhodujete vy.","lv":"Jā, 100%. Jūs lemjat.","uk":"Так, 100%. Ви вирішуєте.","pl":"Tak, 100%. Ty decydujesz.","es":"Sí, 100%. Tú decides."},"faq7_q":{"it":"In quali lingue guidate?","en":"What languages do you guide in?","fr":"En quelles langues guidez-vous ?","de":"In welchen Sprachen führen Sie?","pt":"Em quais idiomas?","zh":"导游使用什么语言？","ja":"何語でガイドしますか？","ru":"На каких языках?","ar":"بأي لغات ترشدون؟","he":"באילו שפות?","ro":"În ce limbi ghidați?","sq":"Në cilat gjuhë?","fil":"Anong mga wika?","th":"ไกด์ภาษาอะไร?","nl":"Welke talen?","no":"Hvilke språk?","ga":"Cé na teangacha?","ko":"어떤 언어로?","cs":"V jakých jazycích?","lv":"Kādās valodās?","uk":"Якими мовами?","pl":"W jakich językach?","es":"¿En qué idiomas?"},"faq7_a":{"it":"Italiano, inglese, francese e spagnolo.","en":"Italian, English, French and Spanish.","fr":"Italien, anglais, français et espagnol.","de":"Italienisch, Englisch, Französisch und Spanisch.","pt":"Italiano, inglês, francês e espanhol.","zh":"意大利语、英语、法语和西班牙语。","ja":"イタリア語、英語、フランス語、スペイン語。","ru":"Итальянский, английский, французский и испанский.","ar":"إيطالية، إنجليزية، فرنسية وإسبانية.","he":"איטלקית, אנגלית, צרפתית וספרדית.","ro":"Italiană, engleză, franceză și spaniolă.","sq":"Italisht, anglisht, frëngjisht dhe spanjisht.","fil":"Italyano, Ingles, French at Spanish.","th":"อิตาลี อังกฤษ ฝรั่งเศส และสเปน","nl":"Italiaans, Engels, Frans en Spaans.","no":"Italiensk, engelsk, fransk og spansk.","ga":"Iodáilis, Béarla, Fraincis agus Spáinnis.","ko":"이탈리아어, 영어, 프랑스어, 스페인어.","cs":"Italsky, anglicky, francouzsky a španělsky.","lv":"Itāliski, angliski, franciski un spāniski.","uk":"Італійська, англійська, французька, іспанська.","pl":"Włoski, angielski, francuski i hiszpański.","es":"Italiano, inglés, francés y español."},"ck_card":{"it":"Carta","en":"Card","fr":"Carte","de":"Karte","pt":"Cartão","zh":"信用卡","ja":"カード","ru":"Карта","ar":"بطاقة","he":"כרטיס","ro":"Card","sq":"Kartë","fil":"Card","th":"บัตร","nl":"Kaart","no":"Kort","ga":"Cárta","ko":"카드","cs":"Karta","lv":"Karte","uk":"Картка","pl":"Karta","es":"Tarjeta"},"ck_request":{"it":"Richiesta","en":"Request","fr":"Demande","de":"Anfrage","pt":"Pedido","zh":"请求","ja":"リクエスト","ru":"Запрос","ar":"طلب","he":"בקשה","ro":"Cerere","sq":"Kërkesë","fil":"Kahilingan","th":"คำขอ","nl":"Verzoek","no":"Forespørsel","ga":"Iarratas","ko":"요청","cs":"Žádost","lv":"Pieprasījums","uk":"Запит","pl":"Zapytanie","es":"Solicitud"},"ck_secure":{"it":"Sicuro via Stripe · dati mai memorizzati da noi","en":"Secure via Stripe · your data never stored by us","fr":"Sécurisé via Stripe · données jamais stockées","de":"Sicher über Stripe · Daten nie gespeichert","pt":"Seguro via Stripe · dados nunca armazenados","zh":"通过Stripe安全支付 · 我们不存储数据","ja":"Stripe経由で安全 · データは保存されません","ru":"Безопасно через Stripe · данные не хранятся","ar":"آمن عبر Stripe · لا نحفظ بياناتك","he":"מאובטח דרך Stripe · הנתונים לא נשמרים","ro":"Sigur prin Stripe · date nesalvate","sq":"Sigurt nëpërmjet Stripe","fil":"Secure sa Stripe · hindi namin iniimbak","th":"ปลอดภัยผ่าน Stripe · เราไม่เก็บข้อมูล","nl":"Veilig via Stripe · data nooit opgeslagen","no":"Sikkert via Stripe · data aldri lagret","ga":"Sábháilte trí Stripe · sonraí gan stóráil","ko":"Stripe 보안 · 데이터 미저장","cs":"Bezpečné přes Stripe · data neukládáme","lv":"Droši caur Stripe · dati netiek glabāti","uk":"Безпечно через Stripe · дані не зберігаються","pl":"Bezpiecznie przez Stripe · dane nie przechowywane","es":"Seguro vía Stripe · datos nunca almacenados"},"ck_notes_ph":{"it":"Compleanni, anniversari, bambini, difficoltà motorie...","en":"Birthdays, anniversaries, children, mobility issues...","fr":"Anniversaires, enfants, mobilité réduite...","de":"Geburtstage, Kinder, eingeschränkte Mobilität...","pt":"Aniversários, crianças, mobilidade...","zh":"生日、纪念日、儿童、行动不便...","ja":"誕生日、記念日、お子様、車椅子...","ru":"Дни рождения, дети, ограниченная подвижность...","ar":"أعياد ميلاد، أطفال، صعوبات حركية...","he":"ימי הולדת, ילדים, קשיי ניידות...","ro":"Aniversări, copii, mobilitate...","sq":"Ditëlindje, fëmijë, vështirësi...","fil":"Kaarawan, bata, mobility...","th":"วันเกิด เด็ก ผู้มีปัญหาการเคลื่อนไหว...","nl":"Verjaardagen, kinderen, mobiliteit...","no":"Bursdager, barn, mobilitet...","ga":"Breithlá, páistí, soghluaisteacht...","ko":"생일, 어린이, 이동 불편...","cs":"Narozeniny, děti, mobilita...","lv":"Dzimšanas dienas, bērni, mobilitāte...","uk":"Дні народження, діти, рухливість...","pl":"Urodziny, dzieci, mobilność...","es":"Cumpleaños, niños, movilidad..."},"per_group":{"it":"· tot. gruppo","en":"· group total","fr":"· total groupe","de":"· Gruppenpreis","pt":"· total grupo","zh":"· 团体总价","ja":"· グループ合計","ru":"· за группу","ar":"· المجموع","he":"· לקבוצה","ro":"· total grup","sq":"· total grupi","fil":"· kabuuang grupo","th":"· รวมกลุ่ม","nl":"· groepstotaal","no":"· gruppetotal","ga":"· iomlán grúpa","ko":"· 그룹 합계","cs":"· celkem skupina","lv":"· kopā grupai","uk":"· за групу","pl":"· za grupę","es":"· total grupo"},"book_now":{"it":"Prenota ora →","en":"Book now →","fr":"Réservez →","de":"Jetzt buchen →","pt":"Reserve agora →","zh":"立即预订 →","ja":"今すぐ予約 →","ru":"Забронировать →","ar":"احجز الآن →","he":"הזמינו →","ro":"Rezervă →","sq":"Rezervo →","fil":"Book na →","th":"จองเลย →","nl":"Boek nu →","no":"Bestill nå →","ga":"Cuir in áirithe →","ko":"지금 예약 →","cs":"Rezervovat →","lv":"Rezervēt →","uk":"Забронювати →","pl":"Zarezerwuj →","es":"Reserva →"},"info":{"it":"Info →","en":"Info →","fr":"Info →","de":"Info →","pt":"Info →","zh":"详情 →","ja":"詳細 →","ru":"Инфо →","ar":"معلومات →","he":"מידע →","ro":"Info →","sq":"Info →","fil":"Info →","th":"ข้อมูล →","nl":"Info →","no":"Info →","ga":"Eolas →","ko":"정보 →","cs":"Info →","lv":"Info →","uk":"Інфо →","pl":"Info →","es":"Info →"},"coming_soon":{"it":"Prossimamente","en":"Coming soon","fr":"Prochainement","de":"Bald verfügbar","pt":"Em breve","zh":"即将推出","ja":"近日公開","ru":"Скоро","ar":"قريباً","he":"בקרוב","ro":"Curând","sq":"Së shpejti","fil":"Malapit na","th":"เร็วๆ นี้","nl":"Binnenkort","no":"Kommer snart","ga":"Go luath","ko":"곧 출시","cs":"Brzy","lv":"Drīzumā","uk":"Незабаром","pl":"Wkrótce","es":"Próximamente"},"t_title_full":{"it":"Scegli il tuo tour <em>privato</em>","en":"Choose your <em>private</em> tour","fr":"Choisissez votre visite <em>privée</em>","de":"Wähle deine <em>private</em> Tour","pt":"Escolha seu passeio <em>privado</em>","zh":"选择你的<em>私人</em>旅游","ja":"<em>プライベート</em>ツアーを選ぶ","ru":"Выберите <em>частный</em> тур","ar":"اختر جولتك <em>الخاصة</em>","he":"בחרו סיור <em>פרטי</em>","ro":"Alege turul <em>privat</em>","sq":"Zgjidh turnin <em>privat</em>","fil":"Pumili ng <em>pribadong</em> tour","th":"เลือก<em>ทัวร์ส่วนตัว</em>","nl":"Kies je <em>privé</em> tour","no":"Velg din <em>private</em> tur","ga":"Roghnaigh do thuras <em>príobháideach</em>","ko":"<em>프라이빗</em> 투어 선택","cs":"Vyberte <em>soukromou</em> prohlídku","lv":"Izvēlieties <em>privātu</em> tūri","uk":"Обрати <em>приватний</em> тур","pl":"Wybierz <em>prywatną</em> wycieczkę","es":"Elige tu tour <em>privado</em>"},"available":{"it":"Disponibile","en":"Available","fr":"Disponible","de":"Verfügbar","pt":"Disponível","zh":"可用","ja":"利用可能","ru":"Доступно","ar":"متاح","he":"זמין","ro":"Disponibil","sq":"I disponueshëm","fil":"Available","th":"พร้อมให้บริการ","nl":"Beschikbaar","no":"Tilgjengelig","ga":"Ar fáil","ko":"이용 가능","cs":"Dostupné","lv":"Pieejams","uk":"Доступний","pl":"Dostępne","es":"Disponible"},"trust_pay":{"it":"Pagamento Sicuro","en":"Secure Payment","fr":"Paiement Sécurisé","de":"Sichere Zahlung","pt":"Pagamento Seguro","zh":"安全支付","ja":"安全な決済","ru":"Безопасная оплата","ar":"دفع آمن","he":"תשלום מאובטח","ro":"Plată Sigură","sq":"Pagesë Sigurt","fil":"Secure Bayad","th":"ชำระเงินปลอดภัย","nl":"Veilige Betaling","no":"Sikker Betaling","ga":"Íocaíocht Shlán","ko":"안전한 결제","cs":"Bezpečná Platba","lv":"Droša Apmaksa","uk":"Безпечна оплата","pl":"Bezpieczna Płatność","es":"Pago Seguro"},"trust_cancel":{"it":"Cancellazione 24h","en":"24h Cancellation","fr":"Annulation 24h","de":"Stornierung 24h","pt":"Cancelamento 24h","zh":"24小时取消","ja":"24時間キャンセル","ru":"Отмена за 24ч","ar":"إلغاء 24 ساعة","he":"ביטול 24 שעות","ro":"Anulare 24h","sq":"Anulim 24h","fil":"24h Cancel","th":"ยกเลิก 24 ชม.","nl":"Annulering 24u","no":"Avbestilling 24t","ga":"Cealú 24u","ko":"24시간 취소","cs":"Zrušení 24h","lv":"Atcelšana 24h","uk":"Скасування 24г","pl":"Anulowanie 24h","es":"Cancelación 24h"},"trust_reply":{"it":"Risposta 2 ore","en":"Reply in 2 hours","fr":"Réponse 2h","de":"Antwort 2 Std","pt":"Resposta 2h","zh":"2小时回复","ja":"2時間返信","ru":"Ответ за 2ч","ar":"رد خلال ساعتين","he":"תגובה 2 שעות","ro":"Răspuns 2h","sq":"Përgjigje 2h","fil":"Reply 2 oras","th":"ตอบ 2 ชม.","nl":"Antwoord 2u","no":"Svar 2t","ga":"Freagra 2u","ko":"2시간 답변","cs":"Odpověď 2h","lv":"Atbilde 2h","uk":"Відповідь 2г","pl":"Odpowiedź 2h","es":"Respuesta 2h"},"trust_private":{"it":"100% Privato","en":"100% Private","fr":"100% Privé","de":"100% Privat","pt":"100% Privado","zh":"100% 私人","ja":"100% プライベート","ru":"100% Частный","ar":"100% خاص","he":"100% פרטי","ro":"100% Privat","sq":"100% Privat","fil":"100% Pribado","th":"100% ส่วนตัว","nl":"100% Privé","no":"100% Privat","ga":"100% Príobháideach","ko":"100% 프라이빗","cs":"100% Soukromé","lv":"100% Privāts","uk":"100% Приватний","pl":"100% Prywatne","es":"100% Privado"},"trust_zero":{"it":"Zero impegno","en":"No commitment","fr":"Sans engagement","de":"Unverbindlich","pt":"Sem compromisso","zh":"零承诺","ja":"義務なし","ru":"Без обязательств","ar":"بدون التزام","he":"ללא התחייבות","ro":"Zero angajament","sq":"Zero angazhim","fil":"Walang commitment","th":"ไม่ผูกมัด","nl":"Geen verplichting","no":"Ingen forpliktelse","ga":"Gan tiomantas","ko":"부담 없음","cs":"Bez závazku","lv":"Bez saistībām","uk":"Без зобов","pl":"Bez zobowiązań","es":"Sin compromiso"},"urg_viewing":{"it":"persone stanno guardando questo tour","en":"people are viewing this tour","fr":"personnes regardent ce tour","de":"Personen sehen sich diese Tour an","pt":"pessoas estão vendo este passeio","zh":"人正在查看此旅游","ja":"人がこのツアーを見ています","ru":"человек смотрят этот тур","ar":"أشخاص يشاهدون هذه الجولة","he":"אנשים צופים בסיור","ro":"persoane vizualizează","sq":"persona po shikojnë","fil":"tao ang tumitingin","th":"คนกำลังดูทัวร์นี้","nl":"personen bekijken deze tour","no":"personer ser på denne turen","ga":"daoine ag féachaint","ko":"명이 보고 있습니다","cs":"lidí si prohlíží","lv":"cilvēki skatās","uk":"осіб переглядають","pl":"osób przegląda","es":"personas están viendo este tour"},"urg_slots":{"it":"Solo pochi posti disponibili questa settimana","en":"Only a few spots left this week","fr":"Seulement quelques places cette semaine","de":"Nur noch wenige Plätze diese Woche","pt":"Poucas vagas esta semana","zh":"本周仅剩少量名额","ja":"今週残りわずか","ru":"Осталось мало мест на этой неделе","ar":"بقي عدد قليل من الأماكن","he":"נותרו מקומות אחרונים","ro":"Doar câteva locuri rămase","sq":"Vetëm disa vende këtë javë","fil":"Iilang slot na lang","th":"เหลือไม่กี่ที่สัปดาห์นี้","nl":"Nog maar enkele plekken","no":"Bare noen plasser igjen","ga":"Cúpla áit fágtha","ko":"이번 주 잔여석 소수","cs":"Pouze pár míst tento týden","lv":"Tikai daži brīvi","uk":"Залишилось мало місць","pl":"Tylko kilka miejsc w tym tygodniu","es":"Solo quedan pocos lugares esta semana"},"most_chosen":{"it":"★ Più scelto","en":"★ Most popular","fr":"★ Le plus choisi","de":"★ Beliebteste","pt":"★ Mais popular","zh":"★ 最受欢迎","ja":"★ 一番人気","ru":"★ Самый популярный","ar":"★ الأكثر اختياراً","he":"★ הכי פופולרי","ro":"★ Cel mai ales","sq":"★ Më i zgjedhuri","fil":"★ Pinaka-popular","th":"★ ยอดนิยม","nl":"★ Populairst","no":"★ Mest valgt","ga":"★ Is rogha","ko":"★ 가장 인기","cs":"★ Nejoblíbenější","lv":"★ Populārākais","uk":"★ Найпопулярніший","pl":"★ Najpopularniejsze","es":"★ Más elegido",
  "ck_stop_hint":{"it":"Tocca una tappa per vedere la descrizione","en":"Tap a stop to see the description","fr":"Touchez un arrêt pour voir la description","de":"Tippe auf einen Stopp, um die Beschreibung zu sehen","es":"Toca una parada para ver la descripción","pt":"Toque numa paragem para ver a descrição"},
  "ck_accessibility_html":{"it":"<strong>Accessibilit\u00e0:</strong> nessuna barriera architettonica. Tour adatti a tutte le et\u00e0 (bambini, anziani, disabili). Indica eventuali necessit\u00e0 nelle note. <span style=\"white-space:nowrap\">Acqua fresca</span> sempre gratuita.","en":"<strong>Accessibility:</strong> no architectural barriers. Suitable for all ages (kids, seniors, guests with disabilities). Add any needs in the notes. <span style=\"white-space:nowrap\">Fresh water</span> is always free.","fr":"<strong>Accessibilit\u00e9 :</strong> pas de barri\u00e8res architecturales. Adapt\u00e9 \u00e0 tous les \u00e2ges. Indiquez vos besoins dans les notes. <span style=\"white-space:nowrap\">Eau fra\u00eeche</span> toujours gratuite.","de":"<strong>Barrierefreiheit:</strong> keine architektonischen Barrieren. F\u00fcr alle Altersgruppen geeignet. Bitte Bed\u00fcrfnisse in Notizen angeben. <span style=\"white-space:nowrap\">K\u00fchles Wasser</span> immer gratis.","es":"<strong>Accesibilidad:</strong> sin barreras arquitect\u00f3nicas. Apto para todas las edades. Indica necesidades en las notas. <span style=\"white-space:nowrap\">Agua fresca</span> siempre gratis.","pt":"<strong>Acessibilidade:</strong> sem barreiras arquitet\u00f4nicas. Adequado para todas as idades. Indique necessidades nas notas. <span style=\"white-space:nowrap\">\u00c1gua fresca</span> sempre gr\u00e1tis.","zh":"<strong>\u65e0\u969c\u788d:</strong> \u9002\u5408\u6240\u6709\u5e74\u9f84\u3002<span style=\"white-space:nowrap\">\u65b0\u9c9c\u996e\u6c34</span>\u6c38\u8fdc\u514d\u8d39\u3002","ja":"<strong>\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3:</strong> \u5168\u5e74\u9f62\u5bfe\u5fdc\u3002<span style=\"white-space:nowrap\">\u30d5\u30ec\u30c3\u30b7\u30e5\u30a6\u30a9\u30fc\u30bf\u30fc</span>\u306f\u5e38\u306b\u7121\u6599\u3002","ru":"<strong>\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c:</strong> \u043d\u0435\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u0431\u0430\u0440\u044c\u0435\u0440\u043e\u0432. \u0412\u043e\u0434\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e.","ar":"<strong>\u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u0627\u0644\u0648\u0635\u0648\u043b:</strong> \u0645\u0646\u0627\u0633\u0628 \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631. \u0627\u0644\u0645\u064a\u0627\u0647 \u0645\u062c\u0627\u0646\u064a\u0629.","he":"<strong>\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea:</strong> \u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05db\u05dc \u05d4\u05d2\u05d9\u05dc\u05d0\u05d9\u05dd. \u05de\u05d9\u05dd \u05e7\u05e8\u05d9\u05dd \u05ea\u05de\u05d9\u05d3 \u05d1\u05d7\u05d9\u05e0\u05dd.","ro":"<strong>Accesibilitate:</strong> f\u0103r\u0103 bariere. Potrivit pentru toate v\u00e2rstele. Ap\u0103 proasp\u0103t\u0103 gratuit\u0103.","sq":"<strong>Aksesibilitet:</strong> pa barriera. I p\u00ebrshtatsh\u00ebm p\u00ebr t\u00eb gjitha moshat. Uj\u00eb i freskup falas.","fil":"<strong>Accessibility:</strong> walang barriers. Angkop para sa lahat ng edad. Sariwang tubig libre.","th":"<strong>\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07:</strong> \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e27\u0e31\u0e22. \u0e19\u0e49\u0e33\u0e14\u0e37\u0e48\u0e21\u0e2a\u0e14\u0e1f\u0e23\u0e35.","nl":"<strong>Toegankelijkheid:</strong> geen barri\u00e8res. Geschikt voor alle leeftijden. Vers water altijd gratis.","no":"<strong>Tilgjengelighet:</strong> ingen hindringer. Passer for alle aldre. Ferskt vann gratis.","ga":"<strong>Inrochtaineacht:</strong> gan bac\u00e1inni. Oiri\u00fanach do gach aois. Uisce \u00far saor.","ko":"<strong>\uc811\uadfc\uc131:</strong> \ubaa8\ub4e0 \uc5f0\ub839 \uc801\ud569. \uc2e0\uc120\ud55c \ubb3c \ud56d\uc0c1 \ubb34\ub8cc.","cs":"<strong>P\u0159\u00edstupnost:</strong> bez bari\u00e9r. Vhodn\u00e9 pro v\u0161echny v\u011bkov\u00e9 skupiny. \u010cerstvá voda zdarma.","lv":"<strong>Pieejam\u012bba:</strong> bez \u0161\u0137\u0113r\u0161\u013cu. Piem\u0113rots visiem vecumiem. Svaigs \u016bdens bez maksas.","uk":"<strong>\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456\u0441\u0442\u044c:</strong> \u0431\u0435\u0437 \u0431\u0430\u0440\u2019\u0454\u0440\u0456\u0432. \u041f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u0432\u0456\u043a\u0456\u0432. \u0412\u043e\u0434\u0430 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e.","pl":"<strong>Dost\u0119pno\u015b\u0107:</strong> brak barier. Odpowiednie dla wszystkich grup wiekowych. \u015awie\u017ca woda bezp\u0142atna."},
  "ck_extras_title":{"it":"Comfort & Extra","en":"Comfort & Extras","fr":"Confort & Extras","de":"Komfort & Extras","es":"Comodidad & Extras","pt":"Conforto & Extras","zh":"舒适 & 附加","ja":"快適 & エクストラ","ru":"Комфорт & Доп.","ar":"راحة & إضافات","he":"נוחות & תוספות","ro":"Confort & Extra","sq":"Komoditet & Ekstra","fil":"Comfort & Extra","th":"สะดวกสบาย & เพิ่มเติม","nl":"Comfort & Extra","no":"Komfort & Ekstra","ga":"Compord & Breise","ko":"편의 & 추가","cs":"Komfort & Extra","lv":"Komforts & Papildus","uk":"Комфорт & Додатково","pl":"Komfort & Dodatki"},
  "ck_seat_label_tpl":{"it":"Prenota in anticipo <b>seggiolino bimbo</b> <b>(+€{price})</b> — indica età/peso nelle note","en":"Book a <b>child seat</b> in advance <b>(+€{price})</b> — add age/weight in notes","fr":"Réserver un <b>siège enfant</b> à l’avance <b>(+€{price})</b> — âge/poids dans les notes","de":"<b>Kindersitz</b> vorab reservieren <b>(+€{price})</b> — Alter/Gewicht in den Notizen","es":"Reserva un <b>asiento infantil</b> con antelación <b>(+€{price})</b> — edad/peso en notas","pt":"Reserve <b>cadeirinha</b> com antecedência <b>(+€{price})</b> — idade/peso nas notas","zh":"提前预订<b>儿童座椅</b> <b>(+€{price})</b> — 备注年龄/体重","ja":"<b>チャイルドシート</b>事前予約 <b>(+€{price})</b> — 年齢/体重記入","ru":"Заб. <b>дет. кресло</b> заранее <b>(+€{price})</b> — возраст/вес в прим.","ar":"احجز <b>مقعد الأطفال</b> <b>(+€{price})</b>","he":"הזמן <b>כיסא ילדים</b> <b>(+€{price})</b>","ro":"Rez. <b>scaun copil</b> <b>(+€{price})</b>","sq":"Rez. <b>karrige fëmije</b> <b>(+€{price})</b>","fil":"<b>Child seat</b> maaga <b>(+€{price})</b>","th":"จองล่วงหน้า <b>ที่นั่งเด็ก</b> <b>(+€{price})</b>","nl":"<b>Kinderzitje</b> vooraf boeken <b>(+€{price})</b>","no":"<b>Barnesete</b> forhåndsbestill <b>(+€{price})</b>","ga":"<b>Suíochán linbh</b> roimh ré <b>(+€{price})</b>","ko":"<b>어린이 시트</b> 사전예약 <b>(+€{price})</b>","cs":"<b>Dětská sedačka</b> předem <b>(+€{price})</b>","lv":"<b>Bērnu krēsls</b> iepriekš <b>(+€{price})</b>","uk":"<b>Дит. крісло</b> заздалегідь <b>(+€{price})</b>","pl":"<b>Fotelik</b> z wyprzedzeniem <b>(+€{price})</b>"},
  "ck_drinks_label_tpl":{"it":"<b>Bevande fresche</b> su richiesta (ti scriviamo su WhatsApp)","en":"<b>Cold drinks</b> on request (we’ll message you on WhatsApp)","fr":"<b>Boissons fraîches</b> sur demande (on vous écrit sur WhatsApp)","de":"<b>Kalte Getränke</b> auf Anfrage (wir schreiben dir auf WhatsApp)","es":"<b>Bebidas frías</b> bajo petición (te escribimos por WhatsApp)","pt":"<b>Bebidas frescas</b> sob pedido (falamos com você no WhatsApp)","zh":"<b>冷饮</b>按需提供(WhatsApp)","ja":"<b>冷たい飲み物</b>リクエストで(WhatsApp)","ru":"<b>Холодные напитки</b> по запросу (WhatsApp)","ar":"<b>مشروبات باردة</b> عند الطلب (واتساب)","he":"<b>משקאות קרים</b> לפי בקשה (וואטסאפ)","ro":"<b>Băuturi reci</b> la cerere (WhatsApp)","sq":"<b>Pije të ftohta</b> me kërkesë (WhatsApp)","fil":"<b>Malamig na inumin</b> (WhatsApp)","th":"<b>เครื่องดื่มเย็น</b>ตามคำขอ (WhatsApp)","nl":"<b>Koude dranken</b> op verzoek (WhatsApp)","no":"<b>Kalde drikker</b> på forespørsel (WhatsApp)","ga":"<b>Deochanna fuara</b> ar iarratas (WhatsApp)","ko":"<b>차가운 음료</b> 요청 시 (WhatsApp)","cs":"<b>Studené nápoje</b> na vyžádání (WhatsApp)","lv":"<b>Auksti dzērieni</b> pēc pieprasījuma (WhatsApp)","uk":"<b>Холодні напої</b> на запит (WhatsApp)","pl":"<b>Zimne napoje</b> na życzenie (WhatsApp)"},
  "ck_water_note_tpl":{"it":"Acqua fresca sempre disponibile gratuitamente durante il tour.","en":"Fresh water is always available for free during the tour.","fr":"De l’eau fraîche est toujours disponible gratuitement pendant le tour.","de":"Kühles Wasser ist während der Tour immer kostenlos verfügbar.","es":"Agua fresca siempre disponible gratis durante el tour.","pt":"Água fresca sempre disponível gratuitamente durante o tour.","zh":"游览期间始终免费提供新鲜饮水。","ja":"ツアー中フレッシュウォーターは常に無料。","ru":"Свежая вода всегда бесплатно во время тура.","ar":"المياه العذبة مجانية دائماً أثناء الجولة.","he":"מים קרים חינם תמיד במהלך הסיור.","ro":"Apă proaspătă gratuită pe tot parcursul turului.","sq":"Uji i freskët gjithmonë falas gjatë turit.","fil":"Sariwang tubig libre sa buong tour.","th":"น้ำดื่มสดฟรีตลอดการทัวร์","nl":"Vers water altijd gratis tijdens de tour.","no":"Ferskt vann alltid gratis under turen.","ga":"Uisce úr saor i gcónaí le linn an turais.","ko":"투어 중 신선한 물은 항상 무료입니다.","cs":"Čerstvá voda vždy zdarma během prohlídky.","lv":"Svaigs ūdens vienmēr bez maksas tūres laikā.","uk":"Свіжа вода завжди безкоштовно під час туру.","pl":"Świeża woda zawsze bezpłatna podczas wycieczki."},
  "ct_filter_zone":{"it":"Filtra per zona","en":"Filter by area","fr":"Filtrer par zone","de":"Nach Bereich filtern","es":"Filtrar por zona","pt":"Filtrar por zona"},
  "ct_choose_stops":{"it":"Scegli le tue tappe","en":"Choose your stops","fr":"Choisissez vos arrêts","de":"Wähle deine Stopps","es":"Elige tus paradas","pt":"Escolha suas paradas"},
  "ct_selected_stops":{"it":"Tappe selezionate","en":"Selected stops","fr":"Arrêts sélectionnés","de":"Ausgewählte Stopps","es":"Paradas seleccionadas","pt":"Paradas selecionadas"},
  "ct_stops_lbl":{"it":"Tappe","en":"Stops","fr":"Arrêts","de":"Stopps","es":"Paradas","pt":"Paradas"},
  "ct_total_lbl":{"it":"Totale","en":"Total","fr":"Total","de":"Gesamt","es":"Total","pt":"Total"},
  "ck_name_req":{"it":"Nome *","en":"Name *","fr":"Nom *","de":"Name *","es":"Nombre *","pt":"Nome *"},
  "ck_whatsapp":{"it":"WhatsApp","en":"WhatsApp","fr":"WhatsApp","de":"WhatsApp","es":"WhatsApp","pt":"WhatsApp"},
  "ck_pref_date":{"it":"Data preferita","en":"Preferred date","fr":"Date souhaitée","de":"Wunschtermin","es":"Fecha preferida","pt":"Data preferida"}
,
  "ct_build_title":{"it":"Componi il tuo Tour","en":"Build your tour","fr":"Composez votre tour","de":"Stelle deine Tour zusammen","es":"Crea tu tour","pt":"Monte seu tour"},
  "ct_build_sub":{"it":"Scegli le tappe che vuoi","en":"Choose the stops you want","fr":"Choisissez les arrêts que vous voulez","de":"Wähle die Stopps, die du willst","es":"Elige las paradas que quieras","pt":"Escolha as paradas que quiser"},
  "ct_stop":{"it":"tappa","en":"stop","fr":"arrêt","de":"Stopp","es":"parada","pt":"parada"},
  "ct_cat_all":{"it":"Tutti","en":"All","fr":"Tous","de":"Alle","es":"Todos","pt":"Todos"},
  "ct_selected_short":{"it":"selezionate","en":"selected","fr":"sélectionnés","de":"ausgewählt","es":"seleccionadas","pt":"selecionadas"},
  "ck_stop_aria":{"it":"Descrizione","en":"Description","fr":"Description","de":"Beschreibung","es":"Descripción","pt":"Descrição"},
  "ui_close":{"it":"Chiudi","en":"Close","fr":"Fermer","de":"Schließen","es":"Cerrar","pt":"Fechar"}
,
  "chat_placeholder":{"it":"Scrivi un messaggio...","en":"Type a message...","fr":"Écrivez un message...","de":"Nachricht schreiben...","es":"Escribe un mensaje...","pt":"Escreva uma mensagem..."},
  "chat_online":{"it":"Online · risponde subito","en":"Online · replies fast","fr":"En ligne · répond vite","de":"Online · antwortet schnell","es":"En línea · responde rápido","pt":"Online · responde rápido"},
  "acc_banner_html":{"it":"<strong>Accessibilità:</strong> nessuna barriera architettonica. Tour adatti a tutte le età (bambini, anziani, disabili). Eventuali necessità specifiche: scrivile nelle <strong>Note</strong> in fase di prenotazione.","en":"<strong>Accessibility:</strong> no architectural barriers. Tours suitable for all ages (children, elderly, guests with disabilities). Any specific needs? Add them in the <strong>Notes</strong> when booking.","fr":"<strong>Accessibilité :</strong> aucune barrière architecturale. Tours adaptés à tous les âges (enfants, seniors, personnes handicapées). Besoins spécifiques : indiquez-les dans les <strong>Notes</strong> lors de la réservation.","de":"<strong>Barrierefreiheit:</strong> keine architektonischen Barrieren. Touren für alle Altersgruppen (Kinder, Senioren, Gäste mit Behinderung). Besondere Bedürfnisse bitte in den <strong>Notizen</strong> angeben.","es":"<strong>Accesibilidad:</strong> sin barreras arquitectónicas. Tours aptos para todas las edades (niños, mayores, personas con discapacidad). Necesidades específicas: escríbelas en las <strong>Notas</strong> al reservar.","pt":"<strong>Acessibilidade:</strong> sem barreiras arquitetônicas. Tours adequados para todas as idades (crianças, idosos, pessoas com deficiência). Necessidades específicas: escreva nas <strong>Notas</strong> ao reservar.","zh":"<strong>无障碍：</strong>无建筑障碍。适合所有年龄段（儿童、老人、残障人士）。特殊需求请在<strong>备注</strong>中注明。","ja":"<strong>アクセシビリティ：</strong>建築上のバリアなし。全年齢対応（子供、高齢者、障がい者）。特別なご要望は<strong>備考</strong>に記入してください。","ru":"<strong>Доступность:</strong> без архитектурных барьеров. Подходит для всех возрастов (дети, пожилые, гости с инвалидностью). Особые потребности укажите в <strong>Заметках</strong>.","ar":"<strong>إمكانية الوصول:</strong> بدون حواجز معمارية. مناسب لجميع الأعمار (أطفال، كبار السن، ذوي الاحتياجات). اكتب احتياجاتك في <strong>الملاحظات</strong>.","he":"<strong>נגישות:</strong> ללא מחסומים אדריכליים. מתאים לכל הגילאים (ילדים, קשישים, אנשים עם מוגבלות). צרכים מיוחדים? ציינו ב<strong>הערות</strong>.","ro":"<strong>Accesibilitate:</strong> fără bariere. Tururi potrivite pentru toate vârstele. Necesități speciale: scrieți în <strong>Note</strong>.","sq":"<strong>Aksesueshmëria:</strong> pa barriera. Përshtatshëm për të gjitha moshat. Nevojat speciale shkruajini në <strong>Shënimet</strong>.","fil":"<strong>Accessibility:</strong> walang hadlang. Para sa lahat ng edad. Mga espesyal na pangangailangan? Isulat sa <strong>Mga Tala</strong>.","th":"<strong>การเข้าถึง:</strong> ไม่มีอุปสรรคทางสถาปัตยกรรม เหมาะสำหรับทุกวัย ความต้องการพิเศษ: ระบุใน<strong>หมายเหตุ</strong>","nl":"<strong>Toegankelijkheid:</strong> geen architecturale barrières. Geschikt voor alle leeftijden. Speciale behoeften? Vermeld ze in de <strong>Notities</strong>.","no":"<strong>Tilgjengelighet:</strong> ingen arkitektoniske barrierer. Passer for alle aldre. Spesielle behov? Skriv i <strong>Merknader</strong>.","ga":"<strong>Inrochtaineacht:</strong> gan bacainní ailtireachta. Oiriúnach do gach aois. Riachtanais speisialta? Cuir i <strong>Nótaí</strong>.","ko":"<strong>접근성:</strong> 건축적 장벽 없음. 모든 연령 적합. 특별한 요구사항은 <strong>참고</strong>에 기재.","cs":"<strong>Přístupnost:</strong> bez architektonických bariér. Vhodné pro všechny věkové skupiny. Speciální potřeby uveďte v <strong>Poznámkách</strong>.","lv":"<strong>Pieejamība:</strong> bez arhitektūras barjerām. Piemērots visiem vecumiem. Īpašas vajadzības norādiet <strong>Piezīmēs</strong>.","uk":"<strong>Доступність:</strong> без архітектурних бар'єрів. Підходить для всіх вікових груп. Особливі потреби вкажіть у <strong>Примітках</strong>.","pl":"<strong>Dostępność:</strong> brak barier architektonicznych. Odpowiednie dla wszystkich grup wiekowych. Specjalne potrzeby: wpisz w <strong>Uwagach</strong>."}
},
  "nav_login":{"it":"Accedi","en":"Login","fr":"Connexion","de":"Anmelden","pt":"Entrar","zh":"登录","ja":"ログイン","ru":"Войти","ar":"دخول","he":"כניסה","ro":"Autentificare","sq":"Hyrje","fil":"Login","th":"เข้าสู่ระบบ","nl":"Inloggen","no":"Logg inn","ga":"Logáil isteach","ko":"로그인","cs":"Přihlásit","lv":"Pieslēgties","uk":"Увійти","pl":"Zaloguj","es":"Acceder"},
  "pax_1_3":{"it":"1–3 persone","en":"1–3 people","fr":"1–3 personnes","de":"1–3 Personen","pt":"1–3 pessoas","zh":"1–3人","ja":"1–3名","ru":"1–3 чел","ar":"1–3 أشخاص","he":"1–3 אנשים","ro":"1–3 pers","sq":"1–3 persona","fil":"1–3 tao","th":"1–3 คน","nl":"1–3 pers","no":"1–3 pers","ga":"1–3 duine","ko":"1–3명","cs":"1–3 osoby","lv":"1–3 cilvēki","uk":"1–3 ос","pl":"1–3 osoby","es":"1–3 personas"},
  "pax_4":{"it":"4 persone","en":"4 people","fr":"4 personnes","de":"4 Personen","pt":"4 pessoas","zh":"4人","ja":"4名","ru":"4 чел","ar":"4 أشخاص","he":"4 אנשים","ro":"4 pers","sq":"4 persona","fil":"4 tao","th":"4 คน","nl":"4 pers","no":"4 pers","ga":"4 dhuine","ko":"4명","cs":"4 osoby","lv":"4 cilvēki","uk":"4 ос","pl":"4 osoby","es":"4 personas"},
  "pax_5_7":{"it":"5–7 persone","en":"5–7 people","fr":"5–7 personnes","de":"5–7 Personen","pt":"5–7 pessoas","zh":"5–7人","ja":"5–7名","ru":"5–7 чел","ar":"5–7 أشخاص","he":"5–7 אנשים","ro":"5–7 pers","sq":"5–7 persona","fil":"5–7 tao","th":"5–7 คน","nl":"5–7 pers","no":"5–7 pers","ga":"5–7 duine","ko":"5–7명","cs":"5–7 osob","lv":"5–7 cilvēki","uk":"5–7 ос","pl":"5–7 osób","es":"5–7 personas"},
  "time_select":{"it":"Seleziona...","en":"Select...","fr":"Sélectionner...","de":"Auswählen...","pt":"Selecionar...","zh":"选择...","ja":"選択...","ru":"Выбрать...","ar":"اختر...","he":"בחר...","ro":"Selectează...","sq":"Zgjidhni...","fil":"Pumili...","th":"เลือก...","nl":"Selecteer...","no":"Velg...","ga":"Roghnaigh...","ko":"선택...","cs":"Vyberte...","lv":"Izvēlieties...","uk":"Оберіть...","pl":"Wybierz...","es":"Selecciona..."},
  "time_morning":{"it":"Mattina (9–12)","en":"Morning (9–12)","fr":"Matin (9–12)","de":"Morgen (9–12)","pt":"Manhã (9–12)","zh":"上午 (9–12)","ja":"午前 (9–12)","ru":"Утро (9–12)","ar":"صباح (9–12)","he":"בוקר (9–12)","ro":"Dimineață (9–12)","sq":"Mëngjes (9–12)","fil":"Umaga (9–12)","th":"เช้า (9–12)","nl":"Ochtend (9–12)","no":"Morgen (9–12)","ga":"Maidin (9–12)","ko":"오전 (9–12)","cs":"Ráno (9–12)","lv":"Rīts (9–12)","uk":"Ранок (9–12)","pl":"Ranek (9–12)","es":"Mañana (9–12)"},
  "time_afternoon":{"it":"Pomeriggio (14–17)","en":"Afternoon (14–17)","fr":"Après-midi (14–17)","de":"Nachmittag (14–17)","pt":"Tarde (14–17)","zh":"下午 (14–17)","ja":"午後 (14–17)","ru":"День (14–17)","ar":"بعد الظهر (14–17)","he":"צהריים (14–17)","ro":"După-amiază (14–17)","sq":"Pasdite (14–17)","fil":"Hapon (14–17)","th":"บ่าย (14–17)","nl":"Middag (14–17)","no":"Ettermiddag (14–17)","ga":"Tráthnóna (14–17)","ko":"오후 (14–17)","cs":"Odpoledne (14–17)","lv":"Pēcpusdiena (14–17)","uk":"День (14–17)","pl":"Popołudnie (14–17)","es":"Tarde (14–17)"},
  "time_sunset":{"it":"Tramonto (17–20)","en":"Sunset (17–20)","fr":"Coucher de soleil (17–20)","de":"Sonnenuntergang (17–20)","pt":"Pôr do sol (17–20)","zh":"日落 (17–20)","ja":"夕暮れ (17–20)","ru":"Закат (17–20)","ar":"غروب (17–20)","he":"שקיעה (17–20)","ro":"Apus (17–20)","sq":"Perëndim (17–20)","fil":"Paglubog (17–20)","th":"พระอาทิตย์ตก (17–20)","nl":"Zonsondergang (17–20)","no":"Solnedgang (17–20)","ga":"Luí na gréine (17–20)","ko":"일몰 (17–20)","cs":"Západ slunce (17–20)","lv":"Saulriets (17–20)","uk":"Захід (17–20)","pl":"Zachód słońca (17–20)","es":"Atardecer (17–20)"},
  "time_evening":{"it":"Sera (20+)","en":"Evening (20+)","fr":"Soir (20+)","de":"Abend (20+)","pt":"Noite (20+)","zh":"晚上 (20+)","ja":"夜 (20+)","ru":"Вечер (20+)","ar":"مساء (20+)","he":"ערב (20+)","ro":"Seară (20+)","sq":"Mbrëmje (20+)","fil":"Gabi (20+)","th":"เย็น (20+)","nl":"Avond (20+)","no":"Kveld (20+)","ga":"Tráthnóna (20+)","ko":"저녁 (20+)","cs":"Večer (20+)","lv":"Vakars (20+)","uk":"Вечір (20+)","pl":"Wieczór (20+)","es":"Noche (20+)"},
  "err_select_people":{"it":"Seleziona il numero di persone.","en":"Please select the number of people.","fr":"Veuillez sélectionner le nombre de personnes.","de":"Bitte Anzahl wählen.","pt":"Selecione o número de pessoas.","zh":"请选择人数。","ja":"人数を選択してください。","ru":"Выберите количество человек.","ar":"يرجى تحديد عدد الأشخاص.","he":"אנא בחרו מספר אנשים.","ro":"Selectați numărul de persoane.","sq":"Zgjidhni numrin e personave.","fil":"Pumili ng bilang ng tao.","th":"กรุณาเลือกจำนวนคน","nl":"Selecteer het aantal personen.","no":"Velg antall personer.","ga":"Roghnaigh líon na ndaoine.","ko":"인원 수를 선택하세요.","cs":"Vyberte počet osob.","lv":"Izvēlieties personu skaitu.","uk":"Оберіть кількість осіб.","pl":"Wybierz liczbę osób.","es":"Selecciona el número de personas."},
  "err_select_stop":{"it":"Seleziona almeno una tappa.","en":"Select at least one stop.","fr":"Sélectionnez au moins un arrêt.","de":"Mindestens eine Station wählen.","pt":"Selecione pelo menos uma parada.","zh":"请至少选择一个站点。","ja":"少なくとも1つの停車地を選択してください。","ru":"Выберите хотя бы одну остановку.","ar":"اختر محطة واحدة على الأقل.","he":"בחרו לפחות עצירה אחת.","ro":"Selectați cel puțin o oprire.","sq":"Zgjidhni të paktën një ndalesë.","fil":"Pumili ng kahit isang hinto.","th":"กรุณาเลือกอย่างน้อยหนึ่งจุดแวะ","nl":"Selecteer minimaal één halte.","no":"Velg minst ett stopp.","ga":"Roghnaigh stad amháin ar a laghad.","ko":"최소 하나의 정류장을 선택하세요.","cs":"Vyberte alespoň jednu zastávku.","lv":"Izvēlieties vismaz vienu pieturu.","uk":"Оберіть хоча б одну зупинку.","pl":"Wybierz co najmniej jeden przystanek.","es":"Selecciona al menos una parada."},
  "ck_confirm":{"it":"Conferma Prenotazione →","en":"Confirm Booking →","fr":"Confirmer →","de":"Buchung bestätigen →","pt":"Confirmar →","zh":"确认预订 →","ja":"予約を確定する →","ru":"Подтвердить →","ar":"تأكيد →","he":"אישור →","ro":"Confirmă →","sq":"Konfirmo →","fil":"Kumpirmahin →","th":"ยืนยัน →","nl":"Bevestig →","no":"Bekreft →","ga":"Deimhnigh →","ko":"확인 →","cs":"Potvrdit →","lv":"Apstiprināt →","uk":"Підтвердити →","pl":"Potwierdź →","es":"Confirmar →"},
  "ck_request_btn":{"it":"Invia Richiesta →","en":"Send Request →","fr":"Envoyer →","de":"Anfrage senden →","pt":"Enviar →","zh":"发送请求 →","ja":"リクエスト送信 →","ru":"Отправить запрос →","ar":"إرسال →","he":"שלח →","ro":"Trimite →","sq":"Dërgoni →","fil":"Ipadala →","th":"ส่งคำขอ →","nl":"Verstuur →","no":"Send →","ga":"Seol →","ko":"요청 보내기 →","cs":"Odeslat →","lv":"Sūtīt →","uk":"Надіслати →","pl":"Wyślij →","es":"Enviar →"},
  "ck_card_hint":{"it":"Inserisci i dati della carta e clicca Paga.","en":"Enter card details and click Pay.","fr":"Entrez les détails et cliquez Payer.","de":"Kartendaten eingeben und Zahlen klicken.","pt":"Insira os dados e clique Pagar.","zh":"输入卡片信息后点击支付。","ja":"カード情報を入力して支払いをクリック。","ru":"Введите данные карты и нажмите Оплатить.","ar":"أدخل بيانات البطاقة وانقر دفع.","he":"הזן פרטי כרטיס ולחץ שלם.","ro":"Introduceți datele și apăsați Plătește.","sq":"Futni të dhënat dhe klikoni Paguani.","fil":"Ilagay ang card details at i-click Bayad.","th":"ใส่ข้อมูลบัตรและคลิกชำระเงิน","nl":"Kaartgegevens invoeren en Betalen klikken.","no":"Skriv inn kortdetaljer og klikk Betal.","ga":"Cuir isteach sonraí cárta agus cliceáil Íoc.","ko":"카드 정보 입력 후 결제 클릭.","cs":"Zadejte údaje karty a klikněte Zaplatit.","lv":"Ievadiet kartes datus un noklikšķiniet Maksāt.","uk":"Введіть дані картки і натисніть Сплатити.","pl":"Wprowadź dane karty i kliknij Zapłać.","es":"Ingresa datos de tarjeta y haz clic en Pagar."},
  "ck_paying":{"it":"Conferma pagamento...","en":"Confirming payment...","fr":"Confirmation...","de":"Zahlung bestätigen...","pt":"Confirmando...","zh":"确认支付...","ja":"支払い確認中...","ru":"Подтверждение...","ar":"تأكيد الدفع...","he":"מאשר תשלום...","ro":"Confirmare...","sq":"Duke konfirmuar...","fil":"Kinukumpirma...","th":"กำลังยืนยัน...","nl":"Bevestigen...","no":"Bekrefter...","ga":"Ag deimhniú...","ko":"결제 확인 중...","cs":"Potvrzování...","lv":"Apstiprina...","uk":"Підтвердження...","pl":"Potwierdzanie...","es":"Confirmando..."},
  "ck_paid_title":{"it":"Pagamento confermato!","en":"Payment confirmed!","fr":"Paiement confirmé!","de":"Zahlung bestätigt!","pt":"Pagamento confirmado!","zh":"付款已确认！","ja":"支払い確認済み！","ru":"Платёж подтверждён!","ar":"تم تأكيد الدفع!","he":"התשלום אושר!","ro":"Plată confirmată!","sq":"Pagesa konfirmuar!","fil":"Nakumpirma ang bayad!","th":"ยืนยันการชำระเงินแล้ว!","nl":"Betaling bevestigd!","no":"Betaling bekreftet!","ga":"Íocaíocht deimhnithe!","ko":"결제 확인됨!","cs":"Platba potvrzena!","lv":"Maksājums apstiprināts!","uk":"Платіж підтверджено!","pl":"Płatność potwierdzona!","es":"¡Pago confirmado!"},
  "ck_paid_body":{"it":"Pagamento ricevuto. Abbiamo inviato un email di conferma.","en":"Payment received. We sent you a confirmation email.","fr":"Paiement reçu. Email de confirmation envoyé.","de":"Zahlung erhalten. Bestätigungs-E-Mail gesendet.","pt":"Pagamento recebido. Email de confirmação enviado.","zh":"付款已收到。我们已发送确认邮件。","ja":"支払いを受け取りました。確認メールをお送りしました。","ru":"Платёж получен. Подтверждение отправлено.","ar":"تم استلام الدفع. أرسلنا بريدًا للتأكيد.","he":"התשלום התקבל. שלחנו אימייל אישור.","ro":"Plată primită. Email de confirmare trimis.","sq":"Pagesa marrë. Email konfirmimi dërguar.","fil":"Natanggap ang bayad. Nagpadala ng confirmation email.","th":"ได้รับการชำระเงินแล้ว ส่งอีเมลยืนยันแล้ว","nl":"Betaling ontvangen. Bevestigingsemail verzonden.","no":"Betaling mottatt. Bekreftelsese-post sendt.","ga":"Íocaíocht faighte. Ríomhphost deimhnithe seolta.","ko":"결제 완료. 확인 이메일 발송됨.","cs":"Platba přijata. Potvrzovací e-mail odeslán.","lv":"Maksājums saņemts. Apstiprinājuma e-pasts nosūtīts.","uk":"Платіж отримано. Лист підтвердження надіслано.","pl":"Płatność otrzymana. E-mail potwierdzający wysłany.","es":"Pago recibido. Correo de confirmación enviado."},
  "ck_sent_title":{"it":"Richiesta inviata!","en":"Request sent!","fr":"Demande envoyée!","de":"Anfrage gesendet!","pt":"Pedido enviado!","zh":"请求已发送！","ja":"リクエスト送信済み！","ru":"Запрос отправлен!","ar":"تم إرسال الطلب!","he":"הבקשה נשלחה!","ro":"Cerere trimisă!","sq":"Kërkesa dërguar!","fil":"Naipadala ang request!","th":"ส่งคำขอแล้ว!","nl":"Verzoek verzonden!","no":"Forespørsel sendt!","ga":"Iarratas seolta!","ko":"요청 전송됨!","cs":"Žádost odeslána!","lv":"Pieprasījums nosūtīts!","uk":"Запит надіслано!","pl":"Prośba wysłana!","es":"¡Solicitud enviada!"},
  "ck_sent_body":{"it":"La tua richiesta è stata ricevuta. Ti risponderemo entro 2 ore su WhatsApp o email.","en":"Your request has been received. We will reply within 2 hours on WhatsApp or email.","fr":"Votre demande a été reçue. Nous répondrons sous 2 heures.","de":"Anfrage erhalten. Wir antworten innerhalb von 2 Stunden.","pt":"Pedido recebido. Responderemos em 2 horas.","zh":"您的请求已收到。我们将在2小时内回复。","ja":"リクエストを受け取りました。2時間以内に返信します。","ru":"Запрос получен. Ответим в течение 2 часов.","ar":"تم استلام طلبك. سنرد خلال ساعتين.","he":"הבקשה התקבלה. נשיב תוך 2 שעות.","ro":"Cerere primită. Vom răspunde în 2 ore.","sq":"Kërkesa marrë. Do t'ju përgjigjemi brenda 2 orëve.","fil":"Natanggap ang request. Magrereply kami sa loob ng 2 oras.","th":"ได้รับคำขอแล้ว เราจะตอบกลับภายใน 2 ชั่วโมง","nl":"Verzoek ontvangen. We antwoorden binnen 2 uur.","no":"Forespørsel mottatt. Vi svarer innen 2 timer.","ga":"Iarratas faighte. Freagróimid laistigh de 2 uair.","ko":"요청이 접수되었습니다. 2시간 이내에 답변드립니다.","cs":"Žádost přijata. Odpovíme do 2 hodin.","lv":"Pieprasījums saņemts. Atbildēsim 2 stundu laikā.","uk":"Запит отримано. Відповімо протягом 2 годин.","pl":"Prośba otrzymana. Odpowiemy w ciągu 2 godzin.","es":"Solicitud recibida. Responderemos en 2 horas."},
  "ck_pay_now":{"it":"Paga Ora →","en":"Pay Now →","fr":"Payer →","de":"Jetzt zahlen →","pt":"Pagar →","zh":"立即支付 →","ja":"今すぐ支払う →","ru":"Оплатить →","ar":"ادفع الآن →","he":"שלם עכשיו →","ro":"Plătește →","sq":"Paguani →","fil":"Bayad Na →","th":"ชำระเงินเลย →","nl":"Nu betalen →","no":"Betal nå →","ga":"Íoc Anois →","ko":"지금 결제 →","cs":"Zaplatit →","lv":"Maksāt →","uk":"Сплатити →","pl":"Zapłać →","es":"Pagar →"},
  "ct_no_stops":{"it":"Nessuna tappa selezionata","en":"No stops selected","fr":"Aucun arrêt sélectionné","de":"Keine Station gewählt","pt":"Nenhuma parada selecionada","zh":"未选择站点","ja":"停車地未選択","ru":"Остановки не выбраны","ar":"لم يتم اختيار محطات","he":"לא נבחרו עצירות","ro":"Nicio oprire selectată","sq":"Nuk zgjidhet asnjë ndalesë","fil":"Walang napiling hinto","th":"ไม่มีจุดแวะที่เลือก","nl":"Geen haltes geselecteerd","no":"Ingen stopp valgt","ga":"Gan stad roghnaithe","ko":"정류장 미선택","cs":"Žádná zastávka vybrána","lv":"Nav izvēlētas pieturas","uk":"Зупинки не вибрані","pl":"Nie wybrano przystanków","es":"Ninguna parada seleccionada"},
  "ck_sending":{"it":"Invio richiesta...","en":"Sending...","fr":"Envoi...","de":"Senden...","pt":"Enviando...","zh":"发送中...","ja":"送信中...","ru":"Отправка...","ar":"جارٍ الإرسال...","he":"שולח...","ro":"Trimitere...","sq":"Duke dërguar...","fil":"Nagpapadala...","th":"กำลังส่ง...","nl":"Verzenden...","no":"Sender...","ga":"Ag seoladh...","ko":"전송 중...","cs":"Odesílám...","lv":"Sūta...","uk":"Надсилання...","pl":"Wysyłanie...","es":"Enviando..."},
  "ct_request_btn":{"it":"Richiedi Tour Personalizzato →","en":"Request Custom Tour →","fr":"Demander visite →","de":"Individuelle Tour →","pt":"Solicitar Tour →","zh":"请求定制旅游 →","ja":"カスタムツアーを申請 →","ru":"Запросить тур →","ar":"طلب جولة مخصصة →","he":"בקש סיור מותאם →","ro":"Solicită Tur →","sq":"Kërko Tur →","fil":"I-request Custom Tour →","th":"ขอทัวร์แบบกำหนดเอง →","nl":"Aanvragen →","no":"Be om tur →","ga":"Iarraidh turas →","ko":"맞춤 투어 요청 →","cs":"Požádat o prohlídku →","lv":"Pieprasīt tūri →","uk":"Запросити тур →","pl":"Zamów wycieczkę →","es":"Solicitar Tour →"},
  "ck_paypal":{"it":"PayPal","en":"PayPal","fr":"PayPal","de":"PayPal","pt":"PayPal","zh":"PayPal","ja":"PayPal","ru":"PayPal","ar":"PayPal","he":"PayPal","ro":"PayPal","sq":"PayPal","fil":"PayPal","th":"PayPal","nl":"PayPal","no":"PayPal","ga":"PayPal","ko":"PayPal","cs":"PayPal","lv":"PayPal","uk":"PayPal","pl":"PayPal","es":"PayPal"},
  "ck_paypal_note":{"it":"Ti inviamo link PayPal dopo la conferma.","en":"We send you a PayPal link after confirmation.","fr":"Nous vous envoyons un lien PayPal après confirmation.","de":"Wir senden dir einen PayPal-Link nach der Bestätigung.","pt":"Enviamos o link PayPal após confirmação.","zh":"确认后我们发送PayPal链接。","ja":"確認後にPayPalリンクをお送りします。","ru":"Отправим PayPal-ссылку после подтверждения.","ar":"سنرسل رابط PayPal بعد التأكيد.","he":"נשלח לינק PayPal אחרי אישור.","ro":"Trimitem link PayPal după confirmare.","sq":"Dërgojmë link PayPal pas konfirmimit.","fil":"Magpapadala ng PayPal link pagkatapos ng kumpirmasyon.","th":"ส่งลิงก์ PayPal หลังยืนยัน","nl":"We sturen je een PayPal-link na bevestiging.","no":"Vi sender PayPal-lenke etter bekreftelse.","ga":"Seolaimid nasc PayPal tar éis deimhniú.","ko":"확인 후 PayPal 링크를 보내드립니다.","cs":"Po potvrzení zašleme PayPal odkaz.","lv":"Pēc apstiprināšanas nosūtām PayPal saiti.","uk":"Надішлемо PayPal посилання після підтвердження.","pl":"Wyślemy link PayPal po potwierdzeniu.","es":"Enviaremos el link de PayPal tras la confirmación."},
  "ck_req_note":{"it":"Invia senza pagare. Risposta entro 2 ore.<br><strong>Zero impegno · Cancellazione gratuita</strong>","en":"Send without paying. Reply within 2 hours.<br><strong>No commitment · Free cancellation</strong>","fr":"Envoyez sans payer. Réponse sous 2h.<br><strong>Sans engagement · Annulation gratuite</strong>","de":"Senden ohne zu zahlen. Antwort in 2h.<br><strong>Kein Engagement · Kostenlose Stornierung</strong>","pt":"Envie sem pagar. Resposta em 2h.<br><strong>Sem compromisso · Cancelamento gratuito</strong>","zh":"无需付款发送。2小时内回复。<br><strong>零承诺 · 免费取消</strong>","ja":"支払いなしで送信。2時間以内に返信。<br><strong>義務なし · 無料キャンセル</strong>","ru":"Отправьте без оплаты. Ответ за 2ч.<br><strong>Без обязательств · Бесплатная отмена</strong>","ar":"أرسل بدون دفع. رد خلال ساعتين.<br><strong>بدون التزام · إلغاء مجاني</strong>","he":"שלח ללא תשלום. תגובה תוך 2 שעות.<br><strong>ללא התחייבות · ביטול חינם</strong>","ro":"Trimite fără plată. Răspuns în 2 ore.<br><strong>Zero angajament · Anulare gratuită</strong>","sq":"Dërgoni pa paguar. Përgjigje brenda 2 orëve.<br><strong>Zero angazhim · Anulim falas</strong>","fil":"Ipadala nang walang bayad. Tugon sa loob ng 2 oras.<br><strong>Walang commitment · Libreng cancel</strong>","th":"ส่งโดยไม่ต้องจ่าย ตอบภายใน 2 ชม.<br><strong>ไม่ผูกมัด · ยกเลิกฟรี</strong>","nl":"Stuur zonder te betalen. Antwoord binnen 2u.<br><strong>Geen verplichting · Gratis annulering</strong>","no":"Send uten å betale. Svar innen 2t.<br><strong>Ingen forpliktelse · Gratis avbestilling</strong>","ga":"Seol gan íoc. Freagra laistigh de 2u.<br><strong>Gan tiomantas · Cealú saor</strong>","ko":"결제 없이 전송. 2시간 이내 답변.<br><strong>부담 없음 · 무료 취소</strong>","cs":"Pošlete bez platby. Odpověď do 2h.<br><strong>Bez závazku · Zrušení zdarma</strong>","lv":"Sūtiet bez maksas. Atbilde 2h laikā.<br><strong>Bez saistībām · Bezmaksas atcelšana</strong>","uk":"Надіслати без оплати. Відповідь за 2г.<br><strong>Без зобов'язань · Безкоштовне скасування</strong>","pl":"Wyślij bez płacenia. Odpowiedź w 2h.<br><strong>Bez zobowiązań · Bezpłatne anulowanie</strong>","es":"Envía sin pagar. Respuesta en 2h.<br><strong>Sin compromiso · Cancelación gratuita</strong>"},
  "ua_title":{"it":"Area Clienti","en":"Client Area","fr":"Espace Client","de":"Kundenbereich","pt":"Área do Cliente","zh":"客户区域","ja":"クライアントエリア","ru":"Личный кабинет","ar":"منطقة العملاء","he":"אזור לקוחות","ro":"Zona Clienți","sq":"Zona e Klientëve","fil":"Client Area","th":"พื้นที่ลูกค้า","nl":"Klantenzone","no":"Kundeområde","ga":"Limistéar Cliant","ko":"고객 영역","cs":"Oblast klienta","lv":"Klientu zona","uk":"Область клієнта","pl":"Strefa Klienta","es":"Área de Cliente"},
  "ua_subtitle":{"it":"Tour Privati · Roma","en":"Private Tours · Rome","fr":"Visites Privées · Rome","de":"Private Touren · Rom","pt":"Passeios Privados · Roma","zh":"私人旅游 · 罗马","ja":"プライベートツアー · ローマ","ru":"Частные туры · Рим","ar":"جولات خاصة · روما","he":"סיורים פרטיים · רומא","ro":"Tururi Private · Roma","sq":"Turne Private · Romë","fil":"Private Tours · Roma","th":"ทัวร์ส่วนตัว · โรม","nl":"Privé Tours · Rome","no":"Private Turer · Roma","ga":"Turais Príobháideacha · An Róimh","ko":"프라이빗 투어 · 로마","cs":"Soukromé prohlídky · Řím","lv":"Privātās tūres · Roma","uk":"Приватні тури · Рим","pl":"Prywatne wycieczki · Rzym","es":"Tours Privados · Roma"},
  "ua_email":{"it":"Email","en":"Email","fr":"Email","de":"E-Mail","pt":"Email","zh":"邮箱","ja":"メール","ru":"Почта","ar":"البريد الإلكتروني","he":"אימייל","ro":"Email","sq":"Email","fil":"Email","th":"อีเมล","nl":"E-mail","no":"E-post","ga":"Ríomhphost","ko":"이메일","cs":"E-mail","lv":"E-pasts","uk":"Пошта","pl":"E-mail","es":"Email"},
  "ua_password":{"it":"Password","en":"Password","fr":"Mot de passe","de":"Passwort","pt":"Senha","zh":"密码","ja":"パスワード","ru":"Пароль","ar":"كلمة المرور","he":"סיסמה","ro":"Parolă","sq":"Fjalëkalim","fil":"Password","th":"รหัสผ่าน","nl":"Wachtwoord","no":"Passord","ga":"Pasfhocal","ko":"비밀번호","cs":"Heslo","lv":"Parole","uk":"Пароль","pl":"Hasło","es":"Contraseña"},
  "ua_login_btn":{"it":"Accedi","en":"Login","fr":"Connexion","de":"Anmelden","pt":"Entrar","zh":"登录","ja":"ログイン","ru":"Войти","ar":"دخول","he":"כניסה","ro":"Autentificare","sq":"Hyrje","fil":"Login","th":"เข้าสู่ระบบ","nl":"Inloggen","no":"Logg inn","ga":"Logáil isteach","ko":"로그인","cs":"Přihlásit","lv":"Pieslēgties","uk":"Увійти","pl":"Zaloguj","es":"Entrar"},
  "ua_no_account":{"it":"Non hai un account?","en":"Don't have an account?","fr":"Pas de compte?","de":"Kein Konto?","pt":"Não tem conta?","zh":"没有账号？","ja":"アカウントがない？","ru":"Нет аккаунта?","ar":"ليس لديك حساب؟","he":"אין לך חשבון?","ro":"Nu ai cont?","sq":"Nuk keni llogari?","fil":"Wala kang account?","th":"ไม่มีบัญชี?","nl":"Geen account?","no":"Ingen konto?","ga":"Gan cuntas?","ko":"계정이 없나요?","cs":"Nemáte účet?","lv":"Nav konta?","uk":"Немає облікового запису?","pl":"Nie masz konta?","es":"Sin cuenta?"},
  "ua_register_link":{"it":"Registrati","en":"Sign up","fr":"S'inscrire","de":"Registrieren","pt":"Cadastrar","zh":"注册","ja":"登録","ru":"Зарегистрироваться","ar":"تسجيل","he":"הרשמה","ro":"Înregistrare","sq":"Regjistrohu","fil":"Mag-sign up","th":"สมัคร","nl":"Aanmelden","no":"Registrer deg","ga":"Cláraigh","ko":"회원가입","cs":"Registrovat","lv":"Reģistrēties","uk":"Zareєstruvatysya","pl":"Zarejestruj się","es":"Registrarse"},
  "ua_fullname":{"it":"Nome completo","en":"Full name","fr":"Nom complet","de":"Vollständiger Name","pt":"Nome completo","zh":"全名","ja":"氏名","ru":"Полное имя","ar":"الاسم الكامل","he":"שם מלא","ro":"Nume complet","sq":"Emri i plotë","fil":"Buong pangalan","th":"ชื่อเต็ม","nl":"Volledige naam","no":"Fullt navn","ga":"Ainm iomlán","ko":"전체 이름","cs":"Celé jméno","lv":"Pilns vārds","uk":"Повне ім'я","pl":"Pełne imię","es":"Nombre completo"},
  "ua_phone":{"it":"Telefono (opzionale)","en":"Phone (optional)","fr":"Téléphone (optionnel)","de":"Telefon (optional)","pt":"Telefone (opcional)","zh":"电话（可选）","ja":"電話（任意）","ru":"Телефон (необязательно)","ar":"هاتف (اختياري)","he":"טלפון (אופציונלי)","ro":"Telefon (opțional)","sq":"Telefon (opsional)","fil":"Telepono (opsyonal)","th":"โทรศัพท์ (ไม่บังคับ)","nl":"Telefoon (optioneel)","no":"Telefon (valgfritt)","ga":"Teileafón (roghnach)","ko":"전화 (선택사항)","cs":"Telefon (volitelné)","lv":"Tālrunis (neobligāts)","uk":"Телефон (необов'язково)","pl":"Telefon (opcjonalnie)","es":"Teléfono (opcional)"},
  "ua_password_hint":{"it":"Password (min 6 caratteri)","en":"Password (min 6 chars)","fr":"Mot de passe (6 car. min)","de":"Passwort (min. 6 Zeichen)","pt":"Senha (mín. 6 caracteres)","zh":"密码（至少6个字符）","ja":"パスワード（6文字以上）","ru":"Пароль (мин. 6 символов)","ar":"كلمة المرور (6 أحرف)","he":"סיסמה (6 תווים לפחות)","ro":"Parolă (min 6 caractere)","sq":"Fjalëkalim (min 6 karaktere)","fil":"Password (min 6 chars)","th":"รหัสผ่าน (อย่างน้อย 6 ตัว)","nl":"Wachtwoord (min. 6 tekens)","no":"Passord (min 6 tegn)","ga":"Pasfhocal (6 char min)","ko":"비밀번호 (최소 6자)","cs":"Heslo (min. 6 znaků)","lv":"Parole (min. 6 rakstzīmes)","uk":"Пароль (мін. 6 символів)","pl":"Hasło (min. 6 znaków)","es":"Contraseña (mín. 6 caracteres)"},
  "ua_invite":{"it":"Codice invito (opzionale)","en":"Invite code (optional)","fr":"Code invitation (optionnel)","de":"Einladungscode (optional)","pt":"Código convite (opcional)","zh":"邀请码（可选）","ja":"招待コード（任意）","ru":"Код приглашения (необязательно)","ar":"رمز الدعوة (اختياري)","he":"קוד הזמנה (אופציונלי)","ro":"Cod invitație (opțional)","sq":"Kodi i ftesës (opsional)","fil":"Invite code (opsyonal)","th":"รหัสเชิญ (ไม่บังคับ)","nl":"Uitnodigingscode (optioneel)","no":"Invitasjonskode (valgfritt)","ga":"Cód cuiridh (roghnach)","ko":"초대 코드 (선택사항)","cs":"Kód pozvánky (volitelné)","lv":"Ielūguma kods (neobligāts)","uk":"Код запрошення (необов'язково)","pl":"Kod zaproszenia (opcjonalnie)","es":"Código de invitación (opcional)"},
  "ua_register_btn":{"it":"Registrati →","en":"Sign up →","fr":"S'inscrire →","de":"Registrieren →","pt":"Cadastrar →","zh":"注册 →","ja":"登録 →","ru":"Зарегистрироваться →","ar":"تسجيل →","he":"הרשמה →","ro":"Înregistrare →","sq":"Regjistrohu →","fil":"Mag-sign up →","th":"สมัคร →","nl":"Aanmelden →","no":"Registrer deg →","ga":"Cláraigh →","ko":"회원가입 →","cs":"Registrovat →","lv":"Reģistrēties →","uk":"Zareєstruvatysya →","pl":"Zarejestruj się →","es":"Registrarse →"},
  "ua_have_account":{"it":"Hai già un account?","en":"Already have an account?","fr":"Déjà un compte?","de":"Schon ein Konto?","pt":"Já tem conta?","zh":"已有账号？","ja":"すでにアカウントがある？","ru":"Уже есть аккаунт?","ar":"لديك حساب بالفعل؟","he":"כבר יש לך חשבון?","ro":"Ai deja cont?","sq":"Keni tashmë llogari?","fil":"Mayroon ka nang account?","th":"มีบัญชีแล้ว?","nl":"Al een account?","no":"Har allerede konto?","ga":"Cuntas agat cheana?","ko":"이미 계정이 있나요?","cs":"Máte již účet?","lv":"Jau ir konts?","uk":"Вже є обліковий запис?","pl":"Masz już konto?","es":"Ya tienes cuenta?"},
  "ua_login_link":{"it":"Accedi","en":"Login","fr":"Connexion","de":"Anmelden","pt":"Entrar","zh":"登录","ja":"ログイン","ru":"Войти","ar":"دخول","he":"כניסה","ro":"Autentificare","sq":"Hyrje","fil":"Login","th":"เข้าสู่ระบบ","nl":"Inloggen","no":"Logg inn","ga":"Logáil isteach","ko":"로그인","cs":"Přihlásit","lv":"Pieslēgties","uk":"Увійти","pl":"Zaloguj","es":"Entrar"},
  "ua_verify_btn":{"it":"Verifica →","en":"Verify →","fr":"Vérifier →","de":"Verifizieren →","pt":"Verificar →","zh":"验证 →","ja":"確認 →","ru":"Подтвердить →","ar":"تحقق →","he":"אימות →","ro":"Verifică →","sq":"Verifiko →","fil":"I-verify →","th":"ยืนยัน →","nl":"Verifiëren →","no":"Bekreft →","ga":"Deimhnigh →","ko":"확인 →","cs":"Ověřit →","lv":"Verificēt →","uk":"Підтвердити →","pl":"Weryfikuj →","es":"Verificar →"},
  "ua_resend":{"it":"Non hai ricevuto l'email? Reinvia codice","en":"Did not receive the email? Resend code","fr":"Pas reçu l'e-mail? Renvoyer le code","de":"E-Mail nicht erhalten? Code erneut senden","pt":"Nao recebeu o e-mail? Reenviar código","zh":"没收到邮件？重新发送验证码","ja":"メールが届かない？コードを再送","ru":"Не получили письмо? Отправить код повторно","ar":"لم تستلم البريد؟ أعد إرسال الرمز","he":"לא קיבלתם? שלח קוד שוב","ro":"N-ai primit email-ul? Retrimite codul","sq":"Nuk morët emailin? Dërgoni kodin përsëri","fil":"Hindi natanggap? I-resend code","th":"ไม่ได้รับอีเมล? ส่งรหัสอีกครั้ง","nl":"E-mail niet ontvangen? Code opnieuw sturen","no":"Ikke mottatt e-post? Send kode på nytt","ga":"Gan an ríomhphost? Seol cód arís","ko":"이메일 못 받으셨나요? 코드 재전송","cs":"E-mail nedorazil? Odeslat kód znovu","lv":"Nesaņēmāt e-pastu? Sūtīt kodu vēlreiz","uk":"Не отримали листа? Надіслати код знову","pl":"Nie dostałeś maila? Wyślij kod ponownie","es":"No recibiste el email? Reenviar código"},
  "ua_back_login":{"it":"← Torna al login","en":"← Back to login","fr":"← Retour connexion","de":"← Zurück zum Login","pt":"← Voltar ao login","zh":"← 返回登录","ja":"← ログインに戻る","ru":"← Назад к входу","ar":"← العودة لتسجيل الدخول","he":"← חזרה להתחברות","ro":"← Înapoi la login","sq":"← Kthehuni te hyrja","fil":"← Bumalik sa login","th":"← กลับไปล็อกอิน","nl":"← Terug naar login","no":"← Tilbake til innlogging","ga":"← Ar ais chuig logáil isteach","ko":"← 로그인으로 돌아가기","cs":"← Zpět na přihlášení","lv":"← Atpakaļ uz pieslēgšanos","uk":"← Назад до входу","pl":"← Wróć do logowania","es":"← Volver al login"},
  "ua_my_area":{"it":"La mia Area Clienti →","en":"My Client Area →","fr":"Mon Espace Client →","de":"Mein Kundenbereich →","pt":"Minha Área →","zh":"我的客户区 →","ja":"マイエリア →","ru":"Мой кабинет →","ar":"منطقتي →","he":"האזור שלי →","ro":"Zona mea →","sq":"Zona ime →","fil":"Ang aking Area →","th":"พื้นที่ของฉัน →","nl":"Mijn zone →","no":"Mitt område →","ga":"Mo Limistéar →","ko":"내 영역 →","cs":"Moje oblast →","lv":"Mana zona →","uk":"Моя область →","pl":"Moja strefa →","es":"Mi Área →"},
  "ua_logout":{"it":"Disconnetti","en":"Logout","fr":"Déconnexion","de":"Abmelden","pt":"Sair","zh":"退出","ja":"ログアウト","ru":"Выйти","ar":"تسجيل الخروج","he":"התנתק","ro":"Deconectare","sq":"Dilni","fil":"Mag-logout","th":"ออกจากระบบ","nl":"Uitloggen","no":"Logg ut","ga":"Logáil amach","ko":"로그아웃","cs":"Odhlásit","lv":"Iziet","uk":"Вийти","pl":"Wyloguj","es":"Cerrar sesión"},
  "ck_pr_tour":{"it":"Tour","en":"Tour","fr":"Visite","de":"Tour","pt":"Passeio","zh":"旅游","ja":"ツアー","ru":"Тур","ar":"جولة","he":"סיור","ro":"Tur","sq":"Tur","fil":"Tour","th":"ทัวร์","nl":"Tour","no":"Tur","ga":"Turas","ko":"투어","cs":"Prohlídka","lv":"Tūre","uk":"Тур","pl":"Wycieczka","es":"Tour"},
  "ck_pr_people":{"it":"Persone","en":"People","fr":"Personnes","de":"Personen","pt":"Pessoas","zh":"人数","ja":"人数","ru":"Человек","ar":"أشخاص","he":"אנשים","ro":"Persoane","sq":"Persona","fil":"Tao","th":"คน","nl":"Personen","no":"Personer","ga":"Daoine","ko":"인원","cs":"Osoby","lv":"Cilvēki","uk":"Осіб","pl":"Osoby","es":"Personas"},
  "ck_whatsapp":{"it":"WhatsApp","en":"WhatsApp","fr":"WhatsApp","de":"WhatsApp","pt":"WhatsApp","zh":"WhatsApp","ja":"WhatsApp","ru":"WhatsApp","ar":"واتساب","he":"וואטסאפ","ro":"WhatsApp","sq":"WhatsApp","fil":"WhatsApp","th":"WhatsApp","nl":"WhatsApp","no":"WhatsApp","ga":"WhatsApp","ko":"WhatsApp","cs":"WhatsApp","lv":"WhatsApp","uk":"WhatsApp","pl":"WhatsApp","es":"WhatsApp"}};

// Default site language is English: first-time visitors always see English
// (browser language is ignored); a previously saved choice is respected.
let curLang = localStorage.getItem('aura_lang') || 'en';
if (!I18N.nav_home[curLang]) curLang = 'en';

function setLang(lang) {
  if (!I18N.nav_home[lang]) lang = 'en';
  curLang = lang;
  localStorage.setItem('aura_lang', lang);
  const _t=(k,fb)=> (I18N[k] && (I18N[k][lang] || I18N[k].en)) || fb;

  // html lang/dir
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang==='ar'||lang==='he') ? 'rtl' : 'ltr';

  // Update data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[key]) el.textContent = _t(key, el.textContent);
  });
  // Update data-i18n-html elements (contain <em> etc)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (I18N[key]) el.innerHTML = _t(key, el.innerHTML);
  });

  // Update flag selectors
  document.querySelectorAll('.nav-lang button, .mob-lang button').forEach(btn => {
    btn.classList.toggle('lang-on', btn.getAttribute('onclick')?.includes("'" + lang + "'"));
  });

  // Chatbot language sync (site language wins, but falls back to EN if option missing)
  const sel=document.getElementById('clng');
  if(sel){
    const ok=[...sel.options].some(o=>o.value===lang);
    sel.value = ok ? lang : 'en';
  }
  if(typeof cLang!=='undefined') cLang = (sel && sel.value) ? sel.value : lang;

  // Checkout placeholders
  const np=document.getElementById('ck-nt'); if(np) np.placeholder=_t('ck_notes_ph',np.placeholder||'');
  const np2=document.getElementById('ct-nt'); if(np2) np2.placeholder=_t('ck_notes_ph',np2.placeholder||'');
  // Translate select options
  document.querySelectorAll('select option[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(I18N[k]) el.textContent=_t(k,el.textContent);
  });

  // Checkout secure note
  const sn=document.querySelector('.ck-secure-note'); 
  if(sn){
    const txt=sn.lastChild;
    if(txt&&txt.nodeType===3) txt.textContent=' '+_t('ck_secure','');
  }

  // Chatbot UI
  const ci=document.getElementById('cbot-inp'); if(ci) ci.placeholder=_t('chat_placeholder','Scrivi un messaggio...');
  const cs=document.getElementById('cbot-st'); if(cs) cs.textContent=_t('chat_online','Online');

  // Re-render dynamic content (language-aware)
  if(typeof renderTours==='function') renderTours();
  if(typeof renderEss==='function') renderEss();
  if(typeof renderComm==='function') renderComm();
  if(typeof renderFAQ==='function') renderFAQ();
  if(typeof renderRevs==='function') renderRevs();
  if(typeof renderBlog==='function') renderBlog();

  // Extras + checkout texts
  if(typeof applyCheckoutExtras==='function') applyCheckoutExtras();
  if(typeof refreshCheckoutLang==='function') refreshCheckoutLang();

  // Nav login button
  (function(){
    var loginTxt=(I18N.nav_login&&I18N.nav_login[lang])||'Login';
    var allVals=Object.values(I18N.nav_login||{});
    ['nav-user-txt','nav-user-mob-txt'].forEach(function(id){
      var el=document.getElementById(id);
      if(el&&(allVals.indexOf(el.textContent)>=0||el.textContent==='Accedi'))el.textContent=loginTxt;
    });
  })();
  if(typeof applyCheckoutExtras==='function') applyCheckoutExtras();
  if(typeof renderCkPax==='function') renderCkPax();
  if(typeof refreshCheckoutLang==='function') refreshCheckoutLang();
  // Refresh chatbot suggestions and welcome text
  if(typeof cRSugg==='function') cRSugg();
  // Update chatbot language var so welcome message uses correct lang
  if(typeof cLang!=='undefined'&&typeof CWELC!=='undefined'){
    // If chat was never opened, update the welcome so next open uses new lang
    if(typeof cOpen!=='undefined'&&!cOpen&&typeof cHist!=='undefined'&&cHist.length===0){
      // cLang already updated above — nothing needed, CWELC[cLang] will be read on open
    }
  }

  // Hero CTA button (some are not data-i18n)
  const hcta=document.querySelector('.s0-ctas .btn-g span'); if(hcta) hcta.textContent=_t('hero_cta',hcta.textContent||'');
  const bcta=document.querySelector('#s2 .btn-g span'); if(bcta) bcta.textContent=_t('s_book',bcta.textContent||'');
  const ccta=document.querySelector('.s3-cta-btns .btn-dk'); if(ccta) ccta.textContent=_t('c_cta_b',ccta.textContent||'');
  document.querySelectorAll('.s3-cv').forEach(el=>{el.textContent=_t('book_label',el.textContent);});
}

const BE  = 'https://back-end-production-8a61.up.railway.app';
const SPK = 'pk_live_51TAyh0DA0G6rBB5Atjc7xAsOsriLimaORjEOlJuLQ3Wp74HkPUTH2qsiwRiQv5wWyXNIBP3uYHOFoAViMpfNzCmu00LtgxRI5x';
const IMG = {
  cart:'https://i.imgur.com/Z23qkxH.jpeg',night:'https://i.imgur.com/b9kBUD3.jpeg',
  pano:'https://i.imgur.com/aMHBLdn.jpeg',side:'https://i.imgur.com/B9Jb7Yv.jpeg',
  guide:'https://i.imgur.com/5D4YS6H.jpeg',grp2:'https://i.imgur.com/gknCqjF.jpeg',
  land:'https://i.imgur.com/q6NEtJz.jpeg',couple:'https://i.imgur.com/m3Y7Kxe.jpeg',
  grp:'https://i.imgur.com/U83rWQd.jpeg',col:'https://i.imgur.com/mpBAEYf.jpeg',
  sun:'https://i.imgur.com/RhziAa1.jpeg',lux:'https://i.imgur.com/Ikl9TEx.jpeg',
};
let TOURS=[
  {id:'grande_bellezza',name:'La Grande Bellezza',tagline:'2h30 tra i gioielli del centro storico',sub:'2h30 · 1–3 pers €230 · 4 pers €280 · 5–7 pers €370',pr:230,img:IMG.land,avail:'Disponibile',feat:false,fe:['Centro storico UNESCO','Piazze iconiche','Ritmo elegante','Ideale per chi ha poco tempo'],tappe:['colosseo','fori','venezia','pantheon','p_navona','trevi']},
  {id:'roma_night',name:'Roma by Night',tagline:'Roma al tramonto e di notte — magia pura',sub:'2–2h30 · 1–3 pers €250 · 4 pers €300 · 5–7 pers €390',pr:250,img:IMG.night,avail:'Disponibile',feat:false,fe:['Atmosfera notturna','Fontana di Trevi illuminata','Piazza Navona di sera','Foto pazzesche'],tappe:['trevi','p_navona','pantheon','spagna','venezia']},
  {id:'full_roma',name:'Full Roma Experience',tagline:"L'esperienza completa — il meglio di Roma",sub:'~3h · 10 tappe · 1–3 pers €250 · 4 pers €300 · 5–7 pers €390',pr:250,img:IMG.col,avail:'Disponibile',feat:true,fe:['Percorso personalizzabile','10 tappe incluse','Sosta caffè storico','Il meglio di Roma'],tappe:['colosseo','fori','venezia','pantheon','p_navona','trevi','spagna','trastevere','gianicolo','aventino']},
  {id:'shooting',name:'Shooting Tour',tagline:'Il tour fotografico — Roma come non la vedi mai',sub:'Tour + Fotografo · prezzo su richiesta',pr:null,img:IMG.couple,avail:'Su richiesta',feat:false,fe:['Fotografo professionista','100+ scatti editati','Percorso scenografico','Su richiesta'],tappe:['colosseo','spagna','trastevere','gianicolo','aventino']},
  {id:'fiat500',name:'Fiat 500 Tour',tagline:"L'icona italiana per le strade di Roma",sub:'Su richiesta',pr:null,img:IMG.sun,avail:'Su richiesta',feat:false,fe:['Fiat 500 vintage','Percorso panoramico','Foto incluse','Su richiesta'],tappe:[]},
  {id:'custom',name:'Tour Su Misura',tagline:'Componi il tuo tour tappa per tappa',sub:'Base come Full Roma (10 tappe) + €19,50 per ogni tappa extra',pr:250,img:IMG.guide,avail:'Personalizzabile',feat:false,fe:['10 tappe incluse','Extra: €19,50/tappa','Itinerario su richiesta','Adatto a tutte le età'],tappe:[]},
];
/* ─────────────────────────────────────────────
   L10N HELPERS (Tours, Features, Stops)
───────────────────────────────────────────── */
const TOUR_I18N_MAP={
  'grande_bellezza':{name:'tour_grande_bellezza',tag:'tour_grande_tag'},
  'roma_night':{name:'tour_roma_night',tag:'tour_night_tag'},
  'full_roma':{name:'tour_full',tag:'tour_full_tag'},
  'shooting':{name:'tour_shooting',tag:'tour_shooting_tag'},
  'fiat500':{name:'tour_fiat',tag:'tour_fiat_tag'},
  'custom':{name:'t_custom_n',tag:'tour_custom_sub'},
};
function _t(k,fb){
  return (I18N[k] && (I18N[k][curLang] || I18N[k].en)) || fb;
}
function tTourName(t){
  const m=TOUR_I18N_MAP[t.id]||{};
  return m.name ? _t(m.name,t.name) : t.name;
}
function tTourTag(t){
  const m=TOUR_I18N_MAP[t.id]||{};
  return m.tag ? _t(m.tag,t.tagline) : t.tagline;
}

const FEAT_TR = {
  "Centro storico UNESCO": {en:"UNESCO historic centre",fr:"Centre historique UNESCO",de:"UNESCO‑Altstadt",es:"Centro histórico UNESCO",pt:"Centro histórico UNESCO"},
  "Piazze iconiche": {en:"Iconic squares",fr:"Places emblématiques",de:"Ikonische Plätze",es:"Plazas icónicas",pt:"Praças icônicas"},
  "Ritmo elegante": {en:"Elegant pace",fr:"Rythme élégant",de:"Elegantes Tempo",es:"Ritmo elegante",pt:"Ritmo elegante"},
  "Ideale per chi ha poco tempo": {en:"Ideal if you're short on time",fr:"Idéal si vous manquez de temps",de:"Ideal bei wenig Zeit",es:"Ideal si tienes poco tiempo",pt:"Ideal se você tem pouco tempo"},
  "Atmosfera notturna": {en:"Night-time atmosphere",fr:"Ambiance nocturne",de:"Nächtliche Atmosphäre",es:"Ambiente nocturno",pt:"Clima noturno"},
  "Fontana di Trevi illuminata": {en:"Trevi Fountain at night",fr:"Fontaine de Trevi la nuit",de:"Trevi‑Brunnen bei Nacht",es:"Fontana de Trevi de noche",pt:"Fontana di Trevi à noite"},
  "Piazza Navona di sera": {en:"Piazza Navona in the evening",fr:"Piazza Navona le soir",de:"Piazza Navona am Abend",es:"Piazza Navona por la noche",pt:"Piazza Navona à noite"},
  "Sosta caffè storico": {en:"Historic café stop",fr:"Pause café historique",de:"Stopp im Traditionscafé",es:"Parada en café histórico",pt:"Parada em café histórico"},
  "Il meglio di Roma": {en:"Rome highlights",fr:"Incontournables de Rome",de:"Die Highlights Roms",es:"Lo mejor de Roma",pt:"O melhor de Roma"},
  "Percorso personalizzabile": {en:"Customisable route",fr:"Parcours personnalisable",de:"Anpassbare Route",es:"Ruta personalizable",pt:"Rota personalizável"},
  "Percorso panoramico": {en:"Scenic route",fr:"Parcours panoramique",de:"Panoramastrecke",es:"Ruta panorámica",pt:"Rota panorâmica"},
  "Percorso scenografico": {en:"Cinematic route",fr:"Parcours cinématographique",de:"Filmreife Route",es:"Ruta escénica",pt:"Rota cinematográfica"},
  "Foto incluse": {en:"Photos included",fr:"Photos incluses",de:"Fotos inklusive",es:"Fotos incluidas",pt:"Fotos incluídas"},
  "Foto pazzesche": {en:"Stunning photos",fr:"Photos incroyables",de:"Atemberaubende Fotos",es:"Fotos increíbles",pt:"Fotos incríveis"},
  "Fotografo professionista": {en:"Professional photographer",fr:"Photographe professionnel",de:"Profi‑Fotograf",es:"Fotógrafo profesional",pt:"Fotógrafo profissional"},
  "100+ scatti editati": {en:"100+ edited shots",fr:"100+ photos retouchées",de:"100+ bearbeitete Fotos",es:"100+ fotos editadas",pt:"100+ fotos editadas"},
  "Fiat 500 vintage": {en:"Vintage Fiat 500",fr:"Fiat 500 vintage",de:"Vintage Fiat 500",es:"Fiat 500 vintage",pt:"Fiat 500 vintage"},
  "Su richiesta": {en:"On request",fr:"Sur demande",de:"Auf Anfrage",es:"Bajo petición",pt:"Sob pedido"},
  "Itinerario su richiesta": {en:"Itinerary on request",fr:"Itinéraire sur demande",de:"Route auf Anfrage",es:"Itinerario bajo petición",pt:"Roteiro sob pedido"},
  "Adatto a tutte le età": {en:"Suitable for all ages",fr:"Adapté à tous les âges",de:"Für alle Altersgruppen",es:"Apto para todas las edades",pt:"Adequado para todas as idades"},
  "10 tappe incluse": {en:"10 stops included",fr:"10 arrêts inclus",de:"10 Stopps inklusive",es:"10 paradas incluidas",pt:"10 paradas incluídas"},
  "Extra: €19,50/tappa": {en:"Extra: €19.50/stop",fr:"Supplément : €19,50/arrêt",de:"Extra: €19,50/Stopp",es:"Extra: €19,50/parada",pt:"Extra: €19,50/parada"}
};
function tFeat(f){
  if(typeof f!=='string') return String(f||'');
  const tr=FEAT_TR[f];
  if(!tr) return f;
  return tr[curLang] || tr.en || f;
}

const CAT_TR = {
  "Classici": {en:"Classics",fr:"Classiques",de:"Klassiker",es:"Clásicos",pt:"Clássicos"},
  "Vaticano": {en:"Vatican",fr:"Vatican",de:"Vatikan",es:"Vaticano",pt:"Vaticano"},
  "Nascosta": {en:"Hidden gems",fr:"Secrets",de:"Versteckt",es:"Secretos",pt:"Segredos"},
  "Dark Side": {en:"Dark side",fr:"Côté sombre",de:"Schattenseite",es:"Lado oscuro",pt:"Lado sombrio"},
  "Panorami": {en:"Views",fr:"Panoramas",de:"Panoramen",es:"Panoramas",pt:"Panoramas"}
};
const STOP_L10N = {
  en:{
    colosseo:{name:"Colosseum",desc:"Rome’s iconic amphitheatre — gladiators and legends."},
    fori:{name:"Imperial Forums",desc:"The heart of ancient power, politics and empire."},
    circo_massimo:{name:"Circus Maximus",desc:"Chariot races and roaring crowds — a vast arena."},
    pantheon:{name:"Pantheon",desc:"A masterpiece dome with the famous oculus of light."},
    p_navona:{name:"Piazza Navona",desc:"Baroque Rome at its best: fountains, art, atmosphere."},
    trevi:{name:"Trevi Fountain",desc:"Make a wish — the most famous fountain in Rome."},
    spagna:{name:"Spanish Steps",desc:"Elegant steps, shopping streets and Roman glamour."},
    venezia:{name:"Piazza Venezia",desc:"The monumental Altare della Patria and central hub."},
    san_pietro:{name:"St. Peter’s",desc:"Vatican grandeur and Michelangelo’s dome."},
    castel_angelo:{name:"Castel Sant’Angelo",desc:"A fortress with a bridge and sweeping views."},
    via_giulia:{name:"Via Giulia",desc:"A refined Renaissance street, quiet and cinematic."},
    aventino:{name:"Orange Garden",desc:"A peaceful terrace with one of Rome’s best views."},
    buco:{name:"Keyhole View",desc:"A tiny keyhole framing a perfect Vatican view."},
    ghetto:{name:"Jewish Ghetto",desc:"History, culture and unforgettable food streets."},
    trastevere:{name:"Trastevere",desc:"Rome’s most charming district — lively and authentic."},
    gianicolo:{name:"Janiculum Hill",desc:"The city’s balcony — panoramic, romantic, iconic."},
    isola:{name:"Tiber Island",desc:"A small island with ancient legends and calm vibes."},
    campo_fiori:{name:"Campo de’ Fiori",desc:"Market by day, nightlife by night — full of energy."},
    cappuccini:{name:"Capuchin Crypt",desc:"A haunting, artistic memento mori made of bones."},
    san_clemente:{name:"San Clemente",desc:"Three layers of history stacked beneath one church."},
    argentina:{name:"Largo Argentina",desc:"Caesar’s final steps — and Rome’s famous cats."},
    pasquino:{name:"Pasquino Statue",desc:"The city’s original ‘social wall’ of satire."},
    campidoglio:{name:"Capitoline Hill",desc:"Michelangelo’s square with views over the Forums."},
    p_sisto:{name:"Ponte Sisto",desc:"A photogenic bridge linking the best evening strolls."}
  },
  fr:{
    colosseo:{name:"Colisée",desc:"L’amphithéâtre iconique — gladiateurs et légendes."},
    fori:{name:"Forums impériaux",desc:"Le centre du pouvoir antique, politique et empire."},
    circo_massimo:{name:"Cirque Maxime",desc:"Courses de chars et foule immense — une arène géante."},
    pantheon:{name:"Panthéon",desc:"Dôme parfait et oculus célèbre, lumière magique."},
    p_navona:{name:"Piazza Navona",desc:"Le baroque à Rome : fontaines, art, ambiance."},
    trevi:{name:"Fontaine de Trevi",desc:"Faites un vœu — la fontaine la plus célèbre de Rome."},
    spagna:{name:"Place d’Espagne",desc:"Escalier, boutiques et glamour romain."},
    venezia:{name:"Piazza Venezia",desc:"Altare della Patria monumental, cœur de la ville."},
    san_pietro:{name:"Saint‑Pierre",desc:"Grandeur du Vatican et dôme de Michel‑Ange."},
    castel_angelo:{name:"Château Saint‑Ange",desc:"Forteresse, pont et vues panoramiques."},
    via_giulia:{name:"Via Giulia",desc:"Rue Renaissance élégante, calme et cinématographique."},
    aventino:{name:"Jardin des Orangers",desc:"Terrasse paisible avec une des plus belles vues."},
    buco:{name:"Trou de serrure",desc:"Un minuscule trou cadrant parfaitement le Vatican."},
    ghetto:{name:"Ghetto juif",desc:"Histoire, culture et rues gourmandes."},
    trastevere:{name:"Trastevere",desc:"Le quartier le plus charmant — vivant et authentique."},
    gianicolo:{name:"Janicule",desc:"Le balcon de Rome — panorama romantique."},
    isola:{name:"Île Tibérine",desc:"Petite île pleine de légendes et de calme."},
    campo_fiori:{name:"Campo de’ Fiori",desc:"Marché le jour, vie nocturne le soir."},
    cappuccini:{name:"Crypte des Capucins",desc:"Memento mori saisissant, art et silence."},
    san_clemente:{name:"San Clemente",desc:"Trois couches d’histoire sous une seule basilique."},
    argentina:{name:"Largo Argentina",desc:"Les derniers pas de César — et les chats de Rome."},
    pasquino:{name:"Statue de Pasquino",desc:"Le premier ‘mur social’ satirique de la ville."},
    campidoglio:{name:"Capitole",desc:"Place de Michel‑Ange avec vue sur les Forums."},
    p_sisto:{name:"Ponte Sisto",desc:"Pont photogénique pour les balades du soir."}
  },
  de:{
    colosseo:{name:"Kolosseum",desc:"Roms ikonisches Amphitheater — Gladiatoren und Legenden."},
    fori:{name:"Kaiserforen",desc:"Das Zentrum antiker Macht, Politik und Imperium."},
    circo_massimo:{name:"Circus Maximus",desc:"Wagenrennen und riesige Tribünen — gewaltige Arena."},
    pantheon:{name:"Pantheon",desc:"Perfekte Kuppel mit dem berühmten Licht‑Oculus."},
    p_navona:{name:"Piazza Navona",desc:"Barockes Rom: Brunnen, Kunst und Atmosphäre."},
    trevi:{name:"Trevi‑Brunnen",desc:"Wünsch dir was — der berühmteste Brunnen Roms."},
    spagna:{name:"Spanische Treppe",desc:"Elegante Stufen, Shopping und römischer Glamour."},
    venezia:{name:"Piazza Venezia",desc:"Monumental, zentral — Altare della Patria."},
    san_pietro:{name:"Petersdom",desc:"Vatikan‑Größe und Michelangelos Kuppel."},
    castel_angelo:{name:"Engelsburg",desc:"Festung mit Brücke und starken Aussichten."},
    via_giulia:{name:"Via Giulia",desc:"Renaissance‑Straße: ruhig, elegant, filmreif."},
    aventino:{name:"Orangengarten",desc:"Ruhige Terrasse mit Top‑Panorama."},
    buco:{name:"Schlüsselloch‑Blick",desc:"Ein Schlüsselloch mit perfektem Vatikan‑Bild."},
    ghetto:{name:"Jüdisches Ghetto",desc:"Geschichte, Kultur und großartige Food‑Gassen."},
    trastevere:{name:"Trastevere",desc:"Das charmanteste Viertel — lebendig, authentisch."},
    gianicolo:{name:"Gianicolo",desc:"Der Balkon der Stadt — romantisches Panorama."},
    isola:{name:"Tiberinsel",desc:"Kleine Insel mit Legenden und Ruhe."},
    campo_fiori:{name:"Campo de’ Fiori",desc:"Markt am Tag, Nightlife am Abend."},
    cappuccini:{name:"Kapuzinergruft",desc:"Beeindruckendes Memento mori — still und kunstvoll."},
    san_clemente:{name:"San Clemente",desc:"Drei Zeitebenen unter einer Kirche."},
    argentina:{name:"Largo Argentina",desc:"Caesars letzte Schritte — und Roms Katzen."},
    pasquino:{name:"Pasquino‑Statue",desc:"Roms originale ‘Social Wall’ der Satire."},
    campidoglio:{name:"Kapitolsplatz",desc:"Michelangelos Platz mit Blick auf die Foren."},
    p_sisto:{name:"Ponte Sisto",desc:"Fotogener Steg für den Abendspaziergang."}
  },
  es:{
    colosseo:{name:"Coliseo",desc:"El anfiteatro icónico — gladiadores e historia."},
    fori:{name:"Foros Imperiales",desc:"El corazón del poder antiguo, política e imperio."},
    circo_massimo:{name:"Circo Máximo",desc:"Carreras de cuadrigas y gradas enormes."},
    pantheon:{name:"Panteón",desc:"Cúpula perfecta y óculo de luz impresionante."},
    p_navona:{name:"Piazza Navona",desc:"Barroco puro: fuentes, arte y ambiente."},
    trevi:{name:"Fontana di Trevi",desc:"Pide un deseo — la fuente más famosa de Roma."},
    spagna:{name:"Plaza de España",desc:"Escalinata, compras y glamour romano."},
    venezia:{name:"Piazza Venezia",desc:"Altare della Patria monumental, centro neurálgico."},
    san_pietro:{name:"San Pedro",desc:"Grandeza vaticana y cúpula de Miguel Ángel."},
    castel_angelo:{name:"Castel Sant’Angelo",desc:"Fortaleza con puente y vistas increíbles."},
    via_giulia:{name:"Via Giulia",desc:"Calle renacentista elegante, tranquila y fotogénica."},
    aventino:{name:"Jardín de los Naranjos",desc:"Terraza tranquila con una de las mejores vistas."},
    buco:{name:"Ojo de la cerradura",desc:"Un pequeño ojo que enmarca perfecto el Vaticano."},
    ghetto:{name:"Gueto Judío",desc:"Historia, cultura y calles con gran comida."},
    trastevere:{name:"Trastevere",desc:"Barrio más encantador — vivo y auténtico."},
    gianicolo:{name:"Gianicolo",desc:"El balcón de Roma — panorámica romántica."},
    isola:{name:"Isla Tiberina",desc:"Pequeña isla llena de leyendas y calma."},
    campo_fiori:{name:"Campo de’ Fiori",desc:"Mercado de día, vida nocturna de noche."},
    cappuccini:{name:"Cripta de los Capuchinos",desc:"Memento mori impactante, arte y silencio."},
    san_clemente:{name:"San Clemente",desc:"Tres capas de historia bajo una basílica."},
    argentina:{name:"Largo Argentina",desc:"Los últimos pasos de César — y los gatos."},
    pasquino:{name:"Estatua de Pasquino",desc:"El primer ‘muro social’ satírico de la ciudad."},
    campidoglio:{name:"Campidoglio",desc:"Plaza de Miguel Ángel con vistas a los Foros."},
    p_sisto:{name:"Ponte Sisto",desc:"Puente fotogénico para paseos al atardecer."}
  },
  pt:{
    colosseo:{name:"Coliseu",desc:"O anfiteatro icônico — gladiadores e história."},
    fori:{name:"Fóruns Imperiais",desc:"O coração do poder antigo, política e império."},
    circo_massimo:{name:"Circo Máximo",desc:"Corridas de bigas e arquibancadas enormes."},
    pantheon:{name:"Panteão",desc:"Cúpula perfeita e óculo de luz impressionante."},
    p_navona:{name:"Piazza Navona",desc:"Barroco puro: fontes, arte e atmosfera."},
    trevi:{name:"Fontana di Trevi",desc:"Faça um pedido — a fonte mais famosa de Roma."},
    spagna:{name:"Piazza di Spagna",desc:"Escadaria, compras e glamour romano."},
    venezia:{name:"Piazza Venezia",desc:"Altare della Patria monumental, centro da cidade."},
    san_pietro:{name:"São Pedro",desc:"Grandeza do Vaticano e cúpula de Michelangelo."},
    castel_angelo:{name:"Castel Sant’Angelo",desc:"Fortaleza com ponte e vistas incríveis."},
    via_giulia:{name:"Via Giulia",desc:"Rua renascentista elegante, calma e fotogênica."},
    aventino:{name:"Jardim das Laranjeiras",desc:"Terraço tranquilo com uma das melhores vistas."},
    buco:{name:"Fechadura",desc:"Uma pequena fechadura emoldurando o Vaticano."},
    ghetto:{name:"Gueto Judeu",desc:"História, cultura e ruas com ótima comida."},
    trastevere:{name:"Trastevere",desc:"Bairro mais charmoso — vivo e autêntico."},
    gianicolo:{name:"Gianicolo",desc:"A varanda de Roma — panorama romântico."},
    isola:{name:"Ilha Tiberina",desc:"Pequena ilha cheia de lendas e calma."},
    campo_fiori:{name:"Campo de’ Fiori",desc:"Mercado de dia, vida noturna à noite."},
    cappuccini:{name:"Cripta dos Capuchinhos",desc:"Memento mori marcante, arte e silêncio."},
    san_clemente:{name:"San Clemente",desc:"Três camadas de história sob uma basílica."},
    argentina:{name:"Largo Argentina",desc:"Os últimos passos de César — e os gatos."},
    pasquino:{name:"Estátua de Pasquino",desc:"O primeiro ‘mural social’ satírico da cidade."},
    campidoglio:{name:"Campidoglio",desc:"Praça de Michelangelo com vista para os Fóruns."},
    p_sisto:{name:"Ponte Sisto",desc:"Ponte fotogênica para passeios ao entardecer."}
  }
};
function getStop(id){
  const base = TAPPE.find(x=>x.id===id) || {id, name:id, cat:'', desc:''};
  if(curLang==='it') return base;
  const L = STOP_L10N[curLang] || STOP_L10N.en || {};
  const l = L[id] || (STOP_L10N.en ? STOP_L10N.en[id] : null) || {};
  const catTr = (CAT_TR[base.cat] && (CAT_TR[base.cat][curLang] || CAT_TR[base.cat].en)) || base.cat;
  return {
    id: base.id,
    name: l.name || base.name,
    cat: l.cat || catTr,
    desc: l.desc || base.desc
  };
}


/* SVG ICONS for essenza & community (replacing emojis) */
const SVG_ICONS = {
  lock: '<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  mic: '<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
  zap: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>',
  handshake: '<svg viewBox="0 0 24 24"><path d="M18 6L9.3 14.7a1 1 0 01-1.4 0l-.6-.6a1 1 0 010-1.4L16 4"/><path d="M22 12L13.3 20.7a1 1 0 01-1.4 0L6 14.8"/><path d="M2 12l5.3-5.3a1 1 0 011.4 0L14.6 12.6"/><line x1="2" y1="8" x2="7" y2="3"/><line x1="17" y1="21" x2="22" y2="16"/></svg>',
  coins: '<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="5"/><path d="M15.42 4.6a5 5 0 110 4.8"/><path d="M5.5 21h13.25a.75.75 0 00.75-.75v-.5a4 4 0 00-4-4h-7a4 4 0 00-4 4v.5c0 .414.336.75.75.75z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>',
};

let ESSENZA=[
  {n:'01',ic:'lock',t:'100% Privata',d:'Solo il tuo gruppo. Ritmi, soste, percorso — tutto ruota intorno a te.'},
  {n:'02',ic:'mic',t:'Guide Storyteller',d:'Narratori romani innamorati della loro città. Ogni angolo diventa racconto.'},
  {n:'03',ic:'zap',t:'Golf Cart Alba',d:'Silenziosi, agili, ecologici. Dove i bus non arriveranno mai.'},
  {n:'04',ic:'building',t:'Dal tuo Hotel',d:'Zero logistica. Arriviamo noi da te, ovunque a Roma.'},
];
let REVIEWS=[
  {t:"La migliore esperienza di Roma. La guida ci ha portato in posti che non avremmo mai trovato da soli.",n:'Sarah M.',l:'New York, USA',i:'S'},
  {t:"Tour di nozze indimenticabile. Roma di notte dal golf cart è un'altra dimensione.",n:'Marco & Giulia',l:'Milano, Italia',i:'M'},
  {t:"Mia madre di 80 anni ha visto tutta Roma senza stancarsi. Perfetto per chi ha difficoltà motorie.",n:'Thomas B.',l:'Londra, UK',i:'T'},
  {t:"Ho visitato Roma decine di volte. Questo tour mi ha mostrato una città che non conoscevo.",n:'Isabelle C.',l:'Parigi, Francia',i:'I'},
  {t:"La guida era una vera enciclopedia vivente di Roma — divertente, appassionata, disponibile.",n:'James R.',l:'Sydney, Australia',i:'J'},
];
let COMM=[
  {ic:'handshake',t:'Tour co-branded',d:'Esperienze con la tua identità'},
  {ic:'coins',t:'Commissioni dedicate',d:'Reportistica mensile'},
  {ic:'star',t:'Priorità garantita',d:'Ospiti sempre al primo posto'},
  {ic:'smartphone',t:'Community Aura',d:'Seguici, condividi la tua storia'},
];
let FAQ_D=[
  {q:'Cosa succede se piove?',a:'Golf cart con protezioni antipioggia. In caso estremo: spostamento gratuito o rimborso completo.'},
  {q:'Dove ci incontriamo?',a:"Veniamo direttamente al tuo hotel. Zero organizzazione da parte tua."},
  {q:'Quante persone possono salire?',a:'Fino a 6 per golf cart. Gruppi grandi: più cart coordinati.'},
  {q:'Come funziona il pagamento?',a:'Carta di credito via Stripe o solo richiesta. Cancellazione gratuita fino a 24h prima.'},
  {q:'Adatto a bambini e anziani?',a:"Assolutamente. Nessuna camminata necessaria. Ideale per famiglie e anziani."},
  {q:'Posso personalizzare il percorso?',a:"Sì, al 100%. Decidi tu cosa vedere e quanto fermarti."},
  {q:'In quali lingue guidate?',a:'Italiano, inglese, francese e spagnolo.'},
];
const DEFAULT_PRICING = {
  tour_pax: {
    grande_bellezza: {'1-3':230,'4':280,'5-7':370},
    roma_night:       {'1-3':250,'4':300,'5-7':390},
    full_roma:        {'1-3':250,'4':300,'5-7':390},
    custom:           {'1-3':250,'4':300,'5-7':390},
  },
  custom: {
    included_stops: 10,
    extra_stop_fee: 19.5
  }
};
let PRICING = JSON.parse(JSON.stringify(DEFAULT_PRICING)); // overwritten by CMS (pricing_rules) if present

const DEFAULT_CHECKOUT_EXTRAS = {
  child_seat_price: 25,
  seat_label: "Prenota in anticipo <b>seggiolino bimbo</b> <b>(+€{price})</b> — indica età/peso nelle note",
  drinks_label: "<b>Bevande fresche</b> su richiesta (scriveremo su WhatsApp)",
  water_note: "Acqua fresca sempre disponibile gratuitamente durante il tour.",
  acc_top_html: "<strong>Accessibilità:</strong> nessuna barriera architettonica. Tour adatti a tutte le età (bambini, anziani, disabili). <span style=\"white-space:nowrap\">Acqua fresca</span> sempre gratuita."
};
let CHECKOUT_EXTRAS = {...DEFAULT_CHECKOUT_EXTRAS};

const DEFAULT_CONTACTS = {
  whatsapp_number: "+39 320 689 1014",
  whatsapp_wa: "393206891014",
  phone2: "+39 391 777 5730",
  phone2_tel: "393917775730",
  email: "info@aurarometours.it",
  instagram: "https://instagram.com/aura.intravel"
};
let CONTACTS = {...DEFAULT_CONTACTS};

// Backward compat (used in a few places)
const PAX_PRICES = PRICING.tour_pax.full_roma;

function priceForTour(tourId, paxKey, customStopsCount){
  const m = (PRICING.tour_pax && PRICING.tour_pax[tourId]) || PAX_PRICES;
  let base = (m && (m[paxKey] ?? m['1-3'])) ?? 250;
  if(tourId === 'custom'){
    const inc = PRICING.custom?.included_stops ?? 10;
    const fee = PRICING.custom?.extra_stop_fee ?? 19.5;
    const extra = Math.max(0, (customStopsCount||0) - inc);
    base = base + extra * fee;
  }
  return Math.round(base * 100) / 100; // euros (2 decimals)
}

const TAPPE = [
  {id:"colosseo",      name:"Colosseo",              cat:"Classici",  desc:"Il teatro della vita e della morte. Qui Roma applaudiva e condannava."},
  {id:"fori",          name:"Fori Imperiali",         cat:"Classici",  desc:"Il centro del potere: politica, giustizia e intrighi romani."},
  {id:"circo_massimo", name:"Circo Massimo",          cat:"Classici",  desc:"250.000 spettatori, quadrighe. Il rombo non è mai sparito."},
  {id:"pantheon",      name:"Pantheon",               cat:"Classici",  desc:"L'unico tempio antico intatto. Dove l'imperatore diventava luce."},
  {id:"p_navona",      name:"Piazza Navona",          cat:"Classici",  desc:"Bernini e Borromini duellano in pietra. Barocco puro."},
  {id:"trevi",         name:"Fontana di Trevi",       cat:"Classici",  desc:"La più famosa. Anita, Marcello e milioni di sogni."},
  {id:"spagna",        name:"Piazza di Spagna",       cat:"Classici",  desc:"Trinità dei Monti, Via Condotti, il cuore glamour di Roma."},
  {id:"venezia",       name:"Piazza Venezia",         cat:"Classici",  desc:"L'Altare della Patria. Marmo che vale mille discorsi."},
  {id:"san_pietro",    name:"San Pietro",             cat:"Vaticano",  desc:"La cupola di Michelangelo. Un invito a guardare in alto."},
  {id:"castel_angelo", name:"Castel Sant'Angelo",     cat:"Vaticano",  desc:"Fortezza, prigione, rifugio papale. L'angelo che placò la peste."},
  {id:"via_giulia",    name:"Via Giulia",             cat:"Vaticano",  desc:"La prima strada dritta di Roma moderna. Cardinali e cospiratori."},
  {id:"aventino",      name:"Giardino degli Aranci",  cat:"Nascosta",  desc:"Il giardino segreto sospeso sulla città. Profumi e silenzio."},
  {id:"buco",          name:"Buco della Serratura",   cat:"Nascosta",  desc:"Tre stati in un colpo d'occhio. Una chiave che rivela."},
  {id:"ghetto",        name:"Ghetto Ebraico",         cat:"Nascosta",  desc:"Uno dei cuori più vivi e tragici di Roma. Il passato non passa."},
  {id:"trastevere",    name:"Trastevere",             cat:"Nascosta",  desc:"La Roma autentica. Ogni pietra ha un soprannome."},
  {id:"gianicolo",     name:"Gianicolo",              cat:"Nascosta",  desc:"Il balcone segreto. Il cannone batte ogni giorno a mezzogiorno."},
  {id:"isola",         name:"Isola Tiberina",         cat:"Nascosta",  desc:"Ospedale, miracoli, superstizioni. Un cuore antico nel Tevere."},
  {id:"campo_fiori",   name:"Campo de' Fiori",        cat:"Nascosta",  desc:"Fiori di giorno, fuoco di notte. Bruno non abbassò mai lo sguardo."},
  {id:"cappuccini",    name:"Cripta dei Cappuccini",  cat:"Dark Side", desc:"3700 frati. Un memento mori barocco. La danza delle ossa."},
  {id:"san_clemente",  name:"Basilica San Clemente",  cat:"Dark Side", desc:"Tre chiese sovrapposte. Un viaggio nel tempo verticale."},
  {id:"argentina",     name:"Largo Argentina",        cat:"Dark Side", desc:"Qui cadde Cesare. I gatti vegliano, le voci antiche restano."},
  {id:"pasquino",      name:"Statua di Pasquino",     cat:"Dark Side", desc:"La prima bacheca social della storia. La voce del popolo."},
  {id:"campidoglio",   name:"Campidoglio",            cat:"Panorami",  desc:"Vista mozzafiato sui Fori. Michelangelo e la geometria perfetta."},
  {id:"p_sisto",       name:"Ponte Sisto",            cat:"Panorami",  desc:"Arte, potere e bellezza in un asse segreto."},
];

const CAT_COLORS = {
  'Classici':  {bg:'rgba(200,164,100,.12)',border:'rgba(200,164,100,.3)',txt:'var(--gold)'},
  'Vaticano':  {bg:'rgba(96,150,200,.1)', border:'rgba(96,150,200,.3)', txt:'#6096C8'},
  'Nascosta':  {bg:'rgba(100,180,120,.1)',border:'rgba(100,180,120,.3)',txt:'#5AB470'},
  'Dark Side': {bg:'rgba(200,80,80,.1)',  border:'rgba(200,80,80,.3)',  txt:'#C85050'},
  'Panorami':  {bg:'rgba(180,160,220,.1)',border:'rgba(180,160,220,.3)',txt:'#B49CDC'},
};

const PAX_CUSTOM = {
  '1-3': {label:'1–3 persone'},
  '4':   {label:'4 persone'},
  '5-7': {label:'5–7 persone'},
};

const MQ=['Tour Privati','Golf Cart Alba','Roma Esclusiva','Niente Code','Guide Appassionate','100% Privato','Dal Tuo Hotel','Since 2025'];

function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* ── SCENE SYSTEM ── */
let curScene=0;
const SCENES=4;

/* ═══ URL virtuali per SEO e Ads ═══ */
const SCENE_SLUGS = ['home','tours','esplora','community'];
const SCENE_FROM_SLUG = {home:0,tours:1,'esplora':2,community:3,storia:2,story:2,tour:1};

function goScene(n){
  const urls=['/','/tours','/esplora','/community'];
  if(urls[n]) location.href=urls[n];
  return;
  if(n<0||n>=SCENES)return;
  document.querySelectorAll('.scene').forEach((s,i)=>{
    s.classList.toggle('active',i===n);
    s.classList.toggle('prev',i===curScene&&i!==n);
  });
  document.querySelectorAll('.sdot').forEach((d,i)=>d.classList.toggle('on',i===n));
  document.querySelectorAll('[id^="nl"]').forEach((a,i)=>a.classList.toggle('active-link',i===n));
  document.querySelectorAll('.mn-item').forEach((m,i)=>m.classList.toggle('active',i===n));
  document.getElementById('nav').classList.toggle('dark-nav',n>0);
  curScene=n;
  document.querySelectorAll('.scene').forEach((s,i)=>{if(i===n){s.classList.add('entering');setTimeout(()=>s.classList.remove('entering'),700);}});
  if(n===3)setTimeout(()=>{const ml=document.getElementById('s3-ml');if(ml)ml.classList.add('on');},400);
  if(n===2)setTimeout(initCountUp,200);
  // Update browser URL using hash (works on all hosting without server config)
  const slug=SCENE_SLUGS[n]||'home';
  try{history.replaceState({scene:n},'',(slug==='home'?location.pathname+'#':'#'+slug));}catch(e){}
}

/* Swipe */
let tx=0,ty=0;
document.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
document.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-tx;
  const dy=e.changedTouches[0].clientY-ty;
  if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>60){
    const inScroll=['s1','s2','s3'].includes(document.querySelector('.scene.active')?.id);
    if(!inScroll){
      if(dy<0)goScene(curScene+1);
      else goScene(curScene-1);
    }
  }
},{passive:true});

/* ── RENDER ── */
function renderTours(){
  const _t=(k,fb)=>(I18N[k]&&I18N[k][curLang])||fb;
  const tourI18n={
    'grande_bellezza':{name:'tour_grande_bellezza',tag:'tour_grande_tag'},
    'roma_night':{name:'tour_roma_night',tag:'tour_night_tag'},
    'full_roma':{name:'tour_full',tag:'tour_full_tag'},
    'shooting':{name:'tour_shooting',tag:'tour_shooting_tag'},
    'fiat500':{name:'tour_fiat',tag:'tour_fiat_tag'},
    'custom':{name:'t_custom_n',tag:'tour_custom_sub'},
  };
  document.getElementById('tours-hub').innerHTML=TOURS.map(t=>{
    const ti=tourI18n[t.id]||{};
    const name=ti.name?_t(ti.name,t.name):t.name;
    const tag=ti.tag?_t(ti.tag,t.tagline):t.tagline;
    const avail=t.avail==='Prossimamente'?_t('coming_soon','Prossimamente'):t.avail==='Su richiesta'?_t('ck_request','Su richiesta'):_t('available','Disponibile');
    return `
    <div class="th" data-tour="${esc(t.id)}" data-avail="${esc(t.avail)}">
      ${t.feat?'<div class="th-badge">'+_t('most_chosen','★ Più scelto')+'</div>':''}
      <img src="${esc(t.img)}" alt="${esc(name)}" decoding="async">
      <div class="th-ov"></div>
      <div class="th-body">
        <div class="th-chip"><div class="th-chip-dot"></div>${esc(avail)}</div>
        <div class="th-name">${esc(name)}</div>
        <div class="th-tag">${esc(tag)}</div>
        ${t.pr?`<div class="th-price">da €${t.pr}<span style="font-size:.75rem;opacity:.7;font-family:var(--ff-b);font-weight:300"> ${_t('per_group','· tot. gruppo')}</span></div>`:''}
        <ul class="th-feats">${t.fe.map(f=>`<li>${esc(tFeat(f))}</li>`).join('')}</ul>
        <button class="th-cta">${t.avail==='Prossimamente'?_t('coming_soon','Prossimamente'):t.pr?_t('book_now','Prenota ora →'):_t('info','Info →')}</button>
      </div>
    </div>`}).join('');
  // Tour card interaction
  const hub=document.getElementById('tours-hub');
  const hasTouch='ontouchstart' in window||navigator.maxTouchPoints>0;
  
  if(hasTouch){
    // Touch: finger down = gold border animation, tap = open checkout
    hub.addEventListener('touchstart',function(e){
      const card=e.target.closest('.th');
      if(!card||card.dataset.avail==='Prossimamente')return;
      // Expand this card (golden border + pulse)
      hub.querySelectorAll('.th.expanded').forEach(c=>{if(c!==card)c.classList.remove('expanded');});
      card.classList.remove('expanded');
      void card.offsetWidth; // force reflow for re-triggering animation
      card.classList.add('expanded');
    },{passive:true});
    
    // Finger moves to different card = switch gold border
    hub.addEventListener('touchmove',function(e){
      const touch=e.touches[0];
      if(!touch)return;
      const el=document.elementFromPoint(touch.clientX,touch.clientY);
      const card=el?el.closest('.th'):null;
      if(!card||card.dataset.avail==='Prossimamente')return;
      if(!card.classList.contains('expanded')){
        hub.querySelectorAll('.th.expanded').forEach(c=>c.classList.remove('expanded'));
        card.classList.add('expanded');
      }
    },{passive:true});
    
    // Tap = open checkout
    hub.addEventListener('click',function(e){
      const card=e.target.closest('.th');
      if(!card)return;
      const tourId=card.dataset.tour;
      if(card.dataset.avail==='Prossimamente'||!tourId)return;
      openCk(tourId);
    });
    
    // Collapse when touching outside
    document.addEventListener('touchstart',function(e){
      if(!e.target.closest('.th')&&!e.target.closest('#ck-overlay')&&!e.target.closest('#cbot')&&!e.target.closest('#cfab')){
        hub.querySelectorAll('.th.expanded').forEach(c=>c.classList.remove('expanded'));
      }
    },{passive:true});
  }else{
    // Desktop: click straight to checkout
    hub.addEventListener('click',function(e){
      const card=e.target.closest('.th');
      if(!card)return;
      const tourId=card.dataset.tour;
      if(card.dataset.avail==='Prossimamente'||!tourId)return;
      openCk(tourId);
    });
  }
}

function renderEss(){
  const _t=(k,fb)=>(I18N[k]&&I18N[k][curLang])||fb;
  const essKeys=[
    {t:'ess1_t',d:'ess1_d'},{t:'ess2_t',d:'ess2_d'},{t:'ess3_t',d:'ess3_d'},{t:'ess4_t',d:'ess4_d'}
  ];
  document.getElementById('s2-ess').innerHTML=ESSENZA.map((e,i)=>{
    const ek=essKeys[i]||{};
    return `
    <div class="s2-ec">
      <div class="s2-en">${esc(e.n)}</div>
      <div class="s2-ei">${SVG_ICONS[e.ic]||''}</div>
      <div class="s2-et">${esc(ek.t?_t(ek.t,e.t):e.t)}</div>
      <div class="s2-ed">${esc(ek.d?_t(ek.d,e.d):e.d)}</div>
    </div>`}).join('');
}

function renderRevs(){
  document.getElementById('rev-belt').innerHTML=REVIEWS.map(r=>`
    <div class="rc">
      <div class="rc-s">★★★★★</div>
      <div class="rc-q">"</div>
      <div class="rc-t">${esc(r.t)}</div>
      <div class="rc-p"><div class="rc-av">${esc(r.i)}</div><div><div class="rc-n">${esc(r.n)}</div><div class="rc-l">${esc(r.l)}</div></div></div>
    </div>`).join('');
}

function renderComm(){
  const _t=(k,fb)=>(I18N[k]&&I18N[k][curLang])||fb;
  const comKeys=[{t:'com1_t',d:'com1_d'},{t:'com2_t',d:'com2_d'},{t:'com3_t',d:'com3_d'},{t:'com4_t',d:'com4_d'}];
  document.getElementById('s3-items').innerHTML=COMM.map((c,i)=>{
    const ck=comKeys[i]||{};
    return `
    <div class="s3-item">
      <div class="s3-ic">${SVG_ICONS[c.ic]||''}</div>
      <div><div class="s3-it">${esc(ck.t?_t(ck.t,c.t):c.t)}</div><div class="s3-id">${esc(ck.d?_t(ck.d,c.d):c.d)}</div></div>
    </div>`}).join('');
}

function renderFAQ(){
  const _t=(k,fb)=>(I18N[k]&&I18N[k][curLang])||fb;
  const faqKeys=[{q:'faq1_q',a:'faq1_a'},{q:'faq2_q',a:'faq2_a'},{q:'faq3_q',a:'faq3_a'},{q:'faq4_q',a:'faq4_a'},{q:'faq5_q',a:'faq5_a'},{q:'faq6_q',a:'faq6_a'},{q:'faq7_q',a:'faq7_a'}];
  document.getElementById('s3-faq').innerHTML=FAQ_D.map((f,i)=>{
    const fk=faqKeys[i]||{};
    return `
    <div class="faq-item">
      <button class="faq-btn" onclick="this.classList.toggle('op');this.nextElementSibling.classList.toggle('op')">${esc(fk.q?_t(fk.q,f.q):f.q)}<span class="faq-ic">+</span></button>
      <div class="faq-ans">${esc(fk.a?_t(fk.a,f.a):f.a)}</div>
    </div>`}).join('');
}

/* ── COUNT UP ── */
function countUp(el,target,dur=1400){
  let s=0;const step=target/(dur/16);
  const t=setInterval(()=>{s+=step;if(s>=target){el.textContent=target;clearInterval(t);}else el.textContent=Math.floor(s);},16);
}
let cuDone=false;
function initCountUp(){
  if(cuDone)return;cuDone=true;
  document.querySelectorAll('[data-count]').forEach(el=>{
    const t=parseInt(el.dataset.count);if(!isNaN(t))countUp(el,t);
  });
}

/* ═══ BLOG / ARTICOLI — CMS-driven ═══ */
let BLOG_ARTICLES = [];
// Default articles (overwritten by CMS from admin panel)
const DEFAULT_BLOG = [
  {
    id:'blog1',
    title:'Perché scegliere un tour in golf cart a Roma',
    cat:'Guida',
    excerpt:'Roma è immensa e le distanze possono essere faticose, soprattutto d\'estate. Un golf cart elettrico silenzioso ti porta nei vicoli dove i bus non arrivano, senza code e senza sudore.',
    content:'<p>Roma è immensa e le distanze possono essere faticose, soprattutto d\'estate. Un golf cart elettrico silenzioso ti porta nei vicoli dove i bus non arrivano, senza code e senza sudore.</p><h3>Zero barriere architettoniche</h3><p>I nostri golf cart Alba sono accessibili a tutti: bambini, anziani, persone con difficoltà motorie. Non c\'è bisogno di camminare per ore sotto il sole — ti sediamo comodamente e ti portiamo tra le meraviglie.</p><h3>Accesso esclusivo</h3><p>Grazie alle dimensioni compatte, raggiungiamo piazzette, vicoli e angoli nascosti che sono impossibili da raggiungere con mezzi più grandi. È un modo completamente diverso di vivere la città.</p><blockquote>\"La migliore decisione del nostro viaggio a Roma\" — Sarah, New York</blockquote>',
    img:'https://i.imgur.com/Z23qkxH.jpeg',
    date:'2025-03-15',
    tags:['golf cart','roma','tour privato','accessibilità']
  },
  {
    id:'blog2',
    title:'I 5 vicoli segreti di Roma che devi vedere',
    cat:'Segreti di Roma',
    excerpt:'Dimentica le guide turistiche. Ti portiamo nei vicoli dove il tempo si è fermato — luoghi che solo i romani conoscono.',
    content:'<p>Dimentica le guide turistiche. Ti portiamo nei vicoli dove il tempo si è fermato — luoghi che solo i romani conoscono.</p><h3>1. Vicolo del Piede — Trastevere</h3><p>Un corridoio di edera e balconi fioriti dove il bucato steso racconta storie di vita quotidiana romana.</p><h3>2. Arco degli Acetari</h3><p>Nascosto dietro Campo de\' Fiori, un cortile medievale che sembra uscito da un film di Fellini.</p><h3>3. Via della Pilotta</h3><p>Un passaggio aereo del XVII secolo che collega due palazzi nobiliari — pochi lo conoscono.</p><h3>4. Vicolo del Bologna</h3><p>Lampioni in ferro battuto, facciate color ocra, silenzio assoluto nel cuore di Roma.</p><h3>5. Via di San Nicola da Tolentino</h3><p>Dove il barocco incontra il liberty in un mix architettonico unico al mondo.</p>',
    img:'https://i.imgur.com/aMHBLdn.jpeg',
    date:'2025-03-10',
    tags:['vicoli','roma segreta','trastevere','itinerari']
  },
  {
    id:'blog3',
    title:'Roma con bambini e anziani: la guida definitiva',
    cat:'Accessibilità',
    excerpt:'Visitare Roma con la famiglia non deve essere uno stress. Ecco come vivere la Città Eterna con chi ha bisogno di comfort.',
    content:'<p>Visitare Roma con la famiglia non deve essere uno stress. Ecco come vivere la Città Eterna con chi ha bisogno di comfort e attenzione extra.</p><h3>Il problema delle distanze</h3><p>Roma è bellissima ma dispersiva. Un bambino si stanca, un nonno ha bisogno di pause, una sedia a rotelle non passa ovunque. Il golf cart risolve tutto.</p><h3>Seggiolini e comfort</h3><p>Offriamo seggiolini per bambini su richiesta, acqua fresca gratuita durante tutto il tour, e le guide sono preparate a gestire ogni esigenza.</p><h3>Nessuna barriera</h3><p>I nostri percorsi sono studiati per evitare gradini, sampietrini sconnessi e strade in salita. Tutto è pianificato per il massimo comfort.</p><blockquote>\"Mia madre di 80 anni ha visto tutta Roma senza stancarsi. Perfetto.\" — Thomas, Londra</blockquote>',
    img:'https://i.imgur.com/gknCqjF.jpeg',
    date:'2025-03-05',
    tags:['bambini','anziani','accessibilità','famiglia']
  }
];

function renderBlog(){
  const grid = document.getElementById('s2-blog-grid');
  const empty = document.getElementById('s2-blog-empty');
  const articles = BLOG_ARTICLES.length > 0 ? BLOG_ARTICLES : DEFAULT_BLOG;
  const _t=(k,fb)=>(I18N[k]&&(I18N[k][curLang]||I18N[k].en))||fb;
  const readMore = _t('t_more','Leggi →');
  const defaultCat = _t('blog_article',{it:'Articolo',en:'Article',fr:'Article',de:'Artikel',pt:'Artigo',zh:'文章',ja:'記事',ru:'Статья',ar:'مقالة',he:'מאמר',ro:'Articol',sq:'Artikull',fil:'Artikulo',th:'บทความ',nl:'Artikel',no:'Artikkel',ga:'Alt',ko:'기사',cs:'Článek',lv:'Raksts',uk:'Стаття',pl:'Artykuł'}[curLang]||'Article');
  if(!articles || articles.length === 0){
    if(grid) grid.style.display='none';
    if(empty) empty.style.display='block';
    return;
  }
  if(grid) grid.style.display='';
  if(empty) empty.style.display='none';
  grid.innerHTML = articles.slice(0,5).map((a,i)=>`
    <article class="s2-blog-card" onclick="openBlogModal('${esc(a.id)}')" itemscope itemtype="https://schema.org/BlogPosting">
      ${a.img?`<img class="s2-blog-img" src="${esc(a.img)}" alt="${esc(a.title)}" loading="lazy" itemprop="image">`:''}
      <div class="s2-blog-body">
        <div class="s2-blog-cat">${esc(a.cat||defaultCat)}</div>
        <h3 class="s2-blog-title" itemprop="headline">${esc(a.title)}</h3>
        <p class="s2-blog-excerpt" itemprop="description">${esc(a.excerpt||'')}</p>
        <div class="s2-blog-date" itemprop="datePublished" content="${esc(a.date||'')}">${formatBlogDate(a.date)}</div>
        <span class="s2-blog-more">${readMore}</span>
      </div>
    </article>
  `).join('');
}

function formatBlogDate(d){
  if(!d) return '';
  try{
    const dt=new Date(d);
    return dt.toLocaleDateString(curLang==='it'?'it-IT':curLang==='en'?'en-GB':curLang+'-'+curLang.toUpperCase(),{day:'numeric',month:'long',year:'numeric'});
  }catch(e){return d;}
}

function openBlogModal(id){
  const articles = BLOG_ARTICLES.length > 0 ? BLOG_ARTICLES : DEFAULT_BLOG;
  const a = articles.find(x=>x.id===id);
  if(!a) return;
  document.getElementById('blog-modal-img').src = a.img||'';
  document.getElementById('blog-modal-img').alt = a.title||'';
  document.getElementById('blog-modal-img').style.display = a.img?'block':'none';
  document.getElementById('blog-modal-cat').textContent = a.cat||'Articolo';
  document.getElementById('blog-modal-title').textContent = a.title||'';
  document.getElementById('blog-modal-date').textContent = formatBlogDate(a.date);
  document.getElementById('blog-modal-content').innerHTML = a.content||'<p>'+esc(a.excerpt||'')+'</p>';
  const tagsEl = document.getElementById('blog-modal-tags');
  tagsEl.innerHTML = (a.tags||[]).map(t=>`<span class="blog-modal-tag">${esc(t)}</span>`).join('');
  document.getElementById('blog-modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeBlogModal(){
  document.getElementById('blog-modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ── CURSOR — Linux Mint Gold ── */
/* cursor custom disabled via CSS (moved out of JS) */

const cd=document.getElementById('cd'),cr=document.getElementById('cr');
if(false && window.matchMedia('(pointer:fine)').matches){
  document.documentElement.classList.add('hc');
  let mx=0,my=0,rx=0,ry=0;
  
  // Move arrow cursor (instant)
  document.addEventListener('mousemove',ev=>{
    mx=ev.clientX;my=ev.clientY;
    cd.style.left=mx+'px';cd.style.top=my+'px';
  },{passive:true});
  
  // Glow ring follows with smooth delay
  (function loop(){
    rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
    cr.style.left=rx+'px';cr.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  
  // Click: burst ring + sparkle particles
  document.addEventListener('mousedown',ev=>{
    // Gold burst ring
    const burst=document.createElement('div');
    burst.className='click-burst';
    burst.style.left=ev.clientX+'px';burst.style.top=ev.clientY+'px';
    document.body.appendChild(burst);
    setTimeout(()=>burst.remove(),500);
    
    // Sparkle particles (6 random directions)
    for(let i=0;i<6;i++){
      const spark=document.createElement('div');
      spark.className='click-spark';
      spark.style.left=ev.clientX+'px';spark.style.top=ev.clientY+'px';
      const angle=(Math.PI*2/6)*i+Math.random()*.5;
      const dist=12+Math.random()*8;
      spark.style.setProperty('--sx',Math.cos(angle)*dist+'px');
      spark.style.setProperty('--sy',Math.sin(angle)*dist+'px');
      document.body.appendChild(spark);
      setTimeout(()=>spark.remove(),600);
    }
    
    // Cursor press effect
    cd.style.transform='scale(.85)';
    setTimeout(()=>{cd.style.transform='';},150);
  });
  
}else{cd.style.display='none';cr.style.display='none';}

/* ═════════════════════════════════
   CHECKOUT
═════════════════════════════════ */
let curTour=null,sInst=null,sCelMounted=false,sCelEl=null,sElements=null;

let ckPax = null; // selected pax key for standard checkout
let ckStripeReady = false; // whether Stripe Payment Element is mounted and ready

let ckSeat = false;
let ckDrinks = false;

function openCk(tourId){
  if(tourId === 'custom'){openCustomTour();return;}
  const t=TOURS.find(x=>x.id===tourId)||TOURS[0];
  if(!t||t.avail==='Prossimamente')return;

  document.getElementById('ck-custom').classList.remove('on');
  curTour=t;
  ckPax=null;
  ckStripeReady=false;

  // Reset Stripe element (do not carry old instances)
  const pelDiv=document.getElementById('ck-cel');
  if(pelDiv){pelDiv._sElements=null;pelDiv.innerHTML='';}

  const name=tTourName(t);
  const tag=tTourTag(t);

  const hd=document.getElementById('ck-hd-t');
  if(hd) hd.textContent = _t('nav_book','Prenota') + ' — ' + name;

  document.getElementById('ck-prev-img').src=t.img;
  document.getElementById('ck-prev-name').textContent=name;
  document.getElementById('ck-prev-sub').textContent=tag;
  document.getElementById('ck-prev-price').textContent = t.pr ? ('€'+t.pr) : _t('ck_request','Su richiesta');

  document.getElementById('ck-pprev').classList.remove('on');
  document.getElementById('ck-err').textContent='';
  document.getElementById('ck-sb-t').textContent=_t('ck_confirm','Conferma Prenotazione →');
  document.getElementById('ck-sb').disabled=false;
  document.getElementById('ck-ok').classList.remove('on');
  document.getElementById('ck-ok').style.display='none';
  document.getElementById('ck-fw').style.display='block';

  // Reset tabs to first
  document.querySelectorAll('.ck-tab').forEach((b,i)=>b.classList.toggle('on',i===0));
  document.querySelectorAll('.ck-pan').forEach((p,i)=>p.classList.toggle('on',i===0));

  // Render pax cards + tappe
  renderCkPax();
  renderCkTappe(t);

  // Extras reset
  ckSeat=false;ckDrinks=false;
  const se=document.getElementById('ck-seat'); if(se) se.checked=false;
  const dr=document.getElementById('ck-drinks'); if(dr) dr.checked=false;

  applyCheckoutExtras();
  bindCkExtras();

  if(sElements){sElements=null;sCelEl=null;sCelMounted=false;}
  document.getElementById('ck-overlay').classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(function(){
    if(typeof applyCheckoutExtras==='function') applyCheckoutExtras();
    if(typeof renderCkPax==='function') renderCkPax();
    if(typeof refreshCheckoutLang==='function') refreshCheckoutLang();
  }, 30);

  // Show urgency bar with random viewers
  const urgEl=document.getElementById('ck-urgency');
  if(urgEl&&t.pr){
    urgEl.style.display='flex';
    const vv=document.getElementById('ck-urg-viewers');
    if(vv) vv.textContent=Math.floor(Math.random()*3)+2;
  }else if(urgEl){urgEl.style.display='none';}

  setTimeout(()=>{const p=document.getElementById('ck-panel');if(p)p.scrollTop=0;},100);

  // Data min
  const di=document.getElementById('ck-d');
  if(di){const d=new Date();d.setDate(d.getDate()+1);di.min=d.toISOString().split('T')[0];}

  if(!sInst){
    try{ sInst=Stripe(SPK); }catch(e){ console.warn('Stripe:',e); }
  }
}

function renderCkPax(){
  const _t=(k,fb)=>(I18N[k]&&(I18N[k][curLang]||I18N[k].en))||fb;
  const grid=document.getElementById('ck-pax-grid');
  if(!grid)return;
  const hasPr = curTour && curTour.pr;
  grid.parentElement.style.display = hasPr ? 'block' : 'none';
  if(!hasPr)return;
  const keys=['1-3','4','5-7'];
  grid.innerHTML = keys.map(k=>{
    const v = priceForTour(curTour?.id||'full_roma', k, 0);
    return `
    <div class="ct-pax-opt ${ckPax===k?'on':''}" onclick="setCkPax('${k}')">
      <div class="ct-pax-price">€${v}</div>
      <div class="ct-pax-lbl">${({'1-3':_t('pax_1_3','1–3 people'),'4':_t('pax_4','4 people'),'5-7':_t('pax_5_7','5–7 people')})[k]||k}</div>
    </div>`;
  }).join('');
}

function setCkPax(key){
  const changed = ckPax !== key;
  ckPax=key;
  renderCkPax();
  calcCk();
  // If pax changed and Stripe was already mounted, destroy it so a new Payment Intent is created
  if(changed){
    ckStripeReady=false;
    const pelDiv=document.getElementById('ck-cel');
    if(pelDiv){pelDiv._sElements=null;pelDiv.innerHTML='';}
    document.getElementById('ck-sb-t').textContent=(I18N.ck_confirm&&I18N.ck_confirm[curLang])||'Confirm Booking →';
    document.getElementById('ck-sb').disabled=false;
    document.getElementById('ck-err').textContent='';
    // Auto-mount Stripe if card tab is active
    maybeAutoMountStripe();
  }
}

function bindCkExtras(){
  const seat=document.getElementById('ck-seat');
  const drinks=document.getElementById('ck-drinks');
  if(seat && seat.dataset.bound!=='1'){
    seat.dataset.bound='1';
    seat.addEventListener('change', ()=>{
      ckSeat=!!seat.checked;
      // If Stripe was mounted, destroy it so a new Payment Intent is created with the new amount
      ckStripeReady=false;
      const pelDiv=document.getElementById('ck-cel');
      if(pelDiv){pelDiv._sElements=null;pelDiv.innerHTML='';}
      document.getElementById('ck-sb-t').textContent=(I18N.ck_confirm&&I18N.ck_confirm[curLang])||'Confirm Booking →';
      document.getElementById('ck-sb').disabled=false;
      document.getElementById('ck-err').textContent='';
      calcCk();
      maybeAutoMountStripe();
    });
  }
  if(drinks && drinks.dataset.bound!=='1'){
    drinks.dataset.bound='1';
    drinks.addEventListener('change', ()=>{
      ckDrinks=!!drinks.checked;
    });
  }
}


async function maybeAutoMountStripe(){
  const activeTab=document.querySelector('.ck-tab.on');
  if(!activeTab||!Object.values(I18N.ck_card||{'en':'Card'}).some(v=>activeTab.textContent.includes(v)))return;
  if(!sInst||!curTour?.pr||!ckPax)return;
  const pelDiv=document.getElementById('ck-cel');
  if(!pelDiv||pelDiv._sElements)return;
  const name=document.getElementById('ck-n').value.trim();
  const email=document.getElementById('ck-e').value.trim();
  const amount=Math.round((priceForTour(curTour?.id||'full_roma', ckPax, 0) + (ckSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0))*100);
  if(amount<=0)return;
  const err=document.getElementById('ck-err');
  const btn=document.getElementById('ck-sb'),btxt=document.getElementById('ck-sb-t');
  try{
    pelDiv.innerHTML='<div style="padding:1rem;text-align:center;color:var(--warm);font-size:.75rem">Caricamento metodo di pagamento...</div>';
    const piRes=await fetch(BE+'/create-payment-intent',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tour:curTour.name,people:ckPax,amount,customerEmail:email||'guest@aurarometours.it'})});
    if(!piRes.ok){const e=await piRes.json().catch(()=>({}));throw new Error(e.error||'Errore pagamento.');}
    const piData=await piRes.json();
    if(piData.error)throw new Error(piData.error);
    const elements=sInst.elements({
      clientSecret:piData.clientSecret,
      appearance:{theme:'stripe',variables:{colorPrimary:'#C8A464',colorBackground:'#FAF7F2',colorText:'#130E0A',colorDanger:'#B03030',fontFamily:'Jost,sans-serif',borderRadius:'6px'}}
    });
    const payEl=elements.create('payment',{layout:{type:'tabs'},wallets:{applePay:'auto',googlePay:'auto'}});
    pelDiv.innerHTML='';
    payEl.mount('#ck-cel');
    pelDiv._sElements=elements;
    ckStripeReady=true;
    btxt.textContent='Paga €'+(amount/100)+' →';
  }catch(e){
    pelDiv.innerHTML='';
    err.style.color='var(--red)';
    err.textContent=e.message||'Errore inizializzazione pagamento.';
    ckStripeReady=false;
  }
}

function renderCkTappe(tour){
  const section=document.getElementById('ck-tappe-section');
  const list=document.getElementById('ck-tappe-list');
  if(!section||!list)return;
  const tappeIds = tour.tappe || [];
  if(tappeIds.length===0){
    section.style.display='none';
    return;
  }
  section.style.display='block';
  list.innerHTML = tappeIds.map(id=>{
    const s=getStop(id);
    if(!s)return '';
    const aria = _t('ck_stop_aria','Description') + ': ' + s.name;
    return `<div class="ck-tappa-tag" data-id="${esc(s.id)}" tabindex="0" role="button" aria-label="${esc(aria)}"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/></svg>${esc(s.name)}<span class="ck-tappa-cat">${esc(s.cat)}</span></div>`;
  }).join('');
}


function showCkTappaDesc(id){
  const s = getStop(id);
  if(!s) return;
  const box = document.getElementById('ck-tappa-desc');
  const list = document.getElementById('ck-tappe-list');
  if(!box || !list) return;

  const open = box.style.display !== 'none' && box.dataset.id === id;
  if(open){
    box.style.display='none';
    box.dataset.id='';
    list.querySelectorAll('.ck-tappa-tag.on').forEach(el=>el.classList.remove('on'));
    return;
  }

  box.dataset.id = id;
  const closeLbl = _t('ui_close','Chiudi');
  box.innerHTML = `
    <div class="ck-td-h">
      <div class="ck-td-t">${esc(s.name)}</div>
      <button type="button" class="ck-td-x" aria-label="${esc(closeLbl)}">×</button>
    </div>
    <div>${esc(s.desc||'')}</div>
  `;
  box.style.display='block';

  setTimeout(()=>{try{box.scrollIntoView({behavior:'smooth',block:'nearest'});}catch(_e){}},60);

  list.querySelectorAll('.ck-tappa-tag').forEach(el=>{
    el.classList.toggle('on', el.dataset.id===id);
  });

  const x = box.querySelector('.ck-td-x');
  if(x) x.onclick = ()=>{
    box.style.display='none';
    box.dataset.id='';
    list.querySelectorAll('.ck-tappa-tag.on').forEach(el=>el.classList.remove('on'));
  };
}

function bindCkTappeDesc(){
  const list = document.getElementById('ck-tappe-list');
  if(!list || list.dataset.bound==='1') return;
  list.dataset.bound='1';
  const handler=(e)=>{
    const tag = e.target && e.target.closest ? e.target.closest('.ck-tappa-tag') : null;
    if(!tag || !list.contains(tag)) return;
    const id = tag.dataset.id;
    if(id) showCkTappaDesc(id);
  };
  list.addEventListener('click', handler);
  list.addEventListener('touchend', (e)=>{ handler(e); }, {passive:true});
  list.addEventListener('keydown', (e)=>{
    const tag = e.target && e.target.closest ? e.target.closest('.ck-tappa-tag') : null;
    if(!tag || !list.contains(tag)) return;
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      const id = tag.dataset.id;
      if(id) showCkTappaDesc(id);
    }
  });
}

function closeCk(){
  document.getElementById('ck-overlay').classList.remove('open');
  document.body.style.overflow='';
  curTour=null;
  document.getElementById('ck-custom').classList.remove('on');
}

function refreshCheckoutLang(){
  const ov=document.getElementById('ck-overlay');
  if(!ov) return;
  const _tEl=function(k){return(I18N[k]&&(I18N[k][curLang]||I18N[k].en))||'';};
  ov.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(I18N[k]) el.textContent=_tEl(k);
  });
  ov.querySelectorAll('[data-i18n-html]').forEach(function(el){
    var k=el.getAttribute('data-i18n-html');
    if(I18N[k]) el.innerHTML=_tEl(k);
  });
  ov.querySelectorAll('select option[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(I18N[k]) el.textContent=_tEl(k);
  });

  // Custom tour open?
  const isCustom = document.getElementById('ck-custom')?.classList.contains('on');

  if(isCustom){
    // Header + preview
    const inc = (PRICING.custom?.included_stops ?? 10);
    const fee = (PRICING.custom?.extra_stop_fee ?? 19.5);
    const base = (PRICING.tour_pax?.custom?.['1-3'] || 250);
    const feeTxt = fee.toFixed(2).replace('.', (curLang==='it' || curLang==='fr' || curLang==='de' || curLang==='es' || curLang==='pt') ? ',' : '.');

    const hd=document.getElementById('ck-hd-t'); if(hd) hd.textContent=_t('ct_build_title','Componi il tuo Tour');
    const pn=document.getElementById('ck-prev-name'); if(pn) pn.textContent=_t('t_custom_n','Tour Su Misura');
    const ps=document.getElementById('ck-prev-sub'); if(ps) ps.textContent=_t('ct_build_sub','Scegli le tappe che vuoi');
    const pp=document.getElementById('ck-prev-price'); if(pp) pp.textContent=`€${base}  (+€${feeTxt} / ${_t('ct_stop','tappa')})`;

    // Re-render cat labels + stop cards for current language
    if(typeof renderCtCats==='function') renderCtCats();
    if(typeof renderCtStops==='function') renderCtStops();
  }else if(curTour){
    const t=curTour;
    const name=tTourName(t);
    const tag=tTourTag(t);
    const hd=document.getElementById('ck-hd-t'); if(hd) hd.textContent=_t('nav_book','Prenota')+' — '+name;
    const pn=document.getElementById('ck-prev-name'); if(pn) pn.textContent=name;
    const ps=document.getElementById('ck-prev-sub'); if(ps) ps.textContent=tag;
    const pp=document.getElementById('ck-prev-price'); if(pp) pp.textContent = t.pr ? ('€'+t.pr) : _t('ck_request','Su richiesta');
    const sb=document.getElementById('ck-sb-t'); if(sb) sb.textContent=_t('ck_confirm','Conferma Prenotazione →');

    // Re-render tappe names/cats
    if(typeof renderCkTappe==='function') renderCkTappe(t);

    // If a stop description is open, refresh it too
    const box=document.getElementById('ck-tappa-desc');
    if(box && box.style.display!=='none' && box.dataset.id){
      showCkTappaDesc(box.dataset.id);
    }
  }
}


function swCk(t,btn){
  document.querySelectorAll('.ck-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.ck-pan').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('cp-'+t).classList.add('on');
  // If switching to Carta and pax is selected, auto-mount Stripe
  if(t==='stripe'&&ckPax&&curTour?.pr){
    setTimeout(()=>maybeAutoMountStripe(),100);
  }
  // Update button text based on active tab
  const btxt=document.getElementById('ck-sb-t');
  if(t==='stripe'&&ckStripeReady){
    const amount=priceForTour(curTour?.id||'full_roma', ckPax||'1-3', 0);
    btxt.textContent='Paga €'+amount+' →';
  }else if(t==='req'){
    btxt.textContent=(I18N.ck_request_btn&&I18N.ck_request_btn[curLang])||'Send Request →';
  }else{
    btxt.textContent=(I18N.ck_confirm&&I18N.ck_confirm[curLang])||'Confirm Booking →';
  }
}

function calcCk(){
  if(!ckPax){document.getElementById('ck-pprev').classList.remove('on');return;}
  const extras = ckSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0;
  const tot=priceForTour(curTour?.id||'full_roma', ckPax, 0) + extras;
  document.getElementById('ck-pr-t').textContent=curTour?.name||'Tour Aura';
  document.getElementById('ck-pr-p').textContent='Prezzo totale gruppo';
  document.getElementById('ck-pr-px').textContent=({'1-3':(I18N.pax_1_3&&I18N.pax_1_3[curLang])||'1–3 people','4':(I18N.pax_4&&I18N.pax_4[curLang])||'4 people','5-7':(I18N.pax_5_7&&I18N.pax_5_7[curLang])||'5–7 people'})[ckPax]||ckPax;
  document.getElementById('ck-pr-tot').textContent='€'+tot;
  document.getElementById('ck-pprev').classList.add('on');
  // Update header price
  document.getElementById('ck-prev-price').textContent='€'+tot;
}

async function doCk(){
  const name=document.getElementById('ck-n').value.trim();
  const email=document.getElementById('ck-e').value.trim();
  const err=document.getElementById('ck-err');
  err.textContent='';err.style.color='var(--red)';
  if(!name||!email){err.textContent='Compila nome e email. Grazie.';return;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err.textContent='Email non valida.';return;}
  if(curTour?.pr && !ckPax){err.textContent=(I18N.err_select_people&&I18N.err_select_people[curLang])||'Select number of people.';return;}
  const btn=document.getElementById('ck-sb'),btxt=document.getElementById('ck-sb-t');
  btn.disabled=true;btxt.textContent='Elaborazione...';
  const atab=document.querySelector('.ck-tab.on').textContent;
  const isCard=atab.includes('Carta');
  const px=ckPax||'1-3';
  const pxLabel=({'1-3':'1–3 persone','4':'4 persone','5-7':'5–7 persone'})[px]||px;
  let spid=null;
  try{
    if(isCard&&sInst&&curTour?.pr){
      const amount=Math.round((priceForTour(curTour?.id||'full_roma', px, 0) + (ckSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0))*100);
      if(amount>0){
        const pelDiv=document.getElementById('ck-cel');
        // Step 1: If Stripe not mounted yet, mount it first
        if(!pelDiv._sElements){
          btxt.textContent='Preparazione pagamento...';
          const piRes=await fetch(BE+'/create-payment-intent',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tour:curTour.name,people:px,amount,customerEmail:email})});
          if(!piRes.ok){const e=await piRes.json().catch(()=>({}));throw new Error(e.error||'Errore pagamento.');}
          const piData=await piRes.json();
          if(piData.error)throw new Error(piData.error);
          const elements=sInst.elements({
            clientSecret:piData.clientSecret,
            appearance:{theme:'stripe',variables:{colorPrimary:'#C8A464',colorBackground:'#FAF7F2',colorText:'#130E0A',colorDanger:'#B03030',fontFamily:'Jost,sans-serif',borderRadius:'6px'}}
          });
          const payEl=elements.create('payment',{layout:{type:'tabs'},wallets:{applePay:'auto',googlePay:'auto'}});
          pelDiv.innerHTML='';
          payEl.mount('#ck-cel');
          pelDiv._sElements=elements;
          ckStripeReady=true;
          btn.disabled=false;btxt.textContent='Paga €'+(amount/100)+' →';
          err.style.color='var(--gold)';err.textContent=(I18N.ck_card_hint&&I18N.ck_card_hint[curLang])||'Enter card details and click Pay.';
          // Scroll to payment element
          setTimeout(()=>{pelDiv.scrollIntoView({behavior:'smooth',block:'center'});},300);
          return;
        }
        // Step 2: Stripe is mounted, confirm payment
        err.textContent='';err.style.color='var(--red)';
        btn.disabled=true;btxt.textContent=(I18N.ck_paying&&I18N.ck_paying[curLang])||'Confirming payment...';
        const{error,paymentIntent}=await sInst.confirmPayment({
          elements:pelDiv._sElements,
          confirmParams:{return_url:window.location.href,payment_method_data:{billing_details:{name,email}}},
          redirect:'if_required'
        });
        if(error)throw new Error(error.message);
        if(!paymentIntent||paymentIntent.status!=='succeeded')throw new Error('Pagamento non completato.');
        spid=paymentIntent.id;
      }
    }
    btxt.textContent='Salvataggio...';
    const extraNotes=[];
    if(ckSeat) extraNotes.push('Seggiolino bimbo: SÌ (+€'+String(CHECKOUT_EXTRAS.child_seat_price||25)+')');
    if(ckDrinks) extraNotes.push('Bevande fresche: richieste');
    let notesRaw=document.getElementById('ck-nt').value.trim();
    let notesFull=(extraNotes.length?('EXTRA: '+extraNotes.join(' | ')+(notesRaw?' | ':'')):'')+notesRaw;
    const bRes=await fetch(BE+'/booking',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,phone:document.getElementById('ck-ph').value.trim(),tour:curTour?.name||'Tour Aura',people:pxLabel,date:document.getElementById('ck-d').value,time:document.getElementById('ck-tm').value,notes:notesFull,paymentMethod:atab,stripePaymentId:spid,amount:priceForTour(curTour?.id||'full_roma', px, 0) + (ckSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0)})});
    if(!bRes.ok){const e=await bRes.json().catch(()=>({}));throw new Error(e.error||'Errore invio.');}
    const bData=await bRes.json();
    const okId=document.getElementById('ck-ok-id');
    if(okId&&bData.bookingId)okId.textContent=bData.bookingId;
    // Show different message for paid vs request
    const okTitle=document.querySelector('.ck-ok-title');
    const okBody=document.querySelector('.ck-ok-body');
    const okCard=document.querySelector('.ck-ok-card');
    if(atab==='stripe'&&spid){
      // PAID — Stripe payment confirmed
      if(okTitle)okTitle.textContent=(I18N.ck_paid_title&&I18N.ck_paid_title[curLang])||'Payment confirmed!';
      if(okBody)okBody.innerHTML=(I18N.ck_paid_body&&I18N.ck_paid_body[curLang])||'Payment received. Confirmation email sent.';
      if(okCard)okCard.innerHTML=`
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/></svg> Pagamento confermato via Stripe</div>
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> Email di conferma inviata</div>
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/></svg> Ti contatteremo per il pickup</div>
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Cancellazione gratuita fino a 24h</div>`;
    }else{
      // REQUEST — No payment made
      if(okTitle)okTitle.textContent=(I18N.ck_sent_title&&I18N.ck_sent_title[curLang])||'Request sent!';
      if(okBody)okBody.innerHTML=(I18N.ck_sent_body&&I18N.ck_sent_body[curLang])||'Request received. We will reply within 2 hours.';
      if(okCard)okCard.innerHTML=`
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> Ti abbiamo inviato un'email di riepilogo</div>
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9"/></svg> Risposta entro 2 ore</div>
        <div class="ck-ok-row"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Zero impegno · Cancellazione gratuita</div>`;
    }
    document.getElementById('ck-fw').style.display='none';
    const ok=document.getElementById('ck-ok');ok.style.display='block';ok.classList.add('on');
  }catch(er){
    err.style.color='var(--red)';err.textContent=er.message||'Errore. WhatsApp: +39 320 689 1014 · Tel: +39 391 777 5730';
    btn.disabled=false;
    btxt.textContent=document.getElementById('ck-cel')?._sElements?((I18N.ck_pay_now&&I18N.ck_pay_now[curLang])||'Pay Now →'):((I18N.ck_confirm&&I18N.ck_confirm[curLang])||'Confirm Booking →');
  }
}

/* ═════════════════════════════════
   CHATBOT
═════════════════════════════════ */
let cOpen=false,cLang='it',cHist=[],cBusy=false;
let cSid=(typeof crypto!=='undefined'&&crypto.randomUUID)?crypto.randomUUID():'sess-'+Date.now();
const CWELC={
  it:"Ciao! Sono il concierge di **Aura Rome Tours**. Come posso aiutarti a vivere Roma in modo esclusivo?",
  en:"Hello! I'm the **Aura Rome Tours** concierge. How can I help you experience Rome?",
  fr:"Bonjour! Je suis le concierge d'**Aura Rome Tours**. Comment puis-je vous aider?",
  es:"¡Hola! Soy el concierge de **Aura Rome Tours**. ¿Cómo puedo ayudarte?",
  de:"Hallo! Ich bin der Concierge von **Aura Rome Tours**. Wie kann ich Ihnen helfen?",
  pt:"Olá! Sou o concierge da **Aura Rome Tours**. Como posso ajudá-lo a viver Roma?",
  zh:"您好！我是**Aura Rome Tours**的礼宾员。我怎样帮助您体验罗马？",
  ja:"こんにちは！**Aura Rome Tours**のコンシェルジュです。ローマをお楽しみいただくためにお手伝いします。",
  ru:"Привет! Я консьерж **Aura Rome Tours**. Как я могу помочь вам познать Рим?",
  ar:"مرحباً! أنا كونسيرج **Aura Rome Tours**. كيف يمكنني مساعدتك في اكتشاف روما؟",
  he:"שלום! אני הקונסיירז' של **Aura Rome Tours**. כיצד אוכל לעזור לכם לחוות את רומא?",
  ro:"Bună! Sunt concierge-ul **Aura Rome Tours**. Cum vă pot ajuta să trăiți Roma?",
  sq:"Përshëndetje! Jam concierge i **Aura Rome Tours**. Si mund t'ju ndihmoj?",
  fil:"Kamusta! Ako ang concierge ng **Aura Rome Tours**. Paano kita matutulungan?",
  th:"สวัสดี! ฉันคือคอนเซียร์จของ **Aura Rome Tours** ฉันจะช่วยคุณสัมผัสประสบการณ์โรมได้อย่างไร?",
  nl:"Hallo! Ik ben de concierge van **Aura Rome Tours**. Hoe kan ik u helpen Rome te beleven?",
  no:"Hei! Jeg er conciergen til **Aura Rome Tours**. Hvordan kan jeg hjelpe deg med å oppleve Roma?",
  ga:"Dia dhuit! Is é mise concierge **Aura Rome Tours**. Conas is féidir liom cabhrú leat?",
  ko:"안녕하세요! 저는 **Aura Rome Tours**의 컨시어지입니다. 로마를 경험하는 데 어떻게 도움을 드릴까요?",
  cs:"Dobrý den! Jsem concierge **Aura Rome Tours**. Jak vám mohu pomoci zažít Řím?",
  lv:"Labdien! Es esmu **Aura Rome Tours** concierge. Kā es varu jums palīdzēt izbaudīt Romu?",
  uk:"Привіт! Я консьєрж **Aura Rome Tours**. Як я можу допомогти вам пізнати Рим?",
  pl:"Cześć! Jestem concierge **Aura Rome Tours**. Jak mogę pomóc Ci doświadczyć Rzymu?"
};
const CSG={
  it:["Prezzi tour","Come prenotare?","Dov'è il pickup?","Adatto ai bambini?"],
  en:["Tour prices","How to book?","Where's pickup?","Child-friendly?"],
  fr:["Prix des tours","Comment réserver?","Où pickup?","Pour enfants?"],
  es:["Precios","¿Cómo reservar?","¿Dónde pickup?","¿Apto niños?"],
  de:["Tourpreise","Wie buchen?","Wo ist Pickup?","Kinderfreundlich?"],
  pt:["Preços","Como reservar?","Onde pickup?","Para crianças?"],
  zh:["旅游价格","如何预订？","在哪里接人？","适合儿童？"],
  ja:["ツアー料金","予約方法は？","ピックアップ場所は？","子供向け？"],
  ru:["Цены туров","Как забронировать?","Где пикап?","Для детей?"],
  ar:["أسعار التور","كيف أحجز؟","أين الاستقبال؟","مناسب للأطفال؟"],
  he:["מחירי סיור","איך להזמין?","איפה האיסוף?","מתאים לילדים?"],
  ro:["Prețuri tururi","Cum rezerv?","Unde pickup?","Pentru copii?"],
  sq:["Çmimet","Si të rezervoj?","Ku pickup?","Për fëmijë?"],
  fil:["Presyo ng tour","Paano mag-book?","Saan ang pickup?","Para sa bata?"],
  th:["ราคาทัวร์","วิธีจอง?","จุดรับที่ไหน?","เหมาะสำหรับเด็ก?"],
  nl:["Tourprijzen","Hoe boeken?","Waar pickup?","Kindvriendelijk?"],
  no:["Tourpriser","Hvordan bestille?","Hvor pickup?","Barnevennlig?"],
  ga:["Praghsanna","Conas áirithint?","Cá bhfuil pickup?","Do pháistí?"],
  ko:["투어 가격","예약 방법?","픽업 장소?","어린이 친화적?"],
  cs:["Ceny zájezdů","Jak rezervovat?","Kde pickup?","Pro děti?"],
  lv:["Tūru cenas","Kā rezervēt?","Kur pickup?","Bērniem?"],
  uk:["Ціни турів","Як забронювати?","Де пікап?","Для дітей?"],
  pl:["Ceny wycieczek","Jak zarezerwować?","Gdzie pickup?","Dla dzieci?"]
};
function tChat(){
  cOpen=!cOpen;
  document.getElementById('cbot').classList.toggle('open',cOpen);
  document.getElementById('cfab').classList.toggle('open-state',cOpen);
  document.getElementById('cbdg').style.display='none';
  if(cOpen&&cHist.length===0)setTimeout(()=>{cAddMsg('bot',CWELC[cLang]);cRSugg();},380);
}
function clngCh(){cLang=document.getElementById('clng').value;cRSugg();}
function cRSugg(){
  const s=CSG[cLang]||CSG.en||CSG.it;
  const el=document.getElementById('cbot-suggs');
  el.innerHTML=s.map(sg=>`<button class="cbot-sg" data-msg="${esc(sg)}">${esc(sg)}</button>`).join('');
  el.querySelectorAll('.cbot-sg').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const msg=btn.getAttribute('data-msg');
      if(msg)cMsg(msg);
    });
  });
}
function cAddMsg(role,text){
  const msgs=document.getElementById('cbot-msgs');
  const d=document.createElement('div');d.className='cm '+role;
  const now=new Date(),ts=now.getHours()+':'+String(now.getMinutes()).padStart(2,'0');
  const fmt=text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--gold)">$1</strong>').replace(/\n/g,'<br>');
  d.innerHTML=`<div class="cm-b">${fmt}</div><div class="cm-t">${ts}</div>`;
  msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;
  if(role!=='typing')cHist.push({role:role==='bot'?'assistant':'user',content:text});
}
function cShowTyp(){const msgs=document.getElementById('cbot-msgs');const d=document.createElement('div');d.className='cm bot';d.id='ctyp';d.innerHTML='<div class="ctyp"><span></span><span></span><span></span></div>';msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function cRemTyp(){const el=document.getElementById('ctyp');if(el)el.remove();}
async function cMsg(text){
  if(cBusy||!text?.trim())return;
  cAddMsg('user',text);document.getElementById('cbot-inp').value='';
  cBusy=true;document.getElementById('cbot-send').disabled=true;cShowTyp();
  try{
    const raw=cHist.slice(-14).filter(m=>m.role&&m.content&&typeof m.content==='string');
    const clean=[];
    for(const msg of raw){
      const r=msg.role==='assistant'?'assistant':'user';
      if(clean.length===0&&r==='assistant')continue;
      if(clean.length>0&&clean[clean.length-1].role===r)continue;
      clean.push({role:r,content:String(msg.content).slice(0,800)});
    }
    const messages=clean.length>0?clean:[{role:'user',content:text}];
    const res=await fetch(BE+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages,lang:cLang,sessionId:cSid})});
    if(!res.ok)throw new Error('HTTP '+res.status);
    const data=await res.json();
    if(data.sessionId)cSid=data.sessionId;
    cRemTyp();cAddMsg('bot',data.reply||cFb());
  }catch(e){cRemTyp();cAddMsg('bot',cFb());}
  cBusy=false;document.getElementById('cbot-send').disabled=false;cRSugg();
}
function cFb(){const m={it:"Problema tecnico. WhatsApp: **+39 320 689 1014** · Tel: **+39 391 777 5730**",en:"Technical issue. WhatsApp: **+39 320 689 1014**",fr:"Problème. WhatsApp: **+39 320 689 1014**",es:"Problema. WhatsApp: **+39 320 689 1014**",de:"Technisches Problem. WhatsApp: **+39 320 689 1014**",pt:"Problema técnico. WhatsApp: **+39 320 689 1014**",zh:"技术问题。WhatsApp: **+39 320 689 1014**",ja:"技術的な問題。WhatsApp: **+39 320 689 1014**",ru:"Техническая проблема. WhatsApp: **+39 320 689 1014**",ar:"مشكلة تقنية. واتساب: **+39 320 689 1014**",he:"בעיה טכנית. WhatsApp: **+39 320 689 1014**",ro:"Problemă tehnică. WhatsApp: **+39 320 689 1014**",sq:"Problem teknik. WhatsApp: **+39 320 689 1014**",fil:"Technical issue. WhatsApp: **+39 320 689 1014**",th:"ปัญหาทางเทคนิค WhatsApp: **+39 320 689 1014**",nl:"Technisch probleem. WhatsApp: **+39 320 689 1014**",no:"Teknisk problem. WhatsApp: **+39 320 689 1014**",ga:"Fadhb theicniúil. WhatsApp: **+39 320 689 1014**",ko:"기술적 문제. WhatsApp: **+39 320 689 1014**",cs:"Technický problém. WhatsApp: **+39 320 689 1014**",lv:"Tehniska problēma. WhatsApp: **+39 320 689 1014**",uk:"Технічна проблема. WhatsApp: **+39 320 689 1014**",pl:"Problem techniczny. WhatsApp: **+39 320 689 1014**"};return m[cLang]||m.it;}
function cSend(){const v=document.getElementById('cbot-inp').value.trim();if(v)cMsg(v);}

/* ══════════════════════════════════════
   CUSTOM TOUR BUILDER
══════════════════════════════════════ */
let ctPax = null;
let ctSelected = new Set();
let ctSeat = false;
let ctDrinks = false;
const getBaseCustomStops = ()=> (TOURS.find(t=>t.id==='full_roma')?.tappe||[]).slice(0,(PRICING.custom?.included_stops??10));
let ctCatFilter = '__all__';

function openCustomTour(){
  closeCk();
  curTour = TOURS.find(t=>t.id==='custom') || {id:'custom'};
  const inc = (PRICING.custom?.included_stops ?? 10);
  const fee = (PRICING.custom?.extra_stop_fee ?? 19.5);
  const base = (PRICING.tour_pax?.custom?.['1-3'] || 250);

  document.getElementById('ck-hd-t').textContent = _t('ct_build_title','Componi il tuo Tour');
  document.getElementById('ck-prev-img').src = IMG.guide;
  document.getElementById('ck-prev-name').textContent = _t('t_custom_n','Tour Su Misura');
  document.getElementById('ck-prev-sub').textContent = _t('ct_build_sub','Scegli le tappe che vuoi');

  // Price line: base + extra stop fee
  const feeTxt = fee.toFixed(2).replace('.', (curLang==='it' || curLang==='fr' || curLang==='de' || curLang==='es' || curLang==='pt') ? ',' : '.');
  const prLine = `€${base}  (+€${feeTxt} / ${_t('ct_stop','tappa')})`;
  document.getElementById('ck-prev-price').textContent = prLine;

  document.getElementById('ck-fw').style.display = 'none';
  document.getElementById('ck-custom').classList.add('on');
  document.getElementById('ck-ok').style.display = 'none';
  document.getElementById('ck-ok').classList.remove('on');
  document.getElementById('ck-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  ctCatFilter='__all__';
  ctSelected = new Set(getBaseCustomStops());
  ctSeat=false; ctDrinks=false;
  const se=document.getElementById('ct-seat'); if(se) se.checked=false;
  const dr=document.getElementById('ct-drinks'); if(dr) dr.checked=false;

  applyCheckoutExtras();
  bindCtExtras();
  renderCtPax();
  renderCtCats();
  renderCtStops();

  const di = document.getElementById('ct-d');
  if(di){const d=new Date();d.setDate(d.getDate()+1);di.min=d.toISOString().split('T')[0];}
}

function renderCtPax(){
  const keys = ['1-3','4','5-7'];
  const map = (PRICING.tour_pax && PRICING.tour_pax.custom) ? PRICING.tour_pax.custom : PAX_PRICES;
  document.getElementById('ct-pax-grid').innerHTML = keys.map(k=>{
    const v = PAX_CUSTOM[k];
    const base = (map && (map[k] ?? map['1-3'])) ?? (v?.price ?? 250);
    return `
    <div class="ct-pax-opt ${ctPax===k?'on':''}" onclick="setCtPax('${k}')">
      <div class="ct-pax-price">€${base}</div>
      <div class="ct-pax-lbl">${v?.label || k}</div>
    </div>`;
  }).join('');
}

function setCtPax(key){
  ctPax = key;
  renderCtPax();
  updateCtSummary();
}

function renderCtCats(){
  const cats = ['__all__', ...new Set(TAPPE.map(t=>t.cat))];
  const el=document.getElementById('ct-cats');
  if(!el) return;
  el.innerHTML = cats.map(c=>{
    const label = (c==='__all__') ? _t('ct_cat_all','Tutti') : ((CAT_TR[c] && (CAT_TR[c][curLang] || CAT_TR[c].en)) || c);
    return `<button class="ct-cat-btn ${ctCatFilter===c?'on':''}" onclick="setCtCat('${esc(c)}')">${esc(label)}</button>`;
  }).join('');
}

function setCtCat(cat){
  ctCatFilter = cat;
  renderCtCats();
  renderCtStops();
}

function renderCtStops(){
  const filtered = ctCatFilter === '__all__' ? TAPPE : TAPPE.filter(t=>t.cat===ctCatFilter);
  const count = ctSelected.size;

  const countLabel = count > 0 ? `(${count} ${_t('ct_selected_short','selezionate')})` : '';
  const cEl=document.getElementById('ct-count');
  if(cEl) cEl.textContent = countLabel;

  const grid=document.getElementById('ct-stops-grid');
  if(!grid) return;
  grid.innerHTML = filtered.map(t=>{
    const s = getStop(t.id);
    const short = (s.desc||'').slice(0,60) + ((s.desc||'').length>60?'…':'');
    return `
    <div class="ct-stop ${ctSelected.has(t.id)?'on':''}" onclick="toggleCtStop('${esc(t.id)}')">
      <div style="position:relative;z-index:1;width:100%">
        <div class="ct-stop-name">${esc(s.name)}</div>
        <div class="ct-stop-cat">${esc(s.cat)}</div>
        <div style="font-size:.66rem;color:var(--warm);margin-top:.2rem;line-height:1.4;position:relative;z-index:1">${esc(short)}</div>
      </div>
    </div>`;
  }).join('');
}

function toggleCtStop(id){
  if(ctSelected.has(id)) ctSelected.delete(id);
  else ctSelected.add(id);
  renderCtStops();
  renderCtSelectedStrip();
  updateCtSummary();
}

function renderCtSelectedStrip(){
  const el = document.getElementById('ct-selected');
  if(ctSelected.size === 0){
    el.innerHTML = '<span class="ct-sel-empty">'+(( I18N.ct_no_stops&&I18N.ct_no_stops[curLang])||'No stops selected')+'</span>';
    return;
  }
  const existing = new Map([...el.querySelectorAll('.ct-sel-tag')].map(e=>[e.dataset.id, e]));
  existing.forEach((el, id) => {
    if(!ctSelected.has(id)){
      el.classList.add('removing');
      setTimeout(()=>el.remove(), 250);
    }
  });
  ctSelected.forEach(id => {
    if(!existing.has(id)){
      const t = TAPPE.find(t=>t.id===id);
      if(!t) return;
      const div = document.createElement('div');
      div.className = 'ct-sel-tag';
      div.dataset.id = id;
      div.innerHTML = `${esc(t.name)}<button aria-label="Rimuovi">×</button>`;
      div.querySelector('button').addEventListener('click', e => {
        e.stopPropagation();
        div.classList.add('removing');
        setTimeout(()=>{ toggleCtStop(id); }, 240);
      });
      el.appendChild(div);
    }
  });
  const empty = el.querySelector('.ct-sel-empty');
  if(empty && ctSelected.size > 0) empty.remove();
}

function updateCtSummary(){
  const el = document.getElementById('ct-summary');
  if(!ctPax){el.classList.remove('on');return;}
  const p = PAX_CUSTOM[ctPax];
  const tot = priceForTour('custom', ctPax, ctSelected.size) + (ctSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0);
  const inc = PRICING.custom?.included_stops ?? 10;
  const fee = PRICING.custom?.extra_stop_fee ?? 19.5;
  const extra = Math.max(0, ctSelected.size - inc);
  document.getElementById('ct-sum-pax').textContent = p.label;
  document.getElementById('ct-sum-pr').textContent = 'Base €' + p.price + ' (10 tappe) + €' + fee.toFixed(2).replace('.',',') + '/tappa extra';
  document.getElementById('ct-sum-stops').textContent = 'Tappe scelte';
  document.getElementById('ct-sum-n').textContent = ctSelected.size || '—';
  document.getElementById('ct-sum-tot').textContent = '€' + tot.toFixed(2).replace('.00','');
  el.classList.add('on');
}


function bindCtExtras(){
  const seat=document.getElementById('ct-seat');
  const drinks=document.getElementById('ct-drinks');
  if(seat && seat.dataset.bound!=='1'){
    seat.dataset.bound='1';
    seat.addEventListener('change', ()=>{
      ctSeat=!!seat.checked;
      updateCtSummary();
    });
  }
  if(drinks && drinks.dataset.bound!=='1'){
    drinks.dataset.bound='1';
    drinks.addEventListener('change', ()=>{
      ctDrinks=!!drinks.checked;
    });
  }
}

async function submitCustom(){
  const name = document.getElementById('ct-n').value.trim();
  const email = document.getElementById('ct-e').value.trim();
  const err = document.getElementById('ct-err');
  err.textContent = '';
  if(!name||!email){err.textContent='Compila nome e email. Grazie.';return;}
  if(!ctPax){err.textContent=(I18N.err_select_people&&I18N.err_select_people[curLang])||'Select number of people.';return;}
  if(ctSelected.size === 0){err.textContent=(I18N.err_select_stop&&I18N.err_select_stop[curLang])||'Select at least one stop.';return;}

  const btn = document.getElementById('ct-sb'), btxt = document.getElementById('ct-sb-t');
  btn.disabled = true; btxt.textContent = (I18N.ck_sending&&I18N.ck_sending[curLang])||'Sending...';

  const tappeNomi = [...ctSelected].map(id=>{
    const t = TAPPE.find(t=>t.id===id);
    return t ? t.name : id;
  }).join(', ');

  const extraNotes=[];
  if(ctSeat) extraNotes.push('Seggiolino bimbo: SÌ (+€'+String(CHECKOUT_EXTRAS.child_seat_price||25)+')');
  if(ctDrinks) extraNotes.push('Bevande fresche: richieste');

  try{
    const bRes = await fetch(BE+'/booking',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name, email,
        phone: document.getElementById('ct-ph').value.trim(),
        tour: 'Tour Su Misura: ' + tappeNomi,
        people: PAX_CUSTOM[ctPax]?.label || ctPax,
        date: document.getElementById('ct-d').value,
        time: '',
        notes: 'TAPPE: ' + tappeNomi + (extraNotes.length ? ' | EXTRA: ' + extraNotes.join(' | ') : '') + (document.getElementById('ct-nt').value ? ' | NOTE: ' + document.getElementById('ct-nt').value : ''),
        paymentMethod: 'Richiesta custom',
        stripePaymentId: null,
        amount: priceForTour('custom', ctPax, ctSelected.size) + (ctSeat ? (CHECKOUT_EXTRAS.child_seat_price||25) : 0),
      })
    });
    if(!bRes.ok){const e=await bRes.json().catch(()=>({}));throw new Error(e.error||'Errore invio.');}
    const bData = await bRes.json();
    const okId = document.getElementById('ck-ok-id');
    if(okId && bData.bookingId) okId.textContent = bData.bookingId;
    document.getElementById('ck-custom').classList.remove('on');
    const ok = document.getElementById('ck-ok');
    ok.style.display = 'block'; ok.classList.add('on');
  }catch(er){
    err.textContent = er.message || 'Errore. WhatsApp: +39 320 689 1014 · Tel: +39 391 777 5730';
    btn.disabled = false; btxt.textContent = (I18N.ct_request_btn&&I18N.ct_request_btn[curLang])||'Request Custom Tour →';
  }
}

/* ── CMS CONTENT LOADER ── */
async function loadSiteContent(){
  try{
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),4000);
    const res=await fetch(BE+'/site-content',{signal:controller.signal});
    clearTimeout(timeout);
    if(!res.ok)return;
    const cms=await res.json();

    // Override PRICING RULES
    if(cms.pricing_rules){
      try{
        const pr = (typeof cms.pricing_rules === 'string') ? JSON.parse(cms.pricing_rules) : cms.pricing_rules;
        if(pr && typeof pr === 'object'){
          PRICING = {
            ...PRICING,
            ...pr,
            tour_pax: { ...(PRICING.tour_pax||{}), ...(pr.tour_pax||{}) },
            custom:   { ...(PRICING.custom||{}),   ...(pr.custom||{}) }
          };
        }
      }catch(_e){}
    }

    
    // Override TOURS
    if(cms.tours&&Array.isArray(cms.tours)&&cms.tours.length>0){
      // Merge CMS tours with defaults — replace matching IDs, keep structure
      TOURS.length=0;
      cms.tours.forEach(t=>{
        TOURS.push({
          id:t.id||'',name:t.name||'',tagline:t.tagline||'',sub:t.sub||'',
          pr:parseFloat(t.pr)||0,img:t.img||IMG.guide,avail:t.avail||'Disponibile',
          feat:!!t.feat,fe:t.fe||[],tappe:t.tappe||[]
        });
      });
    }
    
    // Override ESSENZA
    if(cms.essenza&&Array.isArray(cms.essenza)&&cms.essenza.length>0){
      ESSENZA.length=0;
      cms.essenza.forEach(e=>ESSENZA.push({n:e.n||'',ic:e.ic||'star',t:e.t||'',d:e.d||''}));
    }
    
    // Override FAQ
    if(cms.faq&&Array.isArray(cms.faq)&&cms.faq.length>0){
      FAQ_D.length=0;
      cms.faq.forEach(f=>FAQ_D.push({q:f.q||'',a:f.a||''}));
    }
    
    // Override REVIEWS
    if(cms.reviews_site&&Array.isArray(cms.reviews_site)&&cms.reviews_site.length>0){
      REVIEWS.length=0;
      cms.reviews_site.forEach(r=>REVIEWS.push({t:r.t||'',n:r.n||'',l:r.l||'',i:r.i||''}));
    }
    
    // Apply STORIA (manifesto section)
    if(cms.storia){
      const s=cms.storia;
      const lbl=document.querySelector('#s2 .s2-sez-lbl');
      const title=document.querySelector('#s2 .s2-sez-title');
      const p1=document.querySelectorAll('#s2 .s2-p')[0];
      const p2=document.querySelectorAll('#s2 .s2-p')[1];
      const img1=document.querySelector('#s2 .s2-main-img');
      const img2=document.querySelector('#s2 .s2-acc-img');
      const badge=document.querySelector('#s2 .s2-bn');
      // Storia text from i18n only
      if(s.img1&&img1)img1.src=s.img1;
      if(s.img2&&img2)img2.src=s.img2;
      if(s.badge&&badge)badge.textContent=s.badge;
      // Stats
      if(s.stats&&Array.isArray(s.stats)){
        const statEls=document.querySelectorAll('#s2 .s2-stat');
        s.stats.forEach((st,i)=>{
          if(statEls[i]){
            const n=statEls[i].querySelector('.s2-stat-n');
            const l=statEls[i].querySelector('.s2-stat-l');
            if(n&&st.value){n.textContent=st.value;n.removeAttribute('data-count');}
            if(l&&st.label)l.textContent=st.label;
          }
        });
      }
    }
    

    // Apply ACCESSIBILITY banner text
    // Accessibility from i18n only


    // Apply CHECKOUT EXTRAS — only keep numeric fields (prices) from CMS
    // Text fields (seat_label, drinks_label, water_note, acc_top_html) are ALWAYS from i18n
    if(cms.checkout_extras){
      try{
        const ex = (typeof cms.checkout_extras === 'string') ? JSON.parse(cms.checkout_extras) : cms.checkout_extras;
        if(ex && typeof ex === 'object'){
          const safeEx = {};
          ['child_seat_price','drinks_price','seat_price'].forEach(k=>{ if(ex[k]!==undefined) safeEx[k]=ex[k]; });
          CHECKOUT_EXTRAS = {...CHECKOUT_EXTRAS, ...safeEx};
        }
      }catch(_e){}
    }
    applyCheckoutExtras();

    // Apply CONTACTS (numeri, email, link)
    if(cms.contacts){
      try{
        const c = (typeof cms.contacts === 'string') ? JSON.parse(cms.contacts) : cms.contacts;
        if(c && typeof c === 'object') applyContacts(c);
      }catch(_e){}
    }else{
      // ensure defaults applied
      applyContacts(CONTACTS);
    }

    // Apply THEME
    if(cms.theme){
      applyTheme(cms.theme);
    }

    // Apply BLOG ARTICLES
    if(cms.blog_articles&&Array.isArray(cms.blog_articles)&&cms.blog_articles.length>0){
      BLOG_ARTICLES=cms.blog_articles.map(a=>({
        id:a.id||'blog'+Date.now(),
        title:a.title||'',
        cat:a.cat||'',
        excerpt:a.excerpt||'',
        content:a.content||'',
        img:a.img||'',
        date:a.date||'',
        tags:Array.isArray(a.tags)?a.tags:(typeof a.tags==='string'?a.tags.split(',').map(t=>t.trim()).filter(Boolean):[])
      }));
      renderBlog();
    }
    
  }catch(e){
    console.warn('[CMS] Contenuti remoti non disponibili, uso defaults —', e.message||e);
  }
}

function applyTheme(theme){
  if(!theme)return;
  const root=document.documentElement;
  const vars=['gold','gold-l','gold-d','ink','espresso','ivory','surface','cream','marble','stone','warm'];
  vars.forEach(v=>{
    if(theme[v])root.style.setProperty('--'+v,theme[v]);
  });
  // Derived transparent colors from gold
  if(theme.gold){
    const gc=hexToRgb(theme.gold);
    if(gc){
      root.style.setProperty('--gold-f',`rgba(${gc.r},${gc.g},${gc.b},.10)`);
      root.style.setProperty('--gold-b',`rgba(${gc.r},${gc.g},${gc.b},.22)`);
    }
  }
  // Body background
  if(theme.ink)document.body.style.background=theme.ink;
  // === EXTENDED THEME PROPERTIES ===
  // Font override
  if(theme.fontDisplay)root.style.setProperty('--ff-d',theme.fontDisplay);
  if(theme.fontBody)root.style.setProperty('--ff-b',theme.fontBody);
  // Load Google Font dynamically if needed
  if(theme.googleFontUrl){
    if(!document.querySelector('link[data-theme-font]')){
      const lk=document.createElement('link');lk.rel='stylesheet';lk.href=theme.googleFontUrl;lk.dataset.themeFont='1';document.head.appendChild(lk);
    }else{
      document.querySelector('link[data-theme-font]').href=theme.googleFontUrl;
    }
  }
  // Border radius
  if(theme.radius)root.style.setProperty('--r',theme.radius);
  if(theme.radiusLg)root.style.setProperty('--r-lg',theme.radiusLg);
  // Hero overlay style
  const s0ov=document.querySelector('.s0-overlay');
  if(s0ov&&theme.heroOverlay)s0ov.style.background=theme.heroOverlay;
  // Hero video filter
  const s0vid=document.querySelector('#s0 video');
  if(s0vid&&theme.heroFilter)s0vid.style.filter=theme.heroFilter;
  // Tour grid layout
  const hub=document.getElementById('tours-hub');
  if(hub&&theme.tourGrid){
    hub.style.gridTemplateColumns=theme.tourGrid.cols||'';
    hub.style.gridTemplateRows=theme.tourGrid.rows||'';
    hub.style.gap=theme.tourGrid.gap||'';
  }
  // Tour card border radius
  document.querySelectorAll('.th').forEach(th=>{
    if(theme.cardRadius)th.style.borderRadius=theme.cardRadius;
  });
  // Navbar style
  const nav=document.getElementById('nav');
  if(nav&&theme.navBg)nav.dataset.themeBg=theme.navBg;
  // CTA button style
  if(theme.ctaRadius){
    document.querySelectorAll('.btn-g,.btn-ol,.btn-dk,.btn-ol-dk,.ck-sub,.ck-wa').forEach(b=>{
      b.style.borderRadius=theme.ctaRadius;
    });
  }
  // Card essenza style
  document.querySelectorAll('.s2-ec').forEach(c=>{
    if(theme.cardRadius)c.style.borderRadius=theme.cardRadius;
  });
  // Review card style
  document.querySelectorAll('.rc').forEach(c=>{
    if(theme.cardRadius)c.style.borderRadius=theme.cardRadius;
  });
  // Contact strip radius
  const cont=document.querySelector('.s3-cont');
  if(cont&&theme.cardRadius)cont.style.borderRadius=theme.cardRadius;
  // CTA banner radius
  const cta=document.querySelector('.s3-cta');
  if(cta&&theme.cardRadius)cta.style.borderRadius=theme.cardRadius;
  // FAQ item separator color
  if(theme.faqBorder){
    document.querySelectorAll('.faq-item').forEach(f=>{f.style.borderColor=theme.faqBorder});
  }
  // Light mode: invert key colors
  if(theme.preset==='light'||theme.mode==='light'){
    document.body.style.background=theme.ivory||'#FAFAF7';
    root.style.setProperty('--txt',theme.espresso||'#2E2218');
    root.style.setProperty('--txt2',theme.warm||'#6A6058');
    // Scene backgrounds for light mode
    const s0=document.getElementById('s0');if(s0)s0.style.background=theme.ink||'#1a1510';
    const s1=document.getElementById('s1');if(s1)s1.style.background=theme.surface||'#FFFFFF';
    const s2=document.getElementById('s2');if(s2)s2.style.background=theme.ivory||'#FFFFFF';
    const s3=document.getElementById('s3');if(s3)s3.style.background=theme.ink||'#1a1510';
    // Checkout
    const ckp=document.getElementById('ck-panel');if(ckp)ckp.style.background=theme.surface||'#FFFFFF';
  }else{
    // Dark modes: set scene backgrounds from theme
    const s1=document.getElementById('s1');if(s1)s1.style.background=theme.surface||'#F5F0E8';
    const s2=document.getElementById('s2');if(s2)s2.style.background=theme.ivory||'#F8F4EE';
  }
  // S3 (community) always uses ink
  const s3=document.getElementById('s3');
  if(s3&&theme.ink)s3.style.background=theme.ink;
  // Border colors derived from ink
  if(theme.ink){
    const ic=hexToRgb(theme.ink);
    if(ic){
      root.style.setProperty('--border',`rgba(${ic.r},${ic.g},${ic.b},.10)`);
      root.style.setProperty('--border2',`rgba(${ic.r},${ic.g},${ic.b},.20)`);
    }
  }
  // Chatbot colors
  const cbot=document.getElementById('cbot');
  if(cbot){
    if(theme.chatBg)cbot.style.background=theme.chatBg;
  }
  const cbotHd=document.querySelector('.cbot-hd');
  if(cbotHd&&theme.ink)cbotHd.style.background=theme.ink;
}

function applyContacts(c){
  if(!c||typeof c!=='object')return;
  CONTACTS = {...CONTACTS, ...c};
  const waDigits = (CONTACTS.whatsapp_wa || String(CONTACTS.whatsapp_number||'').replace(/[^0-9]/g,''));
  const phone2Digits = (CONTACTS.phone2_tel || String(CONTACTS.phone2||'').replace(/[^0-9]/g,''));
  // Update all WhatsApp links
  if(waDigits){
    document.querySelectorAll('a[href*="wa.me/"]').forEach(a=>{a.href='https://wa.me/'+waDigits;});
  }
  // Update visible numbers
  const waEl=document.getElementById('c-wa'); if(waEl&&CONTACTS.whatsapp_number) waEl.textContent=CONTACTS.whatsapp_number;
  const ph2El=document.getElementById('c-ph2'); if(ph2El&&CONTACTS.phone2) ph2El.textContent=CONTACTS.phone2;
  const ph2Link=document.getElementById('c-ph2-link'); if(ph2Link&&phone2Digits) ph2Link.href='tel:+'+phone2Digits;
  const mailEl=document.getElementById('c-mail'); if(mailEl&&CONTACTS.email) mailEl.textContent=CONTACTS.email;
}

function applyCheckoutExtras(){
  // i18n is the ONLY source for text — fallback is English, never Italian CMS text
  const _t=(k)=> (I18N[k] && (I18N[k][curLang] || I18N[k].en)) || '';

  const price = Number(CHECKOUT_EXTRAS.child_seat_price ?? DEFAULT_CHECKOUT_EXTRAS.child_seat_price ?? 25);
  const priceTxt = (Number.isFinite(price)?price:25).toString().replace('.0','');

  // Seat label — pure i18n, no CMS fallback
  const seatTpl = _t('ck_seat_label_tpl') || 'Child seat (+€{price})';
  const seatHtml = seatTpl.replace('{price}', `<span id="ck-seat-price">${priceTxt}</span>`);
  const seatEl=document.getElementById('ck-seat-label');
  if(seatEl) seatEl.innerHTML=seatHtml;
  const seatHtml2 = seatTpl.replace('{price}', `<span id="ct-seat-price">${priceTxt}</span>`);
  const seatEl2=document.getElementById('ct-seat-label');
  if(seatEl2) seatEl2.innerHTML=seatHtml2;

  // Drinks label — pure i18n
  const drinksTpl = _t('ck_drinks_label_tpl') || 'Cold drinks on request (WhatsApp)';
  const d1=document.getElementById('ck-drinks-label'); if(d1) d1.innerHTML=drinksTpl;
  const d2=document.getElementById('ct-drinks-label'); if(d2) d2.innerHTML=drinksTpl;

  // Water note — pure i18n
  const waterTxt = _t('ck_water_note_tpl') || 'Fresh water always free during the tour.';
  const w1=document.getElementById('ck-water-note');
  if(w1){ const ico=w1.querySelector('svg')?w1.querySelector('svg').outerHTML:''; w1.innerHTML=ico+' '+esc(waterTxt); }
  const w2=document.getElementById('ct-water-note');
  if(w2){ const ico=w2.querySelector('svg')?w2.querySelector('svg').outerHTML:''; w2.innerHTML=ico+' '+esc(waterTxt); }

  // Accessibility bar — pure i18n
  const accHtml = _t('ck_accessibility_html') || '<strong>Accessibility:</strong> suitable for all ages. Fresh water always free.';
  const a1=document.getElementById('ck-acc-top'); if(a1) a1.innerHTML=accHtml;
  const a2=document.getElementById('ct-acc-top'); if(a2) a2.innerHTML=accHtml;
}

function hexToRgb(hex){
  hex=hex.replace('#','');
  if(hex.length!==6)return null;
  return{r:parseInt(hex.substr(0,2),16),g:parseInt(hex.substr(2,2),16),b:parseInt(hex.substr(4,2),16)};
}

/* ═══════════════════════════════════════
   ANALYTICS TRACKING
═══════════════════════════════════════ */
function analyticsTrack(eventName,data,pageOverride){
  try{
    if(typeof BE==='undefined'||!BE) return;
    var deviceInfo={
      userAgent:navigator.userAgent||'',
      screenW:screen.width||0,
      screenH:screen.height||0,
      viewW:window.innerWidth||0,
      viewH:window.innerHeight||0,
      touch:'ontouchstart' in window||navigator.maxTouchPoints>0
    };
    var payload={
      event:String(eventName||'').slice(0,80),
      page:(pageOverride || location.pathname || '').slice(0,100),
      data:Object.assign({},deviceInfo,data||{})
    };
    var url=BE+'/analytics/track';
    var body=JSON.stringify(payload);
    fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:body,
      keepalive:true
    }).catch(function(){
      try{if(navigator.sendBeacon){navigator.sendBeacon(url,new Blob([body],{type:'application/json'}));}}catch(_b){}
    });
  }catch(_e){}
}

function bindAnalyticsDelegates(){
  if(document.body&&document.body.dataset.analyticsBound==='1') return;
  if(document.body) document.body.dataset.analyticsBound='1';
  document.addEventListener('click',function(e){
    var wa = e.target.closest && e.target.closest('a[href*="wa.me/"], a[href*="api.whatsapp.com/"]');
    if(wa){
      analyticsTrack('whatsapp_click',{href:wa.getAttribute('href')||'',text:(wa.textContent||'').trim().slice(0,120),scene:typeof curScene!=='undefined'?curScene:null});
      return;
    }
    var mail = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if(mail){
      analyticsTrack('email_click',{href:mail.getAttribute('href')||'',text:(mail.textContent||'').trim().slice(0,120),scene:typeof curScene!=='undefined'?curScene:null});
      return;
    }
    var tel = e.target.closest && e.target.closest('a[href^="tel:"]');
    if(tel){
      analyticsTrack('phone_click',{href:tel.getAttribute('href')||'',text:(tel.textContent||'').trim().slice(0,120),scene:typeof curScene!=='undefined'?curScene:null});
    }
  },true);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',()=>{
  // 1. Render immediately with hardcoded data
  renderTours();renderEss();renderRevs();renderComm();renderFAQ();renderBlog();
  bindCkTappeDesc();
  // Apply saved language immediately
  setLang(curLang);
  const di=document.getElementById('ck-d');
  if(di){const d=new Date();d.setDate(d.getDate()+1);di.min=d.toISOString().split('T')[0];}
  fetch(BE+'/health').then(r=>r.json()).then(d=>{
    const st=document.getElementById('cbot-st');
    if(st&&I18N.chat_online)st.textContent=I18N.chat_online[curLang]||(d.anthropic?'Online':'Offline');
   }).catch(()=>{});
  setTimeout(()=>{if(!cOpen){const b=document.getElementById('cbdg');if(b)b.style.display='flex';}},8000);
  bindAnalyticsDelegates();
  analyticsTrack('page_view',{scene:typeof curScene!=='undefined'?curScene:0,lang:curLang,referrer:document.referrer||'',title:document.title||''});
  document.getElementById('nav').classList.remove('dark-nav');
  // Multi-page: show correct scene based on current URL
  (function(){
    const path = location.pathname.replace(/\//g,'').toLowerCase() || 'index';
    const pageMap = {'':'0','index':'0','tours':'1','esplora':'2','storia':'2','community':'3'};
    const n = pageMap[path] || '0';
    document.querySelectorAll('.scene').forEach((s,i)=>{
      s.classList.toggle('active', String(i)===n);
    });
    document.querySelectorAll('.sdot').forEach((d,i)=>{
      d.classList.toggle('on', String(i)===n);
    });
    curScene = parseInt(n);
  })();
  // 2. Load CMS content in background, then re-apply language on top
  loadSiteContent().then(()=>{
    renderTours();renderEss();renderRevs();renderComm();renderFAQ();renderBlog();
    // ALWAYS re-apply language after CMS load so translations win over CMS Italian text
    setLang(curLang);
    if(typeof applyCheckoutExtras==='function') applyCheckoutExtras();
  }).catch(()=>{});
});


/* ═══════════════════════════════════════
   TOUR PAGE PREMIUM CARD STRINGS
═══════════════════════════════════════ */
Object.assign(I18N, {
  "t_prices_short": {"it":"Da €230","en":"From €230","fr":"Dès €230","de":"Ab €230","es":"Desde €230"},
  "t_duration": {"it":"Durata","en":"Duration","fr":"Durée","de":"Dauer","es":"Duración"},
  "t_group_label": {"it":"Gruppo","en":"Group","fr":"Groupe","de":"Gruppe","es":"Grupo"},
  "tour_private": {"it":"Privato","en":"Private","fr":"Privé","de":"Privat","es":"Privado"},
  "tour_strengths": {"it":"Punti forti","en":"Highlights","fr":"Points forts","de":"Highlights","es":"Puntos fuertes"},
  "tour_pickup": {"it":"Pick-up incluso","en":"Hotel pickup","fr":"Pick-up inclus","de":"Abholung inklusive","es":"Recogida incluida"},
  "tour_grand_desc_short": {"it":"3 ore tra i gioielli del centro storico, in totale comfort e senza fretta.","en":"3 hours through the jewels of Rome's historic center, in total comfort and with no rush.","fr":"3 heures parmi les joyaux du centre historique, dans un confort total et sans précipitation.","de":"3 Stunden durch die Juwelen der Altstadt, in vollem Komfort und ohne Eile.","es":"3 horas entre las joyas del centro histórico, con total comodidad y sin prisas."},
  "tour_grand_h1": {"it":"Centro storico iconico","en":"Iconic city center","fr":"Centre historique iconique","de":"Ikonisches Zentrum","es":"Centro histórico icónico"},
  "tour_grand_h2": {"it":"Comfort totale","en":"Total comfort","fr":"Confort total","de":"Maximaler Komfort","es":"Confort total"},
  "tour_grand_h3": {"it":"Prima volta memorabile","en":"Memorable first time","fr":"Première fois mémorable","de":"Unvergesslicher erster Besuch","es":"Primera vez memorable"},
  "tour_ess_desc_short": {"it":"Il meglio di Roma, nella giusta dose e con zero stress logistico.","en":"The best of Rome in the right dose, with zero logistical stress.","fr":"Le meilleur de Rome, à la bonne dose et sans stress logistique.","de":"Das Beste von Rom, in der richtigen Dosis und ohne logistischen Stress.","es":"Lo mejor de Roma, en la dosis justa y sin estrés logístico."},
  "tour_ess_h1": {"it":"Must-see selezionati","en":"Carefully selected must-sees","fr":"Incontournables sélectionnés","de":"Ausgewählte Highlights","es":"Imprescindibles seleccionados"},
  "tour_ess_h2": {"it":"Perfetto se hai poco tempo","en":"Perfect if time is limited","fr":"Parfait si vous avez peu de temps","de":"Perfekt bei wenig Zeit","es":"Perfecto si tienes poco tiempo"},
  "tour_ess_h3": {"it":"Esperienza fluida","en":"Smooth experience","fr":"Expérience fluide","de":"Flüssiges Erlebnis","es":"Experiencia fluida"},
  "tour_hidden_desc_short": {"it":"La Roma che i locali tengono per sé, tra angoli rari e fascino autentico.","en":"The Rome locals keep to themselves, filled with rare corners and authentic charm.","fr":"La Rome que les locaux gardent pour eux, entre coins rares et charme authentique.","de":"Das Rom, das Einheimische für sich behalten, voller seltener Ecken und echtem Charme.","es":"La Roma que los locales guardan para sí, entre rincones raros y encanto auténtico."},
  "tour_hidden_h1": {"it":"Roma meno turistica","en":"Less touristy Rome","fr":"Une Rome moins touristique","de":"Weniger touristisches Rom","es":"Una Roma menos turística"},
  "tour_hidden_h2": {"it":"Atmosfera locale","en":"Local atmosphere","fr":"Atmosphère locale","de":"Lokale Atmosphäre","es":"Ambiente local"},
  "tour_hidden_h3": {"it":"Forte valore percepito","en":"High perceived value","fr":"Forte valeur perçue","de":"Hoher wahrgenommener Wert","es":"Alto valor percibido"},
  "tour_dark_desc_short": {"it":"Un tour più intenso, evocativo e magnetico per chi cerca carattere e mistero.","en":"A darker, more evocative and magnetic tour for guests seeking character and mystery.","fr":"Un tour plus intense, évocateur et magnétique pour ceux qui recherchent caractère et mystère.","de":"Eine intensivere, atmosphärischere und magnetische Tour für Gäste mit Sinn für Charakter und Mysterium.","es":"Un tour más intenso, evocador y magnético para quienes buscan carácter y misterio."},
  "tour_dark_h1": {"it":"Mood cinematografico","en":"Cinematic mood","fr":"Ambiance cinématographique","de":"Filmische Stimmung","es":"Mood cinematográfico"},
  "tour_dark_h2": {"it":"Roma più misteriosa","en":"Rome's mysterious side","fr":"Le côté mystérieux de Rome","de":"Roms geheimnisvolle Seite","es":"La Roma más misteriosa"},
  "tour_dark_h3": {"it":"Esperienza memorabile","en":"Memorable experience","fr":"Expérience mémorable","de":"Denkwürdiges Erlebnis","es":"Experiencia memorable"},
  "tour_custom_desc_short": {"it":"Scegli tu le tappe, mantieni il comfort Aura e costruisci una Roma più tua. Prezzi chiari per fascia ospiti, richiesta semplice e zero attrito.","en":"Choose your stops, keep the Aura comfort, and shape a more personal Rome. Clear pricing by guest range, simple request, zero friction.","fr":"Choisissez vos arrêts, gardez le confort Aura et composez une Rome plus personnelle. Tarifs clairs, demande simple, zéro friction.","de":"Wähle deine Stopps, behalte den Aura-Komfort und gestalte dein eigenes Rom. Klare Preise, einfache Anfrage, null Reibung.","es":"Elige tus paradas, mantén el confort Aura y crea una Roma más tuya. Precios claros, solicitud simple y cero fricción."}
});
