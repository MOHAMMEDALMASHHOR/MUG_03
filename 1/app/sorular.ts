export interface SoruTipi {
  soru: string;
  secenekler: string[];
  dogruCevap: string;
}

export interface KodOkumaTipi {
  soruMetni: string;
  kodSnippet: string;
  secenekler: string[];
  dogruCevap: string;
}

export const soruHavuzu: Record<string, SoruTipi[]> = {
  "Mobil Geliştirici": [
    { soru: "React Native'de eski JavaScript Bridge mimarisinin performans darboğazlarını çözen yeni yapının adı nedir?", secenekler: ["JSI (JavaScript Interface)", "Fabric Engine", "Hermes VM"], dogruCevap: "JSI (JavaScript Interface)" },
    { soru: "Swift'te bir yapının (struct) referans yerine değer (value) tipi olarak geçirilmesinin ana avantajı nedir?", secenekler: ["Daha hızlı derlenmesi", "Memory Leak (Bellek sızıntısı) riskini azaltması", "Class'lardan daha fazla özellik sunması"], dogruCevap: "Memory Leak (Bellek sızıntısı) riskini azaltması" },
    { soru: "Kotlin'de asenkron programlama için kullanılan, thread'leri bloklamayan hafif yapıya ne denir?", secenekler: ["RxJava", "Coroutines", "Flow"], dogruCevap: "Coroutines" },
    { soru: "React Native'de listelerin (FlatList) performansını artırmak için render edilecek elemanları önbelleğe alan prop hangisidir?", secenekler: ["initialNumToRender", "getItemLayout", "maxToRenderPerBatch"], dogruCevap: "getItemLayout" },
    { soru: "iOS platformunda arka planda periyodik olarak veri çekmek için kullanılan framework hangisidir?", secenekler: ["BackgroundTasks", "URLSession", "DispatchQueue"], dogruCevap: "BackgroundTasks" },
    { soru: "Android'de Activity yaşam döngüsünde, bir Activity tamamen görünmez hale geldiğinde hangi metot çağrılır?", secenekler: ["onPause()", "onStop()", "onDestroy()"], dogruCevap: "onStop()" },
    { soru: "React Native uygulamasının başlangıç yükleme süresini (TTV) ve JS Bundle boyutunu küçültmek için kullanılan modern JS motoru nedir?", secenekler: ["V8 Engine", "JavaScriptCore", "Hermes"], dogruCevap: "Hermes" },
    { soru: "Swift'te Optionals (??) operatörünün teknik terim karşılığı nedir?", secenekler: ["Nil-Coalescing Operator", "Ternary Operator", "Optional Chaining"], dogruCevap: "Nil-Coalescing Operator" },
    { soru: "React Navigation'da uygulamanın kök belleğini sıfırlayarak kullanıcıyı tamamen yeni bir sayfaya ('Login' sonrası 'Home') atmak için hangi metod kullanılır?", secenekler: ["navigation.replace()", "navigation.popToTop()", "navigation.reset()"], dogruCevap: "navigation.reset()" },
    { soru: "Kotlin'de null pointer exception (NPE) hatalarından kaçınmak için bir değişkenin tipini güvenli hale getiren işaret hangisidir?", secenekler: ["!", "?", "!!"], dogruCevap: "?" },
    { soru: "Android'de kullanıcı arayüzü thread'i (Main Thread) bloklanırsa işletim sisteminin fırlattığı hata (ANR) neyin kısaltmasıdır?", secenekler: ["Application Not Responding", "Android Native Runtime", "App Null Requirement"], dogruCevap: "Application Not Responding" },
    { soru: "iOS mimarisinde UIView'ı güncelleyen her işlemin mutlaka hangi thread üzerinde yapılması zorunludur?", secenekler: ["Background Thread", "Main Thread", "Global Queue"], dogruCevap: "Main Thread" },
    { soru: "React Native'de Android ve iOS'a özel native (Java/Objective-C) kod yazmak gerektiğinde JavaScript ile bu kodlar arasında veri taşıyan yapıya ne ad verilir?", secenekler: ["Native Modules", "JNI (Java Native Interface)", "WebKit"], dogruCevap: "Native Modules" },
    { soru: "Swift Programlama Dilinde bellek yönetimini sağlayan ARC (Automatic Reference Counting) sisteminin zayıf referansları tutarak döngüsel referansları kırmasını sağlayan anahtar kelime nedir?", secenekler: ["weak", "unowned", "lazy"], dogruCevap: "weak" },
    { soru: "Kotlin'de `lateinit` anahtar kelimesi kullanıldığında hangi tür veri tiplerine izin verilmez?", secenekler: ["Primitive tipler (Int, Double vb.)", "Referans tipler (Obje vb.)", "String"], dogruCevap: "Primitive tipler (Int, Double vb.)" },
    { soru: "React Native'de KeyboardAvoidingView kullanırken iOS cihazlarda klavyenin view'ı sorunsuz itmesi için `behavior` prop'una genel olarak ne verilir?", secenekler: ["height", "padding", "position"], dogruCevap: "padding" },
    { soru: "Android Compose veya React'te UI yapısının state değişimine göre sadece değişen kısımlarını tekrar oluşturmasına ne ad verilir?", secenekler: ["Recomposition / Re-render", "Invalidation", "State Overloading"], dogruCevap: "Recomposition / Re-render" },
    { soru: "Swift'te asenkron fonksiyonları çağırmak ve sonucunu beklemek için iOS 15 ile gelen yeni standart yapı nedir?", secenekler: ["Completion Handlers", "Combine", "async / await"], dogruCevap: "async / await" },
    { soru: "React Native uygulamasında resim yüklenirken performans kaybını engellemek için cihazda resim önbellekleme (caching) işlemi yapan popüler kütüphane hangisidir?", secenekler: ["react-native-image-picker", "react-native-fast-image", "expo-image"], dogruCevap: "react-native-fast-image" },
    { soru: "Bir mobil uygulamada OAuth 2.0 veya JWT token'ları gibi hassas verileri Android tarafında en güvenli şekilde nerede saklarız?", secenekler: ["SharedPreferences", "SQLite Database", "EncryptedSharedPreferences (Keystore)"], dogruCevap: "EncryptedSharedPreferences (Keystore)" },
    { soru: "iOS'ta uygulamanın ekran yönünü (Orientation) değiştirdiğinde UI güncellemelerini yakalayan genel yaşam döngüsü metodu (veya delegate) hangisidir?", secenekler: ["viewWillTransition", "viewDidAppear", "viewDidLoad"], dogruCevap: "viewWillTransition" },
    { soru: "React Native'de bir `ScrollView` içine yerleştirilen ve tüm ekranı kaplayan FlatList'in scroll olaylarında yarattığı en büyük mimari hata nedir?", secenekler: ["İç içe scroll alanlarının conflict yaratması ve FlatList'in sanallaştırma (virtualization) özelliğini kaybetmesi", "Görsel taşmalar yaşanması", "Native memory sızıntısı yapması"], dogruCevap: "İç içe scroll alanlarının conflict yaratması ve FlatList'in sanallaştırma (virtualization) özelliğini kaybetmesi" },
    { soru: "Kotlin Flow yapısında veri akışını dönüştürmek, filtrelemek veya işlemek için araya giren fonksiyonlara ne denir?", secenekler: ["Subscribers", "Operators", "Emitters"], dogruCevap: "Operators" },
    { soru: "iOS'ta çok sayıda küçük hücreden (hücre) oluşan performanslı listeler oluşturmak için SwiftUI'da hangi bileşen kullanılır?", secenekler: ["LazyVStack", "ListView", "VStack"], dogruCevap: "LazyVStack" },
    { soru: "React Native re-render (yeniden çizim) sürelerini ölçmek ve performans darboğazlarını tespit etmek için React Flipper içindeki hangi araç kullanılır?", secenekler: ["Network Inspector", "React Profiler", "Redux DevTools"], dogruCevap: "React Profiler" },
    { soru: "Android'de Intent ile bir ekrandan diğerine veri taşırken büyük boyutlu (Bitmap vb.) nesneleri Parcelable olarak iletmenin riski nedir?", secenekler: ["Uygulamanın TransactionTooLargeException atıp çökmesi.", "Intent'in kaybolması.", "Güvenlik açığı oluşması."], dogruCevap: "Uygulamanın TransactionTooLargeException atıp çökmesi." },
    { soru: "Swift'te bir protokolün (Protocol) içine fonksiyon veya değişken zorunluluğu eklemek dışında, protokole doğrudan işlevsellik / varsayılan kod eklemek için hangi yapı kullanılır?", secenekler: ["Protocol Extensions", "Protocol Inheritance", "Associated Types"], dogruCevap: "Protocol Extensions" },
    { soru: "React Native kodunu canlıda kullanıcıların telefonlarına mağaza onayına göndermeden (Örn: CodePush) anında güncellemeye ne ad verilir?", secenekler: ["Hot Reloading", "Over-The-Air (OTA) Updates", "Live Sync"], dogruCevap: "Over-The-Air (OTA) Updates" },
    { soru: "Kotlin'de Dependency Injection (Bağımlılık Enjeksiyonu) için Android'de en çok tercih edilen modern kütüphane/framework hangisidir?", secenekler: ["Dagger 2", "Hilt", "Koin"], dogruCevap: "Hilt" },
    { soru: "React Native'de derin bağlantıları (Deep Linking) uygulayıp telefon tarayıcısından direkt uygulamaya yönlendirme yapmak için Scheme (Şema) belirlemelerinin Android'de tanımlandığı dosya hangisidir?", secenekler: ["AndroidManifest.xml", "MainActivity.java", "build.gradle"], dogruCevap: "AndroidManifest.xml" }
  ],
  "Frontend Geliştirici": [
    { soru: "React'te re-render performansını artırmak için pahalı matematiksel hesaplamaları önbelleğe alan Hook hangisidir?", secenekler: ["useMemo", "useCallback", "useEffect"], dogruCevap: "useMemo" },
    { soru: "Modern tarayıcılarda Main Thread'i dondurmadan arka planda ağır JavaScript işlemlerini çalıştırmak için kullanılan API nedir?", secenekler: ["Service Workers", "Web Workers", "Web Sockets"], dogruCevap: "Web Workers" },
    { soru: "CSS'de 'z-index' değerinin çalışması için elemente mutlaka hangi özellik verilmelidir?", secenekler: ["display: block", "position (static dışında)", "float: left"], dogruCevap: "position (static dışında)" },
    { soru: "React'te Server-Side Rendering (SSR) yapmak için sıklıkla tercih edilen popüler framework hangisidir?", secenekler: ["Next.js", "Create React App (CRA)", "Vite"], dogruCevap: "Next.js" },
    { soru: "Tarayıcı deposunda (Local Storage) saklanan veriler sekme (tab) kapandığında silinir mi?", secenekler: ["Evet, tamamen silinir", "Hayır, kalıcı olarak depolanır", "Sadece Session Storage'da silinmez"], dogruCevap: "Hayır, kalıcı olarak depolanır" },
    { soru: "HTML5 ile gelen `<canvas>` etiketi asıl olarak ne için kullanılır?", secenekler: ["Vektörel grafik çizimleri yapmak (JavaScript üzerinden)", "3D animasyon dosyalarını render etmek", "Yüksek boyutlu videoları gömmek"], dogruCevap: "Vektörel grafik çizimleri yapmak (JavaScript üzerinden)" },
    { soru: "CSS Grid yapısında grid'in satırları ve sütunları arasında boşluk bırakmak için kullanılan modern özellik (property) hangisidir?", secenekler: ["margin", "gap", "padding"], dogruCevap: "gap" },
    { soru: "JavaScript'te 'Event Delegation' (Olay Yetkilendirme) mimarisi neyi sağlar?", secenekler: ["Her elemana ayrı ayrı listener atamak yerine ana kapsayıcıya tek bir listener atamayı", "Eventlerin asenkron çalışmasını", "Eventleri tamamen iptal etmeyi"], dogruCevap: "Her elemana ayrı ayrı listener atamak yerine ana kapsayıcıya tek bir listener atamayı" },
    { soru: "React 18 ile gelen ve acil olmayan durum güncellemelerinde arayüzün donmasını engelleyen (örneğin arama yaparken klavyenin takılmaması) API hangisidir?", secenekler: ["useTransition / startTransition", "Suspense", "useDeferredValue"], dogruCevap: "useTransition / startTransition" },
    { soru: "CORS (Cross-Origin Resource Sharing) politikasını belirleyen ve engelleyen mekanizma genel olarak nerede çalışır?", secenekler: ["Web sunucusunda (Backend)", "Kullanıcının tarayıcısında (Browser)", "Ağ katmanında (Router)"], dogruCevap: "Kullanıcının tarayıcısında (Browser)" },
    { soru: "React Router'da URL parametrelerini okumak (örneğin /user/:id) için hangi Hook kullanılır?", secenekler: ["useLocation", "useParams", "useMatch"], dogruCevap: "useParams" },
    { soru: "CSS Flexbox'ta elemanları dikey olarak ters yönde (aşağıdan yukarıya) dizebilmek için `flex-direction` değerine ne verilmelidir?", secenekler: ["row-reverse", "column", "column-reverse"], dogruCevap: "column-reverse" },
    { soru: "JavaScript ES6 ile gelen Set nesnesinin array'lerden (dizilerden) en büyük farkı nedir?", secenekler: ["Daha az bellek tüketmesi", "Aynı içeriğe sahip (duplicate) eleman barındırmaması", "Sıralı olmaması"], dogruCevap: "Aynı içeriğe sahip (duplicate) eleman barındırmaması" },
    { soru: "Vue.js'te component'in yaşam döngüsünde (Lifecycle) DOM elementlerinin sayfa üzerinde henüz oluşturulmadığı ancak reaktif state'in hazır olduğu aşama (hook) hangisidir?", secenekler: ["created", "mounted", "updated"], dogruCevap: "created" },
    { soru: "Bir form input alanında kullanıcının her harf yazışında API'ye istek atmasını (örneğin search inputu) engellemek için kullanılan yazılım optimizasyon kalıbı nedir?", secenekler: ["Debouncing / Throttling", "Lazy Loading", "Memoization"], dogruCevap: "Debouncing / Throttling" },
    { soru: "React'te bir component içinde 'ref' tanımladığımızda (useRef), bu ref değerinin güncellenmesi component'in tekrar render olmasını (re-render) sağlar mı?", secenekler: ["Evet, güncellediği an sağlar", "Hayır, kesinlikle tetiklemez", "Yalnızca useState ile kullanılırsa sağlar"], dogruCevap: "Hayır, kesinlikle tetiklemez" },
    { soru: "Arama motoru optimizasyonu (SEO) açısından en önemli HTML etiketi grubuna ne ad verilir?", secenekler: ["Meta etiketler", "Semantic Container etiketleri", "Heading etiketleri (h1, h2)"], dogruCevap: "Meta etiketler" },
    { soru: "React'te `dangerouslySetInnerHTML` prop'unu doğrudan kullanmak uygulamanızı hangi temel güvenlik zafiyetine (attack) karşı riskli hale getirir?", secenekler: ["Cross-Site Scripting (XSS)", "SQL Injection", "CSRF"], dogruCevap: "Cross-Site Scripting (XSS)" },
    { soru: "CSS Özgüllük (Specificity) kuralına göre hangi tanımlama en yüksek önceliğe sahiptir?", secenekler: ["Inline style (elemente yazılan style='...')", "ID Seçiciler (#id)", "Class Seçiciler (.class)"], dogruCevap: "Inline style (elemente yazılan style='...')" },
    { soru: "Bir PWA (Progressive Web App) in internetsiz (offline) çalışmasını sağlayan arka plan scripti nedir?", secenekler: ["Service Worker", "Web Manifest", "IndexDB"], dogruCevap: "Service Worker" },
    { soru: "Redux'ta state dönüşümünü (state mutation) sağlayan ve işlemleri gerçekleştiren asıl saf (pure) fonksiyonlara ne ad verilir?", secenekler: ["Actions", "Reducers", "Store"], dogruCevap: "Reducers" },
    { soru: "React'teki Context API sıklıkla hangi problemi (anti-pattern) çözmek için en sade yoldur?", secenekler: ["Re-render performans kaybı", "Prop Drilling (Derin state iletimi)", "SEO iyileştirmesi"], dogruCevap: "Prop Drilling (Derin state iletimi)" },
    { soru: "JavaScript Promise yapısında birden fazla Promise'ın tamamen başarılı bir şekilde bitmesini tek seferde bekleyen metod hangisidir?", secenekler: ["Promise.race()", "Promise.any()", "Promise.all()"], dogruCevap: "Promise.all()" },
    { soru: "CSS pre-processor (Ön işlemci) olan SASS veya SCSS'in en bilindik avantajı nedir?", secenekler: ["Daha hızlı derlenmesi", "Değişken, içiçe yazım (nesting) ve mixin desteklemesi", "Browser uyumunu (Vendor prefix) otomatik yapması"], dogruCevap: "Değişken, içiçe yazım (nesting) ve mixin desteklemesi" },
    { soru: "Tarayıcının 'Repaint' ve 'Reflow' hesaplarına zorlanmadan, saniyede 60 kare (60fps) ile sadece GPU'yu kullanarak yapabileceği en ideal CSS animasyon özelliği hangisidir?", secenekler: ["transform ve opacity", "margin ve padding", "width ve height"], dogruCevap: "transform ve opacity" },
    { soru: "JavaScript'te bir asenkron hatayı yakalamak (catch) için try/catch bloğunun kullanımı hangi sözdizimi ile popüler hale gelmiştir?", secenekler: ["Callback functions", "Promises", "async / await"], dogruCevap: "async / await" },
    { soru: "React Component lifecycle'ında klas bazlı (Class Component) yaklaşımda `componentDidMount`'ın fonksiyonel componentlerdeki tam karşılığı nedir?", secenekler: ["useEffect(..., [])", "useState()", "useLayoutEffect()"], dogruCevap: "useEffect(..., [])" },
    { soru: "Vue.js'te component tabanlı reaktiviteyi global bir durum deposuna (store) taşıyarak Redux'ın işini yapan resmi kütüphane/yaklaşım hangisidir?", secenekler: ["Vuex / Pinia", "MobX", "Zustand"], dogruCevap: "Vuex / Pinia" },
    { soru: "CSS `box-sizing: border-box` kuralı bir elemanın genişliğine (width) neyi entegre eder?", secenekler: ["Element içindeki padding ve border değerlerini dışarı taşırmaz, genişliğe dahil eder.", "Margin'i genişliğe dahil eder.", "Elemanın absolute olmasını sağlar."], dogruCevap: "Element içindeki padding ve border değerlerini dışarı taşırmaz, genişliğe dahil eder." },
    { soru: "JavaScript Event Loop mimarisinde mikro-task (Microtasks) kuyruğu (Örneğin Promises) ile makro-task kuyruğu (Örneğin setTimeout) arasında hangisi önce işletilir?", secenekler: ["Sırayla, eşit öncelikte işlenir", "Önce Microtask", "Önce Macrotask"], dogruCevap: "Önce Microtask" }
  ],
  "Backend Geliştirici": [
    { soru: "Node.js olay tabanlı (event-driven) ve asenkron (non-blocking) yapısını hangi güçlü kütüphaneye borçludur?", secenekler: ["libuv", "V8", "Axios"], dogruCevap: "libuv" },
    { soru: "Bir RESTful API tasarlarken kullanıcıya ait kaynakları sadece 'güncellemek' (kısmi güncelleme) için standart olarak hangi HTTP metodu tercih edilmelidir?", secenekler: ["PUT", "PATCH", "POST"], dogruCevap: "PATCH" },
    { soru: "Ölçeklenebilir mimarilerde, Microservice servisleri arasında asenkron veri taşımak (Message Broker) için genellikle hangi teknoloji kullanılır?", secenekler: ["Nginx", "RabbitMQ / Kafka", "Redis"], dogruCevap: "RabbitMQ / Kafka" },
    { soru: "JSON Web Token (JWT) tabanlı bir kimlik doğrulamada, verilerin doğruluğunu sağlayan (değiştirilmediğini kanıtlayan) yapı JWT'nin hangi bölümüdür?", secenekler: ["Header", "Payload", "Signature (İmza)"], dogruCevap: "Signature (İmza)" },
    { soru: "Node.js (Express vb.) uygulamalarında çok yüksek CPU gerektiren (Blocking) bir işlem yapılırsa ne olur?", secenekler: ["Event loop bloke olur ve sistem yeni gelen dış istekleri yanıtlayamaz.", "Node.js işlemi otomatik threadlere bölüp rahatlatır.", "Uygulama anında out-of-memory hatası fırlatır."], dogruCevap: "Event loop bloke olur ve sistem yeni gelen dış istekleri yanıtlayamaz." },
    { soru: "Relational veritabanlarında ACID prensiplerinden 'Durability (Kalıcılık)' kuralı neyi garanti eder?", secenekler: ["Transaction bittikten sonra verinin sunucu çökse dahi kaybolmamasını", "Verilerin başka işlemlerden izole edilmesini", "Değişikliklerin her zaman bütün (atomic) olmasını"], dogruCevap: "Transaction bittikten sonra verinin sunucu çökse dahi kaybolmamasını" },
    { soru: "Backend sunucularında gelen aşırı istek trafiğini (DDoS veya spam) kısıtlayarak sistemin ayakta kalmasını sağlayan kontrol tekniği nedir?", secenekler: ["Load Balancing", "Rate Limiting", "Caching"], dogruCevap: "Rate Limiting" },
    { soru: "Object-Relational Mapping (ORM) kütüphanelerini kullanmanın doğrudan SQL sorguları yazmaya kıyasla oluşturduğu en büyük dezavantajı nedir?", secenekler: ["Güvenlik açığı yaratması", "Ağır ve karmaşık sorgularda (N+1 problemi) performans kaybı yaratması", "Kod okunabilirliğini bozması"], dogruCevap: "Ağır ve karmaşık sorgularda (N+1 problemi) performans kaybı yaratması" },
    { soru: "Ağ isteklerinde bir kullanıcının şifresini (password) güvenli olarak veritabanına kaydetmek için MD5 veya SHA algoritmaları yerine ne tür bir kütüphane kullanılmalıdır?", secenekler: ["Basit Base64", "Bcrypt / Argon2", "RSA Şifreleme"], dogruCevap: "Bcrypt / Argon2" },
    { soru: "Yüksek erişilebilirlik (High Availability) sağlamak için gelen ağ trafiğini arkadaki birden fazla sunucuya dengeli bölen cihaza / yazılıma ne ad verilir?", secenekler: ["Reverse Proxy", "Load Balancer (Yük Dengeleyici)", "API Gateway"], dogruCevap: "Load Balancer (Yük Dengeleyici)" },
    { soru: "GraphQL'de REST API'nin aksine birden fazla veriyi tek istekte almanızı sağlayan, spesifik sorgu dili elemanına ne denir?", secenekler: ["Query / Resolver", "Mutation", "Endpoints"], dogruCevap: "Query / Resolver" },
    { soru: "Redis sıklıkla hangi senaryoda kullanılmaz?", secenekler: ["Cache (Önbellekleme)", "Kalıcı ve İlişkisel Müşteri Veritabanı olarak", "Session Management (Oturum Yönetimi)"], dogruCevap: "Kalıcı ve İlişkisel Müşteri Veritabanı olarak" },
    { soru: "Python (Django/FastAPI vb.) ortamlarında paket bağımlılıklarını izole etmek için sıklıkla kurulan yapı hangisidir?", secenekler: ["Virtual Environment (venv/virtualenv)", "Composer", "Docker Swarm"], dogruCevap: "Virtual Environment (venv/virtualenv)" },
    { soru: "Backend dillerinde sınıflar veya metodlar üzerinden erişim izni (Authorization), yönlendirme, loglama gibi işlemleri metodun çalışmasından önce araya girerek yapan tasarım desenine (Design Pattern) genelde ne denir?", secenekler: ["Observer Pattern", "Decorator / Middleware", "Singleton"], dogruCevap: "Decorator / Middleware" },
    { soru: "HTTP protokolünde durum kalıcı mıdır (Stateful), yoksa bağımsız mıdır (Stateless)?", secenekler: ["Stateful (Durumu hatırlar)", "Stateless (Birbirinden tamamen bağımsızdır, durumu bilmez)", "Sadece POST metotlarında Stateful'dur"], dogruCevap: "Stateless (Birbirinden tamamen bağımsızdır, durumu bilmez)" },
    { soru: "Nginx aracı sıklıkla backend uygulamasının ('app server') önünde durarak dış dünyadan gelen istekleri güvenli bir şekilde backend'e iletir. Bu konseptin adı nedir?", secenekler: ["Reverse Proxy (Ters Vekil)", "Forward Proxy", "DNS Server"], dogruCevap: "Reverse Proxy (Ters Vekil)" },
    { soru: "Docker kullanarak bir uygulamanın bağımlılıklarıyla birlikte izolasyon halinde çalıştırıldığı hafif konteynerlerin imajlarını oluşturan (build) dökümanın adı nedir?", secenekler: ["docker-compose.yml", "Dockerfile", "ContainerConfig"], dogruCevap: "Dockerfile" },
    { soru: "C# (.NET Core) mimarisinde, Dependency Injection sistemine eklenen bir servisin her HTTP isteğinde yeniden oluşturulup yanıt sonlanana kadar aynı kalması için hangi yaşam döngüsü (lifetime) seçilir?", secenekler: ["AddTransient", "AddScoped", "AddSingleton"], dogruCevap: "AddScoped" },
    { soru: "Bir API Gateway (ör: Kong, AWS API Gateway) ile Microservice mimarisi kullanmanın temeli hangi gereksinime dayanır?", secenekler: ["İstemci (Client) uygulamanın onlarca alt servise tek tek istek atması yerine tek bir birleşik giriş noktası sağlamak", "Veritabanı bağlantılarını doğrudan istemciye açmak", "Uygulamayı monolitik yapıya çevirmek"], dogruCevap: "İstemci (Client) uygulamanın onlarca alt servise tek tek istek atması yerine tek bir birleşik giriş noktası sağlamak" },
    { soru: "Backend performansını uçurmak için, çok sık değişmeyen ağır veritabanı sorgularının sonuçlarının bellekte (Memory) tutulmasına ne ad verilir?", secenekler: ["Paging", "Indexing", "Caching (Önbellekleme)"], dogruCevap: "Caching (Önbellekleme)" },
    { soru: "Restful kurallarında bir koleksiyon veya listenin silinmesini temsil eden istek genelde nasıl gönderilir?", secenekler: ["POST /api/items/delete", "DELETE /api/items", "REMOVE /api/items"], dogruCevap: "DELETE /api/items" },
    { soru: "Bir Transaction senaryosunda 'Dirty Read' (Kirli Okuma) hatası nedir?", secenekler: ["Commit edilmemiş (henüz kesinleşmemiş) verilerin başka bir transaction tarafından okunması", "Verilerin şifrelenmeden okunması", "Cache'den eski veri okunması"], dogruCevap: "Commit edilmemiş (henüz kesinleşmemiş) verilerin başka bir transaction tarafından okunması" },
    { soru: "Websocket (WS) teknolojisinin HTTP protokolüne göre gerçek zamanlı (real-time) uygulamalarda (ör: chat uygulaması) ezici üstünlüğü nedir?", secenekler: ["Sürekli bağlantıda kalıp çift yönlü (Full-Duplex) veri akışı sağlaması", "Daha güvenli SSL sertifikası içermesi", "Cache'i doğrudan kontrol edebilmesi"], dogruCevap: "Sürekli bağlantıda kalıp çift yönlü (Full-Duplex) veri akışı sağlaması" },
    { soru: "Yüklü miktarda asenkron görevi (Kuyruk, email gönderme veya ağır rapor işlemleri) ana server thread'i dışında arka planda işletmek için kullanılan genel yapıya ne denir?", secenekler: ["Redis Cache", "Task / Job Queue (Celery, Bull vb.)", "WebSockets"], dogruCevap: "Task / Job Queue (Celery, Bull vb.)" },
    { soru: "API versiyonlamasında hangisi standart Best-Practice yöntemlerinden biri değildir?", secenekler: ["Header içine Application/vnd.api.v1+json eklemek", "URL'de belirtmek (api.domain.com/v1/)", "Gövde (Body) içine \"version\": \"2\" parametresi eklemek"], dogruCevap: "Gövde (Body) içine \"version\": \"2\" parametresi eklemek" },
    { soru: "REST servisden farklı olarak Server'dan Cihaza doğru sürekli ve tek taraflı bilgi akışı (örneğin borsa verisi veya bildirim) sağlayan protokolün popüler teknolojisi nedir?", secenekler: ["Server-Sent Events (SSE)", "GraphQL", "SOAP"], dogruCevap: "Server-Sent Events (SSE)" },
    { soru: "Kullanıcıdan gelen inputların herhangi bir filtresiz veritabanı sorgusunda concat (string birleştirme) edilerek kullanılması hangi meşhur zafiyeti doğurur?", secenekler: ["Cross-Site Request Forgery (CSRF)", "SQL Injection", "Buffer Overflow"], dogruCevap: "SQL Injection" },
    { soru: "Python tabanlı web framework'lerinde WSGI veya ASGI kavramlarının temel görevi nedir?", secenekler: ["Veritabanı bağlantı havuzunu (connection pool) yönetmek", "Web sunucusu (Nginx/Apache) ile Python web uygulaması arasında iletişimi standartlaştıran arayüz olmak", "Otomatik loglama yapmak"], dogruCevap: "Web sunucusu (Nginx/Apache) ile Python web uygulaması arasında iletişimi standartlaştıran arayüz olmak" },
    { soru: "NodeJS'te require('module') yerine import 'module' syntax'ını kullanmak için package.json dosyasına eklenmesi gereken property nedir?", secenekler: ["\"type\": \"module\"", "\"type\": \"ES6\"", "\"script\": \"import\""], dogruCevap: "\"type\": \"module\"" },
    { soru: "Solid prensiplerinde S harfinin (Single Responsibility Principle) backend kodlama mimarisindeki karşılığı tam olarak nedir?", secenekler: ["Her modül veya sınıfın yalnızca tek bir amacı veya işi olmalıdır.", "Sınıflar yalnızca kendi interface'leriyle muhatap olmalıdır.", "Değişkenlerin tipleri her zaman tek bir tipte olmalıdır."], dogruCevap: "Her modül veya sınıfın yalnızca tek bir amacı veya işi olmalıdır." }
  ],
  "Ağ Mühendisi": [
    { soru: "Ağ cihazlarının hangi portlara bağlanacağını ve paketleri doğru istemciye MAC adreslerini öğrenerek aktaran genel cihaz donanımı nedir?", secenekler: ["Router", "Layer 2 Switch", "Hub"], dogruCevap: "Layer 2 Switch" },
    { soru: "OSI (Açık Sistem Bağlantıları) referans modelinde IP (Internet Protocol) katmanı kaçıncı katmandır?", secenekler: ["Katman 2 (Data Link)", "Katman 3 (Network)", "Katman 4 (Transport)"], dogruCevap: "Katman 3 (Network)" },
    { soru: "Ağ iletişimi sırasında iki süreç arasındaki en hızlı ve iletim garantisi (Ack) OLMAYAN hafif iletişim protokolü hangisidir?", secenekler: ["TCP", "HTTP", "UDP"], dogruCevap: "UDP" },
    { soru: "Evinizdeki cihazların dış dünyaya tek bir IP (Public IP) adresi üzerinden çıkmasını sağlayıp, yerel IP'leri dış IP adresine çeviren teknoloji hangisidir?", secenekler: ["NAT (Network Address Translation)", "DNS (Domain Name System)", "DHCP (Dynamic Host Configuration)"], dogruCevap: "NAT (Network Address Translation)" },
    { soru: "Ağ maskesi hesabı olan `/24` (Subnetting) C Sınıfı bir yerel ağda (Subnet ID ve Broadcast hariç) kaç adet kullanılabilir Host IP adresi sunar?", secenekler: ["256", "255", "254"], dogruCevap: "254" },
    { soru: "Sıradan bir ağ kullanıcısının isim uzaylarını anlamlandırarak, 'google.com' yazıldığında hedefin hangi IP adresi olduğunu haritalayan protokol nedir?", secenekler: ["DHCP", "DNS", "ARP"], dogruCevap: "DNS" },
    { soru: "HTTP trafiğini güvenceye alarak (HTTPS) asimetrik ve simetrik şifreleme yapan Handshake mimarisinin güvendiği protokolün adı nedir?", secenekler: ["SSL / TLS", "IPSec", "SSH"], dogruCevap: "SSL / TLS" },
    { soru: "Yerel Ağ (LAN) içerisinde ilgili IP adresinin hangi cihaza ait olduğunu (MAC Adresini) tespit etmek için switch veya cihazlar tarafından gönderilen broadcast protokolü nedir?", secenekler: ["ARP (Address Resolution Protocol)", "ICMP", "IGMP"], dogruCevap: "ARP (Address Resolution Protocol)" },
    { soru: "TCP bağlantı kurum aşamasında gerçekleşen (SYN, SYN-ACK, ACK) onay mekanizmasına ne denir?", secenekler: ["Two-Way Handshake", "Three-Way Handshake", "Four-Way Close"], dogruCevap: "Three-Way Handshake" },
    { soru: "Eposta gönderiminde Mail Server'den (Client-to-Server) giden e-postaları transfer etmek için kullanılan standart port (25/587) ve protokol nedir?", secenekler: ["IMAP", "POP3", "SMTP"], dogruCevap: "SMTP" },
    { soru: "Şirket mimarisinde internet trafiğini iç networklere veya iç networkü internete bağlama sürecinde kuralları süzüp filtreleyen güvenlik sistemi nedir?", secenekler: ["Firewall (Güvenlik Duvarı)", "Modem", "Access Point"], dogruCevap: "Firewall (Güvenlik Duvarı)" },
    { soru: "OSI Modelinde Layer 7 olan, kullanıcıyla veya uygulamayla doğrudan etkileşime geçen katman hangisidir?", secenekler: ["Transport Layer", "Application Layer", "Presentation Layer"], dogruCevap: "Application Layer" },
    { soru: "Ağ içerisinde cihazların zamanını senkronize tutarak logların (syslog vb.) tutarlı işlemesini sağlayan protokol hangisidir?", secenekler: ["NTP (Network Time Protocol)", "SNMP", "SMTP"], dogruCevap: "NTP (Network Time Protocol)" },
    { soru: "VLAN (Virtual Local Area Network) teknolojisinin temel amacı nedir?", secenekler: ["Fiziksel olarak dağınık switchleri mantıksal yayın (broadcast) alanlarına bölüp güvenliği/performansı artırmak.", "Wifi sinyal kalitesini güçlendirmek.", "MAC adres tablosunu silmek."], dogruCevap: "Fiziksel olarak dağınık switchleri mantıksal yayın (broadcast) alanlarına bölüp güvenliği/performansı artırmak." },
    { soru: "Ping komutunun arka planda erişilebilirlik ve bağlantı analizini yapması için kullandığı kontrol mesajları protokolü nedir?", secenekler: ["ICMP", "IGMP", "TCP"], dogruCevap: "ICMP" },
    { soru: "BGP (Border Gateway Protocol) yapısının internet mimarisindeki asıl görevi nedir?", secenekler: ["İç şebekelerde MAC eşleştirmesi yapmak.", "Şirket Switchlerini yapılandırmak.", "İnternet Servis Sağlayıcıları arasındaki harita yönlendirme (routing) tablolarını güncellemek."], dogruCevap: "İnternet Servis Sağlayıcıları arasındaki harita yönlendirme (routing) tablolarını güncellemek." },
    { soru: "Otonom Sistem (Autonomous System - AS) kavramı genellikle hangi protokolde kullanılır?", secenekler: ["OSPF", "BGP", "RIP"], dogruCevap: "BGP" },
    { soru: "Yerel bir ağa dahil olan host cihaza otomatik olarak Gateway IP, Subnet Mask, Host IP adresi tahsis eden sunucu yapılandırması hangisidir?", secenekler: ["DHCP", "DNS", "WINS"], dogruCevap: "DHCP" },
    { soru: "Ağ yöneticilerinin switch, router ya da sunucu durumlarını izlemesi, port down/up olaylarını takip etmesi için popüler portu 161 olan SNMP protokolünün açılımı nedir?", secenekler: ["Simple Network Management Protocol", "Secure Network Mapping Protocol", "System Node Monitoring Program"], dogruCevap: "Simple Network Management Protocol" },
    { soru: "Kablosuz iletişimde (Wi-Fi) güvenlik sağlamak için kullanılan en modern, şifreleme anahtarı değişimi sağlayan ve kırması en zor şifreleme standardı (2018 tanıtımlı) nedir?", secenekler: ["WEP", "WPA2", "WPA3"], dogruCevap: "WPA3" },
    { soru: "Bir yönlendirici (Router) paketleri hedefe gönderirken Route (Yönlendirme) tablosuna bakar. Hiçbir hedef IP ağına uymayan paketler nereye gönderilir?", secenekler: ["Default Gateway (Varsayılan Ağ Geçidi)", "Drop (Doğrudan imha)", "Local Broadcast'e"], dogruCevap: "Default Gateway (Varsayılan Ağ Geçidi)" },
    { soru: "Layer 4 (Transport) seviyesinde hem bağlantı tabanlı olan (TCP) portları hem de paketleri baz alarak güvenlik kuralı yazabilen duruma, firewall terminolojisinde ne ad verilir?", secenekler: ["Stateful Inspection", "Packet Mapping", "Deep Packet Inspection (DPI)"], dogruCevap: "Stateful Inspection" },
    { soru: "Uzaktan bir Linux veya Ağ Cihazına (komut satırı) güvenli şifrelenmiş bağlantı kurmak için, standart Telnet protokolü RİSKLİDİR. Onun yerine hangi protokol (Port 22) kullanılır?", secenekler: ["SSH", "FTP", "RDP"], dogruCevap: "SSH" },
    { soru: "Ağ topolojilerinde sunucu barındırma (Server) veya internet bağlantılarında yedeklilik ve yüksek bulunabilirlik (HA) sağlamak için iki interface'i tek ip'de birleşme işlemine verilen ad (Cisco'da)?", secenekler: ["VLAN Tagging", "EtherChannel / Link Aggregation", "Spanning Tree"], dogruCevap: "EtherChannel / Link Aggregation" },
    { soru: "Bir network'te döngüleri (Broadcast Loop) engellemek için switchler arasında kurulan ve anahtar-kök (Root Bridge) tespit eden algoritmanın / protokolün adı nedir?", secenekler: ["OSPF", "Spanning Tree Protocol (STP)", "VTP"], dogruCevap: "Spanning Tree Protocol (STP)" },
    { soru: "Cisco yönlendiricilerde (Routers) ayrıcalıklı konfigürasyon (Privileged EXEC) moduna geçmek için kullanılan temel geçiş komutu nedir?", secenekler: ["configure terminal", "enable", "exit"], dogruCevap: "enable" },
    { soru: "IPv6 adresi teorik olarak kaç bittir ve günümüz IPv4 tükenme krizini nasıl çözmüştür?", secenekler: ["32 Bit", "256 Bit", "128 Bit"], dogruCevap: "128 Bit" },
    { soru: "Siber güvenlik alanında sahte (Spoofed) bir IP üzerinden bir ağı binlerce ICMP veya Botnet isteğiyle boğup devre dışı bırakan saldırılara genel olarak ne isim verilir?", secenekler: ["Denial of Service (DDoS)", "Phishing", "Man-in-the-Middle"], dogruCevap: "Denial of Service (DDoS)" },
    { soru: "Eğer bir cihaz ağla bağlantı kuramayıp DHCP'den de yanıt alamazsa, Windows'un 169.254.x.x ile başlayan kendi atadığı geçici ağ adresine ne denir?", secenekler: ["APIPA (Automatic Private IP Addressing)", "Localhost Loopback", "Static Reserve"], dogruCevap: "APIPA (Automatic Private IP Addressing)" },
    { soru: "Ağ mimarisinde (SDN - Yazılım Tanımlı Ağlar) Control Plane (Karar Alma Düzlemi) ile Data Plane (Veri İletme Düzlemi) ayrıldığında, kontrolörü iletişim kurmak için destekleyen en popüler protokol (genellikle OpenFlow) nedir?", secenekler: ["OpenFlow", "BGP", "VLAN"], dogruCevap: "OpenFlow" }
  ],
  "Veritabanı Uzmanı": [
    { soru: "İlişkisel veritabanı yönetim sistemlerinde (RDBMS) Primary Key ile ilişkilendirilerek, iki tabloyu tamamen güvenli bağlayan kısıtlama (constraint) nedir?", secenekler: ["Unique Key", "Foreign Key", "Index Key"], dogruCevap: "Foreign Key" },
    { soru: "Aynı anda birçok işlemin çalıştığı bir SQL sisteminde ölü kilitlenme (Deadlock) durumu nedir?", secenekler: ["Network'ün SQL Server ile bağlantısının kopması.", "İki transaction'un sonsuza dek birbirinin tuttuğu kaynağı bırakmasını beklemesi.", "Veritabanına çok fazla yedeğin yüklenmesi."], dogruCevap: "İki transaction'un sonsuza dek birbirinin tuttuğu kaynağı bırakmasını beklemesi." },
    { soru: "Büyük çaplı (Big Data) tabloların arama hızını artırmak için oluşturulan (Index) yapıları genellikle hafızada hangi veri algoritması mimarisiyle tutulur?", secenekler: ["B-Tree (Balanced Tree)", "Linked List", "Hash Map"], dogruCevap: "B-Tree (Balanced Tree)" },
    { soru: "NoSQL (Örneğin MongoDB) mimarisinde, satır-sütun matrisi yerine JSON formatındaki her bir kayıt birimine ne ad verilir?", secenekler: ["Collection", "Table", "Document"], dogruCevap: "Document" },
    { soru: "Bir tabloda çok fazla 'INDEX' kullanmanın en olumsuz (Negatif) yan etkisi nedir?", secenekler: ["Select sorgularını çok yavaşlatması", "Insert, Update ve Delete operasyonlarını yavaşlatması (Performans düşüşü)", "Tablonun dışarıya yedeklenmesini engellemesi"], dogruCevap: "Insert, Update ve Delete operasyonlarını yavaşlatması (Performans düşüşü)" },
    { soru: "Veritabanlarındaki ACID özelliklerinden (Atomicity, Consistency, Isolation, Durability) Atomicity (Bütünlük) ne anlama gelir?", secenekler: ["İşlemlerin aynı anda sıraya alınması.", "Bir işlemin (Transaction) parçalanamaması, ya \"Tamamı gerçekleşir ya da iptal olur\" (All or Nothing) kuralı.", "Veritabanının diskteki fiziksel dayanıklılığı."], dogruCevap: "Bir işlemin (Transaction) parçalanamaması, ya \"Tamamı gerçekleşir ya da iptal olur\" (All or Nothing) kuralı." },
    { soru: "SQL Server (veya PostgreSQL)'da Store Procedure (SP) kullanmanın standart View veya manuel Query çalıştırmaya kıyasla en belirgin avantajı nedir?", secenekler: ["Mantıksal (İş) parametrelerini kabul edebilmesi ve derleme hızı (Execution Plan Caching).", "Daha düşük disk alanı kaplaması.", "Sadece Select yetkisi alabilmesi."], dogruCevap: "Mantıksal (İş) parametrelerini kabul edebilmesi ve derleme hızı (Execution Plan Caching)." },
    { soru: "Tablolarda istenmeyen, tekrarlanan ve gereksiz (anomali yaratan) verilerin temizlenip ilişkisel kurallarla farklı tablolara bölünmesi işlemine genel olarak ne isim verilir?", secenekler: ["Normalization (Normalizasyon)", "Denormalization", "Sharding"], dogruCevap: "Normalization (Normalizasyon)" },
    { soru: "JOIN türlerinden 'LEFT JOIN' komutu işleme alındığında dönen sonuç kümesini nasıl etkiler?", secenekler: ["Sol taraftaki (Left) tablodaki tüm veriler eşleşmese bile döner, sağdaki tabloda (Right) boş olan karşılıklar Null olarak geçer.", "Sadece sağ ve sol tablonun mükemmel eşleştiği orta kısmı getirir.", "Sağ taraftaki tablonun tamamı mutlaka sonuçta görünür."], dogruCevap: "Sol taraftaki (Left) tablodaki tüm veriler eşleşmese bile döner, sağdaki tabloda (Right) boş olan karşılıklar Null olarak geçer." },
    { soru: "MySQL, PostgreSQL veya Oracle'da arka planda bir tabloda gerçekleşen Insert, Update veya Delete işlemlerine duyarlı olarak 'Otomatik Fırlatılan (tetiklenen)' programlanabilir bloklara ne ad verilir?", secenekler: ["Trigger", "Job", "Constraint"], dogruCevap: "Trigger" },
    { soru: "Yüksek erişilebilirlik sağlayan MongoDB kümelerinde verilerin fiziksel olarak farklı makinelere parçalanarak dağıtılmasını (Yatay Dağıtım) sağlayan mimari konsept nedir?", secenekler: ["Replication Setup", "Sharding", "Clustering"], dogruCevap: "Sharding" },
    { soru: "SQL injection açıklarını kapatmak, güvenlik sağlamak ve execution plan oluşturması için parametre alan yazılım sorgu modeline ne ad verilir?", secenekler: ["Stored Query", "Prepared Statements (Parametrized SQL)", "In-line SQL"], dogruCevap: "Prepared Statements (Parametrized SQL)" },
    { soru: "SQL'de verileri süzmek için kullanılan `HAVING` ile `WHERE` arasındaki en temel fark nedir?", secenekler: ["WHERE sadece string filtreler, HAVING sayısaldır.", "HAVING komutu kümeleme / gruplama (GROUP BY) işlemlerinin sonrasında çıkan sonuca uygulanırken, WHERE komutu gruplamadan önceki ana tablo verilerini süzmek için uygulanır.", "Aralarında performans dışında mantık farkı yoktur."], dogruCevap: "HAVING komutu kümeleme / gruplama (GROUP BY) işlemlerinin sonrasında çıkan sonuca uygulanırken, WHERE komutu gruplamadan önceki ana tablo verilerini süzmek için uygulanır." },
    { soru: "Bir tabloda yeni bir sütun eklemek (Add Column), bir sütunu silmek (Drop Column) gibi tablonun yapısını değiştiren dillere SQL'de genel olarak ne denir?", secenekler: ["DML (Data Manipulation Language)", "DDL (Data Definition Language)", "DCL (Data Control Language)"], dogruCevap: "DDL (Data Definition Language)" },
    { soru: "Bir NoSQL veritabanı (Redis vb.) bellekte (Memory/RAM) veriyi tutarak olağanüstü yüksek okuma hızları sağlar. Bu tip sistemlere genellikle ne isim verilir?", secenekler: ["In-Memory Database", "Graph Database", "Columnar Database"], dogruCevap: "In-Memory Database" },
    { soru: "Bir ilişkisel tabloda kendi tablosundaki başka bir kayda hiyerarşik veya ağaca benzer (Müdür -> Çalışan) referans atanmasına ne ad verilir?", secenekler: ["Self-Join (Recursive İlişki)", "Cross-Join", "Full-Outer Join"], dogruCevap: "Self-Join (Recursive İlişki)" },
    { soru: "SQL tablosuna saniyeler önce `INSERT INTO` ile veri eklendi fakat hata sebebiyle geri alınması gerekti. Eğer bu `BEGIN TRANSACTION` içerisinde yapıldıysa kodu ne ile bitirmeliyiz?", secenekler: ["COMMIT", "SAVE", "ROLLBACK"], dogruCevap: "ROLLBACK" },
    { soru: "Sadece tek bir sütun yerine birden fazla sütunun birleşiminden (Örneğin: Ad+Soyad) oluşan eşsiz ve tanımlayıcı bir primary yapısına (Anahtar) ne isim verilir?", secenekler: ["Clustered Index", "Composite (Bileşik) Key", "Super Key"], dogruCevap: "Composite (Bileşik) Key" },
    { soru: "Veritabanındaki Log (WAL veya Transaction Log) dosyaları diskte dolup büyüme krizine girdiğinde (Örn: SQL Server Log file is full), hangi işlemi yapmak diski rahatlatır?", secenekler: ["Log file'ı silip DB'yi kapat aç yapmak.", "Log Yedeği almak (Transaction Log Backup / Shrink) veya Recovery modelini değiştirmek.", "Indexleri Rebuild yapmak."], dogruCevap: "Log Yedeği almak (Transaction Log Backup / Shrink) veya Recovery modelini değiştirmek." },
    { soru: "Kullanıcı analizleri (Aggregation), devasa veriler üzerinde rapor veya tahminleme için kullanılan saniyede milyonlarca satır analiz edebilen Column-based Veri Ambarı (Data Warehouse) ürünlerine en iyi örnek hangisidir?", secenekler: ["Redis", "Cassandra", "Google BigQuery / Amazon Redshift"], dogruCevap: "Google BigQuery / Amazon Redshift" },
    { soru: "Aynı anda gelen Transaction yüklerinde (Isolation Level), okuma tarafına sürekli kirli veya phantom (Hayalet) veri gelmemesi için en yüksek ancak en ağır / en kitleyen 'Isolation Level' türü hangisidir?", secenekler: ["Read Uncommitted", "Read Committed", "Serializable"], dogruCevap: "Serializable" },
    { soru: "A tablosundaki 10 kayıt ile B tablosundaki 20 kaydın koşulsuz olarak tam çapraz çarpımını alıp 200 kayıplı bir sonuç kümesi döndüren hatalı veya test amaçlı join modeli nedir?", secenekler: ["CROSS JOIN (Cartesian Product)", "LEFT SEMI JOIN", "NATURAL JOIN"], dogruCevap: "CROSS JOIN (Cartesian Product)" },
    { soru: "SQL'de veritabanındaki kullanıcı haklarını, yetkilendirmeleri (GRANT / REVOKE) sağlayan komut dizisi ailesine hangi ad verilir?", secenekler: ["DDL (Data Definition Language)", "DCL (Data Control Language)", "DML (Data Manipulation Language)"], dogruCevap: "DCL (Data Control Language)" },
    { soru: "Yüksek erişilebilirlik ve okuma işlemlerini rahatlatmak için, veritabanının Master (Yazma) sunucusundan saniyelik farkla sadece Select işlemlerine (Okuma) hizmet eden yedek makinelere ne ad verilir?", secenekler: ["Read Replica (Slave/Secondary)", "Shard Node", "Cache Layer"], dogruCevap: "Read Replica (Slave/Secondary)" },
    { soru: "Verilerin satırlar (row format) yerine sütun (column format) bazlı diske yazıldığı mimariler, özellikle ne için muazzam hızlıdır?", secenekler: ["Saniyeler içinde binlerce küçük tekil kayıt (Insert/Update) yapan bankacılık için.", "Belirli sütunların tamamının matematiksel (SUM, AVG) olarak toplanıp analitik (OLAP) büyük hacimli rapor çekilmesi için.", "Veri silme hızında."], dogruCevap: "Belirli sütunların tamamının matematiksel (SUM, AVG) olarak toplanıp analitik (OLAP) büyük hacimli rapor çekilmesi için." },
    { soru: "MongoDB'de ilişkisel bir JOIN komutunun (bir collectiondan diğerine veri eşleyip aktarma) aggregation seviyesindeki karşılık gelen pipeline stage'i nedir?", secenekler: ["$match", "$group", "$lookup"], dogruCevap: "$lookup" },
    { soru: "Bir RDBMS içindeki saklanmış yordam (Stored Procedure) içinde `TRY CATCH` veya `BEGIN COMMIT` kullanmadan bir işlem çökerse, varsayılan olarak sunucu hangi state ve kilitlenme (lock) reaksiyonunu gösterir?", secenekler: ["Transaction havada (Open) asılı kalarak ilgili tabloyu kilitleyebilir.", "Hemen saniyede otomatik iptal eder.", "Tüm RDBMS Server kapanır."], dogruCevap: "Transaction havada (Open) asılı kalarak ilgili tabloyu kilitleyebilir." },
    { soru: "Sosyal medya takipçi ağı (Geniş ağaçlar), rota optimizasyonu, arkadaş önerme (Arkadaşımın arkadaşı önerisi) gibi derin ilişkili (Deep Link) veriler için tasarlanmış NoSQL veritabanı yapısının spesifik türü nedir?", secenekler: ["Key-Value (Örn: Memcached)", "Document (Örn: Couchbase)", "Graph (Örn: Neo4J)"], dogruCevap: "Graph (Örn: Neo4J)" },
    { soru: "Fiziksel Index oluşturmadan veritabanında RAM içinde son kullanıcı sorguları için sürekli sanal olarak yeniden tablo (View) yaratan yapı nedir?", secenekler: ["Materialized View", "Standard View", "Temporary Table"], dogruCevap: "Standard View" },
    { soru: "PostgreSQL'in en popüler coğrafi (Geospatial Spatial veri tipi) eklentisinin, mesafe ve harita objelerini hesaplamak için yaygın bilinen adı nedir?", secenekler: ["PgLocation", "PostGIS", "GeoSQL"], dogruCevap: "PostGIS" }
  ]
};

