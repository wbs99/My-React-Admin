import { Spin } from "antd"
import React, { Suspense } from "react"

export const LazyLoad = (Comp: React.LazyExoticComponent<(props: any) => JSX.Element>): React.ReactNode => {
  return <Suspense fallback={
    <Spin size='large' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }} />
  }
  >
    <Comp />
  </Suspense>
}