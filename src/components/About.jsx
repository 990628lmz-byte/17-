import { motion } from 'framer-motion';
import { HiMicrophone, HiVideoCamera, HiMusicalNote } from 'react-icons/hi2';

const majors = [
  {
    icon: <HiMicrophone size={40} />,
    title: '播音主持',
    desc: '培养具备广播电视新闻传播、语言文学等能力，能担任广播电视播音与节目主持工作的复合型高级人才。',
    color: '#F47950',
  },
  {
    icon: <HiVideoCamera size={40} />,
    title: '影视表演',
    desc: '研究戏剧影视表演基础理论，掌握舞台剧、影视剧表演方法，具有影视表演、配音、舞台演出等能力。',
    color: '#E84855',
  },
  {
    icon: <HiMusicalNote size={40} />,
    title: '音乐',
    desc: '涵盖声乐、器乐、民乐、作曲等多个方向，进行音乐表演、器乐演奏、编曲作曲等全方位艺术培养。',
    color: '#F9A826',
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">关于十七艺术传媒</h2>
          <p className="section-subtitle">
            专注艺考培训，用心助力每一位学子的艺术梦想
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto 60px',
            fontSize: '1.1rem',
            color: 'var(--text-medium)',
            lineHeight: 1.9,
          }}
        >
          <p>
            十七艺术传媒深耕<strong>播音主持</strong>、<strong>影视表演</strong>、<strong>音乐</strong>三大艺考方向，
            汇聚来自<strong>中国传媒大学、上海戏剧学院、米兰斯卡拉大剧院、俄罗斯喀山国立音乐学院</strong>等
            国内外顶尖艺术学府的师资力量，以「十七而励 · 征途无惧」为核心精神，
            为每一位怀揣艺术梦想的学生提供最专业的艺考培训。
          </p>
        </motion.div>

        {/* Three Major Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 30,
          }}
        >
          {majors.map((major, i) => (
            <motion.div
              key={major.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              style={{
                background: 'var(--bg-warm)',
                borderRadius: 'var(--border-radius)',
                padding: '40px 30px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'var(--transition)',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
                e.currentTarget.style.borderColor = major.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${major.color}20, ${major.color}40)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: major.color,
                }}
              >
                {major.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12, color: 'var(--text-dark)' }}>
                {major.title}
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                {major.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
