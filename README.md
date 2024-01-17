# Live Version
- https://sancommerce.netlify.app/

# GIF
![ecommercegif](ecom.gif)

# libraries
- tailwind
- react-router-dom
- react-icons
- react-toastify
- axios

# Proje Açıklamaları
- Asidebar'daki kategorilere tıkladığınızda ekrandaki ürünler kategorilerine göre filtrelenecektir. All categorisi ise size filtrelenmemiş ürünlere dönme şansı verecektir.

- ekranda 12 adet ürün basılmıştır. For more tuşu ekranda 12 adet ürün olduğunda gözükmekte, ürünler kategorilere göre filtrelendiğinde kaybolmaktadır. İşlevsizdir.

HEADER
- Header'daki inputa bir şey yazıp submitlediğinizde, ekrandaki ürünler ürünün title'inde o şeyin bulunup bulunmamasına göre filtrelenecektir.
- Header'daki products sizi main sayfaya götürür ve bütün ürünler ekranda görünür
- About kısmında taslak bir hakkımızda kısmına erişebilirsiniz ancak 
kampanyalar ve sepet kısmı yalnızca görsellik olsun diye navbara eklenmiştir. İşlevsizdir.

ÜRÜNDETAY
- Ürün kartlarının üstüne tıkladığınızda ürün detay sayfasına yönlendirileceksiniz, ve orada ürünün descriptionu gibi ek bilgiler olacak
- ürün detay sayfasından tekrar tüm ürünlerin olduğu anasayfaya dönmek için navbardaki products'ı tıklamalısınız

RESPONSIVE
- input küçük ekranlarda kaybolur.
- aside ve navdaki text'ler küçülür
- cartlar medium ekran boyutundan daha küçük bir ekran boyutunda ortalanır

# Projede harcanılan Süre:
- 14 ocak 4 saat  | 15 ocak 9 saat  |  16 ocak 4 saat  = 17saat

# Adımlar
- kütüphaneleri install ettin
- tw kurulumunu yaptın
- react toastify kurulumunu yaptın
- router kullanarak sayfalamayı hallettin
- dosya sistemini kurdun 
- header'i yaptın
- main layoutu yaptın
- categoryleri axios ile çekip ekrana bastın
- categorilere tıklayınca, tıklanılan kategoriyi parametre olarak urlye gönderdin
- url'de param olarak category varsa bu kategorinin verisini, yoksa da tüm ürünleri çeken bir axios yazdın
her iki durumda da elde ettiğin sonucu filtred ve products değişikenlerine aktardın 
- filtred'i ekrana bastın
- ürün kartlarına tıklandığında detail sayfasına link ile yönlendirdin paran olarak url'ye id verdin ve yönlendirdiğin sayfadaki param'ı alıp o ürünün verisini çekip ekrana bastın.
- Header'a döndün, usesearchparams kullanarak headerdaki inputa girilen değerin parametre olarak url'ye eklenmesini sağladın
- header'da input ile urlye gönderdiğin param'ı, mainden aldın ve productları bu paramı içerip içermediğine göre filtreledin, bu filtrelemeyi de filtred'a aktardın 