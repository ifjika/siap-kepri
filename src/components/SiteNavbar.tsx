'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  House,
  Landmark,
  Newspaper,
  Images,
  Video,
  MapPin,
  ShoppingBag,
  Wallet,
  BarChart3,
  FileText,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function SiteNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'info' | 'trans' | null>(null);

  const toggleDropdown = (key: 'info' | 'trans') => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Drawer Aside */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 100,
          width: '18rem',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease-in-out'
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderBottom: '1px solid var(--color-base-300)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Image
              src="/images/logo-kepri.jpg"
              alt="Logo Kepri"
              width={34}
              height={34}
              style={{ borderRadius: '50%', objectFit: 'contain' }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-primary)' }}>
                Siap Kepri
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-base-content-muted)' }}>
                Website Resmi Pemprov Kepri
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            style={{ padding: '0.35rem', color: 'var(--color-base-content)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Nav Items */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <a
            href="#"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.65rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <House size={16} /> Beranda
          </a>
          <a
            href="#profil"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.65rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <Landmark size={16} /> Profil Kepri
          </a>

          <div style={{ padding: '0.75rem 0.75rem 0.25rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-base-content-muted)', fontWeight: 700 }}>
            Informasi
          </div>
          <a
            href="#berita"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <Newspaper size={16} /> Artikel & Berita
          </a>
          <a
            href="#berita"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <Images size={16} /> Galeri Foto
          </a>
          <a
            href="#peta"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <MapPin size={16} /> Lokasi & Peta Wilayah
          </a>
          <a
            href="#umkm"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <ShoppingBag size={16} /> Katalog UMKM
          </a>

          <div style={{ padding: '0.75rem 0.75rem 0.25rem', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-base-content-muted)', fontWeight: 700 }}>
            Transparansi & Layanan
          </div>
          <a
            href="#transparansi"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <Wallet size={16} /> APB Daerah (APBD)
          </a>
          <a
            href="#statistik"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <BarChart3 size={16} /> Statistik Kepri
          </a>
          <a
            href="#layanan"
            className="menu-item-link"
            style={{ color: 'var(--color-base-content)', padding: '0.5rem 0.75rem' }}
            onClick={() => setSidebarOpen(false)}
          >
            <ShieldCheck size={16} /> Layanan Publik Mandiri
          </a>
        </nav>
      </aside>

      {/* Sticky Top Navbar */}
      <header className="site-navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="btn btn-ghost"
            style={{ display: 'flex', alignItems: 'center', color: '#ffffff', padding: '0.4rem' }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Buka Menu Navigasi"
          >
            <Menu size={22} />
          </button>

          {/* Brand */}
          <a href="#" className="brand-wrapper">
            <Image
              src="/images/logo-kepri.jpg"
              alt="Logo Resmi Provinsi Kepulauan Riau"
              width={38}
              height={38}
              className="brand-logo"
              priority
            />
            <div>
              <h2 className="brand-title">Siap Kepri</h2>
              <p className="brand-subtitle">
                Website Resmi Pemerintah Provinsi Kepulauan Riau
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav style={{ display: 'none' }} className="lg-show-flex">
          <ul className="desktop-menu">
            <li>
              <a href="#" className="menu-item-link">
                Beranda
              </a>
            </li>
            <li>
              <a href="#profil" className="menu-item-link">
                Profil Kepri
              </a>
            </li>

            {/* Informasi Dropdown */}
            <li className="dropdown-container">
              <button
                type="button"
                className="menu-item-link"
                onClick={() => toggleDropdown('info')}
              >
                <span>Informasi</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: openDropdown === 'info' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>
              {openDropdown === 'info' && (
                <div className="dropdown-panel">
                  <a
                    href="#berita"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <Newspaper size={14} /> Artikel & Berita
                  </a>
                  <a
                    href="#berita"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <Images size={14} /> Galeri Foto
                  </a>
                  <a
                    href="#peta"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <MapPin size={14} /> Lokasi & Peta
                  </a>
                  <a
                    href="#umkm"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <ShoppingBag size={14} /> Katalog UMKM
                  </a>
                </div>
              )}
            </li>

            {/* Transparansi Dropdown */}
            <li className="dropdown-container">
              <button
                type="button"
                className="menu-item-link"
                onClick={() => toggleDropdown('trans')}
              >
                <span>Transparansi</span>
                <ChevronDown
                  size={14}
                  style={{
                    transform: openDropdown === 'trans' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }}
                />
              </button>
              {openDropdown === 'trans' && (
                <div className="dropdown-panel">
                  <a
                    href="#transparansi"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <Wallet size={14} /> APB Daerah
                  </a>
                  <a
                    href="#statistik"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <BarChart3 size={14} /> Statistik Kepri
                  </a>
                  <a
                    href="#layanan"
                    className="dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <ShieldCheck size={14} /> Layanan Mandiri
                  </a>
                </div>
              )}
            </li>

            <li>
              <a href="#layanan" className="menu-item-link">
                Layanan Publik
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href="#layanan"
            className="social-circle-btn"
            title="Cari Layanan"
            style={{ width: '2.2rem', height: '2.2rem' }}
          >
            <Search size={16} />
          </a>
        </div>
      </header>

      <style jsx>{`
        @media (min-width: 1024px) {
          .lg-show-flex {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
