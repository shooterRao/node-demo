const fs = require('fs');
const path = require('path');
const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const static = require('koa-static');
const app = new koa();
const router = new Router();

app.use(static('./public'));

app.use(cors({
  credentials: true, // Access-Control-Allow-Credentials
}));

router.get('/', async (ctx, next) => {
  // ctx.router available
  ctx.body = 'Hello World!';
  await next();
});

router.get('/http/data', async (ctx, next) => {
  // ctx.response.status = 200
  ctx.body = {
    data: 123
  };
  await next();
});

router.get('/http/getRestful/:id', async (ctx, next) => {
  // ctx.response.status = 200
  ctx.set('Access-Control-Expose-Headers', 'token');
  ctx.set('token', '123456');
  // ctx.set('Content-Language', 'zh')
  // /:id 这种形式通过 ctx.params 来取
  console.log(ctx.params);
  ctx.body = ctx.params;
  await next();
});

router.get('/http/getQuery', async (ctx, next) => {
  // ctx.response.status = 200
  // ?id=xxx 这种形式通过 ctx.query 来取
  console.log(ctx.query);
  ctx.body = ctx.query;
  await next();
});

// 文件上传
router.post('/http/upload', async (ctx, next) => {
  const params = ctx.request.body;
  console.log(params);
  // console.log(ctx.request.files)
  // const fields = ctx.request.body.fields; // this will be undefined for file uploads
  const files = ctx.request.files || {};
  console.log(files);
  const filePaths = [];

  function writeFile(readPath, writePath) {
    return new Promise(res => {
      const reader = fs.createReadStream(readPath);
      const writer = fs.createWriteStream(writePath);
      reader.pipe(writer);
      reader.on('end', function() {
        res();
      });
    });
  }

  for (let key in files) {
    const file = files[key];
    const filePath = path.join(process.cwd(), 'public', 'img', file.name);
    const staticPath = `http://localhost:3000/img/${file.name}`;
    await writeFile(file.path, filePath);
    filePaths.push(staticPath);
  }
  ctx.body = filePaths;

  await next();
});

// 文件下载
router.get('/http/download', async (ctx, next) => {
  const filePath = path.join(process.cwd(), 'public', 'img', '江南烧酒.jpg')
  const filename = 'img'
  const reader = fs.createReadStream(filePath)
  ctx.body = reader
  ctx.set('Content-disposition', 'attachment; filename=' + `${filename}.jpg`)
  ctx.set('Content-type', 'image/jpeg')
  await next();
})

router.post('/http/download', async (ctx, next) => {
  const filePath = path.join(process.cwd(), 'public', 'img', '江南烧酒.jpg')
  const filename = 'img'
  const reader = fs.createReadStream(filePath)
  ctx.body = reader
  ctx.set('Content-disposition', 'attachment; filename=' + `${filename}.jpg`)
  ctx.set('Content-type', 'application/octet-stream')
  await next();
})


router.post('/http/formdata', async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = 'success';
  await next();
});

router.post('/http/json', async (ctx, next) => {
  console.log(ctx.request.body);
  // ctx.set("Content-Type", "application/json") // 告诉客户端返回的是 json
  ctx.response.status = 200;
  ctx.body = {
    status: '200'
  };
  await next();
});

router.put('/http/put', async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    status: '200'
  };
  await next();
});

router.del('/http/delete', async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = {
    status: '200'
  };
  await next();
});

// router.all("/*", async (ctx, next) => {
//   console.log(123)
//   // *代表允许来自所有域名请求
//   ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set("Access-Control-Allow-Headers", "*"); // 允许自定义请求header
//   // 其他一些设置...
//   await next();
// });

  router.get('/http/setCookie', async (ctx, next) => {
    // ctx.vary('Origin');
    // console.log(ctx.get('Origin'));
    const domain = ctx.get('Origin');
    console.log(domain);
    ctx.body = {
      status: '200'
    };
    ctx.cookies.set('cid', 'hello world', {
      domain: "localhost",
      maxAge: 100 * 1000,
      httpOnly: true
    })
    await next();
  })

app.use(
  koaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'DELETE'], // 需要指定'DELETE'
    formidable: {
      maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
  })
);

// app.use(router.routes())

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log(`start at http://localhost:3000`);
