'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Col 1 & 2: Info & Alamat Kantor */}
          <div>
            <div className="footer-brand-title">
              <Image
                src="/images/logo-kepri.jpg"
                alt="Logo Kepri"
                width={32}
                height={32}
                style={{ borderRadius: '50%', objectFit: 'contain' }}
              />
              <span>Siap Kepri</span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Website Resmi Pemerintah Provinsi Kepulauan Riau<br />
              Melayani dengan transparansi dan teknologi.
            </p>

            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={15} style={{ flexShrink: 0, marginTop: 3, color: 'var(--color-secondary)' }} />
                <div>
                  Gedung Sultan Mahmud Riayat Syah, Pusat Pemerintahan Provinsi Kepulauan Riau<br />
                  <span style={{ opacity: 0.6 }}>Pulau Dompak, Kota Tanjungpinang 29111</span>
                </div>
              </li>
              <li className="footer-contact-item">
                <Phone size={15} style={{ flexShrink: 0, marginTop: 3, color: 'var(--color-secondary)' }} />
                <a href="tel:0771456112" style={{ color: 'inherit' }}>
                  (0771) 456-112 / Call Center 112
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={15} style={{ flexShrink: 0, marginTop: 3, color: 'var(--color-secondary)' }} />
                <a href="mailto:diskominfo@kepriprov.go.id" style={{ color: 'inherit' }}>
                  diskominfo@kepriprov.go.id
                </a>
              </li>
              <li className="footer-contact-item">
                <Clock size={15} style={{ flexShrink: 0, marginTop: 3, color: 'var(--color-secondary)' }} />
                <span>Senin - Jumat: 08:00 - 16:00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi */}
          <div>
            <p className="footer-col-title">Navigasi</p>
            <ul className="footer-links">
              <li><a href="#">Beranda</a></li>
              <li><a href="#profil">Profil Kepri</a></li>
              <li><a href="#berita">Artikel &amp; Berita</a></li>
              <li><a href="#transparansi">APB Daerah (APBD)</a></li>
              <li><a href="#ppid">PPID</a></li>
              <li><a href="#peta">Kontak &amp; Lokasi</a></li>
            </ul>
          </div>

          {/* Col 4: Layanan */}
          <div>
            <p className="footer-col-title">Layanan</p>
            <ul className="footer-links">
              <li><a href="#statistik">Statistik Daerah</a></li>
              <li><a href="#umkm">Katalog UMKM</a></li>
              <li><a href="#layanan">Layanan Mandiri Surat</a></li>
              <li><a href="#layanan">e-Samsat Kepri</a></li>
              <li><a href="#layanan">Jadwal Kapal Roro</a></li>
            </ul>
          </div>

          {/* Col 5: Media Sosial */}
          <div>
            <p className="footer-col-title">Media Sosial</p>
            <div className="footer-social-row">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-btn"
                title="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom-bar">
          © 2026 Pemerintah Provinsi Kepulauan Riau — SiapKepri. Hak Cipta Dilindungi Undang-Undang.
        </div>
      </div>
    </footer>
  );
}
