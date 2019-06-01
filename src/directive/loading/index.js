import Vue from 'vue';

Vue.directive('loading', {
    bind(el, binding, vnode) {
        const bool = binding.value;
        if (bool) {
            const div = document.createElement('div');
            div.setAttribute('class', 'loading')
            div.innerHTML = `<div class="eleven">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>`
            document.body.appendChild(div)
        } else {
            const divlist = document.getElementsByClassName('loading').length;
            if(document.getElementsByClassName('loading').length!==0) {
                divlist.forEach(item => {
                    document.body.removeChild(item);
                })
            }
        }
    },
    update(el, binding, vnode) {
        const bool = binding.value;
        console.log(bool)
        if (bool) {
            const div = document.createElement('div');
            div.setAttribute('class', 'loading')
            div.innerHTML = `<div class="eleven">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>`
            document.body.appendChild(div)
        } else {
            const divlist = document.getElementsByClassName('loading');
            if(divlist.length!==0) {
                divlist[0].classList.add('hideLoading')
                setTimeout(() => {
                    document.body.removeChild(divlist[0]);
                }, 500)
            }
        }
    }
})