# Game Berangkat Ngampus

## Deskripsi Project
Game Berangkat Ngampus adalah game 2D endless runner yang terinspirasi dari Sonic Runner. Pada game ini, pemain berperan sebagai seorang mahasiswa yang sedang buru-buru berangkat ke kampus Horizon University Indonesia.

Pemain harus berlari melewati jalanan kota Karawang, menghindari berbagai hambatan seperti driver ojek online, serta mengumpulkan ring untuk mendapatkan skor.

---

# Konsep Game
Konsep utama game adalah kehidupan mahasiswa sehari-hari yang sering terlambat menuju kampus. Nuansa game dibuat lebih lokal dan dekat dengan kehidupan mahasiswa Indonesia dengan menggunakan:

- Background kota Karawang
- Gedung Horizon University Indonesia
- Driver ojek online sebagai obstacle
- Ring sebagai collectible item

---

# Genre Game
- Endless Runner
- Arcade
- 2D Pixel Game

---

# Tools dan Teknologi
Tools yang digunakan dalam pembuatan game:

- Visual Studio Code
- Vite
- JavaScript
- Kaplay.js / Kaboom.js
- Browser Google Chrome
- Asset Pixel Art

---

# Asset Game

## Asset Utama
- Background kota Karawang
- Gedung Horizon University Indonesia
- Jalan/platform kota
- Karakter mahasiswa
- Driver Gojek/Grab
- Ring collectible

## Perubahan Asset
Asset Sonic asli diubah menjadi konsep lokal Indonesia agar lebih unik dan relevan dengan kehidupan mahasiswa.

---

# Cara Membuat Game

## 1. Membuat Project

Install Vite:

```bash
npm create vite@latest game-berangkat-ngampus
```

Masuk ke folder project:

```bash
cd game-berangkat-ngampus
```

Install dependency:

```bash
npm install
npm install kaplay
```

---

## 2. Menyiapkan Asset
Masukkan semua asset game seperti:

- background
- jalan/platform
- karakter mahasiswa
- obstacle driver ojek online
- ring

---

## 3. Konfigurasi Game
Buat konfigurasi game untuk:

- ukuran canvas
- gravity
- background
- scene game

---

## 4. Load Asset
Load semua asset yang digunakan dalam game:

```javascript
loadSprite("player", "student.png")
loadSprite("enemy", "gojek.png")
loadSprite("ring", "ring.png")
```

---

## 5. Membuat Player
Karakter mahasiswa dibuat dengan animasi:

- running
- jumping
- rolling

Player otomatis berlari ke depan seperti game runner pada umumnya.

---

## 6. Membuat Obstacle
Obstacle berupa driver Gojek/Grab muncul secara random.

Jika pemain menyentuh obstacle:
- game over
- permainan berhenti

---

## 7. Membuat Collectible
Ring digunakan sebagai item collectible.

Jika pemain mengambil ring:
- score bertambah
- efek suara dimainkan

---

## 8. Menambahkan Score
Score bertambah berdasarkan:

- jumlah ring yang dikumpulkan
- jarak tempuh pemain

---

## 9. Membuat Game Over
Saat pemain kalah:

- tampil tulisan “Game Over”
- tampil skor akhir
- tombol restart

---

# Cara Menjalankan Game

Jalankan terminal:

```bash
npm run dev
```

Buka browser:

```bash
http://localhost:5173
```

---

# Gameplay Singkat
1. Pemain mulai berlari otomatis
2. Hindari obstacle driver ojek online
3. Ambil ring sebanyak mungkin
4. Bertahan selama mungkin
5. Dapatkan skor tertinggi

---

# Kesimpulan
Game Berangkat Ngampus merupakan game endless runner bertema mahasiswa Indonesia yang dibuat menggunakan JavaScript dan Kaplay.js.

Game ini mengubah konsep Sonic Runner menjadi lebih lokal dengan nuansa:

- mahasiswa
- kota Karawang
- kampus Horizon University Indonesia
- kehidupan sehari-hari mahasiswa Indonesia

Dengan konsep tersebut, game menjadi lebih unik, menarik, dan relatable bagi mahasiswa Indone