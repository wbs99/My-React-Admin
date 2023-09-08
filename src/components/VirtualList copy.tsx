import React, { useEffect, useRef, useState } from "react"

type Props = {
  list: { key: number; text: string }[]
}

const HEIGHT = 30
export const VirtualList = (props: Props) => {
  const { list } = props

  const container = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(0)
  const [visibleList, setVisibleList] = useState<Props['list']>([])
  const [viewTransform, setViewTransform] = useState('translate3d(0,0,0)')

  useEffect(() => {
    if (!container.current) return
    const viewHeight = container.current.clientHeight || 500  // 可视区域高度
    const end = start + Math.ceil(viewHeight / HEIGHT)  // 可视区域元素个数
    setVisibleList(list.slice(start, end))
  }, [])

  const palceholderHeight = props.list.length * HEIGHT

  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (!container.current) return
    const scrollTop = e.currentTarget.scrollTop  // 滚动的距离
    const viewHeight = container.current.clientHeight || 500  // 可视区域高度
    const start = Math.floor(scrollTop / HEIGHT)
    const end = start + Math.ceil(viewHeight / HEIGHT)
    setVisibleList(list.slice(start, end))
    setStart(start)
    setViewTransform(`translate3d(0,${start * HEIGHT}px,0)`)
  }

  return (
    <div ref={container} className='h-100% max-h-100% relative overflow-auto' onScroll={onScroll}>
      <div className='absolute top-0 left-0 right-0 z--1' style={{ height: palceholderHeight }}></div>
      <div className='absolute top-0 left-0 right-0' style={{ transform: viewTransform }}>
        {visibleList!.map(item => <div className='text-24px' style={{ height: HEIGHT }} key={item.key}>
          {item.key}
        </div>)}
      </div>
    </div>
  )
}