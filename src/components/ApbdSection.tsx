'use client';

import React from 'react';
import { APBD_DATA } from '@/data/portalData';
import { Wallet, TrendingUp, ShieldCheck } from 'lucide-react';

export default function ApbdSection() {
  return (
    <section id="transparansi" style={{ padding: '3.5rem 0' }}>
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-heading-title">Transparansi APB Daerah 2026</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-base-content-muted)' }}>
              Realisasi Anggaran Pendapatan dan Belanja Daerah Pemerintah Provinsi Kepulauan Riau
            </p>
          </div>
          <span className="badge badge-primary" style={{ padding: '0.4rem 0.85rem' }}>
            <ShieldCheck size={14} style={{ marginRight: 4 }} /> Terverifikasi BPK
          </span>
        </div>

        {/* Totals */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-box)', border: '1px solid var(--color-base-300)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-base-content-muted)', fontWeight: 700 }}>
              Pendapatan Daerah
            </span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-success)', marginTop: '0.25rem' }}>
              {APBD_DATA.pendapatan}
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-box)', border: '1px solid var(--color-base-300)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-base-content-muted)', fontWeight: 700 }}>
              Belanja Daerah
            </span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-info)', marginTop: '0.25rem' }}>
              {APBD_DATA.belanja}
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-box)', border: '1px solid var(--color-base-300)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-base-content-muted)', fontWeight: 700 }}>
              Pembiayaan Netto
            </span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-warning)', marginTop: '0.25rem' }}>
              {APBD_DATA.pembiayaan}
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-box)', border: '1px solid var(--color-base-300)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Rincian Alokasi Belanja & Capaian Target
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {APBD_DATA.items.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  <span>{item.label}</span>
                  <span>{item.realisasi} / {item.target} ({item.percentage}%)</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-base-200)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${item.percentage}%`,
                      height: '100%',
                      backgroundColor: item.color,
                      borderRadius: '9999px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
