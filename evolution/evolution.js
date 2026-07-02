/* ===========================================
   HUMAN EVOLUTION
   evolution.js
   Bagian 1A-1a
=========================================== */

/* ===========================================
   ELEMENT
=========================================== */

const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closePopup = document.querySelector(".close");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

const cards = document.querySelectorAll(".card");

/* ===========================================
   DATABASE SPESIES
=========================================== */

const speciesData = {

    "australopithecus-afarensis": {

        name: "Australopithecus afarensis",

        nickname: "Lucy",

        age: "3,85 - 2,95 juta tahun lalu",

        location: "Afrika Timur (Ethiopia, Kenya, Tanzania)",

        height: "±105–150 cm",

        weight: "±25–45 kg",

        brain: "±430 cc",

        characteristic:
            "Memiliki kombinasi ciri kera dan manusia. Wajah masih menonjol, lengan panjang, tetapi sudah mampu berjalan tegak (bipedal).",

        behavior:
            "Menghabiskan waktu di tanah maupun di pepohonan. Belum ditemukan bukti kuat bahwa spesies ini membuat alat batu secara mandiri.",

        evolution:
            "Merupakan salah satu nenek moyang awal dalam garis keturunan manusia setelah percabangan dari kera besar Afrika.",

        image: "images/lucy.jpg",

        facts: [

            "Dijuluki 'Lucy' karena fosil paling terkenal ditemukan pada tahun 1974.",

            "Berjalan tegak jutaan tahun sebelum Homo sapiens muncul.",

            "Masih memiliki kemampuan memanjat pohon.",

            "Menjadi salah satu fosil terpenting dalam studi evolusi manusia."

        ],

        source: "Smithsonian Human Origins Program"

    }

};

/* ===========================================
   FUNGSI MEMBUKA POPUP
=========================================== */

