export interface ServiceItem {
  id: string;
  name: string;
  category: 'surat' | 'pajak' | 'transportasi' | 'pendidikan' | 'kesehatan' | 'perizinan' | 'sosial';
  description: string;
  opd: string;
  popular?: boolean;
  status: 'Online' | 'Tersedia' | 'Maintenance';
  duration: string;
  cost: string;
  requirements: string[];
  features: string[];
  directUrl: string;
}

export interface NewsPost {
  id: string;
  title: string;
  type: 'Artikel' | 'Galeri';
  badgeColor: 'primary' | 'success';
  date: string;
  snippet: string;
  imageUrl: string;
  slug: string;
}

export interface UmkmItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  price: string;
  rating: number;
}

export interface ApbdBreakdown {
  fiscalYear: string;
  pendapatan: string;
  belanja: string;
  pembiayaan: string;
  items: {
    label: string;
    target: string;
    realisasi: string;
    percentage: number;
    color: string;
  }[];
}

export const STATS_SUMMARY = {
  totalPenduduk: '2.158.400',
  lakiLaki: '1.104.250',
  perempuan: '1.054.150',
  gugusanPulau: '2.408',
  skorIdm: '79.08',
  layananDigital: '142'
};

export const QUICK_SERVICES = [
  {
    id: 'ajukan-surat',
    title: 'Ajukan Surat & Adminduk',
    subtitle: 'Portal Layanan Mandiri Warga',
    icon: 'file-text',
    color: '#0284c7', // info
    targetId: 'layanan'
  },
  {
    id: 'apbd-nagari',
    title: 'APB Daerah 2026',
    subtitle: 'Transparansi Anggaran',
    icon: 'bar-chart-2',
    color: '#16a34a', // success
    targetId: 'transparansi'
  },
  {
    id: 'statistik-daerah',
    title: 'Statistik Kepri',
    subtitle: 'Data Kependudukan & Maritim',
    icon: 'users',
    color: '#0284c7', // primary
    targetId: 'statistik'
  },
  {
    id: 'katalog-umkm',
    title: 'Sentra UMKM Kepri',
    subtitle: 'Katalog Produk & Bahari',
    icon: 'package-open',
    color: '#d97706', // warning
    targetId: 'umkm'
  },
  {
    id: 'ppid-publik',
    title: 'PPID Dokumen',
    subtitle: 'Informasi Publik & Regulasi',
    icon: 'file-check',
    color: '#475569', // neutral
    targetId: 'ppid'
  }
];

