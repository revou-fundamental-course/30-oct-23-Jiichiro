//membuat variable untuk mengatur DOM
const hitungButton = document.querySelector("#hitung")
const resetButton = document.querySelector("#reset")
const result = document.querySelector("#result")
const hasilHitung = document.querySelector("#hasilHitung")
const pesan = document.querySelector("#pesan")
const pesan2 = document.querySelector("#pesan2")

//membuat variabel dengan value kosong (null)
let typing;
let BMI;

{
    const tb = document.querySelector("#tb")
    const bb = document.querySelector("#bb")
    const age = document.querySelector("#age")
    const container = document.querySelector(".container")
    
    //memilih style sesuai jenis kelamin
    document.querySelector("#pria").addEventListener("change", () => {
        
        //menambahkan kelas
        tb.classList.add("man-input")
        bb.classList.add("man-input")
        age.classList.add("man-input")
        container.classList.add("man-shadow")

        //menghapus kelas
        tb.classList.remove("woman-input")
        bb.classList.remove("woman-input")
        age.classList.remove("woman-input")
        container.classList.remove("woman-shadow")
    })
    document.querySelector("#wanita").addEventListener("change", () => {
        
        //menambahkan kelas
        tb.classList.add("woman-input")
        bb.classList.add("woman-input")
        age.classList.add("woman-input")
        container.classList.add("woman-shadow")

        //menghapus kelas
        tb.classList.remove("man-input")
        bb.classList.remove("man-input")
        age.classList.remove("man-input")
        container.classList.remove("man-shadow")
    })
}

//fungsi untuk menghitung 
function hitungBMI() {
    //membuat variable untuk mengatur DOM
    let bb = document.getElementById("bb");
    let tb = document.getElementById("tb");

    //melakukan validasi apakah unput dari user sesuai atau tidak
    hasilHitung.textContent = bb.value == "" || tb.value == "" ? "masukkan nilai yang benar" : BMI = (bb.value / Math.pow((tb.value / 100), 2)).toFixed(1)

    //menambah atribut untuk mengatur style elemen html
    resetButton.style.display = "block";
    result.style.display = "flex";

    //memvalidasi apakah input user benar 
    if (bb.value == "" || tb.value == "") return;

    //memilih pesan sesuai hasil dari perhitungan BMI
    if (BMI < 18.5) {
        hasilHitung.style.color = "gray"
        clearInterval(typing)
        pesan.textContent = "kekurangan Berat Badan"
        typeWriter("Salam sehat! Saya berharap pesan ini menemui Anda dalam keadaan baik. Saya ingin mengingatkan Anda pentingnya memperhatikan kesehatan tubuh, termasuk asupan nutrisi yang cukup. Segera dapatkan saran dari ahli gizi untuk membantu Anda mencapai berat badan yang sehat dan membangun kekuatan tubuh dengan cara yang benar.")
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        hasilHitung.style.color = "black"
        clearInterval(typing)
        pesan.textContent = "Nomal (ideal)"
        typeWriter("Salam sehat! Saya senang melihat Anda menjaga keseimbangan berat badan Anda dengan baik. Teruskan pola makan dan gaya hidup sehat Anda, dan pastikan untuk tetap aktif secara fisik. Ingatlah bahwa kesehatan adalah kekayaan terbesar kita.")
    } else if (BMI >= 25 && BMI <= 29.9) {
        hasilHitung.style.color = "b3b300"
        clearInterval(typing)
        pesan.textContent = "Kelebihan Berat Badan"
        typeWriter("Salam sehat! Saya ingin memberikan dukungan kepada Anda dalam perjalanan menuju kehidupan sehat. Pertahankan semangat dan lakukan langkah kecil menuju tujuan kesehatan Anda. Konsultasikan dengan ahli gizi atau profesional kesehatan untuk mendapatkan saran yang sesuai untuk mengelola berat badan dengan bijak.")
    } else if (BMI >= 30) {
        hasilHitung.style.color = "red"
        clearInterval(typing)
        pesan.textContent = 'Kegemukan (Obesitas)'
        typeWriter("Salam sehat! Saya ingin mengatakan bahwa Anda tidak sendirian dalam perjuangan untuk mencapai keadaan tubuh yang lebih sehat. Pertama-tama, saya ingin mengatakan bahwa Anda berharga dan berarti, tidak peduli ukuran atau bentuk tubuh Anda. Namun, penting bagi kita semua untuk memprioritaskan kesehatan. Saya mendorong Anda untuk mencari bantuan dari profesional kesehatan atau ahli gizi yang dapat membimbing Anda menuju kehidupan yang lebih sehat. Ingat, setiap langkah kecil menuju kesehatan adalah pencapaian besar.")
    }
}

//fungsi untuk mereset hasil perhitungan sebelumnya
function reset() {
    clearInterval(typing);

    //meghapus value agar kembali jadi 0
    tb.value = ""
    bb.value = ""

    //menghapus attibut style
    resetButton.removeAttribute("style")    
    result.removeAttribute("style")

    //mengatur isi pesan agar kosong
    pesan.textContent = ""
    pesan2.textContent = ""
}

//fungsi untuk membuat efek mengetik
function typeWriter(text) {

    //deklarasi variabel i dengan isi 0
    let i = 0;

    //mereset isi pesan2
    pesan2.textContent = ""

    //memulai efek mengetik
    typing = setInterval(() => {

        //melakukan validasi apakah i lebih kecil daripada panjang teks
        if (i < text.length) {
            pesan2.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing); 
        }
    }, 50);
}