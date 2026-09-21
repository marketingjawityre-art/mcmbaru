/* =====================================================================
   KONFIGURASI BORANG PERMOHONAN MCM
   ---------------------------------------------------------------------
   Nak tambah / ubah medan borang, edit fail ini sahaja.
   Jenis medan (t):
     text | upper | ic | tel | emel | nombor | wang | tarikh | pilih |
     radio | semak (checkbox banyak) | teks (textarea) | jadual | nota
   Medan bersyarat: jika: { k: 'kunci_medan_lain', v: ['nilai1','nilai2'] }
   ===================================================================== */

const SUMBER_RUJUKAN = ['Facebook', 'Instagram', 'TikTok', 'Threads', 'WhatsApp', 'Laman web MCM',
  'Rakan / ahli keluarga', 'Masjid / surau', 'Agensi kerajaan / NGO / institusi',
  'Ketua kampung / penghulu / wakil komuniti', 'Pernah menerima bantuan MCM sebelum ini'];

const PDPA = [
  'Segala maklumat, keterangan dan dokumen yang diberikan dalam permohonan ini adalah benar, tepat dan lengkap sepanjang pengetahuan saya.',
  'Saya memberikan kebenaran kepada Muslim Care Malaysia Society (MCM) untuk mengumpul, merekod, menyimpan, menggunakan dan memproses data peribadi saya bagi tujuan semakan, penilaian kelayakan, pengesahan permohonan, penyaluran bantuan, pemantauan dan penyimpanan rekod.',
  'Saya memberikan kebenaran kepada MCM untuk membuat semakan dan mengesahkan maklumat yang diberikan, termasuk maklumat berkaitan pendapatan, tanggungan, komitmen kewangan, pemilikan atau keadaan kediaman serta maklumat lain yang berkaitan dengan mana-mana pihak, agensi atau institusi yang berkenaan sekiranya diperlukan bagi tujuan penilaian permohonan.',
  'Saya bersetuju untuk mematuhi syarat-syarat yang ditetapkan oleh MCM sekiranya permohonan saya diluluskan serta memberikan kerjasama bagi sebarang lawatan, pengesahan, pemantauan atau penilaian berkaitan bantuan yang diterima.',
  'Saya memahami bahawa pihak MCM berhak menolak, menangguhkan atau membatalkan kelulusan permohonan sekiranya didapati mana-mana maklumat atau dokumen yang diberikan adalah palsu, tidak tepat atau mengelirukan.',
  'Saya memahami bahawa sekiranya saya tidak menerima sebarang maklum balas atau dihubungi oleh pihak MCM dalam tempoh dua (2) bulan dari tarikh permohonan dihantar, permohonan tersebut hendaklah dianggap sebagai tidak berjaya atau tidak diluluskan.'
];

const PENYOKONG_NOTA = 'Maklumat permohonan ini wajib disokong / disahkan oleh Ketua Kampung / Amil Zakat Kariah / Pengerusi Masjid / Pegawai Majlis Agama Islam / ADUN / ADN / Ahli Parlimen / Guru Besar.';

const SEKSYEN_SUMBER = {
  tajuk: 'Maklumat Sumber Rujukan',
  medan: [{ k: 'sumberRujukan', l: 'Bagaimanakah anda mengetahui mengenai MCM / program ini?', t: 'semak', pilihan: SUMBER_RUJUKAN, wajib: true, penuh: true }]
};

const seksyenPenyokong = () => ({
  tajuk: 'Pengesahan dan Sokongan Permohonan',
  nota: PENYOKONG_NOTA,
  medan: [
    { k: 'penyokongNama', l: 'Nama Penyokong', t: 'upper', wajib: true },
    { k: 'penyokongJawatan', l: 'Jawatan Penyokong', t: 'upper', wajib: true },
    { k: 'penyokongTelefon', l: 'No. Telefon Penyokong', t: 'tel' },
    { k: 'penyokongTarikh', l: 'Tarikh Disahkan', t: 'tarikh', wajib: true }
  ]
});

