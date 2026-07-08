import { onMounted, onUnmounted, ref } from 'vue'

export interface UseTyperOptions {
  /** 글자 타이핑 간격(ms) */
  typeDelay?: number
  /** 글자 지우기 간격(ms) */
  eraseDelay?: number
  /** 타이핑 시작 전 대기(ms) */
  preTypeDelay?: number
  /** 문장 완성 후 지우기 전 대기(ms) */
  preEraseDelay?: number
}

/**
 * vue-typer(Vue3 미지원) 대체용 타이핑 효과 composable.
 * 전달된 문장들을 순환하며 타이핑/삭제를 반복한다.
 */
export function useTyper(texts: string[], options: UseTyperOptions = {}) {
  const { typeDelay = 70, eraseDelay = 40, preTypeDelay = 70, preEraseDelay = 2000 } = options

  const typed = ref('')
  let index = 0
  let timer: number | undefined

  const schedule = (fn: () => void, delay: number) => {
    timer = window.setTimeout(fn, delay)
  }

  const type = () => {
    const target = texts[index]
    if (typed.value.length < target.length) {
      typed.value = target.slice(0, typed.value.length + 1)
      schedule(type, typeDelay)
    } else {
      schedule(erase, preEraseDelay)
    }
  }

  const erase = () => {
    if (typed.value.length > 0) {
      typed.value = typed.value.slice(0, -1)
      schedule(erase, eraseDelay)
    } else {
      index = (index + 1) % texts.length
      schedule(type, preTypeDelay)
    }
  }

  onMounted(() => {
    if (texts.length > 0) schedule(type, preTypeDelay)
  })

  onUnmounted(() => {
    window.clearTimeout(timer)
  })

  return { typed }
}
