# Prefer ECMAScript Features to TypeScript Features - Decorators

author : Hendar, sumber : OReilly Effective TypeScript.
Decorators dapat digunakan untuk membuat anotasi atau memodifikasi kelas, metode dan property. Misalnya, Anda dapat menetukan anotasi yang dicatat di log yang mencatat semua request ke metod di sebuah kelas.  

Fitur ini awalnya ditambahkan untuk mendukung kerangka kerja Angular dan memerlukan properti eksperimentalDecorators disetel di tsconfig.json dapat dilihat di gambar dibawah. Penerapannya belum distandarisasi oleh TC39[1] pada saat penulisan ini, jadi kode apa pun yang Anda tulis menggunakan dekorator dapat rusak atau menjadi tidak standar dan akan dianggap kesalahan dalam penulisan.

