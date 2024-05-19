type Messages = typeof import('./src/shared/messages/en.json');
type RuMessages = typeof import('./src/shared/messages/ru.json');

declare interface IntlMessages extends Messages, RuMessages {}

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: unknown;
  export default content;
}
