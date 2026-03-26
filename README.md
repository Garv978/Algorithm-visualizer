# Algorithm-visualizer

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)

## 📝 Description

Algorithm-visualizer is a dynamic web application built with React, designed to help users grasp the intricacies of Data Structures and Algorithms through immersive, interactive visualizations. By bringing abstract computer science concepts to life, this tool provides an intuitive and engaging platform for students and developers to explore, analyze, and master algorithm logic directly in their browser.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- ⚛️ React


## 📦 Key Dependencies

```
@tailwindcss/vite: ^4.2.2
@vercel/analytics: ^2.0.1
react: ^19.2.4
react-dom: ^19.2.4
tailwindcss: ^4.2.2
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`


## 📁 Project Structure

```
project
├── eslint.config.js
├── index.html
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── Data Structures
│   │   └── StackLogic.js
│   ├── algorithms
│   │   ├── Graph Traversals
│   │   │   ├── BFS.js
│   │   │   ├── DFS.js
│   │   │   ├── Dijkstra.js
│   │   │   └── index.js
│   │   ├── Searching
│   │   │   ├── BinarySearch.js
│   │   │   ├── LinearSearch.js
│   │   │   └── index.js
│   │   ├── Sorting
│   │   │   ├── BubbleSort.js
│   │   │   ├── BucketSort.js
│   │   │   ├── CountingSort.js
│   │   │   ├── HeapSort.js
│   │   │   ├── InsertionSort.js
│   │   │   ├── MergeSort.js
│   │   │   ├── QuickSort.js
│   │   │   ├── RadixSort.js
│   │   │   ├── SelectionSort.js
│   │   │   └── index.js
│   │   └── Tree Traversals
│   │       ├── Inorder.js
│   │       ├── Postorder.js
│   │       ├── Preorder.js
│   │       └── index.js
│   ├── components
│   │   ├── AnalyticsBox.jsx
│   │   ├── Ball.jsx
│   │   ├── Balls.jsx
│   │   ├── Bars.jsx
│   │   ├── Box.jsx
│   │   ├── Controls.jsx
│   │   ├── Dropdown.jsx
│   │   ├── Edge.jsx
│   │   ├── Grid.jsx
│   │   ├── Logo.jsx
│   │   ├── Slider.jsx
│   │   ├── SpeedSlider.jsx
│   │   ├── StackBox.jsx
│   │   ├── TreeArea.jsx
│   │   └── WorstCase.jsx
│   ├── hooks
│   │   ├── Algorithms
│   │   │   ├── UseGridTraversal.js
│   │   │   ├── UseSearching.js
│   │   │   ├── UseSorting.js
│   │   │   └── UseTraversal.js
│   │   └── DataStructures
│   │       └── UseStack.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Algorithm.jsx
│   │   ├── Algorithms
│   │   │   ├── GridTraversal.jsx
│   │   │   ├── Searching.jsx
│   │   │   ├── Sorting.jsx
│   │   │   ├── Traversal.jsx
│   │   │   └── index.js
│   │   ├── Data Structures
│   │   │   ├── Heap.jsx
│   │   │   ├── LinkedList.jsx
│   │   │   ├── Queue.jsx
│   │   │   ├── Stack.jsx
│   │   │   ├── Tree.jsx
│   │   │   └── index.js
│   │   ├── DataStructures.jsx
│   │   └── index.js
│   ├── public
│   │   └── favicon.png
│   ├── store
│   │   ├── AlgorithmContext.jsx
│   │   ├── DataStructureContext.jsx
│   │   ├── useAlgorithmState.js
│   │   └── useDataStructureState.js
│   └── utils
│       ├── arrayGenerator.js
│       ├── colors.js
│       ├── gridGenerator.js
│       ├── sleep.js
│       ├── stackGenerator.js
│       └── treeGenerator.js
└── vite.config.js
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Garv978/Algorithm-visualizer/tree/main.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