export const kodOkumaHavuzu: Record<string, KodOkumaTipi[]> = {
  "Mobil Geliştirici": [
    {
      soruMetni: "Bu React Native bileşeninde FlatList render ederken hangi kritik hata yapılmıştır?",
      kodSnippet: `const Users = ({ veriler }) => {
  return (
    <FlatList
      data={veriler}
      renderItem={({ item }) => <Text>{item.isim}</Text>}
      keyExtractor={(item, index) => Math.random().toString()}
    />
  );
};`,
      secenekler: ["Veriler array değildir.", "RenderItem fonksiyonel değil.", "keyExtractor random olduğu için gereksiz yere her scroll'da tüm liste re-render olur."],
      dogruCevap: "keyExtractor random olduğu için gereksiz yere her scroll'da tüm liste re-render olur."
    },
    {
      soruMetni: "Aşağıdaki useEffect kullanımında hafıza sızıntısı (Memory Leak) oluşmasının sebebi nedir?",
      kodSnippet: `useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
}, []);`,
      secenekler: ["Dependency array eksik.", "Clean-up (Geri dönüş) fonksiyonu yazılarak clearInterval yapılmamış.", "setInterval React'te kullanılamaz."],
      dogruCevap: "Clean-up (Geri dönüş) fonksiyonu yazılarak clearInterval yapılmamış."
    },
    {
      soruMetni: "Aşağıdaki Swift kodunda derleme hatasına (Compile Error) ne sebep olur?",
      kodSnippet: `let maxScore = 100
maxScore = 150
print(maxScore)`,
      secenekler: ["Print fonksiyonuna parametre verilmemeli.", "let ile tanımlanan sabitler (constant) sonradan değiştirilemez, var kullanılmalı.", "Noktalı virgül eksik."],
      dogruCevap: "let ile tanımlanan sabitler (constant) sonradan değiştirilemez, var kullanılmalı."
    },
    {
      soruMetni: "Bu React Native stil objesinde hata neresidir?",
      kodSnippet: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    background-color: 'red',
  }
});`,
      secenekler: ["React Native'de özellikler camelCase yazılmalıdır (backgroundColor).", "flex: 1 değeri tırnak içinde ('1') olmalıdır.", "StyleSheet dışa aktarılmamış."],
      dogruCevap: "React Native'de özellikler camelCase yazılmalıdır (backgroundColor)."
    },
    {
      soruMetni: "Bu state güncellemesi neden beklenmedik sonuçlar verebilir?",
      kodSnippet: `const handleIncrement = () => {
  setScore(score + 1);
  setScore(score + 1);
};`,
      secenekler: ["React bu durumu engeller ve hata atar.", "State güncellemeleri asenkron/batched olduğu için score sadece 1 artar. prev => prev + 1 kullanılmalı.", "Score string'e dönüşüp '11' olur."],
      dogruCevap: "State güncellemeleri asenkron/batched olduğu için score sadece 1 artar. prev => prev + 1 kullanılmalı."
    },
    {
      soruMetni: "Kotlin'de aşağıdaki kodun null safety ihlali yapmasının sebebi nedir?",
      kodSnippet: `var name: String? = null