function openPopup(speciesKey){

    const species = speciesData[speciesKey];

    if(!species) return;

    popupBody.innerHTML = `

        <img
            src="${species.image}"
            alt="${species.name}"
            class="popup-image">

        <h2>${species.name}</h2>

        <p><strong>Julukan :</strong> ${species.nickname}</p>

        <p><strong>Usia :</strong> ${species.age}</p>

        <p><strong>Lokasi :</strong> ${species.location}</p>

        <p><strong>Tinggi :</strong> ${species.height}</p>

        <p><strong>Berat :</strong> ${species.weight}</p>

        <p><strong>Volume Otak :</strong> ${species.brain}</p>

        <hr>

        <h3>Karakteristik</h3>

        <p>${species.characteristic}</p>

        <h3>Perilaku</h3>

        <p>${species.behavior}</p>

        <h3>Hubungan Evolusi</h3>

        <p>${species.evolution}</p>

        <h3>Fakta Menarik</h3>

        <ul>

            ${species.facts.map(fact => `<li>${fact}</li>`).join("")}

        </ul>

        <hr>

        <small>

            Sumber: ${species.source}

        </small>

    `;

    popup.style.display = "flex";

    },

    "homo-habilis": {

        name: "Homo habilis",

        nickname: "Handy Man",

        age: "2,4 - 1,4 juta tahun lalu",

        location: "Afrika Timur dan Afrika Selatan",

        height: "±130 cm",

        weight: "±32–37 kg",

        brain: "510–700 cc",

        characteristic:
            "Memiliki volume otak lebih besar dibanding Australopithecus, wajah lebih datar, dan gigi lebih kecil. Bentuk tangan menunjukkan kemampuan menggenggam yang lebih baik.",

        behavior:
            "Menggunakan alat batu sederhana (Oldowan) untuk memotong daging, menghancurkan tulang, dan mengolah makanan. Diperkirakan hidup berkelompok dalam komunitas kecil.",

        evolution:
            "Dianggap sebagai salah satu anggota paling awal dari genus Homo dan kemungkinan berevolusi dari Australopithecus sebelum akhirnya melahirkan Homo erectus.",

        image: "images/habilis.jpg",

        facts: [

            "Nama Homo habilis berarti 'manusia yang terampil'.",

            "Merupakan salah satu pembuat alat batu tertua yang diketahui.",

            "Hidup berdampingan dengan beberapa spesies Australopithecus.",

            "Volume otaknya sekitar 50% lebih besar dibanding Australopithecus afarensis."

        ],

        source: "Smithsonian Human Origins Program"

    },

    "homo-erectus": {

        name: "Homo erectus",

        nickname: "Upright Man",

        age: "1,89 juta - 110.000 tahun lalu",

        location: "Afrika, Asia, dan Eropa",

        height: "±145–185 cm",

        weight: "±45–68 kg",

        brain: "600–1.100 cc",

        characteristic:
            "Memiliki postur tubuh yang sangat mirip manusia modern dengan kaki panjang, lengan lebih pendek, serta tengkorak yang lebih besar dibanding Homo habilis. Adaptif terhadap berbagai lingkungan.",

        behavior:
            "Spesies pertama yang diketahui mampu mengendalikan api, memasak makanan, serta membuat kapak genggam Acheulean. Diperkirakan hidup berkelompok dan berburu hewan besar.",

        evolution:
            "Diperkirakan berevolusi dari Homo habilis atau spesies Homo awal lainnya. Banyak ilmuwan menganggap Homo erectus sebagai nenek moyang langsung Homo sapiens dan Homo neanderthalensis.",

        image: "images/erectus.jpg",

        facts: [

            "Merupakan spesies manusia pertama yang menyebar keluar Afrika.",

            "Menggunakan api untuk memasak dan perlindungan.",

            "Mampu berjalan dan berlari jarak jauh dengan efisien.",

            "Bertahan hidup lebih dari 1,5 juta tahun, menjadikannya salah satu spesies Homo yang paling sukses."

        ],

        source: "Smithsonian Human Origins Program"

    },

        "homo-neanderthalensis": {

        name: "Homo neanderthalensis",

        nickname: "Neanderthal",

        age: "400.000 - 40.000 tahun lalu",

        location: "Eropa dan Asia Barat",

        height: "±155–170 cm",

        weight: "±60–90 kg",

        brain: "±1.200–1.750 cc",

        characteristic:
            "Tubuh kekar, tulang tebal, alis menonjol, hidung lebar, serta kapasitas otak yang sangat besar. Sangat beradaptasi dengan lingkungan beriklim dingin.",

        behavior:
            "Menggunakan alat batu Mousterian, menguasai api, berburu hewan besar secara berkelompok, serta memiliki bukti praktik penguburan dan kemungkinan perilaku simbolis.",

        evolution:
            "Merupakan kerabat dekat Homo sapiens. Kedua spesies berbagi nenek moyang yang hidup sekitar 500.000–700.000 tahun lalu dan sempat kawin silang (interbreeding).",

        image: "images/neanderthal.jpg",

        facts: [

            "Memiliki volume otak rata-rata lebih besar daripada manusia modern.",

            "Beradaptasi dengan iklim dingin pada Zaman Es.",

            "DNA Neanderthal masih ditemukan pada sebagian besar populasi manusia modern di luar Afrika.",

            "Punah sekitar 40.000 tahun yang lalu."

        ],

        source: "Smithsonian Human Origins Program"

    },

        "homo-floresiensis": {

        name: "Homo floresiensis",

        nickname: "The Hobbit",

        age: "100.000 - 50.000 tahun lalu",

        location: "Liang Bua, Pulau Flores, Indonesia",

        height: "±100–110 cm",

        weight: "±25–30 kg",

        brain: "±380–430 cc",

        characteristic:
            "Memiliki tubuh sangat kecil, otak kecil, kaki relatif besar, dan lengan yang cukup panjang. Walaupun berukuran kecil, spesies ini mampu bertahan hidup di lingkungan pulau.",

        behavior:
            "Membuat alat batu sederhana, berburu Stegodon (gajah kerdil), memanfaatkan api, dan hidup dalam kelompok kecil di gua-gua Pulau Flores.",

        evolution:
            "Diduga merupakan keturunan Homo erectus yang mengalami island dwarfism (pengerdilan akibat isolasi di pulau), meskipun masih terdapat perdebatan ilmiah mengenai asal-usulnya.",

        image: "images/floresiensis.jpg",

        facts: [

            "Dijuluki 'The Hobbit' karena tinggi badannya sekitar satu meter.",

            "Fosil pertama ditemukan di Liang Bua, Flores, pada tahun 2003.",

            "Merupakan salah satu spesies manusia purba yang ditemukan di Indonesia.",

            "Hidup berdampingan dengan komodo dan Stegodon kerdil."

        ],

        source: "Smithsonian Human Origins Program"

    },

        "homo-sapiens": {

        name: "Homo sapiens",

        nickname: "Modern Human",

        age: "300.000 tahun lalu - sekarang",

        location: "Berasal dari Afrika, kini tersebar di seluruh dunia",

        height: "±150–190 cm",

        weight: "Bervariasi",

        brain: "±1.200–1.600 cc",

        characteristic:
            "Memiliki tengkorak bulat, dahi tinggi, rahang lebih kecil, dagu yang jelas, serta kapasitas berpikir abstrak dan kemampuan bahasa yang sangat berkembang.",

        behavior:
            "Mengembangkan bahasa kompleks, seni, budaya, pertanian, teknologi, ilmu pengetahuan, serta membangun peradaban modern di seluruh dunia.",

        evolution:
            "Merupakan satu-satunya spesies manusia yang masih bertahan hidup. Berevolusi dari populasi Homo awal di Afrika dan memiliki hubungan kekerabatan dengan Neanderthal maupun Denisovan.",

        image: "images/sapiens.jpg",

        facts: [

            "Muncul sekitar 300.000 tahun yang lalu di Afrika.",

            "Merupakan satu-satunya spesies manusia yang masih hidup hingga sekarang.",

            "Memiliki kemampuan berpikir simbolik, bahasa, dan budaya yang sangat kompleks.",

            "Berhasil menyebar ke seluruh benua di Bumi."

        ],

        source: "Smithsonian Human Origins Program"

    }

};

