module.exports = {
  apps: [{
    name: 'contentking',
    script: 'node_modules/vite/bin/vite.js',
    args: '',
    cwd: './',
    watch: false,
    autorestart: true,
    max_restarts: 10,
    env: {
      NODE_ENV: 'development'
    }
  }]
};



