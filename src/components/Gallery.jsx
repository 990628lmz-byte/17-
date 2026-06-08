import { motion } from 'framer-motion';

const imgBase = '/images/ppt-media';

const galleryItems = [
  {
    title: '赛事实战',
    desc: '狭路相逢勇者胜，实力才是一切的基石',
    photos: [`${imgBase}/image46.jpeg`, `${imgBase}/image48.jpeg`],
  },
  {
    title: '郑州大剧院观剧',
    desc: '学会鉴赏，是点燃艺术创造力的启蒙第一步',
    photos: [`${imgBase}/image50.jpeg`],
  },
  {
    title: '话剧的魅力',
    desc: '当大幕落下，心底的表演之火却愈燃愈烈',
    photos: [`${imgBase}/image51.jpeg`],
  },
  {
    title: '开心麻花即兴喜剧',
    desc: '即兴的魅力，你永远猜不到下一秒',
    photos: [`${imgBase}/image52.jpeg`, `${imgBase}/image53.jpeg`],
  },
  {
    title: '露营团建',
    desc: '四月踏青赏花吃烤肉，对可乐当歌',
    photos: [`${imgBase}/image54.jpeg`, `${imgBase}/image55.jpeg`],
  },
  {
    title: '剧本杀研习',
    desc: '捕捉表演灵感，解码情绪暗流',
    photos: [`${imgBase}/image56.jpeg`, `${imgBase}/image57.jpeg`],
  },
  {
    title: '优秀学生展示',
    desc: '见证每一位学子的成长与蜕变',
    photos: [`${imgBase}/image58.jpeg`],
  },
  {
    title: '历年汇演舞台',
    desc: '23、24、25年汇演，always online',
    photos: [`${imgBase}/image59.jpeg`, `${imgBase}/image61.jpeg`],
  },
  {
    title: '奖学金',
    desc: '让所有努力都结果',
    photos: [`${imgBase}/image63.jpeg`, `${imgBase}/image65.jpeg`],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">学生风采</h2>
          <p className="section-subtitle">
            丰富的课外活动，让学生在体验中成长，在实战中突破
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 20,
          }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              style={{
                background: 'var(--bg-warm)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'var(--transition)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--card-hover-shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
              }}
            >
              {/* Photo area */}
              <div style={{
                minHeight: 220,
                display: 'flex',
                overflow: 'hidden',
                background: '#1a1a1a',
                alignItems: 'center',
              }}>
                {item.photos.slice(0, 2).map((photo, j) => (
                  <div key={j} style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={photo}
                      alt={`${item.title} ${j + 1}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        maxHeight: 300,
                        objectFit: 'contain',
                        objectPosition: 'center',
                        transition: 'transform 0.4s ease',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 4, color: 'var(--text-dark)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: 50,
            padding: '30px 40px',
            background: 'var(--gradient-warm)',
            borderRadius: 'var(--border-radius)',
            color: '#fff',
          }}
        >
          <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            艺术生在大学还可以辅修双学位！涵盖哲学、经济学、法学、教育学等 11 个学科大类
          </p>
          <p style={{ marginTop: 8, opacity: 0.9 }}>
            国务院学位办明确规定：辅修学士学位直接写入毕业学位证书
          </p>
        </motion.div>
      </div>
    </section>
  );
}
