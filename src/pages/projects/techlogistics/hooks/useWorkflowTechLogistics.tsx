import { useNodesState, useEdgesState } from '@xyflow/react';
import type { Edge, Node } from '@xyflow/react';

const COLOR_DEFAULT = '#52525b';
const COLOR_HAPPY = '#f59e0b';
const COLOR_ERROR = '#ef4444';

const EDGE_DEFAULT = { stroke: COLOR_DEFAULT, strokeWidth: 1.5 };
const EDGE_HAPPY = { stroke: COLOR_HAPPY, strokeWidth: 2 };
const EDGE_ERROR = { stroke: COLOR_ERROR, strokeWidth: 1.5 };

const PILL_DEFAULT = {
  labelStyle: {
    fill: '#a1a1aa',
    fontSize: 10,
    fontWeight: 600,
    fontFamily: 'inherit',
  },
  labelBgStyle: {
    fill: '#18181b',
    stroke: '#27272a',
    strokeWidth: 1,
    rx: 5,
    ry: 5,
  },
  labelBgPadding: [8, 3] as [number, number],
};

const PILL_HAPPY = {
  labelStyle: {
    fill: '#e4e4e7',
    fontSize: 10,
    fontWeight: 700,
    fontFamily: 'inherit',
  },
  labelBgStyle: {
    fill: '#18181b',
    stroke: COLOR_HAPPY,
    strokeWidth: 1,
    rx: 5,
    ry: 5,
  },
  labelBgPadding: [8, 3] as [number, number],
};

const PILL_ERROR = {
  labelStyle: {
    fill: '#e4e4e7',
    fontSize: 10,
    fontWeight: 600,
    fontFamily: 'inherit',
  },
  labelBgStyle: {
    fill: '#18181b',
    stroke: COLOR_ERROR,
    strokeWidth: 1,
    rx: 5,
    ry: 5,
  },
  labelBgPadding: [8, 3] as [number, number],
};

// --- DATA INICIAL ---
const INITIAL_NODES: Node[] = [
  {
    id: 'login',
    type: 'flowCard',
    data: { label: 'Login', isInput: true, variant: 'happy' },
    position: { x: 232, y: 0 },
  },
  {
    id: 'val-cred',
    type: 'flowCard',
    data: { label: 'Validación credenciales', variant: 'happy' },
    position: { x: 232, y: 105 },
  },
  {
    id: 'q-cred',
    type: 'flowCard',
    data: { label: '¿Credenciales válidas?', variant: 'happy' },
    position: { x: 232, y: 210 },
  },
  {
    id: 'err-cred',
    type: 'flowCard',
    data: { label: 'Error Autenticación', isOutput: true, variant: 'error' },
    position: { x: 0, y: 325 },
  },
  {
    id: 'q-dev',
    type: 'flowCard',
    data: { label: '¿Dispositivo registrado?', variant: 'happy' },
    position: { x: 232, y: 325 },
  },
  {
    id: 'q-fallback',
    type: 'flowCard',
    data: { label: '¿Tiene fallback pass?', variant: 'happy' },
    position: { x: 155, y: 440 },
  },
  {
    id: 'q-can-reg',
    type: 'flowCard',
    data: { label: '¿Puede registrarse?' },
    position: { x: 310, y: 440 },
  },
  {
    id: 'auth-both',
    type: 'flowCard',
    data: { label: 'Huella o Password' },
    position: { x: 0, y: 555 },
  },
  {
    id: 'auth-finger',
    type: 'flowCard',
    data: { label: 'Solo Huella', variant: 'happy' },
    position: { x: 155, y: 555 },
  },
  {
    id: 'reg-dev',
    type: 'flowCard',
    data: { label: 'Registro dispositivo' },
    position: { x: 310, y: 555 },
  },
  {
    id: 'modal-block',
    type: 'flowCard',
    data: { label: 'Modal Bloqueo', isOutput: true, variant: 'error' },
    position: { x: 465, y: 555 },
  },
  {
    id: 'auth-post-reg',
    type: 'flowCard',
    data: { label: 'Huella o Password' },
    position: { x: 310, y: 670 },
  },
  {
    id: 'acceso-ok',
    type: 'flowCard',
    data: { label: 'Acceso Permitido', variant: 'happy' },
    position: { x: 232, y: 785 },
  },
  {
    id: 'auditoria',
    type: 'flowCard',
    data: { label: 'Registro Auditoría', isOutput: true, variant: 'happy' },
    position: { x: 232, y: 890 },
  },
];

const INITIAL_EDGES: Edge[] = [
  {
    id: 'e-log-val',
    source: 'login',
    target: 'val-cred',
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-val-qcred',
    source: 'val-cred',
    target: 'q-cred',
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-qcred-err',
    source: 'q-cred',
    target: 'err-cred',
    label: 'No',
    ...PILL_ERROR,
    style: EDGE_ERROR,
  },
  {
    id: 'e-qcred-qdev',
    source: 'q-cred',
    target: 'q-dev',
    label: 'Sí',
    ...PILL_HAPPY,
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-qdev-fall',
    source: 'q-dev',
    target: 'q-fallback',
    label: 'Sí',
    ...PILL_HAPPY,
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-qdev-canreg',
    source: 'q-dev',
    target: 'q-can-reg',
    label: 'No',
    ...PILL_DEFAULT,
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-fall-both',
    source: 'q-fallback',
    target: 'auth-both',
    label: 'Sí',
    ...PILL_DEFAULT,
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-fall-finger',
    source: 'q-fallback',
    target: 'auth-finger',
    label: 'No',
    ...PILL_HAPPY,
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-canreg-reg',
    source: 'q-can-reg',
    target: 'reg-dev',
    label: 'Sí',
    ...PILL_DEFAULT,
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-canreg-block',
    source: 'q-can-reg',
    target: 'modal-block',
    label: 'No',
    ...PILL_ERROR,
    style: EDGE_ERROR,
  },
  {
    id: 'e-reg-post',
    source: 'reg-dev',
    target: 'auth-post-reg',
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-both-ok',
    source: 'auth-both',
    target: 'acceso-ok',
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-finger-ok',
    source: 'auth-finger',
    target: 'acceso-ok',
    animated: true,
    style: EDGE_HAPPY,
  },
  {
    id: 'e-postreg-ok',
    source: 'auth-post-reg',
    target: 'acceso-ok',
    style: EDGE_DEFAULT,
  },
  {
    id: 'e-ok-audit',
    source: 'acceso-ok',
    target: 'auditoria',
    animated: true,
    style: EDGE_HAPPY,
  },
];

export const useWorkflowTechLogistics = () => {
  const [nodes, _setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

  const canvasOptions = {
    fitView: true,
    fitViewOptions: { padding: 0.1, maxZoom: 1.15 },
    autoPanOnConnect: false,
    autoPanOnNodeDrag: false,
    elementsSelectable: false,
    nodesConnectable: false,
    nodesDraggable: false,
    panOnDrag: false,
    panOnScroll: false,
    preventScrolling: false,
    zoomOnDoubleClick: false,
    zoomOnPinch: false,
    zoomOnScroll: false,
  } as const;

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    canvasOptions,
  };
};
