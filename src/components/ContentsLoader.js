import React from "react"
import ContentLoader from "react-content-loader"

const ContentsLoader = (props) => (
    <ContentLoader speed={2} width="440px" viewBox="0 0 265 251" backgroundColor="#f3f3f3" foregroundColor="#ded9d9" {...props}>
        <circle cx="126" cy="134" r="80" />
    </ContentLoader>
)

export default ContentsLoader;