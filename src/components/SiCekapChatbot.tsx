'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePortal } from '@/context/PortalContext';
import styles from './SiCekapChatbot.module.css';
import { Bot, X, Send, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm-1',
    sender: 'bot',
    text: 'Sampurasun & Salam Bahari! Saya Si-Cekap (Cerdas, Cepat, Responsif Kepri), asisten virtual resmi Pemerintah Provinsi Kepulauan Riau. Ada layanan atau informasi publik yang ingin Anda tanyakan?',
    time: '08:00'
  }
];

const PRESET_QUESTIONS = [
  'Bagaimana cara bayar pajak motor di e-Samsat?',
  'Jadwal Kapal Roro Tanjung Uban - Batam hari ini',
  'Syarat pendaftaran beasiswa Pemprov Kepri 2026',
  'Nomor telepon darurat medis Tanjungpinang & Batam',
  'Cara buat laporan pengaduan jalan rusak ke SP4N'
];

export default function SiCekapChatbot() {
  const { isChatOpen, setIsChatOpen } = usePortal();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const getCurrentTime = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('pajak') || q.includes('samsat') || q.includes('motor')) {
      return 'Untuk mengecek dan membayar Pajak Kendaraan Bermotor (PKB) online: 1. Buka fitur e-Samsat Kepri di portal SiapKepri. 2. Masukkan nomor plat BP dan 5 digit nomor rangka. 3. Kode bayar dapat dibayarkan melalui QRIS, Bank Riau Kepri Syariah, ATM, atau mobile banking tanpa perlu antre di kantor Samsat.';
    }

    if (q.includes('roro') || q.includes('kapal') || q.includes('jadwal') || q.includes('tiket')) {
      return 'Jadwal Kapal Roro rute Tanjung Uban (Bintan) - Telaga Punggur (Batam) beroperasi setiap jam mulai pukul 07.00 hingga 19.00 WIB. Tarif penumpang dewasa Rp 27.000, motor Rp 51.000, dan mobil pribadi Rp 310.000. Untuk rute pulau lain (Karimun, Natuna, Anambas) dapat dilihat di bagian tabel "Jadwal Kapal Roro" di portal ini.';
    }

    if (q.includes('beasiswa') || q.includes('kuliah') || q.includes('sekolah')) {
      return 'Beasiswa Pemprov Kepri 2026 terbuka bagi mahasiswa D3, D4, S1, dan S2 warga Kepri (memiliki KTP & KK Kepri). Jalur yang dibuka mencakup Jalur Prestasi Akademik (IPK min. 3.20), Jalur Mahasiswa Tidak Mampu (DTKS), serta Jalur Kepulauan 3T (Natuna, Anambas, Lingga). Pendaftaran 100% gratis melalui beasiswa.kepriprov.go.id!';
    }

    if (q.includes('darurat') || q.includes('112') || q.includes('telepon') || q.includes('ambulan')) {
      return 'Layanan Kedaruratan Terpadu Pemprov Kepri adalah Call Center 112 (Bebas Pulsa 24 Jam) untuk kebakaran, kecelakaan laut, medis ambulan, dan bencana alam. Untuk Basarnas Maritim Natuna hubungi (0773) 31-115, dan IGD RSUD Raja Ahmad Tabib di (0771) 7335-202.';
    }

    if (q.includes('lapor') || q.includes('jalan') || q.includes('aduan') || q.includes('sp4n')) {
      return 'Anda dapat menyampaikan aduan masyarakat melalui fitur SP4N-LAPOR! pada menu di portal ini. Lengkapi formulir laporan, sertakan foto/lokasi kejadian, dan Anda akan langsung menerima Nomor Tiket Pelacakan (contoh: KP-2026-xxxx) yang diproses dalam 1-3 hari kerja oleh dinas terkait.';
    }

    return `Terima kasih atas pertanyaannya mengenai "${query}". Tim Si-Cekap Pemprov Kepri siap memandu Anda. Untuk informasi lebih lanjut, silakan telusuri katalog layanan terpadu atau hubungi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kepri.`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      const botReplyText = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReplyText,
        time: getCurrentTime()
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isChatOpen && (
        <button
          type="button"
          className={styles.floatingButton}
          onClick={() => setIsChatOpen(true)}
          aria-label="Buka Chatbot Si-Cekap"
        >
          <div style={{ position: 'relative', width: 44, height: 44 }}>
            <Image
              src="/images/sicekap-avatar.jpg"
              alt="Avatar Si-Cekap"
              width={44}
              height={44}
              className={styles.avatarMini}
            />
          </div>
          <div className={styles.floatTextGroup}>
            <span className={styles.floatName}>Si-Cekap AI</span>
            <span className={styles.floatSub}>Asisten Warga Kepri</span>
          </div>
        </button>
      )}

      {/* Chat Window Dialog */}
      {isChatOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="Asisten Si-Cekap">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <div style={{ position: 'relative', width: 40, height: 40 }}>
                <Image
                  src="/images/sicekap-avatar.jpg"
                  alt="Avatar Si-Cekap"
                  width={40}
                  height={40}
                  className={styles.avatarHeader}
                />
              </div>
              <div>
                <div className={styles.headerTitle}>Si-Cekap Asisten</div>
                <div className={styles.headerSubtitle}>
                  <span className="pulse-indicator" style={{ width: 6, height: 6 }} />
                  <span>Siap Membantu 24 Jam</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.closeChatBtn}
              onClick={() => setIsChatOpen(false)}
              aria-label="Tutup Percakapan"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div className={styles.chatBody}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageRow} ${msg.sender === 'user' ? styles.userMessageRow : ''}`}
              >
                <div
                  className={`${styles.bubble} ${msg.sender === 'bot' ? styles.botBubble : styles.userBubble}`}
                >
                  <div>{msg.text}</div>
                  <span className={styles.timeTag}>{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Quick preset question pills */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem' }}>
                Pertanyaan Rekomendasi Warga:
              </div>
              <div className={styles.quickPrompts}>
                {PRESET_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={styles.quickPromptBtn}
                    onClick={() => handleSendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div ref={chatBottomRef} />
          </div>

          {/* Input Footer */}
          <form
            className={styles.chatFooter}
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              className={styles.chatInput}
              placeholder="Ketik pertanyaan layanan..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              className={styles.sendBtn}
              disabled={!inputText.trim()}
              aria-label="Kirim Pesan"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
