import { ReactNode } from 'react';
import { configureStore } from 'src/store';

export interface ProvidersProps {
  children: ReactNode;
  store: ReturnType<typeof configureStore>;
}
