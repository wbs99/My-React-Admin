import { Spin } from "antd"
import React, { Suspense } from "react"

export const LazyLoad = (Comp: React.LazyExoticComponent<(props: any) => JSX.Element>): React.ReactNode => {
  return <Suspense fallback={
    <Spin size='large'
      className="flex justify-center items-center h-100%"
    />}
  >
    <Comp />
  </Suspense>
}