export const NEWS_POSTS: NewsPost[] = [
  {
    id: 'post-1',
    title: 'Apel Pagi ASN Pemprov Kepri: Perkuat Disiplin dan Transformasi Digital Layanan Publik',
    type: 'Artikel',
    badgeColor: 'primary',
    date: '16 Oct 2026 08:30',
    snippet: 'Pemerintah Provinsi Kepulauan Riau melaksanakan apel pagi rutin di Lapangan Kantor Gubernur Dompak, menegaskan komitmen percepatan SPBE dan pelayanan publik ramah pulau.',
    imageUrl: '/images/news-apel.jpg',
    slug: 'apel-pagi-asn-pemprov-kepri-2026'
  },
  {
    id: 'post-2',
    title: 'Peningkatan Frekuensi Penyeberangan Roro Tanjung Uban - Batam Jelang Akhir Pekan',
    type: 'Galeri',
    badgeColor: 'success',
    date: '15 Oct 2026 14:15',
    snippet: 'Dokumentasi kesiapan armada KMP Barau dan dermaga bergerak ASDP untuk mengantisipasi lonjakan arus penumpang dan distribusi logistik antar-pulau.',
    imageUrl: '/images/news-roro.jpg',
    slug: 'peningkatan-frekuensi-roro-batam-bintan'
  },
  {
    id: 'post-3',
    title: 'Pameran Produk Unggulan UMKM dan Kerajinan Songket Melayu Kepri Digelar di Dompak',
    type: 'Artikel',
    badgeColor: 'primary',
    date: '12 Oct 2026 10:20',
    snippet: 'Ratusan pelaku UMKM binaan Disperindag Kepri memamerkan olahan kuliner kerupuk gonggong, madu hutan kelulut, dan wastra songket tenun khas Bintan-Lingga.',
    imageUrl: '/images/news-umkm.jpg',
    slug: 'pameran-produk-umkm-songket-kepri'
  },
  {
    id: 'post-4',
    title: 'Rapat Koordinasi Musrenbang RKPD Kepri 2027: Integrasi Konektivitas Gugusan Maritim 3T',
    type: 'Artikel',
    badgeColor: 'primary',
    date: '08 Oct 2026 09:45',
    snippet: 'Pemerintah Daerah bersama Bappeda memprioritaskan peningkatan dermaga perintis di Natuna, Anambas, dan Lingga guna memastikan kelancaran rantai pasok.',
    imageUrl: '/images/hero-kepri.jpg',
    slug: 'musrenbang-rkpd-kepri-2027'
  },
  {
    id: 'post-5',
    title: 'Dokumentasi Penyaluran Program Beasiswa Putra-Putri Daerah Terluar di Natuna',
    type: 'Galeri',
    badgeColor: 'success',
    date: '03 Oct 2026 11:10',
    snippet: 'Pemberian apresiasi beasiswa perguruan tinggi untuk mahasiswa berprestasi dan jalur afirmasi pulau 3T tahun anggaran 2026.',
    imageUrl: '/images/news-apel.jpg',
    slug: 'penyaluran-beasiswa-natuna-2026'
  },
  {
    id: 'post-6',
    title: 'Sosialisasi e-Samsat Bebas Denda PKB: Pembayaran Pajak Kini Bisa dari Ponsel',
    type: 'Artikel',
    badgeColor: 'primary',
    date: '28 Sep 2026 15:30',
    snippet: 'Bapenda Kepri mengajak masyarakat memanfaatkan kanal QRIS dan e-TBPKP digital tanpa perlu mengantre di kantor Samsat.',
    imageUrl: '/images/news-roro.jpg',
    slug: 'sosialisasi-esamsat-bebas-denda'
  }
];

export const UMKM_PRODUCTS: UmkmItem[] = [
  {
    id: 'u-1',
    name: 'Kain Tenun Songket Melayu Bintan',
    category: 'Kerajinan Tangan',
    origin: 'Bandar Seri Bentan, Bintan',
    price: 'Rp 650.000',
    rating: 4.9
  },
  {
    id: 'u-2',
    name: 'Kerupuk Ikan Tenggiri & Gonggong Super',
    category: 'Kuliner Olahan Laut',
    origin: 'Tanjungpinang',
    price: 'Rp 45.000 / bungkus',
    rating: 5.0
  },
  {
    id: 'u-3',
    name: 'Luti Gendang Ikan Khas Tarempa',
    category: 'Kuliner Tradisional',
    origin: 'Kepulauan Anambas',
    price: 'Rp 70.000 / box (20 pcs)',
    rating: 4.9
  },
  {
    id: 'u-4',
    name: 'Madu Hutan Asli Natuna',
    category: 'Herbal & Kesehatan',
    origin: 'Ranai, Natuna',
    price: 'Rp 120.000 / botol',
    rating: 4.8
  }
];

export const APBD_DATA: ApbdBreakdown = {
  fiscalYear: '2026',
  pendapatan: 'Rp 4.382.500.000.000',
  belanja: 'Rp 4.450.800.000.000',
  pembiayaan: 'Rp 68.300.000.000',
  items: [
    { label: 'Pendapatan Asli Daerah (PAD)', target: 'Rp 1.750 M', realisasi: 'Rp 1.580 M', percentage: 90.2, color: '#16a34a' },
    { label: 'Dana Transfer Pusat (TKD)', target: 'Rp 2.632 M', realisasi: 'Rp 2.410 M', percentage: 91.5, color: '#0284c7' },
    { label: 'Belanja Operasi & Pegawai', target: 'Rp 1.950 M', realisasi: 'Rp 1.620 M', percentage: 83.0, color: '#f59e0b' },
    { label: 'Belanja Modal & Infrastruktur Maritim', target: 'Rp 1.480 M', realisasi: 'Rp 1.250 M', percentage: 84.4, color: '#0d9488' },
    { label: 'Belanja Bantuan Sosial & Tak Terduga', target: 'Rp 420 M', realisasi: 'Rp 365 M', percentage: 86.9, color: '#e11d48' }
  ]
};

