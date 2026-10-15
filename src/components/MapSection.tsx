'use client';

import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="peta" style={{ padding: '3.5rem 0' }}>
      <div className="site-container">
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem' }}>
          Peta Wilayah Provinsi Kepulauan Riau
        </h2>

        <div
          style={{
            borderRadius: 'var(--radius-box)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-base-300)',
            backgroundColor: '#ffffff'
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020786.1368461879!2d104.05060481512497!3d0.916769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d972ea2506e2cf%3A0x3039d80b220cc70!2sRiau%20Islands!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Provinsi Kepulauan Riau"
          />
        </div>

        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.85rem',
            color: 'var(--color-base-content-muted)'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={15} style={{ color: 'var(--color-primary)' }} />
            Pusat Pemerintahan: Pulau Dompak, Tanjungpinang (0°53&apos;42&quot;N 104°28&apos;22&quot;E)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Compass size={15} style={{ color: 'var(--color-secondary)' }} />
            Luas Wilayah: 251.810 km² (96% Lautan &amp; Gugusan Pulau)
          </span>
        </div>
      </div>
    </section>
  );
}
