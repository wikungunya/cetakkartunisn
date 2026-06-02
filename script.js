function generateKartu() {
    // Ambil data dari Input Form
    const nama = document.getElementById('inputNama').value;
    const nisn = document.getElementById('inputNisn').value;
    const ttl = document.getElementById('inputTTL').value;
    const sekolah = document.getElementById('inputSekolah').value;

    // Validasi sederhana jika form kosong
    if(!nama || !nisn || !ttl || !sekolah) {
        alert("Mohon isi semua data terlebih dahulu!");
        return;
    }

    // Masukkan data ke dalam elemen Preview Kartu
    document.getElementById('cardNama').innerText = nama;
    document.getElementById('cardNisn').innerText = nisn;
    document.getElementById('cardTTL').innerText = ttl;
    document.getElementById('cardSekolah').innerText = sekolah;

    // Munculkan Kartu dan Tombol Unduh ke Layar
    document.getElementById('kartuPreview').style.display = 'block';
    document.getElementById('btnUnduh').style.display = 'block';
}

function unduhKartu() {
    const elemenKartu = document.getElementById('kartuPreview');
    
    // Mengubah elemen HTML kartu menjadi file Gambar PNG
    html2canvas(elemenKartu, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Kartu_NISN_${document.getElementById('cardNisn').innerText}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
