'use client';

import React from 'react';
import Image from 'next/image';
import { Landmark, FileText, Users, User, UserRound, Trophy } from 'lucide-react';
import { STATS_SUMMARY } from '@/data/portalData';

export default function SiteHero() {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className="hero-wrapper">
        <Image
          src="/images/hero-kepri.jpg"
          alt="Lanskap Maritim Kepulauan Riau"
          fill
          priority
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
        <div className="hero-radial" />

        <div className="hero-content">
          <span className="hero-welcome">Selamat Datang di</span>
          <h1 className="hero-title">
            Provinsi Kepulauan Riau
          </h1>

          <p className="hero-visi">
            "TERWUJUDNYA KEPULAUAN RIAU YANG MAKMUR, BERDAYA SAING, DAN BERBUDAYA BERDASARKAN PRINSIP PEMBANGUNAN MARITIM BERKELANJUTAN"
          </p>

          <div className="hero-cta-group">
            <a href="#profil" className="btn btn-secondary">
              <Landmark size={18} />
              <span>Profil Kepri</span>
            </a>
            <a href="#layanan" className="btn btn-outline-white">
              <FileText size={18} />
              <span>Layanan Mandiri</span>
            </a>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="var(--color-base-200)"
            />
          </svg>
        </div>
      </div>

      {/* Overlapping Population & Key Statistics Row (like tigojangko -mt-10) */}
      <div className="site-container stats-overlap-container">
        <div className="stats-grid">
          <div className="stat-box">
            <p className="stat-number" style={{ color: 'var(--color-primary)' }}>
              {STATS_SUMMARY.totalPenduduk}
            </p>
            <p className="stat-desc">
              <Users size={15} style={{ color: 'var(--color-primary)' }} />
              <span>Total Penduduk</span>
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-number" style={{ color: 'var(--color-info)' }}>
              {STATS_SUMMARY.lakiLaki}
            </p>
            <p className="stat-desc">
              <User size={15} style={{ color: 'var(--color-info)' }} />
              <span>Laki-laki</span>
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-number" style={{ color: 'var(--color-error)' }}>
              {STATS_SUMMARY.perempuan}
            </p>
            <p className="stat-desc">
              <UserRound size={15} style={{ color: 'var(--color-error)' }} />
              <span>Perempuan</span>
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-number" style={{ color: 'var(--color-success)' }}>
              {STATS_SUMMARY.skorIdm}
            </p>
            <p className="stat-desc">
              <Trophy size={15} style={{ color: 'var(--color-success)' }} />
              <span>Skor IPM (Sangat Tinggi)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