val length = name.length`,
      secenekler: ["length metodu String objesinde bulunmaz.", "Nullable (String?) değişkene güvenli çağrı (?.) yapılmadan veya assert (!!) kullanılmadan erişilmiş.", "val yerine var kullanılmalıdır."],
      dogruCevap: "Nullable (String?) değişkene güvenli çağrı (?.) yapılmadan veya assert (!!) kullanılmadan erişilmiş."
    },
    {
      soruMetni: "React Native WebView bileşeninde web sitesi neden yüklenmiyor?",
      kodSnippet: `import { WebView } from 'react-native';
//...
return <WebView url="https://kodkart.com" />`,
      secenekler: ["url özelliği yanlıştır, 'source={{ uri: ... }}' kullanılmalı.", "Import hatalı, 'react-native-webview' olmalı.", "İkisi de doğru (Hem import eski çekirdekten hem prop yanlış)."],
      dogruCevap: "İkisi de doğru (Hem import eski çekirdekten hem prop yanlış)."
    },
    {
      soruMetni: "SwiftUI'da bu binding işlemi nerede hata yapmaktadır?",
      kodSnippet: `struct TextFieldView: View {
  var name: String = ""
  var body: some View {
    TextField("Enter name", text: $name)
  }
}`,
      secenekler: ["TextField metni sabittir güncellenemez.", "State güncellemeleri yapabilmek için 'name' degişkeninin başına @State eklenmelidir.", "$ işareti SwiftUI'da kullanılamaz."],
      dogruCevap: "State güncellemeleri yapabilmek için 'name' degişkeninin başına @State eklenmelidir."
    },
    {
      soruMetni: "React Native useEffect hooks'unda neden sonsuz re-render döngüsüne girilir?",
      kodSnippet: `useEffect(() => {
  fetchData().then(data => setUsers(data));
});`,
      secenekler: ["Dependency array [] (Boş dizi) unutulmuş, her re-render'da tekrar fetch ve state tetikliyor.", "fetchData fonksiyonu import edilmemiş.", "setUsers asenkron olamaz."],
      dogruCevap: "Dependency array [] (Boş dizi) unutulmuş, her re-render'da tekrar fetch ve state tetikliyor."
    },
    {
      soruMetni: "Android RecyclerView mantığındaki bu Kotlin kodunda Holder nerede hata veriyor?",
      kodSnippet: `override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
  holder.titleTextView.text = items[position]
}`,
      secenekler: ["items listesi var olmamalıdır.", "Holder doğru, ancak adapter class scope'unda LayoutInflater eksik olabiliyor. Kod syntax olarak doğru ama layout inflate bağlamına muhtaç.", "onBindViewHolder int yerine String almalı."],
      dogruCevap: "Holder doğru, ancak adapter class scope'unda LayoutInflater eksik olabiliyor. Kod syntax olarak doğru ama layout inflate bağlamına muhtaç."
    },
    {
      soruMetni: "Bu React Native TouchableOpacity butonu Android cihazlarda neden text arkadasında gölge kalıntısı yapıyor veya tıkanıyor?",
      kodSnippet: `<TouchableOpacity>
  <View style={{ elevation: 5 }}>
    <Text>Tıkla</Text>
  </View>
