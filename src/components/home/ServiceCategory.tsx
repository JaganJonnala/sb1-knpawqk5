import * as React from "react";

type ServiceCategoryProps = {
  title: string;
  icon: string;
  onTap: () => void;
  row?: number;
  col?: number;
};

export function ServiceCategory({ title, icon, onTap, row, col }: ServiceCategoryProps) {
  return (
    <gridLayout 
      className="bg-white rounded-lg p-4 m-2 elevation-2"
      rows="auto, auto" 
      columns="*"
      onTap={onTap}
      row={row}
      col={col}
    >
      <label 
        row={0} 
        col={0} 
        className="text-4xl text-center text-blue-500 mb-2"
        text={icon}
      />
      <label 
        row={1} 
        col={0} 
        className="text-center font-semibold"
        text={title}
      />
    </gridLayout>
  );
}