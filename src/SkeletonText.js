import * as React from "react"
import {Text} from "react-native"
import PropTypes from "prop-types";

type SkeletonTextProps = Text.propTypes & {
    /**文本骨架的props*/
    skeletonOption?: Text.propTypes
}

/**
 * SkeletonText - 文本骨架
 *
 * 作为<SkeletonView>的子组件进行使用
 *
 * @example
 *
 * <SkeletonText skeletonOption={{children:"-----",style:{backgroundColor:"red",color:"red"}}}>文本骨架</SkeletonText>
 *
 * @author m860
 */
function SkeletonText(props: SkeletonTextProps, context) {
    const nextProps = {
        ...props,
        ...(context.showSkeleton ? props.skeletonOption : {})
    };
    return <Text {...nextProps}></Text>
}

SkeletonText.contextTypes = {
    showSkeleton: PropTypes.bool
};

SkeletonText.defaultProps = {
    skeletonOption: {
        children: "-----",
        style: {
            backgroundColor: "silver",
            color: "silver"
        }
    }
};

export default SkeletonText;
