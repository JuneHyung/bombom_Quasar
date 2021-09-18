# Vue2 Vue3  바뀌는점

[Vue3 무엇이 바뀌나요?](https://velog.io/@bluestragglr/Vue3-무엇이-바뀌나요)

Vue 3 변경점 참고위한 위 주소 블로그의 글을 가져온 것입니다.



## 목차

- 템플릿 생성 방식의 변화
- data, method 작성 방식의 변화
- Lifecycle hook 호출의 변화
- computed 속성 사용방법의 변화
- Composition API
- props와 this 바인딩의 분리
- emit과 this 바인딩의 분리
- Suspended Component
- Fragment
- Portal
- 내부적인 변화



## 템플릿 생성 방식의 변화

Vue3부터는 여러 개의 루트 엘리먼트를 갖는 컴포넌트(Fragment)를 지원

불필요한 wrapper를 제거할 수 있는 경우의 예시로써, 라벨이 있는 input 박스를 생각해볼 수 있습니다.

```vue
 <template>
    	<div>
    		<div class="input-label">
    			{{inputLabel}}
    		</div>
    		<input type="text"/>
    	</div>
    </template>
```

div태그가 아무 기능도 수행하지 않음에도 불구하고 기존 Vue2에서는 루트 엘리먼트를 하나로 유지하기 위해 유지하여야 했지만, Vue3에서는 이를 선택할 수 있습니다.

여러 개의 루트 엘리먼트를 사용하는 것을 권장하는 것은 아닙니다.

템플릿에서 데이터를 호출하는 방식도 조금씩 변경되었습니다. <br/>기존에는 props나 method 등을 구분없이 이름만으로 호출할 수 있도록 동작하였는데, 이제는 문맥상으로 이런 것들을 조금 분리할 수 있게 되었습니다.

`inputLabel` 이라는 변수(prop인지 data인지 function인지 몰랐던 무언가)를 호출하는 방식은 아래와 같이 변화합니다.

```vue
 <template>
	<div>
        <div class="input-label">
            <!--{{inputLabel}}-->
            {{state.inputLabe}}
         </div>
    	 <input type="text"/>
     </div>
</template>
```

 props, data, method를 다루는 방식에서의 변화와 밀접하게 연관



## data, method 작성 방식의 변화

data, method 등의 선언이 전부 setup이라는 메소드 안으로 편입되었습니다

기존 Vue2

```javascript
export default {
    props: {
        title: String
    },
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login () {
            // login method
        }
    }
}
```

Vue3

```vue
export default {
      props: {
        title: String
      },
      setup () {
        const state = reactive({
          username: '',
          password: ''
        })
    
        const login = () => {
          // login method
        }
        return { 
          login,
          state
        }
      }
    }
```

props와 setup이 같은 계층에 존재하고, data는 state로, method 들은 각각의 기명함수로 작성되어 한번에 반환되도록 변화하였습니다.

state의 경우에도 그냥 선언하는 것이 아니라, vue reactive를 사용하게 되었습니다.<br/> Reactive(반응형)는 Vue가 반응형 시스템을 유지하기 위해서 사용하는 간단한 JavaScript 객체입니다.<br/>참고 : https://kr.vuejs.org/v2/guide/reactivity.html



## Lifecycle hook 호출의 변화

 Vue3에서는 다른 변화들과 같이 lifecycle hook 또한 setup 내부에서 선언하도록 하였습니다. <br/>기존에 존재하던 lifecycle hook의 종류는 거의 그대로 유지됩니다.

```vue
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'
    
    export default {
      setup() {
        onBeforeMount(() => {
          // ... 
        })
        onMounted(() => {
          // ... 
        })
        onBeforeUpdate(() => {
          // ... 
        })
        onUpdated(() => {
          // ... 
        })
        onBeforeUnmount(() => {
          // ... 
        })
        onUnmounted(() => {
          // ... 
        })
        onActivated(() => {
          // ... 
        })
        onDeactivated(() => {
          // ... 
        })
        onErrorCaptured(() => {
          // ... 
        })
      }
    }
```

const 등으로 선언했던 state나 method들과는 달리 lifecycle hook은 return할 필요가 없습니다.<br/> 이는 작성 구조만 보아도 명료하게 알 수 있습니다. <br/>각각의 함수는 실행되는 것이지 반환되는 값이나 함수 자체를 변수에 할당하는 것이 아니므로, 따로 return하여 setup의 return으로써 포함시킬 필요가 없습니다.



## Computed 속성 사용의 변화

이제 별도 옵션이 아닌, state 선언문 내에 computed 속성에 대한 선언 구문을 추가하는 방식으로 변경됩니다. 

```vue
export default {
    // .. 
    computed: {
        lowerCaseUsername () {
        	return this.username.toLowerCase()
        }
    }
}
```

Vue3

```vue
import { reactive, computed } from 'vue'
    
export default {
    props: {
    	title: String
    },
    setup () {
    	const state = reactive({
            username: '',
            password: '',
            lowerCaseUsername: computed(() => state.username.toLowerCase())
		})

    // ...
}
```

기존의 컴포넌트 중 computed가 필요한 컴포넌트는 상당히 소수임에도 불구하고 모든 컴포넌트는 옵션으로써 computed를 작성하는 순간 별도의 import 없이 동작하였습니다.<br/>Vue 3에서는 이러한 변화를 수정하고자 하여 computed나 lifecycle hook 등 다양한 옵션들을 함수 형태로 동작하도록 변경하였습니다.



## Composition API

이 API는 컴포넌트를 선언하고 조립하기 위한 새로운 API입니다. 

기존의 Vue는 Options API라는 것을 사용하고 있습니다. data, computed, methods 등을 사용할 수 있는 API입니다.<br/>Options API는 굉장히 직관적이고 많은 사람들이 좋아하는 부분이었지만, (앞서 언급한 것처럼) 컴포넌트의 크기가 커졌을 때 유지보수가 굉장히 어려워진다는 문제를 야기했습니다

```vue
import { reactive, computed } from 'vue'
    
export default {
    props: {
    	title: String
    },
    setup () {
    	const state = reactive({
    	username: '',
    	password: '',
    	lowerCaseUsername: computed(() => state.username.toLowerCase())
    })

    const changeName = (name) => {
    	state.username = name
    }
}
```



코드를 좀 더 자세히, 하나씩 읽어 봅시다.

```javascript
    import { reactive, computed } from 'vue'
```

Composition API는 Vue의 **핵심 기능들을 전부 import하는 대신 직접 선택하여 import할 수 있도록 해줍니다**. 사용하기 위한 핵심 기능을 우선 import합니다.

```javascript
    export default {
       setup() {
```

**setup 메소드는 Composition API의 핵심**입니다. 단어 그대로 **컴포넌트의 기능들을 조립(compose)하는 역할**을 합니다. setup 안에 (앞의 예시들처럼) lifecycle hook을 걸거나 **반응형 데이터 바인딩, computed 사용 등을 할 수 있습니다.** **마지막에는 꼭 return!**

```javascript
    const state = reactive({
          username: '',
          password: '',
          lowerCaseUsername: computed(() => state.username.toLowerCase())
        })
```

**컴포넌트 내부에서 사용하기 위한 상태에 대한 값으로써 data를 선언하는 대신 state를 선언**하고 (이름은 바뀔 수 있습니다.) reactive object로 초기화합니다. computed 속성도 함께 작성합니다.

```javascript
    const changeName = (name) => {
    	state.username = name
    }
```

함수도 위와 같이 선언합니다. 이제 **state 등을 호출할 때 this 바인딩이 필요하지 않습니다**.

```javascript
    return { 
    	state, 
    	changeName
    };
```

**마지막에 setup의 return에 포함시켜 줍니다.**

조금 더 자세한 실습을 원한다면 https://learnvue.co/2019/12/a-first-look-at-vue3-a-vue-composition-api-tutorial/ 에 있는 과정을 따라해 보는걸 추천합니다!



## props와 this 바인딩의 분리

props에 접근하는 방법도 조금 변경

기존에는 아래와 같이 this의 하위 요소로써 prop을 직접 호출

```vue
mounted () {
	console.log('title: ' + this.title)
}
```

변경된 문법

```vue
 setup (props) {
    // ...
    onMounted(() => {
    	console.log('title: ' + props.title)
    })
    // ...
}
```

mounted 라이프사이클 훅은 setup 안에 포함

etup은 props를 사용하기 위해서 props를 attribute로 받아야 합니다.



## emit과 this 바인딩의 분리

emit도 props와 마찬가지로 this에 더이상 바인드되지 않습니다.

setup 함수의 attribute로써 호출할 수 있습니다.

기존 코드

```vue
login () {
    this.$emit('login', {
        username: this.username,
        password: this.password
    })
}
```



변경된 문법

```vue
 setup (props, { emit }) {
        // ...
    
        const login = () => {
          emit('login', {
            username: state.username,
            password: state.password
          })
        }
    
        // ...
    }
```



## Suspended Component

리액트에서 지원하던 컴포넌트 종류중의 하나

컴포넌트 내에 있는 async 구문이 완료되지 않았을 때, fallback template를 대신 표시하도록 할 수 있습니다. 문법은 아래와 같습니다.

```vue
<Suspense>
    <template #default>
<UserProfile />
<FunnyCats /> 
    </template>
    <template #fallback>
<div>Loading...</div>
    </template>
</Suspense>
```



## Fragment

Vue3에서는 루트 엘리먼트가 여러 개인 컴포넌트 또한 지원합니다. 

기존에는 `table` 안에 들어가는 `td` 두 개를 하나의 컴포넌트로 묶어 사용하는 것 등이 불가능했습니다. 특별한 문법은 없으며, 아래와 같이 그냥 기존 컴포넌트 생성하듯 생성하되 `<Fragment>`로 감싸 사용하면 됩니다.

```vue
<Fragment>
    <td>Hello</td>
    <td>World</td>
</Fragment>
```



## Portal

리액트에서 사용하는 포탈 컴포넌트도 지원할 예정

내부 컨텐츠를 포탈 타겟 컴포넌트로 옮기는 컴포넌트입니다. 



## 기타 내부적인 변화

내부적으로도 구조에 변화가 있음.

- 렌더링 트리 최적화

  Vue는 dynamic/static component를 구분하기로 했습니다. 

```vue
<template>
	<div>
        <p class="text">Lorem Ipsum</p>
        <p v-if="ok">
    		<span>Lorem Ipsum</span>
            <span>{{message}}</span>
    	</p>
    </div>
</template>
```



```vue
<p v-if="ok">
    <span>Lorem Ipsum</span>
    <span>{{message}}</span>
</p>
```

위 부분을 제외하고는 static한 코드

노란색도 message를 제외하면 정적인 코드만 존재함.



### 변경

완전히 static한 코드가 되는 단위로 컴포넌트를 묶습니다

노드는 static 컴포넌트와 dynamic 컴포넌트를 구분하게 되며, dynamic 코드 블럭이 영향을 받아 다시 렌더링할 때 static 컴포넌트에 접근하지 않아도 되므로, runtime을 줄일 수 있을 것으로 기대하고 있습니다.





## 참고

[Vue3 무엇이 바뀌나요?](https://velog.io/@bluestragglr/Vue3-무엇이-바뀌나요)