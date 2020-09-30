import React, { useImperativeHandle } from 'react';

export default function useExpose(ref) {
  useImperativeHandle(ref, () => ({
    onItemRemoved: (item) => {
      console.log(`The ${item} has been removed.`);
    },
  }));
}
