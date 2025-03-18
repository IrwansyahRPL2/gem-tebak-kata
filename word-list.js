const wordList = [
    {
        word: "gitar",
        hint: "Alat musik yang memiliki senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Peningkatan besar permukaan bumi."
    },
    {
        word: "lukisan",
        hint: "Karya seni yang dibuat dengan menggunakan cat."
    },
    {
        word: "astronomi",
        hint: "Ilmu yang mempelajari benda-benda langit."
    },
    {
        word: "sepakbola",
        hint: "Olahraga yang dimainkan dengan bola bulat."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupukupu",
        hint: "Serangga dengan sayap berwarna-warni."
    },
    {
        word: "sejarah",
        hint: "Ilmu yang mempelajari peristiwa masa lalu."
    },
    {
        word: "pizza",
        hint: "Makanan dengan adonan bulat dan berbagai topping."
    },
    {
        word: "jazz",
        hint: "Jenis musik yang memiliki improvisasi dan ritme yang khas."
    },
    {
        word: "kamera",
        hint: "Alat untuk mengambil foto atau video."
    },
    {
        word: "intan",
        hint: "Batu permata yang sangat keras dan berkilau."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang seru dan penuh tantangan."
    },
    {
        word: "sains",
        hint: "Ilmu yang mempelajari dunia fisik dan alam."
    },
    {
        word: "sepeda",
        hint: "Kendaraan dengan dua roda yang digerakkan dengan kaki."
    },
    {
        word: "matahariterbenam",
        hint: "Saat matahari hilang di balik cakrawala."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein yang terbuat dari biji kopi."
    },
    {
        word: "tari",
        hint: "Gerakan tubuh yang dilakukan dengan irama musik."
    },
    {
        word: "galaksi",
        hint: "Sistem besar yang terdiri dari bintang, gas, dan debu."
    },
    {
        word: "orkestra",
        hint: "Kelompok musik besar yang memainkan berbagai alat musik."
    },
    {
        word: "gunungberapi",
        hint: "Gunung yang mengeluarkan lava, gas, dan abu."
    },
    {
        word: "novel",
        hint: "Buku cerita panjang dengan tokoh dan plot yang rumit."
    },
    {
        word: "patung",
        hint: "Karya seni tiga dimensi yang dibuat dengan membentuk bahan."
    },
    {
        word: "symphony",
        hint: "Karya musik panjang yang dimainkan oleh orkestra."
    },
    {
        word: "arsitektur",
        hint: "Ilmu dan seni merancang bangunan."
    },
    {
        word: "balet",
        hint: "Tari klasik yang dilakukan dengan gerakan yang lembut dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk bekerja di luar angkasa."
    },
    {
        word: "airterjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan ilmu pengetahuan untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena alam yang terbentuk dari pembiasan cahaya."
    },
    {
        word: "alamsemesta",
        hint: "Seluruh materi, ruang, dan waktu yang ada."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts."
    },
    {
        word: "liburan",
        hint: "Waktu yang digunakan untuk beristirahat atau bersenang-senang."
    },
    {
        word: "hutanhujan",
        hint: "Hutan lebat yang memiliki curah hujan tinggi."
    },
    {
        word: "teater",
        hint: "Tempat untuk menonton pertunjukan seni atau film."
    },
    {
        word: "telepon",
        hint: "Alat untuk berbicara dengan orang jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi menggunakan kata-kata dan isyarat."
    },
    {
        word: "padangpasir",
        hint: "Lahan kering dengan sedikit air dan vegetasi."
    },
    {
        word: "bungamatahari",
        hint: "Tanaman dengan bunga besar berwarna kuning."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi yang melibatkan sihir dan hal-hal supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat untuk mengamati benda di luar angkasa."
    },
    {
        word: "anginsepoisepoi",
        hint: "Angin lembut yang berhembus."
    },
    {
        word: "oasis",
        hint: "Tempat subur di padang pasir yang memiliki sumber air."
    },
    {
        word: "fotografi",
        hint: "Seni atau proses membuat gambar dengan menangkap cahaya."
    },
    {
        word: "safari",
        hint: "Perjalanan untuk melihat satwa liar di habitat asli."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit matahari dan tidak menghasilkan cahaya."
    },
    {
        word: "sungai",
        hint: "Aliran air besar yang mengarah ke laut atau danau."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan daerah yang terletak antara Garis Khatulistiwa."
    },
    {
        word: "misterius",
        hint: "Sesuatu yang sulit dimengerti atau dijelaskan."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang membingungkan atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan yang kontradiktif atau bertentangan."
    },
    {
        word: "puzzle",
        hint: "Permainan atau masalah yang dirancang untuk menguji kecerdasan."
    },
    {
        word: "bisikan",
        hint: "Berbicara dengan suara sangat lembut."
    },
    {
        word: "bayangan",
        hint: "Area gelap yang terbentuk saat cahaya terhalang oleh objek."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disembunyikan atau tidak diketahui orang lain."
    },
    {
        word: "rasavingintahu",
        hint: "Keinginan kuat untuk mengetahui atau mempelajari sesuatu."
    },
    {
        word: "tidakterduga",
        hint: "Tidak bisa diprediksi atau diperkirakan."
    },
    {
        word: "menyembunyikan",
        hint: "Membuat sesuatu menjadi tidak jelas atau membingungkan."
    },
    {
        word: "ungkapkan",
        hint: "Menunjukkan atau membuka sesuatu yang tersembunyi."
    },
    {
        word: "ilusi",
        hint: "Pernyataan atau gambaran yang menyesatkan atau tidak nyata."
    },
    {
        word: "sinarbulan",
        hint: "Cahaya yang dipantulkan dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh dengan energi dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan atau rasa sayang terhadap masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat pintar atau mengesankan."
    },
];