/* ===========================================
   FUNGSI POPUP
=========================================== */

function openPopup(speciesKey) {

    const species = speciesData[speciesKey];

    if (!species) return;

    popupBody.innerHTML = `

        <img
            src="${species.image}"
            alt="${species.name}"
            class="popup-image">

        <h2>${species.name}</h2>

        <p><strong>Julukan:</strong> ${species.nickname}</p>

        <p><strong>Perkiraan Usia:</strong> ${species.age}</p>

        <p><strong>Lokasi Penemuan:</strong> ${species.location}</p>

        <p><strong>Tinggi:</strong> ${species.height}</p>

        <p><strong>Berat:</strong> ${species.weight}</p>

        <p><strong>Volume Otak:</strong> ${species.brain}</p>

        <hr>

        <h3>Karakteristik</h3>

        <p>${species.characteristic}</p>

        <h3>Perilaku</h3>

        <p>${species.behavior}</p>

        <h3>Hubungan Evolusi</h3>

        <p>${species.evolution}</p>

        <h3>Fakta Menarik</h3>

        <ul>

            ${species.facts.map(fact => `<li>${fact}</li>`).join("")}

        </ul>

        <hr>

        <small>

            Sumber: ${species.source}

        </small>

    `;

    popup.style.display = "flex";

    document.body.style.overflow = "hidden";

}

/* ===========================================
   TUTUP POPUP
=========================================== */

function closePopupWindow() {

    popup.style.display = "none";

    document.body.style.overflow = "auto";

}

/* ===========================================
   EVENT LISTENER
=========================================== */

// Tombol "Lihat Detail"
cards.forEach(card => {

    const button = card.querySelector(".detail-btn");

    if (button) {

        button.addEventListener("click", () => {

            const speciesKey = card.dataset.species;

            openPopup(speciesKey);

        });

    }

});

// Tombol X
closePopup.addEventListener("click", closePopupWindow);

// Klik area gelap
window.addEventListener("click", (event) => {

    if (event.target === popup) {

        closePopupWindow();

    }

});

// Tombol ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closePopupWindow();

    }

});

