# Vue3 사용시 주의

## Vue 이벤트 버스 사용을 피한다.

### vue3에서 사라진 `$on` / `$once` / `$off` API를 사용하지 않는다

Vuex를 쓰는 것을 추천



## 필터 함수를 메서드로 리팩토링한다.

[RFC 문서](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0015-remove-filters.md)에 따르면 필터는 제거될 예정이라고 한다.



## 커스텀 컴포넌트의 `model`을 `.sync`로 리팩토링한다.

[RFC 문서](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0011-v-model-api-change.md)에 따르면 Vue 3는 Vue 컴포넌트에서 `model` 옵션이 없어지고, `sync`를 사용하지 않아도 `v-model`을 여러 개 정의할 수 있다. *(역자: Vue 2에서는 양방향 바인딩을 위해 오직 하나의 `v-model`만 정의할 수 있다. 그래서 대안책으로 `.sync`를 사용하였으나, Vue 3에서는 `v-model`을 여러 번 정의할 수 있다.)*

```javascript
// 전

// 부모 component
<child-component v-model="visible"/>

// 자식 component의 model 옵션
<script>
{
  model: {
    prop: 'visible',
    event: 'change'
  }
}
</script>
// 후

// 부모 component
<child-component v-bind:visible.sync="visible"/>

// 자식 component에서 model 옵션을 제거한다.
```



## 써드 파티 플러그인 사용을 주의한다.

 Vue는 사용자가 자신만의 플러그인을 만들 수 있도록 API를 제공한다.

하지만 특정 플러그인은 더는 Vue 3에서 호환이 되지 않을 예정

플러그인의 설치와 앱 초기화를 Vue 인스턴스에서 할 수 없다는 것이다.

```javascript
// 전: Vue 2
Vue.use(myPlugin);
new Vue({/* Vue 초기화 */});

// 후: Vue 3
const app = createApp(); // Vue 초기화를 위한 새로운 메서드
app.use(myPlugin); 
```



## 컴포넌트를 작성할 때 `@vue/composition-api`를 사용한다.

컴포지션API를 손쉽게 이용할 수 있게 하고, Vue3의 핵심 메서드가 될 API도 제공

한가지 예로 defineComponent가 있다.

사실상 쓰는데는 거의 차이가 없다! 

Vue 컴포넌트는 이전과 동일하게 동작하며 심지어 컴포지션 API를 이용하여 리팩토링할 수 있는 "보너스"를 얻었다.

```vue
// setup()을 이용한 리팩토링
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'my-component',
  setup (props) {
    /* props, data, methods, ... */
  }
});
```



## 그 밖에

아래는 또 다른 주요한 변화이다.

- [렌더 함수 API 변경](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md)
- [범위가 있는 슬롯(scoped slot)과 일반 슬롯(slot)의 통합](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0006-slots-unification.md)
- [keyCode 수식어(modifier) 제거](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0014-drop-keycode-support.md)
- [인라인 템플릿 제거](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0016-remove-inline-templates.md)



## 출처

https://ui.toast.com/weekly-pick/ko_20200804

