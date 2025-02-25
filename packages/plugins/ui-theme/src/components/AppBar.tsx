import { AppBarProps, default as MaterialUIAppBar } from '@mui/material/AppBar';
import React, { forwardRef } from 'react';

type AppBarRef = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const AppBar = forwardRef<AppBarRef, AppBarProps>(function AppBar(props, ref) {
  return <MaterialUIAppBar {...props} ref={ref} />;
});

export default AppBar;
