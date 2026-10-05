import type { Service } from "@/types";

/**
 * Sadece işletmenin GERÇEKTEN verdiği hizmetler.
 * Yeni hizmet eklerken yalnızca fiilen yapılan işleri ekleyin.
 */
export const services: Service[] = [
  {
    id: "kapi-acma",
    slug: "kapi-acma",
    title: "Kapı Açma",
    description:
      "Anahtarınız içeride kaldı veya kayboldu mu? Ev ve iş yeri kapılarını uygun durumlarda hasarsız yöntemlerle açıyoruz.",
    icon: "🚪",
    h1: "Düzce Kapı Açma Hizmeti",
    metaTitle: "Düzce Kapı Açma – 7/24 Acil Çilingir",
    metaDescription:
      "Düzce'de 7/24 kapı açma: anahtar içeride kaldıysa, kaybolduysa veya kilit arızalandıysa arayın. Merkez'de ortalama 5-10 dakikada adresinizdeyiz.",
    image: { file: "kapi-acma.webp", alt: "Düzce Çilingirci ustasının daire kapısını açarken çekilmiş fotoğrafı" },
    intro: [
      "Kapının önünde kalmak, özellikle gece saatlerinde ya da yanınızda çocuk varken can sıkıcı bir durumdur. Düzce Çilingirci olarak Düzce Merkez ve çevresinde ev, daire ve iş yeri kapıları için 7 gün 24 saat kapı açma hizmeti veriyoruz.",
      "Düzce Merkez'de ortalama 5-10 dakika içinde adresinize ulaşıyoruz. Merkez dışındaki ilçelerde süre mesafeye ve trafiğe göre değişir; aradığınızda tahmini varış süresini size açıkça söyleriz.",
    ],
    sections: [
      {
        heading: "Hangi durumlarda kapı açıyoruz?",
        list: [
          "Anahtar evin içinde kaldı ve kapı çekilerek kapandı",
          "Anahtar kayboldu veya çalındı",
          "Anahtar kilidin içinde kırıldı",
          "Kilit arızalandı, anahtar dönmüyor",
          "İş yeri, depo veya dükkân kapısı açılamıyor",
          "Çelik kapı kilidi kilitli kaldı",
        ],
      },
      {
        heading: "Kapı açma nasıl yapılıyor?",
        paragraphs: [
          "Adrese geldiğimizde önce kapı ve kilit tipine bakarız. Kapı sadece çekilerek kapanmışsa (dil kilidi) ya da kilit tipi uygunsa, kapıya ve kilide zarar vermeyen yöntemlerle açmayı deneriz. Uygun durumlarda hasarsız açma yöntemleri tercih edilir.",
          "Her kilit her yöntemle açılamaz. Kilit birkaç tur kilitlenmişse, yüksek güvenlikli bir silindir kullanılıyorsa veya kilit zaten arızalıysa göbeğin (silindirin) değiştirilmesi gerekebilir. Böyle bir durumda işe başlamadan önce sizi bilgilendirir, onayınızı alırız.",
        ],
      },
      {
        heading: "Güvenliğiniz için kimlik kontrolü",
        paragraphs: [
          "Kapı açma işlemi güvenlik gerektiren bir iştir. Kapı açıldıktan sonra adreste oturduğunuzu gösteren bir belge veya kimlik görmek isteyebiliriz. Bu uygulama, başkasının evine izinsiz girilmesini önlemek ve sizi korumak içindir.",
        ],
      },
      {
        heading: "Kapı açıldıktan sonra ne yapmalı?",
        paragraphs: [
          "Anahtarınız kaybolduysa veya çalındıysa, kaybolan anahtarın kimin eline geçtiğini bilemezsiniz. Bu durumda kilit göbeğini değiştirmenizi öneririz. Aynı ziyarette kilit değiştirme işlemini de yapabiliriz.",
          "Anahtar sadece içeride kaldıysa, bir yedek anahtar yaptırıp güvendiğiniz bir yakınınıza bırakmak bir sonraki sefer işinizi kolaylaştırır.",
        ],
      },
      {
        heading: "Ücret",
        paragraphs: [
          "Kapı açma ücreti kapı ve kilit tipine, saate ve adresin uzaklığına göre değişir. Telefonda durumu anlatırsanız size bilgi veririz; ek bir işlem (örneğin göbek değişimi) gerekirse yapılmadan önce ücretini söyleriz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kapı açılırken kapıya zarar gelir mi?",
        answer:
          "Uygun durumlarda hasarsız açma yöntemleri kullanıyoruz. Bazı kilit tiplerinde veya arızalı kilitlerde göbek değişimi gerekebilir; bu durumda işleme başlamadan önce sizi bilgilendiriyoruz.",
      },
      {
        question: "Gece de kapı açıyor musunuz?",
        answer:
          "Evet, 7 gün 24 saat hizmet veriyoruz. Gece saatlerinde de telefon veya WhatsApp ile ulaşabilirsiniz.",
      },
      {
        question: "Ne kadar sürede gelirsiniz?",
        answer:
          "Düzce Merkez'de ortalama 5-10 dakikada adresinizdeyiz. Diğer ilçelerde süre mesafeye göre değişir; aradığınızda tahmini süreyi söyleriz.",
      },
    ],
    relatedPosts: [
      "kapiniz-kilitlendiginde-yapmaniz-gerekenler",
      "ev-anahtarinizi-kaybettiginizde-ne-yapmalisiniz",
    ],
  },
  {
    id: "kilit-degistirme",
    slug: "kilit-degistirme",
    title: "Kilit Değiştirme",
    description:
      "Anahtar kaybı, taşınma veya arızalı kilit sonrası kapı kilidi ve göbek (silindir) değişimini adresinizde yapıyoruz.",
    icon: "🔐",
    h1: "Düzce Kilit Değiştirme Hizmeti",
    metaTitle: "Düzce Kilit ve Göbek Değiştirme",
    metaDescription:
      "Düzce'de kapı kilidi ve göbek (silindir) değiştirme. Anahtar kaybı, yeni ev veya arızalı kilit için adresinizde değişim. 7/24 ulaşın.",
    image: { file: "kilit-degistirme.webp", alt: "Kapıya yeni kilit göbeği takılırken çekilmiş yakın plan fotoğraf" },
    intro: [
      "Kilit, evinizin ya da iş yerinizin ilk güvenlik katmanıdır. Eskimiş, arızalı veya anahtarı başkasının elinde olabilecek bir kilit ciddi bir risk demektir. Düzce Çilingirci olarak Düzce Merkez ve çevresinde kapı kilidi ve kilit göbeği (silindir) değişimini adresinizde yapıyoruz.",
      "Çoğu durumda kapının tamamını değil, sadece kilit göbeğini değiştirmek yeterlidir. Bu hem daha hızlı hem de daha ekonomik bir çözümdür.",
    ],
    sections: [
      {
        heading: "Kilidinizi ne zaman değiştirmelisiniz?",
        list: [
          "Anahtarınız kaybolduysa veya çalındıysa",
          "Yeni bir eve ya da iş yerine taşındıysanız (önceki sahiplerde anahtar kalmış olabilir)",
          "Kiracı değiştiyse",
          "Anahtar zor dönüyor, takılıyor veya kilit sıkışıyorsa",
          "Kapıya zorlama veya hırsızlık girişimi olduysa",
          "Kilit çok eskiyse ve güvenlik seviyesi düşükse",
        ],
      },
      {
        heading: "Göbek değişimi ile kilit değişimi arasındaki fark",
        paragraphs: [
          "Kapılarda anahtarın girdiği silindir parçasına göbek denir. Anahtar kaybı ve taşınma gibi durumlarda genellikle sadece göbeği değiştirmek yeterlidir; kapının içindeki kilit gövdesi aynı kalır.",
          "Kilit gövdesinin kendisi arızalanmışsa, dil çıkmıyor veya mekanizma kırılmışsa kilidin tamamının değişmesi gerekebilir. Adrese geldiğimizde kilidi kontrol eder, hangi işlemin gerektiğini size açıkça anlatırız.",
        ],
      },
      {
        heading: "Doğru göbeği seçmek",
        paragraphs: [
          "Göbekler farklı güvenlik seviyelerinde üretilir. Kapınızın tipine, ölçüsüne ve beklentinize göre uygun seçenekleri gösterir, aralarındaki farkı anlatırız. Gereksiz pahalı bir ürüne yönlendirmek yerine kapınıza uygun olanı öneririz.",
          "Göbek değişiminden sonra yeni anahtarlarınızı teslim ederiz. Kaç anahtara ihtiyacınız olduğunu önceden söylerseniz ek kopyaları da hazırlayabiliriz.",
        ],
      },
      {
        heading: "Ücret",
        paragraphs: [
          "Ücret; seçilen göbeğin modeline, kapı tipine ve adrese göre değişir. Telefonda kapınızı ve ihtiyacınızı anlatırsanız size seçenekleri ve fiyatları önceden söyleriz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kilit değişimi ne kadar sürer?",
        answer:
          "Standart bir göbek değişimi genellikle kısa sürer. Kilit gövdesinin de değişmesi gerekiyorsa süre uzayabilir.",
      },
      {
        question: "Kapıyı da değiştirmem gerekir mi?",
        answer:
          "Hayır. Çoğu durumda sadece kilit göbeğinin değişmesi yeterlidir. Kapı ve kilit gövdesi sağlamsa aynen kullanılmaya devam eder.",
      },
      {
        question: "Taşındığım evin kilidini değiştirmeli miyim?",
        answer:
          "Öneririz. Önceki oturanlarda, ustalarda veya emlakçıda anahtar kopyası kalmış olabilir. Göbek değişimi bu riski ortadan kaldırır.",
      },
    ],
    relatedPosts: [
      "kapi-kilidi-ne-zaman-degistirilmeli",
      "kilit-turleri-ve-guvenlik-seviyeleri",
      "ev-anahtarinizi-kaybettiginizde-ne-yapmalisiniz",
    ],
  },
  {
    id: "oto-cilingir",
    slug: "oto-cilingir",
    title: "Oto Çilingir",
    description:
      "Anahtar araçta kaldı veya araç kilitli kaldı mı? Düzce'de araç kapısı açma hizmeti veriyoruz.",
    icon: "🚗",
    h1: "Düzce Oto Çilingir Hizmeti",
    metaTitle: "Düzce Oto Çilingir – Araç Kapısı Açma",
    metaDescription:
      "Düzce'de oto çilingir: anahtarınız araçta kaldıysa araç kapısını açıyoruz. 7/24 telefon ve WhatsApp ile ulaşın, konumunuzu paylaşın.",
    image: { file: "oto-cilingir.webp", alt: "Düzce Çilingirci ustasının kilitli kalan aracın kapısını açarken çekilmiş fotoğrafı" },
    intro: [
      "Anahtarı aracın içinde unutup kapıyı kapatmak ya da aracın kilitli kalması herkesin başına gelebilir. Düzce Çilingirci olarak Düzce Merkez ve çevresinde araç kapısı açma hizmeti veriyoruz.",
      "Aracınız ister evinizin önünde, ister bir otoparkta ya da yol kenarında olsun, telefon veya WhatsApp ile konumunuzu paylaşmanız yeterli.",
    ],
    sections: [
      {
        heading: "Oto çilingir olarak neler yapıyoruz?",
        list: [
          "Anahtar araç içinde kaldığında araç kapısı açma",
          "Merkezi kilit kendiliğinden kilitlendiğinde araç kapısı açma",
          "Kapısı açılamayan araçlar için yerinde müdahale",
        ],
        paragraphs: [
          "Hizmetimiz araç kapısı açma odaklıdır. Araç anahtarı kopyalama, kumandalı anahtar veya immobilizer (çipli) anahtar programlama işlemleri şu an hizmetlerimiz arasında yer almıyor; bu konularda yanlış yönlendirilmemeniz için baştan belirtiyoruz.",
        ],
      },
      {
        heading: "Araç kapısı nasıl açılıyor?",
        paragraphs: [
          "Araç kapıları, aracın marka ve modeline uygun özel aletlerle açılır. Amaç, kapıya, cama, boyaya ve kilit mekanizmasına zarar vermeden kapıyı açmaktır. Uygun durumlarda hasarsız açma yöntemleri kullanılır.",
          "Bazı araç modellerinde kapı açma daha zor olabilir. Böyle bir durumda işlemin nasıl yapılacağını ve olası riskleri önceden anlatırız.",
        ],
      },
      {
        heading: "Ararken hazır bulundurmanız gerekenler",
        list: [
          "Aracın marka, model ve yaklaşık yılı",
          "Aracın bulunduğu konum (WhatsApp'tan konum paylaşabilirsiniz)",
          "Anahtarın araçta nerede kaldığı (kontakta, koltukta, bagajda)",
          "Ruhsat ve kimlik (araç açıldıktan sonra aracın size ait olduğunu doğrulamak için)",
        ],
      },
      {
        heading: "Hizmet bölgesi ve süre",
        paragraphs: [
          "Düzce Merkez'de ortalama 5-10 dakikada aracınızın yanındayız. Akçakoca, Gölyaka, Çilimli, Cumayeri, Gümüşova, Kaynaşlı, Beyköy ve Yığılca için de hizmet veriyoruz; bu bölgelerde varış süresi mesafeye göre değişir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Araç kapısı açılırken araca zarar gelir mi?",
        answer:
          "Araç kapısını modele uygun aletlerle açıyoruz ve uygun durumlarda hasarsız açma yöntemleri kullanıyoruz. Riskli bir durum varsa işleme başlamadan önce sizi bilgilendiriyoruz.",
      },
      {
        question: "Araç anahtarı yapıyor musunuz?",
        answer:
          "Hayır. Şu an araç anahtarı kopyalama, kumandalı veya immobilizer anahtar programlama hizmeti vermiyoruz. Oto çilingir hizmetimiz araç kapısı açma odaklıdır.",
      },
      {
        question: "Gece yolda kaldım, gelebilir misiniz?",
        answer:
          "Evet, 7/24 hizmet veriyoruz. WhatsApp'tan konumunuzu gönderirseniz size tahmini varış süresini söyleriz.",
      },
    ],
    relatedPosts: ["kapiniz-kilitlendiginde-yapmaniz-gerekenler"],
  },
  {
    id: "celik-kapi-kilidi",
    slug: "celik-kapi-kilidi",
    title: "Çelik Kapı Kilidi",
    description:
      "Çelik kapı kilidi ve göbeği değişimi, arıza tespiti ve onarımı. Çelik kapınız kilitli kaldıysa açılış da yapıyoruz.",
    icon: "🛡️",
    h1: "Düzce Çelik Kapı Kilidi Değişimi ve Tamiri",
    metaTitle: "Düzce Çelik Kapı Kilidi Değişimi ve Tamiri",
    metaDescription:
      "Düzce'de çelik kapı kilidi ve göbek değişimi, kilit arızası tamiri ve kilitli kalan çelik kapı açma. 7/24 telefon ve WhatsApp ile ulaşın.",
    image: { file: "celik-kapi-kilidi.webp", alt: "Çelik kapı kilit mekanizması üzerinde çalışılırken çekilmiş fotoğraf" },
    intro: [
      "Çelik kapılar, birden fazla noktadan kilitlenen sistemleriyle evlerin en çok tercih edilen giriş kapılarıdır. Ancak bu kapıların güvenliği büyük ölçüde kullanılan kilit göbeğine ve mekanizmanın sağlıklı çalışmasına bağlıdır.",
      "Düzce Çilingirci olarak Düzce Merkez ve çevresinde çelik kapı göbek değişimi, kilit arızası tespiti ve onarımı ile kilitli kalan çelik kapıların açılmasını yapıyoruz.",
    ],
    sections: [
      {
        heading: "Çelik kapı kilidinde sık görülen sorunlar",
        list: [
          "Anahtar zor dönüyor veya yarıda takılıyor",
          "Kapı kapanıyor ama kilit dilleri tam çıkmıyor",
          "Kapı kilitlenmiyor ya da kilitlendikten sonra açılmıyor",
          "Anahtar göbeğin içinde kırıldı",
          "Kapı sarktığı için kilit karşılığa oturmuyor",
        ],
      },
      {
        heading: "Arızanın kaynağını bulmak",
        paragraphs: [
          "Çelik kapılarda sorun her zaman kilitte değildir. Kapı zamanla sarkarsa kilit dilleri kasadaki yuvalarına oturmaz ve kapı zor kilitlenir. Bu durumda kilidi değiştirmek yerine kapının ayarını yapmak sorunu çözebilir.",
          "Adrese geldiğimizde önce sorunun göbekte mi, kilit mekanizmasında mı yoksa kapı ayarında mı olduğunu tespit ederiz. Gereksiz parça değişimine yönlendirmeyiz.",
        ],
      },
      {
        heading: "Çelik kapı göbeği değişimi",
        paragraphs: [
          "Anahtar kaybı, taşınma veya güvenlik seviyesini artırmak istediğinizde çelik kapınızın göbeğini değiştirebiliriz. Kapınızın ölçüsüne ve tipine uygun göbek seçeneklerini gösterir, aralarındaki farkı anlatırız.",
          "Göbek seçerken nelere dikkat etmeniz gerektiğini blog yazımızda ayrıntılı olarak anlattık.",
        ],
      },
      {
        heading: "Kilitli kalan çelik kapılar",
        paragraphs: [
          "Çelik kapınız kilitli kaldıysa ve anahtarınız yoksa kapı açma hizmetimizle yardımcı oluyoruz. Çok noktadan kilitlenmiş çelik kapılarda uygun durumlarda hasarsız açma yöntemleri denenir; mümkün olmadığında göbek değişimi gerekebilir ve bu durumda önceden bilgi verilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Çelik kapının kilidini değiştirmek için kapıyı sökmek gerekir mi?",
        answer:
          "Genellikle hayır. Göbek değişimi kapı yerinde dururken yapılır. Kilit gövdesi değişecekse de çoğu durumda kapının sökülmesi gerekmez.",
      },
      {
        question: "Çelik kapım zor kilitleniyor, kilit mi bozuk?",
        answer:
          "Her zaman değil. Kapı sarkmışsa kilit dilleri yuvalarına oturmayabilir. Önce sorunun kaynağını tespit ediyor, gerekiyorsa sadece ayar yapıyoruz.",
      },
    ],
    relatedPosts: [
      "celik-kapi-kilidi-secerken-nelere-dikkat-edilmeli",
      "celik-kapi-bakim-rehberi",
      "kilit-turleri-ve-guvenlik-seviyeleri",
    ],
  },
  {
    id: "anahtar-kopyalama",
    slug: "anahtar-kopyalama",
    title: "Anahtar Kopyalama",
    description:
      "Ev, iş yeri ve çelik kapı anahtarlarınızın yedeğini Burhaniye Mahallesi'ndeki dükkânımızda çıkarıyoruz.",
    icon: "🔑",
    h1: "Düzce Anahtar Kopyalama",
    metaTitle: "Düzce Anahtar Kopyalama – Yedek Anahtar",
    metaDescription:
      "Düzce'de ev, iş yeri ve çelik kapı anahtarı kopyalama. Burhaniye Mah. Bolu Cad. No:17'deki dükkânımıza uğrayın veya önceden arayın.",
    image: { file: "anahtar-kopyalama.webp", alt: "Dükkânda anahtar kopyalama makinesinde yedek anahtar çıkarılırken çekilmiş fotoğraf" },
    intro: [
      "Yedek anahtar, kapıda kalma riskini en ucuz şekilde azaltmanın yoludur. Düzce Çilingirci olarak ev, daire, iş yeri ve çelik kapı anahtarlarınızın kopyasını çıkarıyoruz.",
      "Anahtar kopyalama için Burhaniye Mah. Bolu Cad. No:17, Merkez/Düzce adresindeki dükkânımıza uğrayabilirsiniz. Gelmeden önce arayarak anahtar tipinizi sorabilirsiniz.",
    ],
    sections: [
      {
        heading: "Hangi anahtarları kopyalıyoruz?",
        list: [
          "Ev ve daire kapısı anahtarları",
          "Çelik kapı anahtarları",
          "İş yeri, dükkân ve depo anahtarları",
          "Asma kilit ve dolap anahtarları",
        ],
        paragraphs: [
          "Araç anahtarı kopyalama hizmeti vermiyoruz.",
        ],
      },
      {
        heading: "Güvenlik kartlı anahtarlar",
        paragraphs: [
          "Bazı yüksek güvenlikli kilitlerin anahtarları, kilitle birlikte verilen bir güvenlik kartı olmadan kopyalanamaz. Bu sistemin amacı, anahtarınızın sizden habersiz çoğaltılmasını önlemektir.",
          "Anahtarınız böyle bir sisteme aitse güvenlik kartınızı yanınızda getirin. Kartınız yoksa veya kaybolduysa, kilit göbeğini değiştirmek daha doğru bir çözüm olabilir.",
        ],
      },
      {
        heading: "İyi bir kopya için ipuçları",
        list: [
          "Mümkünse kopyayı orijinal anahtardan çıkartın; kopyadan kopya çıkarmak hassasiyeti azaltabilir.",
          "Yeni anahtarı aldıktan sonra kapıda deneyin; zor dönüyorsa getirin, kontrol edelim.",
          "Yedek anahtarı paspas altı gibi tahmin edilebilir yerlerde değil, güvendiğiniz bir yakınınızda saklayın.",
        ],
      },
    ],
    faqs: [
      {
        question: "Anahtar kopyalama için randevu gerekir mi?",
        answer:
          "Gerekmez, dükkânımıza uğrayabilirsiniz. Anahtar tipiniz özel bir modelse önceden arayıp sormanızı öneririz.",
      },
      {
        question: "Araç anahtarı kopyalıyor musunuz?",
        answer: "Hayır, şu an araç anahtarı kopyalama hizmeti vermiyoruz.",
      },
    ],
    relatedPosts: [
      "ev-anahtarinizi-kaybettiginizde-ne-yapmalisiniz",
      "kilit-turleri-ve-guvenlik-seviyeleri",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