export const PUBLIC_SERVICES = [
  {
    id: 'layanan-surat',
    name: 'Layanan Mandiri Surat Warga (IKD Terpadu)',
    category: 'surat',
    description: 'Pengajuan surat keterangan domisili, rekomendasi beasiswa, dan verifikasi identitas kependudukan digital secara mandiri.',
    opd: 'Disdukcapil & Diskominfo Kepri',
    status: 'Online',
    duration: '1 x 24 Jam',
    cost: 'Gratis 100%',
    requirements: ['NIK e-KTP Kepri', 'Nomor Kartu Keluarga', 'Nomor WhatsApp Aktif']
  },
  {
    id: 'esamsat',
    name: 'e-Samsat Kepri (Info Pajak Kendaraan)',
    category: 'pajak',
    description: 'Cek tagihan PKB, pembebasan denda (pemutihan), dan penerbitan kode bayar QRIS / Bank secara online.',
    opd: 'Bapenda Provinsi Kepulauan Riau',
    status: 'Online',
    duration: '5 - 10 Menit',
    cost: 'Gratis Biaya Admin',
    requirements: ['Plat Nomor BP', '5 Digit Nomor Rangka Terakhir', 'KTP Pemilik']
  },
  {
    id: 'roro',
    name: 'Sistem Informasi Kapal Roro & Pelayaran',
    category: 'transportasi',
    description: 'Pantauan live jadwal roro Tanjung Uban - Telaga Punggur, kapal ferry Sri Bintan Pura, dan kapal perintis.',
    opd: 'Dinas Perhubungan Provinsi Kepri',
    status: 'Online',
    duration: 'Real-time 24 Jam',
    cost: 'Gratis Akses Informasi',
    requirements: ['KTP / Identitas Tiket']
  },
  {
    id: 'beasiswa',
    name: 'Beasiswa Mahasiswa Pemprov Kepri 2026',
    category: 'pendidikan',
    description: 'Program beasiswa afirmasi mahasiswa berprestasi, DTKS, dan pulau 3T (Natuna, Anambas, Lingga).',
    opd: 'Biro Kesra Setda Provinsi Kepri',
    status: 'Online',
    duration: 'Sesuai Gelombang Seleksi',
    cost: 'Gratis',
    requirements: ['KTP & KK Kepulauan Riau', 'Surat Aktif Kuliah', 'Transkrip Nilai / SKTM']
  },
  {
    id: 'rsud',
    name: 'Antrean Poliklinik RSUD Raja Ahmad Tabib',
    category: 'kesehatan',
    description: 'Reservasi dokter spesialis, cek ketersediaan tempat tidur (SIRANAP), dan informasi farmasi rumah sakit rujukan.',
    opd: 'RSUD Raja Ahmad Tabib Kepri',
    status: 'Online',
    duration: 'Instan',
    cost: 'Gratis (Sesuai BPJS/Umum)',
    requirements: ['Nomor BPJS / NIK', 'Surat Rujukan FKTP']
  },
  {
    id: 'lapor',
    name: 'SP4N-LAPOR! Pengaduan & Aspirasi',
    category: 'sosial',
    description: 'Kanal resmi penyampaian aspirasi, jalan rusak, fasilitas pelabuhan, dan pengawasan birokrasi daerah.',
    opd: 'Inspektorat Daerah & Diskominfo Kepri',
    status: 'Online',
    duration: 'SLA Respon 1 - 3 Hari',
    cost: 'Gratis',
    requirements: ['NIK Pelapor (Terlindungi Rahasia)', 'Foto & Lokasi Kejadian']
  }
];
