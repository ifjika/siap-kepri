'use client';

import React from 'react';
import { UMKM_PRODUCTS } from '@/data/portalData';
import { ShoppingBag, Star, MapPin } from 'lucide-react';

export default function UmkmCatalogSection() {
  return (
    <section id="umkm" style={{ padding: '3rem 0', backgroundColor: 'rgba(245, 158, 11, 0.05)', borderTop: '1px solid var(--color-base-300)', borderBottom: '1px solid var(--color-base-300)' }}>
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-heading-title">Katalog UMKM & Potensi Bahari</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-base-content-muted)' }}>
              Dukungan Pemerintah Daerah untuk Pengrajin Wastra & Produk Pangan Khas Kepulauan Riau
            </p>
          </div>
          <a href="#umkm" className="section-heading-link">
            Semua Produk →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {UMKM_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-box)',
                padding: '1.25rem',
                border: '1px solid var(--color-base-300)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.5rem', fontSize: '0.72rem' }}>
                  {prod.category}
                </span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-base-content)', marginBottom: '0.35rem' }}>
                  {prod.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-base-content-muted)', marginBottom: '0.75rem' }}>
                  <MapPin size={13} />
                  <span>{prod.origin}</span>
                </div>
              </div>

              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--color-base-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                  {prod.price}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.8rem', color: '#eab308' }}>
                  <Star size={14} fill="#eab308" />
                  <span style={{ fontWeight: 700, color: 'var(--color-base-content)' }}>{prod.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
