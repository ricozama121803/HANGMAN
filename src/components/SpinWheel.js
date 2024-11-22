'use client'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { getHint } from '@/data/wordData'

export default function SpinWheel({ word, onHintRevealed }) {
  const wheelRef = useRef(null)
  const [currentHint, setCurrentHint] = useState('')
  
  const data = [
    { label: "HINT 1" },
    { label: "HINT 2" },
    { label: "HINT 3" },
    { label: "HINT 4" },
    { label: "HINT 5" },
    { label: "HINT 6" },
    { label: "HINT 7" },
    { label: "HINT 8" }
  ]

  useEffect(() => {
    if (!wheelRef.current) return

    const size = Math.min(window.innerWidth * 0.8, 500)
    const radius = (size / 2) - 40

    d3.select(wheelRef.current).selectAll("*").remove()

    const svg = d3.select(wheelRef.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size)
      .attr("viewBox", `0 0 ${size} ${size}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("transform-origin", "center center")

    const wheelGroup = svg.append("g")
      .attr("transform", `translate(${size/2}, ${size/2})`)
      .style("transform-box", "fill-box")
      .style("transform-origin", "center")

    const pie = d3.pie()
      .sort(null)
      .value(() => 1)

    const arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(0)

    const arcs = wheelGroup.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc")

    // Wheel segments
    arcs.append("path")
      .attr("d", arc)
      .style("fill", (d, i) => d3.schemeCategory10[i])
      .style("stroke", "white")
      .style("stroke-width", "2")

    // Segment labels
    arcs.append("text")
      .attr("transform", d => {
        const pos = arc.centroid(d)
        const midAngle = (d.startAngle + d.endAngle) / 2
        return `translate(${pos[0]},${pos[1]}) rotate(${midAngle * 180 / Math.PI - 90})`
      })
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(d => d.data.label)
      .style("fill", "white")
      .style("font-size", `${size/25}px`)
      .style("font-weight", "bold")

    // Center spin button
    wheelGroup.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", radius * 0.2)
      .style("fill", "white")
      .style("stroke", "#333")
      .style("stroke-width", "2")
      .style("cursor", "pointer")
      .on("click", spin)

    wheelGroup.append("text")
      .attr("x", 0)
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .text("SPIN")
      .style("font-size", `${size/20}px`)
      .style("font-weight", "bold")
      .style("cursor", "pointer")

    // Pointer
    svg.append("path")
      .attr("d", `M${size-60},${size/2-15}L${size-30},${size/2}L${size-60},${size/2+15}Z`)
      .style("fill", "#333")

    function spin() {
      const rotation = 1440 + Math.random() * 1440
      const hint = getHint(word)
      
      wheelGroup.transition()
        .duration(3000)
        .ease(d3.easeQuadInOut)
        .attrTween("transform", () => {
          const interpolate = d3.interpolate(0, rotation)
          return t => `translate(${size/2}, ${size/2}) rotate(${interpolate(t)})`
        })
        .on("end", () => {
          setCurrentHint(hint)
          setTimeout(() => {}, 500)
        })
    }
  }, [word])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      {currentHint ? (
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">Your Hint:</h3>
          <p className="text-gray-700 text-lg">{currentHint}</p>
          <button
            onClick={() => onHintRevealed()}
            className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Start Playing!
          </button>
        </div>
      ) : (
        <div ref={wheelRef} className="bg-white rounded-xl max-w-full max-h-full overflow-hidden" />
      )}
    </div>
  )
}
