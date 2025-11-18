'use client';

import { useEffect, useRef, useState } from 'react';

interface RoutePoint {
  x: number; // 百分比位置 0-100
  y: number; // 百分比位置 0-100
  label?: string;
  color?: string;
}

interface Route {
  from: RoutePoint;
  to: RoutePoint;
  color?: string;
  animated?: boolean;
}

interface MapWithRoutesProps {
  mapSrc: string;
  points: RoutePoint[];
  routes: Route[];
}

export default function MapWithRoutes({ mapSrc, points, routes }: MapWithRoutesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [clickedPoint, setClickedPoint] = useState<{ x: number; y: number } | null>(null);
  const [showCoords, setShowCoords] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 点击地图获取坐标
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const roundedX = Math.round(x * 10) / 10;
    const roundedY = Math.round(y * 10) / 10;
    
    setClickedPoint({ x: roundedX, y: roundedY });
    setShowCoords(true);
    
    // 在控制台输出，方便复制
    console.log(`{ x: ${roundedX}, y: ${roundedY} }`);
    
    // 3秒后自动隐藏
    setTimeout(() => setShowCoords(false), 3000);
  };

  // 复制坐标到剪贴板（备用功能）
  // const copyCoordinates = () => {
  //   if (clickedPoint) {
  //     const coordText = `{ x: ${clickedPoint.x}, y: ${clickedPoint.y} }`;
  //     navigator.clipboard.writeText(coordText);
  //     alert('坐标已复制到剪贴板！');
  //   }
  // };

  // 生成贝塞尔曲线路径
  const generateCurvePath = (from: RoutePoint, to: RoutePoint) => {
    const x1 = (from.x / 100) * dimensions.width;
    const y1 = (from.y / 100) * dimensions.height;
    const x2 = (to.x / 100) * dimensions.width;
    const y2 = (to.y / 100) * dimensions.height;

    // 计算控制点，创建弧形效果
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // 控制点偏移量（根据距离调整弧度）
    const offset = distance * 0.3;
    
    // 中点
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    
    // 垂直于连线的方向
    const perpX = -dy / distance;
    const perpY = dx / distance;
    
    // 控制点（向上弧形）
    const cx = mx + perpX * offset;
    const cy = my + perpY * offset;

    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  return (
    <div 
      ref={containerRef} 
      className="map-with-routes-container position-relative w-100"
    //   onClick={handleMapClick}
    >
      {/* 背景地图 */}
      <img 
        src={mapSrc} 
        alt="World Map" 
        className="w-100 h-auto d-block"
      />
      
      {/* 坐标显示提示 */}
      {showCoords && clickedPoint && (
        <div
          className="position-absolute bg-dark text-white px-3 py-2 rounded shadow-lg"
          style={{
            left: `${clickedPoint.x}%`,
            top: `${clickedPoint.y}%`,
            transform: 'translate(-50%, -120%)',
            zIndex: 1000,
            fontSize: '14px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          <div className="fw-bold mb-1">📍 坐标位置</div>
          <div className="font-monospace">
            x: {clickedPoint.x}%, y: {clickedPoint.y}%
          </div>
          <div className="text-muted small mt-1">
            已输出到控制台
          </div>
        </div>
      )}
      
      {/* 点击的位置标记 */}
      {clickedPoint && showCoords && (
        <div
          className="position-absolute"
          style={{
            left: `${clickedPoint.x}%`,
            top: `${clickedPoint.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            backgroundColor: '#ff0000',
            borderRadius: '50%',
            border: '2px solid white',
            boxShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
            zIndex: 999,
            pointerEvents: 'none',
          }}
        />
      )}
      
      {/* SVG 覆盖层 */}
      {dimensions.width > 0 && (
        <svg
          className="position-absolute top-0 start-0 w-100 h-100"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            {/* 渐变色定义 */}
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--primary-color)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0.2" />
            </linearGradient>
            
            {/* 发光效果滤镜 */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* 动画路径遮罩 */}
            <mask id="routeMask">
              <rect x="0" y="0" width="100%" height="100%" fill="white">
                <animate
                  attributeName="x"
                  from="-100%"
                  to="100%"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </rect>
            </mask>
          </defs>

          {/* 绘制路线 */}
          {routes.map((route, index) => {
            const path = generateCurvePath(route.from, route.to);
            const color = route.color || 'var(--primary-color)';
            
            return (
              <g key={`route-${index}`}>
                {/* 静态基础路线（白色、粗线、虚线） */}
                <path
                  d={path}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                />
                
                {/* 移动的光点（经典飞机航线效果） */}
                {route.animated && (
                  <path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeOpacity="0.9"
                    strokeLinecap="round"
                    strokeDasharray="10 1000"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-1010"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                )}
              </g>
            );
          })}

          {/* 绘制数据点 */}
          {points.map((point, index) => {
            const cx = (point.x / 100) * dimensions.width;
            const cy = (point.y / 100) * dimensions.height;
            const color = point.color || 'var(--primary-color)';
            
            return (
              <g key={`point-${index}`}>
                {/* 外圈脉冲效果（减弱） */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="12"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    from="6"
                    to="16"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* 中圈 */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="6"
                  fill={color}
                  fillOpacity="0.25"
                  stroke={color}
                  strokeWidth="1.5"
                />
                
                {/* 内圈核心 */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill={color}
                />
                
                {/* 标签 */}
                {point.label && (
                  <text
                    x={cx}
                    y={cy - 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    {point.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

