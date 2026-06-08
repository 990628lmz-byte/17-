import { motion } from 'framer-motion';
import { HiBriefcase, HiTv, HiMusicalNote, HiAcademicCap, HiGlobeAlt, HiLightBulb } from 'react-icons/hi2';

const careerData = [
  {
    icon: <HiTv size={32} />,
    title: '播音主持',
    color: '#F47950',
    jobs: ['电视台主持人', '媒体记者', '赛事解说员', '配音员', '影视编剧', '网络声音编剧', '个人IP打造', '带货主播', '品牌宣传', '媒体研究'],
  },
  {
    icon: <HiBriefcase size={32} />,
    title: '影视表演',
    color: '#E84855',
    jobs: ['剧组演员', '舞台剧表演', '话剧演员', '影视配音', '演出监督', '节目制作', '出镜记者', '广告传媒', '文艺创作', '制作公司'],
  },
  {
    icon: <HiMusicalNote size={32} />,
    title: '音乐',
    color: '#F9A826',
    jobs: ['表演艺术家', '音乐教师', '音乐制作人', '录音工程师', '编曲作曲家', '音乐治疗师', '音乐软件开发', '艺人经纪人', '音乐媒体', '跨界艺术家'],
  },
  {
    icon: <HiAcademicCap size={32} />,
    title: '教育与公职',
    color: '#FF6B6B',
    jobs: ['培训机构教师', '学校音乐/表演教师', '文化宫教师', '文化厅部门', '教育局（厅）', '各级政府部门', '宣传部', '公务员岗位'],
  },
  {
    icon: <HiGlobeAlt size={32} />,
    title: '新媒体创业',
    color: '#F47950',
    jobs: ['个人配音工作室', '独立艺术学院', '音乐培训机构', '独立音乐厂牌', '音乐流媒体策划', '在线音乐教育', '数字营销', '演艺公司'],
  },
  {
    icon: <HiLightBulb size={32} />,
    title: '新兴领域',
    color: '#E84855',
    jobs: ['AI音乐应用', 'VR虚拟演出', '音乐数据分析', '版权代理人', '音乐公关宣传', '线上音乐活动策划', '游戏音频设计', '互动媒体装置'],
  },
];

export default function Careers() {
  return (
    <section id="careers" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">就业方向</h2>
          <p className="section-subtitle">
            艺术生就业面广，传统领域与新兴领域双重保障
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          {careerData.map((career, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--border-radius)',
                padding: '32px',
                boxShadow: 'var(--card-shadow)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: career.color + '18', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: career.color,
                }}>
                  {career.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                  {career.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {career.jobs.map((job, j) => (
                  <span
                    key={j}
                    style={{
                      padding: '5px 14px',
                      background: career.color + '10',
                      borderRadius: 20,
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-medium)',
                      transition: 'var(--transition)',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = career.color;
                      e.target.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = career.color + '10';
                      e.target.style.color = 'var(--text-medium)';
                    }}
                  >
                    {job}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
