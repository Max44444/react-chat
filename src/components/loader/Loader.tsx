import React, { FC } from 'react';
import './loader.scss';

export const Loader: FC = () => (
  <div className="loader-wrapper">
    <div className="lds-roller">
      <div/><div/>
      <div/><div/>
      <div/><div/>
      <div/><div/>
    </div>
  </div>
)