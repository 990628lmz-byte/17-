import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMicrophone, HiVideoCamera, HiMusicalNote, HiCheckCircle } from 'react-icons/hi2';

const majorData = [
  {
    id: 'broadcasting',
    icon: <HiMicrophone size={28} />,
    title: '播音主持',
    subtitle: '广播电视播音与节目主持',
    intro: '培养具备广播电视新闻传播、语言文学等能力，能担任广播电视播音与节目主持工作的复合型应用语言学高级专门人才。',
    scope: ['播音与主持艺术', '影视配音', '电子竞技解说', '体育播音', '英汉双播', '法汉双播', '播音主持礼仪文化方向'],
    exam: [
      { name: '自备文学作品朗读', time: '1分钟', score: '100分' },
      { name: '新闻播报', time: '1分钟', score: '100分' },
      { name: '话题评述/材料评述', time: '2分钟', score: '200分' },
    ],
    totalScore: '总分 400 分',
    schoolExam: ['自备/指定稿件朗读', '模拟主持', '即兴话题评述', '才艺展示', '主题辩论'],
    advantages: [
      '一线广电主持人全程授课，倾力打造上镜美学',
      '小班授课，多对一教学服务，全方位关注学生提升',
      '全真模拟考，每月开展，严格按艺考流程评分',
      '课程多元化 — 形体、妆容打造、声乐、解放天性',
      '建立学生档案，全程记录进度，定期家长会',
      '专业心理辅导，关注学生状态，缓解升学压力',
    ],
    color: '#F47950',
  },
  {
    id: 'acting',
    icon: <HiVideoCamera size={28} />,
    title: '影视表演',
    subtitle: '戏剧影视表演与舞台艺术',
    intro: '研究戏剧影视表演基础理论，掌握现代化表演的基本技能和舞台剧、影视剧的表演方法，能够运用表演艺术的内外部技巧创造人物形象，具有影视表演、配音、舞台演出、节目主持等能力。',
    scope: ['话剧表演', '影视剧表演', '舞台剧表演', '影视配音', '节目主持', '剧场演出'],
    exam: [
      { name: '台词（自选片段）', time: '1分钟', score: '50分' },
      { name: '声乐（无伴奏）', time: '1分钟', score: '50分' },
      { name: '形体（自选舞蹈等）', time: '1分钟', score: '50分' },
      { name: '表演（即兴小品）', time: '3分钟', score: '50分' },
    ],
    totalScore: '总分 200 分',
    schoolExam: ['自备/指定稿件朗读', '即兴表演', '命题小品', '才艺展示', '形体展示'],
    advantages: [
      '大院老师、高校老师亲传专业',
      '定期大型话剧演出，以演代练，增进专业素养',
      '小班授课，多对一教学服务，全方位关注学生',
      '课程多元化 — 形体、妆容打造、声乐、镜头网感表达',
      '全真模拟考、每月开展，严格按照艺考流程评分',
      '专业心理辅导，缓解升学压力，助力艺考',
    ],
    color: '#E84855',
  },
  {
    id: 'music',
    icon: <HiMusicalNote size={28} />,
    title: '音乐',
    subtitle: '声乐 · 器乐 · 民乐 · 作曲',
    intro: '研究音乐学、音乐史、音乐行为、音乐教育等方面的基本知识和技能，涉及声乐、器乐、民乐、作曲等多个方面，进行音乐表演、器乐演奏、编曲作曲等。',
    scope: ['声乐方向', '器乐方向', '音乐教育', '作曲与编曲', '音乐学理论'],
    exam: [
      { name: '乐理', time: '笔试', score: '15分' },
      { name: '听写', time: '笔试', score: '30分' },
      { name: '视唱', time: '面试', score: '15分' },
      { name: '主项（声乐/器乐）', time: '面试', score: '165-240分' },
    ],
    totalScore: '总分 300 分',
    schoolExam: ['自选曲目演奏/演唱', '视奏/视唱', '乐理笔试', '听音模唱', '才艺加试'],
    advantages: [
      '意大利/俄罗斯/英国留学背景师资教学',
      '定期音乐厅演出，以演代练，增进专业素养',
      '小班授课，多对一教学服务，全方位关注学生',
      '课程多元化 — 形体、妆容打造、气质提升等',
      '全真模拟考、每月开展，严格按照艺考流程打分',
      '专业心理辅导，关注学生状态，定期沟通',
    ],
    color: '#F9A826',
  },
];

export default function Majors() {
  const [activeTab, setActiveTab] = useState(0);
  const major = majorData[activeTab];

  return (
    <section id="majors" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">专业介绍</h2>
          <p className="section-subtitle">
            三大王牌专业方向，总有一个适合你
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 50, flexWrap: 'wrap' }}>
          {majorData.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                borderRadius: 50,
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.05rem',
                fontWeight: 700,
                background: activeTab === i ? m.color : 'var(--bg-warm)',
                color: activeTab === i ? '#fff' : 'var(--text-medium)',
                transition: 'var(--transition)',
                boxShadow: activeTab === i ? `0 4px 20px ${m.color}50` : 'none',
              }}
            >
              {m.icon}
              {m.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={major.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Intro */}
            <div
              style={{
                background: `linear-gradient(135deg, ${major.color}10, ${major.color}25)`,
                borderRadius: 'var(--border-radius)',
                padding: '40px',
                marginBottom: 30,
                borderLeft: `4px solid ${major.color}`,
              }}
            >
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-dark)' }}>
                {major.title} — {major.subtitle}
              </h3>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                {major.intro}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {/* Scope */}
              <div style={{ background: 'var(--bg-warm)', borderRadius: 'var(--border-radius)', padding: '28px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16, color: major.color }}>
                  报考范围
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {major.scope.map((item, i) => (
                    <span key={i} style={{
                      padding: '6px 16px', background: '#fff', borderRadius: 20,
                      fontSize: '0.9rem', color: 'var(--text-medium)', fontWeight: 500,
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exam Content */}
              <div style={{ background: 'var(--bg-warm)', borderRadius: 'var(--border-radius)', padding: '28px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16, color: major.color }}>
                  统考内容
                </h4>
                {major.exam.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 0', borderBottom: i < major.exam.length - 1 ? '1px solid #eee' : 'none',
                  }}>
                    <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{item.name}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{item.time} · {item.score}</span>
                  </div>
                ))}
                <div style={{ marginTop: 12, fontWeight: 700, color: major.color, textAlign: 'right' }}>
                  {major.totalScore}
                </div>
              </div>
            </div>

            {/* School Exam */}
            <div style={{
              background: 'var(--bg-warm)', borderRadius: 'var(--border-radius)',
              padding: '28px', marginTop: 24,
            }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16, color: major.color }}>
                校考内容（以各院校为准）
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {major.schoolExam.map((item, i) => (
                  <span key={i} style={{
                    padding: '8px 18px', background: major.color + '15', borderRadius: 20,
                    fontSize: '0.9rem', color: major.color, fontWeight: 600,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div style={{ marginTop: 30 }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 20, textAlign: 'center', color: 'var(--text-dark)' }}>
                专业优势
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
                {major.advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px' }}
                  >
                    <HiCheckCircle style={{ color: major.color, marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-medium)' }}>{adv}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