const MEDAN_PEMOHON_INDIVIDU = [
  { k: 'namaPemohon', l: 'Nama Penuh (seperti MyKad)', t: 'upper', wajib: true, penuh: true },
  { k: 'icPemohon', l: 'No. Kad Pengenalan', t: 'ic', wajib: true },
  { k: 'jantina', l: 'Jantina', t: 'pilih', pilihan: ['LELAKI', 'PEREMPUAN'], wajib: true },
  { k: 'telefon', l: 'No. Telefon / WhatsApp', t: 'tel', wajib: true },
  { k: 'emel', l: 'Alamat E-mel', t: 'emel', wajib: true },
  { k: 'alamat', l: 'Alamat Rumah', t: 'upper', wajib: true, penuh: true },
  { k: 'poskod', l: 'Poskod', t: 'nombor', wajib: true },
  { k: 'bandar', l: 'Bandar', t: 'upper', wajib: true },
  { k: 'negeri', l: 'Negeri', t: 'pilih', pilihan: ['JOHOR','KEDAH','KELANTAN','MELAKA','NEGERI SEMBILAN','PAHANG','PERAK','PERLIS','PULAU PINANG','SABAH','SARAWAK','SELANGOR','TERENGGANU','W.P. KUALA LUMPUR','W.P. LABUAN','W.P. PUTRAJAYA'], wajib: true },
  { k: 'statusKahwin', l: 'Status Perkahwinan', t: 'pilih', pilihan: ['BUJANG', 'BERKAHWIN', 'BERCERAI', 'KEMATIAN PASANGAN'], wajib: true },
  { k: 'kategoriPemohon', l: 'Kategori Pemohon', t: 'semak', pilihan: ['IBU TUNGGAL', 'BAPA TUNGGAL', 'ORANG KELAINAN UPAYA (OKU)', 'MANGSA BENCANA', 'WARGA EMAS', 'ASNAF'], penuh: true },
  { k: 'kategoriLain', l: 'Kategori lain (nyatakan)', t: 'upper' },
  { k: 'bilTanggungan', l: 'Bilangan Tanggungan (orang)', t: 'nombor', wajib: true },
  { k: 'pendapatanIsiRumah', l: 'Pendapatan Isi Rumah Sebulan (RM)', t: 'wang', wajib: true },
  { k: 'pekerjaan', l: 'Pekerjaan', t: 'upper', wajib: true },
  { k: 'sektor', l: 'Sektor Pekerjaan', t: 'pilih', pilihan: ['KERAJAAN', 'SWASTA', 'KERJA SENDIRI', 'TIDAK BEKERJA', 'LAIN-LAIN'], wajib: true }
];

const MEDAN_PASANGAN = [
  { k: 'psgNama', l: 'Nama Penuh Pasangan', t: 'upper', penuh: true },
  { k: 'psgIC', l: 'No. Kad Pengenalan Pasangan', t: 'ic' },
  { k: 'psgTelefon', l: 'No. Telefon / WhatsApp', t: 'tel' },
  { k: 'psgPekerjaan', l: 'Pekerjaan', t: 'upper' },
  { k: 'psgSektor', l: 'Sektor Pekerjaan', t: 'pilih', pilihan: ['KERAJAAN', 'SWASTA', 'KERJA SENDIRI', 'TIDAK BEKERJA', 'LAIN-LAIN'] },
  { k: 'psgPendapatan', l: 'Pendapatan Sebulan (RM)', t: 'wang' }
];

const MEDAN_ORGANISASI = [
  { k: 'namaPertubuhan', l: 'Nama Pertubuhan / Organisasi', t: 'upper', wajib: true, penuh: true },
  { k: 'noPendaftaran', l: 'No. Pendaftaran Pertubuhan', t: 'upper', wajib: true },
  { k: 'telefon', l: 'No. Telefon / WhatsApp', t: 'tel', wajib: true },
  { k: 'emel', l: 'Alamat E-mel', t: 'emel', wajib: true },
  { k: 'alamat', l: 'Alamat Pertubuhan', t: 'upper', wajib: true, penuh: true },
  { k: 'poskod', l: 'Poskod', t: 'nombor', wajib: true },
  { k: 'bandar', l: 'Bandar', t: 'upper', wajib: true },
  { k: 'negeri', l: 'Negeri', t: 'pilih', pilihan: ['JOHOR','KEDAH','KELANTAN','MELAKA','NEGERI SEMBILAN','PAHANG','PERAK','PERLIS','PULAU PINANG','SABAH','SARAWAK','SELANGOR','TERENGGANU','W.P. KUALA LUMPUR','W.P. LABUAN','W.P. PUTRAJAYA'], wajib: true }
];

