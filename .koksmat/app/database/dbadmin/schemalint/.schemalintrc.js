module.exports = {
    connection: {
      host: 'localhost',
      user: 'ps_user',
      password: 'StrongPassword',
      database: 'infocast',
      charset: 'utf8',
    },
  
    rules: {
      'name-casing': ['error', 'snake'],
      'name-inflection': ['error', 'singular'],
      'prefer-text-to-varchar': ['error'],
    },
  
    schemas: [{ name: 'public' }],
  };