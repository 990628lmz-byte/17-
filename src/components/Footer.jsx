export default function Footer() {
  return (
    <footer style={{
      background: 'var(--text-dark)',
      color: 'rgba(255,255,255,0.7)',
      padding: '50px 0 30px',
      textAlign: 'center',
    }}>
      <div className="container">
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          background: 'var(--gradient-warm)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 16,
        }}>
          十七艺术传媒
        </div>
        <p style={{ marginBottom: 8, fontSize: '0.95rem' }}>
          十七而励 · 征途无惧
        </p>
        <p style={{ marginBottom: 16, fontSize: '0.9rem' }}>
          播音主持 · 影视表演 · 音乐
        </p>

        {/* Contact */}
        <div style={{
          marginBottom: 24, fontSize: '0.9rem',
          color: '#ffffff', lineHeight: 2, fontWeight: 500,
        }}>
          <p>📞 18538711815 &nbsp;|&nbsp; 📧 411893365@qq.com</p>
          <p>📍 河南省郑州市中原区中原设计谷C7一层中</p>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap',
          marginBottom: 32, fontSize: '0.9rem',
        }}>
          <a href="#hero" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>首页</a>
          <a href="#about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>关于我们</a>
          <a href="#majors" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>专业介绍</a>
          <a href="#teachers" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>师资团队</a>
          <a href="#contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>联系我们</a>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.4)',
        }}>
          © {new Date().getFullYear()} 十七艺术传媒. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