const MEDAN_WAKIL = (tajuk) => ([
  { k: 'wakilNama', l: 'Nama Penuh ' + tajuk, t: 'upper', wajib: true, penuh: true },
  { k: 'wakilIC', l: 'No. Kad Pengenalan', t: 'ic', wajib: true },
  { k: 'wakilJawatan', l: 'Jawatan', t: 'upper', wajib: true },
  { k: 'wakilTelefon', l: 'No. Telefon / WhatsApp', t: 'tel', wajib: true },
  { k: 'wakilEmel', l: 'E-mel', t: 'emel' }
]);

/* ===================================================================== */
const BORANG = {

  /* ---------------------------- 2.01 HOME2LIVE ---------------------------- */
  '2.01': {
    nama: 'HOME2LIVE',
    tajuk: 'Borang Permohonan Program HOME2LIVE',
    subtajuk: 'Bantuan pembinaan rumah baharu atau baik pulih kediaman',
    jenisPemohon: 'INDIVIDU',
    pengenalan: 'Program HOME2LIVE merupakan inisiatif Muslim Care Malaysia Society (MCM) yang bertujuan membantu individu atau keluarga yang layak dan memerlukan bantuan bagi pembinaan rumah baharu atau kerja-kerja baik pulih kediaman.',
    syarat: ['Pemohon dan pasangan warganegara Malaysia', 'Pemohon berumur 40 tahun ke atas', 'Pemohon dan/atau pasangan tidak pernah memiliki rumah',
      'Memiliki tanah sendiri (jika tanah bukan milik pemohon, sertakan surat kebenaran bertulis daripada pemilik tanah)'],
    keutamaan: ['Warga emas', 'Orang Kelainan Upaya (OKU)', 'Ibu/bapa tunggal dengan tanggungan ramai', 'Mangsa bencana', 'Golongan miskin tegar yang diperakui pihak berautoriti'],
    peta: { nama: 'namaPemohon', ic: 'icPemohon', telefon: 'telefon', emel: 'emel', alamat: ['alamat', 'poskod', 'bandar', 'negeri'], jenis: 'skim' },
    skim: {
      k: 'skim', l: 'Jenis Bantuan (pilih satu skim sahaja)', wajib: true,
      pilihan: [
        { v: 'BANTUAN BINA RUMAH', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'sahRumah', l: 'Surat pengesahan tidak memiliki rumah / rumah usang (diperakui pihak berautoriti)', wajib: true }, { k: 'pelan', l: 'Pelan rumah (jika ada)' }] },
        { v: 'BANTUAN BINA RUMAH (BENCANA)', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'polis', l: 'Salinan laporan pihak berkuasa (PDRM)', wajib: true }, { k: 'gambar', l: 'Gambar kerosakan rumah (sekurang-kurangnya 3 keping, gabung dalam 1 PDF)', wajib: true }] },
        { v: 'BANTUAN BAIK PULIH RUMAH', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'sahUsang', l: 'Surat pengesahan rumah usang', wajib: true }, { k: 'gambar', l: 'Gambar kerosakan rumah (sekurang-kurangnya 3 keping, gabung dalam 1 PDF)', wajib: true }] }
      ]
    },
    seksyen: [
      { tajuk: 'Maklumat Pemohon', medan: MEDAN_PEMOHON_INDIVIDU.concat([{ k: 'tahapKesihatan', l: 'Tahap Kesihatan', t: 'pilih', pilihan: ['SIHAT', 'SAKIT'], wajib: true }, { k: 'jenisSakit', l: 'Jika sakit, nyatakan', t: 'upper', jika: { k: 'tahapKesihatan', v: ['SAKIT'] } }]) },
      { tajuk: 'Maklumat Pasangan (jika berkenaan)', medan: MEDAN_PASANGAN },
      { tajuk: 'Maklumat Tanggungan', medan: [{ k: 'tanggungan', l: 'Senarai tanggungan', t: 'jadual', penuh: true, kolum: [{ k: 'nama', l: 'Nama', t: 'upper' }, { k: 'ic', l: 'No. K/P', t: 'text' }, { k: 'hubungan', l: 'Hubungan', t: 'upper' }, { k: 'status', l: 'Status (sekolah/IPT/bekerja/tidak bekerja)', t: 'upper' }, { k: 'bersama', l: 'Tinggal bersama?', t: 'pilih', pilihan: ['YA', 'TIDAK'] }] }] },
      { tajuk: 'Maklumat Pendapatan Isi Rumah', medan: [{ k: 'pendapatan', l: 'Sumber pendapatan bulanan', t: 'jadual', penuh: true, kolum: [{ k: 'sumber', l: 'Sumber (gaji / pencen / sumbangan keluarga / JKM / sewaan dll)', t: 'upper' }, { k: 'pemohon', l: 'Pemohon (RM)', t: 'wang' }, { k: 'pasangan', l: 'Pasangan (RM)', t: 'wang' }, { k: 'penjaga', l: 'Ibu/Bapa/Penjaga (RM)', t: 'wang' }] }] },
      { tajuk: 'Alasan Permohonan', medan: [{ k: 'alasan', l: 'Nyatakan alasan permohonan', t: 'teks', wajib: true, penuh: true }] },
      SEKSYEN_SUMBER, seksyenPenyokong()
    ],
    dokumen: [
      { k: 'kpPemohon', l: 'Salinan kad pengenalan pemohon', wajib: true },
      { k: 'kpPasangan', l: 'Salinan kad pengenalan pasangan (jika berkenaan)' },
      { k: 'kpTanggungan', l: 'Salinan kad pengenalan / sijil kelahiran tanggungan (gabung dalam 1 PDF)' },
      { k: 'oku', l: 'Dokumen pengesahan OKU (jika berkenaan)' },
      { k: 'pendapatan', l: 'Penyata gaji terkini / surat pengesahan pendapatan', wajib: true },
      { k: 'sokongan', l: 'Borang / surat sokongan yang telah disahkan penyokong', wajib: true }
    ]
  },

  /* ------------------------- 2.02 PEMBANGUNAN AWAM ------------------------- */
  '2.02': {
    nama: 'PEMBANGUNAN AWAM',
    tajuk: 'Borang Permohonan Program Pembangunan Awam',
    subtajuk: 'Pembangunan dan baik pulih kemudahan serta infrastruktur asas komuniti',
    jenisPemohon: 'ORGANISASI',
    pengenalan: 'Program Pembangunan Awam merupakan usaha pembangunan dan baik pulih kemudahan serta infrastruktur asas bagi meningkatkan kesejahteraan, keselamatan dan kualiti hidup komuniti. Dibuka kepada pertubuhan / organisasi berdaftar.',
    syarat: ['Pertubuhan / organisasi mestilah pihak yang berdaftar', 'Pemilikan tanah / bangunan atas nama pertubuhan / organisasi / pemegang amanah'],
    peta: { nama: 'namaPertubuhan', noDaftar: 'noPendaftaran', telefon: 'telefon', emel: 'emel', alamat: ['alamat', 'poskod', 'bandar', 'negeri'], jenis: 'skim' },
    skim: {
      k: 'skim', l: 'Jenis Bantuan (pilih satu skim sahaja)', wajib: true,
      pilihan: [
        { v: 'BANTUAN BINA BANGUNAN BAHARU', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'pelanBaharu', l: 'Salinan pelan bangunan baharu', wajib: true }, { k: 'wakaf', l: 'Dokumen sokongan wakaf (jika berkenaan)' }] },
        { v: 'BANTUAN BAIK PULIH BANGUNAN', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'pelanAsas', l: 'Salinan pelan bangunan asas', wajib: true }, { k: 'gambar', l: 'Gambar kerosakan bangunan (sekurang-kurangnya 3 keping, gabung dalam 1 PDF)', wajib: true }] },
        { v: 'BANTUAN BINA BANGUNAN (BENCANA)', dok: [{ k: 'geran', l: 'Salinan geran tanah', wajib: true }, { k: 'polis', l: 'Salinan laporan pihak berkuasa (PDRM)', wajib: true }, { k: 'gambar', l: 'Gambar kerosakan bangunan (sekurang-kurangnya 3 keping, gabung dalam 1 PDF)', wajib: true }, { k: 'wakaf', l: 'Dokumen sokongan wakaf (jika berkenaan)' }] }
      ]
    },
    seksyen: [
      { tajuk: 'Maklumat Pertubuhan / Organisasi', medan: MEDAN_ORGANISASI.concat([{ k: 'namaBank', l: 'Nama Bank Pertubuhan', t: 'upper' }, { k: 'noAkaun', l: 'No. Akaun Bank Pertubuhan', t: 'text' }]) },
      { tajuk: 'Maklumat Pemilik / Pengerusi', medan: MEDAN_WAKIL('Pemilik / Pengerusi') },
      { tajuk: 'Maklumat Projek', medan: [
        { k: 'tajukProjek', l: 'Tajuk / Nama Projek', t: 'upper', wajib: true, penuh: true },
        { k: 'lokasiProjek', l: 'Lokasi / Alamat Tapak Projek', t: 'upper', wajib: true, penuh: true },
        { k: 'anggaranKos', l: 'Anggaran Kos Projek (RM)', t: 'wang', wajib: true },
        { k: 'penerimaManfaat', l: 'Anggaran Penerima Manfaat (orang)', t: 'nombor', wajib: true }
      ] },
      { tajuk: 'Alasan Permohonan', medan: [{ k: 'alasan', l: 'Nyatakan alasan permohonan', t: 'teks', wajib: true, penuh: true }] },
      SEKSYEN_SUMBER, seksyenPenyokong()
    ],
    dokumen: [
      { k: 'sijilDaftar', l: 'Salinan sijil pendaftaran pertubuhan / organisasi', wajib: true },
      { k: 'sebutHarga', l: 'Dua (2) sebut harga pembinaan / baik pulih (gabung dalam 1 PDF)', wajib: true },
      { k: 'cidb', l: 'Salinan CIDB / SSM kontraktor (sokongan)' },
      { k: 'penyataKontraktor', l: 'Salinan penyata akaun kontraktor (sokongan)' },
      { k: 'sokongan', l: 'Borang / surat sokongan yang telah disahkan penyokong', wajib: true }
    ]
  },

  /* -------------------------- 2.03 WATER2SURVIVE -------------------------- */
  '2.03': {
    nama: 'WATER2SURVIVE',
    tajuk: 'Borang Permohonan Program WATER2SURVIVE',
    subtajuk: 'Bantuan bekalan air bersih dan selamat untuk komuniti',
    jenisPemohon: 'ORGANISASI',
    pengenalan: 'Program WATER2SURVIVE merupakan inisiatif bantuan air bersih oleh MCM bagi membantu komuniti yang menghadapi kesukaran mendapatkan bekalan air bersih dan selamat, merangkumi telaga, sistem paip, tangki simpanan dan kemudahan berkaitan.',
    syarat: ['Kawasan yang mempunyai masalah penyaluran air', 'Kawasan yang mempunyai kepadatan penduduk yang tinggi', 'Kawasan awam', 'Kerosakan akibat bencana'],
    peta: { nama: 'namaPertubuhan', noDaftar: 'noPendaftaran', telefon: 'telefon', emel: 'emel', alamat: ['alamat', 'poskod', 'bandar', 'negeri'], jenis: 'jenisBantuan' },
    seksyen: [
      { tajuk: 'Maklumat Pertubuhan / Organisasi', medan: MEDAN_ORGANISASI },
      { tajuk: 'Maklumat Peribadi Pemegang Amanah', medan: MEDAN_WAKIL('Pemegang Amanah') },
      { tajuk: 'Jenis Bantuan Yang Diperlukan', medan: [
        { k: 'jenisBantuan', l: 'Tandakan jenis bantuan diperlukan', t: 'semak', pilihan: ['TELAGA TIUB', 'MENARA TANGKI', 'TANGKI AIR', 'KOLAM TADAHAN', 'PAM', 'PAIP'], wajib: true, penuh: true },
        { k: 'jenisLain', l: 'Lain-lain (nyatakan)', t: 'upper', penuh: true }
      ] },
      { tajuk: 'Cadangan Penyelenggaraan', medan: [{ k: 'penyelenggaraan', l: 'Nyatakan cadangan penyelenggaraan sekiranya permohonan diluluskan', t: 'teks', wajib: true, penuh: true }] },
      { tajuk: 'Maklumat Tapak Cadangan Projek', medan: [
        { k: 'tapakAlamat', l: 'Alamat Tapak', t: 'upper', wajib: true, penuh: true },
        { k: 'tapakNoTanah', l: 'No. Pendaftaran Tanah', t: 'upper' },
        { k: 'tapakKeluasan', l: 'Keluasan', t: 'upper' }
      ] },
      { tajuk: 'Anggaran Penerima Manfaat Projek', medan: [
        { k: 'manfaatOrang', l: 'Jumlah Penerima Manfaat (orang)', t: 'nombor', wajib: true },
        { k: 'manfaatBangunan', l: 'Jumlah Bangunan Terlibat (buah)', t: 'nombor' },
        { k: 'manfaatHuraian', l: 'Huraian Tambahan (jika berkenaan)', t: 'teks', penuh: true }
      ] },
      { tajuk: 'Alasan Permohonan', medan: [{ k: 'alasan', l: 'Nyatakan alasan permohonan', t: 'teks', wajib: true, penuh: true }] },
      SEKSYEN_SUMBER, seksyenPenyokong()
    ],
    dokumen: [
      { k: 'sijilDaftar', l: 'Salinan sijil pendaftaran pertubuhan / organisasi', wajib: true },
      { k: 'gambarTapak', l: 'Gambar lokasi / tapak cadangan (gabung dalam 1 PDF)', wajib: true },
      { k: 'dokTanah', l: 'Dokumen tanah / kebenaran pemilik tapak' },
      { k: 'sebutHarga', l: 'Sebut harga kerja (jika ada)' },
      { k: 'sokongan', l: 'Borang / surat sokongan yang telah disahkan penyokong', wajib: true }
    ]
  },

  /* ---------------------- 2.04 PERALATAN PERUBATAN ---------------------- */
  '2.04': {
    nama: 'PERALATAN PERUBATAN',
    tajuk: 'Borang Permohonan Bantuan Peralatan Perubatan',
    subtajuk: 'Bantuan peralatan perubatan untuk menyokong rawatan dan pemulihan',
    jenisPemohon: 'INDIVIDU',
    pengenalan: 'Inisiatif kebajikan MCM bagi membantu pesakit daripada golongan yang memerlukan mendapatkan peralatan perubatan yang bersesuaian bagi menyokong proses rawatan, penjagaan dan pemulihan.',
    syarat: ['Warganegara Malaysia', 'Permohonan disokong oleh dokumen perubatan / surat rujukan yang berkaitan'],
    keutamaan: ['Warga emas', 'Orang Kelainan Upaya (OKU)', 'Ibu/bapa tunggal dengan tanggungan ramai', 'Mangsa bencana',
      'Pemohon / pasangan / waris tidak menerima bantuan bulanan atau berkala daripada pusat zakat / JKM dan lain-lain',
      'Pemohon tidak pernah memiliki peralatan yang dipohon', 'Golongan miskin tegar yang diperakui pihak berautoriti'],
    peta: { nama: 'namaPemohon', ic: 'icPemohon', telefon: 'telefon', emel: 'emel', alamat: ['alamat', 'poskod', 'bandar', 'negeri'], jenis: 'peralatanRingkas' },
    seksyen: [
      { tajuk: 'Maklumat Pemohon', medan: MEDAN_PEMOHON_INDIVIDU.concat([
        { k: 'tahapKesihatan', l: 'Tahap Kesihatan', t: 'pilih', pilihan: ['SIHAT', 'SAKIT'], wajib: true },
        { k: 'jenisSakit', l: 'Jika sakit, nyatakan keadaan kesihatan', t: 'upper', jika: { k: 'tahapKesihatan', v: ['SAKIT'] }, penuh: true }
      ]) },
      { tajuk: 'Maklumat Pasangan / Waris (jika berkenaan)', medan: MEDAN_PASANGAN },
      { tajuk: 'Peralatan Perubatan Dipohon', medan: [
        { k: 'peralatanRingkas', l: 'Peralatan utama dipohon (ringkas)', t: 'upper', wajib: true, penuh: true, nota: 'Contoh: KERUSI RODA' },
        { k: 'peralatan', l: 'Senarai penuh peralatan dipohon', t: 'jadual', penuh: true, kolum: [{ k: 'item', l: 'Peralatan', t: 'upper' }, { k: 'kuantiti', l: 'Kuantiti', t: 'nombor' }, { k: 'anggaran', l: 'Anggaran Kos (RM)', t: 'wang' }] },
        { k: 'siapaGuna', l: 'Peralatan untuk kegunaan siapa (pemohon / tanggungan)', t: 'upper', wajib: true }
      ] },
      { tajuk: 'Alasan Permohonan', medan: [{ k: 'alasan', l: 'Nyatakan alasan permohonan', t: 'teks', wajib: true, penuh: true }] },
      SEKSYEN_SUMBER, seksyenPenyokong()
    ],
    dokumen: [
      { k: 'kpPemohon', l: 'Salinan kad pengenalan pemohon', wajib: true },
      { k: 'kpPasangan', l: 'Salinan kad pengenalan pasangan / waris (jika berkenaan)' },
      { k: 'oku', l: 'Dokumen pengesahan OKU (jika berkenaan)' },
      { k: 'suratRujukan', l: 'Surat rujukan / pengesahan perubatan berkaitan permohonan', wajib: true },
      { k: 'sebutHarga', l: 'Resit / sebut harga / invois peralatan (jika ada)' },
      { k: 'sokongan', l: 'Borang / surat sokongan yang telah disahkan penyokong', wajib: true }
    ]
  },

  /* ---------------------------- 2.26 HOME-PRENEUR ---------------------------- */
  '2.26': {
    nama: 'MC: HOME-PRENEUR',
    tajuk: 'Borang Permohonan Bantuan Program MC: HOME-Preneur',
    subtajuk: 'Bantuan peralatan / modal untuk menjana pendapatan dari rumah',
    jenisPemohon: 'INDIVIDU',
    pengenalan: 'Inisiatif MCM bagi membantu golongan ibu tunggal, ibu tinggal, asnaf dan OKU menjana serta meningkatkan pendapatan melalui perniagaan dari rumah.',
    syarat: ['Warganegara Malaysia', 'Pemohon berumur 18 tahun ke atas', 'Kategori ibu tunggal, ibu tinggal, asnaf atau OKU',
      'Sudah memiliki produk atau inisiatif ekonomi sedia ada (bukan bermula dari sifar)', 'Pendapatan bulanan tidak melebihi RM1,700.00'],
    peta: { nama: 'namaPemohon', ic: 'icPemohon', telefon: 'telefon', emel: 'emel', alamat: ['alamat', 'poskod', 'bandar', 'negeri'], jenis: 'kategoriPerniagaan' },
    seksyen: [
      { tajuk: 'Maklumat Pemohon', medan: MEDAN_PEMOHON_INDIVIDU },
      { tajuk: 'Maklumat Perniagaan', medan: [
        { k: 'namaPerniagaan', l: 'Nama Perniagaan / Jenama', t: 'upper', wajib: true, penuh: true },
        { k: 'noDaftarPerniagaan', l: 'No. Pendaftaran Perniagaan (SSM, jika ada)', t: 'upper' },
        { k: 'kategoriPerniagaan', l: 'Kategori Perniagaan', t: 'pilih', wajib: true, pilihan: ['PRODUK MAKANAN', 'PRODUK BUKAN MAKANAN / ASAS TANI', 'PRODUK KRAFTANGAN DAN HASIL KREATIF'] },
        { k: 'jenisPerniagaan', l: 'Jenis Perniagaan (nyatakan)', t: 'upper', wajib: true },
        { k: 'pengenalanPerniagaan', l: 'Pengenalan ringkas perniagaan dan tujuan anda menjalankannya', t: 'teks', wajib: true, penuh: true },
        { k: 'cabaran', l: 'Cabaran yang dihadapi dalam menjalankan perniagaan', t: 'teks', wajib: true, penuh: true }
      ] },
      { tajuk: 'Keupayaan Perniagaan', medan: [
        { k: 'modalPermulaan', l: 'Modal Permulaan (RM)', t: 'wang', wajib: true },
        { k: 'pengalaman', l: 'Pengalaman dalam perniagaan (tahun)', t: 'nombor' },
        { k: 'prestasi', l: 'Prestasi perniagaan', t: 'jadual', penuh: true,
          kolum: [{ k: 'perkara', l: 'Perkara', t: 'upper' }, { k: 'sebelum', l: 'Tahun Sebelum (RM)', t: 'wang' }, { k: 'semasa', l: 'Tahun Semasa (RM)', t: 'wang' }],
          asal: [{ perkara: 'JUMLAH JUALAN TAHUNAN' }, { perkara: 'KEUNTUNGAN' }, { perkara: 'NILAI ASET PERNIAGAAN' }, { perkara: 'TANGGUNGAN KEWANGAN' }] },
        { k: 'kualiti', l: 'Pelaksanaan kualiti', t: 'semak', pilihan: ['MANUAL OPERASI KERJA (SOP)', 'PENSIJILAN (PENGREDAN / HALAL / 5S)', 'ANUGERAH', 'TIADA'], penuh: true },
        { k: 'latihan', l: 'Latihan / kemahiran yang diikuti', t: 'teks', penuh: true },
        { k: 'pekerja', l: 'Jumlah pekerja sepenuh masa', t: 'nombor' }
      ] },
      { tajuk: 'Operasi & Pengurusan Perniagaan', medan: [
        { k: 'pemasaran', l: 'Kaedah pemasaran', t: 'semak', penuh: true, pilihan: ['HEBAHAN JUALAN SETEMPAT', 'MEDIA ELEKTRONIK', 'PAMERAN / EKSPO', 'BAHAN BERCETAK', 'INTERNET (E-MEL, LAMAN WEB, MEDIA SOSIAL)', 'PUSAT PENGUMPULAN PRODUK', 'AGENSI PEMASARAN'] },
        { k: 'pasaran', l: 'Pasaran', t: 'semak', pilihan: ['DALAM NEGARA', 'LUAR NEGARA'] },
        { k: 'kaedahPengeluaran', l: 'Kaedah pengeluaran / perkhidmatan', t: 'pilih', pilihan: ['MANUAL', 'SEMI-AUTO', 'AUTOMASI'] },
        { k: 'penjenamaan', l: 'Penjenamaan didaftarkan?', t: 'pilih', pilihan: ['YA', 'TIDAK'] },
        { k: 'simpanKira', l: 'Sistem simpan kira', t: 'pilih', pilihan: ['BUKU LEJAR', 'SISTEM PERISIAN', 'COMPANY SECRETARY', 'TIADA'] },
        { k: 'strukturPengurusan', l: 'Struktur pengurusan sedia ada', t: 'semak', penuh: true, pilihan: ['VISI DAN MISI', 'CARTA ORGANISASI', 'PROFIL SYARIKAT', 'TIADA'] },
        { k: 'strategi', l: 'Strategi pembangunan perniagaan', t: 'semak', penuh: true, pilihan: ['KEKAL SEDIA ADA', 'MELUASKAN PASARAN', 'PENINGKATAN PROSES / PERKHIDMATAN', 'TIADA'] },
        { k: 'ict', l: 'Penggunaan ICT dalam operasi', t: 'pilih', pilihan: ['YA', 'TIDAK'] }
      ] },
      { tajuk: 'Keperluan Bantuan Perniagaan', medan: [
        { k: 'itemBantuan', l: 'Senarai item bantuan yang diperlukan', t: 'jadual', penuh: true, wajib: true, kolum: [{ k: 'item', l: 'Item Dipohon', t: 'upper' }, { k: 'kuantiti', l: 'Kuantiti', t: 'nombor' }, { k: 'kos', l: 'Anggaran Kos (RM)', t: 'wang' }] },
        { k: 'kesanBantuan', l: 'Bagaimana bantuan ini dapat meningkatkan pendapatan anda?', t: 'teks', wajib: true, penuh: true }
      ] },
      { tajuk: 'Perancangan Aliran Tunai Bulanan', medan: [
        { k: 'tunaiPendapatan', l: 'Pendapatan bulanan', t: 'jadual', penuh: true, kolum: [{ k: 'perkara', l: 'Perkara', t: 'upper' }, { k: 'rm', l: 'RM', t: 'wang' }] },
        { k: 'tunaiPerbelanjaan', l: 'Perbelanjaan / kos perniagaan bulanan', t: 'jadual', penuh: true, kolum: [{ k: 'perkara', l: 'Perkara', t: 'upper' }, { k: 'rm', l: 'RM', t: 'wang' }] },
        { k: 'anggaranUntung', l: 'Anggaran Keuntungan Bulanan (RM)', t: 'wang' }
      ] },
      SEKSYEN_SUMBER, seksyenPenyokong()
    ],
    dokumen: [
      { k: 'kpPemohon', l: 'Salinan kad pengenalan pemohon', wajib: true },
      { k: 'sahKategori', l: 'Dokumen pengesahan ibu tunggal / ibu tinggal / asnaf / OKU', wajib: true },
      { k: 'sijilPerniagaan', l: 'Salinan sijil pendaftaran perniagaan (jika ada)' },
      { k: 'gambarTempat', l: 'Gambar rumah / tempat perniagaan', wajib: true },
      { k: 'gambarProduk', l: 'Gambar produk / aktiviti perniagaan', wajib: true },
      { k: 'rekodJualan', l: 'Rekod jualan ringkas (jika ada)' },
      { k: 'penyataBank', l: 'Penyata bank / akaun', wajib: true },
      { k: 'sebutHarga', l: 'Sebut harga peralatan yang dipohon (jika ada)' },
      { k: 'sokongan', l: 'Borang / surat sokongan yang telah disahkan penyokong', wajib: true }
    ]
  }
};
