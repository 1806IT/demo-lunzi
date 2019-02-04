import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './myinput.vue'

Vue.component('g-button', Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el: "#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        vf:''
    },
    methods:{
        inputChange(e){
            console.log(e)
            console.log(e.target.value)
        }
    }
})
/*
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect=chai.expect*/
/*

try{
    // 单元测试
//测试按钮含有icon
//测试button组件输入参数icon
    {
        // console.log(Button);
        const Constructor=Vue.extend(Button)
        const button=new Constructor({
            propsData:{
                icon:'setting'
            }
        })
        button.$mount('#test')
        // 动态生成按钮
        let useElement=button.$el.querySelector('use')
        console.log(useElement);
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
        button.$el.remove()
        button.$destroy()
    }
//测试button组件输入参数loading
    {
        const Constructor=Vue.extend(Button)
        const button=new Constructor({
            propsData:{
                icon:'setting',
                loading:true
            }
        })
        button.$mount()
        // 动态生成按钮
        let useElement=button.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        button.$el.remove()
        button.$destroy()
    }
// 测试button组件输入参数iconPosition
    {
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Button)
        const button=new Constructor({
            propsData:{
                icon:'loading',
                iconPosition:'right'
            }
        })
        button.$mount(div)
        let svg=button.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)
        expect(order).to.eq('2')
        button.$el.remove()
        button.$destroy()
    }
    {
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'loading',
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
//测试button的点击事件
//mock
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'loading',
            }
        })
        vm.$mount()
        let spy=chai.spy(()=>{

        })
        vm.$on('click',spy)
        let button=vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
}catch(error){
    window.errors=[error]
}finally{
    window.errors&&window.errors.forEach((error)=>{
        console.error(error.message);
    })
}
*/

