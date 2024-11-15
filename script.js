// Tanışma anını sayaca yerleştir
document.getElementById("time").textContent = "17 Kasım 2021, 12:24";

// Şiir metinleri
const poems = {
    poem1: `Zehra, gözlerin bir yıldız, parlayan gece,
    Her bakışınla kalbimi aydınlatan hece.
    Saçlarının rüzgarla dansı gibi zarif,
    Her hareketinle büyülenirim, sevdanın tarif.
    
    Gülüşün, baharda açan çiçekler gibi,
    İçimdeki tüm karanlıkları siler, gider.
    Adını her düşündüğümde içim ısınır,
    Sana duyduğum sevda, her an taze, her an taze.
    
    Yüzündeki huzur, içimdeki fırtına,
    Sonsuz bir güzellik, seninle her an bir rüya.
    Zehra, seninle her şey çok farklı, çok özel,
    Sana her bakışımda dünya durur, en güzel.`,
    
    poem2: `Zehra, seninle her an bir bahar rüzgarı,
    Gözlerinde kaybolurum, seninle her şey canlanır.
    Saçlarının her teli bir yelken gibi özgür,
    Sözlerinle ruhum uçuşur, her an daha da büyür.
    
    Gülüşün, içimde açan en güzel çiçek,
    Beni sarar, sarmalar, her şeyin anlamı tek.
    Senin yanında dünya güzel, her şey en parlak,
    Zehra, seninle hayatın renkleri bir başka, bir başka.
    
    Seninle her an bir masal, her bakışın bir öykü,
    Kalbimde sevdanla, her an senin için döner küre.
    Zehra, adını her duyduğumda içim ısınır,
    Seninle her şey güzel, her şey bir başka bir gün.`,
    
    poem3: `Zehra, seninle her an bir başka güzellik,
    Gözlerinde kaybolurum, ruhumda bir derinlik.
    Saçların bir rüzgar, kalbimde esen fırtına,
    Her bakışınla huzur bulurum, içimde bir dokunuş var.
    
    Gülüşün bir melodi, her notası kalbime düşer,
    Sözlerinle hayat bulur her an, her yer.
    Bir gülüşünle dünyam değişir, yeni bir yön bulur,
    Zehra, seninle her şey mümkün, her şey unutulur.
    
    Seninle her an bir şiir, her bakış bir öykü,
    Sevdanla büyür içimdeki her düşünce.
    Zehra, senin adınla dünya güzel, hayat aydınlık,
    Sonsuza kadar seninle olmak, tek dileğim, en doğru.`,
    
    // Diğer şiirler buraya eklenebilir
    poem4: `Zehra, seninle her an zamanın dışına çıkarım,
    Saatler geçse de, biz hep burada kalırız.
    Gözlerinde kaybolur, dünyanın ne olduğunu unuturum,
    Birlikteyken her şeyin anlamı bambaşka olur, dururum.
    
    Zamanın koştuğu yolda biz yavaş adımlarız,
    Seninle geçen her an sonsuzluk gibi bir arzumuz.
    Bir bakışınla dünyam durur, tüm sesler kaybolur,
    Seninle her an bir ömre bedel, bir sevda yolculuğudur.
    
    Zehra, zamanın dışına adım atarken seninle,
    Hiçbir şey bizi ayıramaz, her şey sadece seninle.
    Birlikteyken zamanı da, hayatı da yeneceğiz,
    Zehra, seninle her şey, her an, sonsuz olacak bizce`,
    poem5: `Zehra, bir gün sabahın ilk ışıkları,
    Birlikte uyanacak, aynı anı paylaşacağız.
    Şimdi ekranda gülümsediğini görmek yeter,
    Ama o gün geldiğinde, her şey daha canlı olacak.
    
    Her sabahım, sesini duymakla başlar,
    Birlikte uyanmak, hayal değil, bir gerçek olacak.
    Elini tutacak, gözlerine bakacağım,
    Ve tüm bu dijital mesafeler silinecek, kaybolacak.
    
    Birlikte uyanmak, her sabah bir başlangıç,
    Yanında, aynı odada, seninle gülümsemek.
    Zehra, sabırsızlıkla bekliyorum o anı,
    Gerçekle buluşacak her hayalimiz, her adımımız.`,
    poem6: `Zehra, seninle her an bir ömre bedel,
    Kalbimde açan sevda, seninle her gün yeşerir.
    Bir gülüşünle içimdeki dünya parlar,
    Seninle geçen her an, tüm zamanları aşar.
    
    Gözlerinde kaybolurum, sevdamın derinliğinde,
    Her bakışında bir hayat var, seninle her şey bambaşka.
    Sonsuz bir sevda bu, her an büyür, her an çoğalır,
    Zehra, seni sevmenin tarifi yok, her an içimde yankı bulur.
    
    Birlikte geçirdiğimiz her an bir masal,
    Seninle her şeyin anlamı, sevdamla anlaşılan bir bal.
    Seninle her şey doğru, her şey güzel,
    Zehra, seni sevmenin anlamı her şeyin ötesinde, en özel.`,
    poem7: `Zehra, seninle her an bir başka güzel,
    Kalbimde açan her çiçek, seninle yeşerir, neşelidir.
    Gözlerine her baktığımda, içimde bir dünya uyanır,
    Seninle her an, her düşünce bir sevdaya dönüşür.
    
    Bir gülüşünle karanlıklar aydınlanır,
    İçimdeki boşluk seninle dolar, her an huzurla büyür.
    Sevdanla her gün yeniden doğarım,
    Zehra, seni sevmenin tarifini bulamam, çünkü her an yenidir.
    
    Seninle her şey anlamlı, her şey başka,
    Birlikte geçirdiğimiz her an, ömrüme en değerli parça.
    Kalbimde sen varsın, her an, her yerde,
    Zehra, seni sevmek, hayatımın en özel sırrı, hep kalacak bende.`,
    poem8: `Zehra, seninle her an bir rüya gibi,
    Kalbimde her düşünce seninle büyür, hep seni severim.
    Bir bakışınla içimde sevda çiçek açar,
    Sonsuz bir sevgi bu, her zaman seninle var.
    
    Gözlerinde kaybolurum, bir dünya bulurum,
    Sözlerinde huzur, her kelimede bir öykü duyarım.
    Bir gülüşünle karanlıklar yok olur,
    Zehra, seninle hayatın anlamı taze, her an yeni bir yol bulur.
    
    Birlikte her anı yaşamak, her anı hissetmek,
    Sonsuz sevdamla seni hep arzulamak.
    Zehra, seni sevmek, bu dünyada en büyük şans,
    Ve her geçen an, bu sevda bir adım daha yakın sana, her zaman, her zaman.`,
    poem9: `Kalbim sadece senin için...`,
    poem10: `Birlikte yavaşça...`,
};

// Şiir gösterme fonksiyonu
function displayPoem(poemId) {
    document.getElementById("poem-display").textContent = poems[poemId];
}
