import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMicrophone, HiVideoCamera, HiMusicalNote } from 'react-icons/hi2';

const imgBase = '/images/ppt-media';

const categories = [
  { id: 'broadcasting', label: '播音教师', icon: <HiMicrophone /> },
  { id: 'acting', label: '表演教师', icon: <HiVideoCamera /> },
  { id: 'music', label: '音乐教师', icon: <HiMusicalNote /> },
];

const teachersData = {
  broadcasting: [
    { name: '汤般若', photo: `${imgBase}/image22.jpeg`, title: '播音教师', school: '中国传媒大学 18级播音主持艺术学院', highlights: ['中传校考河南省第一', '河南省播音统考369分 省第七', '郑州日报社创刊74周年主持人', '2025巍巍亳都新春季启动仪式主持人'] },
    { name: '蒋岩', photo: `${imgBase}/image23.jpeg`, title: '播音教师', school: '央视主持人大赛北京复试前100强', highlights: ['郑州广播电视台双十佳主持人', '河南省文艺奖二等奖《逆风生长》总策划', '金鸡百花节郑州场主持人', '郑州广播电视台春晚总导演'] },
    { name: '李玉琪', photo: `${imgBase}/image24.jpeg`, title: '播音教师', school: '郑州电视台一级主持人', highlights: ['全国播音主持上岗证A证', '普通话一级甲等', '全国少年儿童播音主持中高级教师', '《小小演说家》河南赛区特邀评委'] },
    { name: '黄聪', photo: `${imgBase}/image25.jpg`, title: '播音教师', school: '河南大学硕士研究生', highlights: ['郑州电视台主持人、制片人', '郑州市宣传委部新闻处编辑报道员', '河南省老干部大学讲师', '天津经济广播《2018艺秀节》主持人'] },
  ],
  acting: [
    { name: '王首虎', photo: `${imgBase}/image29.jpeg`, title: '表演教师', school: '高校表演老师', highlights: ['2024年河南省心理剧优秀作品奖指导老师', '乌镇戏剧节第6届第8届入围作品', '2019年阿那亚戏剧节入围作品', '上海上剧场《暗恋桃花源》演员'] },
    { name: 'G老师', photo: `${imgBase}/image30.jpg`, title: '表演教师', school: '上海戏剧学院表演系', highlights: ['2017年中央电视台五四晚会', '电影《飞驰人生》参演', '2019年赴韩获"国际最佳音乐剧"大奖', '大型古装音乐剧《画皮》参演'] },
    { name: '王亚恒', photo: `${imgBase}/image31.jpeg`, title: '表演教师', school: '国家三级演员、高校表演老师', highlights: ['河南省话剧艺术中心演员', '大型话剧《红旗渠》《焦裕禄》《兵团》主演', '文华表演三等奖', '河南省"群星奖"表演二等奖'] },
    { name: '孔子权', photo: `${imgBase}/image32.jpeg`, title: '表演教师', school: '开心麻花话剧/即兴演员', highlights: ['《乌龙山伯爵》《偷心晚宴》等上百场演出', '开心麻花即兴厂牌河南区域负责人', '麻花即兴河南组演员负责人'] },
    { name: '周津旭', photo: `${imgBase}/image33.jpg`, title: '表演教师', school: '从事艺考工作三年', highlights: ['话剧《榆树下的欲望》女主', '独幕剧《莎乐美》女主', '话剧《就像长颈鹿的脖子一样长》大女主', '培育出上戏/武大/郑大等优秀学生'] },
  ],
  music: [
    { name: '王娇扬', photo: `${imgBase}/image36.jpg`, title: '声乐教师', school: '意大利米兰克劳迪奥·阿巴多音乐学院硕士', highlights: ['天津音乐学院声乐系本科', '师从米兰斯卡拉大剧院女高音歌唱家', '国家大剧院参演歌剧《岳飞》', '香港国际公开赛歌剧公开组二等奖'] },
    { name: '高钰涵', photo: `${imgBase}/image37.jpeg`, title: '声乐教师', school: '俄罗斯喀山国立音乐学院博士', highlights: ['声乐表演专业博士', '天津大剧院参演歌剧《图兰朵》', '第十届国际声乐比赛学术独唱一等奖', '俄罗斯《胜利之声》学术独唱一等奖'] },
    { name: '连恩泽', photo: `${imgBase}/image38.jpeg`, title: '钢琴教师', school: '南安普顿大学音乐表演钢琴系硕士', highlights: ['西安音乐学院音乐表演钢琴系本科', '师从英国著名钢琴家Duncan Honeybourne', '举行过四次个人钢琴独奏音乐会', '2016年与龚琳娜在人民大会堂同台'] },
    { name: '陈崧', photo: `${imgBase}/image39.jpeg`, title: '单簧管教师', school: '广西艺术学院音乐研究生', highlights: ['师从吴霜教授', '参演广西交响乐团"歌剧魅影"音乐会', '第十一届"中国—东盟音乐周"', '第三届"布菲杯"职业重奏组第三名'] },
    { name: '皮家乐', photo: `${imgBase}/image40.jpeg`, title: '小三门教师', school: '郑州大学音乐学', highlights: ['从事音乐教育7年', '教学逻辑严密，循序渐进', '因材施教，温和耐心细致', '所带学生均以优异成绩通过考试'] },
  ],
};

export default function Teachers() {
  const [activeCat, setActiveCat] = useState('broadcasting');
  const teachers = teachersData[activeCat];

  return (
    <section id="teachers" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">师资团队</h2>
          <p className="section-subtitle">
            汇聚中传/上戏/海外名校顶尖师资，一线实战经验倾囊相授
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 28px', borderRadius: 50, border: 'none',
                cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
                background: activeCat === cat.id ? 'var(--gradient-warm)' : 'var(--white)',
                color: activeCat === cat.id ? '#fff' : 'var(--text-medium)',
                transition: 'var(--transition)',
                boxShadow: activeCat === cat.id ? '0 4px 15px rgba(244,121,80,0.4)' : '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 24,
            }}
          >
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--border-radius)',
                  padding: '32px',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'var(--transition)',
                  borderTop: '3px solid var(--primary)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
              >
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  overflow: 'hidden', marginBottom: 20,
                  background: 'var(--gradient-warm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.display = 'none';
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 4, color: 'var(--text-dark)' }}>
                  {teacher.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 12 }}>
                  {teacher.school}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {teacher.highlights.map((h, j) => (
                    <div key={j} style={{
                      fontSize: '0.9rem', color: 'var(--text-medium)',
                      paddingLeft: 16, borderLeft: '2px solid var(--accent)',
                      lineHeight: 1.6,
                    }}>
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
