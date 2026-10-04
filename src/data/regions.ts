import type { Region } from "@/types";

/**
 * Hizmet bölgeleri tek sayfada (/hizmet-bolgeleri) listelenir.
 * Her ilçe için aynı metni kopyalayıp sadece ismi değiştirmeyin.
 */
export const regions: Region[] = [
  {
    id: "merkez",
    name: "Düzce Merkez",
    description:
      "Dükkânımız Burhaniye Mahallesi, Bolu Caddesi'nde. Düzce Merkez'in mahallelerinde kapı açma, kilit değiştirme, çelik kapı kilidi ve oto çilingir hizmetlerini 7/24 veriyoruz; ortalama 15-20 dakikada adresinizdeyiz. Anahtar kopyalama için dükkânımıza uğrayabilirsiniz.",
    slug: "duzce-merkez",
  },
  {
    id: "beykoy",
    name: "Beyköy",
    description:
      "Merkez ilçeye bağlı Beyköy, dükkânımıza yakın bölgelerden biri. Beyköy'de kapıda kaldığınızda, kilidiniz arızalandığında veya aracınız kilitli kaldığında telefon ya da WhatsApp ile bize ulaşabilirsiniz.",
    slug: "beykoy",
  },
  {
    id: "cilimli",
    name: "Çilimli",
    description:
      "Düzce Çilingirci olarak Çilimli'de kapı açma, kilit ve göbek değiştirme ile araç kapısı açma hizmetleri veriyoruz. Çilimli Merkez'e yakın olduğu için genellikle kısa sürede ulaşıyoruz; aradığınızda tahmini süreyi söyleriz.",
    slug: "cilimli",
  },
  {
    id: "kaynasli",
    name: "Kaynaşlı",
    description:
      "Kaynaşlı'da ev ve iş yerleri için kapı açma ve kilit değiştirme hizmeti veriyoruz. D-100 üzerinde, Bolu Dağı yolunda aracınızın içinde anahtar kaldıysa WhatsApp'tan konumunuzu gönderin, araç kapısı açma için yönlendirelim.",
    slug: "kaynasli",
  },
  {
    id: "gumusova",
    name: "Gümüşova",
    description:
      "Gümüşova'da kapı açma, kilit değiştirme ve çelik kapı kilidi işleri için hizmet veriyoruz. Otoyol ve D-100 bağlantısı üzerindeki dinlenme ya da mola noktalarında aracınız kilitli kaldıysa konum paylaşarak bize ulaşabilirsiniz.",
    slug: "gumusova",
  },
  {
    id: "golyaka",
    name: "Gölyaka",
    description:
      "Düzce Çilingirci olarak Gölyaka ve çevresinde kapı açma, kilit değiştirme ve acil çilingir hizmetleri sunuyoruz. Efteni Gölü tarafındaki köyler dahil hizmet durumu ve tahmini ulaşım süresi için telefon veya WhatsApp üzerinden bize ulaşabilirsiniz.",
    slug: "golyaka",
  },
  {
    id: "cumayeri",
    name: "Cumayeri",
    description:
      "Cumayeri'nde kilitli kalan ev ve iş yeri kapıları, arızalı kilitler ve göbek değişimi için hizmet veriyoruz. Merkez dışındaki bir ilçe olduğu için gelmeden önce telefonda durumu dinliyor, varış süresini açıkça söylüyoruz.",
    slug: "cumayeri",
  },
  {
    id: "akcakoca",
    name: "Akçakoca",
    description:
      "Karadeniz kıyısındaki Akçakoca'da kapı açma, kilit değiştirme ve oto çilingir hizmeti veriyoruz. Özellikle yaz aylarında yazlıkta anahtarı içeride unutma veya uzun süre kapalı kalan evlerde kilidin sıkışması gibi durumlarda arayabilirsiniz. Mesafe nedeniyle tahmini süreyi aradığınızda bildiririz.",
    slug: "akcakoca",
  },
  {
    id: "yigilca",
    name: "Yığılca",
    description:
      "Yığılca, Merkez'e en uzak ilçelerimizden biri. Kapı açma ve kilit değiştirme taleplerinizi telefon veya WhatsApp üzerinden iletin; yol durumu ve mesafeye göre ne zaman ulaşabileceğimizi baştan söyleyelim. Köy adreslerinde konum paylaşmanız işimizi çok kolaylaştırır.",
    slug: "yigilca",
  },
];
