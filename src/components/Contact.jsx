import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMapPin, HiEnvelope } from 'react-icons/hi2';
import { BsWechat } from 'react-icons/bs';
import wechatQR from '/images/qr-site.png';

const contactInfo = [
  { icon: <HiPhone size={24} />, label: '咨询电话', value: '18538711815', href: 'tel:18538711815' },
  { icon: <HiEnvelope size={24} />, label: '电子邮箱', value: '411893365@qq.com', href: 'mailto:411893365@qq.com' },
  { icon: <HiMapPin size={24} />, label: '校区地址', value: '郑州市中原区中原设计谷C7一层中', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', major: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrModal, setQrModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', major: '', message: '' });
  };

  return (
    <section id="contact" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">联系我们</h2>
          <p className="section-subtitle">
            有艺考梦想？立即咨询，获取免费专业测评和学习规划
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 50,
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-dark)' }}>
              获取更多资讯
            </h3>
            <p style={{ color: 'var(--text-light)', marginBottom: 32, lineHeight: 1.8 }}>
              无论你是对艺考充满热情的学子，还是关心孩子未来的家长，
              欢迎随时联系我们。我们的专业老师将为你提供一对一免费咨询和学业规划建议。
            </p>

            {/* Contact Info List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 20px',
                    background: 'var(--bg-warm)',
                    borderRadius: 14,
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#ffe8dd'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-warm)'}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'var(--gradient-warm)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#fff', flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#4A4A4A', fontWeight: 500 }}>{info.label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a' }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WeChat QR */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                onClick={() => setQrModal(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 20px',
                  background: 'var(--bg-warm)',
                  borderRadius: 14,
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#ffe8dd'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-warm)'}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'var(--gradient-warm)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#fff', flexShrink: 0,
                }}>
                  <BsWechat size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 500 }}>微信咨询</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>点击查看二维码</div>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'var(--bg-warm)',
              borderRadius: 'var(--border-radius)',
              padding: '40px 36px',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 24, color: 'var(--text-dark)' }}>
              免费预约咨询
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  color: 'var(--primary)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>提交成功！</div>
                <p style={{ marginTop: 8, color: 'var(--text-light)' }}>我们会尽快与您联系</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      你的姓名
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="请输入姓名"
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: 12,
                        border: '2px solid #eee', fontSize: '1rem',
                        fontFamily: 'inherit', outline: 'none',
                        transition: 'var(--transition)',
                        background: '#fff',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      联系电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="请输入手机号"
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: 12,
                        border: '2px solid #eee', fontSize: '1rem',
                        fontFamily: 'inherit', outline: 'none',
                        transition: 'var(--transition)',
                        background: '#fff',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      意向专业
                    </label>
                    <select
                      name="major"
                      value={form.major}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: 12,
                        border: '2px solid #eee', fontSize: '1rem',
                        fontFamily: 'inherit', outline: 'none',
                        transition: 'var(--transition)',
                        background: '#fff',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    >
                      <option value="">请选择专业方向</option>
                      <option value="broadcasting">播音主持</option>
                      <option value="acting">影视表演</option>
                      <option value="music">音乐（声乐/器乐）</option>
                      <option value="other">其他 / 待定</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      留言（选填）
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="请输入你想了解的内容..."
                      rows={4}
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: 12,
                        border: '2px solid #eee', fontSize: '1rem',
                        fontFamily: 'inherit', outline: 'none',
                        transition: 'var(--transition)',
                        background: '#fff',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '16px' }}
                  >
                    提交咨询
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      {qrModal && (
        <div
          onClick={() => setQrModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: 24,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 20,
              padding: '40px 36px',
              textAlign: 'center',
              maxWidth: 360,
              width: '100%',
            }}
          >
            <h3 style={{ marginBottom: 8, fontSize: '1.3rem', fontWeight: 700 }}>微信扫一扫</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: 24, fontSize: '0.9rem' }}>添加老师微信，一对一咨询</p>
            <img
              src={wechatQR}
              alt="微信二维码"
              style={{
                width: 240,
                height: 240,
                margin: '0 auto 24px',
                display: 'block',
                borderRadius: 12,
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <button
              onClick={() => setQrModal(false)}
              style={{
                padding: '12px 40px',
                borderRadius: 50,
                border: 'none',
                background: 'var(--gradient-warm)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              关闭
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
