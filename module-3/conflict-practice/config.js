// 基础配置文件 - 练习起点
module.exports = {
  app: {
    name: 'E-Commerce Platform',
    version: '1.0.0',
    port: 3000
  },

  database: {
    host: 'localhost',
    port: 5432,
    name: 'ecommerce_db',
    user: 'admin'
  }

  // 这里是冲突点 - 两个分支会在这里添加不同的配置
};
