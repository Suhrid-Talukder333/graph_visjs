/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { DataSet, Network } from "vis-network/standalone/esm/vis-network";

export const GraphColor = {
  mercury: "#e3e3e3",
  royalBlue: "#2B7CE9",
  malibu: "#97C2FC",
  onahau: "#D2E5FF",
};

const jsonData = {
  group: "main",
  label: "main",
  color: "red",
  level: 0,
  child: [
    {
      group: "blue_group",
      label: "home",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "blue_group",
          label: "home",
          color: "yellow",
          level: 2,
        },
        {
          group: "blue_group",
          label: "home",
          color: "yellow",
          level: 2,
        },
        {
          group: "blue_group",
          label: "home",
          color: "yellow",
          level: 2,
        },
      ],
    },
    {
      group: "pink_group",
      label: "right",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "pink_group",
          label: "right-child-1",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "right-child-child-1",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "right-child-child-child-1",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          group: "pink_group",
          label: "right-child-2",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "right-child-child-2",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "right-child-child-child-2",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          group: "pink_group",
          label: "right-child-3",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "right-child-child-3",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "right-child-child-child-3",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          group: "pink_group",
          label: "right-child-4",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "right-child-child-4",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "right-child-child-child-4",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      group: "pink_group",
      label: "downRight",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "pink_group",
          label: "downRight-child-1",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "downRight-child-child-1",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "downRight-child-child-child-1",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      group: "pink_group",
      label: "downLeft",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "pink_group",
          label: "downLeft-child-1",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "downLeft-child-child-1",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "downLeft-child-child-child-1",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      group: "pink_group",
      label: "leftDown",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "pink_group",
          label: "leftDown-child-center",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "leftDown-child-child-center",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "leftDown-child-child-child-center",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
        {
          group: "pink_group",
          label: "leftDown-child-left",
          color: "yellow",
          level: 2,
        },
        {
          group: "pink_group",
          label: "leftDown-child-right",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "leftDown-child-child-right",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "leftDown-child-child-child-right",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      group: "pink_group",
      label: "leftUp",
      color: "yellow",
      level: 1,
      child: [
        {
          group: "pink_group",
          label: "leftUp-child-1",
          color: "yellow",
          level: 2,
          child: [
            {
              group: "pink_group",
              label: "leftUp-child-child-1",
              color: "yellow",
              level: 3,
              child: [
                {
                  group: "pink_group",
                  label: "leftUp-child-child-child-1",
                  color: "yellow",
                  level: 4,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

var groupNodes = {};

const getArcInside = (x, y) => {
  return (Math.atan2(y, x) * 180) / Math.PI;
};

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

const evenChildren = (nodesPerSide, children, parent, nodeData, edgeData) => {
  let left = nodesPerSide;
  let right = nodesPerSide;
  let requireHiddenNodes = children.length > 1;
  let hiddenNodeIds = {
    center: "",
    left: [],
    right: [],
  };
  //center hidden node
  if (requireHiddenNodes) {
    let hiddenNodeId = generateId();
    nodeData.push({
      id: "hiddenNode_" + hiddenNodeId,
      value: 2,
      label: "",
      x: children[0].level * 200 * Math.sin((Math.PI * 2 * parent.angle) / 360),
      y:
        children[0].level * 200 * -Math.cos((Math.PI * 2 * parent.angle) / 360),
      shape: "custom",
      ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
        return {
          drawNode() {
            ctx.fillStyle = "grey";
            ctx.fillRect(x, y, 0, 0);
          },
        };
      },
    });
    edgeData.push({
      from: parent.id,
      to: "hiddenNode_" + hiddenNodeId,
    });
    hiddenNodeIds.center = "hiddenNode_" + hiddenNodeId;
  }
  let newParent;
  children.map((item) => {
    let id = generateId();
    let extra;
    let x;
    let y;
    //left side
    if (left > 0) {
      let hiddenNodeId = generateId();
      if (requireHiddenNodes) {
        nodeData.push({
          id: "hiddenNode_" + hiddenNodeId,
          value: 2,
          label: "",
          x:
            item.level *
            200 *
            Math.sin((Math.PI * 2 * (parent.angle - left * 10)) / 360),
          y:
            item.level *
            200 *
            -Math.cos((Math.PI * 2 * (parent.angle - left * 10)) / 360),
          shape: "custom",
          ctxRenderer: function ({
            ctx,
            x,
            y,
            state: { selected, hover },
            style,
          }) {
            return {
              drawNode() {
                ctx.fillStyle = "grey";
                ctx.fillRect(x, y, 0, 0);
              },
            };
          },
        });
        hiddenNodeIds.left.push("hiddenNode_" + hiddenNodeId);
        extra = 0.5;
      }
      let r = (item.level + extra) * 200;
      x = r * Math.sin((Math.PI * 2 * (parent.angle - left * 10)) / 360);
      y = r * -Math.cos((Math.PI * 2 * (parent.angle - left * 10)) / 360);
      newParent = {
        id: id,
        x: x,
        y: y,
        angle: parent.angle - left * 10,
      };
      nodeData.push({
        id: id,
        value: 2,
        label: item.label,
        x: x,
        y: y,
        color: {
          background: item.color,
        },
      });
      edgeData.push({
        from: "hiddenNode_" + hiddenNodeId,
        to: id,
      });
      if (!groupNodes[item.group]){
        groupNodes[item.group] = {
          left: {
            x: x,
            y: y,
          },
          right: {
            x: x,
            y: y,
          }
        }
      } else {
        if (x < groupNodes[item.group].left.x) {
          groupNodes[item.group].left = {
            x: x,
            y: y,
          }
        }
        if (x > groupNodes[item.group].right.x) {
          groupNodes[item.group].right = {
            x: x,
            y: y,
          }
        }
      }
      left--;
    } else if (right > 0) {
      let hiddenNodeId = generateId();
      if (requireHiddenNodes) {
        nodeData.push({
          id: "hiddenNode_" + hiddenNodeId,
          value: 2,
          label: "",
          x:
            item.level *
            200 *
            Math.sin((Math.PI * 2 * (parent.angle + right * 10)) / 360),
          y:
            item.level *
            200 *
            -Math.cos((Math.PI * 2 * (parent.angle + right * 10)) / 360),
          shape: "custom",
          ctxRenderer: function ({
            ctx,
            x,
            y,
            state: { selected, hover },
            style,
          }) {
            return {
              drawNode() {
                ctx.fillStyle = "grey";
                ctx.fillRect(x, y, 0, 0);
              },
            };
          },
        });
        hiddenNodeIds.right.push("hiddenNode_" + hiddenNodeId);
        extra = 0.5;
      }
      let r = (item.level + extra) * 200;
      x = r * Math.sin((Math.PI * 2 * (parent.angle + right * 10)) / 360);
      y = r * -Math.cos((Math.PI * 2 * (parent.angle + right * 10)) / 360);
      newParent = {
        id: id,
        x: x,
        y: y,
        angle: parent.angle + right * 10,
      };
      nodeData.push({
        id: id,
        value: 2,
        label: item.label,
        x: x,
        y: y,
        color: {
          background: item.color,
        },
      });
      edgeData.push({
        from: "hiddenNode_" + hiddenNodeId,
        to: id,
      });
      if (!groupNodes[item.group]){
        groupNodes[item.group] = {
          left: {
            x: x,
            y: y,
          },
          right: {
            x: x,
            y: y,
          }
        }
      } else {
        if (x < groupNodes[item.group].left.x) {
          groupNodes[item.group].left = {
            x: x,
            y: y,
          }
        }
        if (x > groupNodes[item.group].right.x) {
          groupNodes[item.group].right = {
            x: x,
            y: y,
          }
        }
      }
      right--;
    }
    if (item.child && item.child.length > 0) {
      if (item.child.length % 2 === 0) {
        let nodesPerSide = item.child.length / 2;
        evenChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
      } else {
        let nodesPerSide = (item.child.length - 1) / 2;
        oddChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
      }
    }
  });
  if (hiddenNodeIds.left.length > 0) {
    hiddenNodeIds.left.map((item, index) => {
      if (index > 0) {
        edgeData.push({
          from: hiddenNodeIds.left[index - 1],
          to: hiddenNodeIds.left[index],
        });
      }
    });
  }
  if (hiddenNodeIds.right.length > 0) {
    hiddenNodeIds.right.map((item, index) => {
      if (index > 0) {
        edgeData.push({
          from: hiddenNodeIds.right[index - 1],
          to: hiddenNodeIds.right[index],
        });
      }
    });
  }
  if (hiddenNodeIds.center !== "" && hiddenNodeIds.left.length > 0) {
    edgeData.push({
      from: hiddenNodeIds.center,
      to: hiddenNodeIds.left[hiddenNodeIds.left.length - 1],
    });
  }
  if (hiddenNodeIds.center !== "" && hiddenNodeIds.right.length > 0) {
    edgeData.push({
      from: hiddenNodeIds.center,
      to: hiddenNodeIds.right[hiddenNodeIds.right.length - 1],
    });
  }
};

const oddChildren = (nodesPerSide, children, parent, nodeData, edgeData) => {
  let left = nodesPerSide;
  let right = nodesPerSide;
  let requireHiddenNodes = children.length > 1;
  let hiddenNodeIds = {
    center: "",
    left: [],
    right: [],
  };
  //center hidden node
  if (requireHiddenNodes) {
    let hiddenNodeId = generateId();
    nodeData.push({
      id: "hiddenNode_" + hiddenNodeId,
      value: 2,
      label: "",
      x: children[0].level * 200 * Math.sin((Math.PI * 2 * parent.angle) / 360),
      y:
        children[0].level * 200 * -Math.cos((Math.PI * 2 * parent.angle) / 360),
      shape: "custom",
      ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
        return {
          drawNode() {
            ctx.fillStyle = "grey";
            ctx.fillRect(x, y, 0, 0);
          },
        };
      },
    });
    hiddenNodeIds.center = "hiddenNode_" + hiddenNodeId;
  }
  let newParent;
  children.map((item, index) => {
    let id = generateId();
    let extra;
    let x;
    let y;
    //center node
    if (index === 0) {
      let r;
      if (item.level > 2) {
        r = (item.level + 0.5) * 180;
      } else {
        r = (item.level + 0.5) * 200;
      }
      x = r * Math.sin((Math.PI * 2 * parent.angle) / 360);
      y = r * -Math.cos((Math.PI * 2 * parent.angle) / 360);
      newParent = {
        id: id,
        x: x,
        y: y,
        angle: parent.angle,
      };
      nodeData.push({
        id: id,
        value: 2,
        label: item.label,
        x: x,
        y: y,
        color: {
          background: item.color,
        },
      });
      edgeData.push({
        from: parent.id,
        to: id,
      });
      if (!groupNodes[item.group]){
        groupNodes[item.group] = {
          left: {
            x: x,
            y: y,
          },
          right: {
            x: x,
            y: y,
          }
        }
      } else {
        if (x < groupNodes[item.group].left.x) {
          groupNodes[item.group].left = {
            x: x,
            y: y,
          }
        }
        if (x > groupNodes[item.group].right.x) {
          groupNodes[item.group].right = {
            x: x,
            y: y,
          }
        }
      }
    } else {
      // left side
      if (left > 0) {
        let hiddenNodeId = generateId();
        if (requireHiddenNodes) {
          nodeData.push({
            id: "hiddenNode_" + hiddenNodeId,
            value: 2,
            label: "",
            x:
              item.level *
              200 *
              Math.sin((Math.PI * 2 * (parent.angle - left * 10)) / 360),
            y:
              item.level *
              200 *
              -Math.cos((Math.PI * 2 * (parent.angle - left * 10)) / 360),
            shape: "custom",
            ctxRenderer: function ({
              ctx,
              x,
              y,
              state: { selected, hover },
              style,
            }) {
              return {
                drawNode() {
                  ctx.fillStyle = "grey";
                  ctx.fillRect(x, y, 0, 0);
                },
              };
            },
          });
          hiddenNodeIds.left.push("hiddenNode_" + hiddenNodeId);
          extra = 0.5;
        }
        let r = (item.level + extra) * 200;
        x = r * Math.sin((Math.PI * 2 * (parent.angle - left * 10)) / 360);
        y = r * -Math.cos((Math.PI * 2 * (parent.angle - left * 10)) / 360);
        newParent = {
          id: id,
          x: x,
          y: y,
          angle: (parent.angle - left* 10),
        };
        nodeData.push({
          id: id,
          value: 2,
          label: item.label,
          x: x,
          y: y,
          color: {
            background: item.color,
          },
        });
        edgeData.push({
          from: "hiddenNode_" + hiddenNodeId,
          to: id,
        });
        if (!groupNodes[item.group]){
          groupNodes[item.group] = {
            left: {
              x: x,
              y: y,
            },
            right: {
              x: x,
              y: y,
            }
          }
        } else {
          if (x < groupNodes[item.group].left.x) {
            groupNodes[item.group].left = {
              x: x,
              y: y,
            }
          }
          if (x > groupNodes[item.group].right.x) {
            groupNodes[item.group].right = {
              x: x,
              y: y,
            }
          }
        }
        left--;
      } else if (right > 0) {
        let hiddenNodeId = generateId();
        if (requireHiddenNodes) {
          nodeData.push({
            id: "hiddenNode_" + hiddenNodeId,
            value: 2,
            label: "",
            x:
              item.level *
              200 *
              Math.sin((Math.PI * 2 * (parent.angle + right * 10)) / 360),
            y:
              item.level *
              200 *
              -Math.cos((Math.PI * 2 * (parent.angle + right * 10)) / 360),
            shape: "custom",
            ctxRenderer: function ({
              ctx,
              x,
              y,
              state: { selected, hover },
              style,
            }) {
              return {
                drawNode() {
                  ctx.fillStyle = "grey";
                  ctx.fillRect(x, y, 0, 0);
                },
              };
            },
          });
          hiddenNodeIds.right.push("hiddenNode_" + hiddenNodeId);
          extra = 0.5;
        }
        let r = (item.level + extra) * 200;
        x = r * Math.sin((Math.PI * 2 * (parent.angle + right * 10)) / 360);
        y = r * -Math.cos((Math.PI * 2 * (parent.angle + right * 10)) / 360);
        newParent = {
          id: id,
          x: x,
          y: y,
          angle: (parent.angle + right* 10),
        };
        nodeData.push({
          id: id,
          value: 2,
          label: item.label,
          x: x,
          y: y,
          color: {
            background: item.color,
          },
        });
        edgeData.push({
          from: "hiddenNode_" + hiddenNodeId,
          to: id,
        });
        if (!groupNodes[item.group]){
          groupNodes[item.group] = {
            left: {
              x: x,
              y: y,
            },
            right: {
              x: x,
              y: y,
            }
          }
        } else {
          if (x < groupNodes[item.group].left.x) {
            groupNodes[item.group].left = {
              x: x,
              y: y,
            }
          }
          if (x > groupNodes[item.group].right.x) {
            groupNodes[item.group].right = {
              x: x,
              y: y,
            }
          }
        }
        right--;
      }
    }
    if (item.child && item.child.length > 0) {
      if (item.child.length % 2 === 0) {
        let nodesPerSide = item.child.length / 2;
        evenChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
      } else {
        let nodesPerSide = (item.child.length - 1) / 2;
        oddChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
      }
    }
  });
  if (hiddenNodeIds.left.length > 0) {
    hiddenNodeIds.left.map((item, index) => {
      if (index > 0) {
        edgeData.push({
          from: hiddenNodeIds.left[index - 1],
          to: hiddenNodeIds.left[index],
          smooth: { type: "dynamic" },
        });
      }
    });
  }
  if (hiddenNodeIds.right.length > 0) {
    hiddenNodeIds.right.map((item, index) => {
      if (index > 0) {
        edgeData.push({
          from: hiddenNodeIds.right[index - 1],
          to: hiddenNodeIds.right[index],
          smooth: { type: "dynamic" },
        });
      }
    });
  }
  if (hiddenNodeIds.center !== "" && hiddenNodeIds.left.length > 0) {
    edgeData.push({
      from: hiddenNodeIds.center,
      to: hiddenNodeIds.left[hiddenNodeIds.left.length - 1],
      smooth: { type: "dynamic" },
    });
  }
  if (hiddenNodeIds.center !== "" && hiddenNodeIds.right.length > 0) {
    edgeData.push({
      from: hiddenNodeIds.center,
      to: hiddenNodeIds.right[hiddenNodeIds.right.length - 1],
      smooth: { type: "dynamic" },
    });
  }
};

const checkChild = (children, nodeData, parent, edgeData) => {
  let startDegree = 0;
  let circleDivide = 360 / children.length;
  let newParent;
  children.map((item) => {
    let id = generateId();
    let r = item.level * 300;
    if (item.level === 1) {
      let x = r * Math.sin((Math.PI * 2 * startDegree) / 360);
      let y = r * -Math.cos((Math.PI * 2 * startDegree) / 360);
      startDegree += circleDivide;
      newParent = {
        id: id,
        x: x,
        y: y,
        angle: startDegree - circleDivide,
      };
      nodeData.push({
        id: id,
        value: 4,
        label: item.label,
        x: x,
        y: y,
        color: {
          background: item.color,
        },
      });
      edgeData.push({
        from: parent.id,
        to: id,
      });
      if (!groupNodes[item.group]){
        groupNodes[item.group] = {
          left: {
            x: x,
            y: y,
          },
          right: {
            x: x,
            y: y,
          }
        }
      } else {
        if (x < groupNodes[item.group].left.x) {
          groupNodes[item.group].left = {
            x: x,
            y: y,
          }
        }
        if (x > groupNodes[item.group].right.x) {
          groupNodes[item.group].right = {
            x: x,
            y: y,
          }
        }
      }
      if (item.child && item.child.length > 0) {
        if (item.child.length % 2 === 0) {
          let nodesPerSide = item.child.length / 2;
          evenChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
        } else {
          let nodesPerSide = (item.child.length - 1) / 2;
          oddChildren(nodesPerSide, item.child, newParent, nodeData, edgeData);
        }
      }
    }
  });
};

const generateId = () => {
  return Math.floor(Math.random() * 10000);
}

const getGraphData = (jsonData) => {
  let nodeData = [];
  let edgeData = [];
  //main node
  let id = generateId();
  nodeData.push({
    id: id,
    value: 5,
    label: jsonData.label,
    x: 0,
    y: 0,
    color: {
      background: jsonData.color,
    },
  });
  //level nodes
  if (jsonData.child && jsonData.child.length > 0) {
    checkChild(
      jsonData.child,
      nodeData,
      { id: id, x: 0, y: 0, angle: 0 },
      edgeData
    );
  }

  return {
    node: new DataSet(nodeData),
    edge: new DataSet(edgeData),
  };
};

const VisNetwork = () => {
  const domNode = useRef(null);
  const network = useRef(null);

  const graphData = getGraphData(jsonData);
  const nodes = graphData.node;
  const edges = graphData.edge;
  const data = {
    nodes,
    edges,
  };

  const options = {
    physics: {
      stabilization: true,
      barnesHut: {
        springLength: 50,
      },
    },
    nodes: {
      borderWidth: 1,
      borderWidthSelected: 2,
      brokenImage: undefined,
      chosen: true,
      color: {
        border: GraphColor.royalBlue,
        background: GraphColor.malibu,
        highlight: {
          border: GraphColor.royalBlue,
          background: GraphColor.onahau,
        },
        hover: {
          border: GraphColor.royalBlue,
          background: GraphColor.onahau,
        },
      },
      opacity: 1,
      fixed: {
        x: true,
        y: true,
      },

      mass: 1,
      physics: true,
      scaling: {
        min: 10,
        max: 30,
        label: {
          enabled: false,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5,
        },
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            let scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        },
      },
      shape: "dot",
      shapeProperties: {
        borderDashes: false,
        borderRadius: 6,
        interpolation: false,
        useImageSize: false,
        useBorderWithImage: false,
        coordinateOrigin: "center",
      },
      size: 25,
      title: undefined,
      value: undefined,
      widthConstraint: false,
    },
    edges: {
      arrowStrikethrough: true,
      chosen: true,
      color: {
        color: GraphColor.mercury,
        highlight: GraphColor.mercury,
        hover: GraphColor.mercury,
        inherit: "from",
        opacity: 1.0,
      },

      hoverWidth: 1.5,
      labelHighlightBold: true,
      physics: true,
      scaling: {
        min: 1,
        max: 100,
        label: {
          enabled: false,
          min: 14,
          max: 100,
          maxVisible: 100,
          drawThreshold: 5,
        },
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            var scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        },
      },
      selectionWidth: 1,
      selfReferenceSize: 20,
      selfReference: {
        size: 20,
        angle: Math.PI / 4,
        renderBehindTheNode: true,
      },
      smooth: {
        enabled: true,
        roundness: 0.1,
      },
      title: undefined,
      value: undefined,
      width: 8,
      widthConstraint: false,
    },
  };

  useEffect(() => {
    network.current = new Network(domNode.current, data, options);
    network.current.on("beforeDrawing", function (ctx) {
      ctx.fillStyle = "pink";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 900, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      let groups = Object.keys(groupNodes);
      if (groups.length > 1) {
        let startPosition = groupNodes[groups[0]].left;
        let endPosition = groupNodes[groups[0]].right;
        let archStart = degrees_to_radians(getArcInside(startPosition.x - 100, startPosition.y));
        let archEnd = degrees_to_radians(getArcInside(endPosition.x + 100,endPosition.y));
  
        ctx.fillStyle = "lightblue";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 900, archStart, archEnd);
        ctx.closePath();
        ctx.fill();
      }
    });
  }, [domNode, network, data, options]);

  return (
    <div
      ref={domNode}
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    />
  );
};

export default VisNetwork;
