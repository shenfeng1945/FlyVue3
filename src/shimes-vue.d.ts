/** 
 * 解决ts文件中，找不到.vue文件模块报错
 * 创建该文件，告诉TS如何理解.vue文件
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}