</TouchableOpacity>`,
      secenekler: ["View içine elevation verip TouchableOpacity içine sarmak dokunma (hitSlop) ve gölge sınırlarında taşma/kısılma yaratır, elevation dıştaki dokunulabilir ambalaja verilmelidir.", "TouchableOpacity padding almalıdır.", "Text margin desteklemez."],
      dogruCevap: "View içine elevation verip TouchableOpacity içine sarmak dokunma (hitSlop) ve gölge sınırlarında taşma/kısılma yaratır, elevation dıştaki dokunulabilir ambalaja verilmelidir."
    },
    {
      soruMetni: "React Navigation'da bu route parametresi yakalama işlemindeki hata nedir?",
      kodSnippet: `const ProfileScreen = ({ route }) => {
  const userId = route.params.id; // TypeError
}`,
      secenekler: ["params boş olamaz.", "Eğer sayfaya param'suz (navigate('Profile')) gelinirse route.params tanımsız (undefined) olabilir. Optional Chaining (route.params?.id) şarttır.", "route yerine navigation çağrılmalıdır."],
      dogruCevap: "Eğer sayfaya param'suz (navigate('Profile')) gelinirse route.params tanımsız (undefined) olabilir. Optional Chaining (route.params?.id) şarttır."
    },
    {
      soruMetni: "Swift'te Closure (blok) içinde self kullanımındaki Memory Leak kaynağı nedir?",
      kodSnippet: `networkManager.fetchData { [self] data in
  self.process(data)
}`,
      secenekler: ["[self] güçlü (strong) referans döngüsü (Reference Cycle) yaratır, zayıf olması için [weak self] kullanılmalıdır.", "Closure içinde self kullanılamaz.", "networkManager deinit edilmemiş."],
      dogruCevap: "[self] güçlü (strong) referans döngüsü (Reference Cycle) yaratır, zayıf olması için [weak self] kullanılmalıdır."
    },
    {
      soruMetni: "React Native'de Image bileşeninde resim neden boyutsuz veya ekinik görünüyor?",
      kodSnippet: `<Image source={{ uri: 'https://site.com/img.png' }} />`,
      secenekler: ["URI kullanımı yanlıştır.", "Harici (uri) resimlerin default boyutu yoktur, render olabilmeleri için mutlaka Explicit style (width ve height) verilmelidir.", "HTTPS protokolu img ile desteklenmez."],
      dogruCevap: "Harici (uri) resimlerin default boyutu yoktur, render olabilmeleri için mutlaka Explicit style (width ve height) verilmelidir."
    },
    {
      soruMetni: "Kotlin Coroutine Scope içindeki UI güncellemesi neden Exception fırlatır?",
      kodSnippet: `GlobalScope.launch {
  val data = fetchApi()
  textView.text = data // Hata burada
}`,
      secenekler: ["TextView güncellenmemelidir.", "GlobalScope varsayılan olarak arka plan thredi sunar. UI (Arayüz) elementleri sadece Main Thread (Dispatchers.Main) üzerinden güncellenebilir.", "fetchApi senkron çağrılamaz."],
      dogruCevap: "GlobalScope varsayılan olarak arka plan thredi sunar. UI (Arayüz) elementleri sadece Main Thread (Dispatchers.Main) üzerinden güncellenebilir."
    }
  ],
  "Frontend Geliştirici": [
    {
      soruMetni: "Bu React komponentinde sonsuz döngü (infinite loop) neden oluşur?",
      kodSnippet: `const Counter = () => {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return <Text>{count}</Text>;
};`,
      secenekler: ["Render evresinde setCount çağrıldığı için sürekli yeniden render tetikler.", "useState yanlış import edilmiş.", "Text elementi count gösteremez."],
      dogruCevap: "Render evresinde setCount çağrıldığı için sürekli yeniden render tetikler."
    },
    {
      soruMetni: "Bu CSS kuralı neden kırmızı arkaplanı uygulamaz?",
      kodSnippet: `<div id="box" class="container" style="background-color: blue;">Test</div>

