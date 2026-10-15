'use client';

import React from 'react';
import { FileText, BarChart2, Users, PackageOpen, FileCheck, Ship } from 'lucide-react';

export default function QuickServicesSection() {
  const items = [
    {
      id: 'portal-surat',
      title: 'Ajukan Surat',
      subtitle: 'Portal layanan mandiri',
      href: '#layanan',
      icon: <FileText size={38} color="#0284c7" />
    },
    {
      id: 'apbd',
      title: 'APB Daerah',
      subtitle: 'Transparansi anggaran',
      href: '#transparansi',
      icon: <BarChart2 size={38} color="#16a34a" />
    },
    {
      id: 'statistik',
      title: 'Statistik',
      subtitle: 'Data kependudukan',
      href: '#statistik',
      icon: <Users size={38} color="#0284c7" />
    },
    {
      id: 'umkm',
      title: 'UMKM',
      subtitle: 'Katalog Produk & Bahari',
      href: '#umkm',
      icon: <PackageOpen size={38} color="#d97706" />
    },
    {
      id: 'ppid',
      title: 'PPID',
      subtitle: 'Dokumen publik',
      href: '#ppid',
      icon: <FileCheck size={38} color="#334155" />
    }
  ];

  return (
    <section id="layanan-cepat" className="quick-services-section">
      <div className="site-container">
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>
          Layanan & Informasi
        </h2>

        <div className="quick-services-grid">
          {items.map((item) => (
            <a key={item.id} href={item.href} className="quick-service-card">
              <div className="quick-service-icon">
                {item.icon}
              </div>
              <p className="quick-service-title">{item.title}</p>
              <p className="quick-service-sub">{item.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
