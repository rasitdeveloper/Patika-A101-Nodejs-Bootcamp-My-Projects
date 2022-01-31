# JavaScript nedir, TypeScript nedir, arasındaki farklar nelerdir ?
JavaScript, geliştiricilerin web uygulamaları, masaüstü uygulamaları, hibrit mobil uygulamaları, sunucular geliştirirken daha dinamik etkileşimler oluşturmak için yaygın olarak kullandıkları bir programlama dilidir. Topluluklar tarafından yaygın olarak kullanıldı ve çok büyük bir gelişme gösterdi. Ancak JavaScript büyürken JavaScript kodu karmaşık ve ağır hale geldi. Sonuç olarak nesne yönelimli bir programlama dilinin gereksinimlerini tam olarak karşılayamadı. Ayrıca JavaScript'de derleme aşaması yoktu ve hata kontrolü zor yapılıyordu. TypeScript bu ihtiyaçlara cevap verebilmek ve JavaScript’in büyük, karmaşık projelerde daha etkili şekilde kullanılabilmesini sağlamak için tasarlandı. TypeScript, nesne yönelimli ve derlenebilir bir programlama dilidir. JavaScript’in tüm özelliklerini içinde barındırmasının yanısıra ek özelliklerede sahiptir.

# Farkları
- TypeScript, nesne yönelimli bir programlama diliyken, JavaScript bir betik dilidir.
- JavaScript, verileri dinamik olarak tanıyabiliyorken, TypeScript statik veri yapısına sahiptir, 
- JavaScript kodu derlenmezken, TypeScript kodu derlenir.


# Nodejs ile web sunucu oluşturma
##### Express ile web sunucusu kurmak için:
Öncelikle package.json dosyasının oluşturulması gerekir bunun için terminal ekranına "npm init" komutu yazılır.
Daha sonra express paketini indirmek için terminale "npm i express" komutu yazılır.
Sunucunun çalışabilmesi için aşağıdaki kodlar yazılabilir. Daha detaylı bilgi için "https://www.npmjs.com/package/express" adresi ziyaret edilebilir.
> const express = require('express')
>
> const app = express()
>
> app.get('/', function (req, res) {
>   res.send('Hello World')
> })
>
> app.listen(3000)

&nbsp;
##### HTTP modülü ile web sunucusu kurmak için:
"http" modülü, Node.js'in çekirdek modüllerinden biri olduğu için npm kullanarak indirmeye gerek yoktur. Aşağıda ki şekilde kullanılabilir. Daha detaylı bilgi için "https://nodejs.org/api/http.html" sayfası ziyaret edilebilir.
> const http = require("http");
>
> const server = http.createServer((req, res) => {
>    
>  const url = req.url;
>
>  if (url === "/") {
>    res.writeHead(200, { "Content-Type": "text/html" });
>
>    res.write("INDEX SAYFASI");
>  }
>
>  res.end();
>});
>
>const port = 3000;
>server.listen(port, () => {
>  console.log(`Sunucu port ${port} de başlatıldı.`);
>});

&nbsp;
##### Eğer açık kaynak kodlu bir projenin bilgisayarımızda çalışması isteniyorsa:
Terminale "npm install" komutu yazılır ve package.json dosyasındaki dependencies altındaki bütün çalışma paketlerini indirilir, node.modules dosyası oluşturulur. Böylece proje çalışmaya hazır hale getirilir.