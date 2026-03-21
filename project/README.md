# Algorithm Visualizer

An interactive web application to visualize how different sorting algorithms work step-by-step. This project helps students and developers understand sorting algorithms by showing how elements move and change during the sorting process.

## Features

* Visualize multiple sorting algorithms
* Control sorting speed
* Change number of elements
* Generate random array
* Generate worst-case array
* Start and restart sorting
* Real-time bar visualization

## Algorithms Implemented

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort
* Counting Sort
* Radix Sort
* Bucket Sort

## Tech Stack

* React.js
* Tailwind CSS
* JavaScript
* HTML/CSS

## Project Structure

```
src/
│
├── components/
│   ├── Bars.jsx
│   ├── Controls.jsx
│   ├── Dropdown.jsx
│   ├── Logo.jsx
│   ├── Slider.jsx
│   ├── SpeedSlider.jsx
│   └── WorstCase.jsx
│
├── hooks/
│   └── useSorting.js
│
├── algorithms/
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   ├── quickSort.js
│   ├── heapSort.js
│   ├── countingSort.js
│   ├── radixSort.js
│   └── bucketSort.js
│
├── utils/
│   └── arrayGenerator.js
│
├── App.jsx
└── main.jsx
```

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/your-username/algorithm-visualizer.git
```

2. Go into the project folder

```
cd algorithm-visualizer
```

3. Install dependencies

```
npm install
```

4. Run the project

```
npm run dev
```

## How It Works

* The array is represented as vertical bars.
* Each sorting algorithm updates the array step-by-step.
* After each step, the UI updates the bar positions.
* Animations are controlled using delays based on speed.

## Future Improvements

* Add time complexity display
* Add sound effects
* Add algorithm explanation panel
* Add comparison mode (run two algorithms side-by-side)
* Add searching algorithm visualization
* Add graph algorithms (BFS, DFS, Dijkstra)
* Add performance statistics (time taken, swaps, comparisons)

## Author

Garv Tayal
B.Tech CSE, NIT Jalandhar

## License

This project is for educational purposes.
