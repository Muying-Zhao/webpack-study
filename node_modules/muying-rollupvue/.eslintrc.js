/* 
ESLint 是一个开源的 JavaScript 代码检查工具，
用于识别和报告代码模式，这些模式可能是错误、可能的问题，
或者只是代码风格的约定。
*/
module.exports = {
    /* env: 这个对象定义了代码运行的环境。 */
    "env": {
        "browser": true,//浏览器（browser）
        "es2020": true
    },
    // extends: 这个属性指定了继承的基础配置
    "extends": "plugin:vue/essential",
    //parserOptions: 这个对象定义了 ESLint 解析器的选项
    "parserOptions": {
        "ecmaVersion": 12,//ecmaVersion 设置为 12，意味着解析器将支持 ECMAScript 2021（即 ES12）的特性
        "sourceType": "module"//sourceType 设置为 module，表明代码将使用 ES6 模块语法。
    },
    /* plugins: 这个数组列出了 ESLint 使用的插件 */
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
