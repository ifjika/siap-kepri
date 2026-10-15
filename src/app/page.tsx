import SiteNavbar from '@/components/SiteNavbar';
import SiteHero from '@/components/SiteHero';
import NewsSection from '@/components/NewsSection';
import QuickServicesSection from '@/components/QuickServicesSection';
import PublicServicesList from '@/components/PublicServicesList';
import ApbdSection from '@/components/ApbdSection';
import UmkmCatalogSection from '@/components/UmkmCatalogSection';
import RegionProfileSection from '@/components/RegionProfileSection';
import MapSection from '@/components/MapSection';
import SiteFooter from '@/components/SiteFooter';
import SiCekapChatbot from '@/components/SiCekapChatbot';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* 1. Translucent Sticky Navbar with Dropdowns and Mobile Drawer */}
      <SiteNavbar />

      <main className="flex-1">
        {/* 2. Hero Section with Background, Visi, Wave SVG, & Overlapping Statistics Row */}
        <SiteHero />

        {/* 3. Informasi Terbaru (Articles & News 3-Column Grid) */}
        <NewsSection />

        {/* 4. Layanan & Informasi (5-Column Quick Action Grid like tigojangko) */}
        <QuickServicesSection />

        {/* 5. Profil Daerah Kepri (Visi Misi & 7 Kabupaten/Kota) */}
        <RegionProfileSection />

        {/* 6. Layanan Publik Mandiri (Surat & Layanan Digital Warga) */}
        <PublicServicesList />

        {/* 7. Transparansi APB Daerah 2026 */}
        <ApbdSection />

        {/* 8. Sentra Katalog UMKM & Produk Bahari */}
        <UmkmCatalogSection />

        {/* 9. Lokasi Peta Wilayah (Google Maps Embed) */}
        <MapSection />
      </main>

      {/* 10. Official 5-Column Footer */}
      <SiteFooter />

      {/* 11. Virtual Assistant Si-Cekap */}
      <SiCekapChatbot />
    </div>
  );
}
