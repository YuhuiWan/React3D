## React3D
3D展厅项目
这是一个基于React和three.js以及react-three/fiber等配套工具的项目，主要目标是实现3D展厅的效果。

目前计划通过两种方式引入模型：
1.代码创建
2.gltf文件引入

其中gltf文件引入需要使用gltfjsx命令行工具
```bash
npx gltfjsx cone.gltf
```
此命令会基于gltf文件生成js代码，参考https://github.com/pmndrs/gltfjsx/blob/master/readme.md
补充一点，本项目使用webpack打包，以上生成的js代码默认引用gltf文件的方式与webpack不兼容，无法将gltf文件copy到dist文件夹中，需要手动import

before
```jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cone({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cone.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.锥体.geometry} material={nodes.锥体.material} position={[-0.11, 0.2, 0]} />
    </group>
  )
}

useGLTF.preload('/cone.gltf')
```

after
```jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './cone.gltf'

export default function Cone({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.锥体.geometry} material={nodes.锥体.material} position={[-0.11, 0.2, 0]} />
    </group>
  )
}

useGLTF.preload(model)
```

### 启动项目
1.安装依赖
```bash
npm install
```
2.webpack打包
```bash
webpack
```
或
```bash
npm run build
```
3.启动
```bash
npm run dev
```

### 发布
访问dist/index.html即可


