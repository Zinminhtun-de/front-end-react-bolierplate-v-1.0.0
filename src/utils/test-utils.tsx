/* eslint-disable import/no-extraneous-dependencies */
import { cleanup } from '@testing-library/react';
import React from 'react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// function customRender(ui: React.ReactElement, options = {}) {
//   return render(ui, {
//     // wrap provider(s) here if needed
//     wrapper: ({ children }: { children?: ReactNode }) => children,
//     ...options,
//   });
// }
interface PropsI {
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const CustomRender: React.FC<PropsI> = ({ children }) => {
  return <div>{children}</div>;
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export default CustomRender;
