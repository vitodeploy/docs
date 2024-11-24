import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

export default function ImageSwitcher({dark, light}) {
  const { colorMode } = useColorMode(); // Gets the current color mode (light/dark)

  const imageUrl = colorMode === 'dark'
    ? useBaseUrl(dark)
    : useBaseUrl(light);

  return <img src={imageUrl} alt="Responsive image" />;
}