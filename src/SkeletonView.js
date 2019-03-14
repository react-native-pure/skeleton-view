import * as React from "react"
import PropTypes from "prop-types"

type SkeletonViewProps = {
    show: boolean,
    children: React.Element
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