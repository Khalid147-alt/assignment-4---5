"use client"
import { useState } from 'react';

const MediaQueryExamples = () => {
  const [activeQuery, setActiveQuery] = useState<string | null>(null);

  const toggleQuery = (query: string) => {
    setActiveQuery(activeQuery === query ? null : query);
  };

  return (
    <div>
      <h1>Media Query Examples</h1>
      <div className="example" onClick={() => toggleQuery('example1')}>
        <h2>Example 1: Mobile-First Query</h2>
        {activeQuery === 'example1' && (
          <div className="description">
            <p>
              This query targets devices with a max width of 600px, typically used for mobile devices.
            </p>
            <code>
              {`@media (max-width: 600px) {
  body {
    background-color: black;
  }
}`}
            </code>
          </div>
        )}
      </div>

      <div className="example" onClick={() => toggleQuery('example2')}>
        <h2>Example 2: Desktop-First Query</h2>
        {activeQuery === 'example2' && (
          <div className="description">
            <p>
              This query targets devices with a min width of 1024px, commonly used for desktops.
            </p>
            <code>
              {`@media (min-width: 1024px) {
  body {
    background-color: black;
  }
}`}
            </code>
          </div>
        )}
      </div>

      <div className="example" onClick={() => toggleQuery('example3')}>
        <h2>Example 3: Orientation Query</h2>
        {activeQuery === 'example3' && (
          <div className="description">
            <p>
              This query checks for the device's orientation. If it's in landscape mode, apply the styles.
            </p>
            <code>
              {`@media (orientation: landscape) {
  body {
    background-color: black;
  }
}`}
            </code>
          </div>
        )}
      </div>

      <style jsx>{`
        .example {
          cursor: pointer;
          padding: 10px;
          border: 1px solid #ddd;
          margin-bottom: 10px;
          transition: transform 0.3s ease;
        }
        .example:hover {
          transform: scale(0.5);
        }
        .description {
          background: blue;
          padding: 10px;
          border-radius: 5px;
          animation: fadeIn 0.5s ease;
        }
        code {
          display: block;
          background: green;
          padding: 10px;
          border-radius: 5px;
          margin-top: 10px;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MediaQueryExamples;
