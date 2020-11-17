import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Comb Sort</h1>
        <div className="content">
          <h4>Explanation:</h4>
          <p>1. Initialize a gap space at a shrink factor of 1.3.</p>
          <code>
            While: the gap space doesn't equal 1 and there are no remaing values
            to swap:
          </code>
          <p>a. gap = gap/shrink factor</p>
          <code>Iterate from the first to last index of the array. </code>
          <code>If: array[index] is greater then array[index + gap]</code>
          <p>a. swap data [index] and [index + gap] </p>
          <p>b. swaped = true </p>
          <p>4. return data</p>
          <h4>Time Complexity: O(log n) - O(n^2)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
