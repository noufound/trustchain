"use client";

import Link from "next/link";
import { useMemo, useRef, useEffect, useState } from "react";

interface StockData {
  company: string;
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  chartData: number[]; // K线数据点（价格数组）
}

interface StockCardProps {
  stock: StockData;
}

// 响应式K线图SVG组件
function MiniChart({
  data,
  isPositive,
  company,
  isVisible,
}: {
  data: number[];
  isPositive: boolean;
  company: string;
  isVisible: boolean;
}) {
  // 使用固定的viewBox，通过preserveAspectRatio实现响应式
  const viewBoxWidth = 200;
  const viewBoxHeight = 100;
  const paddingTop = 4;
  const paddingBottom = 10;
  const paddingLeft = 0;  // 左边距为0，让线条从最左边开始
  const paddingRight = 0; // 右边距为0，让线条到最右边结束
  const chartWidth = viewBoxWidth - paddingLeft - paddingRight;
  const chartHeight = viewBoxHeight - paddingTop - paddingBottom;

  // 计算价格范围
  const minPrice = Math.min(...data);
  const maxPrice = Math.max(...data);
  const priceRange = maxPrice - minPrice || 1;

  // 计算每个点的位置
  const points = useMemo(() => {
    return data
      .map((price, index) => {
        const x = paddingLeft + (index / (data.length - 1)) * chartWidth;
        const y =
          paddingTop +
          chartHeight -
          ((price - minPrice) / priceRange) * chartHeight;
        return `${x},${y}`;
      })
      .join(" ");
  }, [data, minPrice, priceRange, chartWidth, chartHeight, paddingTop, paddingLeft]);

  const lineColor = isPositive ? "#10b981" : "#ef4444";
  const fillColor = isPositive
    ? "rgba(16, 185, 129, 0.15)"
    : "rgba(239, 68, 68, 0.15)";
  const gradientId = `gradient-${isPositive ? "up" : "down"}-${company}`;
  
  // 计算路径长度用于动画
  const pathLength = useMemo(() => {
    let length = 0;
    const pointsArray = points.split(' ');
    for (let i = 1; i < pointsArray.length; i++) {
      const [x1, y1] = pointsArray[i - 1].split(',').map(Number);
      const [x2, y2] = pointsArray[i].split(',').map(Number);
      length += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    return length;
  }, [points]);

  return (
    <div
      className="stock-chart-container"
      style={{ width: "100%", height: "100%" }}
    >
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="stock-chart"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fillColor} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* 剪裁路径用于填充区域的动画 */}
          <clipPath id={`clip-${company}`}>
            <rect
              x="0"
              y="0"
              width={isVisible ? viewBoxWidth : 0}
              height={viewBoxHeight}
              style={{
                transition: "width 1.5s ease-in-out"
              }}
            />
          </clipPath>
        </defs>
        {/* 填充区域 */}
        <polygon
          points={`${paddingLeft},${viewBoxHeight - paddingBottom} ${points} ${
            viewBoxWidth - paddingRight
          },${viewBoxHeight - paddingBottom}`}
          fill={`url(#${gradientId})`}
          clipPath={`url(#clip-${company})`}
        />
        {/* 价格线 */}
        <polyline
          points={points}
          fill="none"
          stroke={lineColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={isVisible ? 0 : pathLength}
          style={{
            transition: "stroke-dashoffset 1.5s ease-in-out"
          }}
        />
      </svg>
    </div>
  );
}

export default function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change >= 0;
  const changeColor = isPositive ? "text-success" : "text-danger";
  const changeIcon = isPositive ? "▲" : "▼";
  const bgColor = isPositive
    ? "rgba(16, 185, 129, 0.08)"
    : "rgba(239, 68, 68, 0.08)";
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentCard = cardRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // 当30%的卡片进入视口时触发
        rootMargin: "0px"
      }
    );
    
    if (currentCard) {
      observer.observe(currentCard);
    }
    
    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [isVisible]);

  return (
    <Link
      href="https://app.ondo.finance/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div ref={cardRef} className="card stock-card border rounded-3 shadow-sm">
        <div className="stock-price-section p-3 pb-0 d-flex">
          {/* 公司名称和代码 */}
          <div 
            className="rounded-circle mt-1 me-2 d-flex align-items-center justify-content-center"
            style={{ 
              width: '36px', 
              height: '36px', 
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: '600',
              flexShrink: 0
            }}
          >
            {stock.ticker.substring(0, 2)}
          </div>
          <div className="mb-2">
            <h6 className="fw-bold mb-0 text-dark">{stock.company}</h6>
            <small className="text-muted">{stock.ticker}</small>
          </div>
        </div>

        {/* K线图区域 - 占据下半部分 */}
        <div
          className="stock-chart-section d-flex flex-column m-3 mt-0 rounded-3"
          style={{ backgroundColor: bgColor }}
        >
          <div className="d-flex flex-column  p-4 pb-0">
            <span className="h4 fw-bold mb-0 text-dark">
              ${stock.price.toFixed(2)}
            </span>
            <span className={`small ${changeColor}`}>
              {changeIcon} ${Math.abs(stock.change).toFixed(2)} (
              {isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%) 24H
            </span>
          </div>
          <MiniChart
            data={stock.chartData}
            isPositive={isPositive}
            company={stock.company}
            isVisible={isVisible}
          />
        </div>
      </div>
    </Link>
  );
}
