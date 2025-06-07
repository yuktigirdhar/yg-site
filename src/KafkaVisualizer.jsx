// Basic React frontend to simulate a Kafka event visualizer
import React, { useEffect, useState } from 'react';
import { LineController, LineElement } from "chart.js";

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    TimeScale
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { Scatter } from 'react-chartjs-2';
import './KafkaVisualizer.css';

import * as DateFnsAdapter from 'chartjs-adapter-date-fns'; // Don't remove this import
import { enUS } from 'date-fns/locale';


ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale, LineController, LineElement);

export default function KafkaVisualizer() {
  const [dataPoints, setDataPoints] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {

    if (!isStreaming) return;

    const interval = setInterval(() => {
      const now = new Date();
      const newPoints = Array.from({ length: Math.floor(Math.random() * 5 + 1) }, () => ({
        x: now,
        y: Math.random() * 100,
      }));
  
      setDataPoints((prev) => {
        const updated = [...prev, ...newPoints];
  
        // Keep only points from the last 60 seconds (optional)
        const cutoff = new Date(now.getTime() - 60000);
        return updated.filter((point) => new Date(point.x) > cutoff);
      });
    }, 1000); // every 1 second
  
    return () => clearInterval(interval); // cleanup on unmount
  }, [isStreaming]);
  
  

  const chartData = {
    datasets: [
      {
        label: 'Kafka Events',
        data: dataPoints,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 4,
        showLine: false
      }
    ]
  };


  const chartOptions = {
    animation: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second',
          displayFormats: {
            second: "h:mm:ss", // short but clear
          }
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    }

  };
  

  return (
    <div className="kafka-container">
      <h1 className="kafka-title">Kafka Event Visualizer</h1>
      <div className="button-container">
        <button
          onClick={() => setIsStreaming(true)}
          className="start-button"
        >
          Start Streaming
        </button>
        <button
          onClick={() => setIsStreaming(false)}
          className="stop-button"
        >
          Stop Streaming
        </button>
      </div>

      <div className="chart-container">
        <Scatter data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