/* ===========================================
   BAGIAN 2A
   Scroll Reveal
   Counter Statistik
   Back To Top
=========================================== */

/* ===========================================
   SCROLL REVEAL
=========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ===========================================
   COUNTER ANIMATION
=========================================== */

function animateCounter(id, target, duration = 2000) {

    const element = document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment = target / (duration / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(current);

    }, 16);

}

window.addEventListener("load", () => {

    animateCounter("speciesCount", 6);

    animateCounter("continentCount", 3);

    animateCounter("yearCount", 4);

});

/* ===========================================
   BACK TO TOP
=========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===========================================
   BAGIAN 2B
   Navbar Active
   Smooth Scroll
   Progress Bar
=========================================== */

/* ===========================================
   NAVBAR ACTIVE
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function activeMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

/* ===========================================
   SMOOTH SCROLL
=========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

/* ===========================================
   PROGRESS BAR
=========================================== */

const progressBar = document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

function updateProgressBar(){

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

}

window.addEventListener("scroll", updateProgressBar);

/* ===========================================
   OPTIMASI SCROLL
=========================================== */

window.addEventListener("scroll", () => {

    revealOnScroll();

    activeMenu();

    updateProgressBar();

});

/* ===========================================
   BAGIAN 3A
   Scientific Particle Background
=========================================== */

const canvas = document.getElementById("particleCanvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    class Particle {

        constructor() {

            this.reset();

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

        }

        reset() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.radius = Math.random() * 2 + 1;

            this.speedX = (Math.random() - 0.5) * 0.4;

            this.speedY = (Math.random() - 0.5) * 0.4;

        }

        update() {

            this.x += this.speedX;
            this.y += this.speedY;

            if (
                this.x < -20 ||
                this.x > canvas.width + 20 ||
                this.y < -20 ||
                this.y > canvas.height + 20
            ) {

                this.reset();

            }

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = "rgba(0,229,255,0.7)";

            ctx.fill();

        }

    }

    function createParticles() {

        particles = [];

        const amount = Math.min(
            120,
            Math.floor(window.innerWidth / 12)
        );

        for (let i = 0; i < amount; i++) {

            particles.push(new Particle());

        }

    }

    createParticles();

    function connectParticles() {

        for (let a = 0; a < particles.length; a++) {

            for (let b = a + 1; b < particles.length; b++) {

                const dx = particles[a].x - particles[b].x;

                const dy = particles[a].y - particles[b].y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {

                    ctx.beginPath();

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.strokeStyle =
                        "rgba(0,229,255," +
                        (1 - distance / 120) * 0.25 +
                        ")";

                    ctx.lineWidth = 1;

                    ctx.stroke();

                }

            }

        }

    }

    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach((particle) => {

            particle.update();

            particle.draw();

        });

        connectParticles();

        requestAnimationFrame(animateParticles);

    }

    animateParticles();

}

/* ===========================================
   BAGIAN 3B
   Mouse Parallax
   Card Glow
   Floating DNA
   Performance
=========================================== */

/* ===========================================
   MOUSE PARALLAX
=========================================== */

const heroImage = document.querySelector(".hero-image");

document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ===========================================
   CARD HOVER GLOW
=========================================== */

const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");

    });

});

/* ===========================================
   FLOATING DNA
=========================================== */

const dna = document.querySelector(".glow");

if (dna) {

    let angle = 0;

    function floatingDNA() {

        angle += 0.02;

        dna.style.transform =
            `translateY(${Math.sin(angle) * 10}px)
             rotate(${Math.sin(angle) * 5}deg)`;

        requestAnimationFrame(floatingDNA);

    }

    floatingDNA();

}

/* ===========================================
   HEADER SHADOW
=========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ===========================================
   RIPPLE BUTTON
=========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        circle.className = "ripple";

        const rect = this.getBoundingClientRect();

        circle.style.left =
            (e.clientX - rect.left) + "px";

        circle.style.top =
            (e.clientY - rect.top) + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

});

/* ===========================================
   PAGE LOADER
=========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ===========================================
   PERFORMANCE
=========================================== */

window.addEventListener("resize", () => {

    revealOnScroll();

});