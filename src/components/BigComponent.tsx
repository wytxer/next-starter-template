'use client'

// todo 支持同时打包静态资源和 api
// todo 目前的 api 写法打包会报错

// todo 环境区分

export default function BigComponent() {
  const bigList = Array.from({ length: 332000 }, (_, i) => `Item ${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.`)

  return (
    <div>
      <h2>Big Component Loaded</h2>
      <ul>
        {bigList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
