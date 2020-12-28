import Login from './index.vue';
export default {
    install(Vue) {
        Vue.prototype.$Login = function (ops) {
            const LoginConstructor = Vue.extend(Login)

            const LoginWrap = document.createElement('div');
            LoginWrap.className = 'login-wrap';
            const LoginInstace = new LoginConstructor({
                el: LoginWrap
            })
            document.body.appendChild(LoginInstace.$el);
            console.log(ops)
        }
    }
}