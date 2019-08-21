const download = require("download-git-repo");

download(
  "direct:http://elb-zentao-361931552.cn-northwest-1.elb.amazonaws.com.cn:5335/raojw/XDATA-MAP",
  process.cwd() + "/git",
  {
    clone: true
  },
  err => {
    if(err) {
      console.log(err);
    }
  }
);