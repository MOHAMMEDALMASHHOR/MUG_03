# KodKart Arena 🚀

Geliştirici Profilinle Oyunlaştırılmış Deneyim!

## Özellikler (Gamification) 🎮
- **Oyunlaştırma & XP Sistemi:** Hedeflerinizi tamamlarken ve çalışırken veya yeni projelere açılırken "XP" kazanabilirsiniz.
- **Dinamik Unvanlar:** Topladığınız XP miktarına göre unvanlarınız seviye atlar:
  - 🥉 **Junior** (0 XP)
  - 🥈 **Mid-Level** (100 XP)
  - 🥇 **Senior** (250 XP)
- **Enerji Barı:** "Projeye Odaklanmış Durumda" veya "İşe Alınmış" olduğunuzda enerjiniz düşer. "Kahve İç" butonu ile enerjinizi fulleyip yepyeni projelere yelken açabilirsiniz.
- **Modern Arayüz (Glassmorphism & Dark Mode):** Göz alıcı ve fütüristik renklerle kendinizi bir oyunun içindeymiş gibi hissedin.
- **Canlı Renkler:** Durumunuz değiştikçe veya çalıştıkça profilinizdeki renkler animasyonlu şekilde (kırmızı/yeşil) değişim gösterir.

## Kurulum 🛠

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Projeyi başlatın:
   ```bash
   npx expo start
   ```

Açılan pencerede QR kodu taratarak Expo Go uygulamasıyla telefonunuzda test edebilir, ya da klavyenizle "a" basarak (Android Emulator) veya "i" basarak (iOS Simulator) projeyi yerel ortamda açabilirsiniz.

## Android APK Oluşturma (EAS Build) 📦
Bu proje, Play Store standartlarına uygun bir APK çıkarabilmesi için hazırlandı. Terminalden aşağıdaki kodu çalıştırarak uygulamanın APK'sını anında oluşturabilirsiniz:
```bash
npm install -g eas-cli
eas build -p android --profile preview
```
EAS, Expo hesabınıza giriş yapmanızı isteyebilir (ücretsiz), onayladıktan sonra size barkod ve bağlantı şekinde APK linkini sunacaktır.
