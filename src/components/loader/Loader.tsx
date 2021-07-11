import React, { FC } from 'react';
import './loader.scss';

export const Loader: FC = () => (
  <div className="preloader">
    <div className="lds-roller">
      <div/><div/>
      <div/><div/>
      <div/><div/>
      <div/><div/>
    </div>
  </div>
)