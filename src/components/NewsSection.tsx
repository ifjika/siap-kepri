'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NEWS_POSTS, NewsPost } from '@/data/portalData';
import { Newspaper, X } from 'lucide-react';

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsPost | null>(null);

  return (
    <section id="berita" style={{ padding: '2.5rem 0 3.5rem 0' }}>
      <div className="site-container">
        {/* Header like tigojangko */}
        <div className="section-heading-row">
          <h2 className="section-heading-title">Informasi Terbaru</h2>
          <a href="#berita" className="section-heading-link">
            Lihat semua →
          </a>
        </div>

        {/* 3-Column Card Grid */}
        <div className="news-grid">
          {NEWS_POSTS.map((post) => (
            <div
              key={post.id}
              className="news-card"
              onClick={() => setSelectedNews(post)}
              style={{ cursor: 'pointer' }}
            >
              <figure className="news-figure">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="news-thumbnail"
                />
              </figure>

              <div className="news-body">
                <div className="news-meta-row">
                  <span
                    className={`badge ${post.badgeColor === 'success' ? 'badge-success' : 'badge-primary'}`}
                  >
                    {post.type}
                  </span>
                  <span className="news-date">{post.date}</span>
                </div>

                <h3 className="news-title">{post.title}</h3>
                <p className="news-snippet">{post.snippet}</p>

                <div className="news-card-action">
                  <span className="news-read-link">Baca →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reading Article Modal */}
        {selectedNews && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={() => setSelectedNews(null)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-box)',
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: 'relative', width: '100%', height: '260px' }}>
                <Image
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#ffffff',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className={`badge ${selectedNews.badgeColor === 'success' ? 'badge-success' : 'badge-primary'}`}>
                    {selectedNews.type}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-base-content-muted)' }}>
                    {selectedNews.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem' }}>
                  {selectedNews.title}
                </h3>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-base-content-muted)', marginBottom: '1rem' }}>
                  {selectedNews.snippet}
                </p>

                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-base-content-muted)' }}>
                  Pemerintah Provinsi Kepulauan Riau berkomitmen menjaga keterbukaan informasi dan akuntabilitas kinerja setiap perangkat daerah demi tercapainya kepuasan masyarakat maritim di seluruh wilayah Kepulauan Riau.
                </p>

                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedNews(null)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
