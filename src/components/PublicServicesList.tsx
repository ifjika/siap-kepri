'use client';

import React, { useState } from 'react';
import { PUBLIC_SERVICES } from '@/data/portalData';
import {
  FileText,
  CreditCard,
  Ship,
  GraduationCap,
  HeartPulse,
  Send,
  CheckCircle2,
  Clock,
  Coins,
  X
} from 'lucide-react';

export default function PublicServicesList() {
  const [selectedService, setSelectedService] = useState<typeof PUBLIC_SERVICES[0] | null>(null);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [nik, setNik] = useState('');
  const [nama, setNama] = useState('');
  const [keperluan, setKeperluan] = useState('');

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'surat':
        return <FileText size={22} color="#0284c7" />;
      case 'pajak':
        return <CreditCard size={22} color="#16a34a" />;
      case 'transportasi':
        return <Ship size={22} color="#0284c7" />;
      case 'pendidikan':
        return <GraduationCap size={22} color="#d97706" />;
      case 'kesehatan':
        return <HeartPulse size={22} color="#dc2626" />;
      default:
        return <Send size={22} color="#0a2540" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForm(true);
  };

  return (
    <section id="layanan" style={{ padding: '3.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <h2 className="section-heading-title">Katalog Layanan Publik Mandiri</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-base-content-muted)' }}>
              Pelayanan Administrasi Kependudukan, Perizinan, dan Pengaduan Tanpa Perlu Datang ke Kantor
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {PUBLIC_SERVICES.map((svc) => (
            <div
              key={svc.id}
              style={{
                backgroundColor: 'var(--color-base-100)',
                borderRadius: 'var(--radius-box)',
                padding: '1.5rem',
                border: '1px solid var(--color-base-300)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ padding: '0.45rem', backgroundColor: 'var(--color-base-200)', borderRadius: '0.5rem' }}>
                      {getServiceIcon(svc.category)}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-base-content-muted)' }}>
                      {svc.opd}
                    </span>
                  </div>
                  <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>
                    {svc.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--color-base-content)', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                  {svc.name}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-base-content-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {svc.description}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-base-200)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--color-base-content-muted)', marginBottom: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={13} /> {svc.duration}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700, color: 'var(--color-success)' }}>
                    <Coins size={13} /> {svc.cost}
                  </span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.55rem' }}
                  onClick={() => {
                    setSelectedService(svc);
                    setSubmittedForm(false);
                    setNik('');
                    setNama('');
                    setKeperluan('');
                  }}
                >
                  Ajukan / Gunakan Layanan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Pengajuan / Detail Layanan */}
        {selectedService && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={() => setSelectedService(null)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-box)',
                maxWidth: '560px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-base-300)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                    {selectedService.opd}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    {selectedService.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  style={{ color: 'var(--color-base-content-muted)', padding: '0.25rem' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '1.5rem' }}>
                {submittedForm ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 1rem auto' }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                      Permohonan Berhasil Dikirim!
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-base-content-muted)', marginBottom: '1.25rem' }}>
                      Nomor Registrasi: <strong>KP-SRT-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-base-content-muted)' }}>
                      Dokumen atau informasi status pelayanan akan diverifikasi oleh petugas {selectedService.opd} dalam waktu {selectedService.duration}.
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ marginTop: '1.5rem' }}
                      onClick={() => setSelectedService(null)}
                    >
                      Selesai
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div style={{ marginBottom: '1rem', backgroundColor: 'var(--color-base-200)', padding: '0.85rem 1rem', borderRadius: '0.5rem', fontSize: '0.85rem' }}>
                      <strong>Syarat Berkas:</strong>
                      <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                        {selectedService.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                          Nomor Induk Kependudukan (NIK)
                        </label>
                        <input
                          type="text"
                          required
                          pattern="[0-9]{16}"
                          placeholder="16 Digit NIK sesuai e-KTP Kepri"
                          value={nik}
                          onChange={(e) => setNik(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            border: '1px solid var(--color-base-300)',
                            borderRadius: 'var(--radius-btn)',
                            outline: 'none',
                            fontSize: '0.9rem'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                          Nama Lengkap Pemohon
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Nama sesuai KTP"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            border: '1px solid var(--color-base-300)',
                            borderRadius: 'var(--radius-btn)',
                            outline: 'none',
                            fontSize: '0.9rem'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                          Keperluan / Catatan Permohonan
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Jelaskan kebutuhan pengajuan surat / permohonan layanan..."
                          value={keperluan}
                          onChange={(e) => setKeperluan(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            border: '1px solid var(--color-base-300)',
                            borderRadius: 'var(--radius-btn)',
                            outline: 'none',
                            fontSize: '0.9rem',
                            resize: 'vertical'
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: '0.75rem', width: '100%', justifyContent: 'center' }}
                      >
                        Kirim Permohonan Mandiri
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
