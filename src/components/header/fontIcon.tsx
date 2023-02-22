import React from 'react';


export default function FontIcon({ name }: { name: string }) {
  return (
    <i className={`iconfont iconfont-${name}`}></i>
  );
}