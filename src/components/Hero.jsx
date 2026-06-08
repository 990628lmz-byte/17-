import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
      }}
    >

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.3rem',
              fontWeight: 300,
              letterSpacing: 8,
              marginBottom: 20,
            }}
          >
            播音主持 · 影视表演 · 音乐
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: 'spring', stiffness: 100 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 16,
              textShadow: '0 4px 30px rgba(0,0,0,0.2)',
            }}
          >
            十七艺术传媒
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: 700,
              color: 'var(--accent-light)',
              marginBottom: 12,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            十七而励 · 征途无惧
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.05rem',
              maxWidth: 560,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}
          >
            中传/上戏/米兰斯卡拉大剧院名师亲授<br />
            小班教学 · 全真模拟考 · 助力艺考梦想
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                background: '#fff',
                color: 'var(--primary)',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: 'none',
                borderRadius: 50,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'var(--transition)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
              }}
            >
              立即咨询
            </a>
            <a
              href="#majors"
              style={{
                display: 'inline-block',
                padding: '16px 48px',
                background: 'transparent',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: '2px solid rgba(255,255,255,0.7)',
                borderRadius: 50,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.15)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              了解专业
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
