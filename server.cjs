require('./admin-server.cjs').createServer().listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173 — 管理入口 /admin'));
