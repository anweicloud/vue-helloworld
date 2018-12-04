### 环境
1. Nodejs
2. Npm
3. VS Code

### 依赖
```
npm init
npm install webpack webpack-cli --save-dev
npm install vue vue-loader vue-template-compiler
npm install html-webpack-plugin
npm install css-loader style-loader url-loader file-loader
```

### 配置
- webpack.config.js
```
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',// style-loader要放在css-loader前面，否则报错
                    'css-loader',
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024, // 小于1024转为base64
                            name: 'img-[name].[ext]' // 指定输出名字
                        }
                    }
                ]
            }
        
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
}
```

- package.json
```
{
  "name": "helloworld",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.27.0",
    "webpack-cli": "^3.1.2"
  },
  "dependencies": {
    "css-loader": "^1.0.1",
    "file-loader": "^2.0.0",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "vue": "^2.5.17",
    "vue-loader": "^15.4.2",
    "vue-template-compiler": "^2.5.17"
  }
}
```

### 代码
- app.vue
```
<template>
    <h1 id="idx">{{text}}</h1>
</template>

<script>
export default {
    data() {
        return {
            text: 'Hello World'
        }
    }    
}
</script>

<style scoped>
#idx {color: #ffffff; text-align: center}
</style>
```

- index.js
```

import Vue from 'vue';
import App from './app.vue'
import './assets/css/global.css'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root)
```

- global.css
```
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

body {
    background: url(../img/timg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    font: 14px 'Helvetica';
    color: dimgrey;
    font-weight: 300;
}
```
