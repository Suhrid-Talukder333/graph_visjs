const nodes = new DataSet([
  {
    id: 1,
    value: 6,
    label: "1",
    x: 0,
    y: 0,
    color: {
      background: "orange",
    },
  },
  {
    id: 2,
    value: 6,
    label: "2",
    x: 0,
    y: -100,
    color: {
      background: GraphColor.malibu,
    },
  }, //done
  {
    id: 3,
    value: 3,
    label: "3",
    x: 100,
    y: 50,
    color: {
      background: GraphColor.malibu,
    },
  }, //done
  {
    id: 4,
    value: 3,
    label: "4",
    x: 25,
    y: 100,
    color: {
      background: GraphColor.malibu,
    },
  }, //done
  {
    id: 5,
    value: 3,
    label: "5",
    x: -25,
    y: 100,
    color: {
      background: GraphColor.malibu,
    },
  }, //done
  {
    id: 6,
    value: 3,
    label: "6",
    x: -90,
    y: 50,
    color: {
      background: "purple",
    },
  }, //done
  {
    id: 7,
    value: 3,
    label: "7",
    x: -100,
    y: -50,
    color: {
      background: "purple",
    },
  }, //done
  {
    id: 8,
    value: 1,
    label: "8",
    x: 0,
    y: -200,
  }, //done
  {
    id: 9,
    value: 1,
    label: "9",
    x: 100,
    y: -200,
  }, //done
  {
    id: 10,
    value: 1,
    label: "10",
    x: -100,
    y: -200,
  }, //done
  { id: 11, value: 1, label: "11", x: 200, y: -50 }, //done
  { id: 12, value: 1, label: "12", x: 200, y: 25 }, //done
  { id: 13, value: 1, label: "13", x: 200, y: 115 }, //done
  { id: 14, value: 1, label: "14", x: 200, y: 180 }, //done
  { id: 15, value: 1, label: "15", x: 250, y: -70 }, //done
  { id: 16, value: 1, label: "16", x: 300, y: -90 }, //done
  { id: 17, value: 1, label: "17", x: 250, y: 25 }, //done
  { id: 18, value: 1, label: "18", x: 300, y: 25 }, //done
  { id: 19, value: 1, label: "19", x: 250, y: 130 }, //done
  { id: 20, value: 1, label: "20", x: 300, y: 150 }, //done
  { id: 21, value: 1, label: "21", x: 250, y: 210 }, //done
  { id: 22, value: 1, label: "22", x: 300, y: 240 }, //done
  { id: 23, value: 1, label: "23", x: 50, y: 200 }, //done
  { id: 24, value: 1, label: "24", x: 65, y: 250 }, //done
  { id: 25, value: 1, label: "25", x: 80, y: 300 }, //done
  { id: 26, value: 1, label: "26", x: -50, y: 200 }, //done
  { id: 27, value: 1, label: "27", x: -65, y: 250 }, //done
  { id: 28, value: 1, label: "28", x: -80, y: 300 }, //done
  { id: 29, value: 1, label: "29", x: -200, y: 125 }, //done
  { id: 30, value: 1, label: "30", x: -200, y: 60 }, //done
  { id: 31, value: 1, label: "31", x: -200, y: -10 }, //done
  { id: 32, value: 1, label: "32", x: -250, y: 65 }, //done
  { id: 33, value: 1, label: "33", x: -300, y: 70 }, //done
  { id: 34, value: 1, label: "34", x: -250, y: -25 }, //done
  { id: 35, value: 1, label: "35", x: -300, y: -40 }, //done
  { id: 36, value: 1, label: "36", x: -175, y: -90 }, //done
  { id: 37, value: 1, label: "37", x: -250, y: -125 }, //done
  { id: 38, value: 1, label: "38", x: -300, y: -150 }, //done
  //hidden
  {
    id: 39,
    value: 1,
    label: "39",
    x: 0,
    y: -155,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  },
  {
    id: 40,
    value: 1,
    label: "40",
    x: 80,
    y: -140,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  },
  {
    id: 41,
    value: 1,
    label: "41",
    x: -80,
    y: -140,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  },
  {
    id: 42,
    value: 1,
    label: "42",
    x: 145,
    y: -30,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 43,
    value: 1,
    label: "43",
    x: 150,
    y: 25,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 44,
    value: 1,
    label: "44",
    x: 150,
    y: 100,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 45,
    value: 1,
    label: "45",
    x: 145,
    y: 150,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 46,
    value: 1,
    label: "46",
    x: 150,
    y: 60,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 47,
    value: 1,
    label: "47",
    x: -145,
    y: 55,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 48,
    value: 1,
    label: "48",
    x: -140,
    y: 10,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
  {
    id: 49,
    value: 1,
    label: "49",
    x: -140,
    y: 100,
    shape: "custom",
    ctxRenderer: function ({ ctx, x, y, state: { selected, hover }, style }) {
      return {
        // bellow arrows
        // primarily meant for nodes and the labels inside of their boundaries
        drawNode() {
          ctx.fillStyle = "grey";
          ctx.fillRect(x, y, 0, 0);
        },
      };
    },
  }, //done
]);
// An array of edges
const edges = new DataSet([
  { from: 1, to: 2, title: preTitle("ASCII\n    art") },
  { from: 1, to: 3, title: preTitle("ASCII\n    art") },
  { from: 1, to: 4, title: preTitle("ASCII\n    art") },
  { from: 1, to: 5, title: preTitle("ASCII\n    art") },
  { from: 1, to: 6, title: preTitle("ASCII\n    art") },
  { from: 1, to: 7, title: preTitle("ASCII\n    art") },
  { from: 2, to: 39 },
  { from: 39, to: 8 },
  { from: 40, to: 9 },
  { from: 41, to: 10 },
  { from: 39, to: 40, smooth: { type: "curvedCW" } },
  { from: 39, to: 41, smooth: { type: "curvedCCW" } },
  { from: 3, to: 46 },
  { from: 46, to: 43, smooth: { type: "dynamic" } },
  { from: 45, to: 44, smooth: { type: "dynamic" } },
  { from: 44, to: 46, smooth: { type: "dynamic" } },
  { from: 42, to: 43, smooth: { type: "dynamic" } },
  { from: 11, to: 42 },
  { from: 12, to: 43 },
  { from: 13, to: 44 },
  { from: 14, to: 45 },
  { from: 11, to: 15 },
  { from: 15, to: 16 },
  { from: 12, to: 17 },
  { from: 17, to: 18 },
  { from: 13, to: 19 },
  { from: 19, to: 20 },
  { from: 14, to: 21 },
  { from: 21, to: 22 },
  { from: 4, to: 23 },
  { from: 23, to: 24 },
  { from: 24, to: 25 },
  { from: 5, to: 26 },
  { from: 26, to: 27 },
  { from: 27, to: 28 },
  { from: 47, to: 49, smooth: { type: "curvedCCW" } },
  { from: 6, to: 47 },
  { from: 48, to: 47, smooth: { type: "curvedCCW" } },
  { from: 31, to: 48 },
  { from: 30, to: 47 },
  { from: 29, to: 49 },
  { from: 30, to: 32 },
  { from: 32, to: 33 },
  { from: 31, to: 34 },
  { from: 34, to: 35 },
  { from: 7, to: 36 },
  { from: 36, to: 37 },
  { from: 37, to: 38 },
]);
