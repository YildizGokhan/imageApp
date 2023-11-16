# imageApp
Image Search App
Bu proje, Unsplash API'sini kullanarak resim araması yapmak için geliştirilmiş bir JavaScript uygulamasıdır. Kullanıcılar, arama kutucuğuna bir kelime veya ifade yazarak ilgili resimleri bulabilirler.

Kullanılan Teknolojiler
HTML
CSS (Bootstrap)
JavaScript
Unsplash API
Önemli Dosyalar
index.html: Uygulamanın ana HTML dosyasıdır. Arama kutusu ve sonuçların görüntülendiği kartlar burada bulunur.
style.css: Uygulamanın CSS dosyasıdır. Bootstrap ile beraber özel stillemeleri içerir.
app.js: Uygulamanın JavaScript dosyasıdır. Unsplash API'sini kullanarak arama yapar ve sonuçları gösterir.
Nasıl Kullanılır?
Projeyi çalıştırmak için tarayıcıda index.html dosyasını açın.
Arama kutucuğuna bir kelime veya ifade yazın.
"Search" butonuna tıklayarak aramayı başlatın.
API'den gelen resim sonuçları, kartlar halinde gösterilecektir.
Eğer arama kutusu boş ise, hata mesajı ve SweetAlert bildirimi ile kullanıcıya bilgilendirme yapılır.
Kurulum
Projeyi kendi bilgisayarında çalıştırmak için:

Projeyi indirin veya klonlayın: git clone https://github.com/kullanici/ad-resim-uygulamasi.git
Dosyaları bir HTTP sunucusunda çalıştırın veya tarayıcınızda açın.
Geliştirme Süreci
Projeyi geliştirirken dikkat edilmesi gereken bazı noktalar:

Unsplash API kullanımı için her kullanıcı için benzersiz bir erişim anahtarı gereklidir.
Arama kutusu boşken yapılan arama girişlerinde kullanıcıya bilgi verilmelidir.
