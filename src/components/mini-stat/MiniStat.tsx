import React from "react";

interface IProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

export default function MiniStat({ title, count, children }: IProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mini-stat">
          <span className="mini-stat-icon bg-success me-0 float-end">
            {children}
          </span>
          <div className="mini-stat-info">
            <span className="counter text-success">{count}</span>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
