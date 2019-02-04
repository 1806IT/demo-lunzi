const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/myinput'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    })
    describe('props',()=>{
        it('接收value.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: 'aaa'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.value).to.equal('aaa')
            vm.$destroy()
        })
        it('接收disabled.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('接收disabled.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled:undefined
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            expect(useElement.disabled).to.equal(false)
            vm.$destroy()
        })
        it('接收readonly.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly:true
                }
            }).$mount()
            const useElement = vm.$el.querySelector('input')
            console.log(useElement.outerHTML)
            expect(useElement.readOnly).to.equal(true)
            vm.$destroy()
        })
        it('接收error.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error:'长度不对',

                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
            const errorMessage=vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('长度不对')
            vm.$destroy()
        })
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持change事件',()=>{
            vm=new Constructor({

            }).$mount()
            const callback=sinon.fake()
            vm.$on('change',callback)
            //触发input的change
            let event =new Event('change')
            console.log(event);
            let inputElement=vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.called
        })
    })
})