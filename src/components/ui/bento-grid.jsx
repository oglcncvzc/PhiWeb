import React from "react";
import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "bento-grid",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "bento-grid-item",
        className
      )}
    >
      {header}
      <div className="bento-content">
        {icon && (
          <div className="bento-icon">
            {icon}
          </div>
        )}
        <div className="bento-title">
          {title}
        </div>
        <div className="bento-description">
          {description}
        </div>
      </div>
    </div>
  );
}; 