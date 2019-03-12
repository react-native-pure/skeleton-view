import * as React from "react"
import PropTypes from "prop-types"

/**
 * @alias Skeleton.propTypes
 * @property children
 * @property renderSkeleton - 骨架的渲染
 */
type SkeletonProps = {
    children: React.Element,
    renderSkeleton?: () => React.Element
};

/**
 * Skeleton - 骨架自定义组件
 *
 * 需要作为<SkeletonView>的子组件进行使用
 * 当<SkeletonView show={true}>时会展示`renderSkeleton`里面的内容
 * 当<SkeletonView show={false}>时会展示`children`中的内容
 *
 * @example
 *
 * <Skeleton renderSkeleton={()=>{
 *     return <Text style={{backgroundColor:"silver",color:"silver"}}>------</Text>
 * }}>
 *     <Text>需要显示的数据</Text>
 * </Skeleton>
 *
 * @author m860
 */
function Skeleton(props: SkeletonProps, context) {
    if (context.showSkeleton) {
        return props.renderSkeleton ? props.renderSkeleton() : null;
    }
    return props.children;
}

Skeleton.contextTypes = {
    showSkeleton: PropTypes.bool
};

export default React.memo(Skeleton);