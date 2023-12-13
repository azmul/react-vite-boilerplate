import React from "react";
import { Helmet } from "react-helmet";
import ErrorFallbackUI from "@/components/error-boundary/ErrorBoundary";

interface IProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageFormat({ children, title, description }: IProps) {
  return (
    <ErrorFallbackUI>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div id="layout-wrapper">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </ErrorFallbackUI>
  );
}
