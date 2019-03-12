import * as React from "react"
import PropTypes from "prop-types"

/**
 * @alias SkeletonView.propTypes
 * @property show - 是否显示骨架
 * @property children
 */
type SkeletonViewProps = {
    //是否显示skeleton,默认是`true`
    show: boolean,
    children: React.Node
};

/**
 * SkeletonView - 骨架的容器
 *
 * 所有的骨架的渲染都需要使用<SkeletonView>作为容器
 *
 * @example
 *
 * <SkeletonView show={this.state.show}>
 *     <Skeleton renderSkeleton={...}>
 *         <Text>...</Text>
 *     </Skeleton>
 *     <SkeletonText skeletonOption={...}>
 *         ....
 *     </SkeletonText>
 * </SkeletonView>
 *
 * @author m860
 */
export default class SkeletonView extends React.PureComponent<SkeletonViewProps> {

    static defaultProps = {
        show: true
    };

    static childContextTypes = {
        showSkeleton: PropTypes.bool
    };

    getChildContext() {
        return {
            showSkeleton: this.props.show
        }
    }

    render() {
        return this.props.children;
    }
}