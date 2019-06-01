import Vue from 'vue';

Vue.directive('preview', {
    bind(el, binding, vnode) {
        el.addEventListener('click', () => {
            let value = binding.value;
            let div = document.createElement('div');
            div.setAttribute('class', 'fullscreen')
            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    let img = document.createElement('img');
                    img.setAttribute('class', 'fullimg')
                    img.setAttribute('src', value[i])
                    div.appendChild(img)
                }
            } else {
                let img = document.createElement('img');
                img.setAttribute('class', 'fullimg')
                img.setAttribute('src', binding.value)
                div.appendChild(img)
            }
            document.body.appendChild(div)
            div.addEventListener('click', () => {
                div.classList.add('reverse');
                setTimeout(() => {
                    document.body.removeChild(div)
                }, 400)
            })
        })
    }
})