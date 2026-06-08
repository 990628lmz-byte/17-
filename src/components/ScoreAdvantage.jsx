import { motion } from 'framer-motion';
import { HiChartBar, HiAcademicCap, HiStar, HiArrowUp } from 'react-icons/hi2';

const stats = [
  { icon: <HiChartBar size={36} />, value: '350+', label: '文化课分数', sub: '锁定省外二本', color: '#F47950' },
  { icon: <HiAcademicCap size={36} />, value: '500+', label: '文化课分数', sub: '冲刺双一流', color: '#E84855' },
  { icon: <HiStar size={36} />, value: '过一本线', label: '文化课分数', sub: '保底211名校', color: '#F9A826' },
  { icon: <HiArrowUp size={36} />, value: '过一本25分', label: '文化课分数', sub: '直奔985名校', color: '#FF6B6B' },
];

const advantages = [
  '分数更低 — 比起大文大理，艺考生需要的文化成绩更低',
  '名校敲门砖 — 同样的文化课分数，能上更优秀的学校',
  '就业面更广 — 大学可辅修双学位（医学类除外），就业选择更多',
  '多一条路 — 艺术类考试与普通高考填报志愿不冲突，双保险',
];

export default function ScoreAdvantage() {
  return (
    <section id="advantage" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">艺考生优势</h2>
          <p className="section-subtitle">
            2024年河南高考136万考生，62万人无缘本科。艺考，让名校不再遥远！
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            marginBottom: 60,
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--border-radius)',
                padding: '36px 24px',
                textAlign: 'center',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div style={{ color: stat.color, marginBottom: 16 }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: stat.color, lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: 8 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-medium)', marginTop: 4 }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--border-radius)',
            padding: '40px 40px',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 24, textAlign: 'center', color: 'var(--text-dark)' }}>
            为什么选择艺考？
          </h3>
          <div style={{ display: 'grid', gap: 16 }}>
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 20px',
                  background: 'var(--bg-warm)',
                  borderRadius: 12,
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: 'var(--text-medium)',
                }}
              >
                <span style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--gradient-warm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
