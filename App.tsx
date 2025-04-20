import React, { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type OnConnect,
} from '@xyflow/react';
import { FiFile } from 'react-icons/fi';

import '@xyflow/react/dist/base.css';

import TurboNode, { type TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';
import FunctionIcon from './FunctionIcon';

const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '7',
    position: { x: 0, y: 0 },
    data: { icon: <FunctionIcon />, title: '需求编辑', subtitle: '导入Aone需求' },
    type: 'turbo',
  },
  {
    id: '8',
    position: { x: 300, y: 0 },
    data: { icon: <FunctionIcon />, title: '任务拆解', subtitle: 'task analysis' },
    type: 'turbo',
  },
  {
    id: '1',
    position: { x: 600, y: -100 },
    data: { icon: <FunctionIcon />, title: '前端Agent', subtitle: 'coding、部署' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 900, y: -100 },
    data: { icon: <FunctionIcon />, title: '测试Agent', subtitle: '测试' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 600, y: 100 },
    data: { icon: <FunctionIcon />, title: '后端Agent', subtitle: 'coding、部署' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 900, y: 100 },
    data: { icon: <FunctionIcon />, title: '测试Agent', subtitle: '测试' },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: 1200, y: 0 },
    data: { icon: <FunctionIcon />, title: '验收阶段', subtitle: '验收' },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: 1500, y: 0 },
    data: { icon: <FiFile />, title: '发布' },
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
  },
  {
    id: 'e8-1',
    source: '8',
    target: '1',
  },
  {
    id: 'e8-3',
    source: '8',
    target: '3',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
  },
];

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Controls showInteractive={false} />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
    </ReactFlow>
  );
};

export default Flow;
