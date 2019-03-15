# skeleton-view

React Native骨架屏渲染

## Install

```
$ npm i @react-native-pure/skeleton-view
```

<!--begin react doc markdown-->
## Table Content

- [SkeletonText](#skeletontext)
- [SkeletonView](#skeletonview)

# SkeletonText

__author : m860__

SkeletonText - 文本骨架

作为&lt;SkeletonView&gt;的子组件进行使用

## props

- `skeletonOption?` **Text.propTypes** 


## Examples

```javascript
<SkeletonText skeletonOption={{children:"-----",style:{backgroundColor:"red",color:"red"}}}>文本骨架</SkeletonText>
```

# SkeletonView

__author : m860__

SkeletonView - 骨架的容器

所有的骨架的渲染都需要使用&lt;SkeletonView&gt;作为容器

## props

- `show?` **boolean** 
- `children` **ReactElement** 


## Examples

```javascript
<SkeletonView show={this.state.show}>
    <Skeleton renderSkeleton={...}>
        <Text>...</Text>
    </Skeleton>
    <SkeletonText skeletonOption={...}>
        ....
    </SkeletonText>
</SkeletonView>
```

<!--end react doc markdown-->