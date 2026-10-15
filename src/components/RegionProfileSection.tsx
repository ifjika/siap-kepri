'use client';

import React, { useState } from 'react';
import { Landmark, Compass, Award, Shield, CheckCircle } from 'lucide-react';

const DISTRICTS = [
  { name: 'Kota Tanjungpinang', status: 'Ibu Kota Provinsi', islands: '18 Pulau', focus: 'Pusat Pemerintahan Dompak & Warisan Budaya Pulau Penyengat' },
  { name: 'Kota Batam', status: 'Kawasan Perdagangan Bebas (FTZ)', islands: '371 Pulau', focus: 'Hub Industri Maritim Internasional & Galangan Kapal' },
  { name: 'Kabupaten Bintan', status: 'Kawasan Pariwisata Bahari', islands: '240 Pulau', focus: 'Sentra Resort Internasional Lagoi & Penyeberangan Roro Tanjung Uban' },
  { name: 'Kabupaten Karimun', status: 'Bumi Berazam', islands: '247 Pulau', focus: 'Perdagangan Bebas, Industri Granit, & Jalur Niaga Selat Malaka' },
  { name: 'Kabupaten Natuna', status: 'Beranda Terdepan NKRI', islands: '154 Pulau', focus: 'Laut Natuna Utara, Sentra Gas Alam Maritim, & Perikanan Tangkap' },
  { name: 'Kab. Kepulauan Anambas', status: 'Gugusan Terluar Eksotis', islands: '255 Pulau', focus: 'Taman Konservasi Wisata Bahari & Cadangan Energi Maritim' },
  { name: 'Kabupaten Lingga', status: 'Bunda Tanah Melayu', islands: '531 Pulau', focus: 'Pusat Sejarah Kesultanan Riau-Lingga & Potensi Agromaritim' }
];

export default function RegionProfileSection() {
  const [activeTab, setActiveTab] = useState<'visi' | 'wilayah'>('visi');

  return (
    <section id="profil" style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-heading-title">Profil Provinsi Kepulauan Riau</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-base-content-muted)' }}>
              Mengenal Geografis Bahari, Sejarah Melayu, dan Visi Pembangunan Berkelanjutan
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className={`btn ${activeTab === 'visi' ? 'btn-primary' : 'btn-outline-white'}`}
              style={{
                fontSize: '0.82rem',
                padding: '0.45rem 0.95rem',
                color: activeTab === 'visi' ? '#ffffff' : 'var(--color-base-content)',
                border: activeTab === 'visi' ? 'none' : '1px solid var(--color-base-300)'
              }}
              onClick={() => setActiveTab('visi')}
            >
              Visi &amp; Misi
            </button>
            <button
              type="button"
              className={`btn ${activeTab === 'wilayah' ? 'btn-primary' : 'btn-outline-white'}`}
              style={{
                fontSize: '0.82rem',
                padding: '0.45rem 0.95rem',
                color: activeTab === 'wilayah' ? '#ffffff' : 'var(--color-base-content)',
                border: activeTab === 'wilayah' ? 'none' : '1px solid var(--color-base-300)'
              }}
              onClick={() => setActiveTab('wilayah')}
            >
              7 Kabupaten &amp; Kota
            </button>
          </div>
        </div>

        {activeTab === 'visi' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: 'var(--color-base-200)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-box)',
                border: '1px solid var(--color-base-300)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Compass size={22} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Visi Pembangunan</h3>
              </div>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                &ldquo;Terwujudnya Kepulauan Riau yang Makmur, Berdaya Saing, dan Berbudaya.&rdquo;
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-base-content-muted)', lineHeight: 1.6 }}>
                Bumi Segantang Lada yang menjunjung tinggi amanah marwah Melayu, memanfaatkan anugerah geografis perairan selat strategis internasional, demi kemakmuran warga di seluruh pelosok pulau.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-base-200)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-box)',
                border: '1px solid var(--color-base-300)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Award size={22} color="var(--color-secondary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Misi Utama Daerah</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>Mewujudkan percepatan pertumbuhan ekonomi berbasis maritim, industri, dan pariwisata.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>Mewujudkan kualitas sumber daya manusia yang unggul, berdaya saing, dan berakhlak mulia.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>Memperkuat konektivitas antar pulau dan infrastruktur pelayanan publik digital terpadu (SPBE).</span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {DISTRICTS.map((dist, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-base-200)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-box)',
                  border: '1px solid var(--color-base-300)'
                }}
              >
                <span className="badge badge-primary" style={{ marginBottom: '0.35rem', fontSize: '0.7rem' }}>
                  {dist.islands}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.2rem' }}>
                  {dist.name}
                </h4>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>
                  {dist.status}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-base-content-muted)', lineHeight: 1.5 }}>
                  {dist.focus}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
