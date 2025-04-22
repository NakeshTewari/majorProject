import React from 'react';
import { useState,useEffect } from 'react'

import { Chart, registerables } from 'chart.js';

import RecordTable from './Components/Home/RecordTable';
import FilterTable from './Components/Home/FilterTable';
import SidebarNav from './Components/Home/SidebarNav';
import Header from './Components/Home/Header';

const Home = () => {
    useEffect(() => {
        Chart.register(...registerables);
    
        const ctx = document.getElementById('barChart').getContext('2d');
    
        const labels = [
          '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
          '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
          '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00',
          '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00',
          '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
          '18:00', '19:00', '20:00'
        ];
    
        const yellowData = [
          10, 15, 20, 25, 30, 35, 40,
          45, 50, 55, 60, 65, 70, 75,
          80, 75, 70, 65, 60, 55, 50,
          45, 40, 35, 30, 25, 20, 15,
          10, 15, 20, 25, 30, 35, 40,
          45, 50, 55
        ];
    
        const redData = [
          5, 7, 9, 11, 13, 15, 17,
          19, 21, 23, 25, 27, 29, 31,
          33, 31, 29, 27, 25, 23, 21,
          19, 17, 15, 13, 11, 9, 7,
          5, 7, 9, 11, 13, 15, 17,
          19, 21, 23
        ];
    
         // Create the chart instance
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Yellow',
                data: yellowData,
                backgroundColor: '#facc15', // yellow-400
                barPercentage: 0.6,
                categoryPercentage: 1.0,
                stack: 'stack1',
                borderRadius: 2,
              },
              {
                label: 'Red',
                data: redData,
                backgroundColor: '#ef4444', // red-500
                barPercentage: 0.6,
                categoryPercentage: 1.0,
                stack: 'stack1',
                borderRadius: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  color: '#94a3b8', // gray-400
                  font: {
                    size: 10,
                    family: 'Inter',
                  },
                  maxRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 12,
                },
              },
              y: {
                display: false,
                stacked: true,
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
          },
        });
    
        // Cleanup function to destroy the chart instance
        return () => {
          chart.destroy();
        };
      }, []);
  return (
    // <div className="flex flex-row min-h-screen bg-white text-gray-800">
    // {/* Sidebar Navigation */}
    // <SidebarNav/>
  
    // {/* Main Content */}
    // <div className="flex flex-col flex-1 overflow-hidden">
      
    //   <Header/>
      <main className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-6 lg:p-8 overflow-hidden">
          <section className="flex flex-col flex-1 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 mb-4">
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full md:w-96">
                <i className="fas fa-search text-gray-400 mr-2"></i>
                <input
                  className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
                  placeholder="request or response"
                  type="text"
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 w-48 justify-between cursor-pointer select-none">
                <span>Mar 22, Mon - Mar 29, Mon</span>
                <i className="fas fa-caret-down text-gray-500"></i>
              </div>
            </div>
            <div className="relative w-full overflow-x-auto mb-4">
              <canvas
                aria-label="Bar chart showing request counts over time with red and yellow bars"
                className="w-full h-24 md:h-28"
                id="barChart"
                role="img"
              ></canvas>
            </div>
            <div className="text-xs font-semibold text-gray-600 mb-2 select-none">
              84,786 records
            </div>
            
            <RecordTable />
          </section>
          <FilterTable />
        </div>
      </main>
  //   </div>
  // </div>
  )
}

export default Home
