import React from "react"
import ContentLoader from "react-content-loader"
import s from "./ProductBlock.module.css"

const Skeleton = () => (
    <ContentLoader className={s.productBlock}
                   speed={2}
                   width={360}
                   height={402}
                   viewBox="0 0 280 500"
                   backgroundColor="#f3f3f3"
                   foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="0" ry="0" width="280" height="170" />
        <rect x="0" y="220" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="30" />
        <rect x="0" y="355" rx="10" ry="10" width="95" height="30" />
        <rect x="125" y="350" rx="24" ry="24" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton