import type { Metadata } from 'next';
import './globals.css';
import { PortalProvider } from '@/context/PortalContext';

export const metadata: Metadata = {
  title: 'SiapKepri - Sistem Informasi dan Aplikasi Publik Kepri',
  description:
    'Portal Terpadu Pelayanan Publik, Administrasi Kependudukan, e-Samsat Pajak Daerah, Jadwal Kapal Roro, Beasiswa Daerah, dan Transparansi APBD Pemerintah Provinsi Kepulauan Riau.',
  keywords: [
    'SiapKepri',
    'Pemprov Kepri',
    'Kepulauan Riau',
    'Layanan Publik Kepri',
    'e-Samsat Kepri',
    'Jadwal Roro Tanjung Uban Batam',
    'Beasiswa Kepri 2026',
    'SP4N LAPOR Kepri',
    'Tanjungpinang',
    'Batam',
    'Bintan',
    'Karimun',
    'Natuna',
    'Anambas',
    'Lingga'
  ],
  authors: [{ name: 'Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau' }],
  openGraph: {
    title: 'SiapKepri - Portal Resmi Layanan Publik Provinsi Kepulauan Riau',
    description:
      'Akses terpadu seluruh layanan digital, perizinan maritim, jadwal kapal roro, dan pengaduan warga se-Kepri.',
    url: 'https://siapkepri.kepriprov.go.id',
    siteName: 'SiapKepri',
    locale: 'id_ID',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <PortalProvider>
          {children}
        </PortalProvider>
      </body>
    </html>
  );
}