/* styles.css */
#box.container {
  background-color: red;
}`,
      secenekler: ["ID ve class yan yana yazılamaz.", "Satır içi (inline) style'ın özgüllüğü (specificity) her zaman daha yüksektir.", "div etiketi arkaplan rengi alamaz."],
      dogruCevap: "Satır içi (inline) style'ın özgüllüğü (specificity) her zaman daha yüksektir."
    },
    {
      soruMetni: "Bu JavaScript dosyasında 'console.log(a)' satırı ne çıktı verir?",
      kodSnippet: `console.log(a);
var a = 5;`,
      secenekler: ["5", "ReferenceError: a is not defined", "undefined (Hoisting sebebiyle)"],
      dogruCevap: "undefined (Hoisting sebebiyle)"
    },
    {
      soruMetni: "Array map fonksiyonundaki bu kullanımın tehlikesi nedir?",
      kodSnippet: `<ul>
  {items.map((item, index) => (
    <li key={index}>{item.name}</li>
  ))}
</ul>`,
      secenekler: ["Elemanların sırası değiştiğinde veya silindiğinde Index tabanlı Key, re-render problemlerine/buglara yol açar.", "Index numarası her zaman 1'den başlar.", "li etiketinde key kullanılamaz."],
      dogruCevap: "Elemanların sırası değiştiğinde veya silindiğinde Index tabanlı Key, re-render problemlerine/buglara yol açar."
    },
    {
      soruMetni: "Aşağıdaki async fetch işlemi neden datayı doğru set edemez?",
      kodSnippet: `const getData = async () => {
  const result = fetch('/api/data');
  const raw = await result.json();
  setData(raw);
};`,
      secenekler: ["fetch asenkron olduğu için result objesinde await unutulmuştur.", "API yolu hatalıdır.", "json() metodu senkrondur."],
      dogruCevap: "fetch asenkron olduğu için result objesinde await unutulmuştur."
    },
    {
      soruMetni: "React bağlamında bu olay dinleyicisi (event listener) ne gibi bir soruna yol açar?",
      kodSnippet: `useEffect(() => {
  window.addEventListener('resize', handleResize);
}, []); // Sadece mount'ta çalışır`,
      secenekler: ["Component unmount (yok edildiğinde) event silinmez (removeEventListener eksik). Sürekli bellek sızıntısına yol açar.", "handleResize isim olarak yanlıştır.", "window.addEventListener React'te çalışmaz."],
      dogruCevap: "Component unmount (yok edildiğinde) event silinmez (removeEventListener eksik). Sürekli bellek sızıntısına yol açar."
    },
    {
      soruMetni: "Closure (Kapanış) içeren bu döngüde neden console her zaman '5' yazar?",
      kodSnippet: `for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}`,
      secenekler: ["setTimeout asenkron olduğunda var değişkeni (function scope) referanslı kaldığı için döngü bittiğindeki son değere ulaşır, let kullanılmalıdır.", "For döngüsü limit aşımı yapar.", "setTimeout 1 milisaniye beklemektedir."],
      dogruCevap: "setTimeout asenkron olduğunda var değişkeni (function scope) referanslı kaldığı için döngü bittiğindeki son değere ulaşır, let kullanılmalıdır."
    },
    {
      soruMetni: "Bu React context kullanımı neden büyük performans kaybı yaşatır?",
      kodSnippet: `const MyContext = createContext();
const Provider = ({ children }) => {
  return <MyContext.Provider value={{ config: { theme: 'dark' } }}>
    {children}
  </MyContext.Provider>
};`,
      secenekler: ["Her Provider re-render'ında yeni obje ({}) referansı yaratılır, bu da children içindeki context bağlanan tüm elementleri boş yere yeniden çizer (useMemo şart).", "createContext value olmadan tanımlanamaz.", "Theme 'dark' diye bir özellik string olarak geçirilemez."],
      dogruCevap: "Her Provider re-render'ında yeni obje ({}) referansı yaratılır, bu da children içindeki context bağlanan tüm elementleri boş yere yeniden çizer (useMemo şart)."
    },
    {
      soruMetni: "Bu JavaScript objesinde 'this' anahtar kelimesi metod çağrılınca neden hata verir veya referanssız kalır?",
      kodSnippet: `const user = {
  name: "Ali",
  sayHi: () => {
    console.log(this.name);
  }
};
user.sayHi();`,
      secenekler: ["Obje içi metodlarda Arrow Function (()=>) kendi 'this' bağlamını (context) yaratamaz. Bulunduğu lexikal skobu (genelde window) alır. Normal function() veya method yazımı şarttır.", "name parametresi özel bir kelimedir.", "sayHi metodu user objesine ait değildir."],
      dogruCevap: "Obje içi metodlarda Arrow Function (()=>) kendi 'this' bağlamını (context) yaratamaz. Bulunduğu lexikal skobu (genelde window) alır. Normal function() veya method yazımı şarttır."
    },
    {
      soruMetni: "Bu CSS seçicisinde hedeflenen element neden tasarıma uymuyor?",
      kodSnippet: `<div class="card active">Mesaj</div>
/* styles.css */
.card .active { color: red; }`,
      secenekler: ["Sınıflar arası boşluk (.card .active) iç içe geçmiş (child) elemanı arar. Aynı elementte iki class varsa bitişik yazılmalıdır (.card.active).", "Red rengini class kabul etmez.", "CSS'de active yazımı yanlıştır."],
      dogruCevap: "Sınıflar arası boşluk (.card .active) iç içe geçmiş (child) elemanı arar. Aynı elementte iki class varsa bitişik yazılmalıdır (.card.active)."
    },
    {
      soruMetni: "Bu HTML Button elementi neden bir Form'un otomatik olarak post edilmesine/refresh olmasına sebep olur?",
      kodSnippet: `<form onSubmit={handleSubmit}>
  <input type="text" />
  <button>Gönder/Onayla</button>
</form>`,
      secenekler: ["Bir form içindeki button'un varsayılan tipi 'submit'tir (type='button' eklenmelidir) ve event'te e.preventDefault() eksiktir.", "Aksiyon boş olamaz.", "Input kapatma etiketi hatalıdır."],
      dogruCevap: "Bir form içindeki button'un varsayılan tipi 'submit'tir (type='button' eklenmelidir) ve event'te e.preventDefault() eksiktir."
    },
    {
      soruMetni: "Vue 3'teki bu ref kullanımında veri aktarımı neden yansımaz?",
      kodSnippet: `import { ref } from 'vue';
const count = ref(0);
count = 5; // Reaktif bir yansıma olmuyor`,
      secenekler: ["ref sabitlerine erişirken ve güncellerken count.value = 5 property'sini kullanmak gerekir.", "const olan bir sayı güncellenemez, let kullanılmalı.", "Vue'da ref sayılar için kullanılamaz."],
      dogruCevap: "ref sabitlerine erişirken ve güncellerken count.value = 5 property'sini kullanmak gerekir."
    },
    {
      soruMetni: "React 18 Strict Mode aktifken bu useEffect API'ye neden çift istek (Double call) atar?",
      kodSnippet: `useEffect(() => {
  apiCall();
}, []);`,
      secenekler: ["Strict Mode mount -> unmount -> mount simülasyonu yapar ki sızıntıları yakalayın, hata değildir geliştirme evresinin doğasıdır.", "Dependency'e apiCall eklenmemiştir.", "Fonksiyon ismi yanlıştır."],
      dogruCevap: "Strict Mode mount -> unmount -> mount simülasyonu yapar ki sızıntıları yakalayın, hata değildir geliştirme evresinin doğasıdır."
    },
    {
      soruMetni: "Aşağıdaki TypeScript Union/Intersection tanımında TS derleyicisi neden hata verir?",
      kodSnippet: `type User = { name: string };
type Admin = { adminLevel: number };
const p: User & Admin = { name: "Ali" };`,
      secenekler: ["Intersection (&) ile oluşturulan tiplemeler iki objenin de bütün proplarını zorunlu tutar, adminLevel eksiktir.", "String yerine Int girilmeli.", "Union (&) değil (|) olmalıdır."],
      dogruCevap: "Intersection (&) ile oluşturulan tiplemeler iki objenin de bütün proplarını zorunlu tutar, adminLevel eksiktir."
    },
    {
      soruMetni: "Bu z-index kullanımı neden üstteki .modal'ı sayfanın önüne getirmiyor?",
      kodSnippet: `<div class="content" style="z-index: 1;">
  <div class="modal" style="z-index: 9999; position: absolute;"></div>
</div>
<div class="header" style="z-index: 5; position: relative;"></div>`,
      secenekler: [".modal elemanı .content'in (z-index 1) yığın bağlamına (stacking context) tabidir; dıştaki divler kendi arasında yarışır (header 5 > content 1).", "9999 değeri çok büyüktür browser görmez.", ".content z-index olmadan kullanılamaz."],
      dogruCevap: ".modal elemanı .content'in (z-index 1) yığın bağlamına (stacking context) tabidir; dıştaki divler kendi arasında yarışır (header 5 > content 1)."
    }
  ],
  "Backend Geliştirici": [
    {
      soruMetni: "Aşağıdaki Node.js Express route'unda request'in asılı kalmasının (timeout) nedeni nedir?",
      kodSnippet: `app.get('/user', (req, res) => {
  db.findUser(req.query.id, (err, user) => {
    if (err) console.log("Hata:", err);
    // ...
  });
});`,
      secenekler: ["db senkron bir metottur.", "Hata olsa da olmasa da res.send(), res.json() veya next() gibi bir yanıt döndürme mekanizması yok.", "Routing tanımı hatalı."],
      dogruCevap: "Hata olsa da olmasa da res.send(), res.json() veya next() gibi bir yanıt döndürme mekanizması yok."
    },
    {
      soruMetni: "Bu Python kodunda fonksiyonun çıktısı her çağrılışta neden büyür?",
      kodSnippet: `def add_item(item, box=[]):
    box.append(item)
    return box

print(add_item('A'))
print(add_item('B'))`,
      secenekler: ["Python'da objeler immutable kalır.", "Varsayılan parametre (box=[]) fonksiyon çağrısında değil tanım anında referanslanır, bu yüzden aynı liste kullanılır.", "append metodu global çalışır."],
      dogruCevap: "Varsayılan parametre (box=[]) fonksiyon çağrısında değil tanım anında referanslanır, bu yüzden aynı liste kullanılır."
    },
    {
      soruMetni: "Bu kodu hangi tasarım hatası güvenliğe karşı tehlikeli yapar?",
      kodSnippet: `app.post('/login', (req, res) => {
  const query = "SELECT * FROM users WHERE uname='" + req.body.user + "'";
  db.execute(query);
});`,
      secenekler: ["CSRF açığı barındırır.", "User girdisi filtrelenmeden doğrudan SQL koduna string bağlamasıyla (concat) eklenmiş, SQL Injection'a açıktır.", "HTTP yerine Https kullanılmamış."],
      dogruCevap: "User girdisi filtrelenmeden doğrudan SQL koduna string bağlamasıyla (concat) eklenmiş, SQL Injection'a açıktır."
    },
    {
      soruMetni: "Bu C# controller metodu neden 'Aynı key zaten eklendi' hatası verebilir?",
      kodSnippet: `Dictionary<string, string> dict = new Dictionary<string, string>();
Parallel.For(0, 1000, i => {
    dict.Add("Key" + i, "Value");
});`,
      secenekler: ["For döngüsü limit aşımı yapar.", "Dictionary thread-safe bir yapı değildir, Asenkron paralel çağrılarda ConcurrentDictionary kullanılmalıdır.", "Key parametreleri her zaman int olmalıdır."],
      dogruCevap: "Dictionary thread-safe bir yapı değildir, Asenkron paralel çağrılarda ConcurrentDictionary kullanılmalıdır."
    },
    {
      soruMetni: "JWT oluşturulan bu kodda Payload'a neden şifre koyulmamalıdır?",
      kodSnippet: `const token = jwt.sign(
  { id: user.id, pass: user.password },
  process.env.SECRET
);`,
      secenekler: ["Şifre JWT standardında yoktur.", "JWT'deki Token Payload kısmı Base64 ile kodlanır ancak şifrelenmez (encrypt edilmez). Herkes decode edip şifreyi görebilir.", "Şifre hash'lenmediği için error atar."],
      dogruCevap: "JWT'deki Token Payload kısmı Base64 ile kodlanır ancak şifrelenmez (encrypt edilmez). Herkes decode edip şifreyi görebilir."
    },
    {
      soruMetni: "Bu Node.js asenkron fonksiyonunda hata yakalama (try/catch) neden fırlatılan exception'ı yakalayamaz?",
      kodSnippet: `try {
  setTimeout(() => {
    throw new Error('Timeout failed');
  }, 1000);
} catch (e) {
  console.log('Caught:', e);
}`,
      secenekler: ["try/catch senkrondur, setTimeout callback'i Event Loop'ta çalışana kadar try bloğu çoktan bitmiş olur.", "Error tipli obje catch'e düşmez.", "setTimeout içinde throw kullanılamaz."],
      dogruCevap: "try/catch senkrondur, setTimeout callback'i Event Loop'ta çalışana kadar try bloğu çoktan bitmiş olur."
    },
    {
      soruMetni: "Go (Golang) dilinde oluşturulan bu Goroutine neden konsola hiçbir şey yazdırmadan program kapanır?",
      kodSnippet: `func main() {
    go fmt.Println("Hello from Goroutine")
}`,
      secenekler: ["fmt paketi concurrent çalışmaz.", "Ana (main) thread asenkron Goroutine'i beklemeyi bilmez, Print başlamadan main hemen çıkar/kapanır (WaitGroup eksik).", "Goroutine başına go yazılmaz."],
      dogruCevap: "Ana (main) thread asenkron Goroutine'i beklemeyi bilmez, Print başlamadan main hemen çıkar/kapanır (WaitGroup eksik)."
    },
    {
      soruMetni: "Aşağıdaki Express ara katmanında (Middleware), response istemciye neden gitmez?",
      kodSnippet: `app.use((req, res, next) => {
  console.log('Request received');
  // ... bir şeyler yapılır
});

app.get('/', (req, res) => res.send('OK'));`,
      secenekler: ["app.use '/' desteklemez.", "Middleware işlemi bitirdiğinde akışı bir sonrakine geçiren next() metodunu çağırmadığı için istek o katmanda sonsuza kadar asılı kalır.", "res.send JSON almalıdır."],
      dogruCevap: "Middleware işlemi bitirdiğinde akışı bir sonrakine geçiren next() metodunu çağırmadığı için istek o katmanda sonsuza kadar asılı kalır."
    },
    {
      soruMetni: "Spring Boot (Java) Transaction konfigürasyonundaki hatayı saptayın.",
      kodSnippet: `public class UserService {
    @Transactional
    private void updateData() {
        // ...
    }
}`,
      secenekler: ["@Transactional sadece public metodlarda Proxy tarafından yakalanabilir. Private metotlarda bu anotasyon sessizce devre dışı kalır.", "Data JPA'sız kullanılmıştır.", "Transactional servis içine eklenemez."],
      dogruCevap: "@Transactional sadece public metodlarda Proxy tarafından yakalanabilir. Private metotlarda bu anotasyon sessizce devre dışı kalır."
    },
    {
      soruMetni: "Aşağıdaki PHP PDO kod bloğunda SQL Injection'a kapı aralayan hata nedir?",
      kodSnippet: `$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = $id");
$stmt->execute();`,
      secenekler: ["prepare komutu sadece DELETE için kullanılır.", "prepare (hazırlık) yapılmasına rağmen parametre değeri dışarıdan bağlanmamış (bindParam/bindValue yerine direkt string olarak concat edilmiş).", "$_GET kullanımı yanlıştır."],
      dogruCevap: "prepare (hazırlık) yapılmasına rağmen parametre değeri dışarıdan bağlanmamış (bindParam/bindValue yerine direkt string olarak concat edilmiş)."
    },
    {
      soruMetni: "Node.js uygulamasında libuv thread havuzu neden tıkanma uyarısı verebilir?",
      kodSnippet: `const crypto = require('crypto');
app.post('/hash', (req, res) => {
  const hash = crypto.pbkdf2Sync(req.body.pwd, 'salt', 100000, 64, 'sha512');
  res.send(hash);
});`,
      secenekler: ["pbkdf2Sync çağrısı yüksek CPU kullanan Blocking (Senkron) bir işlemdir. Node.js'in tek thread yapısını kilitler.", "Salt değişkeni string olamaz.", "crypto kütüphanesi Express ile uyumlu değildir."],
      dogruCevap: "pbkdf2Sync çağrısı yüksek CPU kullanan Blocking (Senkron) bir işlemdir. Node.js'in tek thread yapısını kilitler."
    },
    {
      soruMetni: "Redis veritabanından veri okunurken bu Node senaryosundaki get çağrısı neden undefined verir?",
      kodSnippet: `const redis = require('redis');
const client = redis.createClient();
let val = client.get('myKey');
console.log(val);`,
      secenekler: ["Client start komutu verilmemiş.", "client.get() varsayılan olarak Asenkron / Promise döner, callback yazılmadı veya get await edilmedi.", "Redis get yerine fetch kullanır."],
      dogruCevap: "client.get() varsayılan olarak Asenkron / Promise döner, callback yazılmadı veya get await edilmedi."
    },
    {
      soruMetni: "Django (Python) model güncelleme işlemi neden veritabanına yansımaz?",
      kodSnippet: `user = User.objects.get(id=1)
user.email = 'new@mail.com'
# eksik kod?`,
      secenekler: ["Django objeleri salt okunurdur.", "Nesne bellekte değişir ama veritabanına yazılması için işlemi mühürleyen user.save() çağrısı eksiktir.", "id=1 diye bir atama veritabanında yapılamaz."],
      dogruCevap: "Nesne bellekte değişir ama veritabanına yazılması için işlemi mühürleyen user.save() çağrısı eksiktir."
    },
    {
      soruMetni: "Ruby on Rails'deki bu query bloğunda performans kaybı (N+1 query problemi) nerededir?",
      kodSnippet: `users = User.all
users.each do |user|
  puts user.profile.bio
end`,
      secenekler: ["all kullanımı Rails'te kaldırılmıştır.", "Kullanıcıları çektikten sonra her Profil ilişkisi için ayrı bir SQL isteği atılır, .includes(:profile) (Eager Loading) yapılmalıdır.", "Bio değişkeni bir dizi olmadığından puts hata verir."],
      dogruCevap: "Kullanıcıları çektikten sonra her Profil ilişkisi için ayrı bir SQL isteği atılır, .includes(:profile) (Eager Loading) yapılmalıdır."
    },
    {
      soruMetni: "Docker (Dockerfile) konfigürasyonundaki bu 'RUN' satırında yapılan anti-pattern nedir?",
      kodSnippet: `RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm`,
      secenekler: ["nodejs Docker'a apt ile kurulamaz.", "Her RUN komutu imajda ayrı bir layer oluşturarak boyutu büyütür. && anahtarı ile hepsi tek bir RUN bloğunda birleştirilmelidir.", "-y komutu onaysız olduğundan imaj çöker."],
      dogruCevap: "Her RUN komutu imajda ayrı bir layer oluşturarak boyutu büyütür. && anahtarı ile hepsi tek bir RUN bloğunda birleştirilmelidir."
    }
  ],
  "Ağ Mühendisi": [
    {
      soruMetni: "Bu Cisco router komut dizisindeki hata ağ geçidini neden bozmaktadır?",
      kodSnippet: `Router(config)# interface FastEthernet 0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# exit`,
      secenekler: ["IP subneti yanlıştır.", "Router arayüzleri (interfaces) varsayılan olarak kapalıdır, aktif etmek için 'no shutdown' komutu unutulmuştur.", "FastEthernet portu günümüzde kullanılamaz."],
      dogruCevap: "Router arayüzleri (interfaces) varsayılan olarak kapalıdır, aktif etmek için 'no shutdown' komutu unutulmuştur."
    },
    {
      soruMetni: "Aşağıdaki Firewall ACL kuralındaki mantık hatası hedef web sunucusuna trafiği neden tamamen keser?",
      kodSnippet: `access-list 100 deny ip any any
access-list 100 permit tcp any host 10.0.0.5 eq 80
interface GigabitEthernet0/1
 ip access-group 100 in`,
      secenekler: ["ACL kuralları yukarıdan aşağı okunur, ilk kural tüm trafiği kapattığı için alttaki izin kuralına asla gelinmez.", "Host tanımlaması subnet olmadan yazılamaz.", "Port numarası string olmalıdır."],
      dogruCevap: "ACL kuralları yukarıdan aşağı okunur, ilk kural tüm trafiği kapattığı için alttaki izin kuralına asla gelinmez."
    },
    {
      soruMetni: "Bu Cisco Switch VLAN atama konfigürasyonunda port neden hala varsayılan VLAN 1'de kalacaktır?",
      kodSnippet: `Switch(config)# vlan 20
Switch(config-vlan)# name IT_DEPT
Switch(config-vlan)# exit
Switch(config)# interface FastEthernet 0/5
Switch(config-if)# switchport access vlan 20`,
      secenekler: ["Switchport önce bir Acces portu (switchport mode access) olarak etiketlenmelidir yoksa Dinamik (DTP) modda kararsız kalabilir.", "VLAN numarası 100'den büyük olmalıdır.", "Switch'te exit yerine end kullanılmalıdır."],
      dogruCevap: "Switchport önce bir Acces portu (switchport mode access) olarak etiketlenmelidir yoksa Dinamik (DTP) modda kararsız kalabilir."
    },
    {
      soruMetni: "Linux ortamındaki bu Bash Pipe zinciri log dosyasını filtrelerken neden 'Permission denied' veya hiçbir çıktı vermeden döner?",
      kodSnippet: `cat /var/log/syslog | grep "sshd" > /var/log/filtered_lines.txt`,
      secenekler: ["Grep komutuna parametre verilmemiştir.", "/var/log (root izni ister) normal kullanıcı (sudo'suz) bash ile erişip yazamaz. Permission Denied hatası alır.", "Cat komutu Pipe ile bağlanmaz."],
      dogruCevap: "/var/log (root izni ister) normal kullanıcı (sudo'suz) bash ile erişip yazamaz. Permission Denied hatası alır."
    },
    {
      soruMetni: "Cisco OSPF Yönlendirme Protokolü kurgusundaki (Routing) bu hatada paketler neden hedefe ulaşamaz?",
      kodSnippet: `Router(config)# router ospf 1
Router(config-router)# network 10.0.0.0 255.255.255.0 area 0`,
      secenekler: ["OSPF ID 1 olamaz.", "OSPF'de network komutu Subnet Mask (255...) ile değil, terslenmiş Wildcard Mask (0.0.0.255) ile ifade edilmek zorundadır.", "network komutunda area tanımlanamaz."],
      dogruCevap: "OSPF'de network komutu Subnet Mask (255...) ile değil, terslenmiş Wildcard Mask (0.0.0.255) ile ifade edilmek zorundadır."
    },
    {
      soruMetni: "Bu iptables (Linux Firewall) kuralında SSH portuna Drop kuralı ekledik ancak SSH trafiği hala başarılı, neden?",
      kodSnippet: `iptables -A INPUT -p tcp --dport 22 -j DROP`,
      secenekler: ["Port 22 yerine ssh yazılması gerekir.", "Kural -A (Append) ile LISTEN edilen INPUT zincirinin EN SONUNA ekleniyor. Eğer üst taraflarda 'Kabul Et (Accept)' kuralı varsa paket oradan geçer ve bu kurala hiç sıra gelmez. (I - Insert yapılmalıydı)", "-j DROP yerine -j DENY kullanılmalı."],
      dogruCevap: "Kural -A (Append) ile LISTEN edilen INPUT zincirinin EN SONUNA ekleniyor. Eğer üst taraflarda 'Kabul Et (Accept)' kuralı varsa paket oradan geçer ve bu kurala hiç sıra gelmez. (I - Insert yapılmalıydı)"
    },
    {
      soruMetni: "Cisco BGP (Border Gateway Protocol) kurgusunda session neden 'Active/Idle'da kalıp 'Established' olmaz?",
      kodSnippet: `Router(config)# router bgp 65001
Router(config-router)# neighbor 192.168.2.1 remote-as 65001`,
      secenekler: ["BGP remote komutu almaz.", "Komşunun (Neighbor) kendi tarafında da eşlenik (Ters remote-as) tanımlanarak komşuluğu (peering) doğrulaması/onaylaması lazımdır Yoksa tek taraflı kalır.", "192.168.2.1 geçerli bir neighbor olamaz."],
      dogruCevap: "Komşunun (Neighbor) kendi tarafında da eşlenik (Ters remote-as) tanımlanarak komşuluğu (peering) doğrulaması/onaylaması lazımdır Yoksa tek taraflı kalır."
    },
    {
      soruMetni: "Bu statik IP route ekleme komutunda ağ iletişimi neden 'Destination Host Unreachable' hatası verir?",
      kodSnippet: `Router(config)# ip route 10.10.10.0 255.255.255.0 FastEthernet0/1`,
      secenekler: ["Temsil edilen arayüzün IP adresi verilmemiştir.", "ARP çözünürlüğü ve Broadcast trafiğini patlatmamak için çıkış arayüzü yerine Next-Hop (Bir sonraki Router'ın) IP'si gösterilmelidir.", "Route komutunda mask belirtilmemelidir."],
      dogruCevap: "ARP çözünürlüğü ve Broadcast trafiğini patlatmamak için çıkış arayüzü yerine Next-Hop (Bir sonraki Router'ın) IP'si gösterilmelidir."
    },
    {
      soruMetni: "Bash'teki bu AWK komutu IP'leri listelerken neden hatalı veya boş sütun döndürür?",
      kodSnippet: `ifconfig | awk '{print $2}'`,
      secenekler: ["Eğer ifconfig satırında (eth0 vs.) aranan IP yoksa $2 başka kelimeleri yazar (inet bazlı regex match gereklidir).", "AWK arayüz ismini okuyamaz.", "print $2 syntax olarak yanlıştır."],
      dogruCevap: "Eğer ifconfig satırında (eth0 vs.) aranan IP yoksa $2 başka kelimeleri yazar (inet bazlı regex match gereklidir)."
    },
    {
      soruMetni: "Bu Nginx konfigürasyonunda site neden sonsuz yönlendirme (Redirect Loop) döngüsüne girer?",
      kodSnippet: `server {
    listen 80;
    server_name example.com;
    return 301 http://example.com$request_uri;
}`,
      secenekler: ["https'e değil yine kendi çalıştığı 80 portuna (http) yönlendirme yaptığı için kendini tekrar tekrar çağırır.", "listen 80 kullanımı SSL ile çakışır.", "301 kalıcı yönlendirmadır hata vermez."],
      dogruCevap: "https'e değil yine kendi çalıştığı 80 portuna (http) yönlendirme yaptığı için kendini tekrar tekrar çağırır."
    },
    {
      soruMetni: "VPN (IPSec) tünellemesinde paketlerin dış ağda engellenmesinin asıl sebebi olan NAT (Ağ Adresi Çevirme) hatası nedir?",
      kodSnippet: `access-list 10 permit 192.168.1.0 0.0.0.255
ip nat inside source list 10 interface FastEthernet0/0 overload`,
      secenekler: ["Overload komutu sadece UDP'ye çalışır.", "VPN tüneline giden spesifik trafiği NAT zincirinden İstisna etmeyen (Exclude / Deny kuralı) yapılmadığı için trafik şifrelenemeden tünele değil NAT'a yakalanıp internete dökülür.", "FastEthernet 0/0 public bir arayüz olamaz."],
      dogruCevap: "VPN tüneline giden spesifik trafiği NAT zincirinden İstisna etmeyen (Exclude / Deny kuralı) yapılmadığı için trafik şifrelenemeden tünele değil NAT'a yakalanıp internete dökülür."
    },
    {
      soruMetni: "Bu Linux netstat/ss kullanımındaki hata, dinlenecek (Listening) portların incelenmesini nasıl engeller?",
      kodSnippet: `netstat -an | grep 80`,
      secenekler: ["netstat tcp kurallarını engeller.", "'-l' (listening) parametresi konulmadığı için sadece aktif, established veya Time-Wait durumundaki o anki kopan HTTP bağlantılarını kirlilik olarak gösterir.", "80 portu string'e dönüştürülmelidir."],
      dogruCevap: "'-l' (listening) parametresi konulmadığı için sadece aktif, established veya Time-Wait durumundaki o anki kopan HTTP bağlantılarını kirlilik olarak gösterir."
    },
    {
      soruMetni: "Switch MAC tabloları için yazılan bu Python simülasyon kodunda mantık hatası nerededir?",
      kodSnippet: `def forward_frame(mac_table, dest_mac, port):
    if dest_mac in mac_table:
        send_to_port(mac_table[dest_mac])
    else:
        drop_frame()`,
      secenekler: ["Bir switch hedef MAC'i bilmiyorsa paketi drop etmez, geldiği port hariç tüm portlara yayın (Flood) yapar.", "Python'da dict kullanımı hatalıdır.", "Sadece ilkporta gönderilir."],
      dogruCevap: "Bir switch hedef MAC'i bilmiyorsa paketi drop etmez, geldiği port hariç tüm portlara yayın (Flood) yapar."
    },
    {
      soruMetni: "Cisco Port Security'deki bu konfigürasyon yabancı MAC adresi takıldığında port'u neden tamamen kapatmıyor (Shutdown olmuyor)?",
      kodSnippet: `Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 1`,
      secenekler: ["Sadece sunucu MAC adresi yazılmalıdır.", "Varsayılan (default) violation metodu 'Shutdown' değil bazen veya unutulduğunda 'Restrict / Protect' olabilir manuel shutdown yazılması daha güvenlidir.", "Maximum değeri string olmalıdır."],
      dogruCevap: "Varsayılan (default) violation metodu 'Shutdown' değil bazen veya unutulduğunda 'Restrict / Protect' olabilir manuel shutdown yazılması daha güvenlidir."
    },
    {
      soruMetni: "Linux'te bir klasordeki tüm dosyaları bulup izinlerini değiştiren bu Find komutu neden hata (Argument list too long) verir?",
      kodSnippet: `find /var/www -name "*.html" -print | xargs chmod 644`,
      secenekler: ["Pipe karakteri dosya listesini ezer.", "Eğer dosya yollarında boşluk karakteri (Space) varsa xargs bunları iki farklı argüman sanır. 'find ... -print0 | xargs -0' kullanılmalıdır.", "chmod komutunda rwx kullanılmalıdır."],
      dogruCevap: "Eğer dosya yollarında boşluk karakteri (Space) varsa xargs bunları iki farklı argüman sanır. 'find ... -print0 | xargs -0' kullanılmalıdır."
    }
  ],
  "Veritabanı Uzmanı": [
    {
      soruMetni: "Aşağıdaki SQL UPDATE sorgusunun oluşturacağı faciaya (Data Disaster) ne sebep olur?",
      kodSnippet: `UPDATE users 
SET status = 'inactive'
-- WHERE last_login < '2023-01-01';`,
      secenekler: ["Set komutunda eşitlik kullanılmaz.", "WHERE şartı yorum satırı yapıldığı için tablodaki, tüm kullanıcıların (aktif/pasif) durumu istisnasız 'inactive' olur.", "Tarih formati desteklenmez."],
      dogruCevap: "WHERE şartı yorum satırı yapıldığı için tablodaki, tüm kullanıcıların (aktif/pasif) durumu istisnasız 'inactive' olur."
    },
    {
      soruMetni: "N+1 Problemine yol açan bu ORM kullanım hatasını bulabilir misiniz?",
      kodSnippet: `const users = await User.find(); // (1 Query)
for(let user of users) {
  const posts = await Post.find({ authorId: user.id }); // (N Query)
  console.log(posts);
}`,
      secenekler: ["Post objesinin veritabanı olmaması.", "Her bir kullanıcı için veritabanına ayrı ayrı loop içinde Select isteği atılarak veritabanı darboğaza sokulur. ('Eager Loading' / Join yapılmalıydı).", "find metodu async çalışmaz."],
      dogruCevap: "Her bir kullanıcı için veritabanına ayrı ayrı loop içinde Select isteği atılarak veritabanı darboğaza sokulur. ('Eager Loading' / Join yapılmalıydı)."
    },
    {
      soruMetni: "Aşağıdaki ilişkisel tabloda DROP operasyonunun hata (Constraint Violation) vermesinin sebebi genelde nedir?",
      kodSnippet: `-- Orders tablosunda CustomerID foreign key'i mevcut.
DROP TABLE Customers;`,
      secenekler: ["Orders tablosunun içi boştur.", "Customers tablosundaki id'ler başka tabloda kazaen referans (Foreign Key) gösteriliyorsa RDBMS o tabloyu korur ve doğrudan sildirmez.", "Tablo MySQL ile silinemez."],
      dogruCevap: "Customers tablosundaki id'ler başka tabloda kazaen referans (Foreign Key) gösteriliyorsa RDBMS o tabloyu korur ve doğrudan sildirmez."
    },
    {
      soruMetni: "Bu B-Tree Index sorgusunun neden 'Index Scan' yerine yavaş olan 'Table Scan'e (Tüm tabloyu taramaya) dönmesi beklenir?",
      kodSnippet: `SELECT * FROM employees 
WHERE YEAR(hire_date) = 2023;`,
      secenekler: ["Arama filtrelemesinde (WHERE) sütun ismi doğrudan değil, bir işlem/fonksiyon (YEAR) içine hapsedilirse mevcut index verimli kullanılamaz (Sargable değil).", "2023 metin olarak yazılmalı.", "Yıl ile veri taraması yapılamaz."],
      dogruCevap: "Arama filtrelemesinde (WHERE) sütun ismi doğrudan değil, bir işlem/fonksiyon (YEAR) içine hapsedilirse mevcut index verimli kullanılamaz (Sargable değil)."
    },
    {
      soruMetni: "Aşağıdaki MongoDB sorgusunda tüm 'users' koleksiyonunu silme (Drop) riskine sahip kod satırındaki tuzağı tespit edin.",
      kodSnippet: `db.users.deleteMany({
  username: "admin"
}, { justOne: true });`,
      secenekler: ["deleteMany fonksiyonu sadece id kabul eder.", "deleteMany komutu justOne opsiyonunu desteklemez (sadece remove yapar) ancak syntax olarak hatayı ezip 'admin' kim varsa tümünü silebilir.", "Koleksiyon adı yanlış yazılmıştır."],
      dogruCevap: "deleteMany komutu justOne opsiyonunu desteklemez (sadece remove yapar) ancak syntax olarak hatayı ezip 'admin' kim varsa tümünü silebilir."
    },
    {
      soruMetni: "SQL'de JOIN komutu atılmış bu sorgunun neden beklenenden çok fazla (Duplicate) satır getireceğini tahmin edin.",
      kodSnippet: `SELECT e.Name, d.DepName 
FROM Emps e 
LEFT JOIN Dept d ON e.Id = d.Id;`,
      secenekler: ["Emps tablosu boştur.", "Departman (d) tablosunda o ID'ye ait birden fazla tekrarlı kayıt varsa, Join satırları kartesiyen çarparak (çoğaltarak) kopyalar.", "Id'ler Join yapılamaz."],
      dogruCevap: "Departman (d) tablosunda o ID'ye ait birden fazla tekrarlı kayıt varsa, Join satırları kartesiyen çarparak (çoğaltarak) kopyalar."
    },
    {
      soruMetni: "OR operatörü kullanılan bu SQL filtrelemesinde B-Tree Index'i boşa çıkaracak yanlış nedir?",
      kodSnippet: `SELECT * FROM products 
WHERE category_id = 5 OR name LIKE '%Phone%';`,
      secenekler: ["LIKE '%...' başında wildcard (%) olan patternler Index kullanamaz (Full table scan). Ayrıca OR ile bağlandığı için category_id indexi bile devre dışı kalır.", "Category ID metin olmalıdır.", "OR kelimesi performansı düşürmez."],
      dogruCevap: "LIKE '%...' başında wildcard (%) olan patternler Index kullanamaz (Full table scan). Ayrıca OR ile bağlandığı için category_id indexi bile devre dışı kalır."
    },
    {
      soruMetni: "WHERE ve HAVING arasındaki farkı gözden kaçıran bu SQL'de hata alınmasının sebebi nedir?",
      kodSnippet: `SELECT department, SUM(salary) as Total 
FROM employees 
WHERE SUM(salary) > 50000 
GROUP BY department;`,
      secenekler: ["SUM gibi aggregating (kümeleme) fonksiyonları WHERE bloğunda kullanılamaz. Gruplama sonrasındaki işlemler için HAVING kullanılmalıdır.", "Tablo ismi employees olmamalıdır.", "GROUP BY yanlış yere yazılmıştır."],
      dogruCevap: "SUM gibi aggregating (kümeleme) fonksiyonları WHERE bloğunda kullanılamaz. Gruplama sonrasındaki işlemler için HAVING kullanılmalıdır."
    },
    {
      soruMetni: "Bu Transaction bloğu açık (BEGIN) bırakılırsa ne tür bir veritabanı kilitlenme anomalisine sebep olur?",
      kodSnippet: `BEGIN TRAN
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- Eksik olan şey?`,
      secenekler: ["DB kendiliğinden kapatır.", "Zaman aşımına (deadlock) kadar COMMIT veya ROLLBACK çalıştırılmadığı için o satırdaki (row) UPDATE kilidi kalkmaz, o dataya yazmak isteyen diğer tüm istekler asılı kalır.", "Accounts tablosu tamamen silinir."],
      dogruCevap: "Zaman aşımına (deadlock) kadar COMMIT veya ROLLBACK çalıştırılmadığı için o satırdaki (row) UPDATE kilidi kalkmaz, o dataya yazmak isteyen diğer tüm istekler asılı kalır."
    },
    {
      soruMetni: "PostgreSQL'de bu UUID atamasında neden her satırda farklı ID oluşmuyor, hepsi aynı ID'ye düşüyor?",
      kodSnippet: `ALTER TABLE users 
ADD COLUMN token UUID DEFAULT public.uuid_generate_v4();`,
      secenekler: ["Table kitli olduğu içindir.", "Fonksiyon default olarak çağrıldığında ilk tabloloma anında 1 kez produce edilir ve tüm exisiting satırlara aynı ('kopya') sabiti atar.", "Type mismatch atar."],
      dogruCevap: "Fonksiyon default olarak çağrıldığında ilk tabloloma anında 1 kez produce edilir ve tüm exisiting satırlara aynı ('kopya') sabiti atar."
    },
    {
      soruMetni: "Aşağıdaki SQL Subquery bloğunda neden IN yerine EXISTS kullanmak maliyeti radikal şekilde düşürebilir?",
      kodSnippet: `SELECT * FROM orders o 
WHERE o.customer_id IN (
  SELECT id FROM customers WHERE country = 'TR'
);`,
      secenekler: ["Sözdizimi açısından farklılık yaratmaz.", "IN içteki listeyi komple hafızada hazırlarken, EXISTS koşul eşleştiği an (True) aramayı keser (Short-circuit). Alt tablo büyükse EXISTS çok hızlıdır.", "IN kelimesini SQL derleyicisi unutmuştur."],
      dogruCevap: "IN içteki listeyi komple hafızada hazırlarken, EXISTS koşul eşleştiği an (True) aramayı keser (Short-circuit). Alt tablo büyükse EXISTS çok hızlıdır."
    },
    {
      soruMetni: "Bu MySQL LIMIT/OFFSET sorgusu sayfalama (pagination) yaparken çok büyük kayıtlarda neden muazzam yavaşlıyor?",
      kodSnippet: `SELECT * FROM logs 
ORDER BY created_at DESC 
LIMIT 50 OFFSET 1000000;`,
      secenekler: ["Order By işlemi tarihi string olarak değerlendirir.", "MySQL LIMIT ile offset atlaması yapsa bile ilk 1 milyon kaydı diske indirip taramak ve son 50'sini vermek zorundadır. 'Keyset Pagination' (Son id'den büyüktür) kullanılmalı.", "Logs tablosu çok küçüktür."],
      dogruCevap: "MySQL LIMIT ile offset atlaması yapsa bile ilk 1 milyon kaydı diske indirip taramak ve son 50'sini vermek zorundadır. 'Keyset Pagination' (Son id'den büyüktür) kullanılmalı."
    },
    {
      soruMetni: "SQL Server Deadlock analizinde, A İşlemi ve B İşleminin birbiriyle kilitlenmesi mantıken nasıl açıklanır?",
      kodSnippet: `A: UPDATE Table1, Bekleniyor Table2
B: UPDATE Table2, Bekleniyor Table1`,
      secenekler: ["B İşlemi daha az veri çeker.", "Farklı transaction'lar farklı sırayla tablolara kilit koyarsa Deadlock yaşanır. Bunu önlemek için kodlamada tabloların kitlenme / güncellenme sırası her yerde sabit (Örn: Önce Table1, sonra Table2) olmalıdır.", "Index silip açılması gerekir."],
      dogruCevap: "Farklı transaction'lar farklı sırayla tablolara kilit koyarsa Deadlock yaşanır. Bunu önlemek için kodlamada tabloların kitlenme / güncellenme sırası her yerde sabit (Örn: Önce Table1, sonra Table2) olmalıdır."
    },
    {
      soruMetni: "Bu MongoDB Aggregation pipeline'ında Match aşamasını Lookup'ın SONRASINA koymanın maliyeti nedir?",
      kodSnippet: `db.orders.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "_id", as: "user" } },
  { $match: { status: "active" } }
]);`,
      secenekler: ["Hiçbir maliyeti yoktur, optimizasyon kendiliğinden MongoDB tarafından yapılır.", "Aktif olmayan binlerce Sipariş (orders) ve Kullanıcı boşu boşuna birleşir ve ancak EN SON filtrelenir. Ciddi bellek israfıdır. Match daima en üste, birleştirmeden (Join) önce yazılmalıdır.", "Sözdizimi hatalıdır."],
      dogruCevap: "Aktif olmayan binlerce Sipariş (orders) ve Kullanıcı boşu boşuna birleşir ve ancak EN SON filtrelenir. Ciddi bellek israfıdır. Match daima en üste, birleştirmeden (Join) önce yazılmalıdır."
    },
    {
      soruMetni: "İlişkisel veri tasarımlarında E-Posta sütununun (VARCHAR) collation'ını (Karakter Seti) Varchar(255) CI (Case-Insensitive) yapmak yerine Binary (CS) yaparsanız girişte (Login) ne hatası yaşanır?",
      kodSnippet: `email VARCHAR(255) COLLATE utf8mb4_bin`,
      secenekler: ["Şifre boş geçilir.", "Email eşleşmesi büyük/küçük harf duyarlı (Case-Sensitive) hale gelir. 'Ali@mail.com' ile 'ali@mail.com' aynı kişiyken LOGIN olamazlar.", "Email girerken sayılara izin vermez."],
      dogruCevap: "Email eşleşmesi büyük/küçük harf duyarlı (Case-Sensitive) hale gelir. 'Ali@mail.com' ile 'ali@mail.com' aynı kişiyken LOGIN olamazlar."
    }
  ]
};
