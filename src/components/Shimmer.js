// import { ShimmerPostList } from "react-shimmer-effects-18"

const Shimmer = () => {
    return <div className="res-container">
        {Array(15).fill("").map((e, index)=> (
        <div className="shimmer-card" key={index}></div>))}
    </div>
    // return <ShimmerPostList postStyle="STYLE_FOUR" col={6} row={2} gap={20} />
}

export default Shimmer