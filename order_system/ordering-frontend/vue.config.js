// vue cli 구성 옵션을 지정하는 파일
// transpileDependencies 옵션을 통해 의존성을 EC5 로 트랜스 FORM한다.


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
