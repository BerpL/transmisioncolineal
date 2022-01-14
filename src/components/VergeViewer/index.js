import React from 'react';
import { IframeContainer } from './styles';


function VergerViewer({ src, title }) {
  return (
    <IframeContainer src={src} title={title} frameBorder="0" />
  )
}

export default VergerViewer
