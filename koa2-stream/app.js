const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const fs = require("fs");


// 返回txt buffer
router.get("/text", async (ctx, next) => {
  let { fileName } = ctx.request.query; // 提取参数
  const res = await readTXT(fileName);
  if (res) {
    res.type = 'text';
    ctx.body = res;
  }
  await next();
});

function readTXT(filePath) {
  // 创建可读流
  let data = [];
  return new Promise((res, rej) => {
    const readerStream = fs.createReadStream(`./public/${filePath}`);
    readerStream.on("data", function(chunk) {
      data.push(chunk);
    });

    readerStream.on("end", function() {
      const finalData = Buffer.concat(data);
      res(finalData);
    });

    readerStream.on("error", function(err) {
      rej(err);
    });
  });
}

// 返回图片buffer
router.get("/img", async (ctx, next) => {
  let { imgName } = ctx.request.query; // 提取参数
  const res = await readImg(imgName);
  // res 为 Buffer流
  if (res) {
    ctx.type = "jpg";
    ctx.body = res;
  }
  await next();
});

function readImg(filePath) {
  // 创建可读流
  let data = [];
  return new Promise((res, rej) => {
    const readerStream = fs.createReadStream(`./public/${filePath}`);
    readerStream.on("data", function(chunk) {
      data.push(chunk);
    });

    readerStream.on("end", function() {
      const finalData = Buffer.concat(data); // 合并Buffer
      res(finalData);
    });
  });
}

// 处理跨域
router.all("/*", async (ctx, next) => {
  // *代表允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");
  // 其他一些设置...
  await next();
});

app.use(router.routes());

app.listen(3000, () => {
  console.log(`Server is listening at 3000`);
});
